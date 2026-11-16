<script lang="ts">
  /*
    The two ways to take a chapter or a text away, side by side under its
    heading:

      save offline  keeps it in this browser, so the page opens without a
                    connection, taps and tables and all (offline.ts).
      download      a self-contained HTML file to keep, print or open
                    anywhere (export.ts): text, IAST, every word's analysis
                    and gloss, but no tables.

    A graded-reader chapter has no files of its own — every chapter is in
    one data file — so saving one saves the reader, and the control says so.
  */
  import {
    offlineStatus, offlineProgress, downloadOffline,
    savedTexts, textProgress, saveText, removeText
  } from '$lib/offline';
  import { saveFile } from '$lib/export';

  let { kind, id, filename, html }: {
    kind: 'text' | 'chapter';
    id: string;
    filename: string;
    html: () => Promise<string>;
  } = $props();

  let building = $state(false);
  let failed = $state(false);

  const progress = $derived(kind === 'text' ? $textProgress[id] : ($offlineStatus === 'working' ? $offlineProgress : undefined));
  const saved = $derived(kind === 'text' ? !!$savedTexts[id] : $offlineStatus === 'ready');
  const unsupported = $derived($offlineStatus === 'unsupported');

  async function save() {
    failed = false;
    try { await (kind === 'text' ? saveText(id) : downloadOffline()); } catch { failed = true; }
  }
  async function download() {
    building = true;
    try { saveFile(filename, await html()); } finally { building = false; }
  }
</script>

<div class="save">
  {#if !unsupported}
    {#if progress}
      <span class="state">saving… {progress.done}/{progress.total || '…'}</span>
    {:else if saved}
      <span class="state on" title={kind === 'chapter' ? 'every chapter of the reader is saved in this browser' : 'saved in this browser'}>
        ✓ {kind === 'chapter' ? 'reader saved offline' : 'saved offline'}
      </span>
      {#if kind === 'text'}<button onclick={() => removeText(id)}>remove</button>{/if}
    {:else}
      <button onclick={save} title={kind === 'chapter' ? 'saves every chapter — they share one file' : 'keep this text in this browser'}>
        save offline
      </button>
      {#if failed}<span class="state err">couldn't save — try again</span>{/if}
    {/if}
    <span class="sep" aria-hidden="true">·</span>
  {/if}
  <button onclick={download} disabled={building}>{building ? 'preparing…' : 'download'}</button>
</div>

<style>
  .save { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px; margin-top: 4px; }
  .save button, .state, .sep { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.04em; }
  .save button {
    background: none; border: 0; padding: 0; color: var(--accent); cursor: pointer;
    text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--rule);
  }
  .save button:disabled { color: var(--faint); cursor: default; }
  .state { color: var(--faint); }
  .state.on { color: var(--muted); }
  .state.err { color: var(--accent); }
  .sep { color: var(--faint); }
</style>
