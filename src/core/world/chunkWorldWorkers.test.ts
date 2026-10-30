import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Chunk } from './chunk';
import { ChunkWorld } from './chunkWorld';
import { generateChunkForWorld } from '../worldgen/generator';

type GenRequest = { cx: number; cz: number; seed: number; seed64?: string; generator?: string };
const fake = vi.hoisted(() => {
  const instances: FakeWorker[] = [];
  class FakeWorker {
    onmessage: Worker['onmessage'] = null;
    onerror: Worker['onerror'] = null;
    posts: GenRequest[] = [];
    active = false;
    terminate = vi.fn(() => {
      this.active = false;
    });
    constructor() {
      instances.push(this);
    }
    postMessage(data: GenRequest): void {
      if (this.active) throw new Error('More than one in-flight job on a worker');
      this.active = true;
      this.posts.push(data);
    }
    emit(data: Record<string, unknown>): void {
      this.active = false;
      this.onmessage?.call(this as unknown as Worker, { data } as MessageEvent);
    }
    fail(message = 'worker crashed'): void {
      this.onerror?.call(this as unknown as Worker, { message } as ErrorEvent);
    }
  }
  return { instances, FakeWorker };
});
vi.mock('./chunkGen.worker?worker', () => ({ default: fake.FakeWorker }));
vi.mock('../worldgen/generator', async () => {
  const { Chunk: TestChunk } = await import('./chunk');
  return {
    generateChunkForWorld: vi.fn((_cx, _cz, _seed, _dimension, generator) => {
      const c = generator === 'java26' ? new TestChunk(-64, 384) : new TestChunk();
      c.set(0, c.minY, 0, 7);
      return c;
    }),
  };
});

