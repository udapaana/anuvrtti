<svelte:options runes={true} />

<script lang="ts">
  /**
   * Structured editor for path.md frontmatter fields.
   * Shows form inputs for metadata instead of raw TOML editing.
   * Changes are synced back to the parent via onchange callback.
   */

  interface PathFrontmatter {
    id: string;
    order: number;
    title: string;
    titleSanskrit: string;
    label: string;
    track: string;
    category: string;
    description: string;
    difficulty: string;
    estimatedTime: string;
    prerequisites: string[];
  }

  interface Props {
    frontmatter: PathFrontmatter;
    allPathIds: string[]; // for prerequisite autocomplete
    onchange: (updated: PathFrontmatter) => void;
    isNew?: boolean;
  }
  let { frontmatter, allPathIds, onchange, isNew = false }: Props = $props();

  const categories = [
    { id: 'foundation', label: 'Foundation' },
    { id: 'tinganta', label: 'Verbs (tiṅanta)' },
    { id: 'kridanta', label: 'Participles (kṛdanta)' },
    { id: 'subanta', label: 'Nouns (subanta)' },
    { id: 'taddhita', label: 'Derivation (taddhita)' },
    { id: 'sandhi', label: 'Sandhi' },
    { id: 'karaka', label: 'Cases (kāraka)' },
    { id: 'samasa', label: 'Compounds (samāsa)' },
    { id: 'prakarana', label: 'Deep Dive (prakaraṇa)' },
    { id: 'prakriya', label: 'Derivation Walk (prakriyā)' },
  ];

  const tracks = [
    { id: 'grammar', label: 'Grammar (Vyākaraṇa)' },
    { id: 'reading', label: 'Reading (Pāṭhana)' },
  ];

  const difficulties = ['beginner', 'intermediate', 'advanced'];

  // Local state bound to inputs
  let prereqInput = $state('');

  function update(field: keyof PathFrontmatter, value: unknown) {
    onchange({ ...frontmatter, [field]: value });
  }

  function addPrereq() {
    const id = prereqInput.trim();
    if (id && !frontmatter.prerequisites.includes(id)) {
      update('prerequisites', [...frontmatter.prerequisites, id]);
    }
    prereqInput = '';
  }

  function removePrereq(id: string) {
    update('prerequisites', frontmatter.prerequisites.filter(p => p !== id));
  }

  // Filter suggestions for prerequisites
  let prereqSuggestions = $derived(
    prereqInput.length > 0
      ? allPathIds
          .filter(id => id.includes(prereqInput) && !frontmatter.prerequisites.includes(id) && id !== frontmatter.id)
          .slice(0, 5)
      : []
  );
</script>

