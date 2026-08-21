<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { replaceState } from '$app/navigation';
  import { wordBank, type WordEntry } from '$lib/stores/wordBank';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Segmented from '$lib/components/ui/Segmented.svelte';
  import { lessonLanguage } from '$lib/stores/preferences';
  import type { LessonLanguage } from '$lib/stores/preferences';

  /*
    One deck, two views of it. /words is the deck; /review is a session
    launched from it, which is why "start review" sits on this shelf and takes
    whatever is filtered here as its range — the two range sliders the review
    page used to open with are gone.
  */
  let lang: LessonLanguage = $state('english');
  lessonLanguage.subscribe((v) => {
    lang = v;
  });

  const allWords = $derived(browser ? $wordBank.words : ([] as WordEntry[]));

  // Group by lesson
  type LessonGroup = { lessonId: string; lessonNum: number; words: WordEntry[] };
  let groups = $derived.by<LessonGroup[]>(() => {
    const map = new Map<string, LessonGroup>();
    for (const w of filtered) {
      if (!map.has(w.lessonId)) {
        map.set(w.lessonId, { lessonId: w.lessonId, lessonNum: w.lessonNum, words: [] });
      }
      map.get(w.lessonId)!.words.push(w);
    }
    return Array.from(map.values()).sort((a, b) => a.lessonNum - b.lessonNum);
  });

  let query = $state($page.url.searchParams.get('q') ?? '');
  let filtered = $derived.by(() => {
    if (!query.trim()) return allWords;
    const q = query.toLowerCase();
    return allWords.filter(
      (w) =>
        w.iast?.toLowerCase().includes(q) ||
        w.display?.toLowerCase().includes(q) ||
        w.gloss?.toLowerCase().includes(q) ||
        w.englishGloss?.toLowerCase().includes(q)
    );
  });

  // The query lives in the URL so the review session can inherit it.
  $effect(() => {
    if (!browser) return;
    const url = new URL($page.url);
    if (query.trim()) url.searchParams.set('q', query.trim());
    else url.searchParams.delete('q');
    if (url.href !== $page.url.href) replaceState(url, {});
  });

  const due = $derived.by(() => {
    const today = new Date().toISOString().slice(0, 10);
    return filtered.filter((w) => w.dueDate === null || w.dueDate <= today);
  });

  let viewMode: 'list' | 'by-lesson' = $state('list');

  const reviewHref = $derived(query.trim() ? `/review?q=${encodeURIComponent(query.trim())}` : '/review');

  // Monier-Williams, through Ambuda.
  function ambudaUrl(w: WordEntry): string | null {
    if (!w.iast) return null;
    const stem = w.iast.replace(/[ḥṃ]$/, '').split(' ')[0];
    return `https://ambuda.org/tools/dictionaries/mw/${encodeURIComponent(stem)}`;
  }

  function lessonLabel(lessonId: string): string {
    const m = lessonId.match(/balabodhini-(\d+)-(\d+)/);
    if (m) return `${m[1]}.${parseInt(m[2])}`;
    const r = lessonId.match(/^reader:(.+)$/);
    if (r) return r[1];
    return lessonId;
  }

  function lessonHref(lessonId: string): string {
    const r = lessonId.match(/^reader:(.+)$/);
    return r ? `/reader?reading=${r[1]}` : `/workbook/${lessonId}`;
  }
</script>

<svelte:head>
  <title>words | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  <Segmented
    options={[
      { id: 'list', label: 'list' },
      { id: 'by-lesson', label: 'by lesson' }
    ]}
    value={viewMode}
    onchange={(id) => (viewMode = id as 'list' | 'by-lesson')}
    ariaLabel="view"
  />
  <input
    class="find"
    type="search"
    placeholder="find a word"
    bind:value={query}
    aria-label="find a word"
  />
  <span class="quiet">due {due.length}</span>
{/snippet}

