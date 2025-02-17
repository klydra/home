type ContentPage = {
  id: string;
  title: string;
};

const pages = [
  {
    id: "main",
    title: "Main",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "occupation",
    title: "Occupation",
  },
  {
    id: "interests",
    title: "Interests",
  },
  {
    id: "engineering",
    title: "Engineering",
  },
  {
    id: "signatures",
    title: "Signatures",
  },
  {
    id: "exit",
    title: "Exit",
  },
] as const satisfies ContentPage[];
export const contentPages = pages as Readonly<ContentPage[]>;
