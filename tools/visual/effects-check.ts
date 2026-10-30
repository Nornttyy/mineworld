import * as THREE from 'three';
import { loadAtlas } from '../../src/render/atlas';
import { CrackOverlay } from '../../src/render/CrackOverlay';
import { ParticleRenderer } from '../../src/render/ParticleRenderer';
import { ChunkMeshManager } from '../../src/render/ChunkMeshManager';
import { meshChunkData } from '../../src/core/mesh/mesher';
import { spawnBlockBreak, spawnBlockHit } from '../../src/core/particles/blockParticles';
import { stepParticles, type Particle } from '../../src/core/particles/particles';
import { defaultLeafTint } from '../../src/core/worldgen/foliageTint';
import { CAMERA_AUX_RENDER_LAYER } from '../../src/render/renderLayers';
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas')!,
  antialias: false,
});
renderer.setPixelRatio(Math.min(2, devicePixelRatio));
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.background = new THREE.Color('#91b7e5');
const camera = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, 0.1, 80);
camera.layers.enable(CAMERA_AUX_RENDER_LAYER);
camera.position.set(9, 7.2, 17);
camera.lookAt(7.4, 1.7, 5.4);
const atlas = loadAtlas('classic', true);
const blocks = new Map<string, number>();
const set = (x: number, y: number, z: number, id: number) => blocks.set(`${x},${y},${z}`, id);
for (let x = 0; x < 16; x++) for (let z = 0; z < 16; z++) set(x, 0, z, 3);
for (const [x, id] of [
  [3, 10],
  [7, 44],
  [11, 31],
])
  for (let dx = -1; dx <= 1; dx++)
    for (let dy = 0; dy < 3; dy++) for (let dz = -1; dz <= 1; dz++) set(x + dx, 1 + dy, 3 + dz, id);
const get = (x: number, y: number, z: number) => blocks.get(`${x},${y},${z}`) ?? 0;
const world = {
  seed: 0,
  generator: 'legacy',
  minY: 0,
  maxY: 16,
  height: 16,
  seaWaterY: 0,
  peek: () => undefined,
};
const chunks = new ChunkMeshManager(scene, world as never, atlas, 'classic');
const overlays: CrackOverlay[] = [];
const leafCrack = new CrackOverlay(scene, atlas);
leafCrack.show(3, 2, 4, 0.7, 10);
for (let i = 0; i < 10; i++) {
  set(i + 2, 1, 7, 1);
  const c = new CrackOverlay(scene);
  c.show(i + 2, 1, 7, i / 10 + 1e-6);
  overlays.push(c);
}
let id = 1,
  ps: Particle[] = [],
  frozen = false,
  hit = false,
  cycle = 0;
const x = 7,
  y = 1,
  z = 10;
set(x, y, z, id);
const rebuild = () =>
  chunks['applyMesh'](
    0,
    0,
    meshChunkData(0, 0, get, () => 0, 0, 16, defaultLeafTint),
  );
rebuild();
const particleRenderer = new ParticleRenderer(scene, atlas);
const selected = document.querySelector<HTMLSelectElement>('#block')!;
const status = document.querySelector('#status')!;
const report = () =>
  (status.textContent = `${ps.length} 片碎屑 · ${frozen ? '已暂停' : '播放中'} · 后排为 1—10 级裂纹`);
selected.onchange = () => {
  id = Number(selected.value);
  set(x, y, z, id);
  ps = [];
  hit = false;
  rebuild();
  report();
};
document.querySelector<HTMLButtonElement>('#break')!.onclick = () => {
  hit = false;
  ps = spawnBlockBreak(x, y, z, id, defaultLeafTint(id));
  if (![10, 31, 44].includes(id)) for (const p of ps) p.tint = [1, 1, 1];
  set(x, y, z, 0);
  rebuild();
  stepParticles(ps, 0.1, { isSolid: (x, y, z) => get(x, y, z) !== 0 });
  frozen = true;
  report();
};
document.querySelector<HTMLButtonElement>('#hit')!.onclick = () => {
  set(x, y, z, id);
  rebuild();
  hit = true;
  frozen = false;
  ps = [];
  report();
};
document.querySelector<HTMLButtonElement>('#freeze')!.onclick = () => {
  frozen = !frozen;
  report();
};
let before = performance.now();
function frame(now: number) {
  const dt = Math.min(0.05, (now - before) / 1000);
  before = now;
  if (!frozen) {
    ps = stepParticles(ps, dt, { isSolid: (x, y, z) => get(x, y, z) !== 0 });
    if (hit && (cycle += dt) > 0.05) {
      cycle = 0;
      ps.push(spawnBlockHit({ x, y, z, nx: 0, ny: 0, nz: 1 }, id, [1, 1, 1]));
    }
    report();
  }
  particleRenderer.sync(ps);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
function resize() {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();
