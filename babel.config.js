module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          '@src': './src',
        },
      },
    ],
  ],
};
