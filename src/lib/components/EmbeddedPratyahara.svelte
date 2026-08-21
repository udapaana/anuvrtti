<script lang="ts">
  import { getPratyaharaSounds, lookupPratyaharaCanonical } from '$lib/pratyahara';
  import Sanskrit from './Sanskrit.svelte';

  interface Props {
    /** Pratyahara code (e.g., "ac", "hal", "iK") */
    code: string;
  }

  let { code }: Props = $props();

  let sounds = $state<string[] | null>(null);
  let canonicalName = $state<string | null>(null);

  $effect(() => {
    expandPratyahara(code);
  });

  function expandPratyahara(input: string) {
    // First try canonical lookup (handles various romanizations)
    const canonical = lookupPratyaharaCanonical(input);
    if (canonical) {
      canonicalName = canonical;
      sounds = getPratyaharaSounds(canonical);
    } else {
      // Try direct expansion
      sounds = getPratyaharaSounds(input);
      canonicalName = input;
    }
  }
</script>

{#if sounds && sounds.length > 0}
  <span class="pratyahara-expansion">
    <span class="pratyahara-name">
      {#if canonicalName}
        <Sanskrit text={canonicalName} />
      {:else}
        {code}
      {/if}
    </span>
    <span class="pratyahara-equals">=</span>
    <span class="pratyahara-sounds">
      {#each sounds as sound, i}
        <span class="sound"><Sanskrit text={sound} /></span>{#if i < sounds.length - 1}<span class="sound-sep">,</span>{/if}
      {/each}
    </span>
  </span>
{:else}
  <span class="pratyahara-unknown">
    <span class="pratyahara-code">{code}</span>
    <span class="pratyahara-error">(unknown)</span>
  </span>
{/if}

<style>
  .pratyahara-expansion {
    display: inline-flex;
    align-items: baseline;
    gap: 0.375rem;
    padding: 0.25rem 0.5rem;
    background: var(--sunken);
    border: 1px solid var(--rule-2);
    border-radius: 0.375rem;
    font-size: 0.9375rem;
  }

  .pratyahara-name {
    font-weight: 500;
    color: var(--accent-ok);
  }

  .pratyahara-equals {
    color: #86efac;
  }

  .pratyahara-sounds {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.125rem;
  }

  .sound {
    color: var(--accent-ok);
  }

  .sound-sep {
    color: #86efac;
    margin-right: 0.125rem;
  }

  .pratyahara-unknown {
    display: inline-flex;
    align-items: baseline;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    background: var(--sunken);
    border: 1px solid var(--rule-2);
    border-radius: 0.375rem;
  }

  .pratyahara-code {
    font-family: var(--font-mono);
    color: #991b1b;
  }

  .pratyahara-error {
    font-size: 0.75rem;
    color: var(--ink);
  }
</style>
