/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
    "async",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier", "sonarjs", "simple-import-sort"],
  rules: {
    "prettier/prettier": ["error"],
    "no-console": "off",
    "no-underscore-dangle": ["error", { allow: ["_id", "_v"] }],
    // autosort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // sonarjs
    "sonarjs/no-duplicate-string": "error",
    "sonarjs/cognitive-complexity": ["error", 20],
  },
};
