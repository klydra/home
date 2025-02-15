type ContentTechnology = {
  id: string;
  title: string;
};

export const contentTechnologies = [
  {
    id: "react",
    title: "React",
  },
  {
    id: "unreal-engine",
    title: "Unreal Engine",
  },
] as const satisfies ContentTechnology[];

export type ContentTechnologyID = (typeof contentTechnologies)[number]["id"];
