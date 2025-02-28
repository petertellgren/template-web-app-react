module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],
  "ignorePatterns": ["**/dist/*", "**/node_modules/*"],
  "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier", "formatjs", "import"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    // Common
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*/*/*", "!@mui/material/test-utils/*"]
      }
    ],
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "groups": ["builtin", "external", "parent", "sibling", "index"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"]
      }
    ],
    "func-style": ["error", "declaration", { "allowArrowFunctions": false }],
    // React
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      "warn",
      {
        "namedComponents": ["function-declaration"]
      }
    ],
    "react-hooks/exhaustive-deps": "error",
    // Typescript
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports"
      }
    ],
    // Plugins
    "prettier/prettier": "error",
    "formatjs/enforce-id": [
      "error",
      {
        "idInterpolationPattern": "[sha512:contenthash:base64:6]"
      }
    ]
  },
  "overrides": [
    {
      // Disable for Storybook
      "files": ["*stories.tsx", "main.ts"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
};
