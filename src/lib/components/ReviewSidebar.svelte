<script lang="ts">
  import { wordBank, type WordEntry } from '$lib/stores/wordBank';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { lessonLanguage } from '$lib/stores/preferences';
  import type { LessonLanguage } from '$lib/stores/preferences';
  import { selectedTerm } from '$lib/stores/jargon';

  const focusTermDeva: Record<string, string> = {
    'laṭ': 'लट्', 'laṅ': 'लङ्', 'loṭ': 'लोट्', 'liṅ': 'लिङ्', 'lṛṭ': 'लृट्',
    'vidhiliṅ': 'विधिलिङ्', 'āśīrliṅ': 'आशीर्लिङ्',
    'p.p.': 'प्र.पु.', 'm.p.': 'म.पु.', 'u.p.': 'उ.पु.',
    'e.v.': 'ए.व.', 'bahu.v.': 'बहु.व.', 'dvi.v.': 'द्वि.व.',
    'prathamā': 'प्रथमा', 'dvitīyā': 'द्वितीया', 'tṛtīyā': 'तृतीया',
    'caturthī': 'चतुर्थी', 'pañcamī': 'पञ्चमी', 'ṣaṣṭhī': 'षष्ठी',
    'saptamī': 'सप्तमी', 'sambodhana': 'सम्बोधन',
    'ekavacana': 'एकवचन', 'bahuvacana': 'बहुवचन', 'dvivacana': 'द्विवचन',
    'subanta': 'सुबन्त', 'tiṅanta': 'तिङन्त', 'avyaya': 'अव्यय', 'nipāta': 'निपात',
    'kṛdanta': 'कृदन्त', 'samāsa': 'समास', 'sandhi': 'सन्धि',
  };

  function parseTag(tag: string): { text: string; deva: string }[] {
    return tag.split(/\s+/).filter(Boolean).map(t => ({
      text: t,
      deva: focusTermDeva[t] ?? ''
    }));
  }

  interface Props {
    lessonNum: number;    // current lesson number
    fromNum?: number;     // range start (default 0)
  }

  let { lessonNum, fromNum = 0 }: Props = $props();

  let lang: LessonLanguage = $state('english');
  lessonLanguage.subscribe(v => { lang = v; });

  // Reactive word list for current range
  let allWords = $derived.by(() => {
    let state: any;
    wordBank.subscribe(s => { state = s; })();
    return (state?.words ?? []).filter((w: WordEntry) =>
      w.lessonNum >= fromNum && w.lessonNum <= lessonNum
    );
  });

  const today = new Date().toISOString().slice(0, 10);
  let dueWords = $derived(allWords.filter((w: WordEntry) => w.dueDate === null || w.dueDate <= today));

  // Session state
  let mode: 'idle' | 'card' | 'revealed' | 'done' = $state('idle');
  let queue: WordEntry[] = $state([]);
  let current = $state(0);
  let knew = $state(0);
  let missed = $state(0);

  // Range controls
  let rangeFrom = $state(0);
  let rangeTo = $derived(lessonNum);
  let showRangeControl = $state(false);

  $effect(() => { rangeFrom = fromNum; });

  let sessionWords = $derived.by(() => {
    let state: any;
    wordBank.subscribe(s => { state = s; })();
    return (state?.words ?? []).filter((w: WordEntry) =>
      w.lessonNum >= rangeFrom && w.lessonNum <= rangeTo &&
      (w.dueDate === null || w.dueDate <= today)
    );
  });

  function start() {
    queue = [...sessionWords].sort(() => Math.random() - 0.5);
    current = 0;
    knew = 0;
    missed = 0;
    mode = 'card';
  }

  function reveal() { mode = 'revealed'; }

  function answer(didKnow: boolean) {
    wordBank.recordReview(queue[current].id, didKnow);
    if (didKnow) knew++; else missed++;
    const next = current + 1;
    if (next >= queue.length) { mode = 'done'; }
    else { current = next; mode = 'card'; }
  }

  const word = $derived(queue[current]);
</script>

