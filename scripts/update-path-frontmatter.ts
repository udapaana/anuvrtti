#!/usr/bin/env npx tsx
/**
 * Update path frontmatter with new fields: label, track, category
 *
 * Usage: npx tsx scripts/update-path-frontmatter.ts
 */

import * as fs from "fs";
import * as path from "path";

const PATHS_DIR = path.join(process.cwd(), "src/lib/learning/paths");

interface PathMetadata {
  label: string;
  track: "reading" | "grammar";
  category: "foundation" | "tinganta" | "subanta" | "taddhita" | "kridanta" | "sandhi" | "karaka" | "samasa";
}

// Map file patterns to metadata
function getMetadata(filename: string, titleSanskrit: string): PathMetadata {
  // Reading track (fluency paths)
  if (filename.startsWith("fluency-")) {
    return {
      label: titleSanskrit,
      track: "reading",
      category: "foundation"
    };
  }

  // Grammar track paths
  if (filename.includes("introduction")) {
    return { label: "प्रवेशः", track: "grammar", category: "foundation" };
  }

  if (filename.includes("tinganta")) {
    // Extract lakara name for label
    const lakaraMap: Record<string, string> = {
      "lat": "लट्",
      "lot": "लोट्",
      "lang": "लङ्",
      "vidhiling": "विधिलिङ्",
      "lrt": "लृट्",
      "lut": "लुट्",
      "lit": "लिट्",
      "lung": "लुङ्",
      "ashirling": "आशीर्लिङ्",
      "conditional": "लृङ्"
    };
    for (const [key, val] of Object.entries(lakaraMap)) {
      if (filename.includes(key)) {
        return { label: val, track: "grammar", category: "tinganta" };
      }
    }
    return { label: titleSanskrit, track: "grammar", category: "tinganta" };
  }

  if (filename.includes("dhatu") || filename.includes("gana")) {
    return { label: "गणाः", track: "grammar", category: "tinganta" };
  }

  if (filename.includes("kridanta") || filename.includes("krt")) {
    const krtMap: Record<string, string> = {
      "ktva": "क्त्वा",
      "tumun": "तुमुन्",
      "shatr": "शतृ",
      "shanac": "शानच्",
      "kta": "क्त",
      "ktavatu": "क्तवतु",
      "tavya": "तव्य",
      "aniya": "अनीय"
    };
    for (const [key, val] of Object.entries(krtMap)) {
      if (filename.includes(key)) {
        return { label: val, track: "grammar", category: "kridanta" };
      }
    }
    return { label: titleSanskrit, track: "grammar", category: "kridanta" };
  }

  if (filename.includes("taddhita")) {
    return { label: titleSanskrit, track: "grammar", category: "taddhita" };
  }

  if (filename.includes("subanta") || filename.includes("stem")) {
    return { label: titleSanskrit, track: "grammar", category: "subanta" };
  }

  if (filename.includes("karaka")) {
    return { label: "कारकम्", track: "grammar", category: "karaka" };
  }

  if (filename.includes("samasa")) {
    return { label: "समासः", track: "grammar", category: "samasa" };
  }

  if (filename.includes("sandhi")) {
    const sandhiMap: Record<string, string> = {
      "vowel": "स्वरसन्धिः",
      "visarga": "विसर्गसन्धिः",
      "consonant": "व्यञ्जनसन्धिः"
    };
    for (const [key, val] of Object.entries(sandhiMap)) {
      if (filename.includes(key)) {
        return { label: val, track: "grammar", category: "sandhi" };
      }
    }
    return { label: "सन्धिः", track: "grammar", category: "sandhi" };
  }

  // Default
  return { label: titleSanskrit, track: "grammar", category: "foundation" };
}

function updateFrontmatter(content: string, filename: string): string {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    console.error(`Invalid markdown: ${filename}`);
    return content;
  }

  const [, yaml, body] = match;

  // Parse existing frontmatter
  const lines = yaml.split("\n");
  const frontmatter: Record<string, string | string[]> = {};
  let currentKey = "";

  for (const line of lines) {
    if (line.startsWith("  - ")) {
      if (currentKey && Array.isArray(frontmatter[currentKey])) {
        (frontmatter[currentKey] as string[]).push(line.replace("  - ", "").trim());
      }
      continue;
    }

    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    if (key === "prerequisites") {
      frontmatter[key] = [];
      currentKey = key;
      if (value.startsWith("[") && value.endsWith("]")) {
        frontmatter[key] = value.slice(1, -1).split(",").map(s => s.trim()).filter(Boolean);
        currentKey = "";
      }
    } else {
      frontmatter[key] = value;
      currentKey = "";
    }
  }

  // Skip if already has the new fields
  if (frontmatter.label && frontmatter.track && frontmatter.category) {
    console.log(`Skipping ${filename} - already has new fields`);
    return content;
  }

  // Get metadata based on filename
  const titleSanskrit = frontmatter.titleSanskrit as string || "";
  const metadata = getMetadata(filename, titleSanskrit);

  // Build new frontmatter
  const newLines: string[] = ["---"];
  newLines.push(`id: ${frontmatter.id}`);
  newLines.push(`title: ${frontmatter.title}`);
  newLines.push(`titleSanskrit: ${frontmatter.titleSanskrit}`);
  newLines.push(`label: ${metadata.label}`);
  newLines.push(`track: ${metadata.track}`);
  newLines.push(`category: ${metadata.category}`);
  newLines.push(`description: ${frontmatter.description}`);
  newLines.push(`difficulty: ${frontmatter.difficulty}`);
  newLines.push(`estimatedTime: ${frontmatter.estimatedTime}`);

  const prereqs = frontmatter.prerequisites as string[] || [];
  if (prereqs.length === 0) {
    newLines.push("prerequisites: []");
  } else {
    newLines.push("prerequisites:");
    prereqs.forEach(p => newLines.push(`  - ${p}`));
  }

  newLines.push("---");

  return newLines.join("\n") + "\n" + body;
}

function main() {
  const files = fs.readdirSync(PATHS_DIR).filter(f => f.endsWith(".md"));

  for (const file of files) {
    const filepath = path.join(PATHS_DIR, file);
    const content = fs.readFileSync(filepath, "utf-8");
    const updated = updateFrontmatter(content, file);

    if (updated !== content) {
      fs.writeFileSync(filepath, updated);
      console.log(`Updated: ${file}`);
    }
  }

  console.log("\nDone! Now run: npx tsx scripts/sync-paths.ts --to-ts");
}

main();
