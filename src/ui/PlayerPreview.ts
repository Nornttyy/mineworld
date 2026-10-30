import * as THREE from 'three';
import { asset } from '../asset';

export const PLAYER_PREVIEW_SIZE = { width: 51, height: 72 } as const;

/** Standard 64×64 player skin, with +Y up and +Z facing the viewer. */
export function playerSkinBox(
  width: number,
  height: number,
  depth: number,
  u: number,
  v: number,
  inflate = 0,
): THREE.BufferGeometry {
  const w = (width + inflate * 2) / 16;
  const h = (height + inflate * 2) / 16;
  const d = (depth + inflate * 2) / 16;
  const g = new THREE.BoxGeometry(w, h, d);
  const positions = g.getAttribute('position');
  const normals = g.getAttribute('normal');
  const uv = g.getAttribute('uv');
  const colors: number[] = [];
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i) / w + 0.5;
    const y = positions.getY(i) / h + 0.5;
    const z = positions.getZ(i) / d + 0.5;
    const nx = normals.getX(i),
      ny = normals.getY(i),
      nz = normals.getZ(i);
    let px: number, py: number, shade: number;
    // Java model space is Y-down/Z-back. Convert its cube UVs with the geometry,
    // rather than only flipping the finished image (which swaps limb faces).
    if (nx > 0.5) {
      px = u + depth + width + (1 - z) * depth;
      py = v + depth + (1 - y) * height;
      shade = 0.8;
    } else if (nx < -0.5) {
      px = u + z * depth;
      py = v + depth + (1 - y) * height;
      shade = 0.8;
    } else if (ny > 0.5) {
      px = u + depth + x * width;
      py = v + z * depth;
      shade = 1;
    } else if (ny < -0.5) {
      px = u + depth + width + x * width;
      py = v + (1 - z) * depth;
      shade = 0.55;
    } else if (nz > 0.5) {
      px = u + depth + x * width;
      py = v + depth + (1 - y) * height;
      shade = 0.9;
    } else {
      px = u + depth * 2 + width + (1 - x) * width;
      py = v + depth + (1 - y) * height;
      shade = 0.75;
    }
    uv.setXY(i, px / 64, 1 - py / 64);
    colors.push(shade, shade, shade);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  return g;
}

export interface PlayerPreviewModel {
  root: THREE.Group;
  head: THREE.Group;
  dispose(): void;
}

/** Wide Steve dimensions/UV islands checked against 26.3 HumanoidModel/PlayerModel.
 * Geometry is rebuilt here; lighting and cursor-following are this preview's adaptation. */
export function createPlayerPreviewModel(skin: THREE.Texture): PlayerPreviewModel {
  const root = new THREE.Group();
  root.name = 'inventory-steve';
  const base = new THREE.MeshBasicMaterial({ map: skin, vertexColors: true });
  const outer = new THREE.MeshBasicMaterial({ map: skin, vertexColors: true, alphaTest: 0.5 });
  const geometries: THREE.BufferGeometry[] = [];
  const box = (
    parent: THREE.Group,
    name: string,
    size: readonly [number, number, number],
    center: readonly [number, number, number],
    uv: readonly [number, number],
    inflate = 0,
  ): void => {
    const g = playerSkinBox(...size, ...uv, inflate);
    geometries.push(g);
    const mesh = new THREE.Mesh(g, inflate ? outer : base);
    mesh.name = name;
    mesh.position.set(center[0] / 16, center[1] / 16, center[2] / 16);
    parent.add(mesh);
  };
  const head = new THREE.Group();
  head.name = 'head-pivot';
  head.position.y = 24 / 16;
  root.add(head);
  box(head, 'head', [8, 8, 8], [0, 4, 0], [0, 0]);
  box(head, 'hat', [8, 8, 8], [0, 4, 0], [32, 0], 0.5);
  box(root, 'body', [8, 12, 4], [0, 18, 0], [16, 16]);
  box(root, 'jacket', [8, 12, 4], [0, 18, 0], [16, 32], 0.25);
  box(root, 'right-arm', [4, 12, 4], [-6, 18, 0], [40, 16]);
  box(root, 'right-sleeve', [4, 12, 4], [-6, 18, 0], [40, 32], 0.25);
  box(root, 'left-arm', [4, 12, 4], [6, 18, 0], [32, 48]);
  box(root, 'left-sleeve', [4, 12, 4], [6, 18, 0], [48, 48], 0.25);
  box(root, 'right-leg', [4, 12, 4], [-1.9, 6, 0], [0, 16]);
  box(root, 'right-pants', [4, 12, 4], [-1.9, 6, 0], [0, 32], 0.25);
  box(root, 'left-leg', [4, 12, 4], [1.9, 6, 0], [16, 48]);
  box(root, 'left-pants', [4, 12, 4], [1.9, 6, 0], [0, 48], 0.25);
  return {
    root,
    head,
    dispose: () => {
      for (const g of geometries) g.dispose();
      base.dispose();
      outer.dispose();
    },
  };
}

