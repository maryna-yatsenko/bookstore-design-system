import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@tokens': resolve(__dirname, 'src/tokens'),
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
