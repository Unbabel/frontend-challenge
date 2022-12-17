import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9090,
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  plugins: [vue(), svgLoader()],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'jsdom',
    root: 'tests/unit',
  },
})
