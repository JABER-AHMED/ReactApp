module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "plugins": ["react", "react-hooks"],
    "parserOptions": {
      "ecmaVersion": 2021,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "globals": {
      "test": "readonly",
      "React": "readonly",
      "expect": "readonly",
      "document": "readonly"
    },
    "env": {
      "node": true,
      "es6": true
    },
    "rules": {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-indent": ["error", 2],
      "react/jsx-props-no-spreading": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "error",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "max-len": ["error", {
        "code": 80,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }]
    },
  };  