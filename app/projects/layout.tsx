"use client";

import { Split, SplitRef } from "@/components/split";
import { contentProjects } from "@/content/projects";
import { useRef } from "react";

const TIMELINE_START = new Date("2016-06-01");
const TIMELINE_END = new Date();
const TIMELINE_SCALE_PX = 1 / 1000 / 60 / 60 / 24 / 2;
const TIMELINE_LENGTH =
  (TIMELINE_END.getTime() - TIMELINE_START.getTime()) * TIMELINE_SCALE_PX;

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
        <div className="flex-1 border-t-2 border-primary p-4 flex flex-col">
          <h2 className="pb-2">Timeline</h2>
          <div className="flex-grow overflow-x-auto">
            <div className="min-w-fit">
              <table
                className="table-fixed"
                style={{
                  minWidth: `calc(${TIMELINE_LENGTH}px + 2ch)`,
                  maxWidth: `calc(${TIMELINE_LENGTH}px + 2ch)`,
                }}
              >
                <tbody>
                  <TimelineRow layer={0} />
                  <TimelineHead />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

function TimelineRow({ layer }: { layer: number }) {
  return (
    <tr>
      <td className="flex flex-row items-center justify">
        [<div></div>
      </td>
      <td>]</td>
    </tr>
  );
}

function TimelineHead() {
  const yearFirst = TIMELINE_START.getFullYear() + 1;
  const yearLast = TIMELINE_END.getFullYear();

  const years = Array.from(
    { length: yearLast - yearFirst + 1 },
    (_, i) => yearFirst + i
  );

  return (
    <tr>
      <td className="flex flex-row items-center">
        [
        {years.map((year) => {
          const start = +new Date(`${year}-01-01`);
          const end =
            year === yearLast ? TIMELINE_END : new Date(`${year + 1}-01-01`);

          return (
            <>
              {year === yearFirst && (
                <div
                  style={{
                    width: `${
                      (+start - +TIMELINE_START) * TIMELINE_SCALE_PX
                    }px`,
                  }}
                ></div>
              )}
              <div className="h-6 w-0 flex flex-col items-center">
                <span>|</span>
                <span>{year}</span>
              </div>
              <div
                style={{ width: `${(+end - +start) * TIMELINE_SCALE_PX}px` }}
              ></div>
            </>
          );
        })}
      </td>
      <td>]</td>
    </tr>
  );
}
