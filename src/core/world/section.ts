import { idx } from './coords';

/** 一个 16×16×16 的体素区块；每格是方块 ID（空气=0）。 */
export class Section {
  readonly blocks = new Uint16Array(4096);

  get(x: number, y: number, z: number): number {
    return this.blocks[idx(x, y, z)];
  }

  set(x: number, y: number, z: number, id: number): void {
    this.blocks[idx(x, y, z)] = id;
  }
}
