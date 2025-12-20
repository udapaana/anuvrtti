<script lang="ts">
  import { onMount } from 'svelte';
  import { getRootSutras, type Sutra } from '$lib/data';
  import { adhyayas } from '$lib/adhyaya';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let allSutras: Sutra[] = $state([]);
  let loading = $state(true);
  let selectedAdhyaya = $state<number>(0); // 0 = all

  onMount(async () => {
    allSutras = await getRootSutras();
    loading = false;
  });

  let sutras = $derived(
    selectedAdhyaya === 0
      ? allSutras
      : allSutras.filter(s => s.adhyaya === selectedAdhyaya)
  );

  let grouped = $derived(() => {
    const groups = new Map<number, Sutra[]>();
    for (const s of sutras) {
      if (!groups.has(s.adhyaya)) groups.set(s.adhyaya, []);
      groups.get(s.adhyaya)!.push(s);
    }
    return groups;
  });

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
  <title>Root Sutras | Ashtadhyayi Explorer</title>
</svelte:head>

<div>
  <div class="mb-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold">Root Sutras</h1>
        <p class="text-stone-500 text-sm mt-1">
          Foundational sutras that don't inherit from any other sutra
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
      {#each adhyayas as adh}
        <button
          class="px-3 py-1.5 text-sm rounded-full transition-colors
                 {selectedAdhyaya === adh.number ? 'bg-indigo-600 text-white' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'}"
          onclick={() => selectedAdhyaya = adh.number}
          title={adh.topic}
        >
          {adh.number}. <Sanskrit text={adh.title} />
        </button>
      {/each}
    </div>
  </div>

  {#if loading}
    <div class="space-y-4">
      {#each Array(5) as _}
        <div class="p-3 bg-white rounded border border-stone-200 animate-pulse">
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 rounded-full mt-2 bg-stone-200"></div>
            <div class="flex-1">
              <div class="flex items-baseline gap-2 mb-2">
                <div class="h-4 w-12 bg-stone-200 rounded"></div>
                <div class="h-5 w-48 bg-stone-200 rounded"></div>
              </div>
              <div class="h-4 w-full bg-stone-200 rounded"></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-sm text-stone-600 mb-4">{sutras.length} root sutras found</p>

    {#each [...grouped().entries()].sort((a, b) => a[0] - b[0]) as [adhyayaNum, items]}
      {@const info = adhyayas.find(a => a.number === adhyayaNum)}
      <div class="mb-6">
        <h2 class="text-lg font-medium text-stone-700 mb-2 sticky top-0 bg-stone-50 py-2">
          Adhyaya {adhyayaNum}: <Sanskrit text={info?.title || ''} />
          <span class="text-stone-400 font-normal">({items.length})</span>
          {#if info}
            <span class="text-sm text-stone-400 font-normal ml-2">- {info.topic}</span>
          {/if}
        </h2>
        <div class="grid gap-2">
          {#each items as sutra}
            <a
              href="/sutra/{sutra.id}"
              class="block p-3 bg-white rounded border border-stone-200 hover:border-stone-300 transition-colors"
            >
              <div class="flex items-start gap-3">
                <span
                  class="w-2 h-2 rounded-full mt-2 shrink-0"
                  style="background-color: {typeColors[sutra.type] || typeColors.other}"
                ></span>
                <div class="min-w-0">
                  <div class="flex items-baseline gap-2">
                    <span class="font-mono text-sm text-stone-500">{sutra.id}</span>
                    <span class="text-lg"><Sanskrit text={sutra.text} /></span>
                  </div>
                  <div class="text-sm text-stone-500 mt-1">
                    <Sanskrit text={sutra.expanded} class="text-stone-600" />
                  </div>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    {/each}
  {/if}
</div>
