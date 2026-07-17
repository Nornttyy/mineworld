// 洞穴/暗处光照验证：进洞截 黑暗→放火把→地下水池→黑暗生物；再截半夜地表生物。
// 用法: MW_URL=... node cave-shot.mjs <outdir> [seed] [quality]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const outdir = process.argv[2] || '/tmp/cave-shots';
const seed = process.argv[3] || '3';
const quality = process.argv[4] || 'standard';
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
await page.fill('#nw-name', 'caveshots');
await page.fill('#nw-seed', seed);
await page.click('#nw-creative');
await page.click('#nw-create');
await page.waitForFunction(() => window.__mw, null, { timeout: 60000 });
// main.ts 在 __mw 赋值【之后】才 requestPointerLock：等它落地再退锁,否则重新锁上(竞态,模拟没冻结)
await page.evaluate(() => document.exitPointerLock());
await page.waitForTimeout(600);
await page.evaluate(() => document.exitPointerLock());
await page.waitForTimeout(12000);

const hide = async () => page.evaluate(() => {
  document.getElementById('pause')?.classList.add('hidden');
  const d = document.getElementById('death');
  if (d) d.style.display = 'none';
});

// 找一个洞穴腔体：地下 y∈[25,60]、连续 3 格空气、上有顶下有底
const cave = await page.evaluate(() => {
  const g = window.__mw;
  const p = g.player.pos;
  const solid = (x, y, z) => { const id = g.world.getBlock(x, y, z); return id !== 0 && id !== 9; };
  for (let r = 4; r <= 100; r += 4) {
    for (let a = 0; a < 16; a++) {
      const x = Math.round(p.x + r * Math.cos((a / 16) * Math.PI * 2));
      const z = Math.round(p.z + r * Math.sin((a / 16) * Math.PI * 2));
      for (let y = 55; y >= 25; y--) {
        // 底实 + 3 格空气 + 顶上 12 格内有实心(封顶,无天光)
        if (!solid(x, y - 1, z)) continue;
        if (g.world.getBlock(x, y, z) !== 0 || g.world.getBlock(x, y + 1, z) !== 0 || g.world.getBlock(x, y + 2, z) !== 0) continue;
        let roofed = false;
        for (let yy = y + 3; yy <= y + 15; yy++) if (solid(x, yy, z)) { roofed = true; break; }
        if (!roofed) continue;
        return { x, y, z };
      }
    }
  }
  return null;
});
console.log('cave:', JSON.stringify(cave));
if (!cave) { console.log('未找到洞穴,退出'); await browser.close(); process.exit(1); }

// 传送进洞 + 在黑暗里放一头猪
await page.evaluate((c) => {
  const g = window.__mw;
  g.worldTime = 6000; // 正午(洞里照样黑,顺便验证天光隔绝)
  g.player = { pos: { x: c.x + 0.5, y: c.y, z: c.z + 0.5 }, vel: { x: 0, y: 0, z: 0 }, onGround: true };
  g.prev = g.player; // 冻结时相机用 prev 插值
  g.look.yaw = 0.5; g.look.pitch = -0.05;
  // 朝视线方向 3 格放一头猪(黑暗中应该几乎看不见,而不是全亮发光)
  const mx = c.x + 0.5 + Math.cos(0.5) * 3, mz = c.z + 0.5 + Math.sin(0.5) * 3;
  g.mobs.push({ kind: 'pig', pos: { x: mx, y: c.y, z: mz }, vel: { x: 0, y: 0, z: 0 }, yaw: 2.2, hp: 10, hurtCooldown: 0 });
}, cave);
await page.waitForTimeout(3500);
await hide();
await page.screenshot({ path: `${outdir}/cave_dark.png` });
console.log('shot: cave_dark');

// 玩家脚边放火把 → 邻区光照联动重建(reach=8) → 猪被火把照亮一侧
await page.evaluate((c) => {
  const g = window.__mw;
  g.world.setBlock(c.x + 1, c.y, c.z, 14); // TORCH
}, cave);
await page.waitForTimeout(4000);
await hide();
await page.screenshot({ path: `${outdir}/cave_torch.png` });
console.log('shot: cave_torch');

// 洞里挖个小水池(2×2)：黑暗水面不应反射天空/闪粼光
await page.evaluate((c) => {
  const g = window.__mw;
  const bx = Math.round(c.x + Math.cos(0.5) * 5), bz = Math.round(c.z + Math.sin(0.5) * 5);
  for (let dx = 0; dx < 2; dx++) for (let dz = 0; dz < 2; dz++) {
    g.world.setBlock(bx + dx, c.y - 1, bz + dz, 1); // 垫底防漏
    g.world.setWater(bx + dx, c.y, bz + dz, 8, true, false);
  }
  g.look.pitch = -0.45;
}, cave);
await page.waitForTimeout(4000);
await hide();
await page.screenshot({ path: `${outdir}/cave_water.png` });
console.log('shot: cave_water');

// 地表半夜：猪应是暗蓝调剪影而不是白天亮度
await page.evaluate(() => {
  const g = window.__mw;
  const sp = { x: g.player.pos.x, z: g.player.pos.z };
  let sy = 100;
  for (let y = 130; y > 40; y--) if (g.world.getBlock(Math.round(sp.x), y, Math.round(sp.z)) !== 0) { sy = y + 1; break; }
  g.worldTime = 18000;
  g.player = { pos: { x: sp.x, y: sy + 1.2, z: sp.z }, vel: { x: 0, y: 0, z: 0 }, onGround: true };
  g.prev = g.player; // 冻结时相机用 prev 插值
  g.look.yaw = 0.5; g.look.pitch = -0.12;
  const mx = sp.x + Math.cos(0.5) * 4, mz = sp.z + Math.sin(0.5) * 4;
  g.mobs.push({ kind: 'pig', pos: { x: mx, y: sy, z: mz }, vel: { x: 0, y: 0, z: 0 }, yaw: 2.2, hp: 10, hurtCooldown: 0 });
});
await page.waitForTimeout(3500);
await hide();
await page.screenshot({ path: `${outdir}/night_pig.png` });
console.log('shot: night_pig');

console.log('console errors:', errors.length ? '\n' + errors.slice(0, 10).join('\n') : 'NONE');
await browser.close();
