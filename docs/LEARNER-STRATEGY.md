# Anuvrtti: Learner-First Strategy

*Last updated: 2026-03*

## The Core Problem

The Ashtadhyayi is a compression algorithm, not a textbook. Panini wrote for students who already had a guru. We have 3983 sūtras, excellent infrastructure, and 50 learning paths — but most grammar paths are thin wrappers around sūtra citations. A learner who opens the present tense path gets 10 sūtra numbers with one-line descriptions. That is a reference, not a lesson.

**The gap is almost entirely content quality in the grammar track, not technology.**

## What We Actually Have (Honest Audit, 2026-03)

### Infrastructure: solid and underused
- 50 learning paths (30 grammar + 20 reading track)
- Path parser supports: sutra steps, concept steps, reading steps, quiz steps
- Markup system: `@deva[]`, `@ref[]`, `@prakriya[]`, `@sutra[]` — all work
- Three-tier layered commentary (simple/standard/advanced) for all 3983 sūtras
- Prakriya WASM engine, pratyahara viewer, jargon lookup

### Reading track: decent foundation, needs quizzes and more practice sentences

The 20 reading paths use real Sanskrit texts (Pañcatantra, Meghadūta, subhāṣitas). The pattern is good:
- Concept steps explain the grammar
- Reading steps give glossed source text
- Summary steps close each lesson

What's missing: **quiz steps** in every path, and the practice paths (03, 06, 09, 11, 15, 17) could each use 2–3 more reading passages with progressively less hand-holding.

### Grammar track: mostly thin

| Quality | Grammar paths (30 total) |
|---------|--------------------------|
| Rich | 1 — introduction (00) |
| Medium | ~8 — sandhi (27-29), karaka (25), samasa (26), dhatu ganas (05), lit (08), kta/ktavatu (15) |
| Thin | ~21 — most tinganta (01-04, 06-07, 09-11), all taddhita (17-19), most subanta (22-24), most kridanta (12-14, 16) |

**Specific problems in grammar paths:**
- Bare sūtra citations with 1–2 line descriptions, no derivation chains
- Zero quiz steps exist despite full parser support
- Zero `@prakriya[]` embedded examples despite engine support
- `tinganta-lat` (01) ends with 6.4.71 (the augment rule for *laṅ/luṅ*) — that rule doesn't belong in a *lat* path at all

## The Strategy

### What does a good grammar path look like?

Take `tinganta-lat` as the exemplar to fix. Currently it is: sūtra, one line, next sūtra. It should be:

```
[concept step] What is a lakāra?
  - Sanskrit has 10 "tense/mood markers" called lakāras
  - लट् is for present action: "he cooks", "she goes"
  - The lakāra is replaced by personal endings — लट् is never pronounced

[sutra step] 3.2.123 — लट् for present action
  - Rule: Use लट् for an action that is begun but not finished
  - Example: पचति = "he is cooking"
  - Compare: पचेत् (optative) vs पचति (present) — different mood, different meaning

[concept step] The 18 personal endings
  - Table of tip/tas/jhi... with English glosses
  - Parasmaipada vs Ātmanepada split

[sutra step] 3.4.78 — The 18 tiṅ endings
  - These replace the lakāra (by 3.4.77)
  - [embed the full table here, not just the sūtra text]

[sutra step] 3.1.68 — śap vikaraṇa
  - For bhvādi verbs, insert अ between root and ending
  - Derivation: भू + शप् + ति → भ् + अ + ति → भवति (with guna by 7.3.84)
  - This अ is what makes "bhavati" not "bhūti"

[sutra step] 7.3.84 — guṇa before sārvadhātuka
  - The final vowel of the stem strengthens: इ→ए, उ→ओ, ऋ→अर्
  - Example: नी + अ + ति → ने + अ + ति → नयति

[quiz] Identify these forms: भवति, पचतः, गच्छन्ति, पठामि, वदसि
[quiz] What is the vikaraṇa of भू? of दिव्? of सु?
[quiz] Derive पठति step by step
```

This is what every grammar path should look like.

### Priority 1: Rewrite the grammar paths with derivations

Work through paths in this order:

**Batch 1 — Tinganta (highest learner demand)**
1. `01-tinganta-lat` — the entry point; must be excellent
2. `03-tinganta-lang` — contrast with lat is the key lesson
3. `02-tinganta-lot` — imperative; common in texts and dialogue

