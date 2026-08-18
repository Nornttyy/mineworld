import * as THREE from 'three';
import { describe, it, expect } from 'vitest';
import {
  FirstPersonHand,
  handBlockMaterialProfile,
  heldRenderKind,
  mcSwingPose,
} from './FirstPersonHand';

type InspectableHand = {
  item: THREE.Mesh | null;
  skyLight: THREE.HemisphereLight;
  sunLight: THREE.DirectionalLight;
};

// 手持渲染分类：方块=3D 立方体，物品(食物/工具/材料)=平面图标精灵，其余=只露手臂。
describe('FirstPersonHand heldRenderKind', () => {
  it('方块(木板/工作台/泥土) → block（3D 立方体）', () => {
    expect(heldRenderKind(2)).toBe('block'); // 泥土
    expect(heldRenderKind(7)).toBe('block'); // 木板
    expect(heldRenderKind(11)).toBe('block'); // 工作台
  });

  it('物品(棍/工具/食物/煤) → sprite（修复：以前手持不显示，只有手臂）', () => {
    expect(heldRenderKind(256)).toBe('sprite'); // 苹果
    expect(heldRenderKind(257)).toBe('sprite'); // 木棍
    expect(heldRenderKind(258)).toBe('sprite'); // 煤炭
    expect(heldRenderKind(259)).toBe('sprite'); // 木镐
    expect(heldRenderKind(262)).toBe('sprite'); // 木剑
    expect(heldRenderKind(268)).toBe('sprite'); // 石锄
  });

  it('空手 / 空气 / 未知 id → none（只露手臂）', () => {
    expect(heldRenderKind(null)).toBe('none');
    expect(heldRenderKind(0)).toBe('none');
    expect(heldRenderKind(99999)).toBe('none');
  });
});

describe('mcSwingPose（1:1 复刻 MC 挥击）', () => {
  it('t=0 静止：无平移、绕 X 不下劈、Y 旋转净为 0', () => {
    const p = mcSwingPose(0);
    expect(p.tx).toBeCloseTo(0);
    expect(p.ty).toBeCloseTo(0);
    expect(p.tz).toBeCloseTo(0);
    expect(p.rx).toBeCloseTo(0);
    expect(p.ry1 + p.ry2).toBeCloseTo(0); // 45° 与 −45° 抵消
  });

  it('主下劈：rx 在挥击中为负(向前下)，峰值约 −80°×尺度', () => {
    // ft=sin(√t·π) 在 t=0.25 处达峰(=1) → rx≈−80°
    const peak = mcSwingPose(0.25);
    expect(peak.rx).toBeLessThan(0);
    expect(peak.rx).toBeCloseTo((-80 * Math.PI) / 180, 2);
  });

  it('平移：挥击中往中间(tx<0)、往前方(tz<0)', () => {
    const m = mcSwingPose(0.25);
    expect(m.tx).toBeLessThan(0); // 右手往左(中间)
    expect(m.tz).toBeLessThan(0); // 往画面里(前方)
  });
});

describe('FirstPersonHand 光影材质', () => {
  it('粗糙方块保持哑光，矿物块更细腻但不金属化', () => {
    const dirt = handBlockMaterialProfile(2);
    const iron = handBlockMaterialProfile(33);
    expect(dirt.roughness).toBeGreaterThanOrEqual(0.85);
    expect(iron.roughness).toBeLessThan(dirt.roughness);
    expect(iron.specularIntensity).toBeGreaterThan(dirt.specularIntensity);
  });

  it('光影档用 Physical 材质，off 档恢复原版 Basic 材质', () => {
    const hand = new FirstPersonHand(new THREE.Texture());
    hand.setLightingQuality('high');
    hand.setHeld(2);
    const shaded = (hand as unknown as InspectableHand).item as THREE.Mesh;
    expect(shaded.material).toBeInstanceOf(THREE.MeshPhysicalMaterial);
    expect((shaded.material as THREE.MeshPhysicalMaterial).roughness).toBeGreaterThanOrEqual(0.85);
    expect((shaded.material as THREE.MeshPhysicalMaterial).metalness).toBe(0);

    hand.setLightingQuality('off');
    const classic = (hand as unknown as InspectableHand).item as THREE.Mesh;
    expect(classic.material).toBeInstanceOf(THREE.MeshBasicMaterial);
  });

  it('相机转向时太阳会同步变换到手持相机空间', () => {
    const hand = new FirstPersonHand(new THREE.Texture());
    hand.setLightingQuality('high');
    const skyColor = new THREE.Color(1, 1, 1);
    const sun = new THREE.Vector3(1, 0.5, 0).normalize();
    hand.setLighting({
      skyLevel: 15,
      blockLevel: 0,
      skyDarken: 0,
      sunEnabled: true,
      skyColor,
      sunDirectionWorld: sun,
      cameraQuaternion: new THREE.Quaternion(),
    });
    const before = (hand as unknown as InspectableHand).sunLight.position.clone();
    hand.setLighting({
      skyLevel: 15,
      blockLevel: 0,
      skyDarken: 0,
      sunEnabled: true,
      skyColor,
      sunDirectionWorld: sun,
      cameraQuaternion: new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        Math.PI / 2,
      ),
    });
    const after = (hand as unknown as InspectableHand).sunLight.position;
    expect(after.distanceTo(before)).toBeGreaterThan(1);
  });

  it('无光处保留微弱轮廓，下界不会出现假太阳', () => {
    const hand = new FirstPersonHand(new THREE.Texture());
    hand.setLightingQuality('high');
    hand.setLighting({
      skyLevel: 15, // 模拟切维度时光照网格尚未就绪的 fallback
      blockLevel: 0,
      skyDarken: 0,
      sunEnabled: false,
      skyColor: new THREE.Color(0.3, 0.08, 0.04),
      sunDirectionWorld: new THREE.Vector3(0.7, 0.7, 0),
      cameraQuaternion: new THREE.Quaternion(),
    });
    const inspect = hand as unknown as InspectableHand;
    expect(inspect.skyLight.intensity).toBeGreaterThan(0);
    expect(inspect.skyLight.intensity).toBeLessThan(0.05);
    expect(inspect.sunLight.intensity).toBe(0);
  });
});
