<svelte:options runes={true} />

<script lang="ts">
  import { loadPathIndex, type PathMeta } from '$lib/content';
  import type { PathCategory, Track } from '$lib/learning/paths';
  import { learningProgress } from '$lib/stores/learning';
  import { categoryColors } from '$lib/learning/tree';
  import { displayScript } from '$lib/stores/preferences';
  import { transliterate, type Script } from '$lib/transliteration';
  import { onMount } from 'svelte';
  import InlineMarkup from '$lib/components/InlineMarkup.svelte';

  // All paths loaded from index
  let allPaths: PathMeta[] = $state([]);
  let loading = $state(true);

  // View mode toggled via a simple boolean
  type View = 'reading' | 'grammar' | 'balabodhini';
  let view = $state<View>('balabodhini');

  // Collapsed categories (grammar view)
  let collapsed: Set<string> = $state(new Set());

  // Progress
  let completedPaths: string[] = $state([]);
  let pathProgress: Record<string, number[]> = $state({});

  learningProgress.subscribe(p => {
    completedPaths = p.completedPaths;
    pathProgress = p.pathProgress;
  });

  // Transliterated labels
  let labels: Map<string, string> = $state(new Map());

  const categories: { id: PathCategory; label: string; san: string }[] = [
    { id: 'foundation', label: 'Foundations', san: 'आधारः' },
    { id: 'tinganta',   label: 'Verbs',        san: 'तिङन्त' },
    { id: 'subanta',    label: 'Nouns',         san: 'सुबन्त' },
    { id: 'karaka',     label: 'Cases',         san: 'कारक' },
    { id: 'kridanta',   label: 'Participles',   san: 'कृदन्त' },
    { id: 'taddhita',   label: 'Derivation',    san: 'तद्धित' },
    { id: 'sandhi',     label: 'Sandhi',        san: 'सन्धि' },
    { id: 'samasa',     label: 'Compounds',     san: 'समास' },
    { id: 'prakarana',  label: 'Deep Dives',    san: 'प्रकरण' },
    { id: 'prakriya',   label: 'Derivations',   san: 'प्रक्रिया' },
  ];

  onMount(() => {
    loadPathIndex()
      .then(paths => {
        allPaths = paths;
        loading = false;
        rebuildLabels($displayScript);
      })
      .catch(e => {
        console.error('Failed to load path index:', e);
        loading = false;
      });
    return displayScript.subscribe(s => rebuildLabels(s));
  });

  async function rebuildLabels(script: Script) {
    const m = new Map<string, string>();
    for (const p of allPaths) {
      m.set(p.id, script === 'devanagari' ? p.label : await transliterate(p.label, 'devanagari', script));
      if (p.titleSanskrit) {
        m.set(`title-${p.id}`, script === 'telugu' ? p.titleSanskrit : await transliterate(p.titleSanskrit, 'telugu', script));
      }
    }
    for (const c of categories) {
      m.set(c.id, script === 'devanagari' ? c.san : await transliterate(c.san, 'devanagari', script));
    }
    // Tab labels
    const balaTab = 'బాలబోధిని';
    const gramTab = 'व्याकरणम्';
    m.set('balabodhini-tab', script === 'telugu' ? balaTab : await transliterate(balaTab, 'telugu', script));
    m.set('grammar-tab', script === 'devanagari' ? gramTab : await transliterate(gramTab, 'devanagari', script));
    labels = m;
  }

  function label(id: string, fallback: string) {
    return labels.get(id) || fallback;
  }

  function pct(path: PathMeta) {
    const steps = pathProgress[path.id] || [];
    return path.stepCount === 0 ? 0 : (steps.length / path.stepCount) * 100;
  }

  function done(id: string) { return completedPaths.includes(id); }

  function prereqsMet(path: PathMeta) {
    const prereqs = Array.isArray(path.prerequisites) ? path.prerequisites : [];
    return prereqs.every(id => completedPaths.includes(id));
  }

  function unmetLabels(path: PathMeta): string {
    const prereqs = Array.isArray(path.prerequisites) ? path.prerequisites : [];
    return prereqs
      .filter(id => !completedPaths.includes(id))
      .map(id => allPaths.find(p => p.id === id)?.label || id)
      .join(', ');
  }

  let balabodhiniPaths = $derived(
    allPaths.filter(p => p.id.startsWith('balabodhini-')).sort((a, b) => a.order - b.order)
  );
  let readingPaths = $derived(
    allPaths.filter(p => p.track === 'reading' && !p.id.startsWith('balabodhini-'))
  );
  let readingDone = $derived(readingPaths.filter(p => done(p.id)).length);
  let nextIdx = $derived(readingPaths.findIndex(p => !done(p.id)));

  function grammarPaths(cat: PathCategory) {
    const diffRank = { beginner: 0, intermediate: 1, advanced: 2 };
    return allPaths
      .filter(p => p.track === 'grammar' && p.category === cat)
      .sort((a, b) => {
        const d = diffRank[a.difficulty] - diffRank[b.difficulty];
        return d !== 0 ? d : a.order - b.order;
      });
  }

  function toggleCollapse(id: string) {
    const s = new Set(collapsed);
    s.has(id) ? s.delete(id) : s.add(id);
    collapsed = s;
  }
