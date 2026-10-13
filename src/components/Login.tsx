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

export function Splash() {
  return <div className="splash" role="status" aria-label={t('Chargement…')}><span className="splash-brand">Micro Lab</span><span className="spinner" aria-hidden="true" /></div>;
}

export function LoginPage() {
  const s = useSync();
  const [busy, setBusy] = useState(false);
  const offline = !!s.offline;
  return (
    <div className="login">
      <section className="login-intro">
        <p className="login-kicker">BE501 · Microeconomics</p>
        <h1 className="login-brand">Micro Lab</h1>
        <p className="login-lead">{t('Un mécanisme à la fois : leçons guidées, exercices d’examen et révisions espacées.')}</p>
        <ul className="login-points">
          <li><span>01</span>{t('Leçons guidées, du cas concret à la formule')}</li>
          <li><span>02</span>{t('Six examens corrigés et des exercices ciblés')}</li>
          <li><span>03</span>{t('Ta progression sauvegardée sur tous tes appareils')}</li>
        </ul>
      </section>
      <section className="login-card" aria-labelledby="login-title">
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
