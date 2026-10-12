import { useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight } from './icons';
import { MAX_QUESTION_LENGTH } from '../claude';
import type { PageContext } from '../claude-context';
import type { useClaude } from '../use-claude';

type Chat = ReturnType<typeof useClaude>;

export function ClaudeConversation({ chat, context, quick = false }: { chat: Chat; context: () => PageContext; quick?: boolean }) {
  const log = useRef<HTMLDivElement>(null);
  const composer = useRef<HTMLTextAreaElement>(null);
  const id = quick ? 'quick-question-input' : 'claude-question';
  useEffect(() => {
    const el = log.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [chat.turns.length, chat.busy]);

  function submit(event?: FormEvent) {
    event?.preventDefault();
    void chat.send(context());
  }

  return <>
    <div ref={log} className="claude-conversation" role="log" aria-label={quick ? 'Questions rapides à Claude' : 'Conversation avec Claude'} aria-live="polite" aria-relevant="additions" aria-busy={chat.busy}>
      {!chat.turns.length && <div className="claude-empty">
        <h2>{quick ? 'Un détail qui bloque ?' : 'Comprendre le pourquoi.'}</h2>
        <p>{quick ? 'Demande le sens d’un sigle ou d’une étape. Claude reçoit le contexte de la page sans que tu la quittes.' : 'Claude reprend les acteurs, les incitations et les formules, comme dans la leçon sur les panneaux solaires.'}</p>
        <div className="claude-prompts">
          {(quick ? ['Que signifie ce sigle dans ce contexte ?', 'Explique cette étape simplement.'] : ['Explique ce chapitre avec une situation concrète, une idée à la fois.', 'Pose-moi une question pour vérifier si j’ai compris.']).map((text) => <button key={text} type="button" disabled={chat.busy} onClick={() => { chat.setDraft(text); composer.current?.focus(); }}>{text}<ArrowRight /></button>)}
        </div>
      </div>}
      {chat.turns.map((turn, i) => <article key={i} className={`claude-turn claude-turn-${turn.role}`}>
        <div className="claude-turn-label">{turn.role === 'user' ? 'Toi' : 'Claude'}{turn.context && <span>{turn.context}</span>}</div>
        <div className="claude-message-text">{turn.content}</div>
        {turn.truncated && <p className="small muted">Réponse interrompue par la limite de longueur. Demande « Continue ».</p>}
      </article>)}
      {chat.busy && <p className="claude-waiting" role="status">Claude prépare sa réponse…</p>}
    </div>
    {chat.error && <p className="claude-error" role="alert">{chat.error}</p>}
    <form className="claude-composer" onSubmit={submit}>
      <label htmlFor={id}>Ta question</label>
      <textarea ref={composer} id={id} rows={quick ? 2 : 3} maxLength={quick ? 2000 : MAX_QUESTION_LENGTH} value={chat.draft} disabled={chat.busy}
        onChange={(event) => chat.setDraft(event.target.value)} placeholder={quick ? 'Par exemple : MEB, ça veut dire quoi ?' : 'Qu’est-ce qui te bloque dans le raisonnement ?'}
        onKeyDown={(event) => { if (event.key === 'Enter' && (event.ctrlKey || event.metaKey) && !event.nativeEvent.isComposing) submit(event); }} />
      <div className="claude-composer-bottom">
        <span className="small muted">Sonnet 5.5 · effort moyen</span>
        {chat.busy ? <button type="button" className="ghost" onClick={chat.stop}>Arrêter</button> : <button type="submit" className="primary" disabled={!chat.draft.trim()}>Envoyer<ArrowRight /></button>}
      </div>
    </form>
    <div className="claude-chat-actions">
      {chat.turns.length > 0 && <button type="button" className="link small" onClick={chat.clear}>Effacer la conversation</button>}
      <button type="button" className="link small" disabled={chat.checking || chat.busy} onClick={() => void chat.refresh()}>{chat.checking ? 'Lecture de la configuration…' : 'Actualiser la connexion'}</button>
    </div>
  </>;
}
