export type Signature = {
  date: string;
  name: string;
};

export async function loadSignatures() {
  const signatures = await fetch("/signatures.csv");
  if (signatures.status !== 200) return [];

  const text = await signatures.text();
  return text.split("\n").map((signature) => {
    const [date, name] = signature.split(",");
    return { name, date } satisfies Signature;
  });
}