**Batch 2 — Subanta (nouns are used in every sentence)**
4. `21-subanta-a-stems` — the most common noun type
5. `20-subanta-pratipadika` — foundation step before a-stems
6. `24-subanta-consonant-stems` — the irregular ones learners struggle with

**Batch 3 — Kṛdanta (participles are everywhere in prose)**
7. `15-kridanta-kta-ktavatu` — past participle; essential for reading
8. `12-kridanta-ktva` — absolutive ("having done X, then..."); very common

**Batch 4 — Remaining tinganta**
9. `04-tinganta-vidhiling` — optative; needed for understanding rules
10. `08-tinganta-lit` — perfect; common in epics

**Batch 5 — Taddhita + remaining**
- Lowest priority; complex, less common in basic reading

### Priority 2: Add quiz steps to every path

The parser supports quizzes fully. Three quiz types to rotate:
1. **Identify** — given a form, what is it? (recognition)
2. **Produce** — given a stem and context, write the form (production)
3. **Trace** — given a derivation step, which sūtra applies? (rule knowledge)

Target: 3 quiz steps at the end of every grammar path, 2 at the end of every reading path.

### Priority 3: Reading track — add quizzes + fill out practice paths

The reading paths use real texts, which is great. What's missing:
- Quiz steps in every path (check comprehension of the passage)
- Practice paths (03, 06, 09, 11, 15, 17) could each use 1–2 more glossed sentences with less hand-holding as the path progresses
- `reading-20` (final practice) uses Meghadūta, which is quite hard — consider adding an easier intermediate passage before it

### Priority 4: Concept steps before dense sūtra clusters

Any time a path introduces a new mechanism (vikaraṇas, augments, case endings, guṇa), a concept step should precede the first sūtra. This is already done well in `00-introduction.md`. The pattern:

```
[concept] What is this? Plain English + table + 2 examples
[sutra] First rule establishing the thing
[sutra] Main operational rule
[concept] What to notice / how to recognize this in text
[quiz] Check understanding
```

## Content Writing Guidelines

### For every sūtra step

1. **One plain English sentence** — what the rule does, no unexplained jargon
2. **A derivation** — show the input, intermediate steps, and output
3. **Key mechanic** — what the learner should notice and remember
4. **Common words** — 2–3 real Sanskrit words this rule produces

### Derivation format

```
भू + शप् + तिप्
→ भू + अ + ति        (śap inserted: 3.1.68)
→ भो + अ + ति        (guṇa of ū: 7.3.84)
→ भव + अ + ति        (av-substitute: 6.1.78)
→ भवति               (vowel sandhi: 6.1.101)
```

Show intermediate steps. Label each step with the sūtra number. Don't jump from root to final form.

### Style rules

- Concrete before abstract
- Show before tell
- One new idea per step
- Never use a technical term without defining it first in that path (or linking via `@deva[]` to jargon)
- Every sūtra step needs at least one worked example

### Avoid

- Sūtra dumps (5+ sūtras with no worked examples between them)
- Jargon without inline definition
- Citing a sūtra that belongs to a different topic (e.g., the augment rule in the present tense path)
- Concept steps with no examples

## Sequencing: Week-by-Week Plan

**Week 1:** Rewrite `01-tinganta-lat` as the model
**Week 2:** Rewrite `21-subanta-a-stems` + `20-subanta-pratipadika`
**Week 3:** Add quizzes to reading paths 01–06
**Week 4:** Rewrite `03-tinganta-lang`, `02-tinganta-lot`
**Week 5:** Rewrite `15-kridanta-kta-ktavatu`, `12-kridanta-ktva`
**Week 6:** Add quizzes to remaining reading paths + grammar paths done so far
**Week 7+:** Remaining tinganta, subanta, kridanta

## Measuring Success

- A learner who finishes the reading track should parse basic subhāṣita without glosses
- A learner who finishes tinganta-lat should recognize and produce all 9 parasmaipada present forms for any bhvādi verb
- Each grammar path: 30–60 minutes at standard depth
- Each reading path: 20–30 minutes

## Open Questions

1. Should derivations show Devanagari only, or always pair with transliteration?
2. Should practice sentences be constructed (controlled vocabulary) or real texts (authentic but harder)?
3. How strict are prerequisites — block learners from paths or just recommend?

---

*Living document. Update as priorities shift.*
