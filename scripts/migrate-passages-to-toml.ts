/**
 * Converts static/data/passages/{source}.json → per-passage TOML files at
 * static/data/passages/{source}/{id}.toml
 *
 * grammarNotes moves to a freeform markdown field; all other fields stay as TOML.
 * Run with: npx tsx scripts/migrate-passages-to-toml.ts
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, join } from 'path';

const sources = ['subhasitas', 'pancatantra', 'meghaduta'];

function toTomlStr(s: string): string {
  if (s.includes('\n')) return `"""\n${s.replace(/\\/g, '\\\\').replace(/"""/g, '\\"\\"\\"')}\n"""`;
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function toTomlValue(v: any): string {
  if (typeof v === 'string') return toTomlStr(v);
  if (typeof v === 'number') return String(v);
  if (typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    if (typeof v[0] === 'string') {
      return '[\n' + v.map((s: string) => `  ${toTomlStr(s)},`).join('\n') + '\n]';
    }
    return JSON.stringify(v); // fallback for complex arrays
  }
  return toTomlStr(String(v));
}

for (const source of sources) {
  const srcPath = resolve(process.cwd(), `static/data/passages/${source}.json`);
  const outDir = resolve(process.cwd(), `static/data/passages/${source}`);
  mkdirSync(outDir, { recursive: true });

  const data = JSON.parse(readFileSync(srcPath, 'utf-8'));
  const passages = data.passages as any[];

  for (const passage of passages) {
    const lines: string[] = [];

    // Scalar fields in a canonical order
    const scalarKeys = ['id', 'source', 'reference', 'title', 'sanskrit', 'padaccheda',
                        'transliteration', 'translation', 'difficulty', 'meterInfo'];
    for (const key of scalarKeys) {
      if (passage[key] !== undefined) {
        lines.push(`${key} = ${toTomlValue(passage[key])}`);
      }
    }

    // Array of strings
    if (passage.prerequisiteGrammar?.length > 0) {
      lines.push(`prerequisiteGrammar = [${passage.prerequisiteGrammar.map((s: string) => toTomlStr(s)).join(', ')}]`);
    }

    // sutraRefs — array of objects
    if (passage.sutraRefs?.length > 0) {
      lines.push('');
      for (const ref of passage.sutraRefs) {
        lines.push('[[sutraRefs]]');
        for (const [k, v] of Object.entries(ref)) {
          lines.push(`${k} = ${toTomlValue(v)}`);
        }
      }
    }

    // vocabulary — array of objects
    if (passage.vocabulary?.length > 0) {
      lines.push('');
      for (const v of passage.vocabulary) {
        lines.push('[[vocabulary]]');
        for (const [k, val] of Object.entries(v)) {
          lines.push(`${k} = ${toTomlValue(val)}`);
        }
      }
    }

    // grammarNotes — multiline markdown, last field
    if (passage.grammarNotes) {
      lines.push('');
      lines.push(`grammarNotes = ${toTomlStr(passage.grammarNotes)}`);
    }

    lines.push('');
    writeFileSync(join(outDir, `${passage.id}.toml`), lines.join('\n'), 'utf-8');
  }

  console.log(`${source}: wrote ${passages.length} passage files`);
}
