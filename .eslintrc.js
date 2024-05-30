module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 'off',
    /* 'linebreak-style': ['warn', 'windows'], */
    'linebreak-style': 0,
    'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
