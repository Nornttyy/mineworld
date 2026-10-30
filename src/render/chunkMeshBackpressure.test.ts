/* eslint-disable @typescript-eslint/no-explicit-any */ // Inspect private scheduling state; no WebGL required.
import * as THREE from 'three';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ChunkWorld } from '../core/world/chunkWorld';
import type { ChunkMesh } from '../core/mesh/mesher';

const fake = vi.hoisted(() => {
  class MeshWorker {
    static instances: MeshWorker[] = [];
    onmessage: ((event: { data: any }) => void) | null = null;
    onerror: ((event: { message: string }) => void) | null = null;
    onmessageerror: (() => void) | null = null;
    messages: any[] = [];
    postMessage = vi.fn((data: any) => {
      this.messages.push(data);
    });
    terminate = vi.fn();
    constructor() {
      MeshWorker.instances.push(this);
    }
    reply(data: any): void {
      this.onmessage?.({ data });
    }
  }
  return { MeshWorker };
});
vi.mock('../core/mesh/meshGen.worker?worker', () => ({ default: fake.MeshWorker }));
vi.mock('./atlas', async () => {
  const three = await import('three');
  return {
    loadWaterFrames: () => [new three.Texture()],
    loadTorchTexture: () => new three.Texture(),
  };
});
import { ChunkMeshManager } from './ChunkMeshManager';

