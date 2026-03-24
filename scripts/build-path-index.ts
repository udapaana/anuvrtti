#!/usr/bin/env npx tsx
/**
 * Build path index from markdown files
 *
 * Scans static/content/paths/ for path.md files and generates:
 * - static/content/paths-index.json (metadata for all paths)
 * - static/content/sutra-paths.json (sutra -> path mappings)
 */

import * as fs from 'fs';
import * as path from 'path';
import { parse as parseToml } from 'smol-toml';

const CONTENT_DIR = path.join(process.cwd(), 'static/content/paths');
const INDEX_OUTPUT = path.join(process.cwd(), 'static/content/paths-index.json');
const SUTRA_PATHS_OUTPUT = path.join(process.cwd(), 'static/content/sutra-paths.json');
const BALABODHINI_DIR = path.join(process.cwd(), 'static/data/balabodhini');

interface PathMeta {
  id: string;
  track: string;
  folder: string;
  trackFolder: string;
  title: string;
  titleSanskrit: string;
  label: string;
  category: string;
  description: string;
  difficulty: string;
  estimatedTime: string;
  prerequisites: string[];
  stepCount: number;
  order: number;
}

interface SutraPathEntry {
  type: 'path';
  pathId: string;
  stepIndex: number;
}

interface SutraLessonEntry {
  type: 'lesson';
  lessonRef: string;  // e.g. "balabodhini-1-07"
  lessonNumber: number;
  part: number;
  title: string;
}

interface SutraPathMapping {
  [sutraId: string]: (SutraPathEntry | SutraLessonEntry)[];
}

