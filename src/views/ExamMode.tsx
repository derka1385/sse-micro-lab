import { EXAMS, finalYear } from '../content/lessons';
import type { ExamQuestion as EQ } from '../content/types';
import { ExamQuestion } from '../components/Exam';
import { SourceRef } from '../components/text';
import { useProgress } from '../store';
import { ArrowLeft } from '../components/icons';

export function ExamMode({ id }: { id?: string }) {
  const p = useProgress();
  const q = EXAMS.find((e) => e.id === id);
  if (q) {
    return (
      <div className="page">
        <a href="#/exam" className="back"><ArrowLeft size={14} /> Examen</a>
        <header className="page-head">
          <h1 lang="en">{q.title}</h1>
          <p className="meta">Mode examen · en anglais · sans indice</p>
        </header>
        <article className="card"><ExamQuestion key={q.id} q={q} /></article>
      </div>
    );
  }
  const card = (e: EQ) => {
    const tries = p.exams.filter((x) => x.id === e.id);
    const best = tries.reduce((m, x) => Math.max(m, x.score / x.max), 0);
    return (
      <a key={e.id} href={`#/exam/${e.id}`} className="lesson-card link-card">
        <h3 lang="en">{e.title}</h3>
        <p className="meta">{tries.length ? `${tries.length} copie(s) · meilleure ${Math.round(best * 100)} %` : 'pas encore tenté'}</p>
        {!finalYear(e.id) && <p className="small muted">{e.note}</p>}
      </a>
    );
  };
  const finals = EXAMS.filter((e) => finalYear(e.id)).sort((a, b) => a.title.localeCompare(b.title));
  const years = [...new Set(finals.map((e) => finalYear(e.id)!))];
  return (
    <div className="page">
      <header className="page-head">
        <h1>Mode examen : en anglais, corrigé après</h1>
        <p className="lead">Rédige comme à SSE : modèle, calcul, mécanisme, en anglais. Le corrigé commence par la logique économique, puis le calcul, le graphique et une réponse modèle ; il sépare tes erreurs de <b>modèle</b>, de <b>logique</b>, de <b>calcul</b> et de <b>langue</b>.</p>
      </header>
      <section>
        <h2>Les vrais sujets, année par année</h2>
        <p className="small">Toutes les questions des finals 2020–2025. Les données et les consignes sont celles des sujets (dossier « past exams »), reformulées ; les corrigés sont les recalculs du dossier <SourceRef r="16" />, pas un barème officiel. La Q5 ne compte que si tu remplaces ton midterm.</p>
        {years.map((y) => (
          <div key={y}>
            <h3>Final {y}</h3>
            <div className="lesson-list">{finals.filter((e) => finalYear(e.id) === y).map(card)}</div>
          </div>
        ))}
      </section>
      <section>
        <h2>Devoirs et entraînements des leçons</h2>
        <p className="small">Un devoir reconstruit et les épreuves de fin de leçon : des exercices construits pour s’entraîner, jamais présentés comme des sujets officiels.</p>
        <div className="lesson-list">{EXAMS.filter((e) => !finalYear(e.id)).map(card)}</div>
      </section>
    </div>
  );
}
