import { describe, it, expect } from 'vitest';
import { getItem, maxStack, hasItem } from './registry';

describe('item registry', () => {
  it('returns a known item def', () => {
    expect(getItem('oak_planks')).toEqual({
      id: 'oak_planks',
      name: 'Oak Planks',
      maxStack: 64,
    });
  });

  it('tools stack to 1, eggs to 16, blocks to 64', () => {
    expect(maxStack('wooden_pickaxe')).toBe(1);
    expect(maxStack('egg')).toBe(16);
    expect(maxStack('cobblestone')).toBe(64);
  });

  it('hasItem reports membership; getItem throws on unknown', () => {
    expect(hasItem('stick')).toBe(true);
    expect(hasItem('nonsense')).toBe(false);
    expect(() => getItem('nonsense')).toThrow(/Unknown item/);
  });
});
