import { describe, it, expect } from 'vitest';
import { detectPortalFrame } from './portal';

// 用一个 Set 当假世界：里面是黑曜石坐标；其余皆"内部"(空气)。
function world(obs: Set<string>) {
  const k = (x: number, y: number, z: number): string => `${x},${y},${z}`;
  return {
    isObsidian: (x: number, y: number, z: number): boolean => obs.has(k(x, y, z)),
    isInterior: (x: number, y: number, z: number): boolean => !obs.has(k(x, y, z)),
  };
}

// 沿 x 轴的标准最小门：内部 x∈{1,2}, y∈{1,2,3}, z=0；框 x=0/3(y0..4)、y=0/4(x0..3)
function minimalFrameX(): Set<string> {
  const obs = new Set<string>();
  const add = (x: number, y: number, z: number): void => void obs.add(`${x},${y},${z}`);
  for (const x of [0, 1, 2, 3]) {
    add(x, 0, 0);
    add(x, 4, 0);
  }
  for (const y of [0, 1, 2, 3, 4]) {
    add(0, y, 0);
    add(3, y, 0);
  }
  return obs;
}

describe('下界传送门框检测', () => {
  it('合法 2×3 门(沿 x) → 返回内部 6 格', () => {
    const w = world(minimalFrameX());
    const f = detectPortalFrame(w.isObsidian, w.isInterior, 1, 1, 0); // 点火内部底格
    expect(f).not.toBeNull();
    expect(f!.axis).toBe('x');
    expect(f!.inner.length).toBe(6);
    // 内部确是那 6 格
    const set = new Set(f!.inner.map(([x, y, z]) => `${x},${y},${z}`));
    for (const x of [1, 2]) for (const y of [1, 2, 3]) expect(set.has(`${x},${y},0`)).toBe(true);
  });

  it('从内部任意一格都能检出（不只底角）', () => {
    const w = world(minimalFrameX());
    expect(detectPortalFrame(w.isObsidian, w.isInterior, 2, 3, 0)).not.toBeNull(); // 内部右上格
  });

  it('缺一条顶边 → null（开口框，竖直扫描跑飞被上限挡住）', () => {
    const obs = minimalFrameX();
    for (const x of [0, 1, 2, 3]) obs.delete(`${x},4,0`); // 删掉顶边
    const w = world(obs);
    expect(detectPortalFrame(w.isObsidian, w.isInterior, 1, 1, 0)).toBeNull();
  });

  it('缺一根侧柱 → null', () => {
    const obs = minimalFrameX();
    obs.delete(`3,2,0`); // 右柱中间缺一块
    const w = world(obs);
    expect(detectPortalFrame(w.isObsidian, w.isInterior, 1, 1, 0)).toBeNull();
  });

  it('内部太矮(2×2) → null', () => {
    const obs = new Set<string>();
    const add = (x: number, y: number, z: number): void => void obs.add(`${x},${y},${z}`);
    for (const x of [0, 1, 2, 3]) { add(x, 0, 0); add(x, 3, 0); } // 内部只有 y∈{1,2}=2 高
    for (const y of [0, 1, 2, 3]) { add(0, y, 0); add(3, y, 0); }
    const w = world(obs);
    expect(detectPortalFrame(w.isObsidian, w.isInterior, 1, 1, 0)).toBeNull();
  });
});