const emptyMesh = (): ChunkMesh => {
  const data = () => ({
    positions: new Float32Array(),
    uvs: new Float32Array(),
    colors: new Float32Array(),
    indices: new Uint32Array(),
  });
  return {
    opaque: data(),
    ice: data(),
    cutout: data(),
    water: data(),
    portal: data(),
    torch: data(),
    light3d: new Uint8Array(),
  };
};
function loadedWorld() {
  // Small buffers test scheduling/copy ownership without allocating an actual terrain.
  const chunks = new Map<string, { dirty: boolean; blocks: Uint16Array; fluid: Uint8Array }>();
  for (let x = -6; x <= 6; x++)
    for (let z = -6; z <= 6; z++)
      chunks.set(`${x},${z}`, {
        dirty: true,
        blocks: new Uint16Array([1, 2]),
        fluid: new Uint8Array([3, 4]),
      });
  const world = {
    height: 384,
    minY: -64,
    peek: (x: number, z: number) => chunks.get(`${x},${z}`),
    request: vi.fn(),
    retryStuckGen: vi.fn(),
  };
  return { world: world as unknown as ChunkWorld, chunks, request: world.request };
}
let now = 0;
let managers: ChunkMeshManager[];
function manager(world: ChunkWorld): any {
  const value = new ChunkMeshManager(new THREE.Scene(), world, new THREE.Texture());
  managers.push(value);
  return value;
}
beforeEach(() => {
  now = 0;
  managers = [];
  fake.MeshWorker.instances = [];
  vi.stubGlobal('Worker', fake.MeshWorker);
  vi.stubGlobal('navigator', { hardwareConcurrency: 3 }); // two mesh workers
  vi.spyOn(performance, 'now').mockImplementation(() => now);
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});
afterEach(() => {
  for (const value of managers) value.dispose();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('chunk mesh worker backpressure', () => {
  it('keeps one in-flight job per worker and copies neighbors only when dispatching', () => {
    const { world, chunks } = loadedWorld();
    const cmm = manager(world);
    const copy = vi.spyOn(cmm, 'collectNeighbors');
    for (let frame = 0; frame < 100; frame++) cmm.update(0, 0, 3, 999);
    expect(fake.MeshWorker.instances).toHaveLength(2);
    for (const worker of fake.MeshWorker.instances) expect(worker.messages).toHaveLength(1);
    expect(copy).toHaveBeenCalledTimes(2);
    expect(cmm.meshPending.size).toBe(2);
    expect(cmm.meshPendingSince.size).toBe(2);
    expect(cmm.meshWorkerJobs.size).toBe(2);
    expect(chunks.get('3,3')!.dirty).toBe(true);
    const sent = fake.MeshWorker.instances[0].messages[0];
    const original = chunks.get(`${sent.cx - 1},${sent.cz - 1}`)!;
    expect(sent.blocks[0]).not.toBe(original.blocks);
    expect(sent.blocks[0].buffer).not.toBe(original.blocks.buffer);
    expect(Array.from(original.blocks)).toEqual([1, 2]);
  });

  it('skips pending and already-queued chunks so they cannot consume the next dispatch budget', () => {
    const { world } = loadedWorld();
    const cmm = manager(world);
    cmm.update(0, 0, 2, 1);
    cmm.update(0, 0, 2, 1);
    const [first, second] = fake.MeshWorker.instances;
    expect(first.messages).toHaveLength(1);
    expect(second.messages).toHaveLength(1); // nearest pending did not starve the second worker
    first.reply({ ...first.messages[0], mesh: emptyMesh() });
    cmm.update(0, 0, 2, 1);
    expect(first.messages).toHaveLength(2);
    expect(first.messages[1].jobId).not.toBe(first.messages[0].jobId);
    expect([first.messages[1].cx, first.messages[1].cz]).not.toEqual([
      first.messages[0].cx,
      first.messages[0].cz,
    ]);
    expect(cmm.meshQueueLen()).toBe(1);
  });

  it('starts timeout only when a waiting chunk is actually dispatched', () => {
    const { world, chunks } = loadedWorld();
    const cmm = manager(world);
    cmm.update(0, 0, 2, 999);
    const [first, second] = fake.MeshWorker.instances;
    expect(cmm.rebuild(4, 0)).toBe(false);
    expect(cmm.meshPendingSince.has('4,0')).toBe(false);
    now = 29000;
    first.reply({ ...first.messages[0], mesh: emptyMesh() });
    expect(cmm.rebuild(4, 0)).toBe(true);
    expect(cmm.meshPendingSince.get('4,0')).toBe(29000);
    now = 30001;
    cmm.retryStuckMeshes();
    expect(first.terminate).not.toHaveBeenCalled();
    expect(second.terminate).toHaveBeenCalledTimes(1);
    expect(cmm.meshPending.has('4,0')).toBe(true);
    const expired = second.messages[0];
    expect(chunks.get(`${expired.cx},${expired.cz}`)!.dirty).toBe(true);
  });

  it('terminates timed-out work before replacing it and ignores the old callback', () => {
    const { world } = loadedWorld();
    const cmm = manager(world);
    cmm.rebuild(0, 0);
    const old = fake.MeshWorker.instances[0];
    const oldCallback = old.onmessage!;
    now = 30001;
    cmm.retryStuckMeshes();
    expect(old.terminate).toHaveBeenCalledTimes(1);
    expect(cmm.meshWorkerJobs.size).toBe(0);
    cmm.rebuild(0, 0);
    const currentId = cmm.meshPending.get('0,0');
    oldCallback({ data: { ...old.messages[0], mesh: emptyMesh() } });
    expect(cmm.meshPending.get('0,0')).toBe(currentId);
    expect(cmm.meshWorkerJobs.size).toBe(1);
    expect(cmm.meshQueueLen()).toBe(0);
  });

  it('releases a stale dimension job without deleting the new same-coordinate task', () => {
    const oldWorld = loadedWorld();
    const target = loadedWorld();
    const cmm = manager(oldWorld.world);
    cmm.rebuild(0, 0);
    const old = fake.MeshWorker.instances[0];
    cmm.setWorld(target.world);
    cmm.rebuild(0, 0); // second worker is free; first is still physically busy
    const currentId = cmm.meshPending.get('0,0');
    expect(cmm.meshWorkerJobs.size).toBe(2);
    old.reply({ ...old.messages[0], mesh: emptyMesh() });
    expect(cmm.meshPending.get('0,0')).toBe(currentId);
    expect(cmm.meshWorkerJobs.size).toBe(1);
    expect(cmm.meshQueueLen()).toBe(0);
    expect(cmm.rebuild(1, 0)).toBe(true); // old slot is available again
  });

  it.each(['onerror', 'onmessageerror', 'postMessage'] as const)(
    'recovers the slot and dirty state after %s failure',
    (kind) => {
      const { world, chunks } = loadedWorld();
      const cmm = manager(world);
      const worker = fake.MeshWorker.instances[0];
      if (kind === 'postMessage')
        worker.postMessage.mockImplementationOnce(() => {
          throw new Error('cannot post');
        });
      cmm.rebuild(0, 0);
      if (kind === 'onerror') worker.onerror!({ message: 'worker crashed' });
      if (kind === 'onmessageerror') worker.onmessageerror!();
      expect(cmm.meshPending.has('0,0')).toBe(false);
      expect(cmm.meshWorkerJobs.size).toBe(0);
      expect(chunks.get('0,0')!.dirty).toBe(true);
      expect(worker.terminate).toHaveBeenCalledTimes(1);
      expect(cmm.rebuild(0, 0)).toBe(true);
    },
  );

  it('retries a failed edit and keeps a further edit dirty when its previous result arrives', () => {
    const { world, chunks } = loadedWorld();
    const cmm = manager(world);
    cmm.meshes.set('0,0', { opaque: new THREE.Mesh() });
    cmm.remeshDirty();
    const first = fake.MeshWorker.instances[0];
    expect(chunks.get('0,0')!.dirty).toBe(false);
    first.reply({ ...first.messages[0], error: 'mesh failure' });
    expect(chunks.get('0,0')!.dirty).toBe(true);
    cmm.update(0, 0, 0, 1);
    const retry = fake.MeshWorker.instances[1];
    expect(retry.messages).toHaveLength(1);
    chunks.get('0,0')!.dirty = true;
    retry.reply({ ...retry.messages[0], mesh: emptyMesh() });
    expect(chunks.get('0,0')!.dirty).toBe(true);
    expect(cmm.priorityQueue).toHaveLength(1);
    cmm.update(0, 0, 0, 1);
    expect(cmm.priorityQueue).toHaveLength(0); // remove the older result before sending the newer edit
    expect(cmm.meshPending.has('0,0')).toBe(true);
  });

  it('does not partially copy a neighborhood whose last chunk is missing', () => {
    const { world, chunks } = loadedWorld();
    const cmm = manager(world);
    chunks.delete('1,1');
    const firstCopy = vi.spyOn(chunks.get('-1,-1')!.blocks, 'slice');
    expect(cmm.rebuild(0, 0)).toBe(false);
    expect(firstCopy).not.toHaveBeenCalled();
    expect(cmm.meshPendingSince.size).toBe(0);
    expect(cmm.meshWorkerJobs.size).toBe(0);
  });

  it('requests generation center-first and by increasing distance before the outer ring', () => {
    const { world, request } = loadedWorld();
    const cmm = manager(world);
    cmm.update(10, -7, 2, 0, 1, 0);
    const calls = request.mock.calls as [number, number][];
    expect(calls[0]).toEqual([10, -7]);
    expect(calls).toHaveLength(49);
    const distances = calls.map(([x, z]) => (x - 10) ** 2 + (z + 7) ** 2);
    expect(distances).toEqual([...distances].sort((a, b) => a - b));
    expect(calls.findIndex(([x, z]) => x === 11 && z === -7)).toBeLessThan(
      calls.findIndex(([x, z]) => x === 9 && z === -7),
    );
  });
});
