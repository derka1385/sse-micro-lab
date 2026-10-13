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
import { signIn, signOutSync, useSync } from './sync';
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
    { href: '#/learn', label: t('Leçons'), key: 'learn' },
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

function Account() {
  const s = useSync();
  if (!s.ready) return null;
  if (!s.user) return (
    <div className="account">
      <button type="button" className="google-btn" onClick={() => void signIn()}>
        <svg viewBox="0 0 18 18" width="16" height="16" aria-hidden="true"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"/></svg>
        {t('Se connecter avec Google')}
      </button>
      <p className="account-note">{t('Pour retrouver ta progression sur tous tes appareils.')}</p>
    </div>
  );
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
        <Account />
        <Backup />
        <div className="lang-pick">
          <p className="lang-head"><span>{t('Langue')}</span><span className="lang-current">{LANGS.find((l) => l.id === lang)?.name}</span></p>
          <div className="lang-grid" role="radiogroup" aria-label={t('Langue')}>
            {LANGS.map((l) => (
              <button key={l.id} type="button" role="radio" aria-checked={l.id === lang} lang={l.id} title={l.name} aria-label={l.name}
                className={`lang-chip ${l.id === lang ? 'on' : ''}`} onClick={() => { if (l.id !== lang) setLang(l.id as Lang); }}>
                {l.id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <main className="main">{page}</main>
      {claudeServer && <QuickQuestion />}
      <OverlayHost />
    </div>
  );
}
