#!/usr/bin/env bun
/**
 * check-complete.ts — validate every word against the schema.
 *
 * docs/WORD-TYPES.md enumerates what each kind of word must carry.
 * src/lib/usage/schema.ts is that document as data. This walks the corpus and
 * asks, per word: what type is it, and which of that type's authored
 * dimensions are missing?
 *
 * Nothing here hardcodes a rule. Adding a dimension to the schema makes it
 * checked; that is the point — the previous version listed वचन/पुरुष/पद by hand
 * and so could never notice that a क्त participle was missing its विभक्ति, or
 * that a tag was not a legal value of anything.
 *
 * Reports rather than fails. The backlog is deep and blocking on it would make
 * the command useless; `bun run check` prints the headline so it cannot grow
 * unnoticed.
 *
 * Usage:
 *   bun scripts/check-complete.ts                  summary by type
 *   bun scripts/check-complete.ts --reading ex209  one reading, word by word
 *   bun scripts/check-complete.ts --worst 20       the readings to fix first
 *   bun scripts/check-complete.ts --untyped        words with no type tag
 *   bun scripts/check-complete.ts --unknown        tags that are not in the schema
 */
import * as fs from 'fs';
import * as path from 'path';
import {
  WORD_TYPES, typeOf, krtDeclines, KNOWN_VALUES, type WordType
} from '../src/lib/usage/schema';

const CORPUS = path.join(process.cwd(), 'static/data/readings.json');

type Word = { form: string; lemma?: string; notes?: any[]; derived?: Record<string, string> };
type Finding = { reading: string; form: string; type: string; missing: string[] };

/**
 * What this word still owes, per the schema.
 *
 * `optional` dimensions are never reported — a word with no कारक role is not
 * incomplete, it simply has none. `derived` dimensions count as present when
 * the build filled them in, since the reader sees them either way; what is
 * left is exactly what an author can act on.
 */
function missingFor(type: WordType, w: Word, terms: Set<string>): string[] {
  const miss: string[] = [];
  const derived = w.derived ?? {};

  for (const d of type.dimensions) {
    if (d.source === 'optional') continue;

    // A कृदन्त owes विभक्ति only if its suffix declines. क्त्वा and तुमुन् are
    // अव्यय by 1.1.40 and take nothing further.
    if (type.id === 'kridanta' && (d.name === 'विभक्ति' || d.name === 'वचन')
        && !krtDeclines(terms)) continue;

    if (d.name === 'lemma') {
      if (!w.lemma) miss.push('lemma');
      continue;
    }
    const authored = d.values.some((v) => terms.has(v));
    if (authored || d.name in derived) continue;
    miss.push(d.name);
  }
  return miss;
}

