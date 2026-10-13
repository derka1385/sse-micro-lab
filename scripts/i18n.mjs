// Translation pipeline. French is the source of truth.
//   node scripts/i18n.mjs extract   → i18n/source.tsv and i18n/chunks/NNN.tsv (texts to translate, in reading order)
//   node scripts/i18n.mjs build     → validates i18n/<lang>/*.tsv and writes src/i18n/<lang>.json
//   node scripts/i18n.mjs dossier   → splits the French dossier into i18n/dossier/fr/NN.txt, assembles and checks
//                                     source/dossier.<lang>.txt from i18n/dossier/<lang>/NN.txt
// Translation files are "id<TAB>text" lines; \n and \t inside a text are written as the two characters \n and \t.
import { registerHooks } from 'node:module';
import { mkdirSync, readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
registerHooks({ resolve(specifier, context, nextResolve) {
  try { return nextResolve(specifier, context); }
  catch (error) {
    if (!['ERR_MODULE_NOT_FOUND', 'ERR_UNSUPPORTED_DIR_IMPORT'].includes(error.code) || !specifier.startsWith('.')) throw error;
    return nextResolve(`${specifier}.ts`, context);
  }
} });

const ROOT = new URL('..', import.meta.url).pathname;
const LANGS = ['en', 'de', 'it', 'uk', 'tr', 'sv'];
const esc = (s) => s.replace(/\t/g, '\\t').replace(/\n/g, '\\n');
const unesc = (s) => s.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
const { walkTexts, textId } = await import('../src/i18n.ts');

function sourceTexts() {
  return import('../src/content/roots.ts').then(({ CONTENT_ROOTS }) => {
    const seen = new Map();
    const add = (s) => { if (!seen.has(s)) seen.set(s, textId(s)); return s; };
    for (const r of CONTENT_ROOTS) walkTexts(r, add);
    const files = [];
    const scan = (dir) => { for (const f of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, f.name);
      if (f.isDirectory()) scan(p); else if (/\.tsx?$/.test(f.name)) files.push(p);
    } };
    scan(join(ROOT, 'src'));
    for (const f of files.sort()) for (const m of readFileSync(f, 'utf8').matchAll(/\bt\(\s*'((?:[^'\\]|\\.)*)'/g)) add(m[1].replace(/\\'/g, "'"));
    const ids = new Map();
    for (const [s, id] of seen) { if (ids.has(id) && ids.get(id) !== s) throw new Error(`hash collision: ${id}`); ids.set(id, s); }
    return seen;
  });
}

