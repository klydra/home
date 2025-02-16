"use client";

import { Split } from "@/components/split";
import { contentProjects } from "@/content/projects";
import { useEffect, useRef, useState } from "react";

const TIMELINE_START = new Date("2016-06-01");
const TIMELINE_END = new Date();
const TIMELINE_SCALE_PX = 1 / 1000 / 60 / 60 / 24 / 2;
const TIMELINE_LENGTH =
  (TIMELINE_END.getTime() - TIMELINE_START.getTime()) * TIMELINE_SCALE_PX;
const TIMELINE_LAYERS_AMOUNT =
  contentProjects.reduce((acc, project) => Math.max(acc, project.layer), 0) + 1;
const TIMELINE_LAYERS = Array.from(
  { length: TIMELINE_LAYERS_AMOUNT + 1 },
  (_, i) => i
);

export default function Page({ children }: { children: React.ReactNode }) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex-[2]">
          <Split
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          >
            {contentProjects.map((project) => ({
              title: project.title,
              panel: (
                <div className="flex flex-col gap-4">
                  <img
                    className="w-full max-w-64 min-w-8"
                    src={`/assets/projects/${project.id}_pixelated.png`}
                    style={{ imageRendering: "pixelated" }}
                  />
                  <h2 className="text-2xl text-highlight pt-8">
                    {project.title}
                  </h2>
                  {project.teaser}
                </div>
              ),
            }))}
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
                  {TIMELINE_LAYERS.map((layer) => (
                    <TimelineRow
                      key={layer}
                      layer={layer}
                      selectedIndex={selectedIndex}
                    />
                  ))}
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

function TimelineRow({
  layer,
  selectedIndex,
}: {
  layer: number;
  selectedIndex: number;
}) {
  return (
    <tr>
      <td className="flex flex-row items-center justify">
        [
        <div className="relative">
          {contentProjects
            .map((project, index) => ({
              ...project,
              selected: selectedIndex === index,
            }))
            .filter((project) => project.layer === layer)
            .map((project) => {
              const length =
                (+(project.end || TIMELINE_END) - +project.start!) *
                TIMELINE_SCALE_PX;

              const ref = useRef<HTMLDivElement>(null);

              useEffect(() => {
                if (project.selected) ref.current?.scrollIntoView();
              }, [project.selected]);

              return (
                <div
                  ref={ref}
                  key={project.id}
                  className="flex flex-row items-center h-6"
                  style={{
                    marginLeft: `${
                      (+project.start - +TIMELINE_START) * TIMELINE_SCALE_PX
                    }px`,
                    width: `${length}px`,
                    minWidth: `${length}px`,
                    maxWidth: `${length}px`,
                    backgroundColor: project.color,
                  }}
                >
                  {project.selected && <span>{"["}</span>}
                  <div className="flex-grow h-full overflow-hidden text-center mx-4">
                    <span className="max-w-full">{project.title}</span>
                  </div>
                  {project.selected && <span>{"]"}</span>}
                </div>
              );
            })}
        </div>
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
                  key={`${year}s`}
                  style={{
                    width: `${
                      (+start - +TIMELINE_START) * TIMELINE_SCALE_PX
                    }px`,
                  }}
                ></div>
              )}
              <div
                key={`${year}l`}
                className="h-6 w-0 flex flex-col items-center"
              >
                <span>|</span>
                <span>{year}</span>
              </div>
              <div
                key={`${year}e`}
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