function main() {
  const corpus = JSON.parse(fs.readFileSync(CORPUS, 'utf-8'));
  const args = process.argv.slice(2);
  const one = args.includes('--reading') ? args[args.indexOf('--reading') + 1] : null;
  const worstN = args.includes('--worst') ? Number(args[args.indexOf('--worst') + 1] || 20) : 0;
  const untypedOnly = args.includes('--untyped');
  const unknownOnly = args.includes('--unknown');

  const findings: Finding[] = [];
  const byType: Record<string, { total: number; complete: number }> = {};
  const byReading = new Map<string, number>();
  const untyped: Array<{ reading: string; form: string; tags: string[] }> = [];
  const unknownTags = new Map<string, number>();

  for (const r of corpus.sequence ?? []) {
    if (one && r.id !== one) continue;
    for (const w of r.words ?? []) {
      const terms = new Set<string>((w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term));
      const wt = typeOf(terms);
      const type = wt?.dev ?? 'untyped';
      byType[type] ??= { total: 0, complete: 0 };
      byType[type].total++;

      for (const t of terms) if (!KNOWN_VALUES.has(t)) unknownTags.set(t, (unknownTags.get(t) ?? 0) + 1);

      if (!wt) {
        untyped.push({ reading: r.id, form: w.form, tags: [...terms] });
        byReading.set(r.id, (byReading.get(r.id) ?? 0) + 1);
        continue;
      }
      const missing = missingFor(wt, w, terms);
      if (!missing.length) { byType[type].complete++; continue; }
      findings.push({ reading: r.id, form: w.form, type, missing });
      byReading.set(r.id, (byReading.get(r.id) ?? 0) + 1);
    }
  }

  // ── one reading, word by word ──────────────────────────────────────────
  if (one) {
    const rows = findings.filter((f) => f.reading === one);
    console.log(`\n${one} — ${rows.length} word(s) underspecified\n`);
    for (const f of rows) {
      console.log(`  ${f.form.padEnd(16)} ${f.type.padEnd(8)} needs ${f.missing.join(', ')}`);
    }
    const u = untyped.filter((x) => x.reading === one);
    if (u.length) {
      console.log(`\n  no type tag (${u.length}):`);
      for (const x of u) console.log(`    ${x.form.padEnd(16)} has [${x.tags.join(', ')}]`);
    }
    if (!rows.length && !u.length) console.log('  complete.');
    console.log();
    return;
  }

  // ── the untyped list ───────────────────────────────────────────────────
  if (untypedOnly) {
    console.log(`\n${untyped.length} word(s) with no type tag\n`);
    for (const x of untyped.slice(0, 80)) {
      console.log(`  ${x.reading.padEnd(8)} ${x.form.padEnd(16)} [${x.tags.join(', ') || '—'}]`);
    }
    if (untyped.length > 80) console.log(`  … and ${untyped.length - 80} more`);
    console.log();
    return;
  }

  // ── tags the schema does not know ──────────────────────────────────────
  if (unknownOnly) {
    const ranked = [...unknownTags.entries()].sort((a, b) => b[1] - a[1]);
    console.log(`\n${ranked.length} tag(s) not in the schema, ${
      ranked.reduce((n, [, c]) => n + c, 0)} use(s)\n`);
    console.log('  Most are commentary — a root name, a sandhi process — which is fine.');
    console.log('  A grammatical feature here means either a typo or a gap in the schema.\n');
    for (const [t, n] of ranked.slice(0, 60)) console.log(`  ${String(n).padStart(4)}  ${t}`);
    if (ranked.length > 60) console.log(`  … and ${ranked.length - 60} more`);
    console.log();
    return;
  }

  // ── the work queue ─────────────────────────────────────────────────────
  if (worstN) {
    const ranked = [...byReading.entries()].sort((a, b) => b[1] - a[1]).slice(0, worstN);
    console.log(`\nreadings with the most underspecified words\n`);
    for (const [id, n] of ranked) console.log(`  ${String(n).padStart(3)}  ${id}`);
    console.log(`\n  bun scripts/check-complete.ts --reading <id>   to see one\n`);
    return;
  }

  // ── the summary ────────────────────────────────────────────────────────
  console.log('\n═══ grammatical completeness ═══\n');
  const order = [...WORD_TYPES.map((t) => t.dev), 'untyped'];
  for (const t of order) {
    const s = byType[t];
    if (!s) continue;
    if (t === 'untyped') {
      console.log(`  ${t.padEnd(8)} ${String(s.total).padStart(5)}   no type tag — cannot be placed in any paradigm`);
      continue;
    }
    const pct = s.total ? Math.round((s.complete / s.total) * 100) : 0;
    const bar = '█'.repeat(Math.round(pct / 5)).padEnd(20, '·');
    console.log(`  ${t.padEnd(8)} ${String(s.total).padStart(5)}   ${bar} ${pct}% complete`);
  }

  const need: Record<string, number> = {};
  for (const f of findings) for (const m of f.missing) need[m] = (need[m] ?? 0) + 1;
  console.log('\n  most-needed tag:');
  for (const [k, v] of Object.entries(need).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${String(v).padStart(5)}  ${k}`);
  }
  console.log(
    `\n  --worst 20      the readings to fix first` +
    `\n  --reading <id>  one reading, word by word` +
    `\n  --untyped       words carrying no type tag` +
    `\n  --unknown       tags that are not values in the schema\n`
  );
}

main();
