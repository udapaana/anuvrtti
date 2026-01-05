<script lang="ts">
  import type { SutraRef } from '$lib/data/types';
  import RefPreview from './RefPreview.svelte';
  import Sanskrit from './Sanskrit.svelte';

  interface Props {
    refs: SutraRef[];
    /** Compact mode for inline display */
    compact?: boolean;
  }

  let { refs, compact = false }: Props = $props();
</script>

{#if refs.length > 0}
  <div class="sutra-breadcrumbs" class:compact>
    {#if !compact}
      <h4 class="breadcrumbs-title">Grammar Rules Applied</h4>
    {/if}
    <ul class="breadcrumbs-list">
      {#each refs as ref}
        <li class="breadcrumb-item">
          <RefPreview sutraId={ref.sutraId} inline={true} />
          {#if ref.label}
            <span class="breadcrumb-label">{ref.label}</span>
          {/if}
          {#if ref.relevantText}
            <span class="breadcrumb-example">
              → <Sanskrit text={ref.relevantText} />
            </span>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .sutra-breadcrumbs {
    margin-top: 0.5rem;
  }

  .breadcrumbs-title {
    font-size: 0.8rem;
    font-weight: 600;
    color: #57534e;
    margin: 0 0 0.5rem 0;
  }

  .breadcrumbs-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .breadcrumb-item {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem;
    font-size: 0.85rem;
    padding: 0.5rem 0.75rem;
    background: #fefce8;
    border-left: 3px solid #facc15;
    border-radius: 0 4px 4px 0;
  }

  .breadcrumb-label {
    color: #78716c;
    font-size: 0.8rem;
  }

  .breadcrumb-example {
    color: #166534;
    font-size: 0.8rem;
  }

  /* Compact mode for inline usage */
  .compact .breadcrumbs-list {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .compact .breadcrumb-item {
    padding: 0.25rem 0.5rem;
    background: #fef9c3;
    border-left: 2px solid #fbbf24;
    font-size: 0.75rem;
  }

  .compact .breadcrumb-label,
  .compact .breadcrumb-example {
    font-size: 0.7rem;
  }
</style>
