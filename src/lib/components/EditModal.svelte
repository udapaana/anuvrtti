<svelte:options runes={true} />

<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { displayScript } from '$lib/stores/preferences';
  import { fileEdits } from '$lib/stores/fileEdits';
  import { editModal } from '$lib/stores/editModal';
  import type { EditMode } from '$lib/stores/editModal';
  import { validateMarkup } from '$lib/markup/validate';
  import PathMetaEditor from '$lib/components/PathMetaEditor.svelte';
  import type { PathMeta } from '$lib/content/index';

  interface Props {
    user: { login: string; avatar_url: string } | null;
  }
  let { user }: Props = $props();

  // ── Types ──────────────────────────────────────────────────────────────

  type FileType = 'commentary' | 'path' | 'jargon' | 'vocabulary' | 'passage';

  interface FileNode {
    path: string;
    label: string;
    type: FileType;
  }

  interface TreeNode {
    label: string;
    path?: string;
    fileType?: FileType;
    children?: TreeNode[];
    expanded?: boolean;
  }

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

  // ── Core state ─────────────────────────────────────────────────────────

  let editorEl = $state<HTMLElement | null>(null);
  let toastEditor: any = $state(null);

  let selectedFile = $state<FileNode | null>(null);
  let originalContent = $state('');
  let currentContent = $state('');
  let validationErrors = $state<string[]>([]);
  let isLoading = $state(false);

  let submitState: 'idle' | 'loading' | 'done' | 'error' = $state('idle');
  let prUrl = $state('');
  let submitError = $state('');
  let note = $state('');
  let showNoteInput = $state(false);
  let showCloseConfirm = $state(false);

  let editCount = $derived(Object.keys($fileEdits).length);
  let isDirty = $derived(currentContent !== originalContent);

  // ── Mode state ─────────────────────────────────────────────────────────

  let activeMode = $state<EditMode>('paths');

  // ── Paths mode state ───────────────────────────────────────────────────

  let allPaths = $state<PathMeta[]>([]);
  let allPathIds = $state<string[]>([]);
  let pathTrackFilter = $state<'grammar' | 'reading'>('grammar');
  let selectedPathId = $state<string | null>(null);
  let pathFrontmatter = $state<PathFrontmatter | null>(null);
  let showNewPathForm = $state(false);
  let newPathStep = $state<'meta' | 'content' | null>(null);

  let filteredPaths = $derived(
    allPaths
      .filter(p => p.track === pathTrackFilter)
      .sort((a, b) => a.order - b.order)
  );

  let selectedPathMeta = $derived(
    selectedPathId ? allPaths.find(p => p.id === selectedPathId) : null
  );

  // ── Commentary mode state ──────────────────────────────────────────────

  let commentaryTree = $state<TreeNode[]>([]);

  // ── Reference mode state ───────────────────────────────────────────────

  let referenceFiles = $state<TreeNode[]>([]);

  // ── Category/difficulty display helpers ─────────────────────────────────

  const categoryLabels: Record<string, string> = {
    foundation: 'Foundation',
    tinganta: 'Verbs',
    subanta: 'Nouns',
    kridanta: 'Participles',
    taddhita: 'Secondary',
    sandhi: 'Sandhi',
    karaka: 'Karaka',
    samasa: 'Compounds',
    prakarana: 'Deep Dives',
    prakriya: 'Derivations',
  };

  const categoryColors: Record<string, string> = {
    foundation: '#78716c',
    tinganta: '#3b82f6',
    subanta: '#10b981',
    kridanta: '#f43f5e',
    taddhita: '#f59e0b',
    sandhi: '#8b5cf6',
    karaka: '#06b6d4',
    samasa: '#f97316',
    prakarana: '#14b8a6',
    prakriya: '#d946ef',
  };

  const difficultyColors: Record<string, string> = {
    beginner: '#22c55e',
    intermediate: '#f59e0b',
    advanced: '#ef4444',
  };

  // ── Data loading ───────────────────────────────────────────────────────

  async function loadData() {
    await Promise.all([loadPaths(), loadCommentaryTree(), loadReferenceFiles()]);

    // Apply initial mode/path from store
    const state = $editModal;
    if (state.initialMode) {
      activeMode = state.initialMode;
    }
    if (state.initialPath) {
      selectFileByPath(state.initialPath);
    }
  }

  async function loadPaths() {
    try {
      const res = await fetch('/content/paths-index.json');
      allPaths = await res.json();
      allPathIds = allPaths.map(p => p.id);
    } catch { /* skip */ }
  }

  async function loadCommentaryTree() {
    try {
      const res = await fetch('/data/commentary-index.json');
      const entries: { adhyaya: number; pada: number; sutra: number; id: string; path: string }[] = await res.json();

      const byAdhyaya: Record<number, typeof entries> = {};
      for (const e of entries) {
        if (!byAdhyaya[e.adhyaya]) byAdhyaya[e.adhyaya] = [];
        byAdhyaya[e.adhyaya].push(e);
      }

      const nodes: TreeNode[] = [];
      for (const [a, sutras] of Object.entries(byAdhyaya)) {
        const adhNum = parseInt(a);
        const byPada: Record<number, typeof entries> = {};
        for (const s of sutras) {
          if (!byPada[s.pada]) byPada[s.pada] = [];
          byPada[s.pada].push(s);
        }

        const padaNodes: TreeNode[] = [];
        for (const [p, ps] of Object.entries(byPada)) {
          padaNodes.push({
            label: `${adhNum}.${p}`,
            expanded: false,
            children: ps.map(s => ({
              label: s.id,
              path: `static/${s.path}`,
              fileType: 'commentary' as FileType,
            })),
          });
        }
        nodes.push({
          label: `Adhyaya ${adhNum}`,
          expanded: false,
          children: padaNodes,
        });
      }
      commentaryTree = nodes;
    } catch { /* skip */ }
  }

  async function loadReferenceFiles() {
    referenceFiles = [
      { label: 'Jargon', path: 'static/data/jargon.toml', fileType: 'jargon' },
      { label: 'Vocabulary', path: 'static/data/vocabulary.toml', fileType: 'vocabulary' },
    ];
  }

  // ── File selection ─────────────────────────────────────────────────────

  function selectFileByPath(path: string) {
    const label = path.split('/').pop()?.replace('.toml', '').replace('.md', '') ?? path;
    const type = guessFileType(path);

    // Set mode based on path
    if (path.includes('/paths/')) {
      activeMode = 'paths';
      // Find and select the path
      const pathId = path.split('/').slice(-2, -1)[0];
      selectedPathId = pathId ?? null;
      if (pathId) {
        const meta = allPaths.find(p => p.folder === pathId || p.id === pathId);
        if (meta) {
          pathTrackFilter = meta.track as 'grammar' | 'reading';
          selectedPathId = meta.id;
        }
      }
    } else if (path.includes('/commentary/')) {
      activeMode = 'commentary';
    } else {
      activeMode = 'reference';
    }

    selectFile({ path, label, type });
  }

  function guessFileType(path: string): FileType {
    if (path.includes('/commentary/')) return 'commentary';
    if (path.includes('/paths/')) return 'path';
    if (path.includes('jargon')) return 'jargon';
    if (path.includes('vocabulary')) return 'vocabulary';
    if (path.includes('/passages/')) return 'passage';
    return 'commentary';
  }

  async function selectFile(file: FileNode) {
    if (isDirty && selectedFile) {
      saveCurrentEdit();
    }

    // Reset new-path mode when selecting a different existing file
    if (!file.label.startsWith('New:')) {
      showNewPathForm = false;
      newPathStep = null;
    }

    selectedFile = file;
    isLoading = true;
    validationErrors = [];

    try {
      const staged = $fileEdits[file.path];
      if (staged) {
        originalContent = staged.original;
        currentContent = staged.content;
      } else if (showNewPathForm) {
        const id = file.path.split('/').slice(-2, -1)[0] || 'new-path';
        const text = newPathTemplate(id);
        originalContent = '';
        currentContent = text;
      } else {
        const urlPath = file.path.replace(/^static\//, '/');
        const res = await fetch(urlPath);
        const text = res.ok ? await res.text() : '';
        originalContent = text;
        currentContent = text;
      }

      // Parse frontmatter for path files
      if (file.type === 'path') {
        const parsed = parseFrontmatter(currentContent);
        pathFrontmatter = parsed?.frontmatter ?? null;
      } else {
        pathFrontmatter = null;
      }

      await tick();
      if (toastEditor) {
        if (file.type === 'path' && pathFrontmatter) {
          const parsed = parseFrontmatter(currentContent);
          toastEditor.setMarkdown(parsed?.body ?? currentContent);
        } else {
          toastEditor.setMarkdown(currentContent);
        }
      }
    } finally {
      isLoading = false;
    }
  }

  // ── Path actions ───────────────────────────────────────────────────────

  function selectPath(pathMeta: PathMeta) {
    selectedPathId = pathMeta.id;
    const filePath = `static/content/paths/${pathMeta.trackFolder}/${pathMeta.folder}/path.md`;
    selectFile({ path: filePath, label: pathMeta.title, type: 'path' });
  }

  function deselectPath() {
    selectedPathId = null;
    selectedFile = null;
    showNewPathForm = false;
    newPathStep = null;
    pathFrontmatter = null;
    if (toastEditor) toastEditor.setMarkdown('');
  }

  function startNewPath() {
    showNewPathForm = true;
    newPathStep = 'meta';
    selectedPathId = null;

    const id = `new-path-${Date.now().toString(36)}`;
    const trackFolder = pathTrackFilter === 'reading' ? 'pathana' : 'vyakarana';
    const filePath = `static/content/paths/${trackFolder}/${id}/path.md`;

    pathFrontmatter = {
      id,
      order: 999,
      title: '',
      titleSanskrit: '',
      label: '',
      track: pathTrackFilter,
      category: 'foundation',
      description: '',
      difficulty: 'beginner',
      estimatedTime: '1-2 hours',
      prerequisites: [],
    };

    selectedFile = { path: filePath, label: `New: ${id}`, type: 'path' };
    originalContent = '';
    currentContent = '';
  }

  function confirmNewPathMeta() {
    if (!pathFrontmatter || !pathFrontmatter.id || !pathFrontmatter.title) return;
    newPathStep = 'content';

    const content = newPathTemplate(pathFrontmatter.id);
    currentContent = content;
    originalContent = '';

    if (toastEditor) {
      const parsed = parseFrontmatter(content);
      toastEditor.setMarkdown(parsed?.body ?? '');
    }
  }

  // ── Path reordering ────────────────────────────────────────────────────

  async function movePath(pathMeta: PathMeta, direction: -1 | 1) {
    const list = filteredPaths;
    const idx = list.findIndex(p => p.id === pathMeta.id);
    if (idx < 0) return;

    const swapIdx = idx + direction;
    if (swapIdx < 0 || swapIdx >= list.length) return;

    const other = list[swapIdx];

    // Swap order values
    const myOrder = pathMeta.order;
    const otherOrder = other.order;

    // If they have the same order, offset them
    const newMyOrder = otherOrder === myOrder
      ? (direction === -1 ? myOrder - 1 : myOrder + 1)
      : otherOrder;
    const newOtherOrder = otherOrder === myOrder
      ? myOrder
      : myOrder;

    // Stage edits for both paths
    await stageReorderEdit(pathMeta, newMyOrder);
    await stageReorderEdit(other, newOtherOrder);

    // Update local state
    allPaths = allPaths.map(p => {
      if (p.id === pathMeta.id) return { ...p, order: newMyOrder };
      if (p.id === other.id) return { ...p, order: newOtherOrder };
      return p;
    });
  }

  async function stageReorderEdit(pathMeta: PathMeta, newOrder: number) {
    const filePath = `static/content/paths/${pathMeta.trackFolder}/${pathMeta.folder}/path.md`;
    const urlPath = filePath.replace(/^static\//, '/');

    // Check if we already have a staged edit for this file
    const existing = $fileEdits[filePath];
    let content: string;
    let original: string;

    if (existing) {
      content = existing.content;
      original = existing.original;
    } else {
      try {
        const res = await fetch(urlPath);
        content = res.ok ? await res.text() : '';
        original = content;
      } catch {
        return;
      }
    }

    // Update the order in frontmatter
    const parsed = parseFrontmatter(content);
    if (!parsed) return;

    parsed.frontmatter.order = newOrder;
    const updated = rebuildContent(parsed.frontmatter, parsed.body);

    fileEdits.upsert({
      path: filePath,
      label: `Reorder: ${pathMeta.title}`,
      original,
      content: updated,
    });
  }

  // ── Frontmatter helpers ────────────────────────────────────────────────

  function parseFrontmatter(content: string): { frontmatter: PathFrontmatter; body: string } | null {
    const match = content.match(/^\+\+\+\n([\s\S]*?)\n\+\+\+\n([\s\S]*)$/);
    if (!match) return null;
    try {
      const tomlStr = match[1];
      const fm: Record<string, any> = {};
      for (const line of tomlStr.split('\n')) {
        const kv = line.match(/^(\w+)\s*=\s*(.+)$/);
        if (kv) {
          const [, key, rawVal] = kv;
          let val: any = rawVal.trim();
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
          else if (val.startsWith('[')) {
            try { val = JSON.parse(val.replace(/'/g, '"')); } catch { val = []; }
          }
          else if (!isNaN(Number(val))) val = Number(val);
          fm[key] = val;
        }
      }
      if (!fm.prerequisites) fm.prerequisites = [];
      return { frontmatter: fm as PathFrontmatter, body: match[2] };
    } catch {
      return null;
    }
  }

  function serializeFrontmatter(fm: Record<string, any>): string {
    const lines: string[] = [];
    const order = ['id', 'order', 'title', 'titleSanskrit', 'label', 'track', 'category', 'description', 'difficulty', 'estimatedTime', 'prerequisites'];
    for (const key of order) {
      if (!(key in fm)) continue;
      const val = fm[key];
      if (Array.isArray(val)) {
        lines.push(`${key} = [${val.map((v: string) => `"${v}"`).join(', ')}]`);
      } else if (typeof val === 'number') {
        lines.push(`${key} = ${val}`);
      } else {
        lines.push(`${key} = "${val}"`);
      }
    }
    return lines.join('\n');
  }

  function rebuildContent(fm: PathFrontmatter, body: string): string {
    return `+++\n${serializeFrontmatter(fm)}\n+++\n${body}`;
  }

  function handleMetaChange(updated: PathFrontmatter) {
    pathFrontmatter = updated;
    const parsed = parseFrontmatter(currentContent);
    const body = parsed?.body ?? currentContent;
    currentContent = rebuildContent(updated, body);

    if (showNewPathForm && selectedFile) {
      const trackFolder = updated.track === 'reading' ? 'pathana' : 'vyakarana';
      const id = updated.id || 'new-path';
      selectedFile = {
        ...selectedFile,
        path: `static/content/paths/${trackFolder}/${id}/path.md`,
        label: `New: ${updated.title || id}`,
      };
    }
  }

  function newPathTemplate(id: string): string {
    const fm = pathFrontmatter ?? {
      id,
      order: 999,
      title: '',
      titleSanskrit: '',
      label: '',
      track: pathTrackFilter,
      category: 'foundation',
      description: '',
      difficulty: 'beginner',
      estimatedTime: '1-2 hours',
      prerequisites: [],
    };
    return rebuildContent(fm, '\n## concept - Introduction\n\nStart writing your path content here.\n');
  }

  // ── Editor change handler ──────────────────────────────────────────────

  function onEditorChange() {
    if (!toastEditor) return;
    const editorContent = toastEditor.getMarkdown();

    if (selectedFile?.type === 'path' && pathFrontmatter) {
      currentContent = rebuildContent(pathFrontmatter, editorContent);
    } else {
      currentContent = editorContent;
    }

    if (selectedFile?.path.endsWith('.toml')) {
      try {
        import('smol-toml').then(({ parse }) => {
          parse(currentContent);
          validationErrors = [];
        }).catch(e => {
          validationErrors = [`TOML error: ${e.message}`];
        });
      } catch { /* ignore */ }
    } else {
      const result = validateMarkup(currentContent);
      validationErrors = result.valid ? [] : result.errors;
    }
  }

  // ── Save / submit ──────────────────────────────────────────────────────

  function saveCurrentEdit() {
    if (!selectedFile || !isDirty) return;
    fileEdits.upsert({
      path: selectedFile.path,
      label: selectedFile.label,
      original: originalContent,
      content: currentContent,
    });
  }

  async function submitAll() {
    saveCurrentEdit();
    const snapshot = fileEdits.snapshot();
    if (Object.keys(snapshot).length === 0) return;

    submitState = 'loading';
    try {
      const files = Object.values(snapshot).map(e => ({
        path: e.path,
        content: e.content,
        label: e.label,
      }));
      const res = await fetch('/api/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files, note }),
      });
      if (!res.ok) throw new Error(await res.text());
      const { prUrl: url } = await res.json();
      prUrl = url;
      fileEdits.clear();
      submitState = 'done';
    } catch (e) {
      submitError = e instanceof Error ? e.message : 'Unknown error';
      submitState = 'error';
    }
  }

  // ── Close ──────────────────────────────────────────────────────────────

  function handleClose() {
    if (isDirty || editCount > 0) {
      showCloseConfirm = true;
      return;
    }
    editModal.close();
  }

  function closeWithSave() {
    saveCurrentEdit();
    showCloseConfirm = false;
    editModal.close();
  }

  function closeWithDiscard() {
    fileEdits.clear();
    showCloseConfirm = false;
    editModal.close();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') handleClose();
  }

  // ── Friendly labels ────────────────────────────────────────────────────

  function friendlyBreadcrumb(file: FileNode | null): string {
    if (!file) return '';
    if (file.type === 'path') return file.label;
    if (file.type === 'commentary') return `Commentary: ${file.label}`;
    if (file.type === 'jargon') return 'Jargon';
    if (file.type === 'vocabulary') return 'Vocabulary';
    return file.label;
  }

  function friendlyEditLabel(path: string, label: string): string {
    if (path.includes('/paths/')) return label.startsWith('Reorder:') ? label : label;
    if (path.includes('/commentary/')) {
      const parts = path.split('/');
      return `Commentary: ${parts.slice(-3).join('.').replace('.toml', '')}`;
    }
    return label;
  }

  // ── Toast UI init ──────────────────────────────────────────────────────

  onMount(async () => {
    if (!browser) return;

    await loadData();

    const [{ default: Editor }, { createMarkupPlugin }] = await Promise.all([
      import('@toast-ui/editor'),
      import('$lib/editor/markupPlugin'),
    ]);
    await import('@toast-ui/editor/dist/toastui-editor.css');

    const getScript = () => {
      let s = 'devanagari';
      displayScript.subscribe(v => { s = v; })();
      return s;
    };

    const markupButtons = [
      { name: 'deva', tooltip: 'Insert @deva[...]', command: 'insertDeva', text: 'देव', className: 'toolbar-btn-deva' },
      { name: 'ref', tooltip: 'Insert @ref[...]', command: 'insertRef', text: '@ref', className: 'toolbar-btn-ref' },
      { name: 'roman', tooltip: 'Insert @[...]', command: 'insertRoman', text: '@[]', className: 'toolbar-btn-roman' },
    ];

    toastEditor = new Editor({
      el: editorEl!,
      height: '100%',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      initialValue: currentContent,
      hideModeSwitch: true,
      toolbarItems: [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol'],
        markupButtons as any,
      ],
      plugins: [createMarkupPlugin(getScript)],
      events: { change: onEditorChange },
    });

    toastEditor.addCommand('markdown', 'insertDeva', () => { toastEditor.insertText('@deva[]'); return true; });
    toastEditor.addCommand('markdown', 'insertRef', () => { toastEditor.insertText('@ref[]'); return true; });
    toastEditor.addCommand('markdown', 'insertRoman', () => { toastEditor.insertText('@[]'); return true; });
  });

  onDestroy(() => {
    toastEditor?.destroy();
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="modal-backdrop" role="dialog" aria-modal="true" aria-label="Content editor">
  <div class="modal">

    <!-- Header -->
    <header class="modal-header">
      <div class="header-left">
        <span class="modal-title">Edit content</span>
        {#if selectedFile}
          <span class="file-breadcrumb">{friendlyBreadcrumb(selectedFile)}</span>
        {/if}
      </div>
      <div class="header-right">
        {#if submitState === 'done'}
          <a href={prUrl} target="_blank" rel="noopener" class="pr-link">PR opened &rarr;</a>
        {:else if submitState === 'error'}
          <span class="submit-error">{submitError}</span>
          <button class="btn-ghost" onclick={() => (submitState = 'idle')}>Dismiss</button>
        {:else}
          {#if editCount > 0 || isDirty}
            <span class="change-count">
              {editCount + (isDirty && selectedFile ? 1 : 0)} {editCount + (isDirty && selectedFile ? 1 : 0) === 1 ? 'change' : 'changes'}
            </span>
          {/if}
          {#if showNoteInput}
            <input type="text" class="note-input" placeholder="Note for reviewer (optional)" bind:value={note} />
          {:else}
            <button class="btn-ghost" onclick={() => (showNoteInput = true)}>Add note</button>
          {/if}
          <button
            class="btn-submit"
            onclick={submitAll}
            disabled={submitState === 'loading' || (editCount === 0 && !isDirty)}
          >
            {submitState === 'loading' ? 'Submitting...' : 'Submit for review'}
          </button>
        {/if}
        {#if !user}
          <a href="/auth/github?returnTo={$page.url.pathname}" class="btn-signin">Sign in to submit</a>
        {/if}
        <button class="btn-close" onclick={handleClose} aria-label="Close editor">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Close confirmation banner -->
    {#if showCloseConfirm}
      <div class="close-confirm">
        <span>You have unsaved changes.</span>
        <button class="confirm-save" onclick={closeWithSave}>Save & close</button>
        <button class="confirm-discard" onclick={closeWithDiscard}>Discard & close</button>
        <button class="confirm-cancel" onclick={() => { showCloseConfirm = false; }}>Cancel</button>
      </div>
    {/if}

    <div class="modal-body">

      <!-- Left sidebar -->
      <aside class="sidebar">

        <!-- Mode tabs -->
        <div class="mode-tabs">
          <button class="mode-tab" class:active={activeMode === 'paths'} onclick={() => { activeMode = 'paths'; }}>
            Paths
          </button>
          <button class="mode-tab" class:active={activeMode === 'commentary'} onclick={() => { activeMode = 'commentary'; }}>
            Commentary
          </button>
          <button class="mode-tab" class:active={activeMode === 'reference'} onclick={() => { activeMode = 'reference'; }}>
            Reference
          </button>
        </div>

        <div class="sidebar-content">

          <!-- ═══ PATHS MODE ═══ -->
          {#if activeMode === 'paths'}

            {#if selectedPathId || showNewPathForm}
              <!-- Path detail view -->
              <button class="back-btn" onclick={deselectPath}>
                &larr; All paths
              </button>

              {#if pathFrontmatter}
                <div class="sidebar-meta">
                  <PathMetaEditor
                    frontmatter={pathFrontmatter}
                    {allPathIds}
                    onchange={handleMetaChange}
                    isNew={showNewPathForm}
                  />
                  {#if newPathStep === 'meta'}
                    <button
                      class="btn-create"
                      onclick={confirmNewPathMeta}
                      disabled={!pathFrontmatter.id || !pathFrontmatter.title}
                    >
                      Continue to content &rarr;
                    </button>
                  {/if}
                </div>
              {/if}

            {:else}
              <!-- Path list view -->
              <div class="track-tabs">
                <button
                  class="track-tab"
                  class:active={pathTrackFilter === 'grammar'}
                  onclick={() => { pathTrackFilter = 'grammar'; }}
                >
                  Grammar ({allPaths.filter(p => p.track === 'grammar').length})
                </button>
                <button
                  class="track-tab"
                  class:active={pathTrackFilter === 'reading'}
                  onclick={() => { pathTrackFilter = 'reading'; }}
                >
                  Reading ({allPaths.filter(p => p.track === 'reading').length})
                </button>
              </div>

              <div class="path-list">
                {#each filteredPaths as pathMeta, i (pathMeta.id)}
                  <div class="path-card">
                    <div class="path-card-reorder">
                      <button
                        class="reorder-btn"
                        onclick={() => movePath(pathMeta, -1)}
                        disabled={i === 0}
                        aria-label="Move up"
                        title="Move up"
                      >&uarr;</button>
                      <span class="path-order">{pathMeta.order}</span>
                      <button
                        class="reorder-btn"
                        onclick={() => movePath(pathMeta, 1)}
                        disabled={i === filteredPaths.length - 1}
                        aria-label="Move down"
                        title="Move down"
                      >&darr;</button>
                    </div>
                    <button class="path-card-main" onclick={() => selectPath(pathMeta)}>
                      <span class="path-card-title">{pathMeta.title}</span>
                      <div class="path-card-meta">
                        <span class="category-pill" style="color: {categoryColors[pathMeta.category] ?? '#78716c'}">
                          {categoryLabels[pathMeta.category] ?? pathMeta.category}
                        </span>
                        <span class="difficulty-dot" style="background: {difficultyColors[pathMeta.difficulty] ?? '#9ca3af'}" title={pathMeta.difficulty}></span>
                        <span class="step-count">{pathMeta.stepCount} steps</span>
                      </div>
                    </button>
                  </div>
                {/each}
              </div>

              <button class="new-path-btn" onclick={startNewPath}>
                + New path
              </button>
            {/if}

          <!-- ═══ COMMENTARY MODE ═══ -->
          {:else if activeMode === 'commentary'}
            <div class="tree-list">
              {#each commentaryTree as node}
                {@render tree_node({ node, selectedFile, onselect: selectFile })}
              {/each}
            </div>

          <!-- ═══ REFERENCE MODE ═══ -->
          {:else if activeMode === 'reference'}
            <div class="tree-list">
              {#each referenceFiles as node}
                {@render tree_node({ node, selectedFile, onselect: selectFile })}
              {/each}
            </div>
          {/if}

        </div>
      </aside>

      <!-- Editor area -->
      <div class="editor-area">
        {#if isLoading}
          <div class="editor-placeholder">Loading...</div>
        {:else if newPathStep === 'meta'}
          <div class="editor-placeholder">
            <div class="placeholder-content">
              <h3>Create a new learning path</h3>
              <p>Fill in the path details in the sidebar, then continue to write content.</p>
            </div>
          </div>
        {:else if !selectedFile}
          <div class="editor-placeholder">
            <div class="placeholder-content">
              {#if activeMode === 'paths'}
                <h3>Select a path to edit</h3>
                <p>Choose a path from the list, or create a new one.</p>
              {:else if activeMode === 'commentary'}
                <h3>Select a sutra</h3>
                <p>Navigate the tree to find a commentary entry to edit.</p>
              {:else}
                <h3>Select a file</h3>
                <p>Choose a reference file to edit.</p>
              {/if}
            </div>
          </div>
        {/if}

        <!-- Validation errors -->
        {#if validationErrors.length > 0}
          <div class="validation-errors">
            {#each validationErrors as err}
              <div class="validation-error">{err}</div>
            {/each}
          </div>
        {/if}

        <div
          bind:this={editorEl}
          class="toast-editor-wrapper"
          class:hidden={!selectedFile || isLoading || newPathStep === 'meta'}
        ></div>
      </div>

      <!-- Changes sidebar -->
      {#if editCount > 0}
        <aside class="changes-sidebar">
          <div class="changes-label">Your changes</div>
          {#each Object.values($fileEdits) as edit}
            <div class="change-item" class:selected={selectedFile?.path === edit.path}>
              <button
                class="change-item-btn"
                onclick={() => selectFile({ path: edit.path, label: edit.label, type: guessFileType(edit.path) })}
              >
                {friendlyEditLabel(edit.path, edit.label)}
              </button>
              <button
                class="change-remove"
                onclick={() => fileEdits.remove(edit.path)}
                aria-label="Discard"
                title="Discard"
              >&times;</button>
            </div>
          {/each}
        </aside>
      {/if}

    </div>
  </div>
</div>

<!-- Recursive tree node snippet -->
{#snippet tree_node({ node, selectedFile, onselect }: { node: TreeNode; selectedFile: FileNode | null; onselect: (f: FileNode) => void })}
  {#if node.path}
    <button
      class="tree-leaf"
      class:selected={selectedFile?.path === node.path}
      onclick={() => onselect({ path: node.path!, label: node.label, type: node.fileType! })}
    >
      {node.label}
    </button>
  {:else if node.children}
    <details class="tree-branch" bind:open={node.expanded}>
      <summary class="tree-branch-summary">{node.label}</summary>
      <div class="tree-branch-children">
        {#each node.children as child}
          {@render tree_node({ node: child, selectedFile, onselect })}
        {/each}
      </div>
    </details>
  {/if}
{/snippet}

<style>
  /* ── Modal shell ─────────────────────────────────────────────────────── */

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }

  .modal {
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /* ── Header ──────────────────────────────────────────────────────────── */

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem 1rem;
    border-bottom: 1px solid #e7e5e4;
    background: #fafaf9;
    flex-shrink: 0;
    gap: 1rem;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;
  }

  .modal-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #1c1917;
    white-space: nowrap;
  }

  .file-breadcrumb {
    font-size: 0.75rem;
    color: #78716c;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .change-count {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #4f46e5;
    background: #eef2ff;
    border-radius: 9999px;
    padding: 0.125rem 0.625rem;
  }

  .note-input {
    font-size: 0.8125rem;
    border: 1px solid #d6d3d1;
    border-radius: 0.375rem;
    padding: 0.3125rem 0.5rem;
    width: 14rem;
    outline: none;
  }
  .note-input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px #eef2ff;
  }

  .btn-ghost {
    font-size: 0.8125rem;
    color: #57534e;
    background: none;
    border: 1px solid #e7e5e4;
    border-radius: 0.375rem;
    padding: 0.3125rem 0.625rem;
    cursor: pointer;
  }
  .btn-ghost:hover { border-color: #d6d3d1; color: #1c1917; }

  .btn-submit {
    font-size: 0.8125rem;
    font-weight: 500;
    color: white;
    background: #4f46e5;
    border: none;
    border-radius: 0.375rem;
    padding: 0.375rem 0.875rem;
    cursor: pointer;
    transition: background 0.1s;
  }
  .btn-submit:hover:not(:disabled) { background: #4338ca; }
  .btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }

  .btn-signin {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #4f46e5;
    background: #eef2ff;
    border: 1px solid #c7d2fe;
    border-radius: 0.375rem;
    padding: 0.3125rem 0.625rem;
    text-decoration: none;
    white-space: nowrap;
  }

  .btn-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #78716c;
    border-radius: 0.25rem;
  }
  .btn-close:hover { background: #f5f5f4; color: #1c1917; }
  .btn-close svg { width: 0.875rem; height: 0.875rem; }

  .pr-link {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #15803d;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .submit-error {
    font-size: 0.8125rem;
    color: #dc2626;
    max-width: 20rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ── Close confirmation ───────────────────────────────────────────────── */

  .close-confirm {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #fefce8;
    border-bottom: 1px solid #fde68a;
    font-size: 0.8125rem;
    color: #92400e;
    flex-shrink: 0;
  }

  .close-confirm span {
    font-weight: 500;
    margin-right: auto;
  }

  .confirm-save {
    font-size: 0.8125rem;
    font-weight: 500;
    color: white;
    background: #4f46e5;
    border: none;
    border-radius: 0.375rem;
    padding: 0.3125rem 0.75rem;
    cursor: pointer;
  }
  .confirm-save:hover { background: #4338ca; }

  .confirm-discard {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #dc2626;
    background: none;
    border: 1px solid #fecaca;
    border-radius: 0.375rem;
    padding: 0.3125rem 0.75rem;
    cursor: pointer;
  }
  .confirm-discard:hover { background: #fef2f2; border-color: #f87171; }

  .confirm-cancel {
    font-size: 0.8125rem;
    color: #78716c;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.3125rem 0.5rem;
  }
  .confirm-cancel:hover { color: #1c1917; }

  /* ── Body layout ─────────────────────────────────────────────────────── */

  .modal-body {
    display: flex;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  /* ── Left sidebar ────────────────────────────────────────────────────── */

  .sidebar {
    width: 320px;
    flex-shrink: 0;
    border-right: 1px solid #e7e5e4;
    display: flex;
    flex-direction: column;
    background: #fafaf9;
  }

  .mode-tabs {
    display: flex;
    border-bottom: 1px solid #e7e5e4;
    flex-shrink: 0;
  }

  .mode-tab {
    flex: 1;
    padding: 0.5rem 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: #78716c;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.15s;
  }
  .mode-tab:hover { color: #1c1917; background: #f5f5f4; }
  .mode-tab.active {
    color: #4f46e5;
    border-bottom-color: #4f46e5;
    background: white;
  }

  .sidebar-content {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  /* ── Paths mode ──────────────────────────────────────────────────────── */

  .back-btn {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: #4f46e5;
    background: none;
    border: none;
    border-bottom: 1px solid #e7e5e4;
    cursor: pointer;
    text-align: left;
    flex-shrink: 0;
  }
  .back-btn:hover { background: #eef2ff; }

  .sidebar-meta {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .btn-create {
    margin: 0.75rem;
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: white;
    background: #4f46e5;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    flex-shrink: 0;
  }
  .btn-create:hover:not(:disabled) { background: #4338ca; }
  .btn-create:disabled { opacity: 0.5; cursor: not-allowed; }

  .track-tabs {
    display: flex;
    padding: 0.5rem 0.5rem 0;
    gap: 0.25rem;
    flex-shrink: 0;
  }

  .track-tab {
    flex: 1;
    padding: 0.375rem 0.5rem;
    font-size: 0.6875rem;
    font-weight: 500;
    color: #78716c;
    background: none;
    border: 1px solid #e7e5e4;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.1s;
  }
  .track-tab:hover { color: #1c1917; border-color: #d6d3d1; }
  .track-tab.active {
    color: #4f46e5;
    background: #eef2ff;
    border-color: #c7d2fe;
  }

  .path-list {
    flex: 1;
    overflow-y: auto;
    padding: 0.375rem 0;
  }

  .path-card {
    display: flex;
    align-items: stretch;
    border-bottom: 1px solid #f5f5f4;
  }
  .path-card:hover { background: #f5f5f4; }

  .path-card-reorder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    gap: 0;
    flex-shrink: 0;
    width: 2rem;
  }

  .reorder-btn {
    font-size: 0.625rem;
    color: #a8a29e;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    width: 1.25rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.125rem;
  }
  .reorder-btn:hover:not(:disabled) { color: #4f46e5; background: #eef2ff; }
  .reorder-btn:disabled { opacity: 0.3; cursor: default; }

  .path-order {
    font-size: 0.5rem;
    color: #d6d3d1;
    line-height: 1;
  }

  .path-card-main {
    flex: 1;
    min-width: 0;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.375rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .path-card-title {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #1c1917;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .path-card-meta {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.6875rem;
  }

  .category-pill {
    font-weight: 500;
  }

  .difficulty-dot {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .step-count {
    color: #a8a29e;
  }

  .new-path-btn {
    display: block;
    width: calc(100% - 1rem);
    margin: 0.5rem;
    padding: 0.5rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #4f46e5;
    background: #eef2ff;
    border: 1px dashed #c7d2fe;
    border-radius: 0.375rem;
    cursor: pointer;
    text-align: center;
    transition: all 0.1s;
    flex-shrink: 0;
  }
  .new-path-btn:hover {
    background: #e0e7ff;
    border-color: #a5b4fc;
  }

  /* ── Tree (commentary + reference) ───────────────────────────────────── */

  .tree-list {
    padding: 0.25rem 0;
  }

  .tree-leaf {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.25rem 0.75rem 0.25rem 1.25rem;
    font-size: 0.8125rem;
    color: #44403c;
    background: none;
    border: none;
    cursor: pointer;
    font-family: ui-monospace, monospace;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tree-leaf:hover { background: #f5f5f4; }
  .tree-leaf.selected { background: #eef2ff; color: #4f46e5; font-weight: 500; }

  .tree-branch { font-size: 0.8125rem; }

  .tree-branch-summary {
    padding: 0.25rem 0.75rem;
    cursor: pointer;
    color: #57534e;
    font-weight: 500;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    user-select: none;
  }
  .tree-branch-summary:hover { background: #f5f5f4; }
  .tree-branch-summary::before {
    content: '\25B8';
    font-size: 0.625rem;
    color: #a8a29e;
    transition: transform 0.15s;
    display: inline-block;
    width: 0.75rem;
  }
  details[open] > .tree-branch-summary::before {
    transform: rotate(90deg);
  }

  .tree-branch-children {
    padding-left: 0.75rem;
  }

  /* ── Editor area ─────────────────────────────────────────────────────── */

  .editor-area {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .editor-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #78716c;
    font-size: 0.875rem;
  }

  .placeholder-content {
    text-align: center;
    max-width: 24rem;
  }

  .placeholder-content h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #44403c;
    margin: 0 0 0.5rem;
  }

  .placeholder-content p {
    font-size: 0.875rem;
    color: #a8a29e;
    margin: 0;
  }

  .validation-errors {
    background: #fef2f2;
    border-bottom: 1px solid #fecaca;
    padding: 0.5rem 1rem;
    flex-shrink: 0;
  }

  .validation-error {
    font-size: 0.8125rem;
    color: #dc2626;
    font-family: ui-monospace, monospace;
  }

  .toast-editor-wrapper {
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  .toast-editor-wrapper.hidden {
    display: none;
  }

  /* ── Changes sidebar ─────────────────────────────────────────────────── */

  .changes-sidebar {
    width: 200px;
    flex-shrink: 0;
    border-left: 1px solid #e7e5e4;
    background: #fafaf9;
    overflow-y: auto;
    padding: 0.5rem 0;
  }

  .changes-label {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #a8a29e;
    padding: 0.5rem 0.75rem 0.25rem;
  }

  .change-item {
    display: flex;
    align-items: center;
    padding: 0 0.5rem 0 0.75rem;
    gap: 0.25rem;
  }
  .change-item.selected { background: #eef2ff; }

  .change-item-btn {
    flex: 1;
    text-align: left;
    font-size: 0.75rem;
    color: #44403c;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .change-item-btn:hover { color: #4f46e5; }

  .change-remove {
    font-size: 0.875rem;
    color: #a8a29e;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 0.125rem;
    flex-shrink: 0;
  }
  .change-remove:hover { color: #dc2626; }

  /* ── Toast UI overrides ──────────────────────────────────────────────── */

  :global(.toastui-editor-defaultUI) {
    font-family: inherit !important;
    border: none !important;
    height: 100% !important;
  }
  :global(.toastui-editor-toolbar) {
    background: #fafaf9 !important;
    border-bottom: 1px solid #e7e5e4 !important;
  }
  :global(.toastui-editor-toolbar-item-wrapper button) {
    color: #44403c !important;
  }
  :global(.toastui-editor-toolbar-item-wrapper button:hover) {
    background: #f5f5f4 !important;
  }
  :global(.toastui-editor-md-preview) {
    font-family: inherit !important;
    font-size: 0.9375rem !important;
    line-height: 1.7 !important;
    color: #1c1917 !important;
    padding: 1rem 1.25rem !important;
  }
  :global(.toastui-editor-main-container) {
    height: 100% !important;
  }
  :global(.toastui-editor-ww-container, .toastui-editor-md-container) {
    height: 100% !important;
  }

  :global(.sanskrit-term) {
    font-family: 'Noto Sans Devanagari', sans-serif;
    color: #1c1917;
  }
  :global(.roman-term) {
    font-style: italic;
    color: #44403c;
  }
  :global(.sutra-ref-link) {
    color: #4f46e5;
    text-decoration: none;
  }
  :global(.sutra-ref-link:hover) {
    text-decoration: underline;
  }
  :global(.toolbar-btn-deva) {
    font-family: 'Noto Sans Devanagari', sans-serif !important;
    font-size: 0.875rem !important;
  }
</style>
