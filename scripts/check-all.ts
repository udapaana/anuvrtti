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

// 3. register — soft
const reg = await run(['bun', 'scripts/check-register.ts']);
const regN = reg.match(/(\d+) occurrence/);
console.log(`  · register: ${regN ? regN[1] : '?'} term(s) used before introduction (review, not all defects)`);

// 4. cites — soft
const cites = await run(['bun', 'scripts/verify-cites.ts']);
const ok = cites.match(/confirmed\s+(\d+)/);
const miss = cites.match(/MISSING\s+(\d+)/);
console.log(`  · citations: ${ok ? ok[1] : '?'} confirmed against vidyut, ${miss ? miss[1] : '?'} to review`);

console.log();
if (problems.length) {
  console.log('FAILED:\n');
  for (const p of problems) console.log('  ' + p + '\n');
  process.exit(1);
}
console.log('All hard checks passed.\n');
