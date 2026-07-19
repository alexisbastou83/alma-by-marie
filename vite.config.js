import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  // For Netlify
  // base: "/",
  // For Github Pages
  base: "/alma-by-marie/",
  plugins: [react()],
  css: {
    lightningcss: {
      errorRecovery: true
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        submitted: resolve(__dirname, 'submitted.html')
      }
    }
  }
})
