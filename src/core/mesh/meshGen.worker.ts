// 网格化 Web Worker：把 meshChunk(光照 BFS + greedy mesh，主线程实测 ~81ms/区块)挪到后台线程。
// 接收本区块 + 8 邻区的 blocks/fluid(9 个 buffer)，worker 内重建 getBlock/waterAmount(光照光晕和
// face 剔除要采本区块 ±1 格，落在邻区)，跑 meshChunkData，把网格 typed array 零拷贝(transfer)传回。
import { meshChunkData, type MeshData } from './mesher';
import { splitChunkMesh } from '../../render/meshSplit';
import { CHUNK_W, CHUNK_H, flAmount } from '../world/chunk';
import { worldToChunk, localCoord } from '../world/coords';
import { WATER } from '../blocks/registry';

interface MeshRequest {
  cx: number;
  cz: number;
  blocks: Uint16Array[]; // 9 个，顺序 (dcx+1)*3+(dcz+1)，dcx/dcz ∈ -1..1
  fluid: Uint8Array[];
}

self.onmessage = (e: MessageEvent<MeshRequest>): void => {
  const { cx, cz, blocks, fluid } = e.data;
  const slot = (bx: number, bz: number): number => {
    const dcx = bx - cx;
    const dcz = bz - cz;
    if (dcx < -1 || dcx > 1 || dcz < -1 || dcz > 1) return -1; // 9 区块外 → 当空气
    return (dcx + 1) * 3 + (dcz + 1);
  };
  const li = (wx: number, wy: number, wz: number): number =>
    localCoord(wx) + localCoord(wz) * CHUNK_W + wy * CHUNK_W * CHUNK_W;
  const getBlock = (wx: number, wy: number, wz: number): number => {
    if (wy < 0 || wy >= CHUNK_H) return 0;
    const s = slot(worldToChunk(wx), worldToChunk(wz));
    return s < 0 ? 0 : blocks[s][li(wx, wy, wz)];
  };
  const waterAmount = (wx: number, wy: number, wz: number): number => {
    if (getBlock(wx, wy, wz) !== WATER) return 0;
    const s = slot(worldToChunk(wx), worldToChunk(wz));
    return s < 0 ? 0 : flAmount(fluid[s][li(wx, wy, wz)]);
  };

  const m = meshChunkData(cx, cz, getBlock, waterAmount);
  const sections = splitChunkMesh(m); // worker 端竖直分段：每套材质网格切成矮段 → 主线程视锥剔除生效(剔掉看不见的地下段)

  const transfer: ArrayBuffer[] = [];
  const collect = (md: MeshData): void => {
    transfer.push(md.positions.buffer, md.uvs.buffer, md.colors.buffer, md.indices.buffer);
    if (md.light && md.light.length) transfer.push(md.light.buffer);
    if (md.top && md.top.length) transfer.push(md.top.buffer);
  };
  for (const arr of [sections.opaque, sections.cutout, sections.water, sections.torch])
    for (const md of arr) collect(md);
  (self as unknown as Worker).postMessage({ cx, cz, mesh: sections }, transfer);
};
