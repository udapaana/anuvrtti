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
  | "iast"
  | "iso15919"
  | "slp1"
  | "hk"
  | "itrans"
  | "velthuis";

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

/** Transliterate text between scripts */
export async function transliterate(
  text: string,
  from: Script,
  to: Script,
): Promise<string> {
  await initTransliteration();
  if (from === to) return text;
  return shleshaTransliterate(text, from, to);
}

/** Get list of supported scripts */
export async function getScripts(): Promise<string[]> {
  await initTransliteration();
  return getSupportedScripts();
}
