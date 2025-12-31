<script lang="ts">
  import { learningPaths, type LearningPath, type PathCategory, type Track } from '$lib/learning/paths';
  import { learningProgress } from '$lib/stores/learning';
  import { categoryColors } from '$lib/learning/tree';
  import { displayScript } from '$lib/stores/preferences';
  import { transliterate, type Script } from '$lib/transliteration';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  // View mode: 'reading' (reading track) or 'grammar' (grammar track by category)
  let viewMode: Track = $state('reading');

  // Get paths by track
  function getPathsByTrack(track: Track): LearningPath[] {
    return learningPaths.filter(p => p.track === track);
  }

  // Reading track paths (filtered from learningPaths by track field)
  const readingPath = getPathsByTrack('reading');

  // Grammar track paths
  const grammarPaths = getPathsByTrack('grammar');

  // Group paths by category for scholarship view
  const categories: { id: PathCategory; label: string; labelSanskrit: string }[] = [
    { id: 'foundation', label: 'Foundations', labelSanskrit: 'आधारः' },
    { id: 'tinganta', label: 'Verbs', labelSanskrit: 'तिङन्त' },
    { id: 'subanta', label: 'Nouns', labelSanskrit: 'सुबन्त' },
    { id: 'karaka', label: 'Cases', labelSanskrit: 'कारक' },
    { id: 'kridanta', label: 'Participles', labelSanskrit: 'कृदन्त' },
    { id: 'taddhita', label: 'Derivation', labelSanskrit: 'तद्धित' },
    { id: 'sandhi', label: 'Sandhi', labelSanskrit: 'सन्धि' },
    { id: 'samasa', label: 'Compounds', labelSanskrit: 'समास' },
  ];

  const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 };

  function getPathsByCategory(category: PathCategory): LearningPath[] {
    return grammarPaths
      .filter(p => p.category === category)
      .sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
  }

  // Reactive state
  let completedPaths: string[] = $state([]);
  let currentScript: Script = $state('devanagari');
  let transliteratedLabels: Map<string, string> = $state(new Map());

  learningProgress.subscribe(p => {
    completedPaths = p.completedPaths;
  });

  function getProgress(pathId: string): number {
    return learningProgress.getPathProgress(pathId);
  }

  function isCompleted(pathId: string): boolean {
    return completedPaths.includes(pathId);
  }

  function getProgressPercent(path: LearningPath): number {
    const progress = getProgress(path.id);
    const total = path.steps.length;
    if (total === 0) return 0;
    return (progress / total) * 100;
  }

  async function updateLabels(script: Script) {
    const newLabels = new Map<string, string>();
    for (const path of learningPaths) {
      if (script === 'devanagari') {
        newLabels.set(path.id, path.label);
      } else {
        const transliterated = await transliterate(path.label, 'devanagari', script);
        newLabels.set(path.id, transliterated);
      }
    }
    for (const cat of categories) {
      if (script === 'devanagari') {
        newLabels.set(cat.id, cat.labelSanskrit);
      } else {
        const transliterated = await transliterate(cat.labelSanskrit, 'devanagari', script);
        newLabels.set(cat.id, transliterated);
      }
    }
    transliteratedLabels = newLabels;
  }

  onMount(() => {
    updateLabels($displayScript);
    const unsubscribe = displayScript.subscribe(script => {
      currentScript = script;
      updateLabels(script);
    });
    return unsubscribe;
  });

  function getLabel(id: string, fallback: string): string {
    return transliteratedLabels.get(id) || fallback;
  }

  function handlePathClick(path: LearningPath) {
    goto(`/learn/${path.id}`);
  }

  // Collapsed state per category
  let collapsedCategories: Set<PathCategory> = $state(new Set());

  function toggleCategory(catId: PathCategory) {
    const newSet = new Set(collapsedCategories);
    if (newSet.has(catId)) {
      newSet.delete(catId);
    } else {
      newSet.add(catId);
    }
    collapsedCategories = newSet;
  }

  function isCollapsed(catId: PathCategory): boolean {
    return collapsedCategories.has(catId);
  }

  // Reading path progress
  function getReadingProgress(): { completed: number; total: number } {
    const completed = readingPath.filter(p => isCompleted(p.id)).length;
    return { completed, total: readingPath.length };
  }

  function getNextUncompletedIndex(): number {
    return readingPath.findIndex(p => !isCompleted(p.id));
  }
</script>

