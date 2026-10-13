import { useMemo, useState } from 'react';
import { generateProblem, PROBLEMS } from '../content/externalities';
import type { Check, El, Problem } from '../content/types';
import { MODELS, type ExtModel } from '../econ';
import { GraphInspector, InteractiveEconGraph, UnitStrip, type Sel } from '../components/graph';
import { Checkpoint } from '../components/learning';
import { ProvTags, Rich } from '../components/text';
import { useProgress } from '../store';
import { ArrowLeft, Check as CheckIcon } from '../components/icons';
import { t } from '../i18n';

export function Practice({ id }: { id?: string }) {
  const p = useProgress();
  const [gen, setGen] = useState<{ problem: Problem; model: ExtModel } | null>(null);
  const fixed = PROBLEMS.find((x) => x.id === id);
  const current = gen && id === gen.problem.id ? gen : fixed ? { problem: fixed, model: MODELS[fixed.preset ?? 'solar'] } : null;

  const newGen = (kind: 'positive' | 'negative') => {
    const g = generateProblem(kind, Date.now() % 1_000_000);
    setGen(g);
    window.location.hash = `#/practice/${g.problem.id}`;
  };

  if (current) return <ProblemRunner key={current.problem.id} problem={current.problem} model={current.model} onNew={newGen} />;

  const solved = (pr: Problem) => pr.steps.every((s) => p.attempts.some((a) => a.ok && a.item === `${pr.id}:${s.id}`));
  return (
    <div className="page">
      <header className="page-head">
        <h1>{t('Petits problèmes, un concept à la fois')}</h1>
        <p className="lead">{t('Chaque étape débloque un élément du graphique. Les erreurs typiques (oublier le ½, évaluer la taxe au mauvais point…) sont reconnues et expliquées.')}</p>
      </header>
      <div className="lesson-list">
        {PROBLEMS.map((pr) => (
          <a key={pr.id} href={`#/practice/${pr.id}`} className="lesson-card link-card">
            <h3>{pr.title}</h3>
            <p className="meta">{t('{n} étapes', { n: pr.steps.length })}{solved(pr) && <span className="status"> · <CheckIcon size={13} /> {t('résolu')}</span>}</p>
            <p className="small"><Rich text={pr.context} /></p>
          </a>
        ))}
        <div className="lesson-card">
          <h3>{t('Nouveaux chiffres, même mécanisme')}</h3>
          <p className="meta">{t('Générateur')}</p>
          <p className="small muted">{t('Exercices construits (non tirés du cours), réponses entières.')}</p>
          <div className="gen-row">
            <button type="button" className="primary" onClick={() => newGen('positive')}>{t('Externalité positive')}</button>
            <button type="button" className="ghost" onClick={() => newGen('negative')}>{t('Externalité négative')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemRunner({ problem, model, onNew }: { problem: Problem; model: ExtModel; onNew: (k: 'positive' | 'negative') => void }) {
  const [done, setDone] = useState<string[]>([]);
  const [cursor, setCursor] = useState(Math.round(model.qMax / 2));
  const [sel, setSel] = useState<Sel>(null);
  const show = useMemo<El[]>(() => [...(problem.show ?? ['MPB', 'MPC']), ...problem.steps.filter((s) => done.includes(s.id)).flatMap((s) => s.reveal ?? [])], [problem, done]);
  const policy = problem.steps.reduce((v, s) => (done.includes(s.id) && s.policy !== undefined ? s.policy : v), 0);
  const next = problem.steps.findIndex((s) => !done.includes(s.id));
  const checks: Check[] = problem.steps.map((s) => ({ kind: 'numeric', id: `${problem.id}:${s.id}`, q: s.q, answer: s.answer, tol: s.tol, unit: s.unit, dim: s.dim, tags: s.tags, explain: s.explain, traps: s.traps }));
  return (
    <div className="page">
      <a href="#/practice" className="back"><ArrowLeft size={14} /> {t('Pratique')}</a>
      <header className="page-head">
        <h1>{problem.title}</h1>
        <p className="lead"><Rich text={problem.context} /></p>
        <ProvTags prov={[{ kind: problem.prov, ref: problem.ref }]} />
      </header>
      <div className="lesson-grid">
        <section className="lesson-text">
          <article className="block-card">
            {checks.map((c, i) => (next === -1 || i <= next) && (
              <Checkpoint key={c.id} check={c} src="practice" onPass={() => setDone((d) => [...d, problem.steps[i].id])} />
            ))}
            {next === -1 && (
              <div className="finish">
                <p className="feedback good">{t('Problème terminé. Refais-le demain sans regarder : c’est la deuxième réussite qui compte.')}</p>
                <div className="row wrap">
                  <button type="button" className="primary" onClick={() => onNew(model.kind)}>{t('Un autre (nouveaux chiffres)')}</button>
                  <a className="button" href="#/exam">{t('Version examen')}</a>
                </div>
              </div>
            )}
          </article>
        </section>
        <section className="lesson-graph">
          <div className="graph-card">
            <InteractiveEconGraph model={model} show={show} policy={policy} cursor={cursor} onCursor={setCursor} selected={sel} onSelect={setSel} />
            {show.includes('QM') && <UnitStrip model={model} show={show} policy={policy} cursor={cursor} onPick={(q) => { setCursor(q); setSel({ kind: 'unit', q }); }} />}
            <GraphInspector model={model} show={show} policy={policy} cursor={cursor} selected={sel} onClear={() => setSel(null)} />
          </div>
        </section>
      </div>
    </div>
  );
}
