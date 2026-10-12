import '../lesson-diagrams.css';
import { useId, useState } from 'react';
import type { LessonDiagramSpec } from '../content/lesson-diagrams';
import type { ActorId } from '../content/types';
import { SourceRef } from './text';
import { fmt } from '../econ';

const ink = (actor?: ActorId) => ({ buyer: 'var(--buyer)', producer: 'var(--producer)', third: 'var(--third)', planner: 'var(--society)', gov: 'var(--gov)' }[actor ?? 'buyer']);

export function curveValue(points: [number, number][], x: number): number | null {
  if (x < points[0][0] || x > points.at(-1)![0]) return null;
  for (let i = 1; i < points.length; i++) {
    const [x0, y0] = points[i - 1], [x1, y1] = points[i];
    if (x <= x1) return x1 === x0 ? y1 : y0 + (y1 - y0) * (x - x0) / (x1 - x0);
  }
  return points.at(-1)![1];
}

function Curves({ spec }: { spec: Extract<LessonDiagramSpec, { kind: 'curves' }> }) {
  const [cursor, setCursor] = useState(spec.initial ?? spec.xMax / 2);
  const [selected, setSelected] = useState(spec.focus ?? spec.curves[0].label);
  const clip = useId();
  const W = 580, H = 400, L = 64, R = 25, T = 28, B = 64;
  const x = (v: number) => L + v / spec.xMax * (W - L - R);
  const y = (v: number) => H - B - v / spec.yMax * (H - B - T);
  const active = spec.curves.find((c) => c.label === selected) ?? spec.curves[0];
  return <>
    <svg viewBox={`0 0 ${W} ${H}`} className="lesson-diagram-svg" role="group" aria-label={spec.title}>
      <defs><clipPath id={clip}><rect x={L} y={T} width={W - L - R} height={H - T - B} /></clipPath></defs>
      {[0, 1, 2, 3, 4].map((i) => <g key={i} className="diagram-tick">
        <text x={x(i * spec.xMax / 4)} y={H - B + 24} textAnchor="middle">{fmt(i * spec.xMax / 4, 1)}</text>
        <text x={L - 12} y={y(i * spec.yMax / 4) + 5} textAnchor="end">{fmt(i * spec.yMax / 4, 1)}</text>
      </g>)}
      <path d={`M${L},${T}V${H - B}H${W - R}`} fill="none" stroke="var(--ink)" />
      <text x={(L + W - R) / 2} y={H - 12} textAnchor="middle" className="diagram-axis-label">{spec.xLabel}</text>
      <text x={18} y={(T + H - B) / 2} transform={`rotate(-90 18 ${(T + H - B) / 2})`} textAnchor="middle" className="diagram-axis-label">{spec.yLabel}</text>
      <g clipPath={`url(#${clip})`}>
        <line x1={x(cursor)} x2={x(cursor)} y1={T} y2={H - B} stroke="var(--ink-3)" strokeDasharray="4 5" />
        {spec.curves.map((c) => {
          const value = curveValue(c.points, cursor);
          return <g key={c.label} role="button" tabIndex={0} aria-label={`${c.label} : ${c.explain}`} onClick={() => setSelected(c.label)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelected(c.label); } }}>
            <polyline points={c.points.map(([a, b]) => `${x(a)},${y(b)}`).join(' ')} fill="none" stroke="transparent" strokeWidth={22} />
            <polyline points={c.points.map(([a, b]) => `${x(a)},${y(b)}`).join(' ')} fill="none" stroke={ink(c.color)} strokeWidth={selected === c.label ? 4 : 2} />
            {value !== null && <circle cx={x(cursor)} cy={y(value)} r={4} fill={ink(c.color)} />}
          </g>;
        })}
        {spec.markers?.map((p) => <g key={p.label}><circle cx={x(p.x)} cy={y(p.y)} r={4} fill="var(--ink)" /><text x={x(p.x) + 8} y={y(p.y) - 10} className="diagram-point-label">{p.label}</text></g>)}
      </g>
    </svg>
    <div className="diagram-legend" role="group" aria-label="Courbes à expliquer">{spec.curves.map((c) => <button key={c.label} type="button" aria-pressed={selected === c.label} className={selected === c.label ? 'on' : ''} onClick={() => setSelected(c.label)} style={{ color: ink(c.color) }}>{c.label}</button>)}</div>
    <p className="diagram-explain">{active.explain}</p>
    <label className="diagram-cursor">Déplace le curseur sur l’axe horizontal
      <input type="range" min={0} max={spec.xMax} step={spec.xMax / 100} value={cursor} onChange={(event) => setCursor(Number(event.target.value))} aria-label={spec.xLabel} aria-valuetext={`${fmt(cursor, 2)} ; ${active.label} : ${curveValue(active.points, cursor) === null ? 'hors du domaine' : fmt(curveValue(active.points, cursor)!, 2)}`} />
    </label>
    <dl className="diagram-readout"><div><dt>{spec.xLabel}</dt><dd>{fmt(cursor, 2)}</dd></div>{spec.curves.map((c) => { const value = curveValue(c.points, cursor); return <div key={c.label}><dt>{c.label}</dt><dd>{value === null ? 'hors domaine' : fmt(value, 2)}</dd></div>; })}</dl>
  </>;
}

