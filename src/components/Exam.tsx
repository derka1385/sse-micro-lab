import { useMemo, useState } from 'react';
import type { ExamPart, ExamQuestion as EQ } from '../content/types';
import { addExam, record } from '../store';
import { Rich } from './text';
import { shuffled } from './learning';
import { languageOf, normalize } from './TeachBack';
import { Check, Cross } from './icons';

type Answers = Record<string, string>; // key: partId:label (num), partId (choice index / text)
const parseNum = (s: string) => Number(s.replace(/\s/g, '').replace(',', '.').replace('−', '-'));
const tolOf = (v: number, tol?: number) => tol ?? Math.max(0.01, Math.abs(v) * 0.005);

export function ExamQuestion({ q, onDone }: { q: EQ; onDone?: () => void }) {
  const [ans, setAns] = useState<Answers>({});
  const [phase, setPhase] = useState<'answer' | 'review'>('answer');
  const [started] = useState(() => Date.now());
  const set = (k: string, v: string) => setAns({ ...ans, [k]: v });
  const choiceOpts = useMemo(() => Object.fromEntries(q.parts.filter((p) => p.kind === 'choice').map((p) => [p.id, shuffled((p as Extract<ExamPart, { kind: 'choice' }>).options, q.id + p.id)])), [q]);

  return (
    <div className="exam">
      <p className="exam-note small muted"><Rich text={q.note} /></p>
      <div className="exam-statement" lang="en">
        {q.statement.split('\n').map((l, i) => <p key={i}>{l}</p>)}
      </div>
      {phase === 'answer' ? (
        <>
          {q.parts.map((p) => (
            <div key={p.id} className="exam-part" lang="en">
              <p className="exam-prompt">{p.prompt}</p>
              {p.kind === 'num' && (
                <div className="numgrid">
                  {p.answers.map((a) => (
                    <label key={a.label}>
                      <span>{a.label} =</span>
                      <input inputMode="decimal" value={ans[`${p.id}:${a.label}`] ?? ''} onChange={(e) => set(`${p.id}:${a.label}`, e.target.value)} />
                    </label>
                  ))}
                </div>
              )}
              {p.kind === 'choice' && (
                <div className="options">
                  {choiceOpts[p.id].map((o, i) => (
                    <button key={i} type="button" className={`option ${ans[p.id] === String(i) ? 'chosen' : ''}`} onClick={() => set(p.id, String(i))}>{o.text}</button>
                  ))}
                </div>
              )}
              {p.kind === 'text' && <textarea rows={4} value={ans[p.id] ?? ''} onChange={(e) => set(p.id, e.target.value)} placeholder="Answer in English…" />}
            </div>
          ))}
          <div className="row">
            <button type="button" className="primary" onClick={() => setPhase('review')}>Rendre ma copie</button>
            <span className="muted small">Pas d’indice avant de rendre.</span>
          </div>
        </>
      ) : (
        <AnswerReview q={q} ans={ans} choiceOpts={choiceOpts} minutes={Math.round((Date.now() - started) / 60000)} onDone={onDone} />
      )}
    </div>
  );
}

