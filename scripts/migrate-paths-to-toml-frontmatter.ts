/**
 * Converts YAML frontmatter (---) in all path.md files to TOML frontmatter (+++).
 *
 * Run with: npx tsx scripts/migrate-paths-to-toml-frontmatter.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { globSync } from 'fs/promises';
import { glob } from 'fs/promises';

// Use sync glob via Node's built-in
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

function findPathFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...findPathFiles(full));
    } else if (entry === 'path.md') {
      results.push(full);
    }
  }
  return results;
}

/**
 * Parse YAML frontmatter and return structured data + body.
 * This is the same logic as content/index.ts parseFrontmatter.
 */
function parseYamlFrontmatter(content: string): { data: Record<string, any>; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error('No YAML frontmatter found');

  const [, yaml, body] = match;
  const data: Record<string, any> = { prerequisites: [] };

  let inPrereqs = false;
  for (const line of yaml.split('\n')) {
    if (line.startsWith('  - ')) {
      if (inPrereqs) data.prerequisites.push(line.replace('  - ', '').trim());
      continue;
    }
    inPrereqs = false;
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();
    if (key === 'prerequisites') {
      inPrereqs = true;
      if (value.startsWith('[') && value.endsWith(']')) {
        data.prerequisites = value.slice(1, -1).split(',').map((s: string) => s.trim()).filter(Boolean);
        inPrereqs = false;
      }
    } else {
      let clean = value;
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        clean = value.slice(1, -1);
      }
      // Try to parse numbers
      const num = Number(clean);
      data[key] = !isNaN(num) && clean !== '' ? num : clean;
    }
  }

  return { data, body };
}

function toTomlValue(v: any): string {
  if (typeof v === 'string') {
    return `"${v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  if (typeof v === 'number') return String(v);
  if (Array.isArray(v)) {
    return '[' + v.map((s: string) => `"${s.replace(/"/g, '\\"')}"`).join(', ') + ']';
  }
  return `"${String(v)}"`;
}

function buildTomlFrontmatter(data: Record<string, any>): string {
  const lines: string[] = [];
  // Canonical key order
  const order = ['id', 'order', 'title', 'titleSanskrit', 'label', 'track', 'category',
                  'description', 'difficulty', 'estimatedTime', 'prerequisites'];
  for (const key of order) {
    if (data[key] !== undefined) {
      lines.push(`${key} = ${toTomlValue(data[key])}`);
    }
  }
  // Any remaining keys not in order
  for (const key of Object.keys(data)) {
    if (!order.includes(key)) {
      lines.push(`${key} = ${toTomlValue(data[key])}`);
    }
  }
  return lines.join('\n');
}

const pathFiles = findPathFiles(resolve(process.cwd(), 'static/content/paths'));
let converted = 0;
let errors = 0;

for (const file of pathFiles) {
  const content = readFileSync(file, 'utf-8');
  if (content.startsWith('+++')) {
    console.log(`  already TOML: ${file}`);
    continue;
  }
  try {
    const { data, body } = parseYamlFrontmatter(content);
    const toml = buildTomlFrontmatter(data);
    const newContent = `+++\n${toml}\n+++\n${body}`;
    writeFileSync(file, newContent, 'utf-8');
    converted++;
  } catch (e) {
    console.error(`  ERROR: ${file}: ${e}`);
    errors++;
  }
}

console.log(`\nConverted ${converted} files. Errors: ${errors}`);
