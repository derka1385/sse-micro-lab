// "Where is this notion taught?": searches every lesson block (localised text + the English exam line)
// and expands abbreviations through the glossary, so "DWL" also finds "deadweight loss" / "perte sèche".
import { useMemo, useState } from 'react';
import { GLOSS } from '../content/glossary';
import { ALL_LESSONS } from '../content/lessons';
import { t } from '../i18n';

const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
// Light stem so "monopoly" also finds "monopole" and "subsidies" finds "subsidy".
const stem = (w: string) => (w.length > 5 ? w.slice(0, w.length - 2) : w);

type Hit = { lesson: string; lessonTitle: string; n: number; title: string; score: number };

/** Each query word must match (directly, or through the glossary entry it names). */
export function searchLessons(query: string): Hit[] {
  const words = fold(query).split(/[^a-z0-9*]+/).filter((w) => w.length > 1);
  if (!words.length) return [];
  const alternatives = words.map((w) => {
    const gloss = Object.values(GLOSS).find((g) => fold(g.key) === w);
    return [stem(w), ...(gloss ? [fold(gloss.english), fold(gloss.french)] : [])];
  });
  const hits: Hit[] = [];
  for (const l of ALL_LESSONS) {
    l.blocks.forEach((b, i) => {
      if (b.special) return;
      const title = fold(b.title);
      const text = fold([b.title, b.human, b.economist, b.exam, b.example, ...(b.decode ?? [])].join(' '));
      let score = 0;
      for (const alts of alternatives) {
        if (!alts.some((a) => text.includes(a))) return;
        score += alts.some((a) => title.includes(a)) ? 3 : 1;
      }
      hits.push({ lesson: l.id, lessonTitle: l.title, n: i + 1, title: b.title, score });
    });
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, 12);
}

export function LessonSearch({ onPick }: { onPick?: () => void }) {
  const [q, setQ] = useState('');
  const hits = useMemo(() => searchLessons(q), [q]);
  return (
    <div className="lsearch" role="search">
      <label className="sr-only" htmlFor="lsearch-input">{t('Chercher une notion')}</label>
      <input id="lsearch-input" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('Chercher une notion (DWL, autarcie…)')} autoComplete="off" />
      {q.trim().length > 1 && (
        <ul className="lsearch-results">
          {hits.length ? hits.map((h) => {
            return (
              <li key={`${h.lesson}/${h.n}`}>
                <a href={`#/lesson/${h.lesson}/${h.n}`} onClick={() => { setQ(''); onPick?.(); }}>
                  <b>{h.title}</b>
                  <span>{h.lessonTitle} · {t('bloc {n}', { n: h.n })}</span>
                </a>
              </li>
            );
          }) : <li className="lsearch-none">{t('Aucune leçon ne parle de « {q} ».', { q })}</li>}
        </ul>
      )}
    </div>
  );
}
