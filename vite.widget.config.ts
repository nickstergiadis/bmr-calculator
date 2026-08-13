import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'wordpress-plugin/assets',
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/wordpress-entry.tsx'),
      name: 'RestoreBmrCalculator',
      formats: ['iife'],
      fileName: () => 'bmr-calculator-widget.js'
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});
