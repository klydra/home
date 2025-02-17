"use server";

import { promises as fs } from "fs";

export type Signature = {
  date: string;
  name: string;
};

export async function loadSignatures() {
  const signatures = await fs.readFile("./content/signatures.csv", "utf8");
  return signatures.split("\n").map((signature) => {
    const [date, name] = signature.split(",");
    return { name, date } satisfies Signature;
  });
}
