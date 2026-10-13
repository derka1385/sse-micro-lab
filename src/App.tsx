import { useEffect, useRef, useState } from 'react';
import { OverlayHost } from './components/overlays';
import { activeMisconceptions, dueReviews, exportProgress, importProgress, resetProgress, useProgress } from './store';
import { Home } from './views/Home';
import { Learn, LessonView } from './views/Lesson';
import { GraphLab } from './views/GraphLab';
import { WhyMode } from './views/WhyMode';
import { Practice } from './views/Practice';
import { Recall } from './views/Recall';
import { Recognition } from './views/Recognition';
import { Confusions } from './views/Confusions';
import { ExamMode } from './views/ExamMode';
import { MapView } from './views/MapView';
import { FinalPrep } from './views/FinalPrep';
import { Mistakes } from './views/Mistakes';
import { Sources } from './views/Sources';
import { Claude } from './views/Claude';
import { QuickQuestion } from './components/QuickQuestion';
import { LANGS, lang, setLang, t, type Lang } from './i18n';

function useRoute() {
  const read = () => window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const f = () => { setRoute(read()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  return route;
}

const NAV: { group: string; items: { href: string; label: string; key: string }[] }[] = [
  { group: '', items: [{ href: '#/', label: t('Accueil'), key: '' }] },
  { group: t('Apprendre'), items: [
    { href: '#/learn', label: t('Comprendre'), key: 'learn' },
    { href: '#/lab', label: t('Graph Lab'), key: 'lab' },
    { href: '#/why', label: t('Pourquoi ?'), key: 'why' },
    // The Claude tutor needs the local dev server (it holds the API key): hidden on the static GitHub Pages build.
    ...(import.meta.env.DEV ? [{ href: '#/claude', label: t('Ask Claude directly'), key: 'claude' }] : []),
  ] },
  { group: t('S’entraîner'), items: [
    { href: '#/practice', label: t('Pratique'), key: 'practice' },
    { href: '#/recall', label: t('Rappel'), key: 'recall' },
    { href: '#/recognize', label: t('Reconnaître le modèle'), key: 'recognize' },
    { href: '#/confusions', label: t('Confusions'), key: 'confusions' },
    { href: '#/exam', label: t('Examen'), key: 'exam' },
  ] },
  { group: t('Piloter'), items: [
    { href: '#/map', label: t('Carte de maîtrise'), key: 'map' },
    { href: '#/final', label: t('Préparation finale'), key: 'final' },
    { href: '#/mistakes', label: t('Mes erreurs'), key: 'mistakes' },
    { href: '#/source', label: t('Source (dossier)'), key: 'source' },
  ] },
];

function Backup() {
  const file = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState('');
  return (
    <div className="backup">
      <button type="button" className="link small" onClick={() => {
        const blob = new Blob([exportProgress()], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `micro-lab-progress-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(a.href);
      }}>{t('Sauvegarder')}</button>
      <button type="button" className="link small" onClick={() => file.current?.click()}>{t('Restaurer')}</button>
      <button type="button" className="link small" onClick={() => { if (window.confirm(t('Effacer toute ta progression locale ? (Pense à sauvegarder avant.)'))) resetProgress(); }}>{t('Réinitialiser')}</button>
      <input ref={file} type="file" accept="application/json" hidden onChange={async (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        try { importProgress(await f.text()); setMsg(t('Progression restaurée.')); } catch (err) { setMsg((err as Error).message); }
        e.target.value = '';
      }} />
      {msg && <span className="small muted">{msg}</span>}
    </div>
  );
}

export default function App() {
  const route = useRoute();
  const p = useProgress();
  const [menu, setMenu] = useState(false);
  const due = dueReviews(p).length;
  const active = activeMisconceptions(p).length;
  const [head, a, b] = route;
  useEffect(() => setMenu(false), [head, a]);

  let page;
  switch (head) {
    case undefined: page = <Home />; break;
    case 'learn': page = <Learn />; break;
    case 'lesson': page = <LessonView key={a} id={a} />; break;
    case 'lab': page = <GraphLab preset={a} />; break;
    case 'why': page = <WhyMode id={a} />; break;
    case 'practice': page = <Practice id={a} />; break;
    case 'recall': page = <Recall />; break;
    case 'recognize': page = <Recognition id={a} />; break;
    case 'confusions': page = <Confusions id={a} />; break;
    case 'exam': page = <ExamMode id={a} />; break;
    case 'map': page = <MapView node={a} />; break;
    case 'final': page = <FinalPrep />; break;
    case 'mistakes': page = <Mistakes />; break;
    case 'source': page = <Sources refId={[a, b].filter(Boolean).join('/')} />; break;
    case 'claude': page = import.meta.env.DEV ? <Claude tab={a === 'key' ? 'key' : 'chat'} /> : <Home />; break;
    default: page = <Home />;
  }

  return (
    <div className="shell">
      <header className="topbar">
        <a href="#/" className="brand">Micro Lab <span>BE501</span></a>
        <button type="button" className="ghost menu-btn" aria-expanded={menu} onClick={() => setMenu(!menu)}>{t('Menu')}{due + active ? ` · ${due + active}` : ''}</button>
      </header>
      <nav className={`sidebar ${menu ? 'open' : ''}`} aria-label={t('Navigation principale')}>
        <a href="#/" className="brand brand-side">Micro Lab <span>{t('BE501 · laboratoire')}</span></a>
        {NAV.map((g) => (
          <div key={g.group || 'home'} className="nav-group">
            {g.group && <p className="nav-title">{g.group}</p>}
            {g.items.map((it) => (
              <a key={it.key} href={it.href} className={`nav-item ${(head ?? '') === it.key || (it.key === 'learn' && head === 'lesson') ? 'on' : ''}`}>
                {it.label}
                {it.key === 'recall' && due > 0 && <span className="badge">{due}</span>}
                {it.key === 'mistakes' && active > 0 && <span className="badge warn">{active}</span>}
              </a>
            ))}
          </div>
        ))}
        <Backup />
        <label className="lang-pick small">
          <span className="muted">{t('Langue')}</span>
          <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
            {LANGS.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
          </select>
        </label>
      </nav>
      <main className="main">{page}</main>
      {import.meta.env.DEV && <QuickQuestion />}
      <OverlayHost />
    </div>
  );
}
