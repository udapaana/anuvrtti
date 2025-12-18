<script lang="ts">
  import { onMount } from 'svelte';
  import { loadSutras, type Sutra } from '$lib/data';

  let sutras: Sutra[] = $state([]);
  let loading = $state(true);
  let selectedType = $state<string>('all');
  let selectedAdhyaya = $state<number>(1);

  onMount(async () => {
    sutras = await loadSutras();
    loading = false;
  });

  // Filter sutras for display
  let filteredSutras = $derived(
    sutras.filter(s => {
      if (s.adhyaya !== selectedAdhyaya) return false;
      if (selectedType !== 'all' && s.type !== selectedType) return false;
      return true;
    })
  );

  // Build adjacency data for visualization
  let graphData = $derived(() => {
    const nodes = new Map<string, { sutra: Sutra; x: number; y: number }>();
    const edges: { from: string; to: string }[] = [];

    // Position nodes by pada and number
    for (const s of filteredSutras) {
      const x = (s.pada - 1) * 250 + 50;
      const y = s.number * 24;
      nodes.set(s.id, { sutra: s, x, y });

      // Add edges for anuvrtti
      for (const ref of s.anuvrtti) {
        if (nodes.has(ref.fromId)) {
          edges.push({ from: ref.fromId, to: s.id });
        }
      }
    }

    return { nodes, edges };
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
  <title>Dependency Graph | Aṣṭādhyāyī Explorer</title>
</svelte:head>

<div>
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-semibold">Dependency Graph</h1>

    <div class="flex gap-4">
      <select
        bind:value={selectedAdhyaya}
        class="text-sm border border-stone-200 rounded px-3 py-1"
      >
        {#each [1,2,3,4,5,6,7,8] as a}
          <option value={a}>Adhyāya {a}</option>
        {/each}
      </select>

      <select
        bind:value={selectedType}
        class="text-sm border border-stone-200 rounded px-3 py-1"
      >
        <option value="all">All types</option>
        <option value="samjna">Saṃjñā</option>
        <option value="paribhasha">Paribhāṣā</option>
        <option value="vidhi">Vidhi</option>
        <option value="adhikara">Adhikāra</option>
      </select>
    </div>
  </div>

  {#if loading}
    <div class="text-stone-500">Loading graph data...</div>
  {:else}
    <!-- Legend -->
    <div class="mb-4 flex gap-4 text-sm">
      {#each Object.entries(typeColors) as [type, color]}
        <div class="flex items-center gap-1">
          <span
            class="w-3 h-3 rounded-full"
            style="background-color: {color}"
          ></span>
          <span class="capitalize">{type}</span>
        </div>
      {/each}
    </div>

    <!-- Simple grid visualization -->
    <div class="bg-white rounded-lg border border-stone-200 p-4 overflow-x-auto">
      <div class="grid grid-cols-4 gap-8 min-w-[1000px]">
        {#each [1, 2, 3, 4] as pada}
          <div>
            <h3 class="text-sm font-medium text-stone-500 mb-3 sticky top-0 bg-white">
              Pāda {selectedAdhyaya}.{pada}
            </h3>
            <div class="space-y-1">
              {#each filteredSutras.filter(s => s.pada === pada) as sutra (sutra.id)}
                <a
                  href="/sutra/{sutra.id}"
                  class="block p-2 rounded text-sm hover:bg-stone-50 transition-colors border-l-4"
                  style="border-color: {typeColors[sutra.type] || typeColors.other}"
                >
                  <div class="flex items-start gap-2">
                    <span class="font-mono text-xs text-stone-400 shrink-0">
                      {sutra.number}
                    </span>
                    <span class="font-sanskrit text-sm truncate" title={sutra.text}>
                      {sutra.text}
                    </span>
                  </div>
                  {#if sutra.anuvrtti.length > 0}
                    <div class="mt-1 flex gap-1 flex-wrap">
                      {#each sutra.anuvrtti.slice(0, 3) as ref}
                        <span class="text-xs px-1 bg-stone-100 rounded text-stone-500">
                          ←{ref.fromId}
                        </span>
                      {/each}
                      {#if sutra.anuvrtti.length > 3}
                        <span class="text-xs text-stone-400">+{sutra.anuvrtti.length - 3}</span>
                      {/if}
                    </div>
                  {/if}
                </a>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <p class="mt-4 text-sm text-stone-500">
      Showing {filteredSutras.length} sūtras from Adhyāya {selectedAdhyaya}.
      Arrows indicate anuvṛtti (inherited terms).
    </p>
  {/if}
</div>
