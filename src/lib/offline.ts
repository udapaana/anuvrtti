/**
 * offline.ts — the flight-mode button.
 *
 * The service worker is lazy by default: whatever page you visit gets cached
 * as a side effect, so re-reading something offline mostly just works. What
 * it doesn't do on its own is guarantee a NEW passage is there before you've
 * lost the connection — the situation this exists for is "I'm about to board
 * and want the reader to work for the next four hours."
 *
 * This is a thin wrapper over the service worker's CACHE_CORE / CLEAR_OFFLINE
 * messages: it drives the download with progress and persists just enough
 * state (in localStorage, not the cache itself — asking the Cache Storage
 * API "is everything still there" is a bigger check than a settings toggle
 * needs) to show "saved 2 hours ago" across reloads.
 *
 * No registration call lives here: SvelteKit registers `service-worker.ts`
 * itself on every page load (the default `kit.serviceWorker.register: true`,
 * which this project never overrides), matching the module type its own
 * build produced. A second manual registration would be redundant at best.
 */
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type OfflineStatus = 'unsupported' | 'idle' | 'working' | 'ready' | 'error';

const SAVED_KEY = 'anuvrtti-offline-saved-at';
const BYTES_KEY = 'anuvrtti-offline-bytes';

function initialStatus(): OfflineStatus {
  if (!browser || !('serviceWorker' in navigator)) return 'unsupported';
  return localStorage.getItem(SAVED_KEY) ? 'ready' : 'idle';
}

export const offlineStatus = writable<OfflineStatus>(initialStatus());
export const offlineProgress = writable<{ done: number; total: number }>({ done: 0, total: 0 });
export const offlineSavedAt = writable<number | null>(
  browser ? Number(localStorage.getItem(SAVED_KEY)) || null : null
);
export const offlineBytes = writable<number>(
  browser ? Number(localStorage.getItem(BYTES_KEY)) || 0 : 0
);

/** The worker, or null — never a promise that waits forever for one. */
async function activeWorker(): Promise<ServiceWorker | null> {
  if (!browser || !('serviceWorker' in navigator)) return null;
  const timeout = new Promise<null>((r) => setTimeout(() => r(null), 10_000));
  const reg = await Promise.race([navigator.serviceWorker.ready.catch(() => null), timeout]);
  return reg?.active ?? null;
}

/** How long a download may go without a word from the worker before it is given up. */
const SILENCE_MS = 60_000;

/**
 * Post one caching message and follow it to OFFLINE_DONE. Messages carry a
 * tag so two downloads in flight (the Settings bundle and a text) do not
 * read each other's progress. Rejects when any file failed, when the worker
 * falls silent, or when a deploy replaces the worker mid-download.
 */
function runCache(message: { type: string; urls?: string[] }, tag: string,
  onProgress: (p: { done: number; total: number }) => void): Promise<number> {
  return new Promise((resolve, reject) => {
    activeWorker().then((worker) => {
      if (!worker) { reject(new Error('no service worker')); return; }
      let timer: ReturnType<typeof setTimeout>;
      const finish = (err: Error | null, bytes = 0) => {
        clearTimeout(timer);
        navigator.serviceWorker.removeEventListener('message', onMessage);
        navigator.serviceWorker.removeEventListener('controllerchange', onChange);
        if (err) reject(err); else resolve(bytes);
      };
      const arm = () => { clearTimeout(timer); timer = setTimeout(() => finish(new Error('the download stalled')), SILENCE_MS); };
      const onChange = () => finish(new Error('the site updated during the download — save again'));
      const onMessage = (event: MessageEvent) => {
        const data = event.data as { type?: string; tag?: string; done?: number; total?: number; bytes?: number; failed?: number };
        if (data?.tag !== tag) return;
        arm();
        if (data.type === 'OFFLINE_PROGRESS') onProgress({ done: data.done ?? 0, total: data.total ?? 0 });
        else if (data.type === 'OFFLINE_DONE') {
          if (data.failed) finish(new Error(`${data.failed} file(s) could not be fetched`));
          else finish(null, data.bytes ?? 0);
        }
      };
      navigator.serviceWorker.addEventListener('message', onMessage);
      navigator.serviceWorker.addEventListener('controllerchange', onChange);
      arm();
      worker.postMessage({ ...message, tag });
    });
  });
}

