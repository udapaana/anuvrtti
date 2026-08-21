<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { cellKey } from '$lib/usage/normalize';
  import { TERMINALS, TERMINAL_DEV } from '$lib/usage/taxonomy';
  import { transliterate, type Script } from '$lib/transliteration';
  import type { UsageIndex, UsageSection, ParadigmEntry, Attestation } from '$lib/usage/types';

  // प्रयोग — the corpus indexed by what the language declines, rather than by
  // what the reader meets next. सूत्र (/ref) keeps Pāṇini's order; this is the
  // other index over the same 256 readings, joined to it by citation.
  //
  // The axes come from the data, not from this file: सुबन्त is विभक्ति × वचन, but
  // तिङन्त is पुरुष × वचन once लकार is pinned, and सन्धि is वर्ण × वर्ण. A grid that
  // hardcoded case and number could not grow into those.

  let index = $state<UsageIndex | null>(null);
  let error = $state('');
  let loaded = $state(false);

  let query = $state('');
  let showSparse = $state(false);
  let showAllStems = $state(false);
  /** Class headings the reader has folded shut. Open by default. */
  let collapsed = $state<Set<string>>(new Set());
  function toggleGroup(id: string) {
    const next = new Set(collapsed);
    next.has(id) ? next.delete(id) : next.add(id);
    collapsed = next;
  }
  /**
   * Search by folding both sides to bare roman.
   *
   * Nothing can be assumed about the input. The display script is a rendering
   * preference, not a keyboard — someone reading Telugu still types roman — and
   * among the romanisations `pitr`, `pitṛ`, `pitR` and `pitRi` are the same
   * word spelt four ways.
   *
   * So instead of guessing the scheme, both the stem and the query are reduced
   * to a comparison key: transliterate to IAST, strip the diacritics, lowercase.
   * पितृ, pitṛ, pitr and pitri all become `pitr` and match each other. Detecting
   * the script is one call rather than seventeen attempts, and it degrades
   * gracefully — an unrecognised string simply matches nothing.
   */
  /** Which script a string is written in, by Unicode block. */
  const SCRIPT_RANGES: Array<[RegExp, Script]> = [
    [/[\u0900-\u097f]/, 'devanagari'],
    [/[\u0980-\u09ff]/, 'bengali'],
    [/[\u0a00-\u0a7f]/, 'gurmukhi'],
    [/[\u0a80-\u0aff]/, 'gujarati'],
    [/[\u0b00-\u0b7f]/, 'odia'],
    [/[\u0b80-\u0bff]/, 'tamil'],
    [/[\u0c00-\u0c7f]/, 'telugu'],
    [/[\u0c80-\u0cff]/, 'kannada'],
    [/[\u0d00-\u0d7f]/, 'malayalam'],
    [/[\u0d80-\u0dff]/, 'sinhala']
  ];
  function detectScript(t: string): Script | null {
    for (const [re, sc] of SCRIPT_RANGES) if (re.test(t)) return sc;
    return null;   // roman of some flavour — folding handles the rest
  }

  /** IAST → bare ASCII: strip combining marks, then the stragglers. */
  function fold(t: string): string {
    return t
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ṃ|ṁ/g, 'm')
      .replace(/ḥ/g, 'h')
      .toLowerCase()
      .replace(/[^a-z]/g, '');
  }

  /** Every subject and sparse stem, keyed by its folded roman form. */
  let searchKeys = $state<Array<{ subject: string; key: string; sparse: boolean }>>([]);
  $effect(() => {
    const all = [
      ...subjects.map((s) => ({ subject: s.subject, sparse: false })),
      ...(section?.sparse ?? []).map((e) => ({ subject: e.subject, sparse: true }))
    ];
    let cancelled = false;
    (async () => {
      const out: Array<{ subject: string; key: string; sparse: boolean }> = [];
      for (const x of all) {
        try {
          const iast = await transliterate(x.subject, 'devanagari', 'iast');
          out.push({ ...x, key: fold(iast) });
        } catch { out.push({ ...x, key: fold(x.subject) }); }
      }
      if (!cancelled) searchKeys = out;
    })();
    return () => { cancelled = true; };
  });

  /** The query, folded the same way. */
  let queryKey = $state('');
  $effect(() => {
    const q = query.trim();
    if (!q) { queryKey = ''; return; }
    let cancelled = false;
    (async () => {
      try {
        const from = detectScript(q);
        const iast = from ? await transliterate(q, from, 'iast') : q;
        if (!cancelled) queryKey = fold(iast);
      } catch {
        if (!cancelled) queryKey = fold(q);
      }
    })();
    return () => { cancelled = true; };
  });

  const sections = $derived<UsageSection[]>(index?.sections ?? []);
  const section = $derived<UsageSection | null>(
    sections.find((s) => s.kind === kind) ?? sections[0] ?? null
  );
  const rows = $derived(section?.axes?.[0]?.values ?? []);
  const cols = $derived(section?.axes?.[1]?.values ?? []);

  /**
   * A subject can hold several grids. गम् has one per लकार — गम् लट्, गम् लङ्,
   * गम् लोट् — because the lakāra is the feature that has to be pinned before
   * पुरुष × वचन is a grid at all. So the entry is keyed by subject AND its
   * pinned features, not by subject alone.
   */
  const pinKey = (e: ParadigmEntry) => Object.values(e.pinned ?? {}).join('·');
  /**
   * The list holds one row per SUBJECT, not per grid.
   *
   * गम् has seven entries — one per लकार — and listing them separately turned a
   * single root into seven rows of 1-to-5 filled cells each, burying the fact
   * that they are one verb. The row now stands for the root and carries its
   * best-attested लकार; the rest are reachable from the panel.
   */
  const subjects = $derived.by(() => {
    const all = section?.entries ?? [];
    const by = new Map<string, ParadigmEntry[]>();
    for (const e of all) {
      if (!by.has(e.subject)) by.set(e.subject, []);
      by.get(e.subject)!.push(e);
    }
    return [...by.entries()].map(([subject, variants]) => ({
      subject,
      variants,
      // What the row shows: the fullest grid, and the total across all of them.
      lead: variants.reduce((a, b) => (b.filled > a.filled ? b : a)),
      filled: variants.reduce((n, e) => n + e.filled, 0),
      total: variants.reduce((n, e) => n + e.total, 0),
      group: variants[0].group
    }));
  });

  const listed = $derived.by(() => {
    const q = query.trim();
    if (!q) return subjects;
    return subjects.filter((s) => s.subject.includes(q));
  });

  const entry = $derived<ParadigmEntry | null>(
    section?.entries.find((e) => e.subject === subject && (!pin || pinKey(e) === pin)) ??
      section?.entries.find((e) => e.subject === subject) ??
      section?.entries[0] ??
      null
  );

  /**
   * The class on screen — the paradigm being shown.
   *
   * देव and बाल are not two things to browse; they are one declension with two
   * vocabularies. So the CLASS is what you pick, and the stem is a variable
   * inside it: which cells light up and whose phrase appears.
   */
  const activeGroup = $derived.by(() => {
    const gs = section?.groups ?? [];
    // The class of the subject on screen — otherwise picking अस् from the rail
    // left the heading reading भ्वादि while showing an अदादि root.
    return gs.find((g) => g.id === entry?.group) ?? gs.find((g) => g.id === klass) ?? gs[0] ?? null;
  });

  /**
   * The stems sharing the paradigm on screen.
   *
   * For a सुबन्त that is the matrix cell — same terminal, same gender — so
   * picking ग्राम or बाल swaps the vocabulary while the endings stay put. For
   * the other sections it is the taxonomy group.
   */
  const classMembers = $derived.by(() => {
    if (!entry) return subjects;
    if (section?.kind === 'subanta') {
      return subjects.filter(
        (s) => s.lead.terminal === entry.terminal && s.lead.linga === entry.linga
      );
    }
    return activeGroup ? subjects.filter((s) => s.group === activeGroup.id) : subjects;
  });

  /** What to call the paradigm on screen. */
  const classLabel = $derived.by(() => {
    if (section?.kind === 'subanta' && entry) {
      const t = TERMINAL_DEV[entry.terminal ?? ''] ?? entry.terminal ?? '';
      return entry.linga ? `${t} ${entry.linga}` : `${t} · लिङ्ग अनिश्चित`;
    }
    return activeGroup?.dev ?? '';
  });



  /**
   * Every grid the subject has, all rendered at once.
   *
   * Showing one लकार at a time made the tabs a mode switch, and comparing
   * गच्छति with अगच्छत् meant clicking back and forth holding one in memory.
   * The whole verb is on the page; the tabs scroll to a card rather than
   * replacing it.
   */
  const cards = $derived.by(() => {
    if (!entry) return [];
    const all = section?.entries.filter((e) => e.subject === entry.subject) ?? [];
    // A सर्वनाम has one paradigm per gender — तद् really is सः, सा and तत् — so
    // it becomes three cards rather than one, each pinned to its liṅga.
    const byLinga = entry.paradigmByLinga;
    if (byLinga && all.length === 1) {
      return Object.entries(byLinga).map(([lg, para]) => ({
        ...entry,
        pinned: { 'लिङ्ग': lg },
        paradigm: para
      })) as ParadigmEntry[];
    }
    return all;
  });
  const siblings = $derived(cards.length > 1 ? cards : []);

  function scrollToCard(e: ParadigmEntry) {
    const el = document.getElementById('card-' + (pinKey(e) || 'x'));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /**
   * The list, under the tradition's own class headings.
   *
   * 99 stems as one column gave no purchase — देव, ग्राम, बाल and नर are one
   * pattern with four vocabularies, and nothing said so. Grouped by
   * प्रातिपदिकान्त (and by गण for verbs), the shape of the declension is the
   * first thing visible and a stem is findable by the class you know it from.
   */
  const grouped = $derived.by(() => {
    const gs = section?.groups ?? [];
    if (!gs.length) return [{ group: null as any, items: listed }];
    const out: Array<{ group: any; items: typeof listed }> = [];
    for (const g of gs) {
      const items = listed.filter((e) => e.group === g.id);
      if (items.length) out.push({ group: g, items });
    }
    // Anything the taxonomy does not cover still has to appear somewhere.
    const claimed = new Set(gs.map((g) => g.id));
    const rest = listed.filter((e) => !e.group || !claimed.has(e.group));
    if (rest.length) out.push({ group: { id: '', dev: 'अन्ये', en: 'other' }, items: rest });
    return out;
  });

  // Abbreviated by syllable, not by character count: slicing three code points
  // off स्त्रीलिङ्ग gives स्त, which is not a word.
  const LINGAS_COL = ['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग'];
  const LINGA_SHORT: Record<string, string> = {
    'पुंलिङ्ग': 'पुं', 'स्त्रीलिङ्ग': 'स्त्री', 'नपुंसकलिङ्ग': 'नपुं'
  };

  /**
   * सुबन्त as a matrix, not a list.
   *
   * A declension is named by two coordinates — what the stem ends in, and its
   * gender — so अकारान्त पुंलिङ्ग and अकारान्त नपुंसक are one row apart rather
   * than two unrelated headings. Laid out as a grid, the system is visible:
   * which combinations the language has, which the corpus has reached, and
   * which are empty. A list of six names showed none of that.
   */
  const matrix = $derived.by(() => {
    const rowsOut: Array<{ terminal: string; dev: string; cells: Array<{
      linga: string; count: number; stems: typeof subjects;
    }> }> = [];
    for (const t of TERMINALS) {
      const inRow = subjects.filter((s) => s.lead.terminal === t);
      if (!inRow.length) continue;
      rowsOut.push({
        terminal: t,
        dev: TERMINAL_DEV[t] ?? t,
        cells: LINGAS_COL.map((lg) => {
          const stems = inRow.filter((s) => s.lead.linga === lg);
          return { linga: lg, count: stems.length, stems };
        })
      });
    }
    return rowsOut;
  });

  /** Stems whose gender the corpus never settled — a matrix cell cannot hold them. */
  const unsettled = $derived(subjects.filter((s) => !s.lead.linga));

  /** The matrix cell on screen, as `terminal|linga`. */
  const activeCell = $derived.by(() => {
    if (!entry) return null;
    return (entry.terminal ?? '') + '|' + (entry.linga ?? '');
  });

  /**
   * Search hits — the words themselves, not the classes.
   *
   * With the rail a matrix, filtering class names answered nothing: a reader
   * looking for पितृ does not know it is ऋकारान्त. The box now searches stems
   * across the whole section and jumps straight to the one picked, which is
   * also the only way to reach the ~310 stems attested once.
   */
  const hits = $derived.by(() => {
    if (!queryKey) return [];
    const matched = new Set(
      searchKeys.filter((k) => k.key.includes(queryKey)).map((k) => k.subject)
    );
    if (!matched.size) return [];
    const rich = subjects
      .filter((s) => matched.has(s.subject))
      .map((s) => ({ subject: s.subject, lead: s.lead, filled: s.filled, total: s.total, sparse: false }));
    const thin = (section?.sparse ?? [])
      .filter((e) => matched.has(e.subject))
      .map((e) => ({ subject: e.subject, lead: null, filled: e.filled, total: 24, sparse: true }));
    return [...rich, ...thin].slice(0, 40);
  });

  /** The classes, with how many stems the corpus puts in each. */
  const classList = $derived.by(() => {
    const gs = section?.groups ?? [];
    const q = query.trim();
    return gs
      .map((g) => ({
        ...g,
        count: subjects.filter((s) => s.group === g.id).length
      }))
      .filter((g) => g.count > 0 && (!q || g.dev.includes(q) ||
        subjects.some((s) => s.group === g.id && s.subject.includes(q))));
  });

  const sparseListed = $derived.by(() => {
    const all = section?.sparse ?? [];
    const q = query.trim();
    if (!q) return all;
    return all.filter((e) => e.subject.includes(q));
  });

  // The URL is the state, not a copy of it. Reading the query once on mount and
  // writing it back on every click meant a `goto` could land while the old
  // values were still in the component, and the two would disagree — a deep
  // link to a cell came back as the default stem. `$page` re-runs on every
  // navigation, so deriving from it keeps one source of truth.
  const kind = $derived($page.url.searchParams.get('kind') ?? 'subanta');
  const klass = $derived($page.url.searchParams.get('class'));
  const subject = $derived($page.url.searchParams.get('stem'));
  const pin = $derived($page.url.searchParams.get('pin'));
  const cell = $derived($page.url.searchParams.get('cell'));

  onMount(async () => {
    try {
      const res = await fetch('/data/usage.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('could not load the usage index (' + res.status + ')');
      index = await res.json();
      loaded = true;
    } catch (e) {
      error = String((e as Error).message || e);
    }
  });

  function go(opts: {
    kind?: string; class?: string | null; stem?: string | null;
    pin?: string | null; cell?: string | null;
  }) {
    const p = new URLSearchParams();
    const kd = opts.kind ?? kind;
    if (kd && kd !== 'subanta') p.set('kind', kd);
    const cl = opts.class !== undefined ? opts.class : klass;
    if (cl) p.set('class', cl);
    if (opts.stem) p.set('stem', opts.stem);
    if (opts.pin) p.set('pin', opts.pin);
    if (opts.cell) p.set('cell', opts.cell);
    goto('/usage?' + p.toString(), { replaceState: true, noScroll: true, keepFocus: true });
  }

  function pickKind(k: string) {
    go({ kind: k, class: null, stem: null, cell: null });
  }

  /** Opening a class clears the stem, so it lands on the class's best-attested one. */
  function pickClass(id: string) {
    showAllStems = false;
    go({ class: id, stem: null, cell: null });
  }

  function pickSubject(e: ParadigmEntry) {
    go({ stem: e.subject, pin: pinKey(e) || null, cell: null });
  }

  /** Selecting a cell also selects the card it belongs to. */
  function pickCell(k: string, card?: ParadigmEntry) {
    const c = card ?? entry;
    const samePin = c && pinKey(c) === (entry ? pinKey(entry) : '');
    go({
      stem: c?.subject ?? subject,
      pin: c ? pinKey(c) || null : pin,
      cell: cell === k && samePin ? null : k
    });
  }

  /** The attestations in one cell, or [] when the corpus has none. */
  function atts(e: ParadigmEntry, k: string): Attestation[] {
    return e.grid?.[k] ?? [];
  }

  /** What vidyut derives for a cell — shown when the corpus does not attest it. */
  function expected(e: ParadigmEntry, k: string): string[] {
    return e.paradigm?.[k] ?? [];
  }

  const selected = $derived.by(() => {
    if (!entry || !cell) return null;
    const a = atts(entry, cell);
    return { key: cell, atts: a, expected: expected(entry, cell) };
  });
</script>

<svelte:head><title>प्रयोग · usage — anuvrtti</title></svelte:head>

<div class="wrap">
  <header class="head">
    <div class="kicker">प्रयोग · usage</div>
    <h1>The corpus, indexed by what it declines</h1>
    <p class="lede">
      Every cell below is filled from the readings themselves — the form, the line that
      attests it, and the sūtra that produced it where one is recorded. A cell is empty
      exactly when no reading has used it yet.
    </p>
  </header>

  {#if error}
    <p class="err">{error}</p>
  {:else if !loaded}
    <p class="muted">loading…</p>
  {:else if section && entry}
    <div class="cols">
      <nav class="spine">
        <div class="kinds" role="group" aria-label="category">
          {#each sections as s (s.kind)}
            <button
              class="kind"
              class:on={s.kind === section.kind}
              aria-label="{s.en} — {s.entries.length} entries"
              onclick={() => pickKind(s.kind)}
            >
              <Sanskrit text={s.dev} source="devanagari" />
              <span class="kinden">{s.en}</span>
            </button>
          {/each}
        </div>
        <div class="spinehead">
          {#if section.groupBy}
            <span class="groupby"><Sanskrit text={section.groupBy} source="devanagari" /></span>
          {/if}
          <span class="count">
            {subjects.length}
            {section.kind === 'tinanta' ? 'roots' : 'stems'}
          </span>
        </div>
        <input
          class="find"
          bind:value={query}
          placeholder={section.kind === 'tinanta' ? 'search roots…' : 'search stems…'}
          aria-label={section.kind === 'tinanta' ? 'search roots' : 'search stems'}
        />

        {#if query.trim()}
          <div class="hits">
            {#if !hits.length}
              <p class="muted hitnone">nothing matches</p>
            {/if}
            {#each hits as h (h.subject)}
              <button
                class="hit"
                class:thin={h.sparse}
                disabled={h.sparse}
                title={h.sparse ? 'attested once — no paradigm to show' : ''}
                onclick={() => h.lead && (query = '', pickSubject(h.lead))}
              >
                <span class="hitdev"><Sanskrit text={h.subject} source="devanagari" /></span>
                <span class="hitn">{h.sparse ? 'seen once' : `${h.filled}/${h.total}`}</span>
              </button>
            {/each}
          </div>
        {:else if section.kind === 'subanta'}
          <!-- The declension named by its two coordinates. Clicking a cell
               opens that paradigm; the stems inside it are chosen on the page. -->
          <div class="mx" role="grid" aria-label="declensions">
            <div class="mxcorner"></div>
            {#each LINGAS_COL as lg}
              <div class="mxcolhead"><Sanskrit text={LINGA_SHORT[lg] ?? lg} source="devanagari" /></div>
            {/each}
            {#each matrix as row (row.terminal)}
              <div class="mxrowhead"><Sanskrit text={row.dev} source="devanagari" /></div>
              {#each row.cells as c}
                {@const key = row.terminal + '|' + c.linga}
                <button
                  class="mxcell"
                  class:has={c.count > 0}
                  class:on={key === activeCell}
                  disabled={!c.count}
                  aria-label="{row.dev} {c.linga} — {c.count} stems"
                  onclick={() => c.count && pickSubject(c.stems[0].lead)}
                >
                  {c.count || '·'}
                </button>
              {/each}
            {/each}
          </div>

          {#if unsettled.length}
            <button
              class="more"
              class:on={!entry?.linga}
              onclick={() => pickSubject(unsettled[0].lead)}
            >
              {unsettled.length} · gender unsettled
            </button>
          {/if}
        {:else}
          <div class="stems">
            {#each grouped as bucket (bucket.group?.id ?? '_')}
              {#if bucket.group}
                <button
                  class="ghead"
                  aria-expanded={!collapsed.has(bucket.group.id)}
                  onclick={() => toggleGroup(bucket.group.id)}
                >
                  <span class="gcaret">{collapsed.has(bucket.group.id) ? '\u25b8' : '\u25be'}</span>
                  <span class="gdev"><Sanskrit text={bucket.group.dev} source="devanagari" /></span>
                  {#if bucket.group.exemplar}
                    <span class="gex"><Sanskrit text={bucket.group.exemplar} source="devanagari" /></span>
                  {/if}
                  <span class="gn">{bucket.items.length}</span>
                </button>
              {/if}
              {#if !bucket.group || !collapsed.has(bucket.group.id)}
                {#each bucket.items as s (s.subject)}
                  <button
                    class="stem"
                    class:on={s.subject === entry.subject}
                    aria-label="{s.subject} — {s.filled} of {s.total} cells attested"
                    onclick={() => pickSubject(s.lead)}
                  >
                    <span class="sdev">
                      <Sanskrit text={s.subject} source="devanagari" />
                      {#if s.variants.length > 1}
                        <span class="pin">{s.variants.length} लकार</span>
                      {/if}
                    </span>
                    <span class="meter" aria-hidden="true">
                      <span class="fill" style="width:{Math.round((s.filled / s.total) * 100)}%"></span>
                    </span>
                    <span class="sn">{s.filled}/{s.total}</span>
                  </button>
                {/each}
              {/if}
            {/each}
          </div>
        {/if}

        {#if !query.trim() && sparseListed.length}
          <p class="sparsenote">
            {sparseListed.length} more stems are attested once — search to find one.
          </p>
        {/if}
      </nav>

      <main class="main">
        {#if classLabel}
          <div class="classhead">
            <span class="classdev"><Sanskrit text={classLabel} source="devanagari" /></span>
            <span class="classn">{classMembers.length} stems in the corpus</span>
          </div>
          <!-- Every stem of this class takes the same endings; picking one
               changes which cells the corpus lights up and whose line appears
               under them. That is the whole difference between देव and बाल. -->
          {#if classMembers.length > 1}
            <label class="stemsel">
              <span class="stemsellabel">
                {section.kind === 'tinanta' ? 'root' : 'stem'}
              </span>
              <select
                aria-label={section.kind === 'tinanta' ? 'choose root' : 'choose stem'}
                value={entry.subject}
                onchange={(ev) => {
                  const v = (ev.currentTarget as HTMLSelectElement).value;
                  const m = classMembers.find((x) => x.subject === v);
                  if (m) pickSubject(m.lead);
                }}
              >
                {#each classMembers as m (m.subject)}
                  <option value={m.subject}>{m.subject} — {m.filled}/{m.total}</option>
                {/each}
              </select>
            </label>
          {/if}
        {/if}

        <div class="subjhead">
          <span class="subj"><Sanskrit text={entry.subject} source="devanagari" /></span>
          <div class="subjmeta">
            {#if entry.kind === 'tinanta'}
              <span class="linga">{entry.filled} of {entry.total} cells</span>
            {:else if entry.linga}
              <span class="linga"><Sanskrit text={entry.linga} source="devanagari" /></span>
              {#if entry.isSarvadi}
                <span class="dot">·</span>
                <span class="linga" title="takes the pronominal endings by 1.1.27 सर्वादीनि सर्वनामानि">सर्वादि</span>
              {/if}
            {:else if entry.isPronoun}
              <span class="linga">सर्वनाम · all three genders</span>
            {:else}
              <span class="linga warn">gender not shown by these forms</span>
            {/if}
            <span class="dot">·</span>
            <span>{entry.forms} forms attested</span>
            {#if entry.kind !== 'tinanta'}
              <span class="dot">·</span>
              <span>{entry.filled} of {entry.total} cells</span>
            {/if}
          </div>
        </div>

        <!-- One root, its लकारs side by side. A verb's grid is पुरुष × वचन only
             after the लकार is pinned, so a root has as many grids as tenses the
             corpus attests — गम् has seven. Listing them as separate subjects
             hid the fact that they are one verb. -->
        {#if siblings.length}
          <div class="pins" role="group" aria-label="लकार">
            {#each siblings as s (pinKey(s))}
              <button
                class="pinbtn"
                onclick={() => scrollToCard(s)}
              >
                <Sanskrit text={pinKey(s)} source="devanagari" />
                <span class="pincount">{s.filled}/{s.total}</span>
              </button>
            {/each}
          </div>
        {/if}

        {#each cards as card (pinKey(card) || card.subject)}
        <section class="card" id="card-{pinKey(card) || 'x'}">
        {#if pinKey(card)}
          <div class="cardhead">
            <Sanskrit text={pinKey(card)} source="devanagari" />
            <span class="cardcount">{card.filled} of {card.total} cells</span>
          </div>
        {/if}
        {#if card.paradigm}
          <div class="grid" style="--cols:{cols.length}">
            <div class="corner"></div>
            {#each cols as c}
              <div class="colhead"><Sanskrit text={c} source="devanagari" /></div>
            {/each}
            {#each rows as r}
              <div class="rowhead"><Sanskrit text={r} source="devanagari" /></div>
              {#each cols as c}
                {@const k = cellKey(r, c)}
                {@const a = atts(card, k)}
                {@const exp = expected(card, k)}
                <button
                  class="cell"
                  class:has={a.length > 0}
                  class:sel={cell === k && card === entry}
                  aria-label="{r} {c} — {a.length ? a[0].form : 'not attested'}"
                  onclick={() => pickCell(k, card)}
                >
                  {#if a.length}
                    <span class="form">
                      <Sanskrit text={a[0].formRaw} source="devanagari" fallback={a[0].form} />
                    </span>
                    {#if a[0].phrase}
                      <span class="phrase"><Sanskrit text={a[0].phrase} source="devanagari" /></span>
                    {/if}
                    <span class="meta">
                      {a[0].reading}{#if a[0].ambiguous}<span class="amb" title="this form fills more than one cell"> ↔</span>{/if}
                    </span>
                  {:else if exp.length}
                    <span class="form ghost"><Sanskrit text={exp[0]} source="devanagari" /></span>
                    <span class="unwritten">no reading attests this</span>
                  {:else}
                    <span class="form ghost">—</span>
                  {/if}
                </button>
              {/each}
            {/each}
          </div>
        {:else}
          <p class="nogrid">
            {#if card.kind === 'tinanta'}
              vidyut does not derive a full paradigm for
              <Sanskrit text={card.subject} source="devanagari" /> in this
              <Sanskrit text="लकार" source="devanagari" />, so only the attested forms are shown:
            {:else if card.isPronoun}
              <Sanskrit text={card.subject} source="devanagari" /> is a
              <Sanskrit text="सर्वनाम" source="devanagari" /> — it takes the gender of whatever it
              stands for, so it has three paradigms rather than one and the corpus uses all of
              them. The forms it attests:
            {:else}
              None of the attested forms of
              <Sanskrit text={card.subject} source="devanagari" /> distinguish its gender — each
              one is shared by two declensions — so the unattested cells are not shown, since
              they would differ depending on which. The forms the corpus does attest:
            {/if}
          </p>
          <div class="flat">
            {#each Object.entries(card.grid) as [k, list]}
              <button
                class="flatitem"
                class:sel={cell === k && card === entry}
                onclick={() => pickCell(k, card)}
              >
                <span class="form"><Sanskrit text={list[0].formRaw} source="devanagari" fallback={list[0].form} /></span>
                <span class="flatcell"><Sanskrit text={k.replace('|', ' ')} source="devanagari" /></span>
              </button>
            {/each}
          </div>
        {/if}
        </section>
        {/each}

        {#if selected}
          <section class="detail">
            <div class="detailhead">
              <Sanskrit text={selected.key.replace('|', ' ')} source="devanagari" />
            </div>
            {#if selected.atts.length}
              {#each selected.atts as a}
                <div class="spec">
                  <div class="specform">
                    <Sanskrit text={a.formRaw} source="devanagari" fallback={a.form} />
                    <span class="specgloss">{a.gloss}</span>
                  </div>
                  {#if a.phrase}
                    <div class="specphrase"><Sanskrit text={a.phrase} source="devanagari" /></div>
                  {/if}
                  <div class="specmeta">
                    <a class="rdlink" href="/reader?reading={a.reading}">{a.reading}</a>
                    {#each a.cites as c}
                      <a class="cite" href="/ref/{c.cite}" title={c.role}>{c.cite}</a>
                    {/each}
                    {#if a.more}<span class="muted">+{a.more} more</span>{/if}
                  </div>
                </div>
              {/each}
            {:else}
              <p class="muted">
                No reading attests this cell.
                {#if selected.expected.length}
                  The form would be
                  <span class="ghostinline"><Sanskrit text={selected.expected[0]} source="devanagari" /></span>.
                {/if}
              </p>
            {/if}
          </section>
        {/if}

        {#if entry.unplaced.length}
          <section class="unplaced">
            <div class="uphead">attested, outside the classical paradigm</div>
            <p class="muted upnote">
              Vedic forms the Aṣṭādhyāyī's core rules do not produce. They are in the corpus,
              so they are shown rather than dropped.
            </p>
            <div class="uplist">
              {#each entry.unplaced as a}
                <div class="upitem">
                  <Sanskrit text={a.formRaw} source="devanagari" fallback={a.form} />
                  <a class="rdlink" href="/reader?reading={a.reading}">{a.reading}</a>
                </div>
              {/each}
            </div>
          </section>
        {/if}
      </main>
    </div>

    {#if index?.unlemmatized}
      <p class="foot">
        {index.unlemmatized} annotated words carry no lemma and cannot be indexed here —
        mostly the earliest readings. They are an authoring gap, not a rendering one.
      </p>
    {/if}
  {/if}
</div>

<style>
  .wrap { max-width: 1140px; margin: 0 auto; padding: 2rem 1.5rem 5rem; }
  .head { margin-bottom: 1.8rem; }
  .kicker {
    font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.13em;
    text-transform: uppercase; color: #f97316; margin-bottom: 0.5rem;
  }
  h1 { font-size: 1.7rem; font-weight: 600; margin: 0 0 0.5rem; letter-spacing: -0.01em; }
  .lede { color: #6b6b6b; margin: 0; max-width: 62ch; line-height: 1.55; }
  .err { color: #c2410c; }
  .muted { color: #a99e8b; }

  .cols { display: grid; grid-template-columns: 232px minmax(0, 1fr); gap: 2rem; align-items: start; }
  @media (max-width: 820px) { .cols { grid-template-columns: 1fr; } }

  .spine { position: sticky; top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
  .kinds { display: flex; gap: 2px; margin-bottom: 0.2rem; }
  .kind {
    flex: 1; border: 1px solid #e7e2d9; border-radius: 8px; background: #fff;
    padding: 0.3rem 0.5rem; cursor: pointer; font: inherit; color: inherit;
    display: flex; flex-direction: column; align-items: flex-start; line-height: 1.2;
  }
  .kind.on { background: #fdecd9; border-color: #f4c98b; }
  .kinden { font-family: var(--font-mono); font-size: 0.58rem; color: #a99e8b; }
  .spinehead { display: flex; align-items: baseline; justify-content: space-between; }
  .groupby { font-size: 0.8rem; color: #6b6b6b; }
  /* rail: one row per declension */
  .klass {
    display: grid; grid-template-columns: 1fr auto auto; gap: 0.45rem;
    align-items: baseline; width: 100%; text-align: left;
    border: 1px solid transparent; border-radius: 8px; padding: 0.42rem 0.55rem;
    background: none; cursor: pointer; font: inherit; color: inherit;
  }
  .klass:hover { background: #faf7f0; }
  .klass.on { background: #fdecd9; border-color: #f4c98b; }
  .kdev { font-size: 0.95rem; }
  .kex { font-size: 0.72rem; color: #cbb994; }
  .kn { font-family: var(--font-mono); font-size: 0.62rem; color: #a99e8b; }

  /* page: the class, then its stems */
  .classhead {
    display: flex; align-items: baseline; gap: 0.6rem; flex-wrap: wrap;
    margin-bottom: 0.7rem;
  }
  .classdev { font-size: 1.35rem; }

  /* the declension matrix: terminal down, gender across */
  .mx {
    display: grid; grid-template-columns: auto repeat(3, 1fr);
    gap: 2px; margin-bottom: 0.6rem;
  }
  .mxcorner { }
  .mxcolhead, .mxrowhead {
    font-size: 0.68rem; color: #a89f92; padding: 0.2rem 0.3rem;
  }
  .mxrowhead { text-align: right; white-space: nowrap; align-self: center; }
  .mxcolhead { text-align: center; }
  .mxcell {
    border: 1px solid #ece3d3; border-radius: 6px; background: #fff;
    padding: 0.35rem 0.2rem; font: inherit; font-size: 0.78rem;
    font-family: var(--font-mono); color: #d3cab8; cursor: default;
  }
  .mxcell.has { color: #463f33; background: #fffdfa; cursor: pointer; }
  .mxcell.has:hover { border-color: #f4c98b; }
  .mxcell.on { background: #fdecd9; border-color: #f97316; color: #92591f; }
  .more.on { background: #fdecd9; border-color: #f4c98b; }
  .classn {
    font-family: var(--font-mono); font-size: 0.62rem; color: #a99e8b;
    margin-left: auto;
  }
  /* stem chooser: a select, so 40 stems cost one line rather than six rows */
  .stemsel {
    display: inline-flex; align-items: center; gap: 0.45rem;
    border: 1px solid #e7e2d9; border-radius: 8px; background: #fff;
    padding: 0.2rem 0.5rem; margin-bottom: 1.1rem;
  }
  .stemsellabel {
    font-family: var(--font-mono); font-size: 0.58rem;
    letter-spacing: 0.1em; text-transform: uppercase; color: #a99e8b;
  }
  .stemsel select {
    border: 0; background: none; font: inherit; font-size: 0.95rem;
    color: #463f33; cursor: pointer; padding: 0.15rem 0;
  }
  .stemsel select:focus { outline: none; }
  .stemsel:focus-within { border-color: #f4c98b; }

  /* search results, in place of the matrix while typing */
  .hits { display: flex; flex-direction: column; gap: 1px; max-height: 62vh; overflow-y: auto; }
  .hitnone { font-size: 0.82rem; padding: 0.4rem 0.55rem; }
  .hit {
    display: flex; align-items: baseline; justify-content: space-between; gap: 0.5rem;
    border: 1px solid transparent; border-radius: 8px; padding: 0.34rem 0.55rem;
    background: none; cursor: pointer; font: inherit; color: inherit; text-align: left;
  }
  .hit:hover { background: #faf7f0; }
  .hit.thin { cursor: default; opacity: 0.55; }
  .hit.thin:hover { background: none; }
  .hitdev { font-size: 0.95rem; }
  .hitn { font-family: var(--font-mono); font-size: 0.6rem; color: #a99e8b; }

  .stempick {
    display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 1.2rem;
    padding-bottom: 0.9rem; border-bottom: 1px solid #ece3d3;
  }
  .stembtn {
    display: inline-flex; align-items: baseline; gap: 0.3rem;
    border: 1px solid #e7e2d9; border-radius: 999px; background: #fff;
    padding: 0.2rem 0.65rem; cursor: pointer; font: inherit; font-size: 0.95rem;
    color: #463f33;
  }
  .stembtn:hover { border-color: #f4c98b; }
  .stembtn.on { background: #fdecd9; border-color: #f97316; color: #92591f; }
  .stemn { font-family: var(--font-mono); font-size: 0.58rem; color: #a99e8b; }
  .stemmore {
    border: 1px dashed #e7e2d9; border-radius: 999px; background: none;
    padding: 0.2rem 0.65rem; cursor: pointer; font: inherit;
    font-family: var(--font-mono); font-size: 0.62rem; color: #a99e8b;
  }
  .stemmore:hover { border-color: #f4c98b; color: #92591f; }
  .stembtn.on .stemn { color: #b08d57; }

  .ghead {
    display: flex; align-items: baseline; gap: 0.4rem; width: 100%;
    padding: 0.6rem 0.55rem 0.2rem; border: 0; border-bottom: 1px solid #ece3d3;
    margin-bottom: 0.15rem; position: sticky; top: 0; background: #fdfcfa;
    cursor: pointer; font: inherit; color: inherit; text-align: left;
  }
  .ghead:hover { background: #faf7f0; }
  .gcaret { font-size: 0.6rem; color: #a99e8b; width: 0.7rem; }
  .gdev { font-size: 0.82rem; color: #463f33; }
  .gex { font-size: 0.72rem; color: #cbb994; }
  .gn { margin-left: auto; font-family: var(--font-mono); font-size: 0.6rem; color: #cbb994; }
  .pin { font-size: 0.72rem; color: #b08d57; margin-left: 0.3rem; }
  .pinfeat { font-size: 0.62rem; color: #cbb994; margin-left: 0.25rem; }
  .count { font-family: var(--font-mono); font-size: 0.66rem; color: #a99e8b; }
  .find {
    border: 1px solid #e7e2d9; border-radius: 8px; padding: 0.35rem 0.6rem;
    font: inherit; font-size: 0.85rem; background: #fff; color: inherit;
  }
  .stems { display: flex; flex-direction: column; gap: 1px; max-height: 60vh; overflow-y: auto; }
  .stem {
    display: grid; grid-template-columns: 1fr 44px auto; gap: 0.5rem; align-items: center;
    border: 1px solid transparent; border-radius: 8px; padding: 0.32rem 0.55rem;
    background: none; cursor: pointer; text-align: left; font: inherit; color: inherit;
  }
  .stem:hover { background: #faf7f0; }
  .stem.on { background: #fdecd9; border-color: #f4c98b; }
  .sdev { font-size: 0.95rem; }
  .meter { height: 3px; background: #ece3d3; border-radius: 2px; overflow: hidden; }
  .fill { display: block; height: 100%; background: #f97316; }
  .sn { font-family: var(--font-mono); font-size: 0.62rem; color: #a99e8b; }
  .more {
    border: 1px solid #e7e2d9; border-radius: 8px; background: #fff; cursor: pointer;
    font-family: var(--font-mono); font-size: 0.66rem; color: #6b6b6b; padding: 0.35rem;
  }
  .sparse { display: flex; flex-wrap: wrap; gap: 0.25rem; max-height: 26vh; overflow-y: auto; }
  .sparseitem { font-size: 0.82rem; color: #a99e8b; }
  .sparsenote {
    font-size: 0.72rem; color: #a99e8b; line-height: 1.45;
    margin: 0.6rem 0 0; padding: 0 0.55rem;
  }

  .subjhead { display: flex; align-items: baseline; gap: 0.9rem; margin-bottom: 1rem; flex-wrap: wrap; }
  .subj { font-size: 1.9rem; line-height: 1; }
  /* Each grid is a card; the tab row scrolls between them. */
  .card { margin: 0 0 1.6rem; scroll-margin-top: 1rem; }
  .cardhead {
    display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 0.5rem;
    font-size: 1.05rem; color: #463f33;
  }
  .cardcount { font-family: var(--font-mono); font-size: 0.62rem; color: #a99e8b; }

  /* लकार tabs — one root, its tenses side by side. */
  .pins {
    display: flex; flex-wrap: wrap; gap: 0.3rem; margin: 0 0 1rem;
    position: sticky; top: 0; z-index: 2; background: #fdfcfa;
    padding: 0.4rem 0; border-bottom: 1px solid #ece3d3;
  }
  .pinbtn {
    display: inline-flex; align-items: baseline; gap: 0.35rem;
    border: 1px solid #e7e2d9; border-radius: 999px; background: #fff;
    padding: 0.22rem 0.7rem; cursor: pointer; font: inherit; font-size: 0.92rem;
    color: #463f33;
  }
  .pinbtn:hover { border-color: #f4c98b; }
  .pinbtn.on { background: #fdecd9; border-color: #f97316; color: #92591f; }
  .pincount { font-family: var(--font-mono); font-size: 0.6rem; color: #a99e8b; }
  .pinbtn.on .pincount { color: #b08d57; }
  .subjmeta {
    font-family: var(--font-mono); font-size: 0.7rem; color: #a99e8b;
    display: flex; align-items: baseline; gap: 0.4rem; flex-wrap: wrap;
  }
  .linga { color: #6b6b6b; }
  .linga.warn { color: #b08d57; }
  .dot { opacity: 0.5; }

  .grid {
    display: grid; grid-template-columns: auto repeat(var(--cols), minmax(0, 1fr));
    gap: 2px; overflow-x: auto;
  }
  .corner { }
  .colhead, .rowhead {
    font-size: 0.74rem; color: #a89f92; padding: 0.3rem 0.4rem; align-self: end;
  }
  .rowhead { text-align: right; white-space: nowrap; align-self: center; }
  .cell {
    display: flex; flex-direction: column; gap: 0.1rem; align-items: flex-start;
    border: 1px solid #ece3d3; border-radius: 7px; padding: 0.4rem 0.5rem;
    background: #fff; cursor: pointer; text-align: left; font: inherit; color: inherit;
    min-height: 3.5rem;
  }
  .cell:hover { border-color: #f4c98b; }
  .cell.has { background: #fffdfa; }
  .cell.sel { background: #fdecd9; border-color: #f97316; }
  .form { font-size: 1.05rem; line-height: 1.3; }
  .form.ghost { color: #cbb994; }
  .phrase { font-size: 0.76rem; color: #a99e8b; line-height: 1.35; }
  .meta { font-family: var(--font-mono); font-size: 0.6rem; color: #cbb994; }
  .amb { color: #b08d57; }
  .unwritten { font-family: var(--font-mono); font-size: 0.58rem; color: #d3cab8; }

  .nogrid { color: #6b6b6b; max-width: 62ch; line-height: 1.55; }
  .flat { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .flatitem {
    display: flex; flex-direction: column; gap: 0.1rem; border: 1px solid #ece3d3;
    border-radius: 7px; padding: 0.4rem 0.6rem; background: #fff; cursor: pointer;
    font: inherit; color: inherit; text-align: left;
  }
  .flatitem.sel { background: #fdecd9; border-color: #f97316; }
  .flatcell { font-size: 0.68rem; color: #a99e8b; }

  .detail {
    margin-top: 1.4rem; background: #faf7f0; border: 1px solid #efe7d8;
    border-radius: 13px; padding: 1rem 1.1rem;
  }
  .detailhead {
    font-size: 0.85rem; color: #6b6b6b; margin-bottom: 0.6rem;
    padding-bottom: 0.5rem; border-bottom: 1px solid #e7e2d9;
  }
  .spec { padding: 0.5rem 0; border-bottom: 1px solid #efe7d8; }
  .spec:last-child { border-bottom: 0; }
  .specform { display: flex; align-items: baseline; gap: 0.6rem; font-size: 1.15rem; }
  .specgloss { font-size: 0.9rem; color: #6b6b6b; font-style: italic; }
  .specphrase { font-size: 0.98rem; color: #463f33; margin-top: 0.15rem; }
  .specmeta {
    display: flex; align-items: baseline; gap: 0.6rem; margin-top: 0.35rem;
    font-family: var(--font-mono); font-size: 0.68rem; flex-wrap: wrap;
  }
  .rdlink { color: #a99e8b; text-decoration: none; }
  .rdlink:hover { color: #f97316; }
  .cite { color: #f97316; text-decoration: none; }
  .cite:hover { text-decoration: underline; }
  .ghostinline { color: #b08d57; }

  .unplaced { margin-top: 1.4rem; border-top: 1px solid #e7e2d9; padding-top: 0.9rem; }
  .uphead {
    font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.13em;
    text-transform: uppercase; color: #94a3b8; margin-bottom: 0.35rem;
  }
  .upnote { font-size: 0.82rem; margin: 0 0 0.5rem; max-width: 60ch; line-height: 1.5; }
  .uplist { display: flex; flex-wrap: wrap; gap: 0.7rem; }
  .upitem { display: flex; align-items: baseline; gap: 0.35rem; font-size: 1rem; }
  .upitem .rdlink { font-family: var(--font-mono); font-size: 0.62rem; }

  .foot {
    margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e7e2d9;
    font-size: 0.8rem; color: #a99e8b; max-width: 66ch; line-height: 1.55;
  }
</style>
