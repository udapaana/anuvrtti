/**
 * Extracts the `terms` array from src/lib/jargon.ts and writes it to
 * static/data/jargon.toml.
 *
 * Run with: npx tsx scripts/migrate-jargon-to-toml.ts
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { terms } from '../src/lib/jargon.js';

function toTomlString(s: string): string {
  // Use multiline literal string if it contains backslash or quotes,
  // basic multiline if it contains newlines, else basic string.
  if (s.includes('\n')) {
    return `"""\n${s}\n"""`;
  }
  // Escape backslashes and double quotes for basic strings
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

const lines: string[] = [
  '# Pāṇinian grammatical terminology',
  '# Source of truth — edit here, never in src/lib/jargon.ts',
  '#',
  '# Markup in meaning fields:',
  '#   @deva[text]   — Devanagari term (rendered + clickable)',
  '#   @[roman]      — italic Roman term (clickable)',
  '#   @ref[1.1.1]   — link to a sūtra',
  '',
];

for (const t of terms) {
  lines.push('[[terms]]');
  lines.push(`term = ${toTomlString(t.term)}`);
  lines.push(`termRoman = ${toTomlString(t.termRoman)}`);
  lines.push(`category = "${t.category}"`);
  lines.push(`meaning = ${toTomlString(t.meaning)}`);
  if (t.sutraRef) {
    lines.push(`sutraRef = "${t.sutraRef}"`);
  }
  if (t.related && t.related.length > 0) {
    const related = t.related.map(r => `"${r.replace(/"/g, '\\"')}"`).join(', ');
    lines.push(`related = [${related}]`);
  }
  lines.push('');
}

const out = resolve(process.cwd(), 'static/data/jargon.toml');
writeFileSync(out, lines.join('\n'), 'utf-8');
console.log(`Wrote ${terms.length} terms to ${out}`);
