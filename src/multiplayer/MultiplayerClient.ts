import { parseEditKey, type WorldSave } from '../save/worldStore';

/**
 * 轻量联机客户端。
 *
 * 第一版只同步同一种子房间里的玩家状态和方块编辑；世界生成、背包、生物等仍由浏览器本地运行。
 * 服务端只做房间中继和基础校验，不能信任客户端发来的任意数据。
 */

export type OnlineGameMode = 'survival' | 'creative';
export type OnlineDimension = 'overworld' | 'nether';

export interface RemotePlayerState {
  id: string;
  name: string;
  skin: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  dimension: OnlineDimension;
}

export interface BlockEdit {
  dimension: OnlineDimension;
  x: number;
  y: number;
  z: number;
  id: number;
}

/**
 * 多格世界事件不能逐格走普通 block 包：传送门/爆炸可能一次改几十到几百格，
 * 既会撞普通挖放限频，也会让接收端看到只完成一半的结构。
 */
export type BlockBatchKind = 'portal' | 'explosion' | 'gravity' | 'local';

export type LocalPlayerState = Omit<RemotePlayerState, 'id' | 'name' | 'skin'>;

export interface BlockBatchPoint {
  x: number;
  y: number;
  z: number;
}

export interface BlockBatchOptions {
  /** 爆心，或玩家实际点燃/拆门的交互点；服务端据此做距离与范围校验。 */
  center?: BlockBatchPoint;
  /** 仅 portal 使用：服务端先验证目标门，再原子更新玩家维度/落点。 */
  transition?: LocalPlayerState;
}

export interface BlockBatch {
  kind: BlockBatchKind;
  edits: readonly BlockEdit[];
  center?: BlockBatchPoint;
  transition?: LocalPlayerState;
}

/**
 * 房主把正在游玩的本地世界带进房间时，服务器需要保存的最小共享快照。
 * 背包、玩家出生点和附近生物仍是本地状态；种子、时间和方块改动则是同房间共同的世界状态。
 */
export interface MultiplayerHostWorld {
  seed: number;
  gameMode: OnlineGameMode;
  worldTime: number;
  edits: readonly BlockEdit[];
}

export interface OnlineRoom {
  id: string;
  seed: number;
  gameMode: OnlineGameMode;
  worldTime: number;
}

export interface MultiplayerJoinOptions {
  url: string;
  action: 'create' | 'join';
  room: string;
  name: string;
  gameMode?: OnlineGameMode;
  /** 仅创建房间时使用：将当前单人世界作为这个房间的初始世界。 */
  world?: MultiplayerHostWorld;
}

/** 游戏层只依赖这一组联机能力；底层既可以是旧 WebSocket，也可以是免服务器的 WebRTC。 */
export interface MultiplayerSession {
  readonly id: string;
  readonly room: OnlineRoom;
  readonly isConnected: boolean;
  readonly playerCount: number;
  readonly remotePlayers: readonly RemotePlayerState[];
  readonly initialEdits: readonly BlockEdit[];
  onPlayersChanged: (() => void) | null;
  onServerError: ((message: string) => void) | null;
  onDisconnect: ((reason: string) => void) | null;
  sendState(state: LocalPlayerState): void;
  sendBlock(edit: BlockEdit): void;
  sendBlockBatch(
    kind: BlockBatchKind,
    edits: readonly BlockEdit[],
    options?: BlockBatchOptions,
  ): void;
  setBlockHandler(handler: ((edit: BlockEdit) => void) | null): void;
  setBlockBatchHandler(handler: ((batch: BlockBatch) => void) | null): void;
  setWorldTimeHandler(handler: ((worldTime: number) => void) | null): void;
  disconnect(reason?: string): void;
}

interface WelcomeMessage {
  type: 'welcome';
  id: string;
  room: OnlineRoom;
  players: RemotePlayerState[];
  edits: BlockEdit[];
}

interface ServerError {
  type: 'error';
  message: string;
}

