/**
 * Pratyahara system based on the Shiva Sutras (Maheshvara Sutras)
 * These 14 sutras define the sound system of Sanskrit and allow
 * compact references to groups of sounds using pratyaharas.
 */

export interface ShivaSutra {
  index: number;
  text: string; // Devanagari
  sounds: string[]; // Individual sounds (varnas)
  marker: string; // The it-marker at the end
}

// The 14 Shiva Sutras
export const shivaSutras: ShivaSutra[] = [
  { index: 1, text: "अइउण्", sounds: ["अ", "इ", "उ"], marker: "ण्" },
  { index: 2, text: "ऋऌक्", sounds: ["ऋ", "ऌ"], marker: "क्" },
  { index: 3, text: "एओङ्", sounds: ["ए", "ओ"], marker: "ङ्" },
  { index: 4, text: "ऐऔच्", sounds: ["ऐ", "औ"], marker: "च्" },
  { index: 5, text: "हयवरट्", sounds: ["ह", "य", "व", "र"], marker: "ट्" },
  { index: 6, text: "लण्", sounds: ["ल"], marker: "ण्" },
  {
    index: 7,
    text: "ञमङणनम्",
    sounds: ["ञ", "म", "ङ", "ण", "न"],
    marker: "म्",
  },
  { index: 8, text: "झभञ्", sounds: ["झ", "भ"], marker: "ञ्" },
  { index: 9, text: "घढधष्", sounds: ["घ", "ढ", "ध"], marker: "ष्" },
  {
    index: 10,
    text: "जबगडदश्",
    sounds: ["ज", "ब", "ग", "ड", "द"],
    marker: "श्",
  },
  {
    index: 11,
    text: "खफछठथचटतव्",
    sounds: ["ख", "फ", "छ", "ठ", "थ", "च", "ट", "त"],
    marker: "व्",
  },
  { index: 12, text: "कपय्", sounds: ["क", "प"], marker: "य्" },
  { index: 13, text: "शषसर्", sounds: ["श", "ष", "स"], marker: "र्" },
  { index: 14, text: "हल्", sounds: ["ह"], marker: "ल्" },
];

/**
 * Precomputed pratyāhāra stored compactly with start/stop indices
 * into the flat sound array. This allows O(1) lookup and expansion.
 */
export interface PrecomputedPratyahara {
  name: string; // Devanagari name (e.g., "अच्")
  startIdx: number; // Index in allSoundsFlat where this pratyahara starts
  endIdx: number; // Index in allSoundsFlat where this pratyahara ends (inclusive)
  sutraIndex: number; // Which sūtra's marker is used (1-14)
}

// Flat array of all sounds in order across all sutras
export const allSoundsFlat: string[] = shivaSutras.flatMap((s) => s.sounds);

// Map from sound to its index in allSoundsFlat (first occurrence)
const soundToFirstIndex = new Map<string, number>();
for (let i = 0; i < allSoundsFlat.length; i++) {
  if (!soundToFirstIndex.has(allSoundsFlat[i])) {
    soundToFirstIndex.set(allSoundsFlat[i], i);
  }
}

// Map from marker to ALL sūtra indices that have this marker (for duplicate markers like ण्)
const markerToSutraIndices = new Map<string, number[]>();
for (const sutra of shivaSutras) {
  const existing = markerToSutraIndices.get(sutra.marker) || [];
  existing.push(sutra.index);
  markerToSutraIndices.set(sutra.marker, existing);
  // Also support marker without virama
  const noVirama = sutra.marker.replace("्", "");
  const existingNoVirama = markerToSutraIndices.get(noVirama) || [];
  existingNoVirama.push(sutra.index);
  markerToSutraIndices.set(noVirama, existingNoVirama);
}

// Map from sūtra index to the index of the last sound in that sūtra
const sutraToLastSoundIndex = new Map<number, number>();
let runningIndex = 0;
for (const sutra of shivaSutras) {
  runningIndex += sutra.sounds.length;
  sutraToLastSoundIndex.set(sutra.index, runningIndex - 1);
}

/**
 * Precompute ALL valid pratyāhāras, including multiple interpretations
 * for the same name when a marker appears in multiple sūtras (e.g., ण् in sūtras 1 and 6).
 * Returns a map from name to array of all valid interpretations.
 */
