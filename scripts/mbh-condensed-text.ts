#!/usr/bin/env bun
/**
 * mbh-condensed-text.ts — turn content/texts/mahabharata-condensed/selection.json
 * (the ordered sarit_id list recovered by scripts/mbh-condensed.ts) into
 * content/texts/mahabharata-condensed/text.yaml, in this project's standard
 * whole-text format (see content/texts/pancatantra-kilotpatin/text.yaml).
 *
 * For each selected entry, looks up its sarit_id's actual verse (all <l>
 * lines of that <lg>) in the SARIT Kumbhakonam TEI (data/texts/
 * sa_mahAbhArata-kumbhakonam-sarit.txt, pinned in data/texts.json — run
 * `bun run texts` first if it is missing), strips the daṇḍa/double-daṇḍa the
 * same way the other whole texts do (lines carry none; see the template),
 * and transliterates to IAST with shlesha, the same library analyze-text.ts
 * and find-attested.ts already use.
 *
 * Inclusion: only entries with a sarit_id (band high/medium/reviewed — i.e.
 * selection.json's own "matched" count). Left out, and reported:
 *   - band "unmatched" (3): OCR verse text with no edition placement at all —
 *     there is nothing real to show a reader.
 *   - band "reviewed" entries carrying `critical` instead of `sarit_id` (14,
 *     all Āśramavāsika): SARIT's TEI doesn't have this parvan; the verse was
 *     human-located in the GRETIL critical edition instead, which this
 *     script does not read. A later pass could pull these from GRETIL and
 *     slot them in by seq order.
 *
 * `low` band does not occur in the current selection.json (0 entries), so no
 * extra threshold decision was needed there — if it ever does, treat it like
 * `unmatched` (weak enough that README itself says "a low-band entry may be
 * the neighbouring verse of the right one") unless a human review promotes it.
 *
 *   bun scripts/mbh-condensed-text.ts            # full run
 *   bun scripts/mbh-condensed-text.ts --limit 50 # first N included entries only (sample)
 */
import * as fs from 'fs';
import * as path from 'path';
import { createRequire } from 'module';

const ROOT = process.cwd();
const require = createRequire(import.meta.url);
const { initSync, transliterate } = require('shlesha');
initSync({ module: fs.readFileSync(require.resolve('shlesha/shlesha_bg.wasm')) });
const tr = (s: string, a: string, b: string) => transliterate(s, a, b) as string;

const SEL_DIR = path.join(ROOT, 'content/texts/mahabharata-condensed');
const TEI_PATH = path.join(ROOT, 'data/texts/sa_mahAbhArata-kumbhakonam-sarit.txt');
const args = process.argv.slice(2);
const limit = Number(args[args.indexOf('--limit') + 1]) || 0;
const outName = limit ? 'text.sample.yaml' : 'text.yaml';

if (!fs.existsSync(TEI_PATH)) {
  console.error(`missing ${TEI_PATH} — run \`bun run texts\` first (data/texts.json, slug sa_mahAbhArata-kumbhakonam-sarit)`);
  process.exit(1);
}
const xml = fs.readFileSync(TEI_PATH, 'utf-8');
const selection = JSON.parse(fs.readFileSync(path.join(SEL_DIR, 'selection.json'), 'utf-8'));

// ── the edition, by <lg xml:id>: raw <l> lines, tags stripped ───────────────
// Same extraction as scripts/mbh-condensed.ts (lazy <l>…</l> match). One known
// TEI entry (shalya-9-56-2) nests an <lg> inside a <note> inside its first
// <l> and would extract garbled text; it is not in this selection (checked).
const byId = new Map<string, string[]>();
for (const m of xml.matchAll(/<lg xml:id="([^"]+)"[^>]*>([\s\S]*?)<\/lg>/g)) {
  const id = m[1];
  const lines: string[] = [];
  for (const l of m[2].matchAll(/<l\b[^>]*>([\s\S]*?)<\/l>/g)) {
    const text = l[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text) lines.push(text);
  }
  if (lines.length) byId.set(id, lines);
}

