<script lang="ts">
  import { parse as parseToml } from 'smol-toml';
  import { marked } from 'marked';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { lessonLanguage, displayScript } from '$lib/stores/preferences';
  import { selectedTerm } from '$lib/stores/jargon';
  import type { Script } from '$lib/transliteration';
  import { wordBank } from '$lib/stores/wordBank';
  import { pathsForGrammarFocus } from '$lib/learning/grammarTags';
  import { loadPathIndex, type PathMeta } from '$lib/content';

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
    // Liṅga
    'napuṃsakaliṅga': 'नपुंसकलिङ्ग', 'puṃliṅga': 'पुंलिङ्ग', 'strīliṅga': 'स्त्रीलिङ्ग', 'liṅga': 'लिङ्ग',
    // Stem types
    'akārānta': 'अकारान्त', 'ākārānta': 'आकारान्त', 'ikārānta': 'इकारान्त', 'ukārānta': 'उकारान्त',
    // Other nominals
    'sarvanāma': 'सर्वनाम', 'nāma': 'नाम', 'saṃkhyā': 'संख्या', 'saṁkhyā': 'संख्या',
    // Misc
    'kālavācī': 'कालवाची', 'sambandhavācī': 'सम्बन्धवाची', 'aniścita': 'अनिश्चित',
    'sarvapuruṣa': 'सर्वपुरुष', 'asmad': 'अस्मद्', 'yuṣmad': 'युष्मद्',
    'kṛdanta': 'कृदन्त', 'taddhita': 'तद्धित', 'samāsa': 'समास', 'sandhi': 'सन्धि',
    'lyap': 'ल्यप्', 'ktvā': 'क्त्वा', 'tumun': 'तुमुन्', 'ṇic': 'णिच्',
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

  interface SectionNavItem {
    type: string;
    label: string;
    anchor: string;
    si: number;
  }

  interface Props {
    lessonRef: string; // e.g. "balabodhini-1-07"
    onsections?: (sections: SectionNavItem[]) => void;
    onlessonnum?: (num: number) => void;
  }

  let { lessonRef, onsections, onlessonnum }: Props = $props();

  type Language = 'telugu' | 'english';

  let lang: Language = $state('telugu');
  let lessonData: Record<string, any> | null = $state(null);
  let fetchError = $state('');
  let loading = $state(true);
  let sensitiveNoteHtml = $state('');
  // Path index — used to resolve grammar-bridge path IDs to titles
  let allPaths: PathMeta[] = $state([]);

  fetch('/content/sensitive-notes/flag.md')
    .then(r => r.ok ? r.text() : '')
    .then(t => { sensitiveNoteHtml = marked.parse(t.trim()) as string; })
    .catch(() => {});

  loadPathIndex().then(p => { allPaths = p; }).catch(() => {});

  lessonLanguage.subscribe(v => { lang = v as Language; });

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
        wordBank.addWordsFromLesson(lessonRef, lessonData.sections ?? []);
        const lessonNum = parseInt(lessonRef.match(/(\d+)$/)?.[1] ?? '0', 10);
        onlessonnum?.(lessonNum);
      })
      .catch(e => {
        fetchError = e.message;
        loading = false;
      });
  });

  const showTelugu = $derived(lang === 'telugu');

  // Grammar bridge — for the current lesson's grammar_focus, find matching
  // grammar paths so we can render a "this lesson exercises:" footer.
  const bridgePaths = $derived.by(() => {
    if (!lessonData?.grammar_focus || allPaths.length === 0) return [] as PathMeta[];
    const ids = pathsForGrammarFocus(lessonData.grammar_focus);
    const byId = new Map(allPaths.map(p => [p.id, p]));
    return ids.map(id => byId.get(id)).filter((p): p is PathMeta => !!p);
  });

  // Language-aware UI strings (not Sanskrit content — these are UI chrome)
  const ui = $derived({
    vocabulary:      showTelugu ? 'పదకోశము'                    : 'Vocabulary',
    paradigm:        showTelugu ? 'రూపమాల'                     : 'Paradigm',
    passage:         showTelugu ? 'పాఠ్యభాగము'                 : 'Passage',
    translation:     showTelugu ? 'అనువాదము'                   : 'Translation',
    exercises:       showTelugu ? 'అభ్యాసములు'                 : 'Exercises',
    translatePrompt: showTelugu ? 'సంస్కృతంలోకి అనువదించుము'  : 'Translate into Sanskrit',
    reading:         showTelugu ? 'పఠనము'                      : 'Reading',
  });

  // Per-item hide state for passage sentences. English is visible by default;
  // adding the key hides it.
  let hidden = $state(new Set<string>());

  function toggleReveal(key: string) {
    const next = new Set(hidden);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    hidden = next;
  }

  // Per-item reveal state for vocabulary glosses and exercise answers. These
  // are hidden by default (recall practice); adding the key reveals.
  let revealed = $state(new Set<string>());

  function toggleAnswer(key: string) {
    const next = new Set(revealed);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    revealed = next;
  }

  // Section jump nav: deduplicated list of navigable section types in order
  const NAV_TYPES: Record<string, { en: string; te: string }> = {
    vocabulary:        { en: 'Vocabulary',  te: 'పదకోశము' },
    grammar_note:      { en: 'Grammar',     te: 'వ్యాకరణము' },
    paradigm:          { en: 'Paradigm',    te: 'రూపమాల' },
    script_table:      { en: 'Script',      te: 'లిపి' },
    sandhi_table:      { en: 'Sandhi',      te: 'సంధి' },
    passage:           { en: 'Passage',     te: 'పాఠ్యభాగము' },
    passage_translation: { en: 'Exercises', te: 'అభ్యాసము' },
    reading:           { en: 'Reading',     te: 'పఠనము' },
    exercises:         { en: 'Exercises',   te: 'అభ్యాసములు' },
  };

  const sectionNav = $derived.by(() => {
    if (!lessonData?.sections) return [];
    const seen = new Set<string>();
    const result: SectionNavItem[] = [];
    for (let i = 0; i < lessonData.sections.length; i++) {
      const t = lessonData.sections[i].type as string;
      if (!NAV_TYPES[t] || seen.has(t)) continue;
      seen.add(t);
      result.push({
        type: t,
        label: showTelugu ? NAV_TYPES[t].te : NAV_TYPES[t].en,
        anchor: `section-${t}`,
        si: i,
      });
    }
    return result;
  });

  $effect(() => {
    if (sectionNav.length > 0) onsections?.(sectionNav);
  });

  function scrollToSection(anchor: string) {
    if (typeof document === 'undefined') return;
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
</script>

{#if loading}
  <div class="animate-pulse space-y-3">
    <div class="h-6 w-48 bg-stone-200 rounded"></div>
    <div class="h-24 bg-stone-200 rounded"></div>
  </div>
{:else if fetchError}
  <div class="border-t-2 border-[#e11d48] py-3">
    <p class="font-mono text-[0.7rem] uppercase tracking-wider text-[#e11d48] mb-1">error</p>
    <p class="text-sm text-[#0f1419]">failed to load lesson: {fetchError}</p>
  </div>
{:else if lessonData}
  <div class="space-y-5">

    <!-- Script picker prompt — only on lesson 0 -->
    {#if lessonData.number === 0}
      <div class="border-t-2 border-[#4f46e5] py-3">
        <p class="font-mono text-[0.7rem] lowercase tracking-wider text-[#4f46e5] mb-1">tip</p>
        <p class="text-sm text-[#475569] {showTelugu ? 'font-telugu' : ''}">
          {showTelugu
            ? 'అన్ని ఉదాహరణలు మీరు ఎంచుకున్న లిపిలో కనిపిస్తాయి. లిపిని, వ్యాఖ్యాన భాషను settings లో మార్చండి.'
            : 'All Sanskrit renders in your chosen script. Both the script and the explanation language live on the settings page.'}
        </p>
      </div>
    {/if}

    <!-- Sūtra links -->
    {#if lessonData.sutras?.length}
      <div class="flex items-baseline gap-3 flex-wrap">
        <span class="font-mono text-[0.7rem] tracking-wider lowercase text-[#94a3b8]">{#if showTelugu}<Sanskrit text="సూత్రములు" source="telugu" />{:else}<Sanskrit text="sūtras" source="iast" />{/if}</span>
        {#each lessonData.sutras as sutra}
          <a href="/ref/{sutra}"
             class="font-mono text-[0.78rem] text-[#4f46e5] hover:text-[#f97316] transition-colors">
            {sutra}
          </a>
        {/each}
      </div>
    {/if}


    <!-- Sections -->
    {#each (lessonData.sections ?? []) as section, si}
      {@const sectionId = sectionNav.find(n => n.si === si)?.anchor}

      {#if section.type === 'grammar_note'}
        <!-- Grammar notes are pedagogical pivots — render as a chapter-break with
             a saffron rule, not a yellow callout card. -->
        <div id={sectionId} class="grammar-note scroll-mt-4">
          <span class="grammar-note-label">{showTelugu ? 'వ్యాకరణము' : 'grammar'}</span>
          {#if showTelugu && section.items?.[0]?.telugu}
            <p class="font-telugu grammar-note-text">{section.items[0].telugu}</p>
          {:else if !showTelugu && section.items?.[0]?.english}
            <p class="grammar-note-text">{section.items[0].english}</p>
          {/if}
        </div>

      {:else if section.type === 'vocabulary'}
        <div id={sectionId} class="lesson-section scroll-mt-4">
          <div class="lesson-section-head flex items-baseline gap-6">
            <span class="lesson-section-label">{ui.vocabulary}</span>
            <span class="lesson-section-sublabel">
              <Sanskrit text="śabda" source="iast" /> · {showTelugu ? 'అర్థము' : 'meaning'}
            </span>
          </div>
          <div class="divide-y divide-stone-100">
            {#each (section.items ?? []) as group}
              {@const words = group.words ?? [group]}
              <div class="px-4 py-1.5 vocab-row" style="--vocab-cols:{words.length}">
                {#each words as word}
                  <div class="py-1">
                    <div class="text-sm font-medium leading-snug">
                      <Sanskrit text={word.sanskrit_telugu} source="telugu" />
                      {#if word.tag}
                        <span class="vocab-tag-group vocab-tag-group--desktop">
                          {#each parseTag(word.tag) as t, ti}
                            {#if ti > 0}<span class="vocab-tag-dot">·</span>{/if}
                            {#if t.deva}
                              <button class="vocab-tag" onclick={() => selectedTerm.set(t.deva)}>
                                <Sanskrit text={t.text} source="iast" />
                              </button>
                            {:else}
                              <span class="vocab-tag-plain">{t.text}</span>
                            {/if}
                          {/each}
                        </span>
                      {/if}
                    </div>
                    {#if showTelugu && word.telugu_gloss}
                      <div class="font-telugu text-stone-400 text-xs mt-0.5">{word.telugu_gloss}</div>
                    {:else if !showTelugu && word.english}
                      <div class="text-stone-400 text-xs mt-0.5">{word.english}</div>
                    {/if}
                    {#if word.tag}
                      <span class="vocab-tag-group vocab-tag-group--mobile">
                        {#each parseTag(word.tag) as t, ti}
                          {#if ti > 0}<span class="vocab-tag-dot">·</span>{/if}
                          {#if t.deva}
                            <button class="vocab-tag" onclick={() => selectedTerm.set(t.deva)}>
                              <Sanskrit text={t.text} source="iast" />
                            </button>
                          {:else}
                            <span class="vocab-tag-plain">{t.text}</span>
                          {/if}
                        {/each}
                      </span>
                    {/if}
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        </div>

      {:else if section.type === 'reading'}
        <div id={sectionId} class="lesson-section scroll-mt-4">
          <div class="lesson-section-head">
            <span class="lesson-section-label">{ui.reading}</span>
          </div>
          <ol class="divide-y divide-stone-50">
            {#each (section.items ?? []) as item}
              {@const key = `${si}-${item.n}`}
              {@const gloss = showTelugu ? item.telugu : item.english}
              <li class="px-4 py-2.5 flex items-baseline gap-3 flex-wrap">
                <span class="text-xs text-stone-300 w-4 flex-shrink-0 text-right tabular-nums">{item.n}</span>
                <div class="flex-1 text-base leading-snug min-w-0">
                  <Sanskrit text={item.sanskrit_telugu} source="telugu" />
                </div>
                {#if gloss}
                  <div class="flex items-center gap-2 justify-end flex-shrink-0">
                    {#if revealed.has(key)}
                      <span class="text-sm text-stone-400 {showTelugu ? 'font-telugu' : 'italic'} text-right leading-snug">{gloss}</span>
                      <button onclick={() => toggleAnswer(key)} class="flex-shrink-0 text-stone-300 hover:text-stone-500 transition-colors" aria-label="hide">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>
                      </button>
                    {:else}
                      <button onclick={() => toggleAnswer(key)} class="flex-shrink-0 text-stone-200 hover:text-stone-400 transition-colors" aria-label="reveal meaning">
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
        <div id={sectionId} class="lesson-section scroll-mt-4">
          <div class="lesson-section-head">
            <span class="lesson-section-label">{ui.exercises} — {ui.translatePrompt}</span>
          </div>
          <ol class="divide-y divide-stone-50">
            {#each (section.items ?? []) as item}
              {@const key = `ex-${si}-${item.n}`}
              <li class="px-4 py-2.5 flex items-baseline gap-3 flex-wrap">
                <span class="text-xs text-stone-300 w-4 flex-shrink-0 text-right tabular-nums">{item.n}</span>
                <div class="flex-1 min-w-0">
                  {#if showTelugu && item.telugu}
                    <div class="font-telugu text-stone-800 leading-snug">{item.telugu}</div>
                  {:else if !showTelugu && item.english}
                    <div class="text-stone-700 leading-snug">{item.english}</div>
                  {/if}
                </div>
                {#if item.sanskrit_telugu}
                  <div class="flex items-center gap-2 justify-end flex-shrink-0">
                    {#if revealed.has(key)}
                      <span class="text-base text-stone-700 text-right leading-snug">
                        <Sanskrit text={item.sanskrit_telugu} source="telugu" />
                      </span>
                      <button onclick={() => toggleAnswer(key)} class="flex-shrink-0 text-stone-300 hover:text-stone-500 transition-colors" aria-label="hide">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>
                      </button>
                    {:else}
                      <button onclick={() => toggleAnswer(key)} class="flex-shrink-0 text-stone-200 hover:text-stone-400 transition-colors" aria-label="reveal answer">
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
        <div id={sectionId} class="lesson-section scroll-mt-4">
          <div class="lesson-section-head flex items-baseline gap-3">
            <span class="lesson-section-label">{ui.paradigm}</span>
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
                  <tr class="border-b border-[#e2e8f0]">
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
                  <tr class="border-b border-[#e2e8f0]">
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
                    <tr class="hover:bg-[#fff7ed]">
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
          {:else if section.layout === 'stems' && section.stems}
            <!-- Multi-stem layout: one sg/pl column pair per stem -->
            {@const stems = section.stems ?? []}
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-stone-200 bg-stone-50">
                    <th class="px-4 py-3 text-left font-normal min-w-[6rem]" rowspan="2">
                      <button class="jargon-term" onclick={() => selectedTerm.set('विभक्ति')}>
                        <Sanskrit text="vibhakti" source="iast" />
                        <span class="jargon-en">{showTelugu ? 'విభక్తి' : 'case'}</span>
                      </button>
                    </th>
                    {#each stems as stem}
                      {@const hasDual = (section.items ?? []).some((r: any) => r.dual_iast != null)}
                      <th class="px-3 py-2 text-center font-normal border-l border-stone-100" colspan={hasDual ? 3 : 2}>
                        <Sanskrit text={stem} source="iast" />
                      </th>
                    {/each}
                  </tr>
                  <tr class="border-b border-[#e2e8f0]">
                    {#each stems as _stem, si}
                      {@const hasDual = (section.items ?? []).some((r: any) => r.dual_iast != null)}
                      <th class="px-3 py-1.5 text-left font-normal {si > 0 ? 'border-l border-stone-100' : ''}">
                        <button class="jargon-term text-xs" onclick={() => selectedTerm.set('एकवचन')}>
                          <Sanskrit text="eka°" source="iast" />
                          <span class="jargon-en">{showTelugu ? 'ఏక' : 'sg'}</span>
                        </button>
                      </th>
                      {#if hasDual}
                        <th class="px-3 py-1.5 text-left font-normal">
                          <button class="jargon-term text-xs" onclick={() => selectedTerm.set('द्विवचन')}>
                            <Sanskrit text="dvi°" source="iast" />
                            <span class="jargon-en">{showTelugu ? 'ద్వి' : 'du'}</span>
                          </button>
                        </th>
                      {/if}
                      <th class="px-3 py-1.5 text-left font-normal">
                        <button class="jargon-term text-xs" onclick={() => selectedTerm.set('बहुवचन')}>
                          <Sanskrit text="bahu°" source="iast" />
                          <span class="jargon-en">{showTelugu ? 'బహు' : 'pl'}</span>
                        </button>
                      </th>
                    {/each}
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-50">
                  {#each (section.items ?? []) as row}
                    {@const c = caseMap[row.case]}
                    {@const hasDual = row.dual_iast != null}
                    {@const sgArr = Array.isArray(row.singular_iast) ? row.singular_iast : (row.singular_iast != null ? [row.singular_iast] : [])}
                    {@const duArr = Array.isArray(row.dual_iast)     ? row.dual_iast     : (row.dual_iast     != null ? [row.dual_iast]     : [])}
                    {@const plArr = Array.isArray(row.plural_iast)   ? row.plural_iast   : (row.plural_iast   != null ? [row.plural_iast]   : [])}
                    <tr class="hover:bg-[#fff7ed]">
                      <td class="px-4 py-3">
                        <button class="jargon-term" onclick={() => c && selectedTerm.set(c.deva)}>
                          <Sanskrit text={c?.iast ?? row.case} source="iast" />
                          <span class="jargon-en">{showTelugu ? (c?.telugu ?? row.case) : (c?.english ?? row.case)}</span>
                        </button>
                      </td>
                      {#each stems as _stem, si}
                        <td class="px-3 py-3 text-base {si > 0 ? 'border-l border-stone-100' : ''}">
                          <Sanskrit text={sgArr[si] ?? '—'} source="iast" />
                        </td>
                        {#if hasDual}
                          <td class="px-3 py-3 text-base text-stone-400">
                            <Sanskrit text={duArr[si] ?? '—'} source="iast" />
                          </td>
                        {/if}
                        <td class="px-3 py-3 text-base text-stone-400">
                          <Sanskrit text={plArr[si] ?? '—'} source="iast" />
                        </td>
                      {/each}
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          {:else if (section.items ?? [])[0]?.case}
            <!-- Case/declension layout -->
            <div class="overflow-x-auto"><table class="w-full text-sm">
              <thead>
                <tr class="border-b border-stone-200 bg-stone-50">
                  <th class="px-4 py-3 text-left font-normal min-w-[6rem]">
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
                  <tr class="hover:bg-[#fff7ed]">
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
            </table></div>
          {:else}
            <!-- Standard person/singular/plural layout -->
            <div class="overflow-x-auto"><table class="w-full text-sm">
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
                  <tr class="hover:bg-[#fff7ed]">
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
            </table></div>
          {/if}
        </div>

      {:else if section.type === 'passage'}
        <div id={sectionId} class="lesson-section scroll-mt-4">
          <div class="lesson-section-head">
            <span class="lesson-section-label">{ui.passage}</span>
          </div>
          <ol class="divide-y divide-stone-50">
            {#each (section.items ?? []) as item}
              {@const key = `passage-${si}-${item.n}`}
              {@const isHidden = hidden.has(key)}
              <li class="px-4 py-2.5 sensitive-row" class:has-flag={item.sensitive && sensitiveNoteHtml}>
                <div class="flex gap-3 flex-wrap">
                  <span class="text-xs text-stone-300 w-4 flex-shrink-0 text-right tabular-nums mt-1">{item.n}</span>
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <div class="text-base leading-snug flex items-start gap-2">
                      <Sanskrit text={item.sanskrit_telugu} source="telugu" />
                      {#if item.sensitive && sensitiveNoteHtml}
                        <span class="sensitive-flag-wrap shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 sensitive-flag-icon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </span>
                      {/if}
                    </div>
                    {#if item.english && !isHidden}
                      <p class="text-sm text-stone-400 italic leading-snug">{item.english}</p>
                    {/if}
                  </div>
                  {#if item.english}
                    <button onclick={() => toggleReveal(key)} class="flex-shrink-0 text-stone-200 hover:text-stone-400 transition-colors mt-1" aria-label={isHidden ? 'show meaning' : 'hide meaning'}>
                      {#if isHidden}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 118 0z" clip-rule="evenodd"/></svg>
                      {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>
                      {/if}
                    </button>
                  {/if}
                </div>
                {#if item.sensitive && sensitiveNoteHtml}
                  <div class="sensitive-tooltip">{@html sensitiveNoteHtml}</div>
                {/if}
              </li>
            {/each}
          </ol>
        </div>

      {:else if section.type === 'script_table'}
        {@const lbl = showTelugu ? (section.label_telugu ?? section.label) : section.label}
        <div id={sectionId} class="lesson-section scroll-mt-4">
          {#if lbl}
            <div class="lesson-section-head">
              <span class="lesson-section-label">{lbl}</span>
            </div>
          {/if}
          <div class="divide-y divide-stone-50">
            {#each (section.items ?? []) as item}
              {@const note = showTelugu ? (item.note_telugu ?? item.note) : (item.note_english ?? item.note)}
              <div class="px-4 py-2.5 grid grid-cols-[3.5rem_1fr] items-baseline gap-4">
                <span class="text-xl font-medium text-stone-800">
                  <Sanskrit text={item.iast} source="iast" fallback={item.iast} />
                </span>
                {#if note}
                  <span class="text-xs text-stone-500 italic">{note}</span>
                {/if}
              </div>
            {/each}
          </div>
        </div>

      {:else if section.type === 'sandhi_table'}
        {@const lbl = showTelugu ? (section.label_telugu ?? section.label) : section.label}
        <div id={sectionId} class="lesson-section scroll-mt-4">
          {#if lbl}
            <div class="lesson-section-head">
              <span class="lesson-section-label">{lbl}</span>
            </div>
          {/if}
          <div class="divide-y divide-stone-100">
            {#each (section.items ?? []) as item}
              <div class="px-4 py-3 space-y-1.5">
                <div class="flex items-center gap-3 flex-wrap">
                  <span class="text-xs font-mono font-semibold text-violet-700 bg-violet-50 border border-violet-200 rounded px-2 py-0.5"><Sanskrit text={item.pattern} source="iast" /></span>
                  <span class="text-stone-700"><Sanskrit text={item.iast_before} source="iast" /></span>
                  <span class="text-stone-300">→</span>
                  <span class="font-medium text-stone-800"><Sanskrit text={item.iast_after} source="iast" /></span>
                </div>
                {#if item.english}
                  <p class="text-xs text-stone-500 italic pl-1">{item.english}</p>
                {/if}
              </div>
            {/each}
          </div>
        </div>

      {:else if section.type === 'passage_translation'}
        <div id={sectionId} class="lesson-section lesson-section-exercises scroll-mt-4">
          <div class="lesson-section-head lesson-section-head-exercises flex items-baseline gap-3">
            <span class="lesson-section-label">{ui.exercises}</span>
            <span class="lesson-section-sublabel">{showTelugu ? 'తెలుగు వాక్యములను సంస్కృతములోనికి మార్చుము' : 'translate these English sentences into Sanskrit'}</span>
          </div>
          <ol class="divide-y divide-amber-50">
            {#each (section.items ?? []) as item}
              <li class="px-4 py-2.5 sensitive-row">
                <div class="flex gap-3">
                  <span class="text-xs text-amber-300 w-4 flex-shrink-0 text-right tabular-nums mt-1">{item.n}</span>
                  <div class="flex-1 min-w-0 space-y-0.5">
                    {#if showTelugu && item.telugu}
                      <p class="font-telugu text-stone-700 leading-snug">{item.telugu}</p>
                    {:else if !showTelugu && item.english}
                      <p class="text-stone-700 leading-snug">{item.english}</p>
                    {/if}
                    {#if item.sensitive && sensitiveNoteHtml}
                      <span class="sensitive-flag-wrap shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 sensitive-flag-icon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </span>
                    {/if}
                  </div>
                </div>
                {#if item.sensitive && sensitiveNoteHtml}
                  <div class="sensitive-tooltip">{@html sensitiveNoteHtml}</div>
                {/if}
              </li>
            {/each}
          </ol>
        </div>
      {/if}

    {/each}

    <!-- Grammar bridge — link out to the grammar paths this lesson exercises -->
    {#if bridgePaths.length > 0}
      <div class="grammar-bridge">
        <p class="bridge-label">{showTelugu ? 'ఈ పాఠంలో సాధన చేయు వ్యాకరణ మార్గములు' : 'this lesson exercises'}</p>
        <ul class="bridge-list">
          {#each bridgePaths as p}
            <li>
              <a href="/learn/{p.id}">
                <span class="bridge-deva font-{$displayScript}">{p.label}</span>
                <span class="bridge-en">{p.title?.replace(/^[^—]+ — /, '') ?? ''}</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
{/if}

<style>
  /* Lesson sections — bare hairlines, no cards. The label is the only chrome. */
  :global(.lesson-section) {
    border-top: 1px solid #e2e8f0;
  }
  /* Section header — eyebrow, no background */
  :global(.lesson-section-head) {
    padding: 0.7rem 0 0.5rem;
  }
  :global(.lesson-section-label) {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    text-transform: lowercase;
  }
  :global(.lesson-section-sublabel) {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    letter-spacing: 0.04em;
    color: #cbd5e1;
    text-transform: lowercase;
  }
  /* Exercises: no block tint. The accent is a 2px saffron top-rule plus the
     saffron eyebrow. Section reads as continuous page, not a colored card. */
  :global(.lesson-section-exercises) {
    border-top: 2px solid #f97316;
  }
  :global(.lesson-section-head-exercises .lesson-section-label) {
    color: #f97316;
  }

  /* Reading → grammar bridge: a quiet footer linking grammar paths that this
     lesson's grammar_focus mentions. Indigo (the "cross-reference" accent). */
  .grammar-bridge {
    border-top: 1px solid #e2e8f0;
    padding-top: 1rem;
    margin-top: 1.5rem;
  }
  .bridge-label {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    text-transform: lowercase;
    margin: 0 0 0.65rem;
  }
  .bridge-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .bridge-list li a {
    display: flex;
    align-items: baseline;
    gap: 0.85rem;
    padding: 0.4rem 0;
    text-decoration: none;
    color: inherit;
    transition: color 0.15s;
  }
  .bridge-list li a:hover { color: #f97316; }
  .bridge-deva {
    font-size: 0.95rem;
    color: #4f46e5;
    min-width: 5rem;
  }
  .bridge-list li a:hover .bridge-deva { color: #f97316; }
  .bridge-en {
    font-size: 0.85rem;
    font-style: italic;
    color: #94a3b8;
  }

  /* Grammar note — chapter-break treatment: saffron top-rule, monospace eyebrow,
     larger body text. No card, no yellow background. */
  .grammar-note {
    border-top: 2px solid #f97316;
    padding: 1rem 0 0.75rem;
    margin: 1.5rem 0 1rem;
  }
  .grammar-note-label {
    display: block;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: #f97316;
    text-transform: lowercase;
    margin-bottom: 0.6rem;
  }
  .grammar-note-text {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #0f1419;
    margin: 0;
    max-width: 36rem;
  }

  .sensitive-row {
    position: relative;
  }
  .sensitive-flag-wrap {
    display: inline-flex;
  }
  .sensitive-flag-icon {
    color: #b45309;
    opacity: 0.6;
    cursor: default;
    transition: opacity 0.15s;
  }
  .sensitive-row:hover .sensitive-flag-icon {
    opacity: 1;
  }
  .sensitive-tooltip {
    display: none;
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: 100%;
    margin-top: 4px;
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 6px;
    padding: 0.75rem 0.875rem;
    font-size: 0.8rem;
    color: #78350f;
    line-height: 1.55;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    z-index: 50;
    text-align: left;
  }
  .sensitive-row:has(.sensitive-flag-wrap:hover) .sensitive-tooltip,
  .sensitive-row:has(.sensitive-flag-wrap:focus) .sensitive-tooltip {
    display: block;
  }
  .sensitive-tooltip :global(p) {
    margin: 0 0 0.5rem;
  }
  .sensitive-tooltip :global(p:last-child) {
    margin-bottom: 0;
  }
  .sensitive-tooltip :global(blockquote) {
    margin: 0.5rem 0 0;
    padding-left: 0.75rem;
    border-left: 2px solid #fbbf24;
    font-style: italic;
    color: #92400e;
  }

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

  /* Vocabulary superscript tags */
  .vocab-tag-group {
    display: inline-flex;
    align-items: baseline;
    line-height: 1;
  }
  .vocab-tag-group--mobile {
    display: inline-flex;
    margin-top: 0.25rem;
  }
  .vocab-tag-group--desktop {
    display: none;
  }
  @media (min-width: 640px) {
    .vocab-tag-group--mobile { display: none; }
    .vocab-tag-group--desktop {
      display: inline-flex;
      position: relative;
      top: -0.35em;
      margin-left: 0.15em;
    }
  }
  .vocab-tag {
    font-size: 0.65rem;
    line-height: 1;
    padding: 0 1px;
    color: #7c3aed;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
  }
  .vocab-tag:hover { color: #5b21b6; }
  .vocab-tag-plain {
    font-size: 0.65rem;
    line-height: 1;
    color: #7c3aed;
  }
  .vocab-tag-dot {
    font-size: 0.75rem;
    color: #374151;
    line-height: 1;
    padding: 0 1px;
  }

  /* Vocabulary row grid: always use book column count, words are short */
  .vocab-row {
    display: grid;
    gap: 0.25rem 0.75rem;
    grid-template-columns: repeat(var(--vocab-cols, 1), minmax(0, 1fr));
  }
</style>
