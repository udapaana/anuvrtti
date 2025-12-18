<script lang="ts">
  import type { Sutra, Commentary } from '$lib/data';

  interface Props {
    sutra: Sutra;
    commentary?: Commentary;
    expanded?: boolean;
    onSutraClick?: (id: string) => void;
  }

  let { sutra, commentary, expanded = false, onSutraClick }: Props = $props();

  const typeLabels: Record<string, string> = {
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
        <span class="badge badge-{sutra.type}">{typeLabels[sutra.type]}</span>
      {/if}
    </div>
  </header>

  <!-- Main sūtra text -->
  <div class="px-4 py-4">
    <p class="text-2xl font-sanskrit leading-relaxed">{sutra.text}</p>

    {#if expanded && sutra.expanded && sutra.expanded !== sutra.text}
      <div class="mt-3 pt-3 border-t border-stone-100">
        <p class="text-sm text-stone-500 mb-1">With anuvṛtti:</p>
        <p class="text-lg font-sanskrit text-stone-700">{sutra.expanded}</p>
      </div>
    {/if}
  </div>

  <!-- Anuvṛtti references -->
  {#if sutra.anuvrtti.length > 0}
    <div class="px-4 py-2 bg-stone-50 border-t border-stone-100">
      <p class="text-xs text-stone-500 mb-1">Inherits from:</p>
      <div class="flex flex-wrap gap-2">
        {#each sutra.anuvrtti as ref}
          <button
            class="text-sm font-sanskrit anuvrtti sutra-ref"
            onclick={() => handleRefClick(ref.fromId)}
          >
            {ref.term} <span class="text-xs">({ref.fromId})</span>
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
            Kāśikā Vṛtti
          </summary>
          <div class="px-4 py-3 text-sm font-sanskrit leading-relaxed bg-stone-50">
            {commentary.kashika}
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
            Vārttikas ({commentary.vartika.length})
          </summary>
          <div class="px-4 py-3 space-y-2 bg-stone-50">
            {#each commentary.vartika as v, i}
              <p class="text-sm font-sanskrit">
                <span class="text-stone-400">{i + 1}.</span> {v}
              </p>
            {/each}
          </div>
        </details>
      {/if}
    </div>
  {/if}
</article>
