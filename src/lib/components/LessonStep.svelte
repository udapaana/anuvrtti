<script lang="ts">
  import { parse as parseToml } from 'smol-toml';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { lessonLanguage } from '$lib/stores/preferences';
  import { selectedTerm } from '$lib/stores/jargon';

  // Map English person labels to Sanskrit IAST for display + jargon + Telugu gloss
  const personMap: Record<string, { iast: string; deva: string; telugu: string; english: string }> = {
    '1st': { iast: 'uttama',   deva: 'उत्तम',   telugu: 'ఉత్తమ',   english: '1st' },
    '2nd': { iast: 'madhyama', deva: 'मध्यम',   telugu: 'మధ్యమ',   english: '2nd' },
    '3rd': { iast: 'prathama', deva: 'प्रथम',   telugu: 'ప్రథమ',   english: '3rd' },
  };

  // Mood IAST → Devanagari for jargon lookup
  const moodDeva: Record<string, string> = {
    'laṭ': 'लट्', 'laṅ': 'लङ्', 'loṭ': 'लोट्', 'liṅ': 'लिङ्', 'lṛṭ': 'लृट्',
    'vidhiliṅ': 'विधिलिङ्', 'āśīrliṅ': 'आशीर्लिङ्', 'liṭ': 'लिट्', 'luṅ': 'लुङ्', 'luṭ': 'लुट्',
  };

  // All known jargon-linkable terms in grammar_focus, mapped to their Devanagari lookup key
  const focusTermDeva: Record<string, string> = {
    ...moodDeva,
    // Abbreviations
    'p.p.': 'प्र.पु.', 'm.p.': 'म.पु.', 'u.p.': 'उ.पु.',
    'e.v.': 'ए.व.', 'bahu.v.': 'बहु.व.', 'dvi.v.': 'द्वि.व.',
    // Puruṣa full names
    'prathama puruṣa': 'प्रथमपुरुष', 'madhyama puruṣa': 'मध्यमपुरुष', 'uttama puruṣa': 'उत्तमपुरुष',
    // Vacana
    'ekavacana': 'एकवचन', 'bahuvacana': 'बहुवचन', 'dvivacana': 'द्विवचन',
    // Vibhakti
    'prathamā': 'प्रथमा', 'dvitīyā': 'द्वितीया', 'tṛtīyā': 'तृतीया',
    'caturthī': 'चतुर्थी', 'pañcamī': 'पञ्चमी', 'ṣaṣṭhī': 'षष्ठी',
    'saptamī': 'सप्तमी', 'sambodhana': 'सम्बोधन',
    // Common terms
    'subanta': 'सुबन्त', 'tiṅanta': 'तिङन्त', 'ktvānta': 'क्त्वान्त',
    'tumanta': 'तुमन्त', 'ṇijanta': 'णिजन्त', 'sarvanāman': 'सर्वनामन्',
    'avyaya': 'अव्यय', 'nipāta': 'निपात', 'dhātu': 'धातु',
  };

  // Tokenize grammar_focus into spans of [text | {term, deva}]
  type FocusToken = string | { text: string; deva: string };
  function tokenizeGrammarFocus(focus: string): FocusToken[] {
    // Sort terms longest-first so multi-word terms match before their parts
    const terms = Object.keys(focusTermDeva).sort((a, b) => b.length - a.length);
    const result: FocusToken[] = [];
    let remaining = focus;
    while (remaining.length > 0) {
      let matched = false;
      for (const term of terms) {
        if (remaining.toLowerCase().startsWith(term.toLowerCase())) {
          result.push({ text: remaining.slice(0, term.length), deva: focusTermDeva[term] });
          remaining = remaining.slice(term.length);
          matched = true;
          break;
        }
      }
      if (!matched) {
        // Append char to last text span or create new one
        if (result.length > 0 && typeof result[result.length - 1] === 'string') {
          (result[result.length - 1] as any); // type narrowing
          result[result.length - 1] = (result[result.length - 1] as string) + remaining[0];
        } else {
          result.push(remaining[0]);
        }
        remaining = remaining.slice(1);
      }
    }
    return result;
  }

  // Parse a tag string like "p.p. e.v. vidhiliṅ" into clickable tokens
  function parseTag(tag: string): { text: string; deva: string }[] {
    return tag.split(/\s+/).filter(Boolean).map(t => ({
      text: t,
      deva: focusTermDeva[t] ?? ''
    }));
  }

  // Case IAST → Devanagari jargon term + Telugu gloss

  const caseMap: Record<string, { iast: string; deva: string; telugu: string; english: string }> = {
    'prathamā':  { iast: 'prathamā',  deva: 'प्रथमा',   telugu: 'ప్రథమా',   english: 'nominative' },
    'dvitīyā':   { iast: 'dvitīyā',   deva: 'द्वितीया', telugu: 'ద్వితీయా', english: 'accusative' },
    'tṛtīyā':    { iast: 'tṛtīyā',    deva: 'तृतीया',   telugu: 'తృతీయా',   english: 'instrumental' },
    'caturthī':  { iast: 'caturthī',  deva: 'चतुर्थी',  telugu: 'చతుర్థీ',  english: 'dative' },
    'pañcamī':   { iast: 'pañcamī',   deva: 'पञ्चमी',   telugu: 'పంచమీ',    english: 'ablative' },
    'ṣaṣṭhī':    { iast: 'ṣaṣṭhī',    deva: 'षष्ठी',    telugu: 'షష్ఠీ',    english: 'genitive' },
    'saptamī':   { iast: 'saptamī',   deva: 'सप्तमी',   telugu: 'సప్తమీ',   english: 'locative' },
    'sambodhana':{ iast: 'sambodhana',deva: 'सम्बोधन',  telugu: 'సంబోధన',   english: 'vocative' },
  };

  // Mood IAST → Telugu gloss
  const moodTelugu: Record<string, string> = {
    'laṭ': 'వర్తమాన',
    'laṅ': 'భూతకాల',
    'loṭ': 'ఆజ్ఞార్థక',
    'liṅ': 'విధ్యర్థక',
    'lṛṭ': 'భవిష్యత్',
    'vidhiliṅ': 'విధ్యర్థక',
    'āśīrliṅ': 'ఆశీర్లిఙ్',
  };

  // Paradigm label description → Telugu translations (the part after " — " in a label)
  const labelTeluguMap: Record<string, string> = {
    // English descriptions (legacy, kept for any unconverted labels)
    'first person (I / we)':              'ఉత్తమ పురుష (నేను / మేము)',
    'second person (you / you all)':      'మధ్యమ పురుష (నీవు / మీరు)',
    'all/every; pronominal adjective':    'సర్వ; సర్వనామ విశేషణము',
    'one; singular only':                 'ఏక; ఏకవచనమాత్రము',
    'how many?; plural only':             'కతి?; బహువచనమాత్రము',
    'many; plural only':                  'అనేక; బహువచనమాత్రము',
    'he/that; third person pronoun':      'తత్/సః; ప్రథమ పురుష సర్వనామము',
    'a-stem masculine':                   'అకారాంత పుంలింగము',
    'a-stem neuter':                      'అకారాంత నపుంసకలింగము',
    'ā-stem feminine':                    'ఆకారాంత స్త్రీలింగము',
    'dual (two subjects)':                'ద్వివచనము (ఇద్దరు కర్తలు)',
    // Pāṇinian lacāra names → Telugu gloss
    'laṭ':        'వర్తమాన కాలము',
    'laṅ':        'భూతకాలము',
    'loṭ':        'ఆజ్ఞార్థకము',
    'vidhiliṅ':   'విధ్యర్థకము',
    'lṛṭ':        'భవిష్యత్కాలము',
    'liṅ':        'విధ్యర్థకము',
    'laṭ · laṅ':  'వర్తమాన · భూతకాల',
  };

  // Split a paradigm label "sanskrit — english description" into parts
  function splitLabel(label: string): { sanskrit: string; english: string } {
    const idx = label.indexOf(' — ');
    if (idx === -1) return { sanskrit: label, english: '' };
    return { sanskrit: label.slice(0, idx), english: label.slice(idx + 3) };
  }

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

  // Language-aware UI strings (not Sanskrit content — these are UI chrome)
  const ui = $derived({
    vocabulary:  showTelugu ? 'పదకోశము'         : 'Vocabulary',
    paradigm:    showTelugu ? 'రూపమాల'           : 'Paradigm',
    passage:     showTelugu ? 'పాఠ్యభాగము'       : 'Passage',
    translation: showTelugu ? 'తెలుగు అనువాదము' : 'Translation',
    exercises:   showTelugu ? 'అభ్యాసములు'       : 'Exercises',
    translatePrompt: showTelugu ? 'సంస్కృతంలోకి అనువదించుము' : 'Translate into Sanskrit',
  });

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
      <div class="text-xs font-medium text-amber-700 uppercase tracking-widest mb-1 flex items-baseline gap-2">
        <Sanskrit text="బాలబోధిని" source="telugu" />
        <span class="font-normal normal-case text-amber-500 tracking-normal">Kāśī Kṛṣṇācārya</span>
      </div>
      <div class="text-xl font-semibold text-stone-800">
        {showTelugu ? (lessonData.title_telugu ?? lessonData.title_english) : lessonData.title_english}
        {#if lessonData.title_sanskrit_telugu}
          <span class="text-base font-normal text-stone-400 ml-2">
            <Sanskrit text={lessonData.title_sanskrit_telugu} source="telugu" />
          </span>
        {/if}
      </div>
    </div>

    <!-- Grammar focus callout -->
    {#if lessonData.grammar_focus}
      {@const tokens = tokenizeGrammarFocus(lessonData.grammar_focus)}
      <div class="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded px-3 py-2 leading-relaxed">
        <span class="font-medium text-stone-400 uppercase tracking-wide mr-2">{showTelugu ? 'పాఠ విషయము' : 'focus'}</span>{#each tokens as token}{#if typeof token === 'string'}{token}{:else}<button
            class="focus-term"
            onclick={() => selectedTerm.set(token.deva)}
          ><Sanskrit text={token.text} source="iast" /></button>{/if}{/each}
      </div>
    {/if}

    <!-- Sūtra links -->
    {#if lessonData.sutras?.length}
      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-xs text-stone-400 uppercase tracking-wide">{showTelugu ? 'సూత్రములు' : 'sūtras'}</span>
        {#each lessonData.sutras as sutra}
          <a href="/ref/{sutra}"
             class="text-xs font-mono px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 transition-colors">
            {sutra}
          </a>
        {/each}
      </div>
    {/if}

    <!-- Language selector + indicator -->
    <div class="flex items-center gap-2">
      {#each ([['telugu', 'తెలుగు'], ['english', 'English']] as const) as [val, label]}
        <button
          onclick={() => setLang(val)}
          class="px-3 py-1 text-xs rounded-full border transition-colors
                 {lang === val ? 'bg-amber-100 border-amber-300 text-amber-800 font-medium'
                              : 'border-stone-200 text-stone-400 hover:border-stone-300 hover:text-stone-600'}"
        >{label}</button>
      {/each}
      <span class="text-xs text-stone-300 ml-1">{showTelugu ? 'వివరణలు తెలుగులో' : 'glosses in English'}</span>
    </div>

    <!-- Sections -->
    {#each (lessonData.sections ?? []) as section, si}

      {#if section.type === 'grammar_note'}
        <div class="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-3 text-sm space-y-0.5">
          {#if showTelugu && section.items?.[0]?.telugu}
            <p class="font-telugu text-indigo-900 leading-relaxed">{section.items[0].telugu}</p>
          {:else if !showTelugu && section.items?.[0]?.english}
            <p class="text-indigo-500 text-xs leading-relaxed">{section.items[0].english}</p>
          {/if}
        </div>

      {:else if section.type === 'vocabulary'}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div class="px-4 py-2 border-b border-stone-100 bg-stone-50 flex items-center gap-6">
            <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">{ui.vocabulary}</span>
            <span class="text-xs text-stone-300 font-medium uppercase tracking-wide">
              <Sanskrit text="śabda" source="iast" /> · {showTelugu ? 'అర్థము' : 'meaning'}
            </span>
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
                {#if item.tag}
                  <span class="flex items-center gap-0.5 ml-auto">
                    {#each parseTag(item.tag) as t}
                      {#if t.deva}
                        <button
                          class="morph-tag"
                          onclick={() => selectedTerm.set(t.deva)}
                        ><Sanskrit text={t.text} source="iast" /></button>
                      {:else}
                        <span class="morph-tag-plain">{t.text}</span>
                      {/if}
                    {/each}
                  </span>
                {/if}
              </div>
            {/each}
          </div>
        </div>

      {:else if section.type === 'reading'}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div class="px-4 py-2 border-b border-stone-100 bg-stone-50">
            <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">{showTelugu ? 'పఠనము' : 'Reading'}</span>
          </div>
          <ol class="divide-y divide-stone-50">
            {#each (section.items ?? []) as item}
              {@const key = `${si}-${item.n}`}
              {@const gloss = showTelugu ? item.telugu : item.english}
              <li class="px-4 py-2.5 flex items-center gap-3">
                <span class="text-xs text-stone-300 w-5 flex-shrink-0 text-right">{item.n}.</span>
                <div class="flex-1 text-base leading-snug">
                  <Sanskrit text={item.sanskrit_telugu} source="telugu" />
                </div>
                {#if gloss}
                  <div class="w-64 flex-shrink-0 flex items-center gap-2 justify-end">
                    {#if revealed.has(key)}
                      <span class="text-sm text-stone-400 {showTelugu ? 'font-telugu' : 'italic'} text-right leading-snug">{gloss}</span>
                      <button onclick={() => toggleReveal(key)} class="flex-shrink-0 text-stone-300 hover:text-stone-500 transition-colors" aria-label="hide">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>
                      </button>
                    {:else}
                      <button onclick={() => toggleReveal(key)} class="flex-shrink-0 text-stone-200 hover:text-stone-400 transition-colors" aria-label="reveal meaning">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
                      </button>
                    {/if}
                  </div>
                {/if}
              </li>
            {/each}
          </ol>
        </div>

      {:else if section.type === 'exercises'}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div class="px-4 py-2 border-b border-stone-100 bg-stone-50">
            <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">{ui.exercises} — {ui.translatePrompt}</span>
          </div>
          <ol class="divide-y divide-stone-50">
            {#each (section.items ?? []) as item}
              {@const key = `ex-${si}-${item.n}`}
              <li class="px-4 py-2.5 flex items-center gap-3">
                <span class="text-xs text-stone-300 w-5 flex-shrink-0 text-right">{item.n}.</span>
                <div class="flex-1">
                  {#if showTelugu && item.telugu}
                    <div class="font-telugu text-stone-800 leading-snug">{item.telugu}</div>
                  {:else if !showTelugu && item.english}
                    <div class="text-stone-700 leading-snug">{item.english}</div>
                  {/if}
                </div>
                {#if item.sanskrit_telugu}
                  <div class="w-64 flex-shrink-0 flex items-center gap-2 justify-end">
                    {#if revealed.has(key)}
                      <span class="text-base text-stone-700 text-right leading-snug">
                        <Sanskrit text={item.sanskrit_telugu} source="telugu" />
                      </span>
                      <button onclick={() => toggleReveal(key)} class="flex-shrink-0 text-stone-300 hover:text-stone-500 transition-colors" aria-label="hide">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>
                      </button>
                    {:else}
                      <button onclick={() => toggleReveal(key)} class="flex-shrink-0 text-stone-200 hover:text-stone-400 transition-colors" aria-label="reveal answer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
                      </button>
                    {/if}
                  </div>
                {/if}
              </li>
            {/each}
          </ol>
        </div>

      {:else if section.type === 'paradigm'}
        {@const lbl = section.label ? splitLabel(section.label) : null}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div class="px-4 py-2 border-b border-stone-100 bg-stone-50 flex items-center gap-3">
            <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">{ui.paradigm}</span>
            {#if lbl}
              {@const desc = lbl.english ? (showTelugu ? (labelTeluguMap[lbl.english] ?? lbl.english) : lbl.english) : ''}
              <span class="text-sm text-stone-700">
                <Sanskrit text={lbl.sanskrit} source="iast" />
                {#if desc}
                  <span class="text-stone-400 ml-1">—</span>
                  <span class="text-stone-500 ml-1 {showTelugu ? 'font-telugu' : ''}">{desc}</span>
                {/if}
              </span>
            {/if}
          </div>
          {#if section.layout === 'moods' && section.moods}
            <!-- Multi-mood layout: two sub-columns (sg | pl) per mood -->
            {@const moods = section.moods ?? []}
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-stone-200 bg-stone-50">
                    <th class="px-4 py-3 text-left font-normal w-20" rowspan="2">
                      <button class="jargon-term" onclick={() => selectedTerm.set('पुरुष')}>
                        <Sanskrit text="puruṣa" source="iast" />
                        <span class="jargon-en">{showTelugu ? 'పురుష' : 'person'}</span>
                      </button>
                    </th>
                    {#each moods as mood}
                      {@const deva = moodDeva[mood]}
                      <th class="px-3 py-2 text-center font-normal border-l border-stone-100" colspan="2">
                        <button class="jargon-term" onclick={() => deva && selectedTerm.set(deva)}>
                          <Sanskrit text={mood} source="iast" />
                          <span class="jargon-en">{showTelugu ? (moodTelugu[mood] ?? mood) : mood}</span>
                        </button>
                      </th>
                    {/each}
                  </tr>
                  <tr class="border-b border-stone-200 bg-stone-50/60">
                    {#each moods as _mood, mi}
                      <th class="px-3 py-1.5 text-left font-normal {mi > 0 ? 'border-l border-stone-100' : ''}">
                        <button class="jargon-term text-xs" onclick={() => selectedTerm.set('एकवचन')}>
                          <Sanskrit text="eka°" source="iast" />
                          <span class="jargon-en">{showTelugu ? 'ఏకవచన' : 'sg'}</span>
                        </button>
                      </th>
                      <th class="px-3 py-1.5 text-left font-normal">
                        <button class="jargon-term text-xs" onclick={() => selectedTerm.set('बहुवचन')}>
                          <Sanskrit text="bahu°" source="iast" />
                          <span class="jargon-en">{showTelugu ? 'బహువచన' : 'pl'}</span>
                        </button>
                      </th>
                    {/each}
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-50">
                  {#each (section.items ?? []) as row}
                    {@const p = personMap[row.person]}
                    {@const sgArr = Array.isArray(row.singular_iast) ? row.singular_iast : (row.singular_iast != null ? [row.singular_iast] : [])}
                    {@const plArr = Array.isArray(row.plural_iast) ? row.plural_iast : (row.plural_iast != null ? [row.plural_iast] : [])}
                    <tr class="hover:bg-stone-50/50">
                      <td class="px-4 py-3">
                        <button class="jargon-term" onclick={() => p && selectedTerm.set(p.deva)}>
                          <Sanskrit text={p?.iast ?? row.person} source="iast" />
                          <span class="jargon-en">{showTelugu ? (p?.telugu ?? row.person) : (p?.english ?? row.person)}</span>
                        </button>
                      </td>
                      {#each moods as _mood, mi}
                        <td class="px-3 py-3 text-base {mi > 0 ? 'border-l border-stone-100' : ''}">
                          <Sanskrit text={sgArr[mi] ?? '—'} source="iast" />
                        </td>
                        <td class="px-3 py-3 text-base text-stone-400">
                          <Sanskrit text={plArr[mi] ?? '—'} source="iast" />
                        </td>
                      {/each}
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          {:else if (section.items ?? [])[0]?.case}
            <!-- Case/declension layout -->
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-stone-200 bg-stone-50">
                  <th class="px-4 py-3 text-left font-normal w-24">
                    <button class="jargon-term" onclick={() => selectedTerm.set('विभक्ति')}>
                      <Sanskrit text="vibhakti" source="iast" />
                      <span class="jargon-en">{showTelugu ? 'విభక్తి' : 'case'}</span>
                    </button>
                  </th>
                  <th class="px-4 py-3 text-left font-normal">
                    <button class="jargon-term" onclick={() => selectedTerm.set('एकवचन')}>
                      <Sanskrit text="ekavacana" source="iast" />
                      <span class="jargon-en">{showTelugu ? 'ఏకవచన' : 'singular'}</span>
                    </button>
                  </th>
                  <th class="px-4 py-3 text-left font-normal">
                    <button class="jargon-term" onclick={() => selectedTerm.set('बहुवचन')}>
                      <Sanskrit text="bahuvacana" source="iast" />
                      <span class="jargon-en">{showTelugu ? 'బహువచన' : 'plural'}</span>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-stone-50">
                {#each (section.items ?? []) as row}
                  {@const c = caseMap[row.case]}
                  <tr class="hover:bg-stone-50/50">
                    <td class="px-4 py-3">
                      <button class="jargon-term" onclick={() => c && selectedTerm.set(c.deva)}>
                        <Sanskrit text={c?.iast ?? row.case} source="iast" />
                        <span class="jargon-en">{showTelugu ? (c?.telugu ?? row.case) : (c?.english ?? row.case)}</span>
                      </button>
                    </td>
                    <td class="px-4 py-3 text-base"><Sanskrit text={row.singular_iast || '—'} source="iast" /></td>
                    <td class="px-4 py-3 text-base"><Sanskrit text={row.plural_iast || '—'} source="iast" /></td>
                  </tr>
                {/each}
              </tbody>
            </table>
          {:else}
            <!-- Standard person/singular/plural layout -->
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-stone-200 bg-stone-50">
                  <th class="px-4 py-3 text-left font-normal w-16">
                    <button class="jargon-term" onclick={() => selectedTerm.set('पुरुष')}>
                      <Sanskrit text="puruṣa" source="iast" />
                      <span class="jargon-en">{showTelugu ? 'పురుష' : 'person'}</span>
                    </button>
                  </th>
                  <th class="px-4 py-3 text-left font-normal">
                    <button class="jargon-term" onclick={() => selectedTerm.set('एकवचन')}>
                      <Sanskrit text="ekavacana" source="iast" />
                      <span class="jargon-en">{showTelugu ? 'ఏకవచన' : 'singular'}</span>
                    </button>
                  </th>
                  <th class="px-4 py-3 text-left font-normal">
                    <button class="jargon-term" onclick={() => selectedTerm.set('बहुवचन')}>
                      <Sanskrit text="bahuvacana" source="iast" />
                      <span class="jargon-en">{showTelugu ? 'బహువచన' : 'plural'}</span>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-stone-50">
                {#each (section.items ?? []) as row}
                  {@const p = personMap[row.person]}
                  <tr class="hover:bg-stone-50/50">
                    <td class="px-4 py-3">
                      <button class="jargon-term" onclick={() => p && selectedTerm.set(p.deva)}>
                        <Sanskrit text={p?.iast ?? row.person} source="iast" />
                        <span class="jargon-en">{showTelugu ? (p?.telugu ?? row.person) : (p?.english ?? row.person)}</span>
                      </button>
                    </td>
                    <td class="px-4 py-3 text-base"><Sanskrit text={row.singular_iast} source="iast" /></td>
                    <td class="px-4 py-3 text-base"><Sanskrit text={row.plural_iast ?? '—'} source="iast" /></td>
                  </tr>
                {/each}
              </tbody>
            </table>
          {/if}
        </div>

      {:else if section.type === 'passage'}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div class="px-4 py-2 border-b border-stone-100 bg-stone-50">
            <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">{ui.passage}</span>
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

      {:else if section.type === 'script_table'}
        {@const lbl = showTelugu ? (section.label_telugu ?? section.label) : section.label}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          {#if lbl}
            <div class="px-4 py-2 border-b border-stone-100 bg-stone-50">
              <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">{lbl}</span>
            </div>
          {/if}
          <div class="divide-y divide-stone-50">
            {#each (section.items ?? []) as item}
              <div class="px-4 py-2.5 grid grid-cols-[3rem_5rem_1fr] items-baseline gap-4">
                <span class="text-xl font-medium text-stone-800">
                  <Sanskrit text={item.telugu} source="telugu" />
                </span>
                <span class="text-sm font-mono text-indigo-700">
                  <Sanskrit text={item.iast} source="iast" />
                </span>
                {#if item.note}
                  <span class="text-xs text-stone-500 italic">{item.note}</span>
                {/if}
              </div>
            {/each}
          </div>
        </div>

      {:else if section.type === 'sandhi_table'}
        {@const lbl = showTelugu ? (section.label_telugu ?? section.label) : section.label}
        <div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
          {#if lbl}
            <div class="px-4 py-2 border-b border-stone-100 bg-stone-50">
              <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">{lbl}</span>
            </div>
          {/if}
          <div class="divide-y divide-stone-100">
            {#each (section.items ?? []) as item}
              <div class="px-4 py-3 space-y-1.5">
                <div class="flex items-center gap-3 flex-wrap">
                  <span class="text-xs font-mono font-semibold text-violet-700 bg-violet-50 border border-violet-200 rounded px-2 py-0.5">{item.pattern}</span>
                  <span class="text-stone-700"><Sanskrit text={item.telugu_before} source="telugu" /></span>
                  <span class="text-stone-300">→</span>
                  <span class="font-medium text-stone-800"><Sanskrit text={item.telugu_after} source="telugu" /></span>
                </div>
                <div class="flex items-center gap-3 flex-wrap pl-1">
                  <span class="text-xs font-mono text-stone-400">{item.iast_before}</span>
                  <span class="text-stone-300">→</span>
                  <span class="text-xs font-mono font-medium text-stone-600">{item.iast_after}</span>
                </div>
                {#if item.english}
                  <p class="text-xs text-stone-500 italic pl-1">{item.english}</p>
                {/if}
              </div>
            {/each}
          </div>
        </div>

      {:else if section.type === 'passage_translation'}
        <div class="bg-amber-50/40 rounded-lg border border-amber-100 overflow-hidden">
          <div class="px-4 py-2 border-b border-amber-100">
            <span class="text-xs font-medium text-amber-700 uppercase tracking-wide">{ui.translation}</span>
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

<style>
  .jargon-term {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    cursor: pointer;
    border-bottom: 1px dashed #a78bfa;
    padding-bottom: 1px;
    transition: background-color 0.1s;
    border-radius: 2px;
    padding-inline: 2px;
  }

  .jargon-term:hover {
    background-color: #ede9fe;
  }

  .jargon-en {
    font-size: 0.6rem;
    color: #7c6cb0;
    font-family: inherit;
    line-height: 1;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  /* Grammar focus: inline clickable terms */
  .focus-term {
    display: inline;
    cursor: pointer;
    border-bottom: 1px dashed #c4b5fd;
    color: #44403c;
    border-radius: 2px;
    padding-inline: 1px;
    transition: background-color 0.1s;
  }

  .focus-term:hover {
    background-color: #ede9fe;
  }

  /* Morphological tag badges on vocabulary items */
  .morph-tag {
    display: inline-flex;
    align-items: center;
    font-size: 0.65rem;
    padding: 0 5px;
    height: 1.4rem;
    border-radius: 3px;
    background: #f5f3ff;
    border: 1px solid #ddd6fe;
    color: #7c3aed;
    cursor: pointer;
    transition: background-color 0.1s;
    font-family: inherit;
    letter-spacing: 0.01em;
  }

  .morph-tag:hover {
    background-color: #ede9fe;
  }

  .morph-tag-plain {
    display: inline-flex;
    align-items: center;
    font-size: 0.65rem;
    padding: 0 5px;
    height: 1.4rem;
    border-radius: 3px;
    background: #f5f3ff;
    border: 1px solid #ddd6fe;
    color: #7c3aed;
  }
</style>
