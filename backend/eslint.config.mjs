import baseConfig from '../eslint.config.mjs'

export default [
  ...baseConfig,
  {
    files: ['src/generated/**/*.ts'],
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
]
