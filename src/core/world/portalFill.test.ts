import { describe, it, expect } from 'vitest';
import { ignitePortal, mapPortalCoord } from './portalFill';

describe('mapPortalCoord', () => {
  it('mapPortalCoord 1:8 双向', () => {
    expect(mapPortalCoord('overworld', 80, 160)).toEqual([10, 20]);
    expect(mapPortalCoord('nether', 10, 20)).toEqual([80, 160]);
  });
});

describe('ignitePortal', () => {
  it('ignitePortal 命中合法框返回内部 6 格', () => {
    const b = new Map<string, number>();
    const K = (x: number, y: number, z: number) => `${x},${y},${z}`;
    const get = (x: number, y: number, z: number) => b.get(K(x, y, z)) ?? 0;

    // 内部 2 宽(x=0..1) × 3 高(y=1..3)，四边黑曜石(18)，门面朝 z（沿 x 轴）
    for (let x = -1; x <= 2; x++) {
      b.set(K(x, 0, 0), 18);
      b.set(K(x, 4, 0), 18);
    }
    for (let y = 0; y <= 4; y++) {
      b.set(K(-1, y, 0), 18);
      b.set(K(2, y, 0), 18);
    }

    // 点底部内部格(0,1,0)正下方的黑曜石(0,0,0)
    const inner = ignitePortal(get, 0, 0, 0);
    expect(inner).not.toBeNull();
    expect(inner!.length).toBe(6);
  });

  it('ignitePortal 无合法框返回 null', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const get = (_x: number, _y: number, _z: number) => 0; // 全是空气，参数需匹配签名
    const inner = ignitePortal(get, 5, 5, 5);
    expect(inner).toBeNull();
  });
});
