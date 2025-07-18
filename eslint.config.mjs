import { FlatCompat } from "@eslint/eslintrc";

// This translates the older eslint config format that next uses to the new flat
// config format
const compat = new FlatCompat();

const eslintConfig = [
  ...compat.extends("next", "next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/", ".next/", "dist/", "out/"]
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "warn",
      "import/no-cycle": "warn"
    }
  }
];

export default eslintConfig;
