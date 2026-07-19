import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/",
  base: "/alma-by-marie/",
  plugins: [react()],
  css: {
    lightningcss: {
      errorRecovery: true
    }
  }
})
