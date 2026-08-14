import { Game } from './game/Game';
import { MenuBackground } from './render/MenuBackground';
import { listWorlds, createWorld, saveWorld, deleteWorld, parseSeed, dimEditKey, type WorldSave, type GameMode } from './save/worldStore';
import { SettingsMenu } from './ui/settingsMenu';
import { installTouchZoomGuards, supportsTouchControls } from './input/TouchControls';
import {
  MultiplayerClient,
  multiplayerHostWorldFromSave,
  multiplayerServerUrl,
  normalizePlayerName,
  normalizeRoomCode,
} from './multiplayer/MultiplayerClient';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const $ = (id: string): HTMLElement => document.getElementById(id) as HTMLElement;
const touchMode = supportsTouchControls();
document.documentElement.classList.toggle('touch-device', touchMode);
if (touchMode) installTouchZoomGuards();

// 主菜单/存档界面的旋转全景背景（独立画布，与游戏无关）
const menubgCanvas = $('menubg') as HTMLCanvasElement;
let menubg: MenuBackground | null = new MenuBackground(menubgCanvas);

const menu = $('menu');
const worldlist = $('worldlist');
const multiplayerMenu = $('multiplayer');
const pause = $('pause');
const worldRows = $('world-rows');
const onlineHud = $('online-hud');

let game: Game | null = null;
let multiplayer: MultiplayerClient | null = null;

// 加载/启动界面（MC 风，#boot 已写在 HTML、JS 加载前就显示 → 无白屏）：切显隐 + 改提示文字。
const bootEl = $('boot');
const bootTip = bootEl.querySelector('.boot-tip') as HTMLElement;
const showLoading = (v: boolean, text = '加载中…'): void => {
  bootEl.classList.toggle('hidden', !v);
  if (v) bootTip.textContent = text;
};

// 把任何未捕获错误 / Promise 拒绝显示到加载界面——否则启动失败 = 静默转圈，没法定位"进不去"。
// 游戏跑起来之后(gameStarted)的零星报错不抢屏。
let gameStarted = false;
const surfaceFatal = (msg: string): void => {
  if (gameStarted) return;
  showLoading(true, `出错了：${msg}（请把这行字发给开发）`);
};
window.addEventListener('error', (e) => surfaceFatal(e.message || String((e as ErrorEvent).error)));
window.addEventListener('unhandledrejection', (e) =>
  surfaceFatal(String((e.reason && (e.reason.message || e.reason.stack)) || e.reason)),
);

// 随机 splash 文字
const SPLASHES = [
  '100% 纯方块!',
  '无限的世界!',
  '由 Three.js 驱动!',
  '会挖会放会跳!',
  '试试双击 W 疾跑~',
  '支持 WebGL2!',
  '像素手工打造!',
  '水快会流动了!',
  '也试试我的世界!',
];
$('splash').textContent = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];

// boot 加载界面增强：随机 splash + 轮换小贴士（HTML 里已有默认值，JS 跑起来后接管）
const bootSplashEl = bootEl.querySelector('.boot-splash') as HTMLElement | null;
if (bootSplashEl) bootSplashEl.textContent = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
const BOOT_HINTS = touchMode
  ? [
      '提示: 左侧滑动方向盘移动，空白处拖动视角',
      '提示: 双击前进后按住可以疾跑',
      '提示: 轻点空白处可互动或放置方块',
      '提示: 长按空白处可挖方块或攻击',
      '提示: 可以直接点快捷栏切换物品',
      '提示: 石头要用镐才挖得动',
    ]
  : [
      '提示: 按住左键挖方块',
      '提示: 双击 W 可以疾跑',
      '提示: 右键放方块(会消耗物品)',
      '提示: 数字键 1-9 / 滚轮 切换物品',
      '提示: 石头要用镐才挖得动',
      '提示: 砍树 → 木板 → 工作台 → 工具',
      '提示: 熔炉能把铁矿炼成铁锭',
      '提示: 天黑了小心怪物',
    ];
const bootHintEl = bootEl.querySelector('.boot-hint') as HTMLElement | null;
if (bootHintEl) {
  let hi = Math.floor(Math.random() * BOOT_HINTS.length);
  bootHintEl.textContent = BOOT_HINTS[hi];
  setInterval(() => {
    hi = (hi + 1) % BOOT_HINTS.length;
    bootHintEl.textContent = BOOT_HINTS[hi];
  }, 2600);
}

function setHud(show: boolean): void {
  $('crosshair').style.display = show ? 'block' : 'none';
  $('hotbar').style.display = show ? 'flex' : 'none';
  $('status').style.display = show ? 'flex' : 'none';
  onlineHud.classList.toggle('hidden', !show || multiplayer === null);
  game?.setTouchActive(show && touchMode);
}

