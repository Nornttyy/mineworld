import { defineConfig } from 'vitest/config';

// Vite(dev/build) 与 Vitest 共用。GitHub Pages 部署在 /mineworld/ 子路径下，
// 故 build 时 base 设为 '/mineworld/'，dev 保持 '/'。
export default defineConfig(({ command, isPreview }) => {
  const buildVersion = Date.now().toString(36);
  return {
    base: command === 'build' || isPreview ? '/mineworld/' : '/',
    build: { rollupOptions: { input: { main: 'index.html', soundCheck: 'sound-check.html', architectureCheck:'tools/visual/biomes-check.html' } } },
    // 资源版本号(cache-busting)：每次构建变化 → 纹理 URL 变 → 浏览器自动拉新资源，免手动强刷
    define: {
      __ASSET_VER__: JSON.stringify(buildVersion),
    },
    plugins:
      command === 'build'
        ? [
            {
              name: 'mineworld-build-version',
              generateBundle() {
                // GitHub Pages 对 index.html/PNG 有 10 分钟缓存。客户端用不缓存的这个小文件
                // 发现新部署，不用再让玩家在网址后面手动加 ?v=。
                this.emitFile({
                  type: 'asset',
                  fileName: 'build-version.json',
                  source: JSON.stringify({
                    version: buildVersion,
                    targetJava: '26.3',
                    commit: process.env.GITHUB_SHA ?? null,
                  }),
                });
              },
            },
          ]
        : [],
    test: {
      include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
    },
  };
});
