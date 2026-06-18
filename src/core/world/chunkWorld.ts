import { Chunk, CHUNK_H, flByte, flAmount, flIsSource, flIsFalling } from './chunk';
import { worldToChunk, localCoord } from './coords';
import { generateChunk } from '../worldgen/terrain';
import { WATER } from '../blocks/registry';

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
    if (id !== WATER) c.setFluid(lx, wy, lz, 0); // 放固体/挖空 → 清掉该格水数据
    c.dirty = true;
    this.markNeighborsDirty(cx, cz, lx, lz);
  }

  // —— 流体读写（供流动水模拟与网格化）——
  private fluidByte(wx: number, wy: number, wz: number): number {
    if (wy < 0 || wy >= CHUNK_H) return 0;
    return this.getChunk(worldToChunk(wx), worldToChunk(wz)).getFluid(localCoord(wx), wy, localCoord(wz));
  }

  waterAmount(wx: number, wy: number, wz: number): number {
    if (this.getBlock(wx, wy, wz) !== WATER) return 0;
    return flAmount(this.fluidByte(wx, wy, wz));
  }

  isWaterSource(wx: number, wy: number, wz: number): boolean {
    return this.getBlock(wx, wy, wz) === WATER && flIsSource(this.fluidByte(wx, wy, wz));
  }

  isWaterFalling(wx: number, wy: number, wz: number): boolean {
    return this.getBlock(wx, wy, wz) === WATER && flIsFalling(this.fluidByte(wx, wy, wz));
  }

  // 设置/移除水（amount<=0 → 若该格是水则清成空气）。标脏便于重新网格化。
  setWater(wx: number, wy: number, wz: number, amount: number, source: boolean, falling: boolean): void {
    if (wy < 0 || wy >= CHUNK_H) return;
    const cx = worldToChunk(wx);
    const cz = worldToChunk(wz);
    const lx = localCoord(wx);
    const lz = localCoord(wz);
    const c = this.getChunk(cx, cz);
    if (amount <= 0) {
      if (c.get(lx, wy, lz) === WATER) c.set(lx, wy, lz, 0);
      c.setFluid(lx, wy, lz, 0);
    } else {
      c.set(lx, wy, lz, WATER);
      c.setFluid(lx, wy, lz, flByte(amount, source, falling));
    }
    c.dirty = true;
    this.markNeighborsDirty(cx, cz, lx, lz);
  }

  private markNeighborsDirty(cx: number, cz: number, lx: number, lz: number): void {
    if (lx === 0) this.markDirty(cx - 1, cz);
    if (lx === 15) this.markDirty(cx + 1, cz);
    if (lz === 0) this.markDirty(cx, cz - 1);
    if (lz === 15) this.markDirty(cx, cz + 1);
    // 角格：网格化时角高度(cornerH)/AO 会采样对角邻块，故对角块也要标脏，否则角处水面/光照留旧缝
    if (lx === 0 && lz === 0) this.markDirty(cx - 1, cz - 1);
    if (lx === 0 && lz === 15) this.markDirty(cx - 1, cz + 1);
    if (lx === 15 && lz === 0) this.markDirty(cx + 1, cz - 1);
    if (lx === 15 && lz === 15) this.markDirty(cx + 1, cz + 1);
  }

  private markDirty(cx: number, cz: number): void {
    const c = this.chunks.get(this.key(cx, cz));
    if (c) c.dirty = true;
  }
}
