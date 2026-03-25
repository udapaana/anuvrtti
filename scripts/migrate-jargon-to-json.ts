/**
 * Extracts the `terms` array from src/lib/jargon.ts and writes it to
 * static/data/jargon.json.
 *
 * Run with: npx tsx scripts/migrate-jargon-to-json.ts
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { terms } from '../src/lib/jargon.js';

const out = resolve(process.cwd(), 'static/data/jargon.json');
writeFileSync(out, JSON.stringify(terms, null, 2) + '\n', 'utf-8');
console.log(`Wrote ${terms.length} terms to ${out}`);
