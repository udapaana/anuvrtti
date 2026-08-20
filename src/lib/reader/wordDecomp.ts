/**
 * wordDecomp.ts — what to show below the quiz for a word that is NOT in a grid.
 *
 * A paradigm table is the right exhibit only for सुबन्त and तिङन्त — words that
 * occupy a cell in a declension or conjugation. The other types are told apart
 * by a decomposition, not by coordinates (WORD-TYPES.md draws exactly this
 * grid/typology split):
 *
 *   - समास    → its विग्रह: राजपुरुषः resolves to राज्ञः पुरुषः
 *   - कृदन्त   → प्रकृति + affix: शूर + त्व → शूरत्वम्
 *   - तद्धित   →  "                       "
 *   - सन्धि    → the split at the join: वाक् + अत्र → वाग्
 *
 * All three are already authored in the corpus as free text — a `विग्रह:` note,
 * a cite `role` that ends "→ form", a सन्धि `en`/`text`. This module extracts the
 * decomposition from that text so the rail can show it as a structured strip
 * rather than leaving the slot empty for every non-declining word. Extraction is
 * deliberately conservative: a note it cannot parse yields nothing, so the strip
 * never shows a mangled analysis — the terms and cites already carry the fact.
 */

export interface Decomp {
  kind: 'विग्रह' | 'सन्धि' | 'प्रत्यय'; // compound analysis · sandhi split · affix chain
  label: string; // the human tag shown before the strip
  parts: string; // the decomposition itself, in Devanagari
}

interface Note {
  term?: string;
  en?: string;
  text?: string;
  cite?: string;
  role?: string;
}

/** The analysis half of a विग्रह note: everything after "विग्रह:" up to the
 *  first — or ; (which begin the English gloss or a sandhi aside). */
function vigrahaOf(notes: Note[]): string | null {
  for (const n of notes) {
    const t = n.text ?? '';
    const m = t.match(/विग्रह[:：]\s*([^—\-;]+)/);
    if (m) {
      const parts = m[1].trim();
      // A true compound analysis has two members (a space); a one-word "विग्रह"
      // that is really a sandhi split (सः + अपि) is caught by the सन्धि path
      // instead, so require the समास signal: the word is tagged समास/its type.
      if (parts) return parts;
    }
  }
  return null;
}

/** The affix chain for a कृदन्त/तद्धित, read off the citation role. Roles are
 *  authored as "<rule> — <prose> → <form>"; the tail after the last → is the
 *  derived form, and the prose often carries the "base + affix" shape. We show
 *  the rule's own arrow tail, which is the one reliable structured part. */
function affixChainOf(notes: Note[]): string | null {
  // Prefer a role that names an affix and ends in an arrow to the form.
  for (const n of notes) {
    const r = n.role ?? '';
    const arrow = r.lastIndexOf('→');
    if (arrow >= 0) {
      const tail = r.slice(arrow + 1).trim();
      // Pull the "X + affix" fragment if the role spells it out (… → base + aff → form)
      const chain = r.match(/([^\s—]+\s*\+\s*[^\s—→]+)\s*→\s*([^\s—]+)\s*$/);
      if (chain) return `${chain[1]} → ${chain[2]}`;
      if (tail && tail.length <= 24) return tail; // at least show the resulting form
    }
  }
  return null;
}

/** The सन्धि split: the "A + B" the join was built from. Authored in the सन्धि
 *  note's `en` or a विग्रह `text` as "X + Y". */
function sandhiSplitOf(notes: Note[]): string | null {
  for (const n of notes) {
    const src = `${n.en ?? ''} ${n.text ?? ''}`;
    const m = src.match(/([^\s—:：]+)\s*\+\s*([^\s—;,.।]+)/);
    if (m) return `${m[1]} + ${m[2]}`;
  }
  return null;
}

/**
 * Decide the one decomposition strip for a word, or null. Priority follows what
 * the word IS: a compound shows its विग्रह; a derivative its affix chain; a
 * plain joined word its सन्धि split. A सुबन्त/तिङन्त that is none of these gets
 * no strip — its paradigm grid is the exhibit instead.
 */
export function decompose(terms: string[], notes: Note[]): Decomp | null {
  const has = (t: string) => terms.includes(t);
  const isCompound = has('समास') || has('तत्पुरुष') || has('बहुव्रीहि') || has('द्वन्द्व') || has('अव्ययीभाव') || has('कर्मधारय') || has('द्विगु');
  const isDerived = has('कृदन्त') || has('तद्धित') || has('तृच्') || has('त्व') || has('मतुप्') || has('क्त्वा') || has('घञ्') || has('ल्युट्') || has('क्तिन्') || has('शतृ') || has('क्त');
  const isSandhi = has('सन्धि');

  if (isCompound) {
    const v = vigrahaOf(notes);
    if (v) return { kind: 'विग्रह', label: 'विग्रह', parts: v };
  }
  if (isDerived) {
    const c = affixChainOf(notes);
    if (c) return { kind: 'प्रत्यय', label: 'from', parts: c };
  }
  if (isSandhi) {
    const s = sandhiSplitOf(notes);
    if (s) return { kind: 'सन्धि', label: 'सन्धि', parts: s };
  }
  return null;
}
