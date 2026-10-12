// Parser for MICROECONOMIE_SSE_DOSSIER_COMPLET_CHATGPT.txt.
// Turns the dossier into addressable pieces so every screen can cite its source.
// Self-contained (no imports) so scripts/check.ts can run it with plain Node.

export type Span = { id: string; title: string; start: number; end: number }; // line indices, end exclusive
export type AbbrEntry = { names: string[]; tag: string; english: string; french: string; section: string; line: number };
export type Item = { id: string; text: string; line: number; section?: string };
export type LexEntry = { term: string; french: string; def: string; section: string; line: number };

export type Dossier = {
  lines: string[];
  chapters: Span[]; // id "0".."20"
  subs: Span[]; // id "11.3"
  blocks: Span[]; // id "15:A6", "16:E2020"
  abbr: AbbrEntry[];
  formulas: Item[]; // F01..F44
  defs: Item[]; // §20.4, id = English term
  lexicon: LexEntry[];
  graphs: Item[]; // G1..G22
  pitfalls: Item[]; // §20.2
  corrections: Item[]; // §20.1
};

const isRule = (s: string) => /^={10,}\s*$/.test(s);

/** Collects a line plus its indented continuation lines. */
function withContinuation(lines: string[], i: number, end: number, indent: RegExp) {
  let text = lines[i].trim();
  let j = i + 1;
  while (j < end && indent.test(lines[j]) && lines[j].trim()) {
    text += ' ' + lines[j].trim();
    j++;
  }
  return { text, next: j };
}