function Matrix({ spec }: { spec: Extract<LessonDiagramSpec, { kind: 'matrix' }> }) {
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [show, setShow] = useState(false);
  const rowBest = (r: number, c: number) => spec.payoffs[r][c][0] === Math.max(...spec.payoffs.map((row) => row[c][0]));
  const colBest = (r: number, c: number) => spec.payoffs[r][c][1] === Math.max(...spec.payoffs[r].map((cell) => cell[1]));
  return <>
    <p className="small">Premier gain : {spec.rowPlayer}. Second : {spec.colPlayer}. Clique une case et compare les déviations unilatérales.</p>
    <div className="table-wrap"><table className="diagram-matrix"><thead><tr><th>{spec.rowPlayer} / {spec.colPlayer}</th>{spec.columns.map((c) => <th key={c}>{c}</th>)}</tr></thead><tbody>{spec.rows.map((r, i) => <tr key={r}><th>{r}</th>{spec.columns.map((c, j) => <td key={c}><button type="button" aria-pressed={selected?.[0] === i && selected?.[1] === j} onClick={() => setSelected([i, j])} className={show && rowBest(i, j) && colBest(i, j) ? 'nash' : ''}>
      <span className={show && rowBest(i, j) ? 'best' : ''}>{fmt(spec.payoffs[i][j][0], 1)}</span>, <span className={show && colBest(i, j) ? 'best' : ''}>{fmt(spec.payoffs[i][j][1], 1)}</span>
    </button></td>)}</tr>)}</tbody></table></div>
    <button type="button" className="ghost small" aria-pressed={show} onClick={() => setShow(!show)}>{show ? 'Masquer' : 'Montrer'} les meilleures réponses</button>
    {show && <p className="small muted">Souligné : meilleure réponse, y compris en cas d’égalité. Jaune : meilleures réponses mutuelles (Nash pur). Cela ne classe pas les équilibres mixtes.</p>}
    {selected && <p className="diagram-explain" role="status">À {spec.rows[selected[0]]} / {spec.columns[selected[1]]}, {spec.rowPlayer} {rowBest(...selected) ? 'ne peut pas gagner davantage en changeant seul de ligne' : 'peut gagner davantage en changeant seul de ligne'} ; {spec.colPlayer} {colBest(...selected) ? 'ne peut pas gagner davantage en changeant seul de colonne' : 'peut gagner davantage en changeant seul de colonne'}.</p>}
  </>;
}

function Bars({ spec }: { spec: Extract<LessonDiagramSpec, { kind: 'bars' }> }) {
  const [selected, setSelected] = useState(0);
  const max = Math.max(1, ...spec.items.map((item) => Math.abs(item.value)));
  const negative = spec.items.some((item) => item.value < 0);
  return <><div className="diagram-bars">{spec.items.map((item, i) => <button type="button" key={item.label} aria-pressed={selected === i} onClick={() => setSelected(i)} className="diagram-bar-row">
    <span>{item.label}</span><span className={`diagram-bar-track ${negative ? 'signed' : ''}`}><span style={{ background: ink(item.color), width: `${Math.abs(item.value) / max * (negative ? 50 : 100)}%`, left: `${negative ? item.value < 0 ? 50 - Math.abs(item.value) / max * 50 : 50 : 0}%` }} /></span><b>{fmt(item.value, 2)} {spec.unit}</b>
  </button>)}</div><p className="diagram-explain" role="status">{spec.items[selected].explain}</p></>;
}

function Sequence({ spec }: { spec: Extract<LessonDiagramSpec, { kind: 'sequence' }> }) {
  const [selected, setSelected] = useState(0);
  return <ol className="diagram-sequence">{spec.steps.map((step, i) => <li key={`${i}-${step.actor}`}><button type="button" aria-expanded={selected === i} onClick={() => setSelected(i)}><b>{step.actor}</b><span>{step.action}</span></button>{selected === i && <p>{step.consequence}</p>}</li>)}</ol>;
}

export function LessonDiagram({ spec }: { spec: LessonDiagramSpec }) {
  return <figure className="lesson-diagram"><figcaption>{spec.title}</figcaption>
    {spec.kind === 'curves' ? <Curves spec={spec} /> : spec.kind === 'matrix' ? <Matrix spec={spec} /> : spec.kind === 'bars' ? <Bars spec={spec} /> : <Sequence spec={spec} />}
    <p className="small muted">{spec.note}</p><p className="small">Source : {spec.refs.map((ref) => <SourceRef key={ref} r={ref} />)}</p>
  </figure>;
}
