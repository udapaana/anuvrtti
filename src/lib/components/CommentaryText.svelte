<script lang="ts">
  import { selectedTerm } from '$lib/stores/jargon';
  import { commentaryDepth, displayScript } from '$lib/stores/preferences';
  import { learnerTerms } from '$lib/stores/learner-terms';
  import { getCommentaryAtDepth, type SutraCommentaryData, type CommentaryDepth } from '$lib/data/types';
  import { marked } from 'marked';
  import { transliterate } from '$lib/transliteration';
  import EmbeddedSutra from './EmbeddedSutra.svelte';
  import EmbeddedPrakriya from './EmbeddedPrakriya.svelte';

  interface Props {
    text?: string;
    data?: SutraCommentaryData;
    depth?: CommentaryDepth;
    trackTerms?: boolean;
    expandableRefs?: boolean;
  }

  let { text, data, depth, trackTerms = false, expandableRefs = false }: Props = $props();

  let container: HTMLDivElement | null = $state(null);

  // Configure marked
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // Resolve the actual text to display
  let displayText = $derived.by(() => {
    if (text !== undefined) return text;
    if (data !== undefined) {
      const effectiveDepth = depth ?? $commentaryDepth;
      return getCommentaryAtDepth(data, effectiveDepth);
    }
    return '';
  });

  function parseOptions(optStr: string): Record<string, string> {
    const opts: Record<string, string> = {};
    if (!optStr) return opts;
    const inner = optStr.replace(/^\{|\}$/g, '');
    for (const part of inner.split(',')) {
      const trimmed = part.trim();
      if (trimmed.includes('=')) {
        const [key, value] = trimmed.split('=').map(s => s.trim());
        opts[key] = value;
      } else if (trimmed) {
        opts[trimmed] = 'true';
      }
    }
    return opts;
  }

  // Check if content is Devanagari
  function isDevanagari(text: string): boolean {
    return /[\u0900-\u097F]/.test(text);
  }

  // Add paragraph breaks to poorly-formatted text
  function addParagraphBreaks(text: string): string {
    // If already has paragraph breaks, leave it alone
    if (text.includes('\n\n')) return text;

    // Add breaks before common section starters
    let result = text
      // Before "Examples:" or "Example:"
      .replace(/\.\s+(Examples?:)/g, '.\n\n$1')
      // Before "Why ..." questions
      .replace(/\.\s+(Why\s)/g, '.\n\n$1')
      // Before "Note:" or "Notes:"
      .replace(/\.\s+(Notes?:)/g, '.\n\n$1')
      // Before "Derivation:"
      .replace(/\.\s+(Derivation:)/g, '.\n\n$1')
      // Before "Usage:"
      .replace(/\.\s+(Usage:)/g, '.\n\n$1')
      // Before "Also ..."
      .replace(/\.\s+(Also\s)/g, '.\n\n$1')
      // Before bold section headers like **Examples:**
      .replace(/\.\s+(\*\*[A-Z])/g, '.\n\n$1');

    return result;
  }

  // Process text: replace extensions with HTML, then render markdown
  let renderedHtml = $derived.by(() => {
    if (!displayText) return '';

    // First, add paragraph breaks if needed
    let processed = addParagraphBreaks(displayText)
      // @deva[text]
      .replace(/@deva\[([^\]]+)\]/g, (_, content) => {
        const script = isDevanagari(content) ? 'deva' : 'slp1';
        return `<button type="button" class="deva-term" data-script="${script}" data-term="${content}">${content}</button>`;
      })
      // @ref[id]
      .replace(/@ref\[([^\]]+)\]/g, '<a href="/ref/$1" class="ref-link">$1</a>')
      // @[roman text]
      .replace(/@\[([^\]]+)\]/g, '<span class="roman-term" data-term="$1">$1</span>')
      // @pratyahara[code]
      .replace(/@pratyahara\[([^\]]+)\]/g, '<span class="pratyahara-inline">$1</span>')
      // @term[word]{display}
      .replace(/@term\[([^\]]+)\](\{[^}]*\})?/g, '<span class="term-inline">$1</span>');

    // Render markdown
    return marked.parse(processed) as string;
  });

  function handleTermClick(term: string) {
    selectedTerm.set(term);
    if (trackTerms) {
      learnerTerms.introduce(term);
    }
  }

  // Check for block-level Svelte components that need special rendering
  let hasBlockComponents = $derived(/@(sutra|prakriya)\[/.test(displayText));

  // For block components, we need a different approach - render segments
  interface Segment {
    type: 'html' | 'sutra' | 'prakriya' | 'pratyahara';
    content: string;
    options?: Record<string, string>;
  }

  let segments = $derived.by((): Segment[] => {
    if (!hasBlockComponents) return [];

    const segs: Segment[] = [];
    const blockRegex = /@(sutra|prakriya)\[([^\]]+)\](\{[^}]*\})?/g;
    let lastIndex = 0;
    let match;

    while ((match = blockRegex.exec(displayText)) !== null) {
      // Add HTML segment before this match
      if (match.index > lastIndex) {
        const textBefore = displayText.slice(lastIndex, match.index);
        const html = processInlineExtensions(textBefore);
        segs.push({ type: 'html', content: marked.parse(html) as string });
      }

      // Add component segment
      segs.push({
        type: match[1] as 'sutra' | 'prakriya',
        content: match[2],
        options: parseOptions(match[3] || '')
      });

      lastIndex = blockRegex.lastIndex;
    }

    // Add remaining HTML
    if (lastIndex < displayText.length) {
      const textAfter = displayText.slice(lastIndex);
      const html = processInlineExtensions(textAfter);
      segs.push({ type: 'html', content: marked.parse(html) as string });
    }

    return segs;
  });

  // Process only inline extensions (not block-level sutra/prakriya)
  function processInlineExtensions(text: string): string {
    return addParagraphBreaks(text)
      .replace(/@pratyahara\[([^\]]+)\]/g, '<span class="pratyahara-inline">$1</span>')
      .replace(/@term\[([^\]]+)\](\{[^}]*\})?/g, '<span class="term-inline">$1</span>')
      .replace(/@deva\[([^\]]+)\]/g, (_, content) => {
        const script = isDevanagari(content) ? 'deva' : 'slp1';
        return `<button type="button" class="deva-term" data-script="${script}" data-term="${content}">${content}</button>`;
      })
      .replace(/@ref\[([^\]]+)\]/g, '<a href="/ref/$1" class="ref-link">$1</a>')
      .replace(/@\[([^\]]+)\]/g, '<span class="roman-term" data-term="$1">$1</span>');
  }

  // Handle clicks via delegation
  function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('deva-term') || target.classList.contains('roman-term')) {
      const term = target.dataset.term || target.textContent;
      if (term) handleTermClick(term);
    }
  }

  // Transliterate all .deva-term elements to current display script.
  // Runs on mount (to convert SLP1 source terms) and on every script change.
  $effect(() => {
    if (!container) return;
    const targetScript = $displayScript; // reactive dependency
    // Also depend on renderedHtml so we re-run when content changes
    void renderedHtml;

    // Step 1: ensure every .deva-term has data-deva (canonical Devanagari source)
    const allTerms = container.querySelectorAll<HTMLElement>('.deva-term');
    allTerms.forEach(async (el) => {
      // First-time: convert SLP1 source to Devanagari and store as data-deva
      if (el.dataset.script === 'slp1') {
        const slp1 = el.dataset.term || el.textContent || '';
        const deva = await transliterate(slp1, 'slp1', 'devanagari');
        el.dataset.deva = deva;
        delete el.dataset.script;
      } else if (!el.dataset.deva) {
        // Already Devanagari — store it
        el.dataset.deva = el.dataset.term || el.textContent || '';
        delete el.dataset.script;
      }

      // Step 2: transliterate from Devanagari to target script
      const deva = el.dataset.deva || '';
      if (!deva) return;
      if (targetScript === 'devanagari') {
        el.textContent = deva;
      } else {
        el.textContent = await transliterate(deva, 'devanagari', targetScript);
      }
    });
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if hasBlockComponents}
  <div class="commentary-content" bind:this={container} onclick={handleClick}>
    {#each segments as segment}
      {#if segment.type === 'html'}
        <span class="markdown-content">{@html segment.content}</span>
      {:else if segment.type === 'sutra'}
        <EmbeddedSutra
          sutraId={segment.content}
          depth={(segment.options?.depth as CommentaryDepth) || 'simple'}
          compact={segment.options?.compact === 'true'}
        />
      {:else if segment.type === 'prakriya'}
        <EmbeddedPrakriya
          spec={segment.content}
          highlight={segment.options?.highlight}
          collapsed={segment.options?.collapsed === 'true'}
        />
      {/if}
    {/each}
  </div>
{:else}
  <div class="commentary-content markdown-content" bind:this={container} onclick={handleClick}>
    {@html renderedHtml}
  </div>
{/if}

<style>
  .commentary-content {
    line-height: 1.7;
  }

  /* Markdown content styles */
  .commentary-content :global(p) {
    margin: 0.75em 0;
  }

  .commentary-content :global(p:first-child) {
    margin-top: 0;
  }

  .commentary-content :global(p:last-child) {
    margin-bottom: 0;
  }

  .commentary-content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 0.9rem;
  }

  .commentary-content :global(th),
  .commentary-content :global(td) {
    border: 1px solid #e7e5e4;
    padding: 0.5rem 0.75rem;
    text-align: left;
  }

  .commentary-content :global(th) {
    background: #fafaf9;
    font-weight: 600;
    color: #44403c;
  }

  .commentary-content :global(tr:nth-child(even)) {
    background: #fafaf9;
  }

  .commentary-content :global(strong) {
    font-weight: 600;
    color: #1c1917;
  }

  .commentary-content :global(em) {
    font-style: italic;
  }

  .commentary-content :global(ul),
  .commentary-content :global(ol) {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
  }

  .commentary-content :global(li) {
    margin: 0.25rem 0;
  }

  .commentary-content :global(h1),
  .commentary-content :global(h2),
  .commentary-content :global(h3),
  .commentary-content :global(h4) {
    font-weight: 600;
    margin: 1rem 0 0.5rem 0;
    color: #1c1917;
  }

  .commentary-content :global(code) {
    background: #f5f5f4;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
  }

  /* Inline elements */
  .commentary-content :global(.deva-term) {
    display: inline;
    padding: 0.125rem 0.25rem;
    background: #eef2ff;
    color: #4338ca;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    transition: background-color 0.15s;
  }

  .commentary-content :global(.deva-term:hover) {
    background: #c7d2fe;
  }

  .commentary-content :global(.ref-link) {
    color: #4f46e5;
    font-family: ui-monospace, monospace;
    font-size: 0.875em;
    text-decoration: none;
  }

  .commentary-content :global(.ref-link:hover) {
    text-decoration: underline;
  }

  .commentary-content :global(.roman-term) {
    font-style: italic;
    color: #92400e;
    cursor: pointer;
  }

  .commentary-content :global(.roman-term:hover) {
    text-decoration: underline;
  }

  .commentary-content :global(.pratyahara-inline) {
    padding: 0.125rem 0.375rem;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 0.25rem;
    font-size: 0.9em;
    color: #166534;
  }

  .commentary-content :global(.term-inline) {
    border-bottom: 1px dotted #78716c;
    cursor: help;
  }
</style>
