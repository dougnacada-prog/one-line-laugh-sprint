// One-Line Laugh Sprint — make.fun entry.
// The program writes a single original funny line about everyday life
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I meal-prepped for the whole week on Sunday, and by Monday night I was eating cereal over the sink like a raccoon in a borrowed blazer.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