type ServerMessage =
  | WelcomeMessage
  | { type: 'player-join'; player: RemotePlayerState }
  | { type: 'player-leave'; id: string }
  | { type: 'state'; id: string; player: RemotePlayerState }
  | {
      type: 'block';
      edit?: BlockEdit;
      dimension?: OnlineDimension;
      x?: number;
      y?: number;
      z?: number;
      id?: number;
    }
  | { type: 'blocks'; batch: BlockBatch }
  | { type: 'time'; worldTime: number }
  | ServerError;

const STATE_INTERVAL_MS = 1000 / 15;
const CONNECT_TIMEOUT_MS = 10_000;
const DEFAULT_MULTIPLAYER_SERVER = 'wss://mineworld-multiplayer-nornttyy.onrender.com/ws';
/** 与服务端上限对应；超过后先在本地给出可理解的错误，而不是发送超大 WebSocket 包。 */
export const MAX_MULTIPLAYER_INITIAL_EDITS = 5_000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function finite(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function integer(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value);
}

function asDimension(value: unknown): OnlineDimension | null {
  return value === 'overworld' || value === 'nether' ? value : null;
}

function asGameMode(value: unknown): OnlineGameMode | null {
  return value === 'survival' || value === 'creative' ? value : null;
}

function parsePlayer(value: unknown): RemotePlayerState | null {
  if (!isRecord(value)) return null;
  const dimension = asDimension(value.dimension);
  if (
    typeof value.id !== 'string' ||
    typeof value.name !== 'string' ||
    typeof value.skin !== 'string' ||
    !finite(value.x) ||
    !finite(value.y) ||
    !finite(value.z) ||
    !finite(value.yaw) ||
    !finite(value.pitch) ||
    dimension === null
  )
    return null;
  return {
    id: value.id,
    name: value.name,
    skin: value.skin,
    x: value.x,
    y: value.y,
    z: value.z,
    yaw: value.yaw,
    pitch: value.pitch,
    dimension,
  };
}

function parseEdit(value: unknown): BlockEdit | null {
  if (!isRecord(value)) return null;
  const dimension = asDimension(value.dimension);
  if (
    dimension === null ||
    !integer(value.x) ||
    !integer(value.y) ||
    !integer(value.z) ||
    !integer(value.id)
  )
    return null;
  return { dimension, x: value.x, y: value.y, z: value.z, id: value.id };
}

function parseBatchKind(value: unknown): BlockBatchKind | null {
  return value === 'portal' || value === 'explosion' || value === 'gravity' || value === 'local'
    ? value
    : null;
}

function parseBatchPoint(value: unknown): BlockBatchPoint | null {
  if (!isRecord(value) || !finite(value.x) || !finite(value.y) || !finite(value.z)) return null;
  return { x: value.x, y: value.y, z: value.z };
}

function parseLocalPlayerState(value: unknown): LocalPlayerState | null {
  if (!isRecord(value)) return null;
  const dimension = asDimension(value.dimension);
  if (
    !finite(value.x) ||
    !finite(value.y) ||
    !finite(value.z) ||
    !finite(value.yaw) ||
    !finite(value.pitch) ||
    dimension === null
  )
    return null;
  return {
    x: value.x,
    y: value.y,
    z: value.z,
    yaw: value.yaw,
    pitch: value.pitch,
    dimension,
  };
}

function parseBlockBatch(value: unknown): BlockBatch | null {
  if (!isRecord(value)) return null;
  const kind = parseBatchKind(value.kind);
  if (kind === null || !Array.isArray(value.edits) || value.edits.length > 512) return null;
  const edits = value.edits.map(parseEdit);
  if (edits.some((edit) => edit === null)) return null;
  const center = value.center === undefined ? undefined : parseBatchPoint(value.center);
  const transition =
    value.transition === undefined ? undefined : parseLocalPlayerState(value.transition);
  if (center === null || transition === null) return null;
  return {
    kind,
    edits: edits as BlockEdit[],
    ...(center ? { center } : {}),
    ...(transition ? { transition } : {}),
  };
}

