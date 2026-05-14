/**
 * Map free-text grammar tags appearing in Bālabodhinī lesson grammar_focus
 * fields to grammar path IDs. Used by the "this lesson exercises:" footer
 * on each lesson page (the reading → grammar bridge).
 *
 * Detection is substring-based: a lesson with grammar_focus including "laṭ"
 * gets linked to the tinganta-lat path. Order matters — longer/more-specific
 * keys come first so "laṭ ekavacana" matches before just "laṭ".
 */

/** Tag → grammar path id. */
export const GRAMMAR_TAG_TO_PATH: Record<string, string> = {
  // tiṅanta — verb tenses/moods
  'laṭ':         'tinganta-lat',
  'loṭ':         'tinganta-lot',
  'laṅ':         'tinganta-lang',
  'vidhiliṅ':    'tinganta-vidhiling',
  'liṅ':         'tinganta-vidhiling',
  'lṛṭ':         'tinganta-lrt',
  'luṭ':         'tinganta-lut',
  'liṭ':         'tinganta-lit',
  'luṅ':         'tinganta-lung',
  'āśīrliṅ':     'tinganta-ashirling',
  'lṛṅ':         'tinganta-lrng',
  'gaṇa':        'dhatu-ganas',
  'gaṇāḥ':       'dhatu-ganas',
  'dhātu':       'dhatu-parichaya',

  // subanta — noun stems & cases
  'akārānta':    'subanta-a-stems',
  'ākārānta':    'subanta-aa-stems',
  'ikārānta':    'subanta-i-u-stems',
  'ukārānta':    'subanta-i-u-stems',
  'halanta':     'subanta-consonant-stems',
  'prātipadika': 'subanta-pratipadika',

  // kṛdanta — verbal derivatives
  'ktvā':        'kridanta-ktva',
  'tumun':       'kridanta-tumun',
  'śatṛ':        'kridanta-shatr-shanac',
  'śānac':       'kridanta-shatr-shanac',
  'kta':         'kridanta-kta-ktavatu',
  'ktavatu':     'kridanta-kta-ktavatu',
  'tavya':       'kridanta-tavya-aniya',
  'anīya':       'kridanta-tavya-aniya',

  // sandhi
  'svarasandhi': 'sandhi-vowel',
  'visargasandhi': 'sandhi-visarga',
  'vyañjanasandhi': 'sandhi-consonant',

  // taddhita
  'matup':       'taddhita-matup',
  'vatup':       'taddhita-matup',
  'tva':         'taddhita-tva-tal',
  'tal':         'taddhita-tva-tal',
  'aṇ':          'taddhita-an-ika',
  'ṭhak':        'taddhita-an-ika',

  // karaka, samasa
  'kāraka':      'karaka-intro',
  'samāsa':      'samasa-intro',

  // prakaraṇa deep dives (a few key concept tags)
  'it-saṃjñā':   'prakarana-it-samjna',
  'saṃjñā':      'prakarana-samjna',
  'ātmanepada':  'prakarana-atmanepada',
  'tripādī':     'prakarana-tripadi',
};

/**
 * Given a lesson's grammar_focus free-text, return the list of unique
 * grammar path IDs the lesson exercises.
 *
 * Substring match (case-sensitive on diacritics; lesson data is consistently
 * IAST with diacritics). Returns IDs in stable order (first-encountered).
 */
export function pathsForGrammarFocus(focus: string | undefined): string[] {
  if (!focus) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  // Sort tags longest-first so "vidhiliṅ" matches before "liṅ".
  const tags = Object.keys(GRAMMAR_TAG_TO_PATH).sort((a, b) => b.length - a.length);
  for (const tag of tags) {
    if (focus.includes(tag)) {
      const id = GRAMMAR_TAG_TO_PATH[tag];
      if (!seen.has(id)) {
        seen.add(id);
        out.push(id);
      }
    }
  }
  return out;
}
