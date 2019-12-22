module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["airbnb-base", "plugin:vue/recommended"],
  plugins: [
    // 'prettier'
  ],
  settings: {
    "import/resolver": {
      webpack: "webpack.config.js"
    }
  },
  rules: {
    // 'vue/max-len': ["error", {

    // }],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e", // for e.returnvalue
          "ctx", // for nuxt context extending
          "config"
        ]
      }
    ],
    "no-shadow": [
      "error",
      {
        allow: ["state", "getters"]
      }
    ],
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        ignores: []
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": "off"
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "max-len": "off"
        // 'max-len': ['error', 100, 2, {
        //   ignoreUrls: true,
        //   ignoreComments: false,
        //   ignoreRegExpLiterals: true,
        //   ignoreStrings: true,
        //   ignoreTemplateLiterals: true,
        // }],
      }
    }
  ]
};