export function isMultiplayerHostWorldValid(world: MultiplayerHostWorld): boolean {
  return (
    Number.isInteger(world.seed) &&
    world.seed >= -2_000_000_000 &&
    world.seed <= 2_000_000_000 &&
    asGameMode(world.gameMode) !== null &&
    finite(world.worldTime) &&
    Math.abs(world.worldTime) <= 2_000_000_000 &&
    Array.isArray(world.edits) &&
    world.edits.length <= MAX_MULTIPLAYER_INITIAL_EDITS &&
    world.edits.every((edit) => parseEdit(edit) !== null)
  );
}

/**
 * 把本地 WorldSave 转换为可以随“创建房间”包上传的共享初始世界。
 *
 * WorldSave 的 edits 用字符串键兼容旧存档；联机协议则使用显式维度/坐标对象。
 * 损坏的旧键会跳过，避免一个历史残留键阻止整个世界开房。
 */
export function multiplayerHostWorldFromSave(world: WorldSave): MultiplayerHostWorld {
  const edits: BlockEdit[] = [];
  for (const [key, id] of Object.entries(world.edits)) {
    const parsed = parseEditKey(key);
    const edit: BlockEdit = { dimension: parsed.dim, x: parsed.x, y: parsed.y, z: parsed.z, id };
    if (parseEdit(edit) !== null) edits.push(edit);
  }
  if (edits.length > MAX_MULTIPLAYER_INITIAL_EDITS) {
    throw new Error(
      `这个世界有 ${edits.length} 个方块改动，联机房间最多可带入 ${MAX_MULTIPLAYER_INITIAL_EDITS} 个。`,
    );
  }
  return {
    seed: Math.floor(world.seed),
    gameMode: world.gameMode ?? 'survival',
    worldTime: world.worldTime ?? 1000,
    edits,
  };
}

function parseWelcome(value: unknown): WelcomeMessage | null {
  if (
    !isRecord(value) ||
    value.type !== 'welcome' ||
    typeof value.id !== 'string' ||
    !isRecord(value.room)
  )
    return null;
  const gameMode = asGameMode(value.room.gameMode);
  if (
    typeof value.room.id !== 'string' ||
    !integer(value.room.seed) ||
    gameMode === null ||
    !finite(value.room.worldTime) ||
    !Array.isArray(value.players) ||
    !Array.isArray(value.edits)
  )
    return null;
  const players = value.players.map(parsePlayer);
  const edits = value.edits.map(parseEdit);
  if (players.some((p) => p === null) || edits.some((edit) => edit === null)) return null;
  return {
    type: 'welcome',
    id: value.id,
    room: { id: value.room.id, seed: value.room.seed, gameMode, worldTime: value.room.worldTime },
    players: players as RemotePlayerState[],
    edits: edits as BlockEdit[],
  };
}

function parseServerMessage(raw: unknown): ServerMessage | null {
  if (!isRecord(raw) || typeof raw.type !== 'string') return null;
  if (raw.type === 'welcome') return parseWelcome(raw);
  if (raw.type === 'error' && typeof raw.message === 'string')
    return { type: 'error', message: raw.message };
  if (raw.type === 'player-join') {
    const player = parsePlayer(raw.player);
    return player ? { type: 'player-join', player } : null;
  }
  if (raw.type === 'player-leave' && typeof raw.id === 'string')
    return { type: 'player-leave', id: raw.id };
  if (raw.type === 'state' && typeof raw.id === 'string') {
    const player = parsePlayer(raw.player);
    return player ? { type: 'state', id: raw.id, player } : null;
  }
  if (raw.type === 'block') {
    const nested = parseEdit(raw.edit);
    const flat = parseEdit(raw);
    const edit = nested ?? flat;
    return edit ? { type: 'block', edit } : null;
  }
  if (raw.type === 'blocks') {
    // 服务端发扁平形状 {type:'blocks',kind,edits,...}；也接受嵌套 batch，便于向后兼容试验版。
    const batch = parseBlockBatch(raw.batch) ?? parseBlockBatch(raw);
    return batch ? { type: 'blocks', batch } : null;
  }
  if (raw.type === 'time' && finite(raw.worldTime))
    return { type: 'time', worldTime: raw.worldTime };
  return null;
}

