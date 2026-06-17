// 一个区块"列"：16×H×16 的体素，存一个数组。无限世界以 (cx,cz) 为键管理这些列。
export const CHUNK_W = 16;
export const CHUNK_H = 64;

export class Chunk {
  readonly blocks = new Uint16Array(CHUNK_W * CHUNK_H * CHUNK_W);
  // 流体层：每格一字节，低 4 位=水量(0..8)，0x10=源头，0x20=下落。与 blocks 平行，
  // 供网格化按水量画水面、流动模拟读写。0=无水。
  readonly fluid = new Uint8Array(CHUNK_W * CHUNK_H * CHUNK_W);
  dirty = true; // 需要(重新)网格化

  private idx(lx: number, ly: number, lz: number): number {
    return lx + lz * CHUNK_W + ly * CHUNK_W * CHUNK_W;
  }

  private inBounds(lx: number, ly: number, lz: number): boolean {
    return lx >= 0 && lx < CHUNK_W && ly >= 0 && ly < CHUNK_H && lz >= 0 && lz < CHUNK_W;
  }

  get(lx: number, ly: number, lz: number): number {
    if (!this.inBounds(lx, ly, lz)) return 0;
    return this.blocks[this.idx(lx, ly, lz)];
  }

  set(lx: number, ly: number, lz: number, id: number): void {
    if (!this.inBounds(lx, ly, lz)) return;
    this.blocks[this.idx(lx, ly, lz)] = id;
  }

  getFluid(lx: number, ly: number, lz: number): number {
    if (!this.inBounds(lx, ly, lz)) return 0;
    return this.fluid[this.idx(lx, ly, lz)];
  }

  setFluid(lx: number, ly: number, lz: number, v: number): void {
    if (!this.inBounds(lx, ly, lz)) return;
    this.fluid[this.idx(lx, ly, lz)] = v;
  }
}

// 流体字节编解码（低 4 位水量，0x10 源头，0x20 下落）
export const FL_SOURCE = 0x10;
export const FL_FALLING = 0x20;
export const flAmount = (b: number): number => b & 0x0f;
export const flIsSource = (b: number): boolean => (b & FL_SOURCE) !== 0;
export const flIsFalling = (b: number): boolean => (b & FL_FALLING) !== 0;
export const flByte = (amount: number, source: boolean, falling: boolean): number =>
  (amount & 0x0f) | (source ? FL_SOURCE : 0) | (falling ? FL_FALLING : 0);
