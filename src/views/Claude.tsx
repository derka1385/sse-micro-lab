import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { TOPICS } from '../content/catalog';
import { courseExcerpt } from '../claude-context';
import { useClaude } from '../use-claude';
import { ClaudeConversation } from '../components/ClaudeConversation';
import '../claude.css';

export function Claude({ tab = 'chat' }: { tab?: 'chat' | 'key' }) {
  const chat = useClaude(false);
  const [topic, setTopic] = useState('ext');
  const selected = TOPICS.find((t) => t.id === topic);
  const excerpt = selected ? courseExcerpt(selected.refs, 14_000) : '';

  function switchTab(event: KeyboardEvent<HTMLButtonElement>) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const target = event.key === 'Home' ? 'chat' : event.key === 'End' ? 'key' : tab === 'chat' ? 'key' : 'chat';
    window.location.hash = target === 'chat' ? '/claude' : '/claude/key';
    requestAnimationFrame(() => document.getElementById(`claude-tab-${target}`)?.focus());
  }

  return <div className="page claude-page" data-claude-ui>
    <header className="page-head claude-head"><div><h1>Ask Claude directly</h1><p className="lead">Un point qui bloque ? On reprend le raisonnement, une idée à la fois.</p></div><a className="claude-connection" href="#/claude/key">{chat.status?.configured ? 'Clé serveur chargée' : 'Connexion serveur'}</a></header>
    <div className="seg" role="tablist" aria-label="Claude">
      {([['chat', 'Chatbot'], ['key', 'Clé API']] as const).map(([id, label]) => <button key={id} id={`claude-tab-${id}`} type="button" role="tab" aria-selected={tab === id} aria-controls={`claude-panel-${id}`} tabIndex={tab === id ? 0 : -1} className={tab === id ? 'on' : ''} onKeyDown={switchTab} onClick={() => { window.location.hash = id === 'chat' ? '/claude' : '/claude/key'; }}>{label}</button>)}
    </div>
    <section id="claude-panel-key" role="tabpanel" aria-labelledby="claude-tab-key" hidden={tab !== 'key'}>
      <div className="claude-key-layout"><div><h2>La clé reste sur le serveur.</h2>
        <p>Micro Lab utilise la clé du fichier privé de RootSight. Tu n’as rien à coller ici.</p>
        <p role="status">{chat.checking ? 'Lecture de la configuration…' : chat.status?.configured ? 'Clé chargée. Elle sera utilisée lors de ta prochaine question.' : 'Aucune clé serveur disponible.'}</p>
        {chat.error && <p className="claude-error" role="alert">{chat.error}</p>}
        <dl className="claude-settings"><dt>Source</dt><dd>{chat.status?.source ?? 'RootSight · server/.env'}</dd><dt>Modèle</dt><dd>Claude Sonnet 5.5</dd><dt>Effort</dt><dd>Moyen</dd></dl>
        <button type="button" className="ghost" disabled={chat.checking || chat.busy} onClick={() => void chat.refresh()}>Actualiser la configuration</button>
      </div><aside className="claude-key-info"><h3>Ce qui est transmis</h3><p>Lors d’un envoi, Anthropic reçoit ta question, l’historique récent et le contexte du cours. La clé sert uniquement à l’authentification du serveur ; elle n’est jamais renvoyée au navigateur.</p><p>La conversation reste en mémoire. Fermer le panneau rapide ou recharger la page l’efface. Les réponses utilisent les crédits API du compte associé à RootSight.</p><p className="small">Le serveur local est nécessaire. GitHub Pages héberge les pages, mais ne peut pas exécuter le serveur qui garde la clé.</p></aside></div>
    </section>
    <section id="claude-panel-chat" role="tabpanel" aria-labelledby="claude-tab-chat" hidden={tab !== 'chat'}>
      <div className="claude-tools"><label htmlFor="claude-topic">Passage du cours à joindre<select id="claude-topic" value={topic} disabled={chat.busy} onChange={(event) => setTopic(event.target.value)}><option value="none">Sans extrait du cours</option>{TOPICS.map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}</select></label></div>
      {excerpt && <details className="claude-context"><summary>Voir l’extrait envoyé avec la prochaine question</summary><pre>{excerpt}</pre></details>}
      <ClaudeConversation chat={chat} context={() => ({ label: selected?.title ?? 'Sans extrait du cours', text: `Chapitre : ${selected?.title ?? 'Non sélectionné'}\n\n${excerpt}` })} />
    </section>
  </div>;
}
