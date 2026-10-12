// The dossier is the factual source of truth: parsed once, addressable everywhere.
import raw from '../source/MICROECONOMIE_SSE_DOSSIER_COMPLET_CHATGPT.txt?raw';
import { parseDossier, resolveRef } from './source';
import { GLOSS, type Gloss } from './content/glossary';

export const DOSSIER = parseDossier(raw);
export const resolve = (ref: string) => resolveRef(DOSSIER, ref);
export const abbrEntry = (key: string) => DOSSIER.abbr.find((a) => a.names.includes(key));

/** Pedagogical gloss if written, else a minimal decode from the dossier's §18 directory. */
export function decode(key: string): Gloss | null {
  if (GLOSS[key]) return GLOSS[key];
  const a = abbrEntry(key);
  if (!a) return null;
  return { key, english: a.english, french: a.french, literal: a.french, tone: 'neutral', ref: `18:${key}` };
}
