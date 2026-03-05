<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { loadPath, loadPathIndex, type PathMeta } from '$lib/content';
  import type { LearningPath, LearningStep } from '$lib/learning/paths';
  import { learningProgress } from '$lib/stores/learning';
  import { getSutra, getCommentary, getLayeredCommentary, getDependencies, type Sutra, type Commentary, type LayeredSutraCommentary, type CommentaryDepth } from '$lib/data';
  import { commentaryDepth as commentaryDepthStore } from '$lib/stores/preferences';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import CommentaryText from '$lib/components/CommentaryText.svelte';
  import SutraDisplay from '$lib/components/SutraDisplay.svelte';
  import JargonLookup from '$lib/components/JargonLookup.svelte';
  import PratyaharaViewer from '$lib/components/PratyaharaViewer.svelte';
  import DerivationViewer from '$lib/components/DerivationViewer.svelte';
  import QuizStep from '$lib/components/QuizStep.svelte';
  import { getExampleForSutra, type PrakriyaExample } from '$lib/prakriya-examples';
  import { deriveTinanta, deriveSubanta, type Prakriya } from '$lib/prakriya';

  let { data } = $props();

  let path: LearningPath | undefined = $state(undefined);
  let pathLoading = $state(true);
  let currentStepIndex = $state(0);
  let sutra: Sutra | undefined = $state(undefined);
  let commentary: Commentary | undefined = $state(undefined);
  let layeredCommentary: LayeredSutraCommentary | undefined = $state(undefined);
  let commentaryDepth: CommentaryDepth = $state('standard');

  // Sync with global preference store (bidirectional)
  commentaryDepthStore.subscribe(d => { commentaryDepth = d; });
  let dependencies: Sutra[] = $state([]);
  let loading = $state(true);
  let completedSteps: number[] = $state([]);

  // Path completion state
  let showCompletion = $state(false);
  let nextPath: PathMeta | null = $state(null);

  // Prakriya example state
  let prakriyaExample = $state<PrakriyaExample | null>(null);
  let prakriya = $state<Prakriya | null>(null);
  let prakriyaLoading = $state(false);
  let showPrakriya = $state(false);

  // Progress subscription cleanup
  let unsubscribeProgress: (() => void) | undefined;

  // React to pathId changes (fires on navigation between paths too)
  $effect(() => {
    const pathId = data.pathId;

    // Reset state for new path
    path = undefined;
    pathLoading = true;
    currentStepIndex = 0;
    showCompletion = false;
    nextPath = null;
    if (unsubscribeProgress) { unsubscribeProgress(); unsubscribeProgress = undefined; }

    loadPathData(pathId);
  });

  async function loadPathData(pathId: string) {
    const loadedPath = await loadPath(pathId);
    if (!loadedPath) {
      goto('/learn');
      return;
    }
    path = loadedPath;
    pathLoading = false;

    // Check for ?step= URL parameter (from resume link)
    const stepParam = $page.url.searchParams.get('step');
    if (stepParam !== null) {
      const stepIndex = parseInt(stepParam, 10);
      if (!isNaN(stepIndex) && stepIndex >= 0 && stepIndex < loadedPath.steps.length) {
        currentStepIndex = stepIndex;
        learningProgress.startPath(pathId);
        learningProgress.goToStep(stepIndex);
      }
    }

    // Subscribe to progress
    unsubscribeProgress = learningProgress.subscribe(p => {
      if (path) {
        completedSteps = p.pathProgress[path.id] || [];
        if (p.currentStep !== currentStepIndex) {
          currentStepIndex = p.currentStep;
        }
      }
    });

    // Load initial step
    if (loadedPath.steps[currentStepIndex]) {
      loadStepData(loadedPath.steps[currentStepIndex]);
    }
  }

  // Load sutra data when step changes
  $effect(() => {
    if (path && path.steps[currentStepIndex]) {
      loadStepData(path.steps[currentStepIndex]);
    }
  });

  async function loadStepData(step: LearningStep) {
    loading = true;
    // Reset prakriya state for new step
    prakriyaExample = null;
    prakriya = null;
    showPrakriya = false;

    try {
      // Conceptual and reading steps don't have sutra data
      if (step.sutraId === 'concept' || step.sutraId.toLowerCase() === 'reading') {
        sutra = undefined;
        commentary = undefined;
        layeredCommentary = undefined;
        dependencies = [];
      } else {
        sutra = await getSutra(step.sutraId);
        if (sutra) {
          const [comm, layered, deps] = await Promise.all([
            getCommentary(sutra.numericId),
            getLayeredCommentary(sutra.numericId),
            getDependencies(sutra.id)
          ]);
          commentary = comm;
          layeredCommentary = layered;
          dependencies = deps;
          // Check for prakriya example for this sutra
          prakriyaExample = getExampleForSutra(step.sutraId);
        }
      }
    } catch (e) {
      console.error('Failed to load step data:', e);
    }
    loading = false;
  }

  async function loadPrakriya() {
    if (!prakriyaExample || prakriyaLoading) return;

    prakriyaLoading = true;
    try {
      let results: Prakriya[] = [];

      if (prakriyaExample.type === 'tinanta') {
        results = await deriveTinanta(
          prakriyaExample.dhatu,
          prakriyaExample.gana,
          prakriyaExample.lakara,
          prakriyaExample.prayoga || 'Kartari',
          prakriyaExample.purusha || 'Prathama',
          prakriyaExample.vacana || 'Eka'
        );
      } else if (prakriyaExample.type === 'subanta') {
        results = await deriveSubanta(
          prakriyaExample.pratipadika,
          prakriyaExample.linga,
          prakriyaExample.vibhakti,
          prakriyaExample.vacana
        );
      }

      if (results.length > 0) {
        prakriya = results[0];
        showPrakriya = true;
      }
    } catch (e) {
      console.error('Failed to load prakriya:', e);
    }
    prakriyaLoading = false;
  }

  async function nextStep() {
    if (!path) return;

    const nextIndex = currentStepIndex + 1;

    // Mark current step as completed
    learningProgress.markStepComplete(path.id, currentStepIndex);

    if (nextIndex < path.steps.length) {
      learningProgress.goToStep(nextIndex);
    } else {
      // Path completed — show interstitial
      learningProgress.completePath(path.id);

      // Find the next path to suggest
      try {
        const index = await loadPathIndex();
        const currentMeta = index.find(p => p.id === path!.id);
        if (currentMeta) {
          // Look for the next path in the same track by order
          const sameTracks = index
            .filter(p => p.track === currentMeta.track)
            .sort((a, b) => a.order - b.order);
          const currentIdx = sameTracks.findIndex(p => p.id === path!.id);
          if (currentIdx >= 0 && currentIdx < sameTracks.length - 1) {
            nextPath = sameTracks[currentIdx + 1];
          }
        }
      } catch (e) {
        // Non-critical — just won't show next path suggestion
      }

      showCompletion = true;
    }
  }

  function prevStep() {
    if (currentStepIndex > 0) {
      learningProgress.goToStep(currentStepIndex - 1);
    }
  }

  function goToStep(index: number) {
    learningProgress.goToStep(index);
  }

  function isStepCompleted(index: number): boolean {
    return completedSteps.includes(index);
  }

  function isStepAccessible(index: number): boolean {
    // All steps are always accessible - no gatekeeping
    return true;
  }

  // Store learning context in sessionStorage so ref pages can show "return to path" banner
  $effect(() => {
    if (browser && path && !showCompletion) {
      sessionStorage.setItem('anuvrtti-learning-context', JSON.stringify({
        pathId: path.id,
        pathTitle: path.title,
        stepIndex: currentStepIndex,
        stepTotal: path.steps.length,
      }));
    }
  });

  let currentStep = $derived(path?.steps[currentStepIndex]);
  let progress = $derived(path ? (completedSteps.length / path.steps.length) * 100 : 0);


