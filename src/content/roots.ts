// Every exported content collection: localize() and scripts/i18n.mjs walk the same list.
import * as catalog from './catalog';
import * as externalities from './externalities';
import * as glossary from './glossary';
import * as lessons from './lessons';
import * as pastExams from './past-exams';
import * as training from './training';
import * as types from './types';
import * as econ from '../econ';

export const CONTENT_ROOTS: unknown[] = [econ, catalog, externalities, glossary, lessons, pastExams, training, types].flatMap((m) => Object.values(m));
