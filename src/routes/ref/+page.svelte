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
  const types: { value: string; label: string; sanskrit: boolean }[] = [
    { value: 'all',        label: 'all',       sanskrit: false },
    { value: 'samjna',     label: 'saṃjñā',    sanskrit: true },
    { value: 'paribhasha', label: 'paribhāṣā', sanskrit: true },
    { value: 'vidhi',      label: 'vidhi',     sanskrit: true },
    { value: 'adhikara',   label: 'adhikāra',  sanskrit: true },
  ];
</script>

<svelte:head>
  <title>Reference | anuvrtti</title>
</svelte:head>

<div class="ref-layout">
  <aside class="ref-sidebar">
    <details class="sidebar-details" open>
      <summary class="sidebar-summary">Filters &amp; Navigation</summary>
    <div class="search-box">
      <input
        type="text"
        placeholder="search"
        value={searchQuery}
        oninput={handleSearch}
      />
      {#if searchQuery}
        <button class="clear-btn" onclick={clearSearch}>×</button>
      {/if}
    </div>

    {#if !searchQuery}
      <nav class="adhyaya-nav">
        <h3><Sanskrit text="adhyāya" source="iast" /></h3>
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
        <h3><Sanskrit text="pāda" source="iast" /></h3>
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
        <h3>type</h3>
        <div class="type-buttons">
          {#each types as t}
            <button
              class="type-btn"
              class:active={selectedType === t.value}
              onclick={() => selectType(t.value)}
            >
              {#if t.sanskrit}<Sanskrit text={t.label} source="iast" />{:else}{t.label}{/if}
              {#if t.value !== 'all' && padaStats[t.value as keyof typeof padaStats]}
                <span class="type-count">{padaStats[t.value as keyof typeof padaStats]}</span>
              {/if}
            </button>
          {/each}
        </div>
      </nav>

      <div class="pada-stats">
        <span class="stats-label">{selectedAdhyaya}.{selectedPada}</span>
        <span class="stats-total">{padaStats.total} <Sanskrit text="sūtrāṇi" source="iast" /></span>
      </div>
    {/if}

    <nav class="tools-nav">
      <h3>tools</h3>
      <a href="/ref/prakriya" class="tool-link"><Sanskrit text="prakriyā" source="iast" /></a>
      <a href="/ref/pratyahara" class="tool-link"><Sanskrit text="pratyāhārāḥ" source="iast" /></a>
      <a href="/ref/tables" class="tool-link">reference tables</a>
      <a href="/ref/jargon" class="tool-link"><Sanskrit text="paribhāṣā" source="iast" /></a>
    </nav>
    </details>
  </aside>

  <main class="ref-main">
    {#if loading}
      <div class="loading-state">loading <Sanskrit text="sūtrāṇi" source="iast" />…</div>
    {:else if searchQuery}
      <div class="results-header">
        <h2>search · "{searchQuery}"</h2>
        <span class="results-count">{filteredSutras.length} results</span>
      </div>
    {:else}
      <div class="results-header">
        <h2>
          <Sanskrit text="अध्याय" /> {selectedAdhyaya}, <Sanskrit text="पाद" /> {selectedPada}
        </h2>
        <span class="results-count">{filteredSutras.length} <Sanskrit text="sūtrāṇi" source="iast" /></span>
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

  .sidebar-details {
    display: contents;
  }

  .sidebar-summary {
    display: none;
  }

  @media (max-width: 768px) {
    .sidebar-details {
      display: block;
      background: white;
      border: 1px solid #e7e5e4;
      border-radius: 0.5rem;
      overflow: hidden;
    }
    .sidebar-summary {
      display: flex;
      align-items: center;
      padding: 0.625rem 0.875rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: #57534e;
      cursor: pointer;
      user-select: none;
      list-style: none;
    }
    .sidebar-summary::after {
      content: '▾';
      margin-left: auto;
      font-size: 0.75rem;
      color: #a8a29e;
    }
    .sidebar-details[open] .sidebar-summary::after {
      content: '▴';
    }
    .sidebar-details > :not(summary) {
      padding: 0 0.875rem 0.875rem;
    }
  }

  .search-box {
    position: relative;
  }
  .search-box input {
    width: 100%;
    padding: 0.5rem 0;
    border: none;
    border-bottom: 1px solid #e2e8f0;
    background: transparent;
    font-size: 0.875rem;
    font-family: inherit;
  }
  .search-box input::placeholder {
    color: #cbd5e1;
  }
  .search-box input:focus {
    outline: none;
    border-bottom-color: #f97316;
  }
  .clear-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    color: #cbd5e1;
  }
  .clear-btn:hover { color: #0f1419; }

  .adhyaya-nav h3,
  .pada-nav h3,
  .type-nav h3,
  .tools-nav h3 {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: #94a3b8;
    text-transform: lowercase;
    margin-bottom: 0.5rem;
  }

  .adhyaya-buttons,
  .pada-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
  }
  .adhyaya-btn,
  .pada-btn {
    padding: 0;
    border: none;
    background: none;
    font-family: ui-monospace, monospace;
    font-size: 0.8rem;
    color: #94a3b8;
    cursor: pointer;
    transition: color 0.1s;
  }
  .adhyaya-btn:hover,
  .pada-btn:hover { color: #0f1419; }
  .adhyaya-btn.active,
  .pada-btn.active {
    color: #f97316;
    font-weight: 500;
  }

  .type-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .type-btn {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0.2rem 0;
    border: none;
    background: none;
    font-size: 0.875rem;
    font-style: italic;
    cursor: pointer;
    text-align: left;
    color: #94a3b8;
    transition: color 0.1s;
  }
  .type-btn:hover { color: #0f1419; }
  .type-btn.active { color: #f97316; }
  .type-count {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #cbd5e1;
    font-style: normal;
  }
  .type-btn.active .type-count { color: #f97316; }

  .pada-stats {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0.5rem 0;
    border-top: 1px solid #e2e8f0;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #94a3b8;
  }
  .stats-label { color: #0f1419; }

  .tools-nav {
    border-top: 1px solid #e2e8f0;
    padding-top: 1rem;
  }
  .tool-link {
    display: block;
    padding: 0.2rem 0;
    font-size: 0.9rem;
    font-style: italic;
    color: #4f46e5;
    text-decoration: none;
    transition: color 0.1s;
  }
  .tool-link:hover { color: #f97316; }

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
    font-size: 1rem;
    font-weight: 400;
    color: #0f1419;
  }
  .results-count {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
  }

  .sutra-list {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #e2e8f0;
  }
  .sutra-list :global(.sutra-compact) {
    border-bottom: 1px solid #e2e8f0;
  }

  .loading-state,
  .empty-state {
    text-align: center;
    padding: 3rem;
    color: #78716c;
  }
</style>
