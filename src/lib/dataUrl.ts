import { version } from '$app/environment';

/**
 * The URL for a generated JSON payload under /data, stamped with the build.
 *
 * These files are big — readings.json alone is 5.1MB, and the reader pulls it
 * together with usage.json on every visit. Every call site used to pass
 * `cache: 'no-store'`, which tells the browser it may never reuse the response:
 * correct in the sense that a bare `/data/readings.json` has no version in it
 * and could otherwise go stale after a deploy, but it meant re-downloading six
 * megabytes on every single page load, forever.
 *
 * Stamping the build version into the query gives each deploy its own URL, so
 * the file can be cached normally and a new deploy misses the old entry
 * instead of serving it. Fresh after a release, free on the way back.
 */
export function dataUrl(path: string): string {
  return `${path}?v=${encodeURIComponent(version)}`;
}
