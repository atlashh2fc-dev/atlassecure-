import eslint from "@eslint/js"
import tseslint from "@typescript-eslint/eslint-plugin"
import parser from "@typescript-eslint/parser"
import prettier from "eslint-config-prettier"

export default [
  eslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser,
      globals: {
        process: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
      },
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  prettier,
]
