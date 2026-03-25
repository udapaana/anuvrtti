/**
 * Export sūtras with weak tiers for batch content improvement.
 * Outputs JSON with the sūtra id, existing tiers, and which tiers need work.
 *
 * Categories:
 *   1. advanced < 0.7× standard word count ("thin-advanced")
 *   2. simple < 15 words AND standard > 30 words ("stub-simple")
 *   3. advanced < 20 words ("stub-advanced")
 *
 * Usage:
 *   npx tsx scripts/audit/export-weak-tiers.ts                    # summary
 *   npx tsx scripts/audit/export-weak-tiers.ts --export           # write JSON
 *   npx tsx scripts/audit/export-weak-tiers.ts --adhyaya 4        # single adhyaya
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { parse } from 'smol-toml';

const COMMENTARY_DIR = 'static/data/commentary';
const OUTPUT_DIR = 'scripts/audit';

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

interface WeakEntry {
  id: string;
  file: string;
  simple: string;
  standard: string;
  advanced: string;
  simpleWc: number;
  standardWc: number;
  advancedWc: number;
  issues: string[];
}

const args = process.argv.slice(2);
const doExport = args.includes('--export');
const adhyayaFilter = args.includes('--adhyaya')
  ? parseInt(args[args.indexOf('--adhyaya') + 1])
  : null;

const adhyayas = adhyayaFilter ? [adhyayaFilter] : [1, 2, 3, 4, 5, 6, 7, 8];

const entries: WeakEntry[] = [];

for (const a of adhyayas) {
  const adhDir = join(COMMENTARY_DIR, String(a));
  if (!existsSync(adhDir)) continue;

  const padas = readdirSync(adhDir).filter(d => /^\d+$/.test(d)).sort((x, y) => +x - +y);

  for (const p of padas) {
    const padaDir = join(adhDir, p);
    const files = readdirSync(padaDir).filter(f => f.endsWith('.toml')).sort((x, y) => parseInt(x) - parseInt(y));

    for (const f of files) {
      const filePath = join(padaDir, f);
      const raw = readFileSync(filePath, 'utf-8');
      let parsed: any;
      try { parsed = parse(raw); } catch { continue; }

      const en = parsed.en as Record<string, string> | undefined;
      if (!en) continue;

      const sWc = wordCount(en.simple || '');
      const stWc = wordCount(en.standard || '');
      const aWc = wordCount(en.advanced || '');
      const issues: string[] = [];

      // Thin advanced: significantly shorter than standard
      if (stWc > 30 && aWc < stWc * 0.7) {
        issues.push('thin-advanced');
      }

      // Stub simple: very short simple when standard is substantial
      if (sWc < 15 && stWc > 30) {
        issues.push('stub-simple');
      }

      // Stub advanced
      if (aWc < 20) {
        issues.push('stub-advanced');
      }

      if (issues.length > 0) {
        entries.push({
          id: parsed.id as string,
          file: filePath,
          simple: en.simple || '',
          standard: en.standard || '',
          advanced: en.advanced || '',
          simpleWc: sWc,
          standardWc: stWc,
          advancedWc: aWc,
          issues,
        });
      }
    }
  }
}

// Summary
const thinAdv = entries.filter(e => e.issues.includes('thin-advanced')).length;
const stubSimple = entries.filter(e => e.issues.includes('stub-simple')).length;
const stubAdv = entries.filter(e => e.issues.includes('stub-advanced')).length;

console.log(`\n=== Weak Tier Summary ===`);
console.log(`Total entries needing work: ${entries.length}`);
console.log(`  thin-advanced (adv < 0.7× std): ${thinAdv}`);
console.log(`  stub-simple (< 15w, std > 30w): ${stubSimple}`);
console.log(`  stub-advanced (< 20w): ${stubAdv}`);

console.log(`\nBy adhyaya:`);
for (let a = 1; a <= 8; a++) {
  const adhEntries = entries.filter(e => e.id.startsWith(a + '.'));
  if (adhEntries.length === 0) continue;
  const ta = adhEntries.filter(e => e.issues.includes('thin-advanced')).length;
  const ss = adhEntries.filter(e => e.issues.includes('stub-simple')).length;
  const sa = adhEntries.filter(e => e.issues.includes('stub-advanced')).length;
  console.log(`  Adh ${a}: ${adhEntries.length} entries (thin-adv: ${ta}, stub-simple: ${ss}, stub-adv: ${sa})`);
}

if (doExport) {
  const outPath = join(OUTPUT_DIR, 'weak-tiers.json');
  writeFileSync(outPath, JSON.stringify(entries, null, 2));
  console.log(`\nExported to ${outPath} (${entries.length} entries)`);
}
