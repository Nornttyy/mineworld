import * as THREE from 'three';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SkyObjects, cloudMaskFromRgba, cloudMaskOccupied } from './SkyObjects';

interface PendingTexture {
  url: string;
  texture: THREE.Texture;
  onLoad?: (texture: THREE.Texture) => void;
}
interface SkyInternals {
  sun: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  moon: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  voxelClouds: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
  realClouds: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>;
  realSun: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
}

let requests: PendingTexture[];
beforeEach(() => {
  requests = [];
  vi.spyOn(THREE.TextureLoader.prototype, 'load').mockImplementation((url, onLoad) => {
    const texture = new THREE.Texture();
    texture.name = url;
    requests.push({ url, texture, onLoad });
    return texture;
  });
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function finishCloudDownload(width: number, height: number, pixels: Uint8ClampedArray): void {
  vi.stubGlobal('document', {
    createElement: () => ({
      width: 0, height: 0,
      getContext: () => ({ drawImage: vi.fn(), getImageData: () => ({ data: pixels }) }),
    }),
  });
  const request = requests.find((r) => r.url.includes('/clouds.png'))!;
  request.texture.image = { naturalWidth: width, naturalHeight: height, width, height };
  request.onLoad!(request.texture);
}

describe('official Java sky resource integration', () => {
  it('loads original sun/full-moon files with nearest filtering and additive black removal', () => {
    const sky = new SkyObjects(new THREE.Scene()) as unknown as SkyInternals;
    expect(requests.map((r) => r.url.split('?')[0])).toEqual([
      '/textures/environment/sun.png',
      '/textures/environment/moon/full_moon.png',
      '/textures/environment/clouds.png',
    ]);
    for (const object of [sky.sun, sky.moon]) {
      expect(object.material.map).toBeInstanceOf(THREE.Texture);
      expect(object.material.map?.magFilter).toBe(THREE.NearestFilter);
      expect(object.material.map?.minFilter).toBe(THREE.NearestFilter);
      expect(object.material.map?.generateMipmaps).toBe(false);
      expect(object.material.map?.colorSpace).toBe(THREE.SRGBColorSpace);
      // Official source corners have opaque black, not alpha=0. Normal blending
      // would paint black rectangles over the sky even though transparent=true.
      expect(object.material.blending).toBe(THREE.AdditiveBlending);
      expect(object.material.toneMapped).toBe(false);
      expect(object.material.depthWrite).toBe(false);
    }
  });

  it('samples alpha rather than RGB and wraps at negative world coordinates', () => {
    const mask = cloudMaskFromRgba(2, 2, new Uint8ClampedArray([
      255, 255, 255, 0, 0, 0, 0, 255,
      0, 0, 0, 255, 255, 255, 255, 0,
    ]));
    expect(cloudMaskOccupied(mask, 0, 0)).toBe(false);
    expect(cloudMaskOccupied(mask, 1, 0)).toBe(true);
    expect(cloudMaskOccupied(mask, -1, 0)).toBe(true);
    expect(cloudMaskOccupied(mask, 0, -1)).toBe(true);
    expect(cloudMaskOccupied(mask, -1, -1)).toBe(false);
    expect(cloudMaskOccupied(mask, 257, 256)).toBe(true);
    expect(() => cloudMaskFromRgba(2, 2, new Uint8Array(3))).toThrow();
  });

  it('rebuilds after a late mask download with contiguous 12×12×4 cells and no shared walls', () => {
    const sky = new SkyObjects(new THREE.Scene());
    const internals = sky as unknown as SkyInternals;
    sky.update(6000, new THREE.Vector3(0, 80, 0), 0);
    expect(internals.voxelClouds.geometry.getAttribute('position').count).toBe(0);
    const emptyGeometry = internals.voxelClouds.geometry;
    const dispose = vi.spyOn(emptyGeometry, 'dispose');
    finishCloudDownload(1, 1, new Uint8ClampedArray([255, 255, 255, 255]));
    const geometry = internals.voxelClouds.geometry;
    expect(geometry).not.toBe(emptyGeometry);
    expect(dispose).toHaveBeenCalledOnce();
    geometry.computeBoundingBox();
    expect(geometry.boundingBox!.min.toArray()).toEqual([0, 0, 0]);
    expect(geometry.boundingBox!.max.toArray()).toEqual([480, 4, 480]);
    // 40×40 occupied texels; each only emits top+bottom because all horizontal
    // neighbours are occupied. A box-per-texel implementation would emit 6 faces.
    expect(geometry.getAttribute('position').count).toBe(40 * 40 * 8);
    expect(geometry.index!.count).toBe(40 * 40 * 12);
    const positions = geometry.getAttribute('position');
    for (let i = 0; i < positions.count; i++) {
      expect(positions.getX(i) % 12).toBe(0);
      expect(positions.getZ(i) % 12).toBe(0);
    }
    expect(internals.voxelClouds.position.y).toBe(192.33);
    expect(internals.voxelClouds.material.opacity).toBe(0.8);
  });

  it('keeps enhanced sky shaders and dimension visibility intact when the mask loads', () => {
    const sky = new SkyObjects(new THREE.Scene());
    const internals = sky as unknown as SkyInternals;
    sky.setLightingQuality('high');
    const shader = internals.realSun.material.fragmentShader;
    finishCloudDownload(1, 1, new Uint8ClampedArray([255, 255, 255, 255]));
    sky.update(6000, new THREE.Vector3(0, 80, 0), 1 / 20);
    expect(internals.realClouds.visible).toBe(true);
    expect(internals.voxelClouds.visible).toBe(false);
    expect(internals.realSun.material.fragmentShader).toBe(shader);
    expect(internals.realClouds.material.uniforms.uStepCount.value).toBe(64);
    sky.setLightingQuality('off');
    sky.update(6000, new THREE.Vector3(0, 80, 0), 0);
    expect(internals.voxelClouds.geometry.getAttribute('position').count).toBeGreaterThan(0);
    sky.setDimension('nether');
    expect(internals.voxelClouds.visible).toBe(false);
    expect(internals.sun.visible).toBe(false);
    expect(internals.moon.visible).toBe(false);
  });
});
