<script lang="ts">
  import { selectedTerm } from '$lib/stores/jargon';
  import { commentaryDepth } from '$lib/stores/preferences';
  import { learnerTerms } from '$lib/stores/learner-terms';
  import { lookupTerm } from '$lib/jargon';
  import { isLayeredCommentary, getCommentaryAtDepth, type SutraCommentaryData, type CommentaryDepth } from '$lib/data/types';
  import { marked } from 'marked';
  import { transliterate } from '$lib/transliteration';
  import Sanskrit from './Sanskrit.svelte';
  import RefPreview from './RefPreview.svelte';

  let markdownContainer: HTMLDivElement | null = $state(null);

  interface Props {
    /** Plain text (old format) */
    text?: string;
    /** Layered commentary data (new format) */
    data?: SutraCommentaryData;
    /** Override depth (if not using global preference) */
    depth?: CommentaryDepth;
    /** Whether to track and show inline definitions for new terms */
    trackTerms?: boolean;
    /** Whether to show expandable previews for sutra references */
    expandableRefs?: boolean;
  }

  let { text, data, depth, trackTerms = false, expandableRefs = false }: Props = $props();

  // Configure marked for inline rendering (no <p> wrapper for single paragraphs)
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // Resolve the actual text to display
  let displayText = $derived.by(() => {
    // If plain text provided, use it directly
    if (text !== undefined) return text;

    // If layered data provided, extract at appropriate depth
    if (data !== undefined) {
      const effectiveDepth = depth ?? $commentaryDepth;
      return getCommentaryAtDepth(data, effectiveDepth);
    }

    return '';
  });

  // Check if text contains markdown that needs rendering
  function hasMarkdown(input: string): boolean {
    // Check for common markdown patterns: tables, bold, headers, lists
    return /(\|.*\||\*\*.*\*\*|^#{1,6}\s|^[-*]\s|^\d+\.\s)/m.test(input);
  }

  // Parse text to find @deva[...], @ref[...], and @[...] patterns
  interface Segment {
    type: 'text' | 'deva' | 'ref' | 'roman';
    content: string;
  }

  function parseText(input: string): Segment[] {
    const segments: Segment[] = [];
    // Match @deva[...], @ref[...], or plain @[...] (roman/IAST)
    const regex = /@(?:(deva|ref)\[([^\]]+)\]|\[([^\]]+)\])/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(input)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        segments.push({
          type: 'text',
          content: input.slice(lastIndex, match.index)
        });
      }

      if (match[1]) {
        // Tagged content: @deva[...] or @ref[...]
        segments.push({
          type: match[1] as 'deva' | 'ref',
          content: match[2]
        });
      } else {
        // Plain @[...] - roman/IAST term
        segments.push({
          type: 'roman',
          content: match[3]
        });
      }

      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < input.length) {
      segments.push({
        type: 'text',
        content: input.slice(lastIndex)
      });
    }

    return segments;
  }

  function handleTermClick(term: string) {
    selectedTerm.set(term);
    // Mark term as learned when clicked
    if (trackTerms) {
      learnerTerms.introduce(term);
    }
  }

  function isKnownTerm(term: string): boolean {
    return lookupTerm(term) !== undefined;
  }

  function isLearnerKnownTerm(term: string): boolean {
    return $learnerTerms.knownTerms.includes(term.toLowerCase().trim());
  }

  function getTermDefinition(term: string): string | undefined {
    const entry = lookupTerm(term);
    return entry?.meaning;
  }

  let segments = $derived(parseText(displayText));

  // Check if a string contains Devanagari characters
  function isDevanagari(text: string): boolean {
    // Devanagari Unicode range: U+0900 to U+097F
    return /[\u0900-\u097F]/.test(text);
  }

  // For markdown content, we need a different approach:
  // 1. First render markdown to HTML
  // 2. Then post-process to replace @deva[...] etc with placeholder spans
  // 3. Use {@html} to render

  // Render markdown and convert @deva/@ref tags to data attributes for post-processing
  let renderedHtml = $derived.by(() => {
    if (!hasMarkdown(displayText)) return null;

    // First, protect our custom tags by converting to placeholders
    // Mark whether content is already Devanagari or needs transliteration from SLP1
    let processed = displayText
      .replace(/@deva\[([^\]]+)\]/g, (_, content) => {
        const script = isDevanagari(content) ? 'deva' : 'slp1';
        return `%%DEVA:${script}:${content}%%`;
      })
      .replace(/@ref\[([^\]]+)\]/g, '%%REF:$1%%')
      .replace(/@\[([^\]]+)\]/g, '%%ROMAN:$1%%');

    // Render markdown
    let html = marked.parse(processed) as string;

    // Convert placeholders back to clickable buttons with data attributes
    // data-script indicates whether transliteration is needed
    html = html
      .replace(/%%DEVA:([^:]+):([^%]+)%%/g, '<button type="button" class="deva-term" data-term="$2" data-script="$1">$2</button>')
      .replace(/%%REF:([^%]+)%%/g, '<a href="/sutra/$1" class="ref-link">$1</a>')
      .replace(/%%ROMAN:([^%]+)%%/g, '<button type="button" class="roman-term" data-term="$1">$1</button>');

    return html;
  });

  // Handle clicks on deva/roman terms in markdown content via event delegation
  function handleMarkdownClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('deva-term') || target.classList.contains('roman-term')) {
      const term = target.dataset.term;
      if (term) {
        handleTermClick(term);
      }
    }
  }

  let useMarkdown = $derived(hasMarkdown(displayText));

  // Transliterate SLP1 content to Devanagari after markdown renders
  // Content already in Devanagari (data-script="deva") is left unchanged
  $effect(() => {
    if (markdownContainer && useMarkdown) {
      // Only transliterate elements marked as SLP1
      const slp1Terms = markdownContainer.querySelectorAll('.deva-term[data-script="slp1"]');
      slp1Terms.forEach(async (el) => {
        const term = el.getAttribute('data-term');
        if (term && el.textContent === term) {
          // Only transliterate if not already done
          const devanagari = await transliterate(term, 'slp1', 'devanagari');
          el.textContent = devanagari;
          el.removeAttribute('data-script'); // Mark as transliterated
        }
      });

      // For Devanagari content, just remove the data-script attribute (no transliteration needed)
      const devaTerms = markdownContainer.querySelectorAll('.deva-term[data-script="deva"]');
      devaTerms.forEach((el) => {
        el.removeAttribute('data-script');
      });
    }
  });
