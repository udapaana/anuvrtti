#!/usr/bin/env bun
/**
 * check-lexical.ts — the closed-set tables actually join to the schema.
 *
 * src/lib/usage/lexical.ts maps a lemma or an affix to a tag. Both halves of
 * every entry are strings that have to match the schema exactly, and neither
 * half raises when it does not:
 *
 *   - a bad VALUE (`क्रियाविशेष` for `क्रियाविशेषण`) writes a tag no dimension
 *     owns. The annotation lint would catch it — as a `misplaced` error on
 *     every word the table touches, which is a confusing way to learn about a
 *     typo in a table.
 *   - a bad KEY (`एतत्` for `एतद्`) matches no lemma and does nothing at all.
 *     Nothing catches that. The dimension just stays empty and reads as an
 *     authoring backlog, which is the exact illusion these tables exist to
 *     dispel.
 *
 * This is the same hazard `check-systems.ts` guards for systems.toml, and it is
 * checked the same way: join to the schema, fail on anything that does not.
 *
 * The KEY check is deliberately narrow. It applies only where the schema itself
 * carries the closed list — सर्वनाम's nine stems — because that is the only
 * case where "not in the list" definitely means "wrong". A numeral, a कृत्
 * affix or an indeclinable that the corpus has never used yet is a table entry
 * waiting to be useful, not an error.
 */
import {
  SARVANAMA_BHEDA, SANKHYA_BHEDA, KRT_PRAYOGA, TADDHITA_ARTHA, AVYAYA_BHEDA
} from '../src/lib/usage/lexical';
import { WORD_TYPES } from '../src/lib/usage/schema';

const dim = (typeId: string, name: string) =>
  WORD_TYPES.find((t) => t.id === typeId)?.dimensions.find((d) => d.name === name);

/** table, the dimension its values must belong to, and the dimension its keys come from. */
const TABLES: Array<{
  label: string; table: Record<string, string>;
  valuesOf: [string, string]; keysOf?: [string, string];
}> = [
  {
    label: 'SARVANAMA_BHEDA', table: SARVANAMA_BHEDA,
    valuesOf: ['sarvanama', 'सर्वनाम-भेद'], keysOf: ['sarvanama', 'lemma']
  },
  { label: 'SANKHYA_BHEDA', table: SANKHYA_BHEDA, valuesOf: ['sankhya', 'संख्या-भेद'] },
  { label: 'KRT_PRAYOGA', table: KRT_PRAYOGA, valuesOf: ['kridanta', 'प्रयोग'], keysOf: ['kridanta', 'कृत्'] },
  { label: 'TADDHITA_ARTHA', table: TADDHITA_ARTHA, valuesOf: ['taddhita', 'अर्थ'], keysOf: ['taddhita', 'तद्धित'] },
  { label: 'AVYAYA_BHEDA', table: AVYAYA_BHEDA, valuesOf: ['avyaya', 'अव्यय-भेद'] }
];

const bad: string[] = [];
let entries = 0;

for (const { label, table, valuesOf, keysOf } of TABLES) {
  const vd = dim(...valuesOf);
  if (!vd) { bad.push(`${label}: no dimension ${valuesOf[1]} on ${valuesOf[0]}`); continue; }
  const legalValues = new Set(vd.values);
  // A `lemma` dimension with no values is an open set — every stem is legal.
  const kd = keysOf ? dim(...keysOf) : undefined;
  const legalKeys = kd && kd.values.length ? new Set(kd.values) : null;

  for (const [k, val] of Object.entries(table)) {
    entries++;
    if (!legalValues.has(val)) {
      bad.push(`${label}[${k}] = ${val} — not a value of ${valuesOf[1]}`);
    }
    if (legalKeys && !legalKeys.has(k)) {
      bad.push(`${label}[${k}] — not a ${keysOf![1]} the schema knows; it will never match`);
    }
  }
}

if (bad.length) {
  console.error(`${bad.length} lexical table error(s):`);
  for (const b of bad) console.error(`    ${b}`);
  process.exit(1);
}
console.log(`lexical tables: ${entries} entries across ${TABLES.length} tables, all join to the schema`);
