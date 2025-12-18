/**
 * Vidyut-prakriya integration for Sanskrit word derivations
 *
 * NOTE: vidyut-prakriya is not yet available as an npm package.
 * To enable this functionality:
 *
 * 1. Clone https://github.com/ambuda-org/vidyut
 * 2. Install Rust and wasm-pack
 * 3. Build WASM: cd vidyut-prakriya && wasm-pack build --target web
 * 4. Copy the generated pkg/ folder to static/wasm/vidyut-prakriya/
 * 5. Update this file to import from the built WASM module
 *
 * For now, this provides a stub interface that can be completed later.
 */

export interface PrakriyaStep {
  rule: string;
  result: string;
}

export interface Prakriya {
  word: string;
  steps: PrakriyaStep[];
}

export interface DhatuInfo {
  dhatu: string;
  meaning: string;
  gana: number;
}

let initialized = false;

/** Initialize the WASM module (stub) */
export async function initPrakriya(): Promise<boolean> {
  if (initialized) return true;

  // TODO: Load WASM module when available
  // try {
  //   const wasm = await import('/wasm/vidyut-prakriya/vidyut_prakriya.js');
  //   await wasm.default();
  //   initialized = true;
  //   return true;
  // } catch (e) {
  //   console.warn('vidyut-prakriya WASM not available:', e);
  //   return false;
  // }

  console.warn('vidyut-prakriya WASM not yet integrated');
  return false;
}

/** Check if prakriya functionality is available */
export function isPrakriyaAvailable(): boolean {
  return initialized;
}

/**
 * Derive a tinanta (verb form)
 * @param dhatu - The verbal root (e.g., "भू")
 * @param lakara - The tense/mood (e.g., "lat" for present)
 * @param purusha - Person (prathama, madhyama, uttama)
 * @param vacana - Number (eka, dvi, bahu)
 * @param pada - Voice (parasmai, atmane)
 */
export async function deriveTinanta(
  dhatu: string,
  lakara: string,
  purusha: string,
  vacana: string,
  pada: string
): Promise<Prakriya | null> {
  if (!initialized) {
    await initPrakriya();
  }

  // TODO: Call WASM function when available
  // return vyakarana.derive_tinanta(dhatu, lakara, purusha, vacana, pada);

  return null;
}

/**
 * Derive a subanta (noun form)
 * @param pratipadika - The nominal stem
 * @param linga - Gender (pum, stri, napumsaka)
 * @param vibhakti - Case (1-7)
 * @param vacana - Number (eka, dvi, bahu)
 */
export async function deriveSubanta(
  pratipadika: string,
  linga: string,
  vibhakti: number,
  vacana: string
): Promise<Prakriya | null> {
  if (!initialized) {
    await initPrakriya();
  }

  // TODO: Call WASM function when available
  return null;
}

/**
 * Get all forms of a dhatu across tenses, persons, numbers
 */
export async function getDhatuForms(dhatu: string): Promise<Map<string, Prakriya> | null> {
  if (!initialized) {
    await initPrakriya();
  }

  // TODO: Call WASM function when available
  return null;
}
