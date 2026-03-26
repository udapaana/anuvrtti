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

    // Cache-first for all ASSETS
    if (ASSETS.includes(url.pathname)) {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) return cachedResponse;
    }

    try {
      const response = await fetch(event.request);
      // Cache successful responses for same-origin requests
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
