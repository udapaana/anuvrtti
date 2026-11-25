<script lang="ts">
  import { goto, replaceState } from '$app/navigation';
  import { tick } from 'svelte';
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
  import { onMount } from 'svelte';
  import { dataUrl } from '$lib/dataUrl';

  let { data }: {
    data: {
      chapters: Chapter[];
      rules: Rule[];
      current: Rule | null;
      missing: string | null;
      coreCount: number;
      knownSutraIds: string[];
    };
  } = $props();

  let rules = $derived(data.rules);
  let byNumber = $derived(new Map(rules.map((r) => [r.n, r])));
  let current = $derived(data.current);

  /*
    A chapter at a time. Looking a rule up is rarely about that rule alone:
    the one before states the general case, the one after the exception. So
    the column holds the whole chapter, the address names the rule, and the
    page opens scrolled to it; the shelf, the rail and the address then
    follow whichever section is in view. With no rule asked for, the grammar
    opens on its contents.
  */
  let chapter = $derived(
    current ? (data.chapters.find((c) => current!.n >= c.first && current!.n <= c.last) ?? null) : null,
  );
  let siblings = $derived(chapter ? rules.filter((r) => r.n >= chapter!.first && r.n <= chapter!.last) : []);

  /** the section in view; the rail, shelf and address follow it */
  let here = $state<number | null>(null);
  let focus = $derived((here !== null ? byNumber.get(here) : null) ?? current);

  let index = $derived(focus ? rules.findIndex((r) => r.n === focus!.n) : -1);
  let prev = $derived(index > 0 ? rules[index - 1] : null);
  let next = $derived(index >= 0 && index < rules.length - 1 ? rules[index + 1] : null);
  let chIdx = $derived(chapter ? data.chapters.indexOf(chapter) : -1);
  let prevCh = $derived(chIdx > 0 ? data.chapters[chIdx - 1] : null);
  let nextCh = $derived(chIdx >= 0 && chIdx < data.chapters.length - 1 ? data.chapters[chIdx + 1] : null);

  // Appendix sections are stored past the 972 core rules so numbering stays
  // globally unique, but the book prints them as § 1–15 of the prosody
  // appendix: named as such, so § 7 of the prosody is not § 7 of the alphabet.
  const label = (r: Rule) => (r.kind === 'appendix' ? `Prosody ${r.id}` : r.id);

  /** where the sticky bars end: the line a section's top is read against */
  function shelfLine(): number {
    const s = document.querySelector('.shelf') as HTMLElement | null;
    return s ? Math.max(0, s.getBoundingClientRect().bottom) : 100;
  }
  function scrollToSection(n: number, smooth = false) {
    const el = document.getElementById(`s-${n}`);
    if (!el) return false;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - shelfLine() - 4, behavior: smooth ? 'smooth' : 'auto' });
    here = n;
    try { if (new URL(location.href).searchParams.get('s') !== String(n)) replaceState(`?s=${n}`, {}); } catch { /* not yet */ }
    return true;
  }
  function open(n: number) {
    // within this chapter: scroll there; elsewhere: load that chapter
    if (siblings.some((r) => r.n === n)) {
      scrollToSection(n, true);
      try { replaceState(`?s=${n}`, {}); } catch { /* before the router is ready */ }
    } else goto(`?s=${n}`, { noScroll: false, keepFocus: false });
  }

  // a new address: scroll to its section once the chapter is drawn
  $effect(() => {
    const n = current?.n;
    if (n === undefined) { here = null; return; }
    // and again once the faces and tables above it have settled, which push it down
    let undone = false;
    tick().then(() => requestAnimationFrame(() => scrollToSection(n)));
    // unless the reader has begun to scroll themselves
    const settle = () => { if (!undone) scrollToSection(n); };
    document.fonts?.ready.then(() => setTimeout(settle, 60));
    const t = setTimeout(settle, 700);
    const t2 = setTimeout(settle, 1600);
    const stop = () => { undone = true; };
    window.addEventListener('wheel', stop, { once: true, passive: true });
    window.addEventListener('touchstart', stop, { once: true, passive: true });
    window.addEventListener('keydown', stop, { once: true });
    return () => { clearTimeout(t); clearTimeout(t2); stop(); window.removeEventListener('wheel', stop); window.removeEventListener('touchstart', stop); };
  });

  // follow the section in view
  $effect(() => {
    siblings;
    if (typeof IntersectionObserver === 'undefined') return;
    let raf = 0;
    const io = new IntersectionObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const secs = [...document.querySelectorAll<HTMLElement>('article.sec')];
        // the last section whose top has passed the line under the shelf
        let n: number | null = null;
        const line = shelfLine() + 40;
        for (const el of secs) if (el.getBoundingClientRect().top <= line) n = Number(el.dataset.n);
        n ??= secs.length ? Number(secs[0].dataset.n) : null;
        if (n !== null && n !== here) {
          here = n;
          try { replaceState(`?s=${n}`, {}); } catch { /* not yet */ }
        }
      });
    }, { rootMargin: '-90px 0px -40% 0px', threshold: [0, 1] });
    tick().then(() => document.querySelectorAll('article.sec').forEach((el) => io.observe(el)));
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  });

  function onKey(e: KeyboardEvent) {
    const t = e.target as HTMLElement;
    if (t?.tagName === 'INPUT' || t?.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft' && prev) open(prev.n);
    if (e.key === 'ArrowRight' && next) open(next.n);
  }

  // Page scans live in the dukrnkarane repo and are already served from its
  // own site — 162MB of PNGs, too much to duplicate here just to link them.
  const SCANS = 'https://dukrnkarane.udapaana.in/assets/images/rules';

  // On a phone the rule list and the apparatus are sheets, not columns, and
  // the apparatus a section most needs (its sūtras, its page) is set under it.
  const narrow = $derived($isNarrow);
  let spineOpen = $state(false);
  let railOpen = $state(false);

  let hasApparatus = $derived(
    !!focus &&
      (focus.paniniRefs.length > 0 ||
        focus.citedBy.length > 0 ||
        focus.crossRefs.length > 0 ||
        focus.words.length > 0 ||
        focus.pages.start > 0),
  );

  let wordsOpen = $state(false);

  /*
    The language doing what the section describes: words in the corpus that
    carry a tag citing this section (build-kale-examples.ts). Loaded after the
    page, and folded under each section until asked for.
  */
  type Ex = { tag: string; form: string; sentence: string; translation?: string; reading?: string; t?: string; p?: string; s?: string };
  let examples = $state<{ titles: Record<string, string>; sections: Record<string, { graded: Ex[]; texts: Ex[] }> } | null>(null);
  onMount(async () => {
    try {
      const r = await fetch(dataUrl('/data/kale-examples.json'));
      if (r.ok) examples = await r.json();
    } catch { /* none */ }
  });
  const exOf = (n: number) => examples?.sections[String(n)] ?? null;
  let exOpen = $state<Set<number>>(new Set());
  const toggleEx = (n: number) => { const s = new Set(exOpen); s.has(n) ? s.delete(n) : s.add(n); exOpen = s; };
  const textHref = (x: Ex) => `/reader/text/${x.t}?part=${encodeURIComponent(x.p ?? '')}&section=${encodeURIComponent(x.s ?? '')}`;

  /** Marker-free form of a title, for the document <title>. */
  function plain(t: string): string {
    return t.replace(/@deva\[([^\]]+)\]/g, '$1').replace(/@\[([^\]]+)\]/g, '$1');
  }

  // The single sūtra a section's derivations are worked under, when there is
  // exactly one.
  const ruleSutra = (r: Rule) => {
    const linked = r.paniniRefs.filter((x) => x.sutraId);
    return linked.length === 1 ? linked[0] : null;
  };

  function range(c: Chapter): string {
    const lo = c.first > data.coreCount ? c.first - data.coreCount : c.first;
    const hi = c.last > data.coreCount ? c.last - data.coreCount : c.last;
    return lo === hi ? `§ ${lo}` : `§ ${lo}\u2013${hi}`;
  }
