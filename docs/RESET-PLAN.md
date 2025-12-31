# Anuvrtti Reset: Learner-First Rebuild

## Why Reset?

We were rewriting Vasu's commentary with cleaner prose—but that serves experts, not learners. The fundamental problem:

**Sutra 1.1.1 is incomprehensible to a beginner.**

It references pratyaharas (1.1.71), indicatory letters (1.3.2-9), mātrās, and forward rules. The Ashtadhyayi is a compression algorithm that assumes a guru to unpack it. We have no guru.

## The Shift

| Before | After |
|--------|-------|
| Rewrite commentary for clarity | Build learning sequences that teach |
| Assume reader knows the system | Assume reader knows nothing |
| Start with sutras | Start with concepts |
| Expert reference | Learner progression |

## What We Keep

The infrastructure is solid:
- 45 learning paths with prerequisites
- Jargon lookup (100+ terms)
- Pratyahara viewer
- Prakriya derivation engine
- Progress tracking
- Rich markup system

## What We Change

### 1. The Introduction Path

Current `00-introduction.md` jumps into sutras with brief context. We rebuild it as a true foundation that teaches concepts before rules.

### 2. Layered Commentary

Each sutra gets three depth levels:
- **Simple:** One sentence, zero jargon
- **Standard:** Full explanation, terms defined inline
- **Advanced:** Technical details, cross-references

### 3. Term Tracking

The system tracks which terms a learner has seen. Unknown terms get inline definitions. Known terms become tooltips.

### 4. Reference Previews

Forward references expand inline so learners don't lose context.

---

# Implementation Steps

## Step 1: New Introduction Path Structure

Rewrite `00-introduction.md` with concept-first teaching.

**Current structure:**
```
1.1.1 → 1.1.2 → 1.1.3 → ... (sutras with brief gloss)
```

**New structure:**
```
Concept: What are vowel grades?
  → 1.1.1 (vrddhi defined)
  → 1.1.2 (guna defined)
  → 1.1.3 (they replace ik)

Concept: What is a pratyahara?
  → The Shiva Sutras
  → 1.1.71 (how pratyaharas work)

Concept: What are indicatory letters?
  → 1.3.2-1.3.9 (it-samjna rules)

Concept: What is a pada?
  → 1.4.14 (sup/ting definition)

Concept: What is an affix?
  → 3.1.1-3.1.2 (pratyaya introduction)
```

**Deliverable:** New `00-introduction.md` (~20 steps, concept-first)

---

## Step 2: Layered Commentary Data Structure

Create new data format for layered commentary.

**Current format (vasu_rewritten.json):**
```json
{
  "11001": "The vowels आ, ऐ, and औ are called वृद्धि.\n\nThe sūtra has three words..."
}
```

**New format:**
```json
{
  "11001": {
    "simple": "The long vowels आ, ऐ, and औ are grouped under the name \"vrddhi.\"",
    "standard": "The vowels @deva[आ], @deva[ऐ], and @deva[औ] are called @deva[वृद्धि] (\"strengthening\"). When later rules prescribe vrddhi, they mean one of these vowels replaces a simpler vowel.\n\n**Example:** @deva[उपगु] → @deva[औपगवः] (the @deva[उ] strengthens to @deva[औ])",
    "advanced": "The sūtra has three words: @deva[वृद्धिः] (the term being defined), @deva[आत्] (long @deva[आ] with indicatory @deva[त्]), and @deva[ऐच्] (pratyāhāra covering @deva[ऐ] and @deva[औ]).\n\n**The indicatory @deva[त्] in @deva[आत्]:**\n- Shows that @deva[आ] has exactly two mātrās\n- By @ref[1.1.70], it restricts vowels to standard length\n\nThe term appears in rules like @ref[7.2.1]."
  }
}
```

**Deliverable:**
- New type definitions in `src/lib/data/types.ts`
- Migration script for existing entries
- Updated `CommentaryText.svelte` to handle depth selection

---

## Step 3: Concept Steps in Paths

Add support for "concept" steps that teach without a sutra.

**Current step format:**
```markdown
## 1.1.1 - Vrddhi defined

**Key Terms:** vRddi, AT, Ec

Commentary...
```

