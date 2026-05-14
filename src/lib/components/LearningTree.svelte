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

  // Detect the source script of a string by sniffing its unicode range. Path
  // titleSanskrit is sometimes Devanagari (vyākaraṇa paths) and sometimes
  // Telugu (Bālabodhini paths) — without this, we'd transliterate from the
  // wrong source and mangle the output.
  function detectSource(s: string): Script {
    if (/[ఀ-౿]/.test(s)) return 'telugu';
    if (/[ऀ-ॿ]/.test(s)) return 'devanagari';
    return 'iast';
  }

  async function rebuildLabels(script: Script) {
    const m = new Map<string, string>();
    for (const p of allPaths) {
      const labelSrc = detectSource(p.label);
      m.set(p.id, script === labelSrc ? p.label : await transliterate(p.label, labelSrc, script));
      if (p.titleSanskrit) {
        const titleSrc = detectSource(p.titleSanskrit);
        m.set(`title-${p.id}`, script === titleSrc ? p.titleSanskrit : await transliterate(p.titleSanskrit, titleSrc, script));
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
  let balabodhini1Paths = $derived(balabodhiniPaths.filter(p => p.id.startsWith('balabodhini-1-')));
  let balabodhini2Paths = $derived(balabodhiniPaths.filter(p => p.id.startsWith('balabodhini-2-')));
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
                      <span class="path-title font-{$displayScript}">{path.title || ''}</span>
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
      <!-- Bālabodhini Vol 1 -->
      <div class="reading-header">
        <p class="reading-desc">vol I · lessons 1–38</p>
      </div>

      <ol class="reading-list">
        {#each balabodhini1Paths as path}
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

      <!-- Bālabodhini Vol 2 -->
      {#if balabodhini2Paths.length > 0}
        <div class="reading-header" style="margin-top: 1.5rem;">
          <p class="reading-desc">vol II · lessons 39–78</p>
        </div>

        <ol class="reading-list">
          {#each balabodhini2Paths as path}
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
    color: #94a3b8;
    font-style: italic;
    font-size: 0.9rem;
  }

  .spinner {
    width: 1rem;
    height: 1rem;
    border: 1.5px solid #e2e8f0;
    border-top-color: #f97316;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .learning-tree {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  /* Mode toggle — bare text, no chrome */
  .mode-toggle {
    display: flex;
    gap: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.75rem;
  }

  .mode-btn {
    display: inline-flex;
    align-items: baseline;
    cursor: pointer;
    text-decoration: none;
    padding: 0;
    background: none;
    border: none;
  }

  .mode-sanskrit {
    font-size: 1rem;
    font-weight: 400;
    color: #94a3b8;
    transition: color 0.15s;
  }

  .mode-btn:hover .mode-sanskrit {
    color: #0f1419;
  }

  .mode-btn.active .mode-sanskrit {
    color: #f97316;
    font-weight: 500;
  }

  /* Section descriptions */
  .reading-header,
  .grammar-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .reading-desc,
  .grammar-desc {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    margin: 0;
  }

  /* Reading-track progress (if shown) */
  .reading-progress {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.25rem;
  }

  .progress-text {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #94a3b8;
    letter-spacing: 0.03em;
  }

  .progress-track {
    flex: 1;
    max-width: 200px;
    height: 2px;
    background: #e2e8f0;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: #f97316;
    transition: width 0.3s;
  }

  /* Reading list — bare rows, hairline separators */
  .reading-list {
    list-style: none;
    margin: 0.5rem 0 0;
    padding: 0;
  }

  .reading-item {
    position: relative;
  }

  .reading-item::before {
    /* drop the spinal connector line — separators do the work */
    display: none;
  }

  .reading-btn {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    width: 100%;
    padding: 0.7rem 0;
    border-top: 1px solid #e2e8f0;
    text-align: left;
    text-decoration: none;
    color: inherit;
    transition: background 0.1s;
  }

  .reading-item:last-child .reading-btn {
    border-bottom: 1px solid #e2e8f0;
  }

  .reading-btn:hover {
    background: #fff7ed;
  }

  .reading-item.current .reading-btn {
    background: #fff7ed;
    box-shadow: inset 2px 0 0 0 #f97316;
  }

  /* Lesson number — quiet, monospaced, no chip */
  .reading-number {
    width: auto;
    height: auto;
    border: none;
    background: none !important;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    font-weight: 400;
    color: #94a3b8;
    flex-shrink: 0;
    min-width: 1.75rem;
    text-align: right;
    align-self: baseline;
    padding-top: 0.1rem;
  }

  .reading-number.complete {
    color: #059669;
  }

  .reading-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-width: 0;
  }

  .reading-label {
    font-size: 1.15rem;
    font-weight: 400;
    color: #0f1419;
    line-height: 1.4;
  }

  .reading-title {
    font-size: 0.85rem;
    color: #94a3b8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .reading-category {
    font-family: ui-monospace, monospace;
    font-size: 0.72rem;
    text-transform: lowercase;
    letter-spacing: 0.03em;
    color: #94a3b8!important;
  }

  .reading-desc-inline {
    font-size: 0.9rem;
    font-style: italic;
    line-height: 1.55;
    color: #94a3b8 !important;
  }

  .reading-progress-mini {
    width: 32px;
    height: 2px;
    background: #e2e8f0;
    overflow: hidden;
  }

  .progress-bar-mini {
    height: 100%;
    background: #f97316 !important;
  }

  .reading-item.completed .reading-label {
    color: #94a3b8;
  }

  /* Grammar view */
  .learning-paths {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .category {
    margin-top: 0.5rem;
  }

  .category-header {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    width: 100%;
    padding: 0.5rem 0;
    border-top: 1px solid #e2e8f0;
    text-align: left;
    text-decoration: none;
    color: inherit;
    transition: background 0.1s;
  }

  .category-header:hover {
    background: #fff7ed;
  }

  .category-icon {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
    align-self: center;
    background: #f97316 !important;
  }

  .category-label {
    font-weight: 500;
    font-size: 1rem;
    font-style: italic;
    color: #0f1419;
  }

  .category-english {
    font-size: 0.85rem;
    color: #94a3b8;
  }

  .category-count {
    margin-left: auto;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #94a3b8;
    background: none;
    padding: 0;
    border-radius: 0;
  }

  .category-toggle {
    color: #94a3b8;
    font-size: 0.75rem;
  }

  .paths-list {
    display: flex;
    flex-direction: column;
    padding: 0.25rem 0 0.75rem 1.25rem;
  }

  .path-item {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    width: 100%;
    padding: 0.4rem 0;
    text-align: left;
    text-decoration: none;
    color: inherit;
    transition: background 0.1s;
    border-radius: 0;
  }

  .path-item:hover {
    background: #fff7ed;
  }

  .path-item.completed {
    opacity: 0.55;
  }

  .path-item.locked {
    opacity: 0.45;
  }

  .path-prereqs {
    display: flex;
    gap: 0.35rem;
    flex-shrink: 0;
    flex-wrap: wrap;
  }

  .prereq-tag {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    padding: 0;
    background: none;
    border: none;
    color: #94a3b8;
    white-space: nowrap;
  }

  .path-bullet {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
    align-self: center;
    background: #f97316 !important;
  }

  .path-label {
    font-size: 0.95rem;
    color: #0f1419;
    min-width: 4rem;
  }

  .path-title {
    font-size: 0.8rem;
    color: #94a3b8;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .path-check {
    color: #059669;
    font-size: 0.75rem;
    flex-shrink: 0;
  }

  .path-progress {
    width: 36px;
    height: 2px;
    background: #e2e8f0;
    overflow: hidden;
    flex-shrink: 0;
  }

  .progress-bar {
    height: 100%;
    background: #f97316 !important;
  }

  .path-difficulty {
    font-size: 0.5rem;
    letter-spacing: -1px;
    flex-shrink: 0;
    opacity: 0.4;
  }

  .path-difficulty.beginner    { color: #059669; }
  .path-difficulty.intermediate { color: #f97316; }
  .path-difficulty.advanced    { color: #e11d48; }
</style>
