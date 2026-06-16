// 无头 Chromium 截图 + 控制台错误捕获（SwiftShader 软件渲染 WebGL）。
// 用法: node tools/shot.mjs [url] [outfile]
import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:5173/';
const out = process.argv[3] || '/tmp/shot.png';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--ignore-gpu-blocklist',
    '--enable-webgl',
    '--no-sandbox',
  ],
});
const page = await browser.newPage({ viewport: { width: 1024, height: 640 } });
const errors = [];
page.on('console', (m) => {
  if (m.type() === 'error') errors.push('console.error: ' + m.text());
});
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.screenshot({ path: out });

console.log('shot saved:', out);
console.log('console errors:', errors.length ? '\n' + errors.join('\n') : 'NONE');
await browser.close();