</script>

{#if useMarkdown && renderedHtml}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="markdown-content" bind:this={markdownContainer} onclick={handleMarkdownClick}>
    {@html renderedHtml}
  </div>
{:else}
  {#each segments as segment}
  {#if segment.type === 'text'}
    {segment.content}
  {:else if segment.type === 'deva'}
    {@const hasDefinition = isKnownTerm(segment.content)}
    {@const learnerKnows = isLearnerKnownTerm(segment.content)}
    {@const showInline = trackTerms && hasDefinition && !learnerKnows}
    {@const definition = showInline ? getTermDefinition(segment.content) : undefined}
    <button
      type="button"
      onclick={() => handleTermClick(segment.content)}
      class="inline-flex items-center px-1 py-0.5 rounded transition-colors
             {hasDefinition
               ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 cursor-pointer'
               : 'bg-amber-50 text-amber-800 hover:bg-amber-100 cursor-pointer'}"
      title={hasDefinition ? 'Click to look up' : segment.content}
    >
      <Sanskrit text={segment.content} />
    </button>{#if showInline && definition}<span class="text-stone-500 text-sm ml-1">({definition})</span>{/if}
  {:else if segment.type === 'ref'}
    {#if expandableRefs}
      <RefPreview sutraId={segment.content} />
    {:else}
      <a
        href="/sutra/{segment.content}"
        class="text-indigo-600 hover:underline font-mono text-sm"
      >
        {segment.content}
      </a>
    {/if}
  {:else if segment.type === 'roman'}
    {@const hasDefinition = isKnownTerm(segment.content)}
    {@const learnerKnows = isLearnerKnownTerm(segment.content)}
    {@const showInline = trackTerms && hasDefinition && !learnerKnows}
    {@const definition = showInline ? getTermDefinition(segment.content) : undefined}
    <span
      class="italic text-amber-800 cursor-pointer hover:underline"
      onclick={() => handleTermClick(segment.content)}
      role="button"
      tabindex="0"
      onkeydown={(e) => e.key === 'Enter' && handleTermClick(segment.content)}
    >{segment.content}</span>{#if showInline && definition}<span class="text-stone-500 text-sm ml-1">({definition})</span>{/if}
  {/if}
  {/each}
{/if}

<style>
  /* Markdown content styles */
  .markdown-content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 0.9rem;
  }

  .markdown-content :global(th),
  .markdown-content :global(td) {
    border: 1px solid #e7e5e4;
    padding: 0.5rem 0.75rem;
    text-align: left;
  }

  .markdown-content :global(th) {
    background: #fafaf9;
    font-weight: 600;
    color: #44403c;
  }

  .markdown-content :global(tr:nth-child(even)) {
    background: #fafaf9;
  }

  .markdown-content :global(strong) {
    font-weight: 600;
    color: #1c1917;
  }

  .markdown-content :global(em) {
    font-style: italic;
  }

  .markdown-content :global(ul),
  .markdown-content :global(ol) {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
  }

  .markdown-content :global(li) {
    margin: 0.25rem 0;
  }

  .markdown-content :global(p) {
    margin: 0.75rem 0;
  }

  .markdown-content :global(p:first-child) {
    margin-top: 0;
  }

  .markdown-content :global(p:last-child) {
    margin-bottom: 0;
  }

  .markdown-content :global(h1),
  .markdown-content :global(h2),
  .markdown-content :global(h3),
  .markdown-content :global(h4) {
    font-weight: 600;
    margin: 1rem 0 0.5rem 0;
    color: #1c1917;
  }

  .markdown-content :global(code) {
    background: #f5f5f4;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
  }

  /* Styled buttons for @deva, @ref, @roman in markdown */
  .markdown-content :global(.deva-term) {
    display: inline-flex;
    align-items: center;
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

  .markdown-content :global(.deva-term:hover) {
    background: #c7d2fe;
  }

  .markdown-content :global(.ref-link) {
    color: #4f46e5;
    font-family: monospace;
    font-size: 0.875em;
  }

  .markdown-content :global(.ref-link:hover) {
    text-decoration: underline;
  }

  .markdown-content :global(.roman-term) {
    display: inline;
    padding: 0.125rem 0.25rem;
    background: transparent;
    border: none;
    font-style: italic;
    color: #92400e;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
  }

  .markdown-content :global(.roman-term:hover) {
    text-decoration: underline;
  }
</style>
