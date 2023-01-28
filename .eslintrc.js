module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'component-name-first-letter-caps',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'component-name-first-letter-caps/first-letter-caps': [2]
  },
};
