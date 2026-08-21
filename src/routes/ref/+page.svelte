<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { loadSutras, type Sutra } from '$lib/data';
  import { loadPathIndex, type PathMeta } from '$lib/content';
  import { learningProgress } from '$lib/stores/learning';
  import { pathCategories } from '$lib/learning/categories';
  import SutraDisplay from '$lib/components/SutraDisplay.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Spine from '$lib/components/ui/Spine.svelte';
  import Segmented from '$lib/components/ui/Segmented.svelte';

  /*
    Reference, two ways.

    सूत्राणि browses the Aṣṭādhyāyī by position: the adhyāya and pāda coordinate
    row is on the shelf (position, not filtering), and the only real filter —
    the four types with their live counts — is the spine. The sidebar's six
    stacked control groups are gone: search is ⌘K (?q= still resolves to a
    results state here), and the four tool links moved to the shelf's right.

    पथः is the guided path through it: the ten categories the home page used to
    print as a tree, each holding its paths, each path a run of steps over real
    sūtras. Mode is ?mode= driven, so either half is linkable.
  */
  let allSutras: Sutra[] = $state([]);
  let loading = $state(true);

  let paths: PathMeta[] = $state([]);
  let pathProgress: Record<string, number[]> = $state({});
  let completedPaths: string[] = $state([]);
  learningProgress.subscribe((p) => {
    pathProgress = p.pathProgress;
    completedPaths = p.completedPaths;
  });

  // URL-driven state — the state machine is unchanged, only widened by ?mode=.
  let mode = $state<'sutra' | 'path'>('sutra');
  let searchQuery = $state('');
  let selectedAdhyaya = $state(1);
  let selectedPada = $state(1);
  let selectedType = $state('all');
  let selectedCategory = $state('foundation');

  onMount(async () => {
    syncFromUrl();
    const [sutras, index] = await Promise.all([loadSutras(), loadPathIndex().catch(() => [])]);
    allSutras = sutras;
    paths = index as PathMeta[];
    loading = false;
  });

  function syncFromUrl() {
    const params = $page.url.searchParams;
    mode = params.get('mode') === 'path' ? 'path' : 'sutra';
    searchQuery = params.get('q') || '';
    selectedAdhyaya = parseInt(params.get('a') || '1');
    selectedPada = parseInt(params.get('p') || '1');
    selectedType = params.get('type') || 'all';
    selectedCategory = params.get('cat') || 'foundation';
  }

  function updateUrl() {
    const params = new URLSearchParams();
    if (mode === 'path') params.set('mode', 'path');
    if (searchQuery) params.set('q', searchQuery);
    if (selectedAdhyaya !== 1) params.set('a', String(selectedAdhyaya));
    if (selectedPada !== 1) params.set('p', String(selectedPada));
    if (selectedType !== 'all') params.set('type', selectedType);
    if (mode === 'path' && selectedCategory !== 'foundation') params.set('cat', selectedCategory);

    const queryString = params.toString();
    goto(`/ref${queryString ? '?' + queryString : ''}`, { replaceState: true, noScroll: true });
  }

  // ── sūtra mode ─────────────────────────────────────────────────────────────
  let filteredSutras = $derived.by(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return allSutras
        .filter(
          (s) =>
            s.text.includes(searchQuery) ||
            s.textRoman.toLowerCase().includes(q) ||
            s.id.includes(searchQuery) ||
            s.expanded.includes(searchQuery)
        )
        .slice(0, 100);
    }

    let result = allSutras.filter(
      (s) => s.adhyaya === selectedAdhyaya && s.pada === selectedPada
    );
    if (selectedType !== 'all') {
      result = result.filter((s) => s.type === selectedType);
    }
    return result;
  });

  let padaStats = $derived.by(() => {
    const padaSutras = allSutras.filter(
      (s) => s.adhyaya === selectedAdhyaya && s.pada === selectedPada
    );
    return {
      total: padaSutras.length,
      samjna: padaSutras.filter((s) => s.type === 'samjna').length,
      paribhasha: padaSutras.filter((s) => s.type === 'paribhasha').length,
      vidhi: padaSutras.filter((s) => s.type === 'vidhi').length,
      adhikara: padaSutras.filter((s) => s.type === 'adhikara').length
    };
  });

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
  function setMode(next: 'sutra' | 'path') {
    mode = next;
    searchQuery = '';
    updateUrl();
  }

  const adhyayas = [1, 2, 3, 4, 5, 6, 7, 8];
  const padas = [1, 2, 3, 4];
  const types: { value: string; label: string }[] = [
    { value: 'all', label: 'all' },
    { value: 'samjna', label: 'saṃjñā' },
    { value: 'paribhasha', label: 'paribhāṣā' },
    { value: 'vidhi', label: 'vidhi' },
    { value: 'adhikara', label: 'adhikāra' }
  ];

  // ── path mode ──────────────────────────────────────────────────────────────
  // The progress data is already there in learningProgress.pathProgress and
  // stepCount; only the presentation changes.
  const byCategory = $derived.by(() => {
    const out: Record<string, PathMeta[]> = {};
    for (const cat of pathCategories) {
      const inCat = paths
        .filter((p) => p.track === 'grammar' && p.category === cat.id)
        .sort((a, b) => a.order - b.order);
      if (inCat.length) out[cat.id] = inCat;
    }
    return out;
  });

  const categoryItems = $derived(
    pathCategories
      .filter((c) => (byCategory[c.id] ?? []).length)
      .map((c) => ({
        id: c.id,
        label: c.sanskrit,
        script: 'iast' as const,
        sub: c.english,
        count: (byCategory[c.id] ?? []).length
      }))
  );

  const activeCategory = $derived(
    pathCategories.find((c) => c.id === selectedCategory) ?? pathCategories[0]
  );

  const categoryPaths = $derived(
    (byCategory[selectedCategory] ?? []).map((p) => {
      const done = (pathProgress[p.id] ?? []).length;
      const complete = completedPaths.includes(p.id) || (p.stepCount > 0 && done >= p.stepCount);
      const pct = p.stepCount ? Math.round((done / p.stepCount) * 100) : 0;
      return { meta: p, done, complete, pct };
    })
  );

  const totalPaths = $derived(
    Object.values(byCategory).reduce((n, list) => n + list.length, 0)
  );

  function englishOf(title: string): string {
    const m = title.match(/—\s*(.+)$/);
    return m ? m[1] : title;
  }

  // Path labels are authored in whichever script the source used; detect it so
  // the transliterator is not handed Devanagari as if it were SLP1.
  function detectSource(s: string): 'telugu' | 'devanagari' | 'iast' {
    if (/[ఀ-౿]/.test(s)) return 'telugu';
    if (/[ऀ-ॿ]/.test(s)) return 'devanagari';
    return 'iast';
  }