type PreviewRenderer = Pick<
  THREE.WebGLRenderer,
  | 'domElement'
  | 'outputColorSpace'
  | 'setClearColor'
  | 'setSize'
  | 'setPixelRatio'
  | 'render'
  | 'dispose'
  | 'forceContextLoss'
>;

export interface PlayerPreviewRuntime {
  createRenderer(): PreviewRenderer;
  loadSkin(onLoad: () => void): THREE.Texture;
  requestFrame(callback: FrameRequestCallback): number;
  cancelFrame(id: number): void;
}

/** One lazily allocated context per inventory; hidden previews have no RAF/listeners. */
export class PlayerPreview {
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.OrthographicCamera(-0.85, 0.85, 2.25, -0.15, 0.1, 10);
  private readonly runtime: PlayerPreviewRuntime;
  private renderer: PreviewRenderer | null = null;
  private model: PlayerPreviewModel | null = null;
  private skin: THREE.Texture | null = null;
  private visible = false;
  private disposed = false;
  private frame = 0;
  private readonly onResize = (): void => this.invalidate();
  private readonly onPointerMove = (event: PointerEvent): void => {
    if (!this.visible || !this.model) return;
    const rect = this.host.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = Math.atan((event.clientX - rect.left - rect.width / 2) / rect.width);
    const y = Math.atan((event.clientY - rect.top - rect.height * 0.22) / rect.height);
    this.model.root.rotation.y = x * 0.35;
    this.model.head.rotation.y = x * 0.4;
    this.model.head.rotation.x = y * 0.35;
    this.invalidate();
  };

  constructor(
    private readonly host: HTMLElement,
    runtime: Partial<PlayerPreviewRuntime> = {},
  ) {
    this.runtime = {
      createRenderer: () =>
        new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' }),
      loadSkin: (ready) =>
        new THREE.TextureLoader().load(asset('textures/player/steve.png'), ready),
      requestFrame: (callback) => requestAnimationFrame(callback),
      cancelFrame: (id) => cancelAnimationFrame(id),
      ...runtime,
    };
    this.camera.position.set(0, 0, 5);
    host.style.width = `${PLAYER_PREVIEW_SIZE.width}px`;
    host.style.height = `${PLAYER_PREVIEW_SIZE.height}px`;
    host.setAttribute('aria-label', 'Steve 角色预览');
    host.removeAttribute('title');
  }

  private initialize(): boolean {
    if (this.renderer) return true;
    try {
      this.renderer = this.runtime.createRenderer();
    } catch {
      this.host.setAttribute('aria-label', '角色预览不可用');
      return false;
    }
    const canvas = this.renderer.domElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.imageRendering = 'pixelated';
    canvas.setAttribute('aria-hidden', 'true');
    this.host.appendChild(canvas);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setClearColor(0, 0);
    this.skin = this.runtime.loadSkin(() => {
      if (this.disposed) this.skin?.dispose();
      else this.invalidate();
    });
    this.skin.magFilter = THREE.NearestFilter;
    this.skin.minFilter = THREE.NearestFilter;
    this.skin.colorSpace = THREE.SRGBColorSpace;
    this.skin.generateMipmaps = false;
    this.model = createPlayerPreviewModel(this.skin);
    this.scene.add(this.model.root);
    return true;
  }

  setVisible(visible: boolean): void {
    if (this.disposed || this.visible === visible) return;
    this.visible = visible;
    if (visible && this.initialize()) {
      this.host.ownerDocument.addEventListener('pointermove', this.onPointerMove);
      this.host.ownerDocument.defaultView?.addEventListener('resize', this.onResize);
      this.invalidate();
    } else {
      this.host.ownerDocument.removeEventListener('pointermove', this.onPointerMove);
      this.host.ownerDocument.defaultView?.removeEventListener('resize', this.onResize);
      if (this.frame) this.runtime.cancelFrame(this.frame);
      this.frame = 0;
    }
  }

  /** Render only when shown, resized, loaded, or moved; no permanent animation loop. */
  private invalidate(): void {
    if (!this.visible || this.disposed || this.frame || !this.renderer) return;
    this.frame = this.runtime.requestFrame(() => {
      this.frame = 0;
      if (!this.visible || this.disposed || !this.renderer) return;
      const rect = this.host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      this.renderer.setPixelRatio(
        Math.min(this.host.ownerDocument.defaultView?.devicePixelRatio || 1, 2),
      );
      this.renderer.setSize(Math.round(rect.width), Math.round(rect.height), false);
      this.renderer.render(this.scene, this.camera);
    });
  }

  dispose(): void {
    if (this.disposed) return;
    this.setVisible(false);
    this.disposed = true;
    this.model?.dispose();
    this.skin?.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer?.domElement.remove();
    this.scene.clear();
  }
}
