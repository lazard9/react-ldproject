// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  {
    files: ["**/*.jsx", "**/*.js"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Iskljucujemo ovo pravilo jer React 17+ to radi automatski
      "react/react-in-jsx-scope": "off",

      // Mogu se dodati i druga pravila
      "react/jsx-uses-react": "off",
      "react/prop-types": "off", // Mnogi koriste TypeScript ili prosto ne žele PropTypes

      // Povezujemo preporučena pravila za hooks
      ...reactHooks.configs.recommended.rules,
    },
  },
];
