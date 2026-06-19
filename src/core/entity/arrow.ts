import type { VoxelWorld } from '../physics/player';

// 飞行的箭：纯数据 + 纯物理。被弓或骷髅射出后走抛物线；撞实心方块→插在原地停住。
// 对实体(玩家/生物)的命中判定与渲染/拾取由 game/ 层做（箭只管自己的飞行与撞墙）。

export interface Arrow {
  x: number;
  y: number;
  z: number;
  vx: number; // 格/tick
  vy: number;
  vz: number;
  age: number; // 存活 tick（用于超时消失 / 插地后延迟拾取）
  stuck: boolean; // 已插在方块上，不再移动
  fromPlayer: boolean; // true=玩家射的(只伤生物)，false=骷髅射的(只伤玩家)
  damage: number; // 命中伤害
}

export const ARROW_GRAVITY = 0.05; // 格/tick²（≈MC 箭）；导出供 AI 做下坠瞄准补偿
const DRAG = 0.99; // 每 tick 空气阻力
const SUBSTEP = 0.25; // 子步进上限(格)：高速箭也不穿薄墙

// 从 (x,y,z) 朝 (dx,dy,dz) 方向以 speed 射出。dir 会被归一化。
export function spawnArrow(
  x: number,
  y: number,
  z: number,
  dx: number,
  dy: number,
  dz: number,
  speed: number,
  fromPlayer: boolean,
  damage: number,
): Arrow {
  const len = Math.hypot(dx, dy, dz) || 1;
  return {
    x,
    y,
    z,
    vx: (dx / len) * speed,
    vy: (dy / len) * speed,
    vz: (dz / len) * speed,
    age: 0,
    stuck: false,
    fromPlayer,
    damage,
  };
}

// 推进一支箭一个 tick：重力 + 阻力 + 子步进前进；撞实心块则插住停在块前。原地修改并返回。
export function stepArrow(a: Arrow, world: VoxelWorld): Arrow {
  a.age++;
  if (a.stuck) return a;

  a.vy -= ARROW_GRAVITY;
  a.vx *= DRAG;
  a.vy *= DRAG;
  a.vz *= DRAG;

  const dist = Math.hypot(a.vx, a.vy, a.vz);
  const steps = Math.max(1, Math.ceil(dist / SUBSTEP));
  const sx = a.vx / steps;
  const sy = a.vy / steps;
  const sz = a.vz / steps;
  for (let i = 0; i < steps; i++) {
    const nx = a.x + sx;
    const ny = a.y + sy;
    const nz = a.z + sz;
    if (world.isSolid(Math.floor(nx), Math.floor(ny), Math.floor(nz))) {
      a.stuck = true;
      a.vx = a.vy = a.vz = 0;
      return a; // 停在撞前位置（没踏进实心格）
    }
    a.x = nx;
    a.y = ny;
    a.z = nz;
  }
  return a;
}
