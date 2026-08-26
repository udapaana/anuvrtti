<script lang="ts">
  import { page } from '$app/stores';
  import {
    displayScript,
    lessonLanguage,
    authoringMode
  } from '$lib/stores/preferences';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Palette from '$lib/components/ui/Palette.svelte';
  import SettingsModal from '$lib/components/SettingsModal.svelte';
  import Segmented from '$lib/components/ui/Segmented.svelte';
  import type { Script } from '$lib/transliteration';

  /*
    The app's persistent chrome, 52px, and nothing page-specific ever lands
    here — that is what pushed the old bar to nine targets. Five doors, one
    search, one preferences popover:

      read · workbook · usage · sūtra · grammar

    The script pills, the lesson language and the settings link all moved into
    the `aa` popover, and the floating authoring pencil became a mode switch
    inside it. Everything else in the app is one link away through /index.
  */
  let { user = null }: { user?: { login: string } | null } = $props();

  let prefs = $state(false);
  let settingsOpen = $state(false);
  let palette = $state<Palette | null>(null);

  const path = $derived($page.url.pathname);

  /*
    The doors, and the routes each one owns. A door lights for any route behind
    it, so /words never leaves you without a current door.

    "reference" used to be one door over two different books. The Aṣṭādhyāyī is
    Pāṇini in 3983 sūtras; the grammar is Kāle's *A Higher Sanskrit Grammar* in
    988 rules, and it answers the question the sūtras do not — how the language
    behaves, in the order a learner meets it. Filing the second inside the first
    made it reachable only by knowing it was there.
  */
  const doors = [
    { href: '/reader', label: 'read', owns: ['/reader'] },
    {
      href: '/workbook',
      label: 'workbook',
      owns: ['/workbook', '/learn', '/balabodhini', '/words', '/review']
    },
    { href: '/usage', label: 'usage', owns: ['/usage'] },
    { href: '/ref', label: 'sūtra', owns: ['/ref', '/conjugate'] },
    { href: '/grammar', label: 'grammar', owns: ['/grammar', '/dukrnkarane'] }
  ];

  function on(owns: string[]): boolean {
    return owns.some((prefix) => path === prefix || path.startsWith(prefix + '/'));
  }

  const scripts: { id: Script; label: string }[] = [
    { id: 'iast', label: 'IAST' },
    { id: 'devanagari', label: 'देव' },
    { id: 'telugu', label: 'తె' }
  ];
</script>

<svelte:window onclick={() => (prefs = false)} />

