import { Game } from './game/Game';
import { MenuBackground } from './render/MenuBackground';
import {
  listWorlds,
  createWorld,
  saveWorld,
  deleteWorld,
  parseSeed,
  dimEditKey,
  type WorldSave,
  type GameMode,
} from './save/worldStore';
import { SettingsMenu } from './ui/settingsMenu';
import { installTouchZoomGuards, supportsTouchControls } from './input/TouchControls';
import {
  multiplayerHostWorldFromSave,
  normalizePlayerName,
  type MultiplayerSession,
} from './multiplayer/MultiplayerClient';
import { PeerMultiplayerClient } from './multiplayer/PeerMultiplayerClient';
import { gameAudio } from './audio/GameAudio';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const $ = (id: string): HTMLElement => document.getElementById(id) as HTMLElement;
const touchMode = supportsTouchControls();
document.documentElement.classList.toggle('touch-device', touchMode);
if (touchMode) installTouchZoomGuards();

// 菜单按钮使用轻柔的短促反馈；pointerdown 已先解锁 AudioContext，所以首次点击也能正常播放。
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target instanceof Element && target.closest('button')) gameAudio.uiClick();
});

// 主菜单/存档界面的旋转全景背景（独立画布，与游戏无关）
const menubgCanvas = $('menubg') as HTMLCanvasElement;
let menubg: MenuBackground | null = null;

const menu = $('menu');
const worldlist = $('worldlist');
const multiplayerMenu = $('multiplayer');
const pause = $('pause');
const worldRows = $('world-rows');
const onlineHud = $('online-hud');

let game: Game | null = null;
let gameStarting = false;
let multiplayer: MultiplayerSession | null = null;
let onlineErrorTimer: number | null = null;
let onlineErrorMessage = '';
// 直接加入别人的房间是临时在线世界，不能混进本地世界列表；从单人世界开房则仍以原本 id 持久化。
let persistGameLocally = false;

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
let startupFatal = false;
let bootstrapFinished = false;
const surfaceFatal = (msg: string): void => {
  if (gameStarted || bootstrapFinished) return;
  startupFatal = true;
  showLoading(true, `出错了：${msg}（请把这行字发给开发）`);
};
window.addEventListener('error', (e) => surfaceFatal(e.message || String((e as ErrorEvent).error)));
window.addEventListener('unhandledrejection', (e) =>
  surfaceFatal(String((e.reason && (e.reason.message || e.reason.stack)) || e.reason)),
);

// 必须在全局错误界面就绪之后再创建 WebGL 菜单背景。否则浏览器不支持 WebGL、
// GPU 上下文创建失败时，模块会在错误监听器安装前中断，只剩永久“加载中”。
try {
  menubg = new MenuBackground(menubgCanvas);
} catch (error) {
  console.error('[menubg] 初始化失败:', error);
  // 菜单全景只是装饰。GPU 暂时无法再创建一个 WebGL 上下文时仍应显示菜单，
  // 真正进入世界时再由 Game 的启动错误给出明确提示。
  menubg = null;
}

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
  $('held-item-name').style.display = show ? 'block' : 'none';
  // Java 1.12 创造 HUD 只保留准星与快捷栏，不显示生存红心/饥饿值。
  $('status').style.display = show && !(game?.isCreativeMode() ?? false) ? 'flex' : 'none';
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
  if (startupFatal) return;
  showLoading(true, '加载中…');
  try {
    if (menubg) {
      const preloadAbort = new AbortController();
      try {
        await Promise.race([menubg.preload(undefined, preloadAbort.signal), timeout(8000)]); // 背景预载封顶 8s，超时也进菜单
      } finally {
        // Promise.race 不会取消输掉的 Promise；显式终止 preload 内的定时器/rAF，避免它永久持有已释放的菜单世界。
        preloadAbort.abort();
      }
    }
  } catch (e) {
    console.error('[menubg] preload 失败:', e); // 背景挂了不该挡住菜单
  }
  if (startupFatal) return;
  // 菜单已经可操作后，零星事件/浏览器 Promise 拒绝不再把整站盖成启动失败页。
  // 进入世界的关键链路由 startGame 自己的 try/catch 负责显示错误。
  bootstrapFinished = true;
  showOnly(menu);
  showLoading(false);
})();
// 设置面板（局内/局外共用）：画面设置和主音量都即时生效。
const settingsMenu = new SettingsMenu($('settings'));
settingsMenu.onChange = (s): void => {
  gameAudio.setVolume(s.volume);
  game?.setTexturePack(s.texturePack);
  game?.setLightingQuality(s.lightingQuality); // 光影画质即时套用
  game?.setRenderDistance(s.renderDistance); // 渲染距离：即时改区块加载半径 + 雾距
};
$('settings-btn').addEventListener('click', () => settingsMenu.show());
$('settings-btn-pause').addEventListener('click', () => settingsMenu.show());

