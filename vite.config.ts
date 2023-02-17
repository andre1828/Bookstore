import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import { VitePluginFonts } from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react-ts-ghactions-template/',
  plugins: [
    react(),
    tsconfigPaths(),
    VitePluginFonts({
      google: {
        families: ['Inter']
      }
    })
  ],
  build: {
    sourcemap: true
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['html', 'lcov']
    }
  }
});
