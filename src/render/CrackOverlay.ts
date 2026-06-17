import * as THREE from 'three';

const STAGES = 10;

/** 挖掘裂纹覆盖层：在目标方块上叠一层裂纹贴图，按破坏进度(0..1)切换 10 段。 */
export class CrackOverlay {
  private readonly mesh: THREE.Mesh;
  private readonly tex: THREE.Texture;

  constructor(scene: THREE.Scene) {
    this.tex = new THREE.TextureLoader().load(import.meta.env.BASE_URL + 'textures/crack.png');
    this.tex.magFilter = THREE.NearestFilter;
    this.tex.minFilter = THREE.NearestFilter;
    this.tex.generateMipmaps = false;
    this.tex.colorSpace = THREE.SRGBColorSpace;
    this.tex.wrapS = THREE.RepeatWrapping;
    this.tex.repeat.set(1 / STAGES, 1); // 一次只显示一段(16px)

    const mat = new THREE.MeshBasicMaterial({
      map: this.tex,
      transparent: true,
      depthWrite: false,
      polygonOffset: true, // 拉向相机，避免与方块面 z-fighting
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    this.mesh = new THREE.Mesh(new THREE.BoxGeometry(1.002, 1.002, 1.002), mat);
    this.mesh.renderOrder = 2;
    this.mesh.visible = false;
    scene.add(this.mesh);
  }

  show(x: number, y: number, z: number, progress: number): void {
    const stage = Math.max(0, Math.min(STAGES - 1, Math.floor(progress * STAGES)));
    this.tex.offset.x = stage / STAGES;
    this.mesh.position.set(x + 0.5, y + 0.5, z + 0.5);
    this.mesh.visible = true;
  }

  hide(): void {
    this.mesh.visible = false;
  }
}
