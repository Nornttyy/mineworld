import { Game } from './game/Game';

// 装配并启动游戏：第一人称 + WASD 移动 + 指针锁定转视角。
const canvas = document.getElementById('app') as HTMLCanvasElement;
const overlay = document.getElementById('overlay') as HTMLElement;
new Game(canvas, overlay).start();
