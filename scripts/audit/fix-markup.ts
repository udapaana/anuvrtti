/**
 * Fix unwrapped script in commentary TOML files:
 *   1. Raw Devanagari → @deva[...]
 *   2. Raw IAST/ISO (words with diacritics) → @[...]
 *   3. Lowercase all IAST/ISO (no capitals in Sanskrit transliteration)
 *
 * Skips content already inside @deva[], @[], @ref[], @sutra[], @prakriya[].
 *
 * Usage:
 *   npx tsx scripts/audit/fix-markup.ts              # dry run
 *   npx tsx scripts/audit/fix-markup.ts --apply       # write fixes
 *   npx tsx scripts/audit/fix-markup.ts --adhyaya 7   # single adhyaya
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const COMMENTARY_DIR = 'static/data/commentary';

// ── Patterns ──

// Devanagari Unicode block
const DEVA_RE = /([\u0900-\u097F\uA8E0-\uA8FF]+)/g;

// IAST/ISO diacritical characters (lowercase + uppercase variants)
const IAST_DIACRITICS = /[āīūṛṝḷḹṅñṭḍṇśṣḥṃṁĀĪŪṚṜḶḸṄÑṬḌṆŚṢḤṂṀ]/;

// An IAST "word": sequence of letters (including diacritics and hyphens) that
// contains at least one IAST diacritic. We match word boundaries.
// This catches: vṛddhi, ātmanepada, strī-pratyaya, sūtra, etc.
const IAST_WORD_RE = /[a-zA-ZāīūṛṝḷḹṅñṭḍṇśṣḥṃṁĀĪŪṚṜḶḸṄÑṬḌṆŚṢḤṂṀ][-a-zA-ZāīūṛṝḷḹṅñṭḍṇśṣḥṃṁĀĪŪṚṜḶḸṄÑṬḌṆŚṢḤṂṀ]*/g;

// All markup tags to protect
const ALL_MARKUP_RE = /@(?:deva|ref|sutra|prakriya)?\[([^\]]*)\]/g;

// ── Helpers ──

type Replacement = { start: number; end: number; text: string };

function collectProtectedRanges(text: string): [number, number][] {
  const ranges: [number, number][] = [];
  let m: RegExpExecArray | null;
  ALL_MARKUP_RE.lastIndex = 0;
  while ((m = ALL_MARKUP_RE.exec(text)) !== null) {
    ranges.push([m.index, m.index + m[0].length]);
  }
  return ranges;
}

function isProtected(start: number, end: number, ranges: [number, number][]): boolean {
  for (const [ps, pe] of ranges) {
    if (start >= ps && end <= pe) return true;
  }
  return false;
}

function lowercaseIAST(word: string): string {
  // Lowercase the entire word — IAST has no capitals
  return word.toLowerCase();
}

function fixMarkup(text: string): string {
  const protected_ranges = collectProtectedRanges(text);
  const replacements: Replacement[] = [];

  // Pass 1: Find raw Devanagari
  let m: RegExpExecArray | null;
  DEVA_RE.lastIndex = 0;
  while ((m = DEVA_RE.exec(text)) !== null) {
    if (!isProtected(m.index, m.index + m[0].length, protected_ranges)) {
      replacements.push({
        start: m.index,
        end: m.index + m[0].length,
        text: `@deva[${m[0]}]`,
      });
    }
  }

  // Pass 2: Find raw IAST words (only those with diacritics)
  IAST_WORD_RE.lastIndex = 0;
  while ((m = IAST_WORD_RE.exec(text)) !== null) {
    if (!IAST_DIACRITICS.test(m[0])) continue;
    if (isProtected(m.index, m.index + m[0].length, protected_ranges)) continue;
    // Don't overlap with Devanagari replacements
    const overlaps = replacements.some(r =>
      m!.index < r.end && (m!.index + m![0].length) > r.start
    );
    if (overlaps) continue;

    const lowered = lowercaseIAST(m[0]);
    replacements.push({
      start: m.index,
      end: m.index + m[0].length,
      text: `@[${lowered}]`,
    });
  }

  // Pass 3: Fix capitalization inside existing @[] tags
  const EXISTING_ROMAN_RE = /@\[([^\]]*)\]/g;
  EXISTING_ROMAN_RE.lastIndex = 0;
  while ((m = EXISTING_ROMAN_RE.exec(text)) !== null) {
    const inner = m[1];
    const lowered = lowercaseIAST(inner);
    if (inner !== lowered) {
      // The full match is @[inner], we want to replace just the inner part
      const innerStart = m.index + 2; // skip "@["
      const innerEnd = innerStart + inner.length;
      // Check no overlap with existing replacements
      const overlaps = replacements.some(r =>
        innerStart < r.end && innerEnd > r.start
      );
      if (!overlaps) {
        replacements.push({
          start: innerStart,
          end: innerEnd,
          text: lowered,
        });
      }
    }
  }

  if (replacements.length === 0) return text;

  // Sort by position and rebuild
  replacements.sort((a, b) => a.start - b.start);

  let result = '';
  let cursor = 0;
  for (const r of replacements) {
    result += text.slice(cursor, r.start);
    result += r.text;
    cursor = r.end;
  }
  result += text.slice(cursor);

  return result;
}

