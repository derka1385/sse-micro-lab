import { t } from '../i18n';
import { useEffect, useRef, useState } from 'react';
import { Cross } from './icons';
import { ClaudeConversation } from './ClaudeConversation';
import { currentPageContext } from '../claude-context';
import { useClaude } from '../use-claude';
import '../claude.css';

function Panel({ close }: { close: () => void }) {
  const chat = useClaude(true);
  const [page, setPage] = useState(() => currentPageContext());
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    document.getElementById('quick-question-input')?.focus({ preventScroll: true });
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPage(currentPageContext()));
    };
    const observer = new MutationObserver(update);
    const main = document.querySelector('main');
    if (main) observer.observe(main, { childList: true, subtree: true, attributes: true, characterData: true });
    // Reading location.hash at send time also catches views using replaceState.
    window.addEventListener('hashchange', update);
    window.addEventListener('scroll', update, { passive: true });
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape' && panel.current?.contains(document.activeElement)) { event.stopPropagation(); close(); } };
    window.addEventListener('keydown', escape);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('hashchange', update); window.removeEventListener('scroll', update); window.removeEventListener('keydown', escape); };
  }, [close]);

  return <aside ref={panel} id="quick-question-panel" className="quick-panel" aria-label={t('Quick question avec Claude')} data-claude-ui>
    <header className="quick-head"><h2>Quick question</h2><button type="button" className="icon-btn" aria-label={t('Fermer Quick question')} onClick={close}><Cross /></button></header>
    <div className="quick-context"><span className="small muted">{t('Tu travailles sur')}</span><p>{page.label}</p></div>
    <div className="quick-body">
      <ClaudeConversation quick chat={chat} context={() => {
        const fresh = currentPageContext(chat.draft); setPage(fresh); return fresh;
      }} />
    </div>
  </aside>;
}

export function QuickQuestion() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  // Stable callback: typing or replying never resets focus or the context observer.
  const close = useRef(() => { setOpen(false); button.current?.focus({ preventScroll: true }); }).current;
  return <div className="quick-question" data-claude-ui>
    {open && <Panel close={close} />}
    <button ref={button} type="button" className="quick-trigger" aria-expanded={open} aria-controls="quick-question-panel" onClick={() => open ? close() : setOpen(true)}>
      <span aria-hidden="true">?</span> Quick question
    </button>
  </div>;
}
