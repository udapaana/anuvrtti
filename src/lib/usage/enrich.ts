/**
 * enrich.ts — what the corpus knows about a form, for the surfaces that keep
 * words rather than readings.
 *
 * The word bank stores what the reader tapped: a surface form, a gloss, and a
 * legacy display string ("p.p. e.v. laṭ") inherited from the primer. It stores
 * no grammar, and it should not start to — a copy of the word's identity inside
 * localStorage would be one more thing to go stale while the derivation
 * pipeline moves underneath it.
 *
 * So the deck, the review card and the workbook JOIN instead, at render time,
 * on the one key they all already have: the surface form. quiz-cells.json is
 * keyed by exactly that, is 200KB against usage.json's 2.3MB, and carries
 * precisely what a flashcard's grammar line needs — the settled लिङ्ग, and
 * which (विभक्ति, वचन) cells the form can occupy. When those cells name exactly
 * one विभक्ति, the form DETERMINES its case, and that is the corpus's own
 * fairness rule for asking: the reader's quiz asks nothing the form cannot
 * answer, and the review card holds itself to the same standard.
 *
 * Fetched once and shared; a page that renders before the fetch lands simply
 * shows the word without chips, exactly as it did before this existed.
 */
import { browser } from '$app/environment';

export interface FormIdentity {
  /** The stem's settled gender, or null where the corpus could not tell. */
  linga: string | null;
  /** Every विभक्ति this form can be. One entry = the form determines its case. */
  vibhaktis: string[];
  /** The (विभक्ति, वचन) cells the form occupies. */
  cells?: Array<[string, string]>;
}

let cache: Record<string, FormIdentity> | null = null;
let inflight: Promise<Record<string, FormIdentity>> | null = null;

const deaccent = (s: string) => s.replace(/[॑-॔᳐-᳿꣠-ꣿ]/g, '');

export async function loadIdentities(): Promise<Record<string, FormIdentity>> {
  if (!browser) return {};
  if (cache) return cache;
  if (!inflight) {
    inflight = fetch('/data/quiz-cells.json')
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}))
      .then((j) => (cache = j));
  }
  return inflight;
}

/** The corpus's view of this surface form, once loadIdentities has resolved. */
export function identify(form: string): FormIdentity | null {
  return cache?.[deaccent(form)] ?? null;
}

/**
 * The one question the form itself can answer, or null.
 *
 * Asking "which विभक्ति?" of a form that is two cases marks the other one
 * wrong — the mistake the reader's quiz was rebuilt to avoid (वनम् is प्रथमा
 * AND द्वितीया; every neuter is). So a card gets a question only when the
 * engine says the form determines exactly one.
 */
export function cellQuestion(form: string): { answer: string; options: string[] } | null {
  const id = identify(form);
  if (!id || id.vibhaktis.length !== 1) return null;
  const answer = id.vibhaktis[0];
  const POOL = ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'];
  // Deterministic distractors, seeded by the form — the same options every
  // session, so the card does not reshuffle under a returning reader.
  let h = 0;
  for (let i = 0; i < form.length; i++) h = (h * 31 + form.charCodeAt(i)) | 0;
  h = Math.abs(h);
  const others = POOL.filter((v) => v !== answer);
  const picks: string[] = [];
  for (let i = 0; i < 3 && others.length; i++) picks.push(others.splice((h + i * 7) % others.length, 1)[0]);
  const options = [...picks, answer].sort((a, b) => POOL.indexOf(a) - POOL.indexOf(b));
  return { answer, options };
}

/** `reader:ex042` → a link into the reading the word was kept from. */
export function sourceLink(lessonId: string): { href: string; label: string } | null {
  const m = lessonId?.match(/^reader:(.+)$/);
  return m ? { href: `/reader?reading=${m[1]}`, label: m[1] } : null;
}
