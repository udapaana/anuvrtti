<script lang="ts">
  import { selectedTerm } from '$lib/stores/jargon';
  import { lookupTerm } from '$lib/jargon';
  import Sanskrit from './Sanskrit.svelte';

  interface Props {
    text: string;
  }

  let { text }: Props = $props();

  // Parse text to find @deva[...] and @ref[...] patterns
  interface Segment {
    type: 'text' | 'deva' | 'ref';
    content: string;
  }

  function parseText(input: string): Segment[] {
    const segments: Segment[] = [];
    // Match @deva[...] or @ref[...]
    const regex = /@(deva|ref)\[([^\]]+)\]/g;
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

      // Add the tagged content
      segments.push({
        type: match[1] as 'deva' | 'ref',
        content: match[2]
      });

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
  }

  function isKnownTerm(term: string): boolean {
    return lookupTerm(term) !== undefined;
  }

  let segments = $derived(parseText(text));
</script>

{#each segments as segment}
  {#if segment.type === 'text'}
    {segment.content}
  {:else if segment.type === 'deva'}
    {@const known = isKnownTerm(segment.content)}
    <button
      type="button"
      onclick={() => handleTermClick(segment.content)}
      class="inline-flex items-center px-1 py-0.5 rounded transition-colors
             {known
               ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 cursor-pointer'
               : 'bg-amber-50 text-amber-800 hover:bg-amber-100 cursor-pointer'}"
      title={known ? 'Click to look up' : segment.content}
    >
      <Sanskrit text={segment.content} />
    </button>
  {:else if segment.type === 'ref'}
    <a
      href="/sutra/{segment.content}"
      class="text-indigo-600 hover:underline font-mono text-sm"
    >
      {segment.content}
    </a>
  {/if}
{/each}
