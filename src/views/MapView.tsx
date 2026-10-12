import { useEffect, useState } from 'react';
import { NODES, nodeById, topicById, downstream, type MapNode } from '../content/catalog';
import { SCENARIOS, PAIRS } from '../content/training';
import { MasteryBars } from '../components/learning';
import { SourceRef } from '../components/text';
import { average, isMastered, mastery, useProgress } from '../store';

const NW = 172, NH = 52, CX = 200, RY = 74, PAD = 16;
const pos = (n: MapNode) => ({ x: PAD + n.col * CX, y: PAD + n.row * RY });

/** MasteryMap — causal prerequisite graph; node tint = measured mastery. */
export function MasteryMap({ selected, onSelect }: { selected?: string; onSelect: (id: string) => void }) {
  const p = useProgress();
  const W = PAD * 2 + 6 * CX + NW, H = PAD * 2 + 6 * RY + NH;
  const sel = selected ? nodeById(selected) : undefined;
  return (
    <div className="map-scroll">
      <svg viewBox={`0 0 ${W} ${H}`} className="map-svg" role="img" aria-label="Carte des prérequis">
        {NODES.flatMap((n) => n.prereqs.map((pid) => {
          const a = nodeById(pid)!, A = pos(a), B = pos(n);
          const x1 = A.x + NW, y1 = A.y + NH / 2, x2 = B.x, y2 = B.y + NH / 2, dx = Math.max(30, (x2 - x1) / 2);
          const into = sel && n.id === sel.id, out = sel && pid === sel.id;
          return <path key={`${pid}-${n.id}`} d={`M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`} className={`edge ${into ? 'edge-in' : ''} ${out ? 'edge-out' : ''}`} />;
        }))}
        {NODES.map((n) => {
          const { x, y } = pos(n);
          const m = mastery(p, [n.id]);
          const avg = average(m);
          const lesson = !!topicById(n.topic)?.lesson && topicById(n.topic)!.nodes.includes(n.id);
          return (
            <g key={n.id} transform={`translate(${x},${y})`} className={`node ${selected === n.id ? 'node-sel' : ''} ${lesson ? 'node-lesson' : ''}`} onClick={() => onSelect(n.id)} role="button" aria-label={`${n.label}, maîtrise ${Math.round(avg * 100)} %`}>
              <rect width={NW} height={NH} rx={2} className="node-box" style={{ ['--m' as string]: avg }} />
              <text x={10} y={22} className="node-label" style={{ fontWeight: Math.round(320 + 540 * avg) }}>{n.label.length > 26 ? `${n.label.slice(0, 25)}…` : n.label}</text>
              <text x={10} y={37} className="node-sub">{n.sub}{isMastered(m) ? ' · maîtrisé' : ''}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function MapView({ node }: { node?: string }) {
  const p = useProgress();
  const [selId, setSelId] = useState(node ?? 'ext');
  useEffect(() => { if (node) setSelId(node); }, [node]);
  const n = nodeById(selId) ?? NODES[0];
  const t = topicById(n.topic);
  const dependents = NODES.filter((x) => x.prereqs.includes(n.id));
  const scen = SCENARIOS.filter((s) => s.node === n.id || (s.topic === n.topic && n.id === t?.nodes[0]));
  const pairs = PAIRS.filter((x) => x.topic === n.topic);
  const pct = (id: string) => Math.round(average(mastery(p, [id])) * 100);
  return (
    <div className="page">
      <header className="page-head">
        <h1>Ce qui cause quoi, dans le cours</h1>
        <p className="lead">Les flèches vont d’un prérequis vers ce qu’il permet de comprendre. La teinte d’un nœud = ta maîtrise mesurée (7 dimensions, rappels sur plusieurs jours). Bordure pleine = leçon guidée disponible.</p>
      </header>
      <div className="map-grid">
        <MasteryMap selected={n.id} onSelect={(id) => { setSelId(id); window.history.replaceState(null, '', `#/map/${id}`); }} />
        <aside className="map-panel">
          <h2>{n.label}</h2>
          <p className="meta">{n.sub}</p>
          <h4>Pour comprendre ceci, il te faut :</h4>
          {n.prereqs.length ? (
            <ul className="plain">{n.prereqs.map((id) => <li key={id}><a href={`#/map/${id}`}>{nodeById(id)?.label}</a> <span className="muted small">{pct(id)} %</span></li>)}</ul>
          ) : <p className="small muted">Aucun prérequis : c’est un point de départ.</p>}
          {dependents.length > 0 && (
            <>
              <h4>Ceci ouvre :</h4>
              <ul className="plain">{dependents.map((d) => <li key={d.id}><a href={`#/map/${d.id}`}>{d.label}</a></li>)}</ul>
            </>
          )}
          <p className="small">Importance conceptuelle : <b>{downstream(n.id)}</b> nœud(s) en dépendent.</p>
          <h4>Maîtrise</h4>
          <MasteryBars m={mastery(p, [n.id])} compact />
          {t && (
            <>
              <h4>Historique observé aux finals (2020–2025)</h4>
              <ul className="plain small">
                {t.history.map((h, i) => <li key={i}>{h.years.length ? `${h.years.length}/6 (${h.years.join(', ')})` : '—'} : {h.label} <span className="muted">[{h.basis}]</span></li>)}
              </ul>
              <p className="small muted">Une fréquence sur six sujets décrit l’échantillon ; ce n’est pas une probabilité pour le prochain examen (§1).</p>
            </>
          )}
          <p className="small">Source : {n.refs.map((r) => <SourceRef key={r} r={r} />)}</p>
          <div className="row wrap">
            {t?.lesson && t.nodes.includes(n.id) && <a className="button primary" href={`#/lesson/${t.lesson}`}>Leçon guidée</a>}
            {scen.length > 0 && <a className="button" href={`#/recognize/${scen[0].id}`}>Reconnaître ({scen.length})</a>}
            {pairs.length > 0 && <a className="button" href={`#/confusions/${pairs[0].id}`}>Confusions ({pairs.length})</a>}
          </div>
        </aside>
      </div>
    </div>
  );
}
