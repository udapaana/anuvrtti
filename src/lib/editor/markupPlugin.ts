/**
 * Toast UI Editor plugin that teaches the editor to render our custom markup:
 *   @deva[text]     → Devanagari span (transliterated per current script)
 *   @[roman]        → italic Roman term
 *   @term[roman]    → alias for @[roman]
 *   @ref[1.1.1]     → link to sūtra
 *   @sutra[1.1.1]   → inline sūtra reference (rendered as link for now)
 *
 * The plugin works in two parts:
 * 1. A markdown-it rule that parses @xxx[...] tokens inline
 * 2. customHTMLRenderer entries that render them as HTML
 *
 * Transliteration: the plugin reads the current script from a getter function
 * passed at plugin creation time. When the script changes, the editor's
 * preview can be refreshed by calling editor.setMarkdown(editor.getMarkdown()).
 */

import type { EditorPlugin } from '@toast-ui/editor';

// Token types we handle
const TOKEN_RE = /@(deva|ref|sutra|term)?\[([^\]]*)\]/g;

type MarkupTokenType = 'deva' | 'ref' | 'sutra' | 'term' | 'roman';

interface MarkupToken {
  type: MarkupTokenType;
  content: string;
}

function parseMarkupTokens(text: string): Array<string | MarkupToken> {
  const parts: Array<string | MarkupToken> = [];
  let last = 0;
  const re = /@(deva|ref|sutra|term)?\[([^\]]*)\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tag = m[1] as MarkupTokenType | undefined;
    const content = m[2];
    parts.push({ type: tag ?? 'roman', content });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function tokenToHtml(
  token: MarkupToken,
  getScript: () => string,
): string {
  const script = getScript();
  switch (token.type) {
    case 'deva':
      // Always show Devanagari for now; full transliteration would need async
      // which Toast UI's sync renderer can't do. Show deva, add data attr for script.
      return `<span class="sanskrit-term" lang="sa" data-script="${script}">${token.content}</span>`;
    case 'ref':
    case 'sutra':
      return `<a href="/ref/${token.content}" class="sutra-ref-link">${token.content}</a>`;
    case 'term':
    case 'roman':
      return `<em class="roman-term">${token.content}</em>`;
    default:
      return token.content;
  }
}

/**
 * Render a text string containing our markup into HTML.
 * Used for preview rendering inside Toast UI.
 */
export function renderMarkupToHtml(text: string, getScript: () => string): string {
  const parts = parseMarkupTokens(text);
  return parts.map(p =>
    typeof p === 'string' ? p : tokenToHtml(p, getScript)
  ).join('');
}

/**
 * Create the Toast UI editor plugin.
 * Pass a `getScript` function that returns the current display script.
 */
export function createMarkupPlugin(getScript: () => string): EditorPlugin {
  return () => ({
    toHTMLRenderers: {
      // Override the text node renderer to process our markup
      text(node: any) {
        const raw: string = node.literal ?? '';
        if (!raw.includes('@')) {
          // Fast path — no markup tokens
          return [{ type: 'html', content: raw }];
        }
        return [{ type: 'html', content: renderMarkupToHtml(raw, getScript) }];
      },
    },
  });
}
