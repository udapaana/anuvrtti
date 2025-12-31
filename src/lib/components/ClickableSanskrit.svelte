<script lang="ts">
  import { selectedTerm } from '$lib/stores/jargon';
  import { lookupTerm } from '$lib/jargon';
  import Sanskrit from './Sanskrit.svelte';

  interface Props {
    /** The Sanskrit text to display with clickable words */
    text: string;
    /** Optional CSS class */
    class?: string;
  }

  let { text, class: className = '' }: Props = $props();

  // Split text into words, preserving delimiters (spaces, hyphens, punctuation)
  // Sanskrit anuvṛtti uses both spaces and hyphens as word boundaries
  function splitIntoWords(input: string): { word: string; isWord: boolean }[] {
    const result: { word: string; isWord: boolean }[] = [];
    // Match sequences of Devanagari characters (words) vs delimiters (spaces, hyphens, punctuation)
    // Devanagari range: \u0900-\u097F
    const regex = /([\u0900-\u097F]+)|([^\u0900-\u097F]+)/g;
    let match;

    while ((match = regex.exec(input)) !== null) {
      if (match[1]) {
        // Devanagari word
        result.push({ word: match[1], isWord: true });
      } else if (match[2]) {
        // Delimiter: space, hyphen, punctuation, etc.
        result.push({ word: match[2], isWord: false });
      }
    }

    return result;
  }

  function handleWordClick(word: string) {
    selectedTerm.set(word);
  }

  function isKnownTerm(word: string): boolean {
    return lookupTerm(word) !== undefined;
  }

  let words = $derived(splitIntoWords(text));
</script>

<span class={className}>
  {#each words as { word, isWord }}
    {#if isWord}
      {@const known = isKnownTerm(word)}
      <button
        type="button"
        onclick={() => handleWordClick(word)}
        class="inline transition-colors rounded px-0.5 -mx-0.5
               {known
                 ? 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 cursor-pointer border-b border-indigo-200 hover:border-indigo-400'
                 : 'hover:bg-stone-100 cursor-pointer border-b border-transparent hover:border-stone-300'}"
        title={known ? 'Click to look up' : 'Look up in jargon'}
      >
        <Sanskrit text={word} />
      </button>
    {:else}
      {word}
    {/if}
  {/each}
</span>
