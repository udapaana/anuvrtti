<script lang="ts">
  import { getSutra, getLayeredCommentary, getCommentary } from '$lib/data';
  import type { Sutra, LayeredSutraCommentary, Commentary, CommentaryDepth } from '$lib/data/types';
  import Sanskrit from './Sanskrit.svelte';
  import CommentaryText from './CommentaryText.svelte';

  interface Props {
    /** Sutra ID (e.g., "1.1.1") */
    sutraId: string;
    /** Commentary depth to display */
    depth?: CommentaryDepth;
    /** Compact mode - just sutra text, no commentary */
    compact?: boolean;
  }

  let { sutraId, depth = 'simple', compact = false }: Props = $props();

  let sutra = $state<Sutra | null>(null);
  let layeredCommentary = $state<LayeredSutraCommentary | null>(null);
  let commentary = $state<Commentary | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  $effect(() => {
    loadSutra(sutraId);
  });

  async function loadSutra(id: string) {
    loading = true;
    error = null;
    try {
      const s = await getSutra(id);
      if (!s) {
        error = `Sutra ${id} not found`;
        return;
      }
      sutra = s;

      if (!compact) {
        // Load commentary
        const [layered, comm] = await Promise.all([
          getLayeredCommentary(s.numericId),
          getCommentary(s.numericId)
        ]);
        layeredCommentary = layered || null;
        commentary = comm;
      }
    } catch (e) {
      error = `Failed to load sutra: ${e}`;
    } finally {
      loading = false;
    }
  }

  let commentaryText = $derived.by(() => {
    if (layeredCommentary?.en[depth]) {
      return layeredCommentary.en[depth];
    }
    if (commentary?.kashikaEnglish) {
      return commentary.kashikaEnglish;
    }
    if (commentary?.englishShort) {
      return commentary.englishShort;
    }
    return null;
  });

  const typeLabels: Record<string, string> = {
    samjna: 'samjna',
    paribhasha: 'paribhasha',
    vidhi: 'vidhi',
    adhikara: 'adhikara',
    atidesa: 'atidesa',
  };
</script>

{#if loading}
  <div class="embedded-sutra loading">
    <span class="loading-text">Loading {sutraId}...</span>
  </div>
{:else if error}
  <div class="embedded-sutra error">
    <span class="error-text">{error}</span>
  </div>
{:else if sutra}
  <div class="embedded-sutra" class:compact>
    <div class="sutra-header">
      <a href="/ref/{sutra.id}" class="sutra-id">{sutra.id}</a>
      {#if sutra.type !== 'other' && typeLabels[sutra.type]}
        <span class="sutra-type type-{sutra.type}">{typeLabels[sutra.type]}</span>
      {/if}
    </div>
    <div class="sutra-text">
      <Sanskrit text={sutra.text} />
    </div>
    {#if !compact && commentaryText}
      <div class="sutra-commentary">
        <CommentaryText text={commentaryText} />
      </div>
    {/if}
  </div>
{/if}

<style>
  .embedded-sutra {
    margin: 1rem 0;
    padding: 1rem;
    background: var(--sunken);
    border: 1px solid var(--rule-2);
    border-left: 3px solid var(--accent-ref);
    border-radius: 0.375rem;
  }

  .embedded-sutra.compact {
    padding: 0.75rem;
    margin: 0.5rem 0;
  }

  .embedded-sutra.loading,
  .embedded-sutra.error {
    padding: 0.75rem;
    color: var(--muted);
  }

  .error-text {
    color: var(--ink);
  }

  .sutra-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .sutra-id {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--accent-ref);
    text-decoration: none;
    font-weight: 500;
  }

  .sutra-id:hover {
    text-decoration: underline;
  }

  .sutra-type {
    font-size: 0.6875rem;
    padding: 0.125rem 0.5rem;
    border-radius: 1rem;
  }

  .type-samjna { background: var(--sunken); color: var(--accent-ref); }
  .type-paribhasha { background: var(--sunken); color: var(--accent-hover); }
  .type-vidhi { background: var(--sunken); color: var(--accent-ok); }
  .type-adhikara { background: var(--sunken); color: var(--accent-ref); }
  .type-atidesa { background: var(--sunken); color: var(--ink); }

  .sutra-text {
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  .compact .sutra-text {
    font-size: 1.125rem;
    margin-bottom: 0;
  }

  .sutra-commentary {
    padding-top: 0.75rem;
    border-top: 1px solid var(--rule-2);
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--ink-2);
  }
</style>
