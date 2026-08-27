/**
 * WHAT A SUGGESTION MAY TOUCH: authored files, and only authored files.
 *
 * /api/suggest opens a pull request on a reader's behalf with a service token,
 * so this list is the boundary between "a reader corrected a gloss" and "a
 * reader wrote to an arbitrary file in the repository". It lives in its own
 * module so scripts/check-suggest-paths.ts can exercise it — +server.ts imports
 * `$env/dynamic/private` and cannot be loaded outside SvelteKit.
 *
 * It used to be `['static/data/', 'static/content/']`, which was wrong in both
 * directions at once.
 *
 * It allowed too much. Everything the build computes lives under those
 * prefixes, so a reader could open a pull request against readings.json — and
 * the next `npm run build:data` would erase the change without a word. Worse
 * now that build output is gitignored: the PR would add a file git is told to
 * ignore.
 *
 * And it allowed too little. Every annotation the reader displays — the कारक,
 * the विभक्ति, the gloss — is authored in content/readings/, which no prefix
 * covered. The one thing most likely to be wrong was the one thing unreachable.
 *
 * So the list is explicit and names sources rather than directories. If a path
 * is not authored by a human it does not belong here; the fix for a generated
 * file is to correct the source it is generated from.
 */
export const ALLOWED_PREFIXES = [
  // the graded reader — annotations, glosses, the syllabus
  'content/',
  // authored trees still living under static/ (see docs/ARCHITECTURE.md)
  'static/data/commentary/',
  'static/data/passages/',
  'static/data/balabodhini/',
  'static/content/paths/',
  'static/content/sensitive-notes/'
];

/** Authored single files, which a prefix rule cannot express. */
export const ALLOWED_FILES = [
  'static/data/jargon.yaml',
  'static/data/systems.toml',
  'static/data/vocabulary.toml',
  'static/data/vocabulary.json'
];

/** null if the path may be edited, otherwise why not. */
export function validatePath(path: string): string | null {
  /*
    Traversal is checked FIRST, and that order is the point:
    `content/../static/data/readings.json` starts with an allowed prefix, so a
    prefix test alone would admit it.
  */
  if (path.includes('..') || path.includes('//') || path.startsWith('/')) {
    return `invalid path: ${path}`;
  }
  const allowed =
    ALLOWED_FILES.includes(path) || ALLOWED_PREFIXES.some((p) => path.startsWith(p));
  if (!allowed) {
    return `path not allowed: ${path} — suggestions may only edit authored files`;
  }
  if (!/\.(toml|yaml|md|json)$/.test(path)) {
    return `unsupported file type: ${path}`;
  }
  return null;
}
