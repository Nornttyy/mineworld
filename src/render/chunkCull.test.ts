import { describe, it, expect } from 'vitest';
import { chunkInView, chunkAhead } from './chunkCull';

// 相机在原点，朝 +X 看（dir=(1,0)）
const CAM = { px: 0, pz: 0, dx: 1, dz: 0 };
const inView = (ccx: number, ccz: number): boolean => chunkInView(ccx, ccz, CAM.px, CAM.pz, CAM.dx, CAM.dz);

describe('chunkInView（手动水平视锥剔除）', () => {
  it('正前方的远区块 → 可见', () => {
    expect(inView(100, 0)).toBe(true);
  });

  it('正后方的远区块 → 剔除', () => {
    expect(inView(-100, 0)).toBe(false);
  });

  it('正侧方(90°)的远区块 → 剔除', () => {
    expect(inView(0, 100)).toBe(false);
    expect(inView(0, -100)).toBe(false);
  });

  it('太近的区块（任何方向）→ 恒可见（不剔脚下/相邻）', () => {
    expect(inView(-16, 0)).toBe(true); // 正后方但很近
    expect(inView(0, -16)).toBe(true);
  });

  it('小角度偏离视线（视野内）→ 可见', () => {
    expect(inView(100, 30)).toBe(true); // ≈17° 偏离
  });

  it('保守：偏离 ~75° 仍可见（留余量防穿帮），> ~85° 才剔', () => {
    // 75°：cos≈0.26 ≥ 0.15 → 可见
    expect(inView(Math.cos((75 * Math.PI) / 180) * 100, Math.sin((75 * Math.PI) / 180) * 100)).toBe(true);
    // 85°：cos≈0.087 < 0.15 → 剔
    expect(inView(Math.cos((85 * Math.PI) / 180) * 100, Math.sin((85 * Math.PI) / 180) * 100)).toBe(false);
  });
});

describe('chunkAhead（前方优先建图）', () => {
  // 朝 +X
  const ahead = (dx: number, dz: number): boolean => chunkAhead(dx, dz, 1, 0);

  it('正前方远区块 → 优先', () => {
    expect(ahead(6, 0)).toBe(true);
  });

  it('正后方远区块 → 不优先(身后，cullToView 反正隐藏)', () => {
    expect(ahead(-6, 0)).toBe(false);
  });

  it('近处任何方向 → 恒优先(脚下/相邻)', () => {
    expect(ahead(-1, 0)).toBe(true); // 正后方但很近
    expect(ahead(0, -1)).toBe(true);
  });

  it('侧前方(留转身余量，比渲染锥宽)→ 优先', () => {
    expect(ahead(2, 5)).toBe(true); // ~68° 偏离，前方
    expect(ahead(3, 5)).toBe(true); // ~59° 偏离，前方
  });

  it('明显偏后(夹角 > ~101°)→ 不优先', () => {
    expect(ahead(-2, 6)).toBe(false); // cos≈-0.32 < -0.2 → 偏后
  });

  it('未传朝向 dir=(0,0) → 全部优先(退回纯距离排序，向后兼容)', () => {
    expect(chunkAhead(6, 0, 0, 0)).toBe(true);
    expect(chunkAhead(-6, 0, 0, 0)).toBe(true);
    expect(chunkAhead(0, 6, 0, 0)).toBe(true);
  });
});
