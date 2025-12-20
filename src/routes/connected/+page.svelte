<script lang="ts">
  import { onMount } from 'svelte';
  import { getMostConnectedSutras, type Sutra } from '$lib/data';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let data: { sutra: Sutra; dependentCount: number }[] = $state([]);
  let loading = $state(true);
  let limit = $state(50);

  onMount(async () => {
    data = await getMostConnectedSutras();
    loading = false;
  });

  let displayed = $derived(data.slice(0, limit));
  let maxCount = $derived(data[0]?.dependentCount || 1);

  const typeColors: Record<string, string> = {
    samjna: '#3b82f6',
    paribhasha: '#f59e0b',
    vidhi: '#10b981',
    adhikara: '#8b5cf6',
    atidesa: '#ec4899',
    other: '#6b7280'
  };
</script>

<svelte:head>
  <title>Most Connected Sutras | Ashtadhyayi Explorer</title>
</svelte:head>

<div>
  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-semibold">Most Connected Sutras</h1>
      <p class="text-stone-500 text-sm mt-1">
        Sutras ranked by how many other sutras depend on them via anuvrtti
      </p>
    </div>

    <select
      bind:value={limit}
      class="text-sm border border-stone-200 rounded px-3 py-1.5"
    >
      <option value={25}>Top 25</option>
      <option value={50}>Top 50</option>
      <option value={100}>Top 100</option>
      <option value={999999}>All</option>
    </select>
  </div>

  {#if loading}
    <div class="text-stone-500">Loading...</div>
  {:else}
    <p class="text-sm text-stone-600 mb-4">
      {data.length} sutras contribute anuvrtti to other sutras
    </p>

    <div class="space-y-2">
      {#each displayed as { sutra, dependentCount }, i}
        <a
          href="/sutra/{sutra.id}"
          class="block p-3 bg-white rounded border border-stone-200 hover:border-stone-300 transition-colors"
        >
          <div class="flex items-center gap-4">
            <span class="text-lg font-mono text-stone-400 w-8 text-right">
              {i + 1}
            </span>
            <span
              class="w-2 h-2 rounded-full shrink-0"
              style="background-color: {typeColors[sutra.type] || typeColors.other}"
            ></span>
            <div class="flex-1 min-w-0">
              <div class="flex items-baseline gap-2">
                <span class="font-mono text-sm text-stone-500">{sutra.id}</span>
                <span class="text-lg"><Sanskrit text={sutra.text} /></span>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <div
                class="h-2 bg-indigo-200 rounded"
                style="width: {(dependentCount / maxCount) * 100}px"
              ></div>
              <span class="text-sm font-medium text-indigo-600 w-12 text-right">
                {dependentCount}
              </span>
            </div>
          </div>
        </a>
      {/each}
    </div>

    {#if limit < data.length}
      <button
        class="mt-4 text-sm text-indigo-600 hover:text-indigo-700"
        onclick={() => limit = Math.min(limit + 50, data.length)}
      >
        Show more...
      </button>
    {/if}
  {/if}
</div>
