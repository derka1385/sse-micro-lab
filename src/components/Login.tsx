// Sign-in is required to use the app: a full-page welcome with Google sign-in and the language picker.
import { useEffect, useState } from 'react';
import { LANGS, inEnglish, lang, loadEnglish, mode, setLang, setMode, t, type Lang, type Mode } from '../i18n';
import { initSync, signIn, useSync } from '../sync';

const MODES: { id: Mode; title: string; text: string }[] = [
  { id: 'native', title: t('Compréhension en langue natale'), text: t('Tout dans ta langue : explications, questions et graphiques.') },
  { id: 'english', title: t('Compréhension anglais'), text: t('Explications dans ta langue ; questions, réponses et termes des graphiques en anglais, comme le jour de l’examen.') },
];

/** Hidden when the interface is in English: both modes are then identical. */
export function ModePicker({ className = '' }: { className?: string }) {
  if (lang === 'en') return null;
  return (
    <div className={`mode-pick ${className}`} role="radiogroup" aria-label={t('Mode')}>
      {MODES.map((m) => (
        <button key={m.id} type="button" role="radio" aria-checked={m.id === mode} className={`mode-row ${m.id === mode ? 'on' : ''}`}
          onClick={() => { if (m.id !== mode) setMode(m.id); }}>
          <b>{m.title}</b><span>{m.text}</span>
        </button>
      ))}
    </div>
  );
}

export function LangPicker({ className = '' }: { className?: string }) {
  return (
    <div className={`lang-pick ${className}`}>
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
  );
}

const GoogleMark = () => (
  <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z" />
    <path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33z" />
    <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z" />
  </svg>
);

// L7 example from the dossier: p_D=23−Q, p_S=2+2Q, then a per-unit tax t=3 (Q 7→6, DWL 1.5). x=40+35Q, y=260−10p.
const LoginGraph = () => (
  <svg className="login-graph" viewBox="0 0 500 290" aria-hidden="true">
    <path className="lg-axis" d="M40 14V260H486" />
    <text className="lg-ax" x="46" y="20">p</text>
    <text className="lg-ax" x="478" y="280">Q</text>
    <path className="lg-dwl" d="M250 90L250 120L285 100Z" />
    <path className="lg-guide" d="M40 100H285V260M40 90H250V260" />
    <path className="lg-d" pathLength="1" d="M40 30L460 150" />
    <path className="lg-s" pathLength="1" d="M40 240L425 20" />
    <path className="lg-st" d="M40 210L372 20" />
    <circle className="lg-eq" cx="285" cy="100" r="5" />
    <circle className="lg-eq2" cx="250" cy="90" r="5" />
    <text className="lg-lab lg-lab-d" x="464" y="154">D</text>
    <text className="lg-lab lg-lab-s" x="430" y="24">S</text>
    <text className="lg-lab lg-lab-st" x="342" y="24">S+t</text>
    <text className="lg-read" x="320" y="208">Q*=7 · p*=16</text>
    <text className="lg-read lg-read2" x="320" y="230">t=3 · DWL=1.5</text>
  </svg>
);

export function Splash() {
  return <div className="splash" role="status" aria-label={t('Chargement…')}><span className="splash-brand">Micro Lab</span><span className="spinner" aria-hidden="true" /></div>;
}


// The demo replays the first check of the solar lesson, French source texts translated at run time.
const DEMO = {
  scene: 'Tu veux installer des panneaux solaires sur ton toit. Un fabricant les vend. Tes voisins, eux, n’achètent rien — mais ils respirent l’air de la ville. Et l’État observe.',
  q: 'Qui est affecté par ton achat sans participer à la transaction ?',
  options: ['Le fabricant', 'Tes voisins', 'L’État', 'Personne'],
  feedback: 'Oui. Ils ne paient rien, ne signent rien, mais l’électricité solaire remplace une électricité plus polluante dans l’air qu’ils respirent.',
};

/** A looping, video-like replay of one exercise: question, a click on the right answer, then the explanation. */
function ModeDemo({ english }: { english: boolean }) {
  const ask = (s: string) => (english ? inEnglish(s) : t(s));
  const code = lang.toUpperCase();
  return (
    <div className="demo" aria-hidden="true">
      <div className="demo-bar"><span /><span /><span /><i className="demo-time" /></div>
      <div className="demo-body">
        <p className="demo-tag">{t('Explication')} · {code}</p>
        <p className="demo-scene">{t(DEMO.scene)}</p>
        <p className="demo-tag">{t('Question')} · {english ? 'EN' : code}</p>
        <p className="demo-q">{ask(DEMO.q)}</p>
        <ul className="demo-options">
          {DEMO.options.map((o, i) => <li key={o} className={i === 1 ? 'right' : ''}>{ask(o)}</li>)}
        </ul>
        <p className="demo-feedback"><b>{t('Correction')} · {code}</b> {t(DEMO.feedback)}</p>
        <span className="demo-cursor" />
      </div>
    </div>
  );
}

