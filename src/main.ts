import { Game } from './game/Game';
import { MenuBackground } from './render/MenuBackground';
import { listWorlds, createWorld, saveWorld, deleteWorld, type WorldSave } from './save/worldStore';
import { SettingsMenu } from './ui/settingsMenu';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const $ = (id: string): HTMLElement => document.getElementById(id) as HTMLElement;

// 主菜单/存档界面的旋转全景背景（独立画布，与游戏无关）
const menubgCanvas = $('menubg') as HTMLCanvasElement;
let menubg: MenuBackground | null = new MenuBackground(menubgCanvas);

const menu = $('menu');
const worldlist = $('worldlist');
const pause = $('pause');
const worldRows = $('world-rows');

let game: Game | null = null;

// 加载/启动界面（MC 风，#boot 已写在 HTML、JS 加载前就显示 → 无白屏）：切显隐 + 改提示文字。
const bootEl = $('boot');
const bootTip = bootEl.querySelector('.boot-tip') as HTMLElement;
const showLoading = (v: boolean, text = '加载中…'): void => {
  bootEl.classList.toggle('hidden', !v);
  if (v) bootTip.textContent = text;
};

// 随机 splash 文字
const SPLASHES = [
  '100% 纯方块!',
  '无限的世界!',
  '由 Three.js 驱动!',
  '会挖会放会跳!',
  '试试双击 W 疾跑~',
  '支持 WebGL2!',
  '像素手工打造!',
  '水快会流动了!',
  '也试试我的世界!',
];
$('splash').textContent = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];

// boot 加载界面增强：随机 splash + 轮换小贴士（HTML 里已有默认值，JS 跑起来后接管）
const bootSplashEl = bootEl.querySelector('.boot-splash') as HTMLElement | null;
if (bootSplashEl) bootSplashEl.textContent = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
const BOOT_HINTS = [
  '提示: 按住左键挖方块',
  '提示: 双击 W 可以疾跑',
  '提示: 右键放方块(会消耗物品)',
  '提示: 数字键 1-9 / 滚轮 切换物品',
  '提示: 石头要用镐才挖得动',
  '提示: 砍树 → 木板 → 工作台 → 工具',
  '提示: 熔炉能把铁矿炼成铁锭',
  '提示: 天黑了小心怪物',
];
const bootHintEl = bootEl.querySelector('.boot-hint') as HTMLElement | null;
if (bootHintEl) {
  let hi = Math.floor(Math.random() * BOOT_HINTS.length);
  bootHintEl.textContent = BOOT_HINTS[hi];
  setInterval(() => {
    hi = (hi + 1) % BOOT_HINTS.length;
    bootHintEl.textContent = BOOT_HINTS[hi];
  }, 2600);
}

function setHud(show: boolean): void {
  $('crosshair').style.display = show ? 'block' : 'none';
  $('hotbar').style.display = show ? 'flex' : 'none';
  $('status').style.display = show ? 'flex' : 'none';
}

function showOnly(el: HTMLElement | null): void {
  for (const s of [menu, worldlist, pause]) s.classList.add('hidden');
  if (el) el.classList.remove('hidden');
  setHud(false);
  // 旋转背景只在主菜单/存档界面显示
  const bg = el === menu || el === worldlist;
  menubgCanvas.style.display = bg ? 'block' : 'none';
  if (bg) menubg?.start();
  else menubg?.stop();
}

// 超时兜底：preload 等区块生成/网格化是无限轮询，万一某机器 worker 卡住会永远停在加载界面。
// 用 Promise.race 给个上限，到点照样进——宁可地形没铺满，也不能卡死进不去。
const timeout = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

// --- 主菜单 ---
// 启动:先盖加载界面 + 预生成主菜单背景，就绪再显示主菜单(不渐显)。退出 reload 后也走这里。
void (async () => {
  showLoading(true, '加载中…');
  try {
    if (menubg) await Promise.race([menubg.preload(), timeout(8000)]); // 背景预载封顶 8s，超时也进菜单
  } catch (e) {
    console.error('[menubg] preload 失败:', e); // 背景挂了不该挡住菜单
  }
  showOnly(menu);
  showLoading(false);
})();
// 设置面板（局内/局外共用）：改材质即时套用到运行中的游戏；音量已存盘(音效待开发)。
const settingsMenu = new SettingsMenu($('settings'));
settingsMenu.onChange = (s): void => {
  game?.setTexturePack(s.texturePack);
  game?.setLightingQuality(s.lightingQuality); // 光影画质即时套用
  game?.setRenderDistance(s.renderDistance); // 渲染距离：即时改区块加载半径 + 雾距
  // 音量：已存进设置，音频接入后会读取（本次先存）。
};
$('settings-btn').addEventListener('click', () => settingsMenu.show());
$('settings-btn-pause').addEventListener('click', () => settingsMenu.show());

