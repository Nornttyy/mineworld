// 无头进世界定机位截图：菜单 → 建固定种子世界(创造,防摔死) → 等区块铺满 → 逐机位设时间/位置/朝向 → 截图。
// 用法: node shot-world.mjs <outdir> [seed] [quality]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const outdir = process.argv[2] || '/tmp/shots';
const seed = process.argv[3] || '7';
const quality = process.argv[4] || 'standard'; // off | standard | high
mkdirSync(outdir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--ignore-gpu-blocklist', '--enable-webgl', '--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));

await page.addInitScript((q) => {
  localStorage.setItem('mineworld.settings', JSON.stringify({ volume: 70, lightingQuality: q, texturePack: 'cartoon', renderDistance: 6 }));
}, quality);

await page.goto(process.env.MW_URL || 'http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForSelector('#menu:not(.hidden)', { timeout: 30000 });
await page.click('#play');
await page.click('#create-world');
await page.fill('#nw-name', 'shots');
await page.fill('#nw-seed', seed);
await page.click('#nw-creative'); // 创造模式：无伤害，传送不会摔死
await page.click('#nw-create');

await page.waitForFunction(() => window.__mw, null, { timeout: 60000 });
// 冻结模拟：退出指针锁。main.ts 在 __mw 赋值【之后】才 requestPointerLock,须等它落地再退,否则重新锁上(竞态)
await page.evaluate(() => document.exitPointerLock());
await page.waitForTimeout(600);
await page.evaluate(() => document.exitPointerLock());
await page.waitForTimeout(12000); // 等 worker 铺满初始区块(SwiftShader 慢)

// 找出生点附近的地表水
const info = await page.evaluate(() => {
  const g = window.__mw;
  const p = g.player.pos;
  let water = null;
  outer: for (let r = 10; r <= 220; r += 6) {
    for (let a = 0; a < 24; a++) {
      const x = Math.round(p.x + r * Math.cos((a / 24) * Math.PI * 2));
      const z = Math.round(p.z + r * Math.sin((a / 24) * Math.PI * 2));
      for (let y = 100; y > 40; y--) {
        const id = g.world.getBlock(x, y, z);
        if (id === 0) continue;
        if (id === 9) { water = { x, y, z }; break outer; } // WATER=9
        break;
      }
    }
  }
  window.__waterPos = water;
  window.__spawn = { x: p.x, y: p.y, z: p.z };
  return { spawn: window.__spawn, water };
});
console.log('spawn:', JSON.stringify(info.spawn), 'water:', JSON.stringify(info.water));

const views = [
  { name: 'noon_horizon', time: 6000, yaw: 0, pitch: -0.1 },
  { name: 'noon_over', time: 6000, yaw: 0.7, pitch: -0.65, up: 26 },
  { name: 'morning_sun', time: 700, yaw: 0, pitch: -0.02 }, // 面向 +X(日出方向),低太阳
  { name: 'midnight', time: 18000, yaw: Math.PI, pitch: 0.05 }, // 半夜,面向月亮(-X)
];
if (info.water) {
  views.push({ name: 'water_noon', time: 6000, pitch: -0.38, water: true });
  views.push({ name: 'water_graze', time: 6000, pitch: -0.1, water: true });
}

for (const v of views) {
  await page.evaluate((view) => {
    const g = window.__mw;
    const sp = window.__spawn;
    g.worldTime = view.time;
    const surfaceY = (x, z) => {
      for (let y = 130; y > 40; y--) if (g.world.getBlock(Math.round(x), y, Math.round(z)) !== 0) return y + 1;
      return 80;
    };
    let px = sp.x, pz = sp.z, yaw = view.yaw ?? 0;
    if (view.water && window.__waterPos) {
      const w = window.__waterPos;
      const dx = w.x - sp.x, dz = w.z - sp.z;
      const d = Math.hypot(dx, dz) || 1;
      px = w.x - (dx / d) * 15; pz = w.z - (dz / d) * 15;
      yaw = Math.atan2(w.z - pz, w.x - px);
    }
    const py = Math.max(surfaceY(px, pz), (view.water && window.__waterPos) ? window.__waterPos.y + 1 : 0) + 1.2 + (view.up || 0);
    g.player = { pos: { x: px, y: py, z: pz }, vel: { x: 0, y: 0, z: 0 }, onGround: false };
    g.prev = g.player; // 冻结时相机用 prev 插值,必须同步,否则相机不跟传送
    g.look.yaw = yaw;
    g.look.pitch = view.pitch;
  }, v);
  await page.waitForTimeout(3500);
  await page.evaluate(() => {
    document.getElementById('pause')?.classList.add('hidden'); // 退出指针锁会弹暂停菜单,截图前藏掉
    const d = document.getElementById('death');
    if (d) d.style.display = 'none';
  });
  await page.waitForTimeout(200);
  await page.screenshot({ path: `${outdir}/${v.name}.png` });
  console.log('shot:', v.name);
}

console.log('console errors:', errors.length ? '\n' + errors.slice(0, 10).join('\n') : 'NONE');
await browser.close();
