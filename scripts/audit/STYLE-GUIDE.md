# Commentary Style Guide

## Tier Definitions

Each tier serves a different audience and purpose. Length is not a goal — clarity, depth, and audience-appropriateness are.

### Simple — "Make me understand this rule"

**Goal**: Understanding. A reader with no Sanskrit grammar background should walk away knowing what this rule does and why it matters.

- Explain the rule's effect in plain English
- Use analogy or comparison to familiar language patterns where it helps
- Gloss every Sanskrit term in parentheses on first use
- Show the effect on a real word — input → output, with meaning
- Explain *why* this rule exists: what would go wrong without it, or what it enables
- May be longer than standard — accessibility requires more words, not fewer
- Avoid: sūtra-internal word analysis, pratyāhāra notation, assuming familiarity with grammatical categories
- **Tone**: Clear and direct, never condescending. Respect the reader's intelligence — accessible does not mean patronizing. Avoid hand-holdy phrases like "Think of it as..." or "In simple terms..."

**Audience**: A curious person encountering Pāṇinian grammar for the first time.

### Standard — "Show me how this rule works"

**Goal**: Precision. The working reference for someone actively studying the Aṣṭādhyāyī.

- Analyze the key words of the sūtra technically
- Identify the rule type (saṃjñā, vidhi, paribhāṣā, adhikāra, atideśa, etc.)
- Show 2–3 worked examples with derivational steps
- Note the rule's scope and any restrictions
- Use technical vocabulary freely (with `@deva[]` / `@[]` markup)
- Be precise and concise — the audience knows the terminology

**Audience**: A student working through the grammar with a teacher or textbook.

### Advanced — "Show me how this rule fits into the system"

**Goal**: System awareness. How this rule interacts with the rest of the Aṣṭādhyāyī.

- State the anuvṛtti chain (what carries forward from prior sūtras)
- Discuss paribhāṣā interactions and metarule implications
- Note exceptions, edge cases, vārttika-level refinements
- Cross-reference related sūtras via `@ref[]`
- Explain where in a derivation (prakriyā) this rule typically fires
- Discuss ordering conflicts (if any) — what happens when multiple rules compete
- May include commentarial tradition notes (Kāśikā, Siddhānta Kaumudī perspectives)
- Must add genuine depth beyond standard — not a compressed restatement

**Audience**: Someone studying the grammar as a formal system.

---

## Examples

Examples are how students learn. Each tier uses examples differently.

### Simple — examples make the rule real
- At least one example showing input → output with English meaning
- The example should be a common, recognizable word — not an obscure form
- Show *what changed* and *what it means*: `@deva[नी]` "to lead" → `@deva[नैषीत्]` "he led"
- The example *is* the explanation for many learners — they understand the rule through the example before they understand the description

### Standard — examples demonstrate the mechanics
- 2–3 examples showing derivational steps (root + affix → intermediate → final form)
- Choose examples that show the rule's range: different root classes, different vowel grades, different voice/number
- Include the technical breakdown: which affix, which substitution, which prior rule applied

### Advanced — examples reveal edges and interactions
- The interesting examples are the *surprising* ones:
  - Where the rule *should* apply but doesn't (blocked by a more specific rule or paribhāṣā)
  - Where it applies *unexpectedly* (an exception to the exception)
  - Where two rules compete and ordering determines the outcome
- These examples teach how the system behaves at its boundaries
- Include @ref[] links to the competing/blocking rules

---

## Markup Checklist (all tiers)

These apply mechanically to every tier of every sūtra.

### Devanagari
- [ ] All Devanagari text wrapped in `@deva[...]`
- [ ] No raw Devanagari characters outside markup tags

### IAST / ISO transliteration
- [ ] All transliterated Sanskrit words wrapped in `@[...]`
- [ ] Always lowercase — no capitals in IAST (e.g. `@[vṛddhi]` not `@[Vṛddhi]`)
- [ ] Proper names also lowercase and wrapped (e.g. `@[pāṇini]`)

### Sūtra references
- [ ] All sūtra numbers wrapped in `@ref[X.Y.Z]`
- [ ] No bare references like "see 1.1.1" or "by 6.1.77"

### Other markup
- [ ] Sanskrit-origin technical terms in Roman wrapped in `@[...]`
- [ ] No unclosed tags — every `@tag[` has a matching `]`
- [ ] No nested markup — `@deva[@ref[1.1.1]]` is invalid

---

## Content Checklist

### Simple tier
- [ ] States the rule's effect so a non-specialist understands
- [ ] Glosses every Sanskrit term on first use
- [ ] Includes at least one concrete example (input → output with meaning)
- [ ] Explains why this rule matters or what it enables
- [ ] Does NOT assume familiarity with grammatical categories or pratyāhāras
- [ ] Does NOT do sūtra-internal word-by-word breakdown

### Standard tier
- [ ] Analyzes the sūtra's key words technically
- [ ] Identifies the rule type where relevant
- [ ] Includes 2–3 worked examples with forms
- [ ] Notes scope or restrictions
- [ ] Clearly distinct from simple (technical analysis, not just more words)

### Advanced tier
- [ ] States the anuvṛtti (what carries in from prior rules)
- [ ] Discusses paribhāṣā or metarule interactions
- [ ] Notes exceptions, edge cases, or vārttika points
- [ ] Cross-references related sūtras via `@ref[]` (at least one)
- [ ] Explains derivational context or rule ordering
- [ ] Clearly adds depth beyond standard (system-level, not a restatement)

---

## Anti-patterns

- **Compressed advanced**: advanced tier that's just standard with fewer words → rewrite with system-level analysis, anuvṛtti, paribhāṣā
- **Translation-only simple**: simple tier that translates the sūtra but doesn't explain it → add context, analogy, why-it-matters
- **Identical tiers**: simple ≡ standard or standard ≡ advanced → differentiate by audience and purpose
- **Jargon in simple**: Sanskrit terms without gloss in simple tier → add parenthetical English
- **Missing examples**: any tier without a concrete form → add at least one
- **Raw script**: Devanagari or IAST outside markup tags → wrap in `@deva[]` or `@[]`
- **Bare references**: sūtra numbers not in `@ref[]` → wrap
