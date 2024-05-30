import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import react from 'eslint-plugin-react';
import reactNativ from 'eslint-plugin-react-native';

export default [
  {languageOptions: {globals: {...globals.browser, ...globals.node}}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      'eslint-plugin-react': react,
      'eslint-plugin-react-native': reactNativ,
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-unused-vars': 0,
    },
  },
];
