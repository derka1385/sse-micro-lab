import { t } from '../i18n';
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
    <div ref={log} className="claude-conversation" role="log" aria-label={quick ? t('Questions rapides à Claude') : t('Conversation avec Claude')} aria-live="polite" aria-relevant="additions" aria-busy={chat.busy}>
      {!chat.turns.length && <div className="claude-empty">
        <h2>{quick ? t('Un détail qui bloque ?') : t('Comprendre le pourquoi.')}</h2>
        <p>{quick ? t('Demande le sens d’un sigle ou d’une étape. Claude reçoit le contexte de la page sans que tu la quittes.') : t('Claude reprend les acteurs, les incitations et les formules, comme dans la leçon sur les panneaux solaires.')}</p>
        <div className="claude-prompts">
          {(quick ? [t('Que signifie ce sigle dans ce contexte ?'), t('Explique cette étape simplement.')] : [t('Explique ce chapitre avec une situation concrète, une idée à la fois.'), t('Pose-moi une question pour vérifier si j’ai compris.')]).map((text) => <button key={text} type="button" disabled={chat.busy} onClick={() => { chat.setDraft(text); composer.current?.focus(); }}>{text}<ArrowRight /></button>)}
        </div>
      </div>}
      {chat.turns.map((turn, i) => <article key={i} className={`claude-turn claude-turn-${turn.role}`}>
        <div className="claude-turn-label">{turn.role === 'user' ? t('Toi') : 'Claude'}{turn.context && <span>{turn.context}</span>}</div>
        <div className="claude-message-text">{turn.content}</div>
        {turn.truncated && <p className="small muted">{t('Réponse interrompue par la limite de longueur. Demande « Continue ».')}</p>}
      </article>)}
      {chat.busy && <div className="claude-waiting" role="status">
        <span className="claude-dots" aria-hidden="true"><i /><i /><i /></span>
        <span>{t('Claude réfléchit…')}</span>
      </div>}
    </div>
    {chat.error && <p className="claude-error" role="alert">{chat.error}</p>}
    <form className="claude-composer" onSubmit={submit}>
      <label htmlFor={id}>{t('Ta question')}</label>
      <textarea ref={composer} id={id} rows={quick ? 2 : 3} maxLength={quick ? 2000 : MAX_QUESTION_LENGTH} value={chat.draft} disabled={chat.busy}
        onChange={(event) => chat.setDraft(event.target.value)} placeholder={quick ? t('Par exemple : MEB, ça veut dire quoi ?') : t('Qu’est-ce qui te bloque dans le raisonnement ?')}
        onKeyDown={(event) => { if (event.key === 'Enter' && (event.ctrlKey || event.metaKey) && !event.nativeEvent.isComposing) submit(event); }} />
      <div className="claude-composer-bottom">
        <span className="small muted">Sonnet 5.5 · effort {quick ? t('bas') : t('moyen')}</span>
        {chat.busy ? <span className="claude-busy-actions"><span className="claude-spinner" aria-hidden="true" /><button type="button" className="ghost" onClick={chat.stop}>{t('Arrêter')}</button></span> : <button type="submit" className="primary" disabled={!chat.draft.trim()}>{t('Envoyer')}<ArrowRight /></button>}
      </div>
    </form>
    <div className="claude-chat-actions">
      {chat.turns.length > 0 && <button type="button" className="link small" onClick={chat.clear}>{t('Effacer la conversation')}</button>}
      <button type="button" className="link small" disabled={chat.checking || chat.busy} onClick={() => void chat.refresh()}>{chat.checking ? t('Lecture de la configuration…') : t('Actualiser la connexion')}</button>
    </div>
  </>;
}
