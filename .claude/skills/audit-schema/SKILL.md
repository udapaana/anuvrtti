---
name: audit-schema
description: The Audit process behind /author — check the annotation schema (src/lib/usage/schema.ts) for correctness and completeness against Sanskrit grammar (Kāle) and the corpus, finding missing word types, incomplete value sets, or mis-modeled dimensions. Reached via /author audit, or directly when a lint finding looks like a real schema gap, when adding a grammatical feature, or to verify the schema still covers the language.
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
  - Grep
  - WebFetch
  - WebSearch
---

# /audit-schema — is the spec itself right?

The lint proves annotations match the *spec*. This skill checks the *spec is
right* — that it has no missing types, no incomplete value sets, no mis-modeled
dimensions. A clean lint over a too-permissive schema is false confidence.

The spec is `src/lib/usage/schema.ts` (the law, what runs) and `docs/WORD-TYPES.md`
(its prose). **When they disagree, the file is what runs** — keep them in sync.

## The three checks

### 1. Against the corpus — what does the schema NOT recognize?

```bash
bun run complete --unknown
```

Every tag here is either commentary (a root name, a sandhi process — fine) or a
**real grammatical feature the schema is missing**. Classify each. A feature tag
that is unknown means a typo OR a schema gap. Confirm it is grammatical (not a
lemma/cite), then add it as a value or a type.

### 2. Against a reference grammar — what whole categories are missing?

The authority is **Kāle's *A Higher Sanskrit Grammar*** — the 988-rule reference
in `static/data/dukrnkarane.json` (surfaced at `/dukrnkarane`). Cross-check
chapter by chapter:

```bash
# list Kāle's chapters
bun -e 'const d=JSON.parse(require("fs").readFileSync("static/data/dukrnkarane.json","utf8")); console.log([...new Set(d.rules.map(r=>r.chapter))].join("\n"))'
# read a chapter's rules / search its body for a feature
bun -e 'const d=JSON.parse(require("fs").readFileSync("static/data/dukrnkarane.json","utf8")); for (const r of d.rules.filter(r=>r.chapter==="Formation of Feminine Bases")) console.log(r.id, r.title)'
```

Map each chapter to a schema type or dimension. A chapter with no home is a gap
(this is how the स्त्रीप्रत्यय feminine affixes and subject-verb concord were
found). A chapter that is genuinely not per-word annotation (Prosody = meter) is
correctly out of scope — say so, do not force it in.

### 3. Reason about each dimension — is it modeled right?

For each type, ask: are the closed value sets complete (all 10+ लकारs, all
कारकas)? Is each dimension `authored`/`derived`/`optional` correctly? Is a
property on the wrong type (does कृदन्त carry प्रयोग — participles have voice)?
Is something a coordinate that should be a relation (agreement, government)?

## Making a change

When you add or fix a value set, type, or dimension:

1. Edit `schema.ts` — a new value set, a `WORD_TYPE`, a dimension, or a
   `RelationKind`. Order matters: markers resolve first-match, so a more-specific
   type (कृदन्त) must be checked before सुबन्त.
2. **Type markers must be UNAMBIGUOUS.** पुरुष is shared by verbs and pronouns, so
   it is not a तिङन्त marker; पद (आत्मनेपद) is verb-exclusive, so it is. A marker
   that collides mis-types words — verify with `typeOf(new Set([...]))`.
3. Update `docs/WORD-TYPES.md` to match — the prose and the file must agree.
4. Rebuild and lint: `bun run build:readings && bun run lint`. A schema change can
   newly flag corpus words (the tag was always there; now the schema checks it).
   Those are real findings — fix them with `/fix-annotations`.
5. Type-check: `npx svelte-check --threshold error`.

## Vedic / accent — the standing answer

Kāle §3 defines the three accents and states they are **"ignored in classical
Sanskrit, marked only in Vedic works"** — with essentially no accent-placement
rules across 988 rules. So `स्वर` is correctly an `optional`, Vedic-only, display
overlay, never a grid axis. Do NOT promote accent to a productive dimension.

And the whole Vedic layer is **frozen** for lack of a verifiable accented +
morph-tagged source (see `docs/AUTHORING.md`). You may add a Vedic *mechanism* to
the schema (लेट् is present), but do not drive authoring of Vedic accents/moods
until such a source exists.

## When done

Report: what gap was found and against what authority (corpus unknown-tags, a
Kāle chapter, or a dimension analysis), what changed in `schema.ts` and
`WORD-TYPES.md`, and that the lint and type-check are clean after. If the audit
found nothing, say the schema is confirmed complete against what you checked, and
name what you checked.
