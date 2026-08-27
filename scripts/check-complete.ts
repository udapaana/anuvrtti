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
  WORD_TYPES, typeOf, krtDeclines, KNOWN_VALUES, RELATIONS, type WordType
} from '../src/lib/usage/schema';

const RELATION_BY_NAME = new Map(RELATIONS.map((r) => [r.name, r]));

/**
 * Values that identify a type (markers) are legal on any word as identity, and
 * an empty-values dimension (उपसर्ग, gaṇa, lemma) accepts anything. Everything
 * else that is a value of SOME dimension but not one THIS type carries is a
 * misplaced tag — the lint's core signal.
 */
const ALL_MARKERS = new Set(WORD_TYPES.flatMap((t) => t.markers));
const ALL_VALUES = new Set(WORD_TYPES.flatMap((t) => t.dimensions.flatMap((d) => d.values)));

type LintKind = 'conflict' | 'misplaced' | 'wrong-lemma' | 'bad-relation' | 'root-as-tag';
type Lint = { reading: string; form: string; type: string; kind: LintKind; detail: string };

/**
 * Correctness, not completeness. A word can carry every dimension and still be
 * WRONG — two values of one dimension (लट् and विधिलिङ् both), or a value that
 * belongs to no dimension this type has (a विभक्ति on a finite verb). These are
 * always errors, unlike a missing dimension, which is a backlog.
 */
function lintWord(type: WordType, w: Word, terms: Set<string>): Lint[] {
  const out: Lint[] = [];
  const mk = (kind: LintKind, detail: string): Lint =>
    ({ reading: '', form: w.form, type: type.dev, kind, detail });

  // 1. CONFLICT — two values of the same dimension.
  for (const d of type.dimensions) {
    const hits = d.values.filter((v) => terms.has(v));
    if (hits.length > 1) out.push(mk('conflict', `${d.name}: ${hits.join(' / ')}`));
  }

  // 2. MISPLACED — a dimension-value tag with no home in this type.
  const mine = new Set(type.dimensions.flatMap((d) => d.values));
  // A dimension NAME used as a tag (उपसर्ग, विशेषण, समास) flags the presence of
  // that feature without naming a value — legal on a type that has the dimension.
  const myDimNames = new Set(type.dimensions.map((d) => d.name));
  for (const t of terms) {
    if (!ALL_VALUES.has(t)) continue;          // a root name / class tag, not a value
    if (ALL_MARKERS.has(t)) continue;          // a type marker is identity, legal anywhere
    if (mine.has(t)) continue;                 // a legal value for this type
    if (myDimNames.has(t)) continue;           // a dimension name used as a flag
    if (t === w.lemma) continue;               // the word's own root, shown as a term
    out.push(mk('misplaced', `${t} is not a dimension of ${type.dev}`));
  }

  /*
    4. ROOT-AS-TAG — a note that names the word's own root, where the root's
       name is also a legal value of one of this type's dimensions.

    230 words carry a note whose `term` is the word's own lemma, glossing what
    the root means: `term: गम्, en: "go"`. Harmless for गम्, वस्, दृश् — those
    are not schema values, so nothing reads them as tags. But fourteen roots
    collide with a value: दा and धा are also तद्धित suffixes, यत् is also a कृत्
    and a तद्धित suffix, and सु is also one of the 22 उपसर्गs.

    Thirteen of the fourteen are inert, because a तिङन्त has no तद्धित or कृत्
    dimension for the value to land in. The fourteenth was not: सुनोति in ex165
    was tagged `term: सु` to name the root सुञ् अभिषवे, and since तिङन्त DOES
    have an उपसर्ग dimension, it became the only word in the whole corpus
    carrying an उपसर्ग — a preverb on a verb that has none.

    Rule 2 could never catch it. It exempts `t === w.lemma` as the root-naming
    idiom, but reaches that test only after `mine.has(t)` has already excused
    the tag as "a legal value for this type" — which is exactly the case that
    makes the idiom dangerous rather than harmless.
  */
  if (w.lemma && terms.has(w.lemma) && mine.has(w.lemma) && !ALL_MARKERS.has(w.lemma)) {
    const dims = type.dimensions.filter((d) => d.values.includes(w.lemma!)).map((d) => d.name);
    out.push(mk('root-as-tag',
      `${w.lemma} names the root but reads as ${dims.join('/')} — put it in a text: note, the lemma already has it`));
  }

  // 3. WRONG-LEMMA — a type whose lemma dimension is a CLOSED set (सर्वनाम,
  //    सर्वादि) but the word's lemma is not in it. This catches a word filed
  //    under the wrong type: सर्व tagged सर्वनाम, when सर्व is a सर्वादि.
  const lemmaDim = type.dimensions.find((d) => d.name === 'lemma');
  if (lemmaDim && lemmaDim.values.length && w.lemma && !lemmaDim.values.includes(w.lemma)) {
    out.push(mk('wrong-lemma', `${w.lemma} is not a ${type.dev} stem — wrong type?`));
  }
  return out;
}

