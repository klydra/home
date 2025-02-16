"use client";

import { Split, SplitRef } from "@/components/split";
import { contentProjects } from "@/content/projects";
import { useRef } from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  const split = useRef<SplitRef>(null);

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex-[2]">
          <Split ref={split}>
            {contentProjects.map((project) => ({ title: project.id }))}
          </Split>
        </div>
        <div className="flex-1 border-t-2 border-primary p-4">
          <h2>Timeline</h2>
        </div>
      </div>
      {children}
    </>
  );
}
