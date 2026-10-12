import { MISCONCEPTIONS, misById } from '../content/training';
import { MisconceptionCard } from '../components/learning';
import { Rich, SourceRef } from '../components/text';
import { DOSSIER } from '../dossier';
import { activeMisconceptions, useProgress } from '../store';

export function Mistakes() {
  const p = useProgress();
  const active = activeMisconceptions(p);
  const history = Object.entries(p.mis).filter(([, m]) => m.total > 0).sort((a, b) => b[1].last - a[1].last);
  return (
    <div className="page">
      <header className="page-head">
        <h1>Mes confusions, suivies à part de la maîtrise</h1>
        <p className="lead">Une même confusion deux fois ⇒ une micro-leçon qui oppose les deux notions. Elle disparaît quand tu réponds juste à la question de contraste.</p>
      </header>

      {active.length ? active.map((id) => <MisconceptionCard key={id} id={id} />) : (
        <p className="card">Aucune confusion active. Elles apparaissent ici après la deuxième occurrence.</p>
      )}

      <section className="card">
        <h2>Historique</h2>
        {history.length ? (
          <table className="wtable">
            <thead><tr><th>Confusion</th><th>Total</th><th>Depuis la dernière correction</th><th>Dernière fois</th></tr></thead>
            <tbody>
              {history.map(([id, m]) => (
                <tr key={id}>
                  <th>{misById(id)?.label ?? id}</th>
                  <td>{m.total}</td>
                  <td>{m.count}{m.resolvedAt ? <span className="muted small"> · corrigée le {new Date(m.resolvedAt).toLocaleDateString('fr-FR')}</span> : ''}</td>
                  <td className="small">{new Date(m.last).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : <p className="muted">Rien pour l’instant.</p>}
      </section>

      <section className="card subtle">
        <h2>Toutes les confusions suivies ({MISCONCEPTIONS.length})</h2>
        <ul className="plain small">
          {MISCONCEPTIONS.map((m) => <li key={m.id}><b>{m.label}</b> — <Rich text={m.explain} /> {m.refs.map((r) => <SourceRef key={r} r={r} />)}</li>)}
        </ul>
      </section>

      <details className="card subtle">
        <summary>Pièges listés par le dossier (§20.2) — {DOSSIER.pitfalls.length}</summary>
        <ul className="plain small">{DOSSIER.pitfalls.map((x) => <li key={x.id}>{x.text}</li>)}</ul>
      </details>
      <details className="card subtle">
        <summary>Corrections et ambiguïtés à ne pas reproduire (§20.1) — {DOSSIER.corrections.length}</summary>
        <ol className="small">{DOSSIER.corrections.map((x) => <li key={x.id}>{x.text}</li>)}</ol>
      </details>
    </div>
  );
}