$('play').addEventListener('click', () => openWorldList());

// --- 在线房间 ---
const mpName = $('mp-name') as HTMLInputElement;
const mpCode = $('mp-code') as HTMLTextAreaElement;
const mpCodeLabel = $('mp-code-label');
const mpStatus = $('mp-status');
const mpCreate = $('mp-create') as HTMLButtonElement;
const mpJoin = $('mp-join') as HTMLButtonElement;
const mpCopy = $('mp-copy') as HTMLButtonElement;
const mpFinish = $('mp-finish') as HTMLButtonElement;
const mpTitle = $('mp-title');
const mpIntro = $('mp-intro');
const mpModeField = $('mp-mode-field');
const mpBack = $('mp-back') as HTMLButtonElement;
type MultiplayerPanelMode = 'join' | 'host';
let mpPanelMode: MultiplayerPanelMode = 'join';
let mpHostWorld: WorldSave | null = null;
let mpConnecting = false;
let pendingPeer: PeerMultiplayerClient | null = null;

function setMpStatus(text: string, error = false): void {
  mpStatus.textContent = text;
  mpStatus.classList.toggle('error', error);
}

function setMpGameMode(mode: GameMode): void {
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
  mpTitle.textContent = hosting ? '开启点对点房间' : '加入点对点房间';
  mpIntro.textContent = hosting
    ? '生成邀请码发给朋友；朋友返回回应码后，粘贴回来完成直连。'
    : '粘贴房主的邀请码，生成回应码发回给房主。双方页面都要保持打开。';
  mpCodeLabel.textContent = hosting ? '邀请码 / 好友回应码' : '房主的邀请码';
  mpCode.placeholder = hosting
    ? '先生成邀请码；收到好友回应码后，替换这里的内容'
    : '在这里粘贴以 MWP1. 开头的邀请码';
  mpModeField.classList.toggle('hidden', !hosting);
  mpCreate.classList.toggle('hidden', !hosting);
  mpJoin.classList.toggle('hidden', hosting);
  mpCopy.classList.add('hidden');
  mpFinish.classList.add('hidden');
  mpCreate.disabled = false;
  mpJoin.disabled = false;
  mpBack.textContent = hosting ? '返回暂停菜单' : '返回';
}

function randomRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'MW';
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function updateOnlineHud(): void {
  if (!multiplayer) {
    onlineHud.classList.add('hidden');
    return;
  }
  onlineHud.textContent =
    onlineErrorMessage ||
    `联机 · 房间 ${multiplayer.room.id.toUpperCase()}\n${multiplayer.playerCount} 名玩家`;
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
  pendingPeer?.disconnect('已取消连接');
  pendingPeer = null;
  setMultiplayerPanelMode('join');
  mpHostWorld = null;
  restoreMultiplayerName();
  mpCode.value = '';
  setMpGameMode('creative');
  setMpStatus('粘贴邀请码，再生成回应码发回给房主。');
  showMultiplayerPanel();
  (mpName.value ? mpCode : mpName).focus();
}

/** 单人世界暂停时生成 WebRTC 邀请；世界只发给接受邀请的浏览器。 */
function openHostedMultiplayerMenu(): void {
  if (!game || multiplayer !== null) return;
  pendingPeer?.disconnect('已取消连接');
  pendingPeer = null;
  mpHostWorld = game.snapshot();
  setMultiplayerPanelMode('host');
  restoreMultiplayerName();
  mpCode.value = '';
  setMpGameMode(mpHostWorld.gameMode ?? 'survival');
  setMpStatus('点击“生成邀请码”，复制给朋友。');
  showMultiplayerPanel();
  mpName.focus();
}

