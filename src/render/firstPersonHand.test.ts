import * as THREE from 'three';
import { describe, it, expect, vi } from 'vitest';
import {
  FirstPersonHand,
  bowChargeStage,
  handBlockMaterialProfile,
  heldSpritePose,
  heldRenderKind,
  mcSwingPose,
  mcSwingQuaternion,
  rightArmGeometry,
} from './FirstPersonHand';
import { heldItemGeometry, type SpriteAlpha } from './heldItemGeometry';

type InspectableHand = {
  item: THREE.Mesh | null;
  arm: THREE.Mesh;
  sleeve: THREE.Mesh;
  skyLight: THREE.HemisphereLight;
  sunLight: THREE.DirectionalLight;
  root: THREE.Group;
  itemId: number | null;
  equipped: number;
  swingT: number;
  spriteMasks: WeakMap<THREE.Texture, SpriteAlpha>;
};

// 分类名 sprite 保持 API 兼容；实际几何有正反面和不透明像素边缘侧壁。
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

describe('Java 26.3 资源模型的手持显示变换', () => {
  it('工具、普通物品和弓使用官方JSON显示参数，透明轮廓决定可见大小', () => {
    const sword = heldSpritePose(300);
    const coal = heldSpritePose(258);
    // External expectations read from the SHA-verified official 26.3 client.
    expect(sword).toEqual({
      size: 0.68,
      position: [1.13 / 16, 3.2 / 16, 1.13 / 16],
      rotation: [0, -Math.PI / 2, (25 * Math.PI) / 180],
    });
    expect(sword).toEqual(coal);
    expect(heldSpritePose(292)).toEqual(sword);
    expect(heldSpritePose(256)).toEqual(sword);
  });

  it('方块采用官方0.4比例与45度偏航，不再套空手斜姿或额外露出代理手臂', () => {
    const hand = new FirstPersonHand(new THREE.Texture());
    const inspect = hand as unknown as InspectableHand;
    hand.setHeld(2);
    hand.update(0, 0);
    inspect.item!.geometry.computeBoundingBox();
    const size = new THREE.Vector3();
    inspect.item!.geometry.boundingBox!.getSize(size);
    expect(size.x).toBeCloseTo(0.4);
    expect(inspect.item!.rotation.y).toBeCloseTo(Math.PI / 4);
    expect(inspect.item!.position.length()).toBe(0);
    expect(inspect.root.position.toArray()).toEqual([0.56, -0.52, -0.72]);
    expect(inspect.root.quaternion.angleTo(new THREE.Quaternion())).toBeCloseTo(0);
    expect(inspect.arm.visible).toBe(false);
    hand.setHeld(null);
    for (let i = 0; i < 20; i++) hand.update(1 / 60, 0);
    expect(inspect.arm.visible).toBe(true);
  });
});

describe('弓蓄力动画帧', () => {
  it('待机不搭箭，蓄力依次经过三帧并在满弓保持最后一帧', () => {
    expect(bowChargeStage(null)).toBe(-1);
    expect(bowChargeStage(0)).toBe(0);
    expect(bowChargeStage(0.649)).toBe(0);
    expect(bowChargeStage(0.65)).toBe(1);
    expect(bowChargeStage(0.899)).toBe(1);
    expect(bowChargeStage(0.9)).toBe(2);
    expect(bowChargeStage(1)).toBe(2);
  });
});

