#!/usr/bin/env python3
"""Check and update Stage 2 augmentation status for Balabodhini Vol 2 lessons."""
import tomllib, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LESSONS_DIR = os.path.join(ROOT, "raw_data/balabodhini/2/lessons")
STATUS_FILE = os.path.join(ROOT, "raw_data/balabodhini/2/AUGMENT_STATUS.md")

rows = []
for f in sorted(os.listdir(LESSONS_DIR)):
    if not f.endswith(".toml"):
        continue
    fpath = os.path.join(LESSONS_DIR, f)
    with open(fpath, "rb") as fh:
        data = tomllib.load(fh)

    vocab_done = True
    for s in data.get("sections", []):
        if s["type"] == "vocabulary":
            for item in s.get("items", []):
                for w in item.get("words", []):
                    if "iast" not in w:
                        vocab_done = False

    passage_done = True
    for s in data.get("sections", []):
        if s["type"] == "passage":
            for i in s.get("items", []):
                if not i.get("english", "").strip():
                    passage_done = False

    num = f.replace("lesson-", "").replace(".toml", "")
    status = "✅ done" if (vocab_done and passage_done) else "⬜ todo"
    rows.append((num, status, "✅" if vocab_done else "❌", "✅" if passage_done else "❌"))

lines = [
    "# Bālabodhini Vol 2 — Stage 2 Augmentation Status\n",
    "\n",
    "Each lesson needs:\n",
    "- `iast` field on every vocabulary word\n",
    "- `english` field on every `passage` item\n",
    "\n",
    "Run `python3 scripts/check-aug-status.py` to regenerate this file.\n",
    "\n",
    "| Lesson | Status   | vocab_iast | passage_en |\n",
    "|--------|----------|-----------|------------|\n",
]
for num, status, v, p in rows:
    lines.append(f"| {num}     | {status}  | {v}        | {p}         |\n")

with open(STATUS_FILE, "w") as fh:
    fh.writelines(lines)

done = sum(1 for _, s, _, _ in rows if "done" in s)
print(f"Updated {STATUS_FILE}: {done}/{len(rows)} lessons done")
for num, status, v, p in rows:
    if "todo" in status:
        print(f"  lesson-{num}: vocab={v} passage={p}")
