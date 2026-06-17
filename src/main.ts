import { Game } from './game/Game';
import { MenuBackground } from './render/MenuBackground';
import { listWorlds, createWorld, saveWorld, deleteWorld, type WorldSave } from './save/worldStore';

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
  game = new Game(canvas, world);
  game.start();
  showOnly(null);
  void canvas.requestPointerLock();
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