</script>

<svelte:head>
  <title>{path?.title || 'Learning'} | Ashtadhyayi Explorer</title>
</svelte:head>

{#if pathLoading}
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg border border-stone-200 p-8">
      <div class="flex items-center justify-center gap-3 text-stone-500">
        <div class="w-5 h-5 border-2 border-stone-300 border-t-indigo-500 rounded-full animate-spin"></div>
        <span>Loading path...</span>
      </div>
    </div>
  </div>
{:else if path && showCompletion}
  <!-- Path completion interstitial -->
  <div class="max-w-2xl mx-auto py-12 text-center">
    <div class="bg-white rounded-xl border border-stone-200 p-10">
      <div class="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-2xl font-semibold mb-2">Path Complete</h1>
      <p class="text-stone-600 mb-2">
        <Sanskrit text={path.titleSanskrit} />
        <span class="text-stone-400 ml-1">{path.title}</span>
      </p>
      <p class="text-sm text-stone-500 mb-8">
        {path.steps.length} steps completed
      </p>

      <div class="space-y-3">
        {#if nextPath}
          <a
            href="/learn/{nextPath.id}"
            class="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium"
          >
            Next: {nextPath.title}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        {/if}
        <div>
          <a
            href="/learn"
            class="inline-flex items-center gap-1 px-4 py-2 text-sm text-stone-600 hover:text-indigo-600 transition-colors"
          >
            ← All learning paths
          </a>
        </div>
      </div>
    </div>
  </div>
{:else if path}
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-6">
      <a href="/learn" class="text-sm text-indigo-600 hover:underline mb-2 inline-block">
        ← Back to Learning Paths
      </a>
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">
          <Sanskrit text={path.titleSanskrit} />
          <span class="text-stone-400 ml-2">{path.title}</span>
        </h1>
        <span class="text-sm text-stone-500">
          {completedSteps.length}/{path.steps.length}
        </span>
      </div>

      <!-- Progress bar -->
      <div class="mt-3 h-1.5 bg-stone-100 rounded-full overflow-hidden">
        <div
          class="h-full bg-indigo-500 rounded-full transition-all duration-300"
          style="width: {progress}%"
        ></div>
      </div>
    </div>

    <!-- Mobile step navigation (visible below lg breakpoint) -->
    <div class="mb-4 lg:hidden space-y-2">
      <details class="bg-white rounded-lg border border-stone-200">
        <summary class="flex items-center justify-between px-4 py-3 cursor-pointer text-sm select-none">
          <span class="font-medium text-stone-700">
            Step {currentStepIndex + 1} of {path.steps.length}
            {#if currentStep}
              <span class="text-stone-400 ml-1">— {currentStep.title}</span>
            {/if}
          </span>
          <svg class="w-4 h-4 text-stone-400 details-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <nav class="px-4 pb-3 space-y-1 max-h-60 overflow-y-auto border-t border-stone-100 pt-2">
          {#each path.steps as step, i}
            {@const completed = isStepCompleted(i)}
            {@const current = i === currentStepIndex}
            <button
              onclick={() => goToStep(i)}
              class="w-full text-left px-2 py-1.5 rounded text-sm transition-colors
                     {current ? 'bg-indigo-50 text-indigo-700 font-medium' : ''}
                     {completed && !current ? 'text-stone-600' : ''}
                     hover:bg-stone-50"
            >
              <div class="flex items-center gap-2">
                {#if completed}
                  <span class="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                {:else if current}
                  <span class="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs flex-shrink-0">{i + 1}</span>
                {:else}
                  <span class="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-xs flex-shrink-0">{i + 1}</span>
                {/if}
                <span class="truncate">{step.title}</span>
              </div>
            </button>
          {/each}
        </nav>
      </details>

      <!-- Mobile tools: Jargon Lookup & Pratyahara -->
      <div class="flex gap-2">
        <details class="flex-1 bg-white rounded-lg border border-stone-200">
          <summary class="flex items-center justify-center gap-1.5 px-3 py-2 cursor-pointer text-sm text-stone-600 select-none">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Jargon
          </summary>
          <div class="px-3 pb-3 border-t border-stone-100 pt-2 max-h-72 overflow-y-auto">
            <JargonLookup />
          </div>
        </details>
        <details class="flex-1 bg-white rounded-lg border border-stone-200">
          <summary class="flex items-center justify-center gap-1.5 px-3 py-2 cursor-pointer text-sm text-stone-600 select-none">
            <span class="text-xs font-bold">ac</span>
            Pratyahara
          </summary>
          <div class="px-3 pb-3 border-t border-stone-100 pt-2 max-h-72 overflow-y-auto">
            <PratyaharaViewer />
          </div>
        </details>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Left sidebar: Jargon lookup -->
      <aside class="hidden lg:block lg:col-span-3">
        <div class="sticky top-8 space-y-4">
          <JargonLookup />

          <!-- Steps nav (compact) -->
          <div class="bg-white rounded-lg border border-stone-200 p-4">
            <h3 class="text-sm font-medium text-stone-500 mb-3">Steps</h3>
            <nav class="space-y-1 max-h-48 overflow-y-auto">
              {#each path.steps as step, i}
                {@const accessible = isStepAccessible(i)}
                {@const completed = isStepCompleted(i)}
                {@const current = i === currentStepIndex}
                <button
                  onclick={() => accessible && goToStep(i)}
                  disabled={!accessible}
                  class="w-full text-left px-2 py-1 rounded text-xs transition-colors
                         {current ? 'bg-indigo-50 text-indigo-700 font-medium' : ''}
                         {completed && !current ? 'text-stone-600' : ''}
                         {!accessible ? 'text-stone-300 cursor-not-allowed' : 'hover:bg-stone-50'}"
                >
                  <div class="flex items-center gap-2">
                    {#if completed}
                      <span class="w-4 h-4 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px]">✓</span>
                    {:else if current}
                      <span class="w-4 h-4 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px]">{i + 1}</span>
                    {:else}
                      <span class="w-4 h-4 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">{i + 1}</span>
                    {/if}
                    <span class="truncate">{step.title}</span>
                  </div>
                </button>
              {/each}
            </nav>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="lg:col-span-6">
        {#if loading}
          <div class="bg-white rounded-lg border border-stone-200 p-8">
            <div class="animate-pulse space-y-4">
              <div class="h-6 w-48 bg-stone-200 rounded"></div>
              <div class="h-8 w-64 bg-stone-200 rounded"></div>
              <div class="h-24 bg-stone-200 rounded"></div>
            </div>
          </div>
        {:else if currentStep && currentStep.sutraId === 'concept'}
          <!-- Conceptual step (no sutra) -->
          <div class="space-y-6">
            <div class="text-center py-6 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-lg">
              <div class="text-2xl font-medium">
                {currentStep.title}
              </div>
            </div>

            {#if currentStep.commentary}
              <div class="bg-white rounded-lg border border-stone-200 overflow-hidden p-5">
                <div class="text-stone-700 leading-relaxed">
                  <CommentaryText text={currentStep.commentary} />
                </div>
              </div>
            {/if}

            <!-- Key terms -->
            {#if currentStep.keyTerms && currentStep.keyTerms.length > 0}
              <div class="flex flex-wrap gap-2 justify-center">
                {#each currentStep.keyTerms as term}
                  <span class="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600">
                    <Sanskrit text={term} source="slp1" />
                  </span>
                {/each}
              </div>
            {/if}

            <!-- Navigation - large arrows -->
            <div class="flex items-center justify-between pt-6">
              <button
                onclick={prevStep}
                disabled={currentStepIndex === 0}
                class="w-14 h-14 flex items-center justify-center rounded-full border-2 border-stone-200 text-stone-400 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span class="text-sm text-stone-400">
                {currentStepIndex + 1} / {path.steps.length}
              </span>

              <button
                onclick={nextStep}
                class="w-14 h-14 flex items-center justify-center rounded-full border-2 transition-colors
                       {currentStepIndex === path.steps.length - 1
                         ? 'border-green-500 bg-green-500 text-white hover:bg-green-600'
                         : 'border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-600'}"
                aria-label={currentStepIndex === path.steps.length - 1 ? 'Complete' : 'Next'}
              >
                {#if currentStepIndex === path.steps.length - 1}
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                {:else}
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                {/if}
              </button>
            </div>
          </div>
        {:else if currentStep && currentStep.sutraId.toLowerCase() === 'reading'}
          <!-- Reading passage step -->
          <div class="space-y-6">
            <div class="text-center py-6 bg-gradient-to-b from-amber-50/60 to-transparent rounded-lg">
              <div class="text-xs font-medium text-amber-700 uppercase tracking-widest mb-2">पाठः · Passage</div>
              <div class="text-2xl font-medium">
                {currentStep.title}
              </div>
            </div>

            {#if currentStep.commentary}
              <div class="bg-white rounded-lg border border-stone-200 overflow-hidden p-5">
                <div class="text-stone-700 leading-relaxed">
                  <CommentaryText text={currentStep.commentary} />
                </div>
              </div>
            {/if}

            <!-- Navigation - large arrows -->
            <div class="flex items-center justify-between pt-6">
              <button
                onclick={prevStep}
                disabled={currentStepIndex === 0}
                class="w-14 h-14 flex items-center justify-center rounded-full border-2 border-stone-200 text-stone-400 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span class="text-sm text-stone-400">
                {currentStepIndex + 1} / {path.steps.length}
              </span>

              <button
                onclick={nextStep}
                class="w-14 h-14 flex items-center justify-center rounded-full border-2 transition-colors
                       {currentStepIndex === path.steps.length - 1
                         ? 'border-green-500 bg-green-500 text-white hover:bg-green-600'
                         : 'border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-600'}"
                aria-label={currentStepIndex === path.steps.length - 1 ? 'Complete' : 'Next'}
              >
                {#if currentStepIndex === path.steps.length - 1}
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                {:else}
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                {/if}
              </button>
            </div>
          </div>
        {:else if currentStep && currentStep.sutraId.toLowerCase() === 'quiz' && currentStep.quiz}
          <!-- Quiz step -->
          <div class="space-y-6">
            <div class="text-center py-4">
              <div class="text-xl font-medium text-stone-700">
                {currentStep.title}
              </div>
            </div>

            <QuizStep quiz={currentStep.quiz} />

            <!-- Navigation - large arrows -->
            <div class="flex items-center justify-between pt-6">
              <button
                onclick={prevStep}
                disabled={currentStepIndex === 0}
                class="w-14 h-14 flex items-center justify-center rounded-full border-2 border-stone-200 text-stone-400 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span class="text-sm text-stone-400">
                {currentStepIndex + 1} / {path.steps.length}
              </span>

              <button
                onclick={nextStep}
                class="w-14 h-14 flex items-center justify-center rounded-full border-2 transition-colors
                       {currentStepIndex === path.steps.length - 1
                         ? 'border-green-500 bg-green-500 text-white hover:bg-green-600'
                         : 'border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-600'}"
                aria-label={currentStepIndex === path.steps.length - 1 ? 'Complete' : 'Next'}
              >
                {#if currentStepIndex === path.steps.length - 1}
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                {:else}
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                {/if}
              </button>
            </div>
          </div>
        {:else if currentStep && sutra}
          <div class="space-y-6">
            <!-- Sutra display with commentary and depth toggle -->
            <SutraDisplay
              {sutra}
              variant="full"
              {commentary}
              {layeredCommentary}
              depth={commentaryDepth}
              fallbackCommentary={currentStep.commentary}
              onDepthChange={(d) => { commentaryDepth = d; commentaryDepthStore.set(d); }}
            />

            <!-- Prakriya example -->
            {#if prakriyaExample}
              <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
                <button
                  onclick={() => showPrakriya ? showPrakriya = false : loadPrakriya()}
                  disabled={prakriyaLoading}
                  class="w-full p-5 text-left hover:bg-stone-50 transition-colors disabled:opacity-50"
                >
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium text-emerald-700 uppercase tracking-wide">prakriyā</span>
                    <span class="text-stone-400 ml-auto">
                      {#if prakriyaLoading}
                        <svg class="w-4 h-4 animate-spin" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" stroke-dasharray="28" stroke-dashoffset="8"/>
                        </svg>
                      {:else if showPrakriya}
                        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path d="M4 10l4-4 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      {:else}
                        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      {/if}
                    </span>
                  </div>
                  <p class="text-stone-700">
                    {#if prakriyaExample.type === 'tinanta'}
                      <Sanskrit text={prakriyaExample.labelParts[0]} source="slp1" />
                      <span class="text-stone-400 mx-1">+</span>
                      <Sanskrit text={prakriyaExample.labelParts[1]} source="slp1" />
                      <span class="text-stone-400 mx-1">→</span>
                      <Sanskrit text={prakriyaExample.labelParts[2]} source="slp1" />
                    {:else}
                      <Sanskrit text={prakriyaExample.labelParts[0]} source="slp1" />
                      <span class="text-stone-400 mx-1">→</span>
                      <Sanskrit text={prakriyaExample.labelParts[1]} source="slp1" />
                    {/if}
                    {#if prakriyaExample.note}
                      <span class="text-stone-400 ml-2">({prakriyaExample.note})</span>
                    {/if}
                  </p>
                </button>

                {#if showPrakriya && prakriya}
                  <div class="p-5 border-t border-stone-100 bg-stone-50/50">
                    <DerivationViewer
                      {prakriya}
                      highlightSutra={currentStep?.sutraId}
                      expanded={true}
                      mode="simple"
                    />
                  </div>
                {/if}
              </div>
            {/if}

            <!-- Key terms -->
            {#if currentStep.keyTerms && currentStep.keyTerms.length > 0}
              <div class="flex flex-wrap gap-2 justify-center">
                {#each currentStep.keyTerms as term}
                  <span class="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600">
                    <Sanskrit text={term} source="slp1" />
                  </span>
                {/each}
              </div>
            {/if}

            <!-- Navigation - large arrows -->
            <div class="flex items-center justify-between pt-6">
              <button
                onclick={prevStep}
                disabled={currentStepIndex === 0}
                class="w-14 h-14 flex items-center justify-center rounded-full border-2 border-stone-200 text-stone-400 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span class="text-sm text-stone-400">
                {currentStepIndex + 1} / {path.steps.length}
              </span>

              <button
                onclick={nextStep}
                class="w-14 h-14 flex items-center justify-center rounded-full border-2 transition-colors
                       {currentStepIndex === path.steps.length - 1
                         ? 'border-green-500 bg-green-500 text-white hover:bg-green-600'
                         : 'border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-600'}"
                aria-label={currentStepIndex === path.steps.length - 1 ? 'Complete' : 'Next'}
              >
                {#if currentStepIndex === path.steps.length - 1}
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                {:else}
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                {/if}
              </button>
            </div>
          </div>
        {:else}
          <div class="bg-white rounded-lg border border-stone-200 p-8 text-center text-stone-500">
            Sutra not found
          </div>
        {/if}
      </main>

      <!-- Right sidebar: Pratyahara viewer -->
      <aside class="hidden lg:block lg:col-span-3">
        <div class="sticky top-8">
          <PratyaharaViewer />
        </div>
      </aside>
    </div>
  </div>
{/if}
