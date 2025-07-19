/// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // ✅ This line enables describe, it, expect
    environment: 'jsdom', // ✅ Required for DOM testing (React Testing Library)
    exclude: [...configDefaults.exclude],
  },
});
