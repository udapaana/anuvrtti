#!/usr/bin/env bash
# build-wasm.sh — rebuild the grammar engine, at the pin CI uses.
#
# vidyut-prakriya is not a normal dependency. It decides what the corpus MEANS:
# every लिङ्ग, विभक्ति, वचन, पुरुष, पद and गण the reader shows is derived by it,
# and so are the numbers `bun run check` ratchets against. A different engine is
# a different corpus.
#
# It was not pinned, and the two copies had drifted badly apart:
#
#   static/wasm/  committed 21 Aug, and what every local build and every
#                 measurement in this repo actually used
#   CI            `git clone --depth 1` of vidyut HEAD on the day of the deploy,
#                 overwriting the committed copy before `npm run build`
#
# So local and production ran different grammars, and two deploys a week apart
# could differ with nothing in any diff to say so. The August binary predates
# the `nyap` field in vidyut's WASM binding, which is why ā/ī feminine stems
# (सेना, नदी) could not be declined correctly here and appeared to be a
# limitation of vidyut — they are not; the copy was just old.
#
# Both sides now read VIDYUT_REV from .github/workflows/deploy.yml, so there is
# one number and it lives in one place.
#
#   ./scripts/build-wasm.sh          build at the pinned rev
#   ./scripts/build-wasm.sh <sha>    build at another rev (to test a bump)
#
# After a bump: run `bun run check`. If the baselines move, that IS the review —
# an engine change that alters the corpus should be visible as one. Commit the
# rebuilt static/wasm/, the new VIDYUT_REV and any re-recorded baselines
# together, so the reason is legible in one place.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKFLOW="$ROOT/.github/workflows/deploy.yml"
OUT="$ROOT/static/wasm/vidyut-prakriya"

# One source of truth for the revision: the workflow CI reads.
REV="${1:-$(grep -oP 'VIDYUT_REV:\s*\K[0-9a-f]+' "$WORKFLOW" | head -1)}"
if [ -z "$REV" ]; then
  echo "Could not read VIDYUT_REV from $WORKFLOW" >&2
  exit 1
fi

command -v wasm-pack >/dev/null || {
  echo "wasm-pack not found. Install it with:" >&2
  echo "  cargo install wasm-pack" >&2
  echo "or take the prebuilt binary from https://github.com/rustwasm/wasm-pack/releases" >&2
  exit 1
}

SRC="${VIDYUT_SRC:-/tmp/vidyut-build}"
echo "→ vidyut @ $REV"
if [ ! -d "$SRC/.git" ]; then
  git clone https://github.com/ambuda-org/vidyut.git "$SRC"
fi
git -C "$SRC" fetch --quiet origin
git -C "$SRC" checkout --quiet "$REV"

rustup target add wasm32-unknown-unknown >/dev/null 2>&1 || true
( cd "$SRC/vidyut-prakriya" && wasm-pack build --target web --out-dir "$OUT" )

# The wrapper the app imports, and the one-line path fixup CI also applies.
cp "$SRC/vidyut-prakriya/www/static/vidyut-prakriya.js" "$OUT/"
sed -i 's|from "./wasm/vidyut_prakriya.js"|from "./vidyut_prakriya.js"|' "$OUT/vidyut-prakriya.js"

# wasm-pack leaves package metadata that only matters to npm publishing, and
# committing it invites someone to think this directory is a package.
rm -f "$OUT/package.json" "$OUT/.gitignore" "$OUT/README.md" "$OUT/LICENSE"*

echo "✓ $OUT rebuilt at $REV"
echo "  now run: bun run check   (baselines moving IS the review)"
