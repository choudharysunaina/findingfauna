import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
  };

  // Only add base path for production builds (GitHub Pages)
  if (command === 'build') {
    config.base = '/findingfauna'; // Replace 'kuno_full' with your actual repository name
  }

  return config;
});
