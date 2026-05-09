#!/usr/bin/env node
/**
 * Re-transliterate vocabulary `iast` fields in Balabodhini Vol 2 lessons
 * using Shlesha (Telugu → IAST).
 *
 * Strategy:
 * - If no iast field exists: add shlesha output.
 * - If iast exists and matches shlesha: skip.
 * - If iast exists and differs ONLY in anusvāra class (ṅ/ñ/ṇ/n/m vs ṃ):
 *   keep the existing value (assimilated form is more correct IAST).
 * - Otherwise: flag as conflict for review; apply shlesha only with --force.
 *
 * Usage:
 *   node scripts/retransliterate-vocab-iast.mjs             # apply safe changes
 *   node scripts/retransliterate-vocab-iast.mjs --dry-run   # preview only
 *   node scripts/retransliterate-vocab-iast.mjs --report    # show conflicts only
 */
import { createRequire } from 'module';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const { initSync, transliterate } = require('shlesha');
const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dir, '..');

const wasmPath = require.resolve('shlesha/shlesha_bg.wasm');
initSync({ module: readFileSync(wasmPath) });

const DRY_RUN = process.argv.includes('--dry-run');
const REPORT   = process.argv.includes('--report');
const FORCE    = process.argv.includes('--force');
const LESSONS_DIR = resolve(ROOT, 'raw_data/balabodhini/2/lessons');

// ṁ (U+1E41) → ṃ (U+1E43)
function normalize(s) {
  return s.replace(/\u1e41/g, '\u1e43');
}

// Normalise anusvāra class to ṃ for comparison purposes only
function collapseAnusvara(s) {
  return s
    .replace(/ṅ/g, 'ṃ').replace(/ñ/g, 'ṃ').replace(/ṇ(?=[^ṭḍṭhḍh])/g, 'ṃ')
    .replace(/n(?=[td])/g, 'ṃ').replace(/m(?=\b)/g, 'ṃ');
}

// Returns true if the only difference between a and b is anusvāra class
function anusvараOnly(a, b) {
  return collapseAnusvara(a) === collapseAnusvara(b);
}

const NON_TELUGU_RE = /[a-zA-Z0-9\[\](){}<>\/\\|@#$%^&*+=~`'"]/;

function shleshaTelugu(text) {
  const cleaned = text
    .trim()
    .replace(/\u0c3d/g, '')        // strip avagraha
    .replace(/\s+/g, '')           // collapse OCR spaces
    .trim();

  if (!cleaned) return null;
  if (NON_TELUGU_RE.test(cleaned)) return null;

  if (cleaned.includes(',')) {
    const parts = text.split(',').map(p => {
      const c = p.trim().replace(/\u0c3d/g, '').replace(/\s+/g, '');
      if (!c || NON_TELUGU_RE.test(c)) return null;
      try { return normalize(transliterate(c, 'telugu', 'iast')); }
      catch { return null; }
    });
    if (parts.some(p => p === null)) return null;
    return parts.join(', ');
  }

  try {
    return normalize(transliterate(cleaned, 'telugu', 'iast'));
  } catch (e) {
    return null;
  }
}

function updateIastInLine(line, newIast) {
  const escaped = newIast.replace(/[\\$]/g, '\\$&');
  if (/\biast\s*=/.test(line)) {
    return line.replace(/\biast\s*=\s*"[^"]*"/, `iast = "${escaped}"`);
  } else {
    return line.replace(/\s*\}$/, `, iast = "${escaped}" }`);
  }
}

let totalWords = 0, added = 0, skippedAnusvara = 0, conflicts = 0, applied = 0;
const conflictList = [];
const skipList = [];

const files = readdirSync(LESSONS_DIR).filter(f => f.endsWith('.toml')).sort();

for (const filename of files) {
  const filepath = resolve(LESSONS_DIR, filename);
  const original = readFileSync(filepath, 'utf8');
  const lines = original.split('\n');

  let inVocabSection = false;
  let changed = false;
  const newLines = [];

  for (const line of lines) {
    if (/^\[\[sections\]\]/.test(line))              inVocabSection = false;
    if (/type\s*=\s*"vocabulary"/.test(line))        inVocabSection = true;
    if (inVocabSection && /type\s*=\s*"(?!vocabulary)/.test(line)) inVocabSection = false;

    if (inVocabSection && /\bsanskrit_telugu\s*=\s*"/.test(line)) {
      const match = line.match(/sanskrit_telugu\s*=\s*"([^"]*)"/);
      if (match) {
        totalWords++;
        const teluguText = match[1];
        const shlesha = shleshaTelugu(teluguText);

        if (shlesha === null) {
          // Can't transliterate — keep existing
          newLines.push(line);
          continue;
        }

        const existingMatch = line.match(/\biast\s*=\s*"([^"]*)"/);

        if (!existingMatch) {
          // No iast yet — add it
          const newLine = updateIastInLine(line, shlesha);
          added++;
          changed = true;
          newLines.push(newLine);
          continue;
        }

        const existing = existingMatch[1];

        if (existing === shlesha) {
          // Exact match — nothing to do
          newLines.push(line);
          continue;
        }

        if (anusvараOnly(existing, shlesha)) {
          // Only anusvāra class differs — keep existing (assimilated form is better IAST)
          skippedAnusvara++;
          newLines.push(line);
          continue;
        }

        // Genuine conflict
        conflicts++;
        conflictList.push(`  ${filename}: "${teluguText}"\n    agent: ${existing}\n    shlesha: ${shlesha}`);

        if (FORCE) {
          // Apply shlesha unconditionally
          const newLine = updateIastInLine(line, shlesha);
          applied++;
          changed = true;
          newLines.push(newLine);
        } else {
          // Keep existing, flag for review
          newLines.push(line);
        }
        continue;
      }
    }

    newLines.push(line);
  }

  if (changed && !DRY_RUN && !REPORT) {
    writeFileSync(filepath, newLines.join('\n'), 'utf8');
  }
}

if (REPORT || conflicts > 0) {
  console.log(`\n=== Conflicts (${conflicts}) — agent vs shlesha disagree (non-anusvāra) ===`);
  conflictList.forEach(c => console.log(c));
}

console.log(`
Processed ${files.length} lessons, ${totalWords} vocab words.
  Added (no iast existed):       ${added}
  Skipped (anusvāra class only): ${skippedAnusvara}
  Conflicts (kept existing):     ${conflicts - applied}
  Conflicts (applied shlesha):   ${applied}
${DRY_RUN ? '\n[DRY RUN — no files written]' : REPORT ? '\n[REPORT — no files written]' : ''}
`);
