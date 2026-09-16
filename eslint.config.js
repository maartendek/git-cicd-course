import react from "eslint-plugin-react";

export default [
  {
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
    },
  },
];
