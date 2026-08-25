import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      /*
        WHICH REQUESTS REACH THE FUNCTION.

        `_routes.json` decides what Cloudflare hands to the Pages Function and
        what it serves straight from the CDN. Left to itself the adapter writes
        one exclude rule per static file — and `static/data/` alone holds 4097
        of them, the per-sūtra commentary. Cloudflare caps the file at 100
        rules, so it dropped 4164 of them, and the build said so on every
        deploy:

          Dropping 4164 exclude rules — this will cause unnecessary function
          invocations.

        "Unnecessary" undersells it. With those rules gone, every asset a page
        pulls — each JS chunk, the fonts, readings.json — went through the
        Function instead of the CDN. One visit to /reader is 57 requests, so it
        billed 57 invocations rather than 1, and the account burned its 100,000
        daily Workers requests at roughly fifty-seven times the honest rate.

        Globbing by directory says the same thing in twelve rules instead of
        four thousand. `*` spans slashes here — it is how the adapter's own
        `/_app/immutable/*` covers nested chunks — so each line below stands in
        for a whole tree. Nothing under these prefixes is a route (checked:
        src/routes has no data/, content/, schemas/ or wasm/), so excluding
        them cannot shadow a page.

        Add a top-level directory to `static/` and it needs a line here, or it
        will be served by the Function at Function prices.
      */
      routes: {
        include: ['/*'],
        exclude: [
          // hashed build output and the version probe
          '<build>',
          // the static trees
          '/content/*',
          '/data/*',
          '/schemas/*',
          '/wasm/*',
          // loose files at the root of static/
          '/404.html',
          '/CNAME',
          '/manifest.json',
          '/icon.svg',
          '/icon-192.png',
          '/icon-512.png',
          '/wasm-test.html'
        ]
      }
    })
  }
};

export default config;
