<script lang="ts">
  import { goto } from '$app/navigation';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { onMount } from 'svelte';
  import { searchTerms } from '$lib/jargon';
  import { wordBank } from '$lib/stores/wordBank';
  /*
    The sūtra corpus is imported DYNAMICALLY, and that is the whole point.

    `$lib/data` inlines all 3983 sūtras' YAML into the bundle (import.meta.glob
    with eager: true), which compiles to a 6.8MB JavaScript chunk. Palette is
    rendered by SiteNav, SiteNav is in the root layout, so a static import put
    that chunk in the initial graph of EVERY page: /reader downloaded, parsed
    and executed 6.8MB before its load event, whether or not you ever pressed
    ⌘K. Loading it only when the palette opens took the reader from 14.5s to
    about a second and a half.
  */
  import { dataUrl } from '$lib/dataUrl';
  // the id formatter lives in its own 3KB module, so it comes in statically —
  // it is `$lib/data`'s index that drags the corpus, not this
  import { numericToDisplayId } from '$lib/data/parser';
  import { foldQuery, matches, type Folded } from '$lib/search/fold';

  /*
    One search over four indexes, replacing four separate inputs: the /ref
    sidebar search, /words, dukṛṇkaraṇe's Search.svelte panel, and the reader's
    "go to" field — which stays on the reader's shelf too, since a jump inside
    the page you are on is not the same act as a search.

    Indexes load lazily on first open, so the palette costs nothing until it is
    used.
  */
  type Hit = {
    kind: 'sūtra' | 'jargon' | 'word' | 'reading';
    id: string;
    label: string;
    /** Source script of `label`, so the result list obeys the toggle too. */
    script?: 'devanagari' | 'telugu' | 'iast';
    meta: string;
    href: string;
  };

  let open = $state(false);
  let q = $state('');
  let cursor = $state(0);
  let input = $state<HTMLInputElement | null>(null);

  // The query, folded for matching: diacritic-free roman plus the Devanagari
  // and Telugu renderings, so `pitr`, `pitṛ`, `pitR` and पितृ all find each
  // other whatever script the index happens to be in.
  let folded = $state<Folded>({ raw: '', key: '', devanagari: '', telugu: '' });
  $effect(() => {
    const query = q.trim();
    if (!query) {
      folded = { raw: '', key: '', devanagari: '', telugu: '' };
      return;
    }
    let cancelled = false;
    foldQuery(query).then((f) => {
      if (!cancelled) folded = f;
    });
    return () => {
      cancelled = true;
    };
  });

  let sutras = $state<{ id: string; text: string; roman: string }[]>([]);
  let readings = $state<{ id: string; text: string; segment: number | null }[]>([]);
  let loaded = $state(false);

  async function loadIndexes() {
    if (loaded) return;
    loaded = true;
    try {
      const { loadSutras } = await import('$lib/data');
      const all = await loadSutras();
      sutras = all.map((s: any) => ({
        id: s.id,
        text: s.text ?? '',
        roman: s.textRoman ?? ''
      }));
    } catch {
      sutras = [];
    }
    try {
      const res = await fetch(dataUrl('/data/readings.json'));
      if (res.ok) {
        const data = await res.json();
        const chapters = data.chapters ?? data;
        const flat: any[] = Array.isArray(chapters)
          ? chapters.flatMap((c: any) => c.readings ?? [c])
          : [];
        readings = flat.map((r: any) => ({
          id: r.id,
          text: r.sanskrit ?? r.text ?? r.translation ?? '',
          segment: r.segment ?? null
        }));
      }
    } catch {
      readings = [];
    }
  }

  // The reader's id/tier grammar, kept as one of the resolvers: "ex210" is an
  // id, a bare number is a difficulty tier resolved to the nearest reading
  // at or above it.
  function readingHits(query: string): Hit[] {
    const idMatch = query.match(/^(ex|rd)\s*0*(\d+)$/i);
    if (idMatch) {
      const cand = idMatch[1].toLowerCase() + String(idMatch[2]).padStart(3, '0');
      const r = readings.find((x) => x.id === cand);
      if (r) {
        return [
          {
            kind: 'reading',
            id: r.id,
            label: r.text || r.id,
            script: 'devanagari',
            meta: r.id,
            href: `/reader?reading=${r.id}`
          }
        ];
      }
    }
    const n = Number(query.replace(/tier|segment|\s/gi, ''));
    if (query.trim() && !Number.isNaN(n)) {
      const r =
        readings.find((x) => (x.segment ?? -1) === n) ??
        readings.find((x) => (x.segment ?? Infinity) >= n);
      if (r) {
        return [
          {
            kind: 'reading',
            id: r.id,
            label: r.text || r.id,
            script: 'devanagari',
            meta: `tier ${r.segment ?? n}`,
            href: `/reader?reading=${r.id}`
          }
        ];
      }
    }
    return readings
      .filter((r) => matches(r.text, folded) || r.id.includes(query.toLowerCase()))
      .slice(0, 4)
      .map((r) => ({
        kind: 'reading' as const,
        id: r.id,
        label: r.text || r.id,
        script: 'devanagari' as const,
        meta: r.id,
        href: `/reader?reading=${r.id}`
      }));
  }

  const hits = $derived.by((): Hit[] => {
    const query = q.trim();
    if (query.length < 1) return [];

    const sutraHits: Hit[] = sutras
      .filter((s) => s.id.includes(query) || matches(s.text, folded) || matches(s.roman, folded))
      .slice(0, 6)
      .map((s) => ({
        kind: 'sūtra' as const,
        id: s.id,
        label: s.text || s.roman,
        script: (s.text ? 'devanagari' : 'iast') as 'devanagari' | 'iast',
        meta: numericToDisplayId(s.id),
        href: `/ref/${s.id}`
      }));

    // The jargon index matches on its own terms; feed it the Devanagari form
    // too, so a romanised query reaches a Devanagari-keyed entry.
    const jargonRaw = [...searchTerms(query), ...(folded.devanagari !== query ? searchTerms(folded.devanagari) : [])];
    const jargonHits: Hit[] = jargonRaw
      .filter((t: any, i: number, all: any[]) => all.findIndex((x: any) => (x.term ?? x.sanskrit) === (t.term ?? t.sanskrit)) === i)
      .slice(0, 4)
      .map((t: any) => ({
        kind: 'jargon' as const,
        id: t.id ?? t.term,
        label: t.sanskrit ?? t.term,
        script: (/[ऀ-ॿ]/.test(t.sanskrit ?? t.term ?? '') ? 'devanagari' : 'iast') as
          | 'devanagari'
          | 'iast',
        meta: t.englishGloss ?? t.gloss ?? t.definition ?? '',
        href: `/ref/jargon?q=${encodeURIComponent(t.term ?? t.sanskrit ?? '')}`
      }));

    const wordHits: Hit[] = $wordBank.words
      .filter(
        (w) =>
          matches(w.display, folded) ||
          matches(w.iast, folded) ||
          w.englishGloss.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 4)
      .map((w) => ({
        kind: 'word' as const,
        id: w.id,
        label: w.display,
        script: 'telugu' as const,
        meta: w.englishGloss || w.gloss,
        href: `/words?q=${encodeURIComponent(w.display)}`
      }));

    return [...sutraHits, ...readingHits(query), ...jargonHits, ...wordHits];
  });

  $effect(() => {
    // Any change to the result set puts the cursor back on the first row.
    hits;
    cursor = 0;
  });

  export function show() {
    open = true;
    loadIndexes();
    queueMicrotask(() => input?.focus());
  }

  function close() {
    open = false;
    q = '';
  }

  function pick(hit: Hit) {
    close();
    goto(hit.href);
  }

  function onkey(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      open ? close() : show();
      return;
    }
    if (!open) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      cursor = Math.min(cursor + 1, hits.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      cursor = Math.max(cursor - 1, 0);
    } else if (e.key === 'Enter' && hits[cursor]) {
      e.preventDefault();
      pick(hits[cursor]);
    }
  }

  onMount(() => {
    window.addEventListener('keydown', onkey);
    return () => window.removeEventListener('keydown', onkey);
  });
