module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
    mocha: true,
    commonjs: true,
    node: true
  },

  extends: [
    'standard',
    'standard-react',
    'react-app',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['prettier', 'jsx-a11y', 'sg']
};
