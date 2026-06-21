import { describe, it, expect } from 'vitest';
import {
  BLOCKS, blockFaceTile, isSolidId, isTargetableId, isReplaceableId, Face,
  isLavaId, isNetherPortalId,
  OBSIDIAN, NETHERRACK, GLOWSTONE, LAVA, BEDROCK, NETHER_PORTAL,
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
