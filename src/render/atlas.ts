import * as THREE from 'three';
import { asset } from '../asset';
import type { TexturePack } from '../core/settings';
import {
  atlasPixelSize,
  CLASSIC_ATLAS_TILE_PX,
} from '../core/blocks/atlasLayout';

// 按 pack 记忆化：三种材质最多各保留 1 张 GPU 纹理。
// 否则每次在设置里切材质包都 new 一张 GPU 纹理且旧的从不 dispose → 反复切换持续泄漏显存。
const atlasCache = new Map<string, THREE.Texture>();

/** 加载方块图集：经典与鲜艳均为 16px 像素材质。 */
export function loadAtlas(pack: TexturePack = 'classic'): THREE.Texture {
  const cached = atlasCache.get(pack);
  if (cached) return cached;
  const file = pack === 'classic' ? 'textures/atlas_classic.png' : 'textures/atlas.png';
  const tex = new THREE.TextureLoader().load(asset(file));
  tex.magFilter = THREE.NearestFilter;
  // 整张图集生成 mipmap 会在较远处把相邻格平均到一起，造成沙子黑线、仙人掌橙线。
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.userData.atlasSize = atlasPixelSize(CLASSIC_ATLAS_TILE_PX);
  tex.colorSpace = THREE.SRGBColorSpace;
  atlasCache.set(pack, tex);
  return tex;
}

/** 独立的水纹理（可平铺、可滚动做流动动画，不与图集共享，免得动到其它方块）。 */
export function loadWaterTexture(): THREE.Texture {
  const tex = new THREE.TextureLoader().load(asset('textures/blocks/water.png'));
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestMipmapNearestFilter;
  tex.generateMipmaps = true;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/** 火把贴图（立牌 billboard 用）：细木棍 + 顶端火焰，透明背景、像素硬边。 */
export function loadTorchTexture(): THREE.Texture {
  const tex = new THREE.TextureLoader().load(asset('textures/torch_block.png'));
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 加载 N 帧标准水动画纹理（water_0..N-1.png）。 */
export function waterFramePath(index: number, _pack: TexturePack = 'classic'): string {
  return `textures/blocks/water_${index}.png`;
}

export function loadWaterFrames(n: number, pack: TexturePack = 'classic'): THREE.Texture[] {
  const loader = new THREE.TextureLoader();
  const frames: THREE.Texture[] = [];
  for (let i = 0; i < n; i++) {
    const tex = loader.load(asset(waterFramePath(i, pack)));
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestMipmapNearestFilter;
    tex.generateMipmaps = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    frames.push(tex);
  }
  return frames;
}
