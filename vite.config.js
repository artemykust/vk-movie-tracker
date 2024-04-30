import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@assets": path.resolve("src/assets"),
      "@components": path.resolve("src/components"),
      "@pages": path.resolve("src/pages"),
      "@stores": path.resolve("src/stores")
    }
  }
})
