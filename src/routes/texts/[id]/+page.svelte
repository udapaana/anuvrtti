<script lang="ts">
  /*
    A whole text, read through the graded reader's own page (Reader.svelte in
    text mode): the same lines, tokens, shelf and rail, with the text's parts,
    dictionary and save controls drawn into them. Keyed on the id, so moving
    to another text from the spine loads it afresh.
  */
  import { page } from '$app/stores';
  import Reader from '$lib/components/reader/Reader.svelte';
  const id = $derived($page.params.id ?? '');
</script>

{#key id}
  <Reader text={{ id, base: '/texts' }} />
{/key}
