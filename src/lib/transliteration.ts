import init, {
  transliterate as shleshaTransliterate,
  getSupportedScripts,
  WasmShlesha,
} from "shlesha";

let initialized = false;
let nandinagariLoaded = false;

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

/** Initialize the WASM module */
export async function initTransliteration(): Promise<void> {
  if (initialized) return;
  await init();
  initialized = true;
}

let nandinagariTransliterator: WasmShlesha | null = null;

/** Load nandinagari schema dynamically (bundled in /schemas/) */
async function ensureNandinagari(): Promise<WasmShlesha> {
  if (nandinagariTransliterator) return nandinagariTransliterator;
  const yaml = await fetch('/schemas/nandinagari.yaml').then(r => r.text());
  const t = new WasmShlesha();
  t.loadSchemaFromString(yaml, 'nandinagari');
  nandinagariTransliterator = t;
  nandinagariLoaded = true;
  return t;
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
  if (from === 'nandinagari' || to === 'nandinagari') {
    const t = await ensureNandinagari();
    if (from === 'nandinagari' && to !== 'nandinagari') {
      // Nandinagari → intermediate IAST → target
      const iast = t.transliterate(text, 'nandinagari', 'iast');
      return to === 'iast' ? iast : shleshaTransliterate(iast, 'iast', to);
    } else if (to === 'nandinagari' && from !== 'nandinagari') {
      // source → intermediate IAST → Nandinagari
      const iast = from === 'iast' ? text : shleshaTransliterate(text, from, 'iast');
      return t.transliterate(iast, 'iast', 'nandinagari');
    }
    return t.transliterate(text, from, to);
  }
  return shleshaTransliterate(text, from, to);
}

/** Get list of supported scripts */
export async function getScripts(): Promise<string[]> {
  await initTransliteration();
  return getSupportedScripts();
}
