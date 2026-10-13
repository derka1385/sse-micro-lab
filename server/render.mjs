// Public Claude endpoint (Render): only students signed in on the site, a daily quota per account.
// The Anthropic key lives in Render's environment (ANTHROPIC_API_KEY) and never reaches the browser.
import { createServer } from 'node:http';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { ApiError, claudeHandler } from './claude.mjs';

const PROJECT = 'sse-micro-lab'; // Firebase project of the site
const ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://derka1385.github.io').split(',').map((s) => s.trim());
const DAILY_LIMIT = Number(process.env.DAILY_LIMIT || 30);
const JWKS = createRemoteJWKSet(new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'));

/** Verifies the Firebase ID token sent by the site; returns the account id. */
async function firebaseUser(req) {
  const token = /^Bearer (.+)$/.exec(req.headers.authorization ?? '')?.[1];
  if (!token) throw new ApiError(401, 'Connecte-toi sur le site pour poser une question.');
  try {
    const { payload } = await jwtVerify(token, JWKS, { issuer: `https://securetoken.google.com/${PROJECT}`, audience: PROJECT });
    if (!payload.sub) throw new Error();
    return payload.sub;
  } catch { throw new ApiError(401, 'Session expirée : recharge la page et reconnecte-toi.'); }
}

// ponytail: in-memory quota, reset when Render restarts the free instance; move to Firestore if abused.
const used = new Map();
function countQuestion(uid) {
  const day = new Date().toISOString().slice(0, 10);
  const u = used.get(uid);
  const n = u?.day === day ? u.n : 0;
  if (n >= DAILY_LIMIT) throw new ApiError(429, `Limite de ${DAILY_LIMIT} questions par jour atteinte. Reviens demain.`);
  used.set(uid, { day, n: n + 1 });
}

const handle = claudeHandler(firebaseUser, { beforeAsk: countQuestion });

createServer((req, res) => {
  const origin = req.headers.origin;
  if (origin && ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type, x-micro-lab');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Max-Age', '600');
  } else if (origin) {
    res.writeHead(403).end();
    return;
  }
  if (req.method === 'OPTIONS') { res.writeHead(204).end(); return; }
  if (req.url === '/api/health') { res.writeHead(200, { 'content-type': 'text/plain' }).end('ok'); return; }
  void handle(req, res);
}).listen(Number(process.env.PORT || 8787), () => console.log('micro-lab api ready'));