function computeAllPratyaharas(): Map<string, PrecomputedPratyahara[]> {
  const result = new Map<string, PrecomputedPratyahara[]>();

  for (const sutra of shivaSutras) {
    const endIdx = sutraToLastSoundIndex.get(sutra.index)!;

    // For each sound that comes before or at this marker's position
    for (let startIdx = 0; startIdx <= endIdx; startIdx++) {
      const startSound = allSoundsFlat[startIdx];
      const name = startSound + sutra.marker;

      const entry: PrecomputedPratyahara = {
        name,
        startIdx,
        endIdx,
        sutraIndex: sutra.index,
      };

      const existing = result.get(name) || [];
      // Check if we already have an entry with this exact range (avoid duplicates from same sound appearing multiple times)
      const isDuplicate = existing.some(
        (e) => e.startIdx === startIdx && e.endIdx === endIdx,
      );
      if (!isDuplicate) {
        existing.push(entry);
        result.set(name, existing);
      }
    }
  }

  return result;
}

// Precomputed map of all valid pratyāhāras (Devanagari key -> array of interpretations)
export const allPratyaharas = computeAllPratyaharas();

/**
 * Get all interpretations of a pratyahara (for markers that appear multiple times like ण्)
 */
export function getAllPratyaharaInterpretations(
  name: string,
): PrecomputedPratyahara[] | null {
  return allPratyaharas.get(name) || null;
}

/**
 * Get sounds for the first (smallest) interpretation of a pratyahara.
 * Use getAllPratyaharaInterpretations for full control over multiple meanings.
 */
export function getPratyaharaSounds(name: string): string[] | null {
  const interpretations = allPratyaharas.get(name);
  if (!interpretations || interpretations.length === 0) return null;
  // Return the first (smallest) interpretation
  const p = interpretations[0];
  return allSoundsFlat.slice(p.startIdx, p.endIdx + 1);
}

/**
 * Get sounds for all interpretations of a pratyahara.
 * Returns array of {sounds, sutraIndex} for each valid interpretation.
 */
export function getAllPratyaharaSounds(
  name: string,
):
  | { sounds: string[]; sutraIndex: number; startIdx: number; endIdx: number }[]
  | null {
  const interpretations = allPratyaharas.get(name);
  if (!interpretations || interpretations.length === 0) return null;
  return interpretations.map((p) => ({
    sounds: allSoundsFlat.slice(p.startIdx, p.endIdx + 1),
    sutraIndex: p.sutraIndex,
    startIdx: p.startIdx,
    endIdx: p.endIdx,
  }));
}

/**
 * Canonical key mappings for script-agnostic lookup.
 * Maps various romanization schemes to Devanagari pratyāhāra names.
 * Built from allPratyaharas with common transliteration variants.
 */
const canonicalKeyMap = new Map<string, string>();

// Sound mappings: Devanagari -> [SLP1, IAST, HK, ITRANS variants]
const soundVariants: Record<string, string[]> = {
  अ: ["a"],
  इ: ["i"],
  उ: ["u"],
  ऋ: ["f", "ṛ", "R", "RRi", "r̥"],
  ऌ: ["x", "ḷ", "lR", "LLi", "l̥"],
  ए: ["e"],
  ओ: ["o"],
  ऐ: ["E", "ai"],
  औ: ["O", "au"],
  ह: ["h"],
  य: ["y"],
  व: ["v", "w"],
  र: ["r"],
  ल: ["l"],
  ञ: ["Y", "ñ", "~n", "JN"],
  म: ["m"],
  ङ: ["N", "ṅ", "G", "~N"],
  ण: ["R", "ṇ", "N"],
  न: ["n"],
  झ: ["J", "jh"],
  भ: ["B", "bh"],
  घ: ["G", "gh"],
  ढ: ["Q", "ḍh", "Dh"],
  ध: ["D", "dh"],
  ज: ["j"],
  ब: ["b"],
  ग: ["g"],
  ड: ["w", "ḍ", "D"],
  द: ["d"],
  ख: ["K", "kh"],
  फ: ["P", "ph"],
  छ: ["C", "ch"],
  ठ: ["W", "ṭh", "Th"],
  थ: ["T", "th"],
  च: ["c", "ch"],
  ट: ["t", "ṭ", "T"],
  त: ["t"],
  क: ["k"],
  प: ["p"],
  श: ["S", "ś", "sh"],
  ष: ["z", "ṣ", "Sh"],
  स: ["s"],
};