const CORPUS = path.join(process.cwd(), 'static/data/readings.json');

type Rel = { kind: string; to: number };
type Word = { form: string; lemma?: string; notes?: any[]; rel?: Rel[]; derived?: Record<string, string> };
type Finding = { reading: string; form: string; type: string; missing: string[] };

/** The values a word carries for a given dimension name, from its term tags. */
function valuesOf(w: Word, dim: string): string[] {
  const set = WORD_TYPES.flatMap((t) => t.dimensions).find((d) => d.name === dim)?.values ?? [];
  const terms = new Set((w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term));
  return set.filter((v) => terms.has(v));
}

/**
 * Lint a word's RELATIONS — the edges a coordinate can't hold. An edge is wrong
 * when its kind is unknown, its target index is out of range, the source type is
 * not allowed to carry it, or an agreement axis disagrees between the two words.
 * Needs the whole reading's words[] to resolve `to`.
 */
function lintRelations(words: Word[], reading: string): Lint[] {
  const out: Lint[] = [];
  words.forEach((w, i) => {
    for (const rel of w.rel ?? []) {
      const spec = RELATION_BY_NAME.get(rel.kind);
      const mk = (detail: string): Lint =>
        ({ reading, form: w.form, type: rel.kind, kind: 'bad-relation', detail });
      if (!spec) { out.push(mk(`unknown relation kind "${rel.kind}"`)); continue; }
      const target = words[rel.to];
      if (rel.to == null || !target) { out.push(mk(`${rel.kind} → index ${rel.to} is out of range`)); continue; }
      if (rel.to === i) { out.push(mk(`${rel.kind} points at itself`)); continue; }
      const srcType = typeOf(new Set((w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term)));
      if (spec.from.length && srcType && !spec.from.includes(srcType.id)) {
        out.push(mk(`${srcType.dev} cannot be the source of ${rel.kind}`));
      }
      for (const axis of spec.agree) {
        const a = valuesOf(w, axis), b = valuesOf(target, axis);
        // Only flag when BOTH sides state the axis and they differ — a missing
        // tag is a completeness gap, handled elsewhere, not an agreement error.
        if (a.length && b.length && a[0] !== b[0]) {
          out.push(mk(`${rel.kind} → ${target.form}: ${axis} disagrees (${a[0]} vs ${b[0]})`));
        }
      }
    }
  });
  return out;
}

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
    // A conditional dimension may genuinely not exist on this word — गच्छति has
    // no उपसर्ग — so its absence is never a gap. It is reported separately
    // rather than skipped silently; see the conditional block below.
    if (d.source === 'conditional') continue;

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
  const lintOnly = args.includes('--lint');

  const findings: Finding[] = [];
  const lints: Lint[] = [];
  const byType: Record<string, { total: number; complete: number }> = {};
  const byReading = new Map<string, number>();
  const untyped: Array<{ reading: string; form: string; tags: string[] }> = [];
  const unknownTags = new Map<string, number>();
  /*
    Conditional coverage — counted rather than hidden.

    `optional` used to mean "not counted", and forty-three of the sixty-odd
    dimensions were in it, so nothing anywhere could tell a dimension nobody
    had ever filled from one the language genuinely never asks for. These are
    the ones that may legitimately be absent, so they are never demanded — but
    they are now measured, keyed type|dimension.
  */
  const cond = new Map<string, { n: number; total: number }>();

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
      for (const d of wt.dimensions) {
        if (d.source !== 'conditional' || !d.values.length) continue;
        const key = `${wt.dev}|${d.name}`;
        const e = cond.get(key) ?? { n: 0, total: 0 };
        e.total++;
        if (d.values.some((v) => terms.has(v))) e.n++;
        cond.set(key, e);
      }

      for (const l of lintWord(wt, w, terms)) lints.push({ ...l, reading: r.id });
      const missing = missingFor(wt, w, terms);
      if (!missing.length) { byType[type].complete++; continue; }
      findings.push({ reading: r.id, form: w.form, type, missing });
      byReading.set(r.id, (byReading.get(r.id) ?? 0) + 1);
    }
    // Relations are edges between words, so they are linted per-reading, with the
    // whole words[] in hand to resolve `to` and check agreement.
    if (r.words) lints.push(...lintRelations(r.words, r.id));
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

  // ── the lint: annotations that are WRONG, not just missing ─────────────
  if (lintOnly) {
    const conflicts = lints.filter((l) => l.kind === 'conflict');
    const misplaced = lints.filter((l) => l.kind === 'misplaced');
    const wrongLemma = lints.filter((l) => l.kind === 'wrong-lemma');
    const badRel = lints.filter((l) => l.kind === 'bad-relation');
    const rootAsTag = lints.filter((l) => l.kind === 'root-as-tag');
    console.log(`\n${lints.length} annotation error(s) — ${conflicts.length} conflict, ${misplaced.length} misplaced, ${wrongLemma.length} wrong-lemma, ${badRel.length} bad-relation, ${rootAsTag.length} root-as-tag\n`);
    if (rootAsTag.length) {
      console.log('  ROOT-AS-TAG — a note naming the root, where the root name is also a real value:');
      for (const l of rootAsTag) console.log(`    ${l.reading.padEnd(8)} ${l.form.padEnd(16)} ${l.type.padEnd(7)} ${l.detail}`);
      console.log();
    }
    if (conflicts.length) {
      console.log('  CONFLICT — two values of one dimension (only one can be true):');
      for (const l of conflicts) console.log(`    ${l.reading.padEnd(8)} ${l.form.padEnd(16)} ${l.type.padEnd(7)} ${l.detail}`);
      console.log();
    }
    if (misplaced.length) {
      console.log('  MISPLACED — a tag that is no dimension of this word\'s type:');
      for (const l of misplaced) console.log(`    ${l.reading.padEnd(8)} ${l.form.padEnd(16)} ${l.type.padEnd(7)} ${l.detail}`);
      console.log();
    }
    if (wrongLemma.length) {
      console.log('  WRONG-LEMMA — lemma is not a stem of this closed type (filed under the wrong type?):');
      for (const l of wrongLemma) console.log(`    ${l.reading.padEnd(8)} ${l.form.padEnd(16)} ${l.type.padEnd(7)} ${l.detail}`);
      console.log();
    }
    if (badRel.length) {
      console.log('  BAD-RELATION — an edge between words that does not hold (target, agreement, direction):');
      for (const l of badRel) console.log(`    ${l.reading.padEnd(8)} ${l.form.padEnd(16)} ${l.detail}`);
      console.log();
    }
    if (!lints.length) console.log('  clean — every annotation is a legal value of its type.\n');
    process.exit(lints.length ? 1 : 0);
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
  /*
    A 0% line here is the one worth looking at: it usually means the tag has no
    author, not that the language never uses it. But it is a prompt, never an
    error — demanding उपसर्ग on गच्छति is not a stricter standard, it is an
    impossible one.
  */
  console.log('\n  conditional — may not exist on a word; measured, never demanded:');
  for (const [key, e] of [...cond].sort((a, b) => a[1].n / a[1].total - b[1].n / b[1].total)) {
    const [type, dim] = key.split('|');
    const pct = Math.round((100 * e.n) / e.total);
    console.log(
      `    ${type.padEnd(9)} ${dim.padEnd(14)} ${String(e.n).padStart(5)} / ${String(e.total).padEnd(5)} ${String(pct).padStart(3)}%`
    );
  }

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
