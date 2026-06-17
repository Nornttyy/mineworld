import { Chunk, CHUNK_H } from './chunk';
import { worldToChunk, localCoord } from './coords';
import { generateChunk } from '../worldgen/terrain';

// 无限世界：按需生成并缓存区块列，提供世界坐标的方块读写。
export class ChunkWorld {
  private readonly chunks = new Map<string, Chunk>();

  constructor(readonly seed: number) {}

  private key(cx: number, cz: number): string {
    return `${cx},${cz}`;
  }

  hasChunk(cx: number, cz: number): boolean {
    return this.chunks.has(this.key(cx, cz));
  }

  // 取区块；不存在则确定性生成并缓存
  getChunk(cx: number, cz: number): Chunk {
    const k = this.key(cx, cz);
    let c = this.chunks.get(k);
    if (!c) {
      c = generateChunk(cx, cz, this.seed);
      this.chunks.set(k, c);
    }
    return c;
  }

  getBlock(wx: number, wy: number, wz: number): number {
    if (wy < 0 || wy >= CHUNK_H) return 0;
    return this.getChunk(worldToChunk(wx), worldToChunk(wz)).get(localCoord(wx), wy, localCoord(wz));
  }

  // 写方块（挖/放用）；标记所在区块及边界相邻区块为脏，便于重新网格化
  setBlock(wx: number, wy: number, wz: number, id: number): void {
    if (wy < 0 || wy >= CHUNK_H) return;
    const cx = worldToChunk(wx);
    const cz = worldToChunk(wz);
    const lx = localCoord(wx);
    const lz = localCoord(wz);
    const c = this.getChunk(cx, cz);
    c.set(lx, wy, lz, id);
    c.dirty = true;
    if (lx === 0) this.markDirty(cx - 1, cz);
    if (lx === 15) this.markDirty(cx + 1, cz);
    if (lz === 0) this.markDirty(cx, cz - 1);
    if (lz === 15) this.markDirty(cx, cz + 1);
  }

  private markDirty(cx: number, cz: number): void {
    const c = this.chunks.get(this.key(cx, cz));
    if (c) c.dirty = true;
  }
}
