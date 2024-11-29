import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

const a11yOff = Object.keys(jsxA11yPlugin.rules).reduce((acc, rule) => {
  acc[`jsx-a11y/${rule}`] = "off";
  return acc;
}, {});

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "react/destructuring-assignment": "off",
      "no-underscore-dangle": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": ["warn", { allow: ["warn", "error", "debug", "info"] }],
      "@typescript-eslint/no-this-alias": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/no-empty-function": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "no-restricted-syntax": "off",
      "import/no-unresolved": ["error", { ignore: ["^virtual:"] }],
      "react/jsx-props-no-spreading": "off",
      "consistent-return": "off",
      "no-continue": "off",
      "no-eval": "off",
      "no-await-in-loop": "off",
      "no-nested-ternary": "off",
      "prefer-destructuring": "off",
      "no-param-reassign": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".js", ".tsx", ".jsx"] },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "unknown",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true,
        },
      ],
      ...a11yOff,
    },
  },
];