function AnswerReview({ q, ans, choiceOpts, minutes, onDone }: { q: EQ; ans: Answers; choiceOpts: Record<string, { text: string; correct?: boolean; feedback: string; mis?: string }[]>; minutes: number; onDone?: () => void }) {
  const textParts = q.parts.filter((p) => p.kind === 'text') as Extract<ExamPart, { kind: 'text' }>[];
  const [ticks, setTicks] = useState<Record<string, boolean[]>>(() =>
    Object.fromEntries(textParts.map((p) => {
      const t = ans[p.id] ?? '';
      const n = normalize(t);
      return [p.id, p.rubric.map((r) => r.patterns.some((re) => new RegExp(re.source).test(n)))];
    })),
  );
  const [self, setSelf] = useState({ model: false, logic: false, calc: false, lang: false });
  const [saved, setSaved] = useState(false);

  const numResults = q.parts.flatMap((p) => p.kind === 'num' ? p.answers.map((a) => {
    const v = parseNum(ans[`${p.id}:${a.label}`] ?? '');
    return { part: p, a, given: ans[`${p.id}:${a.label}`] ?? '', ok: isFinite(v) && (ans[`${p.id}:${a.label}`] ?? '').trim() !== '' && Math.abs(v - a.value) <= tolOf(a.value, a.tol) };
  }) : []);
  const choiceResults = q.parts.flatMap((p) => p.kind === 'choice' ? [{ part: p, picked: ans[p.id] !== undefined ? choiceOpts[p.id][Number(ans[p.id])] : undefined }] : []);
  const langIssues = textParts.filter((p) => (ans[p.id] ?? '').trim() && languageOf(ans[p.id] ?? '') === 'fr').length;
  const missingLogic = textParts.reduce((s, p) => s + ticks[p.id].filter((x) => !x).length, 0);
  const mistakes = {
    model: choiceResults.filter((c) => !c.picked?.correct).length + (self.model ? 1 : 0),
    logic: missingLogic + (self.logic ? 1 : 0),
    calc: numResults.filter((r) => !r.ok).length + (self.calc ? 1 : 0),
    lang: langIssues + (self.lang ? 1 : 0),
  };
  const score = numResults.filter((r) => r.ok).length + choiceResults.filter((c) => c.picked?.correct).length + textParts.reduce((s, p) => s + ticks[p.id].filter(Boolean).length, 0);
  const max = numResults.length + choiceResults.length + textParts.reduce((s, p) => s + p.rubric.length, 0);

  const save = () => {
    numResults.forEach((r) => record({ tags: r.part.tags, dim: 'calculation', ok: r.ok, src: 'exam', item: `${q.id}:${r.part.id}:${r.a.label}` }));
    choiceResults.forEach((c) => record({ tags: c.part.tags, dim: 'recognition', ok: !!c.picked?.correct, src: 'exam', item: `${q.id}:${c.part.id}`, mis: c.picked?.correct ? undefined : c.picked?.mis }));
    textParts.forEach((p) => {
      const t = ticks[p.id];
      const ok = t.filter(Boolean).length >= Math.ceil(t.length * 0.75) && languageOf(ans[p.id] ?? '') !== 'fr';
      record({ tags: p.tags, dim: 'english', ok, src: 'exam', item: `${q.id}:${p.id}` });
    });
    addExam({ id: q.id, t: Date.now(), score, max, mistakes });
    setSaved(true);
    onDone?.();
  };

  return (
    <div className="review">
      <div className="review-score">
        <b>{score} / {max}</b> <span className="muted">· {minutes} min</span>
        <div className="mistake-chips">
          <span className={`mchip ${mistakes.model ? 'on' : ''}`}>Modèle {mistakes.model}</span>
          <span className={`mchip ${mistakes.logic ? 'on' : ''}`}>Logique {mistakes.logic}</span>
          <span className={`mchip ${mistakes.calc ? 'on' : ''}`}>Calcul {mistakes.calc}</span>
          <span className={`mchip ${mistakes.lang ? 'on' : ''}`}>Langue {mistakes.lang}</span>
        </div>
      </div>

      {q.parts.map((p) => (
        <div key={p.id} className="exam-part" lang="en">
          <p className="exam-prompt">{p.prompt}</p>
          {p.kind === 'num' && (
            <ul className="numres">
              {numResults.filter((r) => r.part === p).map((r) => (
                <li key={r.a.label} className={r.ok ? 'good' : 'bad'}>{r.ok ? <Check label="juste" /> : <Cross label="faux" />} {r.a.label} = {r.given || '—'} {!r.ok && <span className="muted">(attendu : {r.a.value})</span>}</li>
              ))}
              <li className="muted small" lang="fr"><Rich text={p.explain} /></li>
            </ul>
          )}
          {p.kind === 'choice' && (() => {
            const c = choiceResults.find((x) => x.part === p)!;
            return <p className={`feedback ${c.picked?.correct ? 'good' : 'bad'}`}>{c.picked ? `${c.picked.text} — ${c.picked.feedback}` : 'Pas de réponse.'}</p>;
          })()}
          {p.kind === 'text' && (
            <div className="rubric">
              <blockquote className="mine">{ans[p.id]?.trim() || '— (pas de réponse)'}</blockquote>
              {(ans[p.id] ?? '').trim() && languageOf(ans[p.id] ?? '') === 'fr' && <p className="feedback bad" lang="fr">Langue : réponse en français — à l’examen, réponds en anglais.</p>}
              {p.rubric.map((r, i) => (
                <label key={r.id} className="tick">
                  <input type="checkbox" checked={ticks[p.id][i]} disabled={saved} onChange={() => setTicks({ ...ticks, [p.id]: ticks[p.id].map((x, j) => (j === i ? !x : x)) })} />
                  {r.label}
                </label>
              ))}
              <blockquote className="model">{p.model}</blockquote>
            </div>
          )}
        </div>
      ))}

      <section className="review-block" lang="fr">
        <h4>Logique économique</h4>
        <ul>{q.logic.map((l, i) => <li key={i}><Rich text={l} /></li>)}</ul>
        <h4>Calcul</h4>
        <ol>{q.calc.map((l, i) => <li key={i}><Rich text={l} /></li>)}</ol>
        <h4>Ce que le graphique doit montrer</h4>
        <ul>{q.graph.map((l, i) => <li key={i}><Rich text={l} /></li>)}</ul>
        <h4>Réponse modèle (EN)</h4>
        <blockquote className="model" lang="en">{q.modelAnswer}</blockquote>
      </section>

      {!saved ? (
        <section className="review-block" lang="fr">
          <h4>Ton auto-diagnostic</h4>
          <label className="tick"><input type="checkbox" checked={self.model} onChange={() => setSelf({ ...self, model: !self.model })} /> Je n’avais pas reconnu le bon modèle</label>
          <label className="tick"><input type="checkbox" checked={self.logic} onChange={() => setSelf({ ...self, logic: !self.logic })} /> Mon raisonnement sautait un maillon</label>
          <label className="tick"><input type="checkbox" checked={self.calc} onChange={() => setSelf({ ...self, calc: !self.calc })} /> Erreur de calcul ou de lecture</label>
          <label className="tick"><input type="checkbox" checked={self.lang} onChange={() => setSelf({ ...self, lang: !self.lang })} /> Formulation anglaise à améliorer</label>
          <button type="button" className="primary" onClick={save}>Enregistrer la copie</button>
        </section>
      ) : (
        <p className="feedback good" lang="fr">Copie enregistrée : les erreurs de calcul, de modèle et de langue alimentent ta maîtrise et tes micro-leçons.</p>
      )}
    </div>
  );
}