let time = 0;
beforeEach(() => {
  fake.instances.length = 0;
  time = 0;
  vi.clearAllMocks();
  vi.stubGlobal('Worker', fake.FakeWorker);
  vi.stubGlobal('navigator', { hardwareConcurrency: 1 });
  vi.spyOn(performance, 'now').mockImplementation(() => time);
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  vi.spyOn(console, 'error').mockImplementation(() => undefined);
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function finish(worker = fake.instances[0], modern = true): void {
  const task = worker.posts[worker.posts.length - 1];
  const c = modern ? new Chunk(-64, 384) : new Chunk();
  const heights = new Int16Array(256).fill(70);
  worker.emit({
    cx: task.cx,
    cz: task.cz,
    blocks: c.blocks.buffer,
    fluid: c.fluid.buffer,
    surfaceHeights: heights.buffer,
  });
}

describe('ChunkWorld bounded worker scheduling', () => {
  it('posts only one task per worker and continues in original request order', () => {
    vi.stubGlobal('navigator', { hardwareConcurrency: 8 });
    const world = new ChunkWorld(1, 'overworld', 'java26', '4294967297');
    for (let x = 0; x < 200; x++) world.request(x, 0);
    for (let x = 0; x < 200; x++) world.request(x, 0);
    expect(fake.instances).toHaveLength(4);
    expect(fake.instances.map((w) => w.posts.map((p) => p.cx))).toEqual([[0], [1], [2], [3]]);
    finish(fake.instances[2]);
    expect(fake.instances[2].posts.map((p) => p.cx)).toEqual([2, 4]);
    expect(fake.instances[2].posts[1].seed64).toBe('4294967297');
    expect(world.peek(2, 0)?.surfaceHeights?.[0]).toBe(70);
    expect(world.peek(2, 0)?.minY).toBe(-64);
    world.dispose();
  });

  it('does not timeout tasks that waited over 30 seconds in the main-thread queue', () => {
    const world = new ChunkWorld(1, 'overworld', 'java26');
    for (let x = 0; x < 6; x++) world.request(x, 0);
    const worker = fake.instances[0];
    for (let x = 0; x < 6; x++) {
      time += 20000;
      world.retryStuckGen();
      expect(fake.instances).toHaveLength(1);
      expect(worker.posts.at(-1)?.cx).toBe(x);
      finish(worker);
    }
    expect(worker.posts.map((p) => p.cx)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(console.warn).not.toHaveBeenCalled();
    expect(world.peek(5, 0)).toBeDefined();
    world.dispose();
  });

  it('cancels a queued task after synchronous fallback and never dispatches it later', () => {
    const world = new ChunkWorld(1, 'overworld', 'java26');
    world.request(0, 0);
    world.request(1, 0);
    world.request(2, 0);
    const fallback = world.getChunk(1, 0);
    finish();
    expect(fake.instances[0].posts.map((p) => p.cx)).toEqual([0, 2]);
    finish();
    expect(generateChunkForWorld).toHaveBeenCalledOnce();
    expect(world.peek(1, 0)).toBe(fallback);
    expect(fake.instances[0].posts).toHaveLength(2);
    world.dispose();
  });

  it('keeps a busy slot occupied during in-flight fallback, then ignores the obsolete result', () => {
    const world = new ChunkWorld(1, 'overworld', 'java26');
    world.request(0, 0);
    world.request(1, 0);
    const fallback = world.getChunk(0, 0);
    fallback.set(0, -64, 0, 17);
    expect(fake.instances[0].posts).toHaveLength(1);
    finish();
    expect(world.peek(0, 0)).toBe(fallback);
    expect(fallback.get(0, -64, 0)).toBe(17);
    expect(fake.instances[0].posts.map((p) => p.cx)).toEqual([0, 1]);
    world.dispose();
  });

  it('replaces an errored worker, retries its task and ignores messages from its old instance', () => {
    const world = new ChunkWorld(1, 'overworld', 'java26');
    world.request(0, 0);
    world.request(1, 0);
    const old = fake.instances[0];
    old.fail();
    const replacement = fake.instances[1];
    expect(old.terminate).toHaveBeenCalledOnce();
    expect(replacement.posts.map((p) => p.cx)).toEqual([1]);
    finish(old);
    expect(world.peek(0, 0)).toBeUndefined();
    finish(replacement);
    expect(replacement.posts.map((p) => p.cx)).toEqual([1, 0]);
    finish(replacement);
    expect(world.peek(0, 0)).toBeDefined();
    expect(world.peek(1, 0)).toBeDefined();
    world.dispose();
  });

  it('terminates a genuinely stuck execution before retrying, without duplicating queued work', () => {
    const world = new ChunkWorld(1, 'overworld', 'java26');
    world.request(0, 0);
    world.request(1, 0);
    const old = fake.instances[0];
    time = 30001;
    world.retryStuckGen();
    const replacement = fake.instances[1];
    expect(old.terminate).toHaveBeenCalledOnce();
    expect(replacement.posts.map((p) => p.cx)).toEqual([1]);
    world.request(0, 0);
    world.request(1, 0);
    time = 60000; // The replacement has executed for 29,999 ms, not 60 seconds.
    world.retryStuckGen();
    expect(fake.instances).toHaveLength(2);
    finish(old);
    expect(world.peek(0, 0)).toBeUndefined();
    finish(replacement);
    expect(replacement.posts.map((p) => p.cx)).toEqual([1, 0]);
    finish(replacement);
    expect(console.warn).toHaveBeenCalledOnce();
    world.dispose();
  });

  it('bounds repeated generator errors while allowing unrelated queued work to finish', () => {
    const world = new ChunkWorld(1, 'overworld', 'java26');
    world.request(0, 0);
    world.request(1, 0);
    const worker = fake.instances[0];
    worker.emit({ cx: 0, cz: 0, error: 'bad chunk' });
    finish(worker); // chunk 1
    worker.emit({ cx: 0, cz: 0, error: 'bad chunk' });
    worker.emit({ cx: 0, cz: 0, error: 'bad chunk' });
    world.request(0, 0);
    expect(worker.posts.map((p) => p.cx)).toEqual([0, 1, 0, 0]);
    expect(world.peek(1, 0)).toBeDefined();
    expect(console.warn).toHaveBeenCalledTimes(3);
    world.dispose();
  });

  it('eviction cancels far queued work while preserving the actual-cache eviction return value', () => {
    const world = new ChunkWorld(1, 'overworld', 'java26');
    world.request(0, 0);
    world.request(10, 0);
    world.request(1, 0);
    expect(world.evictBeyond(0, 0, 2)).toEqual([]);
    finish();
    expect(fake.instances[0].posts.map((p) => p.cx)).toEqual([0, 1]);
    finish();
    world.request(10, 0); // A later visit can request the canceled chunk normally.
    expect(fake.instances[0].posts.at(-1)?.cx).toBe(10);
    finish();
    expect(world.evictBeyond(0, 0, 2)).toEqual(['10,0']);
    world.dispose();
  });

  it('does not dispatch queued work or restore cache entries after disposal', () => {
    const world = new ChunkWorld(1, 'overworld', 'java26');
    world.request(0, 0);
    world.request(1, 0);
    const worker = fake.instances[0];
    world.dispose();
    finish(worker);
    world.request(2, 0);
    world.retryStuckGen();
    expect(worker.terminate).toHaveBeenCalledOnce();
    expect(worker.posts).toHaveLength(1);
    expect(world.peek(0, 0)).toBeUndefined();
  });
});