</script>

{#if loading}
  <div class="loading">
    <div class="spinner"></div>
    <span>Loading paths...</span>
  </div>
{:else}
  <div class="learning-tree">

    <!-- Track Toggle -->
    <div class="mode-toggle">
      <a href="#balabodhini" class="mode-btn" class:active={view === 'balabodhini'}
         onclick={(e) => { e.preventDefault(); view = 'balabodhini'; }}>
        <span class="mode-sanskrit font-{$displayScript}">{label('balabodhini-tab', 'బాలబోధిని')}</span>
      </a>
      <a href="#grammar" class="mode-btn" class:active={view === 'grammar'}
         onclick={(e) => { e.preventDefault(); view = 'grammar'; }}>
        <span class="mode-sanskrit font-{$displayScript}">{label('grammar-tab', 'व्याकरणम्')}</span>
      </a>
    </div>

    {#if view === 'reading'}
      <!-- Reading Path -->
      <div class="reading-header">
        <p class="reading-desc">A structured path through the essentials — recommended for beginners.</p>
        {#if readingPaths.length > 0}
          <div class="reading-progress">
            <span class="progress-text">{readingDone}/{readingPaths.length} complete</span>
            <div class="progress-track">
              <div class="progress-fill" style="width: {(readingDone / readingPaths.length) * 100}%"></div>
            </div>
          </div>
        {/if}
      </div>

      <ol class="reading-list">
        {#each readingPaths as path, i}
          {@const complete = done(path.id)}
          {@const isCurrent = i === nextIdx}
          {@const colors = categoryColors[path.category] || categoryColors.foundation}
          <li class="reading-item" class:completed={complete} class:current={isCurrent}>
            <a href="/learn/{path.id}" class="reading-btn">
              <span class="reading-number" class:complete style="border-color: {colors.medium}; {complete ? `background: ${colors.medium}` : ''}">
                {#if complete}✓{:else}{i + 1}{/if}
              </span>
              <div class="reading-content">
                <span class="reading-label font-{$displayScript}">{label(path.id, path.label)}</span>
                <span class="reading-title">{path.title}</span>
              </div>
              <span class="reading-category" style="color: {colors.medium};">{label(path.category, path.category)}</span>
              {#if !complete && pct(path) > 0}
                <span class="reading-progress-mini">
                  <span class="progress-bar-mini" style="width: {pct(path)}%; background: {colors.medium};"></span>
                </span>
              {/if}
            </a>
          </li>
        {/each}
      </ol>

    {:else if view === 'grammar'}
      <!-- Grammar View -->
      <div class="grammar-header">
        <p class="grammar-desc">Systematic Pāṇinian grammar — organized by topic following traditional prakaraṇa structure.</p>
      </div>

      <div class="learning-paths">
        {#each categories as cat}
          {@const paths = grammarPaths(cat.id)}
          {@const colors = categoryColors[cat.id] || categoryColors.foundation}
          {#if paths.length > 0}
            <div class="category">
              <a
                href="#cat-{cat.id}"
                class="category-header"
                onclick={(e) => { e.preventDefault(); toggleCollapse(cat.id); }}
              >
                <span class="category-icon" style="background: {colors.medium};"></span>
                <span class="category-label">{label(cat.id, cat.san)}</span>
                <span class="category-english">{cat.label}</span>
                <span class="category-count">{paths.length}</span>
                <span class="category-toggle">{collapsed.has(cat.id) ? '▸' : '▾'}</span>
              </a>

              {#if !collapsed.has(cat.id)}
                <div class="paths-list">
                  {#each paths as path}
                    {@const complete = done(path.id)}
                    {@const unlocked = prereqsMet(path)}
                    <a
                      href="/learn/{path.id}"
                      class="path-item"
                      class:completed={complete}
                      class:locked={!unlocked && !complete}
                      title={!unlocked && !complete ? `Requires: ${unmetLabels(path)}` : ''}
                    >
                      <span class="path-bullet" style="background: {unlocked || complete ? (categoryColors[path.category] || categoryColors.foundation).medium : '#d6d3d1'};"></span>
                      <span class="path-label">{label(path.id, path.label)}</span>
                      <span class="path-title font-{$displayScript}">{label(path.id, path.label)}</span>
                      {#if complete}
                        <span class="path-check">✓</span>
                      {:else if pct(path) > 0}
                        <span class="path-progress">
                          <span class="progress-bar" style="width: {pct(path)}%; background: {(categoryColors[path.category] || categoryColors.foundation).medium};"></span>
                        </span>
                      {:else if !unlocked}
                        <span class="path-prereqs">
                          {#each (Array.isArray(path.prerequisites) ? path.prerequisites : []).filter(id => !completedPaths.includes(id)) as reqId}
                            <span class="prereq-tag">{allPaths.find(p => p.id === reqId)?.label || reqId}</span>
                          {/each}
                        </span>
                      {/if}
                      <span class="path-difficulty" class:beginner={path.difficulty === 'beginner'} class:intermediate={path.difficulty === 'intermediate'} class:advanced={path.difficulty === 'advanced'}>
                        {path.difficulty === 'beginner' ? '●' : path.difficulty === 'intermediate' ? '●●' : '●●●'}
                      </span>
                    </a>
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
    {:else}
      <!-- Bālabodhini -->
      <div class="reading-header">
        <p class="reading-desc">Here is a digitization of the first volume of Kāśī Kṛṣṇācārya's <em>Bālabodhini</em> in Telugu.</p>
      </div>

      <ol class="reading-list">
        {#each balabodhiniPaths as path}
          {@const complete = done(path.id)}
          {@const colors = categoryColors['prakarana'] || categoryColors.foundation}
          {@const lessonNum = parseInt(path.id.match(/balabodhini-\d+-(\d+)/)?.[1] ?? '0', 10)}
          <li class="reading-item" class:completed={complete}>
            <a href="/learn/{path.id}" class="reading-btn">
              <span class="reading-number" class:complete style="border-color: {colors.medium}; {complete ? `background: ${colors.medium}` : ''}">
                {#if complete}✓{:else}{lessonNum}{/if}
              </span>
              <div class="reading-content">
                <span class="reading-label font-{$displayScript}">{label(`title-${path.id}`, path.titleSanskrit)}</span>
                {#if path.description}
                  <span class="reading-desc-inline" style="color: {colors.medium};"><InlineMarkup text={path.description} /></span>
                {/if}
              </div>
            </a>
          </li>
        {/each}
      </ol>
    {/if}

  </div>
{/if}

<style>
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 2rem;
    color: #78716c;
  }

  .spinner {
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #e7e5e4;
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .learning-tree {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* Mode Toggle */
  .mode-toggle {
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem;
    background: #f5f5f4;
    border-radius: 8px;
    width: fit-content;
  }

  .mode-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s;
    text-decoration: none;
  }

  .mode-btn:hover {
    background: #e7e5e4;
  }

  .mode-btn.active {
    background: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .mode-sanskrit {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1c1917;
  }

  .mode-english {
    font-size: 0.65rem;
    color: #78716c;
  }

  /* Reading Path */
  .reading-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .reading-desc, .grammar-desc {
    font-size: 0.8rem;
    color: #78716c;
    margin: 0;
  }

  .reading-progress {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .progress-text {
    font-size: 0.75rem;
    color: #57534e;
    font-weight: 500;
  }

  .progress-track {
    flex: 1;
    max-width: 200px;
    height: 4px;
    background: #e7e5e4;
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: #6366f1;
    border-radius: 2px;
    transition: width 0.3s;
  }

  .reading-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .reading-item {
    position: relative;
  }

  .reading-item::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 32px;
    bottom: -8px;
    width: 2px;
    background: #e7e5e4;
  }

  .reading-item:last-child::before {
    display: none;
  }

  .reading-item.completed::before {
    background: #c7d2fe;
  }

  .reading-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 6px;
    text-align: left;
    text-decoration: none;
    transition: background 0.1s;
  }

  .reading-btn:hover {
    background: #f5f5f4;
  }

  .reading-item.current .reading-btn {
    background: #f0fdf4;
  }

  .reading-number {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #d6d3d1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 600;
    color: #78716c;
    background: white;
    flex-shrink: 0;
    z-index: 1;
  }

  .reading-number.complete {
    color: white;
  }

  .reading-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    min-width: 0;
  }

  .reading-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #1c1917;
  }

  .reading-title {
    font-size: 0.7rem;
    color: #78716c;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .reading-category {
    font-size: 0.6rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .reading-desc-inline {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.5;
    opacity: 0.9;
  }

  .reading-progress-mini {
    width: 30px;
    height: 3px;
    background: #e7e5e4;
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-bar-mini {
    height: 100%;
    border-radius: 2px;
  }

  .reading-item.completed .reading-label {
    color: #78716c;
  }

  /* Grammar Track View */
  .grammar-header {
    margin-bottom: 0.5rem;
  }

  .learning-paths {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .category {
    border-radius: 6px;
    overflow: hidden;
  }

  .category-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background: #fafaf9;
    border-radius: 6px;
    text-align: left;
    text-decoration: none;
    transition: background 0.1s;
  }

  .category-header:hover {
    background: #f5f5f4;
  }

  .category-icon {
    width: 8px;
    height: 8px;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .category-label {
    font-weight: 600;
    font-size: 0.9rem;
    color: #1c1917;
  }

  .category-english {
    font-size: 0.75rem;
    color: #78716c;
  }

  .category-count {
    margin-left: auto;
    font-size: 0.7rem;
    color: #a8a29e;
    background: #e7e5e4;
    padding: 0.1rem 0.4rem;
    border-radius: 10px;
  }

  .category-toggle {
    color: #a8a29e;
    font-size: 0.75rem;
  }

  .paths-list {
    display: flex;
    flex-direction: column;
    padding: 0.25rem 0 0.5rem 0;
  }

  .path-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.4rem 0.75rem 0.4rem 1.5rem;
    text-align: left;
    text-decoration: none;
    transition: background 0.1s;
    border-radius: 4px;
  }

  .path-item:hover {
    background: #f5f5f4;
  }

  .path-item.completed {
    opacity: 0.7;
  }

  .path-item.locked {
    opacity: 0.55;
  }

  .path-prereqs {
    display: flex;
    gap: 0.25rem;
    flex-shrink: 0;
  }

  .prereq-tag {
    font-size: 0.6rem;
    padding: 0.05rem 0.35rem;
    background: #f5f5f4;
    border: 1px solid #e7e5e4;
    border-radius: 0.25rem;
    color: #a8a29e;
    white-space: nowrap;
  }

  .path-bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .path-label {
    font-size: 0.875rem;
    color: #1c1917;
    min-width: 4rem;
  }

  .path-title {
    font-size: 0.75rem;
    color: #78716c;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .path-check {
    color: #22c55e;
    font-size: 0.75rem;
    flex-shrink: 0;
  }

  .path-progress {
    width: 40px;
    height: 3px;
    background: #e7e5e4;
    border-radius: 2px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .progress-bar {
    height: 100%;
    border-radius: 2px;
  }

  .path-difficulty {
    font-size: 0.5rem;
    letter-spacing: -1px;
    flex-shrink: 0;
    opacity: 0.5;
  }

  .path-difficulty.beginner { color: #22c55e; }
  .path-difficulty.intermediate { color: #eab308; }
  .path-difficulty.advanced { color: #ef4444; }
</style>
