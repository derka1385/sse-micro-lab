import { useEffect, useMemo, useRef, useState } from 'react';
import { DOSSIER, resolve } from '../dossier';
import { t } from '../i18n';

type Tab = 'text' | 'abbr' | 'formulas' | 'lexicon';

export function Sources({ refId }: { refId?: string }) {
  const [tab, setTab] = useState<Tab>('text');
  const [chapter, setChapter] = useState(() => (refId ? refId.split(/[.:#]/)[0] : '0'));
  const [q, setQ] = useState('');
  const [line, setLine] = useState<number | null>(null);
  const r = refId ? resolve(refId) : null;
  useEffect(() => { if (refId) { setChapter(refId.split(/[.:#]/)[0]); setTab('text'); } }, [refId]);

  const hits = useMemo(() => {
    if (q.trim().length < 3) return [];
    const needle = q.toLowerCase();
    return DOSSIER.lines.flatMap((l, i) => (l.toLowerCase().includes(needle) ? [i] : [])).slice(0, 80);
  }, [q]);
  const chapterOf = (i: number) => DOSSIER.chapters.find((c) => i >= c.start - 3 && i < c.end)?.id ?? '0';

  const ch = DOSSIER.chapters.find((c) => c.id === chapter) ?? DOSSIER.chapters[0];
  const hl: [number, number] | null = line !== null ? [line, line + 1] : r && r.hl ? r.hl : r && chapter === refId?.split(/[.:#]/)[0] ? [r.start, r.end] : null;

  return (
    <div className="page">
      <header className="page-head">
        <h1>{t('Le dossier, source de vérité')}</h1>
        <p className="lead">{t('Tout ce que l’app affiche renvoie ici. Les références « §11.3 », « §15 A6 » ou « §16 E2020 » ouvrent l’extrait exact.')}</p>
      </header>
      <div className="seg wrap" role="tablist">
        {([['text', t('Texte')], ['abbr', t('Sigles (§18)')], ['formulas', t('Formulaire (§17)')], ['lexicon', t('Lexique (§19)')]] as [Tab, string][]).map(([k, l]) => (
          <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {tab === 'text' && (
        <div className="source-grid">
          <nav className="source-nav" aria-label={t('Chapitres')}>
            <input type="search" placeholder={t('Rechercher dans le dossier…')} value={q} onChange={(e) => setQ(e.target.value)} aria-label={t('Recherche')} />
            {hits.length > 0 ? (
              <ul className="hits">
                {hits.map((i) => (
                  <li key={i}><button type="button" className="link small" onClick={() => { setChapter(chapterOf(i)); setLine(i); }}>{i + 1} · {DOSSIER.lines[i].trim().slice(0, 70)}</button></li>
                ))}
              </ul>
            ) : (
              DOSSIER.chapters.map((c) => (
                <button key={c.id} type="button" className={`why-item ${c.id === ch.id ? 'on' : ''}`} onClick={() => { setChapter(c.id); setLine(null); }}>
                  {c.id}. {c.title.charAt(0) + c.title.slice(1).toLowerCase()}
                </button>
              ))
            )}
          </nav>
          <ChapterText start={ch.start} end={ch.end} title={`${ch.id}. ${ch.title}`} hl={hl} />
        </div>
      )}

      {tab === 'abbr' && (
        <div className="table-wrap">
          <table className="wtable">
            <thead><tr><th>{t('Sigle')}</th><th>{t('Tag')}</th><th>English</th><th>{t('Français / note')}</th><th>§</th></tr></thead>
            <tbody>
              {DOSSIER.abbr.map((a) => (
                <tr key={a.line}><th>{a.names.join(', ')}</th><td>{a.tag}</td><td>{a.english}</td><td className="small">{a.french}</td><td className="small">{a.section}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="small muted">{t('[O] observé dans les PDF · [A] alias standard d’une notion présente · [C] complément ajouté pour rendre les méthodes compréhensibles.')}</p>
        </div>
      )}

      {tab === 'formulas' && (
        <ul className="plain formulas">
          {DOSSIER.formulas.map((f) => <li key={f.id}><b>{f.id}</b> <span className="mono">{f.text}</span></li>)}
        </ul>
      )}

      {tab === 'lexicon' && <Lexicon />}
    </div>
  );
}

function ChapterText({ start, end, title, hl }: { start: number; end: number; title: string; hl: [number, number] | null }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { ref.current?.scrollIntoView({ block: 'center' }); }, [hl, start]);
  return (
    <article className="card source-text">
      <h3>{title}</h3>
      {DOSSIER.lines.slice(start, end).map((l, i) => {
        const n = start + i;
        const on = hl && n >= hl[0] && n < hl[1];
        return (
          <div key={n} ref={on && n === hl![0] ? ref : undefined} className={`sline ${on ? 'hl' : ''}`}>
            <span className="lno">{n + 1}</span>
            <span>{l || ' '}</span>
          </div>
        );
      })}
    </article>
  );
}

function Lexicon() {
  const [q, setQ] = useState('');
  const list = DOSSIER.lexicon.filter((e) => !q || `${e.term} ${e.french} ${e.def}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <input type="search" placeholder={t('Chercher un mot anglais ou français…')} value={q} onChange={(e) => setQ(e.target.value)} aria-label={t('Recherche lexique')} />
      <dl className="lexicon">
        {list.map((e) => (
          <div key={e.line}><dt lang="en">{e.term}</dt><dd><b>{e.french}</b>{e.def && ` — ${e.def}`} <span className="muted small">§{e.section}</span></dd></div>
        ))}
      </dl>
    </div>
  );
}
