/**
 * Generates static/data/commentary-index.json — a flat list of all commentary
 * entries, used by the edit modal file tree to enumerate sūtras without
 * directory traversal.
 *
 * Run with: npx tsx scripts/generate-commentary-index.ts
 */

import { readdirSync, statSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';

const commentaryDir = resolve(process.cwd(), 'static/data/commentary');

interface CommentaryEntry {
  adhyaya: number;
  pada: number;
  sutra: number;
  id: string;       // display id e.g. "1.1.1"
  numericId: string; // e.g. "11001"
  path: string;     // relative path from static/ e.g. "data/commentary/1/1/1.toml"
}

const entries: CommentaryEntry[] = [];

for (const aDir of readdirSync(commentaryDir).sort((a, b) => +a - +b)) {
  const aPath = join(commentaryDir, aDir);
  if (!statSync(aPath).isDirectory()) continue;
  const a = parseInt(aDir);

  for (const pDir of readdirSync(aPath).sort((a, b) => +a - +b)) {
    const pPath = join(aPath, pDir);
    if (!statSync(pPath).isDirectory()) continue;
    const p = parseInt(pDir);

    for (const file of readdirSync(pPath).sort((a, b) => parseInt(a) - parseInt(b))) {
      if (!file.endsWith('.toml')) continue;
      const s = parseInt(file.replace('.toml', ''));
      const numericId = `${a}${p}${String(s).padStart(3, '0')}`;
      entries.push({
        adhyaya: a,
        pada: p,
        sutra: s,
        id: `${a}.${p}.${s}`,
        numericId,
        path: `data/commentary/${a}/${p}/${s}.toml`,
      });
    }
  }
}

const out = resolve(process.cwd(), 'static/data/commentary-index.json');
writeFileSync(out, JSON.stringify(entries, null, 2) + '\n', 'utf-8');
console.log(`Wrote ${entries.length} entries to ${out}`);
