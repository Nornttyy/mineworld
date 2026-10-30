import { expect, it } from 'vitest';
import { javaGuiScale } from './guiScale';

it('uses integer GUI pixels and leaves the minimum Java logical viewport', () => {
  expect(javaGuiScale(1280, 720)).toBe(3);
  expect(javaGuiScale(1920, 1080)).toBe(4);
  expect(javaGuiScale(960, 540)).toBe(2);
  expect(javaGuiScale(390, 844)).toBe(1);
  expect(javaGuiScale(280, 200)).toBe(1);
});
