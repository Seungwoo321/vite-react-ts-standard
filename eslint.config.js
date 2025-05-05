import { defineConfig } from 'eslint/config'
import standardJs from '@seungwoo321/eslint-plugin-standard-js'
import standardJsx from '@seungwoo321/eslint-plugin-standard-jsx'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    extends: [
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      ...standardJs.configs.recommended,
      ...standardJsx.configs.recommended
    ]
  }
])