describe('mcSwingPose（参考挥击曲线，待机基姿仍是适配）', () => {
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

describe('挥击旋转链', () => {
  it('实际手持根按 Y→Z→X→Y 次序使用全部旋转，没有把 Z 旋转用在 Y 轴上', () => {
    const hand = new FirstPersonHand(new THREE.Texture());
    const inspect = hand as unknown as InspectableHand;
    hand.setHeld(2); // Empty arms have a separate verified sweep, not this item chop.
    inspect.swingT = 0.25;
    hand.update(0, 0);
    const p = mcSwingPose(0.25);
    const expected = new THREE.Matrix4()
      .makeRotationY(p.ry1)
      .multiply(new THREE.Matrix4().makeRotationZ(p.rz))
      .multiply(new THREE.Matrix4().makeRotationX(p.rx))
      .multiply(new THREE.Matrix4().makeRotationY(p.ry2));
    for (const axis of [
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 0, 1),
    ]) {
      const actual = axis.clone().applyQuaternion(inspect.root.quaternion);
      expect(actual.distanceTo(axis.clone().transformDirection(expected))).toBeLessThan(1e-10);
    }
    expect(mcSwingQuaternion(mcSwingPose(0)).angleTo(new THREE.Quaternion())).toBeCloseTo(0);
  });

  it('持续挖掘在30/60/120fps保留挥击跨帧余量，松开后回到待机', () => {
    for (const fps of [30, 60, 120]) {
      const hand = new FirstPersonHand(new THREE.Texture());
      const inspect = hand as unknown as InspectableHand;
      for (let frame = 0; frame < fps; frame++) {
        hand.swing();
        hand.update(1 / fps, 0);
      }
      expect(inspect.swingT).toBeCloseTo(1 / 3 + 0.0001, 5);
      for (let frame = 0; frame < fps / 2; frame++) hand.update(1 / fps, 0);
      expect(inspect.swingT).toBe(0);
    }
  });
});

describe('手持物切换', () => {
  it('保留旧物品下放，低位才换模型，再抬起；逐帧setHeld不重置动画', () => {
    const hand = new FirstPersonHand(new THREE.Texture());
    const inspect = hand as unknown as InspectableHand;
    hand.setHeld(2);
    hand.update(0, 0);
    const old = inspect.item;
    const dispose = vi.spyOn(old!.geometry, 'dispose');
    const idleY = inspect.root.position.y;
    for (let frame = 0; frame < 6; frame++) {
      hand.setHeld(7);
      hand.update(1 / 60, 0);
    }
    expect(inspect.item).toBe(old);
    expect(inspect.root.position.y).toBeLessThan(idleY - 0.4);
    expect(dispose).not.toHaveBeenCalled();
    hand.setHeld(7);
    hand.update(1 / 60, 0);
    expect(inspect.itemId).toBe(7);
    expect(inspect.item).not.toBe(old);
    expect(inspect.equipped).toBeLessThan(0.1);
    expect(dispose).toHaveBeenCalledOnce();
    for (let frame = 0; frame < 10; frame++) {
      hand.setHeld(7);
      hand.update(1 / 60, 0);
    }
    expect(inspect.equipped).toBe(1);
    expect(inspect.root.position.y).toBeCloseTo(idleY);
  });

  it('快速滚轮只换最后一个目标；切空手与改变光照不遗失待切换物品', () => {
    const hand = new FirstPersonHand(new THREE.Texture());
    const inspect = hand as unknown as InspectableHand;
    hand.setHeld(2);
    hand.setHeld(7);
    hand.update(0.05, 0);
    hand.setHeld(11);
    hand.setLightingQuality('high');
    expect(inspect.itemId).toBe(2);
    hand.update(0.05, 0);
    hand.update(0.025, 0);
    expect(inspect.itemId).toBe(11);
    hand.setHeld(null);
    for (let i = 0; i < 20; i++) hand.update(1 / 60, 0);
    expect(inspect.item).toBeNull();
    expect(inspect.itemId).toBeNull();
    expect(inspect.equipped).toBe(1);
  });
});

describe('物品薄实体像素侧壁', () => {
  it('异步纹理到达后建立侧壁，旧物品的迟到加载不会改写当前手持几何', () => {
    const pending: { texture: THREE.Texture; done: () => void }[] = [];
    const loader = vi
      .spyOn(THREE.TextureLoader.prototype, 'load')
      .mockImplementation((_url, onLoad) => {
        const texture = new THREE.Texture();
        pending.push({ texture, done: () => onLoad?.(texture) });
        return texture;
      });
    try {
      const hand = new FirstPersonHand(new THREE.Texture());
      const inspect = hand as unknown as InspectableHand;
      hand.setHeld(259);
      expect(inspect.item!.geometry.index!.count).toBe(12); // texture not loaded yet
      inspect.spriteMasks.set(pending[0].texture, { width: 2, height: 1, alpha: [255, 255] });
      pending[0].done();
      expect(inspect.item!.geometry.index!.count).toBe(48);
      hand.setHeld(2);
      hand.update(0.2, 0);
      const current = inspect.item!.geometry;
      const dispose = vi.spyOn(current, 'dispose');
      pending[0].done();
      expect(inspect.item!.geometry).toBe(current);
      expect(dispose).not.toHaveBeenCalled();
    } finally {
      loader.mockRestore();
    }
  });

  it('相邻像素之间没有内部侧面，外缘和孔洞有侧壁且有真实厚度', () => {
    const pair = heldItemGeometry({ width: 2, height: 1, alpha: [255, 255] }, 1);
    // 2 front/back faces + 6 exposed pixel edges, no shared interior wall.
    expect(pair.index!.count).toBe(8 * 6);
    expect(pair.boundingBox!.max.z - pair.boundingBox!.min.z).toBeCloseTo(1 / 16);
    const ring = heldItemGeometry(
      { width: 3, height: 3, alpha: [255, 255, 255, 255, 0, 255, 255, 255, 255] },
      1,
    );
    // 12 exterior pixel edges + 4 around the transparent centre.
    expect(ring.index!.count).toBe(18 * 6);
    pair.dispose();
    ring.dispose();
  });

  it('侧壁UV采样不透明像素中心，法线和面绕序一致', () => {
    const g = heldItemGeometry({ width: 2, height: 2, alpha: [255, 0, 0, 0] }, 0.48);
    const uv = g.getAttribute('uv'),
      pos = g.getAttribute('position'),
      normal = g.getAttribute('normal');
    for (let i = 8; i < uv.count; i++) {
      expect(uv.getX(i)).toBe(0.25);
      expect(uv.getY(i)).toBe(0.75);
    }
    for (let face = 0; face < pos.count / 4; face++) {
      const a = new THREE.Vector3().fromBufferAttribute(pos, face * 4);
      const b = new THREE.Vector3().fromBufferAttribute(pos, face * 4 + 1).sub(a);
      const c = new THREE.Vector3().fromBufferAttribute(pos, face * 4 + 2).sub(a);
      const n = new THREE.Vector3().fromBufferAttribute(normal, face * 4);
      expect(b.cross(c).normalize().dot(n)).toBeGreaterThan(0.999);
    }
    g.dispose();
  });
});

describe('原版Steve右臂和袖子', () => {
  it('待机画面露出肤色拳端，肩部和袖子退向右下方，不能把手臂反着举起', () => {
    const hand = new FirstPersonHand(new THREE.Texture());
    const inspect = hand as unknown as InspectableHand;
    hand.setHeld(null);
    hand.update(0, 0);
    hand.scene.updateMatrixWorld(true);
    // The skin is anatomical: local +Y is shoulder, local -Y is the fist.
    // Check the rendered space, not the rotation values used to obtain it.
    const fist = inspect.arm.localToWorld(new THREE.Vector3(0, -6 / 16, 0));
    const shoulder = inspect.arm.localToWorld(new THREE.Vector3(0, 6 / 16, 0));
    expect(fist.y).toBeGreaterThan(shoulder.y);
    expect(fist.z).toBeLessThan(shoulder.z);
    for (const aspect of [940 / 898, 16 / 9]) {
      hand.resize(aspect);
      const screenFist = fist.clone().project(hand.camera);
      const screenShoulder = shoulder.clone().project(hand.camera);
      expect(screenFist.x).toBeGreaterThan(0);
      expect(screenFist.x).toBeLessThan(1);
      expect(screenFist.y).toBeGreaterThan(-0.7);
      expect(screenFist.y).toBeLessThan(0);
      expect(screenFist.x).toBeLessThan(screenShoulder.x);
      expect(screenShoulder.y).toBeLessThan(-1);
    }
    // The official pose points the fist into the world, so the camera sees
    // skin near the wrist along a side, not the blue shoulder cap.
    const ray = new THREE.Raycaster(new THREE.Vector3(), fist.clone().normalize());
    const hit = ray.intersectObject(inspect.arm, false)[0];
    expect(hit).toBeDefined();
    expect(hit.face!.normal.y).not.toBe(1);
    expect((1 - hit.uv!.y) * 64).toBeGreaterThanOrEqual(24);
    expect((1 - hit.uv!.y) * 64).toBeLessThanOrEqual(32);
  });

  it('基础层4×12×4，袖子扩张0.25像素且映射独立的64×64皮肤UV区域', () => {
    for (const outer of [false, true]) {
      const g = rightArmGeometry(outer);
      g.computeBoundingBox();
      const size = new THREE.Vector3();
      g.boundingBox!.getSize(size);
      expect(size.x).toBeCloseTo((outer ? 4.5 : 4) / 16);
      expect(size.y).toBeCloseTo((outer ? 12.5 : 12) / 16);
      expect(size.z).toBeCloseTo((outer ? 4.5 : 4) / 16);
      const v = outer ? 32 : 16;
      const expected = [
        [48, v + 4, 52, v + 16],
        [40, v + 4, 44, v + 16],
        [44, v, 48, v + 4],
        [48, v, 52, v + 4],
        [44, v + 4, 48, v + 16],
        [52, v + 4, 56, v + 16],
      ];
      const uv = g.getAttribute('uv');
      for (const [face, [left, top, right, bottom]] of expected.entries()) {
        const xs = [],
          ys = [];
        for (let k = 0; k < 4; k++) {
          xs.push(uv.getX(face * 4 + k) * 64);
          ys.push((1 - uv.getY(face * 4 + k)) * 64);
        }
        expect([Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)]).toEqual([
          left,
          top,
          right,
          bottom,
        ]);
      }
      g.dispose();
    }
  });

  it('皮肤和袖子共用最近邻原版贴图，水下与明暗变化保持一致', () => {
    const skin = new THREE.Texture();
    const hand = new FirstPersonHand(new THREE.Texture(), skin);
    const inspect = hand as unknown as InspectableHand;
    const base = inspect.arm.material as THREE.MeshBasicMaterial;
    const outer = inspect.sleeve.material as THREE.MeshBasicMaterial;
    expect(base.map).toBe(skin);
    expect(outer.map).toBe(skin);
    expect(skin.magFilter).toBe(THREE.NearestFilter);
    expect(inspect.sleeve.parent).toBe(inspect.arm);
    expect(outer.alphaTest).toBe(0.5);
    hand.setUnderwater(true);
    hand.setBrightness(0.3);
    expect(outer.color.equals(base.color)).toBe(true);
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

  it('水下会给覆盖层手臂与物品施加一致的青蓝光谱过滤', () => {
    const hand = new FirstPersonHand(new THREE.Texture());
    hand.setLightingQuality('high');
    hand.setHeld(2);
    hand.setUnderwater(true);

    const inspect = hand as unknown as InspectableHand;
    const armColor = (inspect.arm.material as THREE.MeshBasicMaterial).color;
    const itemColor = (inspect.item?.material as THREE.MeshPhysicalMaterial).color;
    expect(armColor.b).toBeGreaterThan(armColor.r);
    expect(itemColor.b).toBeGreaterThan(itemColor.r);

    hand.setUnderwater(false);
    expect((inspect.item?.material as THREE.MeshPhysicalMaterial).color.r).toBeCloseTo(1);
    expect((inspect.item?.material as THREE.MeshPhysicalMaterial).color.g).toBeCloseTo(1);
  });
});
