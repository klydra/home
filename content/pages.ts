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
    id: "contact",
    title: "Contact",
  },
] as const satisfies ContentPage[];
export const contentPages = pages as Readonly<ContentPage[]>;
