/**
 * Parser for markdown-based learning path files
 *
 * Format:
 * ---
 * id: path-id
 * title: Path Title
 * titleSanskrit: संस्कृत
 * description: Path description
 * difficulty: beginner|intermediate|advanced
 * estimatedTime: 2-3 hours
 * prerequisites:
 *   - other-path-id
 * ---
 *
 * ## 1.1.1 - Step Title
 *
 * **Key Terms:** term1, term2, term3
 *
 * Commentary text goes here. This explains why this sutra matters
 * in the context of this learning path.
 *
 * ---
 *
 * ## 1.1.2 - Next Step Title
 * ...
 */

import type { LearningPath, LearningStep } from './paths';

interface PathFrontmatter {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites: string[];
}

/**
 * Parse YAML-like frontmatter from markdown
 */
function parseFrontmatter(content: string): { frontmatter: PathFrontmatter; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error('Invalid markdown format: missing frontmatter');
  }

  const [, yaml, body] = match;
  const frontmatter: Partial<PathFrontmatter> = {
    prerequisites: [],
  };

  let inPrereqs = false;
  for (const line of yaml.split('\n')) {
    if (line.startsWith('  - ')) {
      // Array item
      if (inPrereqs) {
        frontmatter.prerequisites!.push(line.replace('  - ', '').trim());
      }
      continue;
    }

    inPrereqs = false;
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    switch (key) {
      case 'id':
        frontmatter.id = value;
        break;
      case 'title':
        frontmatter.title = value;
        break;
      case 'titleSanskrit':
        frontmatter.titleSanskrit = value;
        break;
      case 'description':
        frontmatter.description = value;
        break;
      case 'difficulty':
        frontmatter.difficulty = value as PathFrontmatter['difficulty'];
        break;
      case 'estimatedTime':
        frontmatter.estimatedTime = value;
        break;
      case 'prerequisites':
        inPrereqs = true;
        // Check for inline array format: [item1, item2]
        if (value.startsWith('[') && value.endsWith(']')) {
          const items = value.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
          frontmatter.prerequisites = items;
          inPrereqs = false;
        }
        break;
    }
  }

  return { frontmatter: frontmatter as PathFrontmatter, body };
}

/**
 * Parse a step section from markdown
 */
function parseStep(section: string): LearningStep | null {
  const lines = section.trim().split('\n');
  if (lines.length === 0) return null;

  // Parse header: ## 1.1.1 - Step Title
  const headerMatch = lines[0].match(/^##\s+(\d+\.\d+\.\d+)\s*-\s*(.+)$/);
  if (!headerMatch) return null;

  const [, sutraId, title] = headerMatch;

  let keyTerms: string[] = [];
  let commentaryLines: string[] = [];
  let inCommentary = false;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];

    // Parse key terms: **Key Terms:** term1, term2
    const keyTermsMatch = line.match(/^\*\*Key Terms:\*\*\s*(.+)$/);
    if (keyTermsMatch) {
      keyTerms = keyTermsMatch[1].split(',').map(t => t.trim()).filter(Boolean);
      inCommentary = true;
      continue;
    }

    // Skip empty lines before commentary starts
    if (!inCommentary && line.trim() === '') continue;

    // Everything else is commentary
    inCommentary = true;
    commentaryLines.push(line);
  }

  const commentary = commentaryLines.join('\n').trim();

  return {
    sutraId,
    title: title.trim(),
    commentary: commentary || undefined,
    keyTerms: keyTerms.length > 0 ? keyTerms : undefined,
  };
}

/**
 * Parse a complete markdown file into a LearningPath
 */
export function parsePathMarkdown(content: string): LearningPath {
  const { frontmatter, body } = parseFrontmatter(content);

  // Split body into sections by ---
  const sections = body.split(/\n---\n/).filter(s => s.trim());

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
    description: frontmatter.description,
    difficulty: frontmatter.difficulty,
    estimatedTime: frontmatter.estimatedTime,
    prerequisites: frontmatter.prerequisites,
    steps,
  };
}

/**
 * Convert a LearningPath back to markdown format
 */
export function pathToMarkdown(path: LearningPath): string {
  const lines: string[] = [];

  // Frontmatter
  lines.push('---');
  lines.push(`id: ${path.id}`);
  lines.push(`title: ${path.title}`);
  lines.push(`titleSanskrit: ${path.titleSanskrit}`);
  lines.push(`description: ${path.description}`);
  lines.push(`difficulty: ${path.difficulty}`);
  lines.push(`estimatedTime: ${path.estimatedTime}`);
  if (path.prerequisites.length === 0) {
    lines.push('prerequisites: []');
  } else {
    lines.push('prerequisites:');
    for (const prereq of path.prerequisites) {
      lines.push(`  - ${prereq}`);
    }
  }
  lines.push('---');
  lines.push('');

  // Steps
  for (let i = 0; i < path.steps.length; i++) {
    const step = path.steps[i];

    lines.push(`## ${step.sutraId} - ${step.title}`);
    lines.push('');

    if (step.keyTerms && step.keyTerms.length > 0) {
      lines.push(`**Key Terms:** ${step.keyTerms.join(', ')}`);
      lines.push('');
    }

    if (step.commentary) {
      lines.push(step.commentary);
    }

    if (i < path.steps.length - 1) {
      lines.push('');
      lines.push('---');
      lines.push('');
    }
  }

  return lines.join('\n');
}
