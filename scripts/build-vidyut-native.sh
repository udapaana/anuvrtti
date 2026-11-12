#!/usr/bin/env bash
# build-vidyut-native.sh — the segmenter and lexicon, native, at the pin CI uses.
#
# vidyut-cheda (saṃhitā → padas) and vidyut-kosha (form → lemma + analysis) are
# build-time tools for scripts/analyze-text.ts: whole texts annotated by the
# engine instead of by hand. They never reach the browser, so they are built
# natively with cargo, not wasm-pack, and linked from scripts/vidyut-native/ —
# a ~150-line CLI speaking JSON lines on stdin/stdout.
#
# Same revision as build-wasm.sh: VIDYUT_REV in .github/workflows/deploy.yml.
#
#   ./scripts/build-vidyut-native.sh          build at the pinned rev
#   ./scripts/build-vidyut-native.sh <sha>    build at another rev
#
# Data. cheda and kosha need vidyut's trained model and its 78 MB kosha
# (padas.fst + registry.msgpack). Building those from scratch needs the DCS
# corpus and hours (vidyut-data/Makefile, `make create_all_data`); vidyut
# publishes the same artefacts as a release asset, which is what this fetches:
#
#   https://github.com/ambuda-org/vidyut/releases/download/py-0.4.0/data-0.4.0.zip
#   sha256 5269cda86451a75dbc93b605f6864bb5a52cc79d66da02f18f30cf87d0059ecb
#
# It is the URL the Python bindings at VIDYUT_REV themselves download
# (bindings-python/vidyut/__init__.py), and vidyut-kosha / vidyut-cheda have
# no commits after that data release, so the on-disk formats match the pin.
#
# Output (a fetched + compiled cache, git-ignored like data/texts/): data/vidyut/{bin/anuvrtti-cheda,data/}
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKFLOW="$ROOT/.github/workflows/deploy.yml"
OUT="$ROOT/data/vidyut"
DATA_URL="https://github.com/ambuda-org/vidyut/releases/download/py-0.4.0/data-0.4.0.zip"
DATA_SHA="5269cda86451a75dbc93b605f6864bb5a52cc79d66da02f18f30cf87d0059ecb"

REV="${1:-$(grep -oP 'VIDYUT_REV:\s*\K[0-9a-f]+' "$WORKFLOW" | head -1)}"
[ -n "$REV" ] || { echo "Could not read VIDYUT_REV from $WORKFLOW" >&2; exit 1; }

SRC="${VIDYUT_SRC:-/tmp/vidyut-build}"
echo "→ vidyut @ $REV (native)"
if [ ! -d "$SRC/.git" ]; then
  git clone https://github.com/ambuda-org/vidyut.git "$SRC"
fi
git -C "$SRC" fetch --quiet origin || true
git -C "$SRC" checkout --quiet "$REV"

mkdir -p "$OUT/bin" "$OUT/crate/src"
sed "s|@VIDYUT@|$SRC|g" "$ROOT/scripts/vidyut-native/Cargo.toml.in" > "$OUT/crate/Cargo.toml"
cp "$ROOT/scripts/vidyut-native/src/main.rs" "$OUT/crate/src/main.rs"
cp "$SRC/Cargo.lock" "$OUT/crate/Cargo.lock" 2>/dev/null || true

# Two binaries. anuvrtti-cheda-pinned is VIDYUT_REV exactly. anuvrtti-cheda
# (the one analyze-text.ts uses) adds scripts/vidyut-native/patches/ on top:
# at this rev cheda's scoring maps every non-avyaya subanta to the Avyaya state
# and every avyaya to a Subanta state (an inverted `if` in scoring.rs, `From<&
# Option<PadaEntry>> for State`), so its lemma model never fires for nouns and
# it segments वने as वन + इ. One character fixes it; the eval measures both.
# The patch belongs upstream; drop it here once VIDYUT_REV includes the fix.
build() {
  ( cd "$OUT/crate" && cargo build --release --quiet )
  cp "$OUT/crate/target/release/anuvrtti-cheda" "$OUT/bin/$1"
}
build anuvrtti-cheda-pinned
trap 'git -C "$SRC" checkout --quiet -- .' EXIT
for p in "$ROOT"/scripts/vidyut-native/patches/*.patch; do git -C "$SRC" apply "$p"; done
build anuvrtti-cheda
git -C "$SRC" checkout --quiet -- .
trap - EXIT

if [ ! -f "$OUT/data/kosha/padas.fst" ]; then
  ZIP="$OUT/data-0.4.0.zip"
  [ -f "$ZIP" ] || curl -sSfL -o "$ZIP" "$DATA_URL"
  echo "$DATA_SHA  $ZIP" | sha256sum -c --quiet
  rm -rf "$OUT/data" && mkdir -p "$OUT/data"
  unzip -q "$ZIP" -d "$OUT/data"
fi

echo "✓ $OUT/bin/anuvrtti-cheda (+ -pinned), data in $OUT/data"
