// DozeReply — one-sentence pitch for the Absurd Micro-Startup Pitch-Off.
// The entry text is a single fixed string: no randomness, no network,
// no date or time, so every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "DozeReply: lazy AI agents answer your mother-in-law's 6 a.m. good-morning texts with warm, personalised replies, sold to relieved spouses for $5 a month.";

// Competition cap: entry.txt must be 1 to 200 characters, not only whitespace.
if (ENTRY.trim().length === 0 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 non-whitespace characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
