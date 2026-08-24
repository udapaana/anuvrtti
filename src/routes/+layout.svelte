<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import EditModal from '$lib/components/EditModal.svelte';
  import SiteNav from '$lib/components/SiteNav.svelte';
  import { authoringMode } from '$lib/stores/preferences';

  let { children, data } = $props();
  let user = $derived(data.user as { login: string; avatar_url: string } | null);

  // Onboarding is full-bleed; every other route (settings included) gets the
  // persistent nav, so navigation is consistent app-wide.
  let showNav = $derived.by(() => {
    const path = $page.url.pathname;
    return !path.startsWith('/onboard');
  });

  // Authoring is a mode, not a floating button. While it is on — and it can
  // only be turned on from the `aa` popover, which only renders for a signed-in
  // user — the editor takes a rail on the right and the page keeps its full
  // reading width beside it, rather than being covered by a modal.
  let authoring = $derived(!!user && $authoringMode);

  onMount(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect && redirect !== '/') {
      sessionStorage.removeItem('redirect');
      goto(redirect);
    }
  });
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json" />
  <!-- A meta value cannot read a custom property; this is the paper token. -->
  <meta name="theme-color" content="#ffffff" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="anuvrtti" />
  <link rel="apple-touch-icon" href="/icon-192.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <!--
    The eight further Indic faces, loaded WITHOUT blocking the first paint —
    same reason as the primary sheet in app.html, and this was the second half
    of the same stall: two render-blocking requests to Google, not one.

    These are the scripts the toggle can render but almost nobody selects
    (Kannada through Sinhala). Holding up every page in the app, for every
    reader, on eight typefaces that only a few will ever see is the wrong
    trade even when Google answers quickly.
  -->
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@400;500;600&family=Noto+Sans+Malayalam:wght@400;500;600&family=Noto+Sans+Tamil:wght@400;500;600&family=Noto+Sans+Bengali:wght@400;500;600&family=Noto+Sans+Gujarati:wght@400;500;600&family=Noto+Sans+Gurmukhi:wght@400;500;600&family=Noto+Sans+Oriya:wght@400;500;600&family=Noto+Sans+Sinhala:wght@400;500;600&display=swap"
    rel="stylesheet"
    media="print"
    onload={(e) => ((e.currentTarget as HTMLLinkElement).media = 'all')}
  />
</svelte:head>

<!--
  Persistent chrome is the four-door SiteNav plus the `aa` popover. Everything
  page-specific belongs on that page's own shelf, which Shell.svelte renders
  directly beneath this. The settings and onboarding flows render full-bleed.
-->
<div class="shell" class:withnav={showNav} class:authoring>
  {#if showNav}
    <SiteNav {user} />
  {/if}

  <main>
    {@render children()}
  </main>

  {#if authoring}
    <aside class="author-rail">
      <EditModal {user} variant="rail" />
    </aside>
  {/if}
</div>

<style>
  .shell {
    position: relative;
    min-height: 100vh;
    background: var(--paper);
    color: var(--ink);
  }

  /* Shell.svelte owns the page grid and its padding; the layout only holds the
     nav and, in authoring mode, the editor rail. */
  main {
    min-width: 0;
  }
  .shell:not(.withnav) main {
    padding-top: 3rem;
  }

  .author-rail {
    position: fixed;
    top: var(--nav-h);
    right: 0;
    bottom: 0;
    width: 380px;
    z-index: 25;
    background: var(--sunken);
    border-left: 1px solid var(--rule-2);
    overflow-y: auto;
  }
  .shell.authoring main {
    padding-right: 380px;
  }

  @media (max-width: 960px) {
    .author-rail {
      top: auto;
      width: 100%;
      height: 55vh;
      border-left: none;
      border-top: 1px solid var(--rule-2);
    }
    .shell.authoring main {
      padding-right: 0;
      padding-bottom: 55vh;
    }
  }
</style>
