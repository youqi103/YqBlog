import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
const isElectron = process.env.IS_ELECTRON === 'true'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base:
    process.env.NODE_ENV === 'production' && !isElectron
      ? '/YqBlog/' // 仅 GitHub Pages 生产环境加前缀
      : '/',
})
