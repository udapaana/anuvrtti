#!/usr/bin/env python3
"""
Parse Bālabodhini Part 2 into per-lesson TOML files.

Strategy:
  1. Concatenate all vol2_page*.md files in order.
  2. Split on lesson headers (markdown ## or plain-text on page 1).
  3. Within each lesson block, extract vocabulary, sentences, exercises, notes.

Output: static/data/balabodhini/2/structured/lesson-{N:02d}.toml
  Lessons are numbered 39–78 (continuing from Part 1).
"""

import re
import os
import glob

PAGES_DIR = "/Users/skmnktl/github/udapaana/anuvrtti/raw_data/balabodhini/2/pages"
OUT_DIR   = "/Users/skmnktl/github/udapaana/anuvrtti/static/data/balabodhini/2/structured"

# Telugu digits → Arabic
TELUGU_DIGITS = str.maketrans("౦౧౨౩౪౫౬౭౮౯", "0123456789")

def normalize_digit(s):
    return s.translate(TELUGU_DIGITS)

def clean(s):
    s = s.replace("&emsp;", " ")
    s = re.sub(r"\s+", " ", s)
    return s.strip()

def toml_escape(s):
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    return f'"{s}"'

def toml_string(s):
    """Triple-quoted TOML string."""
    s = s.replace('\\', '\\\\')
    return f'"""{s}"""'

# ── Script detection ──────────────────────────────────────────────────────────

def is_telugu(text):
    return bool(re.search(r'[\u0C00-\u0C7F]', text))

# ── Vocabulary parsing ────────────────────────────────────────────────────────

def parse_vocab_line(line):
    """Parse 'word = gloss  word = gloss ...' pairs from a vocabulary line."""
    line = clean(line)
    parts = re.split(r'\s{2,}', line)
    vocab = []
    for part in parts:
        part = part.strip()
        if '=' in part:
            sk, _, te = part.partition('=')
            sk = sk.strip()
            te = te.strip()
            if sk and te and is_telugu(sk + te):
                vocab.append((sk, te))
    return vocab

# ── Numbered sentence parsing ─────────────────────────────────────────────────

def parse_numbered_sentences(text):
    """Split 'N sentence N sentence ...' into list of (int, str)."""
    text = normalize_digit(text)
    parts = re.split(r'(?<![^\s])\s*(\d+)\s+', ' ' + text)
    result = []
    i = 1
    while i < len(parts) - 1:
        num = parts[i].strip()
        content = parts[i + 1].strip() if i + 1 < len(parts) else ""
        if num.isdigit() and content:
            result.append((int(num), content))
        i += 2
    return result

# ── Telugu exercise heuristic ─────────────────────────────────────────────────

TE_PROSE_MARKERS = [
    'నున్నాను', 'నున్నావు', 'లేను', 'చేయు', 'వెళ్ళు', 'వచ్చు', 'ఉన్నాను',
    'అని', 'కాని', 'కాదు', 'పొమ్ము', 'రమ్ము', 'చెప్పు', 'చూడు',
    'ఏమి', 'ఎందుకు', 'ఎక్కడ', 'ఎవరు', 'ఏలా',
]

def is_telugu_exercise(block):
    return any(m in block for m in TE_PROSE_MARKERS)

# ── Lesson header patterns ────────────────────────────────────────────────────

# Matches: ## XxxxxPāṭhaḥ = Telugu meaning
# Also matches plain-text variant on page 1 (no ## prefix)
LESSON_HEADER_MD = re.compile(
    r'^(?:##\s+)?(.+పాఠః)\s*=\s*(.+)$'
)

def try_lesson_header(line):
    """Return (lesson_num, title_sanskrit, title_telugu) or None."""
    line = line.strip()
    # Must contain పాఠః and =
    if 'పాఠః' not in line or '=' not in line:
        return None
    # Strip leading ## if present
    bare = re.sub(r'^#+\s*', '', line)
    m = re.match(r'^(.+పాఠః)\s*=\s*(.+)$', bare)
    if not m:
        return None
    title_san = m.group(1).strip().rstrip('.')
    title_te  = m.group(2).strip().rstrip('.')
    return (title_san, title_te)

