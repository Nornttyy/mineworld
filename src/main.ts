import { Renderer } from './render/Renderer';
import { demoChunk } from './core/world/demoChunk';
import { meshSection } from './core/mesh/mesher';
import { loadAtlas } from './render/atlas';
import { buildChunkMesh } from './render/ChunkRenderer';

// Task 6：渲染写死地形（demoChunk → 网格化 → BufferGeometry）。
const canvas = document.getElementById('app') as HTMLCanvasElement;
const renderer = new Renderer(canvas);

renderer.scene.add(buildChunkMesh(meshSection(demoChunk()), loadAtlas()));

// 相机放到地形一角俯视，先静态看效果（移动在 Task 8 接入）。
renderer.camera.position.set(26, 20, 26);
renderer.camera.lookAt(8, 8, 8);

function loop(): void {
  requestAnimationFrame(loop);
  renderer.render();
}
loop();
