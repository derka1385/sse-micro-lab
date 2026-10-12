import { FORMULAS, WHY } from '../content/externalities';
import { WhyChain } from '../components/learning';
import { Formula, SourceRef } from '../components/text';
import { openOverlay } from '../store';
import { ArrowRight } from '../components/icons';

const GROUPS = ['Formules', 'Courbes', 'Résultats', 'Zones'] as const;

export function WhyMode({ id }: { id?: string }) {
  const items = Object.values(WHY);
  const cur = (id && WHY[id]) || items[0];
  const sheet = FORMULAS.find((f) => f.id === cur.id.replace(':', '-'));
  return (
    <div className="page">
      <header className="page-head">
        <h1>Pourquoi ? Creuse jusqu’au fond</h1>
        <p className="lead">Choisis une formule, une courbe, un résultat ou une zone. Chaque « Pourquoi ? » descend d’une couche causale, jusqu’aux hypothèses du modèle.</p>
      </header>
      <div className="why-grid">
        <nav className="why-list" aria-label="Éléments à expliquer">
          {GROUPS.map((g) => (
            <div key={g}>
              <p className="nav-title">{g}</p>
              {items.filter((w) => w.group === g).map((w) => (
                <a key={w.id} href={`#/why/${encodeURIComponent(w.id)}`} className={`why-item ${w.id === cur.id ? 'on' : ''}`}>{w.title}</a>
              ))}
            </div>
          ))}
        </nav>
        <article className="card why-main">
          <h2>{cur.title}</h2>
          <p className="meta">{cur.group}</p>
          {cur.formula && <Formula f={cur.formula} block />}
          <WhyChain key={cur.id} layers={cur.layers} />
          <p className="small">Sources : {cur.refs.map((r) => <SourceRef key={r} r={r} />)}</p>
          {sheet && <button type="button" className="ghost" onClick={() => openOverlay({ kind: 'formula', id: sheet.id })}>Fiche complète : termes, unités, quand l’utiliser <ArrowRight /></button>}
        </article>
      </div>
    </div>
  );
}
