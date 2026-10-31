import * as THREE from 'three';
import { architectureModel } from '../core/blocks/architecture';
import {
  ATLAS_COLUMNS,
  ATLAS_ROWS,
  atlasUvInset,
  CLASSIC_ATLAS_TILE_PX,
} from '../core/blocks/atlasLayout';
import { defaultLeafTint } from '../core/worldgen/foliageTint';
/** Shared official geometry for hand-held and dropped blocks. */
export function architectureGeometry(id: number, size: number): THREE.BufferGeometry | undefined {
  const model = architectureModel(id);
  if (!model?.quads.length) return undefined;
  const p: number[] = [],
    uv: number[] = [],
    color: number[] = [],
    indices: number[] = [],
    [eu, ev] = atlasUvInset(CLASSIC_ATLAS_TILE_PX);
  for (const q of model.quads) {
    const offset = p.length / 3,
      shade = q.shade ? [0.6, 0.6, 1, 0.5, 0.8, 0.8][q.direction ?? 2] : 1;
    const tint = q.tint === undefined ? [1, 1, 1] : defaultLeafTint(id);
    for (let i = 0; i < 4; i++) {
      p.push(...q.vertices[i].map((n) => (n - 0.5) * size));
      uv.push(
        (q.tile % ATLAS_COLUMNS) / ATLAS_COLUMNS + eu + q.uv[i][0] * (1 / ATLAS_COLUMNS - 2 * eu),
        1 -
          (Math.floor(q.tile / ATLAS_COLUMNS) + 1) / ATLAS_ROWS +
          ev +
          (1 - q.uv[i][1]) * (1 / ATLAS_ROWS - 2 * ev),
      );
      color.push(...tint.map((n) => n * shade));
    }
    indices.push(offset, offset + 1, offset + 2, offset, offset + 2, offset + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(color, 3));
  g.setIndex(indices);
  g.computeVertexNormals();
  return g;
}

/** Selection outline uses the official selection volumes, centred like the legacy cube. */
export function architectureOutline(id: number): THREE.BufferGeometry {
  const boxes = architectureModel(id)?.selectionBoxes ?? [[0, 0, 0, 1, 1, 1]];
  const points: number[] = [];
  for (const b of boxes) {
    const box = new THREE.BoxGeometry(
      b[3] - b[0] + 0.002,
      b[4] - b[1] + 0.002,
      b[5] - b[2] + 0.002,
    );
    box.translate((b[0] + b[3]) / 2 - 0.5, (b[1] + b[4]) / 2 - 0.5, (b[2] + b[5]) / 2 - 0.5);
    const edges = new THREE.EdgesGeometry(box);
    points.push(...edges.getAttribute('position').array);
    edges.dispose();
    box.dispose();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
  return g;
}
