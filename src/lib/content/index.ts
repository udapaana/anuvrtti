/**
 * Content loader for markdown-based learning paths
 *
 * Loads content at runtime from static/content/ directory.
 * No compilation step needed - just add markdown files.
 */

import { parse as parseToml } from 'smol-toml';
import type {
  LearningPath,
  LearningStep,
  QuizData,
  Track,
  PathCategory,
} from "$lib/learning/paths";

export interface PathMeta {
  id: string;
  track: Track;
  folder: string; // Just the path folder name (e.g., "tinganta-lat")
  trackFolder: string; // The track folder (e.g., "vyakarana")
  title: string;
  titleSanskrit: string;
  label: string;
  category: PathCategory;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  prerequisites: string[];
  stepCount: number;
  order: number;
}

// Caches
let pathIndexCache: PathMeta[] | null = null;
let pathCache: Map<string, LearningPath> = new Map();

/**
 * Load the path index (metadata for all paths)
 */
export async function loadPathIndex(): Promise<PathMeta[]> {
  if (pathIndexCache) return pathIndexCache;

  const response = await fetch("/content/paths-index.json");
  if (!response.ok) {
    throw new Error(`Failed to load path index: ${response.statusText}`);
  }

  pathIndexCache = await response.json();
  return pathIndexCache!;
}

/**
 * Get paths by track
 */
export async function getPathsByTrack(track: Track): Promise<PathMeta[]> {
  const index = await loadPathIndex();
  return index.filter((p) => p.track === track);
}

/**
 * Get paths by category
 */
export async function getPathsByCategory(
  category: PathCategory,
): Promise<PathMeta[]> {
  const index = await loadPathIndex();
  return index.filter((p) => p.category === category);
}

/**
 * Parse TOML frontmatter (+++ delimiters) from markdown
 */
function parseFrontmatter(content: string): {
  frontmatter: Record<string, any>;
  body: string;
} {
  const match = content.match(/^\+\+\+\n([\s\S]*?)\n\+\+\+\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid markdown format: missing +++ TOML frontmatter");
  }

  const [, toml, body] = match;
  const frontmatter = parseToml(toml) as Record<string, any>;

  // Ensure defaults
  if (!frontmatter.prerequisites) frontmatter.prerequisites = [];
  if (!frontmatter.track) frontmatter.track = "grammar";
  if (!frontmatter.category) frontmatter.category = "foundation";

  return { frontmatter, body };
}

/**
 * Parse a `## quiz - ...` step's body: **Question:**, a **Options:** checkbox
 * list (`- [ ]` / `- [x]`), and **Explanation:**. Text is left with its raw
 * markup intact — QuizStep renders question, option and explanation text
 * through CommentaryText, the same as any other step's commentary.
 */
function parseQuiz(text: string): QuizData | undefined {
  const questionMatch = text.match(/\*\*Question:\*\*\s*([^\n]+)/);
  if (!questionMatch) return undefined;

  const options: { text: string; correct?: boolean }[] = [];
  const optionsMatch = text.match(
    /\*\*Options:\*\*\s*\n([\s\S]*?)(?=\n\*\*Explanation:\*\*|$)/
  );
  let answer: string | undefined;
  if (optionsMatch) {
    for (const line of optionsMatch[1].split("\n")) {
      const m = line.match(/^-\s*\[([ xX])\]\s*(.+)$/);
      if (!m) continue;
      const correct = m[1].toLowerCase() === "x";
      const optText = m[2].trim();
      options.push({ text: optText, correct: correct || undefined });
      if (correct) answer = optText;
    }
  }

  const explanationMatch = text.match(/\*\*Explanation:\*\*\s*([\s\S]*)$/);

  return {
    question: questionMatch[1].trim(),
    options: options.length > 0 ? options : undefined,
    answer,
    explanation: explanationMatch ? explanationMatch[1].trim() : undefined,
  };
}

/**
 * Parse a step section from markdown body
 */
