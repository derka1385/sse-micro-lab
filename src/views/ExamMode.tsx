import { EXAMS } from '../content/externalities';
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
  return (
    <div className="page">
      <header className="page-head">
        <h1>Mode examen : en anglais, corrigé après</h1>
        <p className="lead">Rédige comme à SSE : modèle, calcul, mécanisme, en anglais. Le corrigé sépare tes erreurs de <b>modèle</b>, de <b>logique</b>, de <b>calcul</b> et de <b>langue</b>.</p>
      </header>
      <div className="lesson-list">
        {EXAMS.map((e) => {
          const tries = p.exams.filter((x) => x.id === e.id);
          const best = tries.reduce((m, x) => Math.max(m, x.score / x.max), 0);
          return (
            <a key={e.id} href={`#/exam/${e.id}`} className="lesson-card link-card">
              <h3 lang="en">{e.title}</h3>
              <p className="meta">{tries.length ? `${tries.length} copie(s) · meilleure ${Math.round(best * 100)} %` : 'pas encore tenté'}</p>
              <p className="small muted">{e.note}</p>
            </a>
          );
        })}
      </div>
      <section className="card subtle">
        <h2>Toutes les questions des finals 2020–2025</h2>
        <p className="small">La carte complète des examens (contextes, méthodes, résultats recalculés) est dans le dossier, <SourceRef r="16" />. Les autres thèmes passeront en mode examen à mesure que leurs leçons seront construites.</p>
      </section>
    </div>
  );
}