<header class="sitenav">
  <div class="inner">
    <!-- The wordmark is Sanskrit too, so it follows the toggle like everything
         else — the design transliterates it rather than fixing it as a logo. -->
    <a class="wordmark" href="/" aria-label="anuvrtti home">
      <span class="wm-full"><Sanskrit text="अनुवृत्ति" source="devanagari" /></span>
      <!-- On a phone the full wordmark costs ~80px that the fifth door needs.
           The first syllable still reads as the mark and still goes home. -->
      <span class="wm-short" aria-hidden="true"><Sanskrit text="अ" source="devanagari" /></span>
    </a>

    <nav class="doors">
      {#each doors as door (door.href)}
        <a class:on={on(door.owns)} href={door.href}>{door.label}</a>
      {/each}
    </nav>

    <button class="search" onclick={() => palette?.show()} aria-label="search">
      <span class="keys">⌘K</span><span class="glyph" aria-hidden="true">⌕</span>
    </button>

    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="prefs" onclick={(e) => e.stopPropagation()}>
      <button class="aa" class:on={prefs} onclick={() => (prefs = !prefs)} aria-expanded={prefs}>
        aa
      </button>

      {#if prefs}
        <div class="popover">
          <span class="label">script</span>
          <Segmented
            options={scripts.map((s) => ({ id: s.id, label: s.label, deva: s.id !== 'iast' }))}
            value={$displayScript}
            onchange={(id) => displayScript.set(id as Script)}
            ariaLabel="display script"
          />

          <span class="label">gloss language</span>
          <Segmented
            options={[
              { id: 'english', label: 'en' },
              { id: 'telugu', label: 'te' }
            ]}
            value={$lessonLanguage}
            onchange={(id) => lessonLanguage.set(id as 'english' | 'telugu')}
            ariaLabel="gloss language"
          />

          {#if user}
            <button class="mode" class:on={$authoringMode} onclick={() => authoringMode.toggle()}>
              <span>authoring mode</span>
              <span class="state">{$authoringMode ? 'on' : 'off'}</span>
            </button>
          {/if}

          <!-- opens over the page rather than navigating to it: changing the
               script should not cost you your place in the reading -->
          <button
            class="all"
            onclick={() => {
              prefs = false;
              settingsOpen = true;
            }}>all settings →</button
          >
        </div>
      {/if}
    </div>
  </div>
</header>

<Palette bind:this={palette} />
<SettingsModal bind:open={settingsOpen} />

<style>
  .sitenav {
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--rule-2);
  }
  .inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 24px;
    height: var(--nav-h);
    display: flex;
    align-items: center;
    gap: 26px;
  }

  .wm-short {
    display: none;
  }
  .wordmark {
    font-family: var(--font-deva);
    font-size: 19px;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    flex: none;
  }

  .doors {
    display: flex;
    align-items: center;
    gap: 22px;
    flex: 1;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.04em;
    min-width: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .doors::-webkit-scrollbar {
    display: none;
  }
  .doors a {
    color: var(--quiet);
    text-decoration: none;
    padding: 3px 0 2px;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
  }
  .doors a:hover {
    color: var(--ink);
  }
  .doors a.on {
    color: var(--ink);
    border-bottom-color: var(--accent);
  }

  .search {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    flex: none;
  }
  .search:hover {
    color: var(--ink);
  }
  /* the shortcut on a keyboard, the glyph on a phone — see the 720px block */
  .search .glyph {
    display: none;
  }

  .prefs {
    position: relative;
    flex: none;
  }
  .aa {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 3px 9px;
    cursor: pointer;
  }
  .aa.on {
    border-color: var(--accent);
    color: var(--accent);
  }

  .popover {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 40;
    width: 190px;
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    box-shadow: 0 6px 20px rgba(15, 20, 25, 0.08);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .mode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--ink);
    background: transparent;
    border: none;
    border-top: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 9px 0 0;
    cursor: pointer;
    text-align: left;
  }
  .mode .state {
    color: var(--quiet);
  }
  .mode.on .state {
    color: var(--accent);
  }

  .all {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent);
    text-decoration: none;
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    .inner {
      padding: 0 16px;
      gap: 16px;
    }
    /*
      Four doors, a wordmark, search and `aa` do not fit across 390px, so the
      doors scroll. Left plain, the fourth one was cut off mid-word — "r" of
      "reference" — which reads as a rendering fault rather than as more to
      come. The mask fades the last few pixels instead, which is how a
      scrollable row says so. Every door stays reachable, which is why this
      scrolls rather than dropping to the current door alone.
    */
    /*
      The wordmark contracts to its first syllable. With five doors — read ·
      workbook · usage · sūtra · grammar — the full mark left "grammar" entirely
      off the end of the scroll, where nothing suggests it exists; the ~80px it
      gives back is the difference between the row fitting and not.
    */
    .wm-full {
      display: none;
    }
    .wm-short {
      display: inline;
    }
    .doors {
      gap: 14px;
      overflow-x: auto;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 24px), transparent);
      mask-image: linear-gradient(to right, #000 calc(100% - 24px), transparent);
    }
    .doors::-webkit-scrollbar {
      display: none;
    }
    .doors a {
      flex: none;
    }
    /*
      Search stays. It used to be hidden here, which took the only way to reach
      a sūtra by name off the device most likely to be used away from a desk —
      and ⌘K is not a gesture a phone has, so hiding the button hid the feature
      outright. It becomes the glyph instead of the shortcut.
    */
    .search {
      font-size: 15px;
      color: var(--muted);
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .search .keys {
      display: none;
    }
    .search .glyph {
      display: inline;
    }
  }
</style>
