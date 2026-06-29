/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

const sw = self as unknown as ServiceWorkerGlobalScope;
const CACHE = `anuvrtti-${version}`;

// All static assets to cache
const ASSETS = [
  ...build,   // SvelteKit app shell
  ...files,   // everything in /static
];

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
      if (key !== CACHE) await caches.delete(key);
    }
  }
  event.waitUntil(deleteOldCaches());
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
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) return cachedResponse;
      throw new Error('Network error and no cache available');
    }
  }

  event.respondWith(respond());
});
