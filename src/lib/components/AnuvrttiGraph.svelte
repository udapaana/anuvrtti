<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import cytoscape from 'cytoscape';
  import dagre from 'cytoscape-dagre';
  import type { Sutra } from '$lib/data/types';
  import { getDependencies, getDependents } from '$lib/data';
  import { goto } from '$app/navigation';

  cytoscape.use(dagre);

  interface Props {
    sutra: Sutra;
  }

  let { sutra }: Props = $props();

  let container: HTMLDivElement;
  let cy: cytoscape.Core | null = null;
  let loading = $state(true);
  let isEmpty = $state(false);

  onMount(async () => {
    await buildGraph();
  });

  onDestroy(() => {
    if (cy) {
      cy.destroy();
      cy = null;
    }
  });

  $effect(() => {
    if (sutra && container) {
      buildGraph();
    }
  });

  // Truncate text for display
  function truncate(text: string, max: number): string {
    return text.length > max ? text.slice(0, max) + '…' : text;
  }

  async function buildGraph() {
    loading = true;

    if (cy) {
      cy.destroy();
      cy = null;
    }

    const deps = await getDependencies(sutra.id);
    const dependents = await getDependents(sutra.id);
    const limitedDependents = dependents.slice(0, 12);

    if (deps.length === 0 && dependents.length === 0) {
      isEmpty = true;
      loading = false;
      return;
    }

    isEmpty = false;

    const elements: cytoscape.ElementDefinition[] = [];

    // Current sutra - show full text
    elements.push({
      data: {
        id: sutra.id,
        label: `${sutra.id}\n${truncate(sutra.text, 20)}`,
        type: 'current'
      }
    });

    // Parent nodes
    for (const dep of deps) {
      elements.push({
        data: {
          id: dep.id,
          label: `${dep.id}\n${truncate(dep.text, 16)}`,
          type: 'parent'
        }
      });

      const terms = sutra.anuvrtti
        .filter(ref => ref.fromId === dep.id)
        .map(ref => ref.term);

      elements.push({
        data: {
          id: `${dep.id}->${sutra.id}`,
          source: dep.id,
          target: sutra.id,
          label: terms.join(', ')
        }
      });
    }

    // Child nodes
    for (const dep of limitedDependents) {
      if (elements.some(e => e.data.id === dep.id)) continue;

      elements.push({
        data: {
          id: dep.id,
          label: `${dep.id}\n${truncate(dep.text, 16)}`,
          type: 'child'
        }
      });

      const terms = dep.anuvrtti
        .filter(ref => ref.fromId === sutra.id)
        .map(ref => ref.term);

      elements.push({
        data: {
          id: `${sutra.id}->${dep.id}`,
          source: sutra.id,
          target: dep.id,
          label: terms.join(', ')
        }
      });
    }


  /*
    Cytoscape draws to a canvas, which can resolve neither a CSS custom property
    nor an oklch() colour. So the token is resolved through the engine first —
    set as a colour on a probe element and read back as rgb — and cytoscape gets
    a literal. One source of truth, still.
  */
  function token(name: string, fallback: string): string {
    if (typeof document === 'undefined') return fallback;
    const probe = document.createElement('span');
    probe.style.color = `var(${name}, ${fallback})`;
    probe.style.display = 'none';
    document.body.appendChild(probe);
    const resolved = getComputedStyle(probe).color;
    probe.remove();
    return resolved || fallback;
  }

    cy = cytoscape({
      container,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#fff',
            'border-width': 1.5,
            'border-color': 'var(--rule-2)',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '11px',
            'font-family': 'system-ui, sans-serif',
            'color': token('--ink-2', '#5c5345'),
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': 110,
            'height': 44,
            'shape': 'roundrectangle',
            'text-justification': 'center',
          }
        },
        {
          selector: 'node[type="current"]',
          style: {
            'background-color': token('--sunken', '#faf7f0'),
            'border-color': token('--accent-ref', 'oklch(0.70 0.13 245)'),
            'border-width': 2,
            'color': 'var(--accent-ref)',
            'font-weight': 500,
            'width': 130,
            'height': 52,
          }
        },
        {
          selector: 'node[type="parent"]',
          style: {
            'border-color': token('--quiet', '#94a3b8'),
            'color': 'var(--ink-2)',
          }
        },
        {
          selector: 'node[type="child"]',
          style: {
            'border-color': token('--quiet', '#94a3b8'),
            'color': 'var(--ink-2)',
          }
        },
        {
          selector: 'node:active, node:selected',
          style: {
            'border-color': token('--accent-ref', 'oklch(0.70 0.13 245)'),
            'background-color': token('--sunken', '#faf7f0'),
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 1.5,
            'line-color': token('--faint', '#bcb29d'),
            'target-arrow-color': token('--quiet', '#94a3b8'),
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 0.8,
            'label': 'data(label)',
            'font-size': '10px',
            'color': token('--accent-ref', 'oklch(0.70 0.13 245)'),
            'font-weight': 500,
            'text-background-color': token('--sunken', '#faf7f0'),
            'text-background-opacity': 1,
            'text-background-padding': '2px',
            'text-rotation': 0,
            'text-margin-y': -10,
          }
        },
        {
          selector: 'edge:active, edge:selected',
          style: {
            'line-color': token('--accent-ref', 'oklch(0.70 0.13 245)'),
            'target-arrow-color': token('--accent-ref', 'oklch(0.70 0.13 245)'),
            'width': 2,
          }
        }
      ],
      layout: {
        name: 'dagre',
        rankDir: 'TB',
        nodeSep: 30,
        rankSep: 50,
        padding: 20,
        animate: false,
      } as any,
      minZoom: 0.5,
      maxZoom: 2,
      wheelSensitivity: 0.3,
      boxSelectionEnabled: false,
    });

    // Fit to content
    cy.fit(undefined, 20);

    cy.on('tap', 'node', (evt) => {
      const nodeId = evt.target.id();
      if (nodeId !== sutra.id) {
        goto(`/ref/${nodeId}`);
      }
    });

    cy.on('mouseover', 'node', () => {
      container.style.cursor = 'pointer';
    });
    cy.on('mouseout', 'node', () => {
      container.style.cursor = 'default';
    });

    loading = false;
  }
</script>

<div class="anuvrtti-graph">
  {#if loading}
    <div class="graph-loading">
      <span>Loading graph...</span>
    </div>
  {/if}

  {#if isEmpty && !loading}
    <div class="graph-empty">
      No anuvrtti connections
    </div>
  {/if}

  <div
    class="graph-container"
    class:hidden={loading || isEmpty}
    bind:this={container}
  ></div>
</div>

<style>
  .anuvrtti-graph {
    background: var(--sunken);
    border-radius: 0.375rem;
    border: 1px solid var(--rule-2);
  }

  .graph-loading,
  .graph-empty {
    padding: 2rem;
    text-align: center;
    color: var(--muted);
    font-size: 0.8125rem;
  }

  .graph-container {
    width: 100%;
    height: 280px;
  }

  .graph-container.hidden {
    display: none;
  }
</style>
