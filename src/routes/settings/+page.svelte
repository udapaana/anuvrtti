<script lang="ts">
  /*
    The settings ROUTE — a deep link, and the entry from /index.

    In the app itself settings open as a modal over the page you were on, so
    nothing unmounts and nothing has to be restored; this route exists for the
    cases where a URL is the only way in. The content is the shared
    SettingsPanel, so the two can never drift.
  */
  import Shell from '$lib/components/ui/Shell.svelte';
  import SettingsPanel from '$lib/components/SettingsPanel.svelte';
  import { page } from '$app/stores';

  // Arriving by URL there is no page underneath to go back to, so the way out
  // is the one door everybody has. Coming from a link that says where it came
  // from (?from=/reader) we honour that instead.
  const back = $derived($page.url.searchParams.get('from') || '/');
  const backLabel = $derived(back === '/' ? '← home' : '← back');
</script>

<svelte:head><title>settings · anuvrtti</title></svelte:head>

<Shell columnMax="640px">
  <div class="route">
    <a href={back} class="back-link">{backLabel}</a>
    <SettingsPanel />
  </div>
</Shell>

<style>
  .route {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .back-link {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
    text-decoration: none;
    align-self: flex-start;
  }
  .back-link:hover {
    color: var(--accent);
  }
</style>
