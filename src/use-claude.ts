import { useCallback, useEffect, useRef, useState } from 'react';
import { askClaude, ClaudeError, getClaudeStatus } from './claude';
import type { ChatMessage, ClaudeStatus } from './claude';
import type { PageContext } from './claude-context';

export type ClaudeTurn = ChatMessage & { context?: string; excerpt?: string; truncated?: boolean };

export function useClaude(quick: boolean) {
  const [status, setStatus] = useState<ClaudeStatus | null>(null);
  const [checking, setChecking] = useState(false);
  const [turns, setTurns] = useState<ClaudeTurn[]>([]);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const pending = useRef<AbortController | null>(null);
  const statusRequest = useRef<AbortController | null>(null);

  const refresh = useCallback(async () => {
    statusRequest.current?.abort();
    const controller = new AbortController(); statusRequest.current = controller;
    setChecking(true); setError('');
    try {
      const data = await getClaudeStatus(controller.signal);
      if (statusRequest.current === controller) setStatus(data);
    } catch (err) {
      if (statusRequest.current === controller && !controller.signal.aborted) {
        setStatus(null); setError(err instanceof Error ? err.message : 'Serveur inaccessible.');
      }
    } finally {
      if (statusRequest.current === controller) { statusRequest.current = null; setChecking(false); }
    }
  }, []);

  useEffect(() => {
    void refresh();
    const forget = () => { pending.current?.abort(); pending.current = null; setTurns([]); setDraft(''); setBusy(false); setError(''); };
    window.addEventListener('pagehide', forget);
    return () => {
      window.removeEventListener('pagehide', forget);
      pending.current?.abort(); pending.current = null;
      statusRequest.current?.abort(); statusRequest.current = null;
    };
  }, [refresh]);

  async function send(context: PageContext) {
    const question = draft.trim();
    if (!question || pending.current) return;
    if (/sk-ant-[a-zA-Z0-9_-]{10,}/.test(question)) { setDraft(''); setError('Ne colle pas de clé API dans la conversation. Le serveur la lit déjà dans le Trousseau macOS.'); return; }
    const controller = new AbortController(); pending.current = controller;
    const previous = turns;
    const next: ClaudeTurn[] = [...turns, { role: 'user', content: question, context: context.label, excerpt: context.text }];
    setTurns(next); setDraft(''); setBusy(true); setError('');
    try {
      const history = next.map((turn, i) => ({ role: turn.role, content: turn.content + (i < next.length - 1 && turn.excerpt ? `\n\n<contexte_de_cette_question>\n${turn.excerpt.slice(0, 9000)}\n</contexte_de_cette_question>` : '') }));
      const reply = await askClaude(history, context.text, quick, controller.signal);
      if (pending.current === controller) setTurns([...next, { role: 'assistant', content: reply.text, truncated: reply.truncated }]);
    } catch (err) {
      if (pending.current !== controller) return;
      setTurns(previous); setDraft(question);
      setError(err instanceof ClaudeError ? err.message : 'Envoi arrêté. Ta question est conservée.');
    } finally {
      if (pending.current === controller) { pending.current = null; setBusy(false); }
    }
  }

  function clear() {
    pending.current?.abort(); pending.current = null;
    setTurns([]); setDraft(''); setBusy(false); setError('');
  }

  return { status, checking, turns, draft, setDraft, busy, error, refresh, send, clear, stop: () => pending.current?.abort() };
}