// ── Main ──

const args = process.argv.slice(2);
const apply = args.includes('--apply');
const adhyayaFilter = args.includes('--adhyaya')
  ? parseInt(args[args.indexOf('--adhyaya') + 1])
  : null;

const adhyayas = adhyayaFilter ? [adhyayaFilter] : [1, 2, 3, 4, 5, 6, 7, 8];

let totalFiles = 0;
let fixedFiles = 0;
let devaWraps = 0;
let iastWraps = 0;
let capsFixed = 0;

for (const a of adhyayas) {
  const adhDir = join(COMMENTARY_DIR, String(a));
  if (!existsSync(adhDir)) continue;

  const padas = readdirSync(adhDir).filter(d => /^\d+$/.test(d)).sort((x, y) => +x - +y);

  for (const p of padas) {
    const padaDir = join(adhDir, p);
    const files = readdirSync(padaDir).filter(f => f.endsWith('.toml')).sort((x, y) => parseInt(x) - parseInt(y));

    for (const f of files) {
      const filePath = join(padaDir, f);
      totalFiles++;

      const original = readFileSync(filePath, 'utf-8');
      const fixed = fixMarkup(original);

      if (fixed !== original) {
        fixedFiles++;

        const origDevaCount = (original.match(/@deva\[/g) || []).length;
        const fixedDevaCount = (fixed.match(/@deva\[/g) || []).length;
        const addedDeva = fixedDevaCount - origDevaCount;
        devaWraps += addedDeva;

        const origRomanCount = (original.match(/@\[/g) || []).length;
        const fixedRomanCount = (fixed.match(/@\[/g) || []).length;
        const addedRoman = fixedRomanCount - origRomanCount;
        iastWraps += addedRoman;

        // Count case fixes (rough: compare existing @[] contents)
        // Not exact but gives a sense
        if (addedDeva === 0 && addedRoman === 0) capsFixed++;

        if (!apply) {
          const id = `${a}.${p}.${parseInt(f)}`;
          const parts: string[] = [];
          if (addedDeva > 0) parts.push(`+${addedDeva} @deva[]`);
          if (addedRoman > 0) parts.push(`+${addedRoman} @[]`);
          if (addedDeva === 0 && addedRoman === 0) parts.push('case fix');
          console.log(`${id}: ${parts.join(', ')}`);
        } else {
          writeFileSync(filePath, fixed);
        }
      }
    }
  }
}

console.log(`\n--- Summary ---`);
console.log(`Files scanned: ${totalFiles}`);
console.log(`Files ${apply ? 'fixed' : 'to fix'}: ${fixedFiles}`);
console.log(`@deva[] wraps ${apply ? 'applied' : 'needed'}: ${devaWraps}`);
console.log(`@[] IAST wraps ${apply ? 'applied' : 'needed'}: ${iastWraps}`);
console.log(`Case-only fixes: ${capsFixed}`);
if (!apply) {
  console.log(`\nDry run — use --apply to write changes.`);
}