const SETUP = 'micro-lab-setup-v3'; // v3: language and study mode are now two steps
export const langAsked = () => { try { return localStorage.getItem(SETUP) === '1'; } catch { return true; } };
const finishSetup = () => { try { localStorage.setItem(SETUP, '1'); } catch { /* blocked */ } };

/** After the first sign-in on a device: language (choosing reloads the page), then study mode with its demo. */
export function LangPrompt({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState<'lang' | 'mode'>('lang');
  const [pick, setPick] = useState<Mode>(mode);
  const [ready, setReady] = useState(false);
  useEffect(() => { if (step === 'mode') void loadEnglish().then(() => setReady(true)); }, [step]);
  const done = () => { finishSetup(); if (pick !== mode) setMode(pick); else onDone(); };

  if (step === 'lang') return (
    <div className="lang-prompt">
      <section className="login-card" aria-labelledby="lang-title">
        <p className="setup-step">1 / {lang === 'en' ? 1 : 2}</p>
        <h2 id="lang-title">{t('Ta langue préférée')}</h2>
        <p className="login-sub">{t('Tu pourras la changer plus tard dans le menu.')}</p>
        <div className="lang-list" role="radiogroup" aria-label={t('Langue')}>
          {LANGS.map((l) => (
            <button key={l.id} type="button" role="radio" aria-checked={l.id === lang} lang={l.id}
              className={`lang-row ${l.id === lang ? 'on' : ''}`} onClick={() => { if (l.id !== lang) setLang(l.id as Lang); }}>
              <span>{l.name}</span><span className="lang-code">{l.id.toUpperCase()}</span>
            </button>
          ))}
        </div>
        <button type="button" className="google-btn google-btn-lg lang-go" onClick={() => { if (lang === 'en') { finishSetup(); onDone(); } else setStep('mode'); }}>
          {t('Continuer')}
        </button>
      </section>
    </div>
  );

  return (
    <div className="mode-prompt">
      <header>
        <p className="setup-step">2 / 2</p>
        <h2>{t('Comment veux-tu apprendre ?')}</h2>
        <p className="login-sub">{t('Regarde la différence sur le même exercice, puis choisis. Tu pourras changer dans le menu.')}</p>
      </header>
      <div className="mode-cards" role="radiogroup" aria-label={t('Mode')}>
        {MODES.map((m) => (
          <button key={m.id} type="button" role="radio" aria-checked={pick === m.id} className={`mode-card ${pick === m.id ? 'on' : ''}`} onClick={() => setPick(m.id)}>
            {ready ? <ModeDemo english={m.id === 'english'} /> : <div className="demo demo-loading" />}
            <b>{m.title}</b>
            <span>{m.text}</span>
          </button>
        ))}
      </div>
      <div className="mode-actions">
        <button type="button" className="ghost" onClick={() => setStep('lang')}>{t('Retour')}</button>
        <button type="button" className="google-btn google-btn-lg lang-go" onClick={done}>{t('Commencer')}</button>
      </div>
    </div>
  );
}

export function LoginPage() {
  const s = useSync();
  const [busy, setBusy] = useState(false);
  const offline = !!s.offline;
  return (
    <div className="login">
      <section className="login-intro">
        <h1 className="login-brand">Micro <mark>Lab</mark></h1>
        <p className="login-lead">{t('Un mécanisme à la fois : leçons guidées, exercices d’examen et révisions espacées.')}</p>
        <LoginGraph />
        <ul className="login-points">
          <li>{t('Leçons guidées, du cas concret à la formule')}</li>
          <li>{t('Six examens corrigés et des exercices ciblés')}</li>
          <li>{t('Ta progression sauvegardée sur tous tes appareils')}</li>
        </ul>
      </section>
      <section className="login-card" aria-labelledby="login-title">
        <p className="login-course">BE501 · Microeconomics · SSE</p>
        <h2 id="login-title">{t('Connexion')}</h2>
        <p className="login-sub">{t('Connecte-toi pour accéder au laboratoire et garder ta progression.')}</p>
        <button type="button" className="google-btn google-btn-lg" disabled={busy} onClick={async () => {
          setBusy(true);
          try { if (offline) await initSync(); else await signIn(); } finally { setBusy(false); }
        }}>
          {busy ? <span className="spinner" aria-hidden="true" /> : <GoogleMark />}
          {offline ? t('Réessayer') : t('Se connecter avec Google')}
        </button>
        {s.status === 'error' && <p className="login-error" role="alert">{offline ? t('Connexion impossible. Vérifie ta connexion internet puis réessaie.') : t('La connexion a échoué. Réessaie.')}</p>}
        <p className="login-privacy">{t('Seuls ton nom, ton e-mail et ta progression sont enregistrés. Personne d’autre n’y a accès.')}</p>
        <LangPicker className="login-lang" />
      </section>
    </div>
  );
}
