#!/usr/bin/env bun
/**
 * apply-kale-corrections.ts — Kāle's text, corrected against the page scans.
 *
 *   bun scripts/apply-kale-corrections.ts   (after build:dukrnkarane)
 *
 * The grammar door's text (static/data/dukrnkarane.json) is vendored from the
 * separate dukrnkarane repository, where it was entered by OCR; much of its
 * Sanskrit is garbled. Each file in content/kale/corrections/ is one section
 * re-read against Kāle's printed page:
 *
 *   ---
 *   key: rule:120          (or appendix:979 for the prosody)
 *   title: "@deva[अहन्] (Day) …"
 *   pages: [075.png, 076.png]
 *   ---
 *   <the whole corrected body, in the payload's own markup>
 *
 * Applied over the payload here, so a correction survives a re-vendoring of
 * the payload (and can be sent upstream as it stands). The section's word
 * list is rebuilt from its corrected Devanagari, since the old one indexed
 * the garbled forms. Idempotent: run twice, the payload is the same.
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

const ROOT = process.cwd();
const DIR = path.join(ROOT, 'content/kale/corrections');
const PAYLOAD = path.join(ROOT, 'static/data/dukrnkarane.json');

if (!fs.existsSync(DIR)) process.exit(0);
const data = JSON.parse(fs.readFileSync(PAYLOAD, 'utf-8'));
const byKey = new Map<string, any>(data.rules.map((r: any) => [`${r.kind}:${r.n}`, r]));

const wordsOf = (body: string) => {
  const out = new Set<string>();
  for (const m of body.matchAll(/@deva\[([^\]]+)\]/g))
    for (const w of m[1].split(/[\s,;:.।॥()\-—–'"‘’“”!?]+/)) if (/[ऀ-ॿ]{2,}/.test(w)) out.add(w);
  return [...out];
};

/*
  The chapters, as content/kale/chapters.yaml lists them: the payload's own
  list split Gender and the Avyayas into five fragments. Each section takes
  its chapter's title, and a chapter's count is recounted.
*/
const CHAPTERS = path.join(ROOT, 'content/kale/chapters.yaml');
if (fs.existsSync(CHAPTERS)) {
  const list = (parseYaml(fs.readFileSync(CHAPTERS, 'utf-8')) ?? []) as { title: string; first: number; last: number }[];
  data.chapters = list.map((c) => {
    const inside = data.rules.filter((r: any) => r.n >= c.first && r.n <= c.last);
    for (const r of inside) r.chapter = c.title;
    return { title: c.title, first: c.first, last: c.last, count: inside.length };
  });
  const lost = data.rules.filter((r: any) => !list.some((c) => r.n >= c.first && r.n <= c.last));
  if (lost.length) { console.error(`  kale chapters: no chapter holds § ${lost.map((r: any) => r.n).join(', ')}`); process.exit(1); }
}

let applied = 0;
const unknown: string[] = [];
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.md')).sort()) {
  const raw = fs.readFileSync(path.join(DIR, f), 'utf-8');
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw);
  if (!m) { unknown.push(`${f} (no front matter)`); continue; }
  const fm = parseYaml(m[1]) ?? {};
  const r = byKey.get(String(fm.key));
  if (!r) { unknown.push(`${f} (${fm.key})`); continue; }
  if (fm.title) r.title = String(fm.title);
  r.body = m[2].replace(/\s+$/, '');
  if (Array.isArray(fm.pages) && fm.pages.length) r.images = fm.pages.map(String);
  r.words = wordsOf(r.body);
  applied++;
}
fs.writeFileSync(PAYLOAD, JSON.stringify(data));
console.log(`  kale corrections: ${applied} section(s) applied from content/kale/corrections`);
if (unknown.length) { console.error(`  kale corrections: no such section for ${unknown.join(', ')}`); process.exit(1); }
