import { readFileSync, writeFileSync } from 'fs';

// Vibhakti endings ordered longest to shortest
const VIBHAKTI_ENDINGS = [
  "आभ्याम्", "एभ्यः", "आनाम्", "आयाः", "आयाम्", "एषु", "योः",
  "आयै", "आसु", "अया", "ैः", "ान्", "ेन", "आत्", "स्य", "आः",
  "आय", "आम्", "ौ", "ः", "म्", "े", "ो", "ी", "ू", "ै", "ं",
];

function stripToRoot(word) {
  for (const ending of VIBHAKTI_ENDINGS) {
    if (word.endsWith(ending)) {
      const stem = word.slice(0, -ending.length);
      if (stem.length > 1) {
        return { original: word, stem, ending };
      }
    }
  }
  return null;
}

// Read jargon file
const jargonPath = './src/lib/jargon.ts';
const content = readFileSync(jargonPath, 'utf-8');

// Find all Devanagari terms that have endings
const termMatches = [...content.matchAll(/term:\s*"([^"]+)"/g)];
const terms = termMatches.map(m => m[1]);

const toStrip = [];
for (const term of terms) {
  const result = stripToRoot(term);
  if (result) {
    toStrip.push(result);
  }
}

console.log(`Found ${toStrip.length} terms with endings to strip:\n`);
toStrip.forEach(({ original, stem, ending }) => {
  console.log(`${original} → ${stem} (stripped: ${ending})`);
});
