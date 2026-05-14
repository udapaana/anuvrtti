<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { displayScript, lessonLanguage } from '$lib/stores/preferences';
  import type { LessonLanguage } from '$lib/stores/preferences';

  let lang: LessonLanguage = $state('english');
  lessonLanguage.subscribe(v => { lang = v; });

  interface Sentence {
    id: string;
    sanskrit: string;
    english: string;
    telugu?: string;
  }

  const SENTENCES: Sentence[] = [
    { id: 'balabodhini-1-01', sanskrit: 'అహం తత్ర అస్మి.', english: 'I am there.' },
    { id: 'balabodhini-1-01', sanskrit: 'త్వం కుత్ర అసి?', english: 'Where are you?' },
    { id: 'balabodhini-1-01', sanskrit: 'సః తత్ర అస్తి', english: 'He is there.' },
    { id: 'balabodhini-1-01', sanskrit: 'సః కుత్ర అస్తి?', english: 'Where is he?' },
    { id: 'balabodhini-1-02', sanskrit: 'తే ఇదానీం కుత్ర సంతి?', english: 'Where are they now?' },
    { id: 'balabodhini-1-02', sanskrit: 'వయం తదా అత్ర స్మః', english: 'We are here at that time.' },
    { id: 'balabodhini-1-02', sanskrit: 'అహం ఇదానీం అత్రాస్మి', english: 'I am here now.' },
    { id: 'balabodhini-1-03', sanskrit: 'సః తదా అత్ర నాసీత్', english: 'He was not here then.' },
    { id: 'balabodhini-1-03', sanskrit: 'అహం తత్రాసం', english: 'I was there.' },
    { id: 'balabodhini-1-03', sanskrit: 'వయం తత్ర న స్మః', english: 'We are not there.' },
    { id: 'balabodhini-1-03', sanskrit: 'తే తత్ర న సంతి', english: 'They are not there.' },
    { id: 'balabodhini-1-03', sanskrit: 'సర్వః తత్రాస్తి', english: 'Everyone is there.' },
    { id: 'balabodhini-1-04', sanskrit: 'తే ఏకదా తత్రాసన్', english: 'They were there once.' },
    { id: 'balabodhini-1-04', sanskrit: 'తత్ర కే ఆసన్?', english: 'Who were there?' },
    { id: 'balabodhini-1-04', sanskrit: 'వయం అద్య తత్ర స్మః', english: 'We are there today.' },
    { id: 'balabodhini-1-06', sanskrit: 'వయం అద్య ప్రభృతి తత్ర స్మః', english: 'We are there from today.' },
    { id: 'balabodhini-1-06', sanskrit: 'హ్యః అహం తత్రాసం', english: 'Yesterday I was there.' },
    { id: 'balabodhini-1-08', sanskrit: 'తే గచ్ఛంతి', english: 'They go.' },
    { id: 'balabodhini-1-08', sanskrit: 'అహం గచ్ఛామి', english: 'I go.' },
    { id: 'balabodhini-1-09', sanskrit: 'సః పఠతి', english: 'He reads.' },
    { id: 'balabodhini-1-09', sanskrit: 'వయం పఠామః', english: 'We read.' },
    { id: 'balabodhini-1-10', sanskrit: 'సః గురుం పశ్యతి', english: 'He sees the teacher.' },
    { id: 'balabodhini-1-10', sanskrit: 'అహం శిష్యం పశ్యామి', english: 'I see the student.' },
  ];

  type Phase = 'idle' | 'playing' | 'done';
  let phase: Phase = $state('idle');
  let queue: Sentence[] = $state([]);
  let qi = $state(0);
  let correct = $state(0);
  let total = $state(0);

  let tiles: { word: string; id: number }[] = $state([]);
  let built: { word: string; id: number }[] = $state([]);
  let result: 'correct' | 'wrong' | null = $state(null);

  const current = $derived(queue[qi] ?? null);

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startSession() {
    queue = shuffle([...SENTENCES]).slice(0, 10);
    qi = 0;
    correct = 0;
    total = 0;
    phase = 'playing';
    resetTiles();
  }

  function resetTiles() {
    result = null;
    built = [];
    if (!queue[qi]) return;
    const words = queue[qi].sanskrit.split(/\s+/).filter(Boolean);
    tiles = shuffle(words.map((w, i) => ({ word: w, id: i })));
  }

  $effect(() => {
    // When qi changes inside a playing session, reset tiles for new sentence
    if (phase === 'playing') {
      result = null;
      built = [];
      const words = (queue[qi]?.sanskrit ?? '').split(/\s+/).filter(Boolean);
      tiles = shuffle(words.map((w, i) => ({ word: w, id: i })));
    }
  });

  function pickTile(idx: number) {
    if (result) return;
    const tile = tiles[idx];
    built = [...built, tile];
    tiles = tiles.filter((_, i) => i !== idx);
  }

  function removePlaced(idx: number) {
    if (result) return;
    const tile = built[idx];
    tiles = [...tiles, tile];
    built = built.filter((_, i) => i !== idx);
  }

  function check() {
    if (!current || result) return;
    const answer = built.map(t => t.word).join(' ');
    const expected = current.sanskrit.trim();
    const norm = (s: string) => s.replace(/[.?!।\s]+$/, '').trim();
    result = norm(answer) === norm(expected) ? 'correct' : 'wrong';
    total++;
    if (result === 'correct') correct++;
  }

  function next() {
    if (qi + 1 >= queue.length) {
      phase = 'done';
    } else {
      qi++;
    }
  }

  function handleKey(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if (result) next();
      else if (built.length > 0) check();
    }
  }
