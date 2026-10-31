import { architectureGeometry } from './architectureGeometry';
import { architectureModel } from '../core/blocks/architecture';
import * as THREE from 'three';
import { asset } from '../asset';
import { loadAtlas } from './atlas';
import { blockFaceTile, isCutoutId, Face } from '../core/blocks/registry';
import { ATLAS_COLUMNS, ATLAS_ROWS } from '../core/blocks/atlasLayout';
import { CAMERA_AUX_RENDER_LAYER } from './renderLayers';

export const CRACK_STAGES = 10;
const STAGES = CRACK_STAGES;
export const crackStage = (progress: number): number =>
  progress <= 0 ? -1 : Math.min(9, Math.floor(progress * 10));

/** 挖掘裂纹覆盖层：在目标方块上叠一层裂纹贴图，按破坏进度(0..1)切换 10 段。 */
export class CrackOverlay {
  private lastId=-1;
  private readonly modelMask={value:0};
  private readonly cube:THREE.BufferGeometry;
  private readonly mesh: THREE.Mesh;
  private readonly tex: THREE.Texture;

  private readonly maskTile = { value: -1 };
  private readonly maskAtlas: { value: THREE.Texture };

  constructor(scene: THREE.Scene, atlas = loadAtlas('classic', true)) {
    this.maskAtlas = { value: atlas };
    this.tex = new THREE.TextureLoader().load(asset('textures/crack.png'));
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
      blending: THREE.CustomBlending,
      blendSrc: THREE.DstColorFactor,
      blendDst: THREE.SrcColorFactor,
      blendSrcAlpha: THREE.OneFactor,
      blendDstAlpha: THREE.ZeroFactor,
      alphaTest: 0.1,
      side: THREE.DoubleSide,
      toneMapped: false,
      polygonOffset: true, // 拉向相机，避免与方块面 z-fighting
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uBlockMask = this.maskAtlas;
      shader.uniforms.uMaskTile = this.maskTile;
      shader.uniforms.uModelMask = this.modelMask;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec2 vBlockUv;\nattribute vec2 aMaskUv;\nvarying vec2 vMaskUv;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBlockUv = uv; vMaskUv = aMaskUv;');
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nvarying vec2 vBlockUv;\nuniform sampler2D uBlockMask;\nuniform float uMaskTile;\nuniform float uModelMask;\nvarying vec2 vMaskUv;',
        )
        .replace(
          '#include <alphatest_fragment>',
          `#include <alphatest_fragment>
          if(uModelMask>0.5 && texture2D(uBlockMask,vMaskUv).a < 0.1) discard;
          if (uModelMask<0.5 && uMaskTile >= 0.0) {
            vec2 tileUv = clamp(vBlockUv, vec2(0.03125), vec2(0.96875));
            vec2 maskUv = (vec2(mod(uMaskTile, ${ATLAS_COLUMNS}.0), ${ATLAS_ROWS - 1}.0-floor(uMaskTile/${ATLAS_COLUMNS}.0)) + tileUv) / vec2(${ATLAS_COLUMNS}.0, ${ATLAS_ROWS}.0);
            if (texture2D(uBlockMask, maskUv).a < 0.5) discard;
          }`,
        );
    };
    mat.customProgramCacheKey = () => 'java-destroy-masked-v2';
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const position = geometry.getAttribute('position');
    const normal = geometry.getAttribute('normal');
    const uv = geometry.getAttribute('uv');
    // Match the terrain mesher's face UVs, including the alpha mask on each leaf face.
    for (let i = 0; i < position.count; i++) {
      uv.setXY(
        i,
        (Math.abs(normal.getX(i)) > 0.5 ? position.getZ(i) : position.getX(i)) + 0.5,
        (Math.abs(normal.getY(i)) > 0.5 ? position.getZ(i) : position.getY(i)) + 0.5,
      );
    }
    geometry.setAttribute('aMaskUv',new THREE.Float32BufferAttribute(new Float32Array(position.count*2),2));
    this.cube=geometry;
    this.mesh = new THREE.Mesh(geometry, mat);
    this.mesh.layers.set(CAMERA_AUX_RENDER_LAYER);
    this.mesh.renderOrder = 2;
    this.mesh.visible = false;
    scene.add(this.mesh);
  }

  show(x: number, y: number, z: number, progress: number, id = 1): void {
    const stage = crackStage(progress);
    if (stage < 0) {
      this.hide();
      return;
    }
    if(this.lastId!==id){
      if(this.mesh.geometry!==this.cube)this.mesh.geometry.dispose();
      const model=architectureModel(id),geometry=architectureGeometry(id,1);
      this.mesh.geometry=geometry??this.cube;this.modelMask.value=geometry?1:0;
      if(geometry&&model){
        geometry.setAttribute('aMaskUv',geometry.getAttribute('uv').clone());
        geometry.setAttribute('uv',new THREE.Float32BufferAttribute(model.quads.flatMap(q=>q.uv.flatMap(([u,v])=>[u,1-v])),2));
      }
      this.lastId=id;
    }
    this.maskTile.value = isCutoutId(id) ? blockFaceTile(id, Face.PosZ) : -1;
    this.tex.offset.x = stage / STAGES;
    this.mesh.position.set(x + 0.5, y + 0.5, z + 0.5);
    this.mesh.visible = true;
  }

  setAtlas(atlas: THREE.Texture): void {
    this.maskAtlas.value = atlas;
  }

  hide(): void {
    this.mesh.visible = false;
  }
}
