/**
 * Converts static/data/vocabulary.json → static/data/vocabulary.toml
 * Run with: npx tsx scripts/migrate-vocabulary-to-toml.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const src = JSON.parse(readFileSync(resolve(process.cwd(), 'static/data/vocabulary.json'), 'utf-8'));

function toTomlStr(s: string): string {
  if (s.includes('\n')) return `"""\n${s.replace(/\\/g, '\\\\').replace(/"""/g, '\\"\\"\\"')}\n"""`;
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

const lines: string[] = [
  `# Sanskrit vocabulary for graded reading passages`,
  `# Source of truth — edit here`,
  ``,
  `version = "${src.version}"`,
  `description = ${toTomlStr(src.description)}`,
  ``,
  `[frequencyTiers]`,
  ...Object.entries(src.frequencyTiers as Record<string, string>).map(([k, v]) => `${k} = ${toTomlStr(v)}`),
  ``,
];

for (const word of src.words) {
  lines.push(`[[words]]`);
  for (const [k, v] of Object.entries(word)) {
    if (v !== undefined && v !== null) {
      lines.push(`${k} = ${toTomlStr(String(v))}`);
    }
  }
  lines.push(``);
}

const out = resolve(process.cwd(), 'static/data/vocabulary.toml');
writeFileSync(out, lines.join('\n'), 'utf-8');
console.log(`Wrote ${src.words.length} words to ${out}`);
