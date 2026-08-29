#!/usr/bin/env bun
/**
 * check-all.ts — every corpus check in one command, with an exit code.
 *
 * The checks accumulated one at a time and each lives behind its own script, so
 * running them all means remembering four commands. This runs them together and
 * fails the build on anything that is unambiguously an error.
 *
 * HARD failures (exit 1) are things that are always wrong:
 *   - सङ्ग्रह violations: a consolidation passage citing a rule not yet
 *     introduced. This has fired twice on mechanical edits and caught both.
 *   - gloss/token mismatches in NEW readings (see the baseline note below).
 *   - the systems book: a tag in static/data/systems.toml that is not a schema
 *     value. It is hand-edited prose joined to the schema by exact string match,
 *     so a typo unlights a cell rather than raising anything.
 *   - annotation lint: a tag that is WRONG, not just missing — two values of one
 *     dimension (लट् and विधिलिङ् both), or a value that belongs to no dimension
 *     of the word's type. The corpus is at zero; any new one fails the build.
 *     This is the correctness half of what `bun run complete` reports; completeness
 *     (a MISSING dimension) stays soft, because the backlog is deep.
 *
 * SOFT reports (exit 0) are candidate lists that need a human read:
 *   - register warnings — a term may be glossed inline and perfectly clear
 *   - cite verification — most "missing" are limits of the checker, not errors
 *   - the ledger — a coverage report, not a pass/fail
 *
 * The gloss baseline exists because 48 pre-existing mismatches predate the
 * check and are real authoring gaps (unglossed यः/सः, label prefixes). Failing
 * on them would make the command useless from day one; failing on any INCREASE
 * keeps new work honest without demanding the backlog be cleared first. Lower
 * the number as the backlog is worked off.
 */
const GLOSS_BASELINE = 48;
/**
 * Ceiling on how much of a late attested reading is revealed without asking.
 * Set just above the current 42% so the number cannot quietly climb back;
 * lower it as the glossing is thinned further.
 */
const REVEAL_CEILING = 45;
/**
 * Soft ceiling on a single `teaches` line. Set just above the current longest
 * (237) so new drift shows immediately; the corpus median is 78.
 */
const TEACHES_CEILING = 240;

async function run(cmd: string[]): Promise<string> {
  const p = Bun.spawn(cmd, { stdout: 'pipe', stderr: 'pipe' });
  const [out, err] = await Promise.all([new Response(p.stdout).text(), new Response(p.stderr).text()]);
  await p.exited;
  return out + err;
}

const problems: string[] = [];

console.log('\n═══ corpus checks ═══\n');

// 1. build — emits gloss/token mismatches
const build = await run(['bun', 'scripts/build-readings.ts']);
const glossMatch = build.match(/gloss\/token mismatches in (\d+) reading/);
const gloss = glossMatch ? Number(glossMatch[1]) : 0;
if (gloss > GLOSS_BASELINE) {
  problems.push(`gloss/token mismatches rose to ${gloss} (baseline ${GLOSS_BASELINE}) — a new reading has an unglossed token`);
  console.log(`  ✗ gloss/token: ${gloss}  (baseline ${GLOSS_BASELINE})`);
} else {
  console.log(`  ✓ gloss/token: ${gloss}  (baseline ${GLOSS_BASELINE})`);
}

// 2. ledger — सङ्ग्रह violations are hard errors
const ledger = await run(['bun', 'scripts/readings-ledger.ts']);
const violations = ledger.includes('सङ्ग्रह VIOLATIONS');
if (violations) {
  const lines = ledger.split('\n');
  const i = lines.findIndex((l) => l.includes('सङ्ग्रह VIOLATIONS'));
  // Stop at the blank line that ends the violations block — the ledger prints
  // other sections after it and they would otherwise bleed into the message.
  const detail: string[] = [];
  for (const l of lines.slice(i + 1)) {
    if (!l.trim()) break;
    detail.push(l);
  }
  problems.push('सङ्ग्रह violation — a consolidation passage introduces a rule:\n' + detail.join('\n'));
  console.log('  ✗ सङ्ग्रह constraint: VIOLATED');
} else {
  console.log('  ✓ सङ्ग्रह constraint: clean');
}

const taught = ledger.match(/taught\s+(\d+) \/ (\d+)/);
if (taught) console.log(`  · coverage: ${taught[1]}/${taught[2]} load-bearing rules taught`);

