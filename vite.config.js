import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist', // Change this to 'dist' for default output directory
    },
    plugins: [react()],
    assetsInclude: ['**/*.glb']
  };
});