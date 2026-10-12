import { useState } from 'react';
import { MODELS, fmt } from '../econ';
import type { El } from '../content/types';
import { AxisSlider, GraphInspector, InteractiveEconGraph, PolicyControl, UnitStrip, WelfareTable, type Sel } from '../components/graph';
import { ProvTags, Rich } from '../components/text';

const TOGGLES: { id: El; label: string; only?: 'positive' | 'negative' }[] = [
  { id: 'MPB', label: 'MPB (demande)' },
  { id: 'MPC', label: 'MPC (offre)' },
  { id: 'MEB', label: 'MEB', only: 'positive' },
  { id: 'MSB', label: 'MSB', only: 'positive' },
  { id: 'MEC', label: 'MEC', only: 'negative' },
  { id: 'MSC', label: 'MSC', only: 'negative' },
  { id: 'QM', label: 'Qm' },
  { id: 'QS', label: 'Q*' },
  { id: 'POL', label: 'Politique' },
  { id: 'QP', label: 'Q avec politique' },
  { id: 'PRICES', label: 'p_b / p_s' },
  { id: 'CS', label: 'CS' },
  { id: 'PS', label: 'PS' },
  { id: 'GOV', label: 'État' },
  { id: 'EXT', label: 'Effet externe total' },
  { id: 'DWL', label: 'DWL' },
  { id: 'UNITS', label: 'Unités manquantes / en trop' },
];

const DEFAULT: El[] = ['MPB', 'MPC', 'MEB', 'MSB', 'MEC', 'MSC', 'QM', 'QS', 'POL', 'QP', 'PRICES', 'DWL'];

const CHALLENGES: Record<string, string[]> = {
  solar: ['Trouve la subvention qui fait disparaître la DWL. Pourquoi exactement cette valeur ?', 'Mets s = 35 : d’où vient la nouvelle DWL, et de quel côté de Q* est-elle ?', 'Active CS, PS, État et effet externe : vérifie que W = CS + PS − dépense + bénéfice externe.'],
  variant: ['Essaie s = 30, puis s = 12, puis s = 10. Laquelle tombe pile sur Q* ? Pourquoi ?', 'Où se lit MEB(Q*) sur le graphique ?'],
  vaccines: ['Mets s = 30 (E2020 Q3c) : clique la DWL. Quelles doses sont « en trop » ?', 'Pourquoi la DWL de la subvention 30 se mesure-t-elle à partir de 55 et pas de 45 ?'],
  gasoline: ['Mets t = 20 (E2023 Q4d) : la DWL baisse mais ne disparaît pas. Pourquoi ?', 'Pourquoi t* = 30 et pas MEC(45) = 45 ?', 'Clique une unité en trop : que coûte-t-elle à la société, que lui rapporte-t-elle ?'],
  textiles: ['Sans taxe, clique la DWL : quelles unités sont en trop ?', 'Quelle taxe implémente Q* = 40 ?'],
};

export function GraphLab({ preset: initial }: { preset?: string }) {
  const [preset, setPreset] = useState(initial && MODELS[initial] ? initial : 'solar');
  const m = MODELS[preset];
  const [show, setShow] = useState<El[]>(DEFAULT);
  const [policy, setPolicy] = useState(0);
  const [cursor, setCursor] = useState(Math.round(m.qMax / 2));
  const [sel, setSel] = useState<Sel>(null);
  const pick = (id: string) => {
    setPreset(id);
    setPolicy(0);
    setSel(null);
    setCursor(Math.round(MODELS[id].qMax / 2));
    window.history.replaceState(null, '', `#/lab/${id}`);
  };
  return (
    <div className="page">
      <header className="page-head">
        <h1>Externalités : manipule, clique, demande pourquoi</h1>
        <p className="lead">Chaque courbe, point et zone est cliquable. Déplace le curseur : le panneau dit, pour l’unité visée, si elle est échangée et ce qu’elle vaut pour la société.</p>
      </header>
      <div className="seg wrap" role="tablist" aria-label="Exemple">
        {Object.values(MODELS).map((x) => (
          <button key={x.id} role="tab" aria-selected={preset === x.id} className={preset === x.id ? 'on' : ''} onClick={() => pick(x.id)}>{x.name}</button>
        ))}
      </div>
      <p className="small"><Rich text={m.story} /></p>
      <ProvTags prov={[m.constructed ? { kind: 'peda', note: 'variante construite' } : { kind: 'recalc', ref: m.ref }]} />

      <div className="lab-grid">
        <div className="graph-card">
          <InteractiveEconGraph model={m} show={show} policy={policy} cursor={cursor} onCursor={setCursor} selected={sel} onSelect={setSel} />
          {show.includes('QM') && <UnitStrip model={m} show={show} policy={policy} cursor={cursor} onPick={(q) => { setCursor(q); setSel({ kind: 'unit', q }); }} />}
          <GraphInspector model={m} show={show} policy={policy} cursor={cursor} selected={sel} onClear={() => setSel(null)} />
          <AxisSlider label="Curseur" display={`Q = ${fmt(cursor, 1)}`} value={cursor} min={0} max={m.qMax} step={0.5} onChange={setCursor} />
          <PolicyControl model={m} policy={policy} setPolicy={setPolicy} />
        </div>
        <aside className="lab-side">
          <h3>Afficher</h3>
          <div className="toggles">
            {TOGGLES.filter((t) => !t.only || t.only === m.kind).map((t) => (
              <label key={t.id} className="tick">
                <input type="checkbox" checked={show.includes(t.id)} onChange={() => setShow(show.includes(t.id) ? show.filter((x) => x !== t.id) : [...show, t.id])} />
                {t.label}
              </label>
            ))}
          </div>
          <h3>Défis</h3>
          <ul className="plain small">{(CHALLENGES[preset] ?? []).map((c, i) => <li key={i}>{c}</li>)}</ul>
        </aside>
      </div>

      <section className="card">
        <h2>Comptes du bien-être</h2>
        <p className="small muted">La politique (subvention ou taxe) est un transfert : elle apparaît dans la ligne « État » et réapparaît dans CS et PS. Seuls les effets réels changent W.</p>
        <WelfareTable model={m} policy={policy} />
      </section>
    </div>
  );
}