// 2b. reveal density — how much of the corpus the reader must recall vs is shown.
// A `cite` forces a word's gloss open; a bare `term` leaves it collapsed until
// asked. So this measures how much practice the reader actually gets, and it
// drifted to 52% in the late attested readings — the real Sanskrit, where
// trying unaided matters most — before anyone looked.
{
  const data = JSON.parse(await Bun.file('static/data/readings.json').text());
  const band = (rs: any[]) => {
    let tok = 0, focal = 0;
    for (const r of rs) {
      tok += String(r.sentence ?? '').replace(/[।॥,;—"“”?!]/g, ' ').split(/\s+/).filter(Boolean).length;
      focal += (r.words ?? []).filter((w: any) => (w.notes ?? []).some((n: any) => n.cite)).length;
    }
    return tok ? Math.round((100 * focal) / tok) : 0;
  };
  const all = band(data.sequence);
  const lateAttested = band(data.sequence.filter((r: any) => r.kind === 'attested' && (r.segment ?? 0) >= 350));
  console.log(`  · revealed: ${all}% of the corpus shown by default, ${lateAttested}% in late attested`);
  if (lateAttested > REVEAL_CEILING) {
    problems.push(
      `late attested readings reveal ${lateAttested}% of tokens by default (ceiling ${REVEAL_CEILING}%) — ` +
        `citing an already-taught rule on every instance forces the gloss open and denies the reader the attempt`
    );
  }
}

// 2c. teaches length — prose drift is invisible without a number.
// The lines authored later reached a median of 260 characters against the
// corpus's 66, by narrating what a passage is FOR rather than naming what is
// in it. Nobody noticed across three separate register passes, because there
// was nothing to notice with. Warn on any single line past the ceiling.
{
  const data = JSON.parse(await Bun.file('static/data/readings.json').text());
  const lens = data.sequence
    .map((r: any) => ({ id: r.id, n: String(r.teaches ?? '').trim().replace(/\s+/g, ' ').length }))
    .sort((a: any, b: any) => b.n - a.n);
  const median = [...lens].sort((a: any, b: any) => a.n - b.n)[Math.floor(lens.length / 2)].n;
  const over = lens.filter((l: any) => l.n > TEACHES_CEILING);
  console.log(
    `  · teaches: median ${median} chars, ${over.length} line(s) over ${TEACHES_CEILING}` +
      (over.length ? ` — ${over.slice(0, 3).map((l: any) => `${l.id}(${l.n})`).join(' ')}` : '')
  );
}

// 3. register — soft
const reg = await run(['bun', 'scripts/check-register.ts']);
const regN = reg.match(/(\d+) occurrence/);
console.log(`  · register: ${regN ? regN[1] : '?'} term(s) used before introduction (review, not all defects)`);

// 4. cites — soft
const cites = await run(['bun', 'scripts/verify-cites.ts']);
const ok = cites.match(/confirmed\s+(\d+)/);
const miss = cites.match(/MISSING\s+(\d+)/);
console.log(`  · citations: ${ok ? ok[1] : '?'} confirmed against vidyut, ${miss ? miss[1] : '?'} to review`);

// 5. grammatical completeness — soft, and the largest backlog in the corpus.
// Reported as one line here; `bun run complete` breaks it down and names the
// readings to fix first.
const comp = await run(['bun', 'scripts/check-complete.ts']);
const need = [...comp.matchAll(/^\s+(\d+)\s+(\S+)$/gm)].slice(0, 3);
const untypedN = comp.match(/(\d+)\s+no type tag/);
if (need.length) {
  console.log(
    `  · completeness: ${need.map(([, n, t]) => `${n} need ${t}`).join(', ')}` +
    (untypedN ? `, ${untypedN[1]} untyped` : '')
  );
}

// 6. annotation lint — HARD. Completeness (missing) is a backlog and stays soft;
// correctness (wrong) is always an error and the corpus is at zero, so any new
// conflict or misplaced tag fails the build the way a सङ्ग्रह violation does.
const lint = await run(['bun', 'scripts/check-complete.ts', '--lint']);
const lintN = lint.match(/(\d+) annotation error/);
const lintCount = lintN ? Number(lintN[1]) : 0;
if (lintCount > 0) {
  // Reprint the CONFLICT/MISPLACED block so the failure names the words.
  const detail = lint.split('\n').filter((l) =>
    /CONFLICT|MISPLACED|^\s{4}\S/.test(l)).join('\n');
  problems.push(`annotation lint: ${lintCount} tag(s) are wrong, not just missing\n${detail}`);
  console.log(`  ✗ annotation lint: ${lintCount} error(s)`);
} else {
  console.log('  ✓ annotation lint: clean');
}

// 7. the systems book — HARD. static/data/systems.toml is hand-edited, and a
// mistyped tag there breaks the join to the schema silently: the cell just never
// lights, which reads as a thin corpus rather than a wrong book.
const sys = await run(['bun', 'scripts/check-systems.ts']);
const sysN = sys.match(/(\d+) systems error/);
if (sysN) {
  problems.push(`systems: ${sysN[1]} tag(s) do not match the schema\n` +
    sys.split('\n').filter((l) => /^\s{4}\S/.test(l)).join('\n'));
  console.log(`  ✗ systems: ${sysN[1]} error(s)`);
} else {
  console.log('  ✓ ' + sys.trim());
}

// 8. the sūtra count — HARD, and cheap. The home page's सूत्र door prints a
// constant instead of loading 3983 YAML files to count them; this is what
// stops that constant drifting away from the data behind the door.
const cnt = await run(['bun', 'scripts/check-sutra-count.ts']);
if (/SUTRA_COUNT is/.test(cnt)) {
  problems.push('sūtra count: ' + cnt.trim().split('\n')[0]);
  console.log('  ✗ ' + cnt.trim().split('\n')[0]);
} else {
  console.log('  ✓ ' + cnt.trim());
}

/*
  The three staleness gates that stood here are gone.

  They compared a committed generated file against what its source would produce
  now — stats.json, sutras.json, sutra-refs/. That was a real hazard while those
  files were in git: nothing else would have noticed the door counts advertising
  a corpus we no longer had. They are build output now, rebuilt from source on
  every build and on every deploy, so there is no committed copy left to drift.

  What remains above are checks of a different kind and they stay: the sūtra
  count validates a hand-written constant against the YAML it summarises, and the
  systems check validates a hand-edited book against the schema it joins to.
  Both compare two things a human wrote. Neither is about build freshness.
*/

// 9. the suggestion allowlist — HARD. /api/suggest opens a pull request with a
// service token, so its path rules are a boundary, not a preference: too loose
// and a reader can write anywhere in the repo, too tight and the annotations
// most likely to be wrong cannot be corrected from the site.
const sp = await run(['bun', 'scripts/check-suggest-paths.ts']);
if (/case\(s\) wrong/.test(sp)) {
  problems.push('suggest paths: ' + sp.trim().split('\n').pop());
  console.log('  ✗ ' + sp.trim().split('\n').pop());
} else {
  console.log('  ✓ ' + sp.trim());
}

// 9a. the lexical tables — HARD. src/lib/usage/lexical.ts maps a closed set to
// a tag, and both halves join to the schema by exact string match. A bad value
// writes a tag no dimension owns; a bad KEY matches nothing and does nothing,
// which nothing else would ever report — the dimension just stays empty and
// reads as an authoring backlog.
const lx = await run(['bun', 'scripts/check-lexical.ts']);
if (/lexical table error/.test(lx)) {
  problems.push('lexical tables:\n' + lx.split('\n').filter((l) => /^\s{4}\S/.test(l)).join('\n'));
  console.log('  ✗ ' + lx.trim().split('\n')[0]);
} else {
  console.log('  ✓ ' + lx.trim());
}

// 9b. the लिङ्ग fixture — HARD on a wrong answer, silent on a missing one.
// Gender is the one सुबन्त dimension vidyut cannot derive, so build-quiz infers
// it from three sources of differing authority. A blank is honest and expected;
// a WRONG gender is a defect, and without a hand-written scoreboard neither is
// distinguishable from "the number went up".
const lg = await run(['bun', 'scripts/check-linga.ts']);
if (/WRONG gender/.test(lg)) {
  problems.push('लिङ्ग: ' + lg.split('\n').filter((l) => /WRONG|^\s{4}\S/.test(l)).join('\n'));
  console.log('  ✗ ' + lg.trim().split('\n')[0]);
} else {
  console.log('  ✓ ' + lg.trim().split('\n')[0]);
}

// 10. sign-in and attribution — HARD. Two providers now, and the ways they
// differ are quiet ones: an @mention that resolves on GitHub and mentions a
// stranger for a Google display name, and a branch name git will not accept.
const ses = await run(['bun', 'scripts/check-session.ts']);
if (/check\(s\) failed/.test(ses)) {
  problems.push('session: ' + ses.trim().split('\n').pop());
  console.log('  ✗ ' + ses.trim().split('\n').pop());
} else {
  console.log('  ✓ ' + ses.trim());
}

console.log();
if (problems.length) {
  console.log('FAILED:\n');
  for (const p of problems) console.log('  ' + p + '\n');
  process.exit(1);
}
console.log('All hard checks passed.\n');
