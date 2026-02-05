# Anuvrtti Plan

Living roadmap. Updated as work progresses.

Last updated: 2026-02-04

---

## Principles

1. **Sanskrit terms first.** Use @deva[धातु], not "root." English glosses belong in the jargon sidebar, not in primary text.
2. **Progressive disclosure.** Simple → Standard → Advanced. Don't overwhelm beginners; don't bore scholars.
3. **The Ashtadhyayi is the scaffold.** Teach grammar through Panini's system, not Western categories imposed on it.
4. **One control, one place.** No duplicate depth selectors, no duplicate navigation.
5. **Mobile-first, desktop-enhanced.** Everything works on a phone. Desktop adds sidebars and keyboard shortcuts.
6. **Accuracy to Vasu.** All commentary is faithful to Vasu's translation for facts and examples, rewritten in clear prose.

---

## Architecture

Two primary modes:

- **/learn** — Structured paths with progress tracking. Depth defaults to Standard.
- **/ref** — Browse/search/detail for sutras. Depth defaults to Advanced.

Supporting tools under /ref: prakriya engine, pratyahara viewer, grammar tables.

### Content format

Paths live in `static/content/paths/[track]/[pathId]/path.md`. YAML frontmatter + markdown body with custom extensions: `@deva[]`, `@ref[]`, `@sutra[]`, `@prakriya[]`, `@pratyahara[]`, `@term[]`. Full spec in PATH-SPEC section below.

### Three commentary levels

Stored in `static/data/layered_commentary.json`. Each sutra has simple/standard/advanced. Guidelines:

| Level    | Audience         | Term definitions                                         | Cross-references | Edge cases       |
| -------- | ---------------- | -------------------------------------------------------- | ---------------- | ---------------- |
| Simple   | Beginners        | Define every term inline (Sanskrit first, English gloss) | Few or none      | Omit             |
| Standard | Some exposure    | Define uncommon terms; assume basics                     | Occasional       | Common ones only |
| Advanced | Grammar students | Minimal definitions; jargon lookup suffices              | Thorough         | Comprehensive    |

All levels: Sanskrit terms tagged with `@deva[]`. Cross-references use `@ref[]`. No untagged Sanskrit.

---

## Status

### What's done

**UX (Phase 1) — Complete:**

- [x] 1A. Return-to-path context (sessionStorage + banner on ref pages)
- [x] 1B. Path completion flow (interstitial with next-path suggestion)
- [x] 1C. Resume learning card on home page
- [x] 1E. Ref-to-learn cross-links ("Learn this in: ..." on sutra detail)
- [x] 1F. Safe prev/next navigation (index-based lookup)
- [x] Unified SutraDisplay component (compact/card/full variants)
- [x] Prerequisite status in learning tree
- [x] B1. Mobile step navigation (collapsible drawer with JargonLookup/Pratyahara)

**Content enrichment (Phase 2A) — Grammar paths complete:**

- [x] All 56 grammar paths enriched to 150+ lines each
- [x] Paradigm tables, concept sections, worked examples, practice exercises
- [x] Total path content: ~10,000 lines across 56 paths

**Commentary rewrite — Through pada 4.1:**

- [x] Padas 1.1–1.4 complete
- [x] Padas 2.1–2.4 complete
- [x] Padas 3.1–3.4 complete
- [x] Pada 4.1 in progress (stri-pratyaya)
- [x] Pada 6.1.1–90 complete

**Ashtadhyayi flow (Phase 3) — Started:**

- [x] 3 prakriya paths (bhavati, ramasya, gacchati)
- [x] 2 pada reading paths (1.1, 1.3) + generation script
- [x] 1 prakarana path (it-samjna)
- [x] Prakriya example entries for ~25 sutras

---

## What's next

Items grouped by category, roughly prioritized within each group.

### A. Terminology & Content Accuracy

Sanskrit grammatical terms must be primary throughout. English glosses are secondary, available via `@term[]` jargon lookup.

#### A1. Terminology audit of all paths