function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  // Support +++ TOML frontmatter
  const tomlMatch = content.match(/^\+\+\+\n([\s\S]*?)\n\+\+\+\n([\s\S]*)$/);
  if (tomlMatch) {
    const frontmatter = parseToml(tomlMatch[1]) as Record<string, any>;
    return { frontmatter, body: tomlMatch[2] };
  }
  // Fallback: --- YAML frontmatter (legacy)
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!yamlMatch) {
    throw new Error('Invalid markdown format: missing frontmatter');
  }
  const frontmatter: Record<string, any> = {};
  for (const line of yamlMatch[1].split('\n')) {
    const keyMatch = line.match(/^(\w+):\s*(.*)$/);
    if (keyMatch) frontmatter[keyMatch[1]] = keyMatch[2].trim().replace(/^["']|["']$/g, '');
  }
  return { frontmatter, body: yamlMatch[2] };
}

function countSteps(body: string): number {
  // Count ## headings that represent steps
  const stepMatches = body.match(/^## /gm);
  return stepMatches ? stepMatches.length : 0;
}

function extractSutraRefs(body: string): string[] {
  // Extract sutra IDs from step headers like "## 1.1.1 - Title" or "## @ref[1.1.1] - Title"
  const refs: string[] = [];
  const lines = body.split('\n');

  for (const line of lines) {
    if (line.startsWith('## ')) {
      // Match patterns like "## 1.1.1 - " or "## @ref[1.1.1] - "
      const directMatch = line.match(/^## (\d+\.\d+\.\d+)\s*-/);
      const refMatch = line.match(/^## @ref\[(\d+\.\d+\.\d+)\]/);

      if (directMatch) {
        refs.push(directMatch[1]);
      } else if (refMatch) {
        refs.push(refMatch[1]);
      }
    }
  }

  return refs;
}

function getTrackFolder(track: string): string {
  switch (track) {
    case 'grammar': return 'vyakarana';
    case 'reading': return 'pathana';
    default: return track;
  }
}

function processPathFile(
  pathFile: string,
  trackDir: string,
  folder: string,
  trackFolder: string,
  paths: PathMeta[],
  sutraMappings: SutraPathMapping,
) {
  try {
    const content = fs.readFileSync(pathFile, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);

    const track = trackDir === 'vyakarana' ? 'grammar' :
                  trackDir === 'pathana' ? 'reading' : trackDir;

    const pathMeta: PathMeta = {
      id: frontmatter.id || folder,
      track,
      folder,
      trackFolder,
      title: frontmatter.title || '',
      titleSanskrit: frontmatter.titleSanskrit || '',
      label: frontmatter.label || '',
      category: frontmatter.category || 'foundation',
      description: frontmatter.description || '',
      difficulty: frontmatter.difficulty || 'beginner',
      estimatedTime: frontmatter.estimatedTime || '',
      prerequisites: frontmatter.prerequisites || [],
      stepCount: countSteps(body),
      order: frontmatter.order !== undefined ? parseInt(frontmatter.order) : 999,
    };

    paths.push(pathMeta);

    const sutraRefs = extractSutraRefs(body);
    sutraRefs.forEach((sutraId, stepIndex) => {
      if (!sutraMappings[sutraId]) sutraMappings[sutraId] = [];
      sutraMappings[sutraId].push({ type: 'path', pathId: pathMeta.id, stepIndex });
    });

  } catch (err) {
    console.error(`Error processing ${pathFile}:`, err);
  }
}

function scanPaths(): { paths: PathMeta[]; sutraMappings: SutraPathMapping } {
  const paths: PathMeta[] = [];
  const sutraMappings: SutraPathMapping = {};

  const trackDirs = fs.readdirSync(CONTENT_DIR);

  for (const trackDir of trackDirs) {
    const trackPath = path.join(CONTENT_DIR, trackDir);
    if (!fs.statSync(trackPath).isDirectory()) continue;

    const entries = fs.readdirSync(trackPath);

    for (const entry of entries) {
      const entryPath = path.join(trackPath, entry);
      if (!fs.statSync(entryPath).isDirectory()) continue;

      // Direct path.md at this level: trackDir/entry/path.md
      const directPathFile = path.join(entryPath, 'path.md');
      if (fs.existsSync(directPathFile)) {
        processPathFile(directPathFile, trackDir, entry, trackDir, paths, sutraMappings);
        continue;
      }

      // One level deeper: trackDir/entry/subEntry/path.md (e.g. pathana/balabodhini-1/lesson-01/path.md)
      const subEntries = fs.readdirSync(entryPath);
      for (const subEntry of subEntries) {
        const subPath = path.join(entryPath, subEntry);
        if (!fs.statSync(subPath).isDirectory()) continue;
        const nestedPathFile = path.join(subPath, 'path.md');
        if (fs.existsSync(nestedPathFile)) {
          processPathFile(nestedPathFile, trackDir, subEntry, `${trackDir}/${entry}`, paths, sutraMappings);
        }
      }
    }
  }

  paths.sort((a, b) => a.order - b.order);
  return { paths, sutraMappings };
}

function scanBalabodhiniSutras(sutraMappings: SutraPathMapping) {
  if (!fs.existsSync(BALABODHINI_DIR)) return;

  const parts = fs.readdirSync(BALABODHINI_DIR);
  for (const part of parts) {
    const partNum = parseInt(part);
    if (isNaN(partNum)) continue;
    const structuredDir = path.join(BALABODHINI_DIR, part, 'structured');
    if (!fs.existsSync(structuredDir)) continue;

    const files = fs.readdirSync(structuredDir).filter(f => f.endsWith('.toml'));
    for (const file of files) {
      try {
        const content = fs.readFileSync(path.join(structuredDir, file), 'utf-8');
        const data = parseToml(content) as Record<string, any>;
        const sutras: string[] = Array.isArray(data.sutras) ? data.sutras : [];
        if (!sutras.length) continue;

        const lessonNum = data.number as number;
        const padded = String(lessonNum).padStart(2, '0');
        const lessonRef = `balabodhini-${partNum}-${padded}`;
        const title = (data.title_english as string) || `Lesson ${lessonNum}`;

        for (const sutraId of sutras) {
          if (!sutraMappings[sutraId]) sutraMappings[sutraId] = [];
          sutraMappings[sutraId].push({
            type: 'lesson',
            lessonRef,
            lessonNumber: lessonNum,
            part: partNum,
            title,
          });
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

function main() {
  console.log('Building path index...');

  const { paths, sutraMappings } = scanPaths();
  scanBalabodhiniSutras(sutraMappings);

  // Write paths index
  fs.writeFileSync(INDEX_OUTPUT, JSON.stringify(paths, null, 2));
  console.log(`Wrote ${paths.length} paths to ${INDEX_OUTPUT}`);

  // Write sutra mappings
  fs.writeFileSync(SUTRA_PATHS_OUTPUT, JSON.stringify(sutraMappings, null, 2));
  const sutraCount = Object.keys(sutraMappings).length;
  console.log(`Wrote ${sutraCount} sutra mappings to ${SUTRA_PATHS_OUTPUT}`);
}

main();
