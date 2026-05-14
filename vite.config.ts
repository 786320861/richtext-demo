import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    dedupe: [
      "@leafer-ui/core",
      "@leafer-in/editor",
      "@leafer-in/html",
      "leafer-ui",
      "quill",
    ],
  },
  optimizeDeps: {
    // exclude: ["@chenyomi/leafer-htmltext-edit"],
    // include: ['quill', 'quill-delta', 'crypto-js'],
  },
})
