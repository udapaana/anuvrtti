<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { getPath, type LearningPath, type LearningStep } from '$lib/learning/paths';
  import { learningProgress } from '$lib/stores/learning';
  import { getSutra, getCommentary, getLayeredCommentary, getDependencies, type Sutra, type Commentary, type LayeredSutraCommentary, type CommentaryDepth } from '$lib/data';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import ClickableSanskrit from '$lib/components/ClickableSanskrit.svelte';
  import CommentaryText from '$lib/components/CommentaryText.svelte';
  import JargonLookup from '$lib/components/JargonLookup.svelte';
  import PratyaharaViewer from '$lib/components/PratyaharaViewer.svelte';
  import DerivationViewer from '$lib/components/DerivationViewer.svelte';
  import { getExampleForSutra, type PrakriyaExample } from '$lib/prakriya-examples';
  import { deriveTinanta, deriveSubanta, type Prakriya } from '$lib/prakriya';

  let path: LearningPath | undefined = $state(undefined);
  let currentStepIndex = $state(0);
  let sutra: Sutra | undefined = $state(undefined);
  let commentary: Commentary | undefined = $state(undefined);
  let layeredCommentary: LayeredSutraCommentary | undefined = $state(undefined);
  let commentaryDepth: CommentaryDepth = $state('standard');
  let dependencies: Sutra[] = $state([]);
  let loading = $state(true);
  let completedSteps: number[] = $state([]);

  // Prakriya example state
  let prakriyaExample = $state<PrakriyaExample | null>(null);
  let prakriya = $state<Prakriya | null>(null);
  let prakriyaLoading = $state(false);
  let showPrakriya = $state(false);

  onMount(() => {
    const pathId = $page.params.pathId;
    path = getPath(pathId);
    if (!path) {
      goto('/learn');
      return;
    }

    // Subscribe to progress
    const unsubscribe = learningProgress.subscribe(p => {
      if (path) {
        completedSteps = p.pathProgress[path.id] || [];
        // Only update if different to avoid loops
        if (p.currentStep !== currentStepIndex) {
          currentStepIndex = p.currentStep;
        }
      }
    });

    // Load initial step
    if (path.steps[currentStepIndex]) {
      loadStepData(path.steps[currentStepIndex]);
    }

    return unsubscribe;
  });

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
      // Conceptual steps don't have sutra data
      if (step.sutraId === 'concept') {
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

  function nextStep() {
    if (!path) return;

    const nextIndex = currentStepIndex + 1;

    // Mark current step as completed
    learningProgress.markStepComplete(path.id, currentStepIndex);

    if (nextIndex < path.steps.length) {
      learningProgress.goToStep(nextIndex);
    } else {
      // Path completed
      learningProgress.completePath(path.id);
      goto('/learn');
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

  let currentStep = $derived(path?.steps[currentStepIndex]);
  let progress = $derived(path ? (completedSteps.length / path.steps.length) * 100 : 0);

  // Get the appropriate commentary text based on selected depth
  let currentLayeredText = $derived(layeredCommentary?.en[commentaryDepth]);

  const depthLabels: Record<CommentaryDepth, string> = {
    simple: 'Simple',
    standard: 'Standard',
    advanced: 'Advanced'
  };

  const depthDescriptions: Record<CommentaryDepth, string> = {
    simple: 'One sentence, no jargon',
    standard: 'Full explanation with examples',
    advanced: 'Technical details and cross-references'
  };
</script>

<svelte:head>
  <title>{path?.title || 'Learning'} | Ashtadhyayi Explorer</title>
</svelte:head>

{#if path}
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
                <p class="text-stone-700 leading-relaxed">
                  <CommentaryText text={currentStep.commentary} />
                </p>
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
        {:else if currentStep && sutra}
          <div class="space-y-6">
            <!-- The sutra - hero element -->
            <div class="text-center py-6 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-lg">
              <a href="/sutra/{sutra.id}" class="font-mono text-sm text-indigo-600 hover:underline">
                {sutra.id}
              </a>
              <div class="text-3xl font-medium mt-3">
                <Sanskrit text={sutra.text} />
              </div>
            </div>

            <!-- Anuvṛtti section -->
            {#if sutra.expanded && sutra.expanded !== sutra.text}
              <div class="bg-white rounded-lg border border-stone-200 overflow-hidden p-5">
                <div class="mb-3">
                  <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">अनुवृत्ति · With Continuation</span>
                </div>
                <div class="text-lg leading-relaxed">
                  <ClickableSanskrit text={sutra.expanded} />
                </div>
              </div>
            {/if}

            <!-- Layered Commentary with depth selector -->
            <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
              <!-- Depth selector -->
              {#if layeredCommentary}
                <div class="p-4 border-b border-stone-100 bg-stone-50/50">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">Explanation Depth</span>
                    <div class="flex gap-1">
                      {#each (['simple', 'standard', 'advanced'] as const) as depth}
                        <button
                          onclick={() => commentaryDepth = depth}
                          class="px-3 py-1 text-xs rounded-full transition-colors
                                 {commentaryDepth === depth
                                   ? 'bg-indigo-500 text-white'
                                   : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}"
                          title={depthDescriptions[depth]}
                        >
                          {depthLabels[depth]}
                        </button>
                      {/each}
                    </div>
                  </div>
                </div>
              {/if}

              <!-- Layered commentary content -->
              {#if currentLayeredText}
                <div class="p-5 border-b border-stone-100/50 bg-indigo-50/30">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium text-indigo-700 uppercase tracking-wide">
                      {depthLabels[commentaryDepth]} Explanation
                    </span>
                  </div>
                  <div class="text-stone-700 leading-relaxed prose prose-sm max-w-none">
                    <CommentaryText text={currentLayeredText} />
                  </div>
                </div>
              {:else if currentStep.commentary}
                <!-- Fallback to step commentary if no layered -->
                <div class="p-5 border-b border-stone-100/50">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">Commentary</span>
                  </div>
                  <p class="text-stone-700 leading-relaxed">
                    <CommentaryText text={currentStep.commentary} />
                  </p>
                </div>
              {:else if commentary?.englishShort}
                <!-- Fallback to short meaning -->
                <div class="p-5 border-b border-stone-100/50 bg-indigo-50/30">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium text-indigo-700 uppercase tracking-wide">Meaning</span>
                  </div>
                  <p class="text-stone-700 leading-relaxed">
                    <CommentaryText text={commentary.englishShort} />
                  </p>
                </div>
              {/if}

              <!-- Kāśikā (always show if available, in advanced mode or as supplementary) -->
              {#if commentaryDepth === 'advanced' && (commentary?.kashika || currentStep.kashika)}
                <div class="p-5 border-b border-stone-100/50 bg-amber-50/30">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium text-amber-700 uppercase tracking-wide">काशिका · Kāśikāvṛtti</span>
                  </div>
                  <p class="text-stone-700 leading-relaxed">
                    <CommentaryText text={commentary?.kashika || currentStep.kashika || ''} />
                  </p>
                </div>
              {/if}

              {#if commentaryDepth === 'advanced' && (commentary?.kashikaEnglish || currentStep.kashikaTranslation)}
                <div class="p-5 bg-amber-50/20">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium text-amber-600 uppercase tracking-wide">Kāśikā Translation</span>
                  </div>
                  <p class="text-stone-700 leading-relaxed">
                    <CommentaryText text={commentary?.kashikaEnglish || currentStep.kashikaTranslation || ''} />
                  </p>
                </div>
              {/if}
            </div>

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
