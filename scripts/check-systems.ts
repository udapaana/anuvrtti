#!/usr/bin/env bun
/**
 * check-systems.ts — the systems book must point at tags that exist.
 *
 * static/data/systems.toml is hand-editable, which is the point of it, and the
 * one thing a hand cannot see is a tag that no longer matches the schema. Every
 * `t` in it is a join key: it is how a word in the reader lights its own cell,
 * how `systemsForTerm` finds a home for a tag, and how the glossary note opens.
 * A typo — a missing virāma, a यु for a लु — breaks all three silently. Nothing
 * errors; the cell simply never lights, which looks like the corpus being thin
 * rather than the book being wrong.
 *
 * So: every tag must be a real schema value, and no system may claim the same
 * tag twice.
 */
import { SYSTEMS } from '../src/lib/systems';
import { KNOWN_VALUES } from '../src/lib/usage/schema';

const problems: string[] = [];
let items = 0;

for (const sys of SYSTEMS) {
  const seen = new Set<string>();
  for (const g of sys.groups) {
    for (const it of g.items) {
      items++;
      if (!KNOWN_VALUES.has(it.t)) {
        problems.push(`${sys.id} · ${g.axis}: "${it.t}" is not a value in src/lib/usage/schema.ts`);
      }
      if (seen.has(it.t)) {
        problems.push(`${sys.id}: "${it.t}" appears on two axes of the same system`);
      }
      seen.add(it.t);
      if (!it.en?.trim()) problems.push(`${sys.id} · ${g.axis}: "${it.t}" has no gloss`);
    }
  }
  if (!sys.shape?.trim()) problems.push(`${sys.id}: no shape sentence`);
  if (!sys.groups.length) problems.push(`${sys.id}: no axes`);
}

if (problems.length) {
  console.log(`${problems.length} systems error(s)`);
  for (const p of problems) console.log(`    ${p}`);
  process.exit(1);
}
console.log(`systems: ${SYSTEMS.length} systems, ${items} items, every tag known to the schema`);
