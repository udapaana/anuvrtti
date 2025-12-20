/**
 * Adhyaya (chapter) metadata for the Ashtadhyayi
 * Each adhyaya deals with specific grammatical topics
 */

export interface AdhyayaInfo {
  number: number;
  title: string;        // Sanskrit title
  topic: string;        // English description
}

export const adhyayas: AdhyayaInfo[] = [
  {
    number: 1,
    title: 'संज्ञा-परिभाषा',
    topic: 'Technical terms (samjna) and interpretive rules (paribhasha)'
  },
  {
    number: 2,
    title: 'संहिता-कारक',
    topic: 'Compound formation (samasa) and case relations (karaka)'
  },
  {
    number: 3,
    title: 'प्रत्यय-विधान',
    topic: 'Suffix introduction - krt and other primary suffixes'
  },
  {
    number: 4,
    title: 'तद्धित',
    topic: 'Secondary suffixes (taddhita) and nominal derivation'
  },
  {
    number: 5,
    title: 'तद्धित',
    topic: 'Secondary suffixes continued'
  },
  {
    number: 6,
    title: 'आदेश-सन्धि',
    topic: 'Substitutions (adesa) and euphonic combinations (sandhi)'
  },
  {
    number: 7,
    title: 'आदेश',
    topic: 'Substitutions for affixes and bases'
  },
  {
    number: 8,
    title: 'त्रिपादी',
    topic: 'The tripadi - rules that don\'t trigger earlier rules'
  }
];

export function getAdhyayaInfo(num: number): AdhyayaInfo | undefined {
  return adhyayas.find(a => a.number === num);
}
