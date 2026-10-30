import { describe, expect, it } from 'vitest';
import {
  BIRCH_LOG, COAL_ORE, COBBLESTONE, CRAFTING_TABLE, FURNACE, IRON_ORE,
  OAK_LOG, OAK_PLANKS, SPRUCE_LOG, TORCH, dropFor,
} from '../blocks/registry';
import {
  addItem, countItem, damageTool, emptyInventory, removeItems,
  type Inventory, type ItemStack,
} from '../inventory/inventory';
import {
  COAL, IRON_INGOT, IRON_PICKAXE, STICK, STONE_PICKAXE, WOODEN_PICKAXE,
  itemMaxStack, toolOf,
} from '../items/items';
import { availableRecipes } from './craft';
import { consumeGrid, gridResult } from './gridCraft';
import { COOK_TICKS, fuelTicks, newFurnace, tickFurnace } from './smelting';

function craft(inv: Inventory, layout: number[][], expected: ItemStack): void {
  const grid = layout.map((row) => row.map((id) => {
    if (id === 0) return null;
    expect(removeItems(inv, id, 1), `Missing crafting ingredient ${id}`).toBe(1);
    return { id, count: 1 };
  }));
  const result = gridResult(grid);
  expect(result).toEqual(expected);
  consumeGrid(grid);
  expect(grid.flat().every((cell) => cell === null)).toBe(true);
  expect(addItem(inv, result!.id, result!.count, itemMaxStack(result!.id))).toBe(0);
}

function mine(inv: Inventory, block: number, toolId?: number): void {
  const tool = toolId === undefined ? null : toolOf(toolId);
  const drop = dropFor(block, tool);
  expect(drop, `Expected a harvestable drop from ${block}`).not.toBeNull();
  expect(addItem(inv, drop!, 1, itemMaxStack(drop!))).toBe(0);
  if (tool && toolId !== undefined) {
    const slot = inv.findIndex((s) => s?.id === toolId);
    expect(slot).toBeGreaterThanOrEqual(0);
    expect(damageTool(inv, slot, tool.maxDurability)).toBe(false);
  }
}

// The core progression uses only blocks/items already present in the world.
// Java 1.12 iron ore drops its block, which is then smelted, not modern raw iron.
// Official crafting/fuel references:
// https://www.minecraft.net/en-us/article/how-craft
// https://www.minecraft.net/pt-br/article/block-week-oak-wood (16 June 2017)
describe('survival startup progression', () => {
  it.each([
    ['oak', OAK_LOG], ['spruce', SPRUCE_LOG], ['birch', BIRCH_LOG],
  ] as const)('%s supports logs → table → wooden/stone pickaxe → furnace → iron tools', (_name, log) => {
    const inv = emptyInventory();
    for (let i = 0; i < 6; i++) mine(inv, log);
    for (let i = 0; i < 4; i++) craft(inv, [[log, 0], [0, 0]], { id: OAK_PLANKS, count: 4 });
    craft(inv, [[OAK_PLANKS, OAK_PLANKS], [OAK_PLANKS, OAK_PLANKS]], { id: CRAFTING_TABLE, count: 1 });
    for (let i = 0; i < 2; i++) craft(inv, [[OAK_PLANKS, 0], [OAK_PLANKS, 0]], { id: STICK, count: 4 });
    expect(availableRecipes(inv, 2).some((r) => r.result.id === WOODEN_PICKAXE)).toBe(false);
    craft(inv, [[OAK_PLANKS, OAK_PLANKS, OAK_PLANKS], [0, STICK, 0], [0, STICK, 0]], { id: WOODEN_PICKAXE, count: 1 });

    expect(dropFor(1)).toBeNull(); // Hand mining cannot skip the first pickaxe.
    expect(dropFor(IRON_ORE, toolOf(WOODEN_PICKAXE))).toBeNull();
    for (let i = 0; i < 3; i++) mine(inv, 1, WOODEN_PICKAXE);
    craft(inv, [[COBBLESTONE, COBBLESTONE, COBBLESTONE], [0, STICK, 0], [0, STICK, 0]], { id: STONE_PICKAXE, count: 1 });
    for (let i = 0; i < 8; i++) mine(inv, 1, STONE_PICKAXE);
    craft(inv, [[COBBLESTONE, COBBLESTONE, COBBLESTONE], [COBBLESTONE, 0, COBBLESTONE], [COBBLESTONE, COBBLESTONE, COBBLESTONE]], { id: FURNACE, count: 1 });

    mine(inv, COAL_ORE, STONE_PICKAXE);
    craft(inv, [[COAL, 0], [STICK, 0]], { id: TORCH, count: 4 });
    for (let i = 0; i < 3; i++) mine(inv, IRON_ORE, STONE_PICKAXE);
    expect(removeItems(inv, IRON_ORE, 3)).toBe(3);
    expect(removeItems(inv, log, 2)).toBe(2);
    expect(fuelTicks(log)).toBe(300);
    const furnace = { ...newFurnace(), input: IRON_ORE, inputN: 3, fuel: log, fuelN: 2 };
    for (let tick = 0; tick < COOK_TICKS * 3; tick++) tickFurnace(furnace);
    expect(furnace.output).toBe(IRON_INGOT);
    expect(furnace.outputN).toBe(3);
    expect(furnace.inputN).toBe(0);
    expect(furnace.fuelN).toBe(0);
    expect(addItem(inv, furnace.output, furnace.outputN)).toBe(0);
    craft(inv, [[IRON_INGOT, IRON_INGOT, IRON_INGOT], [0, STICK, 0], [0, STICK, 0]], { id: IRON_PICKAXE, count: 1 });

    expect(countItem(inv, IRON_PICKAXE)).toBe(1);
    expect(countItem(inv, CRAFTING_TABLE)).toBe(1);
    expect(countItem(inv, FURNACE)).toBe(1);
    expect(countItem(inv, TORCH)).toBe(4);
    expect(inv.find((s) => s?.id === WOODEN_PICKAXE)?.dur).toBe(56);
    expect(inv.find((s) => s?.id === STONE_PICKAXE)?.dur).toBe(119);
  });
});
