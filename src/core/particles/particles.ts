// 方块碎屑粒子（纯逻辑，可单测）：挖方块时四溅的小颗粒。渲染层把它们画成带色的点。
// 单位同游戏=方块；重力把颗粒往下拽，过了寿命就移除。

export interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  age: number; // 已存活秒数
  life: number; // 总寿命秒数
  r: number;
  g: number;
  b: number; // 颜色 0..1
}

const GRAVITY = 16; // 格/秒²

// 各方块的代表色（挖它时碎屑的颜色）。缺省灰色。
const BLOCK_COLOR: Record<number, [number, number, number]> = {
  1: [0.54, 0.54, 0.54], // 石头
  2: [0.55, 0.42, 0.25], // 泥土
  3: [0.42, 0.67, 0.25], // 草
  4: [0.53, 0.53, 0.53], // 圆石
  5: [0.91, 0.86, 0.63], // 沙子
  6: [0.45, 0.33, 0.18], // 原木
  7: [0.69, 0.54, 0.31], // 木板
  8: [0.34, 0.34, 0.34], // 煤矿
  10: [0.25, 0.48, 0.19], // 树叶
  11: [0.5, 0.36, 0.2], // 工作台
};

export const blockColor = (id: number): [number, number, number] => BLOCK_COLOR[id] ?? [0.5, 0.5, 0.5];

// 在 (cx,cy,cz) 附近喷出 count 个碎屑：随机散开 + 向上初速，之后受重力下落。
export function spawnBurst(
  cx: number,
  cy: number,
  cz: number,
  color: [number, number, number],
  count: number,
  rand: () => number = Math.random,
): Particle[] {
  const out: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const a = rand() * Math.PI * 2;
    const sp = 0.6 + rand() * 1.8; // 横向散开速度
    out.push({
      x: cx + (rand() - 0.5) * 0.6,
      y: cy + (rand() - 0.5) * 0.6,
      z: cz + (rand() - 0.5) * 0.6,
      vx: Math.cos(a) * sp,
      vy: 1.5 + rand() * 2.5, // 先往上蹦
      vz: Math.sin(a) * sp,
      age: 0,
      life: 0.4 + rand() * 0.45,
      r: color[0],
      g: color[1],
      b: color[2],
    });
  }
  return out;
}

// 推进一帧：重力 + 位移 + 老化，返回仍存活的颗粒（原地老化、过滤死亡）。
export function stepParticles(ps: Particle[], dt: number): Particle[] {
  const alive: Particle[] = [];
  for (const p of ps) {
    p.age += dt;
    if (p.age >= p.life) continue;
    p.vy -= GRAVITY * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.z += p.vz * dt;
    alive.push(p);
  }
  return alive;
}
