<script lang="ts">
  import { commentaryDepth } from '$lib/stores/preferences';
  import type { CommentaryDepth } from '$lib/data/types';

  const labels: Record<CommentaryDepth, string> = {
    simple: 'Simple',
    standard: 'Standard',
    advanced: 'Advanced'
  };

  const descriptions: Record<CommentaryDepth, string> = {
    simple: 'One sentence, no jargon',
    standard: 'Full explanation with definitions',
    advanced: 'Technical details and cross-references'
  };
</script>

<div class="flex items-center gap-2">
  <span class="text-sm text-gray-500">Depth:</span>
  <div class="flex rounded-md shadow-sm">
    {#each (['simple', 'standard', 'advanced'] as const) as level}
      <button
        type="button"
        onclick={() => commentaryDepth.set(level)}
        class="px-3 py-1 text-sm font-medium border
               {level === 'simple' ? 'rounded-l-md' : ''}
               {level === 'advanced' ? 'rounded-r-md' : ''}
               {$commentaryDepth === level
                 ? 'bg-indigo-600 text-white border-indigo-600 z-10'
                 : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}
               {level !== 'simple' ? '-ml-px' : ''}"
        title={descriptions[level]}
      >
        {labels[level]}
      </button>
    {/each}
  </div>
</div>
