// Profile (Google account, sync, progress file), settings (language, study mode) and the request form.
import { useRef, useState } from 'react';
import { LangPicker, ModePicker } from '../components/Login';
import { RequestBox } from '../components/RequestBox';
import { lang, t } from '../i18n';
import { exportProgress, importProgress, resetProgress } from '../store';
import { signOutSync, useSync } from '../sync';

export const syncLabel = (status: string) =>
  status === 'syncing' ? t('Synchronisation…') : status === 'error' ? t('Synchronisation en échec') : t('Progression synchronisée');

export function Profile() {
  const s = useSync();
  const file = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState('');
  if (!s.user) return null;
  return (
    <div className="page account-page">
      <header className="page-head"><h1>{t('Profil')}</h1></header>
      <section className="settings-block">
        <div className="profile-id">
          {s.user.photo ? <img src={s.user.photo} alt="" referrerPolicy="no-referrer" /> : <span className="account-initial" aria-hidden="true">{(s.user.name || '?').charAt(0).toUpperCase()}</span>}
          <div><b>{s.user.name}</b><span className={`account-status ${s.status}`} title={s.error}>{syncLabel(s.status)}</span></div>
        </div>
        <dl className="profile-facts">
          <div><dt>{t('Nom')}</dt><dd>{s.user.name || '—'}</dd></div>
          <div><dt>{t('Adresse e-mail')}</dt><dd>{s.user.email || '—'}</dd></div>
        </dl>
        <p className="muted small">{t('Connecté avec Google : le mot de passe et l’adresse se gèrent dans ton compte Google.')}</p>
        <button type="button" className="ghost" onClick={() => void signOutSync()}>{t('Se déconnecter')}</button>
      </section>
      <section className="settings-block">
        <h2>{t('Sauvegarde de la progression')}</h2>
        <p className="muted small">{t('Ta progression est synchronisée avec ton compte. Tu peux aussi l’exporter dans un fichier.')}</p>
        <div className="settings-actions">
          <button type="button" className="ghost" onClick={() => {
            const blob = new Blob([exportProgress()], { type: 'application/json' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `micro-lab-progress-${new Date().toISOString().slice(0, 10)}.json`;
            a.click();
            URL.revokeObjectURL(a.href);
          }}>{t('Sauvegarder')}</button>
          <button type="button" className="ghost" onClick={() => file.current?.click()}>{t('Restaurer')}</button>
          <button type="button" className="ghost danger" onClick={() => { if (window.confirm(t('Effacer toute ta progression locale ? (Pense à sauvegarder avant.)'))) resetProgress(); }}>{t('Réinitialiser')}</button>
          <input ref={file} type="file" accept="application/json" hidden onChange={async (e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            try { importProgress(await f.text()); setMsg(t('Progression restaurée.')); } catch (err) { setMsg((err as Error).message); }
            e.target.value = '';
          }} />
        </div>
        {msg && <p className="small muted" role="status">{msg}</p>}
      </section>
    </div>
  );
}

export function Settings() {
  return (
    <div className="page account-page">
      <header className="page-head"><h1>{t('Paramètres')}</h1></header>
      <section className="settings-block">
        <h2>{t('Langue')}</h2>
        <LangPicker />
      </section>
      {lang !== 'en' && (
        <section className="settings-block">
          <h2>{t('Mode d’étude')}</h2>
          <ModePicker />
        </section>
      )}
    </div>
  );
}

export function RequestPage() {
  return (
    <div className="page account-page">
      <RequestBox />
    </div>
  );
}
