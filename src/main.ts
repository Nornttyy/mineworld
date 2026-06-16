import * as THREE from 'three';
import { Renderer } from './render/Renderer';

// Task 1：先渲染一个测试立方体，验证 Vite + Three 管线能跑通。
const canvas = document.getElementById('app') as HTMLCanvasElement;
const renderer = new Renderer(canvas);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x88aa55 }),
);
renderer.scene.add(cube);
renderer.camera.position.set(2, 2, 3);
renderer.camera.lookAt(0, 0, 0);

function loop(): void {
  requestAnimationFrame(loop);
  cube.rotation.y += 0.01;
  renderer.render();
}
loop();
