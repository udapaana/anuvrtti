<script lang="ts">
  import { onMount } from 'svelte';
  import { getMostConnectedSutras, type Sutra } from '$lib/data';
  import { adhyayas } from '$lib/adhyaya';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let allData: { sutra: Sutra; dependentCount: number }[] = $state([]);
  let loading = $state(true);
  let selectedAdhyaya = $state<number>(0); // 0 = all

  onMount(async () => {
    allData = await getMostConnectedSutras();
    loading = false;
  });

  let data = $derived(
    selectedAdhyaya === 0
      ? allData
      : allData.filter(d => d.sutra.adhyaya === selectedAdhyaya)
  );

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
  <div class="mb-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold">Most Connected Sutras</h1>
        <p class="text-stone-500 text-sm mt-1">
          Sutras ranked by how many other sutras depend on them via anuvrtti
        </p>
      </div>
    </div>

    <!-- Adhyaya filter -->
    <div class="mt-4 flex flex-wrap gap-2">
      <button
        class="px-3 py-1.5 text-sm rounded-full transition-colors
               {selectedAdhyaya === 0 ? 'bg-indigo-600 text-white' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'}"
        onclick={() => selectedAdhyaya = 0}
      >
        All
      </button>
      {#each adhyayas as a}
        <button
          class="px-3 py-1.5 text-sm rounded-full transition-colors
                 {selectedAdhyaya === a.number ? 'bg-indigo-600 text-white' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'}"
          onclick={() => selectedAdhyaya = a.number}
          title={a.topic}
        >
          {a.number}. <Sanskrit text={a.title} />
        </button>
      {/each}
    </div>
  </div>

  {#if loading}
    <div class="space-y-2">
      {#each Array(10) as _, i}
        <div class="p-3 bg-white rounded border border-stone-200 animate-pulse">
          <div class="flex items-center gap-4">
            <div class="h-6 w-8 bg-stone-200 rounded"></div>
            <div class="w-2 h-2 rounded-full bg-stone-200"></div>
            <div class="flex-1">
              <div class="flex items-baseline gap-2">
                <div class="h-4 w-12 bg-stone-200 rounded"></div>
                <div class="h-5 w-48 bg-stone-200 rounded"></div>
              </div>
            </div>
            <div class="h-2 w-20 bg-stone-200 rounded"></div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-sm text-stone-600 mb-4">
      {data.length} sutras contribute anuvrtti to other sutras
    </p>

    <div class="space-y-2">
      {#each data as { sutra, dependentCount }, i}
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
  {/if}
</div>
