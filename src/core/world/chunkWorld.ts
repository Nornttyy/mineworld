import { Chunk, CHUNK_H, flByte, flAmount, flIsSource, flIsFalling } from './chunk';
import { worldToChunk, localCoord } from './coords';
import { generateChunk } from '../worldgen/terrain';
import { WATER } from '../blocks/registry';
import ChunkGenWorker from './chunkGen.worker?worker';

const now = (): number => (typeof performance !== 'undefined' ? performance.now() : Date.now());

// 无限世界：按需生成并缓存区块列，提供世界坐标的方块读写。
export class ChunkWorld {
  private readonly chunks = new Map<string, Chunk>();
  private readonly pending = new Set<string>(); // 已请求后台生成、还没回来的区块
  private readonly pendingSince = new Map<string, number>(); // 派发时刻(ms)，给看门狗判 worker 丢消息超时重试
  private readonly genFails = new Map<string, number>(); // 该区块连续生成失败(抛异常)次数，超上限放弃+告警，防死循环
  private readonly workers: Worker[] = [];
  private rr = 0; // round-robin 派发到各 worker
  // 区块(重)生成后回调：让游戏层把该区块的玩家改动(挖/放)重新贴回去——因为远处区块会被驱逐释放内存，
  // 走回来重新生成的是纯地形，必须靠这个 hook 复原改动，否则建筑/挖洞会"走远再回来就没了"。
  editHook: ((cx: number, cz: number, c: Chunk) => void) | null = null;

  constructor(readonly seed: number, readonly dimension: 'overworld' | 'nether' = 'overworld') {
    // 浏览器：开多个后台 Worker 并行生成(深世界生成重)，数量按 CPU 核数(上限4)；
    // node/测试环境没有 Worker → workers 为空，request 回退同步生成。
    if (typeof Worker !== 'undefined') {
      const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || 4 : 4;
      const n = Math.max(1, Math.min(4, cores));
      for (let i = 0; i < n; i++) {
        const w = new ChunkGenWorker();
        w.onmessage = (
          e: MessageEvent<{ cx: number; cz: number; blocks?: ArrayBuffer; fluid?: ArrayBuffer; error?: string }>,
        ): void => {
          const { cx, cz, blocks, fluid, error } = e.data;
          const k = this.key(cx, cz);
          this.pending.delete(k);
          this.pendingSince.delete(k);
          if (error) {
            // 生成失败：pending 已清 → 未达上限时 update() 会再 request 重试；告警暴露真正触发原因。
            const n = (this.genFails.get(k) ?? 0) + 1;
            this.genFails.set(k, n);
            console.warn(`[chunkgen] 区块(${cx},${cz}) 生成失败 #${n}: ${error.split('\n')[0]}`);
            return;
          }
          this.genFails.delete(k);
          if (this.chunks.has(k) || !blocks || !fluid) return; // 已被同步回退生成，丢弃后台结果
          const c = Chunk.fromBuffers(blocks, fluid);
          this.editHook?.(cx, cz, c); // 复原该区块的玩家改动(驱逐后重生成是纯地形)
          c.dirty = true; // 等网格化调度下一帧把它建出来
          this.chunks.set(k, c);
        };
        w.onerror = (ev): void => {
          console.error('[chunkgen worker] 致命错误(整个 worker 挂了，会拖慢加载):', ev.message);
        };
        this.workers.push(w);
      }
    }
  }

  private key(cx: number, cz: number): string {
    return `${cx},${cz}`;
  }

  /**
   * 释放：终止后台生成 worker + 清空区块缓存。供 MenuBackground 进游戏时调用。
   * 否则菜单世界的 chunkGen worker(每个独立 JS isolate,内存重)与区块数据会一直常驻 → 与游戏世界双份 → OOM。
   * worker.onmessage 闭包持有 this → 必须 terminate 才能让本世界被 GC。
   */
  dispose(): void {
    for (const w of this.workers) w.terminate();
    this.workers.length = 0;
    this.chunks.clear();
    this.pending.clear();
    this.pendingSince.clear();
    this.genFails.clear();
    this.editHook = null;
  }

  hasChunk(cx: number, cz: number): boolean {
    return this.chunks.has(this.key(cx, cz));
  }

  // 异步请求后台生成(不阻塞主线程)；已有或进行中则跳过。
  request(cx: number, cz: number): void {
    const k = this.key(cx, cz);
    if (this.chunks.has(k) || this.pending.has(k)) return;
    if ((this.genFails.get(k) ?? 0) >= 3) return; // 连续 3 次生成抛异常 → 放弃(已告警)，不再每帧死循环重试
    if (this.workers.length === 0) {
      this.getChunk(cx, cz); // 无 Worker(测试/node)：同步生成回退
      return;
    }
    this.pending.add(k);
    this.pendingSince.set(k, now());
    this.workers[this.rr].postMessage({ cx, cz, seed: this.seed, dimension: this.dimension });
    this.rr = (this.rr + 1) % this.workers.length;
  }

  /** 看门狗：worker 偶发丢消息/卡死 → pending 永不回 → 区块永久不生成成洞。超时还没回的清掉 pending，
   *  下帧 update() 会重新 request 重试(自愈)。由游戏层/ChunkMeshManager.update 定期调。 */
  retryStuckGen(timeoutMs = 8000): void {
    const t = now();
    for (const [k, since] of this.pendingSince) {
      if (t - since > timeoutMs) {
        this.pending.delete(k);
        this.pendingSince.delete(k);
        console.warn(`[chunkgen] 区块 ${k} 生成 ${Math.round((t - since) / 1000)}s 未回(worker 丢消息?) → 重试`);
      }
    }
  }

  // 只看缓存、不生成(网格化调度用，避免触发同步生成卡帧)。
  peek(cx: number, cz: number): Chunk | undefined {
    return this.chunks.get(this.key(cx, cz));
  }

  // 驱逐离 (centerCx,centerCz) 切比雪夫距离 > radius 的区块，释放内存。
  // 治"越走越卡"：原来生成过的区块永远留在 Map 里(每块 ~147KB) → 探索越远内存越涨 → GC 抖→崩。
  // 走回来会重新生成 + editHook 复原改动。radius 要 > 渲染半径+网格邻区(由游戏层保证)，免驱逐掉在用的。
  evictBeyond(centerCx: number, centerCz: number, radius: number): void {
    for (const k of [...this.chunks.keys()]) {
      const ci = k.indexOf(',');
      const cx = +k.slice(0, ci);
      const cz = +k.slice(ci + 1);
      if (Math.abs(cx - centerCx) > radius || Math.abs(cz - centerCz) > radius) this.chunks.delete(k);
    }
  }

  // 取区块；不存在则同步生成并缓存(物理/raycast 等需立即时的回退；正常区块已被 request 预生成)
  getChunk(cx: number, cz: number): Chunk {
    const k = this.key(cx, cz);
    let c = this.chunks.get(k);
    if (!c) {
      c = generateChunk(cx, cz, this.seed, this.dimension);
      this.editHook?.(cx, cz, c); // 复原该区块的玩家改动
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
