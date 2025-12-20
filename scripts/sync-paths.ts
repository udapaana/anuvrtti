#!/usr/bin/env npx tsx
/**
 * Sync Learning Paths: Markdown <-> TypeScript
 *
 * Usage:
 *   npx tsx scripts/sync-paths.ts --to-ts    # Convert markdown files to paths.ts
 *   npx tsx scripts/sync-paths.ts --to-md    # Convert paths.ts to markdown files
 *
 * The markdown files in src/lib/learning/paths/ are the human-editable format.
 * Run --to-ts after editing markdown to update the TypeScript source.
 */

import * as fs from 'fs';
import * as path from 'path';

const PATHS_DIR = path.join(process.cwd(), 'src/lib/learning/paths');
const PATHS_TS = path.join(process.cwd(), 'src/lib/learning/paths.ts');

interface LearningStep {
  sutraId: string;
  title: string;
  commentary?: string;
  keyTerms?: string[];
}

interface LearningPath {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites: string[];
  steps: LearningStep[];
}

function parseFrontmatter(content: string): { frontmatter: any; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error('Invalid markdown: missing frontmatter');

  const [, yaml, body] = match;
  const frontmatter: any = { prerequisites: [] };

  let inPrereqs = false;
  for (const line of yaml.split('\n')) {
    if (line.startsWith('  - ')) {
      if (inPrereqs) frontmatter.prerequisites.push(line.replace('  - ', '').trim());
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
        frontmatter.prerequisites = value.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
        inPrereqs = false;
      }
    } else {
      frontmatter[key] = value;
    }
  }

  return { frontmatter, body };
}

function parseStep(section: string): LearningStep | null {
  const lines = section.trim().split('\n');
  if (!lines.length) return null;

  const headerMatch = lines[0].match(/^##\s+(\d+\.\d+\.\d+)\s*-\s*(.+)$/);
  if (!headerMatch) return null;

  const [, sutraId, title] = headerMatch;
  let keyTerms: string[] = [];
  let commentaryLines: string[] = [];
  let inCommentary = false;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const keyTermsMatch = line.match(/^\*\*Key Terms:\*\*\s*(.+)$/);
    if (keyTermsMatch) {
      keyTerms = keyTermsMatch[1].split(',').map(t => t.trim()).filter(Boolean);
      inCommentary = true;
      continue;
    }
    if (!inCommentary && !line.trim()) continue;
    inCommentary = true;
    commentaryLines.push(line);
  }

  return {
    sutraId,
    title: title.trim(),
    commentary: commentaryLines.join('\n').trim() || undefined,
    keyTerms: keyTerms.length ? keyTerms : undefined,
  };
}

function parseMarkdown(content: string): LearningPath {
  const { frontmatter, body } = parseFrontmatter(content);
  const sections = body.split(/\n---\n/).filter(s => s.trim());
  const steps = sections.map(parseStep).filter((s): s is LearningStep => s !== null);

  return {
    id: frontmatter.id,
    title: frontmatter.title,
    titleSanskrit: frontmatter.titleSanskrit,
    description: frontmatter.description,
    difficulty: frontmatter.difficulty,
    estimatedTime: frontmatter.estimatedTime,
    prerequisites: frontmatter.prerequisites,
    steps,
  };
}

function pathToMarkdown(p: LearningPath): string {
  const lines: string[] = ['---'];
  lines.push(`id: ${p.id}`);
  lines.push(`title: ${p.title}`);
  lines.push(`titleSanskrit: ${p.titleSanskrit}`);
  lines.push(`description: ${p.description}`);
  lines.push(`difficulty: ${p.difficulty}`);
  lines.push(`estimatedTime: ${p.estimatedTime}`);
  if (!p.prerequisites.length) {
    lines.push('prerequisites: []');
  } else {
    lines.push('prerequisites:');
    p.prerequisites.forEach(pr => lines.push(`  - ${pr}`));
  }
  lines.push('---', '');

  p.steps.forEach((step, i) => {
    lines.push(`## ${step.sutraId} - ${step.title}`, '');
    if (step.keyTerms?.length) {
      lines.push(`**Key Terms:** ${step.keyTerms.join(', ')}`, '');
    }
    if (step.commentary) lines.push(step.commentary);
    if (i < p.steps.length - 1) lines.push('', '---', '');
  });

  return lines.join('\n');
}

