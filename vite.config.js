import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esta línea es clave para que funcione en GitHub Pages
  base: '/Video-Juegos-CV/',
});

