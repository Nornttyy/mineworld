import * as THREE from 'three';
import { asset } from '../asset';
import type { TexturePack } from '../core/settings';

// 按 pack 记忆化：三种材质最多各保留 1 张 GPU 纹理。
// 否则每次在设置里切材质包都 new 一张 GPU 纹理且旧的从不 dispose → 反复切换持续泄漏显存。
const atlasCache = new Map<string, THREE.Texture>();

/** 加载方块图集：经典/鲜艳为 16px，写实为图片生成的 128px 方块面。 */
export function loadAtlas(pack: TexturePack = 'classic'): THREE.Texture {
  const cached = atlasCache.get(pack);
  if (cached) return cached;
  const file =
    pack === 'classic'
      ? 'textures/atlas_classic.png'
      : pack === 'realistic'
        ? 'textures/atlas_realistic.png'
        : 'textures/atlas.png';
  const tex = new THREE.TextureLoader().load(asset(file));
  if (pack === 'realistic') {
    // 网格 UV 为三套材质共用；最近邻可完整保留 128px 细节，也不会在方块边界采到相邻格。
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false; // 防止高分辨率图集的 mip 层跨方块格渗色
    tex.userData.atlasSize = [512, 1536];
  } else {
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestMipmapNearestFilter;
    tex.generateMipmaps = true;
    tex.userData.atlasSize = [64, 192];
  }
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

/** 加载 N 帧水动画纹理（water_0..N-1.png）；渲染层按时间切 material.map 播放。 */
export function loadWaterFrames(n: number): THREE.Texture[] {
  const loader = new THREE.TextureLoader();
  const frames: THREE.Texture[] = [];
  for (let i = 0; i < n; i++) {
    const tex = loader.load(asset(`textures/blocks/water_${i}.png`));
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
