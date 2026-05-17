<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import EditModal from '$lib/components/EditModal.svelte';
  import { editModal } from '$lib/stores/editModal';

  let { children, data } = $props();
  let user = $derived(data.user as { login: string; avatar_url: string } | null);

  // Hide settings link on the settings page itself and on onboarding flows.
  let showSettings = $derived.by(() => {
    const path = $page.url.pathname;
    return !path.startsWith('/settings') && !path.startsWith('/onboard');
  });

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
  <meta name="theme-color" content="#ffffff" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="anuvrtti" />
  <link rel="apple-touch-icon" href="/icon-192.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Noto+Sans+Devanagari:wght@400;500;600&family=Noto+Sans+Telugu:wght@400;500;600&family=Noto+Sans+Kannada:wght@400;500;600&family=Noto+Sans+Malayalam:wght@400;500;600&family=Noto+Sans+Tamil:wght@400;500;600&family=Noto+Sans+Bengali:wght@400;500;600&family=Noto+Sans+Gujarati:wght@400;500;600&family=Noto+Sans+Gurmukhi:wght@400;500;600&family=Noto+Sans+Oriya:wght@400;500;600&family=Noto+Sans+Sinhala:wght@400;500;600&family=Noto+Sans+Nandinagari&display=swap" rel="stylesheet" />
</svelte:head>

<!--
  No header, no footer. The persistent chrome is two tiny corner widgets:
  - wordmark top-left (saffron Devanagari) — clickable home link
  - settings link top-right (monospace)
  Language toggles live on the settings page, not in the navbar.
  See design2: chat1.md L341–393 (chrome iteration), L661 (final settings link).
-->
<div class="shell">
  <a class="wordmark" href="/" aria-label="anuvrtti home">अनुवृत्ति</a>

  {#if showSettings}
    <a
      class="settings-link"
      href="/settings"
      onclick={() => {
        // Remember where the user was so the settings page can offer a real
        // "close" affordance back to the same spot, not just to home.
        if (typeof sessionStorage !== 'undefined') {
          sessionStorage.setItem('anuvrtti-settings-return', $page.url.pathname + $page.url.search);
        }
      }}
    >settings</a>
  {/if}

  {#if user}
    <button
      class="edit-toggle"
      class:active={$editModal.open}
      onclick={() => $editModal.open ? editModal.close() : editModal.open()}
      title="Edit content"
      aria-label="Toggle content editor"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    </button>
  {/if}

  <main>
    {@render children()}
  </main>

  {#if $editModal.open}
    <EditModal {user} />
  {/if}
</div>

<style>
  .shell {
    position: relative;
    min-height: 100vh;
    background: #ffffff;
    color: #0f1419;
  }

  /* Both corner chromes get their own background-blurred capsule so they stay
     legible when the page scrolls underneath. */
  .wordmark {
    position: fixed;
    top: 0.65rem;
    left: 0.85rem;
    padding: 0.45rem 0.85rem;
    font-family: 'Noto Sans Devanagari', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: #f97316;
    letter-spacing: 0.03em;
    text-decoration: none;
    z-index: 30;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 3px;
  }

  .settings-link {
    position: fixed;
    top: 0.65rem;
    right: 0.85rem;
    padding: 0.45rem 0.85rem;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.15s;
    z-index: 30;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 3px;
  }
  .settings-link:hover { color: #0f1419; }

  .edit-toggle {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid #e2e8f0;
    background: #ffffff;
    color: #94a3b8;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s, border-color 0.15s;
    z-index: 30;
  }
  .edit-toggle:hover { color: #0f1419; border-color: #cbd5e1; }
  .edit-toggle.active { color: #f97316; border-color: #f97316; }

  main {
    padding: 4rem 2rem 3rem;
  }

  @media (max-width: 480px) {
    main {
      padding: 4rem 1rem 2rem;
    }
  }
</style>
