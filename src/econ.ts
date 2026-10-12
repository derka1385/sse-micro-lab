// Externality model engine. Linear inverse curves, optional kinked MEB.
// Self-contained (no imports) so scripts/check.ts can run it with plain Node.

export type ExtModel = {
  id: string;
  name: string;
  ref: string; // source reference in the dossier
  kind: 'positive' | 'negative';
  a: number; b: number; // MPB = a - bQ  (demand)
  c: number; d: number; // MPC = c + dQ  (supply)
  e0?: number; e1?: number; // MEB = max(0, e0 - e1 Q)
  k0?: number; k1?: number; // MEC = k0 + k1 Q
  qMax: number; pMax: number;
  unit: string;
  constructed?: boolean; // pedagogical variant, not in the dossier
  story: string;
};

export const MODELS: Record<string, ExtModel> = {
  solar: {
    id: 'solar', name: 'Panneaux solaires (A6.3)', ref: '15:A6#6.3', kind: 'positive',
    a: 100, b: 3, c: 10, d: 2, e0: 20, e1: 0, qMax: 35, pMax: 130, unit: 'panneaux',
    story: 'A6.3 : MPB = 100 − 3Q, MPC = 10 + 2Q, MEB = 20 par panneau.',
  },
  variant: {
    id: 'variant', name: 'Variante : MEB décroissant', ref: '11.3', kind: 'positive',
    a: 100, b: 3, c: 10, d: 2, e0: 30, e1: 1, qMax: 35, pMax: 140, unit: 'panneaux', constructed: true,
    story: 'Variante construite (pas dans le cours) : MEB = 30 − Q. Les premiers panneaux remplacent les centrales les plus sales, les suivants des sources plus propres.',
  },
  vaccines: {
    id: 'vaccines', name: 'Vaccins (E2020 Q3)', ref: '16:E2020#Q3', kind: 'positive',
    a: 100, b: 1, c: 10, d: 1, e0: 20, e1: 0, qMax: 90, pMax: 130, unit: 'doses',
    story: 'E2020 Q3 : demande p = 100 − Q, offre p = 10 + Q, MEB = 20.',
  },
  gasoline: {
    id: 'gasoline', name: 'Essence (L11, E2023 Q4)', ref: '11.2', kind: 'negative',
    a: 100, b: 1, c: 10, d: 1, k0: 0, k1: 1, qMax: 60, pMax: 140, unit: 'unités',
    story: 'L11 p.5–8 et E2023 Q4c : MPB = 100 − Q, MPC = 10 + Q, MEC = Q.',
  },
  textiles: {
    id: 'textiles', name: 'Textiles (E2024 Q3)', ref: '16:E2024#Q3', kind: 'negative',
    a: 200, b: 1, c: 80, d: 1, k0: 0, k1: 1, qMax: 90, pMax: 280, unit: 'unités',
    story: 'E2024 Q3 : demande p = 200 − Q, MPC = 80 + Q, MEC = Q.',
  },
};

export const mpb = (m: ExtModel, q: number) => m.a - m.b * q;
export const mpc = (m: ExtModel, q: number) => m.c + m.d * q;
export const meb = (m: ExtModel, q: number) => (m.e0 == null ? 0 : Math.max(0, m.e0 - (m.e1 ?? 0) * q));
export const mec = (m: ExtModel, q: number) => (m.k0 == null ? 0 : m.k0 + (m.k1 ?? 0) * q);
export const msb = (m: ExtModel, q: number) => mpb(m, q) + meb(m, q);
export const msc = (m: ExtModel, q: number) => mpc(m, q) + mec(m, q);

/** Policy wedge: subsidy for a positive externality, tax for a negative one. Equilibrium: MPB + wedge = MPC. */
export const wedge = (m: ExtModel, policy: number) => (m.kind === 'positive' ? policy : -policy);
/** The privately relevant curve once the policy is in place (MPB + s, or MPC + t). */
export const policyCurve = (m: ExtModel, q: number, policy: number) =>
  m.kind === 'positive' ? mpb(m, q) + policy : mpc(m, q) + policy;

const clean = (x: number) => (Math.abs(x - Math.round(x)) < 1e-6 ? Math.round(x) : x);

/** Root of a decreasing function on [lo, hi] (clamped to the bounds). */
function root(f: (q: number) => number, lo: number, hi: number) {
  if (f(lo) <= 0) return lo;
  if (f(hi) >= 0) return hi;
  for (let i = 0; i < 90; i++) {
    const mid = (lo + hi) / 2;
    if (f(mid) > 0) lo = mid; else hi = mid;
  }
  return (lo + hi) / 2;
}

const kinks = (m: ExtModel) => (m.e1 ? [m.e0! / m.e1] : []);

/** Trapezoid integration split at kinks: exact for piecewise-linear integrands. */
export function integrate(f: (q: number) => number, lo: number, hi: number, breaks: number[] = []) {
  if (hi <= lo) return 0;
  const pts = [lo, ...breaks.filter((x) => x > lo && x < hi).sort((x, y) => x - y), hi];
  let s = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = 16, h = (b - a) / n;
    let acc = (f(a) + f(b)) / 2;
    for (let k = 1; k < n; k++) acc += f(a + k * h);
    s += acc * h;
  }
  return s;
}

export type Outcome = {
  q: number; pBuyer: number; pSeller: number;
  CS: number; PS: number; gov: number; ext: number; W: number;
};

/** Competitive outcome under a given policy (0 = laissez-faire). */
export function outcome(m: ExtModel, policy = 0): Outcome {
  const w = wedge(m, policy);
  const q = clean(root((x) => mpb(m, x) + w - mpc(m, x), 0, m.qMax));
  const pBuyer = mpb(m, q), pSeller = mpc(m, q), br = kinks(m);
  const CS = integrate((x) => mpb(m, x) - pBuyer, 0, q, br);
  const PS = integrate((x) => pSeller - mpc(m, x), 0, q, br);
  const gov = -w * q; // tax revenue (+) or subsidy spending (−): a transfer
  const ext = integrate((x) => meb(m, x) - mec(m, x), 0, q, br); // total external benefit (+) or damage (−)
  return { q, pBuyer, pSeller, CS, PS, gov, ext, W: CS + PS + gov + ext };
}

/** Social welfare from producing Q units: area between MSB and MSC. */
export const welfare = (m: ExtModel, q: number) => integrate((x) => msb(m, x) - msc(m, x), 0, q, kinks(m));

export function analyze(m: ExtModel, policy = 0) {
  const market = outcome(m, 0);
  const qStar = clean(root((x) => msb(m, x) - msc(m, x), 0, m.qMax));
  const wStar = welfare(m, qStar);
  const now = outcome(m, policy);
  const optimalPolicy = clean(m.kind === 'positive' ? meb(m, qStar) : mec(m, qStar));
  return {
    market, qStar, wStar, now, optimalPolicy,
    dwlMarket: wStar - market.W,
    dwlNow: wStar - now.W,
    optimal: outcome(m, optimalPolicy),
  };
}

/** Rounded display: integers stay integers, otherwise up to 2 decimals. */
export function fmt(x: number, digits = 2) {
  if (!isFinite(x)) return '—';
  const r = Math.round(x * 10 ** digits) / 10 ** digits;
  const s = Object.is(r, -0) ? '0' : String(r);
  return s.replace('-', '−');
}
