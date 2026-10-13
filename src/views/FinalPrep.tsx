import { useState } from 'react';
import { EXAM_DATE, NODES, TOPICS, downstream, nodeById, type Topic } from '../content/catalog';
import { average, mastery, useProgress, type Progress } from '../store';
import { Rich } from '../components/text';
import { t } from '../i18n';

type Row = { t: Topic; ready: number; rec: number; weak: number; imp: number; depth: number; prio: number; conf?: number };

function rows(p: Progress): Row[] {
  const maxImp = Math.max(...NODES.map((n) => downstream(n.id)));
  return TOPICS.map((t) => {
    const nodeAvg = t.nodes.map((id) => average(mastery(p, [id])));
    const own = nodeAvg.reduce((s, x) => s + x, 0) / nodeAvg.length;
    const pre = [...new Set(t.nodes.flatMap((id) => nodeById(id)?.prereqs ?? []))].filter((id) => !t.nodes.includes(id));
    const ready = pre.length ? pre.reduce((s, id) => s + average(mastery(p, [id])), 0) / pre.length : 1;
    const years = new Set(t.history.flatMap((h) => h.years));
    const rec = years.size / 6;
    const imp = Math.max(...t.nodes.map((id) => downstream(id))) / maxImp;
    const depth = Math.min(...t.nodes.map((id) => nodeById(id)?.col ?? 0));
    const weak = 1 - own;
    return { t, ready, rec, weak, imp, depth, prio: 0.35 * weak + 0.25 * rec + 0.25 * imp + 0.15 * ready, conf: p.confidence[t.nodes[0]] };
  });
}

const SORTS = {
  prio: { label: t('Priorité combinée'), fn: (a: Row, b: Row) => b.prio - a.prio },
  depth: { label: t('Ordre des prérequis'), fn: (a: Row, b: Row) => a.depth - b.depth },
  rec: { label: t('Récurrence observée'), fn: (a: Row, b: Row) => b.rec - a.rec },
  weak: { label: t('Ta faiblesse'), fn: (a: Row, b: Row) => b.weak - a.weak },
  imp: { label: t('Importance conceptuelle'), fn: (a: Row, b: Row) => b.imp - a.imp },
};

const pct = (x: number) => `${Math.round(x * 100)} %`;

export function FinalPrep() {
  const p = useProgress();
  const [sort, setSort] = useState<keyof typeof SORTS>('prio');
  const days = Math.ceil((EXAM_DATE.getTime() - Date.now()) / 86_400_000);
  const list = rows(p).sort(SORTS[sort].fn);
  return (
    <div className="page">
      <header className="page-head">
        <h1>{days > 0 ? t('{n} jours avant le final', { n: days }) : t('Jour du final')}</h1>
        <p className="meta">{t('Préparation finale · 23 octobre 2026, date du support L1')}</p>
        <p className="lead"><Rich text={t('Classe les thèmes selon ce qui compte pour toi. La récurrence est un **historique observé** sur six finals (2020–2025) : elle décrit l’échantillon, elle ne prédit pas le prochain sujet (§1).')} /></p>
      </header>
      <div className="seg wrap" role="tablist" aria-label={t('Trier par')}>
        {(Object.keys(SORTS) as (keyof typeof SORTS)[]).map((k) => (
          <button key={k} role="tab" aria-selected={sort === k} className={sort === k ? 'on' : ''} onClick={() => setSort(k)}>{SORTS[k].label}</button>
        ))}
      </div>
      <div className="table-wrap">
        <table className="ftable">
          <thead>
            <tr><th>{t('Thème')}</th><th>{t('Prérequis prêts')}</th><th>{t('Récurrence observée')}</th><th>{t('Faiblesse')}</th><th>{t('Importance')}</th><th>{t('Confiance / mesuré')}</th><th>{t('Priorité')}</th></tr>
          </thead>
          <tbody>
            {list.map((r) => {
              const years = [...new Set(r.t.history.flatMap((h) => h.years))].sort();
              return (
                <tr key={r.t.id}>
                  <th>
                    <a href={r.t.lesson ? `#/lesson/${r.t.lesson}` : `#/map/${r.t.nodes[0]}`}>{r.t.title}</a>
                    <span className="muted small"> {r.t.lecture}{r.t.lesson ? ` · ${t('leçon guidée')}` : ''}</span>
                  </th>
                  <td><Measure v={r.ready} /></td>
                  <td title={r.t.history.map((h) => `${h.label} [${h.basis}]`).join('\n')}>{years.length ? `${years.length}/6` : '—'} <span className="muted small">{years.map((y) => String(y).slice(2)).join(' ')}</span></td>
                  <td><Measure v={r.weak} warn /></td>
                  <td><Measure v={r.imp} /></td>
                  <td className="small">{r.conf ? `${r.conf}/5` : '—'} / {pct(1 - r.weak)}</td>
                  <td><b>{Math.round(r.prio * 100)}</b></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <section className="card subtle small">
        <h3>{t('Comment c’est calculé')}</h3>
        <ul className="plain">
          <li><Rich text={t('**Prérequis prêts** : maîtrise moyenne des nœuds dont ce thème dépend sur la carte.')} /></li>
          <li><Rich text={t('**Récurrence observée** : années où le thème apparaît, d’après les comptages du dossier (§1) ou recomptées depuis sa carte des examens (§16) — survole la cellule pour le détail.')} /></li>
          <li><Rich text={t('**Faiblesse** : 1 − ta maîtrise mesurée (7 dimensions, rappels sur plusieurs jours).')} /></li>
          <li><Rich text={t('**Importance** : nombre de notions qui en dépendent sur la carte (calculé, pas décrété).')} /></li>
          <li><Rich text={t('**Priorité combinée** = 35 % faiblesse + 25 % récurrence + 25 % importance + 15 % prérequis prêts.')} /></li>
          <li><Rich text={t('Parcours suggéré par le dossier (§20.6) : fondations → welfare → pouvoir de marché → défaillances → compléments → sujets chronométrés.')} /></li>
        </ul>
      </section>
    </div>
  );
}

/** A share set as a figure whose weight is the value (hairline at 0, black at 100 %). */
function Measure({ v, warn }: { v: number; warn?: boolean }) {
  return (
    <span className={`measure ${warn && v > 0.5 ? 'warn' : ''}`} style={{ fontWeight: Math.round(260 + 600 * v) }}>
      {pct(v)}
    </span>
  );
}
