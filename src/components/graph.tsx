// InteractiveEconGraph — externality diagram in native SVG.
// Everything clickable answers "what does this literally represent?" and can go one "why" deeper.

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { analyze, fmt, mec, meb, mpb, mpc, msb, msc, policyCurve, wedge, type ExtModel } from '../econ';
import type { El } from '../content/types';
import { GLOSS } from '../content/glossary';
import { WHY } from '../content/externalities';
import { WhyChain } from './learning';
import { Rich } from './text';
import { Cross } from './icons';
import { t, tq } from '../i18n';

export type Sel = { kind: 'curve' | 'area' | 'marker'; id: El } | { kind: 'unit'; q: number } | null;

type CurveDef = { id: El; label: string; color: string; f: (q: number) => number; dash?: string; why: string; thin?: boolean; noLabel?: boolean };

function curvesFor(m: ExtModel, show: El[], policy: number): CurveDef[] {
  const pos = m.kind === 'positive';
  const has = (e: El) => show.includes(e);
  const social = (q: number) => (pos ? msb(m, q) : msc(m, q));
  // At the Pigouvian policy with a constant externality, MPB + s lies exactly on MSB (MPC + t on MSC):
  // keep society's solid line visible, lay the policy curve on it as a fine dash and merge the labels.
  const coincident = has('POL') && policy > 0 && has(pos ? 'MSB' : 'MSC') &&
    [0, m.qMax / 2, m.qMax].every((q) => Math.abs(policyCurve(m, q, policy) - social(q)) < 0.25);
  const list: CurveDef[] = [];
  if (has('MPB')) list.push({ id: 'MPB', label: !pos && has('MSC') ? 'MPB = MSB' : 'MPB', color: 'var(--buyer)', f: (q) => mpb(m, q), why: 'c:MPB' });
  if (has('MPC')) list.push({ id: 'MPC', label: pos && has('MSB') ? 'MPC = MSC' : 'MPC', color: 'var(--producer)', f: (q) => mpc(m, q), why: 'c:MPC' });
  if (pos && has('MEB')) list.push({ id: 'MEB', label: 'MEB', color: 'var(--third)', f: (q) => meb(m, q), dash: '5 4', why: 'c:MEB' });
  if (!pos && has('MEC')) list.push({ id: 'MEC', label: 'MEC', color: 'var(--third)', f: (q) => mec(m, q), dash: '5 4', why: 'c:MEC' });
  if (pos && has('MSB')) list.push({ id: 'MSB', label: coincident ? 'MSB = MPB + s' : 'MSB', color: 'var(--society)', f: (q) => msb(m, q), why: 'c:MSB' });
  if (!pos && has('MSC')) list.push({ id: 'MSC', label: coincident ? 'MSC = MPC + t' : 'MSC', color: 'var(--society)', f: (q) => msc(m, q), why: 'c:MSC' });
  if (has('POL') && policy > 0)
    list.push({ id: 'POL', label: pos ? `MPB + s` : `MPC + t`, color: pos ? 'var(--buyer)' : 'var(--producer)', f: (q) => policyCurve(m, q, policy), dash: coincident ? '6 6' : '7 5', thin: coincident, noLabel: coincident, why: pos ? 'c:POL+' : 'c:POL-' });
  return list;
}

const niceStep = (max: number) => {
  const raw = max / 7;
  const pow = 10 ** Math.floor(Math.log10(raw));
  const n = raw / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * pow;
};

function useWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(640);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(Math.max(280, Math.round(e.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, w] as const;
}

/** The "pick one unit" explanation, available at any Q. */
export function unitStory(m: ExtModel, q: number, policy: number, social: boolean): string[] {
  const pos = m.kind === 'positive';
  const privB = mpb(m, q) + (pos ? policy : 0);
  const privC = mpc(m, q) + (pos ? 0 : policy);
  const traded = privB >= privC - 1e-9;
  const sub = pos && policy ? ' ' + t('(subvention comprise)') : '';
  const tax = !pos && policy ? ' ' + t('(taxe comprise)') : '';
  const lines = [
    traded
      ? t('Échangée : elle vaut {b} pour l’acheteur{sub} et coûte {c}{tax} au vendeur.', { b: fmt(privB), sub, c: fmt(privC), tax })
      : t('Pas échangée : l’acheteur ne paierait que {b}{sub} pour un coût de {c}{tax}.', { b: fmt(privB), sub, c: fmt(privC), tax }),
  ];
  if (social) {
    const gap = msb(m, q) - msc(m, q);
    lines.push(t('Pour la société : valeur {v} − coût {c} = {g}.', { v: fmt(msb(m, q)), c: fmt(msc(m, q)), g: `${gap >= 0 ? '+' : ''}${fmt(gap)}` }));
    if (!traded && gap > 1e-9) lines.push(t('⇒ Unité manquante : la société perd {g} € parce qu’elle n’est pas produite.', { g: fmt(gap) }));
    if (traded && gap < -1e-9) lines.push(t('⇒ Unité en trop : elle détruit {g} € de bien-être.', { g: fmt(-gap) }));
  }
  return lines;
}

type Props = {
  model: ExtModel;
  show: El[];
  focus?: El;
  policy: number;
  cursor: number;
  onCursor: (q: number) => void;
  selected: Sel;
  onSelect: (s: Sel) => void;
  fresh?: El[];
  animKey?: string;
};

export function InteractiveEconGraph({ model: m, show, focus, policy: rawPolicy, cursor, onCursor, selected, onSelect, fresh = [], animKey = '' }: Props) {
  const [wrapRef, W] = useWidth();
  const H = Math.round(Math.min(480, Math.max(290, W * 0.64)));
  const ml = 50, mr = W < 480 ? 58 : 76, mt = 14, mb = 60;
  const pw = W - ml - mr, ph = H - mt - mb;
  const policy = show.includes('POL') ? rawPolicy : 0;
  const pos = m.kind === 'positive';
  const A = useMemo(() => analyze(m, policy), [m, policy]);
  const curves = curvesFor(m, show, policy);
  const x = (q: number) => ml + (q / m.qMax) * pw;
  const y = (p: number) => mt + ph - (p / m.pMax) * ph;
  const has = (e: El) => show.includes(e);
  const cls = (e: El, base = '') => `${base} ${focus === e ? 'pulse' : ''} ${fresh.includes(e) ? 'fresh' : ''}`.trim();
  const k = (e: El) => (fresh.includes(e) ? `${e}-${animKey}` : e);

  const path = (f: (q: number) => number, lo = 0, hi = m.qMax, n = 120) => {
    const pts: string[] = [];
    for (let i = 0; i <= n; i++) {
      const q = lo + ((hi - lo) * i) / n;
      const p = f(q);
      if (p < -1e-9 || p > m.pMax * 1.04) continue;
      pts.push(`${x(q).toFixed(1)},${y(p).toFixed(1)}`);
    }
    return pts.length > 1 ? `M${pts.join('L')}` : '';
  };
  const band = (top: (q: number) => number, bot: (q: number) => number, lo: number, hi: number) => {
    if (hi - lo < 1e-6) return '';
    const n = 40, up: string[] = [], down: string[] = [];
    for (let i = 0; i <= n; i++) {
      const q = lo + ((hi - lo) * i) / n;
      up.push(`${x(q).toFixed(1)},${y(top(q)).toFixed(1)}`);
      down.unshift(`${x(q).toFixed(1)},${y(bot(q)).toFixed(1)}`);
    }
    return `M${up.join('L')}L${down.join('L')}Z`;
  };

  const qNow = A.now.q, qStar = A.qStar;
  const dwlLo = Math.min(qNow, qStar), dwlHi = Math.max(qNow, qStar);
  const under = qNow < qStar;
  const dwlTop = under ? (q: number) => msb(m, q) : (q: number) => msc(m, q);
  const dwlBot = under ? (q: number) => msc(m, q) : (q: number) => msb(m, q);

  const units: number[] = [];
  if (has('UNITS')) for (let q = Math.floor(dwlLo) + 1; q <= dwlHi + 1e-9; q++) units.push(q);

  const stepQ = niceStep(m.qMax), stepP = niceStep(m.pMax);
  const ticksQ: number[] = [], ticksP: number[] = [];
  for (let v = 0; v <= m.qMax + 1e-9; v += stepQ) ticksQ.push(v);
  for (let v = 0; v <= m.pMax + 1e-9; v += stepP) ticksP.push(v);

  const toQ = (clientX: number, svg: SVGSVGElement) => {
    const r = svg.getBoundingClientRect();
    const q = ((clientX - r.left - ml) / pw) * m.qMax;
    return Math.max(0, Math.min(m.qMax, Math.round(q * 10) / 10));
  };

  // Right-edge labels: at each curve's end (right-aligned when they would overflow), kept above the axis,
  // then pushed apart upward from the bottom so they never overlap each other or the tick figures.
  const labels = curves
    .filter((c) => !c.noLabel)
    .map((c) => {
      let q = m.qMax;
      while (q > 0 && (c.f(q) < 0 || c.f(q) > m.pMax)) q -= m.qMax / 200;
      const lx = x(q);
      const fits = lx + 6 + c.label.length * 7.4 <= W - 2; // mono 12px ≈ 7.2px per glyph
      return { c, lx: fits ? lx + 6 : W - 2, anchor: fits ? ('start' as const) : ('end' as const), ly: Math.min(y(c.f(q)) + 4, y(0) - 6) };
    })
    .sort((a, b) => b.ly - a.ly);
  for (let i = 1; i < labels.length; i++) if (labels[i - 1].ly - labels[i].ly < 14) labels[i].ly = labels[i - 1].ly - 14;

  const cx = x(cursor);
  const marker = (id: El, q: number, p: number, label: string, color: string, row = 0) => (
    <g key={k(id)} className={cls(id, 'marker')} onClick={() => onSelect({ kind: 'marker', id })} role="button" aria-label={label}>
      <line x1={x(q)} x2={x(q)} y1={y(0)} y2={y(p)} stroke={color} strokeDasharray="3 4" strokeWidth={1.3} />
      <line x1={x(0)} x2={x(q)} y1={y(p)} y2={y(p)} stroke={color} strokeDasharray="3 4" strokeWidth={1} opacity={0.6} />
      <circle cx={x(q)} cy={y(p)} r={5} fill="var(--surface)" stroke={color} strokeWidth={2} />
      <text x={x(q)} y={y(0) + 30 + row * 13} textAnchor="middle" className="g-mlabel" fill={color}>{label}</text>
      <text x={x(0) - 6} y={y(p) + 4} textAnchor="end" className="g-tick" fill={color}>{fmt(p, 1)}</text>
    </g>
  );

  return (
    <div className="graph" ref={wrapRef}>
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        className="graph-svg"
        role="img"
        aria-label={`Graphique : ${curves.map((c) => c.label).join(', ') || 'axes vides'}`}
        onPointerMove={(e) => onCursor(toQ(e.clientX, e.currentTarget))}
        onPointerDown={(e) => onCursor(toQ(e.clientX, e.currentTarget))}
      >
        <defs>
          <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="7" stroke="var(--dwl)" strokeWidth="2" opacity="0.5" />
          </pattern>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--third)" />
          </marker>
        </defs>

        {/* axes */}
        {ticksP.map((v) => (
          <g key={`p${v}`}>
            <line x1={ml} x2={ml + pw} y1={y(v)} y2={y(v)} className="g-grid" />
            <text x={ml - 8} y={y(v) + 4} textAnchor="end" className="g-tick">{fmt(v)}</text>
          </g>
        ))}
        {ticksQ.map((v) => (
          <text key={`q${v}`} x={x(v)} y={y(0) + 16} textAnchor="middle" className="g-tick">{fmt(v)}</text>
        ))}
        <line x1={ml} x2={ml + pw} y1={y(0)} y2={y(0)} className="g-axis" />
        <line x1={ml} x2={ml} y1={mt} y2={y(0)} className="g-axis" />
        <text x={ml + pw + 8} y={y(0) + 4} className="g-axlabel" aria-label={t('Q, en {u}', { u: m.unit })}>Q</text>
        <text x={ml - 40} y={mt + 4} className="g-axlabel">{tq('€ / unité')}</text>

        {/* areas */}
        {has('CS') && <path key={k('CS')} d={band((q) => mpb(m, q), () => A.now.pBuyer, 0, qNow)} className={cls('CS', 'area area-cs')} onClick={() => onSelect({ kind: 'area', id: 'CS' })} />}
        {has('PS') && <path key={k('PS')} d={band(() => A.now.pSeller, (q) => mpc(m, q), 0, qNow)} className={cls('PS', 'area area-ps')} onClick={() => onSelect({ kind: 'area', id: 'PS' })} />}
        {has('EXT') && <path key={k('EXT')} d={band((q) => (pos ? meb(m, q) : mec(m, q)), () => 0, 0, qNow)} className={cls('EXT', 'area area-ext')} onClick={() => onSelect({ kind: 'area', id: 'EXT' })} />}
        {has('GOV') && policy > 0 && (
          <path key={k('GOV')} d={band(() => Math.max(A.now.pBuyer, A.now.pSeller), () => Math.min(A.now.pBuyer, A.now.pSeller), 0, qNow)} className={cls('GOV', 'area area-gov')} onClick={() => onSelect({ kind: 'area', id: 'GOV' })} />
        )}
        {has('DWL') && dwlHi - dwlLo > 1e-6 && (
          <g key={k('DWL')} className={cls('DWL', 'area-dwl')} onClick={() => onSelect({ kind: 'area', id: 'DWL' })}>
            <path d={band(dwlTop, dwlBot, dwlLo, dwlHi)} className="area area-dwl-fill" />
            <path d={band(dwlTop, dwlBot, dwlLo, dwlHi)} fill="url(#hatch)" />
          </g>
        )}

        {/* markers */}
        {has('QM') && marker('QM', A.market.q, A.market.pBuyer, `Qm = ${fmt(A.market.q)}`, 'var(--ink-2)')}
        {has('QS') && marker('QS', qStar, pos ? msb(m, qStar) : mpb(m, qStar), `Q* = ${fmt(qStar)}`, 'var(--society)', 1)}
        {has('QP') && policy > 0 && Math.abs(qNow - qStar) > 0.05 && marker('QP', qNow, pos ? mpc(m, qNow) : mpb(m, qNow), `Q = ${fmt(qNow)}`, pos ? 'var(--buyer)' : 'var(--producer)', 2)}
        {has('PRICES') && policy > 0 && (
          <g key={k('PRICES')} className={cls('PRICES', 'marker')} onClick={() => onSelect({ kind: 'marker', id: 'PRICES' })}>
            <line x1={x(0)} x2={x(qNow)} y1={y(A.now.pBuyer)} y2={y(A.now.pBuyer)} stroke="var(--buyer)" strokeWidth={1.4} strokeDasharray="2 3" />
            <line x1={x(0)} x2={x(qNow)} y1={y(A.now.pSeller)} y2={y(A.now.pSeller)} stroke="var(--producer)" strokeWidth={1.4} strokeDasharray="2 3" />
            <text x={x(0) + 6} y={y(A.now.pBuyer) + (A.now.pBuyer < A.now.pSeller ? 14 : -5)} className="g-mlabel" fill="var(--buyer)">p_b = {fmt(A.now.pBuyer)}</text>
            <text x={x(0) + 6} y={y(A.now.pSeller) + (A.now.pBuyer < A.now.pSeller ? -5 : 14)} className="g-mlabel" fill="var(--producer)">p_s = {fmt(A.now.pSeller)}</text>
          </g>
        )}

        {/* curves */}
        {curves.map((c) => (
          <g key={k(c.id)} className={cls(c.id, 'curve')} onClick={() => onSelect({ kind: 'curve', id: c.id })} role="button" aria-label={`Courbe ${c.label}`}>
            <path d={path(c.f)} stroke={c.color} strokeDasharray={c.dash} pathLength={c.dash ? undefined : 1} className={`curve-line ${c.dash ? 'dashed' : 'drawable'} ${c.thin ? 'thin' : ''}`} />
            <path d={path(c.f)} className="curve-hit" />
          </g>
        ))}
        {labels.map(({ c, lx, anchor, ly }) => (
          <text key={`l-${c.id}`} x={lx} y={ly} className="g-clabel" fill={c.color} textAnchor={anchor} onClick={() => onSelect({ kind: 'curve', id: c.id })}>
            {c.label}
          </text>
        ))}

        {/* missing / excess units */}
        {units.map((q) => {
          const top = Math.max(dwlTop(q), dwlBot(q)), b = Math.min(dwlTop(q), dwlBot(q));
          const sel = selected?.kind === 'unit' && Math.abs(selected.q - q) < 1e-9;
          return (
            <g key={`u${q}`} className={`unit ${sel ? 'unit-sel' : ''} ${focus === 'UNITS' ? 'pulse' : ''}`} onClick={(e) => { e.stopPropagation(); onSelect({ kind: 'unit', q }); onCursor(q); }} role="button" aria-label={t('Unité au point {q}', { q })}>
              <rect x={x(q) - 9} y={y(top) - 4} width={18} height={Math.max(8, y(b) - y(top) + 8)} fill="transparent" />
              {top - b > 1e-6 ? <line x1={x(q)} x2={x(q)} y1={y(top)} y2={y(b)} className="unit-bar" /> : <circle cx={x(q)} cy={y(top)} r={3} className="unit-dot" />}
            </g>
          );
        })}

        {/* cursor */}
        <line x1={cx} x2={cx} y1={mt} y2={y(0)} className="g-cursor" />
        {pos && has('MEB') && has('MSB') && has('MPB') && meb(m, cursor) > 0.5 && (
          <g className="meb-arrow">
            <line x1={cx + 10} x2={cx + 10} y1={y(mpb(m, cursor))} y2={y(msb(m, cursor)) + 3} stroke="var(--third)" strokeWidth={1.6} markerEnd="url(#arrow)" />
            <text x={cx + 15} y={(y(mpb(m, cursor)) + y(msb(m, cursor))) / 2 + 4} className="g-mlabel" fill="var(--third)">+{fmt(meb(m, cursor))}</text>
          </g>
        )}
        {curves.map((c) => {
          const v = c.f(cursor);
          if (v < 0 || v > m.pMax) return null;
          return <circle key={`d-${c.id}`} cx={cx} cy={y(v)} r={3.5} fill={c.color} className="g-dot" />;
        })}
      </svg>
    </div>
  );
}

