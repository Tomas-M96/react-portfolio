/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/dist/config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './_tests_/setup.ts',
    exclude:[
      ...configDefaults.exclude,
      "**/node_modules/**",
      "**/dist/**",
      "./postcss.config.js",
      "./tailwind.config.js"
    ]
  },
})