function closeMultiplayerMenu(): void {
  pendingPeer?.disconnect('已取消连接');
  pendingPeer = null;
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
function setMultiplayerSession(online: MultiplayerSession | null): void {
  if (onlineErrorTimer !== null) {
    window.clearTimeout(onlineErrorTimer);
    onlineErrorTimer = null;
  }
  onlineErrorMessage = '';
  multiplayer = online;
  $('save-quit').textContent = online ? '退出房间' : '保存并退出';
  $('open-room').classList.toggle('hidden', online !== null);
  if (!online) {
    onlineHud.classList.add('hidden');
    return;
  }
  online.onPlayersChanged = () => updateOnlineHud();
  online.onServerError = (message) => {
    if (multiplayer !== online) return;
    onlineErrorMessage = `联机操作未同步\n${message}`;
    updateOnlineHud();
    if (onlineErrorTimer !== null) window.clearTimeout(onlineErrorTimer);
    onlineErrorTimer = window.setTimeout(() => {
      onlineErrorTimer = null;
      onlineErrorMessage = '';
      if (multiplayer === online) updateOnlineHud();
    }, 4000);
  };
  online.onDisconnect = (reason) => {
    if (multiplayer !== online) return;
    if (onlineErrorTimer !== null) {
      window.clearTimeout(onlineErrorTimer);
      onlineErrorTimer = null;
    }
    onlineErrorMessage = '';
    const containerWasOpen = game?.isContainerOpen() ?? false;
    if (containerWasOpen) game?.prepareForSave();
    const saved = saveLocalGame();
    game?.detachMultiplayer(online);
    multiplayer = null;
    $('open-room').classList.toggle('hidden', !persistGameLocally);
    $('save-quit').textContent = persistGameLocally ? '保存并退出' : '退出房间';
    onlineHud.classList.remove('hidden');
    onlineHud.textContent = persistGameLocally
      ? `联机已断开 · 本地世界${saved ? '已保存' : '保存失败'}\n${reason}`
      : `联机已断开\n${reason}`;
    // 如果断线时正在容器里，prepareForSave 已收起 UI；回到暂停页等用户点击后再恢复控制。
    if (containerWasOpen && game) {
      game.setTouchActive(false);
      setHud(false);
      pause.classList.remove('hidden');
    }
  };
  updateOnlineHud();
}

function onlineWorld(client: MultiplayerSession): WorldSave {
  const edits: Record<string, number> = {};
  for (const edit of client.initialEdits)
    edits[dimEditKey(edit.dimension, edit.x, edit.y, edit.z)] = edit.id;
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

function rememberMultiplayerName(): string {
  const name = normalizePlayerName(mpName.value);
  mpName.value = name;
  try {
    localStorage.setItem('mineworld.multiplayer.name', name);
  } catch {
    // 不影响实际连接。
  }
  return name;
}

function setMpBusy(busy: boolean): void {
  mpConnecting = busy;
  mpCreate.disabled = busy;
  mpJoin.disabled = busy;
  mpFinish.disabled = busy;
}

async function createPeerInvitation(): Promise<void> {
  if (mpConnecting) return;
  if (mpPanelMode !== 'host' || !mpHostWorld) {
    setMpStatus('请先进入一个单人世界，再从暂停菜单开启房间。', true);
    return;
  }
  pendingPeer?.disconnect('已重新生成邀请');
  pendingPeer = null;
  setMpBusy(true);
  setMpStatus('正在收集直连信息…');
  try {
    const { client, invitation } = await PeerMultiplayerClient.createHost({
      room: randomRoomCode(),
      name: rememberMultiplayerName(),
      world: multiplayerHostWorldFromSave(mpHostWorld),
    });
    pendingPeer = client;
    mpCode.value = invitation;
    mpCopy.classList.remove('hidden');
    mpFinish.classList.remove('hidden');
    setMpStatus('邀请码已生成：复制给朋友。收到回应码后，用它替换上方内容，再点“使用回应码连接”。');
    mpCode.select();
  } catch (error) {
    setMpStatus(error instanceof Error ? error.message : '无法生成点对点邀请。', true);
  } finally {
    setMpBusy(false);
  }
}

async function answerPeerInvitation(): Promise<void> {
  if (mpConnecting) return;
  if (!mpCode.value.trim()) {
    setMpStatus('请先粘贴房主发来的完整邀请码。', true);
    mpCode.focus();
    return;
  }
  pendingPeer?.disconnect('已重新生成回应');
  pendingPeer = null;
  setMpBusy(true);
  setMpStatus('正在生成回应码…');
  try {
    const { client, response } = await PeerMultiplayerClient.answerInvitation({
      invitation: mpCode.value,
      name: rememberMultiplayerName(),
    });
    pendingPeer = client;
    mpCode.value = response;
    mpJoin.disabled = true;
    mpCopy.classList.remove('hidden');
    setMpStatus('回应码已生成：复制并发回房主。本页保持打开，连接成功后会自动进入世界。');
    mpCode.select();
    void client.waitUntilConnected(300_000).then((connected) => {
      if (pendingPeer !== connected) return;
      pendingPeer = null;
      startGame(onlineWorld(connected), connected);
    }).catch((error: unknown) => {
      if (pendingPeer !== client) return;
      pendingPeer = null;
      mpJoin.disabled = false;
      setMpStatus(error instanceof Error ? error.message : '点对点连接失败。', true);
    });
  } catch (error) {
    setMpStatus(error instanceof Error ? error.message : '无法生成点对点回应。', true);
  } finally {
    setMpBusy(false);
    if (pendingPeer) mpJoin.disabled = true;
  }
}

async function finishPeerHostConnection(): Promise<void> {
  if (mpConnecting || !pendingPeer || mpPanelMode !== 'host') return;
  const client = pendingPeer;
  setMpBusy(true);
  showLoading(true, '正在建立浏览器直连…');
  try {
    await client.acceptAnswer(mpCode.value);
    await client.waitUntilConnected(60_000);
    if (!game || !game.attachMultiplayer(client))
      throw new Error('当前世界已经不在单人状态，请返回后重试。');
    pendingPeer = null;
    setMultiplayerSession(client);
    mpHostWorld = null;
    multiplayerMenu.classList.add('hidden');
    pause.classList.add('hidden');
    showLoading(false);
    setHud(true);
    if (!touchMode) void canvas.requestPointerLock();
  } catch (error) {
    client.disconnect('连接未完成');
    if (pendingPeer === client) pendingPeer = null;
    showLoading(false);
    mpFinish.classList.add('hidden');
    mpCopy.classList.add('hidden');
    setMpStatus(error instanceof Error ? error.message : '点对点连接失败。', true);
    showMultiplayerPanel();
  } finally {
    setMpBusy(false);
  }
}

async function copyPeerCode(): Promise<void> {
  if (!mpCode.value) return;
  try {
    await navigator.clipboard.writeText(mpCode.value);
  } catch {
    mpCode.focus();
    mpCode.select();
    document.execCommand('copy');
  }
  setMpStatus(mpPanelMode === 'host' ? '已复制。发给朋友；再把朋友的回应码粘贴回来。' : '已复制。发回给房主，并保持本页打开。');
}

$('multiplayer-play').addEventListener('click', () => openMultiplayerMenu());
$('open-room').addEventListener('click', () => openHostedMultiplayerMenu());
$('mp-create').addEventListener('click', () => void createPeerInvitation());
$('mp-join').addEventListener('click', () => void answerPeerInvitation());
mpCopy.addEventListener('click', () => void copyPeerCode());
mpFinish.addEventListener('click', () => void finishPeerHostConnection());
mpBack.addEventListener('click', () => closeMultiplayerMenu());
mpName.addEventListener('keydown', (event) => {
  if (event.key === 'Enter')
    void (mpPanelMode === 'host' ? createPeerInvitation() : answerPeerInvitation());
});
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
      if (!deleteWorld(w.id)) {
        meta.textContent = '删除失败：浏览器存储不可用';
        return;
      }
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
    m === 'creative'
      ? '无限方块、自由飞行（双击空格）、无敌不饿——专心建造。'
      : '挖矿、合成、打怪，会饿会死。';
}
function submitNewWorld(): void {
  try {
    const world = createWorld(nwName.value, parseSeed(nwSeed.value) ?? undefined, nwMode);
    newworld.classList.add('hidden');
    startGame(world);
  } catch (error) {
    nwDesc.textContent = error instanceof Error ? error.message : '创建世界失败，请重试。';
  }
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
function startGame(world: WorldSave, online: MultiplayerSession | null = null): void {
  if (game || gameStarting) {
    online?.disconnect('游戏已经在运行');
    return;
  }
  gameStarting = true;
  persistGameLocally = online === null;
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
        if (online && !online.isConnected) throw new Error('联机在进入世界前已断开');
        showLoading(true, '进入中…①构建世界');
        const nextGame = new Game(canvas, world, online);
        game = nextGame;
        showLoading(true, '进入中…②生成出生区块');
        const preloadAbort = new AbortController();
        try {
          await Promise.race([nextGame.preloadSpawn(3, preloadAbort.signal), timeout(12000)]); // 出生预载封顶 12s，超时也进游戏
        } finally {
          // race 超时不会自动取消输掉的预加载；显式停掉轮询，避免后续与切维度争用旧世界。
          preloadAbort.abort();
        }
        showLoading(true, '进入中…③启动渲染');
        nextGame.start();
        gameStarting = false;
        gameStarted = true;
        (window as unknown as { __mw?: Game }).__mw = nextGame; // 调试/截图工具用：暴露 game 实例(tools/shot.mjs 定机位)
        showLoading(false);
        if (touchMode) {
          setHud(true);
          nextGame.setTouchActive(true);
        } else void canvas.requestPointerLock();
      } catch (e) {
        gameStarting = false;
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
function saveLocalGame(): boolean {
  if (!game || !persistGameLocally) return true;
  return saveWorld(game.snapshot());
}

$('resume').addEventListener('click', () => {
  if (touchMode) {
    pause.classList.add('hidden');
    setHud(true);
    game?.setTouchActive(true);
  } else void canvas.requestPointerLock();
});
$('save-quit').addEventListener('click', () => {
  const leavingOnline = multiplayer?.isConnected === true;
  if (persistGameLocally) game?.prepareForSave();
  if (!saveLocalGame()) {
    showLoading(true, '保存失败：请释放浏览器网站存储空间后重试');
    window.setTimeout(() => showLoading(false), 4000);
    return;
  }
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
    if (game.isContainerOpen()) return; // 背包/工作台/熔炉：保持 HUD、不把暂停菜单盖在容器上
    setHud(false);
    if (game.isDead()) death.style.display = 'flex';
    else pause.classList.remove('hidden');
  }
});

// 触屏没有 Pointer Lock，虚拟按钮通过事件让外层 UI 显示暂停/死亡页。
window.addEventListener('mineworld:touch-pause', () => {
  if (!game || game.isDead()) return;
  game.setTouchActive(false);
  saveLocalGame();
  setHud(false);
  pause.classList.remove('hidden');
});
// 死亡可能发生在指针已解锁的容器界面，不能只依赖 pointerlockchange 才显示死亡页。
window.addEventListener('mineworld:death', () => {
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

// 移动端切后台/杀页不保证触发 beforeunload，pagehide 才是更可靠的最后保存机会。
// 两个事件通常会连续抵达，只准备并写入一次；BFCache 恢复页面后重置哨兵。
let pageExitSaved = false;
function saveBeforePageExit(): void {
  if (pageExitSaved) return;
  pageExitSaved = true;
  game?.prepareForSave();
  saveLocalGame();
}
window.addEventListener('pagehide', saveBeforePageExit);
// iOS/Android 可能只先发 visibilitychange 就冻结页面；此时立即收好容器临时物品并存盘。
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'hidden' || !game) return;
  game.setTouchActive(false);
  game.prepareForSave();
  saveLocalGame();
  setHud(false);
  if (game.isDead()) death.style.display = 'flex';
  else pause.classList.remove('hidden');
});
window.addEventListener('pageshow', () => {
  pageExitSaved = false;
  // 从 BFCache 返回时，pagehide 已安全收起容器且触控仍处于禁用态；统一落到可恢复的暂停页，避免假死。
  if (game) {
    game.setTouchActive(false);
    setHud(false);
    if (game.isDead()) death.style.display = 'flex';
    else pause.classList.remove('hidden');
  }
});
window.addEventListener('beforeunload', () => {
  saveBeforePageExit();
  multiplayer?.disconnect('页面关闭');
});