/** Readout at the cursor + inspector of the selected element. */
export function GraphInspector({ model: m, show, policy: rawPolicy, cursor, selected, onClear }: { model: ExtModel; show: El[]; policy: number; cursor: number; selected: Sel; onClear: () => void }) {
  const policy = show.includes('POL') ? rawPolicy : 0;
  const pos = m.kind === 'positive';
  const A = analyze(m, policy);
  const curves = curvesFor(m, show, policy);
  const social = pos ? show.includes('MSB') : show.includes('MSC');

  if (!selected) {
    return (
      <div className="inspector">
        <div className="insp-head">
          <span className="insp-q">Q = {fmt(cursor, 1)}</span>
          <span className="muted small">{t('Déplace le curseur · clique une courbe, une zone ou une barre')}</span>
        </div>
        {curves.length > 0 && (
          <div className="readout">
            {curves.map((c) => (
              <span key={c.id} className="readout-item"><i style={{ background: c.color }} />{c.label} <b>{fmt(c.f(cursor))}</b></span>
            ))}
          </div>
        )}
        {show.includes('MPB') && show.includes('MPC') && (
          <ul className="story">{unitStory(m, cursor, policy, social).map((l, i) => <li key={i}>{l}</li>)}</ul>
        )}
      </div>
    );
  }

  let title = '', literal = '', value = '', whyId = '', extra: string[] = [];
  if (selected.kind === 'curve') {
    const c = curves.find((x) => x.id === selected.id);
    const g = GLOSS[selected.id];
    title = c?.label ?? selected.id;
    literal = selected.id === 'POL'
      ? pos ? t('Ce que vaut une unité de plus pour le portefeuille de l’acheteur une fois la subvention versée : MPB + s.') : t('Ce que coûte une unité de plus au producteur une fois la taxe payée : MPC + t.')
      : g ? `${g.english} — ${g.french}. ${g.literal}.` : '';
    value = c ? t('Au point Q = {q} : {v} € par unité.', { q: fmt(cursor, 1), v: fmt(c.f(cursor)) }) : '';
    whyId = c?.why ?? '';
  } else if (selected.kind === 'area') {
    const id = selected.id;
    const lo = Math.min(A.now.q, A.qStar), hi = Math.max(A.now.q, A.qStar);
    const inside = cursor >= lo && cursor <= hi;
    if (id === 'DWL') {
      const under = A.now.q < A.qStar;
      title = under ? tq('Perte sèche — unités manquantes') : tq('Perte sèche — unités en trop');
      literal = under
        ? t('Ces unités ne sont pas produites alors que leur bénéfice social dépasse leur coût social.')
        : t('Ces unités sont produites alors que leur coût social dépasse leur bénéfice social.');
      value = t('Aire = {a} € (entre Q = {lo} et Q* = {q}).', { a: fmt(A.dwlNow), lo: fmt(lo), q: fmt(A.qStar) });
      if (inside) extra = [t('Tranche au point Q = {q} : |MSB − MSC| = |{b} − {c}| = {g} € perdus sur cette unité.', { q: fmt(cursor, 1), b: fmt(msb(m, cursor)), c: fmt(msc(m, cursor)), g: fmt(Math.abs(msb(m, cursor) - msc(m, cursor))) })];
      else extra = [t('Place le curseur dans la zone pour voir la tranche d’une unité.')];
      whyId = under ? 'a:dwl-under' : 'a:dwl-over';
    } else if (id === 'CS') {
      title = tq('Surplus du consommateur (CS)'); literal = t('Gain net des acheteurs : pour chaque unité achetée, sa valeur pour l’acheteur moins le prix payé.');
      value = t('Aire = {a} €.', { a: fmt(A.now.CS) }); whyId = 'a:cs';
      if (cursor <= A.now.q) extra = [t('Tranche au point {q} : MPB {b} − p_b {p} = {g}.', { q: fmt(cursor, 1), b: fmt(mpb(m, cursor)), p: fmt(A.now.pBuyer), g: fmt(mpb(m, cursor) - A.now.pBuyer) })];
    } else if (id === 'PS') {
      title = tq('Surplus du producteur (PS)'); literal = t('Gain net des vendeurs : pour chaque unité vendue, le prix reçu moins son coût marginal.');
      value = t('Aire = {a} €.', { a: fmt(A.now.PS) }); whyId = 'a:ps';
      if (cursor <= A.now.q) extra = [t('Tranche au point {q} : p_s {p} − MPC {c} = {g}.', { q: fmt(cursor, 1), p: fmt(A.now.pSeller), c: fmt(mpc(m, cursor)), g: fmt(A.now.pSeller - mpc(m, cursor)) })];
    } else if (id === 'GOV') {
      title = pos ? tq('Dépense de subvention') : tq('Recette fiscale');
      literal = pos ? t('Ce que paient les contribuables : s par unité échangée. Un transfert, pas une destruction.') : t('Ce que reçoit l’État : t par unité échangée. Un transfert, pas une perte sèche.');
      value = `${fmt(policy)} × ${fmt(A.now.q)} = ${fmt(Math.abs(A.now.gov))} €.`; whyId = pos ? 'a:gov+' : 'a:gov-';
    } else if (id === 'EXT') {
      title = pos ? tq('Bénéfice externe total') : tq('Dommage externe total');
      literal = pos ? t('Somme des bénéfices reçus par les tiers pour toutes les unités produites (aire sous MEB).') : t('Somme des dommages subis par les tiers pour toutes les unités produites (aire sous MEC).');
      value = t('Aire = {a} €.', { a: fmt(Math.abs(A.now.ext)) }); whyId = pos ? 'a:ext+' : 'a:ext-';
    }
  } else if (selected.kind === 'marker') {
    if (selected.id === 'QM') { title = `Qm = ${fmt(A.market.q)}`; literal = t('Ici MPB = MPC : le dernier échange vaut autant pour l’acheteur qu’il coûte au producteur. Au-delà, MPB < MPC : plus aucun prix n’arrange les deux.'); whyId = 'f:market'; }
    else if (selected.id === 'QS') { title = `Q* = ${fmt(A.qStar)}`; literal = t('Ici MSB = MSC : la dernière unité vaut pour la société exactement ce qu’elle lui coûte. Avant, ajouter augmente le bien-être ; après, le diminue.'); whyId = 'f:opt'; }
    else if (selected.id === 'QP') { title = tq('Q avec politique = {q}', { q: fmt(A.now.q) }); literal = pos ? t('Ici MPB + s = MPC : la décision privée subventionnée s’arrête.') : t('Ici MPB = MPC + t : la décision privée taxée s’arrête.'); whyId = pos ? 'c:POL+' : 'c:POL-'; }
    else if (selected.id === 'PRICES') { title = `p_b = ${fmt(A.now.pBuyer)} · p_s = ${fmt(A.now.pSeller)}`; literal = pos ? t('L’acheteur paie p_b ; le vendeur reçoit p_s = p_b + s ; l’État paie l’écart.') : t('L’acheteur paie p_b ; le vendeur garde p_s = p_b − t ; l’État encaisse l’écart.'); whyId = 'r:gov'; }
  } else if (selected.kind === 'unit') {
    title = tq('Unité au point Q = {q}', { q: fmt(selected.q) });
    literal = '';
    extra = unitStory(m, selected.q, policy, true);
    whyId = A.now.q < A.qStar ? 'a:dwl-under' : 'a:dwl-over';
  }
  const why = WHY[whyId];
  return (
    <div className="inspector inspector-sel">
      <div className="insp-head">
        <b>{title}</b>
        <button type="button" className="icon-btn" onClick={onClear} aria-label={t('Fermer l’inspecteur')}><Cross size={14} /></button>
      </div>
      {literal && <p><Rich text={literal} /></p>}
      {value && <p className="muted">{value}</p>}
      {extra.length > 0 && <ul className="story">{extra.map((l, i) => <li key={i}>{l}</li>)}</ul>}
      {why && <WhyChain layers={why.layers} label={t('Pourquoi ?')} key={whyId + title} />}
    </div>
  );
}