**New concept format:**
```markdown
## concept - What are vowel grades?

Sanskrit vowels come in three "grades" or strengths...

| Grade | इ-series | उ-series | ऋ-series |
|-------|----------|----------|----------|
| Basic | इ/ई | उ/ऊ | ऋ/ॠ |
| Guna | ए | ओ | अर् |
| Vrddhi | ऐ | औ | आर् |

---

## 1.1.1 - Vrddhi defined

Now let's see how Panini captures this...
```

**Deliverable:**
- Update `pathParser.ts` to handle `concept` as sutraId
- Update path page to render concept steps differently (no sutra card)

---

## Step 4: Term Tracking Store

Track which terms the learner has encountered.

**New store:** `src/lib/stores/learner-terms.ts`

```typescript
interface LearnerTermState {
  knownTerms: Set<string>;
  introduce(term: string): void;
  isKnown(term: string): boolean;
  reset(): void;
}
```

**Deliverable:**
- New store with localStorage persistence
- Integration with `CommentaryText.svelte`
- First occurrence = inline definition
- Subsequent = tooltip link

---

## Step 5: Reference Preview Component

Make `@ref[1.1.70]` expandable inline.

**Current behavior:** Link to sutra page

**New behavior:**
- Click/hover shows preview tooltip with simple-level commentary
- "Go to sutra" link for full context

**Deliverable:**
- New `RefPreview.svelte` component
- Update `CommentaryText.svelte` to use it
- Fetch simple commentary on demand

---

## Step 6: Depth Selector UI

Let learners choose their depth level.

**Options:**
1. Global toggle in settings
2. Per-page toggle
3. Per-sutra expand/collapse

**Recommendation:** Start with global toggle, add per-sutra later.

**Deliverable:**
- Depth preference in learner store
- Toggle component in learning page header
- Commentary renders at selected depth

---

## Step 7: Rewrite Core Sutras (Layered)

Convert the most important sutras to layered format:

**Priority 1 (Introduction path):**
- 1.1.1-1.1.3 (guna/vrddhi)
- 1.1.68-1.1.71 (svarupa, anudit, tapara, pratyahara)
- 1.3.2-1.3.9 (it-samjna)
- 1.4.14 (pada)
- 3.1.1-3.1.2 (pratyaya)

**Priority 2 (Verb basics):**
- 3.2.123 (vartamane lat)
- 3.4.77-78 (lasya, tiptasjhi)
- Key vikarana sutras

**Priority 3 (Noun basics):**
- 4.1.1-4.1.2 (nyap-pratipadikaat)
- Key vibhakti sutras

**Deliverable:** ~50 sutras in layered format

---

## Step 8: "Reading Fluency" Track

Create focused 10-lesson sequence for practical reading.

| Lesson | Topic | Goal |
|--------|-------|------|
| 1 | Alphabet & Sounds | Recognize all letters, understand pratyahara |
| 2 | Word Structure | Identify root, stem, affix |
| 3 | Present Tense | Conjugate any verb in lat |
| 4 | Noun Cases | Decline a-stems, all 7 cases |
| 5 | Vowel Sandhi | Apply 5 common rules |
| 6 | Simple Compounds | Parse tatpurusha |
| 7 | Past & Future | lang and lrt |
| 8 | Participles | kta, shatr, shanac |
| 9 | Visarga Sandhi | Complete sandhi picture |
| 10 | Reading Practice | Annotated text passages |

**Deliverable:** 10 new path files, linked as a sequence

---

## Execution Order

| Step | Effort | Dependency |
|------|--------|------------|
| 1. New Introduction Path | 2-3 hours | None |
| 2. Layered Data Structure | 1-2 hours | None |
| 3. Concept Steps | 1 hour | Step 2 |
| 4. Term Tracking | 2 hours | None |
| 5. Reference Preview | 2 hours | Step 2 |
| 6. Depth Selector | 1 hour | Step 2 |
| 7. Rewrite Core Sutras | 4-6 hours | Step 2 |
| 8. Reading Fluency Track | 4-6 hours | Steps 1-7 |

**Total estimated effort:** 18-24 hours of focused work

---

## Success Criteria

1. A complete beginner can finish the Introduction path without external help
2. Each sutra makes sense at the "simple" level without prior knowledge
3. Forward references don't break comprehension flow
4. Learners can read simple Sanskrit sentences after the Reading Fluency track

---

## Let's Begin

Start with **Step 1: New Introduction Path Structure**. This is pure content work—no code changes needed. We'll rewrite `00-introduction.md` to teach concepts before rules.

Ready?
