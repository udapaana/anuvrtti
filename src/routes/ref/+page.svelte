<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { loadSutras, searchSutras, type Sutra } from '$lib/data';
  import SutraDisplay from '$lib/components/SutraDisplay.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let allSutras: Sutra[] = $state([]);
  let loading = $state(true);

  // URL-driven state
  let searchQuery = $state('');
  let selectedAdhyaya = $state(1);
  let selectedPada = $state(1);
  let selectedType = $state('all');

  // Sync with URL on mount and changes
  onMount(async () => {
    allSutras = await loadSutras();
    loading = false;
    syncFromUrl();
  });

  function syncFromUrl() {
    const params = $page.url.searchParams;
    searchQuery = params.get('q') || '';
    selectedAdhyaya = parseInt(params.get('a') || '1');
    selectedPada = parseInt(params.get('p') || '1');
    selectedType = params.get('type') || 'all';
  }

  function updateUrl() {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedAdhyaya !== 1) params.set('a', String(selectedAdhyaya));
    if (selectedPada !== 1) params.set('p', String(selectedPada));
    if (selectedType !== 'all') params.set('type', selectedType);

    const queryString = params.toString();
    goto(`/ref${queryString ? '?' + queryString : ''}`, { replaceState: true, noScroll: true });
  }

  // Filtered sutras
  let filteredSutras = $derived.by(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return allSutras.filter(s =>
        s.text.includes(searchQuery) ||
        s.textRoman.toLowerCase().includes(q) ||
        s.id.includes(searchQuery) ||
        s.expanded.includes(searchQuery)
      ).slice(0, 100);
    }

    let result = allSutras.filter(s =>
      s.adhyaya === selectedAdhyaya && s.pada === selectedPada
    );

    if (selectedType !== 'all') {
      result = result.filter(s => s.type === selectedType);
    }

    return result;
  });

  // Stats for current pada
  let padaStats = $derived.by(() => {
    const padaSutras = allSutras.filter(s =>
      s.adhyaya === selectedAdhyaya && s.pada === selectedPada
    );
    return {
      total: padaSutras.length,
      samjna: padaSutras.filter(s => s.type === 'samjna').length,
      paribhasha: padaSutras.filter(s => s.type === 'paribhasha').length,
      vidhi: padaSutras.filter(s => s.type === 'vidhi').length,
      adhikara: padaSutras.filter(s => s.type === 'adhikara').length,
    };
  });

  function handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
    updateUrl();
  }

  function selectAdhyaya(a: number) {
    selectedAdhyaya = a;
    selectedPada = 1;
    searchQuery = '';
    updateUrl();
  }

  function selectPada(p: number) {
    selectedPada = p;
    searchQuery = '';
    updateUrl();
  }

  function selectType(type: string) {
    selectedType = type;
    updateUrl();
  }

  function clearSearch() {
    searchQuery = '';
    updateUrl();
  }

  const adhyayas = [1, 2, 3, 4, 5, 6, 7, 8];
  const padas = [1, 2, 3, 4];
  const types = [
    { value: 'all', label: 'All' },
    { value: 'samjna', label: 'Samjna' },
    { value: 'paribhasha', label: 'Paribhasha' },
    { value: 'vidhi', label: 'Vidhi' },
    { value: 'adhikara', label: 'Adhikara' },
  ];
</script>

<svelte:head>
  <title>Reference | Anuvrtti</title>
</svelte:head>

