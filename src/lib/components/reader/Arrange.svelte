<script lang="ts">
  /*
    Arrange: rebuild a line in an order that makes sense to you.

    Sanskrit marks a word's role by its ending, not its place, so a verse can
    put an adjective at one end and its noun at the other, and the verb last
    or nowhere. The traditional remedy is the anvaya: the line restated in
    prose order. This lets the reader make their own, by hand, which is the
    point — it gives no answer. Placing a word means deciding what it goes
    with.

    What it does give, on request, is the one fact the endings settle: pick
    two words and it says whether their case, number and gender agree (or
    whether a word can be a verb's subject). Agreement is evidence, not a
    verdict — two nominatives can agree and not belong together — and the
    wording says so.

      tap a word above   it joins your line
      drag in your line  move it
      tap in your line   pick it (two picked: do they agree?)
  */
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { compare, type Features } from '$lib/reader/agreement';
  import { loadArrangement, saveArrangement } from '$lib/progress';

  type Tile = { ti: number; text: string; feats: Features };
  let {
    readingId,
    tiles,
    fromText = false,
    onclose
  }: { readingId: string; tiles: Tile[]; fromText?: boolean; onclose: () => void } = $props();

  const byTi = $derived(new Map(tiles.map((t) => [t.ti, t])));
  // svelte-ignore state_referenced_locally
  let order = $state<number[]>(loadArrangement(readingId).filter((ti) => tiles.some((t) => t.ti === ti)));
  let picked = $state<number[]>([]);
  const placed = $derived(new Set(order));
  $effect(() => saveArrangement(readingId, order));

  function place(ti: number) {
    if (placed.has(ti)) return;
    order = [...order, ti];
  }
  function pick(ti: number) {
    if (picked.includes(ti)) picked = picked.filter((x) => x !== ti);
    else picked = [...picked.slice(-1), ti];
  }
  function giveBack() {
    order = order.filter((ti) => !picked.includes(ti));
    picked = [];
  }
  function clear() {
    order = [];
    picked = [];
  }

  const verdict = $derived.by(() => {
    if (picked.length !== 2) return null;
    const [a, b] = picked.map((ti) => byTi.get(ti));
    if (!a || !b) return null;
    // a compound's first part (मत्सर- in मत्सरग्रस्ताः) carries no ending
    if (a.text.endsWith('-') || b.text.endsWith('-'))
      return { agree: null, said: 'A compound’s first part has no ending of its own; compare the compound’s last part.', differences: [] };
    return compare(a.feats, b.feats);
  });

  /*
    Dragging within your line. A press that travels is a drag; one that does
    not is a tap. The tile under the finger is found from the point, so the
    line can wrap and the move still lands between the right two words.
  */
  let dragTi = $state<number | null>(null);
  let start = { x: 0, y: 0 };
  let moved = false;
  function down(e: PointerEvent, ti: number) {
    start = { x: e.clientX, y: e.clientY };
    moved = false;
    dragTi = ti;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  }
  function move(e: PointerEvent) {
    if (dragTi == null) return;
    if (!moved && Math.hypot(e.clientX - start.x, e.clientY - start.y) < 6) return;
    moved = true;
    const el = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-mine]') as HTMLElement | null;
    if (!el) return;
    const over = Number(el.dataset.mine);
    if (over === dragTi) return;
    const box = el.getBoundingClientRect();
    const after = e.clientX > box.left + box.width / 2;
    const rest = order.filter((x) => x !== dragTi);
    const at = rest.indexOf(over) + (after ? 1 : 0);
    order = [...rest.slice(0, at), dragTi, ...rest.slice(at)];
  }
  function up(ti: number) {
    if (dragTi == null) return;
    if (!moved) pick(ti);
    dragTi = null;
  }
  /* the keyboard's way to move a picked word, and the phone's fallback */
  function nudge(by: number) {
    if (picked.length !== 1) return;
    const i = order.indexOf(picked[0]);
    const j = Math.max(0, Math.min(order.length - 1, i + by));
    if (i < 0 || i === j) return;
    const next = [...order];
    [next[i], next[j]] = [next[j], next[i]];
    order = next;
  }
</script>

