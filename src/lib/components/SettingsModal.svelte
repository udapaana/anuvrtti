<script lang="ts">
  /*
    Settings, over the page you were reading.

    As a route, opening settings meant leaving: the reader unmounted, the
    corpus was refetched on the way back, and the scroll position, the selected
    word and the open question were all gone. The page even had a "back" link
    for this, but nothing ever wrote the sessionStorage key it read, so it
    always fell back to "← home" — you changed the script and were returned to
    the front door.

    A modal has no such problem: nothing unmounts, so there is nothing to
    restore. Preferences are stores, so every change behind the overlay is
    already applied to the page underneath — close it and you are exactly where
    you were, in the script you just picked.
  */
  import SettingsPanel from './SettingsPanel.svelte';

  let { open = $bindable(false) }: { open?: boolean } = $props();

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open) {
      e.stopPropagation();
      open = false;
    }
  }
</script>

<svelte:window onkeydown={onKeydown} />

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    class="scrim"
    role="dialog"
    aria-modal="true"
    aria-label="settings"
    tabindex="-1"
    onclick={(e) => {
      // only a click on the scrim itself closes; clicks inside the sheet are
      // for the controls in it
      if (e.target === e.currentTarget) open = false;
    }}
  >
    <div class="sheet">
      <button class="close" onclick={() => (open = false)} aria-label="close settings">×</button>
      <SettingsPanel />
    </div>
  </div>
{/if}

<style>
  .scrim {
    position: fixed;
    inset: 0;
    z-index: 60;
    background: rgba(15, 20, 25, 0.28);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 20px;
    overflow-y: auto;
  }

  .sheet {
    position: relative;
    width: 100%;
    max-width: 680px;
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    box-shadow: 0 18px 48px rgba(15, 20, 25, 0.16);
    padding: 28px 32px 36px;
  }

  .close {
    position: absolute;
    top: 12px;
    right: 14px;
    font-family: var(--font-mono);
    font-size: 18px;
    line-height: 1;
    color: var(--quiet);
    background: transparent;
    border: none;
    padding: 4px 6px;
    cursor: pointer;
  }
  .close:hover {
    color: var(--ink);
  }

  @media (max-width: 720px) {
    .scrim {
      padding: 0;
    }
    .sheet {
      min-height: 100%;
      border: none;
      padding: 24px 18px 40px;
    }
  }
</style>
