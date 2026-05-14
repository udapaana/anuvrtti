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

<div class="py-1">
  <div class="flex items-baseline justify-between mb-2 pb-2 border-b border-[#e2e8f0]">
    <h3 class="font-mono text-[0.7rem] tracking-wider lowercase text-[#94a3b8]">review</h3>
    {#if mode === 'idle'}
      <button
        onclick={() => showRangeControl = !showRangeControl}
        class="font-mono text-[0.7rem] text-[#cbd5e1] hover:text-[#0f1419] transition-colors"
        title="Adjust range"
      >lessons {rangeFrom}–{rangeTo}</button>
    {:else if mode !== 'done'}
      <span class="font-mono text-[0.7rem] text-[#94a3b8]">{current + 1}/{queue.length}</span>
    {/if}
  </div>

  {#if showRangeControl && mode === 'idle'}
    <div class="py-2 mb-2 border-b border-[#e2e8f0]">
      <div class="flex items-center gap-2 text-xs text-[#94a3b8]">
        <span class="font-mono text-[0.65rem]">from</span>
        <input type="range" min="0" max={lessonNum} bind:value={rangeFrom}
          class="flex-1 accent-[#f97316] h-1" />
        <span class="font-mono text-[0.65rem] w-4 text-right">{rangeFrom}</span>
      </div>
    </div>
  {/if}

  {#if mode === 'idle'}
    <div class="py-3 space-y-2">
      {#if sessionWords.length === 0}
        <p class="text-xs text-[#94a3b8] italic">
          {allWords.length === 0 ? 'no words yet — visit a lesson' : 'nothing due right now'}
        </p>
      {:else}
        <p class="text-sm text-[#475569]">{sessionWords.length} word{sessionWords.length === 1 ? '' : 's'}</p>
        <button
          onclick={start}
          class="font-serif italic text-[#4f46e5] text-sm hover:text-[#f97316] transition-colors border-b border-[#4f46e5] hover:border-[#f97316] pb-px"
        >start review →</button>
      {/if}
    </div>

  {:else if mode === 'card' || mode === 'revealed'}
    <div class="h-0.5 bg-[#e2e8f0] -mx-1">
      <div class="h-full bg-[#f97316] transition-all" style="width:{(current / queue.length) * 100}%"></div>
    </div>

    <div class="py-5 text-center">
      <div class="text-2xl mb-1 font-sanskrit">
        <Sanskrit text={word.display} source="telugu" />
      </div>
      {#if word.iast}
        <div class="text-xs text-[#94a3b8] font-serif italic">{word.iast}</div>
      {/if}
    </div>

    {#if mode === 'card'}
      <div class="text-center pb-3">
        <button
          onclick={reveal}
          class="font-serif italic text-[#0f1419] text-sm hover:text-[#f97316] transition-colors border-b border-[#0f1419] hover:border-[#f97316] pb-px"
        >reveal</button>
      </div>
    {:else}
      <div class="py-3 text-center space-y-3 border-t border-[#e2e8f0]">
        <div class="text-sm text-[#0f1419]">{lang === 'telugu' ? word.gloss : word.englishGloss}</div>
        {#if word.tag}
          <div class="text-xs flex flex-wrap justify-center gap-x-1 gap-y-0.5">
            {#each parseTag(word.tag) as t, ti}
              {#if ti > 0}<span class="text-[#cbd5e1]">·</span>{/if}
              {#if t.deva}
                <button class="text-[#4f46e5] hover:text-[#f97316] transition-colors" onclick={() => selectedTerm.set(t.deva)}>
                  <Sanskrit text={t.text} source="iast" />
                </button>
              {:else}
                <span class="text-[#94a3b8]"><Sanskrit text={t.text} source="iast" /></span>
              {/if}
            {/each}
          </div>
        {/if}
        <div class="flex gap-6 justify-center pt-1">
          <button
            onclick={() => answer(false)}
            class="font-serif italic text-sm text-[#e11d48] hover:opacity-80 transition-opacity"
          >missed</button>
          <button
            onclick={() => answer(true)}
            class="font-serif italic text-sm text-[#059669] hover:opacity-80 transition-opacity"
          >knew it</button>
        </div>
      </div>
    {/if}

  {:else if mode === 'done'}
    <div class="py-5 text-center space-y-2">
      <div class="text-sm text-[#0f1419]">
        <span class="text-[#059669]">{knew}</span> knew · <span class="text-[#e11d48]">{missed}</span> missed
      </div>
      <button
        onclick={() => mode = 'idle'}
        class="font-mono text-[0.7rem] text-[#94a3b8] hover:text-[#0f1419] transition-colors"
      >done</button>
    </div>
  {/if}
</div>
