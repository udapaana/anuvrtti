<script lang="ts">
  import { page } from '$app/stores';
  import { displayScript } from '$lib/stores/preferences';
  import type { Script } from '$lib/transliteration';

  // The app's persistent three-pillar chrome: wordmark · पठनम् / बालबोधिनी / सूत्र
  // · script switcher. Promoted from the reader page to global layout so the
  // whole app shares one navigation, not per-page duplicates.
  let { progress = null }: { progress?: number | null } = $props();

  let script = $state<Script>('iast');
  displayScript.subscribe((s) => (script = s));

  const path = $derived($page.url.pathname);
  function on(prefix: string): boolean {
    return prefix === '/' ? path === '/' : path.startsWith(prefix);
  }
</script>

<header class="sitenav">
  <div class="inner">
    <a class="wordmark" href="/" aria-label="anuvrtti home">अनुवृत्ति</a>

    <nav class="pillars">
      <a class:on={on('/reader')} href="/reader">पठनम् <span class="en">reader</span></a>
      <a class:on={on('/balabodhini')} href="/balabodhini">बालबोधिनी <span class="en">primer</span></a>
      <a class:on={on('/ref')} href="/ref">सूत्र <span class="en">reference</span></a>
    </nav>

    <div class="right">
      <div class="pills" role="group" aria-label="script">
        <button class:on={script === 'telugu'} onclick={() => displayScript.set('telugu')}>తె</button>
        <button class:on={script === 'devanagari'} onclick={() => displayScript.set('devanagari')}>देव</button>
        <button class:on={script === 'iast'} onclick={() => displayScript.set('iast')}>IAST</button>
      </div>
      <a class="settings" href="/settings">settings</a>
    </div>
  </div>
  {#if progress !== null}
    <div class="progress"><div class="bar" style="width:{progress}%"></div></div>
  {/if}
</header>

<style>
  .sitenav {
    position: sticky;
    top: 0;
    z-index: 30;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-bottom: 1px solid #e7e2d9;
  }
  .inner {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0.6rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  .wordmark {
    font-family: 'Noto Sans Devanagari', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: #f97316;
    letter-spacing: 0.01em;
    text-decoration: none;
    flex: none;
  }
  .pillars {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    font-family: ui-monospace, monospace;
    font-size: 0.74rem;
    letter-spacing: 0.03em;
    flex: 1;
  }
  .pillars a { color: #94a3b8; text-decoration: none; padding-bottom: 2px; border-bottom: 2px solid transparent; }
  .pillars a:hover { color: #0f1419; }
  .pillars a.on { color: #0f1419; border-bottom-color: #f97316; }
  .pillars .en { color: inherit; opacity: 0.7; }

  .right { display: flex; align-items: center; gap: 0.9rem; flex: none; }
  .pills { display: flex; background: #f1eadc; border-radius: 999px; padding: 3px; gap: 1px; }
  .pills button {
    border: none;
    cursor: pointer;
    font-family: ui-monospace, monospace;
    font-size: 0.68rem;
    padding: 0.22rem 0.55rem;
    border-radius: 999px;
    background: transparent;
    color: #6b6b6b;
    transition: all 0.15s;
  }
  .pills button.on { background: #fff; color: #0f1419; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12); }
  .settings {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.15s;
  }
  .settings:hover { color: #0f1419; }

  .progress { height: 2px; background: #f0eadf; }
  .progress .bar { height: 100%; background: #f97316; transition: width 0.35s ease; }

  @media (max-width: 720px) {
    .inner { flex-wrap: wrap; gap: 0.8rem 1rem; padding: 0.6rem 1rem; }
    .pillars { order: 3; flex-basis: 100%; gap: 1.1rem; }
    .pillars .en { display: none; }
  }
</style>
