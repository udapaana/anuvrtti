/**
 * One-shot: lift SYSTEMS out of src/lib/systems.ts into static/data/systems.toml.
 *
 * Generated rather than retyped — the glosses are authored prose and hand-copying
 * 63 of them is how a typo gets into a grammar book. Once the TOML is the source
 * of truth this script has done its job; it stays as the record of the move.
 */
import { SYSTEMS } from '../src/lib/systems';
import { writeFileSync } from 'node:fs';

const esc = (s: string) => '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';

const out: string[] = [
  '# The grammatical systems, as a book rather than as source code.',
  '#',
  '# Source of truth — edit here, never in src/lib/systems.ts, which only reads',
  '# this file and types it. Same arrangement as jargon.toml beside it.',
  '#',
  '# A SYSTEM is a few GROUPS (its axes); a group is a row of ITEMS; an item is',
  '# one schema tag (`t`) with a one-line gloss (`en`). Every `t` must be a real',
  '# tag from src/lib/usage/schema.ts — that is what lets a word in the reader',
  '# light its own cell, and what `bun run check` verifies.',
  ''
];

for (const sys of SYSTEMS) {
  out.push('[[systems]]');
  out.push(`id = ${esc(sys.id)}`);
  out.push(`name = ${esc(sys.name)}`);
  out.push(`roman = ${esc(sys.roman)}`);
  out.push(`scope = ${esc(sys.scope)}`);
  out.push(`shape = ${esc(sys.shape)}`);
  out.push('');
  for (const g of sys.groups) {
    out.push('  [[systems.groups]]');
    out.push(`  axis = ${esc(g.axis)}`);
    if (g.roman) out.push(`  roman = ${esc(g.roman)}`);
    out.push('  items = [');
    for (const it of g.items) out.push(`    { t = ${esc(it.t)}, en = ${esc(it.en)} },`);
    out.push('  ]');
    out.push('');
  }
}

writeFileSync('static/data/systems.toml', out.join('\n'));
const items = SYSTEMS.reduce((n, s) => n + s.groups.reduce((m, g) => m + g.items.length, 0), 0);
console.log(`wrote static/data/systems.toml — ${SYSTEMS.length} systems, ` +
  `${SYSTEMS.reduce((n, s) => n + s.groups.length, 0)} axes, ${items} items`);