// Marker mappings: Devanagari marker -> [romanized variants]
const markerVariants: Record<string, string[]> = {
  ण्: ["R", "ṇ", "N", "n"],
  क्: ["k"],
  ङ्: ["N", "ṅ", "G", "~N", "ng"],
  च्: ["c", "ch"],
  ट्: ["w", "ṭ", "T"],
  म्: ["m"],
  ञ्: ["Y", "ñ", "~n", "JN", "ny"],
  ष्: ["z", "ṣ", "Sh", "S"],
  श्: ["S", "ś", "sh"],
  व्: ["v", "w"],
  य्: ["y"],
  र्: ["r"],
  ल्: ["l"],
};

// Build the canonical key map from all pratyaharas
function buildCanonicalKeyMap(): void {
  for (const [devaName] of allPratyaharas) {
    // Add the Devanagari name itself
    canonicalKeyMap.set(devaName, devaName);

    // Extract start sound and marker
    const startSound = devaName[0];
    const marker = devaName.slice(1);

    const startVariants = soundVariants[startSound] || [];
    const endVariants = markerVariants[marker] || [];

    // Generate all combinations of romanized variants
    for (const sv of [startSound, ...startVariants]) {
      for (const ev of endVariants) {
        const romanKey = sv + ev;
        // Store lowercase for case-insensitive lookup
        if (!canonicalKeyMap.has(romanKey.toLowerCase())) {
          canonicalKeyMap.set(romanKey.toLowerCase(), devaName);
        }
      }
    }
  }
}

buildCanonicalKeyMap();

/**
 * Look up a pratyāhāra by any input scheme.
 * Returns the Devanagari name if found, null otherwise.
 * This allows script-agnostic input without runtime transliteration for known pratyāhāras.
 */
export function lookupPratyaharaCanonical(input: string): string | null {
  // Try direct lookup first
  if (allPratyaharas.has(input)) {
    return input;
  }
  // Try canonical key map (case-insensitive for roman)
  return canonicalKeyMap.get(input.toLowerCase()) || null;
}

/**
 * Get all valid pratyāhāra names (Devanagari)
 */
export function getAllPratyaharaNames(): string[] {
  return Array.from(allPratyaharas.keys());
}

// Build a flat list of all sounds with their positions
interface SoundPosition {
  sound: string;
  sutraIndex: number;
  positionInSutra: number;
}

const allSounds: SoundPosition[] = [];
for (const sutra of shivaSutras) {
  for (let i = 0; i < sutra.sounds.length; i++) {
    allSounds.push({
      sound: sutra.sounds[i],
      sutraIndex: sutra.index,
      positionInSutra: i,
    });
  }
}

// Build marker index for quick lookup
const markerToIndex = new Map<string, number>();
for (const sutra of shivaSutras) {
  markerToIndex.set(sutra.marker, sutra.index);
  // Also support without virama
  markerToIndex.set(sutra.marker.replace("्", ""), sutra.index);
}

export interface Pratyahara {
  name: string; // e.g., "अच्"
  startSound: string; // First sound
  endMarker: string; // The it-marker
  sounds: string[]; // All sounds included
  description: string; // What this pratyahara represents
}

