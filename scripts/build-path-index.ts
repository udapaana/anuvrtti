/**
 * Build path index from markdown files
 *
 * Paths are organized by track under static/content/paths/:
 *   static/content/paths/
 *     pathana/                <- reading track
 *       01-alphabet/
 *         path.md
 *       02-simple-sentences/
 *         path.md
 *     vyakarana/              <- grammar track
 *       introduction/
 *         path.md
 *       tinganta-lat/
 *         path.md
 *
 * Each path folder contains a path.md with frontmatter and content.
 *
 * Run: npx tsx scripts/build-path-index.ts
 */

import { readdir, readFile, writeFile, stat } from "fs/promises";
import { join } from "path";

// Track folder names mapped to track values
const TRACK_FOLDERS: Record<string, "reading" | "grammar"> = {
  pathana: "reading",
  vyakarana: "grammar",
};

interface PathMeta {
  id: string;
  track: "reading" | "grammar";
  folder: string; // Just the path folder name (e.g., "tinganta-lat")
  trackFolder: string; // The track folder (e.g., "vyakarana")
  title: string;
  titleSanskrit: string;
  label: string;
  category: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  prerequisites: string[];
  stepCount: number;
  order: number;
}

function parseFrontmatter(content: string): {
  meta: Record<string, any>;
  stepCount: number;
  sutraIds: string[];
} {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid markdown format: missing frontmatter");
  }

  const [, yaml, body] = match;
  const meta: Record<string, any> = {
    prerequisites: [],
    track: "grammar",
    category: "foundation",
    order: 999,
  };

  let inPrereqs = false;
  for (const line of yaml.split("\n")) {
    if (line.startsWith("  - ")) {
      if (inPrereqs) {
        meta.prerequisites.push(line.replace("  - ", "").trim());
      }
      continue;
    }

    inPrereqs = false;
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    if (key === "prerequisites") {
      inPrereqs = true;
      if (value.startsWith("[") && value.endsWith("]")) {
        meta.prerequisites = value
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        inPrereqs = false;
      }
    } else if (key === "order") {
      const parsed = parseInt(value, 10);
      meta[key] = isNaN(parsed) ? 999 : parsed;
    } else {
      // Strip surrounding quotes from values
      let cleanValue = value;
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        cleanValue = value.slice(1, -1);
      }
      meta[key] = cleanValue;
    }
  }

  // Count steps (## headers that aren't in frontmatter)
  const stepCount = (body.match(/^## /gm) || []).length;

  // Extract sutra IDs from step headers: ## 1.1.1 - Title
  const nonSutraTypes = [
    "concept",
    "reading",
    "practice",
    "summary",
    "exercise",
  ];
  const sutraIds: string[] = [];
  const stepHeaders = body.matchAll(/^## (\S+)\s*-\s*.+$/gm);
  for (const m of stepHeaders) {
    let id = m[1];
    // Normalize @ref[X.Y.Z] -> X.Y.Z
    const refMatch = id.match(/^@ref\[(.+)\]$/);
    if (refMatch) {
      id = refMatch[1];
    }
    if (!nonSutraTypes.includes(id.toLowerCase())) {
      sutraIds.push(id);
    }
  }

  return { meta, stepCount, sutraIds };
}

// Maps sutra ID -> [{pathId, pathTitle}]
interface SutraPathEntry {
  pathId: string;
  pathTitle: string;
}

async function buildIndex() {
  const pathsDir = join(process.cwd(), "static/content/paths");
  const paths: PathMeta[] = [];
  const sutraPathMap: Record<string, SutraPathEntry[]> = {};

  // Iterate over track folders (pathana, vyakarana)
  for (const [trackFolder, track] of Object.entries(TRACK_FOLDERS)) {
    const trackDir = join(pathsDir, trackFolder);

    let trackEntries: string[];
    try {
      trackEntries = await readdir(trackDir);
    } catch (e: any) {
      if (e.code === "ENOENT") {
        console.warn(`Track folder ${trackFolder} not found, skipping`);
        continue;
      }
      throw e;
    }

    for (const pathFolder of trackEntries) {
      const pathDir = join(trackDir, pathFolder);
      const pathStat = await stat(pathDir);

      // Only process directories
      if (!pathStat.isDirectory()) continue;

      // Look for path.md in the folder
      const pathMdFile = join(pathDir, "path.md");
      try {
        const content = await readFile(pathMdFile, "utf-8");
        const { meta, stepCount, sutraIds } = parseFrontmatter(content);

        const pathId = meta.id || pathFolder;
        const pathTitle = meta.title;

        paths.push({
          id: pathId,
          track,
          folder: pathFolder,
          trackFolder,
          title: pathTitle,
          titleSanskrit: meta.titleSanskrit,
          label: meta.label || meta.titleSanskrit,
          category: meta.category,
          description: meta.description,
          difficulty: meta.difficulty,
          estimatedTime: meta.estimatedTime,
          prerequisites: meta.prerequisites,
          stepCount,
          order: meta.order,
        });

        // Build sutra-to-path mapping
        for (const sutraId of sutraIds) {
          if (!sutraPathMap[sutraId]) {
            sutraPathMap[sutraId] = [];
          }
          // Avoid duplicates (same path listed twice for same sutra)
          if (!sutraPathMap[sutraId].some((e) => e.pathId === pathId)) {
            sutraPathMap[sutraId].push({ pathId, pathTitle });
          }
        }
      } catch (e: any) {
        if (e.code === "ENOENT") {
          console.warn(
            `Skipping ${trackFolder}/${pathFolder}: no path.md found`,
          );
        } else {
          console.error(
            `Error parsing ${trackFolder}/${pathFolder}/path.md:`,
            e,
          );
        }
      }
    }
  }

  // Sort by track, then order, then id
  paths.sort((a, b) => {
    // Grammar (vyakarana) before reading (pathana)
    if (a.track !== b.track) {
      return a.track === "grammar" ? -1 : 1;
    }
    if (a.order !== b.order) return a.order - b.order;
    return a.id.localeCompare(b.id);
  });

  const indexPath = join(process.cwd(), "static/content/paths-index.json");
  await writeFile(indexPath, JSON.stringify(paths, null, 2));

  const sutraPathsPath = join(process.cwd(), "static/content/sutra-paths.json");
  await writeFile(sutraPathsPath, JSON.stringify(sutraPathMap));

  const sutraCount = Object.keys(sutraPathMap).length;
  console.log(`Generated paths-index.json with ${paths.length} paths`);
  console.log(`Generated sutra-paths.json with ${sutraCount} sutra mappings`);
}

buildIndex().catch(console.error);
