import { Game } from './game/Game';

const canvas = document.getElementById('app') as HTMLCanvasElement;
new Game(canvas).start();

const $ = (id: string): HTMLElement => document.getElementById(id) as HTMLElement;
const menu = $('menu');

// 随机 splash 文字（黄色抖动那条）
const SPLASHES = [
  '100% 纯方块!',
  '无限的世界!',
  '由 Three.js 驱动!',
  '会挖、会放、会跳!',
  '试试双击 W 疾跑~',
  '支持 WebGL2!',
  '像素手工打造!',
  '水快会流动了…',
  '也试试我的世界!',
];
$('splash').textContent = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];

// 开始游戏 → 锁定指针进游戏
$('play').addEventListener('click', () => void canvas.requestPointerLock());
// 全屏
$('fullscreen').addEventListener('click', () => {
  if (document.fullscreenElement) void document.exitFullscreen();
  else void document.documentElement.requestFullscreen();
});
// 关于面板
$('about').addEventListener('click', () => $('about-panel').classList.remove('hidden'));
$('about-close').addEventListener('click', () => $('about-panel').classList.add('hidden'));

// 菜单时隐藏游戏 HUD（准星 / 快捷栏）
const setHud = (show: boolean): void => {
  $('crosshair').style.display = show ? 'block' : 'none';
  $('hotbar').style.display = show ? 'flex' : 'none';
};
setHud(false); // 开局停在菜单

// 指针锁定 = 游戏中；解锁(ESC) = 菜单重现（暂停）
document.addEventListener('pointerlockchange', () => {
  const playing = document.pointerLockElement === canvas;
  menu.style.display = playing ? 'none' : 'flex';
  setHud(playing);
});
