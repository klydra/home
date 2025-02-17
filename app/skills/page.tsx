"use client";

import { Split } from "@/components/split";
import { contentSkills } from "@/content/skills";

export default function Page() {
  return (
    <Split>
      {contentSkills.map((skill) => {
        if (!skill) return skill;

        return {
          title: skill.title,
          option: () => <span>{skill.time}</span>,
          panel: () => (
            <div>
              <img src={`/assets/skills/${skill.icon}_pixelated.png`} />
              <h1 className="text-highlight text-3xl mt-8">{skill.title}</h1>
              <h3 className="text-xl mt-3">{skill.time}</h3>
              <div className="mt-8">{skill.description}</div>
            </div>
          ),
        };
      })}
    </Split>
  );
}
