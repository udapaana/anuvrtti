<script lang="ts">
  import type { Sutra, Commentary } from '$lib/data';
  import SanskritText from './SanskritText.svelte';
  import { displayScript } from '$lib/stores/preferences';

  interface Props {
    sutra: Sutra;
    commentary?: Commentary;
    expanded?: boolean;
    onSutraClick?: (id: string) => void;
  }

  let { sutra, commentary, expanded = false, onSutraClick }: Props = $props();

  const typeLabels: Record<string, string> = {
    samjna: 'samjna',
    paribhasha: 'paribhasa',
    vidhi: 'vidhi',
    adhikara: 'adhikara',
    atidesa: 'atidesa',
    other: ''
  };

  const typeLabelsSanskrit: Record<string, string> = {
    samjna: 'संज्ञा',
    paribhasha: 'परिभाषा',
    vidhi: 'विधि',
    adhikara: 'अधिकार',
    atidesa: 'अतिदेश',
    other: ''
  };

  function handleRefClick(id: string) {
    if (onSutraClick) onSutraClick(id);
  }
</script>

<article class="bg-white rounded-lg border border-stone-200 overflow-hidden">
  <!-- Header -->
  <header class="px-4 py-3 border-b border-stone-100 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="text-sm font-mono text-stone-500">{sutra.id}</span>
      {#if sutra.type !== 'other'}
        <span class="badge badge-{sutra.type}">
          <SanskritText text={typeLabelsSanskrit[sutra.type]} targetScript={$displayScript} />
        </span>
      {/if}
    </div>
  </header>

  <!-- Main sutra text -->
  <div class="px-4 py-4">
    <p class="text-2xl leading-relaxed">
      <SanskritText text={sutra.text} targetScript={$displayScript} />
    </p>

    {#if expanded && sutra.expanded && sutra.expanded !== sutra.text}
      <div class="mt-3 pt-3 border-t border-stone-100">
        <p class="text-sm text-stone-500 mb-1">With anuvrtti:</p>
        <p class="text-lg text-stone-700">
          <SanskritText text={sutra.expanded} targetScript={$displayScript} />
        </p>
      </div>
    {/if}
  </div>

  <!-- Anuvrtti references -->
  {#if sutra.anuvrtti.length > 0}
    <div class="px-4 py-2 bg-stone-50 border-t border-stone-100">
      <p class="text-xs text-stone-500 mb-1">Inherits from:</p>
      <div class="flex flex-wrap gap-2">
        {#each sutra.anuvrtti as ref}
          <button
            class="text-sm anuvrtti sutra-ref"
            onclick={() => handleRefClick(ref.fromId)}
          >
            <SanskritText text={ref.term} targetScript={$displayScript} />
            <span class="text-xs">({ref.fromId})</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Commentary (if expanded) -->
  {#if expanded && commentary}
    <div class="border-t border-stone-200">
      {#if commentary.englishShort}
        <div class="px-4 py-3 border-b border-stone-100">
          <p class="text-sm text-stone-600">{commentary.englishShort}</p>
        </div>
      {/if}

      {#if commentary.kashika}
        <details class="group">
          <summary class="px-4 py-2 text-sm font-medium text-stone-600 cursor-pointer hover:bg-stone-50">
            Kashika Vrtti
          </summary>
          <div class="px-4 py-3 text-sm leading-relaxed bg-stone-50">
            <SanskritText text={commentary.kashika} targetScript={$displayScript} />
          </div>
        </details>
      {/if}

      {#if commentary.englishFull}
        <details class="group">
          <summary class="px-4 py-2 text-sm font-medium text-stone-600 cursor-pointer hover:bg-stone-50">
            Vasu's Translation
          </summary>
          <div class="px-4 py-3 text-sm leading-relaxed bg-stone-50 prose prose-sm max-w-none">
            {@html commentary.englishFull.replace(/\n/g, '<br>')}
          </div>
        </details>
      {/if}

      {#if commentary.vartika && commentary.vartika.length > 0}
        <details class="group">
          <summary class="px-4 py-2 text-sm font-medium text-stone-600 cursor-pointer hover:bg-stone-50">
            Varttikas ({commentary.vartika.length})
          </summary>
          <div class="px-4 py-3 space-y-2 bg-stone-50">
            {#each commentary.vartika as v, i}
              <p class="text-sm">
                <span class="text-stone-400">{i + 1}.</span>
                <SanskritText text={v} targetScript={$displayScript} />
              </p>
            {/each}
          </div>
        </details>
      {/if}
    </div>
  {/if}
</article>