export function parseDossier(raw: string): Dossier {
  const lines = raw.replace(/\r/g, '').split('\n');
  const chapters: Span[] = [];
  for (let i = 0; i + 2 < lines.length; i++) {
    if (!isRule(lines[i]) || !isRule(lines[i + 2])) continue;
    const m = lines[i + 1].match(/^(\d{1,2})\. (.+)$/);
    if (!m) continue;
    chapters.push({ id: m[1], title: m[2].trim(), start: i + 3, end: lines.length });
    i += 2;
  }
  chapters.forEach((c, k) => { if (k + 1 < chapters.length) c.end = chapters[k + 1].start - 3; });

  const subs: Span[] = [];
  const blocks: Span[] = [];
  for (const ch of chapters) {
    const chSubs: Span[] = [];
    const chBlocks: Span[] = [];
    for (let i = ch.start; i < ch.end; i++) {
      const s = lines[i].match(/^(\d{1,2})\.(\d{1,2}) (\S.*)$/);
      // Only "N.k" with N = chapter number: "6.3 Solaire" inside §15 is an assignment item, not a subsection.
      if (s && s[1] === ch.id) chSubs.push({ id: `${s[1]}.${s[2]}`, title: s[3].trim(), start: i, end: ch.end });
      const b = lines[i].match(/^(A\d|E20\d\d) — (.+)$/);
      if (b && (ch.id === '15' || ch.id === '16')) chBlocks.push({ id: `${ch.id}:${b[1]}`, title: `${b[1]} — ${b[2].trim()}`, start: i, end: ch.end });
    }
    chSubs.forEach((s, k) => { if (k + 1 < chSubs.length) s.end = chSubs[k + 1].start; });
    chBlocks.forEach((s, k) => { if (k + 1 < chBlocks.length) s.end = chBlocks[k + 1].start; });
    subs.push(...chSubs);
    blocks.push(...chBlocks);
  }

  const chapter = (id: string) => chapters.find((c) => c.id === id);
  const sectionOf = (i: number) => subs.filter((s) => s.start <= i && i < s.end).pop()?.id ?? '';

  // §18 abbreviations: "NAMES [TAG] — English — French ..."
  const abbr: AbbrEntry[] = [];
  const c18 = chapter('18');
  if (c18) {
    for (let i = c18.start; i < c18.end; i++) {
      const m = lines[i].match(/^(\S.*?) \[([OAC/]+)\] — (.+)$/);
      if (!m) continue;
      const { text } = withContinuation(lines, i, c18.end, /^ {2}\S/);
      const rest = text.slice(text.indexOf('] — ') + 4);
      const parts = rest.split(' — ');
      // English names start with a capital ("Marginal…", "(Total) Cost"); French descriptions don't.
      const hasEnglish = parts.length > 1 && /^[A-Z(]/.test(parts[0]) && !parts[0].includes('[');
      abbr.push({
        names: m[1].split(/,\s*/).map((s) => s.replace(/\s*\[[OAC/]+\]/g, '').trim()).filter(Boolean),
        tag: m[2],
        english: hasEnglish ? parts[0].trim() : '',
        french: (hasEnglish ? parts.slice(1).join(' — ') : rest).trim(),
        section: sectionOf(i),
        line: i,
      });
    }
  }

  // §17 formulas: "F34 MSC=MPC+MEC ..." + 4-space continuation
  const formulas: Item[] = [];
  const c17 = chapter('17');
  if (c17) {
    for (let i = c17.start; i < c17.end; i++) {
      const m = lines[i].match(/^(F\d\d) (.+)$/);
      if (!m) continue;
      const { text } = withContinuation(lines, i, c17.end, /^ {4}\S/);
      formulas.push({ id: m[1], text: text.slice(m[1].length).trim(), line: i });
    }
  }

  // §20.x lists
  const defs: Item[] = [];
  const graphs: Item[] = [];
  const pitfalls: Item[] = [];
  const corrections: Item[] = [];
  const sub = (id: string) => subs.find((s) => s.id === id);
  const s204 = sub('20.4');
  if (s204) {
    for (let i = s204.start + 1; i < s204.end; i++) {
      const m = lines[i].match(/^([A-Z][A-Za-z' -]+): (.+)$/);
      if (!m) continue;
      const { text } = withContinuation(lines, i, s204.end, /^ {2}\S/);
      defs.push({ id: m[1], text: text.slice(m[1].length + 1).trim(), line: i, section: '20.4' });
    }
  }
  const s203 = sub('20.3');
  if (s203) {
    for (let i = s203.start + 1; i < s203.end; i++) {
      const m = lines[i].match(/^(G\d+) (.+)$/);
      if (!m) continue;
      const { text } = withContinuation(lines, i, s203.end, /^ {2,}\S/);
      graphs.push({ id: m[1], text: text.slice(m[1].length).trim(), line: i, section: '20.3' });
    }
  }
  const s202 = sub('20.2');
  if (s202) {
    for (let i = s202.start + 1; i < s202.end; i++) {
      if (!lines[i].startsWith('- ')) continue;
      const { text } = withContinuation(lines, i, s202.end, /^ {2}\S/);
      pitfalls.push({ id: `P${pitfalls.length + 1}`, text: text.slice(2), line: i, section: '20.2' });
    }
  }
  const s201 = sub('20.1');
  if (s201) {
    for (let i = s201.start + 1; i < s201.end; i++) {
      const m = lines[i].match(/^(\d+)\) (.+)$/);
      if (!m) continue;
      const { text } = withContinuation(lines, i, s201.end, /^ {3,}\S/);
      corrections.push({ id: `C${m[1]}`, text: text.slice(m[1].length + 2).trim(), line: i, section: '20.1' });
    }
  }

  // §19 bilingual lexicon: "English — français : définition"
  const lexicon: LexEntry[] = [];
  const c19 = chapter('19');
  if (c19) {
    for (let i = c19.start; i < c19.end; i++) {
      if (/^\d{1,2}\.\d{1,2} /.test(lines[i]) || !/^\S.*? — /.test(lines[i])) continue;
      const { text } = withContinuation(lines, i, c19.end, /^ {2}\S/);
      const k = text.indexOf(' — ');
      const rest = text.slice(k + 3);
      const c = rest.indexOf(' : ');
      lexicon.push({
        term: text.slice(0, k).trim(),
        french: (c >= 0 ? rest.slice(0, c) : rest).trim(),
        def: c >= 0 ? rest.slice(c + 3).trim() : '',
        section: sectionOf(i),
        line: i,
      });
    }
  }

  return { lines, chapters, subs, blocks, abbr, formulas, defs, lexicon, graphs, pitfalls, corrections };
}

export type Resolved = { title: string; start: number; end: number; hl?: [number, number] };

/**
 * Reference syntax used across the app:
 *  "11" chapter · "11.3" subsection · "15:A6" assignment block · "16:E2020" exam block
 *  "15:A6#6.3" / "16:E2020#Q3" block with highlighted item · "17:F34" formula · "18:MEB" abbreviation
 */
export function resolveRef(d: Dossier, ref: string): Resolved | null {
  const [base, hash] = ref.split('#');
  if (/^17:F\d\d$/.test(base)) {
    const f = d.formulas.find((x) => x.id === base.slice(3));
    const ch = d.chapters.find((c) => c.id === '17');
    if (!f || !ch) return null;
    let end = f.line + 1;
    while (end < ch.end && /^ {4}\S/.test(d.lines[end])) end++;
    return { title: `§17 — ${f.id}`, start: ch.start, end: ch.end, hl: [f.line, end] };
  }
  if (/^18:/.test(base)) {
    const key = base.slice(3);
    const a = d.abbr.find((x) => x.names.includes(key));
    const s = a && d.subs.find((x) => x.id === a.section);
    if (!a || !s) return null;
    let end = a.line + 1;
    while (end < s.end && /^ {2}\S/.test(d.lines[end])) end++;
    return { title: `§${s.id} ${s.title}`, start: s.start, end: s.end, hl: [a.line, end] };
  }
  const span = base.includes(':')
    ? d.blocks.find((b) => b.id === base)
    : base.includes('.')
      ? d.subs.find((s) => s.id === base)
      : d.chapters.find((c) => c.id === base);
  if (!span) return null;
  const title = base.includes(':') ? `§${base.split(':')[0]} — ${span.title}` : `§${span.id} ${span.title}`;
  if (!hash) return { title, start: span.start, end: span.end };
  // Highlight an item inside the span: "6.3" → from "6.3 …" to the next "N.k " line; "Q3" → all "Q3…" lines.
  let a = -1;
  for (let i = span.start; i < span.end; i++) if (d.lines[i].startsWith(hash)) { a = i; break; }
  if (a < 0) return { title, start: span.start, end: span.end };
  let b = a + 1;
  const isQ = /^Q\d/.test(hash);
  while (b < span.end) {
    const l = d.lines[b];
    if (isQ ? /^Q\d/.test(l) && !l.startsWith(hash) : /^\d\.\d /.test(l) || /^(A\d|E20\d\d) — /.test(l)) break;
    if (!l.trim()) break;
    b++;
  }
  return { title, start: span.start, end: span.end, hl: [a, b] };
}
