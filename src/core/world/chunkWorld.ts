import { Chunk, flByte, flAmount, flIsSource, flIsFalling } from './chunk';
import { worldToChunk, localCoord } from './coords';
import { generateChunkForWorld } from '../worldgen/generator';
import { isModernGenerator, worldBounds, type GeneratorVersion } from './worldBounds';
import { WATER } from '../blocks/registry';
import ChunkGenWorker from './chunkGen.worker?worker';

const now = (): number => (typeof performance !== 'undefined' ? performance.now() : Date.now());
type GenerationTask = { key: string; cx: number; cz: number };
type RunningGeneration = GenerationTask & { startedAt: number };

// 水面开阔度会在网格阶段向外查看这些格。水从“有↔无”改变时，必须用同一半径
// 让相邻区块重建；仅水量变化不改变开阔度，仍走默认 reach=1，避免流体模拟放大重建量。
export const WATER_WAVE_OPEN_RADIUS = 4;

// 无限世界：按需生成并缓存区块列，提供世界坐标的方块读写。
export class ChunkWorld {
  get minY(): number {
    return worldBounds(this.generator, this.dimension).minY;
  }
  get maxY(): number {
    return worldBounds(this.generator, this.dimension).maxY;
  }
  get height(): number {
    return worldBounds(this.generator, this.dimension).height;
  }
  get seaLevel(): number {
    return worldBounds(this.generator, this.dimension).seaLevel;
  }
  /** Noise-settings sea_level is exclusive; the legacy generator filled that Y inclusively. */
  get seaWaterY(): number {
    return this.seaLevel - (isModernGenerator(this.generator) && this.dimension === 'overworld' ? 1 : 0);
  }

  private readonly chunks = new Map<string, Chunk>();
  private readonly pending = new Set<string>(); // 已请求、尚未完成（主线程排队或正在执行）
  private readonly generationQueue = new Map<string, GenerationTask>(); // 插入顺序即派发顺序；可直接取消同步生成的项
  private readonly inFlight = new Map<Worker, RunningGeneration>(); // 每 worker 严格至多一个在途任务
  private readonly genFails = new Map<string, number>(); // 该区块连续生成失败(抛异常)次数，超上限放弃+告警，防死循环
  private readonly workers: Worker[] = [];
  private disposed = false;
  // 区块(重)生成后回调：让游戏层把该区块的玩家改动(挖/放)重新贴回去——因为远处区块会被驱逐释放内存，
  // 走回来重新生成的是纯地形，必须靠这个 hook 复原改动，否则建筑/挖洞会"走远再回来就没了"。
  editHook: ((cx: number, cz: number, c: Chunk) => void) | null = null;

  constructor(
    readonly seed: number,
    readonly dimension: 'overworld' | 'nether' = 'overworld',
    readonly generator: GeneratorVersion = 'legacy',
    readonly seed64?: string,
  ) {
    // 浏览器：开多个后台 Worker 并行生成(深世界生成重)，数量按 CPU 核数(上限4)；
    // node/测试环境没有 Worker → workers 为空，request 回退同步生成。
    if (typeof Worker !== 'undefined') {
      const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || 4 : 4;
      const n = Math.max(1, Math.min(4, cores));
      for (let i = 0; i < n; i++) this.createWorker(i);
    }
  }

  private createWorker(index: number): void {
    const w = new ChunkGenWorker();
    this.workers[index] = w;
    w.onmessage = (
      e: MessageEvent<{
        cx: number;
        cz: number;
        blocks?: ArrayBuffer;
        fluid?: ArrayBuffer;
        surfaceHeights?: ArrayBuffer;
        error?: string;
      }>,
    ): void => {
      // 被超时重建/释放的 worker 的迟到事件不能清除新任务或覆盖已修改的区块。
      if (this.disposed || this.workers[index] !== w) return;
      const task = this.inFlight.get(w);
      const { cx, cz, blocks, fluid, surfaceHeights, error } = e.data;
      const k = this.key(cx, cz);
      if (!task || task.key !== k) return;
      this.inFlight.delete(w);
      try {
        if (!this.pending.has(k)) return; // 同步 fallback 或驱逐已取消该请求。
        if (error || !blocks || !fluid) {
          this.retryGeneration(task, error ?? 'worker 返回缺少区块数据');
          return;
        }
        this.pending.delete(k);
        this.genFails.delete(k);
        if (this.chunks.has(k)) return;
        const c = Chunk.fromBuffers(blocks, fluid, this.minY, this.height);
        if (surfaceHeights) c.surfaceHeights = new Int16Array(surfaceHeights);
        this.editHook?.(cx, cz, c);
        c.dirty = true;
        this.chunks.set(k, c);
      } finally {
        this.dispatchGeneration();
      }
    };
    w.onerror = (ev): void => {
      if (this.disposed || this.workers[index] !== w) return;
      console.error('[chunkgen worker] 执行失败，重建 worker:', ev.message);
      this.restartWorker(index, w, ev.message);
      this.dispatchGeneration();
    };
  }

