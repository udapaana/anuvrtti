<script lang="ts">
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import type { Sutra, Commentary, LayeredSutraCommentary, CommentaryDepth } from '$lib/data/types';
  import SutraDisplay from '$lib/components/SutraDisplay.svelte';
  import CommentaryEditor from '$lib/components/CommentaryEditor.svelte';
  import AnuvrttiGraph from '$lib/components/AnuvrttiGraph.svelte';
  import JargonLookup from '$lib/components/JargonLookup.svelte';
  import PratyaharaViewer from '$lib/components/PratyaharaViewer.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { commentaryDepth as commentaryDepthStore } from '$lib/stores/preferences';
  import { pendingEdits } from '$lib/stores/edits';
  import { editModal } from '$lib/stores/editModal';

  let { data } = $props();
  let user = $derived(data.user as { login: string; avatar_url: string } | null);

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
  let rule: string | null = $derived(data.rule ?? null);
  let commentary: Commentary | undefined = $derived(data.commentary ?? undefined);
  let layeredCommentary: LayeredSutraCommentary | undefined = $derived(data.layeredCommentary ?? undefined);
  let dependencies: Sutra[] = $derived(data.dependencies);
  let dependents: Sutra[] = $derived(data.dependents);
  let prevSutraId: string | null = $derived(data.prevSutraId);
  let nextSutraId: string | null = $derived(data.nextSutraId);
  let learningPaths: { pathId: string; pathTitle: string; stepIndex: number }[] = $derived(data.learningPaths);
  let balabodhiniLessons: { lessonRef: string; lessonNumber: number; part: number; title: string }[] = $derived(data.balabodhiniLessons ?? []);
  let prakriyaPaths = $derived(learningPaths.filter(lp => lp.pathId.startsWith('prakriya-')));
  let otherPaths = $derived(learningPaths.filter(lp => !lp.pathId.startsWith('prakriya-')));

  // Depth selector - synced with global preference
  let depth: CommentaryDepth = $state('standard');
  commentaryDepthStore.subscribe(d => { depth = d; });

  function handleDepthChange(d: CommentaryDepth) {
    depth = d;
    commentaryDepthStore.set(d);
  }

  // Register edit context for navbar button
  $effect(() => {
    if (sutra) {
      const a = sutra.numericId[0];
      const p = sutra.numericId[1];
      const s = parseInt(sutra.numericId.slice(2));
      editModal.setPageContext(`static/data/commentary/${a}/${p}/${s}.toml`);
    }
    return () => editModal.setPageContext(undefined);
  });

  // Edit mode
  let editing = $state(false);
  let submitState: 'idle' | 'loading' | 'done' | 'error' = $state('idle');
  let prUrl = $state('');
  let submitError = $state('');
  let editCount = $derived(Object.keys($pendingEdits).length);

  function handleEditClick() {
    if (sutra) {
      const a = sutra.numericId[0];
      const p = sutra.numericId[1];
      const s = parseInt(sutra.numericId.slice(2));
      editModal.open(`static/data/commentary/${a}/${p}/${s}.toml`);
    }
  }

  async function submitEdits() {
    submitState = 'loading';
    try {
      const res = await fetch('/api/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ edits: pendingEdits.snapshot(), note: '' }),
      });
      if (!res.ok) throw new Error(await res.text());
      const { prUrl: url } = await res.json();
      prUrl = url;
      pendingEdits.clear();
      submitState = 'done';
    } catch (e) {
      submitError = e instanceof Error ? e.message : 'Unknown error';
      submitState = 'error';
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    if (e.key === 'ArrowLeft' || e.key === 'h') {
      if (prevSutraId) goto(`/ref/${prevSutraId}`);
    } else if (e.key === 'ArrowRight' || e.key === 'l') {
      if (nextSutraId) goto(`/ref/${nextSutraId}`);
    }
  }

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
          <a href="/learn/{learningContext.pathId}" class="banner-link">
            return to <strong>{learningContext.pathTitle}</strong> →
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
          ← {sutra.adhyaya}.{sutra.pada}
        </a>
      </div>

      <!-- Main sutra display -->
      {#if editing && layeredCommentary && sutra}
        <CommentaryEditor
          sutraId={sutra.id}
          numericId={sutra.numericId}
          {layeredCommentary}
          {depth}
          onDone={() => (editing = false)}
        />
      {:else}
        <SutraDisplay
          {sutra}
          variant="full"
          {rule}
          {commentary}
          {layeredCommentary}
          {user}
          onEdit={layeredCommentary ? handleEditClick : undefined}
        />
      {/if}

      <!-- Anuvrtti inheritance graph -->
      <section class="anuvrtti-graph-section">
        <h3 class="section-label"><Sanskrit text="anuvṛtti" source="iast" /> inheritance</h3>
        <AnuvrttiGraph {sutra} />
      </section>

      <!-- Prakriyā cross-links: sūtras that appear in concrete derivations -->
      {#if prakriyaPaths.length > 0}
        <div class="prakriya-links">
          <span class="prakriya-label">applied in</span>
          <ul class="prakriya-list">
            {#each prakriyaPaths as lp}
              <li>
                <a href="/learn/{lp.pathId}?step={lp.stepIndex}" class="prakriya-link">
                  {lp.pathTitle}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/if}

      <!-- Learning path cross-links -->
      {#if otherPaths.length > 0 || balabodhiniLessons.length > 0}
        <div class="learn-links">
          <span class="learn-links-label">see also</span>
          {#each otherPaths as lp}
            <a href="/learn/{lp.pathId}" class="learn-link">{lp.pathTitle}</a>
          {/each}
          {#each balabodhiniLessons as ll}
            <a href="/learn/{ll.lessonRef}" class="learn-link learn-link-bala">
              <Sanskrit text="bālabodhinī" source="iast" /> {ll.part}.{ll.lessonNumber}
            </a>
          {/each}
        </div>
      {/if}

      <!-- Pending edits chip (fixed bottom-right) -->
      {#if editCount > 0 || submitState === 'done'}
        <div class="pending-chip">
          {#if submitState === 'done'}
            <span class="chip-text">PR opened!</span>
            <a href={prUrl} target="_blank" rel="noopener" class="chip-pr-link">View PR →</a>
          {:else if submitState === 'error'}
            <span class="chip-text chip-error">{submitError}</span>
            <button class="chip-btn" onclick={() => (submitState = 'idle')}>Dismiss</button>
          {:else}
            <span class="chip-text">{editCount} edit{editCount === 1 ? '' : 's'} pending</span>
            <button class="chip-btn" onclick={submitEdits} disabled={submitState === 'loading'}>
              {submitState === 'loading' ? 'Submitting…' : 'Submit PR'}
            </button>
          {/if}
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
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.15s;
  }
  .back-link:hover { color: #0f1419; }

  .sutra-nav {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 2rem;
    padding-top: 1.25rem;
    border-top: 1px solid #e2e8f0;
    font-size: 0.85rem;
  }

  .nav-btn {
    display: inline-flex;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0;
    background: none;
    border: none;
    text-decoration: none;
    color: #0f1419;
    font-family: ui-monospace, monospace;
    font-size: 0.8rem;
    transition: color 0.1s;
  }
  .nav-btn:hover { color: #f97316; }

  .nav-arrow {
    color: #94a3b8;
  }

  .nav-hint {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    color: #cbd5e1;
    letter-spacing: 0.04em;
  }

  .anuvrtti-graph-section {
    margin-top: 2rem;
  }

  .section-label {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    font-weight: 400;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    color: #94a3b8;
    margin-bottom: 0.75rem;
  }

  /* Learning-context banner — saffron top-rule, no card */
  .learning-context-banner {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem;
    border-top: 2px solid #f97316;
    padding: 0.55rem 0;
    margin-bottom: 1rem;
    font-size: 0.85rem;
  }

  .banner-link {
    color: #0f1419;
    text-decoration: none;
    flex: 1;
    font-family: 'Crimson Pro', serif;
    font-style: italic;
  }
  .banner-link strong {
    color: #f97316;
    font-weight: 500;
  }
  .banner-link:hover { color: #f97316; }

  .banner-step {
    color: #94a3b8;
    margin-left: 0.25rem;
  }

  .banner-dismiss {
    color: #cbd5e1;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    transition: color 0.15s;
  }
  .banner-dismiss:hover { color: #0f1419; }

  /* Prakriyā cross-links — numbered derivations where this rule is invoked */
  .prakriya-links {
    margin-top: 1.5rem;
    padding-top: 0.85rem;
    border-top: 2px solid #f97316;
  }

  .prakriya-label {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #94a3b8;
    letter-spacing: 0.04em;
    text-transform: lowercase;
    display: block;
    margin-bottom: 0.5rem;
  }

  .prakriya-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .prakriya-link {
    font-family: 'Crimson Pro', serif;
    font-style: italic;
    font-size: 0.95rem;
    color: #0f1419;
    text-decoration: none;
    transition: color 0.15s;
  }
  .prakriya-link:hover { color: #f97316; }

  /* Learn cross-links — italic indigo words, separated by · */
  .learn-links {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 1.5rem;
    padding-top: 0.85rem;
    border-top: 1px solid #e2e8f0;
    font-size: 0.85rem;
  }

  .learn-links-label {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #94a3b8;
    letter-spacing: 0.04em;
    text-transform: lowercase;
  }

  .learn-link {
    font-style: italic;
    color: #4f46e5;
    text-decoration: none;
    transition: color 0.15s;
  }
  .learn-link:hover { color: #f97316; }

  .learn-link-bala { color: #4f46e5; }
  .learn-link-bala:hover { color: #f97316; }


  .pending-chip {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #4f46e5;
    color: white;
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.35);
    z-index: 50;
  }

  .chip-text {
    font-weight: 500;
  }

  .chip-error {
    color: #fca5a5;
  }

  .chip-btn {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 9999px;
    color: white;
    font-size: 0.8125rem;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    cursor: pointer;
    transition: background 0.1s;
  }
  .chip-btn:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.3);
  }
  .chip-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .chip-pr-link {
    color: white;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 2px;
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
