#!/usr/bin/env node
/**
 * Generate layered commentary for all sūtras from existing sources
 *
 * Layers:
 * - simple: sutrartha_english (one-line meaning)
 * - standard: kashika_english (explanation with context)
 * - advanced: vasu_rewritten (where available) or vasu_english (fallback)
 *
 * Usage: node scripts/generate-layered-commentary.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DATA_DIR = path.join(__dirname, "..", "static", "data");

// Load all sources
const sutras = require(path.join(DATA_DIR, "sutras.json"));
const sutrartha = require(path.join(DATA_DIR, "sutrartha_english.json"));
const kashika = require(path.join(DATA_DIR, "kashika_english.json"));
const vasu = require(path.join(DATA_DIR, "vasu_english.json"));
const vasuRewritten = require(path.join(DATA_DIR, "vasu_rewritten.json"));
const existingLayered = require(path.join(DATA_DIR, "layered_commentary.json"));

// Stats
let stats = {
  total: 0,
  preserved: 0, // Kept existing hand-crafted layered commentary
  generated: 0,
  missingSimple: 0,
  missingStandard: 0,
  usedRewritten: 0,
  usedVasuFallback: 0,
};

function cleanText(text) {
  if (!text) return "";
  // Trim and normalize whitespace
  return text.trim().replace(/\s+/g, " ");
}

function generateLayered(sutraId) {
  // Preserve existing hand-crafted layered commentary
  if (existingLayered[sutraId]) {
    stats.preserved++;
    return existingLayered[sutraId];
  }

  const simple = cleanText(sutrartha[sutraId]);
  const standard = cleanText(kashika[sutraId]);

  // Use vasu_rewritten if available, otherwise vasu_english
  let advanced;
  if (vasuRewritten[sutraId]) {
    advanced = cleanText(vasuRewritten[sutraId]);
    stats.usedRewritten++;
  } else {
    advanced = cleanText(vasu[sutraId]);
    stats.usedVasuFallback++;
  }

  // Track missing data
  if (!simple) stats.missingSimple++;
  if (!standard) stats.missingStandard++;

  stats.generated++;

  return {
    en: {
      simple: simple || standard || advanced || "",
      standard: standard || simple || advanced || "",
      advanced: advanced || standard || simple || "",
    },
  };
}

// Generate for all sūtras
const layeredCommentary = {};

for (const sutra of sutras.data) {
  const id = sutra.i;
  layeredCommentary[id] = generateLayered(id);
  stats.total++;
}

// Write output
const outputPath = path.join(DATA_DIR, "layered_commentary.json");
fs.writeFileSync(outputPath, JSON.stringify(layeredCommentary, null, 2));

console.log("Generated layered commentary:");
console.log(`  Total sūtras: ${stats.total}`);
console.log(`  Preserved existing: ${stats.preserved}`);
console.log(`  Generated new: ${stats.generated}`);
console.log(`  Used vasu_rewritten (advanced): ${stats.usedRewritten}`);
console.log(`  Used vasu_english fallback: ${stats.usedVasuFallback}`);
console.log(`  Missing simple: ${stats.missingSimple}`);
console.log(`  Missing standard: ${stats.missingStandard}`);
console.log(`\nOutput: ${outputPath}`);