/** Download the flight bundle. Resolves once the worker reports done. */
export async function downloadOffline(): Promise<void> {
  offlineStatus.set('working');
  offlineProgress.set({ done: 0, total: 0 });
  try {
    const bytes = await runCache({ type: 'CACHE_CORE' }, 'core', (p) => offlineProgress.set(p));
    const now = Date.now();
    localStorage.setItem(SAVED_KEY, String(now));
    localStorage.setItem(BYTES_KEY, String(bytes));
    offlineSavedAt.set(now);
    offlineBytes.set(bytes);
    offlineStatus.set('ready');
  } catch (err) {
    offlineStatus.set('error');
    throw err;
  }
}

// ── whole texts, one at a time ─────────────────────────────────────────────
// A whole text is its own data file and page, beside the core bundle (which
// saving a text also fetches, if it is not already held: the page needs the
// app shell). Which texts are saved is kept in localStorage, as above.

const TEXTS_KEY = 'anuvrtti-offline-texts';
export type SavedText = { at: number; bytes: number };

function readSavedTexts(): Record<string, SavedText> {
  if (!browser) return {};
  try { return JSON.parse(localStorage.getItem(TEXTS_KEY) ?? '{}'); } catch { return {}; }
}
export const savedTexts = writable<Record<string, SavedText>>(readSavedTexts());
/** Progress of a text being saved, by id; absent when none is. */
export const textProgress = writable<Record<string, { done: number; total: number }>>({});

const textUrls = (id: string) =>
  [`/data/texts/${id}.json`, '/data/texts/index.json', `/reader/text/${id}`, `/reader/text/${id}/__data.json`];

function writeSavedTexts(f: (m: Record<string, SavedText>) => void) {
  const m = readSavedTexts();
  f(m);
  try { localStorage.setItem(TEXTS_KEY, JSON.stringify(m)); } catch { /* the cache still holds it */ }
  savedTexts.set(m);
}

export async function saveText(id: string): Promise<void> {
  const setP = (p: { done: number; total: number } | null) =>
    textProgress.update((m) => { const n = { ...m }; if (p) n[id] = p; else delete n[id]; return n; });
  setP({ done: 0, total: 0 });
  try {
    const bytes = await runCache({ type: 'CACHE_URLS', urls: textUrls(id) }, `text:${id}`, setP);
    writeSavedTexts((m) => { m[id] = { at: Date.now(), bytes }; });
    // the core came along with it, so the Settings bundle is saved too
    if (!localStorage.getItem(SAVED_KEY)) {
      const now = Date.now();
      localStorage.setItem(SAVED_KEY, String(now));
      localStorage.setItem(BYTES_KEY, String(bytes));
      offlineSavedAt.set(now);
      offlineBytes.set(bytes);
      offlineStatus.set('ready');
    }
  } finally {
    setP(null);
  }
}

export function removeText(id: string): Promise<void> {
  return new Promise((resolve) => {
    activeWorker().then((worker) => {
      writeSavedTexts((m) => { delete m[id]; });
      if (!worker) { resolve(); return; }
      const tag = `text:${id}`;
      const onMessage = (event: MessageEvent) => {
        const data = event.data as { type?: string; tag?: string };
        if (data?.type === 'OFFLINE_UNCACHED' && data.tag === tag) {
          navigator.serviceWorker.removeEventListener('message', onMessage);
          resolve();
        }
      };
      navigator.serviceWorker.addEventListener('message', onMessage);
      // the record is already gone; never leave the caller waiting on a silent worker
      setTimeout(() => { navigator.serviceWorker.removeEventListener('message', onMessage); resolve(); }, 10_000);
      // the shared index stays: other saved texts list each other through it
      worker.postMessage({ type: 'UNCACHE_URLS', urls: textUrls(id).filter((u) => !u.endsWith('index.json')), tag });
    });
  });
}

/** Drop the flight bundle and reclaim the storage. */
export function removeOffline(): Promise<void> {
  return new Promise((resolve) => {
    activeWorker().then((worker) => {
      if (!worker) { resolve(); return; }
      const onMessage = (event: MessageEvent) => {
        if ((event.data as { type?: string })?.type === 'OFFLINE_CLEARED') {
          navigator.serviceWorker.removeEventListener('message', onMessage);
          localStorage.removeItem(SAVED_KEY);
          localStorage.removeItem(BYTES_KEY);
          localStorage.removeItem(TEXTS_KEY);
          savedTexts.set({});
          offlineSavedAt.set(null);
          offlineBytes.set(0);
          offlineStatus.set('idle');
          resolve();
        }
      };
      navigator.serviceWorker.addEventListener('message', onMessage);
      worker.postMessage({ type: 'CLEAR_OFFLINE' });
    });
  });
}
