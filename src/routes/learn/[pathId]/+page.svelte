<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { loadPath, loadPathIndex, type PathMeta } from '$lib/content';
  import { editModal } from '$lib/stores/editModal';
  import type { LearningPath, LearningStep } from '$lib/learning/paths';
  import { getSutra, getCommentary, getLayeredCommentary, getDependencies, type Sutra, type Commentary, type LayeredSutraCommentary, type CommentaryDepth } from '$lib/data';
  import { commentaryDepth as commentaryDepthStore, lessonLanguage, type LessonLanguage } from '$lib/stores/preferences';
  import ScriptToggle from '$lib/components/ScriptToggle.svelte';
  import { displayScript } from '$lib/stores/preferences';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import InlineMarkup from '$lib/components/InlineMarkup.svelte';
  import CommentaryText from '$lib/components/CommentaryText.svelte';
  import SutraDisplay from '$lib/components/SutraDisplay.svelte';
  import JargonLookup from '$lib/components/JargonLookup.svelte';
  import PratyaharaViewer from '$lib/components/PratyaharaViewer.svelte';
  import ReviewSidebar from '$lib/components/ReviewSidebar.svelte';
  import DerivationViewer from '$lib/components/DerivationViewer.svelte';
  import QuizStep from '$lib/components/QuizStep.svelte';
  import LessonStep from '$lib/components/LessonStep.svelte';
  import { getExampleForSutra, type PrakriyaExample } from '$lib/prakriya-examples';
  import { deriveTinanta, deriveSubanta, type Prakriya } from '$lib/prakriya';

  let { data } = $props();

  let user = $derived(data.user as { login: string; avatar_url: string } | null);

  let lang: LessonLanguage = $state('telugu');
  lessonLanguage.subscribe(v => { lang = v; });
  function setLang(l: LessonLanguage) { lessonLanguage.set(l); }

  let path: LearningPath | undefined = $state(undefined);
  let pathMeta: PathMeta | undefined = $state(undefined);
  let pathIndex: PathMeta[] = $state([]);
  let pathLoading = $state(true);
  let commentaryDepth: CommentaryDepth = $state('standard');

  commentaryDepthStore.subscribe(d => { commentaryDepth = d; });

  // Per-step loaded data
  type StepData = {
    sutra?: Sutra;
    commentary?: Commentary;
    layeredCommentary?: LayeredSutraCommentary;
    dependencies?: Sutra[];
    prakriyaExample?: PrakriyaExample | null;
    prakriya?: Prakriya | null;
    showPrakriya?: boolean;
    prakriyaLoading?: boolean;
  };
  let stepData: Record<number, StepData> = $state({});
  let stepSections: Record<number, { type: string; label: string; anchor: string; si: number }[]> = $state({});
  let currentLessonNum: number | null = $state(null);

  $effect(() => {
    const pathId = data.pathId;
    path = undefined;
    pathLoading = true;
    stepData = {};
    stepSections = {};
    loadPathData(pathId);
  });

  async function loadPathData(pathId: string) {
    const [loadedPath, index] = await Promise.all([loadPath(pathId), loadPathIndex()]);
    if (!loadedPath) {
      goto('/learn');
      return;
    }
    path = loadedPath;
    pathMeta = index.find(m => m.id === pathId);
    pathIndex = index;
    pathLoading = false;

    // Load all sutra steps in parallel
    await Promise.all(
      loadedPath.steps.map((step, i) => loadStepData(step, i))
    );
  }

  $effect(() => {
    if (pathMeta) {
      editModal.setPageContext(`static/content/paths/${pathMeta.trackFolder}/${pathMeta.folder}/path.md`);
    }
    return () => editModal.setPageContext(undefined);
  });

  async function loadStepData(step: LearningStep, index: number) {
    if (step.sutraId === 'concept' || step.sutraId === 'reading' || step.sutraId === 'lesson') {
      stepData[index] = {};
      return;
    }
    try {
      const sutra = await getSutra(step.sutraId);
      if (sutra) {
        const [comm, layered, deps] = await Promise.all([
          getCommentary(sutra.numericId),
          getLayeredCommentary(sutra.numericId),
          getDependencies(sutra.id),
        ]);
        const prakriyaExample = getExampleForSutra(step.sutraId);
        stepData[index] = { sutra, commentary: comm, layeredCommentary: layered, dependencies: deps, prakriyaExample };
      } else {
        stepData[index] = {};
      }
    } catch {
      stepData[index] = {};
    }
  }

  async function loadPrakriya(stepIndex: number) {
    const sd = stepData[stepIndex];
    if (!sd?.prakriyaExample || sd.prakriyaLoading) return;
    stepData[stepIndex] = { ...sd, prakriyaLoading: true };
    try {
      const ex = sd.prakriyaExample;
      let results: Prakriya[] = [];
      if (ex.type === 'tinanta') {
        results = await deriveTinanta(ex.dhatu, ex.gana, ex.lakara, ex.prayoga || 'Kartari', ex.purusha || 'Prathama', ex.vacana || 'Eka');
      } else if (ex.type === 'subanta') {
        results = await deriveSubanta(ex.pratipadika, ex.linga, ex.vibhakti, ex.vacana);
      }
      stepData[stepIndex] = { ...stepData[stepIndex], prakriya: results[0] ?? null, showPrakriya: results.length > 0, prakriyaLoading: false };
    } catch {
      stepData[stepIndex] = { ...stepData[stepIndex], prakriyaLoading: false };
    }
  }

  function togglePrakriya(stepIndex: number) {
    const sd = stepData[stepIndex];
    if (!sd) return;
    if (sd.showPrakriya) {
      stepData[stepIndex] = { ...sd, showPrakriya: false };
    } else {
      loadPrakriya(stepIndex);
    }
  }

  function scrollToStep(i: number) {
    if (!browser) return;
    document.getElementById(`step-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Prev/next navigation for Bālabodhini lesson sequences
  const siblingPaths = $derived.by(() => {
    if (!pathMeta) return { prev: null, next: null };
    // Group by trackFolder — siblings share the same folder (e.g. pathana/balabodhini-1)
    const siblings = pathIndex
      .filter(m => m.trackFolder === pathMeta!.trackFolder)
      .sort((a, b) => a.order - b.order);
    const idx = siblings.findIndex(m => m.id === pathMeta!.id);
    if (idx === -1) return { prev: null, next: null };
    return {
      prev: idx > 0 ? siblings[idx - 1] : null,
      next: idx < siblings.length - 1 ? siblings[idx + 1] : null,
    };
  });

  // Store learning context for "return to path" banner on ref pages
  $effect(() => {
    if (browser && path) {
      sessionStorage.setItem('anuvrtti-learning-context', JSON.stringify({
        pathId: path.id,
        pathTitle: path.title,
      }));
    }
  });
</script>

<svelte:head>
  <title>{path?.title || 'Learning'} | anuvrtti</title>
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
{:else if path}
  <div class="max-w-7xl mx-auto">
    <!-- Header — same grid as content so title aligns with main column -->
    <div class="mb-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div class="hidden lg:block lg:col-span-3"></div>
      <div class="lg:col-span-6">
        <a href="/learn" class="text-sm text-indigo-600 hover:underline mb-2 inline-block">
          ← Back to Learning Paths
        </a>
        <div class="flex flex-wrap items-start justify-between gap-3">
          <h1 class="text-xl sm:text-2xl font-semibold">
            <Sanskrit text={path.titleSanskrit} source={pathMeta?.trackFolder?.startsWith('pathana/balabodhini') ? 'telugu' : 'slp1'} />
          </h1>
          <div class="flex items-center gap-2 flex-shrink-0">
            <!-- Language toggle: controls gloss/explanation language -->
            <div class="flex items-center rounded border border-stone-200 overflow-hidden text-xs">
              {#each ([['telugu', 'తె'] as const, ['english', 'En'] as const]) as [val, label]}
                <button
                  onclick={() => setLang(val)}
                  class="px-2.5 py-1.5 transition-colors
                         {lang === val ? 'bg-amber-100 text-amber-800 font-medium' : 'bg-white text-stone-400 hover:text-stone-600 hover:bg-stone-50'}"
                  title="{val === 'telugu' ? 'Explanations in Telugu' : 'Explanations in English'}"
                >{label}</button>
              {/each}
            </div>
            {#if user && pathMeta}
              <button
                class="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-indigo-600 transition-colors"
                onclick={() => editModal.open(`static/content/paths/${pathMeta!.trackFolder}/${pathMeta!.folder}/path.md`)}
                title="Edit this path"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Edit path
              </button>
            {/if}
          </div>
        </div>
        {#if path.description}
          <p class="text-sm text-stone-500 mt-1"><InlineMarkup text={path.description} /></p>
        {/if}
      </div>
    </div>

    <!-- Top prev/next — compact, aligned with content column -->
    {#if siblingPaths.prev || siblingPaths.next}
      <div class="mb-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="hidden lg:block lg:col-span-3"></div>
        <div class="lg:col-span-6 flex items-center justify-between text-xs text-stone-600">
          {#if siblingPaths.prev}
            <a href="/learn/{siblingPaths.prev.id}" class="flex items-center gap-1 hover:text-amber-700 transition-colors">
              <span>←</span>
              <Sanskrit text={siblingPaths.prev.titleSanskrit} source="telugu" />
            </a>
          {:else}<div></div>{/if}
          {#if siblingPaths.next}
            <a href="/learn/{siblingPaths.next.id}" class="flex items-center gap-1 hover:text-amber-700 transition-colors">
              <Sanskrit text={siblingPaths.next.titleSanskrit} source="telugu" />
              <span>→</span>
            </a>
          {:else}<div></div>{/if}
        </div>
      </div>
    {/if}

    <!-- Mobile TOC + tools -->
    <div class="mb-4 lg:hidden space-y-2">
      <details class="bg-white rounded-lg border border-stone-200">
        <summary class="flex items-center justify-between px-4 py-3 cursor-pointer text-sm select-none">
          <span class="font-medium text-stone-700">Contents ({path.steps.length})</span>
          <svg class="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <nav class="px-4 pb-3 space-y-2 max-h-60 overflow-y-auto border-t border-stone-100 pt-2">
          {#each path.steps as step, i}
            {@const sections = stepSections[i] ?? []}
            {@const isSingleLesson = path.steps.length === 1 && step.sutraId === 'lesson'}
            <div>
              {#if !isSingleLesson}
                <button
                  onclick={() => scrollToStep(i)}
                  class="w-full text-left px-2 py-1.5 rounded text-sm hover:bg-stone-50 transition-colors text-stone-600"
                >
                  <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center text-xs flex-shrink-0">{i + 1}</span>
                    <span class="truncate">{step.title}</span>
                  </div>
                </button>
              {/if}
              {#if sections.length > 0}
                <div class="flex flex-wrap gap-x-3 gap-y-0.5">
                  {#each sections as sec}
                    <button
                      onclick={() => document.getElementById(sec.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                      class="text-left text-xs text-stone-500 hover:text-amber-700 transition-colors py-0.5"
                    >{sec.label}</button>
                  {/each}
                </div>
              {/if}
            </div>
          {/each}
        </nav>
      </details>

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
        {#if pathMeta?.trackFolder?.startsWith('pathana/balabodhini')}
          <div class="flex-1 bg-white rounded-lg border border-stone-200 overflow-hidden">
            <ReviewSidebar lessonNum={currentLessonNum ?? 0} />
          </div>
        {:else}
          <details class="flex-1 bg-white rounded-lg border border-stone-200">
            <summary class="flex items-center justify-center gap-1.5 px-3 py-2 cursor-pointer text-sm text-stone-600 select-none">
              <span class="text-xs font-bold">ac</span>
              Pratyahara
            </summary>
            <div class="px-3 pb-3 border-t border-stone-100 pt-2 max-h-72 overflow-y-auto">
              <PratyaharaViewer />
            </div>
          </details>
        {/if}
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Left sidebar: TOC + Jargon -->
      <aside class="hidden lg:block lg:col-span-3">
        <div class="sticky top-8 space-y-4">
          <JargonLookup />

          <div class="bg-white rounded-lg border border-stone-200 p-4">
            <h3 class="text-xs font-medium text-stone-400 uppercase tracking-wide mb-3">Contents</h3>
            <nav class="space-y-2 max-h-[60vh] overflow-y-auto">
              {#each path.steps as step, i}
                {@const sections = stepSections[i] ?? []}
                {@const isSingleLesson = path.steps.length === 1 && step.sutraId === 'lesson'}
                <div>
                  {#if !isSingleLesson}
                    <button
                      onclick={() => scrollToStep(i)}
                      class="w-full text-left px-2 py-1 rounded text-xs font-medium hover:bg-stone-50 transition-colors text-stone-700 hover:text-stone-900"
                    >{step.title}</button>
                  {/if}
                  {#if sections.length > 0}
                    <div class="flex flex-col gap-0.5" class:mt-1={isSingleLesson}>
                      {#each sections as sec}
                        <button
                          onclick={() => document.getElementById(sec.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                          class="text-left text-xs text-stone-500 hover:text-amber-700 transition-colors py-1 px-2 rounded hover:bg-amber-50"
                        >{sec.label}</button>
                      {/each}
                    </div>
                  {/if}
                </div>
              {/each}
            </nav>
          </div>
        </div>
      </aside>

      <!-- Main content: all steps in sequence -->
      <main class="lg:col-span-6 space-y-10">
        {#each path.steps as step, i}
          {@const sd = stepData[i] ?? {}}
          <section id="step-{i}" class="scroll-mt-8">
            {#if step.sutraId === 'lesson' && step.lessonRef}
              <LessonStep
                lessonRef={step.lessonRef}
                onsections={(s) => { stepSections[i] = s; }}
                onlessonnum={(n) => { currentLessonNum = n; }}
              />

            {:else if step.sutraId === 'concept'}
              <div class="space-y-4">
                <h2 class="text-xl font-medium text-stone-800 pt-2">{step.title}</h2>

                {#if step.commentary}
                  <div class="bg-white rounded-lg border border-stone-200 p-5">
                    <div class="text-stone-700 leading-relaxed">
                      <CommentaryText text={step.commentary} />
                    </div>
                  </div>
                {/if}

                {#if step.keyTerms && step.keyTerms.length > 0}
                  <div class="flex flex-wrap gap-2">
                    {#each step.keyTerms as term}
                      <span class="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600">
                        <Sanskrit text={term} source="slp1" />
                      </span>
                    {/each}
                  </div>
                {/if}
              </div>

            {:else if step.sutraId === 'reading'}
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-medium text-amber-700 uppercase tracking-widest">पाठः · Passage</span>
                </div>
                <h2 class="text-xl font-medium text-stone-800">{step.title}</h2>

                {#if step.commentary}
                  <div class="bg-white rounded-lg border border-stone-200 p-5">
                    <div class="text-stone-700 leading-relaxed">
                      <CommentaryText text={step.commentary} />
                    </div>
                  </div>
                {/if}
              </div>

            {:else if step.sutraId === 'quiz' && step.quiz}
              <div class="space-y-4">
                <h2 class="text-xl font-medium text-stone-700">{step.title}</h2>
                <QuizStep quiz={step.quiz} />
              </div>

            {:else if sd.sutra}
              <div class="space-y-4">
                <SutraDisplay
                  sutra={sd.sutra}
                  variant="full"
                  commentary={sd.commentary}
                  layeredCommentary={sd.layeredCommentary}
                  depth={commentaryDepth}
                  fallbackCommentary={step.commentary}
                  onDepthChange={(d) => { commentaryDepth = d; commentaryDepthStore.set(d); }}
                />

                {#if sd.prakriyaExample}
                  <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
                    <button
                      onclick={() => togglePrakriya(i)}
                      disabled={sd.prakriyaLoading}
                      class="w-full p-5 text-left hover:bg-stone-50 transition-colors disabled:opacity-50"
                    >
                      <div class="flex items-center gap-2 mb-2">
                        <span class="text-xs font-medium text-emerald-700 uppercase tracking-wide">prakriyā</span>
                        <span class="text-stone-400 ml-auto">
                          {#if sd.prakriyaLoading}
                            <svg class="w-4 h-4 animate-spin" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" stroke-dasharray="28" stroke-dashoffset="8"/>
                            </svg>
                          {:else if sd.showPrakriya}
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
                        {#if sd.prakriyaExample.type === 'tinanta'}
                          <Sanskrit text={sd.prakriyaExample.labelParts[0]} source="slp1" />
                          <span class="text-stone-400 mx-1">+</span>
                          <Sanskrit text={sd.prakriyaExample.labelParts[1]} source="slp1" />
                          <span class="text-stone-400 mx-1">→</span>
                          <Sanskrit text={sd.prakriyaExample.labelParts[2]} source="slp1" />
                        {:else}
                          <Sanskrit text={sd.prakriyaExample.labelParts[0]} source="slp1" />
                          <span class="text-stone-400 mx-1">→</span>
                          <Sanskrit text={sd.prakriyaExample.labelParts[1]} source="slp1" />
                        {/if}
                        {#if sd.prakriyaExample.note}
                          <span class="text-stone-400 ml-2">({sd.prakriyaExample.note})</span>
                        {/if}
                      </p>
                    </button>

                    {#if sd.showPrakriya && sd.prakriya}
                      <div class="p-5 border-t border-stone-100 bg-stone-50/50">
                        <DerivationViewer
                          prakriya={sd.prakriya}
                          highlightSutra={step.sutraId}
                          expanded={true}
                          mode="simple"
                        />
                      </div>
                    {/if}
                  </div>
                {/if}

                {#if step.keyTerms && step.keyTerms.length > 0}
                  <div class="flex flex-wrap gap-2">
                    {#each step.keyTerms as term}
                      <span class="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600">
                        <Sanskrit text={term} source="slp1" />
                      </span>
                    {/each}
                  </div>
                {/if}
              </div>

            {:else}
              <!-- Sutra not found / still loading -->
              <div class="bg-white rounded-lg border border-stone-200 p-6 text-center text-stone-400 text-sm">
                {step.title}
              </div>
            {/if}

            <!-- Step divider (not after last) -->
            {#if i < path.steps.length - 1}
              <div class="pt-6 border-b border-stone-100"></div>
            {/if}
          </section>
        {/each}

        <!-- End of path marker + prev/next nav -->
        <div class="pt-8 border-t border-stone-100">
          {#if siblingPaths.prev || siblingPaths.next}
            <div class="flex items-center justify-between gap-4 mb-6 text-xs text-stone-600">
              {#if siblingPaths.prev}
                <a href="/learn/{siblingPaths.prev.id}" class="flex items-center gap-1 hover:text-amber-700 transition-colors">
                  <span>←</span>
                  <Sanskrit text={siblingPaths.prev.titleSanskrit} source="telugu" />
                </a>
              {:else}<div></div>{/if}
              {#if siblingPaths.next}
                <a href="/learn/{siblingPaths.next.id}" class="flex items-center gap-1 hover:text-amber-700 transition-colors">
                  <Sanskrit text={siblingPaths.next.titleSanskrit} source="telugu" />
                  <span>→</span>
                </a>
              {:else}<div></div>{/if}
            </div>
          {/if}
          <div class="text-center text-stone-300 text-sm">
            <div class="text-2xl mb-2">॥</div>
            <a href="/learn" class="text-indigo-400 hover:text-indigo-600 transition-colors text-xs">
              ← All learning paths
            </a>
          </div>
        </div>
      </main>

      <!-- Right sidebar: Review (balabodhini) or Pratyahara (grammar/ashtadhyayi) -->
      <aside class="hidden lg:block lg:col-span-3">
        <div class="sticky top-8">
          {#if pathMeta?.trackFolder?.startsWith('pathana/balabodhini')}
            <ReviewSidebar lessonNum={currentLessonNum ?? 0} />
          {:else}
            <PratyaharaViewer />
          {/if}
        </div>
      </aside>
    </div>
  </div>
{/if}
