"use client";

import { Split } from "@/components/split";
import { loadSignatures, Signature } from "@/lib/signatures";
import { useEffect, useState } from "react";

export default function Page() {
  const [signatures, setSignatures] = useState<Signature[]>([]);
  useEffect(() => {
    loadSignatures().then(setSignatures);
  }, []);

  return (
    <Split>
      {[
        {
          title: "Sign here on GitHub",
          onSelect: () =>
            window.open(
              "https://github.com/klydra/home/blob/main/content/signatures.csv",
              "_blank"
            ),
        },
        null,
        null,
        ...signatures.map((signature) => {
          return {
            title: signature.name,
            option: () => (
              <span>
                {new Date(signature.date).toLocaleDateString("de-DE")}
              </span>
            ),
            disabled: true,
          };
        }),
      ]}
    </Split>
  );
}