</script>

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="scrim" onclick={close}></div>
  <div class="palette" role="dialog" aria-modal="true" aria-label="search">
    <input
      bind:this={input}
      bind:value={q}
      class="input"
      placeholder="sūtra id or text · jargon term · word · reading id or tier"
      spellcheck="false"
      autocomplete="off"
    />
    {#if hits.length}
      <div class="results">
        {#each hits as hit, i (hit.kind + hit.id)}
          <button class="hit" class:on={i === cursor} onclick={() => pick(hit)}>
            <span class="kind">{hit.kind}</span>
            <span class="label">
              {#if hit.script}<Sanskrit text={hit.label} source={hit.script} />{:else}{hit.label}{/if}
            </span>
            <span class="meta">{hit.meta}</span>
          </button>
        {/each}
      </div>
    {:else if q.trim()}
      <div class="empty">{loaded ? 'nothing found' : 'loading the indexes…'}</div>
    {/if}
  </div>
{/if}

<style>
  .scrim {
    position: fixed;
    inset: 0;
    z-index: 60;
    background: rgba(15, 20, 25, 0.16);
  }
  .palette {
    position: fixed;
    z-index: 61;
    top: 12vh;
    left: 50%;
    transform: translateX(-50%);
    width: min(640px, calc(100vw - 32px));
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    box-shadow: 0 10px 40px rgba(15, 20, 25, 0.12);
    display: flex;
    flex-direction: column;
  }

  .input {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--ink);
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--rule);
    padding: 14px 16px;
    outline: none;
  }
  .input::placeholder {
    color: var(--faint);
  }

  .results {
    display: flex;
    flex-direction: column;
    max-height: 52vh;
    overflow-y: auto;
  }
  .hit {
    display: grid;
    grid-template-columns: 4.5rem minmax(0, 1fr) auto;
    gap: 12px;
    align-items: baseline;
    text-align: left;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 10px 16px;
    cursor: pointer;
  }
  .hit:last-child {
    border-bottom: none;
  }
  .hit.on,
  .hit:hover {
    background: var(--sunken);
  }

  .kind {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--faint);
  }
  .label {
    font-family: var(--font-deva);
    font-size: 15px;
    color: var(--ink);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .meta {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }

  .empty {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--faint);
    padding: 14px 16px;
  }
</style>
