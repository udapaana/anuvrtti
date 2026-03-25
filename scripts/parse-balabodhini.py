#!/usr/bin/env python3
"""
Parse Bālabodhini Part 1 into per-lesson TOML files.

Each lesson TOML has:
  - id, number, title_telugu, title_iast
  - [[vocabulary]]: sanskrit (Telugu script), telugu gloss, iast (empty, fill later), english (empty, fill later)
  - [[sentences]]: number, sanskrit (Telugu script), iast (empty), english (empty)
  - [[exercises]]: number, telugu (translation exercise), english (empty)
  - notes (free text for paradigm tables, grammar explanations, etc.)
"""

import re
import os
import sys

SRC = "/Users/skmnktl/github/udapaana/anuvrtti/raw_data/balabodhini/1/sanskrit_chat_blocks.txt"
OUT = "/Users/skmnktl/github/udapaana/anuvrtti/static/data/balabodhini/lessons"

# Telugu digits → Arabic
TELUGU_DIGITS = str.maketrans("౦౧౨౩౪౫౬౭౮౯", "0123456789")

def normalize_digit(s):
    return s.translate(TELUGU_DIGITS)

def clean(s):
    s = s.replace("&emsp;", " ")
    s = re.sub(r"\s+", " ", s)
    return s.strip()

def toml_string(s):
    """Wrap in triple-quoted TOML string, escaping backslashes."""
    s = s.replace('\\', '\\\\')
    return f'"""{s}"""'

def toml_escape(s):
    """Single-quoted TOML string."""
    s = s.replace('"', '\\"')
    return f'"{s}"'

# ── Parse vocabulary lines ────────────────────────────────────────────────────
# Pattern: sanskrit=telugu  (with optional &emsp; spacing)
# Also handles: sanskrit=telugu, meaning=gloss etc.
VOCAB_RE = re.compile(
    r'([^\s=&,]+)\s*=\s*([^\s&,][^&,]*?)(?=\s{2,}|\s*&emsp;|\s*$)',
)

def parse_vocab_line(line):
    """Parse a vocabulary line like: సః=వాఁడు  కుత్ర=ఎక్కడ?  అస్తి=ఉన్నాఁడు"""
    line = clean(line)
    # Split on multiple spaces (after &emsp; cleanup)
    parts = re.split(r'\s{2,}', line)
    vocab = []
    for part in parts:
        part = part.strip()
        if '=' in part:
            sk, _, te = part.partition('=')
            sk = sk.strip()
            te = te.strip()
            if sk and te:
                vocab.append((sk, te))
    return vocab

# ── Parse numbered sentence lines ────────────────────────────────────────────
# Pattern: ౧ sentence ౨ sentence ...  or  1 sentence 2 sentence
SENT_RE = re.compile(r'[౦-౯0-9]+\s')

def parse_numbered_sentences(text):
    """Split a block of numbered sentences into list of (num, text)."""
    text = normalize_digit(text)
    # Split on number followed by space at start or after punctuation
    parts = re.split(r'(?<![^\s])\s*(\d+)\s+', ' ' + text)
    result = []
    i = 1
    while i < len(parts) - 1:
        num = parts[i].strip()
        content = parts[i+1].strip() if i+1 < len(parts) else ""
        if num.isdigit() and content:
            result.append((int(num), content))
        i += 2
    return result

# ── Detect script ─────────────────────────────────────────────────────────────
def is_telugu(text):
    """True if text contains Telugu script characters."""
    return bool(re.search(r'[\u0C00-\u0C7F]', text))

def is_devanagari(text):
    return bool(re.search(r'[\u0900-\u097F]', text))

def is_sanskrit_telugu(text):
    """Sanskrit written in Telugu script — heuristic: contains virama or common Sanskrit patterns."""
    # Telugu virama: ్, combined consonants
    return is_telugu(text) and bool(re.search(r'[్ాిీుూృేైొోౌం]', text))

# ── Main parser ───────────────────────────────────────────────────────────────

