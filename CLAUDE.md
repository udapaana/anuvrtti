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

## Other surfaces

- `/reader` — the graded reader (`src/routes/reader/+page.svelte`)
- `/balabodhini` — the primer, from `static/data/balabodhini/`
- `/ref/[id]` — per-sūtra commentary, three tiers, all 3983
- `src/lib/prakriya.ts` — vidyut-prakriya WASM wrapper. `sanadi` and
  `prefixes` are **required** despite reading as optional; omitting them traps
  the module with a bare "unreachable" and no message.
