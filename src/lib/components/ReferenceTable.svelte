<script lang="ts">
  import type { ReferenceTable, TableCell } from '$lib/reference/types';
  import Sanskrit from './Sanskrit.svelte';

  interface Props {
    table: ReferenceTable;
    compact?: boolean;
  }

  let { table, compact = false }: Props = $props();

  // ── modes ──────────────────────────────────────────────────────────────────
  type Mode = 'normal' | 'hide' | 'scramble';
  let mode: Mode = $state('normal');

  // ── hide mode ──────────────────────────────────────────────────────────────
  let hiddenSet = $state(new Set<string>());

  function enterHide() {
    const next = new Set<string>();
    table.rows.forEach((row, ri) => {
      row.forEach((_cell, ci) => {
        if (Math.random() < 0.5) next.add(`${ri}-${ci}`);
      });
    });
    // ensure at least one is hidden
    if (next.size === 0 && table.rows.length > 0 && table.rows[0].length > 0) {
      next.add('0-0');
    }
    hiddenSet = next;
    mode = 'hide';
  }

  function revealCell(ri: number, ci: number) {
    const next = new Set([...hiddenSet].filter(k => k !== `${ri}-${ci}`));
    hiddenSet = next;
    if (next.size === 0) exitMode();
  }

  // ── scramble mode ──────────────────────────────────────────────────────────
  // placements[ri][ci] = chip key placed there, or null
  // tray = chips not yet placed (shuffled pool)
  type Chip = { key: string; cell: TableCell; ri: number; ci: number };

  let placements = $state<(string | null)[][]>([]);
  let tray = $state<Chip[]>([]);
  let allChips = $state<Map<string, Chip>>(new Map());
  let dragKey: string | null = null;
  let repelling = $state(new Set<string>());
  let solvedCount = $state(0);
  let totalCount = $state(0);
  let colWidths = $state<number[]>([]); // locked column widths for scramble
  let tableEl: HTMLTableElement | undefined = $state();
  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function enterScramble() {
    // snapshot column widths before touching DOM
    if (tableEl) {
      const ths = tableEl.querySelectorAll<HTMLElement>('thead tr th');
      colWidths = Array.from(ths).map(th => th.getBoundingClientRect().width);
    }
    const chips: Chip[] = [];
    table.rows.forEach((row, ri) => {
      row.forEach((cell, ci) => {
        chips.push({ key: `${ri}-${ci}`, cell, ri, ci });
      });
    });
    allChips = new Map(chips.map(c => [c.key, c]));
    tray = shuffle(chips);
    placements = table.rows.map(row => row.map(() => null));
    solvedCount = 0;
    totalCount = chips.length;
    mode = 'scramble';
  }

  function countSolved(): number {
    let n = 0;
    placements.forEach((row, ri) => row.forEach((key, ci) => {
      if (key === `${ri}-${ci}`) n++;
    }));
    return n;
  }

  // drag from tray
  function onChipDragStart(key: string, e: DragEvent) {
    dragKey = key;
    e.dataTransfer!.effectAllowed = 'move';
  }

  // drag from a filled slot back to tray or another slot
  function onSlotDragStart(ri: number, ci: number, e: DragEvent) {
    dragKey = placements[ri][ci];
    e.dataTransfer!.effectAllowed = 'move';
    // remove from slot — it goes back to "in flight"
    const next = placements.map(r => [...r]);
    next[ri][ci] = null;
    placements = next;
    solvedCount = countSolved();
  }

  // if drag ends without a successful drop, return chip to tray
  function onDragEnd() {
    if (dragKey) {
      const chip = allChips.get(dragKey);
      if (chip && !tray.find(c => c.key === dragKey)) {
        // also not placed in any slot
        const alreadyPlaced = placements.some(row => row.includes(dragKey));
        if (!alreadyPlaced) tray = [...tray, chip];
      }
      dragKey = null;
    }
  }

  function onDragOver(e: DragEvent) {
    e.preventDefault();
    e.dataTransfer!.dropEffect = 'move';
  }

  function onDropSlot(ri: number, ci: number) {
    if (!dragKey) return;
    const chip = allChips.get(dragKey);
    if (!chip) { dragKey = null; return; }

    const correct = dragKey === `${ri}-${ci}`;

    if (correct) {
      // snap into place
      const existing = placements[ri][ci];
      const next = placements.map(r => [...r]);
      next[ri][ci] = dragKey;
      placements = next;
      tray = tray.filter(c => c.key !== dragKey);
      if (existing && existing !== dragKey) {
        const evicted = allChips.get(existing);
        if (evicted) tray = [...tray, evicted];
      }
      solvedCount = countSolved();
    } else {
      // repel: flash the slot, then send chip to tray
      const slotKey = `${ri}-${ci}`;
      repelling = new Set([...repelling, slotKey]);
      // also evict any chip already sitting in the slot
      const existing = placements[ri][ci];
      if (existing) {
        const evicted = allChips.get(existing);
        if (evicted && !tray.find(c => c.key === existing)) {
          tray = [...tray, evicted];
        }
        const next = placements.map(r => [...r]);
        next[ri][ci] = null;
        placements = next;
      }
      // return dropped chip to tray
      if (!tray.find(c => c.key === dragKey)) tray = [...tray, chip];
      setTimeout(() => {
        repelling = new Set([...repelling].filter(k => k !== slotKey));
      }, 400);
    }

    dragKey = null;
  }

  function onDropTray() {
    if (!dragKey) return;
    const chip = allChips.get(dragKey);
    if (chip && !tray.find(c => c.key === dragKey)) {
      tray = [...tray, chip];
    }
    dragKey = null;
  }

  // ── helpers ────────────────────────────────────────────────────────────────
  function exitMode() {
    mode = 'normal';
    hiddenSet = new Set();
    tray = [];
    placements = [];
    allChips = new Map();
    solvedCount = 0;
    dragKey = null;
    repelling = new Set();
    colWidths = [];
  }

  function getCellClasses(cell: TableCell): string {
    const classes = ['ref-cell'];
    if (cell.class) classes.push(cell.class);
    if (cell.sanskrit) classes.push('sanskrit-cell');
    return classes.join(' ');
  }

  function isSlotCorrect(ri: number, ci: number): boolean {
    return placements[ri]?.[ci] === `${ri}-${ci}`;
  }