# Map Telugu ordinal words → numbers (lessons 39–78)
TELUGU_ORDINALS = {
    'ముప్పదితొమ్మిదవ': 39,
    'నలువదవ': 40,
    'నలువది యొకటవ': 41, 'నలువదియొకటవ': 41,
    'నలువదిరెండవ': 42,
    'నలువదిమూడవ': 43, 'నలువదిమూఁడవ': 43,
    'నలువదినాల్వ': 44, 'నలువదినాల్గవ': 44,
    'నలువదియైదవ': 45,
    'నలువదియాఱివ': 46,
    'నలువదియేడవ': 47,
    'నలువదియెనిమిదవ': 48,
    'నలువదితొమ్మిదవ': 49,
    'ఏఁబదవ': 50, 'ఏబదవ': 50,
    'ఏఁబదియొకటవ': 51, 'ఏంబదియొకటవ': 51,
    'ఏఁబది రెండవ': 52, 'ఏంబది రెండవ': 52, 'ఏఁబదిరెండవ': 52,
    'ఏఁబదిమూఁడవ': 53, 'ఏంబదిమూఁడవ': 53,
    'ఏఁబదినాల్గవ': 54, 'ఏంబదినాల్గవ': 54,
    'ఏఁబదియైదవ': 55, 'ఏంబదియైదవ': 55,
    'ఏంబదియాఱివ': 56, 'ఏఁబదియాఱివ': 56,
    'ఏంబదియేడవ': 57, 'ఏఁబదియేడవ': 57,
    'ఏంబదియెనిమిదవ': 58, 'ఏఁబదియెనిమిదవ': 58,
    'ఏంబదితొమ్మిదవ': 59, 'ఏఁబదితొమ్మిదవ': 59,
    'అఱువదియవ': 60,
    'అఱువదియొకటవ': 61,
    'అఱివదిరెండవ': 62, 'అఱువదిరెండవ': 62,
    'అఱువదిమూఁడవ': 63,
    'అఱువదినాల్గవ': 64,
    'అఱువదియైదవ': 65,
    'అఱువదియాఱివ': 66,
    'అఱువదియేడవ': 67,
    'అఱువదియెనిమిదవ': 68,
    'అఱువదితొమ్మిదవ': 69,
    'డెబ్బదియవ': 70,
    'డెబ్బదియొకటవ': 71,
    'డెబ్బదిరెండవ': 72,
    'డెబ్బదిమూఁడవ': 73,
    'డెబ్బదినాల్గవ': 74,
    'డెబ్బదియైదవ': 75,
    'డెబ్బదియాఱవ': 76,
    'డెబ్బదియేడవ': 77,
    'డెబ్బదియెనిమిదవ': 78,
}

def lesson_number_from_telugu(title_te):
    """Extract lesson number from Telugu ordinal in title."""
    title_te = title_te.strip().rstrip('.')
    for key, val in TELUGU_ORDINALS.items():
        if key in title_te:
            return val
    return None

# ── Main parser ───────────────────────────────────────────────────────────────

def load_all_pages():
    """Concatenate all pages in order, returning list of lines."""
    pages = sorted(glob.glob(os.path.join(PAGES_DIR, "vol2_page*.md")))
    lines = []
    for page in pages:
        with open(page, encoding='utf-8') as f:
            lines.extend(f.read().splitlines())
        lines.append('')  # blank between pages
    return lines

def parse_lessons(lines):
    lessons = []
    current = None
    state = None  # 'vocab', 'sentences', 'exercises', 'notes'

    i = 0
    while i < len(lines):
        line = lines[i]
        line_clean = clean(line)

        # ── Lesson header ──
        header = try_lesson_header(line_clean)
        if header:
            title_san, title_te = header
            num = lesson_number_from_telugu(title_te)
            if num is None:
                # fallback: sequential
                num = (lessons[-1]['number'] + 1) if lessons else 39

            if current:
                lessons.append(current)

            current = {
                'number': num,
                'title_sanskrit': title_san,
                'title_telugu': title_te,
                'vocabulary': [],
                'sentences': [],
                'exercises': [],
                'notes': [],
            }
            state = 'vocab'
            i += 1
            continue

        if current is None:
            i += 1
            continue

        # Skip blank lines
        if not line_clean:
            i += 1
            continue

        # Skip markdown headings that aren't lesson headers (e.g. # బాలబోధినీ)
        if line_clean.startswith('#'):
            i += 1
            continue

        # Skip page-level title lines
        if 'బాలబోధినీ' in line_clean and len(line_clean) < 20:
            i += 1
            continue

        # ── Vocabulary: contains = between Telugu words, no leading digit ──
        # Guard: real vocab lines are short (single word = gloss pairs, possibly
        # with &emsp; separating multiple pairs). Long lines with sentence-level
        # punctuation (।, ?, !, full stops mid-line) are prose, not vocab.
        norm = normalize_digit(line_clean)
        is_prose = (len(line_clean) > 120
                    or bool(re.search(r'[?!।]', line_clean))
                    or line_clean.count('=') > 4)
        if (state in ('vocab', None)
                and '=' in line_clean
                and not re.match(r'^[0-9]', norm)
                and is_telugu(line_clean)
                and not is_prose):
            vocab = parse_vocab_line(line_clean)
            if vocab:
                current['vocabulary'].extend(vocab)
                i += 1
                continue

        # ── Numbered sentence/exercise block ──
        if re.match(r'^[0-9]', normalize_digit(line_clean)) and is_telugu(line_clean):
            # Collect continuation lines until blank
            block = line_clean
            j = i + 1
            while j < len(lines):
                next_line = clean(lines[j])
                if not next_line:
                    break
                if try_lesson_header(next_line):
                    break
                block += ' ' + next_line
                j += 1

            sents = parse_numbered_sentences(block)
            if sents:
                if is_telugu_exercise(block) and state in ('sentences', 'exercises', 'vocab'):
                    for num_s, text in sents:
                        current['exercises'].append({'number': num_s, 'telugu': text, 'english': ''})
                    state = 'exercises'
                elif current['sentences'] and state == 'sentences':
                    # Second numbered block after sentences → exercises
                    for num_s, text in sents:
                        current['exercises'].append({'number': num_s, 'telugu': text, 'english': ''})
                    state = 'exercises'
                else:
                    for num_s, text in sents:
                        current['sentences'].append({'number': num_s, 'sanskrit_telugu': text, 'iast': '', 'english': ''})
                    state = 'sentences'
            i = j
            continue

        # ── Everything else → notes (paradigm tables, grammar, prose passages) ──
        current['notes'].append(line_clean)
        i += 1

    if current:
        lessons.append(current)

    return lessons

