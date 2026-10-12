// Self-check: the engine must reproduce the dossier's recalculated results, and the parser
// must find the dossier's structure. Run with `npm run check`.
import { readFileSync } from 'node:fs';
import { strict as assert } from 'node:assert';
import { MODELS, analyze, outcome } from '../src/econ.ts';
import { parseDossier, resolveRef } from '../src/source.ts';

const near = (a: number, b: number, msg: string) => assert.ok(Math.abs(a - b) < 1e-6, `${msg}: got ${a}, expected ${b}`);

// A6.3 solar (§15): Qpriv 18, p 46, Qeff 22, s* 20, DWL 40, W 1170 → 1210
const solar = analyze(MODELS.solar, 20);
near(solar.market.q, 18, 'solar Qm'); near(solar.market.pBuyer, 46, 'solar p');
near(solar.qStar, 22, 'solar Q*'); near(solar.optimalPolicy, 20, 'solar s*');
near(solar.dwlMarket, 40, 'solar DWL');
near(solar.market.CS, 486, 'solar CS'); near(solar.market.PS, 324, 'solar PS'); near(solar.market.ext, 360, 'solar EB');
near(solar.market.W, 1170, 'solar W market');
near(solar.now.pBuyer, 34, 'solar p_b'); near(solar.now.pSeller, 54, 'solar p_s');
near(solar.now.CS, 726, 'solar CS*'); near(solar.now.PS, 484, 'solar PS*'); near(solar.now.gov, -440, 'solar subsidy');
near(solar.now.W, 1210, 'solar W*');

// E2020 Q3 vaccines (§16): Q45 p55, Q*55, DWL 100; s30 → Q60, p_b40, p_s70, DWL 25
const vac = analyze(MODELS.vaccines, 30);
near(vac.market.q, 45, 'vac Qm'); near(vac.qStar, 55, 'vac Q*'); near(vac.dwlMarket, 100, 'vac DWL');
near(vac.now.q, 60, 'vac Q(s=30)'); near(vac.now.pBuyer, 40, 'vac p_b'); near(vac.now.pSeller, 70, 'vac p_s'); near(vac.dwlNow, 25, 'vac DWL(s=30)');

// L11 / E2023 gasoline (§11.2–11.3): Q45 → Q*30, DWL 337.5; t20 → Q35, p_b65, p_s45, DWL 37.5; t* 30
const gas = analyze(MODELS.gasoline, 20);
near(gas.market.q, 45, 'gas Qm'); near(gas.qStar, 30, 'gas Q*'); near(gas.dwlMarket, 337.5, 'gas DWL');
near(gas.now.q, 35, 'gas Q(t=20)'); near(gas.now.pBuyer, 65, 'gas p_b'); near(gas.now.pSeller, 45, 'gas p_s');
near(gas.dwlNow, 37.5, 'gas DWL(t=20)'); near(gas.optimalPolicy, 30, 'gas t*');

// E2024 Q3 textiles: Qpriv 60, p 140, Qeff 40, DWL 600, t* 40
const tex = analyze(MODELS.textiles);
near(tex.market.q, 60, 'tex Qm'); near(tex.market.pBuyer, 140, 'tex p'); near(tex.qStar, 40, 'tex Q*');
near(tex.dwlMarket, 600, 'tex DWL'); near(tex.optimalPolicy, 40, 'tex t*');

// Constructed variant (MEB = 30 − Q): Q* 20, s* = MEB(Q*) = 10; s = 30 overshoots to 24 with DWL 48
const v = analyze(MODELS.variant, 30);
near(v.qStar, 20, 'variant Q*'); near(v.optimalPolicy, 10, 'variant s*');
near(v.now.q, 24, 'variant Q(s=30)'); near(v.dwlNow, 48, 'variant DWL(s=30)');
near(outcome(MODELS.variant, 10).q, 20, 'variant Q(s*)');

// Parser
const d = parseDossier(readFileSync(new URL('../source/MICROECONOMIE_SSE_DOSSIER_COMPLET_CHATGPT.txt', import.meta.url), 'utf8'));
assert.equal(d.chapters.length, 21, 'chapters 0–20');
assert.ok(d.subs.some((s) => s.id === '11.3') && d.subs.some((s) => s.id === '20.4'), 'subsections');
assert.ok(!d.subs.some((s) => s.id === '6.3' && s.title.startsWith('Solaire')), 'assignment items are not subsections');
assert.equal(d.formulas.length, 44, 'F01–F44');
assert.equal(d.graphs.length, 22, 'G1–G22');
assert.ok(d.defs.length >= 20, `definitions: ${d.defs.length}`);
const msbEntry = d.abbr.find((a) => a.names.includes('MSB'));
assert.ok(msbEntry && msbEntry.english === 'Marginal Social Benefit', 'MSB entry');
assert.ok(d.abbr.find((a) => a.names.includes('MEB'))?.english === 'Marginal External Benefit', 'MEB entry');
assert.ok(d.abbr.length > 100, `abbreviations: ${d.abbr.length}`);
assert.ok(d.lexicon.length > 150, `lexicon: ${d.lexicon.length}`);
assert.ok(d.pitfalls.length > 25 && d.corrections.length === 12, 'pitfalls/corrections');
const a6 = resolveRef(d, '15:A6#6.3');
assert.ok(a6?.hl && d.lines[a6.hl[0]].startsWith('6.3 Solaire'), 'A6#6.3 highlight');
const e20 = resolveRef(d, '16:E2020#Q3');
assert.ok(e20?.hl && d.lines[e20.hl[0]].startsWith('Q3a') && e20.hl[1] - e20.hl[0] >= 6, 'E2020#Q3 highlight');

console.log(`check ok — ${d.abbr.length} abbreviations, ${d.lexicon.length} lexicon entries, ${d.defs.length} definitions`);
