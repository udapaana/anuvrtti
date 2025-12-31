/**
 * Generate all inflected forms for jargon terms using vidyut-prakriya
 * Run with: node scripts/generate-inflections.js
 */

import { readFileSync, writeFileSync } from 'fs';

// We'll need to run this in browser context since vidyut is WASM
// For now, let's generate a simpler approach - common endings to strip

const VIBHAKTI_ENDINGS = [
  // Masculine/neuter a-stem endings (most common)
  'म्', 'ः', 'ौ', 'ान्', 'ेन', 'आभ्याम्', 'ैः', 'आय', 'एभ्यः',
  'आत्', 'योः', 'स्य', 'आनाम्', 'े', 'एषु',
  // Feminine ā-stem
  'आ', 'ए', 'आः', 'आम्', 'अया', 'आयाः', 'आयाम्', 'आसु',
  // Common short forms
  'ं', 'ि', 'ु', 'ी', 'ू', 'े', 'ो', 'ै', 'ौ',
];

// Read jargon file and extract terms
const jargonPath = './src/lib/jargon.ts';
const content = readFileSync(jargonPath, 'utf-8');

// Extract all Devanagari terms
const termMatches = content.matchAll(/term:\s*"([^"]+)"/g);
const terms = [...termMatches].map(m => m[1]);

console.log(`Found ${terms.length} terms`);
console.log('Sample terms:', terms.slice(0, 10));
