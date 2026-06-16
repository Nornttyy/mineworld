// 任意尺寸的体素体积（不止 16³），整片地形存一个数组、一次网格化，避免区块接缝复杂度。
export class World {
  readonly blocks: Uint16Array;

  constructor(
    readonly sx: number,
    readonly sy: number,
    readonly sz: number,
  ) {
    this.blocks = new Uint16Array(sx * sy * sz);
  }

  private idx(x: number, y: number, z: number): number {
    return x + z * this.sx + y * this.sx * this.sz;
  }

  // 越界返回空气(0)，方便网格化与物理直接调用
  get(x: number, y: number, z: number): number {
    if (x < 0 || x >= this.sx || y < 0 || y >= this.sy || z < 0 || z >= this.sz) return 0;
    return this.blocks[this.idx(x, y, z)];
  }

  set(x: number, y: number, z: number, id: number): void {
    if (x < 0 || x >= this.sx || y < 0 || y >= this.sy || z < 0 || z >= this.sz) return;
    this.blocks[this.idx(x, y, z)] = id;
  }
}
