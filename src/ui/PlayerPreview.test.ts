import * as THREE from 'three';
import { describe, expect, it, vi } from 'vitest';
import {
  createPlayerPreviewModel,
  PlayerPreview,
  type PlayerPreviewRuntime,
} from './PlayerPreview';
import { InventoryUI } from './inventoryUI';
import { emptyInventory } from '../core/inventory/inventory';

describe('Steve inventory model', () => {
  it('uses standard wide limbs, separate left-side UVs and six clothing overlays', () => {
    const skin = new THREE.Texture();
    const model = createPlayerPreviewModel(skin);
    model.root.updateMatrixWorld(true);
    const boxes: THREE.Mesh[] = [];
    model.root.traverse((object) => {
      if (object instanceof THREE.Mesh) boxes.push(object);
    });
    expect(boxes).toHaveLength(12);
    const bounds = new THREE.Box3().setFromObject(model.root);
    expect(bounds.max.y).toBeCloseTo(32.5 / 16);
    expect(bounds.min.y).toBeCloseTo(-0.25 / 16);
    for (const [name, width, height] of [
      ['head', 8, 8],
      ['body', 8, 12],
      ['right-arm', 4, 12],
      ['left-leg', 4, 12],
    ] as const) {
      const mesh = model.root.getObjectByName(name) as THREE.Mesh;
      const size = new THREE.Box3().setFromObject(mesh).getSize(new THREE.Vector3());
      expect(size.x).toBeCloseTo(width / 16);
      expect(size.y).toBeCloseTo(height / 16);
    }
    // Front-view rays must hit each actual anatomical part's front skin island.
    for (const [name, u, v] of [
      ['head', 12, 12],
      ['body', 24, 26],
      ['right-arm', 46, 26],
      ['left-arm', 38, 58],
      ['right-leg', 6, 26],
      ['left-leg', 22, 58],
    ] as const) {
      const mesh = model.root.getObjectByName(name) as THREE.Mesh;
      const center = mesh.getWorldPosition(new THREE.Vector3());
      const ray = new THREE.Raycaster(
        center.clone().add(new THREE.Vector3(0, 0, 2)),
        new THREE.Vector3(0, 0, -1),
      );
      const hit = ray.intersectObject(mesh, false)[0];
      expect(hit.uv!.x * 64).toBeCloseTo(u);
      expect((1 - hit.uv!.y) * 64).toBeCloseTo(v);
      expect((mesh.material as THREE.MeshBasicMaterial).map).toBe(skin);
    }
    const sleeve = model.root.getObjectByName('right-sleeve') as THREE.Mesh;
    expect(new THREE.Box3().setFromObject(sleeve).getSize(new THREE.Vector3()).x).toBeCloseTo(
      4.5 / 16,
    );
    expect((sleeve.material as THREE.MeshBasicMaterial).alphaTest).toBe(0.5);
    model.dispose();
  });

  it('does not mirror the face or put the hair underneath the chin', () => {
    const model = createPlayerPreviewModel(new THREE.Texture());
    model.root.updateMatrixWorld(true);
    const head = model.root.getObjectByName('head') as THREE.Mesh;
    const ray = new THREE.Raycaster(
      new THREE.Vector3(-2 / 16, 29 / 16, 2),
      new THREE.Vector3(0, 0, -1),
    );
    const hit = ray.intersectObject(head, false)[0];
    expect(hit.uv!.x * 64).toBeCloseTo(10);
    expect((1 - hit.uv!.y) * 64).toBeCloseTo(11);
    expect(hit.face!.normal.z).toBe(1);
    model.dispose();
  });
});

function harness() {
  const pointerHandlers = new Map<string, (event: PointerEvent) => void>();
  const windowHandlers = new Map<string, () => void>();
  const document = {
    addEventListener: vi.fn((type: string, callback: (event: PointerEvent) => void) =>
      pointerHandlers.set(type, callback),
    ),
    removeEventListener: vi.fn((type: string) => pointerHandlers.delete(type)),
    defaultView: {
      devicePixelRatio: 1.5,
      addEventListener: vi.fn((type: string, callback: () => void) =>
        windowHandlers.set(type, callback),
      ),
      removeEventListener: vi.fn((type: string) => windowHandlers.delete(type)),
    },
  };
  const host = {
    ownerDocument: document,
    style: {},
    setAttribute: vi.fn(),
    removeAttribute: vi.fn(),
    appendChild: vi.fn(),
    getBoundingClientRect: () => ({ left: 100, top: 80, width: 102, height: 144 }),
  } as unknown as HTMLElement;
  const canvas = {
    style: {},
    setAttribute: vi.fn(),
    remove: vi.fn(),
  } as unknown as HTMLCanvasElement;
  const renderer = {
    domElement: canvas,
    outputColorSpace: THREE.SRGBColorSpace as THREE.ColorSpace,
    setClearColor: vi.fn(),
    setSize: vi.fn(),
    setPixelRatio: vi.fn(),
    render: vi.fn(),
    dispose: vi.fn(),
    forceContextLoss: vi.fn(),
  };
  const pending = new Map<number, FrameRequestCallback>();
  let sequence = 0;
  const skin = new THREE.Texture();
  let loaded = () => {};
  const runtime: PlayerPreviewRuntime = {
    createRenderer: vi.fn(() => renderer),
    loadSkin: (ready) => {
      loaded = ready;
      return skin;
    },
    requestFrame: vi.fn((callback) => {
      pending.set(++sequence, callback);
      return sequence;
    }),
    cancelFrame: vi.fn((id) => {
      pending.delete(id);
    }),
  };
  const preview = new PlayerPreview(host, runtime);
  const flush = () => {
    const frames = [...pending.values()];
    pending.clear();
    frames.forEach((callback) => callback(0));
  };
  return {
    preview,
    host,
    renderer,
    skin,
    runtime,
    pending,
    pointerHandlers,
    windowHandlers,
    loaded: () => loaded(),
    flush,
  };
}

