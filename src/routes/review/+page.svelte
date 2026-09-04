<script lang="ts">
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { wordBank, type WordEntry } from '$lib/stores/wordBank';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Segmented from '$lib/components/ui/Segmented.svelte';
  import { lessonLanguage } from '$lib/stores/preferences';
  import type { LessonLanguage } from '$lib/stores/preferences';
  import { identify, loadIdentities, cellQuestion, sourceLink } from '$lib/usage/enrich';

  /*
    A session over the deck, launched from it.

    The range is whatever /words had filtered — ?q=, or the old ?from=/?to=
    lesson range for links that still carry it — which is what removes the two
    range sliders this page used to open with. In session: one card, the
    keyboard path (space reveals, ← missed, → knew), progress on the shelf.
    Missed reads in ink and knew in the done accent, the same pair the reader's
    verdict line uses, so a right answer looks the same everywhere.
  */
  let lang: LessonLanguage = $state('english');
  lessonLanguage.subscribe((v) => {
    lang = v;
  });

  /*
    The card's grammar, joined from the corpus at render time (enrich.ts).

    And where the engine says the form determines exactly one विभक्ति, the card
    asks it before the reveal — recall of the grammar, not only of the gloss.
    Same fairness rule as the reader's quiz: a form that is two cases is asked
    nothing, because marking either answer wrong would contradict the language.
    The guess does not touch the SRS verdict — knew/missed stays about the
    word — it is practice, settled visually on reveal.
  */
  let identReady = $state(false);
  onMount(() => { loadIdentities().then(() => (identReady = true)); });
  let picked = $state<string | null>(null);
  const question = $derived.by(() =>
    identReady && word && !revealed ? cellQuestion(word.display) : null
  );
  const identity = $derived.by(() => (identReady && word ? identify(word.display) : null));

  const query = $derived(($page.url.searchParams.get('q') ?? '').toLowerCase());
  const fromNum = $derived(parseInt($page.url.searchParams.get('from') ?? '0', 10));
  const toNum = $derived(parseInt($page.url.searchParams.get('to') ?? '999', 10));

  const inRange = $derived.by(() => {
    if (!browser) return [] as WordEntry[];
    return $wordBank.words.filter((w) => {
      if (w.lessonNum < fromNum || w.lessonNum > toNum) return false;
      if (!query) return true;
      return (
        w.iast?.toLowerCase().includes(query) ||
        w.display?.toLowerCase().includes(query) ||
        w.gloss?.toLowerCase().includes(query) ||
        w.englishGloss?.toLowerCase().includes(query)
      );
    });
  });

  const dueWords = $derived.by(() => {
    const today = new Date().toISOString().slice(0, 10);
    return inRange.filter((w) => w.dueDate === null || w.dueDate <= today);
  });

  type Mode = 'due' | 'all';
  let mode: Mode = $state('due');
  const sessionWords = $derived(mode === 'due' ? dueWords : inRange);

  let sessionStarted = $state(false);
  let queue: WordEntry[] = $state([]);
  let current = $state(0);
  let revealed = $state(false);
  let knew = $state(0);
  let missed = $state(0);

  function startSession() {
    queue = [...sessionWords].sort(() => Math.random() - 0.5);
    current = 0;
    revealed = false;
    picked = null;
    knew = 0;
    missed = 0;
    sessionStarted = true;
  }

  function answer(didKnow: boolean) {
    if (!queue[current]) return;
    wordBank.recordReview(queue[current].id, didKnow);
    if (didKnow) knew++;
    else missed++;
    current++;
    revealed = false;
  }

  const word = $derived(queue[current]);
  const done = $derived(sessionStarted && current >= queue.length);

  // ⌘-nothing: the whole session is space, ← and →.
  function onkey(e: KeyboardEvent) {
    const t = e.target as HTMLElement;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (!sessionStarted) {
      if (e.key === 'Enter' && sessionWords.length) {
        e.preventDefault();
        startSession();
      }
      return;
    }
    if (done) return;
    if (e.key === ' ') {
      e.preventDefault();
      revealed = true;
    } else if (revealed && e.key === 'ArrowLeft') {
      e.preventDefault();
      answer(false);
    } else if (revealed && e.key === 'ArrowRight') {
      e.preventDefault();
      answer(true);
    }
  }

  onMount(() => {
    window.addEventListener('keydown', onkey);
    return () => window.removeEventListener('keydown', onkey);
  });
