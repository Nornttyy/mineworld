/**
 * Java 26.3 data-driven base terrain. The target version does NOT promise a
 * complete vanilla world: structures, complete feature decoration, carvers, biome zoom,
 * badlands colour bands and large ore veins are not implemented here.
 * See modern-worldgen.md for sources, library fixes and verified scope.
 */
import {
  AquiferConfig, BlockState, Chunk as NoiseBlockChunk, ChunkPos, DensityFunction,
  DensityVolume, FluidStatus, HolderSet, Identifier, MaterialCondition,
  MaterialRule, MaterialRuleContext, MultiNoiseBiomeSource, NoiseChunk,
  NoiseGeneratorSettings, RandomState, WorldgenRegistries,
} from 'deepslate/worldgen';
import type { ConditionEvaluator, RuleEvaluator } from 'deepslate/worldgen';
import worldgenData from './data/java26-overworld.json';
import biomeData from './data/java26-biomes.json';
import { Chunk, flByte } from '../world/chunk';
import { BLOCKS, WATER, LAVA } from '../blocks/registry';
import { decorateModernFeatures } from './modernFeatures';

export const MODERN_MIN_Y = -64;
export const MODERN_HEIGHT = 384;
export const MODERN_MAX_Y = 320; // exclusive
export const MODERN_SEA_LEVEL = 63;
export type ModernSeed = number | string;

type JsonObject = Record<string, unknown>;
const data = worldgenData as unknown as {
  noise: Record<string, unknown>; density_function: Record<string, unknown>;
  material_rule: Record<string, unknown>; material_condition: Record<string, unknown>;
  biomes: string[]; biome_tags: Record<string, unknown>; settings: unknown;
};
const MATERIAL_BLOCKS = new Map(BLOCKS.map(b => [`minecraft:${b.name}`, b.id]));
MATERIAL_BLOCKS.set('minecraft:grass_block', 3);
const SOURCE_FLUID = flByte(8, true, false);
let initialized = false;
let parsedSettings: NoiseGeneratorSettings;
let biomeSource: MultiNoiseBiomeSource;

/** Java's signed long; unsafe JS numbers must not silently truncate seeds. */
export function modernSeed(seed: ModernSeed): bigint {
  if (typeof seed === 'number' && !Number.isSafeInteger(seed)) {
    throw new RangeError('64-bit seeds must be supplied as a decimal string');
  }
  if (typeof seed === 'string' && !/^[+-]?\d+$/.test(seed.trim())) {
    throw new TypeError('Modern world seed must be a signed 64-bit decimal integer');
  }
  const value = BigInt(seed);
  if (value < -(1n << 63n) || value >= 1n << 63n) throw new RangeError('Seed exceeds Java signed long');
  return value;
}

// 0.27.2 omits these conditions. They depend on the actual terrain column,
// not a fake random mask. Unknown material rules are deliberately documented.
class HoleCondition extends MaterialCondition {
  compile(context: MaterialRuleContext): ConditionEvaluator {
    return () => context.surfaceDepth <= 0;
  }
}
class SteepCondition extends MaterialCondition {
  compile(context: MaterialRuleContext): ConditionEvaluator {
    const top = (x: number, z: number): number => {
      const lx = x & 15; const lz = z & 15;
      for (let y = MODERN_MAX_Y - 1; y >= MODERN_MIN_Y; y--) {
        const b = context.chunk.getBlockState([context.chunk.pos[0] * 16 + lx, y, context.chunk.pos[1] * 16 + lz]);
        if (!b.is(BlockState.AIR)) return y;
      }
      return MODERN_MIN_Y;
    };
    return () => {
      const x = context.blockX & 15; const z = context.blockZ & 15;
      return top(x, Math.min(15, z + 1)) >= top(x, Math.max(0, z - 1)) + 4
        || top(Math.max(0, x - 1), z) >= top(Math.min(15, x + 1), z) + 4;
    };
  }
}
function parseCondition(obj: unknown): MaterialCondition {
  if (typeof obj === 'string') return MaterialCondition.fromJson(obj);
  const root = obj as JsonObject;
  if (root.type === 'minecraft:hole') return new HoleCondition();
  if (root.type === 'minecraft:steep') return new SteepCondition();
  if (root.type === 'minecraft:not') return new MaterialCondition.Not(parseCondition(root.invert));
  return MaterialCondition.fromJson(obj);
}
function parseRule(obj: unknown): MaterialRule {
  if (typeof obj === 'string') return MaterialRule.fromJson(obj);
  const root = obj as JsonObject;
  if (root.type === 'minecraft:sequence') return new MaterialRule.Sequence((root.sequence as unknown[]).map(parseRule));
  if (root.type === 'minecraft:condition') return new MaterialRule.Condition(parseCondition(root.if_true), parseRule(root.then_run));
  // Retain the correct material, while reporting absent band generation.
  if (root.type === 'minecraft:bandlands') return new MaterialRule.Block(BlockState.fromJson('minecraft:terracotta'));
  // 26.3's ore-vein material rule is not supplied by deepslate. Ores are a
  // separate feature stage; do not silently relabel generic noise as vanilla.
  if (root.type === 'minecraft:ore_vein') return MaterialRule.NOOP;
  return MaterialRule.fromJson(obj);
}