def parse_file(src):
    with open(src, encoding='utf-8') as f:
        raw = f.read()

    # Merge across BLOCK_SEPARATOR (these are just scan artifacts)
    raw = raw.replace('---BLOCK_SEPARATOR---', '\n')

    # Remove page headers like "బా ల బో ధి నీ\n\n౩౪\n" and "ప్ర థ మ భా గః ... ౩\n"
    raw = re.sub(r'బా\s+ల\s+బో\s+ధి\s+నీ\n+[౦-౯0-9]+\n', '\n', raw)
    raw = re.sub(r'ప్ర\s+థ\s+మ\s+భా\s+గః[^\n]+\n', '\n', raw)
    raw = re.sub(r'ప్రథమ భాగః[^\n]+\n', '\n', raw)

    lines = raw.splitlines()

    lessons = []
    current = None
    state = None  # 'vocab', 'sentences', 'exercises', 'notes'

    # Telugu number pattern at line start: ౧. or 1. or ౩౨. etc.
    LESSON_HEADER = re.compile(r'^[౦-౯0-9]+[\.।]\s*([\w\s]+పాఠః)\s*=\s*(.+)$')

    i = 0
    while i < len(lines):
        line = lines[i].strip()
        line_clean = clean(line)

        # ── Lesson header ──
        m = LESSON_HEADER.match(normalize_digit(line_clean))
        if m or (re.match(r'^\d+\.\s+\w+ఃపాఠః', normalize_digit(line_clean))):
            # Save previous
            if current:
                lessons.append(current)
            title_san = m.group(1).strip() if m else "పాఠః"
            title_te = m.group(2).strip() if m else ""
            num_match = re.match(r'^(\d+)', normalize_digit(line_clean))
            num = int(num_match.group(1)) if num_match else len(lessons) + 1
            current = {
                'number': num,
                'title_telugu': title_san,
                'title_te_meaning': title_te,
                'vocabulary': [],
                'sentences': [],
                'exercises': [],
                'notes': []
            }
            state = 'vocab'
            i += 1
            continue

        if current is None:
            i += 1
            continue

        # Skip empty lines
        if not line_clean:
            i += 1
            continue

        # ── Vocabulary lines ── (contain = between Telugu words, no leading digit)
        if state == 'vocab' and '=' in line_clean and not re.match(r'^[0-9]', normalize_digit(line_clean)):
            vocab = parse_vocab_line(line_clean)
            current['vocabulary'].extend(vocab)
            i += 1
            continue

        # ── Sentence block ── (starts with Telugu/Arabic digit)
        norm = normalize_digit(line_clean)
        if re.match(r'^[0-9]', norm) and is_telugu(line_clean):
            # Collect continuation lines until blank or new section
            block = line_clean
            j = i + 1
            while j < len(lines):
                next_line = clean(lines[j])
                if not next_line:
                    break
                norm_next = normalize_digit(next_line)
                # Stop at lesson header
                if LESSON_HEADER.match(norm_next):
                    break
                block += ' ' + next_line
                j += 1

            sents = parse_numbered_sentences(block)
            if sents:
                # Determine if Sanskrit-in-Telugu or Telugu exercise
                # Heuristic: if majority contain Telugu exercise markers or pure Telugu words
                first_text = sents[0][1] if sents else ""
                # Sanskrit in Telugu script tends to have virama (్) and anusvara (ం)
                # Telugu prose tends to have common Telugu morphology endings
                te_prose_markers = ['నున్నాను', 'నున్నావు', 'లేను', 'చేయు', 'వెళ్ళు', 'వచ్చు', 'ఉన్నాను']
                is_te_exercise = any(m in block for m in te_prose_markers)

                if is_te_exercise and state in ('sentences', 'exercises'):
                    for num, text in sents:
                        current['exercises'].append({'number': num, 'telugu': text, 'english': ''})
                    state = 'exercises'
                else:
                    # If we already have sentences, these might be exercises
                    if current['sentences'] and state == 'sentences':
                        for num, text in sents:
                            current['exercises'].append({'number': num, 'telugu': text, 'english': ''})
                        state = 'exercises'
                    else:
                        for num, text in sents:
                            current['sentences'].append({'number': num, 'sanskrit_telugu': text, 'iast': '', 'english': ''})
                        state = 'sentences'
            i = j
            continue

        # ── Notes / paradigm tables / grammar explanations ──
        # Anything that doesn't fit above goes into notes
        current['notes'].append(line_clean)
        i += 1

    if current:
        lessons.append(current)

    return lessons

# ── TOML writer ───────────────────────────────────────────────────────────────

def write_toml(lesson, outdir):
    n = lesson['number']
    fname = os.path.join(outdir, f"lesson-{n:02d}.toml")

    lines = []
    lines.append(f'id = "balabodhini-1-{n:02d}"')
    lines.append(f'source = "balabodhini"')
    lines.append(f'part = 1')
    lines.append(f'number = {n}')
    lines.append(f'title_telugu = {toml_escape(lesson["title_telugu"])}')
    lines.append(f'title_te_meaning = {toml_escape(lesson["title_te_meaning"])}')
    lines.append(f'title_iast = ""  # fill manually')
    lines.append(f'title_english = ""  # fill manually')
    lines.append('')

    for v in lesson['vocabulary']:
        lines.append('[[vocabulary]]')
        lines.append(f'sanskrit_telugu = {toml_escape(v[0])}')
        lines.append(f'telugu_gloss = {toml_escape(v[1])}')
        lines.append(f'iast = ""  # fill')
        lines.append(f'english = ""  # fill')
        lines.append('')

    for s in lesson['sentences']:
        lines.append('[[sentences]]')
        lines.append(f'number = {s["number"]}')
        lines.append(f'sanskrit_telugu = {toml_escape(s["sanskrit_telugu"])}')
        lines.append(f'iast = ""  # fill')
        lines.append(f'english = ""  # fill')
        lines.append('')

    for e in lesson['exercises']:
        lines.append('[[exercises]]')
        lines.append(f'number = {e["number"]}')
        lines.append(f'telugu = {toml_escape(e["telugu"])}')
        lines.append(f'english = ""  # fill')
        lines.append('')

    notes = [n for n in lesson['notes'] if n.strip()]
    if notes:
        notes_text = '\n'.join(notes)
        lines.append(f'notes = {toml_string(notes_text)}')
        lines.append('')

    with open(fname, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

    return fname

# ── Run ───────────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    lessons = parse_file(SRC)
    os.makedirs(OUT, exist_ok=True)

    for lesson in lessons:
        fname = write_toml(lesson, OUT)
        n_vocab = len(lesson['vocabulary'])
        n_sent = len(lesson['sentences'])
        n_ex = len(lesson['exercises'])
        print(f"Lesson {lesson['number']:2d}: {n_vocab} vocab, {n_sent} sentences, {n_ex} exercises → {os.path.basename(fname)}")

    print(f"\nTotal: {len(lessons)} lessons")
