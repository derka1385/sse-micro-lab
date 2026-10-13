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
import { getClaudeStatus } from './claude';
import { signOutSync, useSync } from './sync';
import { LangPicker, LangPrompt, LoginPage, Splash, langAsked } from './components/Login';
import { t } from './i18n';

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

// Five main sections; a section's sub-pages show only while it is open.
const NAV: { label: string; href: string; items: { href: string; label: string; key: string }[] }[] = [
  { label: t('Accueil'), href: '#/', items: [{ href: '#/', label: t('Accueil'), key: '' }] },
  { label: t('Leçons'), href: '#/learn', items: [{ href: '#/learn', label: t('Leçons'), key: 'learn' }] },
  { label: t('Apprendre'), href: '#/lab', items: [
    { href: '#/lab', label: t('Graph Lab'), key: 'lab' },
    { href: '#/why', label: t('Pourquoi ?'), key: 'why' },
    // The Claude tutor needs the local dev server (it holds the API key): hidden on the static GitHub Pages build.
    ...(import.meta.env.DEV ? [{ href: '#/claude', label: t('Ask Claude directly'), key: 'claude' }] : []),
  ] },
  { label: t('S’entraîner'), href: '#/practice', items: [
    { href: '#/practice', label: t('Pratique'), key: 'practice' },
    { href: '#/recall', label: t('Rappel'), key: 'recall' },
    { href: '#/recognize', label: t('Reconnaître le modèle'), key: 'recognize' },
    { href: '#/confusions', label: t('Confusions'), key: 'confusions' },
    { href: '#/exam', label: t('Examen'), key: 'exam' },
  ] },
  { label: t('Piloter'), href: '#/map', items: [
    { href: '#/map', label: t('Carte de maîtrise'), key: 'map' },
    { href: '#/final', label: t('Préparation finale'), key: 'final' },
    { href: '#/mistakes', label: t('Mes erreurs'), key: 'mistakes' },
    { href: '#/source', label: t('Source (dossier)'), key: 'source' },
  ] },
];

function Account() {
  const s = useSync();
  if (!s.ready) return null;
  if (!s.user) return null;
  const label = s.status === 'syncing' ? t('Synchronisation…') : s.status === 'error' ? t('Synchronisation en échec') : t('Progression synchronisée');
  return (
    <div className="account">
      <div className="account-user">
        {s.user.photo ? <img src={s.user.photo} alt="" referrerPolicy="no-referrer" /> : <span className="account-initial" aria-hidden="true">{(s.user.name || '?').charAt(0).toUpperCase()}</span>}
        <div><b>{s.user.name}</b><span className={`account-status ${s.status}`} title={s.error}>{label}</span></div>
      </div>
      <button type="button" className="link small" onClick={() => void signOutSync()}>{t('Se déconnecter')}</button>
    </div>
  );
}

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

/** Quick question needs the local server that holds the API key: shown in dev, or when a preview server answers. */
function useClaudeServer() {
  const [ok, setOk] = useState<boolean>(import.meta.env.DEV);
  useEffect(() => {
    if (import.meta.env.DEV) return;
    const controller = new AbortController();
    getClaudeStatus(controller.signal).then(() => setOk(true), () => setOk(false));
    return () => controller.abort();
  }, []);
  return ok;
}

export default function App() {
  const claudeServer = useClaudeServer();
  const sync = useSync();
  const route = useRoute();
  const p = useProgress();
  const [menu, setMenu] = useState(false);
  const [asked, setAsked] = useState(langAsked);
  const due = dueReviews(p).length;
  const active = activeMisconceptions(p).length;
  const [head, a, b] = route;
  useEffect(() => setMenu(false), [head, a]);

  let page;
  if (!sync.ready) return <Splash />;
  if (!sync.user) return <LoginPage />;
  if (!asked) return <LangPrompt onDone={() => setAsked(true)} />;
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
        {NAV.map((g) => {
          const key = head === 'lesson' ? 'learn' : (head ?? '');
          const open = g.items.some((it) => it.key === key);
          return (
            <div key={g.href} className={`nav-group ${open ? 'open' : ''}`}>
              <a href={g.href} className={`nav-main ${open ? 'on' : ''}`} aria-current={open && g.items.length === 1 ? 'page' : undefined}>
                {g.label}
                {!open && g.href === '#/practice' && due > 0 && <span className="badge">{due}</span>}
                {!open && g.href === '#/map' && active > 0 && <span className="badge warn">{active}</span>}
              </a>
              {open && g.items.length > 1 && g.items.map((it) => (
                <a key={it.key} href={it.href} className={`nav-item nav-sub ${key === it.key ? 'on' : ''}`} aria-current={key === it.key ? 'page' : undefined}>
                  {it.label}
                  {it.key === 'recall' && due > 0 && <span className="badge">{due}</span>}
                  {it.key === 'mistakes' && active > 0 && <span className="badge warn">{active}</span>}
                </a>
              ))}
            </div>
          );
        })}
        <Account />
        <Backup />
        <LangPicker />
      </nav>
      <main className="main">{page}</main>
      {claudeServer && <QuickQuestion />}
      <OverlayHost />
    </div>
  );
}
