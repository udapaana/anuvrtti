/**
 * Auto-wrap bare sūtra references (e.g. "1.1.1") in @ref[] markup.
 *
 * Matches patterns like X.Y.Z where X=1-8, Y=1-4, Z=1-999.
 * Skips references already inside @ref[], @deva[], @[], @sutra[], @prakriya[].
 * Also skips references that are part of version numbers, dates, etc.
 *
 * Usage:
 *   npx tsx scripts/audit/fix-refs.ts              # dry run
 *   npx tsx scripts/audit/fix-refs.ts --apply       # write fixes
 *   npx tsx scripts/audit/fix-refs.ts --adhyaya 7   # single adhyaya
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const COMMENTARY_DIR = 'static/data/commentary';

// Sūtra reference: X.Y.Z where X is 1-8, Y is 1-4, Z is 1+ digits
// Negative lookbehind: not preceded by @ref[, @deva[, @[, or a digit/dot
// Negative lookahead: not followed by a digit or dot (to avoid matching partial numbers)
const BARE_REF_RE = /(?<!\d)(?<!\.)(\b[1-8]\.[1-4]\.\d{1,3})\b(?![\d.])/g;

// All markup tags — we protect content inside these
const ALL_MARKUP_RE = /@(?:deva|ref|sutra|prakriya)?\[([^\]]*)\]/g;

type Replacement = { start: number; end: number; text: string };

function fixRefs(text: string): string {
  // 1. Collect protected ranges (anything inside @tag[...])
  const protectedRanges: [number, number][] = [];
  let m: RegExpExecArray | null;
  ALL_MARKUP_RE.lastIndex = 0;
  while ((m = ALL_MARKUP_RE.exec(text)) !== null) {
    protectedRanges.push([m.index, m.index + m[0].length]);
  }

  function isProtected(start: number, end: number): boolean {
    for (const [ps, pe] of protectedRanges) {
      if (start >= ps && end <= pe) return true;
    }
    return false;
  }

  // 2. Find bare references
  const replacements: Replacement[] = [];
  BARE_REF_RE.lastIndex = 0;
  while ((m = BARE_REF_RE.exec(text)) !== null) {
    const refStart = m.index;
    const refEnd = refStart + m[0].length;

    if (isProtected(refStart, refEnd)) continue;

    // Extra safety: check this isn't inside a TOML key line (id = "X.Y.Z" or numericId)
    // Find the start of the current line
    const lineStart = text.lastIndexOf('\n', refStart) + 1;
    const linePrefix = text.slice(lineStart, refStart);
    if (/^(id|numericId)\s*=/.test(linePrefix.trim())) continue;

    replacements.push({
      start: refStart,
      end: refEnd,
      text: `@ref[${m[1]}]`,
    });
  }

  if (replacements.length === 0) return text;

  // 3. Rebuild
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
let totalWraps = 0;

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
      const fixed = fixRefs(original);

      if (fixed !== original) {
        fixedFiles++;
        const origCount = (original.match(/@ref\[/g) || []).length;
        const fixedCount = (fixed.match(/@ref\[/g) || []).length;
        const added = fixedCount - origCount;
        totalWraps += added;

        if (!apply) {
          const id = `${a}.${p}.${parseInt(f)}`;
          console.log(`${id}: +${added} @ref[]`);
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
console.log(`@ref[] wraps ${apply ? 'applied' : 'needed'}: ${totalWraps}`);
if (!apply) {
  console.log(`\nDry run — use --apply to write changes.`);
}
