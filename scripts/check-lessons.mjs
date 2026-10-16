// Node's TypeScript stripping is used by the existing check script too. The application
// uses Vite's extensionless imports; resolve those locally for this read-only check.
import { registerHooks } from 'node:module';
import { readFileSync } from 'node:fs';
import { strict as assert } from 'node:assert';
registerHooks({ resolve(specifier, context, nextResolve) {
  try { return nextResolve(specifier, context); }
  catch (error) {
    if (!['ERR_MODULE_NOT_FOUND', 'ERR_UNSUPPORTED_DIR_IMPORT'].includes(error.code) || !specifier.startsWith('.')) throw error;
    return nextResolve(`${specifier}.ts`, context);
  }
} });
const { ALL_LESSONS, LESSONS, EXAMS, lessonsForTopic } = await import('../src/content/lessons.ts');
const { TOPICS, NODES } = await import('../src/content/catalog.ts');
const { parseDossier, resolveRef } = await import('../src/source.ts');
const { GLOSS } = await import('../src/content/glossary.ts');
const { MODELS, analyze } = await import('../src/econ.ts');
const dossier = parseDossier(readFileSync(new URL('../source/MICROECONOMIE_SSE_DOSSIER_COMPLET_CHATGPT.txt', import.meta.url), 'utf8'));
const ids = new Set();
let checks = 0, diagrams = 0;
function unique(id) { assert.ok(!ids.has(id), `Duplicate identifier: ${id}`); ids.add(id); }
function reference(ref, owner) {
  const resolved = resolveRef(dossier, ref);
  assert.ok(resolved, `${owner}: broken source §${ref}`);
  if (ref.includes('#')) assert.ok(resolved.hl, `${owner}: source item ${ref} not found`);
}
function options(items, owner) {
  assert.ok(items.length >= 2, `${owner}: at least two alternatives`);
  assert.equal(items.filter((item) => item.correct).length, 1, `${owner}: exactly one correct alternative`);
  items.forEach((item) => assert.ok(item.text && item.feedback, `${owner}: every alternative needs explanatory feedback`));
}
function check(item) {
  checks++; unique(item.id);
  assert.ok(item.q && item.tags.length, `${item.id}: prompt and mastery tags required`);
  if (item.kind === 'choice') options(item.options, item.id);
  if (item.kind === 'numeric') assert.ok(Number.isFinite(item.answer), `${item.id}: finite numeric solution`);
  if (item.kind === 'pick') assert.ok(Number.isFinite(item.target) && item.tol > 0, `${item.id}: valid graph target`);
  if (item.kind === 'order') assert.equal(new Set(item.items).size, item.items.length, `${item.id}: ordering items must be distinct`);
  if (item.kind === 'build') {
    assert.ok(item.accept.length, `${item.id}: accepted reconstruction required`);
    item.accept.flat().forEach((token) => assert.ok(item.tokens.includes(token), `${item.id}: accepted token ${token} is unavailable`));
  }
  if (item.kind === 'text') assert.ok(item.model && item.rubric.length && item.rubric.every((r) => r.patterns.length), `${item.id}: written-answer correction required`);
}
function diagram(spec, owner) {
  diagrams++; spec.refs.forEach((ref) => reference(ref, owner));
  assert.ok(spec.title && spec.note, `${owner}: diagram must explain its scope`);
  if (spec.kind === 'curves') {
    assert.ok(spec.xMax > 0 && spec.yMax > 0 && spec.curves.length, `${owner}: valid axes`);
    spec.curves.forEach((curve) => {
      assert.ok(curve.explain && curve.points.length >= 2, `${owner}: explain each curve`);
      curve.points.forEach(([x, y], i) => {
        assert.ok(Number.isFinite(x) && Number.isFinite(y), `${owner}: finite coordinates`);
        if (i) assert.ok(x >= curve.points[i - 1][0], `${owner}: points must progress along x`);
      });
    });
  }
  if (spec.kind === 'matrix') {
    assert.equal(spec.payoffs.length, spec.rows.length, `${owner}: matrix rows`);
    spec.payoffs.forEach((row) => {
      assert.equal(row.length, spec.columns.length, `${owner}: matrix columns`);
      row.forEach((cell) => assert.ok(cell.length === 2 && cell.every(Number.isFinite), `${owner}: two finite player payoffs`));
    });
  }
  if (spec.kind === 'bars') assert.ok(spec.items.length && spec.items.every((item) => Number.isFinite(item.value) && item.explain), `${owner}: bar values and explanations`);
  if (spec.kind === 'sequence') assert.ok(spec.steps.length && spec.steps.every((step) => step.actor && step.action && step.consequence), `${owner}: causal sequence`);
}
assert.equal(ALL_LESSONS.length, 15, '14 topics, with two externality lessons');
assert.equal(Object.keys(LESSONS).length, ALL_LESSONS.length, 'unique lesson identifiers');
for (const topic of TOPICS) {
  assert.ok(lessonsForTopic(topic.id).length, `${topic.id}: missing guided lesson`);
  assert.ok(LESSONS[topic.lesson], `${topic.id}: catalogue link must resolve`);
}
for (const lesson of ALL_LESSONS) {
  unique(lesson.id);
  assert.ok(NODES.some((node) => node.id === lesson.node), `${lesson.id}: unknown mastery node ${lesson.node}`);
  assert.ok(lesson.blocks.length >= 16, `${lesson.id}: incomplete path`);
  assert.deepEqual(lesson.blocks.slice(-4).map((block) => block.special), ['chain', 'teachback', 'exam', 'finish'], `${lesson.id}: final stages`);
  assert.ok(lesson.chain.length >= 4 && lesson.teach.links.length >= 3 && lesson.teach.model, `${lesson.id}: causal teach-back`);
  assert.ok(EXAMS.some((q) => q.id === lesson.examId), `${lesson.id}: exam registration`);
  assert.equal(lesson.ladder.length, 5, `${lesson.id}: five retrieval levels`);
  lesson.ladder.forEach((level) => { assert.ok(level.length >= (lesson.id === 'ext-positive' ? 1 : 2), `${lesson.id}: retrieval variants required`); level.forEach(check); });
  for (const block of lesson.blocks) {
    unique(block.id);
    assert.ok(block.human && (lesson.id === 'ext-positive' && block.special || block.why.length >= 2) && block.example && block.me, `${block.id}: explanations and perspectives`);
    assert.ok(block.prov.length, `${block.id}: provenance`);
    block.prov.forEach((p) => { if (p.ref) reference(p.ref, block.id); });
    if (block.graph.preset) assert.ok(MODELS[block.graph.preset], `${block.id}: graph model`);
    if (block.diagram) diagram(block.diagram, block.id);
    if (block.reveal) options(block.reveal.options, block.id);
    if (!block.special) assert.ok(block.checks?.length || block.reveal, `${block.id}: validation missing`);
    block.checks?.forEach(check);
    block.decode?.forEach((key) => assert.ok(GLOSS[key] || dossier.abbr.some((a) => a.names.includes(key)), `${block.id}: undefined abbreviation ${key}`));
  }
}
assert.equal(new Set(EXAMS.map((q) => q.id)).size, EXAMS.length, 'unique exams');
for (const q of EXAMS) {
  reference(q.ref, q.id);
  assert.ok(q.note && q.modelAnswer && q.logic.length && q.calc.length && q.graph.length, `${q.id}: exam correction and provenance`);
  q.parts.forEach((part) => {
    if (part.kind === 'choice') options(part.options, `${q.id}:${part.id}`);
    if (part.kind === 'num') part.answers.forEach((a) => assert.ok(Number.isFinite(a.value), `${q.id}: finite exam answer`));
  });
}
// Independent engine values used throughout the new negative-externality path.
const gas = analyze(MODELS.gasoline, 20);
const neg = LESSONS['ext-negative'].blocks.flatMap((block) => block.checks ?? []);
for (const [suffix, expected] of Object.entries({ qm: gas.market.q, qs: gas.qStar, dwl: gas.dwlMarket, 'q-tax20': gas.now.q, pb: gas.now.pBuyer, ps: gas.now.pSeller, 'remaining-dwl': gas.dwlNow, 'tax-opt': gas.optimalPolicy })) {
  const item = neg.find((c) => c.id === `ext-negative:check:${suffix}`);
  assert.ok(item && item.kind === 'numeric' && Math.abs(item.answer - expected) < 1e-6, `Negative lesson ${suffix} must match independent engine`);
}
console.log(`curriculum ok — ${TOPICS.length} topics, ${ALL_LESSONS.length} lessons, ${ALL_LESSONS.reduce((n, l) => n + l.blocks.length, 0)} blocks, ${checks} checkpoints/retrieval variants, ${EXAMS.length} exams, ${diagrams} diagram instances`);
