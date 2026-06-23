import { describe, it, expect } from 'vitest';
import { ignitePortal, mapPortalCoord, buildDestinationPortal } from './portalFill';
import { detectPortalFrame } from './portal';

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

describe('buildDestinationPortal', () => {
  // 一根满是地狱岩(19)的列：岩浆面(31)之上 33..50 实心、50+ 空气，模拟下界一段安全落脚地。
  function netherWorld(): Map<string, number> {
    const b = new Map<string, number>();
    const K = (x: number, y: number, z: number) => `${x},${y},${z}`;
    for (let y = 0; y <= 50; y++) {
      for (let x = -8; x <= 16; x++) {
        for (let z = -8; z <= 16; z++) b.set(K(x, y, z), 19);
      }
    }
    return b;
  }

  it('buildDestinationPortal 造合法门 + 安全落脚', () => {
    const b = netherWorld();
    const K = (x: number, y: number, z: number) => `${x},${y},${z}`;
    const get = (x: number, y: number, z: number) => b.get(K(x, y, z)) ?? 0;

    const r = buildDestinationPortal(get, 'nether', 2, 2);
    // ① edits 含至少 1 个 25(传送门)、多个 18(框)
    expect(r.edits.some(([, , , id]) => id === 25)).toBe(true);
    expect(r.edits.filter(([, , , id]) => id === 18).length).toBeGreaterThan(5);

    // 应用 edits 后再断言安全
    for (const [x, y, z, id] of r.edits) (id === 0 ? b.delete(K(x, y, z)) : b.set(K(x, y, z), id));
    const fx = Math.floor(r.spawn.x);
    const fy = Math.floor(r.spawn.y);
    const fz = Math.floor(r.spawn.z);
    // ② 脚下实心
    expect(get(fx, fy - 1, fz)).not.toBe(0);
    // ③ 落点处及上方 2 格可站：非岩浆(23)、非实心
    for (let dy = 0; dy < 3; dy++) {
      expect(get(fx, fy + dy, fz)).not.toBe(23); // 非岩浆
      const id = get(fx, fy + dy, fz);
      expect(id === 0 || id === 25).toBe(true); // 空气或传送门(都可站/可穿)
    }
  });

  it('buildDestinationPortal 产出的框能被 detectPortalFrame 识别为合法门', () => {
    const b = netherWorld();
    const K = (x: number, y: number, z: number) => `${x},${y},${z}`;
    const get = (x: number, y: number, z: number) => b.get(K(x, y, z)) ?? 0;
    const r = buildDestinationPortal(get, 'nether', 2, 2);
    for (const [x, y, z, id] of r.edits) (id === 0 ? b.delete(K(x, y, z)) : b.set(K(x, y, z), id));

    const isObs = (x: number, y: number, z: number) => get(x, y, z) === 18;
    const isInner = (x: number, y: number, z: number) => {
      const v = get(x, y, z);
      return v === 0 || v === 25;
    };
    // 从落点(门内底格)检测：应识别出 2×3 内部的合法门框
    const frame = detectPortalFrame(isObs, isInner, Math.floor(r.spawn.x), Math.floor(r.spawn.y), Math.floor(r.spawn.z));
    expect(frame).not.toBeNull();
    expect(frame!.inner.length).toBe(6); // 2×3 内部
  });

  it('buildDestinationPortal 无实心落脚时铺黑曜石平台保底', () => {
    // 全空气世界(无任何实心)：必须自造平台，落点脚下仍实心(黑曜石18)。
    const get = () => 0;
    const r = buildDestinationPortal(get, 'nether', 2, 2);
    const footing = r.edits.find(
      ([x, y, z]) => x === Math.floor(r.spawn.x) && y === Math.floor(r.spawn.y) - 1 && z === Math.floor(r.spawn.z),
    );
    expect(footing).toBeDefined();
    expect(footing![3]).toBe(18); // 脚下被铺成黑曜石
  });
});