<div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
  <div class="px-4 py-3 border-b border-stone-100 flex items-center justify-between">
    <h3 class="text-xs font-medium text-stone-400 uppercase tracking-wide">Review</h3>
    {#if mode === 'idle'}
      <button
        onclick={() => showRangeControl = !showRangeControl}
        class="text-xs text-stone-400 hover:text-stone-600 transition-colors"
        title="Adjust range"
      >lessons {rangeFrom}–{rangeTo}</button>
    {:else if mode !== 'done'}
      <span class="text-xs text-stone-400">{current + 1}/{queue.length}</span>
    {/if}
  </div>

  {#if showRangeControl && mode === 'idle'}
    <div class="px-4 py-3 border-b border-stone-100 space-y-2">
      <div class="flex items-center gap-2 text-xs text-stone-500">
        <span class="w-8">From</span>
        <input type="range" min="0" max={lessonNum} bind:value={rangeFrom}
          class="flex-1 accent-indigo-500 h-1" />
        <span class="w-4 text-right">{rangeFrom}</span>
      </div>
    </div>
  {/if}

  {#if mode === 'idle'}
    <div class="px-4 py-4 text-center space-y-3">
      {#if sessionWords.length === 0}
        <p class="text-xs text-stone-400">
          {allWords.length === 0 ? 'No words yet — visit a lesson.' : 'Nothing due right now.'}
        </p>
      {:else}
        <p class="text-sm text-stone-500">{sessionWords.length} word{sessionWords.length === 1 ? '' : 's'}</p>
        <button
          onclick={start}
          class="w-full py-2 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium hover:bg-indigo-100 transition-colors"
        >Start review</button>
      {/if}
    </div>

  {:else if mode === 'card' || mode === 'revealed'}
    <!-- Progress bar -->
    <div class="h-0.5 bg-stone-100">
      <div class="h-full bg-indigo-400 transition-all" style="width:{(current / queue.length) * 100}%"></div>
    </div>

    <!-- Word -->
    <div class="px-4 py-6 text-center border-b border-stone-100">
      <div class="text-2xl mb-1 font-sanskrit">
        <Sanskrit text={word.display} source="telugu" />
      </div>
      {#if word.iast}
        <div class="text-xs text-stone-400 font-serif italic">{word.iast}</div>
      {/if}
    </div>

    <!-- Answer area -->
    {#if mode === 'card'}
      <div class="px-4 py-4 text-center">
        <button
          onclick={reveal}
          class="px-6 py-1.5 rounded-lg border border-stone-200 text-stone-500 text-sm hover:bg-stone-50 transition-colors"
        >Reveal</button>
      </div>
    {:else}
      <div class="px-4 py-4 text-center space-y-3">
        <div class="text-sm text-stone-700">{lang === 'telugu' ? word.gloss : word.englishGloss}</div>
        {#if word.tag}
          <div class="text-xs flex flex-wrap justify-center gap-x-1 gap-y-0.5">
            {#each parseTag(word.tag) as t, ti}
              {#if ti > 0}<span class="text-stone-300">·</span>{/if}
              {#if t.deva}
                <button class="text-violet-500 hover:text-violet-700 transition-colors" onclick={() => selectedTerm.set(t.deva)}>
                  <Sanskrit text={t.text} source="iast" />
                </button>
              {:else}
                <span class="text-stone-400"><Sanskrit text={t.text} source="iast" /></span>
              {/if}
            {/each}
          </div>
        {/if}
        <div class="flex gap-2 mt-3">
          <button
            onclick={() => answer(false)}
            class="flex-1 py-1.5 rounded-lg border border-stone-200 text-stone-500 text-sm hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
          >Missed</button>
          <button
            onclick={() => answer(true)}
            class="flex-1 py-1.5 rounded-lg border border-stone-200 text-stone-600 text-sm hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors"
          >Knew it</button>
        </div>
      </div>
    {/if}

  {:else if mode === 'done'}
    <div class="px-4 py-6 text-center space-y-2">
      <div class="text-stone-700 text-sm">{knew} knew · {missed} missed</div>
      <button
        onclick={() => mode = 'idle'}
        class="text-xs text-indigo-600 hover:underline"
      >Done</button>
    </div>
  {/if}
</div>
