import { Game } from './game/Game';

const canvas = document.getElementById('app') as HTMLCanvasElement;
new Game(canvas).start();

// 主菜单：点"开始游戏"锁定鼠标进游戏；ESC 解锁时菜单重新出现（暂停）。
const menu = document.getElementById('menu') as HTMLElement;
const playBtn = document.getElementById('play') as HTMLElement;
playBtn.addEventListener('click', () => void canvas.requestPointerLock());
document.addEventListener('pointerlockchange', () => {
  menu.style.display = document.pointerLockElement === canvas ? 'none' : 'flex';
});
