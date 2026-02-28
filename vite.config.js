import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Video-Juegos-CV/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Opcional, para configuración extra
  }
  
})

