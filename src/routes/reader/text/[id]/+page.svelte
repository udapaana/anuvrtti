<script lang="ts">
  /*
    A whole text, read through the graded reader's own page (Reader.svelte in
    text mode; scripts/build-texts.ts builds the text, textAsReadings.ts maps
    each part into readings). It stays at this address: saved offline copies
    are keyed to it (offline.ts), old links name it, and ?part= opens a part.

    Keyed on the id, so moving to another text from the spine loads it afresh
    rather than reusing the page for a different text.
  */
  import { page } from '$app/stores';
  import Reader from '$lib/components/reader/Reader.svelte';
  const id = $derived($page.params.id ?? '');
</script>

{#key id}
  <Reader text={{ id, base: '/reader/text' }} />
{/key}
