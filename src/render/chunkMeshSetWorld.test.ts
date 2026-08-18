/* eslint-disable @typescript-eslint/no-explicit-any */ // 读私有字段(meshes/world) 需要 as any
import * as THREE from 'three';
import { describe, it, beforeAll, expect } from 'vitest';

// three 的 TextureLoader 走 document.createElementNS('img')。node 无 DOM → 给个最小桩
beforeAll(() => {
  if (typeof (globalThis as any).document === 'undefined') {
    (globalThis as any).document = {
      createElementNS: () => ({
        addEventListener() {},
        removeEventListener() {},
        setAttribute() {},
        style: {},
      }),
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
    cmm.update(0, 0, 2, 9999);
    cmm.flushMesh(64);
    expect(cmm.meshes.size).toBeGreaterThan(0);
    const w2 = new ChunkWorld(1, 'nether');
    cmm.setWorld(w2);
    expect(cmm.meshes.size).toBe(0); // 旧网格清空
    expect(cmm.world).toBe(w2); // 引用已换
  });

  it('光影水写深度并退出透明排序，关闭光影后恢复经典 alpha 水', () => {
    const cmm: any = new ChunkMeshManager(
      new THREE.Scene(),
      new ChunkWorld(2, 'overworld'),
      new THREE.Texture(),
    );

    cmm.setLightingQuality('high');
    expect(cmm.waterMat.transparent).toBe(false);
    expect(cmm.waterMat.depthWrite).toBe(true);
    expect(cmm.waterMat.opacity).toBe(1);
    expect(cmm.sun.castShadow).toBe(true);

    cmm.setSunEnabled(false);
    expect(cmm.sun.castShadow).toBe(false);
    cmm.setSunEnabled(true);
    expect(cmm.sun.castShadow).toBe(true);

    cmm.setLightingQuality('off');
    expect(cmm.waterMat.transparent).toBe(true);
    expect(cmm.waterMat.depthWrite).toBe(false);
    expect(cmm.waterMat.opacity).toBe(0.78);
    cmm.dispose();
  });

  it('大角度俯视时不按水平朝向切掉脚下可见区块', () => {
    const cmm: any = new ChunkMeshManager(
      new THREE.Scene(),
      new ChunkWorld(3, 'overworld'),
      new THREE.Texture(),
    );
    const mesh = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial());
    cmm.meshes.set('-4,0', { opaque: mesh, ice: null, cutout: null, water: null, torch: null });

    cmm.cullToView(0, 0, 1, 0, 0);
    expect(mesh.visible).toBe(false);
    mesh.visible = true;
    cmm.cullToView(0, 0, 1, 0, -0.65);
    expect(mesh.visible).toBe(true);

    cmm.dispose();
    (mesh.material as THREE.Material).dispose();
  });
});
