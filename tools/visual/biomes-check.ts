import * as THREE from 'three';
import { loadAtlas } from '../../src/render/atlas';
import { ChunkMeshManager } from '../../src/render/ChunkMeshManager';
import { meshChunkData } from '../../src/core/mesh/mesher';
import { defaultLeafTint } from '../../src/core/worldgen/foliageTint';
import { planExpandedTree, type ExpandedTree } from '../../src/core/worldgen/expandedBiomes';
import { planStructure, type StructureKind } from '../../src/core/worldgen/modernStructures';
import { generateModernChunk } from '../../src/core/worldgen/modernOverworld';
import { CAMERA_AUX_RENDER_LAYER } from '../../src/render/renderLayers';
import * as B from '../../src/core/blocks/registry';
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas')!,
  antialias: false,
});
renderer.setPixelRatio(Math.min(2, devicePixelRatio));
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.background = new THREE.Color('#9bbfe6');
scene.fog = new THREE.Fog('#9bbfe6', 90, 170);
const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.1, 220);
camera.layers.enable(CAMERA_AUX_RENDER_LAYER);
const atlas = loadAtlas('classic', true);
const world = {
  seed: 0,
  generator: 'legacy',
  minY: 48,
  maxY: 120,
  height: 72,
  seaWaterY: 63,
  peek: () => undefined,
};
let chunks: ChunkMeshManager | undefined;
let angle = 0.7,
  rotate = false;
let focus = new THREE.Vector3(0, 83, 0);
let range = 42;
const getSelect = document.querySelector<HTMLSelectElement>('#scene')!,
  status = document.querySelector('#status')!;
function load() {
  chunks?.dispose();
  chunks = new ChunkMeshManager(scene, world as never, atlas, 'classic');
  const type = getSelect.value,
    actual = type.startsWith('actual'),
    blocks = new Map<string, number>();
  const put = (x: number, y: number, z: number, id: number) => blocks.set(`${x},${y},${z}`, id);
  let minCx = -2,
    maxCx = 1,
    minCz = -2,
    maxCz = 1;
  const generated = new Map<string, ReturnType<typeof generateModernChunk>>();
  if (actual) {
    if (type === 'actual_village') {
      minCx = 2;
      maxCx = 6;
      minCz = -7;
      maxCz = -3;
      focus.set(72, 68, -70);
    } else {
      minCx = -6;
      maxCx = -2;
      minCz = 3;
      maxCz = 7;
      focus.set(-62, 78, 95);
    }
    range = 45;
    for (let x = minCx; x <= maxCx; x++)
      for (let z = minCz; z <= maxCz; z++)
        generated.set(
          `${x},${z}`,
          generateModernChunk(x, z, type === 'actual_village' ? '9' : '42', 4),
        );
  } else {
    focus.set(0, 83, 0);
    range = type === 'trees' ? 52 : type === 'village' ? 44 : 31;
    const ground = type === 'desert_ruin' ? B.SAND : type === 'igloo' ? B.SNOW_BLOCK : B.GRASS;
    for (let x = -32; x < 32; x++)
      for (let z = -32; z < 32; z++)
        for (let y = 77; y <= 80; y++) put(x, y, z, y === 80 ? ground : 2);
    if (type !== 'trees')
      for (const [x, y, z, id] of planStructure(type as StructureKind)) put(x, 80 + y, z, id);
    const tree = (kind: ExpandedTree, x: number, z: number, seed = 9n) => {
      for (const [dx, dy, dz, id] of planExpandedTree(kind, seed)) put(x + dx, 81 + dy, z + dz, id);
    };
    if (type === 'trees') {
      for (const [i, kind] of (
        ['acacia', 'jungle', 'dark_oak', 'cherry', 'mushroom', 'pine'] as ExpandedTree[]
      ).entries())
        tree(kind, (i % 3) * 13 - 13, Math.floor(i / 3) * 16 - 8, kind === 'jungle' ? 1n : 9n);
      focus.set(0, 86, 0);
    }
    if (type === 'stone_tower') {
      tree('cherry', -10, 5);
      tree('cherry', 8, 10);
      tree('cherry', 8, -8);
    }
    if (type === 'village') {
      tree('swamp', -18, 8);
      tree('swamp', 17, 11);
      tree('swamp', -17, -14);
    }
    if (type === 'igloo') {
      tree('pine', -11, -5);
      tree('pine', 11, -9);
    }
  }
  const get = (x: number, y: number, z: number) =>
    actual
      ? generated
          .get(`${Math.floor(x / 16)},${Math.floor(z / 16)}`)
          ?.get(((x % 16) + 16) % 16, y, ((z % 16) + 16) % 16) ?? 0
      : blocks.get(`${x},${y},${z}`) ?? 0;
  const fluid = (x: number, y: number, z: number) => (get(x, y, z) === B.WATER ? 24 : 0);
  for (let cx = minCx; cx <= maxCx; cx++)
    for (let cz = minCz; cz <= maxCz; cz++)
      chunks['applyMesh'](cx, cz, meshChunkData(cx, cz, get, fluid, 48, 72, defaultLeafTint));
  status.textContent =
    type === 'actual_village'
      ? '自然生成 · 种子 9 · X 72 / Y 65 / Z -70'
      : type === 'actual'
        ? '自然生成 · 种子 42 · X -62 / Y 73 / Z 95'
        : '固定平地展示 · 建筑内部可进入，树木使用游戏生成器';
}
getSelect.onchange = () => {
  status.textContent = '正在生成…';
  setTimeout(load, 30);
};
document.querySelector<HTMLButtonElement>('#rotate')!.onclick = () => {
  rotate = !rotate;
};
function resize() {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();
load();
let before = performance.now();
function frame(now: number) {
  if (rotate) angle += (now - before) * 0.00012;
  before = now;
  camera.position.set(
    focus.x + Math.sin(angle) * range,
    focus.y + range * 0.6,
    focus.z + Math.cos(angle) * range,
  );
  camera.lookAt(focus);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