function escapeString(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function generateTypeScript(paths: LearningPath[]): string {
  const lines: string[] = [
    '/**',
    ' * Learning Paths for Ashtadhyayi',
    ' *',
    ' * AUTO-GENERATED from markdown files in src/lib/learning/paths/',
    ' * To edit, modify the .md files and run: npx tsx scripts/sync-paths.ts --to-ts',
    ' */',
    '',
    'export interface LearningStep {',
    '  sutraId: string;',
    '  title: string;',
    '  commentary?: string;',
    '  keyTerms?: string[];',
    '}',
    '',
    'export interface LearningPath {',
    '  id: string;',
    '  title: string;',
    '  titleSanskrit: string;',
    '  description: string;',
    '  difficulty: "beginner" | "intermediate" | "advanced";',
    '  estimatedTime: string;',
    '  prerequisites: string[];',
    '  steps: LearningStep[];',
    '}',
    '',
  ];

  // Generate each path
  paths.forEach(p => {
    const varName = p.id.replace(/-./g, x => x[1].toUpperCase()) + 'Path';
    lines.push(`export const ${varName}: LearningPath = {`);
    lines.push(`  id: "${p.id}",`);
    lines.push(`  title: "${escapeString(p.title)}",`);
    lines.push(`  titleSanskrit: "${escapeString(p.titleSanskrit)}",`);
    lines.push(`  description: "${escapeString(p.description)}",`);
    lines.push(`  difficulty: "${p.difficulty}",`);
    lines.push(`  estimatedTime: "${p.estimatedTime}",`);
    lines.push(`  prerequisites: [${p.prerequisites.map(pr => `"${pr}"`).join(', ')}],`);
    lines.push('  steps: [');

    p.steps.forEach(step => {
      lines.push('    {');
      lines.push(`      sutraId: "${step.sutraId}",`);
      lines.push(`      title: "${escapeString(step.title)}",`);
      if (step.commentary) {
        lines.push(`      commentary: "${escapeString(step.commentary)}",`);
      }
      if (step.keyTerms?.length) {
        lines.push(`      keyTerms: [${step.keyTerms.map(t => `"${escapeString(t)}"`).join(', ')}],`);
      }
      lines.push('    },');
    });

    lines.push('  ],');
    lines.push('};');
    lines.push('');
  });

  // Generate exports
  const varNames = paths.map(p => p.id.replace(/-./g, x => x[1].toUpperCase()) + 'Path');
  lines.push(`export const learningPaths: LearningPath[] = [${varNames.join(', ')}];`);
  lines.push('');
  lines.push('export function getPath(id: string): LearningPath | undefined {');
  lines.push('  return learningPaths.find((p) => p.id === id);');
  lines.push('}');
  lines.push('');
  lines.push('export function getAvailablePaths(completedPaths: string[]): LearningPath[] {');
  lines.push('  return learningPaths.filter((path) =>');
  lines.push('    path.prerequisites.every((prereq) => completedPaths.includes(prereq)),');
  lines.push('  );');
  lines.push('}');
  lines.push('');

  return lines.join('\n');
}

async function toTypeScript() {
  const files = fs.readdirSync(PATHS_DIR).filter(f => f.endsWith('.md'));
  const paths: LearningPath[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(PATHS_DIR, file), 'utf-8');
    paths.push(parseMarkdown(content));
  }

  // Sort by prerequisites (no prereqs first)
  paths.sort((a, b) => a.prerequisites.length - b.prerequisites.length);

  const ts = generateTypeScript(paths);
  fs.writeFileSync(PATHS_TS, ts);
  console.log(`Generated ${PATHS_TS} from ${files.length} markdown files`);
}

async function toMarkdown() {
  // Dynamic import to get current paths
  const module = await import(PATHS_TS);
  const paths: LearningPath[] = module.learningPaths;

  if (!fs.existsSync(PATHS_DIR)) {
    fs.mkdirSync(PATHS_DIR, { recursive: true });
  }

  for (const p of paths) {
    const md = pathToMarkdown(p);
    const file = path.join(PATHS_DIR, `${p.id}.md`);
    fs.writeFileSync(file, md);
    console.log(`Generated ${file}`);
  }
}

const args = process.argv.slice(2);
if (args.includes('--to-ts')) {
  toTypeScript().catch(console.error);
} else if (args.includes('--to-md')) {
  toMarkdown().catch(console.error);
} else {
  console.log('Usage:');
  console.log('  npx tsx scripts/sync-paths.ts --to-ts   # Markdown -> TypeScript');
  console.log('  npx tsx scripts/sync-paths.ts --to-md   # TypeScript -> Markdown');
}
