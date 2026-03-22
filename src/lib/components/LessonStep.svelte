<script lang="ts">
  import { parse as parseToml } from 'smol-toml';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { lessonLanguage } from '$lib/stores/preferences';

  interface Props {
    lessonRef: string; // e.g. "balabodhini-1-07"
  }

  let { lessonRef }: Props = $props();

  type Language = 'telugu' | 'english';

  let lang: Language = $state('telugu');
  let lessonData: Record<string, any> | null = $state(null);
  let fetchError = $state('');
  let loading = $state(true);

  lessonLanguage.subscribe(v => { lang = v as Language; });

  function setLang(l: Language) {
    lang = l;
    lessonLanguage.set(l);
  }

  $effect(() => {
    if (!lessonRef) return;
    loading = true;
    fetchError = '';
    lessonData = null;

    const match = lessonRef.match(/^balabodhini-(\d+)-(\d+)$/);
    if (!match) {
      fetchError = `Invalid lesson ref: ${lessonRef}`;
      loading = false;
      return;
    }
    const [, vol, num] = match;
    const padded = String(parseInt(num, 10)).padStart(2, '0');
    const url = `/data/balabodhini/${vol}/structured/lesson-${padded}.toml`;

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.text();
      })
      .then(text => {
        lessonData = parseToml(text) as Record<string, any>;
        loading = false;
      })
      .catch(e => {
        fetchError = e.message;
        loading = false;
      });
  });

  const showTelugu = $derived(lang === 'telugu');

  // Per-item reveal state for reading sentences (key = sectionIndex + '-' + itemN)
  let revealed = $state(new Set<string>());

  function toggleReveal(key: string) {
    const next = new Set(revealed);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    revealed = next;
  }
</script>

