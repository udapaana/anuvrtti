#!/usr/bin/env bun
/**
 * readings-ledger.ts — what's taught, what's touched, what's left.
 *
 * Replaces the hand-counted "coverage 168 → 174 unique sūtras" line that had
 * been going into commit messages. That number couldn't distinguish progress
 * from drift: it had no denominator, and it weighted every cite equally, so a
 * structural rule met 46 times and a one-off idiom met once both counted as
 * "1 covered".
 *
 * This reports the two classes separately, because they are learned
 * differently (see content/readings/_rules.yaml):
 *
 *   load-bearing — learned by RECURRENCE. Reported as encounters-vs-target.
 *   leaf         — learned by ACQUAINTANCE. Touched once = done.
 *
 * An encounter is one DISTINCT READING citing the rule, not one citation:
 * three notes citing 2.3.2 inside a single sentence is one meeting with the
 * rule, not three. Counting raw citations would inflate exactly the readings
 * that gloss most heavily.
 *
 * Usage:
 *   npx tsx scripts/readings-ledger.ts            # summary
 *   npx tsx scripts/readings-ledger.ts --full     # + every rule listed
 *   npx tsx scripts/readings-ledger.ts --json     # machine-readable
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

const READINGS_DIR = path.join(process.cwd(), 'content/readings');
const RULES = path.join(READINGS_DIR, '_rules.yaml');
const CORPUS = path.join(process.cwd(), 'static/data/readings.json');

type RuleDecl = { cite: string; gloss?: string; encounters_target?: number };

interface Reading {
  id: string;
  chapter: string;
  kind?: string;
  segment?: number;
  length?: 'short' | 'passage' | 'long';
  words?: { notes?: { cite?: string }[] }[];
}

function loadRules() {
  if (!fs.existsSync(RULES)) {
    console.error(`missing ${path.relative(process.cwd(), RULES)} — the ledger needs a target set.`);
    process.exit(1);
  }
  const doc = parseYaml(fs.readFileSync(RULES, 'utf-8')) as {
    defaults?: { encounters_target?: number };
    load_bearing?: RuleDecl[];
    leaf?: RuleDecl[];
  };
  return {
    target: doc.defaults?.encounters_target ?? 5,
    loadBearing: doc.load_bearing ?? [],
    leaf: doc.leaf ?? []
  };
}

function loadCorpus(): Reading[] {
  if (!fs.existsSync(CORPUS)) {
    console.error(`missing ${path.relative(process.cwd(), CORPUS)} — run build-readings.ts first.`);
    process.exit(1);
  }
  return (JSON.parse(fs.readFileSync(CORPUS, 'utf-8')).sequence ?? []) as Reading[];
}

function main() {
  const { target, loadBearing, leaf } = loadRules();
  const corpus = loadCorpus();

  // cite -> set of reading ids (distinct readings, not raw citations)
  const seen = new Map<string, Set<string>>();
  const chaptersOf = new Map<string, Set<string>>();
  for (const r of corpus) {
    for (const w of r.words ?? []) {
      for (const n of w.notes ?? []) {
        if (!n.cite) continue;
        if (!seen.has(n.cite)) seen.set(n.cite, new Set());
        if (!chaptersOf.has(n.cite)) chaptersOf.set(n.cite, new Set());
        seen.get(n.cite)!.add(r.id);
        chaptersOf.get(n.cite)!.add(r.chapter);
      }
    }
  }
  const count = (c: string) => seen.get(c)?.size ?? 0;

  const lb = loadBearing
    .map((r) => ({ ...r, n: count(r.cite), goal: r.encounters_target ?? target }))
    .sort((a, b) => a.n / a.goal - b.n / b.goal || a.cite.localeCompare(b.cite));

  const taught = lb.filter((r) => r.n >= r.goal);
  const partial = lb.filter((r) => r.n > 0 && r.n < r.goal);
  const untaught = lb.filter((r) => r.n === 0);

  const lf = leaf.map((r) => ({ ...r, n: count(r.cite) }));
  const touched = lf.filter((r) => r.n > 0);
  const untouched = lf.filter((r) => r.n === 0);

  const declared = new Set([...loadBearing, ...leaf].map((r) => r.cite));
  const unclassified = [...seen.keys()]
    .filter((c) => !declared.has(c))
    .sort((a, b) => count(b) - count(a));

  if (process.argv.includes('--json')) {
    console.log(
      JSON.stringify(
        {
          readings: corpus.length,
          loadBearing: { total: lb.length, taught: taught.length, partial: partial.length, untaught: untaught.length, rules: lb },
          leaf: { total: lf.length, touched: touched.length, untouched: untouched.length },
          unclassified: unclassified.map((c) => ({ cite: c, n: count(c) }))
        },
        null,
        2
      )
    );
    return;
  }

  const pct = (a: number, b: number) => (b ? `${Math.round((a / b) * 100)}%` : '—');
  const bar = (n: number, goal: number) => {
    const filled = Math.min(n, goal);
    return '█'.repeat(filled) + '·'.repeat(Math.max(0, goal - filled)) + (n > goal ? `+${n - goal}` : '');
  };

  console.log(`\n  READINGS LEDGER — ${corpus.length} readings\n`);

  console.log(`  LOAD-BEARING — learned by recurrence (target ${target} distinct readings)`);
  console.log(`    taught     ${String(taught.length).padStart(3)} / ${lb.length}   ${pct(taught.length, lb.length)}`);
  console.log(`    partial    ${String(partial.length).padStart(3)} / ${lb.length}   (met, not yet consolidated)`);
  console.log(`    untaught   ${String(untaught.length).padStart(3)} / ${lb.length}   (declared, never cited)\n`);

  console.log(`  LEAF — learned by acquaintance (one encounter = done)`);
  console.log(`    touched    ${String(touched.length).padStart(3)} / ${lf.length}   ${pct(touched.length, lf.length)}`);
  console.log(`    untouched  ${String(untouched.length).padStart(3)} / ${lf.length}\n`);

  if (untaught.length) {
    console.log(`  ── untaught load-bearing — the authoring queue ──`);
    for (const r of untaught) console.log(`    ${r.cite.padEnd(9)} ${r.gloss ?? ''}`);
    console.log();
  }

  if (partial.length) {
    console.log(`  ── partial load-bearing — need recurrence, not re-introduction ──`);
    for (const r of partial) {
      console.log(`    ${r.cite.padEnd(9)} ${bar(r.n, r.goal).padEnd(12)} ${r.n}/${r.goal}  ${r.gloss ?? ''}`);
    }
    console.log();
  }

  if (process.argv.includes('--full') && taught.length) {
    console.log(`  ── taught ──`);
    for (const r of taught.sort((a, b) => b.n - a.n)) {
      console.log(`    ${r.cite.padEnd(9)} ${String(r.n).padStart(3)} readings, ${chaptersOf.get(r.cite)?.size ?? 0} chapters  ${r.gloss ?? ''}`);
    }
    console.log();
  }

  if (untouched.length) {
    console.log(`  ── leaf, not yet touched ──`);
    for (const r of untouched) console.log(`    ${r.cite.padEnd(9)} ${r.gloss ?? ''}`);
    console.log();
  }

  // ── length × difficulty ──────────────────────────────────────────────────
  // These axes are meant to be INDEPENDENT. Where they aren't — where a tier
  // has only short readings — that tier has no consolidation passage, and its
  // load-bearing rules can only be recurring by accident.
  const tiers = new Map<number, { short: number; passage: number; long: number }>();
  for (const r of corpus) {
    const t = r.segment ?? 0;
    if (!tiers.has(t)) tiers.set(t, { short: 0, passage: 0, long: 0 });
    const b = tiers.get(t)!;
    b[r.length ?? 'short']++;
  }
  const starved = [...tiers.entries()]
    .filter(([, b]) => b.passage + b.long === 0 && b.short > 0)
    .map(([t]) => t)
    .sort((a, b) => a - b);

  console.log(`  LENGTH × DIFFICULTY — independent axes`);
  const totals = corpus.reduce(
    (acc, r) => ((acc[r.length ?? 'short']++, acc)),
    { short: 0, passage: 0, long: 0 } as Record<string, number>
  );
  console.log(
    `    short ${totals.short}   passage ${totals.passage}   long ${totals.long}   (${pct(totals.passage + totals.long, corpus.length)} of readings are connected prose)`
  );
  if (starved.length) {
    console.log(`    tiers with NO passage — nothing consolidates their new rules:`);
    console.log(`      ${starved.join(', ')}`);
  }
  console.log();

  // ── सङ्ग्रह check ────────────────────────────────────────────────────────
  // A consolidation passage may cite only rules already introduced at or below
  // its own tier — that constraint IS the chapter. Violating it turns the
  // passage back into an introduction, which is the thing it exists not to be.
  // Caught this on ex180's first draft: it used 2.3.19 (सह + तृतीया) at tier 7,
  // but that rule isn't introduced until tier 11.
  const violations: string[] = [];
  for (const r of corpus.filter((r) => r.kind === 'sangraha')) {
    const tier = r.segment ?? 0;
    const earlier = new Set(
      corpus
        .filter((o) => o.id !== r.id && (o.segment ?? 9999) <= tier)
        .flatMap((o) => (o.words ?? []).flatMap((w) => (w.notes ?? []).map((n) => n.cite)))
        .filter(Boolean) as string[]
    );
    for (const w of r.words ?? []) {
      for (const n of w.notes ?? []) {
        if (n.cite && !earlier.has(n.cite)) {
          violations.push(`${r.id} (tier ${tier}) cites ${n.cite}, not introduced at or below tier ${tier}`);
        }
      }
    }
  }
  if (violations.length) {
    console.log(`  ⚠ सङ्ग्रह VIOLATIONS — consolidation passages must introduce nothing`);
    for (const v of violations) console.log(`    ${v}`);
    console.log();
  }

  if (unclassified.length) {
    console.log(`  ── unclassified — cited but not declared in _rules.yaml (triage these) ──`);
    const show = process.argv.includes('--full') ? unclassified : unclassified.slice(0, 25);
    for (const c of show) console.log(`    ${c.padEnd(9)} ${count(c)} readings`);
    if (show.length < unclassified.length) {
      console.log(`    … and ${unclassified.length - show.length} more (--full to list)`);
    }
    console.log();
  }
}

main();
