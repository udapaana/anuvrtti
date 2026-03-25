/**
 * Splits static/data/layered_commentary.json into per-sūtra TOML files at
 * static/data/commentary/{adhyaya}/{pada}/{sutra}.toml
 *
 * Numeric key format: APPSS where A=adhyaya, PP=pada (01-04), SS=sutra (001-nnn)
 * e.g. 11001 → adhyaya=1, pada=1, sutra=1 → 1/1/1.toml
 *      21003 → adhyaya=2, pada=1, sutra=3 → 2/1/3.toml
 *      84016 → adhyaya=8, pada=4, sutra=16 → 8/4/16.toml
 *
 * Run with: npx tsx scripts/migrate-commentary-to-toml.ts
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, join } from 'path';

const src = resolve(process.cwd(), 'static/data/layered_commentary.json');
const outDir = resolve(process.cwd(), 'static/data/commentary');

const commentary = JSON.parse(readFileSync(src, 'utf-8')) as Record<string, {
  en: { simple: string; standard: string; advanced: string }
}>;

function parseNumericId(numericId: string): { adhyaya: number; pada: number; sutra: number } {
  // Format: A P SSS (1 digit adhyaya, 1 digit pada, 3 digit sutra)
  // e.g. 11001 → a=1, p=1, s=1; 84068 → a=8, p=4, s=68
  const a = parseInt(numericId[0]);
  const p = parseInt(numericId[1]);
  const s = parseInt(numericId.slice(2));
  return { adhyaya: a, pada: p, sutra: s };
}

// Numeric id to display id e.g. 11001 → "1.1.1"
function toDisplayId(numericId: string): string {
  const { adhyaya, pada, sutra } = parseNumericId(numericId);
  return `${adhyaya}.${pada}.${sutra}`;
}

function toTomlMultiline(s: string): string {
  // Always use multiline basic strings for safety with markup chars
  // Escape any backslashes and the """ sequence
  const escaped = s.replace(/\\/g, '\\\\').replace(/"""/g, '\\"\\"\\"');
  return `"""\n${escaped}\n"""`;
}

let written = 0;
let errors = 0;

for (const [numericId, entry] of Object.entries(commentary)) {
  try {
    const { adhyaya, pada, sutra } = parseNumericId(numericId);
    const displayId = toDisplayId(numericId);

    const dir = join(outDir, String(adhyaya), String(pada));
    mkdirSync(dir, { recursive: true });

    const toml = [
      `id = "${displayId}"`,
      `numericId = "${numericId}"`,
      '',
      '[en]',
      `simple = ${toTomlMultiline(entry.en.simple)}`,
      '',
      `standard = ${toTomlMultiline(entry.en.standard)}`,
      '',
      `advanced = ${toTomlMultiline(entry.en.advanced)}`,
      '',
    ].join('\n');

    writeFileSync(join(dir, `${sutra}.toml`), toml, 'utf-8');
    written++;
  } catch (e) {
    console.error(`ERROR on ${numericId}: ${e}`);
    errors++;
  }
}

console.log(`Written: ${written} files. Errors: ${errors}`);
console.log(`Output: ${outDir}`);
