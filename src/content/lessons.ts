// One registry drives guided learning, exam mode, recall and home recommendations.
import { SOLAR_LESSON, EXAMS as EXTERNALITY_EXAMS } from './externalities';
import { FOUNDATIONS_LESSONS } from './foundations-lessons';
import { MARKET_LESSONS } from './market-lessons';
import { INSTITUTIONS_LESSONS } from './institutions-lessons';
import { NEGATIVE_LESSON } from './negative-lesson';
import { PAST_EXAMS } from './past-exams';
import type { Lesson } from './types';

export const ALL_LESSONS: Lesson[] = [SOLAR_LESSON, ...FOUNDATIONS_LESSONS, ...MARKET_LESSONS, NEGATIVE_LESSON, ...INSTITUTIONS_LESSONS];
export const LESSONS: Record<string, Lesson> = Object.fromEntries(ALL_LESSONS.map((lesson) => [lesson.id, lesson]));
export const EXAMS = [...new Map([...EXTERNALITY_EXAMS, ...PAST_EXAMS, ...ALL_LESSONS.flatMap((lesson) => lesson.exam ? [lesson.exam] : [])].map((q) => [q.id, q])).values()];
export const exam = (id: string) => EXAMS.find((q) => q.id === id)!;
/** Questions from the real finals have ids e<year>q<n>; everything else is an assignment or a constructed drill. */
export const finalYear = (id: string) => /^e(20\d\d)q\d/.exec(id)?.[1];
export const finalsFor = (nodes: string[]) => EXAMS.filter((q) => finalYear(q.id) && q.parts.some((part) => part.tags.some((t) => nodes.includes(t))))
  .sort((a, b) => a.title.localeCompare(b.title));
export const lessonsForTopic = (topic: string) => ALL_LESSONS.filter((lesson) => (lesson.topic ?? (lesson.id === 'ext-positive' ? 'ext' : lesson.node)) === topic);
