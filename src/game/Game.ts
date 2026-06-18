import * as THREE from 'three';
import { Renderer } from '../render/Renderer';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_H } from '../core/world/chunk';
import { columnHeight, SEA_LEVEL } from '../core/worldgen/terrain';
import { worldToChunk } from '../core/world/coords';
import {
  isSolidId,
  isWaterId,
  breakTimeMs,
  dropFor,
  OAK_LEAVES,
  CRAFTING_TABLE,
  type HeldTool,
} from '../core/blocks/registry';
import { raycastVoxel, type RayHit } from '../core/world/raycast';
import { loadAtlas } from '../render/atlas';
import { ChunkMeshManager } from '../render/ChunkMeshManager';
import { CrackOverlay } from '../render/CrackOverlay';
import { DropRenderer } from '../render/DropRenderer';
import { FirstPersonHand } from '../render/FirstPersonHand';
import { step } from '../core/physics/step';
import { EYE, WIDTH, HEIGHT, type Player, type VoxelWorld } from '../core/physics/player';
import { spawnDrop, stepDrop, canPickup, type ItemDrop } from '../core/entity/itemDrop';
import { FluidSim, type FluidGrid } from '../core/fluid/fluidSim';
import {
  emptyInventory,
  addItem,
  takeOne,
  serializeInventory,
  deserializeInventory,
  type Inventory,
} from '../core/inventory/inventory';
import { readMove, consumeJump } from '../input/keyboard';
import { PointerLookControls } from '../input/PointerLookControls';
import { Hotbar } from '../ui/hotbar';
import { StatusBar } from '../ui/statusBar';
import { InventoryUI } from '../ui/inventoryUI';
import {
  newSurvival,
  tickSurvival,
  addExhaustion,
  applyDamage,
  isDead as survivalIsDead,
  eat,
  trackFall,
  MAX_FOOD,
  type Survival,
} from '../core/survival/survival';
import { APPLE, isFood, foodValue, toolOf } from '../core/items/items';
import { skyStateAt, DAY_START, DAY_LENGTH } from '../core/world/dayNight';
import type { WorldSave } from '../save/worldStore';

const TICK_MS = 50; // 20 TPS 固定步长
const RENDER_RADIUS = 6; // 渲染半径（区块）
const REACH = 5; // 交互距离（方块）
const HOTBAR_SLOTS = 9;
const DROP_TTL = 300; // 掉落物存活上限（秒，同 MC 5 分钟）
const AIR = 0;
const EAT_TIME = 1.6; // 吃东西耗时（秒，同 MC）
const LEAF_APPLE_CHANCE = 0.05; // 树叶掉苹果概率（1:1 是 0.5%，调高更可玩）
const SPRINT_EXHAUSTION = 0.1; // 每格疾跑消耗（MC）
const JUMP_EXHAUSTION = 0.05;
const SPRINT_JUMP_EXHAUSTION = 0.2;
const BREAK_EXHAUSTION = 0.005;
const DAMAGE_EXHAUSTION = 0.1;

/** 装配各层 + 固定步长模拟 + 跟随玩家动态加载区块 + 挖掘/放置 + 生命/饥饿。从存档启动。 */
export class Game {
  private readonly canvas: HTMLCanvasElement;
  private readonly save: WorldSave;
  private readonly renderer: Renderer;
  private readonly look: PointerLookControls;
  private readonly world: ChunkWorld;
  private readonly physWorld: VoxelWorld;
  private readonly chunks: ChunkMeshManager;
  private readonly highlight: THREE.LineSegments;
  private readonly underwaterEl: HTMLElement | null;
  private readonly normalFog: THREE.FogBase | null;
  private readonly underFog = new THREE.Fog(0x245f8a, 0.1, 16); // 水下：浓蓝雾
  private player: Player;
  private prev: Player;
  private readonly hotbar: Hotbar;
  private readonly inv: Inventory;
  private readonly crack: CrackOverlay;
  private readonly dropRenderer: DropRenderer;
  private readonly hand: FirstPersonHand;
  private readonly invUI: InventoryUI;
  private craftingGrid = 0; // 背包/合成界面：0=关闭 2=个人(2×2) 3=工作台(3×3)
  private readonly drops: ItemDrop[] = [];
  private digging = false; // 是否按住左键挖掘
  private digTarget: { x: number; y: number; z: number } | null = null;
  private digProgress = 0; // 当前目标已挖秒数
  private readonly fluidSim = new FluidSim(SEA_LEVEL);
  private readonly fluidGrid: FluidGrid;
  private fluidTick = 0; // 计数：每 5 刻跑一次水模拟（同 MC）
  private worldTime: number; // 昼夜更替：世界时间(刻)，每模拟刻 +1；24000 刻=20 分一整天
  private fov = 70;
  private last = 0;
  private acc = 0;
  private survival: Survival;
  private readonly statusBar: StatusBar;
  private readonly worldSpawn: { x: number; y: number; z: number };
  private dead = false;
  private fallDistance = 0; // 当前连续下落格数
  private eating = false; // 是否按住右键吃东西
  private eatProgress = 0;

