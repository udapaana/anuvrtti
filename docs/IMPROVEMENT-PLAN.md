# Anuvrtti Improvement Plan

Three workstreams, ordered by impact and dependency.

---

## Workstream 1: UX Refinement

The architecture (Learn vs Reference) is sound. The problems are in transitions, dead ends, and mobile.

### 1A. Return-to-path context

**Problem:** Clicking a `@ref[1.1.1]` link from a learning path dumps the user into `/ref/1.1.1` with no way back to their exact learning position.

**Fix:** When navigating from a learning path to a reference page, pass the learning context (path ID, step index) as URL params. On the ref detail page, show a banner: "Return to _Present Tense_, step 3 of 12".

- Store context in `sessionStorage` on navigate-away
- On ref pages, check for stored learning context
- Render a dismissible banner at top of ref detail page
- Banner links back to `/learn/{pathId}?step={n}`

### 1B. Path completion flow

**Problem:** Finishing a path calls `goto('/learn')` — a dead end with no guidance.

**Fix:** After marking a path complete, show an interstitial:
- Congratulations message with path stats (steps completed, time)
- "Next path" card using `getNextUncompletedIndex()` logic
- "Back to all paths" secondary link

### 1C. Resume learning for returning users

**Problem:** Returning users see the LearningTree but no "Continue where you left off" affordance.

**Fix:** On the home page (when `hasProgress` is true), show a prominent card above the LearningTree:
- Current path name and step
- Progress bar
- "Continue" button linking to exact step

Also: keep the quick-tools grid visible for returning users (currently hidden).

### 1D. Mobile step navigation

**Problem:** Step sidebar, JargonLookup, and PratyaharaViewer are `hidden lg:block` — invisible on phones.

**Fix:**
- Add a collapsible step drawer at the top of the learn path page (below the progress bar) for mobile
- Use `<details>` with summary showing "Step 3 of 12 - Vowel Sandhi"
- Expanding reveals the full step list
- JargonLookup: add a floating button (bottom-right) that opens a bottom sheet on mobile
- PratyaharaViewer: available via link/button rather than always-visible sidebar

### 1E. Consistent depth defaults and ref-to-learn cross-links

**Problem:** Learn defaults to `standard`, Reference defaults to `advanced`. No path from ref to learn.

**Fix:**
- Use a single depth preference stored in `preferences` store, defaulting to `standard`
- On ref detail pages, if the sutra appears in a learning path, show a small "Learn this in: _Present Tense_ path" link in the sidebar
- Build a sutra-to-path index at build time (which sutras appear in which paths)

### 1F. Safe prev/next sutra navigation

**Problem:** Ref detail constructs IDs like `{a}.{p-1}.999` at pada boundaries — may not exist.

**Fix:** Load the sutra list (already cached by data layer) and look up the actual previous/next sutra ID by index position in the sorted list rather than computing IDs arithmetically.

---

## Workstream 2: Content Enrichment

The introduction and tinganta-lat paths are models — rich pedagogy, worked examples, concept-first teaching. Most other paths are thin. The reading corpus is tiny.

### 2A. Enrich thin grammar paths (priority order)

Each path should follow the introduction's pattern: concept explanations interleaved with sutras, worked examples, tables, and a "what's next" section.

**Tier 1 — most used, thinnest:**
1. `sandhi-vowel` (currently 8 steps, ~500 words — needs 2-3x expansion with worked examples of splitting real text)
2. `sandhi-visarga` (same issue)
3. `sandhi-consonant` (same issue)
4. `subanta-a-stems` (needs paradigm tables with examples from actual texts)
5. `subanta-pratipadika` (needs concrete examples before abstract definitions)

**Tier 2 — important for flow:**
6. `karaka-intro` (needs sentence-analysis exercises)
7. `samasa-intro` (needs compound-splitting practice)
8. `kridanta-ktva` through `kridanta-tavya-aniya` (need derivation walkthroughs)

**Tier 3 — advanced paths:**
9. `tinganta-lit` through `tinganta-lung` (need more worked derivations)
10. `subanta-consonant-stems` (needs systematic paradigm coverage)

### 2B. Expand reading corpus

**Current state:** 12 passages across 3 texts. The reading track has 20 paths but recycles this tiny corpus.

**Needed:**
- 50+ graded passages at minimum
- Sources: Hitopadesha, Ramayana (Balakanda), Bhagavad Gita (chapter 2), Kathasaritsagara, Niti Shataka, more Pancatantra
- Each passage needs: padaccheda, word-by-word gloss, translation, grammar notes, sutra references
- Organize by difficulty tier (1-5) corresponding to reading track progression

### 2C. Expand vocabulary

**Current state:** 41 words.

**Needed:**
- 500+ words organized by frequency tier
- Aligned to learning path progression (each path introduces specific vocabulary)
- Include: stem, gender, meaning, paradigm class, example sentence, frequency tier
- High-frequency first: pronouns, common verbs (gam, kri, bhu, as, vac, drs, sru, da, stha, jan), case particles, conjunctions

### 2D. Finish commentary rewrite for remaining padas

