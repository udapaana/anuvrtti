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
</style>