<div class="learning-tree">
  <!-- Track Toggle -->
  <div class="mode-toggle">
    <button
      class="mode-btn"
      class:active={viewMode === 'reading'}
      onclick={() => viewMode = 'reading'}
    >
      <span class="mode-sanskrit">पठनम्</span>
      <span class="mode-english">Reading Track</span>
    </button>
    <button
      class="mode-btn"
      class:active={viewMode === 'grammar'}
      onclick={() => viewMode = 'grammar'}
    >
      <span class="mode-sanskrit">व्याकरणम्</span>
      <span class="mode-english">Grammar Track</span>
    </button>
  </div>

  {#if viewMode === 'reading'}
    <!-- Reading Path View -->
    {@const progress = getReadingProgress()}
    {@const nextIndex = getNextUncompletedIndex()}

    <div class="reading-header">
      <p class="reading-desc">A curated path to reading fluency — learn a little from each topic.</p>
      <div class="reading-progress">
        <span class="progress-text">{progress.completed}/{progress.total} complete</span>
        <div class="progress-track">
          <div class="progress-fill" style="width: {(progress.completed / progress.total) * 100}%"></div>
        </div>
      </div>
    </div>

    <ol class="reading-list">
      {#each readingPath as path, i}
        {@const complete = isCompleted(path.id)}
        {@const progressPct = getProgressPercent(path)}
        {@const isCurrent = i === nextIndex}
        {@const colors = categoryColors[path.category]}

        <li class="reading-item" class:completed={complete} class:current={isCurrent}>
          <button
            class="reading-btn"
            onclick={() => handlePathClick(path)}
          >
            <span class="reading-number" class:complete style="border-color: {colors.medium}; {complete ? `background: ${colors.medium}` : ''}">
              {#if complete}✓{:else}{i + 1}{/if}
            </span>
            <div class="reading-content">
              <span class="reading-label">{getLabel(path.id, path.label)}</span>
              <span class="reading-title">{path.title}</span>
            </div>
            <span class="reading-category" style="color: {colors.medium};">{path.category}</span>
            {#if !complete && progressPct > 0}
              <span class="reading-progress-mini">
                <span class="progress-bar-mini" style="width: {progressPct}%; background: {colors.medium};"></span>
              </span>
            {/if}
          </button>
        </li>
      {/each}
    </ol>
  {:else}
    <!-- Grammar Track View (by category) -->
    <div class="grammar-header">
      <p class="grammar-desc">Systematic Pāṇinian grammar — organized by topic following traditional prakaraṇa structure.</p>
    </div>

    <div class="learning-paths">
      {#each categories as cat}
        {@const paths = getPathsByCategory(cat.id)}
        {@const colors = categoryColors[cat.id]}
        {@const collapsed = isCollapsed(cat.id)}

        {#if paths.length > 0}
          <div class="category">
            <button
              class="category-header"
              onclick={() => toggleCategory(cat.id)}
            >
              <span class="category-icon" style="background: {colors.medium};"></span>
              <span class="category-label">{getLabel(cat.id, cat.labelSanskrit)}</span>
              <span class="category-english">{cat.label}</span>
              <span class="category-count">{paths.length}</span>
              <span class="category-toggle">{collapsed ? '▸' : '▾'}</span>
            </button>

            {#if !collapsed}
              <div class="paths-list">
                {#each paths as path}
                  {@const complete = isCompleted(path.id)}
                  {@const progress = getProgressPercent(path)}

                  <button
                    class="path-item"
                    class:completed={complete}
                    onclick={() => handlePathClick(path)}
                  >
                    <span class="path-bullet" style="background: {colors.medium};"></span>
                    <span class="path-label">{getLabel(path.id, path.label)}</span>
                    <span class="path-title">{path.title}</span>

                    {#if complete}
                      <span class="path-check">✓</span>
                    {:else if progress > 0}
                      <span class="path-progress">
                        <span class="progress-bar" style="width: {progress}%; background: {colors.medium};"></span>
                      </span>
                    {/if}

                    <span class="path-difficulty" class:beginner={path.difficulty === 'beginner'} class:intermediate={path.difficulty === 'intermediate'} class:advanced={path.difficulty === 'advanced'}>
                      {path.difficulty === 'beginner' ? '●' : path.difficulty === 'intermediate' ? '●●' : '●●●'}
                    </span>
                  </button>
                {/each}
              </div>
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
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
    border: none;
    background: transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s;
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
    background: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: left;
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
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: left;
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
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.1s;
    border-radius: 4px;
  }

  .path-item:hover {
    background: #f5f5f4;
  }

  .path-item.completed {
    opacity: 0.7;
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

  .path-difficulty.beginner {
    color: #22c55e;
  }

  .path-difficulty.intermediate {
    color: #eab308;
  }

  .path-difficulty.advanced {
    color: #ef4444;
  }
</style>
