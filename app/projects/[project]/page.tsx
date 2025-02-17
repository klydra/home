"use client";

import { ProjectTechnologies } from "@/components/project-techonologies";
import { contentProjects } from "@/content/projects";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    function escape(e: KeyboardEvent) {
      switch (e.key) {
        case "Escape":
          router.back();
          break;
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);

  const project = contentProjects.find(
    (project) => project.id === params.project
  );

  if (!project) return null;

  return (
    <div
      className="absolute w-full h-full z-10 p-8"
      style={{
        backgroundColor: "rgba(var(--secondary), 0.5)",
      }}
    >
      <div className="relative h-full w-full bg-secondary border-2 border-primary">
        <button
          className="absolute top-2 right-2 size-8 bg-secondary border-2 border-primary cursor-pointer hover:text-highlight focus:text-highlight"
          tabIndex={0}
          onClick={() => router.back()}
        >
          <p className="pl-0.5 -mt-0.5">x</p>
        </button>

        <div className="h-full w-full overflow-auto p-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="w-1/3 flex flex-col items-end gap-16 top-0 right-0 ml-10 mb-10 float-right max-h-fit">
              <img
                className="max-w-80"
                src={`/assets/projects/${project.id}.png`}
              />
              {project.links && (
                <div className="flex flex-col gap-5">
                  {project.links.map((link, index) => {
                    return (
                      <button
                        key={index}
                        className="flex flex-row justify-end items-center gap-3 opacity-80 hover:opacity-100 focus:opacity-100"
                        onClick={() => window.open(link.url, "_blank")}
                      >
                        <span style={{ color: link.color }}>{link.title}</span>
                        <span>{" - "}</span>
                        <div className="size-6 flex flex-col items-center justify-center">
                          <img src={`/assets/projects/links/${link.icon}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-highlight">{project.title}</h1>
                <p className="text-sm flex flex-col gap-3">
                  {project.description}
                </p>
              </div>
              {project.features && (
                <div className="flex flex-col gap-3 mt-14">
                  <h3 className="text-highlight">Features</h3>
                  <div className="flex flex-col gap-2">
                    {project.features.map((feature, index) => (
                      <div
                        className="flex flex-row gap-4 items-center"
                        key={index}
                      >
                        <p className="text-highlight">»</p>
                        <p className="text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <ProjectTechnologies
                technologies={project.technologies}
                className="mt-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