**Problem:** Many paths use English terms as primary ("present tense," "root," "suffix," "vowel," "noun," "first person") instead of Sanskrit (@term[लट्], @term[धातु], @term[प्रत्यय], @term[स्वर], @term[प्रातिपदिक], @term[उत्तम पुरुष]).

**Work:**

- Audit all 56 path files. Replace English-primary usage with Sanskrit-primary + English gloss pattern
- Pattern to follow: "@deva[धातु] (verbal root)" on first mention, then just "@deva[धातु]" or "@term[धातु]"
- The karaka-intro and sandhi-vowel paths are good models — follow their pattern

**Specific terms needing systematic replacement across paths:**

| English (current)        | Sanskrit (should be primary)                           |
| ------------------------ | ------------------------------------------------------ |
| present tense            | @deva[लट्] / @term[वर्तमान]                            |
| past tense / imperfect   | @deva[लङ्] / @term[अनद्यतन भूत]                        |
| future tense             | @deva[लृट्] / @term[भविष्यत्]                          |
| root                     | @deva[धातु] / @term[धातु]                              |
| suffix / affix           | @deva[प्रत्यय] / @term[प्रत्यय]                        |
| vowel                    | @deva[स्वर] / @term[अच्]                               |
| consonant                | @deva[व्यञ्जन] / @term[हल्]                            |
| noun                     | @term[प्रातिपदिक] / @term[सुबन्त]                      |
| verb / verbal form       | @term[तिङन्त] / @term[धातु]                            |
| augment                  | @term[आगम] (e.g., @deva[अट्], @deva[इट्], @deva[नुम्]) |
| first person             | @term[उत्तम पुरुष]                                     |
| second person            | @term[मध्यम पुरुष]                                     |
| third person             | @term[प्रथम पुरुष]                                     |
| singular / dual / plural | @term[एकवचन] / @term[द्विवचन] / @term[बहुवचन]          |
| participle               | @term[कृदन्त] / @term[निष्ठा]                          |
| compound                 | @term[समास]                                            |

#### A2. Add missing jargon entries

The jargon lookup system needs these terms added:

- पुरुष (puruṣa) — grammatical person
- प्रथम पुरुष (prathama puruṣa) — third person (Paninian "first")
- मध्यम पुरुष (madhyama puruṣa) — second person
- उत्तम पुरुष (uttama puruṣa) — first person
- कृदन्त (kṛdanta) — word formed with krt suffix (participle, infinitive, etc.)
- तिङन्त (tiṅanta) — finite verb form
- सुबन्त (subanta) — declined nominal form
- निष्ठा (niṣṭhā) — past participle affixes (kta, ktavatu)
- आगम (āgama) — augment (iṭ, nuṭ, ṭuk, etc.)

#### A3. Commentary rewrite for remaining padas

Padas with placeholder or thin commentary:

| Pada    | Status              | Priority                                         |
| ------- | ------------------- | ------------------------------------------------ |
| 4.1     | In progress         | Continue                                         |
| 4.2–4.4 | Not started         | Medium                                           |
| 5.1–5.4 | Not started         | Medium                                           |
| 6.1.91+ | Not started         | High (sandhi rules)                              |
| 6.2–6.4 | Not started         | High                                             |
| 7.1–7.4 | Placeholder content | **Critical** — 7.3 has identical simple/standard |
| 8.1–8.4 | Not started         | High (tripadi)                                   |

#### A4. Prakriya example diversification

Current 25 examples are clustered: 56% from pada 3, 64% tinanta, heavy bhU-root bias.

**Needed:**

- Pada 2 examples (compound formation rules)
- Pada 5 examples (taddhita)
- More pada 6 examples (sandhi in action)
- Aorist, conditional, benedictive lakara examples
- Diverse roots beyond bhU (gam, pac, kR, nI, dRS, vac, dA, sthA)
- More subanta examples (i-stems, u-stems, consonant stems)

### B. UX & Mobile

#### B2. Inline self-check questions

**Problem:** Paths teach but never test understanding. Passive reading without active recall.

**Fix:** Add a `## quiz` step type to paths. Simple question formats:

