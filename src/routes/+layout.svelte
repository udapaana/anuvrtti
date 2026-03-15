<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import ScriptToggle from '$lib/components/ScriptToggle.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import EditModal from '$lib/components/EditModal.svelte';
  import { displayScript } from '$lib/stores/preferences';
  import { editModal } from '$lib/stores/editModal';
  import type { Script } from '$lib/transliteration';

  let { children, data } = $props();
  let user = $derived(data.user as { login: string; avatar_url: string } | null);

  onMount(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect && redirect !== '/') {
      sessionStorage.removeItem('redirect');
      goto(redirect);
    }
  });

  function handleScriptChange(script: Script) {
    displayScript.set(script);
  }

  // Determine which mode is active based on current path
  type Mode = 'learn' | 'ref' | 'none';
  let currentMode: Mode = $derived.by(() => {
    const path = $page.url.pathname;
    if (path === '/learn' || path.startsWith('/learn/') || path === '/') return 'learn';
    if (path === '/ref' || path.startsWith('/ref/')) return 'ref';
    return 'none';
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600&family=Noto+Sans+Telugu:wght@400;500;600&family=Noto+Sans+Kannada:wght@400;500;600&family=Noto+Sans+Malayalam:wght@400;500;600&family=Noto+Sans+Tamil:wght@400;500;600&family=Noto+Sans+Bengali:wght@400;500;600&family=Noto+Sans+Gujarati:wght@400;500;600&family=Noto+Sans+Gurmukhi:wght@400;500;600&family=Noto+Sans+Oriya:wght@400;500;600&family=Noto+Sans+Sinhala:wght@400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-stone-50 text-stone-900">
  <header class="border-b border-stone-200 bg-white sticky top-0 z-40">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="text-lg font-semibold hover:text-indigo-600 transition-colors">
        <Sanskrit text="अनुवृत्ति" />
      </a>

      <nav class="flex items-center gap-1">
        <a
          href="/learn"
          class="nav-link"
          class:active={currentMode === 'learn'}
        >
          Learn
        </a>
        <a
          href="/ref"
          class="nav-link"
          class:active={currentMode === 'ref'}
        >
          Reference
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <ScriptToggle current={$displayScript} onChange={handleScriptChange} />
        {#if user}
          <button
            class="edit-toggle"
            class:active={$editModal.open}
            onclick={() => $editModal.open ? editModal.close() : editModal.open()}
            title="Edit content"
            aria-label="Toggle content editor"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
        {/if}
        {#if user}
          <div class="auth-user">
            <img src={user.avatar_url} alt={user.login} class="avatar" />
            <span class="username">{user.login}</span>
            <form method="POST" action="/auth/logout?returnTo={$page.url.pathname}">
              <button type="submit" class="logout-btn">Sign out</button>
            </form>
          </div>
        {:else}
          <a href="/auth/github?returnTo={$page.url.pathname}" class="signin-btn">
            Sign in with GitHub
          </a>
        {/if}
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 py-6">
    {@render children()}
  </main>

  {#if $editModal.open}
    <EditModal {user} />
  {/if}

  <footer class="border-t border-stone-200 bg-white mt-12">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-stone-500">
        <div>
          Data from <a href="https://ashtadhyayi.com" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">ashtadhyayi.com</a>
        </div>
        <div class="flex items-center gap-4">
          <a href="/about" class="hover:text-stone-700">About</a>
          <a href="https://github.com/udapaana/anuvrtti" target="_blank" rel="noopener" class="hover:text-stone-700">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #57534e;
    border-radius: 0.375rem;
    transition: all 0.15s;
  }
  .nav-link:hover {
    color: #1c1917;
    background: #f5f5f4;
  }
  .nav-link.active {
    color: #4f46e5;
    background: #eef2ff;
  }

  .auth-user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8125rem;
    color: #57534e;
  }

  .avatar {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    border: 2px solid #22c55e;
    box-shadow: 0 0 0 1px #dcfce7;
  }

  .username {
    font-weight: 500;
    color: #1c1917;
  }

  .logout-btn {
    font-size: 0.8125rem;
    color: #78716c;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .logout-btn:hover {
    color: #44403c;
  }

  .signin-btn {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #4f46e5;
    background: #eef2ff;
    border: 1px solid #c7d2fe;
    border-radius: 0.375rem;
    padding: 0.3125rem 0.75rem;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.1s;
  }
  .signin-btn:hover {
    background: #e0e7ff;
    border-color: #a5b4fc;
  }

  .edit-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 0.375rem;
    border: 1px solid #e7e5e4;
    background: none;
    color: #78716c;
    cursor: pointer;
    transition: all 0.15s;
  }
  .edit-toggle:hover {
    color: #4f46e5;
    border-color: #c7d2fe;
    background: #eef2ff;
  }
  .edit-toggle.active {
    color: #4f46e5;
    border-color: #a5b4fc;
    background: #eef2ff;
  }
</style>
