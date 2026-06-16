import { describe, it, expect } from 'vitest';
import { RECIPES } from './recipes';
import { hasItem } from '../item/registry';

describe('recipe data', () => {
  it('contains all 16 recipes', () => {
    expect(RECIPES).toHaveLength(16);
  });

  it('every referenced item id exists in the registry', () => {
    for (const r of RECIPES) {
      expect(hasItem(r.result.item)).toBe(true);
      if (r.type === 'shapeless') {
        for (const id of r.ingredients) expect(hasItem(id)).toBe(true);
      } else {
        for (const id of Object.values(r.key)) expect(hasItem(id)).toBe(true);
      }
    }
  });

  it('produces 4 planks from one log (shapeless)', () => {
    const planks = RECIPES.find(
      (r) => r.type === 'shapeless' && r.result.item === 'oak_planks',
    );
    expect(planks?.result.count).toBe(4);
  });
});
