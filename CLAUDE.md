# anuvrtti

SvelteKit app for learning Pāṇini's Aṣṭādhyāyī. Deploys to
anuvrtti.udapaana.in on every push to `main` — there is no staging gate, so
verify `npm run build` locally before pushing.

## Runtime

**Bun**, not npm, for scripts — it runs TypeScript natively. `npm ci` still
installs deps; the build scripts are `bun scripts/*.ts`.

## Working on the graded reader

Read **`docs/AUTHORING.md` first.** It carries the constraints, the coverage
method, and the register rules that four separate passes had to fix.

The one command:

```bash
bun run check
```

Edit `content/readings/*.yaml`, never `static/data/readings.json` — that is
generated. `bun run build:readings` after every edit.

## The grammar, as prose

Two hand-edited books, both TOML, both read by a thin `.ts` that only types
them. Edit the TOML, never the module:

- `static/data/jargon.toml` — 1429 terms, the glossary notes
- `static/data/systems.toml` — the systems (तिङन्त, सुबन्त, कारक, समास,
  तद्धित, कृत्): each one's axes, its values, and a one-line gloss apiece

Every tag in `systems.toml` is joined to `src/lib/usage/schema.ts` by exact
string match — that is how a word in the reader lights its own cell. A typo
unlights it silently rather than raising, so `bun run check` verifies them
(`bun run systems` on its own).

## Other surfaces

- `/reader` — the graded reader (`src/routes/reader/+page.svelte`)
- `/balabodhini` — the primer, from `static/data/balabodhini/`
- `/ref/[id]` — per-sūtra commentary, three tiers, all 3983
- `src/lib/prakriya.ts` — vidyut-prakriya WASM wrapper. `sanadi` and
  `prefixes` are **required** despite reading as optional; omitting them traps
  the module with a bare "unreachable" and no message.
