#!/usr/bin/env npx tsx
/**
 * Build the Bālabodhini primer payload from the structured TOML lessons.
 *
 * Reads static/data/balabodhini/{part}/structured/lesson-NN.toml (79 lessons
 * across 2 parts) and emits a single JSON the /balabodhini reader loads:
 *
 *   { parts: [ { part: 1, lessons: [ <lesson toml verbatim>, … ] }, … ] }
 *
 * Lessons are kept in their authored TOML shape (sections preserved as-is) so
 * the reader's renderer is the single source of truth for layout — matching the
 * design bundle's Balabodhini.dc.html logic.
 *
 *   → static/data/balabodhini.json
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseToml } from 'smol-toml';

const ROOT = path.join(process.cwd(), 'static/data/balabodhini');
const OUTPUT = path.join(process.cwd(), 'static/data/balabodhini.json');

function loadPart(part: number): any[] {
  const dir = path.join(ROOT, String(part), 'structured');
  if (!fs.existsSync(dir)) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => /^lesson-\d+\.toml$/.test(f))
    .sort();
  const lessons: any[] = [];
  for (const f of files) {
    try {
      const lesson = parseToml(fs.readFileSync(path.join(dir, f), 'utf-8'));
      lessons.push(lesson);
    } catch (e) {
      console.error(`  ✗ ${part}/${f}: ${(e as Error).message}`);
    }
  }
  // Order lessons by their `number` field so they read in pedagogical sequence.
  lessons.sort((a, b) => (a.number ?? 0) - (b.number ?? 0));
  return lessons;
}

function main() {
  const partDirs = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d+$/.test(d.name))
    .map((d) => parseInt(d.name, 10))
    .sort((a, b) => a - b);

  const parts = partDirs.map((part) => ({ part, lessons: loadPart(part) }));
  const total = parts.reduce((n, p) => n + p.lessons.length, 0);

  fs.writeFileSync(OUTPUT, JSON.stringify({ parts }, null, 0));
  console.log(`✓ balabodhini.json — ${total} lessons across ${parts.length} part(s) → ${path.relative(process.cwd(), OUTPUT)}`);
}

main();
