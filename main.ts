// Warning Label for Humans — one line, big laugh.
//
// The safety warning label that should come printed on every human being:
// a deadpan contents label, because the funniest thing about people is how
// confidently wrong we are about our own abilities.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: This human is 60% water, 40% unfinished tasks, and 100% convinced they could survive alone in the woods.";

// The gate is part of the program: an entry is only valid as one line of
// 1 to 160 characters, so refuse to print anything that is not exactly that.
const MAX_LENGTH = 160;

if (LABEL.length < 1 || LABEL.length > MAX_LENGTH || LABEL.includes("\n")) {
  process.stderr.write("entry is not a valid single-line label\n");
  process.exit(1);
}

// The sealed scorer reads the entry from $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), not from stdout — so write the exact entry
// text there, with no trailing newline in the file.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LABEL, "utf8");

// The entry is exactly this one line: print it and nothing else.
process.stdout.write(LABEL + "\n");
