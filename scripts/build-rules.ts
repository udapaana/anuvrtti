#!/usr/bin/env npx tsx
/**
 * Build sūtra explanation payload from vidvat's per-pāda sūtra YAML.
 *
 * vidvat's `rule` field is the clean one-line mathematician-to-student rewrite
 * (e.g. 1.1.10 → "A sound made through the nose along with the mouth is
 * **अनुनासिक**."). All 3983 sūtras have one. We use THESE as the sūtra
 * explanation in /ref, replacing the layered simple/standard/advanced commentary.
 *
 *   → static/data/rules.json   { "1.1.1": "आ, ऐ, औ are the **वृद्धि** vowels.", ... }
 *
 * Source: vidvat repo (sibling). Override with VIDVAT_DIR env if elsewhere.
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

const VIDVAT = process.env.VIDVAT_DIR ?? '/Users/skmnktl/vidvat';
const SRC = path.join(VIDVAT, 'data/sutras');
const OUTPUT = path.join(process.cwd(), 'static/data/rules.json');

function main() {
  if (!fs.existsSync(SRC)) {
    console.error(`vidvat sūtra data not found at ${SRC} (set VIDVAT_DIR)`);
    process.exit(1);
  }
  const rules: Record<string, string> = {};
  for (const f of fs.readdirSync(SRC).filter((f) => f.endsWith('.yaml')).sort()) {
    const doc = parseYaml(fs.readFileSync(path.join(SRC, f), 'utf-8')) as any;
    for (const s of doc?.sutras ?? []) {
      if (s.ref && s.rule?.trim()) rules[s.ref] = s.rule.trim();
    }
  }
  fs.writeFileSync(OUTPUT, JSON.stringify(rules, null, 0));
  console.log(`Wrote ${Object.keys(rules).length} sūtra rules → ${path.relative(process.cwd(), OUTPUT)}`);
}

main();