function initialize(): void {
  if (initialized) return;
  for (const [id, value] of Object.entries(data.noise)) {
    WorldgenRegistries.NOISE.register(Identifier.parse(id), () => WorldgenRegistries.NOISE.parse(value));
  }
  for (const [id, value] of Object.entries(data.density_function)) {
    WorldgenRegistries.DENSITY_FUNCTION.register(Identifier.parse(id), () => DensityFunction.fromJson(value));
  }
  for (const id of data.biomes) WorldgenRegistries.BIOME.register(Identifier.create(id), {});
  for (const [id, value] of Object.entries(data.biome_tags)) {
    WorldgenRegistries.BIOME.getTagRegistry().register(Identifier.parse(id), () => HolderSet.fromJson(WorldgenRegistries.BIOME, value));
  }
  for (const [id, value] of Object.entries(data.material_condition)) {
    WorldgenRegistries.MATERIAL_CONDITION.register(Identifier.parse(id), () => parseCondition(value));
  }
  for (const [id, value] of Object.entries(data.material_rule)) {
    WorldgenRegistries.MATERIAL_RULE.register(Identifier.parse(id), () => parseRule(value));
  }
  parsedSettings = NoiseGeneratorSettings.fromJson(data.settings);
  biomeSource = MultiNoiseBiomeSource.fromJson(biomeData);
  initialized = true;
}

interface SeedContext { state: RandomState; settings: NoiseGeneratorSettings; uses: number }
// Interpolation caches in the library grow with sampled coordinates. Rebuild
// after a bounded number of operations and keep only two seed contexts.
const contexts = new Map<string, SeedContext>();
const heightCache = new Map<string, number>();
const MAX_HEIGHT_CACHE = 16_384;
function rememberHeight(key: string, value: number): void {
  heightCache.set(key, value);
  if (heightCache.size > MAX_HEIGHT_CACHE) heightCache.delete(heightCache.keys().next().value!);
}
function getContext(seed: ModernSeed): SeedContext {
  initialize();
  const signedSeed = modernSeed(seed); const key = signedSeed.toString();
  let ctx = contexts.get(key);
  if (!ctx || ctx.uses >= 512) {
    const state = new RandomState(parsedSettings, signedSeed);
    const settings = { ...parsedSettings };
    // NoiseChunk takes settings.aquifers directly. The upstream generator does
    // not seed those density functions, which otherwise sample constant zero.
    if (settings.aquifers) settings.aquifers = AquiferConfig.mapAll(settings.aquifers, state.createVisitor(false));
    ctx = { state, settings, uses: 0 };
    contexts.delete(key); contexts.set(key, ctx);
    if (contexts.size > 2) contexts.delete(contexts.keys().next().value!);
  }
  ctx.uses++;
  return ctx;
}
function globalFluidPicker(_x: number, y: number, _z: number): FluidStatus {
  return y < -54 ? LAVA_STATUS : SEA_STATUS;
}
const LAVA_STATUS = new FluidStatus(-54, BlockState.LAVA);
const SEA_STATUS = new FluidStatus(MODERN_SEA_LEVEL, BlockState.WATER);

/** Raw quart-cell biome, before Minecraft's separate block-level biome zoom. */
export function modernBiomeAt(x: number, z: number, seed: ModernSeed, y = MODERN_SEA_LEVEL): string {
  const { state } = getContext(seed);
  return biomeSource.getBiome(Math.floor(x / 4), Math.floor(y / 4), Math.floor(z / 4), state.sampler).toString();
}
export function modernDensityAt(x: number, y: number, z: number, seed: ModernSeed): number {
  return getContext(seed).state.router.finalDensity.compute({ x, y, z });
}

/** Top solid Y (not top+1), matching legacy columnHeight's caller contract. */
export function modernColumnHeight(x: number, z: number, seed: ModernSeed): number {
  x = Math.floor(x); z = Math.floor(z);
  const key = `${modernSeed(seed)}:${x}:${z}`;
  const cached = heightCache.get(key);
  if (cached !== undefined) return cached;
  const { state } = getContext(seed);
  let height = MODERN_MIN_Y;
  for (let y = MODERN_MAX_Y - 1; y >= MODERN_MIN_Y; y--) {
    if (state.router.finalDensity.compute({ x, y, z }) > 0) { height = y; break; }
  }
  rememberHeight(key, height);
  return height;
}

function blockId(state: BlockState): number {
  const name = state.getName().toString();
  const id = MATERIAL_BLOCKS.get(name);
  if (id === undefined) throw new Error(`Unmapped modern terrain material ${name}`);
  return id;
}

