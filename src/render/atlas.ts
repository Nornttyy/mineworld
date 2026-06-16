import * as THREE from 'three';

/** 加载方块图集纹理：最近邻取样、关 mipmap，保持像素硬边。 */
export function loadAtlas(): THREE.Texture {
  // 用 BASE_URL 前缀，dev('/') 与 Pages 子路径('/mineworld/') 都正确
  const tex = new THREE.TextureLoader().load(import.meta.env.BASE_URL + 'textures/atlas.png');
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
