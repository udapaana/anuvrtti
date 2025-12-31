<script lang="ts">
  import { getSutra, getCommentary, type Sutra, type Commentary } from '$lib/data';
  import Sanskrit from './Sanskrit.svelte';

  interface Props {
    /** Sutra ID to preview (e.g., "1.1.70") */
    sutraId: string;
    /** Whether to show as inline expandable or always visible */
    inline?: boolean;
  }

  let { sutraId, inline = true }: Props = $props();

  let expanded = $state(false);
  let loading = $state(false);
  let sutra = $state<Sutra | undefined>(undefined);
  let commentary = $state<Commentary | undefined>(undefined);
  let error = $state<string | undefined>(undefined);

  async function loadPreview() {
    if (sutra || loading) return;

    loading = true;
    error = undefined;

    try {
      sutra = await getSutra(sutraId);
      if (sutra) {
        commentary = await getCommentary(sutra.numericId);
      } else {
        error = 'Sutra not found';
      }
    } catch (e) {
      error = 'Failed to load';
      console.error('RefPreview error:', e);
    }

    loading = false;
  }

  function handleClick() {
    if (inline) {
      expanded = !expanded;
      if (expanded && !sutra) {
        loadPreview();
      }
    }
  }

  function handleMouseEnter() {
    // Preload on hover for faster expansion
    if (!sutra && !loading) {
      loadPreview();
    }
  }
</script>

{#if inline}
  <span class="inline">
    <button
      type="button"
      onclick={handleClick}
      onmouseenter={handleMouseEnter}
      class="text-indigo-600 hover:underline font-mono text-sm inline-flex items-center gap-0.5"
    >
      {sutraId}
      <svg
        class="w-3 h-3 transition-transform {expanded ? 'rotate-180' : ''}"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>

    {#if expanded}
      <span class="block ml-4 my-2 p-3 bg-stone-50 border-l-2 border-indigo-200 rounded-r text-sm">
        {#if loading}
          <span class="text-stone-400 italic">Loading...</span>
        {:else if error}
          <span class="text-red-500">{error}</span>
        {:else if sutra}
          <span class="block mb-1">
            <Sanskrit text={sutra.text} />
          </span>
          {#if commentary?.englishShort}
            <span class="text-stone-600 block">{commentary.englishShort}</span>
          {/if}
          <a
            href="/sutra/{sutraId}"
            class="text-xs text-indigo-500 hover:underline mt-1 inline-block"
          >
            View full sutra
          </a>
        {/if}
      </span>
    {/if}
  </span>
{:else}
  <!-- Non-inline: always show as a card -->
  <div class="p-3 bg-stone-50 border border-stone-200 rounded text-sm">
    <div class="flex items-center justify-between mb-2">
      <a href="/sutra/{sutraId}" class="font-mono text-indigo-600 hover:underline">
        {sutraId}
      </a>
    </div>

    {#if loading}
      <span class="text-stone-400 italic">Loading...</span>
    {:else if error}
      <span class="text-red-500">{error}</span>
    {:else if sutra}
      <div class="mb-1">
        <Sanskrit text={sutra.text} />
      </div>
      {#if commentary?.englishShort}
        <p class="text-stone-600">{commentary.englishShort}</p>
      {/if}
    {:else}
      <button
        type="button"
        onclick={loadPreview}
        class="text-indigo-500 hover:underline text-sm"
      >
        Load preview
      </button>
    {/if}
  </div>
{/if}
