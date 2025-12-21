<script lang="ts">
  import { searchTerms, getCategories, lookupTerm, type Term, type TermCategory } from '$lib/jargon';
  import { selectedTerm as selectedTermStore } from '$lib/stores/jargon';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import CommentaryText from '$lib/components/CommentaryText.svelte';

  let query = $state('');
  let results = $state<Term[]>([]);
  let selectedTerm = $state<Term | null>(null);
  let selectedCategory = $state<TermCategory | null>(null);

  const categories = getCategories();

  // Listen for external term selection (from CommentaryText clicks)
  $effect(() => {
    const unsubscribe = selectedTermStore.subscribe(termQuery => {
      if (termQuery) {
        const found = lookupTerm(termQuery);
        if (found) {
          selectedTerm = found;
          query = '';
          selectedCategory = null;
          results = [];
        } else {
          // If not found, put it in the search box
          query = termQuery;
          handleSearch();
        }
        // Clear the store after handling
        selectedTermStore.set('');
      }
    });
    return unsubscribe;
  });

  function handleSearch() {
    if (query.trim()) {
      results = searchTerms(query);
      selectedCategory = null;
    } else {
      results = [];
    }
  }

  function selectCategory(cat: TermCategory) {
    selectedCategory = selectedCategory === cat ? null : cat;
    query = '';
    results = [];
  }

  function selectTerm(term: Term) {
    selectedTerm = selectedTerm?.termRoman === term.termRoman ? null : term;
  }

  let displayTerms = $derived(
    selectedCategory
      ? searchTerms('').filter(t => t.category === selectedCategory)
      : results
  );
</script>

<div class="bg-white rounded-lg border border-stone-200 p-4">
  <h3 class="text-sm font-medium text-stone-500 mb-3">Jargon</h3>

  <!-- Search -->
  <input
    type="text"
    bind:value={query}
    oninput={handleSearch}
    placeholder="Search terms..."
    class="w-full px-2 py-1.5 text-sm border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 mb-3"
  />

  <!-- Category filters -->
  <div class="flex flex-wrap gap-1 mb-3">
    {#each categories.slice(0, 4) as cat}
      <button
        onclick={() => selectCategory(cat.category)}
        class="px-2 py-0.5 text-xs rounded border transition-colors
               {selectedCategory === cat.category
                 ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                 : 'border-stone-200 hover:border-indigo-300 text-stone-600'}"
      >
        {cat.label.split(' ')[0]}
      </button>
    {/each}
  </div>

  <!-- Results -->
  {#if displayTerms.length > 0}
    <div class="space-y-1 max-h-64 overflow-y-auto">
      {#each displayTerms.slice(0, 10) as term}
        <button
          onclick={() => selectTerm(term)}
          class="w-full text-left px-2 py-1.5 rounded text-sm transition-colors hover:bg-stone-50
                 {selectedTerm?.termRoman === term.termRoman ? 'bg-indigo-50' : ''}"
        >
          <div class="flex items-center gap-2">
            <span class="font-medium"><Sanskrit text={term.term} /></span>
            <span class="text-stone-400 text-xs">{term.termRoman}</span>
          </div>
        </button>
      {/each}
    </div>
  {:else if query || selectedCategory}
    <p class="text-xs text-stone-400 italic">No terms found</p>
  {/if}

  <!-- Selected term detail -->
  {#if selectedTerm}
    <div class="mt-3 pt-3 border-t border-stone-100">
      <div class="text-lg font-medium mb-1">
        <Sanskrit text={selectedTerm.term} />
      </div>
      <div class="text-xs text-stone-500 mb-2">{selectedTerm.termRoman}</div>
      <p class="text-sm text-stone-700 leading-relaxed"><CommentaryText text={selectedTerm.meaning} /></p>
      {#if selectedTerm.sutraRef}
        <a href="/sutra/{selectedTerm.sutraRef}" class="text-xs text-indigo-600 hover:underline mt-2 inline-block">
          → {selectedTerm.sutraRef}
        </a>
      {/if}
    </div>
  {/if}

  <!-- Quick reference when nothing selected -->
  {#if !query && !selectedCategory && !selectedTerm}
    <div class="text-xs text-stone-400">
      <p>Look up Sanskrit grammar terms</p>
    </div>
  {/if}
</div>
