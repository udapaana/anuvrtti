/**
 * Validates custom markup tokens used in commentary and path content.
 *
 * Supported tokens:
 *   @deva[text]        — Devanagari term (rendered + clickable)
 *   @[roman]           — italic Roman term (clickable)
 *   @ref[1.1.1]        — link to a sūtra
 *   @sutra[1.1.1]      — embedded sūtra block
 *   @prakriya[spec]    — embedded derivation
 *   @term[roman]       — alias for @[roman]
 */

export interface MarkupValidationResult {
  valid: boolean;
  errors: string[];
}

// Each token pattern: name, regex to find the token, rule to validate its content
const TOKEN_RULES: Array<{
  name: string;
  pattern: RegExp;
  validateContent?: (content: string) => string | null; // returns error or null
}> = [
  {
    name: '@deva',
    pattern: /@deva\[([^\]]*)\]/g,
    // Content should be non-empty
    validateContent: (c) => c.trim() ? null : 'empty @deva[] content',
  },
  {
    name: '@ref',
    pattern: /@ref\[([^\]]*)\]/g,
    // Content should match sūtra ID format: digits.digits.digits
    validateContent: (c) =>
      /^\d+\.\d+\.\d+$/.test(c.trim())
        ? null
        : `invalid sūtra ID in @ref[${c}] — expected format like 1.1.1`,
  },
  {
    name: '@sutra',
    pattern: /@sutra\[([^\]]*)\]/g,
    validateContent: (c) =>
      /^\d+\.\d+\.\d+$/.test(c.trim())
        ? null
        : `invalid sūtra ID in @sutra[${c}] — expected format like 1.1.1`,
  },
  {
    name: '@[]',
    pattern: /@\[([^\]]*)\]/g,
    validateContent: (c) => c.trim() ? null : 'empty @[] content',
  },
  {
    name: '@term',
    pattern: /@term\[([^\]]*)\]/g,
    validateContent: (c) => c.trim() ? null : 'empty @term[] content',
  },
  {
    name: '@prakriya',
    pattern: /@prakriya\[([^\]]*)\]/g,
    validateContent: (c) => c.trim() ? null : 'empty @prakriya[] content',
  },
];

/**
 * Check for unclosed @ tokens — an @ followed by a word and [ but no closing ]
 */
function findUnclosedTokens(text: string): string[] {
  const errors: string[] = [];
  const unclosed = /@\w*\[[^\]]*$/gm;
  let match;
  while ((match = unclosed.exec(text)) !== null) {
    errors.push(`unclosed token at position ${match.index}: "${match[0].slice(0, 30)}..."`);
  }
  return errors;
}

/**
 * Validate all markup tokens in a text string.
 * Used both client-side (live preview) and server-side (before commit).
 */
export function validateMarkup(text: string): MarkupValidationResult {
  const errors: string[] = [];

  // Check for unclosed brackets first
  errors.push(...findUnclosedTokens(text));

  // Validate each known token type
  for (const rule of TOKEN_RULES) {
    const re = new RegExp(rule.pattern.source, 'g');
    let match;
    while ((match = re.exec(text)) !== null) {
      if (rule.validateContent) {
        const err = rule.validateContent(match[1]);
        if (err) errors.push(err);
      }
    }
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate all text fields in a parsed TOML object recursively.
 * Returns combined errors with field paths.
 */
export function validateMarkupInObject(
  obj: Record<string, unknown>,
  path = '',
): MarkupValidationResult {
  const errors: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const fieldPath = path ? `${path}.${key}` : key;
    if (typeof value === 'string') {
      const result = validateMarkup(value);
      if (!result.valid) {
        errors.push(...result.errors.map(e => `[${fieldPath}] ${e}`));
      }
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const nested = validateMarkupInObject(value as Record<string, unknown>, fieldPath);
      errors.push(...nested.errors);
    }
  }

  return { valid: errors.length === 0, errors };
}
