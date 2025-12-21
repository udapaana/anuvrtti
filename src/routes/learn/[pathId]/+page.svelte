<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { getPath, type LearningPath, type LearningStep } from '$lib/learning/paths';
  import { learningProgress } from '$lib/stores/learning';
  import { getSutra, getCommentary, getDependencies, type Sutra, type Commentary } from '$lib/data';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import CommentaryText from '$lib/components/CommentaryText.svelte';
  import JargonLookup from '$lib/components/JargonLookup.svelte';
  import PratyaharaViewer from '$lib/components/PratyaharaViewer.svelte';

  let path: LearningPath | undefined = $state(undefined);
  let currentStepIndex = $state(0);
  let sutra: Sutra | undefined = $state(undefined);
  let commentary: Commentary | undefined = $state(undefined);
  let dependencies: Sutra[] = $state([]);
  let loading = $state(true);
  let completedSteps: number[] = $state([]);

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
    try {
      sutra = await getSutra(step.sutraId);
      if (sutra) {
        commentary = await getCommentary(sutra.numericId);
        dependencies = await getDependencies(sutra.id);
      }
    } catch (e) {
      console.error('Failed to load step data:', e);
    }
    loading = false;
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
        {:else if currentStep && sutra}
          <div class="space-y-6">
            <!-- The sutra - hero element -->
            <div class="text-center py-6 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-lg">
              <a href="/sutra/{sutra.id}" class="font-mono text-sm text-indigo-600 hover:underline">
                {sutra.id}
              </a>
              <div class="text-3xl font-medium mt-3 mb-3">
                <Sanskrit text={sutra.text} />
              </div>
              <div class="text-base text-stone-500">
                <Sanskrit text={sutra.expanded} />
              </div>
            </div>

            <!-- Meaning and Commentary - refined -->
            <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
              <div class="p-5 border-b border-stone-100">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs font-medium text-indigo-600 uppercase tracking-wide">Meaning</span>
                </div>
                {#if commentary?.englishShort}
                  <p class="text-stone-700 leading-relaxed">{commentary.englishShort}</p>
                {:else}
                  <p class="text-stone-400 italic text-sm">Translation not available</p>
                {/if}
              </div>

              {#if currentStep.commentary}
                <div class="p-5 bg-stone-50/50">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium text-amber-700 uppercase tracking-wide">Commentary</span>
                  </div>
                  <p class="text-stone-700 leading-relaxed">
                    <CommentaryText text={currentStep.commentary} />
                  </p>
                </div>
              {/if}
            </div>

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
