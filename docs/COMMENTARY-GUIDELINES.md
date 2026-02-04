# Commentary Guidelines

## Overview

The app provides three levels of explanation for each sūtra, stored in `static/data/layered_commentary.json`. All levels must be **accurate to Vasu's original translation** (`static/data/vasu_english.json`) for facts, examples, and technical content - but rewritten in clear, direct prose following William Zinsser's principles: clarity, brevity, and directness. No Victorian flourishes.

**Reference Vasu for**: accuracy, examples, technical details, edge cases
**Do not preserve**: Vasu's verbose Victorian style

---

## The Three Levels

| Level        | Audience               | Definition Frequency                    | Cross-references         | Edge Cases             |
| ------------ | ---------------------- | --------------------------------------- | ------------------------ | ---------------------- |
| **Simple**   | Complete beginners     | Define every technical term inline      | Few or none              | Omit                   |
| **Standard** | Some Sanskrit exposure | Define less common terms; assume basics | Occasional, when helpful | Mention only if common |
| **Advanced** | Grammar students       | Minimal definitions; assume familiarity | Thorough                 | Comprehensive          |

---

## What Stays Constant Across All Levels

### 1. Sanskrit Terminology

Always use the proper Sanskrit grammatical terms. Do not substitute English-only equivalents.

- **Yes**: "@deva[वृद्धि] (strengthening)" at simple level
- **No**: "strengthening" without the Sanskrit term

### 2. Proper Tagging

All Sanskrit text must be tagged so the transliteration toggle works:

- `@deva[वृद्धि]` — Devanagari text
- `@[vṛddhi]` — IAST transliteration (when writing in Roman)
- `@ref[1.1.1]` — Sūtra cross-references

**Never leave Sanskrit untagged.** The toggle must work at every level.

### 3. Examples

Examples are valuable at all levels. A clear example often teaches better than a longer explanation.

### 4. Accuracy to Vasu

All explanations must be faithful to Vasu's original translation. The levels differ in presentation, not interpretation.

---

## What Varies By Level

### Simple

**Audience**: Someone with no Sanskrit grammar background.

**Approach**:

- Define every technical term on first use
- Keep explanations clear but not artificially short
- Include examples
- Avoid cross-references to other sūtras (reader doesn't have context yet)
- Omit edge cases and exceptions

**Example** (1.1.1):

```
The vowels @deva[आ], @deva[ऐ], and @deva[औ] are called @deva[वृद्धि] (strengthening). These are the "strong" grade of vowels. When a grammar rule says to apply @deva[वृद्धि], you replace a simple vowel with one of these.

Example: @deva[नी] (to lead) → @deva[नाय] in certain forms.
```

### Standard

**Audience**: Someone learning Sanskrit grammar, familiar with basic concepts like svara/vyañjana, the idea of grammatical operations.

**Approach**:

- Define less common terms; assume reader knows basics
- Include examples
- Add cross-references when they illuminate the rule
- Mention common exceptions

**Example** (1.1.1):

```
The vowels @deva[आ], @deva[ऐ], and @deva[औ] are termed @deva[वृद्धि]. The @deva[प्रत्याहार] @deva[ऐच्] denotes @deva[ऐ] and @deva[औ]; combined with @deva[आ] (written as @deva[आत्] with indicatory @deva[त्]), these three form the @deva[वृद्धि] set.

Example: @deva[कृ] + @deva[णिच्] → @deva[कारि] (the @deva[ऋ] strengthens to @deva[आर्]).

The @deva[त्] in @deva[आत्] restricts this to the two-@deva[मात्रा] @deva[आ], excluding @deva[प्लुत] forms (see @ref[1.1.70]).
```

### Advanced

**Audience**: Grammar students working through the Aṣṭādhyāyī, familiar with the metalanguage.

**Approach**:

- Minimal definitions (jargon lookup provides backup)
- Thorough cross-references
- Include all exceptions and edge cases
- Note vārtikas where relevant
- Technical precision is paramount

**Example** (1.1.1):

```
This @deva[संज्ञासूत्र] defines @deva[वृद्धि] as @deva[आ], @deva[ऐ], and @deva[औ].

@deva[आत्]: The @deva[त्] is @deva[इत्] by @ref[1.3.3], indicating by @ref[1.1.70] that only the two-@deva[मात्रा] @deva[आ] qualifies, not @deva[प्लुत].

@deva[ऐच्]: @deva[प्रत्याहार] spanning @deva[ऐ] and @deva[औ] from @deva[ऐ औ च्] in the @deva[माहेश्वरसूत्राणि].

The term applies in rules such as:
- @ref[7.2.1] @deva[सिचि वृद्धिः परस्मैपदेषु]
- @ref[7.2.114] @deva[मृजेर् वृद्धिः]
- @ref[7.2.115] @deva[अचो ञ्णिति]

@note[type=vārtika]: @deva[वृद्धिशब्द औपचारिकः] — the term is conventional, not etymologically derived.
```

---

## Jargon System Integration

Technical terms are linked to the jargon lookup system. This provides a safety net: even if a term isn't defined inline, users can look it up. However:

- **Simple**: Still define terms inline. Don't rely on jargon lookup as primary explanation.
- **Standard**: Can assume basics, but still define specialized terms.
- **Advanced**: Can rely on jargon lookup for all definitions.

---

## Markup Reference

### Sanskrit Text

```
@deva[देवनागरी]     — Devanagari script
@[saṃskṛtam]        — IAST transliteration
```

### Cross-references

```
@ref[1.1.1]          — Links to sūtra page, shows preview on hover
```

### Formatting

```
**bold text**        — Emphasis
| table | format |   — Tables (markdown)
- list item          — Bullet lists
```

### Notes

```
@note[type=vārtika]{...}     — Vārtika note
@note[type=exception]{...}   — Exception note
@note[type=observation]{...} — General observation
```

---

## Quality Checklist

Before committing commentary changes:

- [ ] All Sanskrit text is tagged (`@deva[]` or `@[]`)
- [ ] Cross-references use `@ref[]` format
- [ ] Content is accurate to Vasu's original
- [ ] Simple level defines all terms
- [ ] Standard level defines non-basic terms
- [ ] Advanced level has thorough cross-references
- [ ] Examples are present at all levels where helpful
- [ ] No untagged Sanskrit that would break transliteration toggle

---

## Rewrite Progress

Tracking which pādas have had their simple/standard commentary rewritten following these guidelines.

| Pāda | Sūtras        | Status      | Notes                                                                                                |
| ---- | ------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| 1.1  | 1.1.1–1.1.75  | Complete    |                                                                                                      |
| 1.2  | 1.2.1–1.2.73  | Complete    |                                                                                                      |
| 1.3  | 1.3.1–1.3.93  | Complete    |                                                                                                      |
| 1.4  | 1.4.1–1.4.110 | Complete    |                                                                                                      |
| 2.1  | 2.1.1–2.1.72  | Complete    |                                                                                                      |
| 2.2  | 2.2.1–2.2.38  | Complete    |                                                                                                      |
| 2.3  | 2.3.1–2.3.73  | Complete    | Vibhakti usage rules                                                                                 |
| 2.4  | 2.4.1–2.4.85  | Complete    | Compound rules (1-31), dhātu substitutions (32-57), gotra/yuvan luk (58-70), śap/ślu/sic luk (71-85) |
| 3.1  | 3.1.1–3.1.150 | Complete    | Affix introduction and pratyaya rules                                                                |
| 3.2  | 3.2.1–3.2.188 | Complete    | Upapada compounds and kṛt affixes                                                                    |
| 3.3  | 3.3.1–3.3.176 | Complete    | Kṛt affixes (bhāva/karman), lakāras                                                                  |
| 3.4  | 3.4.1–3.4.117 | Complete    | Tiṅ-pratyaya, āśīrliṅ, liṅ ādeśa                                                                     |
| 4.1  | 4.1.1–4.1.178 | In progress | Strī-pratyaya (feminine affixes), ṅīp/ṭāp/ḍāp                                                        |

### 3.2 Detailed Progress

| Sūtra Range     | Status   | Notes             |
| --------------- | -------- | ----------------- |
| 3.2.1–3.2.32    | Complete |                   |
| 3.2.33–3.2.47   | Complete |                   |
| 3.2.48–3.2.62   | Complete |                   |
| 3.2.63–3.2.77   | Complete |                   |
| 3.2.78–3.2.92   | Complete |                   |
| 3.2.93–3.2.107  | Complete |                   |
| 3.2.108–3.2.122 | Complete |                   |
| 3.2.123–3.2.137 | Complete |                   |
| 3.2.138–3.2.152 | Complete |                   |
| 3.2.153–3.2.167 | Complete |                   |
| 3.2.168–3.2.182 | Complete |                   |
| 3.2.183–3.2.188 | Complete | Pāda 3.2 finished |
