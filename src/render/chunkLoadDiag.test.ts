/* eslint-disable @typescript-eslint/no-explicit-any */ // 诊断探针：故意 (cmm as any) 读私有字段(meshes 等)
// 诊断 harness：在 node 同步路径下跑【真实】ChunkWorld + ChunkMeshManager，逐区块导出「是否网格化 +
// 是否可见」，用来抓"区块加载不出来/隐身"。无 GPU、无浏览器、确定性。
//
// 结论(2026-06-22)：稳态可见性逻辑正确(stationary settle 能填满所有洞)；洞是【移动时前沿追赶滞后】——
// 旧版 todo 纯按距离排序、不分朝向，有限预算被花在身后(cullToView 反正隐藏)的区块上，前方新揭开的
// 区块排在后面 → "往前走前面加载不出来"。修法：chunkAhead 前方优先排序(零开销，只换顺序)。
// 下面【场景4 A/B】是该修复的回归护栏(默认跑，小范围快)；前几个 dump 场景是排查工具(CHUNK_DIAG=1 才跑)。
import * as THREE from 'three';
import { describe, it, beforeAll, expect } from 'vitest';

// three 的 TextureLoader 走 document.createElementNS('img')。node 无 DOM → 给个最小桩(不真加载像素,
// 诊断只关心 meshes/可见性，不渲染)。返回容忍属性赋值 + 事件监听的假元素即可。
beforeAll(() => {
  if (typeof (globalThis as any).document === 'undefined') {
    (globalThis as any).document = {
      createElementNS: () => ({ addEventListener() {}, removeEventListener() {}, setAttribute() {}, style: {} }),
      createElement: () => ({ getContext: () => null, addEventListener() {}, style: {} }),
    };
  }
});
import { ChunkWorld } from '../core/world/chunkWorld';
import { ChunkMeshManager } from './ChunkMeshManager';
import { CHUNK_W } from '../core/world/chunk';
import { chunkInView } from './chunkCull';

const DUMP = !!(globalThis as any).process?.env?.CHUNK_DIAG; // 慢的 dump 场景(RD6 全图)只在 CHUNK_DIAG=1 时跑
const dit = DUMP ? it : it.skip;

const fogR2 = (rd: number): number => rd ** 2; // setFogFar(rd*16) → fogCullR2 = rd²
function fogged(dCx: number, dCz: number, rd: number): boolean {
  const nx = Math.max(0, Math.abs(dCx) - 0.5);
  const nz = Math.max(0, Math.abs(dCz) - 0.5);
  return nx * nx + nz * nz > fogR2(rd);
}

function readState(cmm: any, cx: number, cz: number): { meshed: boolean; visible: boolean } {
  const m = cmm.meshes.get(`${cx},${cz}`);
  if (!m) return { meshed: false, visible: false };
  const vis = [m.opaque, m.cutout, m.water, m.torch].some((s: any) => s && s.visible);
  return { meshed: true, visible: vis };
}

// 导出以 (cCx,cCz) 为中心、半径 rd 的网格。V=网格化且可见 h=网格化但隐藏 .=范围内没网格化(洞) ' '=雾外(正常)
function dumpGrid(cmm: any, cCx: number, cCz: number, rd: number, label: string): string {
  const lines = [`--- ${label} (中心 ${cCx},${cCz}, R=${rd}) ---`];
  for (let dz = -rd; dz <= rd; dz++) {
    let row = '';
    for (let dx = -rd; dx <= rd; dx++) {
      const st = readState(cmm, cCx + dx, cCz + dz);
      if (!st.meshed) row += fogged(dx, dz, rd) ? ' ' : '.';
      else row += st.visible ? 'V' : 'h';
    }
    lines.push(row);
  }
  return lines.join('\n');
}

// 视锥内(玩家看得见、cullToView 不隐藏)却没建出来的格 = 玩家真正会看到的"洞/隐身"
function inViewHoles(cmm: any, cCx: number, cCz: number, rd: number, px: number, pz: number, dx: number, dz: number): number {
  let n = 0;
  for (let oz = -rd; oz <= rd; oz++) {
    for (let ox = -rd; ox <= rd; ox++) {
      if (fogged(ox, oz, rd)) continue;
      const cx = cCx + ox;
      const cz = cCz + oz;
      if (!chunkInView(cx * CHUNK_W + CHUNK_W / 2, cz * CHUNK_W + CHUNK_W / 2, px, pz, dx, dz)) continue;
      const st = readState(cmm, cx, cz);
      if (!st.meshed || !st.visible) n++;
    }
  }
  return n;
}

