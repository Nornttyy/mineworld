import { describe, expect, it } from 'vitest';
import { BLOCKS, WATER, LAVA } from '../blocks/registry';
import { generateModernChunk, clearModernWorldgenCaches, modernSurfaceDiagnostics, modernOreDiagnostics } from './modernOverworld';
import { biomeZoomSeed } from './biomeZoom';
import fixtures from './reference/terrain26.fixtures.json';
import saved from './reference/terrain-pre-v3.hashes.json';

const ids = fixtures.palette.map(name => {
  const block = BLOCKS.find(b => `minecraft:${b.id === 3 ? 'grass_block' : b.name}` === name);
  if (!block) throw new Error(`Missing reference material ${name}`);
  return block.id;
});

describe('official Java 26.3 whole-chunk terrain reference', () => {
  for (const sample of fixtures.cases) for (const stage of ['noise', 'surface'] as const) {
    it(`seed ${sample.seed}, chunk ${sample.cx},${sample.cz}, ${stage}: every block`, () => {
      const chunk = generateModernChunk(sample.cx,sample.cz,sample.seed,3,stage);
      let index = 0, different = 0, fluidErrors = 0; const first: unknown[] = [];
      for (const [paletteId, count] of stage === 'noise' ? sample.raw : sample.surface) {
        const expected = ids[paletteId];
        for (let i = 0; i < count; i++, index++) {
          const y = index % 384 - 64, x = Math.floor(index/384) % 16, z = Math.floor(index/(384*16));
          const actual = chunk.get(x,y,z);
          if (actual !== expected) { different++; if (first.length < 5) first.push({x:x+sample.cx*16,y,z:z+sample.cz*16,actual:BLOCKS[actual].name,expected:fixtures.palette[paletteId]}); }
          if (chunk.getFluid(x,y,z) !== (actual === WATER || actual === LAVA ? 24 : 0)) fluidErrors++;
        }
      }
      expect(index).toBe(98304);
      expect(fluidErrors).toBe(0);
      expect({different,first}).toEqual({different:0,first:[]});
    }, 20_000);
  }
  it('surface estimates and depths match original engine column samples', () => {
    for (const sample of fixtures.cases) for (const c of sample.columns) {
      expect(modernSurfaceDiagnostics(c.x,c.z,sample.seed)).toEqual({preliminary:c.preliminary,depth:c.depth});
    }
  },20_000);
  it('ore random streams and density fields match independent original samples', () => {
    for (const d of fixtures.diagnostics) for (const ore of d.ores) {
      const actual=modernOreDiagnostics(ore.pos[0],ore.pos[1],ore.pos[2],d.seed);
      actual.random.forEach((value,i)=>expect(value).toBeCloseTo(ore.random[i],7));
      actual.values.forEach((value,i)=>expect(value).toBeCloseTo(ore.values[i],5));
    }
  });
});

describe('generator compatibility and deterministic seeds', () => {
  it.each(saved)('retains saved revision $revision, seed $seed, chunk $cx,$cz', async sample => {
    clearModernWorldgenCaches();
    const chunk=generateModernChunk(sample.cx,sample.cz,sample.seed,sample.revision as 1|2);
    const bytes=new Uint8Array(chunk.blocks.byteLength+chunk.fluid.byteLength);
    bytes.set(new Uint8Array(chunk.blocks.buffer));bytes.set(chunk.fluid,chunk.blocks.byteLength);
    const digest=new Uint8Array(await crypto.subtle.digest('SHA-256',bytes));
    const actual=Array.from(digest,b=>b.toString(16).padStart(2,'0')).join('');
    expect(actual).toBe(sample.sha256);
  },20_000);
  it('biome zoom seed matches independent SHA-256 with little-endian long encoding', async () => {
    for (const seed of [0n,1n,-1n,4294967297n,-9223372036854775808n,9223372036854775807n]) {
      const bytes=new Uint8Array(8);new DataView(bytes.buffer).setBigInt64(0,seed,true);
      const digest=await crypto.subtle.digest('SHA-256',bytes);
      expect(biomeZoomSeed(seed)).toBe(new DataView(digest).getBigInt64(0,true));
    }
  });
  it('revision 3 decorations remain stable across neighbor generation and cache clearing', () => {
    clearModernWorldgenCaches();const first=generateModernChunk(-1,0,'0',3);
    generateModernChunk(0,0,'0',3);const next=generateModernChunk(-1,0,'0',3);
    clearModernWorldgenCaches();const cold=generateModernChunk(-1,0,'0',3);
    expect(next.blocks).toEqual(first.blocks);expect(cold.blocks).toEqual(first.blocks);
    expect(next.fluid).toEqual(first.fluid);expect(cold.fluid).toEqual(first.fluid);
  },20_000);
});
