<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Segmented from '$lib/components/ui/Segmented.svelte';
  import Disclose from '$lib/components/ui/Disclose.svelte';
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

  /** The rail's one disclosure row: forms outside the classical paradigm. */
  let unplacedOpen = $state(false);

  const selected = $derived.by(() => {
    if (!entry || !cell) return null;
    const a = atts(entry, cell);
    return { key: cell, atts: a, expected: expected(entry, cell) };
  });
</script>

<svelte:head><title>प्रयोग · usage — anuvrtti</title></svelte:head>

{#snippet shelfLeft()}
  <span class="quiet">dimension</span>
  {#if sections.length}
    <Segmented
      options={sections.map((s) => ({ id: s.kind, label: s.dev, deva: true, title: s.en }))}
      value={section?.kind ?? sections[0].kind}
      onchange={pickKind}
      ariaLabel="dimension"
    />
  {/if}
{/snippet}

{#snippet shelfRight()}
  <!-- Usage is a door because of this hand-off: a cell is a way *into* the
       reader, not a reference entry. -->
  <span>click an attested cell to open the line that attests it</span>
{/snippet}

{#snippet spine()}
  <span class="label">taxonomy</span>
  {#if section}
    <div class="spine-head">
      {#if section.groupBy}
        <span class="group-by"><Sanskrit text={section.groupBy} source="devanagari" /></span>
      {/if}
      <span class="count">
        {subjects.length}
        {section.kind === 'tinanta' ? 'roots' : 'stems'}
      </span>
    </div>

    <!-- A filter over this spine's own list, not a second global search: ⌘K
         searches the corpus, this narrows the taxonomy in front of you. -->
    <input
      class="find"
      bind:value={query}
      placeholder={section.kind === 'tinanta' ? 'find a root' : 'find a stem'}
      aria-label={section.kind === 'tinanta' ? 'find a root' : 'find a stem'}
    />

    {#if query.trim()}
      <div class="hits">
        {#if !hits.length}
          <p class="none">nothing matches</p>
        {/if}
        {#each hits as h (h.subject)}
          <button
            class="hit"
            class:thin={h.sparse}
            disabled={h.sparse}
            title={h.sparse ? 'attested once — no paradigm to show' : ''}
            onclick={() => h.lead && ((query = ''), pickSubject(h.lead))}
          >
            <span class="hit-dev"><Sanskrit text={h.subject} source="devanagari" /></span>
            <span class="hit-n">{h.sparse ? 'seen once' : `${h.filled}/${h.total}`}</span>
          </button>
        {/each}
      </div>
    {:else if section.kind === 'subanta'}
      <!-- The declension named by its two coordinates: what the stem ends in,
           and its gender. Clicking a cell opens that paradigm. -->
      <div class="mx" role="grid" aria-label="declensions">
        <div class="mx-corner"></div>
        {#each LINGAS_COL as lg}
          <div class="mx-colhead">
            <Sanskrit text={LINGA_SHORT[lg] ?? lg} source="devanagari" />
          </div>
        {/each}
        {#each matrix as row (row.terminal)}
          <div class="mx-rowhead"><Sanskrit text={row.dev} source="devanagari" /></div>
          {#each row.cells as c}
            {@const key = row.terminal + '|' + c.linga}
            <button
              class="mx-cell"
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
        <button class="more" class:on={!entry?.linga} onclick={() => pickSubject(unsettled[0].lead)}>
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
              <span class="gcaret">{collapsed.has(bucket.group.id) ? '▸' : '▾'}</span>
              <span class="gdev"><Sanskrit text={bucket.group.dev} source="devanagari" /></span>
              <span class="gn">{bucket.items.length}</span>
            </button>
          {/if}
          {#if !bucket.group || !collapsed.has(bucket.group.id)}
            {#each bucket.items as s (s.subject)}
              <button
                class="stem"
                class:on={s.subject === entry?.subject}
                aria-label="{s.subject} — {s.filled} of {s.total} cells attested"
                onclick={() => pickSubject(s.lead)}
              >
                <span class="sdev">
                  <Sanskrit text={s.subject} source="devanagari" />
                  {#if s.variants.length > 1}<span class="pin">{s.variants.length} लकार</span>{/if}
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
      <p class="sparse-note">
        {sparseListed.length} more are attested once — search to find one.
      </p>
    {/if}
  {/if}
{/snippet}

{#snippet rail()}
  <span class="label">the cell</span>
  {#if selected}
    <div class="cell-head"><Sanskrit text={selected.key.replace('|', ' ')} source="devanagari" /></div>
    {#if selected.atts.length}
      {#each selected.atts as a}
        <div class="spec">
          <span class="spec-form">
            <Sanskrit text={a.formRaw} source="devanagari" fallback={a.form} />
          </span>
          <span class="spec-gloss">{a.gloss}</span>
          {#if a.phrase}
            <span class="spec-phrase"><Sanskrit text={a.phrase} source="devanagari" /></span>
          {/if}
          <div class="spec-meta">
            <a class="hand-off" href="/reader?reading={a.reading}">{a.reading} →</a>
            {#each a.cites as c}
              <a class="cite" href="/ref/{c.cite}" title={c.role}>{c.cite}</a>
            {/each}
            {#if a.more}<span class="none">+{a.more} more</span>{/if}
          </div>
        </div>
      {/each}
    {:else}
      <p class="prompt">
        No reading attests this cell.
        {#if selected.expected.length}
          The form would be
          <span class="ghost-inline"
            ><Sanskrit text={selected.expected[0]} source="devanagari" /></span
          >.
        {/if}
      </p>
    {/if}
  {:else}
    <p class="prompt">
      Saffron cells are attested in the corpus. Pick one and the reading that attests it opens
      here — one click from the line itself.
    </p>
  {/if}

  {#if entry?.unplaced.length}
    <Disclose
      label="outside the paradigm"
      count={String(entry.unplaced.length)}
      bind:open={unplacedOpen}
    >
      <p class="prompt small">
        Vedic forms the Aṣṭādhyāyī's core rules do not produce. They are in the corpus, so they
        are shown rather than dropped.
      </p>
      {#each entry.unplaced as a}
        <div class="up-item">
          <Sanskrit text={a.formRaw} source="devanagari" fallback={a.form} />
          <a class="hand-off" href="/reader?reading={a.reading}">{a.reading} →</a>
        </div>
      {/each}
    </Disclose>
  {/if}
{/snippet}

{#if error}
  <div class="status">{error}</div>
{:else if !loaded}
  <div class="status">loading the usage index…</div>
{:else if section && entry}
  <Shelf left={shelfLeft} right={shelfRight} />

  <Shell {spine} {rail} spineWidth="232px">
    <header class="head">
      <h1><Sanskrit text="प्रयोग" source="devanagari" /></h1>
      <p>
        what the corpus attests — every cell filled from the readings themselves, with the line
        that attests it and the sūtra that produced it where one is recorded
      </p>
    </header>

    {#if classLabel}
      <div class="class-head">
        <span class="class-dev"><Sanskrit text={classLabel} source="devanagari" /></span>
        <span class="class-n">{classMembers.length} stems in the corpus</span>
        {#if classMembers.length > 1}
          <!-- Every stem of this class takes the same endings; picking one
               changes which cells light up and whose line appears under them. -->
          <label class="stem-select">
            <span class="quiet">{section.kind === 'tinanta' ? 'root' : 'stem'}</span>
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
      </div>
    {/if}

    <div class="subject">
      <span class="subject-dev"><Sanskrit text={entry.subject} source="devanagari" /></span>
      <span class="subject-meta">
        {#if entry.kind === 'tinanta'}
          {entry.filled} of {entry.total} cells
        {:else if entry.linga}
          <Sanskrit text={entry.linga} source="devanagari" />
          {#if entry.isSarvadi}
            · <span title="takes the pronominal endings by 1.1.27 सर्वादीनि सर्वनामानि">सर्वादि</span>
          {/if}
        {:else if entry.isPronoun}
          सर्वनाम · all three genders
        {:else}
          gender not shown by these forms
        {/if}
        · {entry.forms} forms attested
        {#if entry.kind !== 'tinanta'}· {entry.filled} of {entry.total} cells{/if}
      </span>
    </div>

    <!-- One root, its लकारs side by side: a verb's grid is पुरुष × वचन only
         after the लकार is pinned, so a root has as many grids as tenses the
         corpus attests. -->
    {#if siblings.length}
      <div class="pins" role="group" aria-label="लकार">
        {#each siblings as s (pinKey(s))}
          <button class="pin-btn" onclick={() => scrollToCard(s)}>
            <Sanskrit text={pinKey(s)} source="devanagari" />
            <span class="pin-count">{s.filled}/{s.total}</span>
          </button>
        {/each}
      </div>
    {/if}

    {#each cards as card (pinKey(card) || card.subject)}
      <section class="card" id="card-{pinKey(card) || 'x'}">
        {#if pinKey(card)}
          <div class="card-head">
            <Sanskrit text={pinKey(card)} source="devanagari" />
            <span class="card-count">{card.filled} of {card.total} cells</span>
          </div>
        {/if}
        {#if card.paradigm}
          <div class="grid-scroll">
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
                        {a[0].reading}{#if a[0].ambiguous}<span
                            class="amb"
                            title="this form fills more than one cell"
                          >
                            ↔</span
                          >{/if}
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
              <Sanskrit text={card.subject} source="devanagari" /> distinguish its gender — each one
              is shared by two declensions — so the unattested cells are not shown, since they
              would differ depending on which. The forms the corpus does attest:
            {/if}
          </p>
          <div class="flat">
            {#each Object.entries(card.grid) as [k, list]}
              <button
                class="flat-item"
                class:sel={cell === k && card === entry}
                onclick={() => pickCell(k, card)}
              >
                <span class="form">
                  <Sanskrit text={list[0].formRaw} source="devanagari" fallback={list[0].form} />
                </span>
                <span class="flat-cell">
                  <Sanskrit text={k.replace('|', ' ')} source="devanagari" />
                </span>
              </button>
            {/each}
          </div>
        {/if}
      </section>
    {/each}

    {#if index?.unlemmatized}
      <p class="foot">
        {index.unlemmatized} annotated words carry no lemma and cannot be indexed here — mostly the
        earliest readings. They are an authoring gap, not a rendering one.
      </p>
    {/if}
  </Shell>
{/if}

<style>
  .status {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
    padding: 40px 24px;
    text-align: center;
  }
  .quiet {
    color: var(--faint);
  }
  .none {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--faint);
  }

  /* ── spine ───────────────────────────────────────────────────────────── */
  .spine-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .group-by {
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--muted);
  }

  .find {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 5px 8px;
    outline: none;
    width: 100%;
  }
  .find:focus {
    border-color: var(--accent);
  }
  .find::placeholder {
    color: var(--faint);
  }

  .hits {
    display: flex;
    flex-direction: column;
  }
  .hit {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 6px 0;
    cursor: pointer;
    text-align: left;
  }
  .hit-dev {
    font-family: var(--font-deva);
    font-size: 15px;
    color: var(--ink);
  }
  .hit-n {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }
  .hit.thin {
    cursor: default;
  }
  .hit.thin .hit-dev {
    color: var(--faint);
  }

  /* the declension matrix, on the shared hairline treatment */
  .mx {
    display: grid;
    grid-template-columns: auto repeat(3, 1fr);
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
  }
  .mx-corner,
  .mx-colhead,
  .mx-rowhead,
  .mx-cell {
    background: var(--paper);
    padding: 5px 6px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
    text-align: center;
  }
  .mx-colhead,
  .mx-rowhead {
    font-family: var(--font-deva);
    font-size: 11px;
  }
  .mx-rowhead {
    text-align: left;
  }
  .mx-cell {
    border: none;
    border-radius: var(--radius);
    color: var(--faint);
    cursor: default;
  }
  .mx-cell.has {
    color: var(--accent);
    cursor: pointer;
  }
  .mx-cell.on {
    background: var(--accent-soft);
    color: var(--ink);
  }

  .more {
    font-family: var(--font-mono);
    font-size: 11px;
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--muted);
    padding: 4px 8px;
    cursor: pointer;
    text-align: left;
  }
  .more.on {
    border-color: var(--accent);
    color: var(--accent);
  }

  .stems {
    display: flex;
    flex-direction: column;
  }
  .ghead {
    display: flex;
    align-items: baseline;
    gap: 6px;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 7px 0 5px;
    cursor: pointer;
    text-align: left;
  }
  .gcaret,
  .gn {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }
  .gn {
    margin-left: auto;
  }
  .gdev {
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--muted);
  }

  .stem {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 2.5rem;
    gap: 6px;
    align-items: baseline;
    background: transparent;
    border: none;
    border-left: 2px solid transparent;
    border-radius: var(--radius);
    padding: 4px 0 4px 8px;
    cursor: pointer;
    text-align: left;
  }
  .stem.on {
    border-left-color: var(--accent);
  }
  .sdev {
    font-family: var(--font-deva);
    font-size: 14px;
    color: var(--muted);
  }
  .stem.on .sdev {
    color: var(--ink);
  }
  .pin {
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--faint);
    padding-left: 4px;
  }
  .meter {
    grid-column: 1 / -1;
    display: block;
    height: 2px;
    background: var(--rule);
  }
  .fill {
    display: block;
    height: 2px;
    background: var(--accent);
  }
  .sn {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
    text-align: right;
  }

  .sparse-note {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--faint);
    line-height: 1.5;
  }

  /* ── column ──────────────────────────────────────────────────────────── */
  .head {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .head h1 {
    margin: 0;
    font-family: var(--font-deva);
    font-size: 27px;
    font-weight: 600;
  }
  .head p {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
    font-style: italic;
    max-width: 62ch;
  }

  .class-head,
  .subject {
    display: flex;
    align-items: baseline;
    gap: 12px;
    flex-wrap: wrap;
  }
  .class-dev {
    font-family: var(--font-deva);
    font-size: 19px;
    color: var(--ink);
  }
  .class-n,
  .subject-meta,
  .card-count {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .subject-dev {
    font-family: var(--font-deva);
    font-size: 24px;
    font-weight: 600;
  }

  .stem-select {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }
  .stem-select select {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 3px 6px;
  }

  .pins {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .pin-btn {
    font-family: var(--font-deva);
    font-size: 13px;
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--muted);
    padding: 3px 8px;
    cursor: pointer;
  }
  .pin-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
  .pin-count {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
    padding-left: 5px;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .card-head {
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-family: var(--font-deva);
    font-size: 15px;
  }

  .grid-scroll {
    overflow-x: auto;
  }
  .grid {
    display: grid;
    grid-template-columns: auto repeat(var(--cols), minmax(9rem, 1fr));
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
    min-width: 100%;
    width: max-content;
  }
  .corner,
  .colhead,
  .rowhead {
    background: var(--sunken);
    padding: 6px 10px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }
  /* The three sticky heads each carried their own near-white background; they
     sit on the sunken token now, one surface for all of them. */
  .colhead {
    position: sticky;
    top: var(--sticky-rail);
    z-index: 2;
    font-family: var(--font-deva);
    font-size: 12px;
  }
  .rowhead {
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--muted);
    white-space: nowrap;
  }

  .cell {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    text-align: left;
    background: var(--paper);
    border: none;
    border-radius: var(--radius);
    padding: 7px 10px;
    cursor: pointer;
    min-width: 0;
  }
  .cell .form {
    font-family: var(--font-deva);
    font-size: 15px;
    color: var(--accent);
  }
  .cell .form.ghost {
    color: #cfcabf;
  }
  .cell .phrase {
    font-family: var(--font-deva);
    font-size: 12px;
    color: var(--muted);
  }
  .cell .meta,
  .cell .unwritten {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }
  .cell .unwritten {
    color: var(--faint);
  }
  .cell.has:hover {
    background: var(--accent-soft);
  }
  .cell.sel {
    background: var(--accent-soft);
  }
  .cell.sel .form {
    color: var(--ink);
  }
  .amb {
    color: var(--accent);
  }

  .nogrid {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: var(--muted);
    max-width: 66ch;
  }
  .flat {
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
  }
  .flat-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: var(--paper);
    border: none;
    border-radius: var(--radius);
    padding: 7px 10px;
    cursor: pointer;
    text-align: left;
  }
  .flat-item .form {
    font-family: var(--font-deva);
    font-size: 15px;
    color: var(--accent);
  }
  .flat-cell {
    font-family: var(--font-deva);
    font-size: 11px;
    color: var(--quiet);
  }
  .flat-item.sel {
    background: var(--accent-soft);
  }

  .foot {
    margin: 0;
    font-size: 14px;
    color: var(--faint);
    border-top: 1px solid var(--rule);
    padding-top: 16px;
    max-width: 66ch;
  }

  /* ── rail ────────────────────────────────────────────────────────────── */
  .cell-head {
    font-family: var(--font-deva);
    font-size: 17px;
    color: var(--ink);
  }
  .prompt {
    margin: 0;
    font-size: 15px;
    line-height: 1.55;
    color: var(--muted);
  }
  .prompt.small {
    font-size: 13px;
  }
  .ghost-inline {
    font-family: var(--font-deva);
    color: var(--ink);
  }

  .spec {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-top: 1px solid var(--rule);
    padding-top: 12px;
  }
  .spec-form {
    font-family: var(--font-deva);
    font-size: 20px;
    color: var(--ink);
  }
  .spec-gloss {
    font-size: 14px;
    color: var(--muted);
  }
  .spec-phrase {
    font-family: var(--font-deva);
    font-size: 14px;
    color: var(--muted);
  }
  .spec-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 4px;
    font-family: var(--font-mono);
    font-size: 11px;
  }
  .hand-off {
    color: var(--accent);
    text-decoration: none;
  }
  .cite {
    color: var(--accent-ref);
    text-decoration: none;
  }

  .up-item {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    font-family: var(--font-deva);
    font-size: 14px;
  }
</style>
