// Sign-in is required to use the app: a full-page welcome with Google sign-in and the language picker.
import { useState } from 'react';
import { LANGS, lang, setLang, t, type Lang } from '../i18n';
import { initSync, signIn, useSync } from '../sync';

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

const ASKED = 'micro-lab-lang-asked';
export const langAsked = () => { try { return localStorage.getItem(ASKED) === '1'; } catch { return true; } };

/** Shown once after the first sign-in on a device: picking a language reloads the page, Continue enters the app. */
export function LangPrompt({ onDone }: { onDone: () => void }) {
  return (
    <div className="lang-prompt">
      <section className="login-card" aria-labelledby="lang-title">
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
        <button type="button" className="google-btn google-btn-lg lang-go" onClick={() => { try { localStorage.setItem(ASKED, '1'); } catch { /* blocked */ } onDone(); }}>
          {t('Continuer')}
        </button>
      </section>
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
