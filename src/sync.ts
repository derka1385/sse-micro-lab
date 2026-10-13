// Optional cloud sync: Google sign-in (Firebase Auth) + one Firestore document per user, users/{uid}.
// Without signing in the app works exactly as before (localStorage only). Firestore rules only let a
// signed-in user read and write their own document. The config below is public by design (it identifies
// the project; security comes from Auth + rules), so it is safe in the static site.
import { useSyncExternalStore } from 'react';
import { getProgress, mergeProgress, parseProgress, replaceProgress, subscribeProgress, type Progress } from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyCxsYrPMUepMT5kufDYNdfFP0AnuYNqyaM',
  authDomain: 'sse-micro-lab.firebaseapp.com',
  projectId: 'sse-micro-lab',
  storageBucket: 'sse-micro-lab.firebasestorage.app',
  messagingSenderId: '272616407749',
  appId: '1:272616407749:web:4a45430ee2fa751b80e6ac',
};

const MAX_DOC_CHARS = 900_000; // Firestore documents are capped at 1 MiB.
const WRITE_DELAY = 2500;

export type SyncUser = { name: string; email: string; photo: string | null };
export type SyncState = { ready: boolean; user: SyncUser | null; status: 'off' | 'syncing' | 'synced' | 'error'; error?: string };

let sync: SyncState = { ready: false, user: null, status: 'off' };
const listeners = new Set<() => void>();
const update = (patch: Partial<SyncState>) => { sync = { ...sync, ...patch }; listeners.forEach((l) => l()); };
export const useSync = () => useSyncExternalStore((cb) => { listeners.add(cb); return () => { listeners.delete(cb); }; }, () => sync);

type Fb = {
  auth: import('firebase/auth').Auth;
  authMod: typeof import('firebase/auth');
  db: import('firebase/firestore').Firestore;
  fs: typeof import('firebase/firestore');
};
let fb: Promise<Fb> | null = null;
let loaded: Fb | null = null; // set once Firebase is ready, so sign-in can open its popup within the click
function firebase() {
  fb ??= (async () => {
    const [{ initializeApp }, authMod, fs] = await Promise.all([import('firebase/app'), import('firebase/auth'), import('firebase/firestore')]);
    const app = initializeApp(firebaseConfig);
    loaded = { auth: authMod.getAuth(app), authMod, db: fs.getFirestore(app), fs };
    return loaded;
  })();
  return fb;
}

/** Compact JSON that fits in one Firestore document: the oldest attempts are dropped first if needed. */
function serialize(p: Progress) {
  let json = JSON.stringify(p);
  let attempts = p.attempts;
  while (json.length > MAX_DOC_CHARS && attempts.length > 100) {
    attempts = attempts.slice(Math.floor(attempts.length / 4));
    json = JSON.stringify({ ...p, attempts });
  }
  return json;
}

let stop: (() => void) | null = null;

async function startSync(uid: string) {
  const { db, fs } = await firebase();
  const ref = fs.doc(db, 'users', uid);
  let lastRemote = '';
  let applying = false;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const apply = (p: Progress) => { applying = true; try { replaceProgress(p); } finally { applying = false; } };
  const write = async () => {
    clearTimeout(timer); timer = undefined;
    const json = serialize(getProgress());
    if (json === lastRemote) { update({ status: 'synced', error: undefined }); return; }
    update({ status: 'syncing' });
    try {
      await fs.setDoc(ref, { v: 1, progress: json, updatedAt: fs.serverTimestamp() });
      lastRemote = json;
      update({ status: 'synced', error: undefined });
    } catch (e) {
      update({ status: 'error', error: (e as Error).message });
    }
  };
  const schedule = () => { clearTimeout(timer); timer = setTimeout(() => void write(), WRITE_DELAY); };
  const mergeRemote = (json: string | undefined) => {
    const remote = json ? parseProgress(json) : null;
    if (json) lastRemote = json;
    const merged = remote ? mergeProgress(getProgress(), remote) : getProgress();
    if (JSON.stringify(merged) !== JSON.stringify(getProgress())) apply(merged);
    if (serialize(merged) !== lastRemote) schedule(); else update({ status: 'synced', error: undefined });
  };

  update({ status: 'syncing' });
  try {
    const first = await fs.getDoc(ref);
    mergeRemote(first.data()?.progress as string | undefined);
    await write();
  } catch (e) {
    update({ status: 'error', error: (e as Error).message });
  }
  const unsubDoc = fs.onSnapshot(ref, (snap) => {
    if (snap.metadata.hasPendingWrites) return;
    const json = snap.data()?.progress as string | undefined;
    if (json && json !== lastRemote) mergeRemote(json);
  }, (e) => update({ status: 'error', error: e.message }));
  const unsubLocal = subscribeProgress(() => { if (!applying) schedule(); });
  const flush = () => { if (document.visibilityState === 'hidden' && timer) void write(); };
  document.addEventListener('visibilitychange', flush);
  stop = () => { unsubDoc(); unsubLocal(); document.removeEventListener('visibilitychange', flush); if (timer) void write(); };
}

/** Restores a previous session on load; Firebase lives in its own lazily loaded chunk. */
export async function initSync() {
  const { auth, authMod } = await firebase();
  authMod.getRedirectResult(auth).catch(() => undefined);
  authMod.onAuthStateChanged(auth, (u) => {
    stop?.(); stop = null;
    if (!u) { update({ ready: true, user: null, status: 'off', error: undefined }); return; }
    update({ ready: true, user: { name: u.displayName ?? u.email ?? '', email: u.email ?? '', photo: u.photoURL } });
    void startSync(u.uid);
  });
}

export async function signIn() {
  // Browsers block popups opened after an await: use the already-loaded SDK synchronously when possible.
  const { auth, authMod } = loaded ?? await firebase();
  const provider = new authMod.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  try {
    await authMod.signInWithPopup(auth, provider);
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') await authMod.signInWithRedirect(auth, provider);
    else if (code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request') update({ status: 'error', error: (e as Error).message });
  }
}

export async function signOutSync() {
  const { auth, authMod } = await firebase();
  await authMod.signOut(auth);
}
