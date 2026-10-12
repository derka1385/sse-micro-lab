import { useEffect, useMemo, useRef, useState } from 'react';
import { TOPICS } from '../content/catalog';
import { exam, LESSONS, WHY } from '../content/externalities';
import { PAIRS, SCENARIOS } from '../content/training';
import type { ActorId, El, Lesson } from '../content/types';
import { MODELS, fmt } from '../econ';
import { AxisSlider, GraphInspector, InteractiveEconGraph, PolicyControl, UnitStrip, type Sel } from '../components/graph';
import { ActorMap, CausalChain, Checkpoint, FormulaReveal, MasteryBars, MisconceptionCard, WhyChain } from '../components/learning';
import { TeachBack } from '../components/TeachBack';
import { ExamQuestion } from '../components/Exam';
import { Abbr, DecodeCard, ProvTags, Rich, SourceRef } from '../components/text';
import { ArrowLeft, ArrowRight } from '../components/icons';
import { activeMisconceptions, familiarity, finishLesson, lessonState, markSeen, mastery, passCheck, setConfidence, setLessonBlock, useProgress } from '../store';

export function Learn() {
  const p = useProgress();
  return (
    <div className="page">
      <header className="page-head">
        <h1>Leçons guidées</h1>
        <p className="lead">Une leçon = un mécanisme, découpé en blocs d’une seule idée. On part d’une situation et de ses acteurs ; le nom, le sigle et la formule viennent après.</p>
      </header>
      <div className="lesson-list">
        {TOPICS.map((t) => {
          const l = t.lesson ? LESSONS[t.lesson] : null;
          const s = l ? lessonState(p, l.id) : null;
          const nRec = SCENARIOS.filter((x) => x.topic === t.id).length;
          const nPairs = PAIRS.filter((x) => x.topic === t.id).length;
          return (
            <article key={t.id} className={`lesson-card ${l ? 'has-lesson' : ''}`}>
              <h3>{t.title}</h3>
              <p className="meta">{t.lecture} · {t.en}</p>
              {l ? (
                <>
                  <p className="small">{l.teaser}</p>
                  <a className="button primary" href={`#/lesson/${l.id}`}>
                    {!s?.startedAt ? 'Commencer' : s.finishedAt ? 'Revoir' : `Continuer · bloc ${s.block + 1}/${l.blocks.length}`}
                    <ArrowRight />
                  </a>
                </>
              ) : (
                <p className="small muted">Leçon guidée pas encore construite. Déjà disponible : la source{nRec ? `, ${nRec} scénario(s) de reconnaissance` : ''}{nPairs ? `, ${nPairs} paire(s) de confusions` : ''}.</p>
              )}
              <p className="small">{t.refs.map((r) => <SourceRef key={r} r={r} />)}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function LessonView({ id }: { id: string }) {
  const lesson = LESSONS[id];
  const p = useProgress();
  const ls = lessonState(p, id);
  const [idx, setIdx] = useState(() => (lesson ? Math.min(ls.block, lesson.blocks.length - 1) : 0));
  if (!lesson) return <div className="page"><p>Leçon introuvable. <a href="#/learn">Retour</a></p></div>;
  const go = (i: number) => {
    setIdx(i);
    setLessonBlock(id, i);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="page lesson">
      <header className="lesson-head">
        <a href="#/learn" className="back"><ArrowLeft size={14} /> Leçons</a>
        <h1>{lesson.title}</h1>
        <p className="meta">Mécanisme du jour : {lesson.mechanism}</p>
        <div className="dots" role="navigation" aria-label="Blocs de la leçon">
          {lesson.blocks.map((b, i) => (
            <button key={b.id} type="button" className={`dot ${i === idx ? 'on' : ''} ${i <= ls.block ? 'reached' : ''}`} disabled={i > Math.max(ls.block, idx)} onClick={() => go(i)} title={`${i + 1}. ${b.title}`} aria-label={`Bloc ${i + 1} : ${b.title}`} aria-current={i === idx ? 'step' : undefined}>
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </header>
      <BlockView key={idx} lesson={lesson} idx={idx} onNext={() => go(Math.min(idx + 1, lesson.blocks.length - 1))} onPrev={() => go(Math.max(0, idx - 1))} />
    </div>
  );
}

const ACCEPTANCE: [string, string][] = [
  ['[[MPB]] = la valeur, pour l’acheteur, d’une unité de plus.', 'c:MPB'],
  ['[[MPC]] = le coût privé de production d’une unité de plus.', 'c:MPC'],
  ['[[Qm]] est là où les incitations privées s’équilibrent : MPB = MPC.', 'f:market'],
  ['[[MEB]] = la valeur, pour les tiers, de l’effet positif d’une unité de plus.', 'c:MEB'],
  ['{{MSB = MPB + MEB}}', 'f:msb'],
  ['[[MSB]] n’est PAS l’argent du gouvernement.', 'c:MSB'],
  ['[[Q*]] est la quantité efficace : MSB = MSC.', 'f:opt'],
  ['Avec une externalité positive, Qm < Q*.', 'r:qs'],
  ['Les unités manquantes créent une [[DWL]] : leur bénéfice social dépasse leur coût social.', 'a:dwl-under'],
  ['Une subvention pigouvienne aligne l’incitation privée sur l’optimum social.', 'c:POL+'],
  ['MEB constant = 20 ⇒ subvention optimale = 20.', 'r:s'],
  ['Si MEB dépend de Q, on l’évalue à Q*, pas à l’intercept.', 'f:pigou'],
];

function Finish({ lesson }: { lesson: Lesson }) {
  const p = useProgress();
  const m = mastery(p, [lesson.node]);
  const conf = p.confidence[lesson.node] ?? 0;
  return (
    <div className="finish">
      <h3>Ce que tu dois pouvoir expliquer — et pourquoi</h3>
      <ul className="accept">
        {ACCEPTANCE.map(([s, w]) => (
          <li key={w}>
            <Rich text={s} />
            {WHY[w] && <WhyChain layers={WHY[w].layers} label="Pourquoi ?" />}
          </li>
        ))}
      </ul>
      <h3>Maîtrise mesurée aujourd’hui</h3>
      <MasteryBars m={m} />
      <div className="confidence">
        <span>Ta confiance sur ce mécanisme :</span>
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" className={`conf ${conf === n ? 'on' : ''}`} onClick={() => setConfidence(lesson.node, n)} aria-label={`Confiance ${n} sur 5`}>{n}</button>
        ))}
      </div>
      <div className="row wrap">
        <a className="button primary" href="#/recall">Premier rappel espacé</a>
        <a className="button" href="#/lab/gasoline">Graph Lab : le cas négatif</a>
        <a className="button" href="#/practice">Pratique</a>
        <a className="button" href="#/exam">Mode examen</a>
      </div>
    </div>
  );
}

function BlockView({ lesson, idx, onNext, onPrev }: { lesson: Lesson; idx: number; onNext: () => void; onPrev: () => void }) {
  const block = lesson.blocks[idx];
  const prev = lesson.blocks[idx - 1];
  const p = useProgress();
  const ls = lessonState(p, lesson.id);
  const preset = block.graph.preset ?? 'solar';
  const model = MODELS[preset];
  const fresh = useMemo<El[]>(
    () => (!prev || (prev.graph.preset ?? 'solar') !== preset ? block.graph.show : block.graph.show.filter((e) => !prev.graph.show.includes(e))),
    [block, prev, preset],
  );
  const checks = block.checks ?? [];
  const revealId = `${block.id}:reveal`;
  const revealDone = !block.reveal || ls.passed.includes(revealId);
  const nextCheck = checks.findIndex((c) => !ls.passed.includes(c.id));
  const gated = !!block.reveal || checks.length > 0;
  const [cursor, setCursor] = useState(block.graph.cursor ?? 10);
  const [policy, setPolicy] = useState(block.graph.policy ?? 0);
  const [sel, setSel] = useState<Sel>(null);
  const [focus, setFocus] = useState<El | undefined>(block.graph.focus);
  const [level, setLevel] = useState<'human' | 'economist' | 'exam'>('human');
  const [open, setOpen] = useState({ why: false, ex: false, me: false, graph: false });
  const [understood, setUnderstood] = useState(block.special === 'chain' || (revealDone && nextCheck === -1 && gated));
  const graphRef = useRef<HTMLElement>(null);

  useEffect(() => { if (block.decode) markSeen(block.decode.map((k) => `abbr:${k}`)); }, [block]);
  useEffect(() => { if (block.special === 'finish') finishLesson(lesson.id); }, [block, lesson.id]);
  useEffect(() => {
    if (!focus) return;
    const t = setTimeout(() => setFocus(undefined), 3600);
    return () => clearTimeout(t);
  }, [focus]);

  const seenActors = useMemo(() => {
    const acc: Partial<Record<ActorId, string>> = {};
    lesson.blocks.slice(0, idx + 1).forEach((b) => Object.assign(acc, b.actors ?? {}));
    return acc;
  }, [lesson, idx]);

  const misIds = useMemo(() => {
    const ids = new Set<string>();
    block.reveal?.options.forEach((o) => o.mis && ids.add(o.mis));
    checks.forEach((c) => {
      if (c.kind === 'choice') c.options.forEach((o) => o.mis && ids.add(o.mis));
      if (c.kind === 'numeric') c.traps?.forEach((t) => t.mis && ids.add(t.mis));
      if (c.kind === 'build') c.traps?.forEach((t) => t.mis && ids.add(t.mis));
    });
    return ids;
  }, [block, checks]);
  const active = activeMisconceptions(p).filter((m) => misIds.has(m));

  const text = level === 'human' ? block.human : level === 'economist' ? block.economist ?? block.human : block.exam ?? block.human;
  const canNext = block.special ? true : !gated || (understood && revealDone && nextCheck === -1);
  const last = idx === lesson.blocks.length - 1;
  const toggle = (k: keyof typeof open) => setOpen({ ...open, [k]: !open[k] });
  const showOnGraph = () => {
    setFocus(block.graph.focus ?? block.graph.show[block.graph.show.length - 1]);
    setOpen({ ...open, graph: true });
    if (window.innerWidth < 1024) graphRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="lesson-grid">
      <section className="lesson-text">
        <article className="block-card">
          <div className="block-top">
            <h2>{block.title}</h2>
          </div>

          {(block.economist || block.exam) && (
            <div className="seg" role="tablist" aria-label="Niveau d’explication">
              <button role="tab" aria-selected={level === 'human'} className={level === 'human' ? 'on' : ''} onClick={() => setLevel('human')}>Humain</button>
              {block.economist && <button role="tab" aria-selected={level === 'economist'} className={level === 'economist' ? 'on' : ''} onClick={() => setLevel('economist')}>Économiste</button>}
              {block.exam && <button role="tab" aria-selected={level === 'exam'} className={level === 'exam' ? 'on' : ''} onClick={() => setLevel('exam')}>Examen (EN)</button>}
            </div>
          )}

          <p className="block-text" lang={level === 'exam' && block.exam ? 'en' : 'fr'}><Rich text={text} /></p>

          {block.decode?.map((k) => (familiarity(p, `abbr:${k}`) >= 2
            ? <p key={k} className="small muted">Sigle déjà maîtrisé : <Abbr k={k} /> (clique pour revoir la fiche).</p>
            : <DecodeCard key={k} k={k} />))}

          {block.callout && (
            <aside className={`callout callout-${block.callout.kind}`}>
              <b>{block.callout.title}</b>
              <p><Rich text={block.callout.text} /></p>
            </aside>
          )}

          <div className="actions" role="group" aria-label="Approfondir">
            <button type="button" className={`act ${open.why ? 'on' : ''}`} onClick={() => toggle('why')}>Pourquoi ?</button>
            <button type="button" className={`act ${open.ex ? 'on' : ''}`} onClick={() => toggle('ex')}>Exemple concret</button>
            <button type="button" className={`act ${open.me ? 'on' : ''}`} onClick={() => toggle('me')}>Si c’était moi ?</button>
            <button type="button" className={`act ${open.graph ? 'on' : ''}`} onClick={showOnGraph}>Montre-le sur le graphe</button>
          </div>
          {open.why && <div className="panel" data-label="Pourquoi"><WhyChain layers={block.why} start={1} /></div>}
          {open.ex && <div className="panel" data-label="Exemple concret"><Rich text={block.example} /></div>}
          {open.me && <div className="panel" data-label="Si c’était toi"><Rich text={block.me} /></div>}

          {block.special === 'chain' && <CausalChain steps={lesson.chain} />}
          {block.special === 'teachback' && <TeachBack rubric={lesson.teach} lessonId={lesson.id} tags={[lesson.node]} />}
          {block.special === 'exam' && <ExamQuestion q={exam(lesson.examId)} />}
          {block.special === 'finish' && <Finish lesson={lesson} />}

          {gated && !understood && (
            <button type="button" className="primary big" onClick={() => setUnderstood(true)}>J’ai compris, vérifier <ArrowRight /></button>
          )}

          {understood && block.reveal && (
            <FormulaReveal
              q={block.reveal.q}
              options={block.reveal.options}
              formula={block.reveal.formula}
              after={block.reveal.after}
              done={revealDone}
              onDone={() => passCheck(lesson.id, revealId)}
              seed={revealId}
              tags={block.reveal.tags}
              src="lesson"
            />
          )}

          {understood && revealDone && checks.map((c, i) => (nextCheck === -1 || i <= nextCheck) && (
            <Checkpoint key={c.id} check={c} src="lesson" cursor={cursor} passed={ls.passed.includes(c.id)} onPass={() => passCheck(lesson.id, c.id)} />
          ))}

          {active.map((m) => <MisconceptionCard key={m} id={m} />)}

          {block.result && gated && (
            // Outline until earned, then it fills and thickens: the result is the reward of the reasoning.
            <figure className={`specimen ${canNext ? 'earned' : 'pending'}`} aria-label={canNext ? `${block.result[0]} : ${block.result[1]}` : 'Résultat à gagner en répondant'}>
              <span className="specimen-value">{canNext ? block.result[1] : '?'}</span>
              <figcaption className="specimen-read">{canNext ? block.result[0] : 'À gagner : réponds aux questions'}</figcaption>
            </figure>
          )}

          <div className="block-nav">
            <button type="button" className="ghost" onClick={onPrev} disabled={idx === 0}><ArrowLeft /> Précédent</button>
            {!last && (
              <button type="button" className="primary" onClick={onNext} disabled={!canNext}>
                {canNext ? <>Bloc suivant <ArrowRight /></> : 'Réponds pour continuer'}
              </button>
            )}
          </div>
          <ProvTags prov={block.prov} />
        </article>
      </section>

      <section className="lesson-graph" ref={graphRef}>
        <ActorMap actors={lesson.actors} seen={seenActors} focus={block.focusActors} />
        <div className="graph-card">
          {open.graph && <p className="graph-note"><Rich text={block.graphNote} /></p>}
          <InteractiveEconGraph model={model} show={block.graph.show} focus={focus} policy={policy} cursor={cursor} onCursor={setCursor} selected={sel} onSelect={setSel} fresh={fresh} animKey={block.id} />
          {block.graph.show.includes('QM') && (
            <UnitStrip model={model} show={block.graph.show} policy={policy} cursor={cursor} onPick={(q) => { setCursor(q); setSel({ kind: 'unit', q }); }} />
          )}
          <GraphInspector model={model} show={block.graph.show} policy={policy} cursor={cursor} selected={sel} onClear={() => setSel(null)} />
          <AxisSlider label="Curseur" display={`Q = ${fmt(cursor, 1)}`} value={cursor} min={0} max={model.qMax} step={0.5} onChange={setCursor} />
          {block.graph.policyControl && <PolicyControl model={model} policy={policy} setPolicy={setPolicy} allowOptimal={canNext} />}
        </div>
      </section>
    </div>
  );
}
