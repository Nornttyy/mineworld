import * as THREE from 'three';
import { asset } from '../asset';

// 按 pack 记忆化：只有卡通/经典两种，最多 2 张纹理永久复用。
// 否则每次在设置里切材质包都 new 一张 GPU 纹理且旧的从不 dispose → 反复切换持续泄漏显存。
const atlasCache = new Map<string, THREE.Texture>();

/** 加载方块图集纹理：放大最近邻(近处像素硬边) + 缩小走 mipmap(远处平滑)。pack 选卡通(默认)或经典(闷色)。
 *  ⚠️ minFilter 曾也是 Nearest 且关 mipmap——远处地形/树叶全是高频噪点和闪烁竖条纹，
 *  是"远景不像 MC"的主因(MC 默认开 4 级 mipmap)。图集 64×144 tile 对齐：mip 内 NEAREST 采样
 *  永不跨 tile 取texel，各 mip 级(直到每 tile=1px)也 tile 对齐 → 无渗色，可放心开。 */
export function loadAtlas(pack: 'cartoon' | 'classic' = 'cartoon'): THREE.Texture {
  const cached = atlasCache.get(pack);
  if (cached) return cached;
  const file = pack === 'classic' ? 'textures/atlas_classic.png' : 'textures/atlas.png';
  const tex = new THREE.TextureLoader().load(asset(file));
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.colorSpace = THREE.SRGBColorSpace;
  atlasCache.set(pack, tex);
  return tex;
}

/** 独立的水纹理（可平铺、可滚动做流动动画，不与图集共享，免得动到其它方块）。 */
export function loadWaterTexture(): THREE.Texture {
  const tex = new THREE.TextureLoader().load(asset('textures/blocks/water.png'));
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestMipmapLinearFilter; // 远处水面平滑(否则世界坐标平铺在远处闪成噪点)
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
    tex.minFilter = THREE.NearestMipmapLinearFilter; // 世界坐标平铺的水在远处不再闪烁成白条纹(16² 重生成 mip 开销可忽略)
    tex.generateMipmaps = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    frames.push(tex);
  }
  return frames;
}