<div class="meta-editor">
  <div class="meta-section">
    <h4 class="meta-heading">Path Metadata</h4>

    <div class="field-row">
      <label class="field-label" for="meta-id">ID</label>
      <input
        id="meta-id"
        type="text"
        class="field-input"
        value={frontmatter.id}
        oninput={(e) => update('id', e.currentTarget.value)}
        disabled={!isNew}
        placeholder="e.g. tinganta-lat"
      />
    </div>

    <div class="field-row">
      <label class="field-label" for="meta-title">Title</label>
      <input
        id="meta-title"
        type="text"
        class="field-input"
        value={frontmatter.title}
        oninput={(e) => update('title', e.currentTarget.value)}
        placeholder="e.g. लट् — Present"
      />
    </div>

    <div class="field-row">
      <label class="field-label" for="meta-title-san">Title (Sanskrit)</label>
      <input
        id="meta-title-san"
        type="text"
        class="field-input"
        value={frontmatter.titleSanskrit}
        oninput={(e) => update('titleSanskrit', e.currentTarget.value)}
        placeholder="e.g. लट्लकारः"
      />
    </div>

    <div class="field-row">
      <label class="field-label" for="meta-label">Label</label>
      <input
        id="meta-label"
        type="text"
        class="field-input field-input-sm"
        value={frontmatter.label}
        oninput={(e) => update('label', e.currentTarget.value)}
        placeholder="e.g. लट्"
      />
      <span class="field-hint">Short label for tree display</span>
    </div>

    <div class="field-grid">
      <div class="field-row">
        <label class="field-label" for="meta-track">Track</label>
        <select
          id="meta-track"
          class="field-select"
          value={frontmatter.track}
          onchange={(e) => update('track', e.currentTarget.value)}
        >
          {#each tracks as t}
            <option value={t.id}>{t.label}</option>
          {/each}
        </select>
      </div>

      <div class="field-row">
        <label class="field-label" for="meta-category">Category</label>
        <select
          id="meta-category"
          class="field-select"
          value={frontmatter.category}
          onchange={(e) => update('category', e.currentTarget.value)}
        >
          {#each categories as c}
            <option value={c.id}>{c.label}</option>
          {/each}
        </select>
      </div>
    </div>

    <div class="field-grid">
      <div class="field-row">
        <label class="field-label" for="meta-difficulty">Difficulty</label>
        <select
          id="meta-difficulty"
          class="field-select"
          value={frontmatter.difficulty}
          onchange={(e) => update('difficulty', e.currentTarget.value)}
        >
          {#each difficulties as d}
            <option value={d}>{d}</option>
          {/each}
        </select>
      </div>

      <div class="field-row">
        <label class="field-label" for="meta-order">Order</label>
        <input
          id="meta-order"
          type="number"
          class="field-input field-input-sm"
          value={frontmatter.order}
          oninput={(e) => update('order', parseInt(e.currentTarget.value) || 0)}
          min="0"
        />
      </div>
    </div>

    <div class="field-row">
      <label class="field-label" for="meta-time">Estimated Time</label>
      <input
        id="meta-time"
        type="text"
        class="field-input field-input-sm"
        value={frontmatter.estimatedTime}
        oninput={(e) => update('estimatedTime', e.currentTarget.value)}
        placeholder="e.g. 2-3 hours"
      />
    </div>

    <div class="field-row">
      <label class="field-label" for="meta-desc">Description</label>
      <textarea
        id="meta-desc"
        class="field-textarea"
        value={frontmatter.description}
        oninput={(e) => update('description', e.currentTarget.value)}
        rows="2"
        placeholder="Brief description (supports @deva[] markup)"
      ></textarea>
    </div>
  </div>

  <div class="meta-section">
    <h4 class="meta-heading">Prerequisites</h4>
    <div class="prereq-list">
      {#each frontmatter.prerequisites as pid}
        <span class="prereq-chip">
          {pid}
          <button class="prereq-remove" onclick={() => removePrereq(pid)}>×</button>
        </span>
      {/each}
      {#if frontmatter.prerequisites.length === 0}
        <span class="prereq-empty">None — this is an entry-level path</span>
      {/if}
    </div>
    <div class="prereq-add">
      <input
        type="text"
        class="field-input"
        bind:value={prereqInput}
        placeholder="Type path ID to add..."
        onkeydown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addPrereq(); } }}
      />
      {#if prereqSuggestions.length > 0}
        <div class="prereq-suggestions">
          {#each prereqSuggestions as s}
            <button class="prereq-suggestion" onclick={() => { prereqInput = s; addPrereq(); }}>
              {s}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .meta-editor {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.75rem;
    font-size: 0.8125rem;
    overflow-y: auto;
  }

  .meta-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .meta-heading {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #78716c;
    margin: 0;
  }

  .field-row {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .field-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .field-label {
    font-size: 0.6875rem;
    font-weight: 500;
    color: #57534e;
  }

  .field-input, .field-select, .field-textarea {
    font-size: 0.8125rem;
    border: 1px solid #d6d3d1;
    border-radius: 0.25rem;
    padding: 0.3125rem 0.5rem;
    background: white;
    color: #1c1917;
    outline: none;
    width: 100%;
  }

  .field-input:focus, .field-select:focus, .field-textarea:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px #eef2ff;
  }

  .field-input:disabled {
    background: #f5f5f4;
    color: #78716c;
  }

  .field-input-sm {
    max-width: 10rem;
  }

  .field-textarea {
    resize: vertical;
    min-height: 2.5rem;
    font-family: inherit;
  }

  .field-hint {
    font-size: 0.625rem;
    color: #a8a29e;
  }

  /* Prerequisites */
  .prereq-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .prereq-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.75rem;
    background: #eef2ff;
    color: #4f46e5;
    border-radius: 9999px;
    padding: 0.125rem 0.5rem;
  }

  .prereq-remove {
    background: none;
    border: none;
    color: #818cf8;
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1;
    padding: 0;
  }
  .prereq-remove:hover {
    color: #dc2626;
  }

  .prereq-empty {
    font-size: 0.75rem;
    color: #a8a29e;
    font-style: italic;
  }

  .prereq-add {
    position: relative;
  }

  .prereq-suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #d6d3d1;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    z-index: 10;
    max-height: 8rem;
    overflow-y: auto;
  }

  .prereq-suggestion {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.375rem 0.5rem;
    font-size: 0.75rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #1c1917;
  }
  .prereq-suggestion:hover {
    background: #eef2ff;
    color: #4f46e5;
  }
</style>
