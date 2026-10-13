import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { loadLang, localize } from './i18n';
import './styles.css';

// The dictionary must be loaded before the app's modules run, so that module-level t() calls translate.
await loadLang();
const [{ default: App }, { CONTENT_ROOTS }] = await Promise.all([import('./App'), import('./content/roots')]);
localize(CONTENT_ROOTS);

// Cloud sync is optional: if Firebase cannot load (offline, blocked), the app keeps working locally.
void import('./sync').then((s) => s.initSync()).catch(() => undefined);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
