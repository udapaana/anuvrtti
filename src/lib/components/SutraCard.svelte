<script lang="ts">
  import type { Sutra, Commentary } from '$lib/data';
  import Sanskrit from './Sanskrit.svelte';
  import MarkupText from './MarkupText.svelte';

  interface Props {
    sutra: Sutra;
    commentary?: Commentary;
    expanded?: boolean;
    onSutraClick?: (id: string) => void;
  }

  let { sutra, commentary, expanded = false, onSutraClick }: Props = $props();

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
  <header class="px-4 py-3 border-b border-stone-100/50 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="text-sm font-mono text-stone-500">{sutra.id}</span>
      {#if sutra.type !== 'other'}
        <span class="badge badge-{sutra.type}">
          <Sanskrit text={typeLabelsSanskrit[sutra.type]} />
        </span>
      {/if}
    </div>
  </header>

  <!-- Main sutra text -->
  <div class="px-4 py-4">
    <p class="text-2xl leading-relaxed">
      <Sanskrit text={sutra.text} />
    </p>

  </div>

  <!-- Expanded with anuvrtti -->
  {#if expanded && sutra.expanded && sutra.expanded !== sutra.text}
    <div class="px-4 py-3 border-t border-stone-100/50">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-medium text-indigo-600 uppercase tracking-wide">With Anuvrtti</span>
      </div>
      <p class="text-stone-700 leading-relaxed">
        <Sanskrit text={sutra.expanded} />
      </p>
    </div>
  {/if}

  <!-- Anuvrtti references -->
  {#if sutra.anuvrtti.length > 0}
    <div class="px-4 py-2 bg-stone-50/50 border-t border-stone-100/50">
      <p class="text-xs text-stone-500 mb-1">Inherits from:</p>
      <div class="flex flex-wrap gap-2">
        {#each sutra.anuvrtti as ref}
          <button
            class="text-sm anuvrtti sutra-ref"
            onclick={() => handleRefClick(ref.fromId)}
          >
            <Sanskrit text={ref.term} />
            <span class="text-xs">({ref.fromId})</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Commentary (if expanded) -->
  {#if expanded && commentary}
    <div class="border-t border-stone-100/50">
      {#if commentary.kashikaEnglish}
        <div class="px-4 py-3 border-b border-stone-100/50">
          <p class="text-sm text-stone-700 leading-relaxed"><MarkupText text={commentary.kashikaEnglish} /></p>
        </div>
      {:else if commentary.englishShort}
        <div class="px-4 py-3 border-b border-stone-100/50">
          <p class="text-sm text-stone-600"><MarkupText text={commentary.englishShort} /></p>
        </div>
      {/if}

      {#if commentary.kashika}
        <details class="group">
          <summary class="px-4 py-3 cursor-pointer hover:bg-stone-50 flex items-center gap-2">
            <span class="text-xs font-medium text-emerald-700 uppercase tracking-wide">Kashika Vrtti</span>
            <svg class="w-3 h-3 text-stone-400 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </summary>
          <div class="px-4 py-3 text-sm leading-relaxed bg-stone-50">
            <Sanskrit text={commentary.kashika} />
          </div>
        </details>
      {/if}

      {#if commentary.englishFull}
        <details class="group">
          <summary class="px-4 py-3 cursor-pointer hover:bg-stone-50 flex items-center gap-2">
            <span class="text-xs font-medium text-purple-700 uppercase tracking-wide">Translation</span>
            <svg class="w-3 h-3 text-stone-400 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </summary>
          <div class="px-4 py-3 text-sm leading-relaxed bg-stone-50 space-y-2">
            {#each commentary.englishFull.split('\n') as para}
              {#if para.trim()}
                <p><MarkupText text={para} /></p>
              {/if}
            {/each}
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
                <Sanskrit text={v} />
              </p>
            {/each}
          </div>
        </details>
      {/if}
    </div>
  {/if}
</article>
