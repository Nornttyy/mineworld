import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import sourcesText from '../../public/textures/mobs/SOURCES.json?raw';
import { buildMobModel, mobBoxGeometry } from './MobRenderer';
import type { MobKind } from '../core/entity/mob';
import {
  MOB_SKIN_PARTS,
  MOB_SKIN_SIZE,
  MOB_TEXTURE_KINDS,
  mobSkinUrl,
  skinFaceRect,
  type SkinFace,
  OFFICIAL_MOB_TEXTURE_SIZE,
  isOfficialMobSkin,
} from './mobTextures';

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

  it('每种已实装生物都有经典 PNG 皮肤', () => {
    expect(MOB_TEXTURE_KINDS).toHaveLength(10);
    for (const kind of MOB_TEXTURE_KINDS) {
      expect(mobSkinUrl(kind)).toContain(`/textures/mobs/${kind}.png`);
    }
  });
});

describe('Java 26.3官方成人生物皮肤与模型', () => {
  const kinds: MobKind[] = [
    'zombie',
    'husk',
    'skeleton',
    'creeper',
    'pig',
    'cow',
    'sheep',
    'chicken',
  ];
  const texture = new THREE.Texture();
  const textures = Object.fromEntries([...kinds, 'sheep_wool'].map((kind) => [kind, texture]));

  it('来源清单保留12张原版皮肤与尺寸，十种现有生物均已适配', () => {
    const manifest = JSON.parse(sourcesText);
    expect(manifest.version).toBe('Java 26.3');
    expect(manifest.assets).toHaveLength(12);
    for (const entry of manifest.assets) {
      const key = entry.file.replace('.png', '') as keyof typeof OFFICIAL_MOB_TEXTURE_SIZE;
      expect(OFFICIAL_MOB_TEXTURE_SIZE[key]).toEqual(entry.size);
      expect(entry.sha256).toMatch(/^[a-f0-9]{64}$/);
      expect(entry.modified).toBe(false);
    }
    expect(isOfficialMobSkin('spider')).toBe(true);
    expect(isOfficialMobSkin('rabbit')).toBe(true);
    expect(manifest.retained_procedural).toEqual([]);
  });

  it('八种生物有稳定成人比例、落地脚底和朝+X的头部，不随机缩放/染色', () => {
    const heights: Record<string, number> = {
      zombie: 32.5 / 16,
      husk: 32.5 / 16,
      skeleton: 32 / 16,
      creeper: 26 / 16,
      pig: 16 / 16,
      cow: 25 / 16,
      sheep: 22.6 / 16,
      chicken: 15 / 16,
    };
    for (const kind of kinds) {
      const model = buildMobModel(kind, 'classic', textures);
      const bounds = new THREE.Box3().setFromObject(model.group);
      expect(bounds.min.y, kind + ' feet').toBeCloseTo(0, 6);
      expect(bounds.max.y, kind + ' height').toBeCloseTo(heights[kind], 5);
      expect(model.group.scale.toArray()).toEqual([1, 1, 1]);
      expect(model.base.toArray()).toEqual([1, 1, 1]);
      expect(model.nativeRig).toBe(true);
      const rig = model.head!.parent!;
      const front = new THREE.Vector3(0, 0, -1).transformDirection(rig.matrixWorld);
      expect(front.x).toBeCloseTo(1, 6);
      expect(front.y).toBeCloseTo(0, 6);
      expect(front.z).toBeCloseTo(0, 6);
    }
  });

  it('所有官方部位六面UV都在正确32/64高图集内，头脸采样标准front而不是旧right区域', () => {
    for (const kind of kinds) {
      const model = buildMobModel(kind, 'classic', textures);
      model.group.traverse((o) => {
        if (!(o instanceof THREE.Mesh) || !o.geometry.userData.skin) return;
        const skin = o.geometry.userData.skin,
          uv = o.geometry.getAttribute('uv');
        expect(skin.textureWidth).toBe(64);
        expect([32, 64]).toContain(skin.textureHeight);
        for (let i = 0; i < uv.count; i++) {
          expect(uv.getX(i), o.name).toBeGreaterThanOrEqual(0);
          expect(uv.getX(i), o.name).toBeLessThanOrEqual(1);
          expect(uv.getY(i), o.name).toBeGreaterThanOrEqual(0);
          expect(uv.getY(i), o.name).toBeLessThanOrEqual(1);
        }
      });
      if (['zombie', 'husk', 'skeleton', 'creeper'].includes(kind)) {
        const head = model.head!.children[0] as THREE.Mesh;
        const uv = head.geometry.getAttribute('uv');
        const height = OFFICIAL_MOB_TEXTURE_SIZE[kind as keyof typeof OFFICIAL_MOB_TEXTURE_SIZE][1];
        const xs = [],
          ys = [];
        for (let i = 20; i < 24; i++) {
          xs.push(uv.getX(i) * 64);
          ys.push((1 - uv.getY(i)) * height);
        }
        expect([Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]).toEqual([
          8, 16, 8, 16,
        ]);
      }
    }
  });

  it('左右肢镜像前面UV，骨骼四肢为2像素而不是套用僵尸4像素', () => {
    const base = {
      u: 40,
      v: 16,
      x: 2,
      y: 12,
      z: 2,
      textureWidth: 64,
      textureHeight: 32,
      vanilla: true,
    };
    const a = mobBoxGeometry(2 / 16, 12 / 16, 2 / 16, 0xffffff, base);
    const b = mobBoxGeometry(2 / 16, 12 / 16, 2 / 16, 0xffffff, { ...base, mirror: true });
    const au = a.getAttribute('uv'),
      bu = b.getAttribute('uv');
    for (let i = 20; i < 24; i++) expect(au.getX(i) + bu.getX(i)).toBeCloseTo((42 + 44) / 64);
    const skeleton = buildMobModel('skeleton', 'classic', textures);
    const zombie = buildMobModel('zombie', 'classic', textures);
    const sk = (skeleton.legs[0].children[0] as THREE.Mesh).geometry.userData.skin;
    const zo = (zombie.legs[0].children[0] as THREE.Mesh).geometry.userData.skin;
    expect([sk.x, sk.y, sk.z]).toEqual([2, 12, 2]);
    expect([zo.x, zo.y, zo.z]).toEqual([4, 12, 4]);
    a.dispose();
    b.dispose();
  });

  it('羊毛使用独立图集并随头/腿运动，动物鼻子和鸡喙属于头部骨骼', () => {
    const sheep = buildMobModel('sheep', 'classic', textures);
    expect(sheep.head!.children).toHaveLength(2);
    expect(sheep.legs.every((leg) => leg.children.length === 2)).toBe(true);
    expect(sheep.mats).toHaveLength(2);
    expect(buildMobModel('pig', 'classic', textures).head!.children).toHaveLength(2);
    expect(buildMobModel('cow', 'classic', textures).head!.children).toHaveLength(4);
    expect(buildMobModel('chicken', 'classic', textures).head!.children).toHaveLength(3);
  });
});
