import type { VoxelWorld } from '../physics/player';

// 掉落物：挖掉方块后蹦出的小物品。纯数据 + 纯函数物理（重力 + 落地），可单测。
// 渲染层把它画成会自转、上下浮动的小方块；游戏层负责拾取（靠近玩家则收入背包）。

export interface ItemDrop {
  id: number; // 方块 id
  count: number; // 堆叠数量；同类掉落物靠近会合并成一堆（同 MC item entity）
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  age: number; // 存活秒数（用于拾取延迟 / 超时消失）
}

export const DROP_SIZE = 0.25; // 物品视觉/碰撞边长
const GRAVITY = 22; // 方块/秒²（比玩家轻快些，蹦跳感）
const HALF = DROP_SIZE / 2;

// 在方块 (bx,by,bz) 处生成一个掉落物，带轻微随机上蹦。rand: ()=>[0,1)，传入可确定性测试。
export function spawnDrop(
  id: number,
  bx: number,
  by: number,
  bz: number,
  rand: () => number = Math.random,
  count = 1,
): ItemDrop {
  return {
    id,
    count,
    x: bx + 0.5,
    y: by + 0.5,
    z: bz + 0.5,
    vx: (rand() - 0.5) * 2,
    vy: 2.5,
    vz: (rand() - 0.5) * 2,
    age: 0,
  };
}

// 合并相邻同类掉落物成一堆（同 MC item entity 自动合并），受各物品堆叠上限约束。原地修改 drops。
// O(n²) 但掉落物数量小；radius 为合并判定的最大间距（格）。maxStack(id)=该物品堆叠上限。
export function mergeDrops(drops: ItemDrop[], maxStack: (id: number) => number, radius = 0.75): void {
  const r2 = radius * radius;
  for (let i = 0; i < drops.length; i++) {
    const a = drops[i];
    const cap = maxStack(a.id);
    if (a.count >= cap) continue;
    for (let j = drops.length - 1; j > i; j--) {
      const b = drops[j];
      if (b.id !== a.id) continue;
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dz = a.z - b.z;
      if (dx * dx + dy * dy + dz * dz > r2) continue;
      const move = Math.min(cap - a.count, b.count);
      if (move <= 0) continue;
      a.count += move;
      b.count -= move;
      if (b.age < a.age) a.age = b.age; // 取较新年龄，避免合并后整堆过早消失
      if (b.count <= 0) drops.splice(j, 1);
      if (a.count >= cap) break;
    }
  }
}

// 推进一个掉落物 dt 秒：重力下落，落到实心块顶面则停住并加地面摩擦。原地修改并返回。
export function stepDrop(d: ItemDrop, world: VoxelWorld, dt: number): ItemDrop {
  d.age += dt;
  d.vy -= GRAVITY * dt;

  const nx = d.x + d.vx * dt;
  const nz = d.z + d.vz * dt;
  let ny = d.y + d.vy * dt;

  // 落地：若下方为实心块，停在其顶面（块顶 = floor(feet)+1）
  const feet = ny - HALF;
  if (d.vy <= 0 && world.isSolid(Math.floor(nx), Math.floor(feet), Math.floor(nz))) {
    ny = Math.floor(feet) + 1 + HALF;
    d.vy = 0;
    d.vx *= 0.6; // 地面摩擦
    d.vz *= 0.6;
  }

  d.x = nx;
  d.y = ny;
  d.z = nz;
  return d;
}

// 拾取判定：存活超过短延迟后，距离玩部够近即可收取（避免刚挖出就瞬间吸走）。
export function canPickup(d: ItemDrop, px: number, py: number, pz: number): boolean {
  if (d.age < 0.3) return false;
  const dx = d.x - px;
  const dy = d.y - py;
  const dz = d.z - pz;
  return dx * dx + dy * dy + dz * dz < 1.4 * 1.4;
}
