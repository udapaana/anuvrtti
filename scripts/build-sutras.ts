#!/usr/bin/env bun
/**
 * build-sutras.ts — the Aṣṭādhyāyī, reduced to what the app actually renders.
 *
 * src/lib/data/index.ts used to reach the sūtras with
 *
 *   import.meta.glob('./sutras/*.yaml', { query: '?raw', eager: true })
 *
 * which inlines all 32 YAML files — 6.7 MB — into the JS bundle. Vite has to
 * put that somewhere, and it put it in one chunk that /ref, /ref/[id] and
 * /ref/jargon all pull: 6.99 MB of JavaScript before either page can draw a
 * line of Sanskrit. /ref/1.1.1 transferred 25 MB and took 2.7s to first paint
 * on localhost, where there is no network at all.
 *
 * Most of that weight is never displayed from this path. Each YAML record
 * carries `kashika` — the full Kāśikā commentary, the single largest field —
 * plus `vartika` and `meaning`, and parseVidvatSutra keeps NONE of them: the
 * commentary the sūtra page shows comes from static/data/commentary/*.toml,
 * fetched per sūtra. The bundle was carrying a second copy of a commentary
 * corpus so it could throw it away at parse time.
 *
 * So: parse at build, keep the parsed shape and the one-line `rule` map, and
 * write JSON the browser fetches like every other payload here.
 *
 *   → static/data/sutras.json  { sutras: Sutra[], rules: Record<id, string> }
 *
 * `--check` recomputes and compares rather than writing, so a stale committed
 * file fails `bun run check` instead of shipping a corpus that has drifted
 * from src/lib/data/sutras/.
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';
import { parseVidvatSutra, type VidvatSutra } from '../src/lib/data/parser-vidvat';

const SRC = path.join(process.cwd(), 'src/lib/data/sutras');
const OUT = path.join(process.cwd(), 'static/data/sutras.json');
const CHECK = process.argv.includes('--check');

const sutras = [];
const rules: Record<string, string> = {};

for (const file of fs.readdirSync(SRC).filter((f) => f.endsWith('.yaml')).sort()) {
  const doc = parseYaml(fs.readFileSync(path.join(SRC, file), 'utf-8')) as {
    sutras?: VidvatSutra[];
  };
  for (const r of doc?.sutras ?? []) {
    sutras.push(parseVidvatSutra(r));
    // `rule` is the one-line explanation the reader and the palette show. It is
    // the only free-text field on the record that survives the parse.
    if (r.rule?.trim()) rules[r.ref] = r.rule.trim();
  }
}

// Sorted here rather than at load: the browser should not re-sort 3983 records
// on every visit to establish an order that never changes.
sutras.sort((x, y) => x.numericId.localeCompare(y.numericId));

const json = JSON.stringify({ sutras, rules });

if (CHECK) {
  const disk = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf-8') : '';
  if (disk !== json) {
    console.error(
      `static/data/sutras.json is stale (${sutras.length} sūtras in ${path.relative(process.cwd(), SRC)}).\n` +
        `Run bun scripts/build-sutras.ts (npm run build does it for you).`
    );
    process.exit(1);
  }
  console.log(`sūtra payload: ${sutras.length} sūtras, ${Object.keys(rules).length} rules`);
} else {
  fs.writeFileSync(OUT, json);
  const mb = (Buffer.byteLength(json) / 1e6).toFixed(2);
  const srcMb = (
    fs.readdirSync(SRC).reduce((a, f) => a + fs.statSync(path.join(SRC, f)).size, 0) / 1e6
  ).toFixed(2);
  console.log(
    `Wrote ${sutras.length} sūtras + ${Object.keys(rules).length} rules → ` +
      `${path.relative(process.cwd(), OUT)} (${mb} MB, from ${srcMb} MB of YAML)`
  );
}