/** Full 16x16 surface pass, fixing upstream's z<1 preview and fixed plains. */
function buildSurface(chunk: NoiseBlockChunk, noise: NoiseChunk, seedContext: SeedContext): void {
  const { state, settings } = seedContext;
  // Material conditions ask for a biome at every stone Y. A vanilla noise biome
  // is constant throughout each 4x4x4 cell: reuse that lookup for all 64 blocks.
  const quartBiomes: (Identifier | undefined)[] = new Array(4 * 4 * (MODERN_HEIGHT / 4));
  const context = new MaterialRuleContext(state.surfaceSystem, state, chunk, noise,
    { minY: MODERN_MIN_Y, height: MODERN_HEIGHT, seaLevel: MODERN_SEA_LEVEL },
    pos => {
      const index = ((pos[0] & 15) >> 2) + ((pos[2] & 15) >> 2) * 4 + ((pos[1] - MODERN_MIN_Y) >> 2) * 16;
      return quartBiomes[index] ??= biomeSource.getBiome(Math.floor(pos[0] / 4), Math.floor(pos[1] / 4), Math.floor(pos[2] / 4), state.sampler);
    });
  const rule: RuleEvaluator = settings.materialRule.compile(context);
  const minX = chunk.pos[0] * 16; const minZ = chunk.pos[1] * 16;
  for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
    const wx = minX + x; const wz = minZ + z;
    context.updateXZ(wx, wz);
    context.surfaceDepth = Math.floor(context.surfaceDepth);
    let above = 0; let waterHeight = Number.MIN_SAFE_INTEGER;
    let bottom = MODERN_MIN_Y;
    for (let y = MODERN_MAX_Y - 1; y >= MODERN_MIN_Y; y--) {
      const original = chunk.getBlockState([wx, y, wz]);
      if (original.is(BlockState.AIR)) { above = 0; waterHeight = Number.MIN_SAFE_INTEGER; continue; }
      if (original.isFluid()) { if (waterHeight === Number.MIN_SAFE_INTEGER) waterHeight = y + 1; continue; }
      if (above === 0) {
        bottom = y;
        while (bottom > MODERN_MIN_Y) {
          const below = chunk.getBlockState([wx, bottom - 1, wz]);
          if (below.is(BlockState.AIR) || below.isFluid()) break;
          bottom--;
        }
      }
      above++;
      context.updateY(above, y - bottom + 1, waterHeight, y);
      // Material rules replace the configured default solid only.
      if (!original.equals(settings.defaultBlock)) continue;
      const replacement = rule(wx, y, wz);
      if (replacement) chunk.setBlockState([wx, y, wz], replacement);
    }
  }
}

/** Worker-safe synchronous generation. No old terrain/world height constants. */
export function generateModernChunk(cx: number, cz: number, seed: ModernSeed, revision: 1 | 2 = 1): Chunk {
  const ctx = getContext(seed);
  ctx.uses += 32; // bound library caches by approximately 16 generated chunks
  const volume = new DensityVolume(16, MODERN_HEIGHT, 16, cx * 16, MODERN_MIN_Y, cz * 16);
  const noise = new NoiseChunk(ctx.state, ctx.settings, globalFluidPicker, volume);
  const density = ctx.state.router.finalDensity.computeVolume(volume);
  const raw = new NoiseBlockChunk(MODERN_MIN_Y, MODERN_HEIGHT, ChunkPos.create(cx, cz));
  for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) for (let y = MODERN_MIN_Y; y < MODERN_MAX_Y; y++) {
    const solid = density[volume.indexUnchecked(x, y - MODERN_MIN_Y, z)];
    const state = noise.aquifer.computeSubstance(cx * 16 + x, y, cz * 16 + z, solid) ?? ctx.settings.defaultBlock;
    if (!state.is(BlockState.AIR)) raw.setBlockState([cx * 16 + x, y, cz * 16 + z], state);
  }
  buildSurface(raw, noise, ctx);
  const result = new Chunk(MODERN_MIN_Y, MODERN_HEIGHT);
  result.surfaceHeights = new Int16Array(256);
  for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
    let top = MODERN_MIN_Y;
    for (let y = MODERN_MIN_Y; y < MODERN_MAX_Y; y++) {
      const id = blockId(raw.getBlockState([cx * 16 + x, y, cz * 16 + z]));
      result.set(x, y, z, id);
      if (id === WATER || id === LAVA) result.setFluid(x, y, z, SOURCE_FLUID);
      else if (id !== 0) top = y;
    }
    rememberHeight(`${modernSeed(seed)}:${cx * 16 + x}:${cz * 16 + z}`, top);
    result.surfaceHeights[x + z * 16] = top;
  }
  decorateModernFeatures(result, cx, cz, modernSeed(seed), {
    height: (x, z) => modernColumnHeight(x, z, seed),
    biome: (x, z, y) => biomeSource.getBiome(Math.floor(x / 4), Math.floor(y / 4), Math.floor(z / 4), ctx.state.sampler).toString(),
    density: (x, y, z) => ctx.state.router.finalDensity.compute({ x, y, z }),
  }, revision);
  return result;
}

/** Tests and world switching can release deterministic sampler caches. */
export function clearModernWorldgenCaches(): void { contexts.clear(); heightCache.clear(); }