function showOnly(el: HTMLElement | null): void {
  for (const s of [menu, worldlist, multiplayerMenu, pause]) s.classList.add('hidden');
  $('newworld').classList.add('hidden'); // 切屏时关掉创建弹窗
  if (el) el.classList.remove('hidden');
  setHud(false);
  // 旋转背景只在主菜单/存档界面显示
  const bg = el === menu || el === worldlist || el === multiplayerMenu;
  menubgCanvas.style.display = bg ? 'block' : 'none';
  if (bg) menubg?.start();
  else menubg?.stop();
}

// 超时兜底：preload 等区块生成/网格化是无限轮询，万一某机器 worker 卡住会永远停在加载界面。
// 用 Promise.race 给个上限，到点照样进——宁可地形没铺满，也不能卡死进不去。
const timeout = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

// --- 主菜单 ---
// 启动:先盖加载界面 + 预生成主菜单背景，就绪再显示主菜单(不渐显)。退出 reload 后也走这里。
void (async () => {
  showLoading(true, '加载中…');
  try {
    if (menubg) await Promise.race([menubg.preload(), timeout(8000)]); // 背景预载封顶 8s，超时也进菜单
  } catch (e) {
    console.error('[menubg] preload 失败:', e); // 背景挂了不该挡住菜单
  }
  showOnly(menu);
  showLoading(false);
})();
// 设置面板（局内/局外共用）：改材质即时套用到运行中的游戏；音量已存盘(音效待开发)。
const settingsMenu = new SettingsMenu($('settings'));
settingsMenu.onChange = (s): void => {
  game?.setTexturePack(s.texturePack);
  game?.setLightingQuality(s.lightingQuality); // 光影画质即时套用
  game?.setRenderDistance(s.renderDistance); // 渲染距离：即时改区块加载半径 + 雾距
  // 音量：已存进设置，音频接入后会读取（本次先存）。
};
$('settings-btn').addEventListener('click', () => settingsMenu.show());
$('settings-btn-pause').addEventListener('click', () => settingsMenu.show());

$('play').addEventListener('click', () => openWorldList());

// --- 在线房间 ---
const mpName = $('mp-name') as HTMLInputElement;
const mpRoom = $('mp-room') as HTMLInputElement;
const mpStatus = $('mp-status');
const mpCreate = $('mp-create') as HTMLButtonElement;
const mpJoin = $('mp-join') as HTMLButtonElement;
const mpTitle = $('mp-title');
const mpIntro = $('mp-intro');
const mpModeField = $('mp-mode-field');
const mpBack = $('mp-back') as HTMLButtonElement;
type MultiplayerPanelMode = 'join' | 'host';
let mpPanelMode: MultiplayerPanelMode = 'join';
let mpHostWorld: WorldSave | null = null;
let mpGameMode: GameMode = 'creative';
let mpConnecting = false;

function setMpStatus(text: string, error = false): void {
  mpStatus.textContent = text;
  mpStatus.classList.toggle('error', error);
}

function setMpGameMode(mode: GameMode): void {
  mpGameMode = mode;
  $('mp-current-mode').textContent = mode === 'creative' ? '创造模式' : '生存模式';
  $('mp-mode-desc').textContent =
    mode === 'creative'
      ? '适合和朋友一起搭建；玩家与方块会实时同步。'
      : '玩家与方块会实时同步；生物、掉落物和背包暂各自本地运行。';
}

function restoreMultiplayerName(): void {
  try {
    mpName.value = localStorage.getItem('mineworld.multiplayer.name') ?? '';
  } catch {
    // 隐私模式下 localStorage 不可用也应能联机。
  }
}

/** 同一张房间面板有两个入口：主菜单只能加入；已进入单人世界才可以开房。 */
function setMultiplayerPanelMode(mode: MultiplayerPanelMode): void {
  mpPanelMode = mode;
  const hosting = mode === 'host';
  mpTitle.textContent = hosting ? '开启联机房间' : '加入联机房间';
  mpIntro.textContent = hosting
    ? '当前单人世界会成为这个房间的世界。把房间号告诉朋友即可一起游玩。'
    : '输入朋友给你的房间号，即可进入同一个世界。';
  mpModeField.classList.toggle('hidden', !hosting);
  mpCreate.classList.toggle('hidden', !hosting);
  mpJoin.classList.toggle('hidden', hosting);
  mpBack.textContent = hosting ? '返回暂停菜单' : '返回';
}

function randomRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'MW';
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function updateOnlineHud(extra = ''): void {
  if (!multiplayer) {
    onlineHud.classList.add('hidden');
    return;
  }
  onlineHud.textContent = extra || `联机 · 房间 ${multiplayer.room.id.toUpperCase()}\n${multiplayer.playerCount} 名玩家`;
}

/** 已在游戏内打开房间面板时，保留当前世界作背景，不能把主菜单全景重新盖上来。 */
function showMultiplayerPanel(): void {
  if (mpPanelMode === 'join') {
    showOnly(multiplayerMenu);
    return;
  }
  for (const s of [menu, worldlist, pause]) s.classList.add('hidden');
  $('newworld').classList.add('hidden');
  multiplayerMenu.classList.remove('hidden');
  setHud(false);
  menubgCanvas.style.display = 'none';
  menubg?.stop();
}

function openMultiplayerMenu(): void {
  setMultiplayerPanelMode('join');
  mpHostWorld = null;
  restoreMultiplayerName();
  mpRoom.value = normalizeRoomCode(new URLSearchParams(location.search).get('room') ?? mpRoom.value);
  setMpGameMode('creative');
  setMpStatus('输入房间号后加入。');
  showMultiplayerPanel();
  mpName.focus();
}

/** 单人世界暂停时的“开启联机房间”。服务器会接收当前种子、昼夜和方块改动。 */
function openHostedMultiplayerMenu(): void {
  if (!game || multiplayer !== null) return;
  mpHostWorld = game.snapshot();
  setMultiplayerPanelMode('host');
  restoreMultiplayerName();
  mpRoom.value = randomRoomCode();
  setMpGameMode(mpHostWorld.gameMode ?? 'survival');
  setMpStatus('房间号已生成。开启后，把它告诉朋友。');
  showMultiplayerPanel();
  mpName.focus();
}

function closeMultiplayerMenu(): void {
  if (mpPanelMode === 'host' && game && multiplayer === null) {
    mpHostWorld = null;
    multiplayerMenu.classList.add('hidden');
    pause.classList.remove('hidden');
    setHud(false);
    return;
  }
  mpHostWorld = null;
  showOnly(menu);
}

/** 给新联机会话装好 HUD / 断线处理；单人世界开房和直接加入共用。 */
function setMultiplayerSession(online: MultiplayerClient | null): void {
  multiplayer = online;
  $('save-quit').textContent = online ? '退出房间' : '保存并退出';
  $('open-room').classList.toggle('hidden', online !== null);
  if (!online) {
    onlineHud.classList.add('hidden');
    return;
  }
  online.onPlayersChanged = () => updateOnlineHud();
  online.onDisconnect = (reason) => {
    if (multiplayer !== online) return;
    onlineHud.classList.remove('hidden');
    onlineHud.textContent = `联机已断开\n${reason}`;
  };
  updateOnlineHud();
}

function onlineWorld(client: MultiplayerClient): WorldSave {
  const edits: Record<string, number> = {};
  for (const edit of client.initialEdits) edits[dimEditKey(edit.dimension, edit.x, edit.y, edit.z)] = edit.id;
  const room = client.room;
  return {
    id: `online:${room.id}:${room.seed}`,
    name: `联机 · ${room.id.toUpperCase()}`,
    seed: room.seed,
    gameMode: room.gameMode,
    lastPlayed: Date.now(),
    edits,
    worldTime: room.worldTime,
  };
}

async function connectMultiplayer(action: 'create' | 'join'): Promise<void> {
  if (mpConnecting) return;
  const hostWorld = action === 'create' && mpPanelMode === 'host' ? mpHostWorld : null;
  if (action === 'create' && hostWorld === null) {
    setMpStatus('请先进入一个单人世界，再从暂停菜单开启房间。', true);
    return;
  }
  let room = normalizeRoomCode(mpRoom.value);
  if (action === 'create' && room.length < 3) room = randomRoomCode();
  if (room.length < 3) {
    setMpStatus('请输入至少 3 位的房间号。', true);
    mpRoom.focus();
    return;
  }
  const name = normalizePlayerName(mpName.value);
  mpRoom.value = room;
  mpName.value = name;
  try {
    localStorage.setItem('mineworld.multiplayer.name', name);
  } catch {
    // 不影响实际连接。
  }
  mpConnecting = true;
  mpCreate.disabled = true;
  mpJoin.disabled = true;
  showOnly(null);
  showLoading(true, action === 'create' ? '正在创建联机房间…' : '正在加入联机房间…');
  try {
    const client = await MultiplayerClient.connect({
      url: multiplayerServerUrl(),
      action,
      room,
      name,
      gameMode: mpGameMode,
      world: hostWorld ? multiplayerHostWorldFromSave(hostWorld) : undefined,
    });
    if (hostWorld) {
      // 不重载、不丢当前背包/位置：在正在运行的单人 Game 上接入实时会话。
      if (!game || !game.attachMultiplayer(client)) {
        client.disconnect('无法切换到联机房间');
        throw new Error('当前世界已经不在单人状态，请返回后重试。');
      }
      setMultiplayerSession(client);
      mpHostWorld = null;
      multiplayerMenu.classList.add('hidden');
      pause.classList.add('hidden');
      showLoading(false);
      setHud(true);
      if (!touchMode) void canvas.requestPointerLock();
    } else {
      startGame(onlineWorld(client), client);
    }
  } catch (error) {
    showLoading(false);
    setMpStatus(error instanceof Error ? error.message : '连接联机服务器失败。', true);
    showMultiplayerPanel();
  } finally {
    mpConnecting = false;
    mpCreate.disabled = false;
    mpJoin.disabled = false;
  }
}

