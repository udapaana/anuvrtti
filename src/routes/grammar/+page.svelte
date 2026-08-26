<script lang="ts">
  import { goto } from '$app/navigation';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import RuleBody from './RuleBody.svelte';
  import Title from './Title.svelte';
  import Search from './Search.svelte';
  import SandhiMatrix from './SandhiMatrix.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import { isNarrow } from '$lib/stores/viewport';
  import SheetButton from '$lib/components/ui/SheetButton.svelte';
  import Spine from '$lib/components/ui/Spine.svelte';
  import Disclose from '$lib/components/ui/Disclose.svelte';
  import Chip from '$lib/components/ui/Chip.svelte';
  import { MATRIX_RULES } from './sandhi-matrix';
  import type { Rule, Chapter } from './+page';

  let { data }: {
    data: {
      chapters: Chapter[];
      rules: Rule[];
      current: Rule;
      coreCount: number;
      knownSutraIds: string[];
    };
  } =
    $props();

  let rules = $derived(data.rules);
  let byNumber = $derived(new Map(rules.map((r) => [r.n, r])));
  let current = $derived(data.current);

  // The chapter containing the current rule, and its sections for the spine.
  let chapter = $derived(
    data.chapters.find((c) => current.n >= c.first && current.n <= c.last) ?? data.chapters[0],
  );
  let siblings = $derived(rules.filter((r) => r.n >= chapter.first && r.n <= chapter.last));

  let index = $derived(rules.findIndex((r) => r.n === current.n));
  let prev = $derived(index > 0 ? rules[index - 1] : null);
  let next = $derived(index < rules.length - 1 ? rules[index + 1] : null);

  function open(n: number) {
    goto(`?s=${n}`, { noScroll: false, keepFocus: false });
  }

  function onKey(e: KeyboardEvent) {
    const t = e.target as HTMLElement;
    if (t?.tagName === 'INPUT' || t?.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft' && prev) open(prev.n);
    if (e.key === 'ArrowRight' && next) open(next.n);
  }

  // Page scans live in the dukrnkarane repo and are already served from its
  // own site — 162MB of PNGs, too much to duplicate here just to link them.
  const SCANS = 'https://dukrnkarane.udapaana.in/assets/images/rules';

  // The apparatus rail only renders what a section actually has. Across the
  // corpus these are sparse — 31% carry a Pāṇini ref, 12% a cross-reference,
  // ~4% parseable derivations — so every block is conditional and the rail
  // collapses rather than showing empty scaffolding.
  // On a phone the rule list and the apparatus are sheets, not columns.
  const narrow = $derived($isNarrow);
  let spineOpen = $state(false);
  let railOpen = $state(false);

  let hasApparatus = $derived(
    current.paniniRefs.length > 0 ||
      current.citedBy.length > 0 ||
      current.crossRefs.length > 0 ||
      current.words.length > 0 ||
      current.pages.start > 0,
  );

  /** The rail's one disclosure row. */
  let wordsOpen = $state(false);

  /** Marker-free form of a title, for the document <title>. */
  function plain(t: string): string {
    return t.replace(/@deva\[([^\]]+)\]/g, '$1').replace(/@\[([^\]]+)\]/g, '$1');
  }

  // The single sūtra a section's derivations are worked under, when there is
  // exactly one — with several cited, attributing the group to any one of them
  // would be a guess the source does not make.
  let ruleSutra = $derived.by(() => {
    const linked = current.paniniRefs.filter((r) => r.sutraId);
    return linked.length === 1 ? linked[0] : null;
  });

  // Appendix sections are stored past the 972 core rules so numbering stays
  // globally unique, but the book prints them as § 1–15 of the prosody
  // appendix. Show the printed range.
  function range(c: Chapter): string {
    const lo = c.first > data.coreCount ? c.first - data.coreCount : c.first;
    const hi = c.last > data.coreCount ? c.last - data.coreCount : c.last;
    return `${lo}\u2013${hi}`;
  }

  // page_start/page_end record the scan leaf, not the printed folio — the two
  // run level early in the book and diverge by two near the end, so calling
  // these "pp." would misstate them. The leaf numbers are what the facsimile
  // links resolve against, so they are labelled as leaves.
  let sourceLabel = $derived(
    current.pages.start === current.pages.end
      ? `leaf ${current.pages.start}`
      : `leaves ${current.pages.start}–${current.pages.end}`,
  );
</script>

<svelte:window on:keydown={onKey} />

<svelte:head>
  <title>{current.id} {plain(current.title)} · grammar</title>
</svelte:head>

