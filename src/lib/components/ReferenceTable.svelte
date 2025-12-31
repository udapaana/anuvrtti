<script lang="ts">
  import type { ReferenceTable, TableCell } from '$lib/reference/types';
  import Sanskrit from './Sanskrit.svelte';

  interface Props {
    table: ReferenceTable;
    compact?: boolean;
  }

  let { table, compact = false }: Props = $props();

  function getCellClasses(cell: TableCell): string {
    const classes = ['ref-cell'];
    if (cell.class) classes.push(cell.class);
    if (cell.sanskrit) classes.push('sanskrit-cell');
    return classes.join(' ');
  }
</script>

<div class="reference-table" class:compact>
  {#if table.title}
    <h4 class="table-title">
      {#if table.titleSanskrit}
        <Sanskrit text={table.titleSanskrit} />
        <span class="title-english">{table.title}</span>
      {:else}
        {table.title}
      {/if}
    </h4>
  {/if}

  {#if table.description}
    <p class="table-desc">{table.description}</p>
  {/if}

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          {#if table.rowHeaders}
            <th class="corner-cell"></th>
          {/if}
          {#each table.headers as header}
            <th
              class={getCellClasses(header)}
              colspan={header.colspan}
              rowspan={header.rowspan}
              title={header.tooltip}
            >
              {#if header.sanskrit}
                <Sanskrit text={header.text} />
              {:else}
                {header.text}
              {/if}
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each table.rows as row, rowIndex}
          <tr>
            {#if table.rowHeaders && table.rowHeaders[rowIndex]}
              {@const rowHeader = table.rowHeaders[rowIndex]}
              <th
                class={getCellClasses(rowHeader)}
                title={rowHeader.tooltip}
              >
                {#if rowHeader.sanskrit}
                  <Sanskrit text={rowHeader.text} />
                {:else}
                  {rowHeader.text}
                {/if}
              </th>
            {/if}
            {#each row as cell}
              <td
                class={getCellClasses(cell)}
                colspan={cell.colspan}
                rowspan={cell.rowspan}
                title={cell.tooltip}
              >
                {#if cell.sanskrit}
                  <Sanskrit text={cell.text} />
                {:else}
                  {cell.text}
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  {#if table.notes && table.notes.length > 0}
    <div class="table-notes">
      {#each table.notes as note}
        <p class="note">{note}</p>
      {/each}
    </div>
  {/if}
</div>

<style>
  .reference-table {
    margin: 1rem 0;
  }

  .table-title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
    color: #1c1917;
  }

  .title-english {
    font-weight: 400;
    color: #78716c;
    margin-left: 0.5rem;
    font-size: 0.875rem;
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
  }

  .compact table {
    font-size: 0.8rem;
  }

  th, td {
    padding: 0.5rem 0.75rem;
    text-align: center;
    border-bottom: 1px solid #e7e5e4;
  }

  .compact th, .compact td {
    padding: 0.35rem 0.5rem;
  }

  th {
    background: #fafaf9;
    font-weight: 600;
    color: #44403c;
  }

  .corner-cell {
    background: #f5f5f4;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background: #fafaf9;
  }

  .sanskrit-cell {
    font-size: 1em;
  }

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

  /* Row header styling */
  tbody th {
    text-align: right;
    background: #fafaf9;
    font-weight: 500;
  }
</style>