# ── TOML writer ───────────────────────────────────────────────────────────────
# Emits [[sections]] format matching vol1, so LessonStep.svelte renders it.

def write_toml(lesson, outdir):
    n = lesson['number']
    fname = os.path.join(outdir, f"lesson-{n:02d}.toml")

    lines = []
    lines.append(f'id = "balabodhini-2-{n:02d}"')
    lines.append(f'source = "balabodhini"')
    lines.append(f'part = 2')
    lines.append(f'number = {n}')
    lines.append(f'title_sanskrit_telugu = {toml_escape(lesson["title_sanskrit"])}')
    lines.append(f'title_telugu = {toml_escape(lesson["title_telugu"])}')
    lines.append(f'title_iast = ""  # fill manually')
    lines.append(f'title_english = ""  # fill manually')
    lines.append('')

    # ── vocabulary section ──
    if lesson['vocabulary']:
        lines.append('[[sections]]')
        lines.append('type = "vocabulary"')
        lines.append('language = "bilingual"')
        lines.append('')
        lines.append('[[sections.items]]')
        words = []
        for (sk, te) in lesson['vocabulary']:
            # Escape inner quotes for inline table
            sk_e = sk.replace('"', '\\"')
            te_e = te.replace('"', '\\"')
            words.append(f'  {{ sanskrit_telugu = "{sk_e}", telugu_gloss = "{te_e}", iast = "", english = "" }}')
        lines.append('words = [')
        for j, w in enumerate(words):
            comma = ',' if j < len(words) - 1 else ''
            lines.append(w + comma)
        lines.append(']')
        lines.append('')

    # ── reading section (numbered Sanskrit sentences) ──
    if lesson['sentences']:
        lines.append('[[sections]]')
        lines.append('type = "reading"')
        lines.append('language = "sanskrit"')
        lines.append('')
        for s in lesson['sentences']:
            lines.append('[[sections.items]]')
            lines.append(f'n = {s["number"]}')
            lines.append(f'sanskrit_telugu = {toml_escape(s["sanskrit_telugu"])}')
            lines.append(f'iast = ""  # fill')
            lines.append(f'english = ""  # fill')
            lines.append(f'telugu = ""  # fill')
            lines.append('')

    # ── passage section (prose from notes — paradigm tables + running text) ──
    notes = [ln for ln in lesson['notes'] if ln.strip()]
    if notes:
        passage_text = '\n'.join(notes)
        lines.append('[[sections]]')
        lines.append('type = "passage"')
        lines.append('language = "bilingual"')
        lines.append('')
        lines.append('[[sections.items]]')
        lines.append(f'sanskrit_telugu = {toml_string(passage_text)}')
        lines.append(f'english = ""  # fill')
        lines.append('')

    # ── exercises section ──
    if lesson['exercises']:
        lines.append('[[sections]]')
        lines.append('type = "exercises"')
        lines.append('language = "telugu"')
        lines.append('')
        for e in lesson['exercises']:
            lines.append('[[sections.items]]')
            lines.append(f'n = {e["number"]}')
            lines.append(f'telugu = {toml_escape(e["telugu"])}')
            lines.append(f'english = ""  # fill')
            lines.append(f'sanskrit_telugu = ""  # fill')
            lines.append('')

    with open(fname, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

    return fname

# ── Run ───────────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    lines = load_all_pages()
    lessons = parse_lessons(lines)

    os.makedirs(OUT_DIR, exist_ok=True)

    for lesson in lessons:
        fname = write_toml(lesson, OUT_DIR)
        n_vocab = len(lesson['vocabulary'])
        n_sent  = len(lesson['sentences'])
        n_ex    = len(lesson['exercises'])
        n_notes = len([ln for ln in lesson['notes'] if ln.strip()])
        print(f"Lesson {lesson['number']:2d} ({lesson['title_telugu'][:20]}): "
              f"{n_vocab} vocab, {n_sent} sentences, {n_ex} exercises, {n_notes} note lines "
              f"→ {os.path.basename(fname)}")

    print(f"\nTotal: {len(lessons)} lessons")
