import viteStylelint from '@amatlash/vite-plugin-stylelint'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [eslintPlugin(), viteStylelint(), tsconfigPaths()]
})
