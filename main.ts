// One Line, One Laugh — a single self-contained one-liner.
//
// The joke is built from two halves on purpose: a believable setup that
// sounds like a fitness humble-brag, then a twist that reframes the
// "exercise" as something entirely unathletic. The whole line is fixed
// and deterministic: the same input always produces the same output,
// byte for byte, so the two grader runs agree with each other.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const MAX_CHARS = 140;

// Setup: a smartwatch reporting a respectable calorie burn.
const SETUP = "My smartwatch says I burned 300 calories today";
// Twist: the "running" was never physical — it was running out of
// excuses, i.e. the one workout procrastination actually trains.
const TWIST = "mostly from running out of excuses to avoid the gym.";

function composeLine(): string {
  // One breath, one sentence, no second line to explain it.
  return `${SETUP} — ${TWIST}`;
}

function validateLine(line: string): void {
  // The gate counts characters, not bytes: the em dash is one character
  // but three UTF-8 bytes, so length here is the character count (101),
  // while the file on disk is 103 bytes. Both are inside the gate.
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  const line = composeLine();
  validateLine(line);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  // No trailing newline: the gate counts every character in the file,
  // so the file holds exactly the joke and nothing else.
  writeFileSync(join(OUTPUT_DIR, OUTPUT_FILE), line, "utf8");
  console.log(`Wrote ${line.length} characters to ${join(OUTPUT_DIR, OUTPUT_FILE)}`);
}

main();