</script>

<svelte:head>
  <title>सूत्र · reference | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  <Segmented
    options={[
      { id: 'sutra', label: 'सूत्राणि', script: 'devanagari' as const },
      { id: 'path', label: 'पथः', script: 'devanagari' as const }
    ]}
    value={mode}
    onchange={(id) => setMode(id as 'sutra' | 'path')}
    ariaLabel="reference mode"
  />
  {#if mode === 'sutra'}
    <!-- The coordinate row: where in the eight adhyāyas you are, not a filter. -->
    <div class="coords">
      {#each adhyayas as a}
        <button class:on={selectedAdhyaya === a} onclick={() => selectAdhyaya(a)}>{a}</button>
      {/each}
      <span class="divider">|</span>
      {#each padas as p}
        <button class:on={selectedPada === p} onclick={() => selectPada(p)}>.{p}</button>
      {/each}
    </div>
  {:else}
    <span class="quiet">syllabus</span>
  {/if}
{/snippet}

{#snippet shelfRight()}
  {#if mode === 'sutra'}
    <nav class="tools">
      <a href="/ref/prakriya">prakriyā</a>
      <a href="/ref/pratyahara">pratyāhārāḥ</a>
      <a href="/ref/tables">tables</a>
      <a href="/ref/jargon">jargon</a>
      <a href="/usage">usage</a>
      <a href="/dukrnkarane">dukṛṇkaraṇe</a>
    </nav>
    <span>{padaStats.total} sūtrāṇi</span>
  {:else}
    <span>{totalPaths} paths · {categoryItems.length} categories</span>
  {/if}
{/snippet}

{#snippet spine()}
  {#if mode === 'sutra'}
    <Spine
      title="type"
      items={types.map((t) => ({
        id: t.value,
        label: t.label,
        script: t.value === 'all' ? undefined : ('iast' as const),
        count:
          t.value === 'all'
            ? padaStats.total
            : padaStats[t.value as keyof typeof padaStats]
      }))}
      activeId={selectedType}
      onpick={selectType}
    />
  {:else}
    <Spine
      title="categories"
      items={categoryItems}
      activeId={selectedCategory}
      onpick={(id) => {
        selectedCategory = id;
        updateUrl();
      }}
    />
  {/if}
{/snippet}

<Shelf left={shelfLeft} right={shelfRight} />

<Shell {spine}>
  {#if loading}
    <div class="status">loading <Sanskrit text="sūtrāṇi" source="iast" />…</div>
  {:else if mode === 'path'}
    <header class="head">
      <h1><Sanskrit text={activeCategory.sanskrit} source="iast" /></h1>
      <p>Paths through the {activeCategory.english} sūtras, in the order they are taken.</p>
    </header>

    <div class="paths">
      {#if !categoryPaths.length}
        <p class="note">No paths in this category yet.</p>
      {/if}
      {#each categoryPaths as p (p.meta.id)}
        <a class="path" href="/workbook/{p.meta.id}">
          <span class="path-order">{String(p.meta.order).padStart(2, '0')}</span>
          <span class="path-name">
            <span class="path-deva">
              <Sanskrit text={p.meta.label} source={detectSource(p.meta.label)} />
            </span>
            <span class="path-en">{englishOf(p.meta.title)}</span>
          </span>
          <span class="path-steps">
            <span class="track"
              ><span class="bar" class:done={p.complete} style="width:{p.pct}%"></span></span
            >
            <span class="steps">{p.done} / {p.meta.stepCount} steps</span>
          </span>
          <span class="path-status" class:done={p.complete} class:started={!p.complete && p.pct > 0}>
            {p.complete ? '✓' : p.pct > 0 ? p.pct + '%' : '→'}
          </span>
        </a>
      {/each}
    </div>

    <p class="note">
      Each path is a sequence of steps over sūtras. A step links to the sūtra it teaches, and a
      sūtra page lists the paths that use it.
    </p>
  {:else}
    <header class="head">
      {#if searchQuery}
        <h1>search · “{searchQuery}”</h1>
        <p>{filteredSutras.length} results</p>
      {:else}
        <h1>
          <Sanskrit text="अध्याय" /> {selectedAdhyaya} · <Sanskrit text="पाद" /> {selectedPada}
        </h1>
        <p>{filteredSutras.length} <Sanskrit text="sūtrāṇi" source="iast" /></p>
      {/if}
    </header>

    <div class="sutras">
      {#each filteredSutras as sutra (sutra.id)}
        <SutraDisplay {sutra} variant="compact" href="/ref/{sutra.id}" />
      {/each}
      {#if !filteredSutras.length}
        <p class="note">No sūtras of this type in this pāda.</p>
      {/if}
    </div>
  {/if}
</Shell>

<style>
  .status {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
    padding: 40px 0;
  }
  .quiet {
    color: var(--faint);
  }

  /* shelf */
  .coords {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .coords button {
    font-family: var(--font-mono);
    font-size: 12px;
    background: transparent;
    border: none;
    border-radius: var(--radius);
    color: var(--quiet);
    padding: 2px 5px;
    cursor: pointer;
  }
  .coords button:hover {
    color: var(--ink);
  }
  .coords button.on {
    background: var(--ink);
    color: var(--paper);
  }
  .divider {
    color: var(--rule-2);
    padding: 0 4px;
  }

  .tools {
    display: flex;
    gap: 12px;
  }
  .tools a {
    color: var(--quiet);
    text-decoration: none;
  }
  .tools a:hover {
    color: var(--accent);
  }

  /* column */
  .head {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .head h1 {
    margin: 0;
    font-family: var(--font-deva);
    font-size: 27px;
    font-weight: 600;
  }
  .head p {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
    font-style: italic;
    max-width: 62ch;
  }

  .sutras {
    display: flex;
    flex-direction: column;
  }

  /* the guided path */
  .paths {
    display: flex;
    flex-direction: column;
  }
  .path {
    display: grid;
    grid-template-columns: 3.4rem minmax(0, 1fr) 8rem 3rem;
    gap: 16px;
    align-items: baseline;
    padding: 12px 0;
    border-top: 1px solid var(--rule);
    text-decoration: none;
    color: inherit;
  }
  .path:hover .path-deva {
    color: var(--accent);
  }
  .path-order {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
  }
  .path-name {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .path-deva {
    font-family: var(--font-deva);
    font-size: 16px;
  }
  .path-en {
    font-size: 13px;
    color: var(--quiet);
    font-style: italic;
  }
  .path-steps {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .track {
    display: block;
    height: 2px;
    background: var(--rule);
  }
  .bar {
    display: block;
    height: 2px;
    background: var(--accent);
  }
  .bar.done {
    background: var(--accent-ok);
  }
  .steps {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--faint);
  }
  .path-status {
    font-family: var(--font-mono);
    font-size: 12px;
    text-align: right;
    color: var(--faint);
  }
  .path-status.done {
    color: var(--accent-ok);
  }
  .path-status.started {
    color: var(--accent);
  }

  .note {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
    max-width: 64ch;
  }

  @media (max-width: 720px) {
    .path {
      grid-template-columns: 2.5rem minmax(0, 1fr) 2.5rem;
    }
    .path-steps {
      display: none;
    }
    .tools {
      display: none;
    }
  }
</style>