/** 将文本标准化成可分享的房间号。服务端会再次做严格验证。 */
export function normalizeRoomCode(value: string): string {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9-]/g, '')
    .slice(0, 16);
}

export function normalizePlayerName(value: string): string {
  const clean = [...value]
    .filter((character) => {
      const code = character.charCodeAt(0);
      return code > 0x1f && code !== 0x7f;
    })
    .join('')
    .trim()
    .slice(0, 16);
  return clean || '玩家';
}

/**
 * 浏览器站点与本地开发都能用：
 * - ?server=wss://.../ws 方便开发临时覆盖；
 * - localStorage 可在调试时长期覆盖；
 * - Vite 环境变量优先于默认 Render 域名。
 */
export function multiplayerServerUrl(): string {
  const query = new URLSearchParams(window.location.search).get('server');
  let stored: string | null = null;
  try {
    stored = localStorage.getItem('mineworld.multiplayer.server');
  } catch {
    // Safari 隐私模式等环境可能禁用存储；联机地址仍应回退到构建配置或默认值。
  }
  const build = import.meta.env.VITE_MULTIPLAYER_URL;
  const local =
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const candidate =
    query ||
    stored ||
    build ||
    (local ? `ws://${window.location.hostname}:8787/ws` : DEFAULT_MULTIPLAYER_SERVER);
  try {
    const url = new URL(candidate);
    if (url.protocol === 'ws:' || url.protocol === 'wss:') return url.toString();
  } catch {
    // 下方回退到项目默认服务，避免把非法 query 直接交给 WebSocket 抛异常。
  }
  return DEFAULT_MULTIPLAYER_SERVER;
}

/** 连接成功后由 Game 每帧读取远端状态、按固定频率上报自己。 */
export class MultiplayerClient implements MultiplayerSession {
  private readonly socket: WebSocket;
  private readonly players = new Map<string, RemotePlayerState>();
  private _id = '';
  private _room: OnlineRoom | null = null;
  private _initialEdits: readonly BlockEdit[] = [];
  private _closed = false;
  private lastStateSent = -Infinity;
  private disconnectReason = '';
  private blockHandler: ((edit: BlockEdit) => void) | null = null;
  private blockBatchHandler: ((batch: BlockBatch) => void) | null = null;
  private worldTimeHandler: ((worldTime: number) => void) | null = null;
  // 保留单格/批量包的原始到达顺序；Game 尚未构造完成时也不能把“炸掉→再放置”倒序重放。
  private readonly pendingBlockEvents: Array<
    { type: 'block'; edit: BlockEdit } | { type: 'blocks'; batch: BlockBatch }
  > = [];
  private pendingWorldTime: number | null = null;

  onPlayersChanged: (() => void) | null = null;
  /** 已入房后的业务拒绝（越界、限频等）只提示，不主动断开；是否踢出由服务端 close 决定。 */
  onServerError: ((message: string) => void) | null = null;
  onDisconnect: ((reason: string) => void) | null = null;

  private constructor(socket: WebSocket) {
    this.socket = socket;
  }

