<script lang="ts">
  interface Props {
    currentAdhyaya?: number;
    currentPada?: number;
    onAdhyayaChange?: (adhyaya: number) => void;
    onPadaChange?: (pada: number) => void;
  }

  let { currentAdhyaya, currentPada, onAdhyayaChange, onPadaChange }: Props = $props();

  const adhyayas = [1, 2, 3, 4, 5, 6, 7, 8];
  const padas = [1, 2, 3, 4];
</script>

<nav class="flex flex-col gap-2">
  <div class="text-sm font-medium text-stone-500 mb-1">Adhyāya</div>
  <div class="flex gap-1">
    {#each adhyayas as num}
      <button
        onclick={() => onAdhyayaChange?.(num)}
        class="w-8 h-8 flex items-center justify-center rounded text-sm
               {currentAdhyaya === num
                 ? 'bg-indigo-600 text-white'
                 : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}"
      >
        {num}
      </button>
    {/each}
  </div>

  {#if currentAdhyaya}
    <div class="text-sm font-medium text-stone-500 mt-3 mb-1">Pāda</div>
    <div class="flex gap-1">
      {#each padas as num}
        <button
          onclick={() => onPadaChange?.(num)}
          class="w-8 h-8 flex items-center justify-center rounded text-sm
                 {currentPada === num
                   ? 'bg-indigo-600 text-white'
                   : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}"
        >
          {num}
        </button>
      {/each}
    </div>
  {/if}
</nav>
