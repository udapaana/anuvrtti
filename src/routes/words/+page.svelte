<script lang="ts">
  import { browser } from '$app/environment';
  import { wordBank, type WordEntry } from '$lib/stores/wordBank';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { lessonLanguage, displayScript } from '$lib/stores/preferences';
  import type { LessonLanguage } from '$lib/stores/preferences';

  let lang: LessonLanguage = $state('english');
  lessonLanguage.subscribe(v => { lang = v; });

  let allWords = $derived.by(() => {
    if (!browser) return [] as WordEntry[];
    let state: any;
    wordBank.subscribe(s => { state = s; })();
    return (state?.words ?? []) as WordEntry[];
  });

  // Group by lesson
  type LessonGroup = { lessonId: string; lessonNum: number; words: WordEntry[] };
  let groups = $derived.by<LessonGroup[]>(() => {
    const map = new Map<string, LessonGroup>();
    for (const w of allWords) {
      if (!map.has(w.lessonId)) {
        map.set(w.lessonId, { lessonId: w.lessonId, lessonNum: w.lessonNum, words: [] });
      }
      map.get(w.lessonId)!.words.push(w);
    }
    return Array.from(map.values()).sort((a, b) => a.lessonNum - b.lessonNum);
  });

  // Filter
  let query = $state('');
  let filtered = $derived.by(() => {
    if (!query.trim()) return allWords;
    const q = query.toLowerCase();
    return allWords.filter(w =>
      (w.iast?.toLowerCase().includes(q)) ||
      w.display?.toLowerCase().includes(q) ||
      w.gloss?.toLowerCase().includes(q) ||
      w.englishGloss?.toLowerCase().includes(q)
    );
  });

  let viewMode: 'list' | 'by-lesson' = $state('list');

  // Ambuda dictionary link for a word
  function ambudaUrl(w: WordEntry): string | null {
    if (!w.iast) return null;
    // strip trailing punctuation, take first word
    const stem = w.iast.replace(/[ḥṃ]$/, '').split(' ')[0];
    return `https://ambuda.org/tools/dictionaries/mw/${encodeURIComponent(stem)}`;
  }

  // Display lesson label from ID
  function lessonLabel(lessonId: string): string {
    const m = lessonId.match(/balabodhini-(\d+)-(\d+)/);
    if (m) return `${m[1]}.${parseInt(m[2])}`;
    return lessonId;
  }

  function lessonHref(lessonId: string): string {
    return `/learn/${lessonId}`;
  }
</script>

<svelte:head>
  <title>Words | anuvrtti</title>
</svelte:head>

