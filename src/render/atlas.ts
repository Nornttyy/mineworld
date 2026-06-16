import * as THREE from 'three';

/** 加载方块图集纹理：最近邻取样、关 mipmap，保持像素硬边。 */
export function loadAtlas(): THREE.Texture {
  const tex = new THREE.TextureLoader().load('/textures/atlas.png');
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
