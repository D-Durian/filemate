import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the React frontend running inside Dev Containers
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
