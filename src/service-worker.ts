/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

const sw = self as unknown as ServiceWorkerGlobalScope;
const CACHE = `anuvrtti-${version}`;
// Not versioned: what a reader saved must survive the next deploy, and this
// site deploys on every push. (It was versioned once; activate merges those.)
const OFFLINE_CACHE = 'anuvrtti-offline';
const isOfflineCache = (k: string) => k === OFFLINE_CACHE || k.startsWith('anuvrtti-offline-');

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
    // Without this, a new deploy sits "waiting" until every open tab on the
    // old worker is closed — not reloaded, closed. A reload re-requests the
    // same old-controlled page, so a reader can refresh all day and still
    // run yesterday's JS. Activate the new worker as soon as it's installed;
    // the next load picks up the new code instead of the one that shipped
    // whatever this deploy just fixed.
    await sw.skipWaiting();
  }
  event.waitUntil(addFilesToCache());
});

sw.addEventListener('activate', (event) => {
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      // Only a PREVIOUS version's runtime cache is dropped. The offline copy
      // a reader asked for survives a deploy: stale until they refresh it,
      // but whole — the saved pages and the app code they were served with.
      if (key !== CACHE && !isOfflineCache(key)) await caches.delete(key);
      // a versioned offline cache from before: fold it into the one cache
      else if (key !== OFFLINE_CACHE && isOfflineCache(key)) {
        const from = await caches.open(key);
        const to = await caches.open(OFFLINE_CACHE);
        for (const req of await from.keys()) {
          if (await to.match(req)) continue;
          const res = await from.match(req);
          if (res) await to.put(req, res);
        }
        await caches.delete(key);
      }
    }
    // Take control of tabs already open, the other half of skipWaiting above
    // — without it an already-open tab keeps talking to the OLD worker
    // (which is still alive until its last client drops) even after this
    // one has activated.
    await sw.clients.claim();
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
/*
  The offline controls. Three messages:

    CACHE_CORE    fetch + store CORE_ASSETS and the reader's page, reporting
                  progress as it goes (Settings, and "save offline" on a
                  graded-reader chapter: the chapters share one data file).
    CACHE_URLS    the same, plus a whole text's own files ({urls, tag}); what
                  the core bundle already holds is not fetched twice.
    UNCACHE_URLS  drop one text's own files ({urls, tag}); the core stays.
    CLEAR_OFFLINE drop the whole bundle — the "stop wasting my storage,
                  I've landed" control.

  Kept in a cache separate from the general runtime cache so "remove offline
  copy" reclaims exactly what it downloaded and nothing the lazy path had
  already cached for other reasons.

  A page needs its HTML and, for a navigation inside the app, its
  `__data.json` (the root layout has a server load); both are stored under
  the bare path and matched ignoring the query, as are the data files, which
  the app requests with a ?v= build stamp.
*/
const READER_PAGES = ['/reader', '/reader/__data.json'];

const CORE_MARK = '/__offline-core-version';
const isPage = (path: string) => path !== CORE_MARK && !path.startsWith('/_app/') && !path.startsWith('/data/') && !path.startsWith('/wasm/') && !/\.[a-z0-9]+$/i.test(path);

/**
 * Fetch each URL and store it — only on success, so a failed refresh never
 * costs the copy already held. Reports progress, then OFFLINE_DONE with the
 * number that failed; the page decides whether that is a failure.
 */
async function cacheAll(urls: string[], client: Client | null, tag: string | undefined, skipHeld: boolean) {
  const cache = await caches.open(OFFLINE_CACHE);
  // the pages saved before are refreshed too, so that each one's HTML points
  // at this build's code — and the old code can then go
  const pages = (await cache.keys()).map((r) => new URL(r.url).pathname).filter((u) => isPage(u) || u.endsWith('/__data.json'));
  const all = [...new Set([...urls, ...pages])];
  // the core's data files keep their paths across builds, so "held" means
  // current only if the core was saved by this build
  const marker = await cache.match(CORE_MARK);
  const coreCurrent = skipHeld && (marker ? (await marker.text()) === version : false);
  let done = 0, bytes = 0, failed = 0;
  for (const url of all) {
    try {
      // the shared core, already held, need not be fetched again for each text
      if (coreCurrent && CORE_ASSETS.includes(url) && (await cache.match(url, { ignoreSearch: true }))) {
        done++;
        continue;
      }
      const res = await fetch(url, { cache: 'reload' });
      if (res.ok) {
        bytes += Number(res.headers.get('content-length') ?? 0);
        await cache.put(url, res.clone());
      } else failed++;
    } catch {
      failed++;
    }
    done++;
    client?.postMessage({ type: 'OFFLINE_PROGRESS', tag, done, total: all.length, bytes });
  }
  // app code from an older build, now referenced by no saved page
  if (!failed) {
    const current = new Set(build);
    for (const req of await cache.keys()) {
      const path = new URL(req.url).pathname;
      if (path.startsWith('/_app/') && !current.has(path)) await cache.delete(req);
    }
  }
  if (!failed && CORE_ASSETS.every((u) => all.includes(u))) await cache.put(CORE_MARK, new Response(version));
  client?.postMessage({ type: 'OFFLINE_DONE', tag, done, total: all.length, bytes, failed });
}

sw.addEventListener('message', (event) => {
  const data = event.data as { type?: string; urls?: string[]; tag?: string } | undefined;
  const client = event.source as Client | null;

  if (data?.type === 'CACHE_CORE') {
    event.waitUntil(cacheAll([...CORE_ASSETS, ...READER_PAGES], client, data.tag, false));
  } else if (data?.type === 'CACHE_URLS') {
    const own = data.urls ?? [];
    // a text's own files are always fetched afresh; the shared core only if missing
    event.waitUntil(cacheAll([...own, ...CORE_ASSETS, ...READER_PAGES], client, data.tag, true));
  } else if (data?.type === 'UNCACHE_URLS') {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(OFFLINE_CACHE);
        for (const u of data.urls ?? []) await cache.delete(u, { ignoreSearch: true });
        client?.postMessage({ type: 'OFFLINE_UNCACHED', tag: data.tag });
      })()
    );
  } else if (data?.type === 'CLEAR_OFFLINE') {
    event.waitUntil(
      (async () => {
        for (const k of await caches.keys()) if (isOfflineCache(k)) await caches.delete(k);
        client?.postMessage({ type: 'OFFLINE_CLEARED' });
      })()
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
      const fromOffline =
        (await offlineCache.match(event.request)) ??
        (await offlineCache.match(url.pathname, { ignoreSearch: true }));
      if (fromOffline) return fromOffline;
      const cachedResponse =
        (await cache.match(event.request)) ?? (await cache.match(event.request, { ignoreSearch: true }));
      if (cachedResponse) return cachedResponse;
      throw new Error('Network error and no cache available');
    }
  }

  event.respondWith(respond());
});
