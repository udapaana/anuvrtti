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

async function activeWorker(): Promise<ServiceWorker | null> {
  if (!browser || !('serviceWorker' in navigator)) return null;
  const reg = await navigator.serviceWorker.ready.catch(() => null);
  return reg?.active ?? null;
}

/** Download the flight bundle. Resolves once the worker reports done. */
export function downloadOffline(): Promise<void> {
  return new Promise((resolve, reject) => {
    activeWorker().then((worker) => {
      if (!worker) { reject(new Error('no service worker')); return; }
      offlineStatus.set('working');
      offlineProgress.set({ done: 0, total: 0 });

      const onMessage = (event: MessageEvent) => {
        const data = event.data as { type?: string; done?: number; total?: number; bytes?: number };
        if (data?.type === 'OFFLINE_PROGRESS') {
          offlineProgress.set({ done: data.done ?? 0, total: data.total ?? 0 });
        } else if (data?.type === 'OFFLINE_DONE') {
          navigator.serviceWorker.removeEventListener('message', onMessage);
          const now = Date.now();
          const bytes = data.bytes ?? 0;
          localStorage.setItem(SAVED_KEY, String(now));
          localStorage.setItem(BYTES_KEY, String(bytes));
          offlineSavedAt.set(now);
          offlineBytes.set(bytes);
          offlineStatus.set('ready');
          resolve();
        }
      };
      navigator.serviceWorker.addEventListener('message', onMessage);
      worker.postMessage({ type: 'CACHE_CORE' });
    });
  }).catch((err) => {
    offlineStatus.set('error');
    throw err;
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