  private retryGeneration(task: GenerationTask, reason: string): void {
    if (!this.pending.has(task.key) || this.chunks.has(task.key)) return;
    const failures = (this.genFails.get(task.key) ?? 0) + 1;
    this.genFails.set(task.key, failures);
    console.warn(
      `[chunkgen] 区块(${task.cx},${task.cz}) 生成失败 #${failures}: ${reason.split('\n')[0]}`,
    );
    if (failures < 3) this.generationQueue.set(task.key, task);
    else this.pending.delete(task.key);
  }

  private restartWorker(index: number, w: Worker, reason: string): void {
    const task = this.inFlight.get(w);
    this.inFlight.delete(w);
    w.terminate(); // 真正卡死的任务必须停止，否则重新派发只会在旧 worker 后面继续排队。
    this.createWorker(index);
    if (task) this.retryGeneration(task, reason);
  }

  private dispatchGeneration(): void {
    if (this.disposed) return;
    for (const w of this.workers) {
      if (this.inFlight.has(w)) continue;
      while (this.generationQueue.size > 0) {
        const task = this.generationQueue.values().next().value as GenerationTask;
        this.generationQueue.delete(task.key);
        if (!this.pending.has(task.key) || this.chunks.has(task.key)) continue;
        this.inFlight.set(w, { ...task, startedAt: now() });
        try {
          w.postMessage({
            cx: task.cx,
            cz: task.cz,
            seed: this.seed,
            dimension: this.dimension,
            generator: this.generator,
            seed64: this.seed64,
          });
        } catch (error) {
          this.inFlight.delete(w);
          this.retryGeneration(task, String(error));
          continue;
        }
        break;
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
    this.disposed = true;
    for (const w of this.workers) w.terminate();
    this.workers.length = 0;
    this.chunks.clear();
    this.pending.clear();
    this.generationQueue.clear();
    this.inFlight.clear();
    this.genFails.clear();
    this.editHook = null;
  }

  hasChunk(cx: number, cz: number): boolean {
    return this.chunks.has(this.key(cx, cz));
  }

  // 异步请求后台生成(不阻塞主线程)；已有或进行中则跳过。
  request(cx: number, cz: number): void {
    if (this.disposed) return;
    const k = this.key(cx, cz);
    if (this.chunks.has(k) || this.pending.has(k)) return;
    if ((this.genFails.get(k) ?? 0) >= 3) return; // 连续 3 次生成抛异常 → 放弃(已告警)，不再每帧死循环重试
    if (this.workers.length === 0) {
      this.getChunk(cx, cz); // 无 Worker(测试/node)：同步生成回退
      return;
    }
    this.pending.add(k);
    // 同步 fallback 后若该缓存又被驱逐，仍在途的原请求可复用，不能再次给 worker 派同一块。
    if ([...this.inFlight.values()].some((task) => task.key === k)) return;
    this.generationQueue.set(k, { key: k, cx, cz });
    this.dispatchGeneration();
  }

  /** 只为已经派发的任务计时；主线程队列等多久都不能被判为执行超时。 */
  retryStuckGen(timeoutMs = 8000): void {
    if (isModernGenerator(this.generator)) timeoutMs = Math.max(timeoutMs, 30000);
    const t = now();
    for (let index = 0; index < this.workers.length; index++) {
      const w = this.workers[index],
        task = this.inFlight.get(w);
      if (task && t - task.startedAt > timeoutMs) {
        this.restartWorker(
          index,
          w,
          `实际执行 ${Math.round((t - task.startedAt) / 1000)}s 未回，重建 worker 后重试`,
        );
      }
    }
    this.dispatchGeneration();
  }

  // 只看缓存、不生成(网格化调度用，避免触发同步生成卡帧)。
  peek(cx: number, cz: number): Chunk | undefined {
    return this.chunks.get(this.key(cx, cz));
  }

  // 驱逐离 (centerCx,centerCz) 切比雪夫距离 > radius 的区块，释放内存。
  // 治"越走越卡"：原来生成过的区块永远留在 Map 里(每块 ~147KB) → 探索越远内存越涨 → GC 抖→崩。
  // 走回来会重新生成 + editHook 复原改动。radius 要 > 渲染半径+网格邻区(由游戏层保证)，免驱逐掉在用的。
  evictBeyond(centerCx: number, centerCz: number, radius: number): string[] {
    const evicted: string[] = [];
    // 尚未执行的远处任务直接取消，避免旅行后仍为旧视野生成数百个无用区块。
    // 已在途任务仍可正常返回缓存；返回值只包含本次实际移除的缓存块，保持调用方清理语义。
    for (const [k, task] of this.generationQueue) {
      if (Math.abs(task.cx - centerCx) > radius || Math.abs(task.cz - centerCz) > radius) {
        this.generationQueue.delete(k);
        this.pending.delete(k);
      }
    }
    for (const k of [...this.chunks.keys()]) {
      const ci = k.indexOf(',');
      const cx = +k.slice(0, ci);
      const cz = +k.slice(ci + 1);
      if (Math.abs(cx - centerCx) > radius || Math.abs(cz - centerCz) > radius) {
        if (this.chunks.delete(k)) evicted.push(k);
      }
    }
    return evicted;
  }

  // 取区块；不存在则同步生成并缓存(物理/raycast 等需立即时的回退；正常区块已被 request 预生成)
  getChunk(cx: number, cz: number): Chunk {
    const k = this.key(cx, cz);
    let c = this.chunks.get(k);
    if (!c) {
      c = generateChunkForWorld(cx, cz, this.seed64 ?? this.seed, this.dimension, this.generator);
      this.editHook?.(cx, cz, c); // 复原该区块的玩家改动
      this.chunks.set(k, c);
      this.pending.delete(k);
      this.generationQueue.delete(k);
      this.genFails.delete(k);
    }
    return c;
  }

  getBlock(wx: number, wy: number, wz: number): number {
    if (wy < this.minY || wy >= this.maxY) return 0;
    return this.getChunk(worldToChunk(wx), worldToChunk(wz)).get(
      localCoord(wx),
      wy,
      localCoord(wz),
    );
  }

  // 写方块（挖/放用）；标记所在区块及边界相邻区块为脏，便于重新网格化
  setBlock(wx: number, wy: number, wz: number, id: number): void {
    if (wy < this.minY || wy >= this.maxY) return;
    const cx = worldToChunk(wx);
    const cz = worldToChunk(wz);
    const lx = localCoord(wx);
    const lz = localCoord(wz);
    const c = this.getChunk(cx, cz);
    c.set(lx, wy, lz, id);
    if (id !== WATER) c.setFluid(lx, wy, lz, 0); // 放固体/挖空 → 清掉该格水数据
    c.dirty = true;
    this.markNeighborsDirty(cx, cz, lx, lz, 8); // reach=8：挖/放的光照变化要渗进邻区(见函数注释)
  }

  // —— 流体读写（供流动水模拟与网格化）——
  private fluidByte(wx: number, wy: number, wz: number): number {
    if (wy < this.minY || wy >= this.maxY) return 0;
    return this.getChunk(worldToChunk(wx), worldToChunk(wz)).getFluid(
      localCoord(wx),
      wy,
      localCoord(wz),
    );
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
  setWater(
    wx: number,
    wy: number,
    wz: number,
    amount: number,
    source: boolean,
    falling: boolean,
  ): void {
    if (wy < this.minY || wy >= this.maxY) return;
    const cx = worldToChunk(wx);
    const cz = worldToChunk(wz);
    const lx = localCoord(wx);
    const lz = localCoord(wz);
    const c = this.getChunk(cx, cz);
    const wasWet = c.get(lx, wy, lz) === WATER && flAmount(c.getFluid(lx, wy, lz)) > 0;
    if (amount <= 0) {
      if (c.get(lx, wy, lz) === WATER) c.set(lx, wy, lz, 0);
      c.setFluid(lx, wy, lz, 0);
    } else {
      c.set(lx, wy, lz, WATER);
      c.setFluid(lx, wy, lz, flByte(amount, source, falling));
    }
    c.dirty = true;
    const isWet = amount > 0;
    this.markNeighborsDirty(cx, cz, lx, lz, wasWet !== isWet ? WATER_WAVE_OPEN_RADIUS : 1);
  }

  // reach=1(默认,仅水量变化用)：仅贴边格(0/15)标脏邻区——覆盖 AO/角高度采样。
  // 水从有↔无的拓扑变化传 WATER_WAVE_OPEN_RADIUS，覆盖水面开阔度的角采样。
  // reach=8(玩家挖/放用,=mesher 光照 HALO)：距边界 8 格内都标脏邻区——放火把/挖洞的【光照】
  //   会渗进邻区顶点光，只标贴边会让光"卡在区块边界"直到邻区因别的原因重建(用户报的光照 bug)。
  //   水流不用 8：流水每 5 刻大量格子变动,×4 重建量会灌爆 mesh worker(挖放是低频操作,没这问题)。
  private markNeighborsDirty(cx: number, cz: number, lx: number, lz: number, reach = 1): void {
    const west = lx < reach;
    const east = lx > 15 - reach;
    const north = lz < reach;
    const south = lz > 15 - reach;
    if (west) this.markDirty(cx - 1, cz);
    if (east) this.markDirty(cx + 1, cz);
    if (north) this.markDirty(cx, cz - 1);
    if (south) this.markDirty(cx, cz + 1);
    // 角块：AO/角高度/斜向渗光会跨对角邻块
    if (west && north) this.markDirty(cx - 1, cz - 1);
    if (west && south) this.markDirty(cx - 1, cz + 1);
    if (east && north) this.markDirty(cx + 1, cz - 1);
    if (east && south) this.markDirty(cx + 1, cz + 1);
  }

  private markDirty(cx: number, cz: number): void {
    const c = this.chunks.get(this.key(cx, cz));
    if (c) c.dirty = true;
  }
}
