module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: { node: true, browser: true, es2022: true },
  parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
  ignorePatterns: ['dist', 'node_modules'],
  overrides: [
    {
      // 架构铁律：core 不许依赖渲染层与 three
      files: ['src/core/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [{ name: 'three', message: 'core 是纯逻辑，禁止 import three' }],
            patterns: [
              { group: ['**/render/**', '**/render'], message: 'core 禁止依赖 render 层' },
            ],
          },
        ],
      },
    },
  ],
};
