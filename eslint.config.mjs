import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["*.config.*"],
    languageOptions: { parser },
    rules: {
      semi: "error",
      "prefer-const": "error",
      quotes: ["error", "double", { avoidEscape: true }],
      "no-var": "error",
      "object-curly-spacing": ["error", "always"],
      "brace-style": ["error", "1tbs"],
    },
  },
];

export default eslintConfig;
