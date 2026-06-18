import { Chunk, CHUNK_H, flByte, flAmount, flIsSource, flIsFalling } from './chunk';
import { worldToChunk, localCoord } from './coords';
import { generateChunk } from '../worldgen/terrain';
import { WATER } from '../blocks/registry';
import ChunkGenWorker from './chunkGen.worker?worker';

// 无限世界：按需生成并缓存区块列，提供世界坐标的方块读写。
export class ChunkWorld {
  private readonly chunks = new Map<string, Chunk>();
  private readonly pending = new Set<string>(); // 已请求后台生成、还没回来的区块
  private readonly worker: Worker | null;

  constructor(readonly seed: number) {
    // 浏览器有 Worker → 后台生成；node/测试环境没有 → worker=null，request 回退同步生成
    this.worker = typeof Worker !== 'undefined' ? new ChunkGenWorker() : null;
    if (this.worker) {
      this.worker.onmessage = (
        e: MessageEvent<{ cx: number; cz: number; blocks: ArrayBuffer; fluid: ArrayBuffer }>,
      ): void => {
        const { cx, cz, blocks, fluid } = e.data;
        const k = this.key(cx, cz);
        this.pending.delete(k);
        if (this.chunks.has(k)) return; // 已被同步回退生成，丢弃后台结果
        const c = Chunk.fromBuffers(blocks, fluid);
        c.dirty = true; // 等网格化调度下一帧把它建出来
        this.chunks.set(k, c);
      };
    }
  }

  private key(cx: number, cz: number): string {
    return `${cx},${cz}`;
  }

  hasChunk(cx: number, cz: number): boolean {
    return this.chunks.has(this.key(cx, cz));
  }

  // 异步请求后台生成(不阻塞主线程)；已有或进行中则跳过。
  request(cx: number, cz: number): void {
    const k = this.key(cx, cz);
    if (this.chunks.has(k) || this.pending.has(k)) return;
    if (!this.worker) {
      this.getChunk(cx, cz); // 无 Worker(测试/node)：同步生成回退
      return;
    }
    this.pending.add(k);
    this.worker.postMessage({ cx, cz, seed: this.seed });
  }

  // 只看缓存、不生成(网格化调度用，避免触发同步生成卡帧)。
  peek(cx: number, cz: number): Chunk | undefined {
    return this.chunks.get(this.key(cx, cz));
  }

  // 取区块；不存在则同步生成并缓存(物理/raycast 等需立即时的回退；正常区块已被 request 预生成)
  getChunk(cx: number, cz: number): Chunk {
    const k = this.key(cx, cz);
    let c = this.chunks.get(k);
    if (!c) {
      c = generateChunk(cx, cz, this.seed);
      this.chunks.set(k, c);
      this.pending.delete(k);
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
