import { useMemo, useState } from 'react';
import type { Actor, ActorId, ChainStep, Check, Choice, Dim } from '../content/types';
import { DIMS } from '../content/types';
import { misById } from '../content/training';
import { record, resolveMisconception, type Src } from '../store';
import { Formula, Rich } from './text';
import { TextAnswer } from './TeachBack';
import { ArrowDown, Erase } from './icons';

/** Deterministic shuffle (stable across renders for a given seed). */
export function shuffled<X>(xs: X[], seed: string): X[] {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const parseNum = (s: string) => Number(s.replace(/\s/g, '').replace(',', '.').replace('−', '-'));

// ——— WhyChain (Why mode / WhyButton): each click goes one causal layer deeper

export function WhyChain({ layers, label = 'Pourquoi ?', start = 0 }: { layers: string[]; label?: string; start?: number }) {
  const [n, setN] = useState(start);
  return (
    <div className="why">
      {layers.slice(0, n).map((l, i) => (
        <div key={i} className="why-layer" style={{ ['--depth' as string]: i }}>
          <span className="why-depth">{i + 1}</span>
          <p><Rich text={l} /></p>
        </div>
      ))}
      {n < layers.length ? (
        <button type="button" className="why-btn" onClick={() => setN(n + 1)}>
          <ArrowDown size={14} />
          {n === 0 ? label : 'Pourquoi ? Un niveau plus profond'}
        </button>
      ) : (
        <p className="why-end muted small">
          Fond atteint : en dessous, ce sont les hypothèses du modèle.{' '}
          <button type="button" className="link" onClick={() => setN(0)}>Replier</button>
        </p>
      )}
    </div>
  );
}

// ——— ActorMap

export function ActorMap({ actors, seen, focus = [] }: { actors: Record<ActorId, Actor>; seen: Partial<Record<ActorId, string>>; focus?: ActorId[] }) {
  return (
    <div className="actors">
      {(Object.keys(actors) as ActorId[]).map((id) => {
        const a = actors[id];
        return (
          <div key={id} className={`actor ${focus.includes(id) ? 'actor-focus' : ''}`} style={{ ['--tone' as string]: a.color }} title={`${a.name} : ${a.role}`}>
            <span className="actor-badge" aria-hidden>{a.short}</span>
            <b>{a.name}</b>
            {seen[id] ? <span className="actor-sees"><Rich text={seen[id]!} /></span> : <span className="actor-role">{a.role}</span>}
          </div>
        );
      })}
    </div>
  );
}

// ——— CausalChain

export function CausalChain({ steps }: { steps: ChainStep[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ol className="chain">
      {steps.map((s, i) => (
        <li key={i}>
          <button type="button" className={`chain-step ${open === i ? 'open' : ''}`} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <Rich text={s.text} />
          </button>
          {open === i && <p className="chain-because"><span className="muted">parce que </span><Rich text={s.because} /></p>}
          {i < steps.length - 1 && <span className="chain-arrow"><ArrowDown size={14} /></span>}
        </li>
      ))}
    </ol>
  );
}

// ——— FormulaReveal: the equation appears only after the student reasons their way to it

export function FormulaReveal({ q, options, formula, after, onDone, done, seed, tags, src }: {
  q: string; options: Choice[]; formula: string; after?: string; onDone: () => void; done: boolean; seed: string; tags: string[]; src: Src;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const [tries, setTries] = useState(0);
  const opts = useMemo(() => shuffled(options, seed), [options, seed]);
  const choose = (i: number) => {
    if (done) return;
    const o = opts[i];
    setPicked(i);
    record({ tags, dim: 'formula', ok: !!o.correct, src, item: seed, mis: o.correct ? undefined : o.mis, assisted: tries > 0 });
    setTries(tries + 1);
    if (o.correct) onDone();
  };
  return (
    <div className="reveal">
      <p className="reveal-q"><Rich text={q} /></p>
      {!done && (
        <div className="options">
          {opts.map((o, i) => (
            <button key={i} type="button" className={`option ${picked === i ? (o.correct ? 'right' : 'wrong') : ''}`} onClick={() => choose(i)}>
              <Rich text={o.text} />
            </button>
          ))}
        </div>
      )}
      {picked !== null && !opts[picked].correct && !done && <p className="feedback bad" role="status"><Rich text={opts[picked].feedback} /></p>}
      {done && (
        <div className="reveal-reward">
          <Formula f={formula} block />
          {after && <p className="muted small"><Rich text={after} /></p>}
        </div>
      )}
    </div>
  );
}

// ——— Checkpoint (choice · numeric · order · build · pick · text)

export function Checkpoint({ check, onPass, onResult, src, cursor, passed }: { check: Check; onPass: () => void; onResult?: (ok: boolean) => void; src: Src; cursor?: number; passed?: boolean }) {
  const [tries, setTries] = useState(0);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(passed ? { ok: true, text: 'Déjà réussi.' } : null);
  const [val, setVal] = useState('');
  const [seq, setSeq] = useState<string[]>([]);
  const done = msg?.ok === true;
  const items = useMemo(() => (check.kind === 'order' ? shuffled(check.items, check.id) : check.kind === 'build' ? shuffled(check.tokens, check.id) : []), [check]);
  const opts = useMemo(() => (check.kind === 'choice' ? shuffled(check.options, check.id) : []), [check]);

  const grade = (ok: boolean, text: string, mis?: string) => {
    record({ tags: check.tags, dim: check.dim, ok, src, item: check.id, mis: ok ? undefined : mis, assisted: ok && tries > 0 });
    setTries(tries + 1);
    setMsg({ ok, text });
    onResult?.(ok);
    if (ok) onPass();
  };

  const explain = (base: string) => (check.explain ? `${base} ${check.explain}` : base);

  return (
    <div className={`check ${done ? 'check-done' : ''}`}>
      <p className="check-q"><Rich text={check.q} /> <span className="check-dim">{DIMS.find((d) => d.id === check.dim)?.label}</span></p>

      {check.kind === 'choice' && (
        <div className="options">
          {opts.map((o, i) => (
            <button key={i} type="button" disabled={done} className={`option ${done && o.correct ? 'right' : ''}`} onClick={() => grade(!!o.correct, o.feedback, o.mis)}>
              <Rich text={o.text} />
            </button>
          ))}
        </div>
      )}

      {check.kind === 'numeric' && (
        <form className="numrow" onSubmit={(e) => {
          e.preventDefault();
          const v = parseNum(val);
          if (!isFinite(v)) return setMsg({ ok: false, text: 'Entre un nombre.' });
          const tol = check.tol ?? Math.max(0.01, Math.abs(check.answer) * 0.005);
          if (Math.abs(v - check.answer) <= tol) return grade(true, explain('Exact.'));
          const trap = check.traps?.find((t) => Math.abs(t.value - v) <= tol);
          grade(false, trap ? trap.feedback : tries >= 1 && check.hint ? `Pas encore. Indice : ${check.hint}` : 'Pas encore — refais le raisonnement.', trap?.mis);
        }}>
          <input inputMode="decimal" value={val} disabled={done} onChange={(e) => setVal(e.target.value)} aria-label="Ta réponse" placeholder="ta réponse" />
          {check.unit && <span className="muted">{check.unit}</span>}
          <button type="submit" className="primary" disabled={done || !val.trim()}>Vérifier</button>
          {!done && tries >= 2 && <button type="button" className="ghost" onClick={() => { setMsg({ ok: true, text: `Réponse : ${check.answer}. ${check.explain ?? ''}` }); record({ tags: check.tags, dim: check.dim, ok: false, src, item: check.id }); onPass(); }}>Voir la réponse</button>}
        </form>
      )}

      {check.kind === 'pick' && (
        <div className="numrow">
          <span>Curseur : <b>Q = {cursor?.toFixed(1)}</b></span>
          <button type="button" className="primary" disabled={done} onClick={() => {
            const ok = cursor !== undefined && Math.abs(cursor - check.target) <= check.tol;
            grade(ok, ok ? explain('Exact.') : 'Pas là : cherche l’intersection des courbes concernées.');
          }}>Valider la position</button>
        </div>
      )}

      {check.kind === 'order' && (
        <div className="order">
          <div className="options">
            {items.map((it) => {
              const idx = seq.indexOf(it);
              return (
                <button key={it} type="button" disabled={done || idx >= 0} className={`option ${idx >= 0 ? 'chosen' : ''}`} onClick={() => setSeq([...seq, it])}>
                  {idx >= 0 && <span className="order-n">{idx + 1}</span>}<Rich text={it} />
                </button>
              );
            })}
          </div>
          <div className="row">
            <button type="button" className="ghost" disabled={done || !seq.length} onClick={() => { setSeq([]); setMsg(null); }}>Recommencer</button>
            <button type="button" className="primary" disabled={done || seq.length !== check.items.length} onClick={() => {
              const wrongAt = seq.findIndex((s, i) => s !== check.items[i]);
              if (wrongAt < 0) grade(true, explain('Chaîne correcte : chaque maillon cause le suivant.'));
              else { grade(false, `Le maillon n°${wrongAt + 1} n’est pas à sa place : demande-toi ce qui doit être vrai AVANT lui.`); setSeq(seq.slice(0, wrongAt)); }
            }}>Valider l’ordre</button>
          </div>
        </div>
      )}

      {check.kind === 'build' && (
        <div className="build">
          <div className="build-line"><Formula f={`${check.lhs} ${seq.join(' ')}`} /> <span className="caret" /></div>
          <div className="options tokens">
            {items.map((t) => <button key={t} type="button" className="token" disabled={done} onClick={() => setSeq([...seq, t])}>{t}</button>)}
          </div>
          <div className="row">
            <button type="button" className="ghost erase" disabled={done || !seq.length} onClick={() => setSeq(seq.slice(0, -1))} aria-label="Effacer le dernier élément"><Erase /></button>
            <button type="button" className="primary" disabled={done || !seq.length} onClick={() => {
              const ok = check.accept.some((a) => a.join(' ') === seq.join(' '));
              const trap = check.traps?.find((t) => t.seq.join(' ') === seq.join(' '));
              grade(ok, ok ? explain('Reconstruit.') : trap?.feedback ?? 'Pas encore : quels acteurs sont concernés ?', trap?.mis);
              if (!ok) setSeq([]);
            }}>Valider</button>
          </div>
        </div>
      )}

      {check.kind === 'text' && !done && (
        <TextAnswer rubric={check.rubric} model={check.model} lang={check.lang} onGraded={(ok) => grade(ok, ok ? 'Les éléments clés sont là.' : 'Compare avec la réponse modèle et retiens ce qui manquait.')} />
      )}

      {msg && <p className={`feedback ${msg.ok ? 'good' : 'bad'}`} role="status"><Rich text={msg.text} /></p>}
    </div>
  );
}

// ——— MisconceptionCard: targeted micro-lesson after the same mistake twice

export function MisconceptionCard({ id, onResolved }: { id: string; onResolved?: () => void }) {
  const m = misById(id);
  const [picked, setPicked] = useState<number | null>(null);
  const opts = useMemo(() => (m ? shuffled(m.check.options, m.id) : []), [m]);
  if (!m) return null;
  const right = picked !== null && opts[picked].correct;
  return (
    <div className="miscard">
      <h3>{m.label}</h3>
      <p className="meta">Micro-leçon · confusion repérée deux fois</p>
      <div className="contrast">
        <div><span className="contrast-term">{m.left.term}</span><p><Rich text={m.left.text} /></p></div>
        <div><span className="contrast-term">{m.right.term}</span><p><Rich text={m.right.text} /></p></div>
      </div>
      <p><Rich text={m.explain} /></p>
      <p className="check-q"><Rich text={m.check.q} /></p>
      <div className="options">
        {opts.map((o, i) => (
          <button key={i} type="button" disabled={right} className={`option ${picked === i ? (o.correct ? 'right' : 'wrong') : ''}`} onClick={() => {
            setPicked(i);
            record({ tags: [m.topic], dim: 'intuition', ok: !!o.correct, src: 'micro', item: m.id, mis: o.correct ? undefined : m.id });
            if (o.correct) { resolveMisconception(m.id); onResolved?.(); }
          }}>
            <Rich text={o.text} />
          </button>
        ))}
      </div>
      {picked !== null && <p className={`feedback ${right ? 'good' : 'bad'}`}><Rich text={opts[picked].feedback} /></p>}
      <p className="small muted">Source : {m.refs.map((r) => <Rich key={r} text={`§${r} `} />)}</p>
    </div>
  );
}

// ——— MasteryBars: seven dimensions, subtle

export function MasteryBars({ m, compact }: { m: Record<Dim, number>; compact?: boolean }) {
  return (
    <div className={`mbars ${compact ? 'mbars-compact' : ''}`}>
      {DIMS.map((d) => (
        <div key={d.id} className="mbar" title={d.hint}>
          <span className="mbar-label" style={{ fontWeight: Math.round(300 + 560 * m[d.id]) }}>{d.label}</span>
          <span className="mbar-leader" aria-hidden />
          <span className="mbar-val">{Math.round(m[d.id] * 100)} %</span>
        </div>
      ))}
    </div>
  );
}
