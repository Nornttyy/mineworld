import { describe, expect, it } from 'vitest';
import { COPPER_ORE, RAW_COPPER_BLOCK, RAW_IRON_BLOCK, dropFor } from '../blocks/registry';
import { RAW_COPPER, RAW_IRON, COPPER_INGOT, STONE_PICKAXE, WOODEN_PICKAXE, toolOf } from '../items/items';
import { gridResult, consumeGrid } from './gridCraft';
import { smeltResult } from './smelting';

describe('large-vein mining and raw-metal use', () => {
  it('copper needs a stone pick and raw copper smelts into copper', () => {
    expect(dropFor(COPPER_ORE,toolOf(WOODEN_PICKAXE))).toBeNull();
    expect(dropFor(COPPER_ORE,toolOf(STONE_PICKAXE))).toBe(RAW_COPPER);
    expect(smeltResult(RAW_COPPER)).toBe(COPPER_INGOT);
    expect(smeltResult(COPPER_ORE)).toBe(COPPER_INGOT);
  });
  it.each([[RAW_COPPER,RAW_COPPER_BLOCK],[RAW_IRON,RAW_IRON_BLOCK]])('raw metal %i packs/unpacks without loss', (raw,block) => {
    expect(dropFor(block,toolOf(STONE_PICKAXE))).toBe(block);
    const grid=Array.from({length:3},()=>Array.from({length:3},()=>({id:raw,count:1})));
    expect(gridResult(grid)).toEqual({id:block,count:1});consumeGrid(grid);
    expect(grid.flat().every(cell=>cell===null)).toBe(true);
    expect(gridResult([[{id:block,count:1},null],[null,null]])).toEqual({id:raw,count:9});
  });
});
