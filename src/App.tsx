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
  { group: '', items: [{ href: '#/', label: 'Accueil', key: '' }] },
  { group: 'Apprendre', items: [
    { href: '#/learn', label: 'Comprendre', key: 'learn' },
    { href: '#/lab', label: 'Graph Lab', key: 'lab' },
    { href: '#/why', label: 'Pourquoi ?', key: 'why' },
    { href: '#/claude', label: 'Ask Claude directly', key: 'claude' },
  ] },
  { group: 'S’entraîner', items: [
    { href: '#/practice', label: 'Pratique', key: 'practice' },
    { href: '#/recall', label: 'Rappel', key: 'recall' },
    { href: '#/recognize', label: 'Reconnaître le modèle', key: 'recognize' },
    { href: '#/confusions', label: 'Confusions', key: 'confusions' },
    { href: '#/exam', label: 'Examen', key: 'exam' },
  ] },
  { group: 'Piloter', items: [
    { href: '#/map', label: 'Carte de maîtrise', key: 'map' },
    { href: '#/final', label: 'Préparation finale', key: 'final' },
    { href: '#/mistakes', label: 'Mes erreurs', key: 'mistakes' },
    { href: '#/source', label: 'Source (dossier)', key: 'source' },
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
        a.download = `micro-lab-progression-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(a.href);
      }}>Sauvegarder</button>
      <button type="button" className="link small" onClick={() => file.current?.click()}>Restaurer</button>
      <button type="button" className="link small" onClick={() => { if (window.confirm('Effacer toute ta progression locale ? (Pense à sauvegarder avant.)')) resetProgress(); }}>Réinitialiser</button>
      <input ref={file} type="file" accept="application/json" hidden onChange={async (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        try { importProgress(await f.text()); setMsg('Progression restaurée.'); } catch (err) { setMsg((err as Error).message); }
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
    case 'claude': page = <Claude tab={a === 'key' ? 'key' : 'chat'} />; break;
    default: page = <Home />;
  }

  return (
    <div className="shell">
      <header className="topbar">
        <a href="#/" className="brand">Micro Lab <span>BE501</span></a>
        <button type="button" className="ghost menu-btn" aria-expanded={menu} onClick={() => setMenu(!menu)}>Menu{due + active ? ` · ${due + active}` : ''}</button>
      </header>
      <nav className={`sidebar ${menu ? 'open' : ''}`} aria-label="Navigation principale">
        <a href="#/" className="brand brand-side">Micro Lab <span>BE501 · laboratoire</span></a>
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
      </nav>
      <main className="main">{page}</main>
      <QuickQuestion />
      <OverlayHost />
    </div>
  );
}