function parseStep(section: string): LearningStep | null {
  const lines = section.trim().split("\n");
  if (lines.length === 0) return null;

  // Parse header: ## 1.1.1 - Step Title  OR  ## concept - Step Title
  const headerMatch = lines[0].match(/^##\s+(\S+)\s*-\s*(.+)$/);
  if (!headerMatch) return null;

  const [, sutraId, rawTitle] = headerMatch;
  // Titles and key terms are plain text (used in nav, headings, term chips) —
  // unwrap any inline markup tags (@deva[…], @[…], @term[…], @ref[…],
  // @pratyahara[…]) to their bare content so they don't leak literally into the UI.
  const unwrapMarkup = (s: string) =>
    s.replace(/@(?:deva|term|ref|pratyahara)?\[([^\]]+)\](?:\{[^}]*\})?/g, "$1");
  const title = unwrapMarkup(rawTitle);

  let keyTerms: string[] = [];
  let commentaryLines: string[] = [];
  let inCommentary = false;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];

    // Parse key terms: **Key Terms:** term1, term2
    const keyTermsMatch = line.match(/^\*\*Key Terms:\*\*\s*(.+)$/);
    if (keyTermsMatch) {
      keyTerms = keyTermsMatch[1]
        .split(",")
        .map((t) => unwrapMarkup(t).trim())
        .filter(Boolean);
      inCommentary = true;
      continue;
    }

    // Parse lesson ref: **Lesson:** balabodhini-1-07
    const lessonRefMatch = line.match(/^\*\*Lesson:\*\*\s*(.+)$/);
    if (lessonRefMatch) {
      // stored in commentary lines for now, extracted below
      commentaryLines.push(line);
      inCommentary = true;
      continue;
    }

    // Skip empty lines before commentary starts
    if (!inCommentary && line.trim() === "") continue;

    inCommentary = true;
    commentaryLines.push(line);
  }

  const commentary = commentaryLines.join("\n").trim();

  // Determine sutraId: preserve known types as-is; collapse others to sutraId (for sūtra refs)
  const knownTypes = ["concept", "reading", "quiz", "practice", "summary", "exercise", "lesson"];
  const normalizedId = sutraId.toLowerCase();
  const finalSutraId = knownTypes.includes(normalizedId)
    ? normalizedId
    : sutraId;

  // Extract lessonRef from commentary lines if present
  let lessonRef: string | undefined;
  const lessonRefLine = commentaryLines.find(l => l.match(/^\*\*Lesson:\*\*\s*/));
  if (lessonRefLine) {
    const m = lessonRefLine.match(/^\*\*Lesson:\*\*\s*(.+)$/);
    if (m) lessonRef = m[1].trim();
  }
  // Remove the **Lesson:** line from commentary
  const cleanCommentary = commentaryLines
    .filter(l => !l.match(/^\*\*Lesson:\*\*\s*/))
    .join("\n")
    .trim();

  // A quiz step's body is Question/Options/Explanation, not prose commentary
  // — QuizStep renders those fields itself, so they don't also belong in
  // `commentary` (nothing reads it for a quiz step today, but a raw
  // **Options:** checkbox list is not something CommentaryText should ever
  // be asked to render as prose).
  const quiz = finalSutraId === "quiz" ? parseQuiz(cleanCommentary) : undefined;

  return {
    sutraId: finalSutraId,
    title: title.trim(),
    commentary: quiz ? undefined : (cleanCommentary || undefined),
    keyTerms: keyTerms.length > 0 ? keyTerms : undefined,
    quiz,
    lessonRef,
  };
}

/**
 * Parse markdown content into a LearningPath
 */
function parsePathMarkdown(content: string): LearningPath {
  const { frontmatter, body } = parseFrontmatter(content);

  // Split body into sections by ---
  const sections = body.split(/\n---\n/).filter((s) => s.trim());

  const steps: LearningStep[] = [];
  for (const section of sections) {
    const step = parseStep(section);
    if (step) {
      steps.push(step);
    }
  }

  return {
    id: frontmatter.id,
    title: frontmatter.title,
    titleSanskrit: frontmatter.titleSanskrit,
    label: frontmatter.label || frontmatter.titleSanskrit,
    track: frontmatter.track as Track,
    category: frontmatter.category as PathCategory,
    description: frontmatter.description,
    difficulty: frontmatter.difficulty,
    estimatedTime: frontmatter.estimatedTime,
    prerequisites: frontmatter.prerequisites,
    steps,
  };
}

/**
 * Load a specific learning path by ID
 */
export async function loadPath(pathId: string): Promise<LearningPath | null> {
  // Check cache
  if (pathCache.has(pathId)) {
    return pathCache.get(pathId)!;
  }

  // Find the path in index to get filename
  const index = await loadPathIndex();
  const meta = index.find((p) => p.id === pathId);
  if (!meta) {
    return null;
  }

  // Fetch and parse the markdown file from the track/path folder
  const response = await fetch(
    `/content/paths/${meta.trackFolder}/${meta.folder}/path.md`,
  );
  if (!response.ok) {
    console.error(`Failed to load path ${pathId}: ${response.statusText}`);
    return null;
  }

  const content = await response.text();
  const path = parsePathMarkdown(content);

  // Cache it
  pathCache.set(pathId, path);

  return path;
}

/**
 * Load all paths (for tree building)
 * Note: This loads full content - use loadPathIndex() for just metadata
 */
export async function loadAllPaths(): Promise<LearningPath[]> {
  const index = await loadPathIndex();
  const paths: LearningPath[] = [];

  for (const meta of index) {
    const path = await loadPath(meta.id);
    if (path) {
      paths.push(path);
    }
  }

  return paths;
}

/**
 * Clear caches (useful for hot reloading in dev)
 */
export function clearContentCache() {
  pathIndexCache = null;
  pathCache.clear();
}
