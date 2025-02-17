import {
  contentTechnologies,
  ContentTechnologyID,
} from "@/content/technologies";
import { twMerge } from "tailwind-merge";

export function ProjectTechnologies({
  technologies,
  className,
  limit,
}: {
  technologies: ContentTechnologyID[] | null;
  className?: string;
  limit?: number;
}) {
  if (!technologies) return null;

  const cut =
    limit && limit < technologies.length && technologies.length - limit;

  return (
    <div className={twMerge("flex flex-col gap-4 cursor-pointer", className)}>
      <h3 className="text-highlight">Technologies</h3>
      <div className="flex flex-row gap-y-4 gap-x-8 flex-wrap">
        {technologies
          ?.filter((_, index) => !cut || index < limit)
          .map((name, index) => {
            const technology = contentTechnologies.find(
              (technology) => technology.id === name
            );

            if (!technology) return null;

            return (
              <div
                className="flex flex-row gap-4 items-center opacity-80 hover:opacity-100"
                onClick={() => window.open(technology.link, "_blank")}
                key={index}
              >
                <div className="size-8 flex flex-col items-center justify-center">
                  <img
                    src={`/assets/technologies/${
                      technology.hasOwnProperty("icon")
                        ? technology.icon
                        : technology.id
                    }_pixelated.png`}
                  />
                </div>
                <p style={{ color: technology.color }} className="text-sm">
                  {technology.title}
                </p>
              </div>
            );
          })}
        {cut && <p>{cut} more...</p>}
      </div>
    </div>
  );
}
