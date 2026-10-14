import { EXAM_DATE, TOPICS } from '../content/catalog';
import { ALL_LESSONS, LESSONS } from '../content/lessons';
import { misById } from '../content/training';
import { DIMS, type Dim } from '../content/types';
import { MasteryBars } from '../components/learning';
import { ArrowRight } from '../components/icons';
import { Rich } from '../components/text';
import { useEffect, useState } from 'react';
import { lang, t } from '../i18n';
import { useSync } from '../sync';
import { activeMisconceptions, dueReviews, isMastered, lessonState, mastery, useProgress, type Progress } from '../store';

const DIM_MODE: Record<Dim, { href: string; text: string }> = {
  intuition: { href: '#/learn', text: t('Refais le teach-back : explique la chaîne sans regarder.') },
  terminology: { href: '#/recall', text: t('Rappel rapide : décode les sigles sans aide.') },
  formula: { href: '#/recall', text: t('Révision espacée : reconstruis la relation économique à partir du mécanisme.') },
  graph: { href: '#/lab', text: t('Graph Lab : clique les zones et explique chaque tranche.') },
  calculation: { href: '#/practice', text: t('Pratique : un exercice généré, chiffres nouveaux.') },
  recognition: { href: '#/recognize', text: t('Reconnaître le modèle dans des énoncés variés.') },
  english: { href: '#/exam', text: t('Mode examen : réponse SSE en anglais.') },
};

/** Lessons in course order (topic 1, topic 2…), then any lesson not attached to a topic. */
const COURSE = (() => {
  const ordered = TOPICS.map((tp) => LESSONS[tp.lesson ?? '']).filter(Boolean);
  return [...new Set([...ordered, ...ALL_LESSONS])];
})();

function nextSteps(p: Progress) {
  const steps: { title: string; text: string; href: string; tone?: string }[] = [];
  const active = activeMisconceptions(p);
  if (active.length) steps.push({ title: t('Micro-leçon : {x}', { x: misById(active[0])?.label ?? active[0] }), text: t('Même confusion deux fois : deux minutes pour la défaire.'), href: '#/mistakes', tone: 'warn' });
  const due = dueReviews(p);
  if (due.length) {
    const l = LESSONS[due[0]];
    if (l) steps.push({ title: t('Rappel espacé dû'), text: t('{m} — niveau {n}/5 : reconstruire, pas réciter.', { m: l.mechanism, n: p.reviews[due[0]].level }), href: '#/recall' });
  }
  for (const l of COURSE) {
    const s = lessonState(p, l.id);
    if (!s.startedAt) steps.push({ title: t('Commencer : {m}', { m: l.mechanism }), text: l.teaser, href: `#/lesson/${l.id}` });
    else if (!s.finishedAt) steps.push({ title: t('Continuer : {m}', { m: l.mechanism }), text: t('Bloc {i} / {n}', { i: s.block + 1, n: l.blocks.length }), href: `#/lesson/${l.id}` });
    else {
      const m = mastery(p, [l.node]);
      const weakest = DIMS.reduce((w, d) => (m[d.id] < m[w.id] ? d : w), DIMS[0]);
      if (!isMastered(m)) steps.push({ title: t('Point faible : {x}', { x: weakest.label }), text: DIM_MODE[weakest.id].text, href: weakest.id === 'graph' || weakest.id === 'calculation' ? `#/lesson/${l.id}` : DIM_MODE[weakest.id].href });
    }
  }
  steps.push({ title: t('Reconnaître le modèle'), text: t('22 contextes tirés des finals 2020–2025 : qui décide, quoi, avec quelle information ?'), href: '#/recognize' });
  return steps;
}

const DAY = 86_400_000;
const dayKey = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

/** Ticks once a minute so the countdown stays live without re-rendering every second. */
function useNow() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 60_000); return () => clearInterval(id); }, []);
  return now;
}

