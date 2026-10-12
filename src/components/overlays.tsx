import { useEffect, useRef, useState, type ReactNode } from 'react';
import { CONCEPTS, FORMULAS, WHY } from '../content/externalities';
import { SOLAR_LESSON } from '../content/externalities';
import { misById } from '../content/training';
import { abbrEntry, decode, DOSSIER, resolve } from '../dossier';
import { closeOverlay, openOverlay, useOverlay } from '../store';
import { WhyChain } from './learning';
import { DecodeCard, Formula, Rich, SourceRef } from './text';
import { ArrowRight, Cross } from './icons';

function Drawer({ title, children }: { title: string; children: ReactNode }) {
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    close.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeOverlay(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [title]);
  return (
    <div className="drawer-root">
      <div className="backdrop" onClick={closeOverlay} />
      <aside className="drawer" role="dialog" aria-modal="true" aria-label={title}>
        <header className="drawer-head">
          <h3>{title}</h3>
          <button ref={close} type="button" className="icon-btn" onClick={closeOverlay} aria-label="Fermer"><Cross size={14} /></button>
        </header>
        <div className="drawer-body">{children}</div>
      </aside>
    </div>
  );
}

function SourceText({ refId }: { refId: string }) {
  const r = resolve(refId);
  const hlRef = useRef<HTMLDivElement>(null);
  useEffect(() => { hlRef.current?.scrollIntoView({ block: 'center' }); }, [refId]);
  if (!r) return <p className="muted">Référence introuvable dans le dossier : {refId}</p>;
  const lines = DOSSIER.lines.slice(r.start, r.end);
  const hl = r.hl;
  return (
    <div className="source-text">
      {lines.map((l, i) => {
        const n = r.start + i;
        const on = hl && n >= hl[0] && n < hl[1];
        return (
          <div key={n} ref={on && n === hl![0] ? hlRef : undefined} className={`sline ${on ? 'hl' : ''}`}>
            <span className="lno">{n + 1}</span>
            <span>{l || ' '}</span>
          </div>
        );
      })}
    </div>
  );
}

function Levels({ levels }: { levels: { human: string; economist: string; exam: string } }) {
  const [lv, setLv] = useState<'human' | 'economist' | 'exam'>('human');
  return (
    <div>
      <div className="seg" role="tablist">
        {(['human', 'economist', 'exam'] as const).map((k) => (
          <button key={k} role="tab" aria-selected={lv === k} className={lv === k ? 'on' : ''} onClick={() => setLv(k)}>
            {k === 'human' ? 'Humain' : k === 'economist' ? 'Économiste' : 'Examen (EN)'}
          </button>
        ))}
      </div>
      <p className="level-text" lang={lv === 'exam' ? 'en' : 'fr'}><Rich text={levels[lv]} /></p>
    </div>
  );
}

const List = ({ title, items }: { title: string; items: string[] }) =>
  items.length ? (<><h4>{title}</h4><ul>{items.map((x, i) => <li key={i}><Rich text={x} /></li>)}</ul></>) : null;

