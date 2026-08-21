<script lang="ts">
  import { page } from '$app/stores';
  import { goto, replaceState } from '$app/navigation';
  import { browser } from '$app/environment';
  import { loadPath, loadPathIndex, type PathMeta } from '$lib/content';
  import { editModal } from '$lib/stores/editModal';
  import type { LearningPath, LearningStep } from '$lib/learning/paths';
  import {
    getSutra,
    getCommentary,
    getLayeredCommentary,
    getDependencies,
    type Sutra,
    type Commentary,
    type LayeredSutraCommentary,
    type CommentaryDepth
  } from '$lib/data';
  import {
    commentaryDepth as commentaryDepthStore,
    authoringMode
  } from '$lib/stores/preferences';
  import { learningProgress } from '$lib/stores/learning';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import InlineMarkup from '$lib/components/InlineMarkup.svelte';
  import CommentaryText from '$lib/components/CommentaryText.svelte';
  import SutraDisplay from '$lib/components/SutraDisplay.svelte';
  import DerivationViewer from '$lib/components/DerivationViewer.svelte';
  import QuizStep from '$lib/components/QuizStep.svelte';
  import LessonStep from '$lib/components/LessonStep.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Disclose from '$lib/components/ui/Disclose.svelte';
  import Chip from '$lib/components/ui/Chip.svelte';
  import { getExampleForSutra, type PrakriyaExample } from '$lib/prakriya-examples';
  import { deriveTinanta, deriveSubanta, type Prakriya } from '$lib/prakriya';

  /*
    One step, one screen.

    This page and LessonStep are where the Tailwind card language was thickest —
    five nested rounded-lg panels, two sticky sidebars of tools, and every step
    of a path stacked down one scroll. Now the step index is on the shelf with
    its progress bar, the advance controls sit at the bottom of the column and
    never float, and the tools that used to be pinned either side (jargon,
    pratyāhārāḥ) are one ⌘K or one Reference page away rather than duplicated
    on every lesson.

    It serves both kinds of step: a guided path's step, and a primer lesson —
    hence /workbook/[lessonId] for both.
  */
  let { data } = $props();

  let user = $derived(data.user as { login: string; avatar_url: string } | null);

  let path: LearningPath | undefined = $state(undefined);
  let pathMeta: PathMeta | undefined = $state(undefined);
  let pathIndex: PathMeta[] = $state([]);
  let pathLoading = $state(true);
  let commentaryDepth: CommentaryDepth = $state('standard');

  commentaryDepthStore.subscribe((d) => {
    commentaryDepth = d;
  });

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
  let stepSections: Record<number, { type: string; label: string; anchor: string; si: number }[]> =
    $state({});
  let currentLessonNum: number | null = $state(null);

  // Which step is on screen. ?step= drives it, so a resume link lands exactly
  // where it left off and a step is linkable on its own.
  let stepIdx = $state(0);

  $effect(() => {
    const pathId = data.pathId;
    path = undefined;
    pathLoading = true;
    stepData = {};
    stepSections = {};
    loadPathData(pathId);
  });

  $effect(() => {
    const want = Number($page.url.searchParams.get('step'));
    if (!Number.isNaN(want) && want > 0) stepIdx = want;
  });

  async function loadPathData(pathId: string) {
    const [loadedPath, index] = await Promise.all([loadPath(pathId), loadPathIndex()]);
    if (!loadedPath) {
      goto('/workbook');
      return;
    }
    path = loadedPath;
    pathMeta = index.find((m) => m.id === pathId);
    pathIndex = index;
    pathLoading = false;

    // Load all sutra steps in parallel — the column shows one at a time, but a
    // step should be there the moment you advance to it.
    await Promise.all(loadedPath.steps.map((step, i) => loadStepData(step, i)));
  }

  $effect(() => {
    if (pathMeta) {
      editModal.setPageContext(
        `static/content/paths/${pathMeta.trackFolder}/${pathMeta.folder}/path.md`
      );
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
          getDependencies(sutra.id)
        ]);
        const prakriyaExample = getExampleForSutra(step.sutraId);
        stepData[index] = {
          sutra,
          commentary: comm,
          layeredCommentary: layered,
          dependencies: deps,
          prakriyaExample
        };
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
        results = await deriveTinanta(
          ex.dhatu,
          ex.gana,
          ex.lakara,
          ex.prayoga || 'Kartari',
          ex.purusha || 'Prathama',
          ex.vacana || 'Eka'
        );
      } else if (ex.type === 'subanta') {
        results = await deriveSubanta(ex.pratipadika, ex.linga, ex.vibhakti, ex.vacana);
      }
      stepData[stepIndex] = {
        ...stepData[stepIndex],
        prakriya: results[0] ?? null,
        showPrakriya: results.length > 0,
        prakriyaLoading: false
      };
    } catch {
      stepData[stepIndex] = { ...stepData[stepIndex], prakriyaLoading: false };
    }
  }

  const total = $derived(path?.steps.length ?? 0);
  const clamped = $derived(Math.max(0, Math.min(stepIdx, Math.max(0, total - 1))));
  const step = $derived(path?.steps[clamped] ?? null);
  const sd = $derived(stepData[clamped] ?? {});

  // Advancing is what records progress, which is what makes home's resume row
  // and Reference's path rows say something true. Nothing wrote pathProgress
  // before, so both read as untouched however far you had actually read.
  function go(delta: number) {
    if (!path) return;
    if (delta > 0) learningProgress.markStepComplete(path.id, clamped);
    const next = Math.max(0, Math.min(clamped + delta, total - 1));
    stepIdx = next;
    const url = new URL($page.url);
    url.searchParams.set('step', String(next));
    replaceState(url, {});
    if (browser) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // keyTerms in the source are mostly SLP1 (guRa, iK, dhAtu — case is meaningful)
  // but a few slipped in as IAST (vṛddhi, Dhātupāṭha). Feeding an IAST term to
  // the SLP1 transliterator garbles it, so detect the script per term.
  function termScript(t: string): 'devanagari' | 'iast' | 'slp1' {
    if (/[ऀ-ॿ]/.test(t)) return 'devanagari';
    return /[āīūṛṝḷḹṅñṭḍṇśṣṃḥ]/.test(t) ? 'iast' : 'slp1';
  }
  function termText(t: string): string {
    return termScript(t) === 'iast' ? t.toLowerCase() : t;
  }

  const isPrimer = $derived(!!pathMeta?.trackFolder?.startsWith('pathana/balabodhini'));

  // Prev/next sibling paths, for moving between lessons of a sequence.
  const siblingPaths = $derived.by(() => {
    if (!pathMeta) return { prev: null as PathMeta | null, next: null as PathMeta | null };
    const siblings = pathIndex
      .filter((m) => m.trackFolder === pathMeta!.trackFolder)
      .sort((a, b) => a.order - b.order);
    const idx = siblings.findIndex((m) => m.id === pathMeta!.id);
    if (idx === -1) return { prev: null, next: null };
    return {
      prev: idx > 0 ? siblings[idx - 1] : null,
      next: idx < siblings.length - 1 ? siblings[idx + 1] : null
    };
  });

  // Store learning context for the "return to path" banner on ref pages
  $effect(() => {
    if (browser && path) {
      sessionStorage.setItem(
        'anuvrtti-learning-context',
        JSON.stringify({ pathId: path.id, pathTitle: path.title })
      );
    }
  });

  let prakriyaOpen = $state(false);
  $effect(() => {
    clamped;
    prakriyaOpen = false;
  });
</script>

<svelte:head>
  <title>{path?.title || 'workbook'} | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  <a class="back" href={isPrimer ? '/workbook' : '/ref?mode=path'}>‹ {isPrimer ? 'lessons' : 'paths'}</a>
  {#if path}
    <span class="title"><Sanskrit text={path.titleSanskrit} source={isPrimer ? 'telugu' : 'slp1'} /></span>
  {/if}
  <!-- In authoring mode the shelf carries the edit control, in place of the
       pencil that used to float over every route. -->
  {#if user && $authoringMode && pathMeta}
    <button
      class="edit"
      onclick={() =>
        editModal.open(
          `static/content/paths/${pathMeta!.trackFolder}/${pathMeta!.folder}/path.md`
        )}
    >
      edit path
    </button>
  {/if}
{/snippet}

{#snippet shelfRight()}
  {#if total > 1}<span>step {clamped + 1} / {total}</span>{/if}
{/snippet}

{#if pathLoading}
  <div class="status">loading the path…</div>
{:else if path}
  <Shelf
    left={shelfLeft}
    right={shelfRight}
    progress={total > 1 ? ((clamped + 1) / total) * 100 : null}
  />

  <Shell measure>
    {#if !total}
      <p class="description">This path has no steps yet.</p>
    {/if}
    {#if path.description && clamped === 0}
      <p class="description"><InlineMarkup text={path.description} /></p>
    {/if}

    {#if step}
      <section class="step">
        {#if step.sutraId === 'lesson' && step.lessonRef}
          <LessonStep
            lessonRef={step.lessonRef}
            onsections={(s) => {
              stepSections[clamped] = s;
            }}
            onlessonnum={(n) => {
              currentLessonNum = n;
            }}
          />
        {:else if step.sutraId === 'concept'}
          <h2>{step.title}</h2>
          {#if step.commentary}
            <div class="teaching"><CommentaryText text={step.commentary} /></div>
          {/if}
          {#if step.keyTerms?.length}
            <div class="terms">
              {#each step.keyTerms as term}
                <Chip label={termText(term)} script={termScript(term)} />
              {/each}
            </div>
          {/if}
        {:else if step.sutraId === 'reading'}
          <span class="label">पाठः · passage</span>
          <h2>{step.title}</h2>
          {#if step.commentary}
            <div class="teaching"><CommentaryText text={step.commentary} /></div>
          {/if}
        {:else if step.sutraId === 'quiz' && step.quiz}
          <h2>{step.title}</h2>
          <QuizStep quiz={step.quiz} />
        {:else if sd.sutra}
          <SutraDisplay
            sutra={sd.sutra}
            variant="full"
            commentary={sd.commentary}
            layeredCommentary={sd.layeredCommentary}
            depth={commentaryDepth}
            fallbackCommentary={step.commentary}
            onDepthChange={(d) => {
              commentaryDepth = d;
              commentaryDepthStore.set(d);
            }}
          />

          {#if sd.prakriyaExample}
            <!-- the derivation, as a disclosure row rather than a nested panel,
                 so a step opens at a predictable height -->
            <Disclose
              label="prakriyā"
              count={sd.prakriyaLoading ? 'loading' : null}
              bind:open={prakriyaOpen}
            >
              <p class="exhibit-line">
                {#if sd.prakriyaExample.type === 'tinanta'}
                  <Sanskrit text={sd.prakriyaExample.labelParts[0]} source="slp1" />
                  <span class="join">+</span>
                  <Sanskrit text={sd.prakriyaExample.labelParts[1]} source="slp1" />
                  <span class="join">→</span>
                  <Sanskrit text={sd.prakriyaExample.labelParts[2]} source="slp1" />
                {:else}
                  <Sanskrit text={sd.prakriyaExample.labelParts[0]} source="slp1" />
                  <span class="join">→</span>
                  <Sanskrit text={sd.prakriyaExample.labelParts[1]} source="slp1" />
                {/if}
                {#if sd.prakriyaExample.note}
                  <span class="note">({sd.prakriyaExample.note})</span>
                {/if}
              </p>
              {#if sd.prakriya}
                <div class="exhibit">
                  <DerivationViewer
                    prakriya={sd.prakriya}
                    highlightSutra={step.sutraId}
                    expanded={true}
                    mode="simple"
                  />
                </div>
              {:else}
                <button class="load" onclick={() => loadPrakriya(clamped)}>
                  {sd.prakriyaLoading ? 'deriving…' : 'derive it'}
                </button>
              {/if}
            </Disclose>
          {/if}

          {#if step.keyTerms?.length}
            <div class="terms">
              {#each step.keyTerms as term}
                <Chip label={termText(term)} script={termScript(term)} />
              {/each}
            </div>
          {/if}
        {:else}
          <div class="empty">{step.title}</div>
        {/if}
      </section>
    {/if}

    <!-- Advance controls, at the bottom of the column, never floating. -->
    <nav class="advance">
      <button disabled={clamped <= 0} onclick={() => go(-1)}>‹ back</button>
      {#if clamped < total - 1}
        <button class="continue" onclick={() => go(1)}>continue ›</button>
      {:else if siblingPaths.next}
        <a class="continue" href="/workbook/{siblingPaths.next.id}">
          <Sanskrit text={siblingPaths.next.titleSanskrit} source="telugu" /> ›
        </a>
      {:else}
        <span class="done">last step</span>
      {/if}
    </nav>

    {#if siblingPaths.prev || siblingPaths.next}
      <nav class="siblings">
        {#if siblingPaths.prev}
          <a href="/workbook/{siblingPaths.prev.id}">
            ← <Sanskrit text={siblingPaths.prev.titleSanskrit} source="telugu" />
          </a>
        {:else}<span></span>{/if}
        {#if siblingPaths.next}
          <a href="/workbook/{siblingPaths.next.id}">
            <Sanskrit text={siblingPaths.next.titleSanskrit} source="telugu" /> →
          </a>
        {:else}<span></span>{/if}
      </nav>
    {/if}
  </Shell>
{/if}

<style>
  .status {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
    padding: 40px 24px;
    text-align: center;
  }

  .back {
    color: var(--quiet);
    text-decoration: none;
  }
  .back:hover {
    color: var(--ink);
  }
  .title {
    font-family: var(--font-deva);
    font-size: 14px;
    color: var(--ink);
  }
  .edit {
    font-family: var(--font-mono);
    font-size: 11px;
    background: transparent;
    border: 1px solid var(--accent);
    border-radius: var(--radius);
    color: var(--accent);
    padding: 2px 8px;
    cursor: pointer;
  }

  .description {
    margin: 0;
    font-size: 16px;
    color: var(--muted);
    font-style: italic;
  }

  .step {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
  }
  .step :global(h2) {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
  }
  .teaching {
    font-size: 17px;
    line-height: 1.65;
    color: var(--ink-2);
    border-left: 2px solid var(--accent);
    padding-left: 16px;
  }
  .terms {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .exhibit-line {
    margin: 0;
    font-family: var(--font-deva);
    font-size: 17px;
  }
  .join,
  .note {
    color: var(--quiet);
    padding: 0 4px;
  }
  .note {
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .exhibit {
    background: var(--sunken);
    border: 1px solid var(--rule);
    padding: 14px;
  }
  .load {
    font-family: var(--font-mono);
    font-size: 12px;
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--accent);
    padding: 5px 10px;
    cursor: pointer;
    align-self: flex-start;
  }

  .empty {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
    border: 1px solid var(--rule);
    padding: 24px;
    text-align: center;
  }

  .advance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--rule);
    padding-top: 16px;
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .advance button,
  .advance .continue {
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--ink);
    font-family: var(--font-mono);
    font-size: 12px;
    padding: 5px 11px;
    cursor: pointer;
    text-decoration: none;
  }
  .advance button:disabled {
    color: var(--faint);
    border-color: var(--rule);
    cursor: default;
  }
  .advance .continue {
    border-color: var(--accent);
    color: var(--accent);
  }
  .done {
    color: var(--faint);
  }

  .siblings {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .siblings a {
    color: var(--muted);
    text-decoration: none;
  }
  .siblings a:hover {
    color: var(--accent);
  }
</style>
