<script lang="ts">
  import { onMount } from 'svelte';
  import { getRootSutras, type Sutra } from '$lib/data';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let sutras: Sutra[] = $state([]);
  let loading = $state(true);
  let groupBy = $state<'adhyaya' | 'type'>('type');

  onMount(async () => {
    sutras = await getRootSutras();
    loading = false;
  });

  let grouped = $derived(() => {
    const groups = new Map<string, Sutra[]>();
    for (const s of sutras) {
      const key = groupBy === 'adhyaya' ? `Adhyaya ${s.adhyaya}` : s.typeName || s.type;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(s);
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
  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-semibold">Root Sutras</h1>
      <p class="text-stone-500 text-sm mt-1">
        Foundational sutras that don't inherit from any other sutra
      </p>
    </div>

    <select
      bind:value={groupBy}
      class="text-sm border border-stone-200 rounded px-3 py-1.5"
    >
      <option value="type">Group by Type</option>
      <option value="adhyaya">Group by Adhyaya</option>
    </select>
  </div>

  {#if loading}
    <div class="text-stone-500">Loading...</div>
  {:else}
    <p class="text-sm text-stone-600 mb-4">{sutras.length} root sutras found</p>

    {#each [...grouped().entries()] as [group, items]}
      <div class="mb-6">
        <h2 class="text-lg font-medium text-stone-700 mb-2 sticky top-0 bg-stone-50 py-2">
          {group} <span class="text-stone-400 font-normal">({items.length})</span>
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
