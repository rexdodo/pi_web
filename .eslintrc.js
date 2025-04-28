// .eslintrc.js
module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      // … 其它 extends …
    ],
    plugins: [
      'react',
      'import',
    ],
    rules: {
      // 关闭“必须用 default export”提示（你之前加的）
      'import/prefer-default-export': 'warn',
  
      // 下面这两条原本是报错的，改成 off 或 warning 就不会阻断 build
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
  
      // 如果你还想让它们只警告，不阻断，也可以这样：
      // 'react/no-unescaped-entities': 'warn',
      // 'react/display-name': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  