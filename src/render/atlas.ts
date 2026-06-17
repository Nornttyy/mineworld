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

/** 独立的水纹理（可平铺、可滚动做流动动画，不与图集共享，免得动到其它方块）。 */
export function loadWaterTexture(): THREE.Texture {
  const tex = new THREE.TextureLoader().load(import.meta.env.BASE_URL + 'textures/blocks/water.png');
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}
