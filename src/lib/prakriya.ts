/**
 * Vidyut-prakriya integration for Sanskrit word derivations
 *
 * This module provides a TypeScript wrapper around the vidyut-prakriya WASM module,
 * enabling step-by-step Sanskrit word derivations in the browser.
 */

// Types matching the WASM output structure
export interface WebStepTerm {
  text: string;
  wasChanged: boolean;
}

export interface WebStep {
  rule: {
    source: string; // "ashtadhyayi", "varttika", "dhatupatha", etc.
    code: string; // e.g., "7.3.84"
  };
  result: WebStepTerm[];
}

export interface WebPrakriya {
  text: string;
  history: WebStep[];
}

// Simplified types for our UI
export interface PrakriyaStep {
  rule: string; // Combined source + code, e.g., "7.3.84" or "vt:1.1.5"
  ruleCode: string; // Just the code
  ruleSource: string; // The source
  result: string; // Combined result text
  terms: WebStepTerm[]; // Individual terms with change tracking
}

export interface Prakriya {
  text: string;
  steps: PrakriyaStep[];
}

// Enums from vidyut-prakriya (will be populated after WASM init)
export type Lakara =
  | "Lat"
  | "Lit"
  | "Lut"
  | "Lrt"
  | "Lot"
  | "Lan"
  | "VidhiLin"
  | "AshirLin"
  | "Lun"
  | "Lrn";
export type Prayoga = "Kartari" | "Karmani" | "Bhave";
export type Purusha = "Prathama" | "Madhyama" | "Uttama";
export type Vacana = "Eka" | "Dvi" | "Bahu";
export type Linga = "Pum" | "Stri" | "Napumsaka";
export type Vibhakti =
  | "Prathama"
  | "Dvitiya"
  | "Trtiya"
  | "Caturthi"
  | "Panchami"
  | "Sasthi"
  | "Saptami";
export type Gana =
  | "Bhvadi"
  | "Adadi"
  | "Juhotyadi"
  | "Divadi"
  | "Svadi"
  | "Tudadi"
  | "Rudhadi"
  | "Tanadi"
  | "Kryadi"
  | "Curadi";

// WASM module state
let vidyutModule: VidyutModule | null = null;
let vidyutInstance: VidyutInstance | null = null;
let initPromise: Promise<boolean> | null = null;

// Type definitions for the WASM module
interface VidyutModule {
  initWasm: () => Promise<void>;
  Vidyut: new () => VidyutInstance;
  Gana: Record<Gana, number>;
  Lakara: Record<Lakara, number>;
  Prayoga: Record<Prayoga, number>;
  Purusha: Record<Purusha, number>;
  Vacana: Record<Vacana, number>;
  Linga: Record<Linga, number>;
  Vibhakti: Record<Vibhakti, number>;
}

interface VidyutInstance {
  deriveTinantas(args: TinantaArgs): WebPrakriya[];
  deriveSubantas(args: SubantaArgs): WebPrakriya[];
  deriveKrdantas(args: KrdantaArgs): WebPrakriya[];
  deriveDhatus(args: DhatuArgs): WebPrakriya[];
}

interface DhatuArgs {
  aupadeshika: string;
  gana: Gana;
  antargana?: string;
  sanadi?: string[];
  prefixes?: string[];
}

interface TinantaArgs {
  dhatu: DhatuArgs;
  lakara: Lakara;
  prayoga: Prayoga;
  purusha: Purusha;
  vacana: Vacana;
  pada?: string;
}

interface SubantaArgs {
  pratipadika: { basic: string } | { krdanta: KrdantaArgs };
  linga: Linga;
  vibhakti: Vibhakti;
  vacana: Vacana;
}

interface KrdantaArgs {
  dhatu: DhatuArgs;
  krt: string;
  lakara?: Lakara;
  prayoga?: Prayoga;
}

/** Initialize the WASM module */
export async function initPrakriya(): Promise<boolean> {
  if (vidyutInstance) return true;

  // Prevent multiple simultaneous init attempts
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      // Dynamic import of the WASM wrapper - use variable to prevent Vite from resolving at build time
      const wasmPath = "/wasm/vidyut-prakriya/vidyut-prakriya.js";
      const module = await import(/* @vite-ignore */ wasmPath);
      vidyutModule = module as VidyutModule;

      // Initialize the WASM binary
      await module.initWasm();

      // Create the Vidyut instance
      vidyutInstance = new module.Vidyut();

      console.log("vidyut-prakriya WASM initialized successfully");
      return true;
    } catch (e) {
      console.warn("vidyut-prakriya WASM not available:", e);
      initPromise = null;
      return false;
    }
  })();

  return initPromise;
}

