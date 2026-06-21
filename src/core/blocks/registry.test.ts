import { describe, it, expect } from 'vitest';
import {
  BLOCKS,
  blockFaceTile,
  isSolidId,
  isTargetableId,
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
});
