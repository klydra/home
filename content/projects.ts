import { ContentTechnologyID } from "./technologies";

type ContentProject = {
  id: string;
  technologies: ContentTechnologyID[];
};

export const contentProjects = [
  {
    id: "lgh-mobile",
    technologies: ["react", "unreal-engine"],
  },
] as const satisfies ContentProject[];
