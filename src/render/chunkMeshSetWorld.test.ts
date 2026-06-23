/* eslint-disable @typescript-eslint/no-explicit-any */ // 读私有字段(meshes/world) 需要 as any
import * as THREE from 'three';
import { describe, it, beforeAll, expect } from 'vitest';

// three 的 TextureLoader 走 document.createElementNS('img')。node 无 DOM → 给个最小桩
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

describe('ChunkMeshManager.setWorld', () => {
  it('setWorld 清空旧维度网格并换 world 引用', () => {
    const scene = new THREE.Scene();
    const w1 = new ChunkWorld(1, 'overworld');
    const cmm: any = new ChunkMeshManager(scene, w1, new THREE.Texture());
    cmm.setFogFar(48);
    cmm.update(0, 0, 2, 9999); cmm.flushMesh(64);
    expect(cmm.meshes.size).toBeGreaterThan(0);
    const w2 = new ChunkWorld(1, 'nether');
    cmm.setWorld(w2);
    expect(cmm.meshes.size).toBe(0);          // 旧网格清空
    expect(cmm.world).toBe(w2);               // 引用已换
  });
});