<article class="page">
  <a href="/" class="back-link">← home</a>
  <p class="eyebrow">śabdakośa · vocabulary</p>
  <h1 class="title">words</h1>

  {#if allWords.length === 0}
    <p class="empty">
      No words yet. Work through some <a href="/balabodhini">Bālabodhinī lessons</a> to build your vocabulary.
    </p>
  {:else}
    <div class="controls">
      <input
        class="search"
        type="search"
        placeholder="search…"
        bind:value={query}
        aria-label="search vocabulary"
      />
      <div class="view-toggle">
        <button class="view-btn" class:active={viewMode === 'list'} onclick={() => viewMode = 'list'}>list</button>
        <button class="view-btn" class:active={viewMode === 'by-lesson'} onclick={() => viewMode = 'by-lesson'}>by lesson</button>
      </div>
    </div>

    {#if viewMode === 'list'}
      <div class="word-table">
        <div class="table-head">
          <span>word</span>
          <span>gloss</span>
          <span>lesson</span>
          <span></span>
        </div>
        {#each filtered as w (w.id)}
          <div class="word-row">
            <span class="word-cell">
              <span class="word-main font-{$displayScript}">
                <Sanskrit text={w.display} source="telugu" />
              </span>
              {#if w.iast}
                <span class="word-iast">{w.iast}</span>
              {/if}
            </span>
            <span class="gloss-cell">
              {lang === 'telugu' ? w.gloss : w.englishGloss}
              {#if w.tag}
                <span class="tag">{w.tag}</span>
              {/if}
            </span>
            <span class="lesson-cell">
              <a href={lessonHref(w.lessonId)} class="lesson-link">{lessonLabel(w.lessonId)}</a>
            </span>
            <span class="dict-cell">
              {#if ambudaUrl(w)}
                <a href={ambudaUrl(w)!} target="_blank" rel="noopener" class="dict-link" title="look up in Monier-Williams">MW</a>
              {/if}
            </span>
          </div>
        {/each}
        {#if filtered.length === 0}
          <p class="no-results">no matches</p>
        {/if}
      </div>
    {:else}
      <!-- By-lesson view -->
      {#each groups as g (g.lessonId)}
        <section class="lesson-group">
          <div class="lesson-group-head">
            <a href={lessonHref(g.lessonId)} class="lesson-group-label">
              <Sanskrit text="bālabodhinī" source="iast" /> {lessonLabel(g.lessonId)}
            </a>
            <span class="lesson-group-count">{g.words.length}</span>
          </div>
          <div class="lesson-words">
            {#each g.words as w (w.id)}
              <div class="word-chip">
                <span class="chip-word font-{$displayScript}">
                  <Sanskrit text={w.display} source="telugu" />
                </span>
                {#if w.iast}
                  <span class="chip-iast">{w.iast}</span>
                {/if}
                <span class="chip-gloss">{lang === 'telugu' ? w.gloss : w.englishGloss}</span>
                {#if ambudaUrl(w)}
                  <a href={ambudaUrl(w)!} target="_blank" rel="noopener" class="chip-dict" title="Monier-Williams">MW</a>
                {/if}
              </div>
            {/each}
          </div>
        </section>
      {/each}
    {/if}

    <p class="word-count">{allWords.length} word{allWords.length === 1 ? '' : 's'} accumulated</p>
  {/if}
</article>

<style>
  .page {
    max-width: 44rem;
    margin: 0 auto;
  }

  .back-link {
    display: inline-block;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    text-decoration: none;
    margin-bottom: 0.85rem;
    transition: color 0.15s;
  }
  .back-link:hover { color: #0f1419; }

  .eyebrow {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    margin: 0;
  }

  .title {
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0.4rem 0 1.5rem;
  }

  .empty {
    font-size: 0.9rem;
    color: #94a3b8;
    font-style: italic;
    margin-top: 2rem;
  }
  .empty a {
    color: #4f46e5;
    text-decoration: none;
  }
  .empty a:hover { color: #f97316; }

  .controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
  }

  .search {
    flex: 1;
    min-width: 10rem;
    font-family: ui-monospace, monospace;
    font-size: 0.78rem;
    letter-spacing: 0.02em;
    border: none;
    border-bottom: 1px solid #e2e8f0;
    padding: 0.3rem 0;
    color: #0f1419;
    background: transparent;
    outline: none;
    transition: border-color 0.15s;
  }
  .search:focus { border-bottom-color: #f97316; }
  .search::placeholder { color: #cbd5e1; }

  .view-toggle {
    display: flex;
    gap: 1rem;
  }
  .view-btn {
    background: none;
    border: none;
    padding: 0 0 2px;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: color 0.15s, border-color 0.15s;
  }
  .view-btn:hover { color: #0f1419; }
  .view-btn.active {
    color: #0f1419;
    border-bottom-color: #f97316;
  }

  /* List view table */
  .word-table {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #e2e8f0;
  }

  .table-head {
    display: grid;
    grid-template-columns: 2fr 3fr 1.5fr 2rem;
    gap: 0.75rem;
    padding: 0.45rem 0;
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    letter-spacing: 0.05em;
    color: #94a3b8;
    text-transform: lowercase;
    border-bottom: 1px solid #e2e8f0;
  }

  .word-row {
    display: grid;
    grid-template-columns: 2fr 3fr 1.5fr 2rem;
    gap: 0.75rem;
    align-items: baseline;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f8fafc;
    font-size: 0.88rem;
  }
  .word-row:hover { background: #fafafa; }

  .word-cell {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .word-main {
    font-size: 1rem;
    color: #0f1419;
  }

  .word-iast {
    font-family: 'Crimson Pro', serif;
    font-style: italic;
    font-size: 0.78rem;
    color: #94a3b8;
  }

  .gloss-cell {
    color: #475569;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .tag {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    color: #94a3b8;
    letter-spacing: 0.02em;
  }

  .lesson-cell {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #94a3b8;
  }

  .lesson-link {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.15s;
  }
  .lesson-link:hover { color: #f97316; }

  .dict-cell {
    text-align: right;
  }

  .dict-link {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    letter-spacing: 0.04em;
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.15s;
  }
  .dict-link:hover { color: #4f46e5; }

  .no-results {
    font-family: ui-monospace, monospace;
    font-size: 0.75rem;
    color: #cbd5e1;
    padding: 1.5rem 0;
    text-align: center;
  }

  /* By-lesson view */
  .lesson-group {
    margin-bottom: 1.75rem;
  }

  .lesson-group-head {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    padding: 0.4rem 0;
    border-top: 1px solid #e2e8f0;
    margin-bottom: 0.75rem;
  }

  .lesson-group-label {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #475569;
    text-decoration: none;
    transition: color 0.15s;
  }
  .lesson-group-label:hover { color: #f97316; }

  .lesson-group-count {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    color: #cbd5e1;
  }

  .lesson-words {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .word-chip {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    font-size: 0.88rem;
  }

  .chip-word {
    font-size: 1rem;
    color: #0f1419;
    min-width: 7rem;
  }

  .chip-iast {
    font-family: 'Crimson Pro', serif;
    font-style: italic;
    font-size: 0.82rem;
    color: #94a3b8;
    min-width: 6rem;
  }

  .chip-gloss {
    color: #475569;
    flex: 1;
  }

  .chip-dict {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    letter-spacing: 0.04em;
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.15s;
  }
  .chip-dict:hover { color: #4f46e5; }

  .word-count {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #cbd5e1;
    letter-spacing: 0.04em;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
  }
</style>
