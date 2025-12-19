/**
 * Markup processing for Sanskrit text with @[...] and @deva[...] tags
 *
 * Syntax:
 * - @[text] - IAST source text
 * - @deva[text] - Devanagari source text
 * - @[text | deva>>alt] - IAST primary with Devanagari alternative
 * - @deva[text | iast>>alt] - Devanagari primary with IAST alternative
 */

export interface SanskritSpan {
  text: string;
  sourceScript: 'devanagari' | 'iast';
  altText?: string;
  altScript?: 'devanagari' | 'iast';
}

export interface ParsedContent {
  type: 'text' | 'sanskrit';
  content: string | SanskritSpan;
}

/**
 * Parse text containing @[...] and @deva[...] markers into segments
 */
export function parseMarkup(text: string): ParsedContent[] {
  const result: ParsedContent[] = [];
  let remaining = text;

  // Combined pattern for all Sanskrit markers
  const pattern = /(@deva\[([^\]|]+)(?:\s*\|\s*iast>>([^\]]+))?\]|@\[([^\]|]+)(?:\s*\|\s*deva>>([^\]]+))?\])/;

  while (remaining.length > 0) {
    const match = remaining.match(pattern);

    if (!match) {
      // No more markers, add remaining text
      if (remaining) {
        result.push({ type: 'text', content: remaining });
      }
      break;
    }

    // Add text before the marker
    const beforeMatch = remaining.slice(0, match.index);
    if (beforeMatch) {
      result.push({ type: 'text', content: beforeMatch });
    }

    // Parse the marker
    const fullMatch = match[0];

    if (fullMatch.startsWith('@deva[')) {
      // Devanagari source
      const mainText = match[2];
      const altText = match[3];
      result.push({
        type: 'sanskrit',
        content: {
          text: mainText,
          sourceScript: 'devanagari',
          altText: altText?.trim(),
          altScript: altText ? 'iast' : undefined
        }
      });
    } else {
      // IAST source (@[...])
      const mainText = match[4];
      const altText = match[5];
      result.push({
        type: 'sanskrit',
        content: {
          text: mainText,
          sourceScript: 'iast',
          altText: altText?.trim(),
          altScript: altText ? 'devanagari' : undefined
        }
      });
    }

    remaining = remaining.slice(match.index! + fullMatch.length);
  }

  return result;
}

/**
 * Check if text contains any Sanskrit markup
 */
export function hasMarkup(text: string): boolean {
  return /@\[|@deva\[/.test(text);
}

/**
 * Strip markup and return plain text (uses source script text)
 */
export function stripMarkup(text: string): string {
  return text
    .replace(/@deva\[([^\]|]+)(?:\s*\|[^\]]+)?\]/g, '$1')
    .replace(/@\[([^\]|]+)(?:\s*\|[^\]]+)?\]/g, '$1');
}
