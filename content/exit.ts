type ContentExit = {
  id: string;
  title: string;
  username: string;
  link: {
    url: string;
    text: string;
  };
};

const exits = [
  {
    id: "mail",
    title: "E-Mail",
    username: "hello@klydra.dev",
    link: {
      url: "mailto:hello@klydra.dev",
      text: "hello@klydra.dev",
    },
  },
  {
    id: "github",
    title: "GitHub",
    username: "@klydra",
    link: {
      url: "https://github.com/klydra",
      text: "github.com/klydra",
    },
  },
  {
    id: "discord",
    title: "Discord",
    username: "@klydra",
    link: {
      url: "https://discord.com/users/454335808497909760",
      text: "discord.com/users/***",
    },
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    username: "@klydra",
    link: {
      url: "https://www.linkedin.com/in/klydra",
      text: "linkedin.com/in/klydra",
    },
  },
] as const satisfies ContentExit[];
export const contentExits = exits as Readonly<ContentExit[]>;
