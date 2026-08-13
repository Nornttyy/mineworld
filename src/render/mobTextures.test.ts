import { describe, expect, it } from 'vitest';
import { MOB_SKIN_PARTS, MOB_SKIN_SIZE, skinFaceRect, type SkinFace } from './mobTextures';

describe('生物 64×64 方盒皮肤展开', () => {
  const faces: SkinFace[] = ['right', 'front', 'left', 'back', 'top', 'bottom'];

  it('所有部位的六个面都落在图集范围内', () => {
    for (const part of Object.values(MOB_SKIN_PARTS)) {
      for (const face of faces) {
        const r = skinFaceRect(part, face);
        expect(r.w).toBeGreaterThan(0);
        expect(r.h).toBeGreaterThan(0);
        expect(r.x).toBeGreaterThanOrEqual(0);
        expect(r.y).toBeGreaterThanOrEqual(0);
        expect(r.x + r.w).toBeLessThanOrEqual(MOB_SKIN_SIZE);
        expect(r.y + r.h).toBeLessThanOrEqual(MOB_SKIN_SIZE);
      }
    }
  });

  it('头部正面是完整的 8×8 像素区域', () => {
    expect(skinFaceRect(MOB_SKIN_PARTS.head, 'right')).toEqual({ x: 0, y: 8, w: 8, h: 8 });
  });

  it('四肢保持经典 4×12×4 像素比例', () => {
    expect(MOB_SKIN_PARTS.arm).toMatchObject({ x: 4, y: 12, z: 4 });
    expect(MOB_SKIN_PARTS.leg).toMatchObject({ x: 4, y: 12, z: 4 });
  });
});
