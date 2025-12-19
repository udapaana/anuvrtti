import { parseSutras } from '$lib/data/parser';
import type { RawSutra, Sutra, SutraType } from '$lib/data/types';

interface TypeGroup {
  type: SutraType;
  label: string;
  labelSanskrit: string;
  description: string;
  sutras: Sutra[];
}

const typeOrder: SutraType[] = ['samjna', 'paribhasha', 'adhikara', 'atidesa', 'vidhi', 'other'];

const typeInfo: Record<SutraType, { label: string; labelSanskrit: string; description: string }> = {
  samjna: {
    label: 'Samjna',
    labelSanskrit: 'संज्ञा',
    description: 'Technical definitions that establish the metalanguage of the grammar'
  },
  paribhasha: {
    label: 'Paribhasha',
    labelSanskrit: 'परिभाषा',
    description: 'Interpretive rules that govern how other rules are applied'
  },
  adhikara: {
    label: 'Adhikara',
    labelSanskrit: 'अधिकार',
    description: 'Governing rules whose scope extends over subsequent sutras'
  },
  atidesa: {
    label: 'Atidesa',
    labelSanskrit: 'अतिदेश',
    description: 'Extension rules that apply properties from one element to another'
  },
  vidhi: {
    label: 'Vidhi',
    labelSanskrit: 'विधि',
    description: 'Operational rules that perform grammatical operations'
  },
  other: {
    label: 'Other',
    labelSanskrit: 'अन्य',
    description: 'Rules not classified in the standard categories'
  }
};

export async function load({ fetch }) {
  const response = await fetch('/data/sutras.json');
  const rawData: { data: RawSutra[] } = await response.json();
  const sutras = parseSutras(rawData);

  // Group by type
  const grouped = new Map<SutraType, Sutra[]>();
  for (const type of typeOrder) {
    grouped.set(type, []);
  }

  for (const sutra of sutras) {
    const list = grouped.get(sutra.type);
    if (list) {
      list.push(sutra);
    }
  }

  // Build type groups with metadata
  const typeGroups: TypeGroup[] = typeOrder
    .map(type => ({
      type,
      ...typeInfo[type],
      sutras: grouped.get(type) || []
    }))
    .filter(g => g.sutras.length > 0);

  return {
    typeGroups
  };
}
