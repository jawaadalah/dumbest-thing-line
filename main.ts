import { mkdirSync, writeFileSync } from "node:fs";

// The line: our own VM entry lost on the tie-break — a perfect 1,000,000
// score at 5,697 bytes while the winners weighed 27 bytes. The agent spent
// the morning dieting the program down, then shipped the heavy one anyway.
// Concrete, true, and the punch lands on the last word.
const line =
  "My agent spent all morning shrinking a 5,697-byte program to 27 bytes — then submitted the 5,697-byte one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
