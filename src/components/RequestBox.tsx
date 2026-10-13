// "Ask for something": a message to the site's author, delivered by e-mail through Web3Forms.
// The access key is public by design (it only lets this form send to the author's address, which stays private).
import { useState } from 'react';
import { t } from '../i18n';
import { useSync } from '../sync';

const WEB3FORMS_KEY = ''; // ponytail: set once the author has created the key on web3forms.com

const KINDS = [
  { id: 'request', label: 'Une demande' },
  { id: 'error', label: 'Quelque chose de faux' },
  { id: 'other', label: 'Autre' },
] as const;

export function RequestBox() {
  const user = useSync().user;
  const [kind, setKind] = useState<(typeof KINDS)[number]['id']>('request');
  const [text, setText] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  if (!WEB3FORMS_KEY) return null;

  async function send() {
    setState('sending');
    try {
      const page = location.hash || '#/';
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Micro Lab — ${KINDS.find((k) => k.id === kind)!.label}`,
          from_name: user?.name || 'Micro Lab',
          replyto: user?.email,
          message: `${text}\n\n— ${user?.name ?? ''} <${user?.email ?? ''}> · ${page} · ${navigator.language}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error();
      setState('sent'); setText('');
    } catch { setState('error'); }
  }

  return (
    <section className="request" aria-labelledby="request-title">
      <h2 id="request-title">{t('Demander quelque chose')}</h2>
      <p className="muted small">{t('Une idée, une correction, une erreur dans un exercice : écris-le ici, le message part directement par e-mail. Ton nom et ton e-mail sont joints pour qu’on puisse te répondre.')}</p>
      <div className="request-kinds" role="radiogroup" aria-label={t('Type de message')}>
        {KINDS.map((k) => (
          <button key={k.id} type="button" role="radio" aria-checked={kind === k.id} className={`lang-chip ${kind === k.id ? 'on' : ''}`} onClick={() => setKind(k.id)}>{t(k.label)}</button>
        ))}
      </div>
      <label className="sr-only" htmlFor="request-text">{t('Ton message')}</label>
      <textarea id="request-text" rows={4} maxLength={4000} value={text} placeholder={t('Ton message')} disabled={state === 'sending'}
        onChange={(e) => { setText(e.target.value); if (state !== 'sending') setState('idle'); }} />
      <div className="request-foot">
        <button type="button" className="primary" disabled={!text.trim() || state === 'sending'} onClick={() => void send()}>
          {state === 'sending' ? t('Envoi…') : t('Envoyer')}
        </button>
        {state === 'sent' && <span className="request-ok" role="status">{t('Message envoyé. Merci !')}</span>}
        {state === 'error' && <span className="request-err" role="alert">{t('L’envoi a échoué. Vérifie ta connexion et réessaie.')}</span>}
      </div>
    </section>
  );
}
