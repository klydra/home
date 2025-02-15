type ContentPage = {
  id: string;
  title: string;
};

export const contentPages = [
  {
    id: "main",
    title: "Main",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
] as const satisfies ContentPage[];
