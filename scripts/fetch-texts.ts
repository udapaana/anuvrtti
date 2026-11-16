#!/usr/bin/env bun
/**
 * fetch-texts.ts — the source texts, verified.
 *
 * Every source is committed under data/sources/ and pinned by sha256 in
 * data/texts.json: Ambuda's GRETIL fork (TEI) at a fixed commit, SARIT's
 * Kumbhakonam Mahābhārata, GRETIL's own plain text kept as an archive copy,
 * and the OCR of the condensed books. They are vendored, not fetched, because
 * GRETIL is closing: a search or a build run next year must read the same
 * words, from a copy we hold.
 *
 *   bun scripts/fetch-texts.ts            # verify every committed source
 *   bun scripts/fetch-texts.ts --refresh  # re-download from each `url` and verify
 *
 * A refresh that changes a file fails the sha256 check: moving a pin is a
 * deliberate edit of data/texts.json, committed with the files it moves.
 */
import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';

const ROOT = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/texts.json'), 'utf-8'));
const refresh = process.argv.includes('--refresh');

type Entry = { file: string; url: string; sha256: string; label: string };
const entries: Entry[] = [];
for (const t of manifest.texts) {
  entries.push({ file: t.file, url: t.url, sha256: t.sha256, label: `${t.title}  (${t.en})` });
  if (t.archive) entries.push({ ...t.archive, label: `  archive: ${t.slug}` });
}
for (const o of manifest.ocr ?? []) entries.push({ file: o.file, url: o.url, sha256: o.sha256, label: `ocr: ${o.id}` });

let bad = 0;
for (const e of entries) {
  const file = path.join(ROOT, e.file);
  if (refresh || !fs.existsSync(file)) {
    const res = await fetch(e.url);
    if (!res.ok) { console.log(`  ✗ ${e.file}: HTTP ${res.status}`); bad++; continue; }
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  const sha = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  if (sha !== e.sha256) { console.log(`  ✗ ${e.file}: sha256 differs from the pin`); bad++; continue; }
  console.log(`  ✓ ${e.label}`);
}
process.exit(bad ? 1 : 0);
