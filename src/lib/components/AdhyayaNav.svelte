<script lang="ts">
  interface Props {
    currentAdhyaya?: number;
    currentPada?: number;
  }

  let { currentAdhyaya, currentPada }: Props = $props();

  const adhyayas = [1, 2, 3, 4, 5, 6, 7, 8];
  const padas = [1, 2, 3, 4];
</script>

<nav class="flex flex-col gap-2">
  <div class="text-sm font-medium text-stone-500 mb-1">Adhyāya</div>
  <div class="flex gap-1">
    {#each adhyayas as a}
      <a
        href="/adhyaya/{a}"
        class="w-8 h-8 flex items-center justify-center rounded text-sm
               {currentAdhyaya === a
                 ? 'bg-indigo-600 text-white'
                 : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}"
      >
        {a}
      </a>
    {/each}
  </div>

  {#if currentAdhyaya}
    <div class="text-sm font-medium text-stone-500 mt-3 mb-1">Pāda</div>
    <div class="flex gap-1">
      {#each padas as p}
        <a
          href="/adhyaya/{currentAdhyaya}/{p}"
          class="w-8 h-8 flex items-center justify-center rounded text-sm
                 {currentPada === p
                   ? 'bg-indigo-600 text-white'
                   : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}"
        >
          {p}
        </a>
      {/each}
    </div>
  {/if}
</nav>
