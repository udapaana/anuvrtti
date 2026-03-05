#!/usr/bin/env python3
"""
Replace bare Western grammatical terms in layered_commentary.json with
@deva[SANSKRIT] (western) format, skipping cases where Sanskrit is already nearby.
"""

import json
import re
import sys

# Mapping: (pattern, sanskrit, abbreviations)
# Pattern is matched case-insensitively with word boundaries
REPLACEMENTS = [
    # Cases (vibhakti) — unambiguous
    ('nominative',   'प्रथमा',   [r'nom\.']),
    ('accusative',   'द्वितीया', [r'acc\.']),
    ('instrumental', 'तृतीया',   [r'inst\.', r'instr\.']),
    ('dative',       'चतुर्थी',  [r'dat\.']),
    ('ablative',     'पञ्चमी',   [r'abl\.']),
    ('genitive',     'षष्ठी',    [r'gen\.']),
    ('locative',     'सप्तमी',   [r'loc\.']),
    ('vocative',     'सम्बोधन',  [r'voc\.']),

    # Number (vacana)
    ('singular',     'एकवचन',    [r'sg\.']),
    ('dual',         'द्विवचन',  [r'du\.']),
    ('plural',       'बहुवचन',   [r'pl\.']),

    # Person (purusa)
    ('first person',  'उत्तमपुरुष',  [r'1st pers\.', r'1p']),
    ('second person', 'मध्यमपुरुष',  [r'2nd pers\.', r'2p']),
    ('third person',  'प्रथमपुरुष',  [r'3rd pers\.', r'3p']),

    # Voice (prayoga)
    ('passive voice', 'कर्मणिप्रयोग', []),
    ('active voice',  'कर्तरिप्रयोग', []),
    # standalone passive/active only if not already "passive voice" / "active voice"
    # handled separately below

    # Tense/mood (lakara) — only the unambiguous common ones
    ('present tense', 'लट्',  []),
    ('imperfect',     'लङ्',  []),
]

# Devanagari characters — used to detect proximity
DEVA_RE = re.compile(r'[\u0900-\u097F]')

def has_deva_nearby(text, start, end, window=40):
    """Check if there's Devanagari text within `window` chars of the match."""
    lo = max(0, start - window)
    hi = min(len(text), end + window)
    surrounding = text[lo:start] + text[end:hi]
    return bool(DEVA_RE.search(surrounding))

def make_replacement(sanskrit, western_original):
    """Build the replacement string."""
    return f'@deva[{sanskrit}] ({western_original})'

def replace_term(text, pattern_str, sanskrit, abbrevs):
    """
    Replace all bare occurrences of pattern_str (and its abbreviations)
    in text with @deva[sanskrit] (pattern_str), unless Devanagari is already nearby.
    """
    result = text

    # Build all patterns to replace: full term + abbreviations
    patterns = [re.escape(pattern_str)] + [a for a in abbrevs]

    for pat in patterns:
        # Match whole word, case-insensitive
        regex = re.compile(r'\b(' + pat + r')\b', re.IGNORECASE)

        def replacer(m, sanskrit=sanskrit):
            start = m.start()
            end = m.end()
            original = m.group(0)

            # Skip if @deva is already nearby
            if has_deva_nearby(result, start, end, window=50):
                return original

            # Skip if already inside @deva[...] markup
            before = result[:start]
            if before.count('@deva[') > before.count(']'):
                return original

            return make_replacement(sanskrit, original)

        # We need to rebuild result each time since positions shift
        new_result = []
        last_end = 0
        for m in regex.finditer(result):
            start = m.start()
            end = m.end()
            original = m.group(0)

            if has_deva_nearby(result, start, end, window=50):
                new_result.append(result[last_end:end])
            else:
                # Check not inside @deva[...]
                before = result[:start]
                open_count = before.count('@deva[')
                close_count = before.count(']')
                if open_count > close_count:
                    new_result.append(result[last_end:end])
                else:
                    new_result.append(result[last_end:start])
                    new_result.append(make_replacement(sanskrit, original))
            last_end = end

        new_result.append(result[last_end:])
        result = ''.join(new_result)

    return result

def process_text(text):
    if not text:
        return text
    for pattern_str, sanskrit, abbrevs in REPLACEMENTS:
        text = replace_term(text, pattern_str, sanskrit, abbrevs)
    return text

def main():
    path = 'static/data/layered_commentary.json'
    with open(path) as f:
        data = json.load(f)

    changed = 0
    for key, entry in data.items():
        en = entry.get('en', {})
        for tier in ['simple', 'standard', 'advanced']:
            original = en.get(tier)
            if not original:
                continue
            updated = process_text(original)
            if updated != original:
                en[tier] = updated
                changed += 1

    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f'Updated {changed} text fields across {len(data)} entries.')

if __name__ == '__main__':
    main()
