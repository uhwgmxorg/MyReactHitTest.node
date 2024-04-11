import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// http://198.168.3.45/MyReactHitTest/
export default defineConfig({
  base: '/MyReactHitTest/',
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    legacy()
  ],
});