- "Which @deva[कारक] is @deva[रामेण] in @deva[रामेण कृतम्]?" (multiple choice)
- "Derive @deva[गच्छति] — what rule produces the @deva[च्छ]?" (short answer with reveal)
- "Identify the @deva[समास] type: @deva[नीलकण्ठः]" (classification)

Start with 2-3 quiz steps per path, at natural checkpoints.

#### B3. Guided sentence analysis

**Problem:** The app teaches rules individually but doesn't show how to analyze a real sentence by applying multiple rules together.

**Fix:** New component or path type: take a sentence like @deva[रामो वनं गच्छति], show each word's derivation, which rules fire, how karakas map to vibhaktis. This bridges the gap between knowing rules and reading text.

### C. New Path Types

#### C1. More prakarana paths

Only it-samjna exists. Build:

- Samjna prakarana (1.1.1–1.1.75) — all technical definitions
- Atmanepada prakarana (1.3.12–1.3.93) — voice assignment
- Karaka prakarana (1.4.23–1.4.55) — semantic roles
- Tripadi (8.2–8.4) — the special final section
- Sandhi prakarana (6.1.1–6.1.158) — the great sandhi section

#### C2. Cross-reference / concept paths

Trace a concept across the entire text:

- "Guna everywhere" — every rule that triggers guna
- "How anuvrtti works" — rule inheritance with examples
- "The life of a pratyaya" — from introduction (3.1.1) through it-deletion (1.3.9) to final form
- "Exceptions and counter-exceptions" — utsarga vs. apavada pattern

#### C3. More prakriya paths

Current 3 (bhavati, ramasya, gacchati). Add:

- kRtvA (absolutive — shows krt suffix derivation)
- babhUva (perfect — shows reduplication chain)
- nayati (present — shows guna + yan sandhi)
- akarot (imperfect — shows augment + secondary endings)
- rAmasya + genitive path already exists; add dative, instrumental

#### C4. More pada reading paths

Current: 1.1 and 1.3. The generation script exists. Generate:

- 1.4 (karaka definitions)
- 3.1 (pratyaya introduction)
- 6.1 (sandhi prakarana)
- 8.2 (start of tripadi)

### D. Content Expansion

#### D1. Reading corpus

Current: ~14 passages across 3 texts. Need 50+.

Sources to add:

- Hitopadesha (graded fables)
- Ramayana Balakanda (narrative)
- Bhagavad Gita chapter 2 (philosophical)
- Kathasaritsagara (stories)
- Niti Shataka (subhasitas)
- More Pancatantra

Each passage needs: padaccheda, word-by-word gloss, translation, grammar notes, sutra references. Organize by difficulty tier 1-5.

#### D2. Vocabulary expansion

Current: 42 words. Need 500+.

Structure: stem, gender, meaning, paradigm class, example sentence, frequency tier. Organize by learning path progression — each path introduces specific vocabulary. High-frequency first: pronouns, common verbs (gam, kR, bhU, as, vac, dRS, sru, dA, sthA, jan), particles, conjunctions.

### E. Polish & Infrastructure

#### E1. Accessibility

- Add `<label>` elements to search box, depth selector, script toggle
- Fix heading hierarchy (some sections skip levels)
- Address `a11y_click_events_have_key_events` suppressions in CommentaryText.svelte
- Add skip-to-content link
- Style focus-visible states

#### E2. Error handling

- Handle missing sutra in @ref[] links gracefully (currently shows broken link)
- Add retry for failed data loads
- Handle localStorage quota exceeded
- Fallback if Shlesha WASM fails to load

#### E3. Tests

Currently zero tests. Add at minimum:

- Path loading and parsing (frontmatter, step extraction)
- Inline markup parsing (@deva, @ref, @sutra, @prakriya)
- Learning progress store (complete/resume)
- Sutra lookup and navigation

---

## Execution Priority

Roughly ordered by impact and dependency:

1. **A1 + A2** — Terminology audit + jargon entries (content accuracy, high impact) _(A2 done)_
2. **A3** — Commentary rewrite for pada 7 (critical quality gap)
3. **C1** — Prakarana paths (unique pedagogical value)
4. **A4** — Prakriya example diversification
5. **B2** — Inline self-check questions
6. **C2** — Concept cross-reference paths
7. **B3** — Guided sentence analysis
8. **C3 + C4** — More prakriya and pada reading paths
9. **D1 + D2** — Reading corpus and vocabulary expansion
10. **A3 continued** — Commentary rewrite for remaining padas
11. **E1–E3** — Accessibility, error handling, tests

---

## Path Specification

### File location

`static/content/paths/[track]/[pathId]/path.md`

### Frontmatter

```yaml
---
id: path-id
order: 1
title: Human Readable Title
titleSanskrit: संस्कृतशीर्षकम्
label: लेबल्
track: grammar | reading
category: foundation | tinganta | subanta | karaka | kridanta | taddhita | sandhi | samasa
description: One-line description
difficulty: beginner | intermediate | advanced
estimatedTime: 2-3 hours
prerequisites:
  - other-path-id
---
```

### Section types

Separated by `---`. Each starts with `## `.

**Concept section:** `## concept - Title`
**Sutra section:** `## 1.1.1 - Title`
**Quiz section:** `## quiz - Title` (planned)

### Inline extensions

| Syntax                              | Renders                                  |
| ----------------------------------- | ---------------------------------------- |
| `@deva[देवनागरी]`                   | Devanagari with transliteration on hover |
| `@[iast]`                           | IAST with Devanagari on hover            |
| `@ref[1.1.1]`                       | Cross-reference link with preview        |
| `@term[word]`                       | Jargon lookup trigger                    |
| `@sutra[1.1.1]`                     | Embedded sutra block                     |
| `@sutra[1.1.1]{depth=simple}`       | With specified depth                     |
| `@prakriya[bhU + laT + tip]`        | Embedded derivation                      |
| `@prakriya[spec]{highlight=7.3.84}` | With rule highlight                      |
| `@pratyahara[ac]`                   | Pratyahara expansion                     |

### Best practices

1. Lead with concepts — explain why before listing rules
2. Sanskrit terms first, English glosses second: "@deva[धातु] (verbal root)"
3. Use `@prakriya` to make rules concrete
4. Use `@ref` to build cross-connections
5. Tables for paradigms and ending grids
6. End sections with practice or examples
7. One main idea per section

---

## Commentary Quality Checklist

Before committing commentary changes:

- [ ] All Sanskrit text tagged (`@deva[]` or `@[]`)
- [ ] Cross-references use `@ref[]`
- [ ] Accurate to Vasu's original
- [ ] Simple level defines all terms (Sanskrit first, English gloss)
- [ ] Standard level defines uncommon terms
- [ ] Advanced level has thorough cross-references
- [ ] Examples present at all levels
- [ ] No untagged Sanskrit
- [ ] Sanskrit grammatical terms are primary, not English equivalents

---

## Commentary Rewrite Progress

| Pada    | Sutras | Status                 |
| ------- | ------ | ---------------------- |
| 1.1     | 1–75   | Complete               |
| 1.2     | 1–73   | Complete               |
| 1.3     | 1–93   | Complete               |
| 1.4     | 1–110  | Complete               |
| 2.1     | 1–72   | Complete               |
| 2.2     | 1–38   | Complete               |
| 2.3     | 1–73   | Complete               |
| 2.4     | 1–85   | Complete               |
| 3.1     | 1–150  | Complete               |
| 3.2     | 1–188  | Complete               |
| 3.3     | 1–176  | Complete               |
| 3.4     | 1–117  | Complete               |
| 4.1     | 1–178  | In progress            |
| 4.2–4.4 |        | Not started            |
| 5.1–5.4 |        | Not started            |
| 6.1     | 1–90   | Complete               |
| 6.1     | 91+    | Not started            |
| 6.2–6.4 |        | Not started            |
| 7.1–7.4 |        | Placeholder (critical) |
| 8.1–8.4 |        | Not started            |
