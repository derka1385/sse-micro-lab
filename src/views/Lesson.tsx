import { useEffect, useMemo, useRef, useState } from 'react';
import { TOPICS } from '../content/catalog';
import { WHY } from '../content/externalities';
import { exam, finalsFor, LESSONS, lessonsForTopic } from '../content/lessons';
import type { ActorId, El, Lesson } from '../content/types';
import { MODELS, fmt } from '../econ';
import { AxisSlider, GraphInspector, InteractiveEconGraph, PolicyControl, UnitStrip, type Sel } from '../components/graph';
import { ActorMap, CausalChain, Checkpoint, FormulaReveal, MasteryBars, MisconceptionCard, WhyChain } from '../components/learning';
import { TeachBack } from '../components/TeachBack';
import { ExamQuestion } from '../components/Exam';
import { LessonDiagram } from '../components/LessonDiagram';
import { Abbr, DecodeCard, ProvTags, Rich, SourceRef } from '../components/text';
import { ArrowLeft, ArrowRight } from '../components/icons';
import { lang, t } from '../i18n';
import { activeMisconceptions, familiarity, finishLesson, lessonState, markSeen, mastery, passCheck, setConfidence, setLessonBlock, useProgress } from '../store';

export function Learn() {
  const p = useProgress();
  return (
    <div className="page">
      <header className="page-head">
        <h1>{t('Leçons guidées')}</h1>
        <p className="lead">{t('Une leçon = un mécanisme, découpé en blocs d’une seule idée. On part d’une situation et de ses acteurs ; le nom, le sigle et la formule viennent après.')}</p>
      </header>
      <div className="lesson-list">
        {TOPICS.map((topic) => {
          const available = lessonsForTopic(topic.id);
          const l = available[0];
          const s = l ? lessonState(p, l.id) : null;
          return (
            <article key={topic.id} className={`lesson-card ${l ? 'has-lesson' : ''}`}>
              <h3>{topic.title}</h3>
              <p className="meta">{topic.lecture} · {topic.en}</p>
              {l ? (
                <>
                  <p className="small">{l.teaser}</p>
                  <a className="button primary" href={`#/lesson/${l.id}`}>
                    {!s?.startedAt ? t('Commencer') : s.finishedAt ? t('Revoir') : t('Continuer · bloc {i}/{n}', { i: s.block + 1, n: l.blocks.length })}
                    <ArrowRight />
                  </a>
                  {available.slice(1).map((extra) => <p key={extra.id} className="small"><a href={`#/lesson/${extra.id}`}>{extra.mechanism} · {t('{n} blocs', { n: extra.blocks.length })}</a></p>)}
                  <p className="small muted">{t('{n} blocs · validation progressive · explication avec tes mots · examen en anglais · rappels espacés', { n: l.blocks.length })}</p>
                </>
              ) : (
                <p className="small muted">{t('Leçon guidée pas encore construite.')}</p>
              )}
              <p className="small">{topic.refs.map((r) => <SourceRef key={r} r={r} />)}</p>
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
  if (!lesson) return <div className="page"><p>{t('Leçon introuvable.')} <a href="#/learn">{t('Retour')}</a></p></div>;
  const go = (i: number) => {
    setIdx(i);
    setLessonBlock(id, i);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="page lesson">
      <header className="lesson-head">
        <a href="#/learn" className="back"><ArrowLeft size={14} /> {t('Leçons')}</a>
        <h1>{lesson.title}</h1>
        <p className="meta">{t('Mécanisme du jour : {m}', { m: lesson.mechanism })}</p>
        <div className="dots" role="navigation" aria-label={t('Blocs de la leçon')}>
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
  [t('[[MPB]] = la valeur, pour l’acheteur, d’une unité de plus.'), 'c:MPB'],
  [t('[[MPC]] = le coût privé de production d’une unité de plus.'), 'c:MPC'],
  [t('[[Qm]] est là où les incitations privées s’équilibrent : MPB = MPC.'), 'f:market'],
  [t('[[MEB]] = la valeur, pour les tiers, de l’effet positif d’une unité de plus.'), 'c:MEB'],
  [t('{{MSB = MPB + MEB}}'), 'f:msb'],
  [t('[[MSB]] n’est PAS l’argent du gouvernement.'), 'c:MSB'],
  [t('[[Q*]] est la quantité efficace : MSB = MSC.'), 'f:opt'],
  [t('Avec une externalité positive, Qm < Q*.'), 'r:qs'],
  [t('Les unités manquantes créent une [[DWL]] : leur bénéfice social dépasse leur coût social.'), 'a:dwl-under'],
  [t('Une subvention pigouvienne aligne l’incitation privée sur l’optimum social.'), 'c:POL+'],
  [t('MEB constant = 20 ⇒ subvention optimale = 20.'), 'r:s'],
  [t('Si MEB dépend de Q, on l’évalue à Q*, pas à l’intercept.'), 'f:pigou'],
];

function Finish({ lesson }: { lesson: Lesson }) {
  const p = useProgress();
  const m = mastery(p, [lesson.node]);
  const conf = p.confidence[lesson.node] ?? 0;
  const finals = finalsFor(TOPICS.find((t) => lessonsForTopic(t.id).includes(lesson))?.nodes ?? [lesson.node]);
  return (
    <div className="finish">
      <h3>{t('Ce que tu dois pouvoir expliquer — et pourquoi')}</h3>
      <ul className="accept">
        {(lesson.acceptance ?? ACCEPTANCE.map(([text, key]) => ({ text, why: WHY[key]?.layers ?? [] }))).map(({ text: s, why }, index) => (
          <li key={index}>
            <Rich text={s} />
            {why.length > 0 && <WhyChain layers={why} label={t('Pourquoi ?')} />}
          </li>
        ))}
      </ul>
      {finals.length > 0 && (
        <>
          <h3>{t('Les vrais sujets qui utilisent ce mécanisme')}</h3>
          <ul className="plain">{finals.map((q) => <li key={q.id}><a href={`#/exam/${q.id}`} lang="en">{q.title}</a></li>)}</ul>
        </>
      )}
      <h3>{t('Maîtrise mesurée aujourd’hui')}</h3>
      <MasteryBars m={m} />
      <div className="confidence">
        <span>{t('Ta confiance sur ce mécanisme :')}</span>
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" className={`conf ${conf === n ? 'on' : ''}`} onClick={() => setConfidence(lesson.node, n)} aria-label={t('Confiance {n} sur 5', { n })}>{n}</button>
        ))}
      </div>
      <div className="row wrap">
        <a className="button primary" href="#/recall">{t('Premier rappel espacé')}</a>
        <a className="button" href="#/learn">{t('Choisir la prochaine leçon')}</a>
        <a className="button" href={`#/exam/${lesson.examId}`}>{t('Refaire l’épreuve de la leçon')}</a>
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
  const specialDone = !!ls.finishedAt || ls.passed.includes(`${block.id}:validation`);
  const canNext = block.special === 'teachback' || block.special === 'exam' ? specialDone : block.special === 'finish' ? true : !gated || (understood && revealDone && nextCheck === -1);
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
            <div className="seg" role="tablist" aria-label={t('Niveau d’explication')}>
              <button role="tab" aria-selected={level === 'human'} className={level === 'human' ? 'on' : ''} onClick={() => setLevel('human')}>{t('Humain')}</button>
              {block.economist && <button role="tab" aria-selected={level === 'economist'} className={level === 'economist' ? 'on' : ''} onClick={() => setLevel('economist')}>{t('Économiste')}</button>}
              {block.exam && <button role="tab" aria-selected={level === 'exam'} className={level === 'exam' ? 'on' : ''} onClick={() => setLevel('exam')}>{t('Examen (EN)')}</button>}
            </div>
          )}

          <p className="block-text" lang={level === 'exam' && block.exam ? 'en' : lang}><Rich text={text} /></p>

          {block.decode?.map((k) => (familiarity(p, `abbr:${k}`) >= 2
            ? <p key={k} className="small muted">{t('Sigle déjà maîtrisé :')} <Abbr k={k} /> {t('(clique pour revoir la fiche).')}</p>
            : <DecodeCard key={k} k={k} />))}

          {block.callout && (
            <aside className={`callout callout-${block.callout.kind}`}>
              <b>{block.callout.title}</b>
              <p><Rich text={block.callout.text} /></p>
            </aside>
          )}

          <div className="actions" role="group" aria-label={t('Approfondir')}>
            <button type="button" className={`act ${open.why ? 'on' : ''}`} onClick={() => toggle('why')}>{t('Pourquoi ?')}</button>
            <button type="button" className={`act ${open.ex ? 'on' : ''}`} onClick={() => toggle('ex')}>{t('Exemple concret')}</button>
            <button type="button" className={`act ${open.me ? 'on' : ''}`} onClick={() => toggle('me')}>{t('Si c’était moi ?')}</button>
            {(block.diagram || block.graph.preset || lesson.id === 'ext-positive') && <button type="button" className={`act ${open.graph ? 'on' : ''}`} onClick={showOnGraph}>{block.diagram && block.diagram.kind !== 'curves' ? t('Montre-le sur le schéma') : t('Montre-le sur le graphe')}</button>}
          </div>
          {open.why && <div className="panel" data-label={t('Pourquoi')}><WhyChain layers={block.why} start={1} /></div>}
          {open.ex && <div className="panel" data-label={t('Exemple concret')}><Rich text={block.example} /></div>}
          {open.me && <div className="panel" data-label={t('Si c’était toi')}><Rich text={block.me} /></div>}

          {block.special === 'chain' && <CausalChain steps={lesson.chain} />}
          {block.special === 'teachback' && <TeachBack rubric={lesson.teach} lessonId={lesson.id} tags={[lesson.node]} onValidated={() => passCheck(lesson.id, `${block.id}:validation`)} />}
          {block.special === 'exam' && <ExamQuestion q={lesson.exam ?? exam(lesson.examId)} onDone={() => passCheck(lesson.id, `${block.id}:validation`)} />}
          {block.special === 'finish' && <Finish lesson={lesson} />}

          {gated && !understood && (
            <button type="button" className="primary big" onClick={() => setUnderstood(true)}>{t('J’ai compris, vérifier')} <ArrowRight /></button>
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
            <figure className={`specimen ${canNext ? 'earned' : 'pending'}`} aria-label={canNext ? `${block.result[0]} : ${block.result[1]}` : t('Résultat à gagner en répondant')}>
              <span className="specimen-value">{canNext ? block.result[1] : '?'}</span>
              <figcaption className="specimen-read">{canNext ? block.result[0] : t('À gagner : réponds aux questions')}</figcaption>
            </figure>
          )}

          <div className="block-nav">
            <button type="button" className="ghost" onClick={onPrev} disabled={idx === 0}><ArrowLeft /> {t('Précédent')}</button>
            {!last && (
              <button type="button" className="primary" onClick={onNext} disabled={!canNext}>
                {canNext ? <>{t('Bloc suivant')} <ArrowRight /></> : block.special === 'teachback' ? t('Valide ton explication pour continuer') : block.special === 'exam' ? t('Rends et enregistre ta copie pour continuer') : t('Réponds pour continuer')}
              </button>
            )}
          </div>
          <ProvTags prov={block.prov} />
        </article>
      </section>

      <section className="lesson-graph" ref={graphRef}>
        <ActorMap actors={lesson.actors} seen={seenActors} focus={block.focusActors} />
        {(block.diagram || block.graph.preset || lesson.id === 'ext-positive') && <div className="graph-card">
          {open.graph && <p className="graph-note"><Rich text={block.graphNote} /></p>}
          {block.diagram ? <LessonDiagram key={block.id} spec={block.diagram} /> : <>
          <InteractiveEconGraph model={model} show={block.graph.show} focus={focus} policy={policy} cursor={cursor} onCursor={setCursor} selected={sel} onSelect={setSel} fresh={fresh} animKey={block.id} />
          {block.graph.show.includes('QM') && (
            <UnitStrip model={model} show={block.graph.show} policy={policy} cursor={cursor} onPick={(q) => { setCursor(q); setSel({ kind: 'unit', q }); }} />
          )}
          <GraphInspector model={model} show={block.graph.show} policy={policy} cursor={cursor} selected={sel} onClear={() => setSel(null)} />
          <AxisSlider label={t('Curseur')} display={`Q = ${fmt(cursor, 1)}`} value={cursor} min={0} max={model.qMax} step={0.5} onChange={setCursor} />
          {block.graph.policyControl && <PolicyControl model={model} policy={policy} setPolicy={setPolicy} allowOptimal={canNext} />}
          </>}
        </div>}
      </section>
    </div>
  );
}
