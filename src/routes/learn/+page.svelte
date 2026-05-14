<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { loadPathIndex, type PathMeta } from '$lib/content';
  import { learningProgress } from '$lib/stores/learning';
  import { displayScript } from '$lib/stores/preferences';
  import { transliterate, type Script } from '$lib/transliteration';
  import InlineMarkup from '$lib/components/InlineMarkup.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { onMount } from 'svelte';

  // The active volume tab: URL ?vol=1 or ?vol=2; default 1.
  let vol = $derived.by<1 | 2>(() => {
    const v = $page.url.searchParams.get('vol');
    return v === '2' ? 2 : 1;
  });

  let allPaths: PathMeta[] = $state([]);
  let completedPaths: string[] = $state([]);

  learningProgress.subscribe(p => { completedPaths = p.completedPaths; });

  onMount(async () => {
    allPaths = await loadPathIndex();
    rebuildLabels($displayScript);
    return displayScript.subscribe(s => rebuildLabels(s));
  });

  function detectSource(s: string): Script {
    if (/[ఀ-౿]/.test(s)) return 'telugu';
    if (/[ऀ-ॿ]/.test(s)) return 'devanagari';
    return 'iast';
  }

  let titles: Map<string, string> = $state(new Map());
  async function rebuildLabels(script: Script) {
    const m = new Map<string, string>();
    for (const p of allPaths) {
      if (!p.titleSanskrit) continue;
      const src = detectSource(p.titleSanskrit);
      m.set(p.id, script === src ? p.titleSanskrit : await transliterate(p.titleSanskrit, src, script));
    }
    titles = m;
  }
  function title(id: string, fallback: string) { return titles.get(id) || fallback; }

  let volPaths = $derived(
    allPaths
      .filter(p => p.id.startsWith(`balabodhini-${vol}-`))
      .sort((a, b) => a.order - b.order)
  );

  function setVol(n: 1 | 2) {
    const url = new URL($page.url);
    url.searchParams.set('vol', String(n));
    goto(url.pathname + url.search, { replaceState: false, noScroll: true });
  }

  function isDone(id: string) { return completedPaths.includes(id); }
  function lessonNum(id: string): number {
    const m = id.match(/balabodhini-\d+-(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  }
</script>

<svelte:head>
  <title>Bālabodhinī | anuvrtti</title>
</svelte:head>

<article class="page">
  <a href="/" class="back-link">← home</a>

  <header class="head">
    <p class="eyebrow"><Sanskrit text="bālabodhinī" source="iast" /> · graded reader</p>
    <div class="tabs">
      <button
        class="tab"
        class:active={vol === 1}
        onclick={() => setVol(1)}
      >vol I</button>
      <button
        class="tab"
        class:active={vol === 2}
        onclick={() => setVol(2)}
      >vol II</button>
    </div>
    <p class="vol-meta">
      {#if vol === 1}lessons 1–38{:else}lessons 39–78{/if}
    </p>
  </header>

  <ul class="lesson-list">
    {#each volPaths as p}
      {@const done = isDone(p.id)}
      {@const num = lessonNum(p.id)}
      <li>
        <a href="/learn/{p.id}">
          <span class="lesson-num" class:done>{String(num).padStart(2, '0')}</span>
          <div class="lesson-body">
            <span class="lesson-title font-{$displayScript}">{title(p.id, p.titleSanskrit)}</span>
            {#if p.description}
              <span class="lesson-desc"><InlineMarkup text={p.description} /></span>
            {/if}
          </div>
          <span class="lesson-status">
            {#if done}<span class="status-ok">✓</span>{/if}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</article>

<style>
  .page {
    max-width: 40rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .back-link {
    display: inline-block;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.15s;
  }
  .back-link:hover { color: #0f1419; }

  .head {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .eyebrow {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    margin: 0;
  }

  /* Tabs — bare text, saffron underline for active. Replaces the old
     bālabodhini / vyākaraṇam tab block. */
  .tabs {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.75rem;
  }
  .tab {
    background: none;
    border: none;
    padding: 0 0 0.3rem;
    margin-bottom: -0.8rem;
    cursor: pointer;
    font-size: 1rem;
    font-family: 'Crimson Pro', serif;
    font-style: italic;
    color: #94a3b8;
    border-bottom: 2px solid transparent;
    transition: color 0.15s, border-color 0.15s;
  }
  .tab:hover { color: #0f1419; }
  .tab.active {
    color: #f97316;
    border-bottom-color: #f97316;
  }

  .vol-meta {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    margin: 1rem 0 0;
  }

  /* Lesson rows — monospace number, Devanagari/Telugu title, italic description */
  .lesson-list {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0;
  }
  .lesson-list li a {
    display: grid;
    grid-template-columns: 2.5rem 1fr auto;
    gap: 1rem;
    align-items: baseline;
    padding: 0.75rem 0;
    border-top: 1px solid #e2e8f0;
    text-decoration: none;
    color: #0f1419;
    transition: background 0.1s;
  }
  .lesson-list li:last-child a { border-bottom: 1px solid #e2e8f0; }
  .lesson-list li a:hover { background: #fff7ed; }

  .lesson-num {
    font-family: ui-monospace, monospace;
    font-size: 0.78rem;
    color: #94a3b8;
    letter-spacing: 0.04em;
    align-self: baseline;
  }
  .lesson-num.done { color: #059669; }

  .lesson-body {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-width: 0;
  }
  .lesson-title {
    font-size: 1.05rem;
    font-weight: 400;
    color: #0f1419;
  }
  .lesson-desc {
    font-size: 0.85rem;
    color: #94a3b8;
    font-style: italic;
    line-height: 1.45;
  }
  .lesson-status {
    font-family: ui-monospace, monospace;
    font-size: 0.8rem;
    min-width: 1.5rem;
    text-align: right;
  }
  .status-ok { color: #059669; }
</style>
