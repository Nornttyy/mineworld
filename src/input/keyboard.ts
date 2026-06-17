// 全局按键状态 → 移动意图（WASD + 空格跳 + 双击 W 疾跑）。
const keys = new Set<string>();
const DOUBLE_TAP_MS = 300;
let lastWPress = -Infinity;
let sprinting = false;

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyW' && !keys.has('KeyW')) {
    // 新按下的 W（排除按住时的自动重复）→ 判定双击
    const now = performance.now();
    if (now - lastWPress < DOUBLE_TAP_MS) sprinting = true;
    lastWPress = now;
  }
  keys.add(e.code);
});
window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (e.code === 'KeyW') sprinting = false; // 松开 W 停止疾跑
});

export function readMove(): { forward: number; right: number; jump: boolean; sprint: boolean } {
  let forward = 0;
  let right = 0;
  if (keys.has('KeyW')) forward += 1;
  if (keys.has('KeyS')) forward -= 1;
  if (keys.has('KeyD')) right += 1;
  if (keys.has('KeyA')) right -= 1;
  return { forward, right, jump: keys.has('Space'), sprint: sprinting && forward > 0 };
}