function Countdown({ p, now }: { p: Progress; now: number }) {
  const left = Math.max(0, EXAM_DATE.getTime() - now);
  const days = Math.floor(left / DAY), hours = Math.floor((left % DAY) / 3_600_000), mins = Math.floor((left % 3_600_000) / 60_000);
  const active = new Set(p.attempts.map((a) => dayKey(new Date(a.t))));
  const start = new Date(now); start.setHours(0, 0, 0, 0);
  const cells: Date[] = [];
  for (let d = new Date(start); d <= EXAM_DATE && cells.length < 21; d = new Date(d.getTime() + DAY)) cells.push(d);
  const wd = new Intl.DateTimeFormat(lang, { weekday: 'narrow' });
  const full = new Intl.DateTimeFormat(lang, { weekday: 'long', day: 'numeric', month: 'long' });
  const time = new Intl.DateTimeFormat(lang, { hour: '2-digit', minute: '2-digit' });
  const isExam = (d: Date) => dayKey(d) === dayKey(EXAM_DATE);
  return (
    <section className="countdown" aria-labelledby="cd-title">
      <h2 id="cd-title" className="sr-only">{t('Final BE501')}</h2>
      {left > 0 ? <>
        <p className="cd-big"><span className="cd-num">{days}</span><span className="cd-unit">{t('jours avant le final')}</span></p>
        <p className="cd-rest">{t('{h} h {m} min', { h: hours, m: mins })}</p>
      </> : <p className="cd-big"><span className="cd-unit">{t('Jour du final')}</span></p>}
      <p className="cd-when">{t('Final BE501')} · {full.format(EXAM_DATE)} · {time.format(EXAM_DATE)}</p>
      <ol className="cd-days" aria-label={t('Jours restants')}>
        {cells.map((d, i) => (
          <li key={i} className={`${i === 0 ? 'today' : ''} ${isExam(d) ? 'exam' : ''} ${active.has(dayKey(d)) ? 'done' : ''}`} title={full.format(d)}>
            <span>{wd.format(d)}</span><b>{d.getDate()}</b>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProgressPanel({ p, now }: { p: Progress; now: number }) {
  const all = Object.values(LESSONS);
  const done = all.filter((l) => lessonState(p, l.id).finishedAt).length;
  const week = p.attempts.filter((a) => a.t > now - 7 * DAY && !a.assisted);
  const rate = week.length ? Math.round((100 * week.filter((a) => a.ok).length) / week.length) : null;
  const activeDays = new Set(p.attempts.map((a) => dayKey(new Date(a.t)))).size;
  return (
    <section className="progress-panel" aria-labelledby="pg-title">
      <div className="pg-main">
      <div className="pg-head">
        <h2 id="pg-title">{t('Ta progression')}</h2>
        <p><b>{done}</b> / {all.length} {t('leçons terminées')}</p>
      </div>
      <ol className="pg-lessons" style={{ gridTemplateColumns: `repeat(${all.length}, 1fr)` }}>
        {all.map((l) => {
          const s = lessonState(p, l.id);
          const state = s.finishedAt ? 'done' : s.startedAt ? 'started' : '';
          return <li key={l.id}><a href={`#/lesson/${l.id}`} className={state} title={l.mechanism} aria-label={l.mechanism} /></li>;
        })}
      </ol>
      <dl className="pg-facts">
        <div><dt>{t('Révisions dues')}</dt><dd>{dueReviews(p, now).length}</dd></div>
        <div><dt>{t('Jours actifs')}</dt><dd>{activeDays}</dd></div>
        <div><dt>{t('Réponses justes (7 jours)')}</dt><dd>{rate === null ? '—' : `${rate} %`}</dd></div>
      </dl>
      </div>
      <div className="pg-mastery">
        <h3 className="pg-sub">{t('Maîtrise moyenne, tous thèmes')}</h3>
        <MasteryBars compact m={mastery(p, all.map((l) => l.node))} />
      </div>
    </section>
  );
}

export function Home() {
  const p = useProgress();
  const now = useNow();
  const user = useSync().user;
  const first = user?.name.split(' ')[0];
  const steps = nextSteps(p);
  const lesson = COURSE.find((l) => lessonState(p, l.id).startedAt && !lessonState(p, l.id).finishedAt) ?? COURSE.find((l) => !lessonState(p, l.id).finishedAt) ?? COURSE[0];
  const started = lessonState(p, lesson.id).startedAt > 0;
  return (
    <div className="page home">
      <div className="home-top">
        <header className="home-hello">
          <h1 className={first ? '' : 'long'}>{first ? t('Salut {name}.', { name: first }) : t('La microéconomie, un mécanisme à la fois.')}</h1>
          <p className="home-next-label">{started ? t('Continuer la leçon') : t('Commencer la leçon')}</p>
          <a className="home-next" href={`#/lesson/${lesson.id}`}>
            <b>{lesson.mechanism}</b>
            <span>{lesson.teaser}</span>
            <ArrowRight />
          </a>
        </header>
        <Countdown p={p} now={now} />
      </div>

      <ProgressPanel p={p} now={now} />

      <section className="next">
        <h2>{t('Ensuite')}</h2>
        <ol className="steps">
          {steps.slice(0, 5).map((s, i) => (
            <li key={i}>
              <a href={s.href} className={`step ${s.tone ?? ''}`}>
                <b>{s.title}</b>
                <span>{s.text}</span>
                <ArrowRight />
              </a>
            </li>
          ))}
        </ol>
        <p className="small"><a href="#/learn">{t('Voir les 13 thèmes et leurs leçons guidées')}</a></p>
      </section>

      <section className="card subtle">
        <h2>{t('Comment ce labo fonctionne')}</h2>
        <ul className="plain">
          <li><Rich text={t('**Situation → acteurs → incitations → conséquence → nom → sigle → formule → graphique → examen.** Toujours dans cet ordre.')} /></li>
          <li>{t('Chaque sigle est cliquable : nom anglais, traduction, sens littéral, qui est concerné, unités.')}</li>
          <li>{t('Les formules apparaissent après que tu as trouvé leur logique — comme une récompense, pas comme un point de départ.')}</li>
          <li>{t('Tout chiffre renvoie au dossier : Documenté, Recalculé (dossier) ou Complément pédagogique.')}</li>
        </ul>
      </section>
    </div>
  );
}
