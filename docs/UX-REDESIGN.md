# Anuvrtti UX Redesign

## The Problem We're Solving

Traditional Sanskrit education teaches the language first, then introduces Panini's grammar years later. We want to flip this: **use the Ashtadhyayi as the scaffold for learning Sanskrit itself**. This is the Pushpa Dikshit method.

This requires serving three distinct user needs:
1. **Readers** - People who want to read Sanskrit texts and understand the grammar as they encounter it
2. **Students** - People systematically learning Sanskrit grammar through structured paths
3. **Scholars** - People who already know the system and need a modern reference tool

The challenge: one app, three very different use cases, without becoming a confusing chimera.

---

## Current State: The Chimera Problem

The current UI has accumulated features without a unified vision:

### Navigation Confusion
- Header has: Read | Learn | Browse | Search | Tools dropdown
- Tools dropdown contains 8 items in 2 categories
- Some pages feel like "main" content, others like "tools"
- No clear mental model for where things live

### Inconsistent Depth Selection
- Global depth selector in header
- Inline depth selector in SutraCard (when `showDepthSelector={true}`)
- Inline depth selector in learn/[pathId] page
- Three different visual treatments of the same control

### Mixed Information Density
- Browse page: Full SutraCard components (heavy)
- Search results: Also full SutraCards
- Adhikara page: Minimal rows with expand arrows (light)
- Connected page: Bar chart rows (different again)

### Unclear Entry Points
- Home page shows three paths but then immediately shows LearningTree
- `/learn` and home page are nearly identical
- No clear "you are here" indicator

---

## Design Principles

### 1. One Control, One Place
If a control exists, it should appear in exactly one location. Users should never hunt for it or be confused by duplicates.

### 2. Progressive Disclosure
Start simple. Reveal complexity on demand. The "Simple" depth level should be the default for new users.

### 3. Consistent Information Density
Same data type = same visual treatment. A sutra looks the same whether you're browsing, searching, or reading.

### 4. Clear Navigation Model
Users should always know: Where am I? How did I get here? Where can I go?

### 5. Mobile-First, Desktop-Enhanced
Core functionality works on mobile. Desktop adds conveniences (side panels, keyboard shortcuts).

---

## The Three Modes

Instead of three "entry points" that all lead to the same chimera, we define three **modes** with distinct interfaces:

### Mode 1: Read (पठनम्)
**User**: "I want to read Sanskrit and understand what I'm reading"

**Experience**:
- Passages are the primary content
- Grammar explanations appear on demand (tap a word, see its derivation)
- Sutra references link to simple explanations
- Depth defaults to "Simple"
- Focus on vocabulary and translation

**Key screens**:
- Passage list (filterable by source, difficulty)
- Passage reader (with inline grammar popups)
- Word detail (shows prakriya for that specific form)

### Mode 2: Learn (अध्ययनम्)
**User**: "I want to systematically learn Sanskrit grammar"

**Experience**:
- Learning paths are the primary content
- Step-by-step progression through sutras
- Each step has explanation, examples, practice
- Depth defaults to "Standard"
- Progress is tracked and visible

**Key screens**:
- Path selector (Reading track vs Grammar track)
- Path view (current step, progress bar, navigation)
- Step view (sutra + explanation + examples)

### Mode 3: Reference (सन्दर्भः)
**User**: "I need to look something up"

**Experience**:
- Search and browse are primary
- Full sutra details with all commentary
- Depth defaults to "Advanced"
- Cross-references, dependencies, vartikas visible
- Analysis tools readily accessible

**Key screens**:
- Search (by text, number, concept)
- Browse (by adhyaya/pada)
- Sutra detail (comprehensive view)
- Tools (prakriya, pratyahara, tables)

---

## Information Architecture

```
/                       → Mode selector (for new users) or last-used mode
├── /read              → Passage list
│   └── /read/[id]     → Passage reader
├── /learn             → Path selector
│   └── /learn/[path]  → Path progression
├── /ref               → Search + Browse combined
│   ├── /ref/[sutra]   → Sutra detail
│   ├── /ref/prakriya  → Derivation tool
│   ├── /ref/pratyahara → Sound group viewer
│   └── /ref/tables    → Quick reference tables
└── /about             → Tour, help, philosophy
```

