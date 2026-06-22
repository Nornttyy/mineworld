// 区块生成 Web Worker：在后台线程跑 generateChunk(深世界 320 格、洞穴分层很重)，
// 把 blocks/fluid 的 ArrayBuffer 零拷贝(transfer)传回主线程，主线程用 Chunk.fromBuffers 重建。
// 主线程只负责网格化+渲染，生成不再卡帧。
import { generateChunk } from '../worldgen/terrain';

interface GenRequest {
  cx: number;
  cz: number;
  seed: number;
}

self.onmessage = (e: MessageEvent<GenRequest>): void => {
  const { cx, cz, seed } = e.data;
  try {
    const c = generateChunk(cx, cz, seed);
    const blocks = c.blocks.buffer;
    const fluid = c.fluid.buffer;
    // 第三参数 transfer 列表：零拷贝移交所有权(传完主线程拿，worker 这边失效)
    (self as unknown as Worker).postMessage({ cx, cz, blocks, fluid }, [blocks, fluid]);
  } catch (err) {
    // 生成抛异常也务必回报(带坐标+错误)——否则主线程 pending 永不清 → 该区块永久卡成"加载不出来"的洞。
    (self as unknown as Worker).postMessage({ cx, cz, error: String((err as Error)?.stack ?? err) });
  }
};
