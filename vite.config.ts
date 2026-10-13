import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { claudeMiddleware } from './server/claude.mjs';

export default defineConfig({
  server: {
    host: '127.0.0.1',
    fs: { deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', '**/server/**'] },
  },
  preview: { host: '127.0.0.1' },
  plugins: [react(), {
    name: 'micro-lab-claude-server',
    configureServer(server) { server.middlewares.use(claudeMiddleware()); },
    configurePreviewServer(server) { server.middlewares.use(claudeMiddleware()); },
  }, {
    name: 'micro-lab-production-security',
    apply: 'build',
    transformIndexHtml() {
      return [
        { tag: 'meta', attrs: {
          'http-equiv': 'Content-Security-Policy',
          // Firebase: Auth/Firestore APIs, Google sign-in popup/redirect frame, Google profile photos.
          content: "default-src 'self'; script-src 'self' https://apis.google.com; connect-src 'self' https://*.googleapis.com; frame-src https://sse-micro-lab.firebaseapp.com https://accounts.google.com https://apis.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.googleusercontent.com; font-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'",
        }, injectTo: 'head-prepend' },
        { tag: 'meta', attrs: { name: 'referrer', content: 'no-referrer' }, injectTo: 'head-prepend' },
      ];
    },
  }],
});
