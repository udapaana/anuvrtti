<script lang="ts">
  import { onMount } from 'svelte';
  import { getAdhikaras, getSutrasUnderAdhikara, type Sutra } from '$lib/data';
  import { adhyayas } from '$lib/adhyaya';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let allAdhikaras: { sutra: Sutra; scopeCount: number }[] = $state([]);
  let loading = $state(true);
  let selectedAdhyaya = $state<number>(0); // 0 = all
  let expanded = $state<string | null>(null);
  let expandedSutras = $state<Sutra[]>([]);
  let loadingExpanded = $state(false);

  onMount(async () => {
    allAdhikaras = await getAdhikaras();
    loading = false;
  });

  let adhikaraList = $derived(
    selectedAdhyaya === 0
      ? allAdhikaras
      : allAdhikaras.filter(a => a.sutra.adhyaya === selectedAdhyaya)
  );

  async function toggleExpand(id: string) {
    if (expanded === id) {
      expanded = null;
      expandedSutras = [];
    } else {
      expanded = id;
      loadingExpanded = true;
      expandedSutras = await getSutrasUnderAdhikara(id);
      loadingExpanded = false;
    }
  }
</script>

<svelte:head>
  <title>Adhikaras | Ashtadhyayi Explorer</title>
</svelte:head>

<div>
  <div class="mb-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold">Adhikaras</h1>
        <p class="text-stone-500 text-sm mt-1">
          Governing rules that apply to subsequent sutras within their scope
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
      {#each Array(8) as _}
        <div class="bg-white rounded border border-stone-200 p-3 animate-pulse">
          <div class="flex items-center gap-3">
            <div class="w-5 h-5 bg-stone-200 rounded"></div>
            <div class="w-2 h-2 rounded-full bg-stone-200"></div>
            <div class="flex-1">
              <div class="flex items-baseline gap-2">
                <div class="h-4 w-12 bg-stone-200 rounded"></div>
                <div class="h-5 w-40 bg-stone-200 rounded"></div>
              </div>
            </div>
            <div class="h-4 w-16 bg-stone-200 rounded"></div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-sm text-stone-600 mb-4">{adhikaraList.length} adhikaras found</p>

    <div class="space-y-2">
      {#each adhikaraList as { sutra, scopeCount }}
        <div class="bg-white rounded border border-stone-200">
          <button
            class="w-full p-3 text-left hover:bg-stone-50 transition-colors flex items-center gap-3"
            onclick={() => toggleExpand(sutra.id)}
          >
            <span class="text-stone-400 w-5">
              {#if expanded === sutra.id}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              {:else}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              {/if}
            </span>
            <span
              class="w-2 h-2 rounded-full shrink-0 bg-purple-500"
            ></span>
            <div class="flex-1 min-w-0">
              <div class="flex items-baseline gap-2">
                <span class="font-mono text-sm text-stone-500">{sutra.id}</span>
                <span class="text-lg"><Sanskrit text={sutra.text} /></span>
              </div>
            </div>
            <span class="text-sm text-stone-500 shrink-0">
              {scopeCount} sutras
            </span>
          </button>

          {#if expanded === sutra.id}
            <div class="border-t border-stone-100 p-3 bg-stone-50">
              {#if loadingExpanded}
                <div class="text-stone-500 text-sm">Loading...</div>
              {:else}
                <div class="grid gap-1 max-h-64 overflow-y-auto">
                  {#each expandedSutras.slice(0, 50) as s}
                    <a
                      href="/sutra/{s.id}"
                      class="text-sm py-1 px-2 hover:bg-white rounded flex items-baseline gap-2"
                    >
                      <span class="font-mono text-xs text-stone-400">{s.id}</span>
                      <span><Sanskrit text={s.text} /></span>
                    </a>
                  {/each}
                  {#if expandedSutras.length > 50}
                    <div class="text-xs text-stone-400 py-1 px-2">
                      +{expandedSutras.length - 50} more...
                    </div>
                  {/if}
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>
