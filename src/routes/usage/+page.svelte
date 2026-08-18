<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { cellKey } from '$lib/usage/normalize';
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
  const entry = $derived<ParadigmEntry | null>(
    section?.entries.find((e) => e.subject === subject && (!pin || pinKey(e) === pin)) ??
      section?.entries.find((e) => e.subject === subject) ??
      section?.entries[0] ??
      null
  );

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

  /** The other grids of the subject on screen — its other लकारs. */
  const siblings = $derived.by(() => {
    if (!entry) return [];
    const all = section?.entries.filter((e) => e.subject === entry.subject) ?? [];
    return all.length > 1 ? all : [];
  });

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

  function go(opts: { kind?: string; stem?: string | null; pin?: string | null; cell?: string | null }) {
    const p = new URLSearchParams();
    const kd = opts.kind ?? kind;
    if (kd && kd !== 'subanta') p.set('kind', kd);
    if (opts.stem) p.set('stem', opts.stem);
    if (opts.pin) p.set('pin', opts.pin);
    if (opts.cell) p.set('cell', opts.cell);
    goto('/usage?' + p.toString(), { replaceState: true, noScroll: true, keepFocus: true });
  }

  function pickKind(k: string) {
    go({ kind: k });
  }

  function pickSubject(e: ParadigmEntry) {
    go({ stem: e.subject, pin: pinKey(e) || null });
  }

  function pickCell(k: string) {
    go({
      stem: entry?.subject ?? subject,
      pin: entry ? pinKey(entry) || null : pin,
      cell: cell === k ? null : k
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
          placeholder="search…"
          aria-label={section.kind === 'tinanta' ? 'search roots' : 'search stems'}
        />
        <div class="stems">
          {#each grouped as bucket (bucket.group?.id ?? '_')}
            {#if bucket.group}
              <div class="ghead">
                <span class="gdev"><Sanskrit text={bucket.group.dev} source="devanagari" /></span>
                {#if bucket.group.exemplar}
                  <span class="gex"><Sanskrit text={bucket.group.exemplar} source="devanagari" /></span>
                {/if}
                <span class="gn">{bucket.items.length}</span>
              </div>
            {/if}
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
          {/each}
        </div>

        {#if sparseListed.length}
          <button class="more" onclick={() => (showSparse = !showSparse)}>
            {showSparse ? '−' : '+'} {sparseListed.length} attested once
          </button>
          {#if showSparse}
            <div class="sparse">
              {#each sparseListed.slice(0, 120) as e (e.subject)}
                <span class="sparseitem"><Sanskrit text={e.subject} source="devanagari" /></span>
              {/each}
            </div>
          {/if}
        {/if}
      </nav>

      <main class="main">
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
                class:on={s === entry}
                onclick={() => go({ stem: s.subject, pin: pinKey(s) })}
              >
                <Sanskrit text={pinKey(s)} source="devanagari" />
                <span class="pincount">{s.filled}/{s.total}</span>
              </button>
            {/each}
          </div>
        {/if}

        {#if entry.paradigm}
          <div class="grid" style="--cols:{cols.length}">
            <div class="corner"></div>
            {#each cols as c}
              <div class="colhead"><Sanskrit text={c} source="devanagari" /></div>
            {/each}
            {#each rows as r}
              <div class="rowhead"><Sanskrit text={r} source="devanagari" /></div>
              {#each cols as c}
                {@const k = cellKey(r, c)}
                {@const a = atts(entry, k)}
                {@const exp = expected(entry, k)}
                <button
                  class="cell"
                  class:has={a.length > 0}
                  class:sel={cell === k}
                  aria-label="{r} {c} — {a.length ? a[0].form : 'not attested'}"
                  onclick={() => pickCell(k)}
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
            {#if entry.kind === 'tinanta'}
              vidyut does not derive a full paradigm for
              <Sanskrit text={entry.subject} source="devanagari" /> in this
              <Sanskrit text="लकार" source="devanagari" />, so only the attested forms are shown:
            {:else if entry.isPronoun}
              <Sanskrit text={entry.subject} source="devanagari" /> is a
              <Sanskrit text="सर्वनाम" source="devanagari" /> — it takes the gender of whatever it
              stands for, so it has three paradigms rather than one and the corpus uses all of
              them. The forms it attests:
            {:else}
              None of the attested forms of
              <Sanskrit text={entry.subject} source="devanagari" /> distinguish its gender — each
              one is shared by two declensions — so the unattested cells are not shown, since
              they would differ depending on which. The forms the corpus does attest:
            {/if}
          </p>
          <div class="flat">
            {#each Object.entries(entry.grid) as [k, list]}
              <button class="flatitem" class:sel={cell === k} onclick={() => pickCell(k)}>
                <span class="form"><Sanskrit text={list[0].formRaw} source="devanagari" fallback={list[0].form} /></span>
                <span class="flatcell"><Sanskrit text={k.replace('|', ' ')} source="devanagari" /></span>
              </button>
            {/each}
          </div>
        {/if}

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
    font-family: ui-monospace, monospace; font-size: 0.62rem; letter-spacing: 0.13em;
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
  .kinden { font-family: ui-monospace, monospace; font-size: 0.58rem; color: #a99e8b; }
  .spinehead { display: flex; align-items: baseline; justify-content: space-between; }
  .groupby { font-size: 0.8rem; color: #6b6b6b; }
  .ghead {
    display: flex; align-items: baseline; gap: 0.4rem;
    padding: 0.6rem 0.55rem 0.2rem; border-bottom: 1px solid #ece3d3;
    margin-bottom: 0.15rem; position: sticky; top: 0; background: #fdfcfa;
  }
  .gdev { font-size: 0.82rem; color: #463f33; }
  .gex { font-size: 0.72rem; color: #cbb994; }
  .gn { margin-left: auto; font-family: ui-monospace, monospace; font-size: 0.6rem; color: #cbb994; }
  .pin { font-size: 0.72rem; color: #b08d57; margin-left: 0.3rem; }
  .pinfeat { font-size: 0.62rem; color: #cbb994; margin-left: 0.25rem; }
  .count { font-family: ui-monospace, monospace; font-size: 0.66rem; color: #a99e8b; }
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
  .sn { font-family: ui-monospace, monospace; font-size: 0.62rem; color: #a99e8b; }
  .more {
    border: 1px solid #e7e2d9; border-radius: 8px; background: #fff; cursor: pointer;
    font-family: ui-monospace, monospace; font-size: 0.66rem; color: #6b6b6b; padding: 0.35rem;
  }
  .sparse { display: flex; flex-wrap: wrap; gap: 0.25rem; max-height: 26vh; overflow-y: auto; }
  .sparseitem { font-size: 0.82rem; color: #a99e8b; }

  .subjhead { display: flex; align-items: baseline; gap: 0.9rem; margin-bottom: 1rem; flex-wrap: wrap; }
  .subj { font-size: 1.9rem; line-height: 1; }
  /* लकार tabs — one root, its tenses side by side. */
  .pins { display: flex; flex-wrap: wrap; gap: 0.3rem; margin: 0 0 1rem; }
  .pinbtn {
    display: inline-flex; align-items: baseline; gap: 0.35rem;
    border: 1px solid #e7e2d9; border-radius: 999px; background: #fff;
    padding: 0.22rem 0.7rem; cursor: pointer; font: inherit; font-size: 0.92rem;
    color: #463f33;
  }
  .pinbtn:hover { border-color: #f4c98b; }
  .pinbtn.on { background: #fdecd9; border-color: #f97316; color: #92591f; }
  .pincount { font-family: ui-monospace, monospace; font-size: 0.6rem; color: #a99e8b; }
  .pinbtn.on .pincount { color: #b08d57; }
  .subjmeta {
    font-family: ui-monospace, monospace; font-size: 0.7rem; color: #a99e8b;
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
  .meta { font-family: ui-monospace, monospace; font-size: 0.6rem; color: #cbb994; }
  .amb { color: #b08d57; }
  .unwritten { font-family: ui-monospace, monospace; font-size: 0.58rem; color: #d3cab8; }

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
    font-family: ui-monospace, monospace; font-size: 0.68rem; flex-wrap: wrap;
  }
  .rdlink { color: #a99e8b; text-decoration: none; }
  .rdlink:hover { color: #f97316; }
  .cite { color: #f97316; text-decoration: none; }
  .cite:hover { text-decoration: underline; }
  .ghostinline { color: #b08d57; }

  .unplaced { margin-top: 1.4rem; border-top: 1px solid #e7e2d9; padding-top: 0.9rem; }
  .uphead {
    font-family: ui-monospace, monospace; font-size: 0.62rem; letter-spacing: 0.13em;
    text-transform: uppercase; color: #94a3b8; margin-bottom: 0.35rem;
  }
  .upnote { font-size: 0.82rem; margin: 0 0 0.5rem; max-width: 60ch; line-height: 1.5; }
  .uplist { display: flex; flex-wrap: wrap; gap: 0.7rem; }
  .upitem { display: flex; align-items: baseline; gap: 0.35rem; font-size: 1rem; }
  .upitem .rdlink { font-family: ui-monospace, monospace; font-size: 0.62rem; }

  .foot {
    margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e7e2d9;
    font-size: 0.8rem; color: #a99e8b; max-width: 66ch; line-height: 1.55;
  }
</style>
