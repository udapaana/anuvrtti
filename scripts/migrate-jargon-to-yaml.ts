/**
 * Extracts the `terms` array from src/lib/jargon.ts and writes it to
 * static/data/jargon.yaml.
 *
 * Run with: npx tsx scripts/migrate-jargon-to-yaml.ts
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';

// Import the data directly — this works because we're running in Node via tsx
import { terms } from '../src/lib/jargon.js';

function escapeYamlString(s: string): string {
  // Use double-quoted style if the string contains special chars
  if (s.includes('\n') || s.includes('"') || s.includes('#') || s.includes(':') || s.includes("'")) {
    // Use literal block scalar for multi-line, double-quoted for single line
    if (s.includes('\n')) {
      const indented = s.split('\n').map(l => '    ' + l).join('\n');
      return `|\n${indented}`;
    }
    return JSON.stringify(s);
  }
  return `"${s}"`;
}

function termToYaml(t: typeof terms[0]): string {
  const lines: string[] = [];
  lines.push(`  - term: ${escapeYamlString(t.term)}`);
  lines.push(`    termRoman: ${escapeYamlString(t.termRoman)}`);
  lines.push(`    category: ${t.category}`);
  lines.push(`    meaning: ${escapeYamlString(t.meaning)}`);
  if (t.sutraRef) {
    lines.push(`    sutraRef: "${t.sutraRef}"`);
  }
  if (t.related && t.related.length > 0) {
    lines.push(`    related:`);
    for (const r of t.related) {
      lines.push(`      - ${escapeYamlString(r)}`);
    }
  }
  return lines.join('\n');
}

const yaml = [
  '# Pāṇinian grammatical terminology',
  '# Edited here; loaded at runtime by src/lib/jargon.ts',
  '#',
  '# Fields:',
  '#   term      — Devanagari',
  '#   termRoman — IAST transliteration',
  '#   category  — samjna | pratyahara | karaka | vibhakti | pratyaya | sandhi | lakara | gana | samasa | general',
  '#   meaning   — English (may include @[...] and @deva[...] markup)',
  '#   sutraRef  — defining sūtra id e.g. "1.1.1" (optional)',
  '#   related   — list of termRoman keys for related terms (optional)',
  '',
  'terms:',
  ...terms.map(termToYaml),
].join('\n');

const out = resolve(process.cwd(), 'static/data/jargon.yaml');
writeFileSync(out, yaml + '\n', 'utf-8');
console.log(`Wrote ${terms.length} terms to ${out}`);