</script>

<div class="reference-table" class:compact>
  <!-- Title row with mode buttons -->
  <div class="table-header">
    {#if table.title}
      <h4 class="table-title">
        {#if table.titleSanskrit}
          <Sanskrit text={table.titleSanskrit} />
          <span class="title-english">{table.title}</span>
        {:else}
          {table.title}
        {/if}
      </h4>
    {:else}
      <div></div>
    {/if}

    <div class="mode-btns">
      {#if mode !== 'normal'}
        <button class="mode-btn mode-exit" onclick={exitMode} title="Exit">✕</button>
      {/if}
      {#if mode === 'scramble'}
        <span class="score">{solvedCount}/{totalCount}</span>
      {/if}
      {#if mode === 'normal'}
        <button class="mode-btn" onclick={enterHide} title="Hide some cells and reveal them one by one">Hide</button>
        <button class="mode-btn" onclick={enterScramble} title="Drag cells from the tray into the correct slots">Scramble</button>
      {/if}
    </div>
  </div>

  {#if table.description}
    <p class="table-desc">{table.description}</p>
  {/if}

  <div class="table-wrapper">
    <table bind:this={tableEl} class:locked={colWidths.length > 0}>
      {#if colWidths.length > 0}
        <colgroup>
          {#each colWidths as w}
            <col style="width:{w}px;min-width:{w}px" />
          {/each}
        </colgroup>
      {/if}
      <thead>
        <tr>
          {#if table.rowHeaders}
            <th class="corner-cell"></th>
          {/if}
          {#each table.headers as header}
            <th class={getCellClasses(header)} colspan={header.colspan} rowspan={header.rowspan} title={header.tooltip}>
              {#if header.sanskrit}<Sanskrit text={header.text} />{:else}{header.text}{/if}
            </th>
          {/each}
        </tr>
      </thead>

      <tbody>
        {#each table.rows as row, ri}
          <tr>
            {#if table.rowHeaders && table.rowHeaders[ri]}
              {@const rh = table.rowHeaders[ri]}
              <th class={getCellClasses(rh)} title={rh.tooltip}>
                {#if rh.sanskrit}<Sanskrit text={rh.text} />{:else}{rh.text}{/if}
              </th>
            {/if}

            {#each row as cell, ci}
              {#if mode === 'normal'}
                <td class={getCellClasses(cell)} colspan={cell.colspan} rowspan={cell.rowspan} title={cell.tooltip}>
                  {#if cell.sanskrit}<Sanskrit text={cell.text} />{:else}{cell.text}{/if}
                </td>

              {:else if mode === 'hide'}
                {@const hidden = hiddenSet.has(`${ri}-${ci}`)}
                <td
                  class="{getCellClasses(cell)} {hidden ? 'cell-veiled' : 'cell-revealed'}"
                  onclick={() => hidden && revealCell(ri, ci)}
                  title={hidden ? 'Click to reveal' : cell.tooltip}
                >
                  <span class="cell-text" class:veiled={hidden}>
                    {#if cell.sanskrit}<Sanskrit text={cell.text} />{:else}{cell.text}{/if}
                  </span>
                </td>

              {:else if mode === 'scramble'}
                  {@const key = placements[ri]?.[ci]}
                  {@const chip = key ? allChips.get(key) : null}
                  {@const correct = isSlotCorrect(ri, ci)}
                  {@const repel = repelling.has(`${ri}-${ci}`)}
                  <td
                    class="slot {correct ? 'slot-correct' : repel ? 'slot-repel' : 'slot-empty'}"
                    ondragover={onDragOver}
                    ondrop={() => onDropSlot(ri, ci)}
                  >
                    {#if chip}
                      <span
                        class="chip {correct ? 'chip-correct' : 'chip-placed'} {chip.cell.sanskrit ? 'sanskrit-cell' : ''}"
                        draggable={!correct}
                        ondragstart={(e) => !correct && onSlotDragStart(ri, ci, e)}
                        ondragend={onDragEnd}
                      >
                        {#if chip.cell.sanskrit}<Sanskrit text={chip.cell.text} />{:else}{chip.cell.text}{/if}
                      </span>
                    {:else}
                      <span class="slot-dot"></span>
                    {/if}
                  </td>
              {/if}
            {/each}
          </tr>
        {/each}

        {#if mode === 'scramble' && solvedCount === totalCount && totalCount > 0}
          <tr>
            <td colspan={table.headers.length + (table.rowHeaders ? 1 : 0)} class="solved-banner">
              सर्वं सम्यक् ✓
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>

  <!-- Scramble tray -->
  {#if mode === 'scramble'}
    <div
      class="tray"
      ondragover={onDragOver}
      ondrop={onDropTray}
    >
      {#if tray.length === 0 && solvedCount < totalCount}
        <span class="tray-hint">all placed — drag back here to move</span>
      {:else}
        {#each tray as chip (chip.key)}
          <span
            class="chip chip-tray {chip.cell.sanskrit ? 'sanskrit-cell' : ''}"
            draggable="true"
            ondragstart={(e) => onChipDragStart(chip.key, e)}
            ondragend={onDragEnd}
          >
            {#if chip.cell.sanskrit}<Sanskrit text={chip.cell.text} />{:else}{chip.cell.text}{/if}
          </span>
        {/each}
      {/if}
    </div>
  {/if}

  {#if table.notes && table.notes.length > 0}
    <div class="table-notes">
      {#each table.notes as note}
        <p class="note">{note}</p>
      {/each}
    </div>
  {/if}
</div>

<style>
  .reference-table { margin: 1rem 0; }

  .table-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.25rem;
  }

  .table-title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    color: #1c1917;
  }

  .title-english {
    font-weight: 400;
    color: #78716c;
    margin-left: 0.5rem;
    font-size: 0.875rem;
  }

  .mode-btns {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    flex-shrink: 0;
  }

  .mode-btn {
    font-size: 0.7rem;
    padding: 0.15rem 0.55rem;
    border-radius: 0.25rem;
    border: 1px solid #d6d3d1;
    background: #fafaf9;
    color: #57534e;
    cursor: pointer;
    transition: background 0.1s, border-color 0.1s;
  }
  .mode-btn:hover { background: #f5f5f4; border-color: #a8a29e; }

  .mode-exit {
    padding: 0.15rem 0.4rem;
    color: #a8a29e;
    border-color: transparent;
    background: transparent;
  }
  .mode-exit:hover { color: #57534e; background: #f5f5f4; border-color: #d6d3d1; }

  .score {
    font-size: 0.7rem;
    color: #a8a29e;
    font-variant-numeric: tabular-nums;
    min-width: 2.5rem;
    text-align: right;
  }

  .table-desc {
    font-size: 0.8rem;
    color: #57534e;
    margin: 0 0 0.5rem 0;
  }

  .table-wrapper {
    overflow-x: auto;
    border: 1px solid #e7e5e4;
    border-radius: 6px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
    table-layout: auto;
  }
  table.locked {
    table-layout: fixed;
  }
  .compact table { font-size: 0.8rem; }

  th, td {
    padding: 0.5rem 0.75rem;
    text-align: center;
    border-bottom: 1px solid #e7e5e4;
  }
  .compact th, .compact td { padding: 0.35rem 0.5rem; }

  th {
    background: #fafaf9;
    font-weight: 600;
    color: #44403c;
  }
  .corner-cell { background: #f5f5f4; }

  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: #fafaf9; }
  .sanskrit-cell { font-size: 1em; }

  tbody th {
    text-align: right;
    background: #fafaf9;
    font-weight: 500;
  }

  /* ── hide mode ── */
  .cell-veiled { cursor: pointer; }
  .cell-veiled:hover { background: #f5f5f4; }

  .cell-text { display: inline; }

  /* The pill sits on the text span itself */
  .cell-text.veiled {
    color: transparent;
    background: #d6d3d1;
    border-radius: 3px;
    padding: 0 0.15em;
    user-select: none;
    transition: background 0.15s;
  }
  .cell-veiled:hover .cell-text.veiled {
    background: #a8a29e;
  }

  /* ── scramble mode — slots ── */
  .slot {
    padding: 0.5rem 0.75rem;
    vertical-align: middle;
    transition: background 0.15s;
    min-height: 2.5rem;
  }

  .slot-empty {
    background: #fafaf9;
  }
  .slot-empty:hover {
    background: #f0f0ef;
  }

  .slot-dot {
    display: block;
    width: 100%;
    min-height: 1.75rem;
    border-radius: 0.375rem;
    border: 1.5px dashed #c8c4c0;
  }

  .slot-correct { background: #f0fdf4; }

  .slot-repel {
    animation: repel 0.35s ease-out;
    background: #fef2f2;
  }

  @keyframes repel {
    0%   { background: #fee2e2; transform: scale(1.06); }
    40%  { background: #fecaca; transform: scale(0.96); }
    100% { background: #fef2f2; transform: scale(1); }
  }

  /* ── scramble mode — chips ── */
  .chip {
    display: inline-block;
    padding: 0.25rem 0.6rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    line-height: 1.4;
    user-select: none;
    transition: box-shadow 0.15s, transform 0.15s;
  }

  .chip-tray {
    background: white;
    border: 1px solid #d6d3d1;
    cursor: grab;
    box-shadow: 0 1px 2px rgba(0,0,0,0.06);
  }
  .chip-tray:hover {
    border-color: #a8a29e;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transform: translateY(-1px);
  }
  .chip-tray:active { cursor: grabbing; }

  .chip-correct {
    background: transparent;
    border: none;
    cursor: default;
    color: #166534;
  }

  /* ── tray ── */
  .tray {
    margin-top: 0.75rem;
    min-height: 2.75rem;
    padding: 0.5rem 0.625rem;
    border: 1.5px dashed #e7e5e4;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    align-items: center;
    background: #fafaf9;
    transition: border-color 0.15s, background 0.15s;
  }
  .tray:has([draggable]):hover {
    border-color: #d6d3d1;
  }

  .tray-hint {
    font-size: 0.75rem;
    color: #a8a29e;
    font-style: italic;
  }

  /* ── solved banner ── */
  .solved-banner {
    text-align: center;
    font-size: 0.875rem;
    color: #15803d;
    background: #f0fdf4;
    padding: 0.5rem;
    border-top: 1px solid #bbf7d0;
  }

  /* ── notes ── */
  .table-notes {
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    border-left: 2px solid #e7e5e4;
  }
  .note {
    font-size: 0.75rem;
    color: #78716c;
    margin: 0.25rem 0;
  }
</style>
