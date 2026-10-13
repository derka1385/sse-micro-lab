import { lang } from './i18n';

// The browser only talks to Micro Lab's same-origin server. It never handles an API key.
export type ChatMessage = { role: 'user' | 'assistant'; content: string };
export type ClaudeReply = { text: string; truncated: boolean };
export type ClaudeStatus = { configured: boolean; model: string; effort: string; source: string };
export const MAX_QUESTION_LENGTH = 6000;

export class ClaudeError extends Error {
  constructor(message: string) { super(message); this.name = 'ClaudeError'; }
}

async function request<T>(path: string, body?: unknown, signal?: AbortSignal): Promise<T> {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}api/claude/${path}`, {
      method: body ? 'POST' : 'GET', credentials: 'same-origin', cache: 'no-store', redirect: 'error',
      headers: { 'x-micro-lab': '1', ...(body ? { 'content-type': 'application/json' } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}), signal,
    });
    if (!response.headers.get('content-type')?.includes('application/json')) throw new ClaudeError('L’assistant a besoin du serveur local : lance npm run dev et ouvre son lien localhost.');
    const data = await response.json();
    if (!response.ok) throw new ClaudeError(typeof data.error === 'string' ? data.error : 'L’assistant est indisponible. Réessaie.');
    return data as T;
  } catch (error) {
    if (signal?.aborted) throw new DOMException('Envoi arrêté.', 'AbortError');
    if (error instanceof ClaudeError) throw error;
    throw new ClaudeError('Serveur local inaccessible. Lance npm run dev, puis réessaie.');
  }
}

export const getClaudeStatus = (signal?: AbortSignal) => request<ClaudeStatus>('status', undefined, signal);

export function askClaude(messages: ChatMessage[], context: string, quick: boolean, signal?: AbortSignal) {
  if (!messages.at(-1)?.content.trim()) throw new ClaudeError('Écris une question avant de l’envoyer.');
  if (messages.at(-1)!.content.length > MAX_QUESTION_LENGTH) throw new ClaudeError('Raccourcis ta question avant de l’envoyer.');
  if (messages.some((m) => /sk-ant-[a-zA-Z0-9_-]{10,}/.test(m.content))) throw new ClaudeError('Ne colle pas de clé API dans la conversation. Elle est déjà lue sur le serveur.');
  const recent = messages.slice(-11);
  if (recent[0]?.role === 'assistant') recent.shift();
  return request<ClaudeReply>('messages', { messages: recent, context: context.slice(0, 20_000), quick, lang }, signal);
}
