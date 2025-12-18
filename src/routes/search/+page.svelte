<script lang="ts">
  import { searchSutras, type Sutra } from '$lib/data';
  import SutraCard from '$lib/components/SutraCard.svelte';

  let query = $state('');
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
      results = await searchSutras(query);
      searching = false;
      searched = true;
    }, 300);
  }

  function handleSutraClick(id: string) {
    window.location.href = `/sutra/${id}`;
  }
</script>

<svelte:head>
  <title>Search | Aṣṭādhyāyī Explorer</title>
</svelte:head>

<div class="max-w-3xl mx-auto">
  <h1 class="text-2xl font-semibold mb-6">Search Sūtras</h1>

  <div class="mb-8">
    <input
      type="text"
      bind:value={query}
      oninput={handleSearch}
      placeholder="Search by text, ID, or transliteration..."
      class="w-full px-4 py-3 text-lg border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    />
    <p class="mt-2 text-sm text-stone-500">
      Try: वृद्धि, guna, 1.1, संज्ञा
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
