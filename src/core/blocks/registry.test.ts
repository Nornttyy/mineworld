import { describe, it, expect } from 'vitest';
import {
  BLOCKS,
  blockFaceTile,
  isSolidId,
  isOpaque,
  isTargetableId,
  isReplaceableId,
  isCutoutId,
  isPlantId,
  Face,
  SANDSTONE,
  CACTUS,
  ICE,
  SNOW_LAYER,
  SPRUCE_LOG,
  SPRUCE_LEAVES,
  blockSlipperiness,
  isCactus,
  isLavaId,
  isNetherPortalId,
  OBSIDIAN,
  NETHERRACK,
  GLOWSTONE,
  LAVA,
  BEDROCK,
  NETHER_PORTAL,
} from './registry';

describe('block registry', () => {
  it('air is non-solid, stone is solid', () => {
    expect(BLOCKS[0].name).toBe('air');
    expect(isSolidId(0)).toBe(false);
    expect(isSolidId(1)).toBe(true); // stone
  });
  it('grass uses grass_top on top, dirt on bottom, grass_side on sides', () => {
    const grass = BLOCKS.findIndex((b) => b.name === 'grass');
    expect(blockFaceTile(grass, Face.PosY)).toBe(2); // grass_top
    expect(blockFaceTile(grass, Face.NegY)).toBe(1); // dirt
    expect(blockFaceTile(grass, Face.PosX)).toBe(3); // grass_side
  });
  it('stone uses the same tile on every face', () => {
    const f = [Face.PosX, Face.NegX, Face.PosY, Face.NegY, Face.PosZ, Face.NegZ];
    expect(f.every((face) => blockFaceTile(1, face) === 0)).toBe(true);
  });
  it('isSolidId of unknown id is false', () => {
    expect(isSolidId(999)).toBe(false);
  });
  it('下界方块：基本属性', () => {
    expect(BLOCKS[OBSIDIAN].name).toBe('obsidian');
    expect(BLOCKS[NETHERRACK].solid).toBe(true);
    expect(BLOCKS[GLOWSTONE].light).toBe(15); // 自发光
    expect(BLOCKS[BEDROCK].hardness).toBeLessThan(0); // 不可破坏
  });
  it('下界方块：岩浆/传送门块非实心，传送门可被覆盖', () => {
    expect(isLavaId(LAVA)).toBe(true);
    expect(isSolidId(LAVA)).toBe(false);
    expect(isNetherPortalId(NETHER_PORTAL)).toBe(true);
    expect(isSolidId(NETHER_PORTAL)).toBe(false);
    expect(isReplaceableId(NETHER_PORTAL)).toBe(true);
  });
  it('grass plants are targetable (mineable) though non-solid; water/air are neither', () => {
    expect(isSolidId(16)).toBe(false); // 草丛非实心(可穿过)
    expect(isTargetableId(16)).toBe(true); // …但挖掘射线能选中/打掉(选择框≠碰撞框)
    expect(isTargetableId(17)).toBe(true); // 长草同理
    expect(isTargetableId(1)).toBe(true); // 石头：实心 → 可选
    expect(isTargetableId(9)).toBe(false); // 水：不可挖选
    expect(isTargetableId(0)).toBe(false); // 空气
  });
});

describe('沙漠/雪原新方块', () => {
  it('注册了 6 个新方块且名字正确', () => {
    expect(BLOCKS[SANDSTONE].name).toBe('sandstone');
    expect(BLOCKS[CACTUS].name).toBe('cactus');
    expect(BLOCKS[ICE].name).toBe('ice');
    expect(BLOCKS[SNOW_LAYER].name).toBe('snow_layer');
    expect(BLOCKS[SPRUCE_LOG].name).toBe('spruce_log');
    expect(BLOCKS[SPRUCE_LEAVES].name).toBe('spruce_leaves');
  });

  // 防回归：每个新方块都必须落进某条 mesher 渲染分支，否则不可见。
  // 实心新方块要么不透明(走 opaque 批)，要么镂空(spruce_leaves)。仙人掌曾误设 transparent:true
  // → 既非 opaque 也非 cutout/plant/ice → 整株不可见。锁死它走 opaque。
  it('实心新方块可渲染：仙人掌/沙石/云杉原木走不透明批，云杉叶走镂空', () => {
    expect(isOpaque(CACTUS)).toBe(true); // 不可见 bug 的回归守卫
    expect(isOpaque(SANDSTONE)).toBe(true);
    expect(isOpaque(SPRUCE_LOG)).toBe(true);
    expect(isCutoutId(SPRUCE_LEAVES)).toBe(true);
  });
  it('冰打滑、其余正常摩擦', () => {
    expect(blockSlipperiness(ICE)).toBeGreaterThan(blockSlipperiness(1)); // 冰 > 石
    expect(blockSlipperiness(1)).toBeCloseTo(0.6, 5);
    expect(blockSlipperiness(ICE)).toBeCloseTo(0.98, 5);
  });
  it('云杉叶是镂空、雪层是可穿草类、仙人掌可判定', () => {
    expect(isCutoutId(SPRUCE_LEAVES)).toBe(true);
    expect(isPlantId(SNOW_LAYER)).toBe(true);
    expect(isSolidId(SNOW_LAYER)).toBe(false); // 装饰薄层可穿
    expect(isCactus(CACTUS)).toBe(true);
    expect(isCactus(1)).toBe(false);
  });
  it('沙漠/雪原方块 id 在 26-31 范围内（不与下界 18-25 冲突）', () => {
    expect(SANDSTONE).toBe(26);
    expect(CACTUS).toBe(27);
    expect(ICE).toBe(28);
    expect(SNOW_LAYER).toBe(29);
    expect(SPRUCE_LOG).toBe(30);
    expect(SPRUCE_LEAVES).toBe(31);
  });
});