describe('PlayerPreview rendering lifecycle', () => {
  it('allocates only on opening, follows GUI scale, stops on close and reuses one context', () => {
    const h = harness();
    expect(h.runtime.createRenderer).not.toHaveBeenCalled();
    expect(h.host.style.width).toBe('51px');
    expect(h.host.style.height).toBe('72px');
    h.preview.setVisible(true);
    h.preview.setVisible(true);
    expect(h.runtime.createRenderer).toHaveBeenCalledOnce();
    h.flush();
    expect(h.renderer.setSize).toHaveBeenLastCalledWith(102, 144, false);
    expect(h.renderer.setPixelRatio).toHaveBeenLastCalledWith(1.5);
    expect(h.renderer.render).toHaveBeenCalledOnce();
    expect(h.pending.size).toBe(0); // no recurring animation loop
    h.windowHandlers.get('resize')!();
    expect(h.pending.size).toBe(1);
    h.preview.setVisible(false);
    expect(h.pending.size).toBe(0);
    expect(h.pointerHandlers.size).toBe(0);
    expect(h.windowHandlers.size).toBe(0);
    h.loaded();
    expect(h.pending.size).toBe(0); // late image loading cannot wake a closed panel
    h.preview.setVisible(true);
    h.flush();
    expect(h.runtime.createRenderer).toHaveBeenCalledOnce();
    expect(h.renderer.render).toHaveBeenCalledTimes(2);
    const skinDispose = vi.spyOn(h.skin, 'dispose');
    h.preview.dispose();
    h.preview.dispose();
    expect(h.renderer.dispose).toHaveBeenCalledOnce();
    expect(h.renderer.forceContextLoss).toHaveBeenCalledOnce();
    expect(skinDispose).toHaveBeenCalledOnce();
    expect(h.renderer.domElement.remove).toHaveBeenCalledOnce();
    h.preview.setVisible(true);
    expect(h.runtime.createRenderer).toHaveBeenCalledOnce();
  });

  it('turns the actual head toward the pointer and coalesces events into one frame', () => {
    const h = harness();
    h.preview.setVisible(true);
    h.flush();
    const scene = h.renderer.render.mock.calls[0][0] as THREE.Scene;
    const root = scene.getObjectByName('inventory-steve')!;
    const head = scene.getObjectByName('head-pivot')!;
    const move = h.pointerHandlers.get('pointermove')!;
    for (let i = 0; i < 10; i++) move({ clientX: 300, clientY: 200 } as PointerEvent);
    expect(h.pending.size).toBe(1);
    expect(root.rotation.y).toBeGreaterThan(0);
    expect(head.rotation.y).toBeGreaterThan(0);
    expect(head.rotation.x).toBeGreaterThan(0);
    expect(Math.abs(head.rotation.y)).toBeLessThan(Math.PI / 4);
    h.preview.dispose();
  });
});

describe('InventoryUI preview visibility', () => {
  it('shows the preview only for personal survival inventory, not workbench or creative', () => {
    const element = () => ({
      textContent: '',
      innerHTML: '',
      classList: { add: vi.fn(), remove: vi.fn() },
      setAttribute: vi.fn(),
    });
    const playerPreview = { setVisible: vi.fn(), dispose: vi.fn() };
    const ui = Object.create(InventoryUI.prototype) as InventoryUI;
    Object.assign(ui, {
      root: { ...element(), dataset: {}, querySelector: () => element() },
      playerPreview,
      titleEl: element(),
      standardEl: element(),
      creativeEl: element(),
      hintEl: element(),
      cgridEl: element(),
      cursorEl: { style: {} },
      buildCraftGrid: vi.fn(),
      positionPanel: vi.fn(),
      trackViewport: vi.fn(),
      untrackViewport: vi.fn(),
      render: vi.fn(),
      rebuildCreativeCatalog: vi.fn(),
    });
    const inv = emptyInventory();
    ui.show(inv, 2);
    expect(playerPreview.setVisible).toHaveBeenLastCalledWith(true);
    ui.show(inv, 3);
    expect(playerPreview.setVisible).toHaveBeenLastCalledWith(false);
    ui.showCreative(inv);
    expect(playerPreview.setVisible).toHaveBeenLastCalledWith(false);
    ui.hide();
    expect(playerPreview.setVisible).toHaveBeenLastCalledWith(false);
    ui.disposePlayerPreview();
    expect(playerPreview.dispose).toHaveBeenCalledOnce();
  });
});