  static connect(options: MultiplayerJoinOptions): Promise<MultiplayerClient> {
    const room = normalizeRoomCode(options.room);
    if (room.length < 3) return Promise.reject(new Error('房间号至少需要 3 个字符'));
    const name = normalizePlayerName(options.name);
    if (options.action !== 'create' && options.world !== undefined) {
      return Promise.reject(new Error('只有创建房间时才能带入本地世界'));
    }
    if (options.world !== undefined && !isMultiplayerHostWorldValid(options.world)) {
      return Promise.reject(new Error('当前世界数据不适合开启联机房间'));
    }
    const gameMode = options.world?.gameMode ?? options.gameMode ?? 'creative';
    return new Promise((resolve, reject) => {
      let settled = false;
      let timer = 0;
      let client: MultiplayerClient;
      try {
        client = new MultiplayerClient(new WebSocket(options.url));
      } catch {
        reject(new Error('联机地址无效'));
        return;
      }
      const fail = (message: string): void => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timer);
        client.socket.close();
        reject(new Error(message));
      };
      timer = window.setTimeout(
        () => fail('连接超时，请检查联机服务器是否已启动'),
        CONNECT_TIMEOUT_MS,
      );
      client.socket.addEventListener('open', () => {
        client.send({
          type: 'join',
          action: options.action,
          room,
          name,
          skin: 'default',
          gameMode,
          world: options.world,
        });
      });
      client.socket.addEventListener('message', (event) => {
        const welcome = client.receive(event.data);
        if (welcome && !settled) {
          settled = true;
          window.clearTimeout(timer);
          resolve(client);
        }
      });
      client.socket.addEventListener('error', () => {
        const isDefault = options.url === DEFAULT_MULTIPLAYER_SERVER;
        fail(isDefault ? '联机服务器暂时不可用或仍在启动，请稍后重试。' : '无法连接联机服务器');
      });
      client.socket.addEventListener('close', (event) => {
        const reason =
          client.disconnectReason ||
          event.reason ||
          (event.code === 1000 ? '已断开联机' : '联机连接已断开');
        if (!settled) fail(reason);
        else client.close(reason);
      });
    });
  }

  get id(): string {
    return this._id;
  }

  get room(): OnlineRoom {
    if (this._room === null) throw new Error('联机房间尚未就绪');
    return this._room;
  }

  get isConnected(): boolean {
    return !this._closed && this.socket.readyState === WebSocket.OPEN;
  }

  get playerCount(): number {
    return this.players.size + (this._id ? 1 : 0);
  }

  get remotePlayers(): readonly RemotePlayerState[] {
    return [...this.players.values()];
  }

  /** welcome 时的完整房间改动，在构造同种子世界前一次性贴入。 */
  get initialEdits(): readonly BlockEdit[] {
    return this._initialEdits;
  }

  sendState(state: Omit<RemotePlayerState, 'id' | 'name' | 'skin'>): void {
    if (!this.isConnected) return;
    const now = performance.now();
    if (now - this.lastStateSent < STATE_INTERVAL_MS) return;
    if (
      !finite(state.x) ||
      !finite(state.y) ||
      !finite(state.z) ||
      !finite(state.yaw) ||
      !finite(state.pitch) ||
      asDimension(state.dimension) === null
    )
      return;
    this.lastStateSent = now;
    this.send({ type: 'state', player: state });
  }

  sendBlock(edit: BlockEdit): void {
    if (!this.isConnected || parseEdit(edit) === null) return;
    this.send({ type: 'block', ...edit });
  }

  /**
   * 原子发送多格世界事件。center/transition 的语义由 kind 决定，服务端会再次严格验证：
   * - local: center 必填；仅当前维度的一张门面（全 AIR 或全 NETHER_PORTAL）。
   * - explosion: center 必填；仅当前维度的爆炸 AIR，及同批结算的沙/砾石重力终态。
   * - gravity: center 必填；仅交互点所在竖列的沙/砾石下落终态。
   * - portal: transition 必填；允许原子跨到相反维度并在落点附近创建目的地门。
   */
  sendBlockBatch(
    kind: BlockBatchKind,
    edits: readonly BlockEdit[],
    options: BlockBatchOptions = {},
  ): void {
    if (!this.isConnected) return;
    const batch = parseBlockBatch({ kind, edits, ...options });
    if (!batch) return;
    this.send({ type: 'blocks', ...batch });
  }

  /**
   * Game 构造会晚于 welcome 数帧；在这之前抵达的方块包先排队，避免玩家刚进房间就漏掉别人挖/放的方块。
   */
  setBlockHandler(handler: ((edit: BlockEdit) => void) | null): void {
    this.blockHandler = handler;
    this.flushPendingBlockEvents();
  }

  /**
   * 批量处理器应先于 setBlockHandler 安装。没有批量处理器的旧 Game 仍会把批量包逐格交给
   * blockHandler，保持协议升级期间的兼容；新版则能一次落盘/一次重建网格。
   */
  setBlockBatchHandler(handler: ((batch: BlockBatch) => void) | null): void {
    this.blockBatchHandler = handler;
    this.flushPendingBlockEvents();
  }

  setWorldTimeHandler(handler: ((worldTime: number) => void) | null): void {
    this.worldTimeHandler = handler;
    if (handler && this.pendingWorldTime !== null) {
      handler(this.pendingWorldTime);
      this.pendingWorldTime = null;
    }
  }

  disconnect(reason = '已退出房间'): void {
    this.disconnectReason = reason;
    if (!this._closed) this.socket.close(1000, reason.slice(0, 120));
    this.close(reason);
  }

  private receive(raw: unknown): WelcomeMessage | null {
    let value: unknown;
    try {
      value = typeof raw === 'string' ? JSON.parse(raw) : JSON.parse(String(raw));
    } catch {
      return null;
    }
    const message = parseServerMessage(value);
    if (!message) return null;
    if (message.type === 'error') {
      if (this._room === null) {
        // join/create 失败时不会再有 welcome；关闭连接让 connect Promise 立即以服务端原因失败。
        this.disconnectReason = message.message;
        this.socket.close(1008, message.message.slice(0, 120));
      } else {
        // 已入房后的业务错误不是掉线。服务端会累计恶意请求并在达到阈值时主动 close；
        // 客户端提前关闭会把一次偶发竞态（例如另一玩家刚拆门）错误升级成整场掉线。
        this.onServerError?.(message.message);
      }
      return null;
    }
    if (message.type === 'welcome') {
      this._id = message.id;
      this._room = message.room;
      this._initialEdits = message.edits;
      this.players.clear();
      for (const player of message.players)
        if (player.id !== this._id) this.players.set(player.id, player);
      this.onPlayersChanged?.();
      return message;
    }
    if (message.type === 'player-join') {
      if (message.player.id !== this._id) this.players.set(message.player.id, message.player);
      this.onPlayersChanged?.();
    } else if (message.type === 'player-leave') {
      this.players.delete(message.id);
      this.onPlayersChanged?.();
    } else if (message.type === 'state') {
      if (message.id !== this._id) this.players.set(message.id, message.player);
      this.onPlayersChanged?.();
    } else if (message.type === 'block') {
      const edit = message.edit as BlockEdit;
      this.pendingBlockEvents.push({ type: 'block', edit });
      this.flushPendingBlockEvents();
    } else if (message.type === 'blocks') {
      this.pendingBlockEvents.push({ type: 'blocks', batch: message.batch });
      this.flushPendingBlockEvents();
    } else if (message.type === 'time') {
      if (this.worldTimeHandler) this.worldTimeHandler(message.worldTime);
      else this.pendingWorldTime = message.worldTime;
    }
    return null;
  }

  private send(message: unknown): void {
    if (this.socket.readyState !== WebSocket.OPEN) return;
    this.socket.send(JSON.stringify(message));
  }

  private flushPendingBlockEvents(): void {
    let consumed = 0;
    for (const event of this.pendingBlockEvents) {
      if (event.type === 'block') {
        if (!this.blockHandler) break;
        this.blockHandler(event.edit);
      } else if (this.blockBatchHandler) {
        this.blockBatchHandler(event.batch);
      } else if (this.blockHandler) {
        // 新服务端 + 旧 Game 的兼容路径；仍保持同一批内的顺序。
        for (const edit of event.batch.edits) this.blockHandler(edit);
      } else break;
      consumed++;
    }
    if (consumed > 0) this.pendingBlockEvents.splice(0, consumed);
  }

  private close(reason: string): void {
    if (this._closed) return;
    this._closed = true;
    // 一旦断线就移除旧快照；否则渲染器会把最后一次见到的朋友冻结在原地。
    if (this.players.size > 0) {
      this.players.clear();
      this.onPlayersChanged?.();
    }
    this.onDisconnect?.(reason);
  }
}