</script>

<svelte:head>
  <title>Build | anuvrtti</title>
</svelte:head>

<svelte:window onkeydown={handleKey} />

<article class="page">
  <a href="/" class="back-link">← home</a>
  <p class="eyebrow">vākya-nirmāṇa · sentence building</p>
  <h1 class="title">build</h1>

  {#if phase === 'idle'}
    <div class="start-area">
      <p class="start-desc">
        Arrange Sanskrit words into the correct order. Ten sentences drawn from Bālabodhinī readings.
      </p>
      <button class="start-btn" onclick={startSession}>start →</button>
      <p class="hint">press Enter to check / advance</p>
    </div>

  {:else if phase === 'done'}
    <div class="done-area">
      <p class="done-score">{correct} / {total}</p>
      <p class="done-label">{correct === total ? 'perfect' : correct >= total * 0.7 ? 'good' : 'keep practicing'}</p>
      <div class="done-actions">
        <button class="start-btn" onclick={startSession}>again →</button>
        <a href="/learn" class="done-link">lessons →</a>
      </div>
    </div>

  {:else if current}
    <!-- Progress -->
    <div class="progress-bar-wrap">
      <div class="progress-bar" style="width: {(qi / queue.length) * 100}%"></div>
    </div>
    <div class="progress-label">
      <span>{qi + 1} / {queue.length}</span>
      <span>{correct} correct</span>
    </div>

    <!-- Prompt -->
    <div class="prompt-area" class:result-correct={result === 'correct'} class:result-wrong={result === 'wrong'}>
      <p class="prompt-text">{current.english}</p>
    </div>

    <!-- Answer zone — user's assembled sentence -->
    <div class="answer-zone" class:has-result={result !== null}>
      {#if built.length === 0}
        <span class="answer-placeholder">tap words below to build the sentence</span>
      {:else}
        {#each built as tile, idx (tile.id)}
          <button
            class="tile tile-placed"
            class:disabled={result !== null}
            onclick={() => removePlaced(idx)}
          >
            <Sanskrit text={tile.word} source="telugu" />
          </button>
        {/each}
      {/if}
    </div>

    <!-- Result feedback -->
    {#if result === 'correct'}
      <p class="feedback correct">✓ correct</p>
    {:else if result === 'wrong'}
      <p class="feedback wrong">
        correct order:
        <span class="correct-answer font-{$displayScript}">
          <Sanskrit text={current.sanskrit} source="telugu" />
        </span>
      </p>
    {/if}

    <!-- Word bank tiles -->
    <div class="tile-bank">
      {#each tiles as tile, idx (tile.id)}
        <button
          class="tile tile-bank-item"
          class:disabled={result !== null}
          onclick={() => pickTile(idx)}
        >
          <Sanskrit text={tile.word} source="telugu" />
        </button>
      {:else}
        {#if result === null}
          <span class="bank-empty">—</span>
        {/if}
      {/each}
    </div>

    <!-- Actions -->
    <div class="actions">
      {#if result === null}
        <button
          class="action-btn check-btn"
          disabled={built.length === 0}
          onclick={check}
        >check</button>
        <button
          class="action-btn clear-btn"
          disabled={built.length === 0}
          onclick={() => { tiles = [...tiles, ...built]; built = []; }}
        >clear</button>
      {:else}
        <button class="action-btn next-btn" onclick={next}>
          {qi + 1 >= queue.length ? 'finish' : 'next →'}
        </button>
      {/if}
    </div>

    <p class="lesson-ref">
      from <a href="/learn/{current.id}" class="lesson-link">{current.id.replace('balabodhini-', 'bālabodhinī ').replace('-', '.')}</a>
    </p>
  {/if}
</article>

<style>
  .page {
    max-width: 36rem;
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
    margin: 0.4rem 0 1.75rem;
  }

  /* Idle */
  .start-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .start-desc {
    font-size: 0.88rem;
    color: #475569;
    line-height: 1.6;
    max-width: 26rem;
    margin: 0;
  }

  .start-btn {
    align-self: flex-start;
    background: none;
    border: none;
    font-family: ui-monospace, monospace;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    color: #f97316;
    cursor: pointer;
    padding: 0;
    transition: color 0.15s;
  }
  .start-btn:hover { color: #0f1419; }

  .hint {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    letter-spacing: 0.04em;
    color: #cbd5e1;
    margin: 0;
  }

  /* Done */
  .done-area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .done-score {
    font-size: 2.5rem;
    font-weight: 300;
    color: #0f1419;
    margin: 0;
    line-height: 1;
  }

  .done-label {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    margin: 0 0 1rem;
  }

  .done-actions {
    display: flex;
    gap: 1.5rem;
    align-items: baseline;
  }

  .done-link {
    font-family: ui-monospace, monospace;
    font-size: 0.75rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.15s;
  }
  .done-link:hover { color: #0f1419; }

  /* Progress */
  .progress-bar-wrap {
    height: 2px;
    background: #f1f5f9;
    margin-bottom: 0.4rem;
  }

  .progress-bar {
    height: 100%;
    background: #f97316;
    transition: width 0.3s;
  }

  .progress-label {
    display: flex;
    justify-content: space-between;
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    letter-spacing: 0.04em;
    color: #cbd5e1;
    margin-bottom: 1.5rem;
  }

  /* Prompt */
  .prompt-area {
    padding: 1rem 0;
    margin-bottom: 1rem;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
    transition: border-color 0.2s;
  }

  .prompt-area.result-correct { border-color: #059669; }
  .prompt-area.result-wrong   { border-color: #e11d48; }

  .prompt-text {
    font-family: 'Crimson Pro', serif;
    font-style: italic;
    font-size: 1.3rem;
    color: #0f1419;
    margin: 0;
    line-height: 1.4;
  }

  /* Answer zone */
  .answer-zone {
    min-height: 3rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 0;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #e2e8f0;
    transition: border-color 0.2s;
  }

  .answer-zone.has-result { border-bottom-color: transparent; }

  .answer-placeholder {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #cbd5e1;
  }

  /* Tiles */
  .tile {
    background: none;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    padding: 0.35rem 0.65rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: border-color 0.12s, background 0.12s;
    line-height: 1.3;
  }

  .tile:hover:not(.disabled) {
    border-color: #94a3b8;
    background: #f8fafc;
  }

  .tile.disabled {
    cursor: default;
    opacity: 0.7;
  }

  .tile-placed {
    border-color: #0f1419;
  }

  .tile-placed:hover:not(.disabled) {
    border-color: #e11d48;
    background: #fff5f5;
  }

  .tile-bank-item {
    border-color: #e2e8f0;
    color: #475569;
  }

  /* Feedback */
  .feedback {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    margin: 0.5rem 0;
  }

  .feedback.correct { color: #059669; }
  .feedback.wrong   { color: #e11d48; display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap; }

  .correct-answer {
    font-family: inherit;
    font-size: 1rem;
    color: #0f1419;
    letter-spacing: 0;
  }

  /* Word bank */
  .tile-bank {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    min-height: 3rem;
    padding: 0.75rem 0;
    margin-top: 0.5rem;
  }

  .bank-empty {
    font-family: ui-monospace, monospace;
    font-size: 0.75rem;
    color: #e2e8f0;
  }

  /* Actions */
  .actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
  }

  .action-btn {
    background: none;
    border: none;
    font-family: ui-monospace, monospace;
    font-size: 0.72rem;
    letter-spacing: 0.04em;
    cursor: pointer;
    padding: 0;
    transition: color 0.15s;
  }

  .check-btn { color: #f97316; }
  .check-btn:hover:not(:disabled) { color: #0f1419; }
  .check-btn:disabled { color: #e2e8f0; cursor: default; }

  .clear-btn { color: #94a3b8; }
  .clear-btn:hover:not(:disabled) { color: #0f1419; }
  .clear-btn:disabled { color: #e2e8f0; cursor: default; }

  .next-btn { color: #f97316; }
  .next-btn:hover { color: #0f1419; }

  /* Lesson ref */
  .lesson-ref {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    letter-spacing: 0.04em;
    color: #cbd5e1;
    margin-top: 2rem;
  }

  .lesson-link {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.15s;
  }
  .lesson-link:hover { color: #f97316; }
</style>
