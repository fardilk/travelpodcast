import { defineConfig } from 'vite'
import { createRequire } from 'node:module'
import { fileURLToPath, URL } from 'node:url'

const require = createRequire(import.meta.url)
const react = require('@vitejs/plugin-react')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: './', // 🔥 tambahin ini supaya asset path relatif
})
