<script lang="ts">
  import type { Snippet } from 'svelte';

  /*
    The depth region. One label style, one sunken fill, square. Used by the
    reader's word panel, the sūtra page's neighbours, dukṛṇkaraṇe's
    cross-references and, in authoring mode, the editor itself — so editing
    happens beside the content rather than on top of it.

    Rail renders inside Shell's <aside>, which already owns the panel treatment
    and the sticky offset; this component only owns the title and the internal
    rhythm.
  */
  let {
    title = null,
    children
  }: { title?: string | null; children: Snippet } = $props();
</script>

{#if title}
  <span class="label">{title}</span>
{/if}
<div class="body">
  {@render children()}
</div>

<style>
  .body {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
  }
</style>
