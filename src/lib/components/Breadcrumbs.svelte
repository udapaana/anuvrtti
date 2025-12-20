<script lang="ts">
  import { adhyayas } from '$lib/adhyaya';
  import Sanskrit from './Sanskrit.svelte';

  interface Crumb {
    label: string;
    href?: string;
    sanskrit?: boolean;
  }

  interface Props {
    crumbs: Crumb[];
  }

  let { crumbs }: Props = $props();
</script>

<nav class="flex items-center gap-2 text-sm text-stone-500 mb-6">
  <a href="/" class="hover:text-indigo-600">Home</a>
  {#each crumbs as crumb, i}
    <span class="text-stone-300">/</span>
    {#if crumb.href}
      <a href={crumb.href} class="hover:text-indigo-600">
        {#if crumb.sanskrit}
          <Sanskrit text={crumb.label} />
        {:else}
          {crumb.label}
        {/if}
      </a>
    {:else}
      <span class="text-stone-700">
        {#if crumb.sanskrit}
          <Sanskrit text={crumb.label} />
        {:else}
          {crumb.label}
        {/if}
      </span>
    {/if}
  {/each}
</nav>
