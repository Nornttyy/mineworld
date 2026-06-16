# 阶段 1 实现计划（渲染区块 + 第一人称移动）

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans. Steps use `- [ ]`.

**Goal:** 做出第一个可打开、可第一人称走动看方块的版本：`npm run dev` → localhost:5173。

**Architecture:** core 纯逻辑（坐标/区块/方块/面剔除网格化/物理）Vitest 可测；render 用 Three.js（无光照 MeshBasic + 烤进顶点色的 MC 面亮度 + 图集）Playwright 截图验证；20 TPS 固定步长 + 插值。

**Tech Stack:** TypeScript strict、Three.js、Vite、Vitest、Playwright（MCP 截图）。

**依据 spec：** `docs/superpowers/specs/2026-06-16-phase1-render-and-move-design.md`
**分支：** `feature/phase1-render-move`。提交信息结尾加 `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`。

---

## 关键常量（多处引用，先固定）

```ts
// 图集布局：4 列 × 4 行，每格 16px
ATLAS_COLS = 4; ATLAS_ROWS = 4;
// 面方向枚举顺序: 0=+X 1=-X 2=+Y(上) 3=-Y(下) 4=+Z 5=-Z
// MC 面亮度（烤进顶点色 rgb 同值）: +Y=1.0, -Y=0.5, ±Z=0.8, ±X=0.6
FACE_SHADE = [0.6, 0.6, 1.0, 0.5, 0.8, 0.8];
// 物理(每 tick): GRAVITY=0.08, VDRAG=0.98, JUMP=0.42
// 玩家: WIDTH=0.6, HEIGHT=1.8, EYE=1.62; WALK=4.317 b/s; TPS=20; FOV=70
```

---

## Task 1: Vite 应用骨架（空场景能打开）

**Files:** Create `index.html`, `src/main.ts`, `src/render/Renderer.ts`; Modify `package.json`, `vite.config.ts`（合并 vitest 配置）, 删 `vitest.config.ts`