### URL Changes from Current
| Current | New | Reason |
|---------|-----|--------|
| `/passages` | `/read` | Shorter, clearer |
| `/learn/[pathId]` | `/learn/[pathId]` | Keep |
| `/browse` | `/ref` | Unified reference section |
| `/sutra/[id]` | `/ref/[id]` | Sutras are reference content |
| `/search` | `/ref?q=...` | Search is a filter on reference |
| `/prakriya` | `/ref/prakriya` | Tool within reference |
| `/pratyahara` | `/ref/pratyahara` | Tool within reference |
| `/reference` | `/ref/tables` | Clearer naming |
| `/adhikara` | `/ref?type=adhikara` | Filter, not page |
| `/connected` | `/ref?sort=connections` | Sort option, not page |
| `/roots` | `/ref?filter=roots` | Filter, not page |
| `/leaves` | `/ref?filter=leaves` | Filter, not page |
| `/types` | `/ref?group=type` | Grouping option, not page |
| `/tour` | `/about` | Better name |
| `/graph` | Remove | Rarely used, clutters |

---

## Global Elements

### Header (Simplified)
```
┌─────────────────────────────────────────────────────────────────┐
│ अनुवृत्ति                     [Read] [Learn] [Reference]    [क] │
└─────────────────────────────────────────────────────────────────┘
```

- **Logo**: Links to home/mode selector
- **Mode tabs**: Three primary modes, visually distinct when active
- **Script toggle**: Always visible, compact

**What's removed from header**:
- Depth selector (moved to page-level context)
- Search (now part of Reference mode)
- Tools dropdown (tools live in Reference mode)

### Depth Selection: Page-Level, Not Global

The depth selector should **not** be global. Different modes have different defaults, and changing depth mid-session should be a conscious choice within a context.

**Rules**:
- **Read mode**: Defaults to Simple. No depth selector shown (keep it simple).
- **Learn mode**: Defaults to Standard. Depth selector appears in the step view header, allowing user to adjust for that step.
- **Reference mode**: Defaults to Advanced. Depth selector appears in sutra detail header.

This means: one place per mode, not in global header, not in every card.

### Footer
```
┌─────────────────────────────────────────────────────────────────┐
│ Data from ashtadhyayi.com  ·  Built by Udapaana  ·  GitHub     │
└─────────────────────────────────────────────────────────────────┘
```
Keep minimal. Move "About" content to `/about` page.

---

## Mode-Specific Designs

### Read Mode (`/read`)

**Passage List**
```
┌─────────────────────────────────────────────────────────────────┐
│ पठनम् · Read Sanskrit                                           │
│ Practice with real passages. Grammar explanations on demand.    │
├─────────────────────────────────────────────────────────────────┤
│ Source: [All ▾]    Difficulty: [All ▾]         12 passages     │
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Meghaduta 1.1                                    ● Beginner │ │
│ │ कश्चित्कान्ताविरहगुरुणा...                                   │ │
│ │ "A certain yaksha, afflicted by separation..."              │ │
│ └─────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Ramayana 1.1.1                               ● Intermediate │ │
│ │ ...                                                         │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Passage Reader (`/read/[id]`)**
```
┌─────────────────────────────────────────────────────────────────┐
│ ← Back                          Meghaduta 1.1         Beginner │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   कश्चित्कान्ताविरहगुरुणा स्वाधिकारात्प्रमत्तः                    │
│   शापेनास्तंगमितमहिमा वर्षभोग्येण भर्तुः ।                       │
│                                                                 │
│   ─────────────────────────────────────────                     │
│                                                                 │
│   [▾ Word-by-word]                                              │
│   [▾ Translation]                                               │
│   [▾ Vocabulary (8 words)]                                      │
│   [▾ Grammar notes]                                             │
│                                                                 │
│   ─────────────────────────────────────────                     │
│                                                                 │
│   Related Sutras: 3.2.123, 7.3.84, 6.1.77                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Key interactions**:
- Tap any Sanskrit word → popup with meaning + "See derivation"
- "See derivation" → inline prakriya expansion (not new page)
- Sutra links → slide-in panel with Simple explanation
- All sections collapsed by default (progressive disclosure)

---

### Learn Mode (`/learn`)

