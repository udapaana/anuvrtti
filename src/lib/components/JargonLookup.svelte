<script lang="ts">
  import { searchTerms, getCategories, getTermsByCategory, lookupTerm, type Term, type TermCategory } from '$lib/jargon';
  import { selectedTerm as selectedTermStore } from '$lib/stores/jargon';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import CommentaryText from '$lib/components/CommentaryText.svelte';

  let query = $state('');
  let results = $state<Term[]>([]);
  let selectedTerm = $state<Term | null>(null);
  let selectedCategory = $state<TermCategory | null>(null);

  // History for back navigation
  let termHistory = $state<Term[]>([]);

  // Only categories that actually contain terms, so "browse by category" shows
  // every populated group (not just the first few, and not empty ones).
  const categories = getCategories().filter((c) => c.count > 0);

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
    selectedCategory ? getTermsByCategory(selectedCategory) : results
  );
</script>

<div class="py-1">
  <h3 class="font-mono text-[0.7rem] tracking-wider lowercase text-[var(--quiet)] mb-3">
    <Sanskrit text="paribhāṣā" source="iast" />
  </h3>

  <!-- Search -->
  <input
    type="text"
    bind:value={query}
    oninput={handleSearch}
    placeholder="search terms"
    class="w-full px-0 py-1.5 text-sm border-0 border-b border-[var(--rule-2)] bg-transparent focus:outline-none focus:border-[var(--accent)] mb-3 placeholder:text-[var(--faint)]"
  />

  <!-- Category filters — all populated categories, with counts -->
  <div class="flex flex-wrap gap-x-3 gap-y-1.5 mb-4">
    {#each categories as cat}
      <button
        onclick={() => selectCategory(cat.category)}
        title={cat.label}
        class="text-xs italic transition-colors
               {selectedCategory === cat.category
                 ? 'text-[var(--accent)] font-medium'
                 : 'text-[var(--quiet)] hover:text-[var(--ink)]'}"
      >
        {cat.label.split(' ')[0].toLowerCase()} <span class="not-italic text-[0.65rem] text-[var(--faint)]">{cat.count}</span>
      </button>
    {/each}
  </div>

  <!-- Results -->
  {#if displayTerms.length > 0}
    <div class="max-h-64 overflow-y-auto -ml-1">
      {#each displayTerms.slice(0, selectedCategory ? 200 : 10) as term}
        <button
          onclick={() => selectTerm(term)}
          class="w-full text-left px-1 py-1 text-sm transition-colors
                 {selectedTerm?.termRoman === term.termRoman ? 'text-[var(--accent)]' : 'hover:bg-[var(--sunken)]'}"
        >
          <div class="flex items-baseline gap-2">
            <span class="italic"><Sanskrit text={term.term} /></span>
            <span class="text-[var(--quiet)] text-xs font-mono">{term.termRoman}</span>
          </div>
        </button>
      {/each}
    </div>
  {:else if query || selectedCategory}
    <p class="text-xs text-[var(--quiet)] italic">no terms found</p>
  {/if}

  <!-- Selected term detail -->
  {#if selectedTerm}
    <div class="mt-3 pt-3 border-t border-[var(--rule-2)]">
      <!-- Back button -->
      <button
        onclick={goBack}
        class="flex items-center gap-1 text-xs text-[var(--quiet)] hover:text-[var(--accent)] mb-2 transition-colors"
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
        <a href="/ref/{selectedTerm.sutraRef}" class="text-xs text-indigo-600 hover:underline mt-2 inline-block">
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
