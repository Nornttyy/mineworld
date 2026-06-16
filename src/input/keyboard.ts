// 全局按键状态 → 移动意图（WASD + 空格跳）。
const keys = new Set<string>();
window.addEventListener('keydown', (e) => keys.add(e.code));
window.addEventListener('keyup', (e) => keys.delete(e.code));

export function readMove(): { forward: number; right: number; jump: boolean } {
  let forward = 0;
  let right = 0;
  if (keys.has('KeyW')) forward += 1;
  if (keys.has('KeyS')) forward -= 1;
  if (keys.has('KeyD')) right += 1;
  if (keys.has('KeyA')) right -= 1;
  return { forward, right, jump: keys.has('Space') };
}