$('play').addEventListener('click', () => openWorldList());
$('fullscreen').addEventListener('click', () => {
  if (document.fullscreenElement) void document.exitFullscreen();
  else void document.documentElement.requestFullscreen();
});
$('about').addEventListener('click', () => $('about-panel').classList.remove('hidden'));
$('about-close').addEventListener('click', () => $('about-panel').classList.add('hidden'));

// --- 存档（世界选择）---
function openWorldList(): void {
  renderWorldList();
  showOnly(worldlist);
}

function renderWorldList(): void {
  worldRows.innerHTML = '';
  const worlds = listWorlds();
  if (worlds.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'world-empty';
    empty.textContent = '还没有世界, 点 创建新世界 开始吧';
    worldRows.appendChild(empty);
    return;
  }
  for (const w of worlds) {
    const row = document.createElement('div');
    row.className = 'world-row';
    const name = document.createElement('span');
    name.className = 'wname';
    name.textContent = w.name;
    const meta = document.createElement('span');
    meta.className = 'wmeta';
    meta.textContent = `种子 ${w.seed}`;
    const del = document.createElement('span');
    del.className = 'wdel';
    del.textContent = '删除';
    del.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteWorld(w.id);
      renderWorldList();
    });
    row.append(name, meta, del);
    row.addEventListener('click', () => startGame(w));
    worldRows.appendChild(row);
  }
}

$('create-world').addEventListener('click', () => startGame(createWorld('新的世界')));
$('worldlist-back').addEventListener('click', () => showOnly(menu));

// --- 进入游戏 ---
function startGame(world: WorldSave): void {
  if (game) return;
  showOnly(null);
  showLoading(true);
  // 进游戏前先彻底释放菜单背景世界(整套区块网格 + worker + 第二个 WebGL 上下文)，
  // 否则它与游戏世界双份常驻内存 → 集显/低内存机 OOM(createImageData/array buffer 分配失败)。
  menubg?.dispose();
  menubg = null;
  // 双 rAF：先让浏览器把 spinner 画出来，再做阻塞的世界构建 + 初始区块生成。
  requestAnimationFrame(() =>
    requestAnimationFrame(async () => {
      try {
        game = new Game(canvas, world);
        await Promise.race([game.preloadSpawn(), timeout(12000)]); // 出生预载封顶 12s，超时也进游戏(地形会继续补)
        game.start();
        showLoading(false);
        void canvas.requestPointerLock();
      } catch (e) {
        // 任何报错都显示到加载界面，别再静默卡死（方便定位"进不去"到底卡在哪）
        console.error('[startGame] 进入游戏失败:', e);
        const msg = e instanceof Error ? `${e.message}` : String(e);
        showLoading(true, `进入失败：${msg}（已记录，请把这行字告诉开发）`);
      }
    }),
  );
}

// --- 暂停 / 存盘 ---
$('resume').addEventListener('click', () => void canvas.requestPointerLock());
$('save-quit').addEventListener('click', () => {
  if (game) saveWorld(game.snapshot());
  showLoading(true, '保存并返回主菜单…'); // 退出也过加载界面
  location.reload(); // 干净重置；reload 后走启动流程(加载界面 + 菜单背景预加载)
});

// 指针锁定 = 游戏中；解锁(ESC) = 暂停；死亡时改显示死亡界面
const death = $('death');
document.addEventListener('pointerlockchange', () => {
  const playing = document.pointerLockElement === canvas;
  if (playing) {
    pause.classList.add('hidden');
    death.style.display = 'none';
    setHud(true);
  } else if (game) {
    saveWorld(game.snapshot());
    if (game.isCraftingOpen()) return; // 合成界面：保持 HUD、不弹暂停
    setHud(false);
    if (game.isDead()) death.style.display = 'flex';
    else pause.classList.remove('hidden');
  }
});

// 重生：满状态回到出生点并重新锁定
$('respawn').addEventListener('click', () => {
  if (!game) return;
  game.respawn();
  death.style.display = 'none';
  void canvas.requestPointerLock();
});

// 定时自动存盘 + 关页面前存盘
setInterval(() => {
  if (game && document.pointerLockElement === canvas) saveWorld(game.snapshot());
}, 15000);
window.addEventListener('beforeunload', () => {
  if (game) saveWorld(game.snapshot());
});
