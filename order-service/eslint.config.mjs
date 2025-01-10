import globals from "globals";
import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: { ...globals.browser },
    },
    plugins: {
      "@typescript-eslint": typescript, // Correct variable name
    },
    rules: {
      // Extend recommended rules and add custom rules
      ...js.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      semi: ["error", "always"], // Enforce semicolons
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      // TypeScript-specific rules
      ...typescript.configs.recommended.rules,
      semi: ["error", "always"],
    },
  },
];
