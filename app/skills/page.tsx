"use client";

import { Split } from "@/components/split";
import { contentOccupations } from "@/content/occupations";

export default function Page() {
  return (
    <Split>
      {contentOccupations.map((occupation) => {
        if (!occupation) return occupation;

        return {
          title: occupation.title,
          option: () => (
            <span className="line-clamp-2">
              {occupation.timeframe}
              <br />
              {occupation.relation}
            </span>
          ),
          panel: () => (
            <div>
              <img src={`/assets/occupation/${occupation.id}_pixelated.png`} />
              <h1 className="text-highlight text-3xl mt-8">
                {occupation.relation}
              </h1>
              <h3 className="text-xl mt-3">{occupation.role}</h3>
              <p className="mt-8">{occupation.description}</p>
            </div>
          ),
        };
      })}
    </Split>
  );
}
