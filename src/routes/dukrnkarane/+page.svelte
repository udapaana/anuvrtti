<script lang="ts">
  import { goto } from '$app/navigation';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import RuleBody from './RuleBody.svelte';
  import Title from './Title.svelte';
  import Search from './Search.svelte';
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
  let hasApparatus = $derived(
    current.paniniRefs.length > 0 ||
      current.citedBy.length > 0 ||
      current.crossRefs.length > 0 ||
      current.words.length > 0 ||
      current.pages.start > 0,
  );

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
  <title>{current.id} {plain(current.title)} · डुकृण्करणे</title>
</svelte:head>

<div class="dk" class:no-rail={!hasApparatus}>
  <!-- Chapter spine -->
  <aside class="spine">
    <Search {rules} onpick={open} />
    <div class="eyebrow spine-head">chapters</div>
    <nav class="chapters">
      {#each data.chapters as c}
        {@const active = c.title === chapter.title && current.n >= c.first && current.n <= c.last}
        <button class="chapter" class:on={active} onclick={() => open(c.first)}>
          <span class="ctitle">{c.title}</span>
          <span class="crange">{range(c)}</span>
        </button>
        {#if active}
          <div class="sections">
            {#each siblings as s}
              <button class="section" class:on={s.n === current.n} onclick={() => open(s.n)}>
                <span class="sid">{s.id}</span>
                <span class="stitle"><Title text={s.title} /></span>
              </button>
            {/each}
          </div>
        {/if}
      {/each}
    </nav>

    {#if current.topics.length}
      <div class="eyebrow topic-head">topic</div>
      <div class="topics">
        {#each current.topics as t}
          <span class="topic">{t}</span>
        {/each}
      </div>
    {/if}
  </aside>

  <!-- Reader -->
  <main class="reader">
    <div class="crumbs">
      <span>{chapter.title}</span>
      <span class="sep">/</span>
      <span class="crumb-cur">{current.id}</span>
    </div>

    <div class="rule-head">
      <span class="rule-id">{current.id}</span>
      {#if current.kind === 'appendix'}<span class="kind">appendix</span>{/if}
    </div>
    <h1><Title text={current.title} /></h1>

    <RuleBody text={current.body} knownSutraIds={data.knownSutraIds} />

    {#if current.derivations.length}
      <section class="derivations">
        <div class="deriv-head">
          <span class="eyebrow">derivations</span>
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

    <nav class="pager">
      {#if prev}
        <button class="page-btn" onclick={() => open(prev.n)}>
          <span class="dir">← previous</span>
          <span class="pt">{prev.id} <Title text={prev.title} /></span>
        </button>
      {:else}<span></span>{/if}
      {#if next}
        <button class="page-btn right" onclick={() => open(next.n)}>
          <span class="dir">next →</span>
          <span class="pt">{next.id} <Title text={next.title} /></span>
        </button>
      {/if}
    </nav>
  </main>

  <!-- Apparatus -->
  {#if hasApparatus}
    <aside class="apparatus">
      {#if current.paniniRefs.length}
        <div class="eyebrow"><Sanskrit text="सूत्राणि" source="devanagari" /></div>
        <div class="sutras">
          {#each current.paniniRefs as ref}
            {#if ref.sutraId}
              <a class="sutra" href="/ref/{ref.sutraId}">
                <span class="sutra-ref">{ref.display}</span>
                <span class="sutra-go">→</span>
              </a>
            {:else}
              <span class="sutra off" title="not in this recension of the Aṣṭādhyāyī">
                <span class="sutra-ref">{ref.display}</span>
              </span>
            {/if}
          {/each}
        </div>
      {/if}

      {#if current.citedBy.length}
        <div class="eyebrow">cited by</div>
        <div class="links">
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
        <div class="eyebrow">refers to</div>
        <div class="links">
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
        <div class="eyebrow">words indexed here</div>
        <div class="words">
          {#each current.words as w}
            <span class="word"><Sanskrit text={w} source="devanagari" /></span>
          {/each}
        </div>
      {/if}

      {#if current.pages.start > 0}
        <div class="eyebrow">source</div>
        <div class="source">
          Kale 1894
          {#if current.images.length && current.scan === 'verified'}
            <div class="leaves">
              {#each current.images as img}
                <a class="leaf" href="{SCANS}/{img}" target="_blank" rel="noopener">
                  leaf {img.replace('.png', '')}
                </a>
              {/each}
            </div>
          {:else if current.images.length}
            <div class="leaf-note">
              {sourceLabel} · scan reference unverified, not linked
            </div>
          {/if}
        </div>
      {/if}
    </aside>
  {/if}
</div>

<style>
  .dk {
    display: grid;
    grid-template-columns: 214px minmax(0, 1fr) 296px;
    max-width: 1340px;
    margin: 0 auto;
    align-items: start;
  }
  .dk.no-rail {
    grid-template-columns: 214px minmax(0, 1fr);
  }

  .eyebrow {
    font:
      600 11px/1 'SF Mono',
      Consolas,
      Monaco,
      monospace;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #78716c;
    margin-bottom: 10px;
  }

  /* ---- spine ---- */
  .spine {
    padding: 22px 15px 40px;
    border-right: 1px solid #f5f5f4;
    background: #fafaf9;
    position: sticky;
    top: 56px;
    max-height: calc(100vh - 56px);
    overflow-y: auto;
  }
  .chapters {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
  .chapter {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: baseline;
    padding: 5px 8px;
    border: 0;
    background: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: left;
    font:
      400 13.5px/1.35 'Crimson Pro',
      Georgia,
      serif;
    color: #57534e;
  }
  .chapter:hover {
    background: #f5f5f4;
  }
  .chapter.on {
    background: #f5f5f4;
    color: #1c1917;
    font-weight: 600;
  }
  .crange {
    font:
      400 11px 'SF Mono',
      Consolas,
      monospace;
    color: #a8a29e;
    flex: none;
  }
  .sections {
    display: flex;
    flex-direction: column;
    margin: 3px 0 5px 8px;
    padding-left: 10px;
    border-left: 1px solid #e7e5e4;
  }
  .section {
    display: flex;
    gap: 6px;
    align-items: baseline;
    padding: 3px 0;
    border: 0;
    background: none;
    cursor: pointer;
    text-align: left;
    font:
      400 13px/1.35 'Crimson Pro',
      Georgia,
      serif;
    color: #78716c;
  }
  .section:hover {
    color: #1c1917;
  }
  .section.on {
    color: #1c1917;
    font-weight: 600;
  }
  .sid {
    flex: none;
    font:
      400 11px 'SF Mono',
      Consolas,
      monospace;
    color: #a8a29e;
  }
  .section.on .sid {
    color: #f97316;
  }
  .stitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .spine-head {
    margin-top: 18px;
  }
  .topic-head {
    margin-top: 22px;
  }
  .topics {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .topic {
    font:
      400 12px/1 'Crimson Pro',
      Georgia,
      serif;
    padding: 3px 8px;
    background: #f5f5f4;
    color: #57534e;
    border-radius: 9999px;
  }

  /* ---- reader ---- */
  .reader {
    padding: 26px 38px 60px;
    min-width: 0;
  }
  .crumbs {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font:
      400 11px/1 'SF Mono',
      Consolas,
      monospace;
    color: #a8a29e;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 14px;
  }
  .crumb-cur {
    color: #f97316;
  }
  .rule-head {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .rule-id {
    font:
      500 28px/1 'Crimson Pro',
      Georgia,
      serif;
    color: #1c1917;
  }
  .kind {
    font:
      400 11px/1 'SF Mono',
      Consolas,
      monospace;
    padding: 2px 7px;
    border-radius: 9999px;
    background: #f5f5f4;
    color: #78716c;
  }
  h1 {
    margin: 4px 0 22px;
    font:
      400 25px/1.25 'Crimson Pro',
      Georgia,
      serif;
    color: #1c1917;
    text-wrap: pretty;
  }

  /* ---- derivations ---- */
  .derivations {
    margin-top: 28px;
    padding-top: 18px;
    border-top: 1px solid #f5f5f4;
  }
  .deriv-head {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .deriv-count {
    font:
      400 11px 'SF Mono',
      Consolas,
      monospace;
    color: #a8a29e;
  }
  .deriv-sutra {
    margin-left: auto;
    font:
      500 11px 'SF Mono',
      Consolas,
      monospace;
    color: #6366f1;
    text-decoration: none;
  }
  .deriv-sutra:hover {
    border-bottom: 1px solid #6366f1;
  }
  .deriv-rows {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 2px 26px;
  }
  .deriv {
    display: flex;
    align-items: baseline;
    gap: 7px;
    padding: 3px 0;
    font-family: 'Noto Serif Devanagari', 'Noto Serif Telugu', serif;
    font-size: 16px;
    color: #57534e;
  }
  .op {
    color: #d6d3d1;
    font-size: 13px;
  }
  .result {
    color: #1c1917;
    font-weight: 600;
  }
  .gloss {
    font:
      italic 400 12px/1.3 'Crimson Pro',
      Georgia,
      serif;
    color: #a8a29e;
  }

  /* ---- pager ---- */
  .pager {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
    padding-top: 18px;
    border-top: 1px solid #f5f5f4;
  }
  .page-btn {
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-width: 46%;
    border: 0;
    background: none;
    cursor: pointer;
    text-align: left;
    padding: 0;
  }
  .page-btn.right {
    text-align: right;
  }
  .dir {
    font:
      400 11px/1 'SF Mono',
      Consolas,
      monospace;
    color: #a8a29e;
  }
  .pt {
    font:
      400 13.5px/1.35 'Crimson Pro',
      Georgia,
      serif;
    color: #57534e;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .page-btn:hover .pt {
    color: #f97316;
  }

  /* ---- apparatus ---- */
  .apparatus {
    padding: 24px 20px 40px;
    border-left: 1px solid #f5f5f4;
    background: #fafaf9;
    position: sticky;
    top: 56px;
    max-height: calc(100vh - 56px);
    overflow-y: auto;
  }
  .apparatus .eyebrow:not(:first-child) {
    margin-top: 22px;
  }
  .sutras {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .sutra {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    padding: 5px 9px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #e7e5e4;
    text-decoration: none;
  }
  .sutra-ref {
    font:
      500 13px/1 'SF Mono',
      Consolas,
      monospace;
    color: #6366f1;
  }
  .sutra-go {
    font-size: 12px;
    color: #d6d3d1;
  }
  a.sutra:hover {
    border-color: #c7d2fe;
  }
  a.sutra:hover .sutra-go {
    color: #6366f1;
  }
  /* Cited but absent from this recension — shown, not linked. */
  .sutra.off {
    background: none;
    border-style: dashed;
  }
  .sutra.off .sutra-ref {
    color: #a8a29e;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .link-row {
    display: flex;
    gap: 8px;
    align-items: baseline;
    padding: 3px 0;
    border: 0;
    background: none;
    cursor: pointer;
    text-align: left;
    font:
      400 12.5px/1.35 'Crimson Pro',
      Georgia,
      serif;
    color: #57534e;
  }
  .link-row:hover {
    color: #f97316;
  }
  .lid {
    flex: none;
    font:
      400 11px 'SF Mono',
      Consolas,
      monospace;
    color: #a8a29e;
  }
  .ltitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .words {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .word {
    font-family: 'Noto Sans Devanagari', 'Noto Sans Telugu', sans-serif;
    font-size: 13px;
    padding: 3px 8px;
    background: #f5f5f4;
    color: #44403c;
    border-radius: 4px;
  }
  .source {
    font:
      400 12.5px/1.6 'Crimson Pro',
      Georgia,
      serif;
    color: #57534e;
  }
  .leaves {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 6px;
  }
  .leaf {
    font:
      400 11px/1 'SF Mono',
      Consolas,
      monospace;
    padding: 3px 7px;
    border: 1px solid #e7e5e4;
    border-radius: 4px;
    color: #78716c;
    text-decoration: none;
  }
  .leaf:hover {
    border-color: #f97316;
    color: #f97316;
  }
  .leaf-note {
    margin-top: 5px;
    font:
      italic 400 11.5px/1.45 'Crimson Pro',
      Georgia,
      serif;
    color: #a8a29e;
  }

  @media (max-width: 1100px) {
    .dk,
    .dk.no-rail {
      grid-template-columns: 1fr;
    }
    .spine,
    .apparatus {
      position: static;
      max-height: none;
      border: 0;
      border-bottom: 1px solid #f5f5f4;
    }
    .reader {
      padding: 22px 20px 48px;
    }
  }
</style>
