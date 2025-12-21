<script lang="ts">
  import { searchSutras, searchByPada, type Sutra } from '$lib/data';
  import SutraCard from '$lib/components/SutraCard.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let query = $state('');
  let searchMode = $state<'all' | 'pada'>('all');
  let results: Sutra[] = $state([]);
  let searching = $state(false);
  let searched = $state(false);

  let debounceTimer: ReturnType<typeof setTimeout>;

  function handleSearch() {
    clearTimeout(debounceTimer);

    if (query.length < 2) {
      results = [];
      searched = false;
      return;
    }

    debounceTimer = setTimeout(async () => {
      searching = true;
      if (searchMode === 'pada') {
        results = await searchByPada(query);
      } else {
        results = await searchSutras(query);
      }
      searching = false;
      searched = true;
    }, 300);
  }

  function handleSutraClick(id: string) {
    window.location.href = `/sutra/${id}`;
  }

  // Re-search when mode changes
  $effect(() => {
    if (query.length >= 2) {
      handleSearch();
    }
  });
</script>

<svelte:head>
  <title>Search | Aṣṭādhyāyī Explorer</title>
</svelte:head>

<div class="max-w-3xl mx-auto">
  <h1 class="text-2xl font-semibold mb-6">Search Sūtras</h1>

  <div class="mb-8">
    <div class="flex gap-2">
      <input
        type="text"
        bind:value={query}
        oninput={handleSearch}
        placeholder={searchMode === 'pada' ? "Search by word (pada)..." : "Search by text, ID, or transliteration..."}
        class="flex-1 px-4 py-3 text-lg border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
      <select
        bind:value={searchMode}
        class="px-3 py-2 border border-stone-300 rounded-lg text-sm"
      >
        <option value="all">All</option>
        <option value="pada">By Pada</option>
      </select>
    </div>
    <p class="mt-2 text-sm text-stone-500">
      {#if searchMode === 'pada'}
        Search for sutras containing a specific word: <Sanskrit text="गुण" />, <Sanskrit text="प्रत्यय" />, <Sanskrit text="आदेश" />
      {:else}
        Try: <Sanskrit text="वृद्धि" />, guna, 1.1, <Sanskrit text="संज्ञा" />
      {/if}
    </p>
  </div>

  {#if searching}
    <div class="text-stone-500">Searching...</div>
  {:else if searched}
    <div class="mb-4 text-sm text-stone-500">
      {results.length} result{results.length === 1 ? '' : 's'} for "{query}"
    </div>

    {#if results.length > 0}
      <div class="space-y-4">
        {#each results as sutra (sutra.id)}
          <a href="/sutra/{sutra.id}" class="block">
            <SutraCard {sutra} onSutraClick={handleSutraClick} />
          </a>
        {/each}
      </div>
    {:else}
      <div class="text-stone-500">No sūtras found matching your query.</div>
    {/if}
  {:else}
    <div class="text-stone-400 text-center py-12">
      <p class="text-lg">Enter a search term to find sūtras</p>
      <p class="mt-2 text-sm">Search works in Devanagari, IAST, or by sūtra number</p>
    </div>
  {/if}
</div>
