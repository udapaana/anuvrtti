/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

const sw = self as unknown as ServiceWorkerGlobalScope;
const CACHE = `anuvrtti-${version}`;
const OFFLINE_CACHE = `anuvrtti-offline-${version}`;

// Precached on install: the app shell only. `files` is everything under
// /static — 8,000+ files once the per-sūtra commentary is counted — and
// eagerly downloading all of it the moment anyone opens the site is exactly
// the storage-wasting behaviour this file must NOT have. Everything else is
// cached lazily, as it's actually requested, by the fetch handler below.
const ASSETS = [...build];

/*
  The curated "read on a flight" bundle: what a reader needs offline, not
  the whole reference library. Kāśikā, Vāsu, Bālabodhini, the per-sūtra
  commentary tree — megabytes of deep-reference material most sessions never
  open — stay lazy, picked up opportunistically only for pages actually
  visited. This list is deliberately short.
*/
const CORE_PATTERNS = [
  /^\/data\/readings\.json$/,
  /^\/data\/usage\.json$/,
  /^\/data\/quiz-cells\.json$/,
  /^\/data\/vocabulary\.json$/,
  /^\/data\/jargon\.json$/,
  /^\/data\/dhatu-map\.json$/,
  /^\/data\/tin-forms\.json$/,
  /^\/data\/stats\.json$/,
  /^\/wasm\//,
  /^\/manifest\.json$/,
  /^\/icon-/,
];
const CORE_ASSETS = [...build, ...files.filter((f) => CORE_PATTERNS.some((p) => p.test(f)))];

sw.addEventListener('install', (event) => {
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }
  event.waitUntil(addFilesToCache());
});

sw.addEventListener('activate', (event) => {
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      // Both this version's caches are kept; only a PREVIOUS version's
      // runtime cache is dropped. The offline bundle, once a reader has
      // asked for it, survives a deploy — it just goes stale until the next
      // download, same as any other cached copy.
      if (key !== CACHE && !key.startsWith('anuvrtti-offline-')) {
        await caches.delete(key);
      }
    }
  }
  event.waitUntil(deleteOldCaches());
});

/*
  The offline button, from the settings page. Two messages:

    CACHE_CORE    fetch + store CORE_ASSETS, reporting progress as it goes.
    CLEAR_OFFLINE drop the whole bundle — the "stop wasting my storage,
                  I've landed" control.

  Kept in a cache separate from the general runtime cache so "remove offline
  copy" reclaims exactly what it downloaded and nothing the lazy path had
  already cached for other reasons.
*/
sw.addEventListener('message', (event) => {
  const data = event.data as { type?: string } | undefined;
  const client = event.source as Client | null;

  if (data?.type === 'CACHE_CORE') {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(OFFLINE_CACHE);
        let done = 0;
        let bytes = 0;
        for (const url of CORE_ASSETS) {
          try {
            const res = await fetch(url, { cache: 'reload' });
            if (res.ok) {
              bytes += Number(res.headers.get('content-length') ?? 0);
              await cache.put(url, res.clone());
            }
          } catch {
            // One missing asset shouldn't sink the whole bundle; the reader
            // still gets everything else, and can retry.
          }
          done++;
          client?.postMessage({ type: 'OFFLINE_PROGRESS', done, total: CORE_ASSETS.length, bytes });
        }
        client?.postMessage({ type: 'OFFLINE_DONE', done, total: CORE_ASSETS.length, bytes });
      })()
    );
  } else if (data?.type === 'CLEAR_OFFLINE') {
    event.waitUntil(
      caches.delete(OFFLINE_CACHE).then(() => client?.postMessage({ type: 'OFFLINE_CLEARED' }))
    );
  }
});

sw.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  async function respond() {
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);

    // Content data (/data/*.json) is authored and rebuilt frequently, so it must
    // NOT be served cache-first — that pins stale counts/content until the SW
    // version bumps. Use network-first: fetch fresh, fall back to cache offline.
    const isData = url.pathname.startsWith('/data/');

    // Cache-first for immutable ASSETS (app shell, fonts, icons) — but not data.
    if (!isData && ASSETS.includes(url.pathname)) {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) return cachedResponse;
    }

    try {
      const response = await fetch(event.request);
      // Cache successful same-origin responses (refreshes the data copy too, so
      // it's available offline next time).
      if (response.status === 200 && url.origin === self.location.origin) {
        cache.put(event.request, response.clone());
      }
      return response;
    } catch {
      // Offline: the flight bundle is the more likely hit for the paths it
      // covers (it was fetched deliberately, not just in passing), so check
      // it before the general lazy cache.
      const offlineCache = await caches.open(OFFLINE_CACHE);
      const fromOffline = await offlineCache.match(event.request);
      if (fromOffline) return fromOffline;
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) return cachedResponse;
      throw new Error('Network error and no cache available');
    }
  }

  event.respondWith(respond());
});
