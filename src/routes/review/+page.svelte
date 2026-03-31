<script lang="ts">
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { wordBank, type WordEntry } from '$lib/stores/wordBank';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { lessonLanguage, displayScript } from '$lib/stores/preferences';
  import type { LessonLanguage } from '$lib/stores/preferences';

  // Range params from URL
  let fromNum = $derived(parseInt($page.url.searchParams.get('from') ?? '0', 10));
  let toNum = $derived(parseInt($page.url.searchParams.get('to') ?? '999', 10));

  // Range controls (local, adjustable)
  let rangeFrom = $state(0);
  let rangeTo = $state(0);
  let maxLesson = $state(0);
  let lang: LessonLanguage = $state('english');
  lessonLanguage.subscribe(v => { lang = v; });

  // Initialize range from URL params once
  $effect(() => {
    rangeFrom = fromNum;
    rangeTo = toNum;
    maxLesson = wordBank.getMaxLesson();
  });

  // All words in range
  let allWords = $derived.by(() => {
    if (!browser) return [];
    let state: any;
    wordBank.subscribe(s => { state = s; })();
    return (state?.words ?? []).filter((w: WordEntry) => w.lessonNum >= rangeFrom && w.lessonNum <= rangeTo);
  });

  // Due words in range
  let dueWords = $derived.by(() => {
    const today = new Date().toISOString().slice(0, 10);
    return allWords.filter((w: WordEntry) => w.dueDate === null || w.dueDate <= today);
  });

  // Session state
  type Mode = 'due' | 'all';
  let mode: Mode = $state('due');
  let sessionWords = $derived(mode === 'due' ? dueWords : allWords);

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
    knew = 0;
    missed = 0;
    sessionStarted = true;
  }

  function answer(didKnow: boolean) {
    wordBank.recordReview(queue[current].id, didKnow);
    if (didKnow) knew++; else missed++;
    current++;
    revealed = false;
  }

  const word = $derived(queue[current]);
  const done = $derived(sessionStarted && current >= queue.length);
</script>

<svelte:head>
  <title>Review | anuvrtti</title>
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">

  {#if !sessionStarted}
    <!-- Setup screen -->
    <h1 class="text-2xl font-semibold text-stone-800 mb-6">Vocabulary Review</h1>

    <!-- Range controls -->
    <div class="bg-white rounded-xl border border-stone-200 p-5 mb-4 space-y-4">
      <div class="flex items-center gap-4">
        <label class="text-sm text-stone-600 w-16">From</label>
        <input type="range" min="0" max={maxLesson} bind:value={rangeFrom}
          class="flex-1 accent-indigo-500" />
        <span class="text-sm font-medium text-stone-700 w-8 text-right">{rangeFrom}</span>
      </div>
      <div class="flex items-center gap-4">
        <label class="text-sm text-stone-600 w-16">To</label>
        <input type="range" min="0" max={maxLesson} bind:value={rangeTo}
          class="flex-1 accent-indigo-500" />
        <span class="text-sm font-medium text-stone-700 w-8 text-right">{rangeTo}</span>
      </div>
    </div>

    <!-- Mode toggle -->
    <div class="flex rounded-lg border border-stone-200 overflow-hidden mb-6 text-sm">
      <button onclick={() => mode = 'due'}
        class="flex-1 py-2 px-4 transition-colors {mode === 'due' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'bg-white text-stone-500 hover:bg-stone-50'}">
        Due ({dueWords.length})
      </button>
      <button onclick={() => mode = 'all'}
        class="flex-1 py-2 px-4 transition-colors {mode === 'all' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'bg-white text-stone-500 hover:bg-stone-50'}">
        All ({allWords.length})
      </button>
    </div>

    {#if sessionWords.length === 0}
      <p class="text-stone-500 text-sm text-center py-8">
        {mode === 'due' ? 'No words due — check back later or switch to All.' : 'No words in this range yet. Visit some lessons first.'}
      </p>
    {:else}
      <button onclick={startSession}
        class="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
        Start ({sessionWords.length} words)
      </button>
    {/if}

  {:else if done}
    <!-- Summary -->
    <div class="text-center py-16 space-y-4">
      <div class="text-4xl">✓</div>
      <h2 class="text-xl font-semibold text-stone-800">Done</h2>
      <p class="text-stone-500">{knew} knew · {missed} missed</p>
      <div class="flex gap-3 justify-center mt-6">
        <button onclick={startSession}
          class="px-5 py-2 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium hover:bg-indigo-100 transition-colors">
          Review again
        </button>
        <a href="/learn"
          class="px-5 py-2 rounded-lg bg-white border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-50 transition-colors">
          Back to lessons
        </a>
      </div>
    </div>

  {:else}
    <!-- Card -->
    <div class="mb-4 flex items-center justify-between text-xs text-stone-400">
      <span>{current + 1} / {queue.length}</span>
      <span>{knew} knew · {missed} missed</span>
    </div>

    <!-- Progress bar -->
    <div class="h-1 bg-stone-100 rounded-full mb-6 overflow-hidden">
      <div class="h-full bg-indigo-400 rounded-full transition-all"
        style="width: {(current / queue.length) * 100}%"></div>
    </div>

    <div class="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <!-- Front -->
      <div class="p-8 text-center border-b border-stone-100">
        <div class="text-3xl mb-2">
          <Sanskrit text={word.display} source="telugu" />
        </div>
        {#if word.iast}
          <div class="text-sm text-stone-400 font-serif italic">{word.iast}</div>
        {/if}
        <div class="text-xs text-stone-300 mt-3">Lesson {word.lessonNum}</div>
      </div>

      <!-- Back (revealed) -->
      {#if revealed}
        <div class="p-6 text-center space-y-3">
          <div class="text-lg text-stone-700">
            {lang === 'telugu' ? word.gloss : word.englishGloss}
          </div>
          {#if word.tag}
            <div class="text-xs text-stone-400 font-mono">{word.tag}</div>
          {/if}
          <div class="flex gap-3 justify-center mt-5">
            <button onclick={() => answer(false)}
              class="flex-1 max-w-32 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium text-sm hover:bg-red-100 transition-colors">
              Missed
            </button>
            <button onclick={() => answer(true)}
              class="flex-1 max-w-32 py-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 font-medium text-sm hover:bg-teal-100 transition-colors">
              Knew it
            </button>
          </div>
        </div>
      {:else}
        <div class="p-6 text-center">
          <button onclick={() => revealed = true}
            class="px-8 py-2.5 rounded-xl bg-stone-100 text-stone-600 text-sm font-medium hover:bg-stone-200 transition-colors">
            Reveal
          </button>
        </div>
      {/if}
    </div>
  {/if}
</div>
