import * as THREE from 'three';
import type { MeshData } from '../core/mesh/mesher';

/** 把 core 产出的纯网格数据灌进 BufferGeometry，配图集+顶点色的无光照材质。 */
export function buildChunkMesh(data: MeshData, atlas: THREE.Texture): THREE.Mesh {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
  if (data.normals) g.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(data.uvs, 2));
  g.setAttribute('color', new THREE.BufferAttribute(data.colors, 3));
  g.setIndex(new THREE.BufferAttribute(data.indices, 1));

  // 无光照：用烤进顶点色的 MC 面亮度 + 图集贴图，即得原版观感。
  const material = new THREE.MeshBasicMaterial({ map: atlas, vertexColors: true });
  return new THREE.Mesh(g, material);
}
