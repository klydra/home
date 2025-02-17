"use client";

import { Split } from "@/components/split";
import { contentInterests } from "@/content/interests";

export default function Page() {
  return (
    <Split>
      {contentInterests.map((interest) => {
        if (!interest) return interest;

        return {
          title: interest.title,
          option: () => <span>{interest.time}</span>,
          panel: () => (
            <div>
              <img src={`/assets/interests/${interest.icon}_pixelated.png`} />
              <h1 className="text-highlight text-3xl mt-8">{interest.title}</h1>
              <h3 className="text-xl mt-3">{interest.time}</h3>
              <div className="mt-8">{interest.description}</div>
            </div>
          ),
        };
      })}
    </Split>
  );
}
