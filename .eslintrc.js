module.exports = {
  extends: [],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // Disable all problematic rules
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  globals: {
    React: 'readonly',
    JSX: 'readonly'
  }
};