{#snippet shelfLeft()}
  {#if narrow}
    <SheetButton label="rules" onopen={() => (spineOpen = true)} />
    <span class="shelf-rule" aria-hidden="true"></span>
  {/if}
  <!-- The same shelf as /ref/[id], because both are "one item out of a
       numbered corpus": where you are, and one step either way. -->
  <span class="chapter-name">{chapter.title}</span>
  <span class="sep">/</span>
  <span class="here">{current.id}</span>
  <span class="step">
    {#if prev}
      <button onclick={() => open(prev.n)} title={prev.id}>‹</button>
    {:else}<span class="off">‹</span>{/if}
    {#if next}
      <button onclick={() => open(next.n)} title={next.id}>›</button>
    {:else}<span class="off">›</span>{/if}
  </span>
{/snippet}

{#snippet shelfRight()}
  <span>rule {index + 1} / {rules.length}</span>
{/snippet}

{#snippet spine()}
  <!-- A filter over this corpus, in the spine that holds it. -->
  <Search {rules} onpick={open} />

  <Spine
    title="chapters"
    items={data.chapters.map((c) => ({
      id: String(c.first),
      label: c.title,
      sub: range(c)
    }))}
    activeId={String(chapter.first)}
    onpick={(id) => open(Number(id))}
  />

  <div class="sections">
    {#each siblings as s (s.n)}
      <button class="section" class:on={s.n === current.n} onclick={() => open(s.n)}>
        <span class="sid">{s.id}</span>
        <span class="stitle"><Title text={s.title} /></span>
      </button>
    {/each}
  </div>

  {#if current.topics.length}
    <span class="label">topic</span>
    <div class="topics">
      {#each current.topics as t}
        <Chip label={t} />
      {/each}
    </div>
  {/if}
{/snippet}

{#snippet rail()}
  {#if current.paniniRefs.length}
    <span class="label"><Sanskrit text="सूत्राणि" source="devanagari" /></span>
    <div class="sutras">
      {#each current.paniniRefs as ref}
        {#if ref.sutraId}
          <a class="sutra" href="/ref/{ref.sutraId}">{ref.display} →</a>
        {:else}
          <span class="sutra off" title="not in this recension of the Aṣṭādhyāyī">
            {ref.display}
          </span>
        {/if}
      {/each}
    </div>
  {/if}

  {#if current.citedBy.length}
    <div class="block">
      <span class="label">cited by</span>
      {#each current.citedBy as n}
        {@const r = byNumber.get(n)}
        {#if r}
          <button class="link-row" onclick={() => open(n)}>
            <span class="lid">{r.id}</span>
            <span class="ltitle"><Title text={r.title} /></span>
          </button>
        {/if}
      {/each}
    </div>
  {/if}

  {#if current.crossRefs.length}
    <div class="block">
      <span class="label">refers to</span>
      {#each [...new Set(current.crossRefs)] as n}
        {@const r = byNumber.get(n)}
        {#if r}
          <button class="link-row" onclick={() => open(n)}>
            <span class="lid">{r.id}</span>
            <span class="ltitle"><Title text={r.title} /></span>
          </button>
        {/if}
      {/each}
    </div>
  {/if}

  {#if current.words.length}
    <Disclose label="words indexed here" count={String(current.words.length)} bind:open={wordsOpen}>
      <div class="words">
        {#each current.words as w}
          <span class="word"><Sanskrit text={w} source="devanagari" /></span>
        {/each}
      </div>
    </Disclose>
  {/if}

  {#if current.pages.start > 0}
    <div class="block">
      <span class="label">source</span>
      <span class="source">Kale 1894</span>
      {#if current.images.length && current.scan === 'verified'}
        <div class="leaves">
          {#each current.images as img}
            <a class="leaf" href="{SCANS}/{img}" target="_blank" rel="noopener">
              leaf {img.replace('.png', '')}
            </a>
          {/each}
        </div>
      {:else if current.images.length}
        <span class="leaf-note">{sourceLabel} · scan reference unverified, not linked</span>
      {/if}
    </div>
  {/if}
{/snippet}

<Shelf left={shelfLeft} right={shelfRight} progress={((index + 1) / rules.length) * 100} />

<Shell
  {spine}
  rail={hasApparatus ? rail : undefined}
  sheets
  bind:spineOpen
  bind:railOpen
  spineWidth="220px"
>
  <header class="rule-head">
    <div class="rule-id">
      <span>{current.id}</span>
      {#if current.kind === 'appendix'}<Chip label="appendix" />{/if}
    </div>
    <h1><Title text={current.title} /></h1>
  </header>

  <RuleBody text={current.body} knownSutraIds={data.knownSutraIds} />

  {#if current.derivations.length}
    <section class="derivations">
      <div class="deriv-head">
        <span class="label">derivations</span>
        <span class="deriv-count">{current.derivations.length}</span>
        <!-- Kale states the sūtra once per rule, never per example, so the
             attribution belongs on the group rather than on each row. -->
        {#if ruleSutra}
          <a class="deriv-sutra" href="/ref/{ruleSutra.sutraId}">{ruleSutra.display}</a>
        {/if}
      </div>
      <div class="deriv-rows">
        {#each current.derivations as d}
          <div class="deriv">
            <Sanskrit text={d.left} source="devanagari" />
            <span class="op">+</span>
            <Sanskrit text={d.right} source="devanagari" />
            <span class="op">→</span>
            <span class="result"><Sanskrit text={d.result} source="devanagari" /></span>
            {#if d.gloss}<span class="gloss">{d.gloss}</span>{/if}
          </div>
        {/each}
      </div>
    </section>
  {/if}

  {#if MATRIX_RULES.includes(current.n)}
    <SandhiMatrix rule={current.n} onpick={open} />
  {/if}

  <nav class="pager">
    {#if prev}
      <button onclick={() => open(prev.n)}>
        <span class="dir">← previous</span>
        <span class="pt">{prev.id} <Title text={prev.title} /></span>
      </button>
    {:else}<span></span>{/if}
    {#if next}
      <button class="right" onclick={() => open(next.n)}>
        <span class="dir">next →</span>
        <span class="pt">{next.id} <Title text={next.title} /></span>
      </button>
    {/if}
  </nav>
</Shell>

<style>
  /* ── shelf ───────────────────────────────────────────────────────────── */
  .chapter-name {
    color: var(--muted);
  }
  .sep {
    color: var(--rule-2);
  }
  .here {
    color: var(--ink);
  }
  .step {
    display: flex;
    gap: 6px;
  }
  .step button {
    background: transparent;
    border: none;
    color: var(--muted);
    font: inherit;
    cursor: pointer;
    padding: 0;
  }
  .step button:hover {
    color: var(--accent);
  }
  .off {
    color: var(--rule-2);
  }

  /* ── spine ───────────────────────────────────────────────────────────── */
  .sections {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--rule);
    padding-top: 8px;
  }
  .section {
    display: grid;
    grid-template-columns: 2.6rem minmax(0, 1fr);
    gap: 8px;
    align-items: baseline;
    background: transparent;
    border: none;
    border-left: 2px solid transparent;
    border-radius: var(--radius);
    padding: 4px 0 4px 8px;
    cursor: pointer;
    text-align: left;
  }
  .section.on {
    border-left-color: var(--accent);
  }
  .sid {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }
  .stitle {
    font-size: 13px;
    color: var(--muted);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .section.on .stitle {
    color: var(--ink);
  }

  .topics {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  /* ── column ──────────────────────────────────────────────────────────── */
  .rule-head {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 14px;
  }
  .rule-id {
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
  }
  .rule-head h1 {
    margin: 0;
    font-size: 27px;
    font-weight: 600;
    line-height: 1.2;
  }

  .derivations {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .deriv-head {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .deriv-count {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .deriv-sutra {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-ref);
    text-decoration: none;
    margin-left: auto;
  }
  .deriv-rows {
    display: flex;
    flex-direction: column;
  }
  .deriv {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 6px;
    font-family: var(--font-deva);
    font-size: 16px;
    padding: 8px 0;
    border-top: 1px solid var(--rule);
  }
  .op {
    color: var(--faint);
  }
  .result {
    color: var(--accent);
  }
  .gloss {
    font-family: var(--font-serif);
    font-size: 14px;
    color: var(--muted);
    font-style: italic;
    margin-left: auto;
  }

  .pager {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--rule);
    padding-top: 16px;
  }
  .pager button {
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: flex-start;
    max-width: 20rem;
    background: transparent;
    border: none;
    border-radius: var(--radius);
    padding: 0;
    cursor: pointer;
    text-align: left;
  }
  .pager button.right {
    align-items: flex-end;
    text-align: right;
  }
  .dir {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent);
  }
  .pt {
    font-size: 15px;
    color: var(--muted);
  }

  /* ── rail ────────────────────────────────────────────────────────────── */
  .block {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-top: 1px solid var(--rule);
    padding-top: 14px;
  }

  .sutras {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .sutra {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--accent-ref);
    text-decoration: none;
  }
  .sutra.off {
    color: var(--faint);
  }

  .link-row {
    display: grid;
    grid-template-columns: 2.6rem minmax(0, 1fr);
    gap: 8px;
    align-items: baseline;
    background: transparent;
    border: none;
    border-radius: var(--radius);
    padding: 3px 0;
    cursor: pointer;
    text-align: left;
  }
  .lid {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }
  .ltitle {
    font-size: 13px;
    color: var(--muted);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .link-row:hover .ltitle {
    color: var(--accent);
  }

  .words {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .word {
    font-family: var(--font-deva);
    font-size: 14px;
    color: var(--muted);
  }

  .source,
  .leaf-note {
    font-size: 13px;
    color: var(--muted);
  }
  .leaf-note {
    color: var(--faint);
  }
  .leaves {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .leaf {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-ref);
    text-decoration: none;
  }
</style>
