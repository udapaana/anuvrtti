<script lang="ts">
  import { searchTerms, getCategories, lookupTerm, type Term, type TermCategory } from '$lib/jargon';
  import { selectedTerm as selectedTermStore } from '$lib/stores/jargon';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import CommentaryText from '$lib/components/CommentaryText.svelte';

  let query = $state('');
  let results = $state<Term[]>([]);
  let selectedTerm = $state<Term | null>(null);
  let selectedCategory = $state<TermCategory | null>(null);

  // History for back navigation
  let termHistory = $state<Term[]>([]);

  const categories = getCategories();

  // Listen for external term selection (from CommentaryText clicks or ClickableSanskrit)
  $effect(() => {
    const unsubscribe = selectedTermStore.subscribe(termQuery => {
      if (termQuery) {
        const found = lookupTerm(termQuery);
        if (found) {
          // Save current term to history before switching
          if (selectedTerm && selectedTerm.termRoman !== found.termRoman) {
            termHistory = [...termHistory, selectedTerm];
          }
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

  function goBack() {
    if (termHistory.length > 0) {
      const prev = termHistory[termHistory.length - 1];
      termHistory = termHistory.slice(0, -1);
      selectedTerm = prev;
    } else {
      selectedTerm = null;
    }
  }

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

<div class="py-1">
  <h3 class="font-mono text-[0.7rem] tracking-wider lowercase text-[#94a3b8] mb-3">
    <Sanskrit text="paribhāṣā" source="iast" />
  </h3>

  <!-- Search -->
  <input
    type="text"
    bind:value={query}
    oninput={handleSearch}
    placeholder="search terms"
    class="w-full px-0 py-1.5 text-sm border-0 border-b border-[#e2e8f0] bg-transparent focus:outline-none focus:border-[#f97316] mb-3 placeholder:text-[#cbd5e1]"
  />

  <!-- Category filters -->
  <div class="flex flex-wrap gap-3 mb-4">
    {#each categories.slice(0, 4) as cat}
      <button
        onclick={() => selectCategory(cat.category)}
        class="text-xs italic transition-colors
               {selectedCategory === cat.category
                 ? 'text-[#f97316] font-medium'
                 : 'text-[#94a3b8] hover:text-[#0f1419]'}"
      >
        {cat.label.split(' ')[0].toLowerCase()}
      </button>
    {/each}
  </div>

  <!-- Results -->
  {#if displayTerms.length > 0}
    <div class="max-h-64 overflow-y-auto -ml-1">
      {#each displayTerms.slice(0, 10) as term}
        <button
          onclick={() => selectTerm(term)}
          class="w-full text-left px-1 py-1 text-sm transition-colors
                 {selectedTerm?.termRoman === term.termRoman ? 'text-[#f97316]' : 'hover:bg-[#fff7ed]'}"
        >
          <div class="flex items-baseline gap-2">
            <span class="italic"><Sanskrit text={term.term} /></span>
            <span class="text-[#94a3b8] text-xs font-mono">{term.termRoman}</span>
          </div>
        </button>
      {/each}
    </div>
  {:else if query || selectedCategory}
    <p class="text-xs text-[#94a3b8] italic">no terms found</p>
  {/if}

  <!-- Selected term detail -->
  {#if selectedTerm}
    <div class="mt-3 pt-3 border-t border-[#e2e8f0]">
      <!-- Back button -->
      <button
        onclick={goBack}
        class="flex items-center gap-1 text-xs text-[#94a3b8] hover:text-[#f97316] mb-2 transition-colors"
      >
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {#if termHistory.length > 0}
          Back to <Sanskrit text={termHistory[termHistory.length - 1].term} class="ml-1" />
        {:else}
          Close
        {/if}
      </button>

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
