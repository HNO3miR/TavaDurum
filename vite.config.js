import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Bu satır önemli

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // @ işaretini src klasörüne yönlendirir
    }
  }
})
