import { defineConfig } from 'vitest/config';

// Vite 用它当 dev/build 配置；Vitest 读取 test 字段。两者共用一个配置文件。
export default defineConfig({
  test: {
    include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
  },
});
