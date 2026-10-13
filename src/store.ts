// Local progress store (localStorage) + tiny UI overlay store.
// Mastery rule: only unassisted successes count, at most one per calendar day per dimension —
// clicking "compris" once can never mark a concept as mastered; retrieval on later days is required.

import { useSyncExternalStore } from 'react';
import { DIMS, type Dim } from './content/types';

export type Src = 'lesson' | 'review' | 'practice' | 'recall' | 'recognition' | 'confusion' | 'teachback' | 'exam' | 'micro';
export type Attempt = { t: number; tags: string[]; dim: Dim; ok: boolean; src: Src; item?: string; mis?: string; assisted?: boolean };
type MisState = { count: number; total: number; last: number; resolvedAt?: number };
type LessonState = { block: number; passed: string[]; startedAt: number; finishedAt?: number };
type ReviewState = { level: number; due: number; last?: number };
type CardState = { box: number; last: number };
export type ExamRecord = { id: string; t: number; score: number; max: number; mistakes: Record<'model' | 'logic' | 'calc' | 'lang', number> };

export type Progress = {
  v: 1;
  attempts: Attempt[];
  lessons: Record<string, LessonState>;
  seen: Record<string, number>;
  mis: Record<string, MisState>;
  reviews: Record<string, ReviewState>;
  cards: Record<string, CardState>;
  confidence: Record<string, number>;
  exams: ExamRecord[];
  teachbacks: { lesson: string; t: number; text: string; score: number }[];
};

const KEY = 'micro-lab-progress-v1';
const DAY = 86_400_000;
const MIN = 60_000;
const empty = (): Progress => ({ v: 1, attempts: [], lessons: {}, seen: {}, mis: {}, reviews: {}, cards: {}, confidence: {}, exams: [], teachbacks: [] });

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p && p.v === 1) return { ...empty(), ...p };
    }
  } catch { /* private mode or corrupted data: start fresh */ }
  return empty();
}

let state = load();
const listeners = new Set<() => void>();
function set(fn: (s: Progress) => Progress) {
  const next = fn(state);
  if (next === state) return;
  state = next;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage full or blocked */ }
  listeners.forEach((l) => l());
}
const subscribe = (cb: () => void) => { listeners.add(cb); return () => { listeners.delete(cb); }; };
export const useProgress = () => useSyncExternalStore(subscribe, () => state);
export const getProgress = () => state;

// ——— attempts & misconceptions

export function record(a: Omit<Attempt, 't'>) {
  const t = Date.now();
  set((s) => {
    const attempts = [...s.attempts, { ...a, t }].slice(-5000);
    let mis = s.mis;
    if (!a.ok && a.mis) {
      const m = mis[a.mis] ?? { count: 0, total: 0, last: 0 };
      mis = { ...mis, [a.mis]: { count: m.count + 1, total: m.total + 1, last: t } };
    }
    return { ...s, attempts, mis };
  });
}

/** Record a misconception without a graded attempt (e.g. detected in a free-text explanation). */
export function flagMisconception(id: string) {
  set((s) => {
    const m = s.mis[id] ?? { count: 0, total: 0, last: 0 };
    return { ...s, mis: { ...s.mis, [id]: { count: m.count + 1, total: m.total + 1, last: Date.now() } } };
  });
}

export function resolveMisconception(id: string) {
  set((s) => {
    const m = s.mis[id];
    if (!m) return s;
    return { ...s, mis: { ...s.mis, [id]: { ...m, count: 0, resolvedAt: Date.now() } } };
  });
}

/** Misconceptions made at least twice since last resolved → targeted micro-lesson. */
export const activeMisconceptions = (p: Progress) =>
  Object.entries(p.mis).filter(([, m]) => m.count >= 2).sort((a, b) => b[1].last - a[1].last).map(([id]) => id);

// ——— mastery

const dayKey = (t: number) => new Date(t).toDateString();

export function mastery(p: Progress, tags: string[]): Record<Dim, number> {
  const out = {} as Record<Dim, number>;
  for (const { id } of DIMS) {
    const rel = p.attempts.filter((a) => a.dim === id && a.tags.some((t) => tags.includes(t)));
    const days = new Set(rel.filter((a) => a.ok && !a.assisted).map((a) => dayKey(a.t))).size;
    const recentFails = rel.slice(-4).filter((a) => !a.ok).length;
    out[id] = Math.max(0, Math.min(1, days * 0.25 - recentFails * 0.1));
  }
  return out;
}

