import { describe, it, expect } from 'vitest';
import { chunkInView, sectionTooDeep, VERTICAL_CULL_MARGIN } from './chunkCull';

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

describe('sectionTooDeep（手动竖直分段剔除）', () => {
  it('站地面(y≈100)时，深处洞穴段(段顶48)被剔', () => {
    expect(sectionTooDeep(48, 100)).toBe(true); // 48 < 100-40=60 → 剔
  });
  it('紧贴地表的段(段顶96)不被剔（留足余量，绝不剔可见地表）', () => {
    expect(sectionTooDeep(96, 100)).toBe(false); // 96 ≥ 60 → 留
  });
  it('下到地下(y≈60)时，脚下的段全留（不剔身边）', () => {
    expect(sectionTooDeep(48, 60)).toBe(false); // 48 ≥ 60-40=20 → 留
    expect(sectionTooDeep(96, 60)).toBe(false);
  });
  it('余量边界：恰好深 margin 格才开始剔', () => {
    expect(sectionTooDeep(100 - VERTICAL_CULL_MARGIN, 100)).toBe(false); // 相等不剔
    expect(sectionTooDeep(100 - VERTICAL_CULL_MARGIN - 1, 100)).toBe(true); // 再深一格才剔
  });
});
