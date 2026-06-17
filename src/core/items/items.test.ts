import { describe, it, expect } from 'vitest';
import { APPLE, isFood, foodValue, itemName, isItem } from './items';

describe('items: apple food', () => {
  it('apple is food with MC values', () => {
    expect(isFood(APPLE)).toBe(true);
    expect(foodValue(APPLE)).toEqual({ nutrition: 4, saturationModifier: 0.3 });
    expect(itemName(APPLE)).toBe('apple');
    expect(isItem(APPLE)).toBe(true);
  });
  it('block ids are not items/food', () => {
    expect(isFood(1)).toBe(false); // stone
    expect(foodValue(1)).toBeNull();
    expect(isItem(1)).toBe(false);
    expect(itemName(1)).toBeNull();
  });
});