export const average = (m: Record<Dim, number>) => DIMS.reduce((s, d) => s + m[d.id], 0) / DIMS.length;
export const isMastered = (m: Record<Dim, number>) => DIMS.every((d) => m[d.id] >= 0.75);

/** Distinct days with an unassisted success on a tag — used to make abbreviation chips less explicit over time. */
export const familiarity = (p: Progress, tag: string) =>
  new Set(p.attempts.filter((a) => a.ok && !a.assisted && a.tags.includes(tag)).map((a) => dayKey(a.t))).size;

export const lastReviewed = (p: Progress, tags: string[]) =>
  p.attempts.filter((a) => a.tags.some((t) => tags.includes(t))).reduce((m, a) => Math.max(m, a.t), 0);

export const independentRecalls = (p: Progress, tags: string[]) =>
  p.attempts.filter((a) => a.ok && !a.assisted && a.src !== 'lesson' && a.tags.some((t) => tags.includes(t))).length;

// ——— lessons

export const lessonState = (p: Progress, id: string): LessonState => p.lessons[id] ?? { block: 0, passed: [], startedAt: 0 };

export function setLessonBlock(id: string, block: number) {
  set((s) => {
    const l = lessonState(s, id);
    if (l.block >= block && l.startedAt) return s;
    return { ...s, lessons: { ...s.lessons, [id]: { ...l, block, startedAt: l.startedAt || Date.now() } } };
  });
}

export function passCheck(id: string, checkId: string) {
  set((s) => {
    const l = lessonState(s, id);
    if (l.passed.includes(checkId)) return s;
    return { ...s, lessons: { ...s.lessons, [id]: { ...l, passed: [...l.passed, checkId], startedAt: l.startedAt || Date.now() } } };
  });
}

export function finishLesson(id: string) {
  set((s) => {
    const l = lessonState(s, id);
    const reviews = s.reviews[id] ? s.reviews : { ...s.reviews, [id]: { level: 1, due: Date.now() } };
    return { ...s, reviews, lessons: { ...s.lessons, [id]: { ...l, finishedAt: l.finishedAt ?? Date.now() } } };
  });
}

export function markSeen(keys: string[]) {
  set((s) => {
    const fresh = keys.filter((k) => !s.seen[k]);
    if (!fresh.length) return s;
    const seen = { ...s.seen };
    fresh.forEach((k) => { seen[k] = Date.now(); });
    return { ...s, seen };
  });
}

// ——— spaced reconstruction (levels 1→5, compressed for a two-week horizon)

const AFTER_LEVEL = [0, 1 * DAY, 2 * DAY, 3 * DAY, 4 * DAY, 5 * DAY];

export function reviewResult(lessonId: string, ok: boolean) {
  set((s) => {
    const r = s.reviews[lessonId];
    if (!r) return s;
    const now = Date.now();
    const next = ok
      ? { level: r.level >= 5 ? 2 : r.level + 1, due: now + AFTER_LEVEL[r.level], last: now }
      : { ...r, due: now + 10 * MIN, last: now };
    return { ...s, reviews: { ...s.reviews, [lessonId]: next } };
  });
}

export const dueReviews = (p: Progress, now = Date.now()) => Object.entries(p.reviews).filter(([, r]) => r.due <= now).map(([id]) => id);

// ——— rapid recall (Leitner boxes)

export function rateCard(id: string, rating: 0 | 1 | 2) {
  set((s) => {
    const c = s.cards[id] ?? { box: 1, last: 0 };
    const box = rating === 0 ? 1 : rating === 1 ? c.box : Math.min(5, c.box + 1);
    return { ...s, cards: { ...s.cards, [id]: { box, last: Date.now() } } };
  });
}

// ——— misc

export function setConfidence(topic: string, value: number) {
  set((s) => ({ ...s, confidence: { ...s.confidence, [topic]: value } }));
}

export function addExam(r: ExamRecord) {
  set((s) => ({ ...s, exams: [...s.exams, r] }));
}

