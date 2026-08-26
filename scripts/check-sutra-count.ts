/**
 * check-sutra-count.ts — the home page's सूत्र door prints a constant.
 *
 * SUTRA_COUNT lives in src/lib/data/parser.ts rather than being read from
 * loadSutras(), because that import inlines all 3983 sūtra YAML files into
 * whatever chunk touches it and the home page would pay six megabytes to
 * print one integer. The cost of a constant is that it can drift from the
 * data silently — the door would keep saying 3983 over a corpus that no
 * longer has 3983. So count the YAML here and make the drift an error.
 */
import { readdirSync, readFileSync } from 'fs';
import { parse } from 'yaml';
import { SUTRA_COUNT } from '../src/lib/data/parser';

const dir = 'src/lib/data/sutras';
let actual = 0;
for (const f of readdirSync(dir).filter((f) => f.endsWith('.yaml'))) {
  const doc = parse(readFileSync(`${dir}/${f}`, 'utf8')) as { sutras?: unknown[] };
  actual += doc?.sutras?.length ?? 0;
}

if (actual !== SUTRA_COUNT) {
  console.error(
    `SUTRA_COUNT is ${SUTRA_COUNT}, but ${dir} holds ${actual}.\n` +
      `Update SUTRA_COUNT in src/lib/data/parser.ts — the home page prints it.`
  );
  process.exit(1);
}

console.log(`sūtra count: ${actual} — matches SUTRA_COUNT`);