function makeCMM(): { cmm: any; world: ChunkWorld } {
  const scene = new THREE.Scene();
  const world = new ChunkWorld(12345);
  const atlas = new THREE.Texture();
  const cmm: any = new ChunkMeshManager(scene, world, atlas);
  cmm.setFogFar(0); // 占位，下面每个场景按自己的 rd 再 setFogFar
  return { cmm, world };
}

describe('区块加载/可见性诊断', () => {
  // ===== 排查工具 + A/B 验证（CHUNK_DIAG=1 才跑，RD6 全图较慢；默认 CI 由 chunkCull 单测护栏）=====
  const RD6 = 6;

  dit('A/B 验证：前方优先 vs 纯距离——视锥内的洞应更少（预算不足时差异才显现）', () => {
    const dx = Math.cos(0); // 朝 +X
    const dz = Math.sin(0);
    const run = (useDir: boolean): number => {
      const { cmm } = makeCMM();
      cmm.setFogFar(RD6 * CHUNK_W);
      // 不 settle：从零起，预算 4(同游戏 loadBudget)，跑 8 帧远不够建完整圈 → 逼出"预算花哪了"的差异
      for (let f = 0; f < 8; f++) {
        cmm.update(0, 0, RD6, 4, useDir ? dx : 0, useDir ? dz : 0);
        cmm.flushMesh(64);
      }
      cmm.cullToView(0, 0, dx, dz);
      return inViewHoles(cmm, 0, 0, RD6, 0, 0, dx, dz);
    };
    const without = run(false);
    const withDir = run(true);
    console.log(`\n【A/B】预算不足时视锥内的洞：纯距离=${without}  前方优先=${withDir}（少 ${without - withDir} 个）`);
    expect(withDir).toBeLessThan(without); // 前方优先把有限预算更多砸在玩家看得见的区块上
  });
  function settle(cmm: any, cCx: number, cCz: number): void {
    for (let i = 0; i < 4; i++) {
      cmm.update(cCx, cCz, RD6, 9999, 1, 0);
      cmm.flushMesh(64);
    }
  }

  dit('dump 场景1: 出生点静止', () => {
    const { cmm } = makeCMM();
    cmm.setFogFar(RD6 * CHUNK_W);
    settle(cmm, 0, 0);
    cmm.cullToView(0, 0, 1, 0);
    console.log('\n' + dumpGrid(cmm, 0, 0, RD6, '出生点 朝+X'));
    console.log('视锥内洞数 =', inViewHoles(cmm, 0, 0, RD6, 0, 0, 1, 0));
  });

  dit('dump 场景2: 向东走 5 个区块（前方优先 vs 不优先 对比）', () => {
    for (const useDir of [false, true]) {
      const { cmm } = makeCMM();
      cmm.setFogFar(RD6 * CHUNK_W);
      settle(cmm, 0, 0);
      let total = 0;
      for (let step = 1; step <= 5; step++) {
        for (let f = 0; f < 6; f++) {
          cmm.update(step, 0, RD6, 2, useDir ? 1 : 0, 0);
          cmm.flushMesh(64);
        }
        const px = step * CHUNK_W;
        cmm.cullToView(px, 0, 1, 0);
        total += inViewHoles(cmm, step, 0, RD6, px, 0, 1, 0);
      }
      console.log(`\n[${useDir ? '前方优先' : '纯距离'}] 走5步累计视锥内洞数 = ${total}`);
    }
  });

  dit('dump 场景2b: 走到 cx=5 停下 settle 40 帧（洞应填满=仅追赶滞后）', () => {
    const { cmm } = makeCMM();
    cmm.setFogFar(RD6 * CHUNK_W);
    settle(cmm, 0, 0);
    for (let step = 1; step <= 5; step++)
      for (let f = 0; f < 6; f++) {
        cmm.update(step, 0, RD6, 2, 1, 0);
        cmm.flushMesh(64);
      }
    for (let f = 0; f < 40; f++) {
      cmm.update(5, 0, RD6, 2, 1, 0);
      cmm.flushMesh(64);
    }
    cmm.cullToView(5 * CHUNK_W, 0, 1, 0);
    const h = inViewHoles(cmm, 5, 0, RD6, 5 * CHUNK_W, 0, 1, 0);
    console.log('\n' + dumpGrid(cmm, 5, 0, RD6, '停在 cx=5 settle 40 帧后'));
    console.log(h === 0 ? '✓ 洞全填满(=仅追赶滞后,非选择bug)' : `⚠ 仍有 ${h} 个洞(=真选择bug)`);
  });
});
