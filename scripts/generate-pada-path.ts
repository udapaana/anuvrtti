/**
 * Generate a pada reading path from sutra data and layered commentary.
 *
 * Usage: npx tsx scripts/generate-pada-path.ts <adhyaya> <pada>
 * Example: npx tsx scripts/generate-pada-path.ts 1 1
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface RawSutra {
  i: string; // numeric ID
  a: string; // adhyaya
  p: string; // pada
  n: string; // number within pada
  s: string; // Devanagari text
  e: string; // romanized
  an: string; // anuvrtti refs
  ad: string; // adhikara refs
  ss: string; // expanded (with anuvrtti)
  type: string; // S$name$, V$name$, P$name$, etc.
  pc: string; // pada-ccheda
}

interface LayeredCommentary {
  en: {
    simple: string;
    standard: string;
    advanced: string;
  };
  kashika?: string;
  vartika?: string[];
}

// Type code to human-readable name
const TYPE_NAMES: Record<string, string> = {
  S: "saṃjñā",
  P: "paribhāṣā",
  V: "vidhi",
  A: "adhikāra",
  AT: "atideśa",
  N: "niṣedha",
};

// Pada descriptions for context
const PADA_DESCRIPTIONS: Record<
  string,
  { title: string; titleSanskrit: string; description: string; intro: string }
> = {
  "1.1": {
    title: "Read Adhyāya 1, Pāda 1",
    titleSanskrit: "प्रथमाध्यायस्य प्रथमपादः",
    description:
      "Sequential reading of the saṃjñā-paribhāṣā foundation: vowel grades, sound classes, and the core definitions that all later rules depend on.",
    intro: `The first pāda of the Aṣṭādhyāyī lays the foundation for everything that follows. It defines the technical vocabulary (@deva[संज्ञा]) and interpretive principles (@deva[परिभाषा]) that the entire grammar depends on.

You'll encounter:
- **Vowel grades**: @deva[वृद्धि] and @deva[गुण] — the two levels of vowel strengthening
- **Sound classes**: @deva[प्रत्याहार] abbreviations that group sounds
- **Substitution rules**: How one sound replaces another
- **Scope principles**: How rules interact and override each other

This is a sequential reading — we go through each sūtra in order, showing how the system builds on itself.`,
  },
  "1.3": {
    title: "Read Adhyāya 1, Pāda 3",
    titleSanskrit: "प्रथमाध्यायस्य तृतीयपादः",
    description:
      "The it-saṃjñā rules: how marker letters in affixes encode grammatical information, and the voice assignment (parasmaipada/ātmanepada) rules.",
    intro: `The third pāda of Adhyāya 1 covers two major topics:

1. **It-saṃjñā** (@ref[1.3.2]–@ref[1.3.9]): How marker letters (@deva[इत्]) in Pāṇini's metalanguage encode grammatical information. Every affix carries markers that trigger or block specific rules.

2. **Voice assignment** (@ref[1.3.12]–@ref[1.3.93]): When to use @deva[परस्मैपद] (active) vs. @deva[आत्मनेपद] (middle) verb endings. This is one of the longest prakaraṇas in the Aṣṭādhyāyī.`,
  },
  "1.4": {
    title: "Read Adhyāya 1, Pāda 4",
    titleSanskrit: "प्रथमाध्यायस्य चतुर्थपादः",
    description:
      "The kāraka definitions: how semantic roles (agent, object, instrument, etc.) map to case endings in Sanskrit.",
    intro: `The fourth pāda defines the semantic roles (@deva[कारक]) that connect verb meanings to noun cases. These definitions determine which case ending a noun gets based on its relationship to the action.`,
  },
};

function numericToDisplayId(numericId: string): string {
  const padded = numericId.padStart(5, "0");
  const adhyaya = parseInt(padded[0]);
  const pada = parseInt(padded[1]);
  const number = parseInt(padded.slice(2));
  return `${adhyaya}.${pada}.${number}`;
}

function parseType(typeStr: string): { code: string; name: string } {
  const parts = typeStr.split("$");
  const code = parts[0];
  const name = parts[1] || "";
  return { code, name };
}

function parseAnuvrtti(anStr: string): { term: string; fromId: string }[] {
  if (!anStr) return [];
  return anStr
    .split("##")
    .filter(Boolean)
    .map((entry) => {
      const [term, fromNumeric] = entry.split("$");
      return { term, fromId: numericToDisplayId(fromNumeric) };
    });
}

function escapeForMarkdown(text: string): string {
  // Don't escape @deva[...] or @ref[...] markers, but escape pipe characters in tables
  return text;
}

function generateStep(
  sutra: RawSutra,
  commentary: LayeredCommentary | undefined,
  index: number,
): string {
  const displayId = numericToDisplayId(sutra.i);
  const typeInfo = parseType(sutra.type);
  const typeName = TYPE_NAMES[typeInfo.code] || typeInfo.code;
  const anuvrtti = parseAnuvrtti(sutra.an);

  const lines: string[] = [];

  // Step header — use @ref[id] format so it links to the sutra
  lines.push(`## @ref[${displayId}] - ${sutra.s}`);
  lines.push("");

  // Type badge
  if (typeInfo.name) {
    lines.push(`**Type:** ${typeName} — ${typeInfo.name}`);
  } else {
    lines.push(`**Type:** ${typeName}`);
  }
  lines.push("");

  // Anuvrtti context
  if (anuvrtti.length > 0) {
    const refs = anuvrtti
      .map((a) => `@deva[${a.term}] (from @ref[${a.fromId}])`)
      .join(", ");
    lines.push(`**Anuvṛtti:** ${refs}`);
    lines.push("");
  }

  // Expanded form
  if (sutra.ss && sutra.ss !== sutra.s) {
    lines.push(`**Full reading:** @deva[${sutra.ss}]`);
    lines.push("");
  }

  // Embed the sutra for interactive display
  lines.push(`@sutra[${displayId}]`);
  lines.push("");

  return lines.join("\n");
}

function generatePath(adhyaya: number, pada: number): string {
  const root = join(__dirname, "..");
  const sutrasData = JSON.parse(
    readFileSync(join(root, "static/data/sutras.json"), "utf-8"),
  );
  const commentaryData: Record<string, LayeredCommentary> = JSON.parse(
    readFileSync(join(root, "static/data/layered_commentary.json"), "utf-8"),
  );

  const padaSutras: RawSutra[] = sutrasData.data.filter(
    (s: RawSutra) => s.a === String(adhyaya) && s.p === String(pada),
  );

  if (padaSutras.length === 0) {
    throw new Error(`No sutras found for adhyaya ${adhyaya}, pada ${pada}`);
  }

  const padaKey = `${adhyaya}.${pada}`;
  const padaInfo = PADA_DESCRIPTIONS[padaKey];

  if (!padaInfo) {
    throw new Error(
      `No description configured for pada ${padaKey}. Add it to PADA_DESCRIPTIONS.`,
    );
  }

  const pathId = `read-${adhyaya}-${pada}`;

  // Frontmatter
  const lines: string[] = [];
  lines.push("---");
  lines.push(`id: ${pathId}`);
  lines.push(`order: ${100 + adhyaya * 10 + pada}`);
  lines.push(`title: "${padaInfo.title}"`);
  lines.push(`titleSanskrit: ${padaInfo.titleSanskrit}`);
  lines.push(`label: ${adhyaya}.${pada} पाठः`);
  lines.push("track: grammar");
  lines.push("category: foundation");
  lines.push(`description: "${padaInfo.description}"`);
  lines.push("difficulty: intermediate");
  lines.push(
    `estimatedTime: ${Math.ceil(padaSutras.length / 15)}-${Math.ceil(padaSutras.length / 10)} hours`,
  );
  lines.push("prerequisites:");
  lines.push("  - introduction");
  lines.push("---");
  lines.push("");

  // Introduction
  lines.push(`## concept - Overview: Adhyāya ${adhyaya}, Pāda ${pada}`);
  lines.push("");
  lines.push(padaInfo.intro);
  lines.push("");
  lines.push(
    `This pāda contains **${padaSutras.length} sūtras** (${numericToDisplayId(padaSutras[0].i)}–${numericToDisplayId(padaSutras[padaSutras.length - 1].i)}).`,
  );
  lines.push("");
  lines.push("---");

  // Generate one step per sutra
  for (let i = 0; i < padaSutras.length; i++) {
    const sutra = padaSutras[i];
    const commentary = commentaryData[sutra.i];

    lines.push("");
    lines.push(generateStep(sutra, commentary, i));
    lines.push("---");
  }

  // Closing
  lines.push("");
  lines.push("## concept - Summary");
  lines.push("");
  lines.push(
    `You have read all ${padaSutras.length} sūtras of Adhyāya ${adhyaya}, Pāda ${pada}. Each sūtra builds on the definitions and principles established by earlier ones — this is the layered, self-referential architecture of the Aṣṭādhyāyī.`,
  );
  lines.push("");
  lines.push(
    "Use the depth toggle on each sūtra to explore simple, standard, and advanced explanations. Return to individual sūtras via the reference pages to see their full dependency networks.",
  );
  lines.push("");

  return lines.join("\n");
}

// Main
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error(
    "Usage: npx tsx scripts/generate-pada-path.ts <adhyaya> <pada>",
  );
  process.exit(1);
}

const adhyaya = parseInt(args[0]);
const pada = parseInt(args[1]);

if (isNaN(adhyaya) || isNaN(pada)) {
  console.error("Adhyaya and pada must be numbers");
  process.exit(1);
}

const pathId = `read-${adhyaya}-${pada}`;
const outputDir = join(
  __dirname,
  "..",
  "static/content/paths/vyakarana",
  pathId,
);
mkdirSync(outputDir, { recursive: true });

const markdown = generatePath(adhyaya, pada);
const outputPath = join(outputDir, "path.md");
writeFileSync(outputPath, markdown, "utf-8");

console.log(`Generated ${outputPath}`);
console.log(`Path ID: ${pathId}`);