/** Markup a translation must keep verbatim: [[abbr]], {{formula}}, §refs, {placeholders}; plus ** pairs and numbers. */
const MARK = /\[\[[^\]]+\]\]|\{\{[^}]+\}\}|§\d{1,2}(?:\.\d{1,2})?(?::[A-Z0-9]+)?(?:#[A-Za-z0-9.]+)?|\{\w+\}/g;
const marks = (s) => (s.match(MARK) ?? []).sort().join(' | ');
// Numbers compared as digit groups, thousands separators removed (1 012,5 and 1,012.5 both give 1012 5).
const numbers = (s) => (s.replace(MARK, ' ').replace(/(\d)[\s.,’'](?=\d{3}(?!\d))/g, '$1').match(/\d+/g) ?? []).sort().join(' ');

function checkPair(src, tr) {
  const problems = [];
  if (marks(src) !== marks(tr)) problems.push(`markup [${marks(src)}] → [${marks(tr)}]`);
  if ((src.match(/\*\*/g) ?? []).length !== (tr.match(/\*\*/g) ?? []).length) problems.push('bold markers');
  if (numbers(src) !== numbers(tr)) problems.push(`numbers [${numbers(src)}] → [${numbers(tr)}]`);
  return problems;
}

const cmd = process.argv[2];

if (cmd === 'extract') {
  const texts = await sourceTexts();
  const lines = [...texts].map(([s, id]) => `${id}\t${esc(s)}`);
  mkdirSync(join(ROOT, 'i18n/chunks'), { recursive: true });
  writeFileSync(join(ROOT, 'i18n/source.tsv'), lines.join('\n') + '\n');
  const size = Number(process.argv[3] ?? 18000);
  let chunk = [], n = 0, chars = 0;
  const flush = () => { if (!chunk.length) return; writeFileSync(join(ROOT, `i18n/chunks/${String(++n).padStart(3, '0')}.tsv`), chunk.join('\n') + '\n'); chunk = []; chars = 0; };
  for (const l of lines) { chunk.push(l); chars += l.length; if (chars >= size) flush(); }
  flush();
  console.log(`${lines.length} texts, ${lines.reduce((x, l) => x + l.length, 0)} chars, ${n} chunks`);
}

if (cmd === 'build') {
  const texts = await sourceTexts();
  const byId = new Map([...texts].map(([s, id]) => [id, s]));
  mkdirSync(join(ROOT, 'src/i18n'), { recursive: true });
  let failed = false;
  for (const lang of process.argv.slice(3).length ? process.argv.slice(3) : LANGS) {
    const dir = join(ROOT, 'i18n', lang);
    const dict = {};
    const problems = [];
    if (existsSync(dir)) for (const f of readdirSync(dir).filter((x) => x.endsWith('.tsv')).sort()) {
      for (const line of readFileSync(join(dir, f), 'utf8').split('\n')) {
        if (!line.trim() || line.startsWith('#')) continue;
        const m = /^([0-9a-z]+)[\t ]+(.*)$/.exec(line);
        if (!m || !m[2].trim()) { problems.push(`${f}: malformed line ${line.slice(0, 40)}`); continue; }
        const id = m[1], tr = unesc(m[2]);
        const src = byId.get(id);
        if (!src) continue; // obsolete text: the French source changed
        const p = checkPair(src, tr);
        if (p.length) problems.push(`${f} ${id}: ${p.join('; ')}\n    FR ${src}\n    ${lang.toUpperCase()} ${tr}`);
        dict[id] = tr;
      }
    }
    const missing = [...byId.keys()].filter((id) => !(id in dict));
    writeFileSync(join(ROOT, `src/i18n/${lang}.json`), JSON.stringify(dict));
    console.log(`${lang}: ${Object.keys(dict).length}/${byId.size} translated, ${missing.length} missing, ${problems.length} problem(s)`);
    problems.slice(0, 30).forEach((p) => console.log('  ' + p));
    if (problems.length) failed = true;
  }
  if (failed) process.exitCode = 1;
}

if (cmd === 'dossier') {
  const { parseDossier, resolveRef } = await import('../src/source.ts');
  const frText = readFileSync(join(ROOT, 'source/MICROECONOMIE_SSE_DOSSIER_COMPLET_CHATGPT.txt'), 'utf8');
  const fr = parseDossier(frText);
  const frDir = join(ROOT, 'i18n/dossier/fr');
  if (!existsSync(frDir)) {
    // Split on chapter rules, then on blank lines inside chapters larger than ~16k characters.
    mkdirSync(frDir, { recursive: true });
    const lines = frText.replace(/\r/g, '').split('\n');
    const starts = [0, ...fr.chapters.map((c) => c.start - 3).filter((x) => x > 0)];
    const parts = [];
    starts.forEach((s, i) => {
      const block = lines.slice(s, starts[i + 1] ?? lines.length);
      let cur = [];
      for (const l of block) {
        cur.push(l);
        if (!l.trim() && cur.join('\n').length > 16000) { parts.push(cur); cur = []; }
      }
      if (cur.length) parts.push(cur);
    });
    parts.forEach((p, i) => writeFileSync(join(frDir, `${String(i + 1).padStart(2, '0')}.txt`), p.join('\n')));
    console.log(`split into ${parts.length} parts`);
  }
  const frParts = readdirSync(frDir).sort();
  const shape = (d) => ({
    chapters: d.chapters.map((c) => c.id).join(' '), subs: d.subs.map((c) => c.id).join(' '), blocks: d.blocks.map((c) => c.id).join(' '),
    abbr: d.abbr.map((a) => a.names.join('/')).join(' '), formulas: d.formulas.map((f) => f.id).join(' '), graphs: d.graphs.map((g) => g.id).join(' '),
    defs: d.defs.map((x) => x.id).join(' '), lexicon: d.lexicon.length, pitfalls: d.pitfalls.length, corrections: d.corrections.length,
  });
  const want = shape(fr);
  // Every reference the app cites must still resolve, with its highlighted line when it names one.
  const { CONTENT_ROOTS } = await import('../src/content/roots.ts');
  const refs = new Set();
  const visit = (v, k) => {
    if (typeof v === 'string') { if (k === 'ref') refs.add(v); for (const m of v.matchAll(/§(\d{1,2}(?:\.\d{1,2})?(?::[A-Z0-9]+)?(?:#[A-Za-z0-9.]+)?)/g)) refs.add(m[1]); return; }
    if (!v || typeof v !== 'object' || v instanceof RegExp) return;
    if (Array.isArray(v)) { v.forEach((x) => visit(x, k === 'refs' ? 'ref' : k)); return; }
    for (const [kk, x] of Object.entries(v)) visit(x, kk);
  };
  CONTENT_ROOTS.forEach((r) => visit(r, ''));
  for (const lang of process.argv.slice(3).length ? process.argv.slice(3) : LANGS) {
    const dir = join(ROOT, 'i18n/dossier', lang);
    if (!existsSync(dir)) { console.log(`${lang}: no dossier translation yet`); continue; }
    const have = readdirSync(dir).sort();
    if (have.join() !== frParts.join()) { console.log(`${lang}: ${have.length}/${frParts.length} parts — not assembled`); continue; }
    const text = have.map((f) => readFileSync(join(dir, f), 'utf8')).join('\n');
    const d = parseDossier(text);
    const got = shape(d);
    const diff = Object.keys(want).filter((k) => want[k] !== got[k]);
    const broken = [...refs].filter((r) => { const x = resolveRef(d, r); return !x || (r.includes('#') && !x.hl); });
    if (!diff.length && !broken.length) writeFileSync(join(ROOT, `source/dossier.${lang}.txt`), text);
    console.log(`${lang}: ${diff.length ? 'structure differs in ' + diff.join(', ') : 'structure ok'}; ${broken.length ? 'broken refs ' + broken.join(' ') : 'all refs resolve'}`);
    if (diff.length || broken.length) process.exitCode = 1;
  }
}