- [ ] **Step 1: 装依赖** — `npm install -D vite@5.2.0 @vitejs/plugin-... ` 不需要；`npm install three@0.165.0 && npm install -D vite@5.2.0`
- [ ] **Step 2: `vite.config.ts`**（含 test 字段，替代 vitest.config.ts）

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  test: { include: ['src/**/*.test.ts', 'tests/**/*.test.ts'] },
});
```
删除 `vitest.config.ts`（`rm vitest.config.ts`）。package.json scripts 加：`"dev": "vite"`, `"build": "vite build"`, `"preview": "vite preview"`。

- [ ] **Step 3: `index.html`** — canvas + “点击开始”遮罩

```html
<!doctype html>
<html lang="zh">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>MINEWORLD</title>
    <style>
      html, body { margin: 0; height: 100%; overflow: hidden; background: #87ceeb; }
      #overlay { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center;
        color: #fff; font: 600 24px sans-serif; background: rgba(0,0,0,.5); cursor: pointer; }
      #overlay.hidden { display: none; }
    </style>
  </head>
  <body>
    <canvas id="app"></canvas>
    <div id="overlay">点击开始（WASD 移动，鼠标看，空格跳）</div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 4: `src/render/Renderer.ts`**（场景/相机/天空/resize）

```ts
import * as THREE from 'three';

export class Renderer {
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  private readonly gl: THREE.WebGLRenderer;

  constructor(canvas: HTMLCanvasElement) {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false });
    this.gl.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.scene.background = new THREE.Color(0x87ceeb);
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
    this.resize();
    addEventListener('resize', () => this.resize());
  }
  resize() {
    const w = innerWidth, h = innerHeight;
    this.gl.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
  render() { this.gl.render(this.scene, this.camera); }
}
```

- [ ] **Step 5: `src/main.ts`**（先渲染一个测试立方体，验证管线）

```ts
import * as THREE from 'three';
import { Renderer } from './render/Renderer';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const renderer = new Renderer(canvas);
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x88aa55 }),
);
renderer.scene.add(cube);
renderer.camera.position.set(2, 2, 3);
renderer.camera.lookAt(0, 0, 0);
function loop() { requestAnimationFrame(loop); renderer.render(); }
loop();
```

- [ ] **Step 6: 截图验证** — 启 `npm run dev`，用 Playwright MCP 打开 `http://localhost:5173`，等 canvas，截图：应见天蓝背景 + 一个绿色立方体，控制台无 error。
- [ ] **Step 7: 提交** — `git add -A && git commit -m "feat(render): Vite+Three 骨架，渲染测试立方体"`

---

## Task 2: core/world 坐标与区块（TDD）

**Files:** Create `src/core/world/coords.ts`, `src/core/world/section.ts`, `src/core/world/coords.test.ts`, `src/core/world/section.test.ts`

- [ ] **Step 1: 失败测试 coords.test.ts**

```ts
import { describe, it, expect } from 'vitest';
import { worldToChunk, localCoord, idx } from './coords';

describe('coords', () => {
  it('worldToChunk uses floor-div (handles negatives)', () => {
    expect(worldToChunk(0)).toBe(0);
    expect(worldToChunk(15)).toBe(0);
    expect(worldToChunk(16)).toBe(1);
    expect(worldToChunk(-1)).toBe(-1);
  });
  it('localCoord wraps 0..15 (handles negatives)', () => {
    expect(localCoord(0)).toBe(0);
    expect(localCoord(-1)).toBe(15);
    expect(localCoord(16)).toBe(0);
  });
  it('idx is reversible within 0..15', () => {
    expect(idx(1, 2, 3)).toBe(1 | (3 << 4) | (2 << 8));
  });
});
```

- [ ] **Step 2: 跑测试确认失败** — `npx vitest run src/core/world/coords.test.ts` → FAIL
- [ ] **Step 3: 实现 coords.ts**

```ts
export const SECTION = 16;
export const worldToChunk = (w: number): number => w >> 4;
export const localCoord = (w: number): number => w & 15;
export const idx = (x: number, y: number, z: number): number => x | (z << 4) | (y << 8);
```

- [ ] **Step 4: 跑测试确认通过**
- [ ] **Step 5: 失败测试 section.test.ts**

```ts
import { describe, it, expect } from 'vitest';
import { Section } from './section';

describe('section', () => {
  it('defaults to air (0) and stores blocks', () => {
    const s = new Section();
    expect(s.get(1, 2, 3)).toBe(0);
    s.set(1, 2, 3, 5);
    expect(s.get(1, 2, 3)).toBe(5);
  });
});
```

- [ ] **Step 6: 确认失败 → 实现 section.ts**

```ts
import { idx } from './coords';

export class Section {
  readonly blocks = new Uint16Array(4096);
  get(x: number, y: number, z: number): number { return this.blocks[idx(x, y, z)]; }
  set(x: number, y: number, z: number, id: number): void { this.blocks[idx(x, y, z)] = id; }
}
```

- [ ] **Step 7: 确认通过 → 提交** — `feat(world): 坐标换算(防负坐标) + Section 区块数据`

---

## Task 3: core/blocks 注册表 + 图集资产（TDD + 资产生成）

**Files:** Create `src/core/blocks/registry.ts`, `src/core/blocks/registry.test.ts`; Modify `tools/textures/gen_textures.py`（输出 atlas.png）

- [ ] **Step 1: 扩展 `tools/textures/gen_textures.py`** — 在 `main()` 末尾追加：把 10 个块纹理按固定顺序拼成 `public/textures/atlas.png`（4×4，每格 16px，NEAREST，无插值），顺序：`[stone, dirt, grass_top, grass_side, cobblestone, sand, oak_log_top, oak_log_side, oak_planks, coal_ore]`，放格子 0..9。代码：

```python
    ATLAS_ORDER = ['stone','dirt','grass_top','grass_side','cobblestone',
                   'sand','oak_log_top','oak_log_side','oak_planks','coal_ore']
    atlas = Image.new('RGBA', (S*4, S*4), (0, 0, 0, 0))
    for i, name in enumerate(ATLAS_ORDER):
        atlas.paste(tex[name], ((i % 4) * S, (i // 4) * S))
    atlas.save(os.path.join(OUT, '..', 'atlas.png'))
    print('wrote atlas.png')
```
跑 `python3 tools/textures/gen_textures.py`，确认 `public/textures/atlas.png` 生成（64×64）。

- [ ] **Step 2: 失败测试 registry.test.ts**

```ts
import { describe, it, expect } from 'vitest';
import { BLOCKS, blockFaceTile, Face } from './registry';

describe('block registry', () => {
  it('air is non-solid, stone is solid', () => {
    expect(BLOCKS[0].solid).toBe(false);
    expect(BLOCKS[1].solid).toBe(true); // stone
  });
  it('grass uses different tiles per face', () => {
    const grass = BLOCKS.findIndex((b) => b.name === 'grass');
    expect(blockFaceTile(grass, Face.PosY)).not.toBe(blockFaceTile(grass, Face.NegY));
  });
});
```

- [ ] **Step 3: 确认失败 → 实现 registry.ts**（Face 枚举顺序同关键常量；tile 索引对应 atlas 格子）

```ts
export enum Face { PosX, NegX, PosY, NegY, PosZ, NegZ }

// atlas 格子索引
const T = { stone:0, dirt:1, grass_top:2, grass_side:3, cobblestone:4,
  sand:5, oak_log_top:6, oak_log_side:7, oak_planks:8, coal_ore:9 } as const;

export interface BlockDef {
  id: number; name: string; solid: boolean; transparent: boolean;
  faces: [number, number, number, number, number, number]; // +X,-X,+Y,-Y,+Z,-Z 的 tile
}
const all = (t: number): BlockDef['faces'] => [t, t, t, t, t, t];
const col = (side: number, top: number, bottom: number): BlockDef['faces'] =>
  [side, side, top, bottom, side, side];

export const BLOCKS: BlockDef[] = [
  { id: 0, name: 'air', solid: false, transparent: true, faces: all(0) },
  { id: 1, name: 'stone', solid: true, transparent: false, faces: all(T.stone) },
  { id: 2, name: 'dirt', solid: true, transparent: false, faces: all(T.dirt) },
  { id: 3, name: 'grass', solid: true, transparent: false, faces: col(T.grass_side, T.grass_top, T.dirt) },
  { id: 4, name: 'cobblestone', solid: true, transparent: false, faces: all(T.cobblestone) },
  { id: 5, name: 'sand', solid: true, transparent: false, faces: all(T.sand) },
  { id: 6, name: 'oak_log', solid: true, transparent: false, faces: col(T.oak_log_side, T.oak_log_top, T.oak_log_top) },
  { id: 7, name: 'oak_planks', solid: true, transparent: false, faces: all(T.oak_planks) },
  { id: 8, name: 'coal_ore', solid: true, transparent: false, faces: all(T.coal_ore) },
];

export const isSolidId = (id: number): boolean => BLOCKS[id]?.solid ?? false;
export const blockFaceTile = (id: number, face: Face): number => BLOCKS[id].faces[face];
```

- [ ] **Step 4: 确认通过 → 提交** — `feat(blocks): 方块注册表 + 图集资产 atlas.png`

---

## Task 4: core/mesh 面剔除网格化（TDD）

**Files:** Create `src/core/mesh/mesher.ts`, `src/core/mesh/mesher.test.ts`

- [ ] **Step 1: 失败测试** — 全空=0 面；孤立单块=24 顶点/36 索引/6 面；两相邻块接触面被剔除（少 2 面）；上面 color=1.0、下面 0.5。

```ts
import { describe, it, expect } from 'vitest';
import { Section } from '../world/section';
import { meshSection } from './mesher';

describe('mesher (face culling)', () => {
  it('empty section -> no geometry', () => {
    expect(meshSection(new Section()).indices.length).toBe(0);
  });
  it('single block -> 6 faces (24 verts, 36 indices)', () => {
    const s = new Section(); s.set(8, 8, 8, 1);
    const m = meshSection(s);
    expect(m.positions.length / 3).toBe(24);
    expect(m.indices.length).toBe(36);
  });
  it('two adjacent blocks -> shared faces culled (10 faces)', () => {
    const s = new Section(); s.set(8, 8, 8, 1); s.set(9, 8, 8, 1);
    expect(meshSection(s).indices.length).toBe(10 * 6);
  });
  it('top face brighter than bottom (baked MC shade)', () => {
    const s = new Section(); s.set(0, 0, 0, 1);
    const m = meshSection(s);
    // color 是逐顶点 rgb；最大值=1.0(顶) 最小=0.5(底)
    let mx = 0, mn = 1;
    for (const c of m.colors) { mx = Math.max(mx, c); mn = Math.min(mn, c); }
    expect(mx).toBeCloseTo(1.0); expect(mn).toBeCloseTo(0.5);
  });
});
```

- [ ] **Step 2: 确认失败 → 实现 mesher.ts**（6 面方向、邻格剔除、UV 含半像素内缩、烤面亮度色）。关键骨架：

```ts
import { Section } from '../world/section';
import { isSolidId, blockFaceTile, Face } from '../blocks/registry';

const ATLAS_COLS = 4, ATLAS_ROWS = 4;
const FACE_SHADE = [0.6, 0.6, 1.0, 0.5, 0.8, 0.8]; // 顺序同 Face 枚举
// 每个面的 4 个角(相对体素原点) + 法线 + 邻居偏移
const DIRS = [
  { n: [1,0,0],  o:[1,0,0], c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]] }, // +X
  { n: [-1,0,0], o:[-1,0,0],c:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]] }, // -X
  { n: [0,1,0],  o:[0,1,0], c:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]] }, // +Y
  { n: [0,-1,0], o:[0,-1,0],c:[[0,0,1],[0,0,0],[1,0,0],[1,0,1]] }, // -Y
  { n: [0,0,1],  o:[0,0,1], c:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]] }, // +Z
  { n: [0,0,-1], o:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]] }, // -Z
];

export interface MeshData {
  positions: Float32Array; normals: Float32Array; uvs: Float32Array;
  colors: Float32Array; indices: Uint32Array;
}

export function meshSection(sec: Section): MeshData {
  const P:number[]=[], N:number[]=[], U:number[]=[], C:number[]=[], I:number[]=[];
  const solidAt = (x:number,y:number,z:number) =>
    x<0||x>15||y<0||y>15||z<0||z>15 ? false : isSolidId(sec.get(x,y,z));
  for (let y=0;y<16;y++) for (let z=0;z<16;z++) for (let x=0;x<16;x++) {
    const id = sec.get(x,y,z); if (!isSolidId(id)) continue;
    for (let f=0; f<6; f++) {
      const d = DIRS[f];
      if (solidAt(x+d.o[0], y+d.o[1], z+d.o[2])) continue; // 邻格实心 → 剔除
      const tile = blockFaceTile(id, f as Face);
      const base = P.length/3;
      // UV 角(配合 c 的 4 角)：含半像素内缩
      const tx=(tile%ATLAS_COLS)/ATLAS_COLS, ty=Math.floor(tile/ATLAS_COLS)/ATLAS_ROWS;
      const eps=0.5/(16*ATLAS_COLS), uw=1/ATLAS_COLS-2*eps, vh=1/ATLAS_ROWS-2*eps;
      const uv=[[0,1],[0,0],[1,0],[1,1]];
      const sh=FACE_SHADE[f];
      for (let k=0;k<4;k++) {
        P.push(x+d.c[k][0], y+d.c[k][1], z+d.c[k][2]);
        N.push(d.n[0], d.n[1], d.n[2]);
        U.push(tx+eps+uv[k][0]*uw, ty+eps+uv[k][1]*vh);
        C.push(sh, sh, sh);
      }
      I.push(base, base+1, base+2, base, base+2, base+3);
    }
  }
  return { positions:new Float32Array(P), normals:new Float32Array(N),
    uvs:new Float32Array(U), colors:new Float32Array(C), indices:new Uint32Array(I) };
}
```

- [ ] **Step 3: 跑测试至通过**（如面数/索引对不上，核对 DIRS 与剔除逻辑）→ 提交 `feat(mesh): 面剔除网格化 + 烤MC面亮度`

---

## Task 5: core/world 写死地形 demoChunk（TDD）

**Files:** Create `src/core/world/demoChunk.ts`, `src/core/world/demoChunk.test.ts`

- [ ] **Step 1: 失败测试** — 顶层是草、其下是土、底层石头、含至少 1 个 coal_ore、含 oak_log。

```ts
import { describe, it, expect } from 'vitest';
import { demoChunk } from './demoChunk';

describe('demoChunk', () => {
  it('has grass on top of dirt on top of stone, plus ore and a log', () => {
    const s = demoChunk();
    const ids = new Set<number>();
    for (let i = 0; i < s.blocks.length; i++) ids.add(s.blocks[i]);
    expect(ids.has(3)).toBe(true); // grass
    expect(ids.has(2)).toBe(true); // dirt
    expect(ids.has(1)).toBe(true); // stone
    expect(ids.has(8)).toBe(true); // coal_ore
    expect(ids.has(6)).toBe(true); // oak_log
  });
});
```

- [ ] **Step 2: 确认失败 → 实现 demoChunk.ts**（确定性，地表约 y=8：石→土→草；散布煤矿；(8,9..11,8) 立一截橡木）

```ts
import { Section } from './section';

export function demoChunk(): Section {
  const s = new Section();
  const ground = 8;
  for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
    for (let y = 0; y <= ground; y++) {
      let id = 1; // stone
      if (y === ground) id = 3; // grass
      else if (y >= ground - 2) id = 2; // dirt
      else if ((x * 7 + y * 13 + z * 5) % 23 === 0) id = 8; // coal_ore 散布
      s.set(x, y, z, id);
    }
  }
  for (let y = ground + 1; y <= ground + 3; y++) s.set(8, y, 8, 6); // oak_log
  return s;
}
```

- [ ] **Step 3: 确认通过 → 提交** — `feat(world): 写死可站立地形 demoChunk`

---

## Task 6: 渲染 demoChunk（render 装配 + 截图）

**Files:** Create `src/render/atlas.ts`, `src/render/ChunkRenderer.ts`; Modify `src/main.ts`

- [ ] **Step 1: `src/render/atlas.ts`**

```ts
import * as THREE from 'three';

export function loadAtlas(): THREE.Texture {
  const tex = new THREE.TextureLoader().load('/textures/atlas.png');
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
```

- [ ] **Step 2: `src/render/ChunkRenderer.ts`**

```ts
import * as THREE from 'three';
import type { MeshData } from '../core/mesh/mesher';

export function buildChunkMesh(data: MeshData, atlas: THREE.Texture): THREE.Mesh {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(data.uvs, 2));
  g.setAttribute('color', new THREE.BufferAttribute(data.colors, 3));
  g.setIndex(new THREE.BufferAttribute(data.indices, 1));
  const mat = new THREE.MeshBasicMaterial({ map: atlas, vertexColors: true });
  return new THREE.Mesh(g, mat);
}
```

- [ ] **Step 3: 改 `src/main.ts`** — 用 demoChunk→meshSection→buildChunkMesh 替换测试立方体，相机放到地形上方俯视一角：

```ts
import { Renderer } from './render/Renderer';
import { demoChunk } from './core/world/demoChunk';
import { meshSection } from './core/mesh/mesher';
import { loadAtlas } from './render/atlas';
import { buildChunkMesh } from './render/ChunkRenderer';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const renderer = new Renderer(canvas);
renderer.scene.add(buildChunkMesh(meshSection(demoChunk()), loadAtlas()));
renderer.camera.position.set(24, 18, 24);
renderer.camera.lookAt(8, 8, 8);
function loop() { requestAnimationFrame(loop); renderer.render(); }
loop();
```

- [ ] **Step 4: 截图验证** — `npm run dev` → Playwright 截图：应见草顶土石的小地块 + 一截木桩 + 煤矿点，像素清晰，控制台无 error。
- [ ] **Step 5: 提交** — `feat(render): 图集 + 渲染 demoChunk`

---

## Task 7: core/physics 扫掠碰撞与移动（TDD）

**Files:** Create `src/core/physics/player.ts`, `src/core/physics/step.ts`, `src/core/physics/step.test.ts`

- [ ] **Step 1: `src/core/physics/player.ts`**

```ts
export interface Vec3 { x: number; y: number; z: number }
export interface Player { pos: Vec3; vel: Vec3; onGround: boolean }
export interface MoveIntent { forward: number; right: number; yaw: number; jump: boolean }
export interface VoxelWorld { isSolid(x: number, y: number, z: number): boolean }

export const WIDTH = 0.6, HEIGHT = 1.8, EYE = 1.62;
export const GRAVITY = 0.08, VDRAG = 0.98, JUMP = 0.42;
export const WALK_PER_TICK = 4.317 / 20; // ≈0.216 b/tick 目标水平速度
```

- [ ] **Step 2: 失败测试 step.test.ts**（FlatWorld：y<0 实心；自由落体落到 y=0 顶面 onGround；走进墙被钳；跳跃 vy=0.42；高速不穿墙）

```ts
import { describe, it, expect } from 'vitest';
import { step } from './step';
import type { Player, VoxelWorld, MoveIntent } from './player';

const floor: VoxelWorld = { isSolid: (_x, y) => y < 0 };
const idle: MoveIntent = { forward: 0, right: 0, yaw: 0, jump: false };
const fresh = (): Player => ({ pos: { x: 0.5, y: 5, z: 0.5 }, vel: { x: 0, y: 0, z: 0 }, onGround: false });

describe('physics step', () => {
  it('falls and lands on ground (y≈0)', () => {
    let p = fresh();
    for (let i = 0; i < 100; i++) p = step(p, idle, floor);
    expect(p.onGround).toBe(true);
    expect(p.pos.y).toBeCloseTo(0, 2);
    expect(p.vel.y).toBeCloseTo(0, 5);
  });
  it('jump sets upward velocity when on ground', () => {
    let p = fresh(); for (let i = 0; i < 100; i++) p = step(p, idle, floor); // 落地
    p = step(p, { ...idle, jump: true }, floor);
    expect(p.vel.y).toBeGreaterThan(0.3);
  });
  it('walking into a wall does not tunnel', () => {
    const wall: VoxelWorld = { isSolid: (x, y) => y < 0 || x >= 2 };
    let p: Player = { pos: { x: 0.5, y: 0, z: 0.5 }, vel: { x: 0, y: 0, z: 0 }, onGround: true };
    for (let i = 0; i < 60; i++) p = step(p, { forward: 1, right: 0, yaw: 0, jump: false }, wall);
    expect(p.pos.x).toBeLessThan(2); // 没穿过 x=2 的墙
  });
});
```

- [ ] **Step 3: 确认失败 → 实现 step.ts**（重力→水平意图→逐轴扫掠 AABB 钳制）。AABB-vs-体素扫掠：按 vel 逐轴移动，用整数范围扫描重叠实心格，碰撞则把该轴 pos 钳到接触面、该轴 vel 归零（Y 向下归零时 onGround=true）。`yaw` 把 forward/right 投到世界 x/z。完整实现见 spec §3，含：

```ts
// 伪：moveAxis(p, axis, world) 对单轴做扫掠钳制；step 依次 Y,X,Z。
// 水平：vx = (cos? ) 由 yaw 投影；趋近 WALK_PER_TICK；落地时跳跃置 vy=JUMP。
```
（实现者按测试驱动补全；务必逐轴解算、用 AABB 与体素整数范围求交，避免瞬移采样穿墙。）

- [ ] **Step 4: 跑测试至通过 → 提交** — `feat(physics): AABB 扫掠碰撞 + 重力/跳跃/行走(1:1)`

---

## Task 8: 输入 + 游戏循环（接上移动，截图）

**Files:** Create `src/input/PointerLookControls.ts`, `src/input/keyboard.ts`, `src/game/Game.ts`; Modify `src/main.ts`

- [ ] **Step 1: `src/input/keyboard.ts`** — 监听 keydown/up，导出 `getIntent(yaw): MoveIntent`（WASD→forward/right，Space→jump）。
- [ ] **Step 2: `src/input/PointerLookControls.ts`** — canvas 点击 `requestPointerLock`；`mousemove` 累加 yaw/pitch（pitch 夹 ±1.55rad）；隐藏遮罩。
- [ ] **Step 3: `src/game/Game.ts`** — 装配 demoChunk 渲染 + 累加器 20 TPS 跑 `step` + 帧渲染时把相机放到 `player.pos + EYE`（用上一/当前态插值），按 yaw/pitch 设相机朝向。
- [ ] **Step 4: 改 `src/main.ts`** — 改为 `new Game(canvas).start()`。
- [ ] **Step 5: 截图验证** — `npm run dev` → Playwright：截图见第一人称视角站在地形上（控制台无 error）。（移动/转视角的手感由用户在本机实玩验证。）
- [ ] **Step 6: 提交** — `feat(game): 指针锁定+WASD移动+固定步长循环`

---

## Task 9: 全量验证

- [ ] **Step 1:** `npm run typecheck` → exit 0
- [ ] **Step 2:** `npm run lint` → 干净（render 用 three 不违规；core 无 three/render import）
- [ ] **Step 3:** `npm test` → 全绿（coords/section/mesher/demoChunk/physics + 之前的 item/crafting）
- [ ] **Step 4:** Playwright 最终截图存档
- [ ] **Step 5:** `npm run format`（md 已 ignore）→ 若改动则 `git commit -m "chore(phase1): 通过全量质量门"`

---

## 自审（对照 spec）
- spec §3 core 各模块 → Task 2/3/4/5/7 ✅
- spec §3 面亮度烤色 + §5 无光照材质 → Task 4 + Task 6 ✅
- spec §3 物理扫掠/重力/跳跃 + §4 1:1 数值 → Task 7（落地/跳跃/不穿墙测试；行走速度常量 WALK_PER_TICK）✅
- spec §5 render → Task 1/6 ✅；§6 input+循环 → Task 8 ✅；§7 图集 → Task 3 ✅
- spec §8 测试：core Vitest（Task 2-7）+ render Playwright（Task 1/6/8/9）✅
- 占位符：Task 7 step.ts 实现以测试驱动补全（给了接口、常量、算法要求与伪代码）——执行时必须让 4 个物理测试转绿，不得留空。
- 类型一致：`Section/MeshData/Player/Vec3/MoveIntent/VoxelWorld/Face` 跨任务一致。
