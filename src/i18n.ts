// Interface and content translation. French is the source; each other language is a dictionary
// { textId: translation } where textId is a stable hash of the French text. main.tsx loads the
// dictionary before importing the app, so t() works even in module-level constants, then
// localize() rewrites the content objects in place. English exam material is never translated:
// the SSE exam is written in English.

export const LANGS = [
  { id: 'fr', name: 'Français' },
  { id: 'en', name: 'English' },
  { id: 'de', name: 'Deutsch' },
  { id: 'it', name: 'Italiano' },
  { id: 'uk', name: 'Українська' },
  { id: 'tr', name: 'Türkçe' },
  { id: 'sv', name: 'Svenska' },
] as const;
export type Lang = (typeof LANGS)[number]['id'];

const KEY = 'micro-lab-lang';
const isLang = (x: unknown): x is Lang => LANGS.some((l) => l.id === x);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY);
    if (isLang(saved)) return saved;
  } catch { /* storage blocked */ }
  const nav = typeof navigator === 'undefined' ? [] : navigator.languages ?? [navigator.language];
  for (const l of nav) { const code = l.slice(0, 2).toLowerCase(); if (isLang(code)) return code; }
  return 'fr';
}

export let lang: Lang = 'fr';
let dict: Record<string, string> = {};
let dossier: string | null = null;

/** 53-bit FNV-1a-style hash in base 36: stable id for a French source text. */
export function textId(s: string) {
  let h1 = 0x811c9dc5, h2 = 0x01000193;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193);
    h2 = Math.imul(h2 ^ c, 0x5bd1e995);
  }
  return ((h1 >>> 0) * 2097152 + ((h2 >>> 0) & 0x1fffff)).toString(36);
}

/** Translate an interface string; {name} placeholders are filled from vars. */
export function t(s: string, vars?: Record<string, string | number>) {
  const out = (lang === 'fr' ? s : dict[textId(s)]) ?? s;
  return vars ? out.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m)) : out;
}

export const dossierRaw = () => dossier;

export async function loadLang() {
  lang = initialLang();
  document.documentElement.lang = lang;
  if (lang === 'fr') return;
  const dicts = import.meta.glob<Record<string, string>>('./i18n/*.json', { import: 'default' });
  const texts = import.meta.glob<string>('../source/dossier.*.txt', { query: '?raw', import: 'default' });
  const [d, s] = await Promise.all([dicts[`./i18n/${lang}.json`]?.(), texts[`../source/dossier.${lang}.txt`]?.()]);
  dict = d ?? {};
  dossier = s ?? null;
}

export function setLang(next: Lang) {
  try { localStorage.setItem(KEY, next); } catch { /* storage blocked: the choice lasts for this page only */ }
  window.location.reload();
}

// ——— Content walking, shared by localize() and scripts/i18n.mjs

/** Keys whose values are identifiers, symbols or English exam material — never translated. */
const SKIP = new Set(['id', 'ref', 'refs', 'kind', 'dim', 'tags', 'preset', 'show', 'color', 'mis', 'special', 'key',
  'lhs', 'tokens', 'accept', 'focusActors', 'decode', 'tone', 'names', 'examId', 'node', 'topic', 'lesson', 'en',
  'english', 'englishName', 'examAnswer', 'group', 'triggers', 'examTriggers', 'nodes', 'misconceptions', 'concept', 'prereqs', 'practice', 'lang', 'short', 'exam', 'statement', 'prompt', 'modelAnswer', 'formula', 'sym']);
/** Keys holding identifiers when their value is a string or a list of strings (an object there is real content). */
const SKIP_IDS = new Set(['actors', 'prov']);
const isIds = (v: unknown) => typeof v === 'string' || (Array.isArray(v) && v.every((x) => typeof x === 'string'));
/** In an exam question, only the French corrections are translated. */
const EXAM_KEYS = new Set(['title', 'note', 'logic', 'calc', 'graph', 'explain']);
const EN = /\b(the|is|are|of|and|to|in|for|with|that|this|which|its|be|from|than|find|explain|compute|calculate|show|what|why|how|does|not|they|their|would|should|when|each|per|your)\b/gi;
const FR = /\b(le|la|les|des|est|une|un|du|de|que|qui|pour|pas|avec|dans|sur|et|ou|au|aux|ce|cette|son|sa|ses|tu|ton|ta|tes|il|elle|on|si|donc|mais|plus|moins|sans|chaque|entre|vers)\b|[éèàùçêâîôûëœ’]/gi;

/** A text worth translating: French, or a label with real words (not a symbol like "MSB" or "p_b"). */
export function isFrench(s: string, strict = false) {
  if (!/[A-Za-zÀ-ÿ]{3}/.test(s)) return false;
  const fr = (s.match(FR) ?? []).length, en = (s.match(EN) ?? []).length;
  if (fr || en) return fr > en;
  // Single words like "Taxe": translate; all-caps symbols: keep. Exam material must prove it is French.
  return !strict && /[a-zà-ÿ]{3}/.test(s);
}

const isExam = (v: object) => 'parts' in v && 'modelAnswer' in v;

/** Visits every translatable French string of a content tree; fn returns the replacement. */
export function walkTexts(root: unknown, fn: (s: string) => string) {
  const seen = new Set<object>();
  const visit = (v: unknown, keys: Set<string> | null): unknown => {
    if (typeof v === 'string') return isFrench(v, keys === EXAM_KEYS) ? fn(v) : v;
    if (!v || typeof v !== 'object' || v instanceof RegExp || seen.has(v)) return v;
    seen.add(v);
    const exam = isExam(v);
    if (Array.isArray(v)) { for (let i = 0; i < v.length; i++) v[i] = visit(v[i], keys); return v; }
    const o = v as Record<string, unknown>;
    for (const k of Object.keys(o)) {
      if (exam ? !EXAM_KEYS.has(k) && k !== 'parts' : SKIP.has(k) && !(k === 'exam' && typeof o[k] === 'object')) continue;
      if (SKIP_IDS.has(k) && isIds(o[k])) continue;
      if (keys && !keys.has(k) && k !== 'parts') continue;
      o[k] = visit(o[k], exam ? EXAM_KEYS : k === 'parts' ? keys : null);
    }
    return v;
  };
  visit(root, null);
}

/** Rewrites content objects in place with the loaded dictionary. */
export function localize(roots: unknown[]) {
  if (lang === 'fr') return;
  for (const r of roots) walkTexts(r, (s) => dict[textId(s)] ?? s);
}
