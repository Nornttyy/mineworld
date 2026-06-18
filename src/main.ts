import { Game } from './game/Game';
import { MenuBackground } from './render/MenuBackground';
import { listWorlds, createWorld, saveWorld, deleteWorld, type WorldSave } from './save/worldStore';
import { SettingsMenu } from './ui/settingsMenu';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const $ = (id: string): HTMLElement => document.getElementById(id) as HTMLElement;

// 主菜单/存档界面的旋转全景背景（独立画布，与游戏无关）
const menubgCanvas = $('menubg') as HTMLCanvasElement;
const menubg = new MenuBackground(menubgCanvas);

const menu = $('menu');
const worldlist = $('worldlist');
const pause = $('pause');
const worldRows = $('world-rows');

let game: Game | null = null;

// 加载动画：进世界时(区块生成是阻塞的)先盖一层旋转 spinner，生成完再撤。
const loadingEl = document.createElement('div');
loadingEl.style.cssText =
  'position:fixed;inset:0;z-index:60;display:none;align-items:center;justify-content:center;flex-direction:column;gap:20px;background:#0b1622;color:#cfe6f7;font-family:monospace;';
loadingEl.innerHTML =
  '<div style="width:56px;height:56px;border:6px solid rgba(255,255,255,.18);border-top-color:#6ab0ff;border-radius:50%;animation:mw-spin .9s linear infinite"></div>' +
  '<div style="font-size:18px;letter-spacing:3px">生成世界中…</div>';
const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes mw-spin{to{transform:rotate(360deg)}}';
document.head.appendChild(spinStyle);
document.body.appendChild(loadingEl);
const showLoading = (v: boolean): void => {
  loadingEl.style.display = v ? 'flex' : 'none';
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
  if (bg) menubg.start();
  else menubg.stop();
}

// --- 主菜单 ---
showOnly(menu);
// 设置面板（局内/局外共用）：改材质即时套用到运行中的游戏；音量已存盘(音效待开发)。
const settingsMenu = new SettingsMenu($('settings'));
settingsMenu.onChange = (s): void => {
  game?.setTexturePack(s.texturePack);
  // 音量/光影：已存进设置，音频与光影渲染接入后会读取（本次先存）。
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
  // 双 rAF：先让浏览器把 spinner 画出来，再做阻塞的世界构建 + 初始区块生成。
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      game = new Game(canvas, world);
      game.start();
      showLoading(false);
      void canvas.requestPointerLock();
    }),
  );
}

// --- 暂停 / 存盘 ---
$('resume').addEventListener('click', () => void canvas.requestPointerLock());
$('save-quit').addEventListener('click', () => {
  if (game) saveWorld(game.snapshot());
  location.reload(); // 回到主菜单（干净重置）
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
