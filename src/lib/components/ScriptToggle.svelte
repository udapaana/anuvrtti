<script lang="ts">
  import { type Script } from '$lib/transliteration';

  interface Props {
    current: Script;
    onChange: (script: Script) => void;
  }

  let { current, onChange }: Props = $props();

  // Three primary scripts shown inline (design: देव · IAST · తెలుగు).
  // The rest are reachable via the overflow menu — kept available because the
  // user's content spans many Indic scripts.
  const primary: { id: Script; label: string; font: string }[] = [
    { id: 'devanagari', label: 'देव',   font: 'Noto Sans Devanagari' },
    { id: 'iast',       label: 'IAST',  font: 'Crimson Pro' },
    { id: 'telugu',     label: 'తెలుగు', font: 'Noto Sans Telugu' },
  ];

  const overflow: { id: Script; label: string; font: string }[] = [
    { id: 'kannada',     label: 'ಕನ್ನಡ',     font: 'Noto Sans Kannada' },
    { id: 'malayalam',   label: 'മലയാളം',   font: 'Noto Sans Malayalam' },
    { id: 'tamil',       label: 'தமிழ்',     font: 'Noto Sans Tamil' },
    { id: 'bengali',     label: 'বাংলা',     font: 'Noto Sans Bengali' },
    { id: 'gujarati',    label: 'ગુજરાતી',   font: 'Noto Sans Gujarati' },
    { id: 'gurmukhi',    label: 'ਪੰਜਾਬੀ',     font: 'Noto Sans Gurmukhi' },
    { id: 'odia',        label: 'ଓଡ଼ିଆ',      font: 'Noto Sans Oriya' },
    { id: 'sinhala',     label: 'සිංහල',     font: 'Noto Sans Sinhala' },
    { id: 'nandinagari', label: '𑦮',         font: 'Noto Sans Nandinagari' },
    { id: 'iso15919',    label: 'ISO',       font: 'Crimson Pro' },
    { id: 'slp1',        label: 'SLP1',      font: 'ui-monospace' },
    { id: 'hk',          label: 'HK',        font: 'ui-monospace' },
    { id: 'itrans',      label: 'ITRANS',    font: 'ui-monospace' },
    { id: 'velthuis',    label: 'Vel',       font: 'ui-monospace' },
  ];

  let open = $state(false);

  function pick(id: Script) {
    onChange(id);
    open = false;
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.script-toggle')) open = false;
  }
</script>

<svelte:window onclick={handleClickOutside} />

<div class="script-toggle">
  {#each primary as s}
    <button
      class="seg"
      class:active={current === s.id}
      style="font-family: '{s.font}', sans-serif"
      onclick={() => pick(s.id)}
      aria-label="display in {s.id}"
    >{s.label}</button>
  {/each}

  <button
    class="more"
    class:active={overflow.some(o => o.id === current)}
    onclick={() => open = !open}
    aria-label="more scripts"
  >…</button>

  {#if open}
    <div class="popover">
      {#each overflow as s}
        <button
          class="row"
          class:active={current === s.id}
          onclick={() => pick(s.id)}
        >
          <span class="row-label" style="font-family: '{s.font}', sans-serif">{s.label}</span>
          <span class="row-id">{s.id}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .script-toggle {
    position: relative;
    display: flex;
    align-items: baseline;
    gap: 0.85rem;
  }

  /* Bare-text segmented switcher — no borders, no pills.
     The active item is the only one in saffron. */
  .seg, .more {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 0.95rem;
    line-height: 1;
    color: #94a3b8;
    transition: color 0.15s;
  }
  .seg:hover, .more:hover { color: #0f1419; }
  .seg.active, .more.active {
    color: #f97316;
  }

  .more {
    font-family: ui-monospace, monospace;
    font-size: 0.85rem;
    color: #cbd5e1;
    padding: 0 0.15rem;
  }

  .popover {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    padding: 0.4rem 0;
    width: 14rem;
    max-height: 22rem;
    overflow-y: auto;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    z-index: 50;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    padding: 0.35rem 0.85rem;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.1s;
  }
  .row:hover { background: #fff7ed; }
  .row.active .row-label { color: #f97316; }
  .row-label {
    font-size: 0.95rem;
    color: #0f1419;
  }
  .row-id {
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    color: #94a3b8;
    letter-spacing: 0.03em;
  }
</style>
