/**
 * Commentary quality audit script.
 * Scans all 3983 sūtra TOML files and reports quality signals beyond word count:
 *   - Tier differential (simple vs standard vs advanced)
 *   - Identical tiers (simple === standard, etc.)
 *   - Missing/empty tiers
 *   - Raw Devanagari not wrapped in @deva[]
 *   - Raw Roman terms not wrapped in @[]
 *   - @ref[] usage in advanced tier
 *   - Markup errors (unclosed tags, malformed refs)
 *   - Stub tiers (< 20 words)
 *
 * Usage: npx tsx scripts/audit/audit-commentary.ts [--json] [--adhyaya N]
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { parse as parseTOML } from 'smol-toml';

const COMMENTARY_DIR = 'static/data/commentary';
const OUTPUT_DIR = 'scripts/audit';

// ── Regexes ──

// Devanagari Unicode range (basic block + vedic extensions)
const DEVA_RE = /[\u0900-\u097F\uA8E0-\uA8FF]+/g;
// Already wrapped in @deva[...]
const DEVA_WRAPPED_RE = /@deva\[([^\]]*)\]/g;
// Roman transliteration terms (ā, ī, ū, ṛ, ṝ, ṅ, ñ, ṭ, ḍ, ṇ, ś, ṣ, ḥ, ṃ)
const ROMAN_SPECIAL_RE = /[āīūṛṝṅñṭḍṇśṣḥṃĀĪŪṚṜṄÑṬḌṆŚṢḤṂ]/;
const ROMAN_WRAPPED_RE = /@\[([^\]]*)\]/g;
// @ref[] usage
const REF_RE = /@ref\[[\d.]+\]/g;
// Unclosed markup tags
const UNCLOSED_TAG_RE = /@(deva|ref|sutra|prakriya)\[[^\]]*$/m;
// Malformed ref (non-numeric content)
const BAD_REF_RE = /@ref\[([^\]]*)\]/g;

type Tier = 'simple' | 'standard' | 'advanced';
const TIERS: Tier[] = ['simple', 'standard', 'advanced'];

interface SutraIssue {
  id: string;
  file: string;
  issues: string[];
}

interface TierStats {
  wordCount: number;
  charCount: number;
  hasDevaMarkup: boolean;
  hasRefMarkup: boolean;
  rawDevaCount: number;
  rawRomanCount: number;
  unclosedTags: number;
  malformedRefs: string[];
}

interface SutraStats {
  id: string;
  file: string;
  tiers: Record<Tier, TierStats>;
  identical: [Tier, Tier][];
  missingTiers: Tier[];
  stubTiers: Tier[];
  thinAdvanced: boolean; // advanced word count < 1.3x standard
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function stripMarkup(text: string): string {
  // Remove all @tag[...] wrappers, keeping inner content
  return text.replace(/@(?:deva|ref|sutra|prakriya|\b)\[([^\]]*)\]/g, '$1');
}

function countRawDeva(text: string): number {
  // Strip all @deva[...] regions first, then count remaining Devanagari
  const stripped = text.replace(DEVA_WRAPPED_RE, '');
  const matches = stripped.match(DEVA_RE);
  return matches ? matches.length : 0;
}

function countRawRoman(text: string): number {
  // Strip @[...] regions, then check for special diacritics in remaining words
  const stripped = text.replace(ROMAN_WRAPPED_RE, '');
  // Also strip @deva[] and @ref[] content
  const cleaned = stripped.replace(DEVA_WRAPPED_RE, '').replace(REF_RE, '');
  // Split into words and count those with special Roman chars
  const words = cleaned.split(/\s+/).filter(Boolean);
  let count = 0;
  for (const w of words) {
    if (ROMAN_SPECIAL_RE.test(w) && !w.startsWith('@')) count++;
  }
  return count;
}

function analyzeTier(text: string): TierStats {
  const wc = wordCount(text);
  const rawDevaCount = countRawDeva(text);
  const rawRomanCount = countRawRoman(text);
  const unclosedMatches = text.match(UNCLOSED_TAG_RE);
  const malformedRefs: string[] = [];
  let match;
  while ((match = BAD_REF_RE.exec(text)) !== null) {
    if (!/^\d+\.\d+\.\d+$/.test(match[1])) {
      malformedRefs.push(match[1]);
    }
  }
  BAD_REF_RE.lastIndex = 0;

  return {
    wordCount: wc,
    charCount: text.length,
    hasDevaMarkup: DEVA_WRAPPED_RE.test(text),
    hasRefMarkup: REF_RE.test(text),
    rawDevaCount,
    rawRomanCount,
    unclosedTags: unclosedMatches ? unclosedMatches.length : 0,
    malformedRefs,
  };
}

function analyzeSutra(filePath: string): SutraStats | null {
  let raw: string;
  try {
    raw = readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }

  let parsed: any;
  try {
    parsed = parseTOML(raw);
  } catch {
    return null;
  }

  const id = parsed.id as string || filePath;
  const en = parsed.en as Record<string, string> | undefined;
  if (!en) return null;

  const tierStats = {} as Record<Tier, TierStats>;
  const missingTiers: Tier[] = [];
  const stubTiers: Tier[] = [];

  for (const t of TIERS) {
    const text = en[t];
    if (!text || !text.trim()) {
      missingTiers.push(t);
      tierStats[t] = { wordCount: 0, charCount: 0, hasDevaMarkup: false, hasRefMarkup: false, rawDevaCount: 0, rawRomanCount: 0, unclosedTags: 0, malformedRefs: [] };
      continue;
    }
    tierStats[t] = analyzeTier(text);
    if (tierStats[t].wordCount < 20) {
      stubTiers.push(t);
    }
  }

  // Check identical tiers
  const identical: [Tier, Tier][] = [];
  if (en.simple && en.standard && en.simple.trim() === en.standard.trim()) {
    identical.push(['simple', 'standard']);
  }
  if (en.standard && en.advanced && en.standard.trim() === en.advanced.trim()) {
    identical.push(['standard', 'advanced']);
  }

  // Thin advanced: less than 1.3x the word count of standard
  const advWc = tierStats.advanced.wordCount;
  const stdWc = tierStats.standard.wordCount;
  const thinAdvanced = advWc > 0 && stdWc > 0 && advWc < stdWc * 1.3;

  return { id, file: filePath, tiers: tierStats, identical, missingTiers, stubTiers, thinAdvanced };
}

// ── Main ──

const args = process.argv.slice(2);
const jsonOutput = args.includes('--json');
const adhyayaFilter = args.includes('--adhyaya')
  ? parseInt(args[args.indexOf('--adhyaya') + 1])
  : null;

const adhyayas = adhyayaFilter
  ? [adhyayaFilter]
  : [1, 2, 3, 4, 5, 6, 7, 8];

interface AdhyayaSummary {
  adhyaya: number;
  totalSutras: number;
  identicalTiers: number;
  missingTiers: number;
  stubTiers: number;
  thinAdvanced: number;
  rawDeva: number;
  rawRoman: number;
  unclosedTags: number;
  malformedRefs: number;
  noRefInAdvanced: number;
  avgSimpleWc: number;
  avgStandardWc: number;
  avgAdvancedWc: number;
  issues: SutraIssue[];
}

const summaries: AdhyayaSummary[] = [];

for (const a of adhyayas) {
  const adhDir = join(COMMENTARY_DIR, String(a));
  if (!existsSync(adhDir)) continue;

  const padas = readdirSync(adhDir).filter(d => /^\d+$/.test(d)).sort((a, b) => +a - +b);
  const allStats: SutraStats[] = [];
  const issues: SutraIssue[] = [];

  for (const p of padas) {
    const padaDir = join(adhDir, p);
    const files = readdirSync(padaDir).filter(f => f.endsWith('.toml')).sort((a, b) => {
      return parseInt(a) - parseInt(b);
    });

    for (const f of files) {
      const stats = analyzeSutra(join(padaDir, f));
      if (!stats) continue;
      allStats.push(stats);

      // Collect issues
      const sutraIssues: string[] = [];
      if (stats.missingTiers.length > 0) {
        sutraIssues.push(`missing tiers: ${stats.missingTiers.join(', ')}`);
      }
      if (stats.identical.length > 0) {
        sutraIssues.push(`identical tiers: ${stats.identical.map(([a, b]) => `${a}≡${b}`).join(', ')}`);
      }
      if (stats.stubTiers.length > 0) {
        sutraIssues.push(`stub tiers (<20 words): ${stats.stubTiers.join(', ')}`);
      }
      if (stats.thinAdvanced) {
        sutraIssues.push(`thin advanced (${stats.tiers.advanced.wordCount}w vs ${stats.tiers.standard.wordCount}w standard)`);
      }
      for (const t of TIERS) {
        if (stats.tiers[t].rawDevaCount > 0) {
          sutraIssues.push(`raw Devanagari in ${t} (${stats.tiers[t].rawDevaCount} instances)`);
        }
        if (stats.tiers[t].rawRomanCount > 2) {
          sutraIssues.push(`raw Roman terms in ${t} (${stats.tiers[t].rawRomanCount} instances)`);
        }
        if (stats.tiers[t].unclosedTags > 0) {
          sutraIssues.push(`unclosed markup in ${t}`);
        }
        if (stats.tiers[t].malformedRefs.length > 0) {
          sutraIssues.push(`malformed @ref in ${t}: ${stats.tiers[t].malformedRefs.join(', ')}`);
        }
      }
      if (!stats.tiers.advanced.hasRefMarkup && stats.tiers.advanced.wordCount > 0) {
        sutraIssues.push('no @ref[] in advanced tier');
      }

      if (sutraIssues.length > 0) {
        issues.push({ id: stats.id, file: stats.file, issues: sutraIssues });
      }
    }
  }

  const total = allStats.length;
  const sum = (fn: (s: SutraStats) => number) => allStats.reduce((acc, s) => acc + fn(s), 0);

  summaries.push({
    adhyaya: a,
    totalSutras: total,
    identicalTiers: allStats.filter(s => s.identical.length > 0).length,
    missingTiers: allStats.filter(s => s.missingTiers.length > 0).length,
    stubTiers: allStats.filter(s => s.stubTiers.length > 0).length,
    thinAdvanced: allStats.filter(s => s.thinAdvanced).length,
    rawDeva: allStats.filter(s => TIERS.some(t => s.tiers[t].rawDevaCount > 0)).length,
    rawRoman: allStats.filter(s => TIERS.some(t => s.tiers[t].rawRomanCount > 2)).length,
    unclosedTags: allStats.filter(s => TIERS.some(t => s.tiers[t].unclosedTags > 0)).length,
    malformedRefs: allStats.filter(s => TIERS.some(t => s.tiers[t].malformedRefs.length > 0)).length,
    noRefInAdvanced: allStats.filter(s => !s.tiers.advanced.hasRefMarkup && s.tiers.advanced.wordCount > 0).length,
    avgSimpleWc: total ? Math.round(sum(s => s.tiers.simple.wordCount) / total) : 0,
    avgStandardWc: total ? Math.round(sum(s => s.tiers.standard.wordCount) / total) : 0,
    avgAdvancedWc: total ? Math.round(sum(s => s.tiers.advanced.wordCount) / total) : 0,
    issues,
  });
}

// ── Output ──

if (jsonOutput) {
  const jsonPath = join(OUTPUT_DIR, 'audit-results.json');
  writeFileSync(jsonPath, JSON.stringify(summaries, null, 2));
  console.log(`Written to ${jsonPath}`);
} else {
  // Write per-adhyaya markdown reports + summary
  let overallMd = `# Commentary Quality Audit\n\n`;
  overallMd += `Generated: ${new Date().toISOString().split('T')[0]}\n\n`;
  overallMd += `## Summary\n\n`;
  overallMd += `| Adh | Sūtras | Identical | Missing | Stub | Thin Adv | Raw Deva | Raw Roman | No @ref Adv | Avg S/St/A |\n`;
  overallMd += `|-----|--------|-----------|---------|------|----------|----------|-----------|-------------|------------|\n`;

  for (const s of summaries) {
    overallMd += `| ${s.adhyaya} | ${s.totalSutras} | ${s.identicalTiers} | ${s.missingTiers} | ${s.stubTiers} | ${s.thinAdvanced} | ${s.rawDeva} | ${s.rawRoman} | ${s.noRefInAdvanced} | ${s.avgSimpleWc}/${s.avgStandardWc}/${s.avgAdvancedWc} |\n`;
  }

  const totalSutras = summaries.reduce((a, s) => a + s.totalSutras, 0);
  const totalIdentical = summaries.reduce((a, s) => a + s.identicalTiers, 0);
  const totalStub = summaries.reduce((a, s) => a + s.stubTiers, 0);
  const totalThinAdv = summaries.reduce((a, s) => a + s.thinAdvanced, 0);
  const totalRawDeva = summaries.reduce((a, s) => a + s.rawDeva, 0);
  const totalNoRef = summaries.reduce((a, s) => a + s.noRefInAdvanced, 0);

  overallMd += `\n### Key Findings\n\n`;
  overallMd += `- **${totalSutras}** sūtras scanned\n`;
  overallMd += `- **${totalIdentical}** with identical tiers (${(100 * totalIdentical / totalSutras).toFixed(1)}%)\n`;
  overallMd += `- **${totalStub}** with stub tiers < 20 words (${(100 * totalStub / totalSutras).toFixed(1)}%)\n`;
  overallMd += `- **${totalThinAdv}** with thin advanced tier < 1.3× standard (${(100 * totalThinAdv / totalSutras).toFixed(1)}%)\n`;
  overallMd += `- **${totalRawDeva}** with unwrapped Devanagari (${(100 * totalRawDeva / totalSutras).toFixed(1)}%)\n`;
  overallMd += `- **${totalNoRef}** advanced tiers with no @ref[] links (${(100 * totalNoRef / totalSutras).toFixed(1)}%)\n`;

  writeFileSync(join(OUTPUT_DIR, 'audit-summary.md'), overallMd);
  console.log(`Written: ${join(OUTPUT_DIR, 'audit-summary.md')}`);

  // Per-adhyaya detail files
  for (const s of summaries) {
    let md = `# Adhyāya ${s.adhyaya} — Audit Detail\n\n`;
    md += `Generated: ${new Date().toISOString().split('T')[0]}\n\n`;
    md += `| Metric | Count | % |\n`;
    md += `|--------|------:|---:|\n`;
    md += `| Total sūtras | ${s.totalSutras} | — |\n`;
    md += `| Identical tiers | ${s.identicalTiers} | ${(100 * s.identicalTiers / s.totalSutras).toFixed(1)}% |\n`;
    md += `| Missing tiers | ${s.missingTiers} | ${(100 * s.missingTiers / s.totalSutras).toFixed(1)}% |\n`;
    md += `| Stub tiers (<20w) | ${s.stubTiers} | ${(100 * s.stubTiers / s.totalSutras).toFixed(1)}% |\n`;
    md += `| Thin advanced | ${s.thinAdvanced} | ${(100 * s.thinAdvanced / s.totalSutras).toFixed(1)}% |\n`;
    md += `| Raw Devanagari | ${s.rawDeva} | ${(100 * s.rawDeva / s.totalSutras).toFixed(1)}% |\n`;
    md += `| Raw Roman | ${s.rawRoman} | ${(100 * s.rawRoman / s.totalSutras).toFixed(1)}% |\n`;
    md += `| No @ref in advanced | ${s.noRefInAdvanced} | ${(100 * s.noRefInAdvanced / s.totalSutras).toFixed(1)}% |\n`;
    md += `| Avg word count (S/St/A) | ${s.avgSimpleWc}/${s.avgStandardWc}/${s.avgAdvancedWc} | — |\n`;

    if (s.issues.length > 0) {
      md += `\n## Issues (${s.issues.length} sūtras)\n\n`;
      for (const issue of s.issues) {
        md += `### ${issue.id}\n`;
        for (const i of issue.issues) {
          md += `- ${i}\n`;
        }
        md += `\n`;
      }
    }

    const filename = `adhyaya-${s.adhyaya}-audit.md`;
    writeFileSync(join(OUTPUT_DIR, filename), md);
    console.log(`Written: ${join(OUTPUT_DIR, filename)}`);
  }

  // Also write JSON for programmatic consumption
  const jsonPath = join(OUTPUT_DIR, 'audit-results.json');
  writeFileSync(jsonPath, JSON.stringify(summaries, null, 2));
  console.log(`Written: ${jsonPath}`);
}
