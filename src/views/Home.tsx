import { EXAM_DATE } from '../content/catalog';
import { LESSONS } from '../content/lessons';
import { misById } from '../content/training';
import { DIMS, type Dim } from '../content/types';
import { MasteryBars } from '../components/learning';
import { ArrowRight } from '../components/icons';
import { activeMisconceptions, dueReviews, isMastered, lessonState, mastery, useProgress, type Progress } from '../store';

const DIM_MODE: Record<Dim, { href: string; text: string }> = {
  intuition: { href: '#/learn', text: 'Refais le teach-back : explique la chaîne sans regarder.' },
  terminology: { href: '#/recall', text: 'Rappel rapide : décode les sigles sans aide.' },
  formula: { href: '#/recall', text: 'Révision espacée : reconstruis la relation économique à partir du mécanisme.' },
  graph: { href: '#/lab', text: 'Graph Lab : clique les zones et explique chaque tranche.' },
  calculation: { href: '#/practice', text: 'Pratique : un exercice généré, chiffres nouveaux.' },
  recognition: { href: '#/recognize', text: 'Reconnaître le modèle dans des énoncés variés.' },
  english: { href: '#/exam', text: 'Mode examen : réponse SSE en anglais.' },
};

function nextSteps(p: Progress) {
  const steps: { title: string; text: string; href: string; tone?: string }[] = [];
  const active = activeMisconceptions(p);
  if (active.length) steps.push({ title: `Micro-leçon : ${misById(active[0])?.label ?? active[0]}`, text: 'Même confusion deux fois : deux minutes pour la défaire.', href: '#/mistakes', tone: 'warn' });
  const due = dueReviews(p);
  if (due.length) {
    const l = LESSONS[due[0]];
    if (l) steps.push({ title: 'Rappel espacé dû', text: `${l.mechanism} — niveau ${p.reviews[due[0]].level}/5 : reconstruire, pas réciter.`, href: '#/recall' });
  }
  for (const l of Object.values(LESSONS)) {
    const s = lessonState(p, l.id);
    if (!s.startedAt) steps.push({ title: `Commencer : ${l.mechanism}`, text: l.teaser, href: `#/lesson/${l.id}` });
    else if (!s.finishedAt) steps.push({ title: `Continuer : ${l.mechanism}`, text: `Bloc ${s.block + 1} / ${l.blocks.length}`, href: `#/lesson/${l.id}` });
    else {
      const m = mastery(p, [l.node]);
      const weakest = DIMS.reduce((w, d) => (m[d.id] < m[w.id] ? d : w), DIMS[0]);
      if (!isMastered(m)) steps.push({ title: `Point faible : ${weakest.label}`, text: DIM_MODE[weakest.id].text, href: weakest.id === 'graph' || weakest.id === 'calculation' ? `#/lesson/${l.id}` : DIM_MODE[weakest.id].href });
    }
  }
  steps.push({ title: 'Reconnaître le modèle', text: '22 contextes tirés des finals 2020–2025 : qui décide, quoi, avec quelle information ?', href: '#/recognize' });
  return steps;
}

export function Home() {
  const p = useProgress();
  const steps = nextSteps(p);
  const days = Math.ceil((EXAM_DATE.getTime() - Date.now()) / 86_400_000);
  const all = Object.values(LESSONS);
  const lesson = all.find((l) => lessonState(p, l.id).startedAt && !lessonState(p, l.id).finishedAt) ?? all.find((l) => !lessonState(p, l.id).finishedAt) ?? LESSONS['ext-positive'];
  const started = lessonState(p, lesson.id).startedAt > 0;
  return (
    <div className="page home">
      <header className="page-head">
        <h1>La microéconomie, un mécanisme à la fois.</h1>
        <p className="meta home-meta">
          <span>{lesson.mechanism}</span>
          <span>{days > 0 ? `J−${days} avant le final du 23 octobre` : 'Jour du final'}</span>
          <span>Date du support L1, à vérifier sur ta convocation</span>
        </p>
        <p className="lead">{lesson.teaser}</p>
        <a className="button primary" href={`#/lesson/${lesson.id}`}>{started ? 'Continuer la leçon' : 'Commencer la leçon'} <ArrowRight /></a>
      </header>

      <p className="small"><a href="#/learn">Voir les 13 thèmes et leurs leçons guidées</a></p>
      <section className="next">
        <h2>Ensuite</h2>
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
      </section>

      {started && (
        <section className="card">
          <h2>{lesson.mechanism} — où tu en es</h2>
          <p className="muted small">Une réussite compte au plus une fois par jour et par dimension : la maîtrise exige des rappels sur plusieurs jours.</p>
          <MasteryBars m={mastery(p, [lesson.node])} />
        </section>
      )}

      <section className="card subtle">
        <h2>Comment ce labo fonctionne</h2>
        <ul className="plain">
          <li><b>Situation → acteurs → incitations → conséquence → nom → sigle → formule → graphique → examen.</b> Toujours dans cet ordre.</li>
          <li>Chaque sigle est cliquable : nom anglais, traduction, sens littéral, qui est concerné, unités.</li>
          <li>Les formules apparaissent après que tu as trouvé leur logique — comme une récompense, pas comme un point de départ.</li>
          <li>Tout chiffre renvoie au dossier : <i>Documenté</i>, <i>Recalculé (dossier)</i> ou <i>Complément pédagogique</i>.</li>
        </ul>
      </section>
    </div>
  );
}
