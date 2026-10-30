import * as THREE from 'three';
import { describe, expect, it, vi } from 'vitest';
import { applyRabbitAnimation, applySpiderPose, buildMobModel, MobRenderer } from './MobRenderer';
import { spawnMob } from '../core/entity/mob';
import rabbitAnimations from './data/rabbit26Animations.json';

vi.mock('./mobTextures', async (original) => ({
  ...(await original<typeof import('./mobTextures')>()),
  mobTexture: () => new THREE.Texture(),
}));

describe('official 26.3 adult rabbit and spider models', () => {
  it('uses the new rabbit hierarchy, dimensions and UV islands, not the old generic quad atlas', () => {
    const model = buildMobModel('rabbit', 'classic');
    const named = (name: string) => model.group.getObjectByName(name)!;
    expect(named('head').parent).toBe(named('body'));
    expect(named('left_ear').parent).toBe(named('head'));
    expect(named('right_front_leg').parent).toBe(named('frontlegs'));
    expect(named('right_hind_leg').parent).toBe(named('backlegs'));
    const body = named('body').children.find((o) => o instanceof THREE.Mesh) as THREE.Mesh;
    const head = named('head').children.find((o) => o instanceof THREE.Mesh) as THREE.Mesh;
    const ear = named('left_ear').children[0] as THREE.Mesh;
    expect(body.geometry.userData.skin).toMatchObject({
      u: 0,
      v: 0,
      x: 8,
      y: 6,
      z: 10,
      textureHeight: 64,
    });
    expect(head.geometry.userData.skin).toMatchObject({ u: 0, v: 16, x: 5, y: 5, z: 5 });
    expect(ear.geometry.userData.skin).toMatchObject({ u: 32, v: 0, x: 2, y: 5, z: 1 });
    expect(named('body').position.toArray()).toEqual([0, 23 / 16, 4 / 16]);
    expect(named('body').rotation.x).toBeCloseTo(-Math.PI / 8, 5);
    expect(model.group.scale.toArray()).toEqual([1, 1, 1]);
    for (const clip of Object.values(rabbitAnimations))
      for (const channel of clip.channels) {
        expect(named(channel.bone), channel.bone).toBeDefined();
        expect(channel.frames.every((f) => f.time >= 0 && f.time <= clip.length)).toBe(true);
      }
  });

  it('keeps every rabbit/spider vertex UV inside the correct original texture dimensions', () => {
    for (const kind of ['rabbit', 'spider'] as const) {
      const model = buildMobModel(kind, 'classic');
      let meshes = 0;
      model.group.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        meshes++;
        const uv = object.geometry.getAttribute('uv');
        expect(object.geometry.userData.skin.textureHeight).toBe(kind === 'rabbit' ? 64 : 32);
        for (let i = 0; i < uv.count; i++) {
          expect(uv.getX(i)).toBeGreaterThanOrEqual(0);
          expect(uv.getX(i)).toBeLessThanOrEqual(1);
          expect(uv.getY(i)).toBeGreaterThanOrEqual(0);
          expect(uv.getY(i)).toBeLessThanOrEqual(1);
        }
      });
      expect(meshes).toBe(kind === 'rabbit' ? 9 : 12);
    }
  });

  it('builds all eight full-length spider legs at the official pivots with a separate emissive eye layer', () => {
    const model = buildMobModel('spider', 'classic');
    expect(model.legs).toHaveLength(8);
    for (let i = 0; i < 8; i++) {
      const leg = model.legs[i];
      const skin = (leg.children[0] as THREE.Mesh).geometry.userData.skin;
      expect(skin).toMatchObject({ u: 18, v: 0, x: 16, y: 2, z: 2, mirror: i % 2 === 1 });
      expect(leg.position.toArray()).toEqual([
        i % 2 ? 4 / 16 : -4 / 16,
        15 / 16,
        (2 - Math.floor(i / 2)) / 16,
      ]);
    }
    expect(model.head!.children).toHaveLength(2);
    expect(model.emissiveMats).toHaveLength(1);
    expect(model.emissiveMats![0].blending).toBe(THREE.AdditiveBlending);
    expect(model.mats).not.toContain(model.emissiveMats![0]);
  });
});

describe('verified animal pose application', () => {
  it('uses spider phase offsets on both axes and resets each pose instead of accumulating transforms', () => {
    const { legs } = buildMobModel('spider', 'classic');
    applySpiderPose(legs, 0, 1);
    expect(legs[0].rotation.y).toBeCloseTo(Math.PI / 4 - 0.4);
    expect(legs[2].rotation.y).toBeCloseTo(Math.PI / 8 + 0.4);
    expect(legs[4].rotation.z).toBeCloseTo(-0.58119464 + 0.4);
    for (let i = 0; i < 8; i += 2) {
      expect(legs[i].rotation.y).toBeCloseTo(-legs[i + 1].rotation.y);
      expect(legs[i].rotation.z).toBeCloseTo(-legs[i + 1].rotation.z);
    }
    applySpiderPose(legs, 13, 0);
    expect(legs[0].rotation.y).toBeCloseTo(Math.PI / 4);
    expect(legs[0].rotation.z).toBeCloseTo(-Math.PI / 4);
  });

  it('reproduces an official rabbit hop keyframe, loops at 0.75 seconds, and restores the resting pose', () => {
    const { group } = buildMobModel('rabbit', 'classic');
    const body = group.getObjectByName('body')!;
    const baseline = body.rotation.x;
    expect(rabbitAnimations.HOP.channels.reduce((n, c) => n + c.frames.length, 0)).toBe(110);
    expect(rabbitAnimations.IDLE_HEAD_TILT.channels.reduce((n, c) => n + c.frames.length, 0)).toBe(
      236,
    );
    applyRabbitAnimation(group, 0.29170000553131104, 'HOP');
    expect(body.rotation.x).toBeCloseTo(baseline + (32.5 * Math.PI) / 180);
    const first = body.rotation.x;
    applyRabbitAnimation(group, 0.29170000553131104, 'HOP');
    expect(body.rotation.x).toBe(first);
    applyRabbitAnimation(group, 0.75, 'HOP');
    expect(body.rotation.x).toBeCloseTo(baseline);
    applyRabbitAnimation(group, 1, 'IDLE_HEAD_TILT');
    applyRabbitAnimation(group, 0, null);
    expect(body.rotation.x).toBe(baseline);
    expect(body.position.toArray()).toEqual([0, 23 / 16, 4 / 16]);
  });

  it('actual MobRenderer uses the new poses without old generic body bob and preserves bright spider eyes', () => {
    const scene = new THREE.Scene(),
      renderer = new MobRenderer(scene);
    const rabbit = spawnMob('rabbit', 0, 10, 0),
      spider = spawnMob('spider', 3, 10, 0);
    rabbit.vel.x = spider.vel.x = 0.1;
    for (let i = 0; i < 6; i++) renderer.sync([rabbit, spider], 0.05, () => 0.1);
    expect(scene.getObjectByName('mob:rabbit')!.position.y).toBe(10);
    expect(scene.getObjectByName('mob:spider')!.position.y).toBe(10);
    const head = scene.getObjectByName('mob:spider')!.getObjectByName('head')!;
    const eyes = (head.children[1] as THREE.Mesh).material as THREE.MeshBasicMaterial;
    expect(eyes.color.getHex()).toBe(0xffffff);
    const dispose = vi.spyOn(eyes, 'dispose');
    renderer.clear();
    expect(dispose).toHaveBeenCalledOnce();
    expect(scene.children).toHaveLength(0);
  });
});