**Path Selector**
```
┌─────────────────────────────────────────────────────────────────┐
│ अध्ययनम् · Learn Sanskrit Grammar                                │
│ Structured paths through the Ashtadhyayi.                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ┌─────────────────────────┐  ┌─────────────────────────┐       │
│ │ पठनम्                    │  │ व्याकरणम्                │       │
│ │ Reading Track           │  │ Grammar Track           │       │
│ │                         │  │                         │       │
│ │ A curated sequence      │  │ Systematic study        │       │
│ │ for reading fluency.    │  │ by topic.               │       │
│ │                         │  │                         │       │
│ │ ████████░░ 8/10         │  │ ██░░░░░░░░ 2/45         │       │
│ │                         │  │                         │       │
│ │ [Continue →]            │  │ [Continue →]            │       │
│ └─────────────────────────┘  └─────────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Below the track cards, show the full tree for the selected track (or last-used track).

**Path View (`/learn/[path]`)**
```
┌─────────────────────────────────────────────────────────────────┐
│ ← Paths    लट्लकारः · Present Tense              [Standard ▾]   │
│            ████████████░░░░░░░░  Step 2 of 12                   │
├───────────────────────────────────┬─────────────────────────────┤
│                                   │ Steps                       │
│   3.2.123                         │                             │
│   वर्तमाने लट्                      │ ✓ 1. Introduction          │
│                                   │ → 2. Vartamane lat          │
│   ─────────────────────           │   3. Lasya                  │
│                                   │   4. Tiptasjhi...           │
│   अनुवृत्ति · WITH CONTINUATION     │   5. Lah parasmaipadam     │
│   धातोः वर्तमाने लट् प्रत्ययः परश्च   │   ...                       │
│                                   │                             │
│   ─────────────────────           ├─────────────────────────────┤
│                                   │ Jargon                      │
│   The affix लट् (Present tense)   │ ┌───────────────────────┐   │
│   comes after a verb when...      │ │ Search terms...       │   │
│                                   │ └───────────────────────┘   │
│   Examples:                       │ [Technical] [Sound]         │
│   • पचति "he cooks"               │ [Semantic] [Case]           │
│   • तिष्ठन्ति पर्वताः               │                             │
│                                   │                             │
│   ─────────────────────           │                             │
│                                   │                             │
│      [← Previous]  [Next →]       │                             │
│                                   │                             │
└───────────────────────────────────┴─────────────────────────────┘
```

**Key points**:
- Depth selector is in the page header, right side
- Steps panel on the right (desktop) or collapsible (mobile)
- Jargon lookup always available in sidebar
- Big prev/next buttons at bottom
- Progress bar in header shows overall path progress

---

### Reference Mode (`/ref`)

**Combined Search + Browse**
```
┌─────────────────────────────────────────────────────────────────┐
│ सन्दर्भः · Reference                                             │
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search sutras...                                         │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Adhyaya: [1] [2] [3] [4] [5] [6] [7] [8]     Pada: [1][2][3][4]│
│                                                                 │
│ Filters: [samjna] [paribhasha] [vidhi] [adhikara]    [Clear]   │
│ Sort: [Number ▾]                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 1.1.1  वृद्धिरादैच्                                    संज्ञा   │
│ 1.1.2  अदेङ्गुणः                                       संज्ञा   │
│ 1.1.3  इको गुणवृद्धी                                  परिभाषा  │
│ ...                                                             │
│                                                                 │
│ ─────────────────────────────────────────                       │
│ Showing 1-50 of 75 sutras                          [Load more] │
└─────────────────────────────────────────────────────────────────┘
```

**Key features**:
- Search and browse are unified (search filters the list)
- Compact sutra rows (ID + text + type badge)
- Click any row → expands inline OR navigates to detail (user preference)
- Filters persist in URL (`/ref?a=1&p=1&type=samjna`)

**Sutra Detail (`/ref/[id]`)**
```
┌─────────────────────────────────────────────────────────────────┐
│ ← Reference                                      [Advanced ▾]   │
├───────────────────────────────────┬─────────────────────────────┤
│                                   │                             │
│   1.1.1                    संज्ञा  │ Depends on                  │
│                                   │ (none - root sutra)         │
│   वृद्धिरादैच्                      │                             │
│                                   │ ─────────────────           │
│   ─────────────────────           │                             │
│                                   │ Used by (247)               │
│   WITH ANUVRTTI                   │ 1.1.3, 1.1.4, 1.1.5...      │
│   (none)                          │ [Show all]                  │
│                                   │                             │
│   ─────────────────────           │ ─────────────────           │
│                                   │                             │
│   ADVANCED EXPLANATION            │ Tools                       │
│                                   │ [Prakriya] [Pratyahara]     │
│   This संज्ञासूत्र defines...      │                             │
│                                   │                             │
│   आत्: The त् is इत् by 1.3.3...  │                             │
│                                   │                             │
│   ─────────────────────           │                             │
│                                   │                             │
│   KASHIKA VRTTI                   │                             │
│   वृद्धिशब्दोऽयम्...               │                             │
│                                   │                             │
│   ─────────────────────           │                             │
│                                   │                             │
│   VARTTIKAS (2)                   │                             │
│   1. वृद्धिशब्द औपचारिकः           │                             │
│   2. ...                          │                             │
│                                   │                             │
│   ─────────────────────           │                             │
│                                   │                             │
│   [← 1.1.0]            [1.1.2 →]  │                             │
│                                   │                             │
└───────────────────────────────────┴─────────────────────────────┘
```

**Key features**:
- Depth selector in page header
- Dependencies panel on right (desktop) or collapsible section (mobile)
- All commentary sections visible (Advanced mode default)
- Prev/next navigation at bottom
- Keyboard shortcuts (← → or h l)

**Tools (`/ref/prakriya`, `/ref/pratyahara`, `/ref/tables`)**

These stay largely as-is but live under the `/ref` path. They're tools for reference users.

---

## Component Consolidation

### SutraDisplay Component
Replace the various sutra display patterns with one component, multiple variants:

```typescript
interface SutraDisplayProps {
  sutra: Sutra;
  variant: 'compact' | 'card' | 'full';
  commentary?: Commentary;
  layeredCommentary?: LayeredSutraCommentary;
  depth?: CommentaryDepth; // Only used in 'full' variant
  showDepthSelector?: boolean; // Only used in 'full' variant
  onClick?: (id: string) => void;
}
```

**Variants**:
- `compact`: ID + text + type badge (for lists)
- `card`: Compact + anuvrtti references (for search results, browse)
- `full`: Everything (for detail page, learn step view)

### Remove Duplicate Controls
- **DepthSelector**: Remove from header. Only appears in page context where depth matters.
- **Type badges**: Standardize to one style (small pill with text)

### Standardize Expandable Sections
One pattern for all expandable content:
```html
<details class="section">
  <summary class="section-header">
    <span class="section-title">Title</span>
    <span class="section-indicator">▾</span>
  </summary>
  <div class="section-content">
    ...
  </div>