$('multiplayer-play').addEventListener('click', () => openMultiplayerMenu());
$('open-room').addEventListener('click', () => openHostedMultiplayerMenu());
$('mp-create').addEventListener('click', () => void connectMultiplayer('create'));
$('mp-join').addEventListener('click', () => void connectMultiplayer('join'));
mpBack.addEventListener('click', () => closeMultiplayerMenu());
for (const input of [mpName, mpRoom]) {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') void connectMultiplayer(mpPanelMode === 'host' ? 'create' : 'join');
  });
}
$('fullscreen').addEventListener('click', () => {
  if (document.fullscreenElement) void document.exitFullscreen();
  else void document.documentElement.requestFullscreen();
});
$('about').addEventListener('click', () => $('about-panel').classList.remove('hidden'));
$('about-close').addEventListener('click', () => $('about-panel').classList.add('hidden'));

// --- 存档（世界选择）---
function openWorldList(): void {
  renderWorldList();
  showOnly(worldlist);
}

function renderWorldList(): void {
  worldRows.innerHTML = '';
  const worlds = listWorlds();
  if (worlds.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'world-empty';
    empty.textContent = '还没有世界, 点 创建新世界 开始吧';
    worldRows.appendChild(empty);
    return;
  }
  for (const w of worlds) {
    const row = document.createElement('div');
    row.className = 'world-row';
    const name = document.createElement('span');
    name.className = 'wname';
    name.textContent = w.name;
    const meta = document.createElement('span');
    meta.className = 'wmeta';
    meta.textContent = `种子 ${w.seed}${w.gameMode === 'creative' ? ' · 创造' : ''}`;
    const del = document.createElement('span');
    del.className = 'wdel';
    del.textContent = '删除';
    del.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteWorld(w.id);
      renderWorldList();
    });
    row.append(name, meta, del);
    row.addEventListener('click', () => startGame(w));
    worldRows.appendChild(row);
  }
}

// --- 创建新世界弹窗（名称 / 种子 / 模式）---
const newworld = $('newworld');
const nwName = $('nw-name') as HTMLInputElement;
const nwSeed = $('nw-seed') as HTMLInputElement;
const nwDesc = $('nw-mode-desc');
let nwMode: GameMode = 'survival';
function setNwMode(m: GameMode): void {
  nwMode = m;
  $('nw-survival').classList.toggle('active', m === 'survival');
  $('nw-creative').classList.toggle('active', m === 'creative');
  nwDesc.textContent =
    m === 'creative' ? '无限方块、自由飞行（双击空格）、无敌不饿——专心建造。' : '挖矿、合成、打怪，会饿会死。';
}
function submitNewWorld(): void {
  const world = createWorld(nwName.value, parseSeed(nwSeed.value) ?? undefined, nwMode);
  newworld.classList.add('hidden');
  startGame(world);
}
$('nw-survival').addEventListener('click', () => setNwMode('survival'));
$('nw-creative').addEventListener('click', () => setNwMode('creative'));
$('create-world').addEventListener('click', () => {
  nwName.value = '';
  nwSeed.value = '';
  setNwMode('survival');
  newworld.classList.remove('hidden');
  nwName.focus();
});
$('nw-create').addEventListener('click', submitNewWorld);
$('nw-cancel').addEventListener('click', () => newworld.classList.add('hidden'));
// 输入框里按回车直接创建
for (const inp of [nwName, nwSeed]) {
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitNewWorld();
  });
}
$('worldlist-back').addEventListener('click', () => showOnly(menu));

