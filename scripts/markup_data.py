#!/usr/bin/env python3
"""
Process JSON data files to add @deva[...] and @[...] markup for Sanskrit text.

This script:
1. Detects Devanagari text in English content and wraps it with @deva[...]
2. Converts <i>sanskrit_term</i> to @[sanskrit_term] (IAST)
3. Converts [[1.1.70]] sutra references to @ref[1.1.70] format
"""

import json
import re
import sys
from pathlib import Path

# Devanagari Unicode range (letters and marks only, not punctuation like danda)
# 0900-094F: consonants, vowels, signs
# 0950-0954: om, accents
# 0958-095F: consonants
# 0960-0963: vowels
# 0966-096F: digits
# Exclude 0964-0965 (danda, double danda)
DEVANAGARI_PATTERN = re.compile(r'[\u0900-\u0963\u0966-\u097F]+(?:[\-]?[\u0900-\u0963\u0966-\u097F]+)*')

# Italicized Sanskrit terms - match any word-like content in italics
# Using a broad pattern to catch all romanization variants
ITALIC_SANSKRIT_PATTERN = re.compile(r'<i>([^<]+)</i>')

# Sutra references like [[1.1.70]] or [[7.3.82]]
SUTRA_REF_PATTERN = re.compile(r'\[\[(\d+\.\d+\.\d+)\]\]')


def wrap_devanagari(text: str) -> str:
    """Wrap Devanagari sequences with @deva[...]"""
    def replacer(match):
        content = match.group(0).strip()
        if content:
            return f'@deva[{content}]'
        return match.group(0)

    return DEVANAGARI_PATTERN.sub(replacer, text)


def convert_italic_sanskrit(text: str) -> str:
    """Convert <i>term</i> to @[term] for Sanskrit terms"""
    def replacer(match):
        term = match.group(1)
        return f'@[{term}]'

    return ITALIC_SANSKRIT_PATTERN.sub(replacer, text)


def convert_sutra_refs(text: str) -> str:
    """Convert [[1.1.70]] to @ref[1.1.70]"""
    def replacer(match):
        ref = match.group(1)
        return f'@ref[{ref}]'

    return SUTRA_REF_PATTERN.sub(replacer, text)


def process_text(text: str) -> str:
    """Apply all markup transformations"""
    # Order matters: do italic conversion first (before wrapping Devanagari)
    result = convert_italic_sanskrit(text)
    result = convert_sutra_refs(result)
    result = wrap_devanagari(result)
    return result


def process_file(input_path: Path, output_path: Path):
    """Process a JSON file and write marked-up version"""
    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    if isinstance(data, dict):
        # Dictionary of id -> content (like vasu_english.json)
        processed = {}
        for key, value in data.items():
            if isinstance(value, str):
                processed[key] = process_text(value)
            else:
                processed[key] = value
    elif isinstance(data, list):
        # List of objects
        processed = []
        for item in data:
            if isinstance(item, dict):
                new_item = {}
                for k, v in item.items():
                    if isinstance(v, str):
                        new_item[k] = process_text(v)
                    else:
                        new_item[k] = v
                processed.append(new_item)
            else:
                processed.append(item)
    else:
        processed = data

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(processed, f, ensure_ascii=False, indent=2)

    print(f"Processed {input_path} -> {output_path}")


def show_sample(input_path: Path, count: int = 3):
    """Show sample of processed content"""
    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    if isinstance(data, dict):
        items = list(data.items())[:count]
        for key, value in items:
            if isinstance(value, str):
                print(f"\n=== {key} ===")
                print("BEFORE:")
                print(value[:500])
                print("\nAFTER:")
                print(process_text(value)[:500])


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python markup_data.py <command> [args]")
        print("Commands:")
        print("  sample <file>     - Show sample transformations")
        print("  process <in> <out> - Process file")
        sys.exit(1)

    command = sys.argv[1]

    if command == 'sample':
        if len(sys.argv) < 3:
            print("Usage: python markup_data.py sample <file>")
            sys.exit(1)
        show_sample(Path(sys.argv[2]))

    elif command == 'process':
        if len(sys.argv) < 4:
            print("Usage: python markup_data.py process <input> <output>")
            sys.exit(1)
        process_file(Path(sys.argv[2]), Path(sys.argv[3]))

    else:
        print(f"Unknown command: {command}")
        sys.exit(1)
