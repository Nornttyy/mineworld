import { defineConfig } from 'vitest/config';

// Vite(dev/build) 与 Vitest 共用。GitHub Pages 部署在 /mineworld/ 子路径下，
// 故 build 时 base 设为 '/mineworld/'，dev 保持 '/'。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/mineworld/' : '/',
  test: {
    include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
  },
}));
