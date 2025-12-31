# Anuvrtti: Learner-First Strategy

## The Problem

The Ashtadhyayi is a compression algorithm, not a textbook. Sutra 1.1.1 references pratyaharas (defined in 1.1.71), indicatory letters (1.3.2-9), and prosodial length (1.1.70). A learner hitting 1.1.1 cold faces:

```
"The vowels आ, ऐ, and औ are called वृद्धि."
     ↓
"What's ऐच् (pratyahara)?" → needs 1.1.71
"What's indicatory त्?" → needs 1.3.2-9
"What's a mātrā?" → assumed knowledge
"Why does this matter?" → needs 7.2.1, etc.
```

The system has **circular dependencies by design**. Panini assumed oral transmission with a guru unpacking meaning incrementally. We have no guru.

## What We Have

### Infrastructure (solid)
- 45 learning paths with prerequisite tracking
- Interactive tree visualization
- Jargon lookup (100+ terms)
- Pratyahara viewer
- Prakriya derivation engine (WASM)
- Progress tracking
- Rich markup system (@deva[], @ref[], @[])

### Content (needs work)
- Learning path commentary is thin
- vasu_rewritten.json assumes expert knowledge
- No "concept" steps that teach without sutras
- No graduated depth levels
- Forward references unexplained

## The Strategy

### 1. Concept-First Learning Paths

**Current approach:** Jump into sutras with brief context
**New approach:** Build concepts before introducing rules

Example for "Introduction" path:

```markdown
## Step 1: What is a vowel grade? (concept)

Sanskrit vowels come in three "grades":

| Grade | इ-series | उ-series | ऋ-series |
|-------|----------|----------|----------|
| Basic | इ/ई | उ/ऊ | ऋ/ॠ |
| Guna | ए | ओ | अर् |
| Vrddhi | ऐ | औ | आर् |

When you derive words, vowels "strengthen":
- उपगु → औपगवः "son of Upagu" (उ → औ)
- अङ्ग → आङ्गः "bodily" (अ → आ)

Now let's see how Panini defines these...

---

## Step 2: 1.1.1 - Vrddhi defined

आ, ऐ, and औ are called वृद्धि.

[Now the sutra makes sense because you understand *why* we need this term]
```

### 2. Layered Commentary Depth

Each sutra should have three depth levels:

```typescript
interface SutraCommentary {
  // Level 0: One sentence, no jargon
  simple: string;

  // Level 1: Full explanation, defines terms inline
  standard: string;

  // Level 2: Technical details, cross-references, exceptions
  advanced: string;
}
```

**Example for 1.1.1:**

```json
{
  "simple": "The long vowels आ, ऐ, and औ are grouped under the name \"vrddhi\" for use in later rules.",

  "standard": "The vowels आ, ऐ, and औ are called वृद्धि (\"strengthening\"). This is a technical label—when later rules say \"apply vrddhi,\" they mean substitute one of these vowels. For example, उपगु → औपगवः (the उ \"strengthens\" to औ).",

  "advanced": "The sūtra has three words: वृद्धिः (the term), आत् (long आ with indicatory त्), and ऐच् (pratyāhāra for ऐ/औ). The indicatory त् in आत् restricts to the two-mātrā form by 1.1.70. The term वृद्धि appears in operational rules like 7.2.1 सिचिवृद्धिपरस्मैपदेषु."
}
```

### 3. Progressive Jargon Introduction

Track which terms a learner has encountered. Show inline definitions on first use, tooltips thereafter.

```typescript
interface LearnerState {
  knownTerms: Set<string>;  // e.g., {"guna", "vrddhi", "pratyahara"}
  currentDepth: "simple" | "standard" | "advanced";
}
```

When rendering commentary:
- If term is unknown → show inline definition + add to knownTerms
- If term is known → show as clickable link to jargon

### 4. Prerequisite Expansion

Current paths list prerequisites by path ID. Add **concept prerequisites**:

```yaml
prerequisites:
  paths:
    - introduction
  concepts:
    - vowel-grades      # Must understand guna/vrddhi
    - pratyahara-basics # Must understand sound groups
```

