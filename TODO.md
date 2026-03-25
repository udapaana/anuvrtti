# Anuvrtti — TODO

## What's Done

### Content Editing Infrastructure (complete)
- [x] Jargon migrated to TOML (`static/data/jargon.toml`)
- [x] Commentary split to per-sūtra TOML files (`static/data/commentary/{a}/{p}/{s}.toml`)
- [x] Edit modal with mode tabs (Paths / Commentary / Reference)
- [x] Path overview panel with reorder controls
- [x] Two-step new path creation (metadata → content)
- [x] Context-aware edit button (navbar opens to current page's file)
- [x] PathMetaEditor for structured frontmatter editing
- [x] Submit API: creates branch, commits files, opens PR
- [x] Supports both editing existing files and creating new ones
- [x] GitHub App token for writes, user OAuth for identity
- [x] TOML + markup validation before submission

### Learning Paths (68 paths, all substantive)
- [x] 45 vyakarana (grammar) paths — complete curriculum
- [x] 23 pathana (reading) paths — beginner through intermediate
- [x] prakarana (7) and prakriya (7) categories added
- [x] Auto-rebuild paths-index.json via Vite plugin
- [x] TOML frontmatter parsing in build-path-index.ts

### Commentary (3983 sūtras)
- [x] Three-tier layered commentary (Simple / Standard / Advanced)
- [x] All sūtras have all three tiers
- [x] Custom markup: @deva[], @ref[], @[], @sutra[], @prakriya[]

---

## Phase 5 — Commentary Quality Review

### 5a. Audit commentary tiers for consistency ✓
- **What**: All 3983 sūtras have three tiers, but quality varies. Some "simple" explanations are too technical; some "advanced" tiers don't add enough depth beyond "standard".
- **Findings** (2026-03-21):
  - Style guide written: `scripts/audit/STYLE-GUIDE.md`
  - Quality degrades from 3.1.5 and 4.1.2 onward — simple tiers become rule-summaries assuming jargon
  - 21 files still have raw Vasu markers; 78 files had mechanical markup violations (fixed)
  - Full rewrite needed for most of adhyāyas 3–8 simple tiers (ongoing)

### 5b. Improve sūtra cross-references ✓
- **What**: Many commentary entries mention related sūtras in prose but don't use @ref[] links
- **Done** (2026-03-21):
  - [x] Script scanned all 3983 files — found 73 bare refs in 66 files
  - [x] Auto-converted all prose-context bare refs (by/from/in/under/see/per etc.)
  - [x] Fixed 35 files with uppercase `@[Vārttika]` → `@[vārttika]` etc.

---

## Phase 6 — Pedagogical Content Improvements

### 6a. Strengthen introduction → tinganta-lat bridge ✓
- **Done** (2026-03-21):
  - [x] Created `dhatu-parichaya` path (`static/content/paths/vyakarana/dhatu-parichaya/path.md`)
    - What is a dhātu; how to read root notation
    - Ten gaṇas and their vikaraṇas
    - Shape of a derivation (conceptual, pre-formal)
    - Five roots to know before conjugation
    - @prakriya[bhU + laT + tip] preview
  - [x] Added `dhatu-parichaya` to tinganta-lat prerequisites

### 6b. Add more worked examples to existing paths
- **What**: Many paths explain rules but don't show enough concrete derivations. Students learn by seeing examples, not just reading rules.
- **Work**:
  - [ ] Add 2-3 more @prakriya[] examples to each tinganta path (currently 1-2 per path)
  - [ ] Add paradigm tables to subanta paths where missing
  - [ ] Add "Try it yourself" prompts: "Given root X, derive the form for 3rd person singular. Check your answer below."

### 6c. Enrich reading path content
- **What**: Pathana paths are concise (avg 104 lines) — good for pacing but some could benefit from richer examples and more Sanskrit text exposure.
- **Work**:
  - [ ] Double the example sentences in `simple-sentences`, `nom-acc`, `instrumental`
  - [ ] Add contextual vocabulary to each reading step (not just grammar focus)
  - [ ] Add "Read aloud" guidance: sandhi-resolved text alongside padapāṭha

---

## Phase 7 — Reading Interface & Longer Passages

### 7a. Design passage reading interface
- **What**: Current reader (graded reader paths) shows individual cards — one sentence/verse at a time. This works for subhāṣitas but breaks down for longer connected prose (Pañcatantra stories, Hitopadeśa, Raghuvaṃśa verses). We need a reading interface that supports:
  - Multi-paragraph passages with flowing text
  - Inline word-by-word glossing (hover/tap for meaning + morphology)
  - Toggleable padaccheda (word separation) overlay
  - Sentence-level grammar annotations in a side panel
  - Progress tracking through longer texts
- **Work**:
  - [ ] Design `PassageReader.svelte` component:
    - Top: Sanskrit text (continuous, not card-by-card)
    - Bottom/side: sentence-level annotations panel
    - Click any word → morphological breakdown + jargon lookup
    - Toggle: show/hide padaccheda, translation, grammar notes
  - [ ] Define passage data format for longer texts:
    - `static/data/passages/{source}/{id}.toml` (or `.md` with TOML frontmatter)
    - Structured: sentences array, each with Sanskrit, padaccheda, translation, word glosses, grammar notes
  - [ ] Build sentence-level annotation panel

### 7b. Add longer passage content
- **What**: Current passages are single verses or 1-2 sentence excerpts. Need connected prose and poetry.
- **Candidate texts** (public domain, pedagogically graded):
  - **Intermediate prose**: Pañcatantra Book 1 kathāmukha (story frame, ~20 sentences)
  - **Intermediate verse**: Bhartṛhari Nītiśataka selections (10-15 verses with grammar)
  - **Advanced prose**: Hitopadeśa opening (mitralābha section)
  - **Advanced verse**: Raghuvaṃśa Canto 1 selections (mahākāvya style)
  - **Vedic**: Puruṣasūkta or Naasadiya Sukta (with Vedic grammar notes)
  - **Purāṇic narrative**: Prahlāda story, Bhāgavata Purāṇa Skandha 7 (BhP_07.04–07.10)
    - Source: ambuda-org/gretil, `1_sanskr/tei/sa_bhAgavatapurANa.xml` (IAST TEI XML)
    - Verse IDs: `BhP_07.04.001` etc. — need to extract, convert to Devanagari, segment, annotate
- **Work**:
  - [ ] Prepare Pañcatantra kathāmukha passage (sentence segmentation, padaccheda, word glosses, grammar annotations)
  - [ ] Prepare 10 Nītiśataka verses with full apparatus
  - [ ] Extract and prepare Prahlāda narrative (BhP 7.4–7.10): parse TEI XML, select key verses, add padaccheda + word glosses
  - [ ] Wire into reading paths as "extended reading" steps

### 7d. Integrate Bālabodhini Telugu Sanskrit reading curriculum
- **What**: *Bālabodhini* by Kāśi Kṛṣṭa — 38 graded lessons teaching Sanskrit through Telugu. Part 1 (only) available. Structure: vocab glosses (Sanskrit=Telugu), Sanskrit sentences in Telugu script, Telugu translation exercises.
- **Source**: `raw_data/balabodhini/1/sanskrit_chat_blocks.txt` — 38 lesson files split to `raw_data/balabodhini/1/lessons/lesson-NN.txt`
- **Structure of each lesson** (lessons 1–32): vocab block → Sanskrit sentences → Telugu exercises. Lessons 33–38 also include paradigm tables.
- **Work**:
  - [x] Split source into 38 per-lesson text files
  - [ ] For each lesson: transliterate Sanskrit (Telugu script → IAST/Devanagari), add English glosses to vocabulary, translate Telugu exercises to English
  - [ ] Design TOML schema for `static/data/balabodhini/lessons/lesson-NN.toml` (vocab + sentences + exercises + notes)
  - [ ] Write structured TOML files (can be done lesson by lesson or batched)
  - [ ] Build pathana reading paths that draw on lesson content (one path per 3–5 lessons?)
  - [ ] Eventually: wire into passage reader interface (7a) for inline glossing

### 7c. Word-level morphological data
- **What**: The reading interface needs word-level data — for each word in a passage: stem, affixes applied, case/tense/person, meaning. This powers the hover-to-gloss feature.
- **Work**:
  - [ ] Define word gloss format: `{ word, stem, analysis, meaning, sutraRefs? }`
  - [ ] Create morphological annotations for Pañcatantra passage (pilot)
  - [ ] Evaluate: generate automatically from prakriya engine vs. hand-annotate?

---

## Phase 8 — Remaining Migrations & Cleanup

### 8a. Vocabulary → TOML
- [ ] Convert `static/data/vocabulary.json` → `static/data/vocabulary.toml`
- [ ] Update loader

### 8b. Passages → structured files
- [ ] Migrate existing passage JSON files to per-passage TOML
- [ ] Update passage loader and suggest API

### 8c. Inline edit cleanup
- [ ] Remove legacy `CommentaryEditor` from ref page (replaced by modal)
- [ ] Clean up old `pendingEdits` store (merged into `fileEdits`)

---

## Order of work (current priority)

1. ~~**5a**~~ — done
2. ~~**5b**~~ — done
3. ~~**6a**~~ — done
4. **6b** — More worked examples in existing paths
5. **6c** — Enrich reading path content
6. **7d** — Telugu curriculum review + integration (paste content to begin)
7. **7a** — Passage reading interface design + build
8. **7b** — Longer passage content (Pañcatantra, Prahlāda/BhP 7, Nītiśataka)
9. **7c** — Word-level morphological data
10. **8a-c** — Remaining migrations and cleanup