</script>

<svelte:window on:keydown={onKey} />

<svelte:head>
  <title>{focus ? `${label(focus)} ${plain(focus.title)}` : 'contents'} · grammar</title>
</svelte:head>

{#snippet shelfLeft()}
  {#if narrow}
    <SheetButton label="rules" onopen={() => (spineOpen = true)} />
    <span class="shelf-rule" aria-hidden="true"></span>
  {/if}
  {#if focus && chapter}
    <span class="chapter-name">{chapter.title}</span>
    <span class="sep">/</span>
    <span class="here">{label(focus)}</span>
    <span class="step">
      {#if prev}<button onclick={() => open(prev.n)} title={label(prev)}>‹</button>{:else}<span class="off">‹</span>{/if}
      {#if next}<button onclick={() => open(next.n)} title={label(next)}>›</button>{:else}<span class="off">›</span>{/if}
    </span>
  {:else}
    <span class="here">contents</span>
  {/if}
{/snippet}

{#snippet spine()}
  <Search {rules} onpick={(n) => { spineOpen = false; open(n); }} {label} />

  <Spine
    title="chapters"
    items={data.chapters.map((c) => ({ id: String(c.first), label: c.title, sub: range(c) }))}
    activeId={chapter ? String(chapter.first) : ''}
    onpick={(id) => { spineOpen = false; open(Number(id)); }}
  />

  {#if siblings.length}
    <div class="sections">
      {#each siblings as s (s.n)}
        <button class="section" class:on={s.n === focus?.n} onclick={() => { spineOpen = false; open(s.n); }}>
          <span class="sid">{s.kind === 'appendix' ? s.id : s.id}</span>
          <span class="stitle"><Title text={s.title} /></span>
        </button>
      {/each}
    </div>
  {/if}
{/snippet}

{#snippet sutraLinks(r: Rule)}
  {#each r.paniniRefs as ref}
    {#if ref.sutraId}
      <a class="sutra" href="/ref/{ref.sutraId}">{ref.display} →</a>
    {:else}
      <span class="sutra off" title="not in this recension of the Aṣṭādhyāyī">{ref.display}</span>
    {/if}
  {/each}
{/snippet}

{#snippet scanLinks(r: Rule)}
  {#if r.images.length && r.scan === 'verified'}
    {#each r.images as img}
      <a class="leaf" href="{SCANS}/{img}" target="_blank" rel="noopener" title="the printed page, as scanned">page scan {img.replace('.png', '')} ↗</a>
    {/each}
  {/if}
{/snippet}

{#snippet rail()}
  {#if focus}
    <span class="label">{label(focus)}</span>
    {#if focus.paniniRefs.length}
      <span class="label"><Sanskrit text="सूत्राणि" source="devanagari" /></span>
      <div class="sutras">{@render sutraLinks(focus)}</div>
    {/if}

    {#if focus.citedBy.length}
      <div class="block">
        <span class="label">cited by</span>
        {#each focus.citedBy as n}
          {@const r = byNumber.get(n)}
          {#if r}
            <button class="link-row" onclick={() => open(n)}>
              <span class="lid">{label(r)}</span>
              <span class="ltitle"><Title text={r.title} /></span>
            </button>
          {/if}
        {/each}
      </div>
    {/if}

    {#if focus.crossRefs.length}
      <div class="block">
        <span class="label">refers to</span>
        {#each [...new Set(focus.crossRefs)] as n}
          {@const r = byNumber.get(n)}
          {#if r}
            <button class="link-row" onclick={() => open(n)}>
              <span class="lid">{label(r)}</span>
              <span class="ltitle"><Title text={r.title} /></span>
            </button>
          {/if}
        {/each}
      </div>
    {/if}

    {#if focus.words.length}
      <Disclose label="Sanskrit words in this section" count={String(focus.words.length)} bind:open={wordsOpen}>
        <div class="words">
          {#each focus.words as w}<span class="word"><Sanskrit text={w} source="devanagari" /></span>{/each}
        </div>
      </Disclose>
    {/if}

    {#if focus.pages.start > 0}
      <div class="block">
        <span class="label">source</span>
        <span class="source">Kāle 1894</span>
        <div class="leaves">{@render scanLinks(focus)}</div>
      </div>
    {/if}
  {/if}
{/snippet}

<Shelf left={shelfLeft} progress={index >= 0 ? ((index + 1) / rules.length) * 100 : 0} />

<Shell
  {spine}
  rail={hasApparatus ? rail : undefined}
  sheets
  bind:spineOpen
  bind:railOpen
  spineWidth="240px"
>
  {#if !current}
    <!-- the front door: what the book is, and its contents -->
    <header class="toc-head">
      <h1>A Higher Sanskrit Grammar</h1>
      <p class="toc-by">Moreśvara Rāmacandra Kāle, 1894 · 972 sections and a prosody appendix</p>
      {#if data.missing}
        <p class="missing">There is no § {data.missing}. The contents are below; the search finds a section by its title, a Sanskrit form, or words in the text.</p>
      {/if}
      <p class="toc-how">
        Each chapter reads as one page, so a rule is seen with the rules around it. Every section
        links to the sūtras Kāle cites, to a scan of the printed page, and to places the corpus
        uses what it describes. Search with <kbd>/</kbd>.
      </p>
    </header>
    <ol class="toc">
      {#each data.chapters as c}
        <li><button onclick={() => open(c.first)}><span class="toc-t">{c.title}</span><span class="toc-r">{range(c)}</span></button></li>
      {/each}
    </ol>
  {:else}
    <header class="ch-head">
      <span class="ch-kicker">chapter {chIdx + 1} of {data.chapters.length} · {chapter ? range(chapter) : ''}</span>
      <h1>{chapter?.title}</h1>
    </header>

    {#each siblings as r (r.n)}
      {@const ex = exOf(r.n)}
      <article class="sec" class:at={r.n === focus?.n} id="s-{r.n}" data-n={r.n}>
        <header class="rule-head">
          <div class="rule-id">
            <span>{label(r)}</span>
            {#if r.kind === 'appendix'}<Chip label="appendix" />{/if}
          </div>
          <h2><Title text={r.title} /></h2>
        </header>

        <RuleBody text={r.body} title={r.title} knownSutraIds={data.knownSutraIds} fid={String(r.n)} />

        {#if r.derivations.length}
          {@const rs = ruleSutra(r)}
          <section class="derivations">
            <div class="deriv-head">
              <span class="label">derivations</span>
              <span class="deriv-count">{r.derivations.length}</span>
              {#if rs}<a class="deriv-sutra" href="/ref/{rs.sutraId}">{rs.display}</a>{/if}
            </div>
            <div class="deriv-rows">
              {#each r.derivations as d}
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

        {#if MATRIX_RULES.includes(r.n)}
          <SandhiMatrix rule={r.n} onpick={open} />
        {/if}

        <!-- under each section: on a phone its sūtras and page (the rail is
             gone there); everywhere, the corpus's examples, folded -->
        <div class="sec-foot">
          {#if narrow}
            {@render sutraLinks(r)}
            {@render scanLinks(r)}
          {/if}
          {#if ex && (ex.graded.length || ex.texts.length)}
            <button class="ex-toggle" aria-expanded={exOpen.has(r.n)} onclick={() => toggleEx(r.n)}>
              {exOpen.has(r.n) ? '▾' : '▸'} {ex.graded.length + ex.texts.length} examples in the corpus
            </button>
          {/if}
        </div>
        {#if ex && exOpen.has(r.n)}
          <section class="examples">
            {#each ex.graded as x}
              <a class="ex" href={`/reader?reading=${x.reading}`}>
                <span class="ex-top">
                  <span class="ex-form"><Sanskrit text={x.form} source="devanagari" /></span>
                  <span class="ex-tag"><Sanskrit text={x.tag} source="devanagari" /></span>
                  <span class="ex-id">{x.reading} →</span>
                </span>
                <span class="ex-line"><Sanskrit text={x.sentence} source="devanagari" /></span>
                {#if x.translation}<span class="ex-en">{x.translation}</span>{/if}
              </a>
            {/each}
            {#each ex.texts as x}
              <a class="ex" href={textHref(x)}>
                <span class="ex-top">
                  <span class="ex-form"><Sanskrit text={x.form} source="devanagari" /></span>
                  <span class="ex-tag"><Sanskrit text={x.tag} source="devanagari" /></span>
                  <span class="ex-id"><Sanskrit text={examples?.titles[x.t ?? ''] ?? x.t ?? ''} source="devanagari" /> § {x.s} →</span>
                </span>
                <span class="ex-line"><Sanskrit text={`… ${x.sentence} …`} source="devanagari" /></span>
              </a>
            {/each}
            <p class="ex-note">Words in the corpus that carry a tag citing this section: the readings annotated by hand, the texts as vidyut analyses them where that is settled.</p>
          </section>
        {/if}
      </article>
    {/each}

    <nav class="pager">
      {#if prevCh}
        <button onclick={() => open(prevCh.first)}>
          <span class="dir">← previous chapter</span>
          <span class="pt">{prevCh.title}</span>
        </button>
      {:else}<span></span>{/if}
      {#if nextCh}
        <button class="right" onclick={() => open(nextCh.first)}>
          <span class="dir">next chapter →</span>
          <span class="pt">{nextCh.title}</span>
        </button>
      {/if}
    </nav>
  {/if}
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
  .rule-head h2 {
    margin: 0;
    font-size: 23px;
    font-weight: 600;
    line-height: 1.2;
  }

  /* ── a chapter at a time ──────────────────────────────────────────── */
  .ch-head {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 6px;
  }
  .ch-kicker {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .ch-head h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
  }
  .sec {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 22px 0 8px;
    border-top: 1px solid var(--rule-2);
    scroll-margin-top: 120px;
  }
  /* the rule the address named, and the one in view */
  .sec.at .rule-id {
    color: var(--accent);
  }
  .sec-foot {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 6px 14px;
  }
  .sec-foot:empty {
    display: none;
  }
  .ex-toggle {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .ex-toggle:hover {
    color: var(--accent);
  }

  /* ── contents (the front door) ───────────────────────────────────────── */
  .toc-head {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .toc-head h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
  }
  .toc-by {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    color: var(--muted);
  }
  .toc-how,
  .missing {
    margin: 4px 0 0;
    font-family: var(--font-serif);
    font-size: 15px;
    line-height: 1.55;
    color: var(--ink-2);
  }
  .missing {
    color: var(--accent);
  }
  .toc {
    list-style: none;
    margin: 8px 0 0;
    padding: 0;
    border-top: 1px solid var(--rule);
  }
  .toc button {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    width: 100%;
    padding: 9px 0;
    border: none;
    border-bottom: 1px solid var(--rule);
    background: none;
    cursor: pointer;
    text-align: left;
  }
  .toc-t {
    font-family: var(--font-serif);
    font-size: 17px;
    color: var(--ink);
  }
  .toc button:hover .toc-t {
    color: var(--accent);
  }
  .toc-r {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
    white-space: nowrap;
  }

  /* the corpus's examples of the section */
  .examples {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .ex {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 8px 0;
    border-bottom: 1px solid var(--rule);
    text-decoration: none;
    color: inherit;
  }
  .ex:hover .ex-form {
    text-decoration: underline;
  }
  .ex-top {
    display: flex;
    align-items: baseline;
    gap: 10px;
    min-width: 0;
  }
  .ex-form {
    font-family: var(--font-deva);
    font-size: 17px;
    color: var(--accent);
  }
  .ex-tag {
    font-family: var(--font-deva);
    font-size: 12px;
    color: var(--quiet);
  }
  .ex-id {
    margin-left: auto;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-ref);
    white-space: nowrap;
  }
  .ex-line {
    font-family: var(--font-deva);
    font-size: 15px;
    color: var(--ink-2);
  }
  .ex-en {
    font-family: var(--font-prose);
    font-size: 14px;
    font-style: italic;
    color: var(--muted);
  }
  .ex-note {
    margin: 8px 0 0;
    font-family: var(--font-prose);
    font-size: 13px;
    color: var(--quiet);
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
