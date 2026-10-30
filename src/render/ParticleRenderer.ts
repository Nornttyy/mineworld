import * as THREE from 'three';
import type { Particle } from '../core/particles/particles';
import type { TexturePack } from '../core/settings';
import { ATLAS_COLUMNS, ATLAS_ROWS } from '../core/blocks/atlasLayout';
import { CAMERA_AUX_RENDER_LAYER } from './renderLayers';

const MAX = 2048;
/** Camera-facing textured quads, with an independent 4x4-pixel crop for every fragment. */
export class ParticleRenderer {
  private readonly geometry = new THREE.BufferGeometry();
  private readonly material: THREE.MeshBasicMaterial;
  private readonly mesh: THREE.Mesh;
  private readonly position = new THREE.BufferAttribute(new Float32Array(MAX * 12), 3).setUsage(
    THREE.DynamicDrawUsage,
  );
  private readonly color = new THREE.BufferAttribute(new Float32Array(MAX * 12), 3).setUsage(
    THREE.DynamicDrawUsage,
  );
  private readonly uv = new THREE.BufferAttribute(new Float32Array(MAX * 8), 2).setUsage(
    THREE.DynamicDrawUsage,
  );
  private readonly offset = new THREE.BufferAttribute(new Float32Array(MAX * 8), 2).setUsage(
    THREE.DynamicDrawUsage,
  );
  private readonly textured = new THREE.BufferAttribute(new Float32Array(MAX * 4), 1).setUsage(
    THREE.DynamicDrawUsage,
  );
  private pack: TexturePack;

  constructor(scene: THREE.Scene, atlas: THREE.Texture, pack: TexturePack = 'classic') {
    this.pack = pack;
    this.geometry.setAttribute('position', this.position);
    this.geometry.setAttribute('color', this.color);
    this.geometry.setAttribute('uv', this.uv);
    this.geometry.setAttribute('aOffset', this.offset);
    this.geometry.setAttribute('aTextured', this.textured);
    const indices = new Uint16Array(MAX * 6);
    for (let i = 0; i < MAX; i++)
      indices.set([i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3], i * 6);
    this.geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    this.geometry.setDrawRange(0, 0);
    this.material = new THREE.MeshBasicMaterial({
      map: atlas,
      vertexColors: true,
      alphaTest: 0.1,
      depthWrite: true,
    });
    this.material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\nattribute vec2 aOffset;\nattribute float aTextured;\nvarying float vTextured;',
        )
        .replace(
          '#include <project_vertex>',
          'vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);\nmvPosition.xy += aOffset;\ngl_Position = projectionMatrix * mvPosition;\nvTextured = aTextured;',
        );
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vTextured;')
        .replace('#include <map_fragment>', 'if (vTextured > 0.5) {\n#include <map_fragment>\n}');
    };
    this.material.customProgramCacheKey = () => 'textured-block-fragments-v1';
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.layers.set(CAMERA_AUX_RENDER_LAYER);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }

  setAtlas(atlas: THREE.Texture, pack: TexturePack): void {
    this.material.map = atlas;
    this.pack = pack;
  }

  sync(particles: Particle[], light: (x: number, y: number, z: number) => number = () => 1): void {
    const n = Math.min(MAX, particles.length);
    for (let i = 0; i < n; i++) {
      const p = particles[particles.length - n + i];
      const alpha = p.tickRemainder === undefined ? 1 : Math.min(1, p.tickRemainder / 0.05);
      const old = p.previous ?? p;
      const x = old.x + (p.x - old.x) * alpha,
        y = old.y + (p.y - old.y) * alpha,
        z = old.z + (p.z - old.z) * alpha;
      const size = p.size ?? 0.065;
      const tint = this.pack === 'classic' ? p.tint ?? [1, 1, 1] : [1, 1, 1];
      const brightness = light(p.x, p.y, p.z);
      // RGB intensities (0.6 in Java) are converted to Three's linear working space.
      const c = new THREE.Color(p.r, p.g, p.b).convertSRGBToLinear();
      const tile = p.tile ?? 0;
      const u0 = ((tile % ATLAS_COLUMNS) + (p.u ?? 0)) / ATLAS_COLUMNS;
      const vTop = 1 - (Math.floor(tile / ATLAS_COLUMNS) + (p.v ?? 0)) / ATLAS_ROWS;
      const corners = [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
      ];
      for (let j = 0; j < 4; j++) {
        const k = i * 4 + j;
        const [sx, sy] = corners[j];
        this.position.setXYZ(k, x, y, z);
        this.offset.setXY(k, sx * size, sy * size);
        this.color.setXYZ(
          k,
          c.r * tint[0] * brightness,
          c.g * tint[1] * brightness,
          c.b * tint[2] * brightness,
        );
        // Minecraft's fragment U is reversed; V follows the source sprite's top-to-bottom coordinates.
        this.uv.setXY(
          k,
          u0 + (sx < 0 ? 0.25 : 0) / ATLAS_COLUMNS,
          vTop - (sy < 0 ? 0.25 : 0) / ATLAS_ROWS,
        );
        this.textured.setX(k, p.tile === undefined ? 0 : 1);
      }
    }
    this.geometry.setDrawRange(0, n * 6);
    for (const a of [this.position, this.color, this.uv, this.offset, this.textured])
      a.needsUpdate = true;
  }
}
