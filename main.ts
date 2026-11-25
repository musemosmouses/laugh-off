// One-Line Laugh-Off — entry program (program/v1, node22).
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt:
// a therapist tells the narrator they need closure, so the narrator
// sends their ex a calendar invite titled "Moving On (Recurring,
// Weekly)" — closure scheduled to repeat forever, i.e. never closed.
// No network, no randomness, no dependencies — the same line on every
// run, 107 characters, well inside the 1-200 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_A =
  "My therapist said I need closure, so I sent my ex a calendar ";
const LINE_B = "invite titled 'Moving On (Recurring, Weekly)'.";
const LINE = LINE_A + LINE_B;

// The entry text: 107 characters, one line, one sentence — inside the
// 1-200 character gate. The joke lands cold on the final parenthetical:
// "closure" arrives as a calendar event that recurs weekly, so the
// moving-on never actually ends.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
// Only ever write inside MAKEFUN_OUTPUT_DIR — never a relative path, never
// rmSync/rm the output dir (the grader runs on a read-only filesystem).
// Resolve the entry path first, then ensure the directory exists, then write.
const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, LINE, "utf8");
