import type { RawSutra, Sutra, SutraType, AnuvrttiRef, PadaInfo } from './types';

/** Convert numeric ID "11001" to display ID "1.1.1" */
export function numericToDisplayId(numId: string): string {
  if (numId.length < 4) return numId;
  const adhyaya = numId[0];
  const pada = numId[1];
  const number = parseInt(numId.slice(2), 10).toString();
  return `${adhyaya}.${pada}.${number}`;
}

/** Convert display ID "1.1.1" to numeric ID "11001" */
export function displayToNumericId(displayId: string): string {
  const parts = displayId.split('.');
  if (parts.length !== 3) return displayId;
  const [a, p, n] = parts;
  return `${a}${p}${n.padStart(3, '0')}`;
}

/** Parse sūtra type from raw type string like "S$वृद्धिसंज्ञा$" */
function parseType(typeStr: string): { type: SutraType; name: string } {
  if (!typeStr) return { type: 'other', name: '' };

  const match = typeStr.match(/^([A-Z])\$(.+)\$$/);
  if (!match) return { type: 'other', name: typeStr };

  const [, code, name] = match;
  const typeMap: Record<string, SutraType> = {
    'S': 'samjna',      // संज्ञा - definition
    'P': 'paribhasha',  // परिभाषा - interpretive rule
    'V': 'vidhi',       // विधि - operational rule
    'A': 'adhikara',    // अधिकार - governing rule
    'T': 'atidesa',     // अतिदेश - extension
  };

  return { type: typeMap[code] || 'other', name };
}

/** Parse anuvṛtti references from string like "वृद्धिः$11001##गुणः$11002" */
function parseAnuvrtti(anStr: string): AnuvrttiRef[] {
  if (!anStr) return [];

  return anStr.split('##').filter(Boolean).map(ref => {
    const [term, numId] = ref.split('$');
    return {
      term,
      fromNumericId: numId,
      fromId: numericToDisplayId(numId)
    };
  });
}

/** Parse pada-ccheda from string like "वृद्धिः$S$1$1$##आत्-ऐच्$S$1$1$" */
function parsePadaCcheda(pcStr: string): PadaInfo[] {
  if (!pcStr) return [];

  return pcStr.split('##').filter(Boolean).map(part => {
    const segments = part.split('$');
    const word = segments[0];
    // segments[1] = S (source type), segments[2] = vibhakti, segments[3] = vacana
    const vibhakti = segments[2] && segments[3]
      ? `${segments[2]}.${segments[3]}`
      : undefined;
    return { word, vibhakti };
  });
}

/** Parse a raw sūtra into processed form */
export function parseSutra(raw: RawSutra): Sutra {
  const { type, name } = parseType(raw.type);

  return {
    id: numericToDisplayId(raw.i),
    numericId: raw.i,
    adhyaya: parseInt(raw.a, 10),
    pada: parseInt(raw.p, 10),
    number: parseInt(raw.n, 10),
    text: raw.s,
    textRoman: raw.e,
    expanded: raw.ss,
    type,
    typeName: name,
    anuvrtti: parseAnuvrtti(raw.an),
    adhikara: raw.ad ? raw.ad.split('##').filter(Boolean) : [],
    padaCcheda: parsePadaCcheda(raw.pc)
  };
}

/** Parse all sūtras from raw data */
export function parseSutras(rawData: { data: RawSutra[] }): Sutra[] {
  return rawData.data.map(parseSutra);
}
