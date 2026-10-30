import * as THREE from 'three';

export interface SpriteAlpha {
  width: number;
  height: number;
  alpha: ArrayLike<number>;
}

/** Extrude the opaque outline of an item texture, including holes in the icon.
 * Front/back retain the whole texture; only exposed pixel edges get side walls.
 * One model pixel of depth follows the classic generated-item silhouette.
 * This is authored geometry, not a copy of Minecraft's model generator. */
export function heldItemGeometry(mask: SpriteAlpha, size: number): THREE.BufferGeometry {
  const { width, height, alpha } = mask;
  if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1)
    throw new Error('Item texture must have positive integer dimensions');
  if (alpha.length !== width * height || !Number.isFinite(size) || size <= 0)
    throw new Error('Invalid item texture alpha or model size');
  const positions: number[] = [],
    normals: number[] = [],
    uvs: number[] = [],
    colors: number[] = [];
  const indices: number[] = [];
  const half = size / 2,
    depth = size / 32;
  function quad(
    points: number[],
    normal: readonly [number, number, number],
    texcoords: number[],
    shade = 1,
  ): void {
    const start = positions.length / 3;
    positions.push(...points);
    uvs.push(...texcoords);
    for (let i = 0; i < 4; i++) {
      normals.push(...normal);
      colors.push(shade, shade, shade);
    }
    indices.push(start, start + 1, start + 2, start, start + 2, start + 3);
  }
  quad(
    [-half, -half, depth, half, -half, depth, half, half, depth, -half, half, depth],
    [0, 0, 1],
    [0, 0, 1, 0, 1, 1, 0, 1],
  );
  quad(
    [half, -half, -depth, -half, -half, -depth, -half, half, -depth, half, half, -depth],
    [0, 0, -1],
    [1, 0, 0, 0, 0, 1, 1, 1],
  );
  const opaque = (x: number, y: number): boolean =>
    x >= 0 && x < width && y >= 0 && y < height && alpha[y * width + x] >= 128;
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      if (!opaque(x, y)) continue;
      const l = (x / width - 0.5) * size,
        r = ((x + 1) / width - 0.5) * size;
      const t = (0.5 - y / height) * size,
        b = (0.5 - (y + 1) / height) * size;
      // Sample the opaque pixel centre: border UVs can pick its transparent neighbour.
      const u = (x + 0.5) / width,
        v = 1 - (y + 0.5) / height;
      const edgeUV = [u, v, u, v, u, v, u, v];
      if (!opaque(x - 1, y))
        quad([l, b, -depth, l, b, depth, l, t, depth, l, t, -depth], [-1, 0, 0], edgeUV, 0.6);
      if (!opaque(x + 1, y))
        quad([r, b, depth, r, b, -depth, r, t, -depth, r, t, depth], [1, 0, 0], edgeUV, 0.6);
      if (!opaque(x, y - 1))
        quad([l, t, depth, r, t, depth, r, t, -depth, l, t, -depth], [0, 1, 0], edgeUV);
      if (!opaque(x, y + 1))
        quad([l, b, -depth, r, b, -depth, r, b, depth, l, b, depth], [0, -1, 0], edgeUV, 0.5);
    }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}
