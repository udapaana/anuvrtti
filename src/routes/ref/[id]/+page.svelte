<script lang="ts">
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import type { Sutra, Commentary, LayeredSutraCommentary, CommentaryDepth } from '$lib/data/types';
  import SutraDisplay from '$lib/components/SutraDisplay.svelte';
  import AnuvrttiGraph from '$lib/components/AnuvrttiGraph.svelte';
  import JargonLookup from '$lib/components/JargonLookup.svelte';
  import PratyaharaViewer from '$lib/components/PratyaharaViewer.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { commentaryDepth as commentaryDepthStore } from '$lib/stores/preferences';

  let { data } = $props();

  // Learning context: show "return to path" banner if user came from a learning path
  interface LearningContext {
    pathId: string;
    pathTitle: string;
    stepIndex: number;
    stepTotal: number;
  }
  let learningContext: LearningContext | null = $state(null);

  if (browser) {
    try {
      const stored = sessionStorage.getItem('anuvrtti-learning-context');
      if (stored) {
        learningContext = JSON.parse(stored);
      }
    } catch { /* ignore */ }
  }

  function dismissLearningContext() {
    learningContext = null;
    if (browser) {
      sessionStorage.removeItem('anuvrtti-learning-context');
    }
  }

  let sutra: Sutra | null = $derived(data.sutra);
  let commentary: Commentary | null = $derived(data.commentary);
  let layeredCommentary: LayeredSutraCommentary | null = $derived(data.layeredCommentary);
  let dependencies: Sutra[] = $derived(data.dependencies);
  let dependents: Sutra[] = $derived(data.dependents);
  let prevSutraId: string | null = $derived(data.prevSutraId);
  let nextSutraId: string | null = $derived(data.nextSutraId);
  let learningPaths: { pathId: string; pathTitle: string }[] = $derived(data.learningPaths);

  // Depth selector - synced with global preference
  let depth: CommentaryDepth = $state('standard');
  commentaryDepthStore.subscribe(d => { depth = d; });

  function handleKeydown(e: KeyboardEvent) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    if (e.key === 'ArrowLeft' || e.key === 'h') {
      if (prevSutraId) goto(`/ref/${prevSutraId}`);
    } else if (e.key === 'ArrowRight' || e.key === 'l') {
      if (nextSutraId) goto(`/ref/${nextSutraId}`);
    }
  }

  const depthLabels: Record<CommentaryDepth, string> = {
    simple: 'Simple',
    standard: 'Standard',
    advanced: 'Advanced'
  };
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>{sutra ? `${sutra.id} ${sutra.text}` : 'Not Found'} | Anuvrtti</title>
</svelte:head>

