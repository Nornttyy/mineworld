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
  | { type: 'block'; edit?: BlockEdit; dimension?: OnlineDimension; x?: number; y?: number; z?: number; id?: number }
  | { type: 'time'; worldTime: number }
  | ServerError;

const STATE_INTERVAL_MS = 1000 / 15;
const CONNECT_TIMEOUT_MS = 10_000;
const DEFAULT_MULTIPLAYER_SERVER = 'wss://mineworld-multiplayer-nornttyy.onrender.com/ws';

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

function parseWelcome(value: unknown): WelcomeMessage | null {
  if (!isRecord(value) || value.type !== 'welcome' || typeof value.id !== 'string' || !isRecord(value.room)) return null;
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
  if (raw.type === 'error' && typeof raw.message === 'string') return { type: 'error', message: raw.message };
  if (raw.type === 'player-join') {
    const player = parsePlayer(raw.player);
    return player ? { type: 'player-join', player } : null;
  }
  if (raw.type === 'player-leave' && typeof raw.id === 'string') return { type: 'player-leave', id: raw.id };
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
  if (raw.type === 'time' && finite(raw.worldTime)) return { type: 'time', worldTime: raw.worldTime };
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
  const clean = value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 16);
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
  const stored = localStorage.getItem('mineworld.multiplayer.server');
  const build = import.meta.env.VITE_MULTIPLAYER_URL;
  const local = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const candidate = query || stored || build || (local ? `ws://${window.location.hostname}:8787/ws` : DEFAULT_MULTIPLAYER_SERVER);
  try {
    const url = new URL(candidate);
    if (url.protocol === 'ws:' || url.protocol === 'wss:') return url.toString();
  } catch {
    // 下方回退到项目默认服务，避免把非法 query 直接交给 WebSocket 抛异常。
  }
  return DEFAULT_MULTIPLAYER_SERVER;
}

/** 连接成功后由 Game 每帧读取远端状态、按固定频率上报自己。 */
export class MultiplayerClient {
  private readonly socket: WebSocket;
  private readonly players = new Map<string, RemotePlayerState>();
  private _id = '';
  private _room: OnlineRoom | null = null;
  private _initialEdits: readonly BlockEdit[] = [];
  private _closed = false;
  private lastStateSent = -Infinity;
  private disconnectReason = '';
  private blockHandler: ((edit: BlockEdit) => void) | null = null;
  private worldTimeHandler: ((worldTime: number) => void) | null = null;
  private readonly pendingBlocks: BlockEdit[] = [];
  private pendingWorldTime: number | null = null;

  onPlayersChanged: (() => void) | null = null;
  onDisconnect: ((reason: string) => void) | null = null;

  private constructor(socket: WebSocket) {
    this.socket = socket;
  }

  static connect(options: MultiplayerJoinOptions): Promise<MultiplayerClient> {
    const room = normalizeRoomCode(options.room);
    if (room.length < 3) return Promise.reject(new Error('房间号至少需要 3 个字符'));
    const name = normalizePlayerName(options.name);
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
      timer = window.setTimeout(() => fail('连接超时，请检查联机服务器是否已启动'), CONNECT_TIMEOUT_MS);
      client.socket.addEventListener('open', () => {
        client.send({
          type: 'join',
          action: options.action,
          room,
          name,
          skin: 'default',
          gameMode: options.gameMode ?? 'creative',
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
      client.socket.addEventListener('error', () => fail('无法连接联机服务器'));
      client.socket.addEventListener('close', (event) => {
        const reason = client.disconnectReason || (event.code === 1000 ? '已断开联机' : '联机连接已断开');
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
   * Game 构造会晚于 welcome 数帧；在这之前抵达的方块包先排队，避免玩家刚进房间就漏掉别人挖/放的方块。
   */
  setBlockHandler(handler: ((edit: BlockEdit) => void) | null): void {
    this.blockHandler = handler;
    if (!handler) return;
    for (const edit of this.pendingBlocks.splice(0)) handler(edit);
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
      this.disconnectReason = message.message;
      this.socket.close(1008, message.message.slice(0, 120));
      return null;
    }
    if (message.type === 'welcome') {
      this._id = message.id;
      this._room = message.room;
      this._initialEdits = message.edits;
      this.players.clear();
      for (const player of message.players) if (player.id !== this._id) this.players.set(player.id, player);
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
      if (this.blockHandler) this.blockHandler(edit);
      else this.pendingBlocks.push(edit);
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