/** Check if prakriya functionality is available */
export function isPrakriyaAvailable(): boolean {
  return vidyutInstance !== null;
}

/** Convert WebPrakriya to our simplified Prakriya format */
function toPrakriya(wp: WebPrakriya): Prakriya {
  return {
    text: wp.text,
    steps: wp.history.map((step) => ({
      rule:
        step.rule.source === "ashtadhyayi"
          ? step.rule.code
          : `${step.rule.source}:${step.rule.code}`,
      ruleCode: step.rule.code,
      ruleSource: step.rule.source,
      result: step.result.map((t) => t.text).join(" + "),
      terms: step.result,
    })),
  };
}

/**
 * Derive a tinanta (verb form)
 * @param dhatuSlp1 - The verbal root in SLP1 (e.g., "BU" for भू)
 * @param gana - The gana (verb class)
 * @param lakara - The tense/mood
 * @param prayoga - Voice (kartari, karmani, bhave)
 * @param purusha - Person (prathama, madhyama, uttama)
 * @param vacana - Number (eka, dvi, bahu)
 */
export async function deriveTinanta(
  dhatuSlp1: string,
  gana: Gana,
  lakara: Lakara,
  prayoga: Prayoga,
  purusha: Purusha,
  vacana: Vacana,
): Promise<Prakriya[]> {
  if (!(await initPrakriya()) || !vidyutInstance) {
    return [];
  }

  try {
    const results = vidyutInstance.deriveTinantas({
      dhatu: {
        aupadeshika: dhatuSlp1,
        gana,
      },
      lakara,
      prayoga,
      purusha,
      vacana,
    });

    return results.map(toPrakriya);
  } catch (e) {
    console.error("Error deriving tinanta:", e);
    return [];
  }
}

/**
 * Derive a subanta (noun form)
 * @param pratipadikaSlp1 - The nominal stem in SLP1
 * @param linga - Gender
 * @param vibhakti - Case
 * @param vacana - Number
 */
export async function deriveSubanta(
  pratipadikaSlp1: string,
  linga: Linga,
  vibhakti: Vibhakti,
  vacana: Vacana,
): Promise<Prakriya[]> {
  if (!(await initPrakriya()) || !vidyutInstance) {
    return [];
  }

  try {
    const results = vidyutInstance.deriveSubantas({
      pratipadika: { basic: pratipadikaSlp1 },
      linga,
      vibhakti,
      vacana,
    });

    return results.map(toPrakriya);
  } catch (e) {
    console.error("Error deriving subanta:", e);
    return [];
  }
}

/**
 * Common dhatus for examples (aupadeshika form in SLP1)
 * These are the forms as they appear in the dhatupatha with markers
 */
export const COMMON_DHATUS: Record<
  string,
  { aupadeshika: string; gana: Gana; meaning: string }
> = {
  bhU: { aupadeshika: "BU", gana: "Bhvadi", meaning: "to be, become" },
  gam: { aupadeshika: "ga\\mx~", gana: "Bhvadi", meaning: "to go" },
  kR: { aupadeshika: "qukf\\Y", gana: "Tanadi", meaning: "to do, make" },
  paTh: { aupadeshika: "paWa~", gana: "Bhvadi", meaning: "to read, recite" },
  likh: { aupadeshika: "liKa~", gana: "Tudadi", meaning: "to write" },
  dRz: { aupadeshika: "df\\Si~r", gana: "Bhvadi", meaning: "to see" },
  zru: { aupadeshika: "Sru\\", gana: "Bhvadi", meaning: "to hear" },
  vad: { aupadeshika: "vada~", gana: "Bhvadi", meaning: "to speak" },
  pac: { aupadeshika: "qupa\\ca~^z", gana: "Bhvadi", meaning: "to cook" },
  nI: { aupadeshika: "RI\\Y", gana: "Bhvadi", meaning: "to lead" },
};

/**
 * Get a derivation example for a given dhatu
 */
export async function getExampleDerivation(
  dhatuKey: string,
  lakara: Lakara = "Lat",
): Promise<Prakriya | null> {
  const dhatu = COMMON_DHATUS[dhatuKey];
  if (!dhatu) return null;

  const results = await deriveTinanta(
    dhatu.aupadeshika,
    dhatu.gana,
    lakara,
    "Kartari",
    "Prathama",
    "Eka",
  );

  return results[0] || null;
}