/**
 * Unit strip: one numbered cell per unit, like a specimen's glyph grid. A cell's weight is the private
 * incentive to trade that unit (MPB − MPC, plus the subsidy or minus the tax). The weight is computed in CSS
 * from one custom property per cell plus the policy on the container, so dragging the slider remaps every cell.
 */
export function UnitStrip({ model: m, show, policy: rawPolicy, cursor, onPick }: { model: ExtModel; show: El[]; policy: number; cursor: number; onPick: (q: number) => void }) {
  const policy = show.includes('POL') ? rawPolicy : 0;
  const pos = m.kind === 'positive';
  const A = analyze(m, policy);
  const social = pos ? show.includes('MSB') : show.includes('MSC');
  // At most ~36 cells: large models show every k-th unit, each cell still a real unit number.
  const step = Math.max(1, Math.ceil(Math.floor(m.qMax) / 36));
  const units = Array.from({ length: Math.floor(Math.floor(m.qMax) / step) }, (_, i) => (i + 1) * step);
  const rows = Math.ceil(units.length / 18);
  const style = {
    '--w': wedge(m, policy),
    '--k': 560 / Math.max(1, m.a - m.c),
    '--cols': Math.ceil(units.length / rows),
    '--cols-sm': Math.ceil(units.length / Math.ceil(units.length / 12)),
  } as CSSProperties;
  return (
    <div className="units-wrap">
      <div className="units-cap">
        <span>{t('Graisse = incitation privée')} {policy ? (pos ? '(MPB + s − MPC)' : '(MPB − MPC − t)') : '(MPB − MPC)'}{step > 1 ? ` · ${t('une unité sur {n}', { n: step })}` : ''}</span>
        {social && <span>{t('Souligné : manquante · barré : en trop')}</span>}
      </div>
      <div className="units" style={style} role="group" aria-label={t('Les unités une par une')}>
        {units.map((q) => {
          const traded = q <= A.now.q + 1e-9;
          const gap = msb(m, q) - msc(m, q);
          const missing = social && !traded && gap > 1e-9;
          const excess = social && traded && gap < -1e-9;
          const cls = `ucell ${traded ? 'traded' : ''} ${missing ? 'missing' : ''} ${excess ? 'excess' : ''} ${Math.round(cursor / step) * step === q ? 'cur' : ''}`;
          return (
            <button
              key={q}
              type="button"
              className={cls}
              style={{ '--a': mpb(m, q) - mpc(m, q) } as CSSProperties}
              onClick={() => onPick(q)}
              aria-label={`${t('Unité {q} :', { q })} ${traded ? t('échangée') : t('pas échangée')}${missing ? `, ${t('manquante pour la société')}` : ''}${excess ? `, ${t('en trop pour la société')}` : ''}`}
            >
              {q}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Policy slider (subsidy for positive, tax for negative) with an animated path to the optimum. */
export function PolicyControl({ model: m, policy, setPolicy, allowOptimal = true }: { model: ExtModel; policy: number; setPolicy: (v: number) => void; allowOptimal?: boolean }) {
  const raf = useRef(0);
  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  const A = analyze(m, policy);
  const pos = m.kind === 'positive';
  const max = Math.max(40, Math.ceil((A.optimalPolicy * 2.2) / 5) * 5);
  const animate = (to: number) => {
    cancelAnimationFrame(raf.current);
    const from = policy, t0 = performance.now(), D = 1400;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / D);
      const e = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
      setPolicy(Math.round((from + (to - from) * e) * 10) / 10);
      if (k < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  };
  return (
    <div className="policy">
      <AxisSlider
        label={pos ? t('Subvention par unité') : t('Taxe par unité')}
        display={`${pos ? 's' : 't'} = ${fmt(policy)}`}
        value={policy}
        min={0}
        max={max}
        step={0.5}
        onChange={(v) => { cancelAnimationFrame(raf.current); setPolicy(v); }}
      />
      <div className="policy-actions">
        {allowOptimal && <button type="button" className="ghost small nowrap" onClick={() => animate(A.optimalPolicy)}>{t('Animer jusqu’à')} {pos ? 's*' : 't*'} = {fmt(A.optimalPolicy)}</button>}
        <button type="button" className="ghost small nowrap" onClick={() => animate(0)}>{t('Retirer la politique')}</button>
      </div>
      <p className="policy-read"><span>Q = {fmt(A.now.q)}</span><span>Q* = {fmt(A.qStar)}</span><span>DWL = {fmt(A.dwlNow)}</span></p>
    </div>
  );
}

/** Axis control in the specimen's grammar: mono label, live value at the right, hairline track with its ends. */
export function AxisSlider({ label, display, value, min, max, step, onChange }: { label: string; display: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void }) {
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
  return (
    <div className="axis-ctl">
      <div className="axis-top">
        <span>{label}</span>
        <span className="axis-val">{display}</span>
      </div>
      <input className="axis" type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} aria-label={label} aria-valuetext={display} style={{ '--pct': `${pct}%` } as CSSProperties} />
      <div className="axis-ends" aria-hidden>
        <span>{fmt(min)}</span>
        <span>{fmt(max)}</span>
      </div>
    </div>
  );
}

/** Welfare accounts: laissez-faire vs current policy vs optimum. */
export function WelfareTable({ model: m, policy }: { model: ExtModel; policy: number }) {
  const A = analyze(m, policy);
  const pos = m.kind === 'positive';
  const cols = [
    { h: t('Sans intervention'), o: A.market, d: A.dwlMarket },
    { h: `${pos ? 's' : 't'} = ${fmt(policy)}`, o: A.now, d: A.dwlNow },
    { h: `${t('Optimum')} (${pos ? 's*' : 't*'} = ${fmt(A.optimalPolicy)})`, o: A.optimal, d: 0 },
  ];
  const rows: { label: string; get: (c: (typeof cols)[number]) => number; note: string }[] = [
    { label: 'Q', get: (c) => c.o.q, note: t('quantité échangée') },
    { label: 'CS', get: (c) => c.o.CS, note: t('acheteurs') },
    { label: 'PS', get: (c) => c.o.PS, note: t('vendeurs') },
    { label: pos ? t('État (− subvention)') : t('État (+ recette)'), get: (c) => c.o.gov, note: t('transfert') },
    { label: pos ? t('+ bénéfice externe') : t('− dommage externe'), get: (c) => c.o.ext, note: t('tiers') },
    { label: 'W', get: (c) => c.o.W, note: t('bien-être total') },
    { label: 'DWL', get: (c) => c.d, note: t('vs optimum') },
  ];
  return (
    <div className="table-wrap">
      <table className="wtable">
        <thead>
          <tr><th />{cols.map((c) => <th key={c.h}>{c.h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className={r.label === 'W' || r.label === 'DWL' ? 'strong' : ''}>
              <th>{r.label} <span className="muted small">{r.note}</span></th>
              {cols.map((c) => <td key={c.h}>{fmt(r.get(c))}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
