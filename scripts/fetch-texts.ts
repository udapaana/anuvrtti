#!/usr/bin/env bun
/**
 * fetch-texts.ts — the original texts that attested examples come from.
 *
 * As the reader climbs, a form is best met where an author actually used it,
 * in context, rather than in a sentence we wrote to show it. Finding those
 * places needs the texts. They are pinned like the grammar engine: each one by
 * URL and sha256 in data/texts.json, fetched into data/texts/ (git-ignored),
 * so a search run today and one run next year read the same words.
 *
 *   bun scripts/fetch-texts.ts           # fetch what is missing, verify all
 */
import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';

const ROOT = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/texts.json'), 'utf-8'));
const DIR = path.join(ROOT, 'data/texts');
fs.mkdirSync(DIR, { recursive: true });

let bad = 0;
for (const t of manifest.texts) {
  const file = path.join(DIR, t.slug + '.txt');
  if (!fs.existsSync(file)) {
    const res = await fetch(t.url);
    if (!res.ok) { console.log(`  ✗ ${t.slug}: HTTP ${res.status}`); bad++; continue; }
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  const sha = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  if (sha !== t.sha256) { console.log(`  ✗ ${t.slug}: sha256 differs from the pin — the source changed`); bad++; continue; }
  console.log(`  ✓ ${t.title}  (${t.en})`);
}
process.exit(bad ? 1 : 0);
