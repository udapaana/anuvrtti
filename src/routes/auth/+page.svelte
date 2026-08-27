<script lang="ts">
  import { page } from '$app/stores';
  import Shell from '$lib/components/ui/Shell.svelte';

  /*
    One door, two providers.

    Every edit control used to link straight to /auth/github, which made a
    GitHub account the price of fixing a wrong विभक्ति. Identity here is used
    for attribution and nothing else — the pull request is opened by a service
    account, and the contributor never gets repository access — so the provider
    can be whichever one the reader already has.
  */
  const returnTo = $derived($page.url.searchParams.get('returnTo') || '/');
  const err = $derived($page.url.searchParams.get('error'));
  const href = (p: string) => `/auth/${p}?returnTo=${encodeURIComponent(returnTo)}`;
</script>

<svelte:head><title>sign in · anuvrtti</title></svelte:head>

<Shell measure>
  <header class="head">
    <h1>Sign in to suggest a correction</h1>
    <p>
      Corrections arrive as a pull request for review. Signing in is only so the
      suggestion can be credited to you — anuvrtti asks for your name and nothing
      else, and never for access to your account or your repositories.
    </p>
  </header>

  {#if err === 'google-unconfigured'}
    <p class="err">
      Google sign-in is not configured on this deployment. GitHub still works.
    </p>
  {/if}

  <div class="ways">
    <a class="way" href={href('github')}>
      <span class="way-name">GitHub</span>
      <span class="way-meta">credited as @your-login</span>
    </a>
    <a class="way" href={href('google')}>
      <span class="way-name">Google</span>
      <span class="way-meta">credited by your display name</span>
    </a>
  </div>

  <p class="fine">
    A suggestion becomes a public pull request, so your name appears with it.
    Your email address is never requested by either provider.
  </p>
</Shell>

<style>
  .head {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
  }
  .head h1 {
    margin: 0;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.15;
  }
  .head p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: var(--muted);
  }
  .err {
    margin: 0 0 20px;
    padding: 10px 12px;
    border-left: 2px solid var(--accent);
    background: var(--sunken);
    font-size: 14px;
  }
  /* one hairline grid, like the home doors — the two are equal choices */
  .ways {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1px;
    background: var(--rule-2);
    border: 1px solid var(--rule-2);
  }
  .way {
    background: var(--paper);
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-decoration: none;
    color: inherit;
  }
  .way:hover {
    background: var(--sunken);
  }
  .way-name {
    font-size: 17px;
    font-weight: 600;
    color: var(--accent);
  }
  .way-meta {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
  }
  .fine {
    margin: 20px 0 0;
    font-size: 13px;
    line-height: 1.6;
    color: var(--quiet);
  }
</style>