  constructor(canvas: HTMLCanvasElement, save: WorldSave) {
    this.canvas = canvas;
    this.save = save;
    this.renderer = new Renderer(canvas);
    this.normalFog = this.renderer.scene.fog;
    this.underwaterEl = document.getElementById('underwater');
    this.hotbar = new Hotbar(document.getElementById('hotbar') as HTMLElement, HOTBAR_SLOTS);
    this.inv = save.inv ? deserializeInventory(save.inv) : emptyInventory();
    this.hotbar.render(this.inv);
    // 生命/饥饿：有存档用存档（已死状态则重置为满），否则全满。
    // 先铺 newSurvival() 默认值，再覆盖存档字段——补齐旧存档没有的字段(如 oxygen)，避免缺值。
    const sv = save.survival;
    this.survival = sv && sv.health > 0 ? { ...newSurvival(), ...sv, foodTimer: 0 } : newSurvival();
    this.statusBar = new StatusBar(
      document.getElementById('health') as HTMLElement,
      document.getElementById('hunger') as HTMLElement,
    );
    this.statusBar.render(this.survival);
    this.worldTime = save.worldTime ?? DAY_START; // 昼夜：续存档时刻，新世界从清晨开始

    this.world = new ChunkWorld(save.seed);
    this.fluidGrid = {
      // 世界顶/底之外视作固体：水不会灌进虚空(否则到 y=0 会无限提议下落、永不收敛)
      isSolid: (x, y, z) => y < 0 || y >= CHUNK_H || isSolidId(this.world.getBlock(x, y, z)),
      amount: (x, y, z) => this.world.waterAmount(x, y, z),
      isSource: (x, y, z) => this.world.isWaterSource(x, y, z),
      isFalling: (x, y, z) => this.world.isWaterFalling(x, y, z),
      setWater: (x, y, z, a, s, f) => this.world.setWater(x, y, z, a, s, f),
    };
    // 应用存档里玩家改过的方块（delta），并激活其周围的水（重新流入/退去）
    for (const key of Object.keys(save.edits)) {
      const [x, y, z] = key.split(',').map(Number);
      this.world.setBlock(x, y, z, save.edits[key]);
      this.fluidSim.activate(x, y, z);
    }
    const atlas = loadAtlas();
    this.chunks = new ChunkMeshManager(this.renderer.scene, this.world, atlas);
    this.crack = new CrackOverlay(this.renderer.scene);
    this.dropRenderer = new DropRenderer(this.renderer.scene, atlas);
    this.hand = new FirstPersonHand(atlas);
    this.invUI = new InventoryUI(document.getElementById('inventory') as HTMLElement);
    this.invUI.onChange = (): void => this.hotbar.render(this.inv);
    this.physWorld = {
      isSolid: (x, y, z) => isSolidId(this.world.getBlock(x, y, z)),
      isWater: (x, y, z) => isWaterId(this.world.getBlock(x, y, z)),
    };

    // 出生：worldSpawn 始终为世界出生点（死亡重生用）；有存档位置则从那里继续
    const p = save.player;
    this.worldSpawn = this.findSpawn(save.seed);
    const spawn = p ? { x: p.x, y: p.y, z: p.z } : this.worldSpawn;
    this.player = { pos: { ...spawn }, vel: { x: 0, y: 0, z: 0 }, onGround: false };
    this.prev = this.player;
    this.chunks.update(worldToChunk(Math.floor(spawn.x)), worldToChunk(Math.floor(spawn.z)), 2, 999);

    const box = new THREE.BoxGeometry(1.001, 1.001, 1.001);
    this.highlight = new THREE.LineSegments(
      new THREE.EdgesGeometry(box),
      new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 }),
    );
    this.highlight.visible = false;
    this.renderer.scene.add(this.highlight);

    this.look = new PointerLookControls(canvas);
    this.look.yaw = p ? p.yaw : Math.atan2(-spawn.z, -spawn.x);
    this.look.pitch = p ? p.pitch : -0.18;

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('mousedown', (e) => {
      if (document.pointerLockElement !== canvas) return;
      if (e.button === 0) {
        this.digging = true; // 按住左键持续挖掘（按硬度耗时）
        this.digTarget = null; // 重新评估目标
      } else if (e.button === 2) this.onUseDown(); // 右键：吃 / 放方块
    });
    const stopDig = (): void => {
      this.digging = false;
      this.digProgress = 0;
      this.digTarget = null;
      this.crack.hide();
    };
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) stopDig();
      else if (e.button === 2) this.stopEating();
    });
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== canvas) {
        stopDig(); // 松开锁定即停挖
        this.stopEating();
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyE') {
        if (this.craftingGrid > 0) this.closeCrafting();
        else if (document.pointerLockElement === canvas) this.openCrafting(2);
        return;
      }
      if (e.code === 'Escape' && this.craftingGrid > 0) {
        this.closeCrafting();
        return;
      }
      const n = Number(e.key);
      if (Number.isInteger(n) && n >= 1 && n <= HOTBAR_SLOTS) this.hotbar.setSelected(n - 1);
    });
    canvas.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        this.hotbar.scroll(Math.sign(e.deltaY));
      },
      { passive: false },
    );
  }

  // 当前世界状态快照（写回存档对象，供持久化）
  snapshot(): WorldSave {
    this.save.player = {
      x: this.player.pos.x,
      y: this.player.pos.y,
      z: this.player.pos.z,
      yaw: this.look.yaw,
      pitch: this.look.pitch,
    };
    this.save.inv = serializeInventory(this.inv);
    const sv = this.survival;
    this.save.survival = {
      health: sv.health,
      food: sv.food,
      saturation: sv.saturation,
      exhaustion: sv.exhaustion,
    };
    this.save.worldTime = this.worldTime; // 昼夜：存当前时刻，下次续上
    this.save.lastPlayed = Date.now();
    return this.save;
  }

  private findSpawn(seed: number): { x: number; y: number; z: number } {
    for (let r = 1; r < 160; r++) {
      for (let i = -r; i <= r; i++) {
        for (const [x, z] of [
          [i, -r],
          [i, r],
          [-r, i],
          [r, i],
        ] as [number, number][]) {
          const h = columnHeight(x, z, seed);
          if (h > SEA_LEVEL && h <= SEA_LEVEL + 4) return { x: x + 0.5, y: h + 2, z: z + 0.5 };
        }
      }
    }
    return { x: 0.5, y: SEA_LEVEL + 3, z: 0.5 };
  }

  start(): void {
    this.last = performance.now();
    const frame = (now: number): void => {
      requestAnimationFrame(frame);
      const dt = Math.min(now - this.last, 100) / 1000; // 帧间隔(秒)，限幅防卡顿跳变
      this.acc += now - this.last;
      this.last = now;
      if (this.acc > 250) this.acc = 250;
      const playing = document.pointerLockElement === this.canvas;
      while (playing && this.acc >= TICK_MS) {
        this.prev = this.player;
        const m = readMove();
        const jumped = consumeJump();
        this.player = step(
          this.player,
          {
            forward: m.forward,
            right: m.right,
            yaw: this.look.yaw,
            jump: jumped,
            swimUp: m.jumpHeld,
            sprint: m.sprint,
          },
          this.physWorld,
        );
        this.stepSurvival(m.sprint, jumped);
        if (++this.worldTime >= DAY_LENGTH) this.worldTime = 0; // 昼夜推进：每模拟刻 +1（暂停即冻结）
        // 流动水：每 5 刻更新一次（同 MC），变动后重建脏区块网格
        if (++this.fluidTick >= 5) {
          this.fluidTick = 0;
          this.fluidSim.tick(this.fluidGrid);
          this.chunks.remeshDirty();
        }
        this.acc -= TICK_MS;
      }
      if (!playing) this.acc = 0; // 暂停：冻结物理，不累积

      this.chunks.update(
        worldToChunk(Math.floor(this.player.pos.x)),
        worldToChunk(Math.floor(this.player.pos.z)),
        RENDER_RADIUS,
        2,
      );
      const wantFov = playing && readMove().sprint ? 80 : 70;
      this.fov += (wantFov - this.fov) * 0.15;
      this.renderer.camera.fov = this.fov;
      this.renderer.camera.updateProjectionMatrix();
      if (playing) {
        this.updateMining(dt);
        this.updateDrops(dt);
        this.updateEating(dt);
        this.statusBar.render(this.survival);
        if (this.digging) this.hand.swing(); // 按住挖时连续摆臂
      } else {
        this.crack.hide();
      }
      this.chunks.animateWater(dt); // 水面流动动画
      this.updateDayNight(); // 昼夜更替：天空/雾/世界亮度
      this.updateWater();
      this.updateHighlight();
      this.updateCamera(this.acc / TICK_MS);
      // 第一人称手臂：手持当前选中方块、按移动速度晃动
      const held = this.inv[this.hotbar.index];
      this.hand.setHeld(held ? held.id : null);
      const walk = Math.min(1, Math.hypot(this.player.vel.x, this.player.vel.z) / 0.22);
      this.hand.update(dt, playing ? walk : 0);
      if (this.hand.camera.aspect !== this.renderer.camera.aspect) {
        this.hand.resize(this.renderer.camera.aspect);
      }
      this.renderer.render();
      this.renderer.renderOverlay(this.hand.scene, this.hand.camera);
    };
    requestAnimationFrame(frame);
  }

  // 每模拟刻推进生命/饥饿：累积疲劳(疾跑/跳)、结算摔落、回血/掉血、判定死亡。
  private stepSurvival(sprint: boolean, jumped: boolean): void {
    const dx = this.player.pos.x - this.prev.pos.x;
    const dz = this.player.pos.z - this.prev.pos.z;
    const dy = this.player.pos.y - this.prev.pos.y;
    if (sprint) addExhaustion(this.survival, SPRINT_EXHAUSTION * Math.hypot(dx, dz));
    if (jumped) addExhaustion(this.survival, sprint ? SPRINT_JUMP_EXHAUSTION : JUMP_EXHAUSTION);
    const inWater = isWaterId(
      this.world.getBlock(
        Math.floor(this.player.pos.x),
        Math.floor(this.player.pos.y),
        Math.floor(this.player.pos.z),
      ),
    );
    const fall = trackFall(this.fallDistance, dy, this.player.onGround, inWater);
    this.fallDistance = fall.fallDistance;
    if (fall.damage > 0) {
      applyDamage(this.survival, fall.damage);
      addExhaustion(this.survival, DAMAGE_EXHAUSTION);
    }
    tickSurvival(this.survival);
    if (survivalIsDead(this.survival) && !this.dead) this.die();
  }

  private die(): void {
    this.dead = true;
    this.digging = false;
    this.stopEating();
    void document.exitPointerLock(); // 解锁 → main 切到死亡界面
  }

  isDead(): boolean {
    return this.dead;
  }

  // 重生：满状态 + 回到世界出生点。
  respawn(): void {
    this.survival = newSurvival();
    this.dead = false;
    this.fallDistance = 0;
    const s = this.worldSpawn;
    this.player = { pos: { ...s }, vel: { x: 0, y: 0, z: 0 }, onGround: false };
    this.prev = this.player;
    this.chunks.update(worldToChunk(Math.floor(s.x)), worldToChunk(Math.floor(s.z)), 2, 999);
    this.statusBar.render(this.survival);
  }

  // 右键按下：手持食物则开吃，否则放方块。
  private onUseDown(): void {
    // 右键工作台 → 打开 3×3 合成
    const hit = this.rayHit();
    if (hit && this.world.getBlock(hit.x, hit.y, hit.z) === CRAFTING_TABLE) {
      this.openCrafting(3);
      return;
    }
    const stack = this.inv[this.hotbar.index];
    if (stack && stack.count > 0 && isFood(stack.id)) {
      this.eating = true;
      this.eatProgress = 0;
    } else {
      this.placeBlock();
    }
  }

  // —— 合成界面 ——
  isCraftingOpen(): boolean {
    return this.craftingGrid > 0;
  }
  private openCrafting(gridSize: number): void {
    this.craftingGrid = gridSize;
    this.invUI.show(this.inv, gridSize);
    document.exitPointerLock(); // 解锁鼠标操作界面（暂停在 pointerlockchange 里被抑制）
  }
  private closeCrafting(): void {
    this.craftingGrid = 0;
    this.invUI.hide();
    void this.canvas.requestPointerLock(); // 回到游戏
  }

  private stopEating(): void {
    this.eating = false;
    this.eatProgress = 0;
  }

  // 按住右键吃：满 1.6s 消耗 1 个并回饥饿；饥饿已满则不吃。
  private updateEating(dt: number): void {
    if (!this.eating) return;
    const sel = this.hotbar.index;
    const stack = this.inv[sel];
    if (!stack || stack.count <= 0 || !isFood(stack.id) || this.survival.food >= MAX_FOOD) {
      this.eatProgress = 0;
      return;
    }
    this.eatProgress += dt;
    if (this.eatProgress >= EAT_TIME) {
      const food = foodValue(stack.id);
      const id = takeOne(this.inv, sel);
      if (food && id !== null) {
        eat(this.survival, food);
        this.hotbar.render(this.inv);
      }
      this.eatProgress = 0;
    }
  }

  private rayHit(): RayHit | null {
    const o = { x: this.player.pos.x, y: this.player.pos.y + EYE, z: this.player.pos.z };
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const cp = Math.cos(this.look.pitch);
    const sp = Math.sin(this.look.pitch);
    const dir = { x: cy * cp, y: sp, z: sy * cp };
    return raycastVoxel(o, dir, REACH, (x, y, z) => isSolidId(this.world.getBlock(x, y, z)));
  }

  // 记录方块改动到存档 delta
  private edit(x: number, y: number, z: number, id: number): void {
    this.world.setBlock(x, y, z, id);
    this.save.edits[`${x},${y},${z}`] = id;
    this.fluidSim.activate(x, y, z); // 让相邻的水流进/退去
    this.chunks.remeshDirty();
  }

  // 持续挖掘：按住左键，按方块硬度累积进度并显示裂纹；满了就破坏、掉落。
  private updateMining(dt: number): void {
    if (!this.digging) {
      this.crack.hide();
      return;
    }
    const hit = this.rayHit();
    if (!hit) {
      this.digProgress = 0;
      this.digTarget = null;
      this.crack.hide();
      return;
    }
    if (
      !this.digTarget ||
      this.digTarget.x !== hit.x ||
      this.digTarget.y !== hit.y ||
      this.digTarget.z !== hit.z
    ) {
      this.digTarget = { x: hit.x, y: hit.y, z: hit.z }; // 换了目标 → 进度归零
      this.digProgress = 0;
    }
    const id = this.world.getBlock(hit.x, hit.y, hit.z);
    const need = breakTimeMs(id, this.heldTool()) / 1000;
    if (need <= 0) {
      this.mineBlock(hit.x, hit.y, hit.z, id); // 瞬破方块
      return;
    }
    this.digProgress += dt;
    if (this.digProgress >= need) {
      this.mineBlock(hit.x, hit.y, hit.z, id);
    } else {
      this.crack.show(hit.x, hit.y, hit.z, this.digProgress / need);
    }
  }

  // 当前选中槽里的工具（非工具/空手返回 null），影响挖掘速度与掉落。
  private heldTool(): HeldTool | null {
    const sel = this.inv[this.hotbar.index];
    return sel ? toolOf(sel.id) : null;
  }

  // 破坏一个方块：清空 + 按掉落表生成掉落物（树叶概率掉苹果）+ 累积疲劳。
  private mineBlock(x: number, y: number, z: number, id: number): void {
    const drop = dropFor(id, this.heldTool()); // 需镐的方块要用镐才掉
    this.edit(x, y, z, AIR);
    if (drop !== null) this.drops.push(spawnDrop(drop, x, y, z));
    if (id === OAK_LEAVES && Math.random() < LEAF_APPLE_CHANCE) {
      this.drops.push(spawnDrop(APPLE, x, y, z)); // 树叶概率掉苹果（同 MC）
    }
    addExhaustion(this.survival, BREAK_EXHAUSTION);
    this.digProgress = 0;
    this.digTarget = null;
    this.crack.hide();
  }

  // 推进掉落物物理 + 拾取 + 超时消失，并同步渲染。
  private updateDrops(dt: number): void {
    const px = this.player.pos.x;
    const py = this.player.pos.y + 0.9; // 玩家身体中部
    const pz = this.player.pos.z;
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      stepDrop(d, this.physWorld, dt);
      if (d.age > DROP_TTL) {
        this.drops.splice(i, 1);
        continue;
      }
      if (canPickup(d, px, py, pz)) {
        const leftover = addItem(this.inv, d.id, 1);
        if (leftover === 0) {
          this.drops.splice(i, 1);
          this.hotbar.render(this.inv);
        }
      }
    }
    this.dropRenderer.sync(this.drops);
  }

  // 放置：消耗当前快捷栏格里的方块（空手/手持食物则不放）。
  private placeBlock(): void {
    const sel = this.hotbar.index;
    const stack = this.inv[sel];
    if (!stack || stack.count <= 0 || stack.id >= 256) return; // 空手或手持物品(食物/工具/棍等不可放置)
    const hit = this.rayHit();
    if (!hit) return;
    const px = hit.x + hit.nx;
    const py = hit.y + hit.ny;
    const pz = hit.z + hit.nz;
    const target = this.world.getBlock(px, py, pz);
    if (target !== AIR && !isWaterId(target)) return; // 仅可放进空气或水
    if (this.overlapsPlayer(px, py, pz)) return; // 不能埋住自己
    const id = takeOne(this.inv, sel);
    if (id === null) return;
    this.edit(px, py, pz, id);
    this.hotbar.render(this.inv);
    this.hand.swing(); // 放方块摆一下臂
  }

  private overlapsPlayer(bx: number, by: number, bz: number): boolean {
    const p = this.player.pos;
    const hw = WIDTH / 2;
    return (
      bx < p.x + hw &&
      bx + 1 > p.x - hw &&
      by < p.y + HEIGHT &&
      by + 1 > p.y &&
      bz < p.z + hw &&
      bz + 1 > p.z - hw
    );
  }

  // 昼夜更替：按世界时间套用天空渐变、雾色、世界亮度着色。水下时雾被 updateWater 换成蓝雾，
  //   这里只改“正常雾”的颜色，故两者不冲突。
  private updateDayNight(): void {
    const s = skyStateAt(this.worldTime);
    this.renderer.setSkyColors(s.skyTop, s.skyHorizon);
    const fog = this.normalFog;
    if (fog) fog.color.setRGB(s.skyHorizon[0], s.skyHorizon[1], s.skyHorizon[2], THREE.SRGBColorSpace);
    this.chunks.setTint(s.worldTint);
  }

  private updateWater(): void {
    const ex = Math.floor(this.player.pos.x);
    const ey = Math.floor(this.player.pos.y + EYE);
    const ez = Math.floor(this.player.pos.z);
    const under = isWaterId(this.world.getBlock(ex, ey, ez));
    this.renderer.scene.fog = under ? this.underFog : this.normalFog;
    if (this.underwaterEl) this.underwaterEl.style.display = under ? 'block' : 'none';
  }

  private updateHighlight(): void {
    const hit = this.rayHit();
    if (hit) {
      this.highlight.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
      this.highlight.visible = true;
    } else {
      this.highlight.visible = false;
    }
  }

  private updateCamera(alpha: number): void {
    const a = this.prev.pos;
    const b = this.player.pos;
    const x = a.x + (b.x - a.x) * alpha;
    const y = a.y + (b.y - a.y) * alpha;
    const z = a.z + (b.z - a.z) * alpha;
    const cam = this.renderer.camera;
    cam.position.set(x, y + EYE, z);
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const cp = Math.cos(this.look.pitch);
    const sp = Math.sin(this.look.pitch);
    cam.lookAt(x + cy * cp, y + EYE + sp, z + sy * cp);
  }
}
