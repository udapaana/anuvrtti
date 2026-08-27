<script lang="ts">
  import type { SessionUser } from '$lib/server/session';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { dataUrl } from '$lib/dataUrl';
  import { onMount } from 'svelte';
  import type { Sutra, Commentary, LayeredSutraCommentary, CommentaryDepth } from '$lib/data/types';
  import SutraDisplay from '$lib/components/SutraDisplay.svelte';
  import CommentaryEditor from '$lib/components/CommentaryEditor.svelte';
  import CommentaryText from '$lib/components/CommentaryText.svelte';
  import AnuvrttiGraph from '$lib/components/AnuvrttiGraph.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import { isNarrow } from '$lib/stores/viewport';
  import SheetButton from '$lib/components/ui/SheetButton.svelte';
  import Segmented from '$lib/components/ui/Segmented.svelte';
  import Disclose from '$lib/components/ui/Disclose.svelte';
  import {
    commentaryDepth as commentaryDepthStore,
    authoringMode
  } from '$lib/stores/preferences';
  import { pendingEdits } from '$lib/stores/edits';
  import { editModal } from '$lib/stores/editModal';

  /*
    One sūtra. Three commentary tiers used to stack down the page, so its length
    depended on how much commentary the sūtra happened to carry; they are a
    segmented control on the shelf now, and the page has one reading length
    throughout. Prev/next is on the shelf too — with 3983 pages, moving to the
    neighbour is the primary navigation, not a footer.

    Four of the things that used to run down the column are cross-references,
    which is a rail, not body copy: neighbours, what cites this, the lines in
    the reader that put it to work, and the sources behind one closed row. The
    two tool sidebars (jargon, pratyāhārāḥ) are gone — both are one ⌘K away and
    both have their own Reference page.
  */
  let { data } = $props();
  let user = $derived(data.user as SessionUser | null);

  // Learning context: offer a way back if the reader came from a path step.
  interface LearningContext {
    pathId: string;
    pathTitle: string;
    stepIndex: number;
    stepTotal: number;
  }
  // On a phone the neighbours rail is a sheet, opened from the shelf.
  const narrow = $derived($isNarrow);
  let railOpen = $state(false);

  let learningContext: LearningContext | null = $state(null);

  if (browser) {
    try {
      const stored = sessionStorage.getItem('anuvrtti-learning-context');
      if (stored) {
        learningContext = JSON.parse(stored);
      }
    } catch {
      /* ignore */
    }
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
  let layeredCommentary: LayeredSutraCommentary | undefined = $derived(
    data.layeredCommentary ?? undefined
  );
  let dependents: Sutra[] = $derived(data.dependents);
  let prevSutraId: string | null = $derived(data.prevSutraId);
  let nextSutraId: string | null = $derived(data.nextSutraId);
  let learningPaths: { pathId: string; pathTitle: string; stepIndex: number }[] = $derived(
    data.learningPaths
  );
  let balabodhiniLessons: {
    lessonRef: string;
    lessonNumber: number;
    part: number;
    title: string;
  }[] = $derived(data.balabodhiniLessons ?? []);
  let kaleSections: number[] = $derived(data.kaleSections ?? []);
  let prakriyaPaths = $derived(learningPaths.filter((lp) => lp.pathId.startsWith('prakriya-')));
  let otherPaths = $derived(learningPaths.filter((lp) => !lp.pathId.startsWith('prakriya-')));

  // The commentary tier the column is showing. Vasu's full translation is not a
  // tier — it is a source, and opens from the rail.
  let tier = $state<'plain' | 'kashika' | 'vartika'>('plain');
  const tiers = $derived([
    { id: 'plain', label: 'plain' },
    { id: 'kashika', label: 'kāśikā', title: commentary?.kashika ? undefined : 'none recorded' },
    {
      id: 'vartika',
      label: 'vārtika',
      title: commentary?.vartika?.length ? undefined : 'none recorded'
    }
  ]);
  $effect(() => {
    // A new sūtra starts on the plain tier rather than inheriting the last one,
    // which may not exist here.
    data.sutra;
    tier = 'plain';
    sourcesOpen = false;
  });

  let sourcesOpen = $state(false);
  const fullTranslation = $derived(commentary?.englishFull ?? '');
  const sources = $derived(
    [
      commentary?.kashika ? { label: 'kāśikā vṛtti', text: 'recorded', href: null } : null,
      commentary?.vartika?.length
        ? { label: 'vārttikas', text: `${commentary.vartika.length} recorded`, href: null }
        : null,
      ...balabodhiniLessons.map((l) => ({
        label: 'bālabodhinī',
        text: `${l.part}.${l.lessonNumber} · ${l.title}`,
        href: `/workbook/${l.lessonRef}`
      }))
    ].filter(Boolean) as { label: string; text: string; href: string | null }[]
  );

  // The lines in the graded reader that cite this sūtra. Best-effort: the rail
  // simply omits the section if the corpus does not load.
  /*
    Which readings cite this sūtra.

    This used to fetch readings.json — 4.07 MB, the entire graded reader — and
    scan every word of every reading for a matching cite, in order to show a
    list that is usually empty and never longer than a handful. The corpus cites
    187 distinct sūtras in total, so the whole answer for every sūtra is a
    260 KB index: build-sutra-refs.ts writes it as readings-by-sutra.json.
  */
  let readingHits = $state<{ id: string; sentence: string }[]>([]);
  onMount(async () => {
    try {
      const id = data.sutra?.id;
      if (!id) return;
      const res = await fetch(dataUrl('/data/readings-by-sutra.json'));
      if (!res.ok) return;
      readingHits = ((await res.json()) as Record<string, { id: string; sentence: string }[]>)[id] ?? [];
    } catch {
      /* the rail drops the section */
    }
  });

  // Depth selector — synced with the global preference.
  let depth: CommentaryDepth = $state('standard');
  commentaryDepthStore.subscribe((d) => {
    depth = d;
  });

  // Register edit context for the shelf's authoring control.
  $effect(() => {
    if (sutra) {
      const a = sutra.numericId[0];
      const p = sutra.numericId[1];
      const s = parseInt(sutra.numericId.slice(2));
      editModal.setPageContext(`static/data/commentary/${a}/${p}/${s}.toml`);
    }
    return () => editModal.setPageContext(undefined);
  });

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
      // Opening the editor turns the mode on, so the rail is there to hold it.
      authoringMode.set(true);
      editModal.open(`static/data/commentary/${a}/${p}/${s}.toml`);
    }
  }

  async function submitEdits() {
    submitState = 'loading';
    try {
      const res = await fetch('/api/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ edits: pendingEdits.snapshot(), note: '' })
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
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowLeft' || e.key === 'h') {
      if (prevSutraId) goto(`/ref/${prevSutraId}`);
    } else if (e.key === 'ArrowRight' || e.key === 'l') {
      if (nextSutraId) goto(`/ref/${nextSutraId}`);
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>{sutra ? `${sutra.id} ${sutra.text}` : 'Not Found'} | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  {#if narrow}
    <SheetButton label="neighbours" onopen={() => (railOpen = true)} />
    <span class="shelf-rule" aria-hidden="true"></span>
  {/if}
  {#if sutra}
    <a class="crumb" href="/ref?a={sutra.adhyaya}&p={sutra.pada}">
      {sutra.adhyaya}.{sutra.pada}
    </a>
    <span class="id">{sutra.id}</span>
    <!-- With 3983 pages, sequential movement is the primary navigation, so it
         sits on the shelf rather than at the bottom of the column. -->
    <span class="step">
      {#if prevSutraId}<a href="/ref/{prevSutraId}" title={prevSutraId}>‹</a>{:else}<span class="off">‹</span>{/if}
      {#if nextSutraId}<a href="/ref/{nextSutraId}" title={nextSutraId}>›</a>{:else}<span class="off">›</span>{/if}
    </span>
    {#if learningContext}
      <a class="return" href="/workbook/{learningContext.pathId}">
        return to {learningContext.pathTitle} →
      </a>
      <button class="dismiss" onclick={dismissLearningContext} aria-label="dismiss">×</button>
    {/if}
  {/if}
{/snippet}

{#snippet shelfRight()}
  <!-- Only in authoring mode: the PR chip that used to float over the page. -->
  {#if $authoringMode && (editCount > 0 || submitState === 'done')}
    {#if submitState === 'done'}
      <a class="pr" href={prUrl} target="_blank" rel="noopener">PR opened →</a>
    {:else if submitState === 'error'}
      <button class="pr" onclick={() => (submitState = 'idle')}>{submitError} · dismiss</button>
    {:else}
      <button class="pr" onclick={submitEdits} disabled={submitState === 'loading'}>
        {submitState === 'loading' ? 'submitting…' : `submit ${editCount} edit${editCount === 1 ? '' : 's'}`}
      </button>
    {/if}
  {/if}
  <Segmented
    options={tiers}
    value={tier}
    onchange={(id) => (tier = id as typeof tier)}
    ariaLabel="commentary tier"
  />
{/snippet}

{#snippet rail()}
  <span class="label">neighbours</span>
  <div class="neighbours">
    {#if prevSutraId}<a href="/ref/{prevSutraId}">{prevSutraId}</a>{/if}
    {#if sutra}<span class="here">{sutra.id} {sutra.text}</span>{/if}
    {#if nextSutraId}<a href="/ref/{nextSutraId}">{nextSutraId}</a>{/if}
  </div>

  <div class="cited">
    <span class="label">cited by</span>
    <span class="counts">
      {#if readingHits.length || balabodhiniLessons.length || dependents.length}
        {readingHits.length} readings · {balabodhiniLessons.length} lessons · {dependents.length} sūtras
      {:else}
        nothing in this corpus cites it yet
      {/if}
    </span>
  </div>

  {#if readingHits.length}
    <!-- The bridge back to the reader: the actual lines that put this sūtra to
         work, one click from the rule itself. -->
    <div class="in-reader">
      <span class="label">in the reader</span>
      {#each readingHits.slice(0, 6) as r (r.id)}
        <a class="reading" href="/reader?reading={r.id}">
          <span class="reading-text"><Sanskrit text={r.sentence} source="devanagari" /></span>
          <span class="reading-id">{r.id} →</span>
        </a>
      {/each}
    </div>
  {/if}

  {#if sources.length || fullTranslation}
  <Disclose label="sources" count={String(sources.length + (fullTranslation ? 1 : 0))} bind:open={sourcesOpen}>
    {#each sources as s (s.label)}
      <div class="source">
        <span class="source-label">{s.label}</span>
        {#if s.href}
          <a href={s.href}>{s.text}</a>
        {:else}
          <span class="source-text">{s.text}</span>
        {/if}
      </div>
    {/each}
    {#if fullTranslation}
      <div class="source">
        <span class="source-label">full translation · vasu</span>
        <div class="vasu">
          {#each fullTranslation.split('\n') as para}
            {#if para.trim()}<p><CommentaryText text={para} /></p>{/if}
          {/each}
        </div>
      </div>
    {/if}
  </Disclose>
  {/if}
{/snippet}

{#if !sutra}
  <div class="status">
    <p>no such sūtra</p>
    <a href="/ref">back to reference</a>
  </div>
{:else}
  <Shelf left={shelfLeft} right={shelfRight} />

  <Shell {rail} sheets bind:railOpen>
    {#if editing && layeredCommentary}
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
        {tier}
        {user}
        onEdit={layeredCommentary ? handleEditClick : undefined}
      />
    {/if}

    <section class="graph">
      <span class="label"><Sanskrit text="anuvṛtti" source="iast" /> · inherited terms</span>
      <AnuvrttiGraph {sutra} />
    </section>

    {#if prakriyaPaths.length || otherPaths.length || kaleSections.length}
      <section class="applied">
        <span class="label">used in</span>
        <div class="links">
          {#each prakriyaPaths as lp (lp.pathId)}
            <a href="/workbook/{lp.pathId}?step={lp.stepIndex}">{lp.pathTitle}</a>
          {/each}
          {#each otherPaths as lp (lp.pathId)}
            <a href="/workbook/{lp.pathId}">{lp.pathTitle}</a>
          {/each}
          {#each kaleSections as n (n)}
            <a href="/grammar?s={n}">
              डुकृण्करणे {n > 972 ? `appendix § ${n - 972}` : `§ ${n}`}
            </a>
          {/each}
        </div>
      </section>
    {/if}
  </Shell>
{/if}

<style>
  .status {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 80px 24px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
  }
  .status a {
    color: var(--accent);
    text-decoration: none;
  }

  /* ── shelf ───────────────────────────────────────────────────────────── */
  .crumb {
    color: var(--quiet);
    text-decoration: none;
  }
  .crumb:hover {
    color: var(--ink);
  }
  .id {
    color: var(--ink);
  }
  .step {
    display: flex;
    gap: 6px;
  }
  .step a {
    color: var(--muted);
    text-decoration: none;
  }
  .step a:hover {
    color: var(--accent);
  }
  .off {
    color: var(--rule-2);
  }
  .return {
    color: var(--accent);
    text-decoration: none;
  }
  .dismiss {
    background: transparent;
    border: none;
    color: var(--quiet);
    cursor: pointer;
    font: inherit;
    padding: 0;
  }
  .pr {
    font-family: var(--font-mono);
    font-size: 11px;
    background: transparent;
    border: 1px solid var(--accent);
    border-radius: var(--radius);
    color: var(--accent);
    padding: 2px 8px;
    cursor: pointer;
    text-decoration: none;
  }

  /* ── column ──────────────────────────────────────────────────────────── */
  .graph,
  .applied {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .links a {
    font-family: var(--font-mono);
    font-size: 11px;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 3px 8px;
    color: var(--muted);
    text-decoration: none;
  }
  .links a:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  /* ── rail ────────────────────────────────────────────────────────────── */
  .neighbours {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .neighbours a {
    color: var(--muted);
    text-decoration: none;
  }
  .neighbours a:hover {
    color: var(--accent);
  }
  .here {
    color: var(--ink);
    font-family: var(--font-deva);
    font-size: 13px;
  }

  .cited,
  .in-reader {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-top: 1px solid var(--rule);
    padding-top: 14px;
  }
  .counts {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--muted);
  }

  .reading {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-decoration: none;
  }
  .reading-text {
    font-family: var(--font-deva);
    font-size: 14px;
    color: var(--ink);
  }
  .reading-id {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .reading:hover .reading-text {
    color: var(--accent);
  }

  .source {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .source-label {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--faint);
  }
  .source a {
    font-size: 14px;
    color: var(--accent-ref);
    text-decoration: none;
  }
  .source-text {
    font-size: 14px;
    color: var(--muted);
  }
  .vasu {
    font-size: 14px;
    line-height: 1.6;
    color: var(--ink-2);
  }
  .vasu p {
    margin: 0 0 8px;
  }
</style>
