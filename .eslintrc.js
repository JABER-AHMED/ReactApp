// .eslintrc.js
module.exports = {
    // parser: '@typescript-eslint/parser',
    // plugins: ['@typescript-eslint'],
    // extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
      // Add specific rules as needed
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
        "react/jsx-indent": ["error", 2],
        "react/jsx-props-no-spreading": "off",
        "react/self-closing-comp": "error",
    },
  };
  