// strip daṇḍa/double-daṇḍa and other stray punctuation the TEI carries, the
// way every other text.yaml in this project stores its `lines` (saṃhitā, not
// the editor's punctuation) — see pancatantra-kilotpatin/text.yaml's header.
// The TEI also carries, rarely, plain-text conventions worth handling rather
// than passing through verbatim (checked against every verse this selection
// actually uses, counts in the report below):
//   - a word broken at a line-wrap inside one <l>, rejoined with "-" + space:
//     rejoin by deleting the hyphen and the whitespace, not just the hyphen.
//   - a bracketed [line] — editorially flagged as doubtful/an alternate
//     verse the edition still prints — kept, brackets only are dropped.
//   - a parenthesised (word) — an alternate single-word reading noted inline
//     next to the printed one (1 case in this selection, the maṅgala verse
//     adi-1-1-1: "चैव(व्यासं)") — dropped with its parens; the printed
//     reading stands, as GRETIL typos are kept in a text.yaml elsewhere too.
//   - backtick/apostrophe used as quotation marks around reported speech —
//     stripped, since they are not part of the saṃhitā.
//   - inline verse numbers ("॥ 22 ॥", Virāṭa-parvan only) and a lone "*" —
//     stripped as typesetting, not text.
//   - a run of "-" standing for an illegible/lost word in the edition itself
//     (rare, ~20 lines in this selection) — stripped; the verse is short a
//     word where the edition already was.
//   - two <lg>s that run into the next verse's text with an inline
//     "5-71-14a"-style cross-reference label and no element boundary
//     (udyoga-5-71-13, udyoga-5-147-6) — the label is stripped like any
//     other verse number; what follows is real text and is kept.
const rejoinHyphen = (s: string) => s.replace(/([ऀ-ॿ])-+\s+(?=[ऀ-ॿ])/g, '$1');
const stripMarks = (s: string) =>
  rejoinHyphen(s)
    .replace(/\d+-\d+-\d+[a-z]?/g, ' ') // inline cross-reference label ("5-71-14a")
    .replace(/-+/g, ' ')                // any remaining hyphen: lacuna dash, not a word-join
    .replace(/\([^)]*\)/g, '')          // parenthesised alternate word
    .replace(/[\[\]]/g, '')             // bracketed-but-printed line, brackets only
    .replace(/[`'’‘"]/g, '')            // quotation marks
    .replace(/[*0-9a-zA-Z]/g, '')       // stray asterisk / inline verse numbers / stray Latin letters
    .replace(/[।॥]+/g, '');             // daṇḍa / double daṇḍa
const clean = (s: string) => stripMarks(s).replace(/\s+/g, ' ').trim();
const toIast = (s: string) => tr(stripMarks(s), 'devanagari', 'iast').replace(/ṁ/g, 'ṃ').replace(/\s+/g, ' ').trim();

// ── walk the selection in order ──────────────────────────────────────────────
type Section = { id: string; kind: 'verse'; lines: string[]; iast: string };
const sections: Section[] = [];
const seenId = new Map<string, number>();
let included = 0, excludedUnmatched = 0, excludedCritical = 0, missingInTei = 0;
let totalDevChars = 0, totalWords = 0;

for (const e of selection.entries) {
  if (!e.sarit_id) {
    if (e.critical) excludedCritical++; else excludedUnmatched++;
    continue;
  }
  const rawLines = byId.get(e.sarit_id);
  if (!rawLines) { missingInTei++; console.warn(`  ! seq ${e.seq}: sarit_id ${e.sarit_id} not found in the TEI`); continue; }

  const n = (seenId.get(e.sarit_id) ?? 0) + 1;
  seenId.set(e.sarit_id, n);
  const id = n === 1 ? e.sarit_id : `${e.sarit_id}#${n}`;

  const lines = rawLines.map(clean).filter(Boolean);
  const iast = rawLines.map(toIast).filter(Boolean).join(' | ');
  sections.push({ id, kind: 'verse', lines, iast });
  included++;
  totalDevChars += lines.join('').length;
  totalWords += lines.join(' ').split(/\s+/).filter(Boolean).length;
  if (limit && included >= limit) break;
}

// ── write text.yaml ───────────────────────────────────────────────────────
const esc = (s: string) => '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
const yaml: string[] = [];
yaml.push(`# The Mahābhārata, condensed — a verse selection through the Kumbhakonam edition.`);
yaml.push(`#`);
yaml.push(`# AUTHORED SOURCE of a whole text: generated by scripts/mbh-condensed-text.ts`);
yaml.push(`# from content/texts/mahabharata-condensed/selection.json (itself generated —`);
yaml.push(`# see its README.md) and the SARIT TEI. Re-run the script to regenerate; do not`);
yaml.push(`# hand-edit sections here — author corrections belong in review-*.json (which`);
yaml.push(`# feeds selection.json) or in overrides.yaml (vidyut-analysis decisions only).`);
yaml.push(`# See content/texts/pancatantra-kilotpatin/text.yaml for the format this follows.`);
yaml.push(`#`);
yaml.push(`# \`lines\` is the SARIT Devanagari saṃhitā with daṇḍa/double-daṇḍa dropped (as`);
yaml.push(`# every text.yaml here stores saṃhitā, not the editor's punctuation); \`iast\` is`);
yaml.push(`# the same lines transliterated (shlesha), padas joined by " | ".`);
yaml.push(`#`);
yaml.push(`# The section id is the SARIT xml:id (e.g. adi-1-1-1); never renumber one. A`);
yaml.push(`# verse the condensed selection repeats gets "#2" etc. — see the duplicates below.`);
yaml.push(`#`);
yaml.push(`# Left out of this selection (see the script's header for why): band "unmatched"`);
yaml.push(`# (${excludedUnmatched} entries — no real edition placement) and 14 Āśramavāsika verses matched only`);
yaml.push(`# in the GRETIL critical edition, which SARIT's TEI lacks and this script does`);
yaml.push(`# not read (sarit_id null, \`critical\` field set in selection.json).`);
if (limit) {
  yaml.push(`#`);
  yaml.push(`# SAMPLE — first ${limit} included entries only, for pipeline validation. Not the`);
  yaml.push(`# full selection; run without --limit for that.`);
}
yaml.push(`id: mahabharata-condensed`);
yaml.push(`title: महाभारतम् (संक्षिप्तम्)`);
yaml.push(`title_en: "The Mahabharata Condensed in the Poet's Own Words — the verse selection"`);
yaml.push(`work: महाभारतम्`);
yaml.push(`place: ${selection.entries.length} selected verses, Ādi through Svargārohaṇa parvans, in sequence`);
yaml.push(`source:`);
yaml.push(`  edition: Mahābhārata, Kumbhakonam ed. (Southern Recension, Krishnacharya & Vyasacharya 1906-14), SARIT TEI`);
yaml.push(`  file: sa_mahAbhArata-kumbhakonam-sarit # data/texts.json (sha256-pinned)`);
yaml.push(`  lines: whole file (TEI, not line-numbered plaintext)`);
yaml.push(`  licence: SARIT TEI text, CC BY-SA 3.0 (per data/texts.json)`);
yaml.push(`sections:`);
for (const s of sections) {
  yaml.push(`  - id: '${s.id}'`);
  yaml.push(`    kind: verse`);
  yaml.push(`    lines:`);
  for (const l of s.lines) yaml.push(`      - ${l}`);
  yaml.push(`    iast: ${esc(s.iast)}`);
}
yaml.push('');

fs.mkdirSync(SEL_DIR, { recursive: true });
fs.writeFileSync(path.join(SEL_DIR, outName), yaml.join('\n'));

// ── report ────────────────────────────────────────────────────────────────
console.log(`wrote ${path.join('content/texts/mahabharata-condensed', outName)}`);
console.log(`  included:          ${included} verses`);
console.log(`  excluded unmatched: ${excludedUnmatched}`);
console.log(`  excluded critical:  ${excludedCritical} (Āśramavāsika, not in SARIT)`);
if (missingInTei) console.log(`  !! sarit_id not found in TEI: ${missingInTei}`);
console.log(`  total Devanagari chars (lines, no spaces): ${totalDevChars}`);
console.log(`  total surface words (whitespace-split):     ${totalWords}`);
console.log(`  duplicate section ids (same sarit_id twice+): ${[...seenId.values()].filter((n) => n > 1).length}`);
