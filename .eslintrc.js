module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },

  env: {
    es6: true,
    node: true,
  },
};
