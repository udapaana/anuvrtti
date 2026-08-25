<script lang="ts">
  /*
    The tool row every single-purpose reference tool carries on its shelf.
    Five tools that each invented their own frame now share one: this row, a
    category spine where the tool has categories, and one exhibit in the column.
  */
  let { current }: { current: string } = $props();

  const tools = [
    { id: 'systems', label: 'systems', href: '/ref/systems' },
    { id: 'jargon', label: 'jargon', href: '/ref/jargon' },
    { id: 'pratyahara', label: 'pratyāhārāḥ', href: '/ref/pratyahara' },
    { id: 'tables', label: 'tables', href: '/ref/tables' },
    { id: 'prakriya', label: 'prakriyā', href: '/ref/prakriya' },
    { id: 'conjugate', label: 'conjugate', href: '/conjugate' }
  ];
</script>

<nav class="tools">
  <a class="back" href="/ref">‹ सूत्र</a>
  {#each tools as tool (tool.id)}
    <a class:on={tool.id === current} href={tool.href}>{tool.label}</a>
  {/each}
</nav>

<style>
  .tools {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .tools a {
    color: var(--quiet);
    text-decoration: none;
    white-space: nowrap;
  }
  .tools a:hover {
    color: var(--ink);
  }
  .tools a.on {
    background: var(--ink);
    color: var(--paper);
    padding: 2px 7px;
  }
  .back {
    color: var(--muted);
    padding-right: 4px;
  }
</style>
