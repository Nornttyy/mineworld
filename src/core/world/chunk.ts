// 一个区块"列"：16×H×16 的体素，存一个数组。无限世界以 (cx,cz) 为键管理这些列。
export const CHUNK_W = 16;
export const CHUNK_H = 64;

export class Chunk {
  readonly blocks = new Uint16Array(CHUNK_W * CHUNK_H * CHUNK_W);
  dirty = true; // 需要(重新)网格化

  private idx(lx: number, ly: number, lz: number): number {
    return lx + lz * CHUNK_W + ly * CHUNK_W * CHUNK_W;
  }

  get(lx: number, ly: number, lz: number): number {
    if (lx < 0 || lx >= CHUNK_W || ly < 0 || ly >= CHUNK_H || lz < 0 || lz >= CHUNK_W) return 0;
    return this.blocks[this.idx(lx, ly, lz)];
  }

  set(lx: number, ly: number, lz: number, id: number): void {
    if (lx < 0 || lx >= CHUNK_W || ly < 0 || ly >= CHUNK_H || lz < 0 || lz >= CHUNK_W) return;
    this.blocks[this.idx(lx, ly, lz)] = id;
  }
}
