import { describe, it, expect } from 'vitest';
import { touchesCactus } from './cactus';
import { CACTUS } from '../blocks/registry';

const only =
  (cx: number, cy: number, cz: number) =>
  (x: number, y: number, z: number): number =>
    x === cx && y === cy && z === cz ? CACTUS : 0;

describe('touchesCactus', () => {
  it('紧贴仙人掌侧面→true', () => {
    // 玩家中心 (5.71, 1, 5.5)，宽 0.6，半宽 0.3
    // 玩家 x 右边沿 = 5.71+0.3 = 6.01，仙人掌在 x=6 → 贴住
    expect(touchesCactus(5.71, 1, 5.5, only(6, 1, 5))).toBe(true);
  });

  it('隔一格空气→false', () => {
    // 仙人掌在 (7,1,5)，玩家 x 右边沿 5.0+0.3=5.3，远未触达 7
    expect(touchesCactus(5.0, 1, 5.5, only(7, 1, 5))).toBe(false);
  });

  it('正上方是仙人掌(碰撞箱顶部)→true', () => {
    // 玩家在 y=0，身高 1.8；仙人掌在 y=1(在碰撞箱内)，正上方
    expect(touchesCactus(5.5, 0, 5.5, only(5, 1, 5))).toBe(true);
  });

  it('仙人掌完全在碰撞箱外(z 方向)→false', () => {
    // 玩家 z 范围 [5.2, 5.8]，仙人掌在 z=7
    expect(touchesCactus(5.5, 1, 5.5, only(5, 1, 7))).toBe(false);
  });

  it('无仙人掌→false', () => {
    const noBlocks = () => 0;
    expect(touchesCactus(5.5, 1, 5.5, noBlocks)).toBe(false);
  });
});