</details>
```

---

## Responsive Behavior

### Mobile (< 768px)
- Header: Logo + hamburger menu (modes in menu)
- Script toggle: In menu
- Sidebars: Collapse to expandable sections above/below main content
- Sutra navigation: Swipe gestures + bottom nav bar
- Tables: Horizontal scroll with sticky first column

### Tablet (768px - 1024px)
- Header: Full nav visible
- Sidebars: Collapsible panels (click to toggle)
- Two-column layout where sensible

### Desktop (> 1024px)
- Full layout with persistent sidebars
- Keyboard shortcuts active
- Hover states for previews

---

## Implementation Plan

### Phase 1: Foundation (Structural Changes)
1. Create new route structure (`/read`, `/ref`, etc.)
2. Create unified `SutraDisplay` component with variants
3. Update header to simple three-mode navigation
4. Remove global depth selector
5. Create redirects from old URLs

### Phase 2: Read Mode
1. Simplify passage list
2. Build passage reader with word-tap interactions
3. Add inline prakriya popups
4. Test with real passages

### Phase 3: Learn Mode
1. Redesign path selector (two tracks prominent)
2. Update step view with sidebar steps panel
3. Add depth selector to step header
4. Clean up progress tracking UI

### Phase 4: Reference Mode
1. Combine search + browse into unified view
2. Implement filter/sort URL state
3. Redesign sutra detail with dependency sidebar
4. Move tools under /ref path

### Phase 5: Polish
1. Responsive testing and fixes
2. Accessibility audit
3. Performance optimization
4. Documentation update

---

## Migration Notes

### Breaking Changes
- All URLs change (implement redirects)
- Global depth preference no longer exists (mode-specific)
- Some analysis pages become filters rather than dedicated pages

### Backwards Compatibility
- 301 redirects for all old URLs
- LocalStorage migration for learning progress (same format)
- Script preference unchanged

### What Gets Removed
- `/graph` page (low usage, complex to maintain)
- Duplicate depth selectors
- Tour page (replaced by `/about` with better content)
- Individual pages for adhikara, roots, leaves, connected, types (become filters)

---

## Success Metrics

1. **Clarity**: New users can identify their path within 10 seconds
2. **Consistency**: Same data looks the same everywhere
3. **Depth discovery**: Users naturally find appropriate depth level
4. **Mobile usability**: All features accessible on phone
5. **Learning completion**: Higher percentage of users complete paths

---

## Open Questions

1. **Inline vs. Page navigation for sutras in Reference mode?**
   - Option A: Click row → expand inline (faster, less context switch)
   - Option B: Click row → navigate to detail (cleaner, better URL sharing)
   - Recommendation: B, with inline preview on hover (desktop only)

2. **Should Read mode have its own depth setting?**
   - Currently proposed: Always Simple, no selector
   - Alternative: User can choose, defaults to Simple
   - Recommendation: Keep it simple (no selector in Read mode)

3. **What happens to the graph visualization?**
   - Currently: Dedicated page at `/graph`
   - Proposal: Remove (complex, rarely used)
   - Alternative: Keep as easter egg at `/ref/graph`
   - Recommendation: Remove for now, add back if requested

4. **How do we handle sutras without layered commentary?**
   - Fall back to old commentary format (current behavior)
   - Show notice that this sutra hasn't been rewritten yet
   - Recommendation: Silent fallback, no notice (avoid drawing attention to gaps)
