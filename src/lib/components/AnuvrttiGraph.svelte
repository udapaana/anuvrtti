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

    cy = cytoscape({
      container,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#fff',
            'border-width': 1.5,
            'border-color': '#d1d5db',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '11px',
            'font-family': 'system-ui, sans-serif',
            'color': '#374151',
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
            'background-color': '#f0f9ff',
            'border-color': '#0284c7',
            'border-width': 2,
            'color': '#0c4a6e',
            'font-weight': 500,
            'width': 130,
            'height': 52,
          }
        },
        {
          selector: 'node[type="parent"]',
          style: {
            'border-color': '#9ca3af',
            'color': '#4b5563',
          }
        },
        {
          selector: 'node[type="child"]',
          style: {
            'border-color': '#9ca3af',
            'color': '#4b5563',
          }
        },
        {
          selector: 'node:active, node:selected',
          style: {
            'border-color': '#0284c7',
            'background-color': '#f0f9ff',
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 1.5,
            'line-color': '#cbd5e1',
            'target-arrow-color': '#94a3b8',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 0.8,
            'label': 'data(label)',
            'font-size': '10px',
            'color': '#6366f1',
            'font-weight': 500,
            'text-background-color': '#fafaf9',
            'text-background-opacity': 1,
            'text-background-padding': '2px',
            'text-rotation': 0,
            'text-margin-y': -10,
          }
        },
        {
          selector: 'edge:active, edge:selected',
          style: {
            'line-color': '#6366f1',
            'target-arrow-color': '#6366f1',
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
    background: #fafaf9;
    border-radius: 0.375rem;
    border: 1px solid #e5e7eb;
  }

  .graph-loading,
  .graph-empty {
    padding: 2rem;
    text-align: center;
    color: #6b7280;
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
