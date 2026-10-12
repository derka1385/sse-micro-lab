import { TOPICS } from './content/catalog';
import { LESSONS } from './content/lessons';
import { DOSSIER, resolve } from './dossier';

export type PageContext = { label: string; text: string };

export function courseExcerpt(refs: string[], budget = 9000) {
  const parts: string[] = [];
  for (const ref of [...new Set(refs)]) {
    const span = resolve(ref);
    if (!span || budget <= 0) continue;
    const text = `§${ref} — ${span.title}\n${DOSSIER.lines.slice(span.start, span.end).join('\n')}`.slice(0, budget);
    parts.push(text); budget -= text.length;
  }
  return parts.join('\n\n');
}

// Read only rendered study content and numeric/selection controls, never form drafts or storage.
export function currentPageContext(question = ''): PageContext {
  const main = document.querySelector<HTMLElement>('main');
  const route = window.location.hash || '#/';
  const title = main?.querySelector('h1')?.textContent?.trim() || 'Micro Lab';
  const block = main?.querySelector<HTMLElement>('.block-card');
  const step = main?.querySelector('[aria-current="step"]')?.getAttribute('aria-label');
  const tabs = [...(main?.querySelectorAll('[role="tab"][aria-selected="true"]') ?? [])].map((el) => el.textContent?.trim()).filter(Boolean);
  const label = [title, step || block?.querySelector('h2')?.textContent?.trim(), ...tabs].filter(Boolean).join(' · ');
  if (!main) return { label: title, text: `Page : ${title}\nRoute : ${route}` };
  if (main.querySelector('.claude-page')) {
    // Reuse the selected chapter, without reading the other conversation or its draft.
    const selected = TOPICS.find((t) => t.id === main.querySelector<HTMLSelectElement>('#claude-topic')?.value);
    return { label: [title, selected?.title].filter(Boolean).join(' · '), text: `Page : ${title}\nRoute : ${route}\nChapitre : ${selected?.title ?? 'Sans extrait'}\n\n${selected ? courseExcerpt(selected.refs) : ''}` };
  }

  const viewport: string[] = [];
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  let length = 0;
  while ((node = walker.nextNode()) && length < 6000) {
    const parent = node.parentElement;
    if (!parent || parent.closest('input, textarea, select, script, style, [hidden], [aria-hidden="true"], [data-claude-ui]')) continue;
    const text = node.textContent?.trim();
    if (!text) continue;
    const range = document.createRange(); range.selectNodeContents(node);
    const rect = range.getBoundingClientRect();
    if (!rect.width || !rect.height || rect.bottom < 0 || rect.top > window.innerHeight) continue;
    viewport.push(text); length += text.length;
  }
  const settings = [...main.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input[type="range"], input[type="checkbox"], select')]
    .filter((el) => el.getClientRects().length > 0)
    .map((el) => {
      const name = el.getAttribute('aria-label') || el.closest('label')?.textContent?.trim() || el.closest('.axis-ctl')?.querySelector('.axis-top > span')?.textContent?.trim() || el.id || 'Réglage';
      const value = el instanceof HTMLSelectElement ? el.selectedOptions[0]?.textContent : el.type === 'checkbox' ? el.checked ? 'affiché' : 'masqué' : el.getAttribute('aria-valuetext') || el.value;
      return `${name.slice(0, 100)} : ${value}`;
    }).join('\n');
  const selection = window.getSelection();
  const selected = selection?.anchorNode && main.contains(selection.anchorNode) ? selection.toString().trim().slice(0, 1500) : '';
  const study = [block?.innerText.slice(0, 6000), viewport.join(' ')].filter(Boolean).join('\n\n');
  const refs = [...(study.matchAll(/§\s*(\d+(?:\.\d+)?)/g))].map((m) => m[1]);
  const lesson = route.startsWith('#/lesson/') ? LESSONS[route.slice('#/lesson/'.length)] : undefined;
  const topic = TOPICS.find((t) => lesson ? (lesson.topic ?? 'ext') === t.id : [t.title, t.en].some((name) => study.toLowerCase().includes(name.toLowerCase())));
  if (topic) refs.push(...topic.refs);
  if (route.startsWith('#/lab') || route.startsWith('#/lesson/ext-positive') || route.startsWith('#/practice')) refs.push('11.1', '11.2', '11.3');
  const sourceRef = route.startsWith('#/source/') ? decodeURIComponent(route.slice('#/source/'.length)) : '';
  if (sourceRef) refs.unshift(sourceRef);

  // Definitions for abbreviations in the question and current screen, MEB included.
  const matches = (names: string[], text: string) => names.some((name) => {
    if (!name.trim()) return false;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|[^A-Za-z])${escaped}([^A-Za-z]|$)`, 'i').test(text);
  });
  const asked = DOSSIER.abbr.filter((entry) => matches(entry.names, question));
  const onPage = DOSSIER.abbr.filter((entry) => !asked.includes(entry) && matches(entry.names, study.slice(0, 4000)));
  const definitions = [...asked, ...onPage].slice(0, 16).map((entry) => `§18 — ${entry.names.join(' / ')} : ${entry.english} — ${entry.french}`).join('\n');
  return { label, text: [
    `Page : ${label}\nRoute : ${route}`,
    selected && `Texte sélectionné : ${selected}`,
    `Bloc actuel et contenu visible :\n${study.slice(0, 10_000)}`,
    settings && `Réglages actuels :\n${settings.slice(0, 1500)}`,
    definitions && `Sigles du dossier :\n${definitions}`,
    `Extraits du dossier :\n${courseExcerpt(refs, 6500)}`,
  ].filter(Boolean).join('\n\n').slice(0, 20_000) };
}
