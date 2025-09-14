import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    // Add pool configuration for better stability
    pool: 'forks',
    // Increase timeout for CI environments
    testTimeout: 30000,
    // Better error handling
    silent: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        'src/types/',
        '**/*.d.ts',
        'vite.config.ts',
        'vitest.config.ts',
        'eslint.config.js',
        'tailwind.config.js',
        'postcss.config.js',
      ],
    },
    // Add environment options for better JSDOM compatibility
    environmentOptions: {
      jsdom: {
        resources: 'usable',
        runScripts: 'dangerously',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
  // Add esbuild target for better Node.js compatibility
  esbuild: {
    target: 'node18',
  },
});