<div class="ref-layout">
  <aside class="ref-sidebar">
    <div class="search-box">
      <input
        type="text"
        placeholder="Search sutras..."
        value={searchQuery}
        oninput={handleSearch}
      />
      {#if searchQuery}
        <button class="clear-btn" onclick={clearSearch}>×</button>
      {/if}
    </div>

    {#if !searchQuery}
      <nav class="adhyaya-nav">
        <h3>Adhyaya</h3>
        <div class="adhyaya-buttons">
          {#each adhyayas as a}
            <button
              class="adhyaya-btn"
              class:active={selectedAdhyaya === a}
              onclick={() => selectAdhyaya(a)}
            >
              {a}
            </button>
          {/each}
        </div>
      </nav>

      <nav class="pada-nav">
        <h3>Pada</h3>
        <div class="pada-buttons">
          {#each padas as p}
            <button
              class="pada-btn"
              class:active={selectedPada === p}
              onclick={() => selectPada(p)}
            >
              {selectedAdhyaya}.{p}
            </button>
          {/each}
        </div>
      </nav>

      <nav class="type-nav">
        <h3>Type</h3>
        <div class="type-buttons">
          {#each types as t}
            <button
              class="type-btn"
              class:active={selectedType === t.value}
              onclick={() => selectType(t.value)}
            >
              {t.label}
              {#if t.value !== 'all' && padaStats[t.value as keyof typeof padaStats]}
                <span class="type-count">{padaStats[t.value as keyof typeof padaStats]}</span>
              {/if}
            </button>
          {/each}
        </div>
      </nav>

      <div class="pada-stats">
        <span class="stats-label">{selectedAdhyaya}.{selectedPada}</span>
        <span class="stats-total">{padaStats.total} sutras</span>
      </div>
    {/if}

    <nav class="tools-nav">
      <h3>Tools</h3>
      <a href="/ref/prakriya" class="tool-link">Prakriya</a>
      <a href="/ref/pratyahara" class="tool-link">Pratyahara</a>
      <a href="/ref/tables" class="tool-link">Reference Tables</a>
    </nav>
  </aside>

  <main class="ref-main">
    {#if loading}
      <div class="loading-state">Loading sutras...</div>
    {:else if searchQuery}
      <div class="results-header">
        <h2>Search: "{searchQuery}"</h2>
        <span class="results-count">{filteredSutras.length} results</span>
      </div>
    {:else}
      <div class="results-header">
        <h2>
          <Sanskrit text="अध्याय" /> {selectedAdhyaya}, <Sanskrit text="पाद" /> {selectedPada}
        </h2>
        <span class="results-count">{filteredSutras.length} sutras</span>
      </div>
    {/if}

    <div class="sutra-list">
      {#each filteredSutras as sutra (sutra.id)}
        <SutraDisplay
          {sutra}
          variant="compact"
          href="/ref/{sutra.id}"
        />
      {/each}
    </div>

    {#if !loading && filteredSutras.length === 0}
      <div class="empty-state">
        {#if searchQuery}
          <p>No sutras match "{searchQuery}"</p>
        {:else}
          <p>No sutras found</p>
        {/if}
      </div>
    {/if}
  </main>
</div>

<style>
  .ref-layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 2rem;
    align-items: start;
  }

  @media (max-width: 768px) {
    .ref-layout {
      grid-template-columns: 1fr;
    }
    .ref-sidebar {
      position: static !important;
    }
  }

  .ref-sidebar {
    position: sticky;
    top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .search-box {
    position: relative;
  }
  .search-box input {
    width: 100%;
    padding: 0.625rem 0.875rem;
    border: 1px solid #d6d3d1;
    border-radius: 0.5rem;
    font-size: 0.875rem;
  }
  .search-box input:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  .clear-btn {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: #e7e5e4;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    color: #78716c;
  }
  .clear-btn:hover {
    background: #d6d3d1;
  }

  .adhyaya-nav h3,
  .pada-nav h3,
  .type-nav h3,
  .tools-nav h3 {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #78716c;
    margin-bottom: 0.5rem;
  }

  .adhyaya-buttons,
  .pada-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
  .adhyaya-btn,
  .pada-btn {
    padding: 0.375rem 0.625rem;
    border: 1px solid #e7e5e4;
    background: white;
    border-radius: 0.375rem;
    font-size: 0.8125rem;
    cursor: pointer;
    transition: all 0.1s;
  }
  .adhyaya-btn:hover,
  .pada-btn:hover {
    border-color: #c7d2fe;
    background: #f5f5f4;
  }
  .adhyaya-btn.active,
  .pada-btn.active {
    background: #4f46e5;
    color: white;
    border-color: #4f46e5;
  }

  .type-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .type-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.375rem 0.625rem;
    border: none;
    background: none;
    border-radius: 0.375rem;
    font-size: 0.8125rem;
    cursor: pointer;
    text-align: left;
    color: #57534e;
  }
  .type-btn:hover {
    background: #f5f5f4;
  }
  .type-btn.active {
    background: #eef2ff;
    color: #4f46e5;
    font-weight: 500;
  }
  .type-count {
    font-size: 0.75rem;
    color: #a8a29e;
  }
  .type-btn.active .type-count {
    color: #6366f1;
  }

  .pada-stats {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background: #fafaf9;
    border-radius: 0.375rem;
    font-size: 0.8125rem;
  }
  .stats-label {
    font-weight: 600;
    color: #1c1917;
  }
  .stats-total {
    color: #78716c;
  }

  .tools-nav {
    border-top: 1px solid #e7e5e4;
    padding-top: 1rem;
  }
  .tool-link {
    display: block;
    padding: 0.375rem 0;
    font-size: 0.8125rem;
    color: #6366f1;
    text-decoration: none;
  }
  .tool-link:hover {
    text-decoration: underline;
  }

  .ref-main {
    min-width: 0;
  }

  .results-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .results-header h2 {
    font-size: 1.125rem;
    font-weight: 600;
  }
  .results-count {
    font-size: 0.875rem;
    color: #78716c;
  }

  .sutra-list {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid #e7e5e4;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .sutra-list :global(.sutra-compact) {
    border-bottom: 1px solid #f5f5f4;
  }
  .sutra-list :global(.sutra-compact:last-child) {
    border-bottom: none;
  }

  .loading-state,
  .empty-state {
    text-align: center;
    padding: 3rem;
    color: #78716c;
  }
</style>