// Common pratyaharas used in the Ashtadhyayi
export const commonPratyaharas: Pratyahara[] = [
  {
    name: "अच्",
    startSound: "अ",
    endMarker: "च्",
    sounds: ["अ", "इ", "उ", "ऋ", "ऌ", "ए", "ओ", "ऐ", "औ"],
    description: "All vowels (स्वर)",
  },
  {
    name: "हल्",
    startSound: "ह",
    endMarker: "ल्",
    sounds: [
      "ह",
      "य",
      "व",
      "र",
      "ल",
      "ञ",
      "म",
      "ङ",
      "ण",
      "न",
      "झ",
      "भ",
      "घ",
      "ढ",
      "ध",
      "ज",
      "ब",
      "ग",
      "ड",
      "द",
      "ख",
      "फ",
      "छ",
      "ठ",
      "थ",
      "च",
      "ट",
      "त",
      "क",
      "प",
      "श",
      "ष",
      "स",
      "ह",
    ],
    description: "All consonants (व्यञ्जन)",
  },
  {
    name: "अण्",
    startSound: "अ",
    endMarker: "ण्",
    sounds: ["अ", "इ", "उ"],
    description: "Simple vowels (मूल स्वर)",
  },
  {
    name: "अक्",
    startSound: "अ",
    endMarker: "क्",
    sounds: ["अ", "इ", "उ", "ऋ", "ऌ"],
    description: "Short simple vowels",
  },
  {
    name: "इक्",
    startSound: "इ",
    endMarker: "क्",
    sounds: ["इ", "उ", "ऋ", "ऌ"],
    description: "इ उ ऋ ऌ vowels",
  },
  {
    name: "एच्",
    startSound: "ए",
    endMarker: "च्",
    sounds: ["ए", "ओ", "ऐ", "औ"],
    description: "Diphthongs (सन्ध्यक्षर)",
  },
  {
    name: "यण्",
    startSound: "य",
    endMarker: "ण्",
    sounds: ["य", "व", "र", "ल"],
    description: "Semivowels (अन्तःस्थ)",
  },
  {
    name: "शल्",
    startSound: "श",
    endMarker: "ल्",
    sounds: ["श", "ष", "स", "ह"],
    description: "Sibilants and h (ऊष्म)",
  },
  {
    name: "झश्",
    startSound: "झ",
    endMarker: "श्",
    sounds: ["झ", "भ", "घ", "ढ", "ध", "ज", "ब", "ग", "ड", "द"],
    description: "Voiced non-nasal stops",
  },
  {
    name: "जश्",
    startSound: "ज",
    endMarker: "श्",
    sounds: ["ज", "ब", "ग", "ड", "द"],
    description: "Voiced unaspirated stops",
  },
  {
    name: "खर्",
    startSound: "ख",
    endMarker: "र्",
    sounds: ["ख", "फ", "छ", "ठ", "थ", "च", "ट", "त", "क", "प", "श", "ष", "स"],
    description: "Voiceless consonants",
  },
  {
    name: "चर्",
    startSound: "च",
    endMarker: "र्",
    sounds: ["च", "ट", "त", "क", "प", "श", "ष", "स"],
    description: "Voiceless unaspirated + sibilants",
  },
];

// Roman name mappings for common pratyaharas (case-insensitive lookup)
export const romanPratyaharaMap: Record<string, string> = {
  ac: "अच्",
  hal: "हल्",
  an: "अण्",
  ak: "अक्",
  ik: "इक्",
  ec: "एच्",
  yan: "यण्",
  sal: "शल्",
  jhas: "झश्",
  jas: "जश्",
  khar: "खर्",
  car: "चर्",
  // IAST variants
  aṇ: "अण्",
  iṅ: "इङ्",
  uṅ: "उङ्",
  eṅ: "एङ्",
  yaṇ: "यण्",
  śal: "शल्",
  jhaś: "झश्",
  jaś: "जश्",
};

/**
 * Expand a pratyahara to its constituent sounds
 */
export function expandPratyahara(pratyahara: string): string[] | null {
  if (pratyahara.length < 2) return null;

  // The first character is the starting sound
  const startSound = pratyahara[0];
  // The rest is the marker (may include virama)
  const marker = pratyahara.slice(1);

  // Find the marker in the sutras
  const endSutraIndex = markerToIndex.get(marker);
  if (endSutraIndex === undefined) return null;

  // Find the starting sound
  let startPos = -1;
  for (let i = 0; i < allSounds.length; i++) {
    if (allSounds[i].sound === startSound) {
      startPos = i;
      break;
    }
  }
  if (startPos === -1) return null;

  // Collect all sounds from start to the end of the marker's sutra
  const result: string[] = [];
  for (let i = startPos; i < allSounds.length; i++) {
    result.push(allSounds[i].sound);
    if (allSounds[i].sutraIndex === endSutraIndex) {
      // Check if this is the last sound in the sutra
      const sutra = shivaSutras[endSutraIndex - 1];
      if (allSounds[i].positionInSutra === sutra.sounds.length - 1) {
        break;
      }
    }
  }

  return result;
}

/**
 * Check if a sound belongs to a pratyahara
 */
export function isInPratyahara(sound: string, pratyahara: string): boolean {
  const sounds = expandPratyahara(pratyahara);
  return sounds ? sounds.includes(sound) : false;
}