{#if loading}
  <div class="animate-pulse space-y-3">
    <div class="h-6 w-48 bg-stone-200 rounded"></div>
    <div class="h-24 bg-stone-200 rounded"></div>
  </div>
{:else if fetchError}
  <div class="bg-red-50 border border-red-200 rounded-lg p-5 text-red-700 text-sm">
    Failed to load lesson: {fetchError}
  </div>
{:else if lessonData}
  <div class="space-y-5">

    <!-- Lesson header -->
    <div class="pb-2 border-b border-stone-100">
      <div class="text-xs font-medium text-amber-700 uppercase tracking-widest mb-1">
        బాలబోధిని · Bālabodhini
      </div>
      <div class="text-xl font-semibold text-stone-800">
        {lessonData.title_english}
        {#if lessonData.title_telugu}
          <span class="text-base font-normal text-stone-400 ml-2 font-telugu">{lessonData.title_telugu}</span>
        {/if}
      </div>
      {#if lessonData.grammar_focus}
        <div class="text-xs text-stone-400 mt-1">{lessonData.grammar_focus}</div>
      {/if}
    </div>

    <!-- Language selector -->
    <div class="flex items-center gap-1">
      {#each ([['telugu', 'తెలుగు'], ['english', 'English']] as const) as [val, label]}
        <button
          onclick={() => setLang(val)}
          class="px-3 py-1 text-xs rounded-full border transition-colors
                 {lang === val ? 'bg-amber-100 border-amber-300 text-amber-800 font-medium'
                              : 'border-stone-200 text-stone-400 hover:border-stone-300 hover:text-stone-600'}"
        >{label}</button>
      {/each}
    </div>

    <!-- Sections -->
    {#each (lessonData.sections ?? []) as section, si}

      {#if section.type === 'grammar_note'}
        <div class="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-3 text-sm space-y-1">
          {#if showTelugu && section.items?.[0]?.telugu}
            <p class="font-telugu text-indigo-900 leading-relaxed">{section.items[0].telugu}</p>
          {:else if !showTelugu && section.items?.[0]?.english}
            <p class="text-indigo-700 leading-relaxed">{section.items[0].english}</p>
          {/if}
        </div>

      {:else if section.type === 'vocabulary'}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div class="px-4 py-2 border-b border-stone-100 bg-stone-50">
            <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">Vocabulary</span>
          </div>
          <div class="divide-y divide-stone-50">
            {#each (section.items ?? []) as item}
              <div class="px-4 py-2.5 flex items-baseline gap-4 flex-wrap">
                <span class="text-base font-medium min-w-[8rem]">
                  <Sanskrit text={item.sanskrit_telugu} source="telugu" />
                </span>
                {#if showTelugu && item.telugu_gloss}
                  <span class="font-telugu text-stone-700 text-sm">{item.telugu_gloss}</span>
                {:else if !showTelugu && item.english}
                  <span class="text-stone-600 text-sm">{item.english}</span>
                {/if}
              </div>
            {/each}
          </div>
        </div>

      {:else if section.type === 'reading' && (lessonData.sections ?? [])[si + 1]?.type === 'exercises'}
        <!-- skip: rendered as matching exercise together with the exercises section below -->

      {:else if section.type === 'exercises'}
        {@const prevSection = (lessonData.sections ?? [])[si - 1]}
        {@const isMatching = prevSection?.type === 'reading'}
        {#if isMatching}
          <!-- Matching exercise: Sanskrit column vs Telugu/English column -->
          <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
            <div class="px-4 py-2 border-b border-stone-100 bg-stone-50">
              <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">Match — Sanskrit · {showTelugu ? 'తెలుగు' : 'English'}</span>
            </div>
            <div class="grid grid-cols-2 divide-x divide-stone-100">
              <!-- Sanskrit column -->
              <ol class="divide-y divide-stone-50">
                {#each (prevSection.items ?? []) as item}
                  <li class="px-3 py-2.5 flex items-start gap-2">
                    <span class="text-xs text-stone-300 mt-0.5 w-4 flex-shrink-0 text-right">{item.n}.</span>
                    <div class="text-base leading-snug">
                      <Sanskrit text={item.sanskrit_telugu} source="telugu" />
                    </div>
                  </li>
                {/each}
              </ol>
              <!-- Telugu / English column -->
              <ol class="divide-y divide-stone-50">
                {#each (section.items ?? []) as item}
                  <li class="px-3 py-2.5 flex items-start gap-2">
                    <span class="text-xs text-stone-300 mt-0.5 w-4 flex-shrink-0 text-right">{item.n}.</span>
                    <div class="leading-snug">
                      {#if showTelugu && item.telugu}
                        <span class="font-telugu text-stone-800">{item.telugu}</span>
                      {:else if !showTelugu && item.english}
                        <span class="text-stone-700 text-sm">{item.english}</span>
                      {/if}
                    </div>
                  </li>
                {/each}
              </ol>
            </div>
          </div>
        {:else}
          <!-- Standalone exercises (no paired reading) -->
          <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
            <div class="px-4 py-2 border-b border-stone-100 bg-stone-50">
              <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">Exercises — Translate into Sanskrit</span>
            </div>
            <ol class="divide-y divide-stone-50">
              {#each (section.items ?? []) as item}
                <li class="px-4 py-3 flex items-start gap-3">
                  <span class="text-xs text-stone-300 mt-0.5 w-5 flex-shrink-0 text-right">{item.n}.</span>
                  <div class="flex-1">
                    {#if showTelugu && item.telugu}
                      <div class="font-telugu text-stone-800">{item.telugu}</div>
                    {:else if !showTelugu && item.english}
                      <div class="text-stone-700">{item.english}</div>
                    {/if}
                  </div>
                </li>
              {/each}
            </ol>
          </div>
        {/if}

      {:else if section.type === 'paradigm'}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div class="px-4 py-2 border-b border-stone-100 bg-stone-50 flex items-center gap-3">
            <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">Paradigm</span>
            {#if section.label}
              <span class="text-xs text-stone-600 font-iast">{section.label}</span>
            {/if}
          </div>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-stone-100 bg-stone-50/50">
                <th class="px-4 py-2 text-left text-xs text-stone-400 font-normal w-16">Person</th>
                <th class="px-4 py-2 text-left text-xs text-stone-400 font-normal">Singular</th>
                <th class="px-4 py-2 text-left text-xs text-stone-400 font-normal">Plural</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-50">
              {#each (section.items ?? []) as row}
                <tr>
                  <td class="px-4 py-2 text-xs text-stone-400">{row.person}</td>
                  <td class="px-4 py-2"><Sanskrit text={row.singular} source="iast" /></td>
                  <td class="px-4 py-2"><Sanskrit text={row.plural ?? '—'} source="iast" /></td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>

      {:else if section.type === 'passage'}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div class="px-4 py-2 border-b border-stone-100 bg-stone-50">
            <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">Passage</span>
          </div>
          <div class="px-4 py-4 space-y-3">
            {#each (section.items ?? []) as item}
              <div>
                <div class="text-lg leading-relaxed">
                  <Sanskrit text={item.sanskrit_telugu} source="telugu" />
                </div>
                {#if !showTelugu && item.english}
                  <div class="text-sm text-stone-500 italic mt-0.5">{item.english}</div>
                {/if}
              </div>
            {/each}
          </div>
        </div>

      {:else if section.type === 'passage_translation' && showTelugu}
        <div class="bg-amber-50/40 rounded-lg border border-amber-100 overflow-hidden">
          <div class="px-4 py-2 border-b border-amber-100">
            <span class="text-xs font-medium text-amber-700 uppercase tracking-wide">తెలుగు అనువాదము</span>
          </div>
          <div class="px-4 py-4 space-y-2">
            {#each (section.items ?? []) as item}
              <p class="font-telugu text-stone-700 leading-relaxed">{item.telugu}</p>
            {/each}
          </div>
        </div>
      {/if}

    {/each}
  </div>
{/if}
