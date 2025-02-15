import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        highlight: "rgb(var(--highlight))",
        secondary: "rgb(var(--secondary))",
      },
    },
    fontFamily: {
      command: ["IBM"],
    },
  },
  plugins: [],
} satisfies Config;