// --- 进入游戏 ---
function startGame(world: WorldSave, online: MultiplayerClient | null = null): void {
  if (game) {
    online?.disconnect('游戏已经在运行');
    return;
  }
  setMultiplayerSession(online);
  showOnly(null);
  showLoading(true, '进入中…');
  // 进游戏前先彻底释放菜单背景世界(整套区块网格 + worker + 第二个 WebGL 上下文)，
  // 否则它与游戏世界双份常驻内存 → 集显/低内存机 OOM。⚠️ 包 try：dispose 抛错绝不能静默掐死启动。
  try {
    menubg?.dispose();
  } catch (err) {
    console.error('[startGame] 菜单背景释放出错(忽略,继续):', err);
  }
  menubg = null;
  // 双 rAF：先让浏览器把 spinner 画出来，再做阻塞的世界构建 + 初始区块生成。
  // 每个阶段把进度写到加载界面 → 卡在哪一步一目了然(便于定位"进不去")。
  requestAnimationFrame(() =>
    requestAnimationFrame(async () => {
      try {
        showLoading(true, '进入中…①构建世界');
        game = new Game(canvas, world, online);
        showLoading(true, '进入中…②生成出生区块');
        await Promise.race([game.preloadSpawn(), timeout(12000)]); // 出生预载封顶 12s，超时也进游戏(地形会继续补)
        showLoading(true, '进入中…③启动渲染');
        game.start();
        gameStarted = true;
        (window as unknown as { __mw?: Game }).__mw = game; // 调试/截图工具用：暴露 game 实例(tools/shot.mjs 定机位)
        showLoading(false);
        if (touchMode) {
          setHud(true);
          game.setTouchActive(true);
        } else void canvas.requestPointerLock();
      } catch (e) {
        // 任何报错都显示到加载界面，别再静默卡死（方便定位"进不去"到底卡在哪）
        console.error('[startGame] 进入游戏失败:', e);
        if (multiplayer === online) {
          online?.disconnect('进入世界失败');
          multiplayer = null;
        }
        const msg = e instanceof Error ? `${e.stack ?? e.message}` : String(e);
        showLoading(true, `进入失败：${msg}`);
      }
    }),
  );
}

// --- 暂停 / 存盘 ---
function saveLocalGame(): void {
  if (game && multiplayer === null) saveWorld(game.snapshot());
}

$('resume').addEventListener('click', () => {
  if (touchMode) {
    pause.classList.add('hidden');
    setHud(true);
  } else void canvas.requestPointerLock();
});
$('save-quit').addEventListener('click', () => {
  const leavingOnline = multiplayer !== null;
  saveLocalGame();
  multiplayer?.disconnect('玩家退出房间');
  showLoading(true, leavingOnline ? '正在退出联机房间…' : '保存并返回主菜单…'); // 退出也过加载界面
  location.reload(); // 干净重置；reload 后走启动流程(加载界面 + 菜单背景预加载)
});

// 指针锁定 = 游戏中；解锁(ESC) = 暂停；死亡时改显示死亡界面
const death = $('death');
document.addEventListener('pointerlockchange', () => {
  if (touchMode) return;
  const playing = document.pointerLockElement === canvas;
  if (playing) {
    pause.classList.add('hidden');
    death.style.display = 'none';
    setHud(true);
  } else if (game) {
    saveLocalGame();
    if (game.isCraftingOpen()) return; // 合成界面：保持 HUD、不弹暂停
    setHud(false);
    if (game.isDead()) death.style.display = 'flex';
    else pause.classList.remove('hidden');
  }
});

// 触屏没有 Pointer Lock，虚拟按钮通过事件让外层 UI 显示暂停/死亡页。
window.addEventListener('mineworld:touch-pause', () => {
  if (!game || game.isDead()) return;
  saveLocalGame();
  setHud(false);
  pause.classList.remove('hidden');
});
window.addEventListener('mineworld:touch-death', () => {
  setHud(false);
  pause.classList.add('hidden');
  death.style.display = 'flex';
});

// 重生：满状态回到出生点并重新锁定
$('respawn').addEventListener('click', () => {
  if (!game) return;
  game.respawn();
  death.style.display = 'none';
  if (touchMode) setHud(true);
  else void canvas.requestPointerLock();
});

// 定时自动存盘 + 关页面前存盘
setInterval(() => {
  if (game?.isGameplayActive()) saveLocalGame();
}, 15000);
window.addEventListener('beforeunload', () => {
  saveLocalGame();
  multiplayer?.disconnect('页面关闭');
});
