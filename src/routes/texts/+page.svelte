<script lang="ts">
  import { onMount } from 'svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { displayScript } from '$lib/stores/preferences';
  import { dataUrl } from '$lib/dataUrl';
  import { loadTextRead } from '$lib/progress';

  /*
    The whole texts, read from the first verse to the last: the shelf the
    reader's graded sequence leads to. The reader keeps its excerpts — a
    passage chosen for its level, with "read it all" pointing here — and this
    page holds the works themselves. A text opens at /reader/text/<id>, where it
    always has (saved copies and old links still work), read through the graded
    reader's own page, and this door lights there too.

    Two shelves: works given whole, and the epics as the Natesan books condense
    them — the poet's own verses, chosen and kept in order.
  */
  type T = { id: string; title: string; title_en: string; work?: string; place?: string; sections: number; words: number; parts: number };
  let texts = $state<T[]>([]);
  let failed = $state(false);
  let at = $state<Record<string, string>>({});
  /** sections read of each text (src/lib/progress.ts) */
  let readOf = $state<Record<string, number>>({});

  onMount(async () => {
    try {
      const r = await fetch(dataUrl('/data/texts/index.json'));
      if (!r.ok) throw new Error();
      texts = await r.json();
    } catch {
      failed = true;
      return;
    }
    // where each text was left off (the text page writes this)
    const marks: Record<string, string> = {};
    for (const t of texts) {
      try {
        const v = localStorage.getItem(`anuvrtti:text-progress:${t.id}`);
        if (!v) continue;
        const p = /^\d+$/.test(v) ? { s: Number(v) } : JSON.parse(v);
        if (p.s || p.part) marks[t.id] = p.part && p.part !== 'all' ? `part ${p.part}` : `§ ${p.s + 1}`;
      } catch { /* none */ }
    }
    at = marks;
    readOf = Object.fromEntries(texts.map((t) => [t.id, loadTextRead(t.id).size]));
  });

  const condensed = (t: T) => t.id.endsWith('-condensed');
  const shelves = $derived([
    { dev: 'ग्रन्थाः', label: 'whole works', items: texts.filter((t) => !condensed(t)) },
    { dev: 'संक्षेपाः', label: 'the epics, condensed', items: texts.filter(condensed) }
  ].filter((s) => s.items.length));
  const count = (n: number) => n.toLocaleString('en');
</script>

<svelte:head><title>texts · anuvrtti</title></svelte:head>

<Shell>
  <header class="head">
    <h1>Texts</h1>
    <p>Whole works, read in order, every word annotated. Tap a word to see its analysis, its gloss and its paradigm.</p>
  </header>

  {#if failed}
    <p class="note">The texts could not be loaded.</p>
  {:else if !texts.length}
    <p class="note">loading…</p>
  {/if}

  {#each shelves as shelf (shelf.label)}
    <section class="group">
      <div class="group-head">
        <span class="dev font-{$displayScript}"><Sanskrit text={shelf.dev} source="devanagari" /></span>
        <span class="label">{shelf.label}</span>
      </div>
      {#each shelf.items as t (t.id)}
        <a class="entry" href={`/reader/text/${t.id}`}>
          <span class="name">
            <span class="sa font-{$displayScript}"><Sanskrit text={t.title} source="devanagari" /></span>
            <span class="en">{t.title_en}</span>
          </span>
          <span class="meta">
            {count(t.sections)} sections · {count(t.words)} words{t.parts > 1 ? ` · ${t.parts} parts` : ''}
            {#if readOf[t.id]}<span class="at"> · {count(Math.min(readOf[t.id], t.sections))} of {count(t.sections)} read</span>{/if}
            {#if at[t.id]}<span class="at"> · left at {at[t.id]}</span>{/if}
            {#if t.place}<span class="place">{t.place}</span>{/if}
          </span>
        </a>
      {/each}
    </section>
  {/each}
</Shell>

<style>
  .head { display: flex; flex-direction: column; gap: 10px; max-width: 52ch; }
  .head h1 { margin: 0; font-size: 30px; font-weight: 600; line-height: 1.12; }
  .head p { margin: 0; font-size: 16px; color: var(--muted); }
  .note { color: var(--muted); font-family: var(--font-mono); font-size: 13px; }

  .group { display: flex; flex-direction: column; }
  .group-head {
    display: flex; align-items: baseline; gap: 10px;
    border-bottom: 1px solid var(--rule-2); padding-bottom: 8px; margin-bottom: 4px;
  }
  .dev { font-size: 18px; font-weight: 600; color: var(--accent); }
  .label { font-family: var(--font-mono); font-size: 12px; color: var(--quiet); }

  .entry {
    display: grid; grid-template-columns: 16rem minmax(0, 1fr); gap: 14px; align-items: baseline;
    padding: 12px 0; border-bottom: 1px solid var(--rule); text-decoration: none; color: inherit;
  }
  .entry:hover .sa { color: var(--accent); }
  .name { display: flex; flex-direction: column; gap: 3px; }
  .name .sa { font-size: 19px; color: var(--ink); }
  .name .en { font-size: 13px; color: var(--muted); font-style: italic; }
  .meta { display: flex; flex-direction: column; gap: 3px; font-family: var(--font-mono); font-size: 12px; color: var(--quiet); }
  .meta .at { color: var(--accent); }
  .meta .place { font-family: inherit; color: var(--muted); }

  @media (max-width: 560px) {
    .entry { grid-template-columns: 1fr; gap: 6px; }
  }
</style>