<div class="arrange">
  <div class="ar-head">
    <span class="label">arrange</span>
    <span class="ar-hint">tap a word to place it · drag to move · tap two in your line to compare them</span>
    <button class="ar-x" onclick={onclose} aria-label="close arrange">×</button>
  </div>

  <div class="pool" aria-label="the line, in its own order">
    {#each tiles as t (t.ti)}
      <button class="tile" class:used={placed.has(t.ti)} disabled={placed.has(t.ti)} onclick={() => place(t.ti)}>
        <Sanskrit text={t.text} source="devanagari" />
      </button>
    {/each}
  </div>

  <div class="mine" aria-label="your order">
    {#if !order.length}
      <span class="ar-empty">your order</span>
    {/if}
    {#each order as ti (ti)}
      {@const t = byTi.get(ti)}
      {#if t}
        <button
          class="tile placed"
          class:picked={picked.includes(ti)}
          class:dragging={dragTi === ti && moved}
          data-mine={ti}
          aria-pressed={picked.includes(ti)}
          onpointerdown={(e) => down(e, ti)}
          onpointermove={move}
          onpointerup={() => up(ti)}
          onpointercancel={() => (dragTi = null)}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(ti); }
          }}
        ><Sanskrit text={t.text} source="devanagari" /></button>
      {/if}
    {/each}
  </div>

  <div class="ar-foot">
    {#if picked.length === 1}
      <button class="ar-btn" onclick={() => nudge(-1)} aria-label="move it left">←</button>
      <button class="ar-btn" onclick={() => nudge(1)} aria-label="move it right">→</button>
    {/if}
    {#if picked.length}
      <button class="ar-btn" onclick={giveBack}>put back</button>
    {/if}
    {#if order.length}
      <button class="ar-btn quiet" onclick={clear}>clear</button>
    {/if}
    <span class="ar-count">{order.length} of {tiles.length} placed</span>
  </div>

  {#if verdict}
    <p class="verdict" class:yes={verdict.agree === true} class:no={verdict.agree === false}>
      <Sanskrit text={verdict.said} source="devanagari" />
      {#each verdict.differences as [what, x, y]}
        <span class="diff">{what}: <Sanskrit text={x} source="devanagari" /> / <Sanskrit text={y} source="devanagari" /></span>
      {/each}
      {#if verdict.agree === true}
        <span class="caveat">Agreeing is not the same as belonging together; that is yours to judge.</span>
      {/if}
      {#if fromText}
        <span class="caveat">In a text, the endings are read by vidyut, so an ambiguous form may be read either way.</span>
      {/if}
    </p>
  {/if}
</div>

<style>
  .arrange {
    margin-top: 12px;
    padding: 10px 12px 12px;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    background: var(--paper);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .ar-head {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .ar-hint {
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--quiet);
    flex: 1 1 auto;
    min-width: 0;
  }
  .ar-x {
    background: none;
    border: none;
    font-size: 18px;
    line-height: 1;
    color: var(--muted);
    cursor: pointer;
    padding: 0 2px;
  }
  .pool,
  .mine {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .mine {
    min-height: 44px;
    padding: 6px;
    border: 1px dashed var(--rule-2);
    border-radius: var(--radius);
    background: var(--sunken);
    align-items: center;
  }
  .ar-empty {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--faint);
    padding: 0 4px;
  }
  .tile {
    font-family: var(--font-deva);
    font-size: calc(17px * var(--read-scale, 1));
    line-height: 1.4;
    padding: 4px 10px;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    cursor: pointer;
  }
  .tile.used {
    color: var(--ghost);
    border-style: dashed;
    cursor: default;
  }
  /* a placed word can be dragged: the page must not scroll under it */
  .tile.placed {
    touch-action: none;
    cursor: grab;
  }
  .tile.picked {
    border-color: var(--ink);
    background: var(--ink);
    color: var(--paper);
  }
  .tile.dragging {
    opacity: 0.55;
    cursor: grabbing;
  }
  .ar-foot {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .ar-btn {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--ink);
    background: none;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 5px 9px;
    cursor: pointer;
  }
  .ar-btn.quiet {
    color: var(--quiet);
  }
  .ar-count {
    margin-left: auto;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--quiet);
  }
  .verdict {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-family: var(--font-prose);
    font-size: 14.5px;
    color: var(--ink-2);
    border-left: 2px solid var(--rule-2);
    padding-left: 10px;
  }
  .verdict.yes {
    border-left-color: var(--accent-ref);
  }
  .verdict.no {
    border-left-color: var(--accent);
  }
  .diff {
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .caveat {
    font-size: 12.5px;
    color: var(--quiet);
  }
</style>