export function OverlayHost() {
  const o = useOverlay();
  if (!o) return null;

  if (o.kind === 'abbr') {
    const g = decode(o.key);
    const raw = abbrEntry(o.key);
    return (
      <Drawer title={o.key}>
        {g ? <DecodeCard k={o.key} /> : <p>Sigle inconnu du dossier.</p>}
        {raw && (
          <p className="small muted">
            Dans le répertoire du dossier : <i>{raw.names.join(', ')}</i> [{raw.tag}] — {raw.english} {raw.english && '—'} {raw.french} <SourceRef r={`18:${o.key}`} />
            <br />[O] observé dans les PDF · [A] alias standard · [C] complément ajouté (§18)
          </p>
        )}
        {g?.concept && CONCEPTS[g.concept] && (
          <button type="button" className="primary" onClick={() => openOverlay({ kind: 'concept', id: g.concept! })}>Fiche complète du concept <ArrowRight /></button>
        )}
      </Drawer>
    );
  }

  if (o.kind === 'concept') {
    const c = CONCEPTS[o.id];
    if (!c) return null;
    return (
      <Drawer title={c.name}>
        <p className="muted">{c.englishName} · {c.frenchName}{c.abbreviation ? ` · ${c.abbreviation}` : ''}</p>
        <p><b>Littéralement :</b> <Rich text={c.literalMeaning} /></p>
        <div className="chips">{c.actors.map((a) => <span key={a} className="chip" style={{ ['--tone' as string]: SOLAR_LESSON.actors[a].color }}>{SOLAR_LESSON.actors[a].name}</span>)}</div>
        <h4>Intuition</h4>
        <p><Rich text={c.intuition} /></p>
        <h4>Trois niveaux</h4>
        <Levels levels={c.levels} />
        <h4>Chaîne causale</h4>
        <p className="causal-inline">{c.causalChain.map((s, i) => <span key={i}>{i > 0 && ' → '}<Rich text={s} /></span>)}</p>
        {c.formula && <><h4>Formule</h4>{c.formula.map((f) => <Formula key={f} f={f} block />)}</>}
        {c.units && <p><b>Unités :</b> {c.units}</p>}
        {c.graphMeaning && <p><b>Sur le graphique :</b> <Rich text={c.graphMeaning} /></p>}
        <List title="Hypothèses" items={c.assumptions} />
        <List title="Quand l’utiliser" items={c.whenToUse} />
        <List title="Quand NE PAS l’utiliser" items={c.whenNotToUse} />
        <List title="Confusions fréquentes" items={c.misconceptions.map((m) => misById(m)?.label ?? m)} />
        <List title="Exemples" items={c.examples} />
        <List title="Mots déclencheurs à l’examen" items={c.examTriggers} />
        <h4>Réponse type (EN)</h4>
        <blockquote className="model" lang="en">{c.examAnswer}</blockquote>
        <p className="small">Sources : {c.sourceRefs.map((r) => <SourceRef key={r} r={r} />)}</p>
      </Drawer>
    );
  }

  if (o.kind === 'formula') {
    const f = FORMULAS.find((x) => x.id === o.id);
    if (!f) return null;
    return (
      <Drawer title={f.title}>
        <Formula f={f.formula} block />
        <h4>D’où vient-elle ?</h4>
        <ol>{f.derivation.map((d, i) => <li key={i}><Rich text={d} /></li>)}</ol>
        <h4>Chaque terme</h4>
        <ul>{f.terms.map((t) => <li key={t.sym}><Formula f={t.sym} /> — <Rich text={t.meaning} /></li>)}</ul>
        <p><b>Unités :</b> {f.units}</p>
        <List title="Hypothèses" items={f.assumptions} />
        <List title="Quand l’utiliser" items={f.use} />
        <List title="Quand NE PAS l’utiliser" items={f.notUse} />
        <h4>Confusion fréquente</h4>
        <p><Rich text={f.confusion} /></p>
        <List title="Mots déclencheurs" items={f.triggers} />
        <p className="small">Sources : {f.refs.map((r) => <SourceRef key={r} r={r} />)}</p>
      </Drawer>
    );
  }

  if (o.kind === 'why') {
    const w = WHY[o.id];
    if (!w) return null;
    return (
      <Drawer title={w.title}>
        {w.formula && <Formula f={w.formula} block />}
        <WhyChain layers={w.layers} start={1} key={w.id} />
        <p className="small">Sources : {w.refs.map((r) => <SourceRef key={r} r={r} />)}</p>
      </Drawer>
    );
  }

  const r = resolve(o.ref);
  return (
    <Drawer title={r ? r.title : `§${o.ref}`}>
      <p className="small muted">Extrait exact du dossier (fichier source). <a href={`#/source/${encodeURIComponent(o.ref)}`} onClick={closeOverlay}>Ouvrir dans Sources</a></p>
      <SourceText refId={o.ref} />
    </Drawer>
  );
}
