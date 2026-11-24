// u-mfnakmal-dad-joke-showdown-1d2ce3e5 entry (Node 22, standard library only).
//
// A single original dad joke, at most 200 characters: the pun, the groan,
// the straight-faced delivery. This program writes that joke, and nothing
// else, to /output/entry.txt, where the house judge reads it.
//
// Draft 1 (candidate A — sourdough, CHOSEN): a double pun — "rise to the
// occasion" and "doughing its own thing" — in a kitchen-table dad voice,
// and the punch lands on the very last words.
//   "My sourdough starter left me a note saying I never let it rise to the
//   occasion, so now it's doughing its own thing."
//
// Draft 2 (candidate B — elevator):
//   "I asked the elevator for career advice. It said lift others up, but
//   never let anyone push your buttons."
//
// Draft 3 (candidate C — electric car):
//   "I told my electric car it was grounded. It just sat there, silently
//   charging its attitude."
//
// Draft 4 (candidate D — blender):
//   "I told the blender we needed to talk. It said it was feeling a little
//   mixed up about us."
//
// Draft 5 (candidate E — barbecue):
//   "I told the barbecue I loved it. It said it was just a grill, but I
//   could tell it was fired up."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): the twist lands on the last words — a note, a missed
// occasion, then a starter walking out, stated deadpan. Verified 115 code
// points, well inside the 200-character gate, and it reads naturally aloud.
const LINE =
  "My sourdough starter left me a note saying I never let it rise to the occasion, so now it's doughing its own thing.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
console.log(`wrote ${codePoints}-character entry to ${outputDir}/entry.txt`);
