/**
 * Parse vidvat-shaped sūtra YAML into anuvrtti's `Sutra` type.
 *
 * vidvat (data/sutras/*.yaml) is the authoring source — clean structured records:
 *   { id:"11001", ref:"1.1.1", a,p,n, s, iast, type:"S", typeName:"saṃjñā",
 *     pada:[...], adhikara:"", inherits:[{word,from:"1.1.1"}], rule, ... }
 * The .yaml files are copied verbatim into src/lib/data/sutras/ (sync = cp), and
 * imported directly (Vite parses at build). This produces the SAME `Sutra` shape
 * the app already consumes — only the source format changed.
 */
import type { Sutra, SutraType, AnuvrttiRef, PadaInfo } from './types';

export interface VidvatSutra {
  id: string; // "11001"
  ref: string; // "1.1.1"
  a: number;
  p: number;
  n: number;
  s: string; // Devanagari
  iast: string;
  type: string; // single-letter code: S/P/V/AD/AT
  typeName: string; // e.g. "saṃjñā"
  pada?: string[];
  adhikara?: string;
  inherits?: { word: string; from: string }[];
  rule?: string;
}

const TYPE_MAP: Record<string, SutraType> = {
  S: 'samjna',
  P: 'paribhasha',
  V: 'vidhi',
  AD: 'adhikara',
  AT: 'atidesa',
};

function numericId(ref: string): string {
  const [a, p, n] = ref.split('.');
  return `${a}${p}${n.padStart(3, '0')}`;
}

export function parseVidvatSutra(r: VidvatSutra): Sutra {
  const anuvrtti: AnuvrttiRef[] = (r.inherits ?? []).map((e) => ({
    term: e.word,
    fromId: e.from,
    fromNumericId: numericId(e.from),
  }));
  const padaCcheda: PadaInfo[] = (r.pada ?? []).map((w) => ({ word: w, vibhakti: undefined }));
  return {
    id: r.ref,
    numericId: r.id,
    adhyaya: r.a,
    pada: r.p,
    number: r.n,
    text: r.s,
    textRoman: r.iast ?? '',
    expanded: '', // vidvat has no expanded-with-anuvṛtti field; unused by UI
    type: TYPE_MAP[r.type] ?? 'other',
    typeName: r.typeName ?? '',
    anuvrtti,
    adhikara: r.adhikara ? r.adhikara.split('##').filter(Boolean) : [],
    padaCcheda,
  };
}
