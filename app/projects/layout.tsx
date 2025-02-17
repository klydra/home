"use client";

import { Split } from "@/components/split";
import { contentProjects } from "@/content/projects";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ProjectTechnologies } from "./[project]/page";

const TIMELINE_START = new Date("2017-06-01");
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
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (!params.project) return;
    const index = contentProjects.findIndex(
      (project) => project.id === params.project
    );
    if (index !== -1) return setSelectedIndex(index);
  }, [params.project]);

  const timeline = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (timeline.current?.scrollLeft !== null)
      timeline.current!.scrollLeft = window.innerWidth;
  }, [timeline]);

  return (
    <div className="flex flex-col h-full relative">
      {children}
      <div className="flex-grow">
        <Split
          flexLeft={2}
          flexRight={3}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          disabled={typeof params.project === "string"}
        >
          {contentProjects.map((project) => ({
            title: project.title,
            panel: (
              <div className="flex flex-col gap-4">
                <img
                  className="w-full max-w-64 min-w-8"
                  src={`/assets/projects/${project.id}_pixelated.png`}
                />
                <h2 className="text-2xl text-highlight pt-8">
                  {project.title}
                </h2>
                <p>{project.teaser || project.description}</p>
                <ProjectTechnologies
                  technologies={project.technologies}
                  className="mt-10"
                  limit={5}
                />
                <p className="mt-8">
                  Press <span className="text-highlight">[Enter]</span> or{" "}
                  <span className="text-highlight">[Click]</span> to see more...
                </p>
              </div>
            ),
            onSelect: () => router.push(`/projects/${project.id}`),
          }))}
        </Split>
      </div>
      <div className="border-t-2 border-primary p-4 flex flex-col">
        <h2 className="pb-2">Timeline</h2>
        <div className="flex-grow overflow-x-auto pb-8" ref={timeline}>
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
                    setSelectedIndex={setSelectedIndex}
                  />
                ))}
                <TimelineHead />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineRow({
  layer,
  selectedIndex,
  setSelectedIndex,
}: {
  layer: number;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}) {
  const router = useRouter();

  return (
    <tr>
      <td className="flex flex-row items-center justify">
        [
        <div className="relative h-6">
          {contentProjects
            .map((project, index) => ({
              ...project,
              selected: selectedIndex === index,
              index,
            }))
            .filter((project) => project.layer === layer)
            .map((project) => {
              const length =
                (+(project.end || TIMELINE_END) - +project.start!) *
                TIMELINE_SCALE_PX;

              return (
                <button
                  aria-disabled={true}
                  tabIndex={undefined}
                  onMouseOver={() => setSelectedIndex(project.index)}
                  onClick={() => router.push(`/projects/${project.id}`)}
                  key={project.id}
                  className="absolute flex flex-row items-center h-6 focus:text-highlight hover:text-highlight"
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
                  {project.selected && <span className="pl-1">{"["}</span>}
                  <div className="flex-grow h-full overflow-hidden text-center mx-4">
                    <span className="max-w-full">{project.title}</span>
                  </div>
                  {project.selected && <span>{"]"}</span>}
                </button>
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