{#snippet shelfRight()}
  {#if due.length}
    <a class="start" href={reviewHref}>start review ›</a>
  {:else}
    <span>{filtered.length} in the deck</span>
  {/if}
{/snippet}

<Shelf left={shelfLeft} right={shelfRight} />

<Shell columnMax="900px">
  <header class="head">
    <h1>words</h1>
    <p>Everything you have kept — from a lesson's vocabulary or from the reader's rail.</p>
  </header>

  {#if allWords.length === 0}
    <p class="empty">
      Nothing kept yet. Work through a <a href="/workbook">lesson</a> or tap a word in the
      <a href="/reader">reader</a> and keep it for review.
    </p>
  {:else if viewMode === 'list'}
    <div class="deck">
      <div class="deck-head">
        <span>word</span>
        <span>gloss</span>
        <span>lesson</span>
        <span></span>
      </div>
      {#each filtered as w (w.id)}
        <div class="row">
          <span class="word">
            <Sanskrit text={w.display} source="telugu" />
            {#if w.iast}<span class="iast">{w.iast}</span>{/if}
          </span>
          <span class="gloss">
            {lang === 'telugu' ? w.gloss : w.englishGloss}
            {#if w.tag}<span class="tag">{w.tag}</span>{/if}
          </span>
          <a class="lesson" href={lessonHref(w.lessonId)}>{lessonLabel(w.lessonId)}</a>
          <span class="dict">
            {#if ambudaUrl(w)}
              <a href={ambudaUrl(w)!} target="_blank" rel="noopener" title="Monier-Williams">MW</a>
            {/if}
          </span>
        </div>
      {/each}
      {#if filtered.length === 0}
        <p class="empty">no matches</p>
      {/if}
    </div>
  {:else}
    {#each groups as g (g.lessonId)}
      <section class="group">
        <div class="group-head">
          <a href={lessonHref(g.lessonId)}>{lessonLabel(g.lessonId)}</a>
          <span class="quiet">{g.words.length}</span>
        </div>
        {#each g.words as w (w.id)}
          <div class="row">
            <span class="word">
              <Sanskrit text={w.display} source="telugu" />
              {#if w.iast}<span class="iast">{w.iast}</span>{/if}
            </span>
            <span class="gloss">
              {lang === 'telugu' ? w.gloss : w.englishGloss}
              {#if w.tag}<span class="tag">{w.tag}</span>{/if}
            </span>
            <span class="lesson"></span>
            <span class="dict">
              {#if ambudaUrl(w)}
                <a href={ambudaUrl(w)!} target="_blank" rel="noopener" title="Monier-Williams">MW</a>
              {/if}
            </span>
          </div>
        {/each}
      </section>
    {/each}
  {/if}

  {#if allWords.length}
    <p class="foot">{allWords.length} word{allWords.length === 1 ? '' : 's'} kept</p>
  {/if}
</Shell>

<style>
  .quiet {
    color: var(--faint);
  }
  .find {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 3px 8px;
    width: 150px;
    outline: none;
  }
  .find:focus {
    border-color: var(--accent);
  }
  .find::placeholder {
    color: var(--faint);
  }
  .start {
    color: var(--accent);
    text-decoration: none;
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

  .deck,
  .group {
    display: flex;
    flex-direction: column;
  }
  .deck-head {
    display: grid;
    grid-template-columns: minmax(7rem, 2fr) minmax(0, 3fr) 5rem 2.5rem;
    gap: 14px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--faint);
    padding-bottom: 6px;
  }
  .group-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    border-bottom: 1px solid var(--rule-2);
    padding-bottom: 6px;
    margin-top: 8px;
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .group-head a {
    color: var(--ink);
    text-decoration: none;
  }
  .group-head a:hover {
    color: var(--accent);
  }

  .row {
    display: grid;
    grid-template-columns: minmax(7rem, 2fr) minmax(0, 3fr) 5rem 2.5rem;
    gap: 14px;
    align-items: baseline;
    padding: 10px 0;
    border-top: 1px solid var(--rule);
  }
  .word {
    font-family: var(--font-deva);
    font-size: 17px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .iast {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .gloss {
    font-size: 15px;
    color: var(--muted);
    min-width: 0;
  }
  .tag {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
    padding-left: 6px;
  }
  .lesson,
  .dict a {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
    text-decoration: none;
  }
  .lesson:hover,
  .dict a:hover {
    color: var(--accent);
  }
  .dict a {
    color: var(--accent);
  }

  .empty {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
  }
  .empty a {
    color: var(--accent);
  }
  .foot {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--faint);
  }

  @media (max-width: 640px) {
    .deck-head {
      display: none;
    }
    .row {
      grid-template-columns: minmax(0, 1fr) 2.5rem;
    }
    .gloss {
      grid-column: 1 / -1;
    }
    .lesson {
      display: none;
    }
  }
</style>
