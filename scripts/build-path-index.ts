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

const CONTENT_DIR = path.join(process.cwd(), 'static/content/paths');
const INDEX_OUTPUT = path.join(process.cwd(), 'static/content/paths-index.json');
const SUTRA_PATHS_OUTPUT = path.join(process.cwd(), 'static/content/sutra-paths.json');

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

interface SutraPathMapping {
  [sutraId: string]: { pathId: string; stepIndex: number }[];
}

function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error('Invalid markdown format: missing frontmatter');
  }

  const yamlContent = match[1];
  const body = match[2];

  // Simple YAML parser for our use case
  const frontmatter: Record<string, any> = {};
  let currentKey = '';
  let inArray = false;
  let arrayItems: string[] = [];

  for (const line of yamlContent.split('\n')) {
    if (line.trim() === '') continue;

    // Check for array item
    if (line.match(/^\s+-\s+/)) {
      const value = line.replace(/^\s+-\s+/, '').trim();
      arrayItems.push(value);
      continue;
    }

    // If we were collecting array items, save them
    if (inArray && currentKey) {
      frontmatter[currentKey] = arrayItems;
      arrayItems = [];
      inArray = false;
    }

    // Check for key: value
    const keyMatch = line.match(/^(\w+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      const value = keyMatch[2].trim();

      if (value === '' || value === '[]') {
        // Start of (possibly empty) array
        inArray = value === '';
        arrayItems = [];
        if (value === '[]') frontmatter[currentKey] = [];
      } else {
        // Simple value
        frontmatter[currentKey] = value.replace(/^["']|["']$/g, '');
      }
    }
  }

  // Handle trailing array
  if (inArray && currentKey) {
    frontmatter[currentKey] = arrayItems;
  }

  return { frontmatter, body };
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

function scanPaths(): { paths: PathMeta[]; sutraMappings: SutraPathMapping } {
  const paths: PathMeta[] = [];
  const sutraMappings: SutraPathMapping = {};

  // Scan track directories
  const trackDirs = fs.readdirSync(CONTENT_DIR);

  for (const trackDir of trackDirs) {
    const trackPath = path.join(CONTENT_DIR, trackDir);
    if (!fs.statSync(trackPath).isDirectory()) continue;

    // Scan path directories within track
    const pathDirs = fs.readdirSync(trackPath);

    for (const pathDir of pathDirs) {
      const pathDirPath = path.join(trackPath, pathDir);
      if (!fs.statSync(pathDirPath).isDirectory()) continue;

      const pathFile = path.join(pathDirPath, 'path.md');
      if (!fs.existsSync(pathFile)) continue;

      try {
        const content = fs.readFileSync(pathFile, 'utf-8');
        const { frontmatter, body } = parseFrontmatter(content);

        // Determine track from folder name
        const track = trackDir === 'vyakarana' ? 'grammar' :
                      trackDir === 'pathana' ? 'reading' : trackDir;

        const pathMeta: PathMeta = {
          id: frontmatter.id || pathDir,
          track,
          folder: pathDir,
          trackFolder: trackDir,
          title: frontmatter.title || '',
          titleSanskrit: frontmatter.titleSanskrit || '',
          label: frontmatter.label || '',
          category: frontmatter.category || 'foundation',
          description: frontmatter.description || '',
          difficulty: frontmatter.difficulty || 'beginner',
          estimatedTime: frontmatter.estimatedTime || '',
          prerequisites: frontmatter.prerequisites || [],
          stepCount: countSteps(body),
          order: parseInt(frontmatter.order) || 999,
        };

        paths.push(pathMeta);

        // Extract sutra mappings
        const sutraRefs = extractSutraRefs(body);
        sutraRefs.forEach((sutraId, stepIndex) => {
          if (!sutraMappings[sutraId]) {
            sutraMappings[sutraId] = [];
          }
          sutraMappings[sutraId].push({
            pathId: pathMeta.id,
            stepIndex,
          });
        });

      } catch (err) {
        console.error(`Error processing ${pathFile}:`, err);
      }
    }
  }

  // Sort by order
  paths.sort((a, b) => a.order - b.order);

  return { paths, sutraMappings };
}

function main() {
  console.log('Building path index...');

  const { paths, sutraMappings } = scanPaths();

  // Write paths index
  fs.writeFileSync(INDEX_OUTPUT, JSON.stringify(paths, null, 2));
  console.log(`Wrote ${paths.length} paths to ${INDEX_OUTPUT}`);

  // Write sutra mappings
  fs.writeFileSync(SUTRA_PATHS_OUTPUT, JSON.stringify(sutraMappings, null, 2));
  const sutraCount = Object.keys(sutraMappings).length;
  console.log(`Wrote ${sutraCount} sutra mappings to ${SUTRA_PATHS_OUTPUT}`);
}

main();
