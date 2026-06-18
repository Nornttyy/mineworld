import { defineConfig } from 'vitest/config';

// Vite(dev/build) 与 Vitest 共用。GitHub Pages 部署在 /mineworld/ 子路径下，
// 故 build 时 base 设为 '/mineworld/'，dev 保持 '/'。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/mineworld/' : '/',
  // 资源版本号(cache-busting)：每次构建变化 → 纹理 URL 变 → 浏览器自动拉新资源，免手动强刷
  define: {
    __ASSET_VER__: JSON.stringify(Date.now().toString(36)),
  },
  test: {
    include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
  },
}));