export function addTeachback(t: Progress['teachbacks'][number]) {
  set((s) => ({ ...s, teachbacks: [...s.teachbacks, t].slice(-50) }));
}

export const exportProgress = () => JSON.stringify(state, null, 1);

export function importProgress(json: string) {
  const p = JSON.parse(json);
  if (!p || p.v !== 1 || !Array.isArray(p.attempts)) throw new Error('Fichier de progression invalide');
  set(() => ({ ...empty(), ...p }));
}

export function resetProgress() {
  set(() => empty());
}

// ——— cloud sync support (see sync.ts): merging never loses work from either side

const later = <X extends { last?: number }>(a?: X, b?: X) => (!a ? b : !b ? a : (b.last ?? 0) > (a.last ?? 0) ? b : a);
const minPos = (a?: number, b?: number) => (!a ? b : !b ? a : Math.min(a, b));

/** Union of two progress histories: attempts deduplicated, per-item state keeps the most recent or most advanced. */
export function mergeProgress(a: Progress, b: Progress): Progress {
  const out = empty();
  const seenAttempt = new Set<string>();
  out.attempts = [...a.attempts, ...b.attempts]
    .filter((x) => { const k = `${x.t}|${x.dim}|${x.item ?? ''}|${x.ok}`; if (seenAttempt.has(k)) return false; seenAttempt.add(k); return true; })
    .sort((x, y) => x.t - y.t).slice(-5000);
  for (const id of new Set([...Object.keys(a.lessons), ...Object.keys(b.lessons)])) {
    const x = a.lessons[id], y = b.lessons[id];
    if (!x || !y) { out.lessons[id] = (x ?? y)!; continue; }
    out.lessons[id] = { block: Math.max(x.block, y.block), passed: [...new Set([...x.passed, ...y.passed])], startedAt: minPos(x.startedAt, y.startedAt) ?? 0, finishedAt: minPos(x.finishedAt, y.finishedAt) };
  }
  for (const k of new Set([...Object.keys(a.seen), ...Object.keys(b.seen)])) out.seen[k] = minPos(a.seen[k], b.seen[k])!;
  for (const k of new Set([...Object.keys(a.mis), ...Object.keys(b.mis)])) out.mis[k] = later(a.mis[k], b.mis[k])!;
  for (const k of new Set([...Object.keys(a.reviews), ...Object.keys(b.reviews)])) out.reviews[k] = later(a.reviews[k], b.reviews[k])!;
  for (const k of new Set([...Object.keys(a.cards), ...Object.keys(b.cards)])) out.cards[k] = later(a.cards[k], b.cards[k])!;
  out.confidence = { ...b.confidence, ...a.confidence };
  const ex = new Map([...a.exams, ...b.exams].map((e) => [`${e.id}|${e.t}`, e]));
  out.exams = [...ex.values()].sort((x, y) => x.t - y.t);
  const tb = new Map([...a.teachbacks, ...b.teachbacks].map((e) => [`${e.lesson}|${e.t}`, e]));
  out.teachbacks = [...tb.values()].sort((x, y) => x.t - y.t).slice(-50);
  return out;
}

/** Parses a stored progress document; null when it is not a valid v1 progress. */
export function parseProgress(json: string): Progress | null {
  try {
    const p = JSON.parse(json);
    return p && p.v === 1 && Array.isArray(p.attempts) ? { ...empty(), ...p } : null;
  } catch { return null; }
}

/** Replaces the whole state (used by sync after a merge). */
export const replaceProgress = (p: Progress) => set(() => p);
export const subscribeProgress = subscribe;

// ——— UI overlays (drawers opened from anywhere)

export type Overlay =
  | { kind: 'why'; id: string }
  | { kind: 'source'; ref: string }
  | { kind: 'concept'; id: string }
  | { kind: 'formula'; id: string }
  | { kind: 'abbr'; key: string }
  | null;

let overlay: Overlay = null;
const oListeners = new Set<() => void>();
export const useOverlay = () =>
  useSyncExternalStore((cb) => { oListeners.add(cb); return () => { oListeners.delete(cb); }; }, () => overlay);
export function openOverlay(o: Overlay) {
  overlay = o;
  oListeners.forEach((l) => l());
}
export const closeOverlay = () => openOverlay(null);