</script>

<svelte:head>
  <title>review | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  <a class="back" href="/words">‹ the deck</a>
  {#if !sessionStarted}
    <Segmented
      options={[
        { id: 'due', label: `due ${dueWords.length}` },
        { id: 'all', label: `all ${inRange.length}` }
      ]}
      value={mode}
      onchange={(id) => (mode = id as Mode)}
      ariaLabel="session range"
    />
    {#if query}<span class="quiet">filtered by “{query}”</span>{/if}
  {:else if !done}
    <span class="quiet">space reveals · ← missed · → knew</span>
  {/if}
{/snippet}

{#snippet shelfRight()}
  {#if sessionStarted && !done}
    <span>{current + 1} / {queue.length} · {knew} knew · {missed} missed</span>
  {:else if sessionStarted}
    <span>{knew} knew · {missed} missed</span>
  {/if}
{/snippet}

<Shelf
  left={shelfLeft}
  right={shelfRight}
  progress={sessionStarted && queue.length ? (current / queue.length) * 100 : null}
/>

<Shell columnMax="640px">
  {#if !sessionStarted}
    <header class="head">
      <h1>review</h1>
      <p>
        {#if query}
          The {inRange.length} word{inRange.length === 1 ? '' : 's'} matching “{query}”.
        {:else}
          Spaced review over the words you have kept.
        {/if}
      </p>
    </header>

    {#if sessionWords.length === 0}
      <p class="empty">
        {mode === 'due'
          ? 'Nothing due — check back later, or switch to all.'
          : 'No words in this range yet. Keep some from a lesson or from the reader.'}
      </p>
    {:else}
      <button class="start" onclick={startSession}>
        start · {sessionWords.length} word{sessionWords.length === 1 ? '' : 's'}
      </button>
    {/if}
  {:else if done}
    <div class="summary">
      <span class="tick">✓</span>
      <h2>done</h2>
      <p>{knew} knew · {missed} missed</p>
      <div class="again">
        <button onclick={startSession}>review again</button>
        <a href="/words">back to the deck</a>
      </div>
    </div>
  {:else if word}
    <div class="card">
      <span class="face"><Sanskrit text={word.display} source="telugu" /></span>
      {#if word.iast}<span class="iast">{word.iast}</span>{/if}
      <span class="from">
        {word.lessonNum ? `lesson ${word.lessonNum}` : word.lessonId.replace('reader:', 'reader · ')}
      </span>

      {#if revealed}
        <div class="back-face">
          <span class="gloss">{lang === 'telugu' ? word.gloss : word.englishGloss}</span>
          {#if word.tag}<span class="tag">{word.tag}</span>{/if}
          {#if identity}
            <div class="ident-row">
              {#if identity.linga}
                <span class="ident"><Sanskrit text={identity.linga} source="devanagari" /></span>
              {/if}
              {#if identity.vibhaktis.length === 1}
                <span class="ident" class:right={picked === identity.vibhaktis[0]} class:wrong={picked !== null && picked !== identity.vibhaktis[0]}>
                  <Sanskrit text={identity.cells?.length === 1 ? `${identity.cells[0][0]} ${identity.cells[0][1]}` : identity.vibhaktis[0]} source="devanagari" />
                </span>
              {/if}
              {#if sourceLink(word.lessonId)}
                <a class="ident-src" href={sourceLink(word.lessonId)!.href}>{sourceLink(word.lessonId)!.label} →</a>
              {/if}
            </div>
          {/if}
          <div class="verdicts">
            <button class="missed" onclick={() => answer(false)}>← missed</button>
            <button class="knew" onclick={() => answer(true)}>knew it →</button>
          </div>
        </div>
      {:else}
        {#if question}
          <div class="ask">
            <span class="ask-q">which <Sanskrit text="विभक्ति" source="devanagari" />?</span>
            <div class="ask-opts">
              {#each question.options as o (o)}
                <button class="opt" class:picked={picked === o} onclick={() => (picked = o)}>
                  <Sanskrit text={o} source="devanagari" />
                </button>
              {/each}
            </div>
          </div>
        {/if}
        <button class="reveal" onclick={() => (revealed = true)}>reveal</button>
      {/if}
    </div>
  {/if}
</Shell>

<style>
  .quiet {
    color: var(--faint);
  }
  .back {
    color: var(--quiet);
    text-decoration: none;
  }
  .back:hover {
    color: var(--ink);
  }

  .head {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .head h1 {
    margin: 0;
    font-size: 27px;
    font-weight: 600;
  }
  .head p {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
    font-style: italic;
  }

  .empty {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
  }
  .start {
    font-family: var(--font-mono);
    font-size: 12px;
    background: transparent;
    border: 1px solid var(--accent);
    border-radius: var(--radius);
    color: var(--accent);
    padding: 9px 14px;
    cursor: pointer;
    align-self: flex-start;
  }

  /* One card, hairlines, no shadow — the deck row's material, enlarged. */
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 48px 24px 24px;
    text-align: center;
  }
  .face {
    font-family: var(--font-deva);
    font-size: 34px;
  }
  .iast {
    font-size: 15px;
    color: var(--muted);
    font-style: italic;
  }
  .from {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--faint);
    padding-bottom: 18px;
  }

  .reveal {
    font-family: var(--font-mono);
    font-size: 12px;
    background: var(--sunken);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    color: var(--muted);
    padding: 8px 22px;
    cursor: pointer;
  }
  .reveal:hover {
    color: var(--ink);
  }

  .back-face {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    border-top: 1px solid var(--rule);
    padding-top: 20px;
  }
  .gloss {
    font-size: 18px;
    color: var(--ink);
  }
  .tag {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .verdicts {
    display: flex;
    gap: 10px;
    padding-top: 10px;
  }
  .verdicts button {
    font-family: var(--font-mono);
    font-size: 12px;
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 8px 16px;
    cursor: pointer;
  }
  .missed {
    color: var(--ink);
  }
  .missed:hover {
    border-color: var(--ink);
  }
  .knew {
    color: var(--accent-ok);
  }
  .knew:hover {
    border-color: var(--accent-ok);
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 64px 0;
    text-align: center;
  }
  .tick {
    font-size: 30px;
    color: var(--accent-ok);
  }
  .summary h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
  }
  .summary p {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--muted);
  }
  .again {
    display: flex;
    gap: 12px;
    padding-top: 12px;
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .again button,
  .again a {
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--ink);
    font: inherit;
    padding: 6px 14px;
    cursor: pointer;
    text-decoration: none;
  }

  /* The corpus's identity for the form — the same join the deck rows use. */
  .ident-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .ident {
    padding: 1px 7px;
    font-size: 12px;
    color: var(--ink-2, #666);
    border: 1px solid var(--rule-2);
    border-radius: 9px;
  }
  .ident.right { border-color: var(--done, #2a7); color: var(--done, #2a7); }
  .ident.wrong { border-color: #b55; color: #b55; }
  .ident-src {
    font-size: 12px;
    color: var(--quiet);
    text-decoration: none;
  }
  .ident-src:hover { color: var(--ink); }
  .ask { display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .ask-q { font-size: 13px; color: var(--quiet); }
  .ask-opts { display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; }
  .opt {
    padding: 3px 10px;
    font-size: 13px;
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--rule-2);
    border-radius: 9px;
    cursor: pointer;
  }
  .opt.picked { border-color: var(--ink); }
</style>
