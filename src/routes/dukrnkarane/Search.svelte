<script lang="ts">
  import { transliterate, INDIC_SCRIPTS, type Script } from '$lib/transliteration';
  import { displayScript } from '$lib/stores/preferences';
  import Title from './Title.svelte';
  import type { Rule } from './+page';

  // Search over section titles, the corpus's own word index (7,530 unique
  // entries), and topic tags. Sanskrit is matched in Devanagari regardless of
  // the display script — the reader may be reading Telugu but typing IAST, or
  // pasting Devanagari, so the query is folded to both before matching.

  let { rules, onpick }: { rules: Rule[]; onpick: (n: number) => void } = $props();

  let open = $state(false);
  let q = $state('');
  let input = $state<HTMLInputElement | null>(null);
  let devQuery = $state('');

  let script = $derived($displayScript as Script);

  // A query typed in the display script (or IAST) also matched as Devanagari.
  $effect(() => {
    const raw = q.trim();
    if (!raw) {
      devQuery = '';
      return;
    }
    let cancelled = false;
    const from: Script = /[ऀ-ॿ]/.test(raw)
      ? 'devanagari'
      : INDIC_SCRIPTS.has(script) && script !== 'devanagari'
        ? script
        : 'iast';
    void (async () => {
      try {
        const out = await transliterate(raw, from, 'devanagari');
        if (!cancelled) devQuery = /\[.+?\]/.test(out) ? '' : out;
      } catch {
        if (!cancelled) devQuery = '';
      }
    })();
    return () => {
      cancelled = true;
    };
  });

  function strip(t: string): string {
    return t.replace(/@deva\[([^\]]+)\]/g, '$1').replace(/@\[([^\]]+)\]/g, '$1');
  }

  let results = $derived.by(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 2) return [];
    const dev = devQuery.trim();
    const out: { rule: Rule; why: string }[] = [];
    for (const r of rules) {
      const title = strip(r.title);
      if (title.toLowerCase().includes(needle) || (dev && title.includes(dev))) {
        out.push({ rule: r, why: 'title' });
        continue;
      }
      const w = r.words.find((x) => x.includes(dev || needle));
      if (dev && w) {
        out.push({ rule: r, why: w });
        continue;
      }
      const t = r.topics.find((x) => x.toLowerCase().includes(needle));
      if (t) out.push({ rule: r, why: t });
      if (out.length >= 60) break;
    }
    return out;
  });

  function show() {
    open = true;
    queueMicrotask(() => input?.focus());
  }

  function pick(n: number) {
    open = false;
    q = '';
    onpick(n);
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape' && open) {
      open = false;
      q = '';
    }
    const t = e.target as HTMLElement;
    if (t?.tagName === 'INPUT') return;
    if (e.key === '/') {
      e.preventDefault();
      show();
    }
  }
</script>

<svelte:window on:keydown={onKey} />

<div class="wrap">
  <button class="trigger" onclick={show} aria-label="search sections">
    <span class="glyph">⌕</span>
    <span class="hint">search <kbd>/</kbd></span>
  </button>

  {#if open}
    <div class="panel">
      <input
        bind:this={input}
        bind:value={q}
        class="field"
        type="text"
        placeholder="title, Sanskrit word, or topic"
        autocomplete="off"
        spellcheck="false"
      />
      {#if q.trim().length >= 2}
        <div class="results">
          {#if results.length === 0}
            <div class="empty">nothing matches</div>
          {:else}
            {#each results as { rule, why }}
              <button class="hit" onclick={() => pick(rule.n)}>
                <span class="hid">{rule.id}</span>
                <span class="htitle"><Title text={rule.title} /></span>
                {#if why !== 'title'}<span class="hwhy">{why}</span>{/if}
              </button>
            {/each}
          {/if}
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .wrap {
    position: relative;
  }
  .trigger {
    display: flex;
    align-items: center;
    gap: 7px;
    width: 100%;
    padding: 5px 9px;
    border: 1px solid #e7e5e4;
    border-radius: 6px;
    background: #fff;
    cursor: pointer;
    font:
      400 12.5px/1 var(--font-serif);
    color: #a8a29e;
  }
  .trigger:hover {
    border-color: #d6d3d1;
  }
  .glyph {
    font-size: 13px;
  }
  kbd {
    font:
      400 10px 'SF Mono',
      Consolas,
      monospace;
    border: 1px solid #e7e5e4;
    border-radius: 3px;
    padding: 0 3px;
    color: #a8a29e;
  }
  .panel {
    position: absolute;
    z-index: 40;
    top: calc(100% + 5px);
    left: 0;
    width: 330px;
    background: #fff;
    border: 1px solid #e7e5e4;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
    overflow: hidden;
  }
  .field {
    width: 100%;
    box-sizing: border-box;
    border: 0;
    border-bottom: 1px solid #f5f5f4;
    padding: 10px 12px;
    font:
      400 14px/1.3 var(--font-serif);
    color: #1c1917;
    outline: none;
  }
  .results {
    max-height: 320px;
    overflow-y: auto;
  }
  .hit {
    display: flex;
    align-items: baseline;
    gap: 8px;
    width: 100%;
    padding: 6px 12px;
    border: 0;
    background: none;
    cursor: pointer;
    text-align: left;
    font:
      400 13px/1.35 var(--font-serif);
    color: #44403c;
  }
  .hit:hover {
    background: #fafaf9;
  }
  .hid {
    flex: none;
    font:
      400 11px 'SF Mono',
      Consolas,
      monospace;
    color: #a8a29e;
  }
  .htitle {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hwhy {
    flex: none;
    font-size: 11px;
    color: #f97316;
    font-family: 'Noto Sans Devanagari', 'Noto Sans Telugu', sans-serif;
  }
  .empty {
    padding: 12px;
    font:
      400 12.5px/1 var(--font-serif);
    color: #a8a29e;
  }
</style>