On path load, check if prerequisite concepts are mastered. If not, offer to cover them first.

### 5. Reference on Demand

Replace forward references with expandable previews:

**Current:**
> By @ref[1.1.70], it restricts vowels to standard length

**New:**
> By 1.1.70 [expand: "A letter with त् before/after refers only to same-length forms"], it restricts vowels to standard length

Implementation: `@ref[1.1.70|preview]` renders with hover/click expansion.

### 6. Example-Driven Learning

Every abstract rule should immediately show a concrete derivation.

**Current:**
> When गुण or वृद्धि is prescribed, it replaces इक्

**New:**
> When गुण or वृद्धि is prescribed, it replaces इक्:
>
> नी + अति → ने + अति → नयति "he leads"
>      ↑
>   इ → ए (guna)
>
> [Interactive: Try with भू, कृ, श्रु]

### 7. Curated "Reading Fluency" Track

The existing 45 paths are comprehensive but overwhelming. Create a focused 10-lesson sequence for reading ability:

1. **Alphabet & Sounds** - varnamala + pratyahara basics
2. **Word Structure** - pratipadika, dhatu, pratyaya
3. **Basic Verb Forms** - lat lakara only, all 10 ganas
4. **Basic Noun Forms** - a-stems, all 7 cases
5. **Vowel Sandhi** - the 5 most common rules
6. **Simple Compounds** - tatpurusha basics
7. **Past & Future** - lang + lrt
8. **Participles** - kta, shatr, shanac
9. **Visarga Sandhi** - completing the sandhi picture
10. **Reading Practice** - actual texts with annotation

Each lesson = 30-45 minutes, practical exercises, immediate application.

## Implementation Priorities

### Phase 1: Foundation (2-3 weeks)
1. Create concept-first introduction path
2. Add layered depth to first 20 sutras (1.1.1-1.1.20)
3. Implement term-tracking for progressive jargon
4. Build reference preview component

### Phase 2: Core Grammar (4-6 weeks)
5. Rewrite verb paths (tinganta) with examples
6. Rewrite noun paths (subanta) with examples
7. Add interactive derivation exercises
8. Create "Reading Fluency" track

### Phase 3: Polish (2-3 weeks)
9. Add prerequisite concept checking
10. Build progress dashboard
11. Create assessment/quiz system
12. Mobile-optimize the interface

## Content Guidelines

### Writing Style
- Active voice, present tense
- One idea per paragraph
- Concrete before abstract
- Always show, then tell

### Structure
```markdown
## [Sutra Number] - [English Title]

[One-sentence summary in plain English]

[Concrete example showing the rule in action]

[Explanation of why this rule exists]

[Technical details for advanced learners - collapsible]

[Related rules - as links]
```

### Avoid
- Assuming knowledge not yet introduced
- Unexpanded technical terms
- Forward references without context
- Abstract explanations without examples
- Walls of text

## Measuring Success

1. **Completion rates** - Do learners finish paths?
2. **Time per step** - Are they stuck or flowing?
3. **Return rate** - Do they come back?
4. **Reading ability** - Can they parse unseen text?

## File Changes Required

### New Files
- `src/lib/learning/concepts/` - Standalone concept explanations
- `src/lib/stores/learner-state.ts` - Track known terms, depth preference
- `src/lib/components/RefPreview.svelte` - Expandable sutra references
- `docs/CONTENT-STYLE-GUIDE.md` - Writing guidelines for contributors

### Modified Files
- `src/lib/data/types.ts` - Add layered commentary types
- `src/lib/learning/pathParser.ts` - Support concept steps
- `src/lib/components/CommentaryText.svelte` - Progressive term handling
- `static/data/vasu_rewritten.json` - Convert to layered format

### Deprecated
- Current vasu_rewritten.json format (migrate to layered)

## Open Questions

1. **Depth toggle:** Per-sutra or global preference?
2. **Assessment:** Quiz after each path or just practice?
3. **Community:** Allow user-contributed examples?
4. **Audio:** Add pronunciation for Sanskrit terms?
5. **Gamification:** Badges, streaks, leaderboards?

---

*This document is a living plan. Update as we learn what works.*
