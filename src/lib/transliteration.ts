import init, {
  transliterate as shleshaTransliterate,
  getSupportedScripts,
} from "shlesha";

let initialized = false;

export type Script =
  | "devanagari"
  | "telugu"
  | "kannada"
  | "malayalam"
  | "tamil"
  | "bengali"
  | "gujarati"
  | "gurmukhi"
  | "odia"
  | "sinhala"
  | "nandinagari"
  | "iast"
  | "iso15919"
  | "slp1"
  | "hk"
  | "itrans"
  | "velthuis"
  | "english";  // passthrough — not an Indic script, never transliterated

/** Scripts that can be transliterated between. English and other non-Indic values are passthroughs. */
export const INDIC_SCRIPTS = new Set<Script>([
  "devanagari", "telugu", "kannada", "malayalam", "tamil",
  "bengali", "gujarati", "gurmukhi", "odia", "sinhala",
  "nandinagari",
  "iast", "iso15919", "slp1", "hk", "itrans", "velthuis",
]);

const scriptLabels: Record<Script, string> = {
  devanagari: "देवनागरी",
  iast: "IAST",
  slp1: "SLP1",
  hk: "Harvard-Kyoto",
  itrans: "ITRANS",
  iso15919: "ISO 15919",
};

export { scriptLabels };

/**
 * Initialize the WASM module.
 *
 * Memoise the promise, not just the finished flag. `initialized` only flips
 * AFTER `init()` resolves, so every caller arriving during that first await
 * still saw `false` and started an `init()` of its own. A page like the
 * reader's paradigm grid mounts dozens of <Sanskrit> in one tick, so that is
 * dozens of concurrent initialisations of the same wasm-bindgen module rather
 * than one. Nothing observed has been pinned on it — this is a latent race, not
 * a diagnosed failure — but awaiting one shared promise is what the flag was
 * reaching for anyway.
 *
 * On failure the memo is cleared: caching a rejected promise would turn one
 * bad fetch into a permanently dead transliterator for the rest of the session.
 */
let initPromise: Promise<void> | null = null;
export async function initTransliteration(): Promise<void> {
  if (initialized) return;
  if (!initPromise) {
    initPromise = init()
      .then(() => {
        initialized = true;
      })
      .catch((e) => {
        initPromise = null;
        throw e;
      });
  }
  return initPromise;
}

/** Transliterate text between scripts */
export async function transliterate(
  text: string,
  from: Script,
  to: Script,
): Promise<string> {
  if (!INDIC_SCRIPTS.has(from)) return text;
  await initTransliteration();
  if (from === to) return text;
  return shleshaTransliterate(text, from, to);
}

/** Get list of supported scripts */
export async function getScripts(): Promise<string[]> {
  await initTransliteration();
  return getSupportedScripts();
}
