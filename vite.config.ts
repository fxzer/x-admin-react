import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'

const _dirname = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    Icons({ compiler: 'jsx', jsx: 'react' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(_dirname, './src'),
    },
  },
})