**Current state:** ~60-70% rewritten with differentiated 3-level commentary. Remaining padas have simple/standard levels that collapse into identical one-liners.

**Remaining padas (approximate):**
- 1.4, 2.1, 2.4
- 3.1, 3.2
- 6.4
- 7.1, 7.2
- 8.1, 8.2

Each pada needs the same treatment: genuinely differentiated simple/standard/advanced commentary with examples and cross-references.

---

## Workstream 3: Ashtadhyayi Flow

The current paths organize by Western grammar categories. This teaches grammar but not the Ashtadhyayi as a system. Add new path types that follow the text's own logic.

### 3A. Prakriya (derivation) paths

Walk through the complete rule sequence for deriving a specific word. These cross adhyayas, showing how the grammar actually works as a derivation engine.

**Initial set:**
1. "Derive भवति" — bhU + laT (present tense, class 1)
2. "Derive रामस्य" — rAma + Gas (genitive singular)
3. "Derive कृत्वा" — kR + ktvA (absolutive)
4. "Derive गच्छति" — gam + laT (present with samprasarana)
5. "Derive बभूव" — bhU + liT (perfect with reduplication)
6. "Derive नयति" — nI + laT (guna + yan sandhi)

Each path follows the derivation step by step, explaining each rule as it fires: which rule, why it applies, what it changes, what fires next. The `@prakriya` engine output can scaffold the step sequence.

### 3B. Pada reading paths

Guided sequential reading of every sutra in a pada, with the adhikara/anuvrtti context shown.

**Initial set:**
1. "Read Adhyaya 1, Pada 1" — the samjna-paribhasha foundation
2. "Read Adhyaya 1, Pada 3" — the it-samjna rules
3. "Read Adhyaya 1, Pada 4" — the karaka definitions
4. "Read Adhyaya 6, Pada 1" — the sandhi prakarana
5. "Read Adhyaya 3, Pada 1" — the pratyaya introduction

Each step shows: the sutra, its active adhikara(s), the full anuvrtti expansion, and layered commentary. This is how traditional students read the text.

### 3C. Prakarana (topic cluster) paths

Follow the Ashtadhyayi's own section structure rather than Western grammar categories.

**Examples:**
- "The Samjna Prakarana (1.1.1-1.1.75)" — all technical definitions
- "The It-samjna Prakarana (1.3.2-1.3.9)" — how markers work
- "The Atmanepada Prakarana (1.3.12-1.3.93)" — voice assignment rules
- "The Karaka Prakarana (1.4.23-1.4.55)" — semantic role definitions
- "The Tripadi (8.2-8.4)" — the special final section

### 3D. Cross-reference (concept) paths

Trace a single concept across the entire Ashtadhyayi.

**Examples:**
- "Guna everywhere" — every rule that triggers guna substitution
- "How anuvrtti works" — demonstrate rule inheritance with real examples
- "The life of a pratyaya" — from introduction (3.1.1) through it-deletion (1.3.9) to final form
- "Exceptions and counter-exceptions" — how apavada overrides utsarga

### 3E. Visible prerequisite graph

Surface the prerequisite relationships that already exist in path frontmatter.

**Fix:** In the LearningTree grammar track view, draw dependency arrows between paths. Use the existing `prerequisites` field. Show locked/unlocked status. This makes the learning topology visible rather than hidden in metadata.

---

## Execution Order

The order is chosen to maximize impact at each stage and respect dependencies.

### Phase 1: UX fixes (do first — unblocks everything)

These are code changes that improve the experience for all existing content.

1. **1F** Safe prev/next navigation — small fix, prevents broken pages
2. **1C** Resume learning button — highest-impact single UX change
3. **1B** Path completion interstitial — closes the biggest dead end
4. **1A** Return-to-path context — connects the two modes
5. **1D** Mobile step navigation — unlocks mobile users
6. **1E** Depth consistency + ref-to-learn links — ties the system together

### Phase 2: Content enrichment (do second — fills the gaps)

2. **2A** Enrich sandhi paths (tier 1) — thinnest paths, frequently hit
3. **2A** Enrich subanta paths (tier 1) — same
4. **2B** Expand reading corpus — enables the reading track
5. **2C** Expand vocabulary — supports reading
6. **2A** Remaining grammar paths (tiers 2-3)
7. **2D** Commentary rewrite for remaining padas

### Phase 3: Ashtadhyayi flow (do third — new path types)

8. **3A** Build 2-3 prakriya paths as proof of concept
9. **3B** Build 1-2 pada reading paths
10. **3E** Visible prerequisite graph in LearningTree
11. **3C** Prakarana paths
12. **3D** Cross-reference paths

---

## What "done" looks like

- A new user can start learning, follow prompts through paths, and never hit a dead end
- A mobile user has full access to step navigation and jargon lookup
- Every grammar path has the depth and quality of the introduction path
- 50+ reading passages support the reading track
- A student can trace a derivation from root to final word through actual rule sequence
- A student can read a pada of the Ashtadhyayi with guided anuvrtti context
- The prerequisite graph is visible, making the learning topology clear
