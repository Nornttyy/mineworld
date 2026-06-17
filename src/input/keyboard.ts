// 全局按键状态 → 移动意图（WASD + 空格 + 双击 W 疾跑）。
const keys = new Set<string>();
const DOUBLE_TAP_MS = 300;
let lastWPress = -Infinity;
let sprinting = false;
let pendingJump = false; // 起跳沿：一次按键只跳一次

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyW' && !keys.has('KeyW')) {
    const now = performance.now();
    if (now - lastWPress < DOUBLE_TAP_MS) sprinting = true;
    lastWPress = now;
  }
  if (e.code === 'Space' && !keys.has('Space')) pendingJump = true; // 新按下空格
  keys.add(e.code);
});
window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (e.code === 'KeyW') sprinting = false; // 松开 W 停止疾跑
});

export interface MoveKeys {
  forward: number;
  right: number;
  sprint: boolean;
  jumpHeld: boolean; // 空格按住（水中持续上浮用）
}

export function readMove(): MoveKeys {
  let forward = 0;
  let right = 0;
  if (keys.has('KeyW')) forward += 1;
  if (keys.has('KeyS')) forward -= 1;
  if (keys.has('KeyD')) right += 1;
  if (keys.has('KeyA')) right -= 1;
  return { forward, right, sprint: sprinting && forward > 0, jumpHeld: keys.has('Space') };
}

// 取出一次"起跳"（边沿触发，每次按键仅一次）
export function consumeJump(): boolean {
  const j = pendingJump;
  pendingJump = false;
  return j;
}
