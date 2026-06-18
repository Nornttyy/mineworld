// 天光传播（纯逻辑，可单测）。算一个区块列(W×H×W)每格天光 0..15，仿 MC 天光：
//  - 露天柱：从顶往下，遇第一个挡光块前都满 15（天光直下不衰减）。
//  - BFS：从亮格向 6 邻扩散，每格 −1（非挡光格、且更暗才更新）→ 光从洞口/缝逐格渗进洞里，
//    封闭处保持 0（真黑）。挡光块本身不带光（网格化取相邻空气格的光）。
// 索引与 Chunk 一致：i = lx + lz*W + ly*W*W。

export const MAX_LIGHT = 15;

const NEI: readonly [number, number, number][] = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

// 计算天光。opaque(lx,ly,lz)=该格是否挡光(实心不透明)。返回 Uint8Array(W*H*W)，值 0..15。
export function computeSkyLight(
  W: number,
  H: number,
  opaque: (lx: number, ly: number, lz: number) => boolean,
): Uint8Array {
  const light = new Uint8Array(W * H * W);
  const idx = (lx: number, ly: number, lz: number): number => lx + lz * W + ly * W * W;
  const queue: number[] = [];

  // 1) 露天柱：从顶往下置 15，直到第一个挡光块。这些满光格作为 BFS 起点。
  for (let lz = 0; lz < W; lz++) {
    for (let lx = 0; lx < W; lx++) {
      for (let ly = H - 1; ly >= 0; ly--) {
        if (opaque(lx, ly, lz)) break;
        const i = idx(lx, ly, lz);
        light[i] = MAX_LIGHT;
        queue.push(i);
      }
    }
  }

  // 2) BFS 向 6 邻 −1 扩散（光渗进洞/檐下）。
  for (let head = 0; head < queue.length; head++) {
    const i = queue[head];
    const lv = light[i];
    if (lv <= 1) continue;
    const ly = (i / (W * W)) | 0;
    const rem = i - ly * W * W;
    const lz = (rem / W) | 0;
    const lx = rem - lz * W;
    const nb = lv - 1;
    for (const [dx, dy, dz] of NEI) {
      const nx = lx + dx;
      const ny = ly + dy;
      const nz = lz + dz;
      if (nx < 0 || nx >= W || ny < 0 || ny >= H || nz < 0 || nz >= W) continue;
      if (opaque(nx, ny, nz)) continue;
      const ni = idx(nx, ny, nz);
      if (light[ni] >= nb) continue;
      light[ni] = nb;
      queue.push(ni);
    }
  }
  return light;
}

// 方块光传播（火把等光源）。和天光同结构，但光源不是"露天柱"，而是 emission(lx,ly,lz)>0 的格
// （火把=14）。从光源向 6 邻 BFS −1 扩散，遇挡光块停止。返回每格方块光 0..15。
// 与天光分开存：天光会随昼夜缩放(夜→0)，方块光恒定(火把夜里照常亮) —— 二者在 shader 里取 max。
export function computeBlockLight(
  W: number,
  H: number,
  emission: (lx: number, ly: number, lz: number) => number,
  opaque: (lx: number, ly: number, lz: number) => boolean,
): Uint8Array {
  const light = new Uint8Array(W * H * W);
  const idx = (lx: number, ly: number, lz: number): number => lx + lz * W + ly * W * W;
  const queue: number[] = [];

  // 1) 播种：每个发光格置其亮度。
  for (let ly = 0; ly < H; ly++) {
    for (let lz = 0; lz < W; lz++) {
      for (let lx = 0; lx < W; lx++) {
        const e = emission(lx, ly, lz);
        if (e > 0) {
          const i = idx(lx, ly, lz);
          if (e > light[i]) {
            light[i] = Math.min(MAX_LIGHT, e);
            queue.push(i);
          }
        }
      }
    }
  }

  // 2) BFS 向 6 邻 −1 扩散，挡光块不进。
  for (let head = 0; head < queue.length; head++) {
    const i = queue[head];
    const lv = light[i];
    if (lv <= 1) continue;
    const ly = (i / (W * W)) | 0;
    const rem = i - ly * W * W;
    const lz = (rem / W) | 0;
    const lx = rem - lz * W;
    const nb = lv - 1;
    for (const [dx, dy, dz] of NEI) {
      const nx = lx + dx;
      const ny = ly + dy;
      const nz = lz + dz;
      if (nx < 0 || nx >= W || ny < 0 || ny >= H || nz < 0 || nz >= W) continue;
      if (opaque(nx, ny, nz)) continue;
      const ni = idx(nx, ny, nz);
      if (light[ni] >= nb) continue;
      light[ni] = nb;
      queue.push(ni);
    }
  }
  return light;
}

// 天光等级 → 亮度系数(乘到顶点色)。0=最暗(不纯黑，留点可视)，15=全亮；偏低端更暗(类 MC)。
export function lightFactor(level: number): number {
  const t = Math.max(0, Math.min(15, level)) / 15;
  return 0.07 + 0.93 * Math.pow(t, 1.4);
}