{#if !sutra}
  <div class="not-found">
    <p>Sutra not found</p>
    <a href="/ref">Back to Reference</a>
  </div>
{:else}
  <!-- Mobile tools (visible below lg breakpoint) -->
  <div class="mobile-tools">
    <details class="mobile-tool-panel">
      <summary class="mobile-tool-summary">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Jargon
      </summary>
      <div class="mobile-tool-content">
        <JargonLookup />
      </div>
    </details>
    <details class="mobile-tool-panel">
      <summary class="mobile-tool-summary">
        <span class="text-xs font-bold">ac</span>
        Pratyahara
      </summary>
      <div class="mobile-tool-content">
        <PratyaharaViewer />
      </div>
    </details>
  </div>

  <div class="detail-layout">
    <!-- Left sidebar: Jargon lookup -->
    <aside class="left-sidebar">
      <div class="sticky-sidebar">
        <JargonLookup />
      </div>
    </aside>

    <!-- Main content -->
    <main class="detail-main">
      <!-- Learning context banner -->
      {#if learningContext}
        <div class="learning-context-banner">
          <a href="/learn/{learningContext.pathId}?step={learningContext.stepIndex}" class="banner-link">
            ← Return to <strong>{learningContext.pathTitle}</strong>
            <span class="banner-step">step {learningContext.stepIndex + 1}/{learningContext.stepTotal}</span>
          </a>
          <button onclick={dismissLearningContext} class="banner-dismiss" aria-label="Dismiss">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      {/if}

      <!-- Header with back link -->
      <div class="detail-header">
        <a href="/ref?a={sutra.adhyaya}&p={sutra.pada}" class="back-link">
          ← Back to {sutra.adhyaya}.{sutra.pada}
        </a>
      </div>

      <!-- Main sutra display -->
      <SutraDisplay
        {sutra}
        variant="full"
        {commentary}
        {layeredCommentary}
        {depth}
      />

      <!-- Anuvrtti inheritance graph (advanced view) -->
      {#if depth === 'advanced'}
        <section class="anuvrtti-graph-section">
          <h3 class="section-label">Anuvrtti Inheritance</h3>
          <AnuvrttiGraph {sutra} />
        </section>
      {/if}

      <!-- Learning path cross-links -->
      {#if learningPaths.length > 0}
        <div class="learn-links">
          <span class="learn-links-label">Learn this in:</span>
          {#each learningPaths as lp}
            <a href="/learn/{lp.pathId}" class="learn-link">{lp.pathTitle}</a>
          {/each}
        </div>
      {/if}

      <!-- Navigation -->
      <nav class="sutra-nav">
        {#if prevSutraId}
          <a href="/ref/{prevSutraId}" class="nav-btn prev">
            <span class="nav-arrow">←</span>
            <span class="nav-label">{prevSutraId}</span>
          </a>
        {:else}
          <div></div>
        {/if}
        <span class="nav-hint">← → to navigate</span>
        {#if nextSutraId}
          <a href="/ref/{nextSutraId}" class="nav-btn next">
            <span class="nav-label">{nextSutraId}</span>
            <span class="nav-arrow">→</span>
          </a>
        {:else}
          <div></div>
        {/if}
      </nav>
    </main>

    <!-- Right sidebar: Pratyahara viewer -->
    <aside class="right-sidebar">
      <div class="sticky-sidebar">
        <PratyaharaViewer />
      </div>
    </aside>
  </div>
{/if}

<style>
  .not-found {
    text-align: center;
    padding: 4rem;
  }
  .not-found a {
    color: #6366f1;
  }

  .detail-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    .detail-layout {
      grid-template-columns: 280px 1fr 280px;
    }
  }

  .left-sidebar,
  .right-sidebar {
    display: none;
  }

  @media (min-width: 1024px) {
    .left-sidebar,
    .right-sidebar {
      display: block;
    }
  }

  .sticky-sidebar {
    position: sticky;
    top: 2rem;
  }

  .detail-header {
    margin-bottom: 1rem;
  }

  .back-link {
    font-size: 0.875rem;
    color: #6366f1;
    text-decoration: none;
  }
  .back-link:hover {
    text-decoration: underline;
  }

  .sutra-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e7e5e4;
  }

  .nav-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    border: 1px solid #e7e5e4;
    border-radius: 0.5rem;
    text-decoration: none;
    color: #57534e;
    font-size: 0.875rem;
    transition: all 0.1s;
  }
  .nav-btn:hover {
    border-color: #c7d2fe;
    color: #4f46e5;
  }

  .nav-arrow {
    font-size: 1rem;
  }

  .nav-hint {
    font-size: 0.75rem;
    color: #a8a29e;
  }

  .anuvrtti-graph-section {
    margin-top: 1.5rem;
  }

  .section-label {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #78716c;
    margin-bottom: 0.75rem;
  }

  .learning-context-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: #eef2ff;
    border: 1px solid #c7d2fe;
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.8125rem;
  }

  .banner-link {
    color: #4338ca;
    text-decoration: none;
    flex: 1;
  }
  .banner-link:hover {
    text-decoration: underline;
  }

  .banner-step {
    color: #6366f1;
    margin-left: 0.25rem;
  }

  .banner-dismiss {
    color: #a5b4fc;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
  }
  .banner-dismiss:hover {
    color: #4338ca;
    background: #c7d2fe;
  }

  /* Learn cross-links */
  .learn-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding: 0.75rem;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 0.375rem;
    font-size: 0.8125rem;
  }

  .learn-links-label {
    color: #15803d;
    font-weight: 500;
  }

  .learn-link {
    color: #15803d;
    text-decoration: none;
    padding: 0.125rem 0.5rem;
    background: #dcfce7;
    border-radius: 0.25rem;
  }

  .learn-link:hover {
    background: #bbf7d0;
    text-decoration: underline;
  }

  /* Mobile tools */
  .mobile-tools {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    .mobile-tools {
      display: none;
    }
  }

  .mobile-tool-panel {
    flex: 1;
    background: white;
    border: 1px solid #e7e5e4;
    border-radius: 0.5rem;
  }

  .mobile-tool-summary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    font-size: 0.875rem;
    color: #57534e;
    user-select: none;
  }

  .mobile-tool-content {
    padding: 0.75rem;
    border-top: 1px solid #f5f5f4;
    max-height: 18rem;
    overflow-y: auto;
  }
</style>
