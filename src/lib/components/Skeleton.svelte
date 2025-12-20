<script lang="ts">
  interface Props {
    class?: string;
    lines?: number;
  }

  let { class: className = '', lines = 1 }: Props = $props();
</script>

{#if lines === 1}
  <div class="animate-pulse bg-stone-200 rounded {className}"></div>
{:else}
  <div class="space-y-2">
    {#each Array(lines) as _, i}
      <div
        class="animate-pulse bg-stone-200 rounded h-4 {i === lines - 1 ? 'w-3/4' : 'w-full'}"
      ></div>
    {/each}
  </div>
{/if}

<style>
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
</style>
