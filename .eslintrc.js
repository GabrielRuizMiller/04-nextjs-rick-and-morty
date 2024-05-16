module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["next/babel"],
    },
  },
  rules: {
    // Aquí puedes definir o modificar reglas específicas
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    // Extiende de configuraciones estándar, por ejemplo:
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      version: "detect", // Detecta automáticamente la versión de React
    },
  },
};