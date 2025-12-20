/**
 * Pratyahara system based on the Shiva Sutras (Maheshvara Sutras)
 * These 14 sutras define the sound system of Sanskrit and allow
 * compact references to groups of sounds using pratyaharas.
 */

export interface ShivaSutra {
  index: number;
  text: string;        // Devanagari
  sounds: string[];    // Individual sounds (varnas)
  marker: string;      // The it-marker at the end
}

// The 14 Shiva Sutras
export const shivaSutras: ShivaSutra[] = [
  { index: 1, text: 'अइउण्', sounds: ['अ', 'इ', 'उ'], marker: 'ण्' },
  { index: 2, text: 'ऋऌक्', sounds: ['ऋ', 'ऌ'], marker: 'क्' },
  { index: 3, text: 'एओङ्', sounds: ['ए', 'ओ'], marker: 'ङ्' },
  { index: 4, text: 'ऐऔच्', sounds: ['ऐ', 'औ'], marker: 'च्' },
  { index: 5, text: 'हयवरट्', sounds: ['ह', 'य', 'व', 'र'], marker: 'ट्' },
  { index: 6, text: 'लण्', sounds: ['ल'], marker: 'ण्' },
  { index: 7, text: 'ञमङणनम्', sounds: ['ञ', 'म', 'ङ', 'ण', 'न'], marker: 'म्' },
  { index: 8, text: 'झभञ्', sounds: ['झ', 'भ'], marker: 'ञ्' },
  { index: 9, text: 'घढधष्', sounds: ['घ', 'ढ', 'ध'], marker: 'ष्' },
  { index: 10, text: 'जबगडदश्', sounds: ['ज', 'ब', 'ग', 'ड', 'द'], marker: 'श्' },
  { index: 11, text: 'खफछठथचटतव्', sounds: ['ख', 'फ', 'छ', 'ठ', 'थ', 'च', 'ट', 'त'], marker: 'व्' },
  { index: 12, text: 'कपय्', sounds: ['क', 'प'], marker: 'य्' },
  { index: 13, text: 'शषसर्', sounds: ['श', 'ष', 'स'], marker: 'र्' },
  { index: 14, text: 'हल्', sounds: ['ह'], marker: 'ल्' },
];

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
  markerToIndex.set(sutra.marker.replace('्', ''), sutra.index);
}

export interface Pratyahara {
  name: string;           // e.g., "अच्"
  startSound: string;     // First sound
  endMarker: string;      // The it-marker
  sounds: string[];       // All sounds included
  description: string;    // What this pratyahara represents
}

// Common pratyaharas used in the Ashtadhyayi
export const commonPratyaharas: Pratyahara[] = [
  { name: 'अच्', startSound: 'अ', endMarker: 'च्', sounds: ['अ', 'इ', 'उ', 'ऋ', 'ऌ', 'ए', 'ओ', 'ऐ', 'औ'], description: 'All vowels (स्वर)' },
  { name: 'हल्', startSound: 'ह', endMarker: 'ल्', sounds: ['ह', 'य', 'व', 'र', 'ल', 'ञ', 'म', 'ङ', 'ण', 'न', 'झ', 'भ', 'घ', 'ढ', 'ध', 'ज', 'ब', 'ग', 'ड', 'द', 'ख', 'फ', 'छ', 'ठ', 'थ', 'च', 'ट', 'त', 'क', 'प', 'श', 'ष', 'स', 'ह'], description: 'All consonants (व्यञ्जन)' },
  { name: 'अण्', startSound: 'अ', endMarker: 'ण्', sounds: ['अ', 'इ', 'उ'], description: 'Simple vowels (मूल स्वर)' },
  { name: 'अक्', startSound: 'अ', endMarker: 'क्', sounds: ['अ', 'इ', 'उ', 'ऋ', 'ऌ'], description: 'Short simple vowels' },
  { name: 'इक्', startSound: 'इ', endMarker: 'क्', sounds: ['इ', 'उ', 'ऋ', 'ऌ'], description: 'इ उ ऋ ऌ vowels' },
  { name: 'एच्', startSound: 'ए', endMarker: 'च्', sounds: ['ए', 'ओ', 'ऐ', 'औ'], description: 'Diphthongs (सन्ध्यक्षर)' },
  { name: 'यण्', startSound: 'य', endMarker: 'ण्', sounds: ['य', 'व', 'र', 'ल'], description: 'Semivowels (अन्तःस्थ)' },
  { name: 'शल्', startSound: 'श', endMarker: 'ल्', sounds: ['श', 'ष', 'स', 'ह'], description: 'Sibilants and h (ऊष्म)' },
  { name: 'झश्', startSound: 'झ', endMarker: 'श्', sounds: ['झ', 'भ', 'घ', 'ढ', 'ध', 'ज', 'ब', 'ग', 'ड', 'द'], description: 'Voiced non-nasal stops' },
  { name: 'जश्', startSound: 'ज', endMarker: 'श्', sounds: ['ज', 'ब', 'ग', 'ड', 'द'], description: 'Voiced unaspirated stops' },
  { name: 'खर्', startSound: 'ख', endMarker: 'र्', sounds: ['ख', 'फ', 'छ', 'ठ', 'थ', 'च', 'ट', 'त', 'क', 'प', 'श', 'ष', 'स'], description: 'Voiceless consonants' },
  { name: 'चर्', startSound: 'च', endMarker: 'र्', sounds: ['च', 'ट', 'त', 'क', 'प', 'श', 'ष', 'स'], description: 'Voiceless unaspirated + sibilants' },
];

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
