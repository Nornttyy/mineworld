import {
  isMultiplayerHostWorldValid,
  normalizePlayerName,
  normalizeRoomCode,
  type BlockBatch,
  type BlockBatchKind,
  type BlockBatchOptions,
  type BlockEdit,
  type LocalPlayerState,
  type MultiplayerHostWorld,
  type MultiplayerSession,
  type OnlineDimension,
  type OnlineRoom,
  type RemotePlayerState,
} from './MultiplayerClient';

const SIGNAL_PREFIX = 'MWP1.';
const SIGNAL_LIMIT = 120_000;
const STATE_INTERVAL_MS = 1000 / 15;
const WORLD_CHUNK_EDITS = 96;
const PEER_CONFIG: RTCConfiguration = {
  // 只用于发现两端公网地址，不承载、保存或转发游戏数据；实际数据走浏览器间 DataChannel。
  iceServers: [{ urls: 'stun:stun.cloudflare.com:3478' }],
};

interface OfferSignal {
  v: 1;
  kind: 'offer';
  session: string;
  room: string;
  hostName: string;
  description: RTCSessionDescriptionInit;
}

interface AnswerSignal {
  v: 1;
  kind: 'answer';
  session: string;
  guestName: string;
  description: RTCSessionDescriptionInit;
}

export type PeerSignal = OfferSignal | AnswerSignal;

export interface PeerHostOptions {
  room: string;
  name: string;
  world: MultiplayerHostWorld;
}

export interface PeerGuestOptions {
  invitation: string;
  name: string;
}

type ReadyWaiter = {
  resolve: (client: PeerMultiplayerClient) => void;
  reject: (error: Error) => void;
  timer: ReturnType<typeof setTimeout>;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function finite(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function validDescription(value: unknown, type: 'offer' | 'answer'): value is RTCSessionDescriptionInit {
  return (
    isRecord(value) &&
    value.type === type &&
    typeof value.sdp === 'string' &&
    value.sdp.length > 0 &&
    value.sdp.length <= SIGNAL_LIMIT
  );
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlToBytes(value: string): Uint8Array {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

export function encodePeerSignal(signal: PeerSignal): string {
  return SIGNAL_PREFIX + bytesToBase64Url(new TextEncoder().encode(JSON.stringify(signal)));
}

export function decodePeerSignal(code: string): PeerSignal {
  const compact = code.trim().replace(/\s+/g, '');
  if (!compact.startsWith(SIGNAL_PREFIX) || compact.length > SIGNAL_LIMIT)
    throw new Error('这不是有效的 MINEWORLD 点对点连接码');
  let value: unknown;
  try {
    value = JSON.parse(new TextDecoder().decode(base64UrlToBytes(compact.slice(SIGNAL_PREFIX.length))));
  } catch {
    throw new Error('连接码已损坏，请让好友重新复制完整代码');
  }
  if (!isRecord(value) || value.v !== 1 || typeof value.session !== 'string')
    throw new Error('连接码版本不受支持');
  if (
    value.kind === 'offer' &&
    typeof value.room === 'string' &&
    typeof value.hostName === 'string' &&
    validDescription(value.description, 'offer')
  ) {
    const room = normalizeRoomCode(value.room);
    if (room.length < 3 || room !== value.room) throw new Error('邀请中的房间信息无效');
    return {
      v: 1,
      kind: 'offer',
      session: value.session,
      room,
      hostName: normalizePlayerName(value.hostName),
      description: value.description,
    };
  }
  if (
    value.kind === 'answer' &&
    typeof value.guestName === 'string' &&
    validDescription(value.description, 'answer')
  ) {
    return {
      v: 1,
      kind: 'answer',
      session: value.session,
      guestName: normalizePlayerName(value.guestName),
      description: value.description,
    };
  }
  throw new Error('连接码内容不完整，请重新生成');
}

function randomSession(): string {
  const values = new Uint32Array(3);
  crypto.getRandomValues(values);
  return [...values].map((value) => value.toString(36)).join('');
}

async function waitForIce(pc: RTCPeerConnection, timeoutMs = 12_000): Promise<void> {
  if (pc.iceGatheringState === 'complete') return;
  await new Promise<void>((resolve) => {
    const finish = (): void => {
      clearTimeout(timer);
      pc.removeEventListener('icegatheringstatechange', changed);
      resolve();
    };
    const changed = (): void => {
      if (pc.iceGatheringState === 'complete') finish();
    };
    const timer = setTimeout(finish, timeoutMs);
    pc.addEventListener('icegatheringstatechange', changed);
  });
}

function validDimension(value: unknown): value is OnlineDimension {
  return value === 'overworld' || value === 'nether';
}

function validEdit(value: unknown): value is BlockEdit {
  return (
    isRecord(value) &&
    validDimension(value.dimension) &&
    Number.isInteger(value.x) &&
    Number.isInteger(value.y) &&
    Number.isInteger(value.z) &&
    Number.isInteger(value.id) &&
    Math.abs(value.x as number) <= 30_000_000 &&
    (value.y as number) >= 0 &&
    (value.y as number) < 192 &&
    Math.abs(value.z as number) <= 30_000_000 &&
    (value.id as number) >= 0 &&
    (value.id as number) <= 255
  );
}

function validLocalState(value: unknown): value is LocalPlayerState {
  return (
    isRecord(value) &&
    finite(value.x) &&
    finite(value.y) &&
    finite(value.z) &&
    finite(value.yaw) &&
    finite(value.pitch) &&
    validDimension(value.dimension) &&
    Math.abs(value.x) <= 30_000_000 &&
    Math.abs(value.z) <= 30_000_000
  );
}

function parseRemotePlayer(value: unknown): RemotePlayerState | null {
  if (!isRecord(value)) return null;
  const record = value;
  const { id, name, skin } = record;
  if (
    typeof id !== 'string' ||
    typeof name !== 'string' ||
    typeof skin !== 'string' ||
    !validLocalState(record)
  ) return null;
  return {
    id: id.slice(0, 48),
    name: normalizePlayerName(name),
    skin: skin.slice(0, 32),
    x: record.x,
    y: record.y,
    z: record.z,
    yaw: record.yaw,
    pitch: record.pitch,
    dimension: record.dimension,
  };
}

function parseBatch(value: unknown): BlockBatch | null {
  if (!isRecord(value) || !Array.isArray(value.edits) || value.edits.length > 512) return null;
  const kinds: readonly BlockBatchKind[] = ['portal', 'explosion', 'gravity', 'local'];
  if (!kinds.includes(value.kind as BlockBatchKind) || !value.edits.every(validEdit)) return null;
  const center = value.center;
  if (
    center !== undefined &&
    (!isRecord(center) || !finite(center.x) || !finite(center.y) || !finite(center.z))
  )
    return null;
  const transition = value.transition;
  if (transition !== undefined && !validLocalState(transition)) return null;
  return {
    kind: value.kind as BlockBatchKind,
    edits: value.edits,
    ...(center
      ? { center: { x: center.x as number, y: center.y as number, z: center.z as number } }
      : {}),
    ...(transition ? { transition } : {}),
  };
}

/**
 * 两人免游戏服务器联机。邀请与回应通过聊天手工交换；连接建立后，位置和方块数据只走 WebRTC。
 */
export class PeerMultiplayerClient implements MultiplayerSession {
  private readonly players = new Map<string, RemotePlayerState>();
  private readonly waiters: ReadyWaiter[] = [];
  private readonly incomingWorldEdits: BlockEdit[] = [];
  private channel: RTCDataChannel | null = null;
  private roomData: OnlineRoom | null;
  private initialWorldEdits: readonly BlockEdit[];
  private closed = false;
  private ready = false;
  private lastStateSent = -Infinity;
  private blockHandler: ((edit: BlockEdit) => void) | null = null;
  private blockBatchHandler: ((batch: BlockBatch) => void) | null = null;
  private worldTimeHandler: ((worldTime: number) => void) | null = null;
  private readonly pendingBlockEvents: Array<
    { type: 'block'; edit: BlockEdit } | { type: 'blocks'; batch: BlockBatch }
  > = [];
  private pendingWorldTime: number | null = null;

  onPlayersChanged: (() => void) | null = null;
  onServerError: ((message: string) => void) | null = null;
  onDisconnect: ((reason: string) => void) | null = null;

  private constructor(
    private readonly pc: RTCPeerConnection,
    private readonly role: 'host' | 'guest',
    private readonly session: string,
    private readonly ownId: string,
    private readonly ownName: string,
    room: OnlineRoom | null,
    private readonly hostWorld: MultiplayerHostWorld | null,
  ) {
    this.roomData = room;
    this.initialWorldEdits = hostWorld?.edits ?? [];
    this.pc.addEventListener('connectionstatechange', () => {
      if (this.pc.connectionState === 'failed' || this.pc.connectionState === 'closed')
        this.close('点对点连接已断开');
    });
  }

  static async createHost(
    options: PeerHostOptions,
  ): Promise<{ client: PeerMultiplayerClient; invitation: string }> {
    if (!isMultiplayerHostWorldValid(options.world)) throw new Error('当前世界无法用于联机');
    const room = normalizeRoomCode(options.room);
    if (room.length < 3) throw new Error('房间号无效');
    const name = normalizePlayerName(options.name);
    const session = randomSession();
    const pc = new RTCPeerConnection(PEER_CONFIG);
    const client = new PeerMultiplayerClient(
      pc,
      'host',
      session,
      `host-${session}`,
      name,
      { id: room, seed: options.world.seed, gameMode: options.world.gameMode, worldTime: options.world.worldTime },
      options.world,
    );
    client.bindChannel(pc.createDataChannel('mineworld', { ordered: true }));
    await pc.setLocalDescription(await pc.createOffer());
    await waitForIce(pc);
    if (!pc.localDescription) throw new Error('浏览器没有生成点对点邀请');
    return {
      client,
      invitation: encodePeerSignal({
        v: 1,
        kind: 'offer',
        session,
        room,
        hostName: name,
        description: pc.localDescription.toJSON(),
      }),
    };
  }

  static async answerInvitation(
    options: PeerGuestOptions,
  ): Promise<{ client: PeerMultiplayerClient; response: string }> {
    const offer = decodePeerSignal(options.invitation);
    if (offer.kind !== 'offer') throw new Error('请粘贴房主生成的邀请码');
    const pc = new RTCPeerConnection(PEER_CONFIG);
    const name = normalizePlayerName(options.name);
    const client = new PeerMultiplayerClient(
      pc,
      'guest',
      offer.session,
      `guest-${offer.session}`,
      name,
      null,
      null,
    );
    pc.addEventListener('datachannel', (event) => client.bindChannel(event.channel), { once: true });
    await pc.setRemoteDescription(offer.description);
    await pc.setLocalDescription(await pc.createAnswer());
    await waitForIce(pc);
    if (!pc.localDescription) throw new Error('浏览器没有生成点对点回应');
    return {
      client,
      response: encodePeerSignal({
        v: 1,
        kind: 'answer',
        session: offer.session,
        guestName: name,
        description: pc.localDescription.toJSON(),
      }),
    };
  }

  async acceptAnswer(code: string): Promise<void> {
    if (this.role !== 'host') throw new Error('只有房主可以使用回应码');
    if (this.pc.signalingState !== 'have-local-offer') throw new Error('这个邀请已经使用过了');
    const answer = decodePeerSignal(code);
    if (answer.kind !== 'answer') throw new Error('请把邀请码替换成好友发回的回应码');
    if (answer.session !== this.session) throw new Error('回应码不属于这次邀请，请重新复制');
    await this.pc.setRemoteDescription(answer.description);
  }

  waitUntilConnected(timeoutMs = 45_000): Promise<PeerMultiplayerClient> {
    if (this.ready && this.isConnected) return Promise.resolve(this);
    if (this.closed) return Promise.reject(new Error('点对点连接已经关闭'));
    return new Promise((resolve, reject) => {
      const waiter: ReadyWaiter = {
        resolve,
        reject,
        timer: setTimeout(() => {
          const index = this.waiters.indexOf(waiter);
          if (index >= 0) this.waiters.splice(index, 1);
          reject(new Error('连接超时，请确认双方页面保持打开，并交换了完整的连接码'));
        }, timeoutMs),
      };
      this.waiters.push(waiter);
    });
  }

  get id(): string {
    return this.ownId;
  }

  get room(): OnlineRoom {
    if (!this.roomData) throw new Error('点对点世界尚未同步完成');
    return this.roomData;
  }

  get isConnected(): boolean {
    return this.ready && !this.closed && this.channel?.readyState === 'open';
  }

  get playerCount(): number {
    return this.isConnected ? this.players.size + 1 : 0;
  }

  get remotePlayers(): readonly RemotePlayerState[] {
    return [...this.players.values()];
  }

  get initialEdits(): readonly BlockEdit[] {
    return this.initialWorldEdits;
  }

  sendState(state: LocalPlayerState): void {
    if (!this.isConnected || !validLocalState(state)) return;
    const now = performance.now();
    if (now - this.lastStateSent < STATE_INTERVAL_MS) return;
    this.lastStateSent = now;
    this.send({
      type: 'state',
      player: { id: this.ownId, name: this.ownName, skin: 'default', ...state },
    });
  }

  sendBlock(edit: BlockEdit): void {
    if (this.isConnected && validEdit(edit)) this.send({ type: 'block', edit });
  }

  sendBlockBatch(
    kind: BlockBatchKind,
    edits: readonly BlockEdit[],
    options: BlockBatchOptions = {},
  ): void {
    if (!this.isConnected) return;
    const batch = parseBatch({ kind, edits, ...options });
    if (batch) this.send({ type: 'blocks', batch });
  }

  setBlockHandler(handler: ((edit: BlockEdit) => void) | null): void {
    this.blockHandler = handler;
    this.flushPendingBlocks();
  }

  setBlockBatchHandler(handler: ((batch: BlockBatch) => void) | null): void {
    this.blockBatchHandler = handler;
    this.flushPendingBlocks();
  }

  setWorldTimeHandler(handler: ((worldTime: number) => void) | null): void {
    this.worldTimeHandler = handler;
    if (handler && this.pendingWorldTime !== null) {
      handler(this.pendingWorldTime);
      this.pendingWorldTime = null;
    }
  }

  disconnect(reason = '已退出点对点房间'): void {
    if (this.channel?.readyState === 'open') this.send({ type: 'goodbye', reason });
    this.close(reason);
  }

  private bindChannel(channel: RTCDataChannel): void {
    if (this.channel && this.channel !== channel) this.channel.close();
    this.channel = channel;
    channel.addEventListener('open', () => {
      if (this.role === 'host') {
        this.sendInitialWorld();
        this.markReady();
      }
    });
    channel.addEventListener('message', (event) => this.receive(event.data));
    channel.addEventListener('close', () => this.close('好友已断开点对点连接'));
    channel.addEventListener('error', () => this.onServerError?.('点对点数据通道发生错误'));
    if (channel.readyState === 'open' && this.role === 'host') {
      this.sendInitialWorld();
      this.markReady();
    }
  }

  private sendInitialWorld(): void {
    if (!this.roomData || !this.hostWorld) return;
    this.send({
      type: 'hello',
      room: this.roomData,
      host: { id: this.ownId, name: this.ownName, skin: 'default' },
    });
    for (let offset = 0; offset < this.hostWorld.edits.length; offset += WORLD_CHUNK_EDITS) {
      this.send({
        type: 'world',
        edits: this.hostWorld.edits.slice(offset, offset + WORLD_CHUNK_EDITS),
      });
    }
    this.send({ type: 'world-ready' });
  }

  private receive(raw: unknown): void {
    if (typeof raw !== 'string' || raw.length > 1_000_000) return;
    let message: unknown;
    try {
      message = JSON.parse(raw);
    } catch {
      return;
    }
    if (!isRecord(message) || typeof message.type !== 'string') return;
    if (message.type === 'hello' && this.role === 'guest') {
      if (!isRecord(message.room) || !isRecord(message.host)) return;
      const gameMode = message.room.gameMode;
      if (
        typeof message.room.id !== 'string' ||
        !Number.isInteger(message.room.seed) ||
        (gameMode !== 'creative' && gameMode !== 'survival') ||
        !finite(message.room.worldTime)
      )
        return;
      this.roomData = {
        id: normalizeRoomCode(message.room.id),
        seed: message.room.seed as number,
        gameMode,
        worldTime: message.room.worldTime,
      };
      this.pendingWorldTime = message.room.worldTime;
      return;
    }
    if (message.type === 'world' && this.role === 'guest') {
      if (!Array.isArray(message.edits) || !message.edits.every(validEdit)) return;
      if (this.incomingWorldEdits.length + message.edits.length > 5_000) {
        this.close('好友世界数据过大');
        return;
      }
      this.incomingWorldEdits.push(...message.edits);
      return;
    }
    if (message.type === 'world-ready' && this.role === 'guest' && this.roomData) {
      this.initialWorldEdits = [...this.incomingWorldEdits];
      this.markReady();
      return;
    }
    if (message.type === 'state') {
      const player = parseRemotePlayer(message.player);
      if (player && player.id !== this.ownId) {
        this.players.set(player.id, player);
        this.onPlayersChanged?.();
      }
      return;
    }
    if (message.type === 'block' && validEdit(message.edit)) {
      this.pendingBlockEvents.push({ type: 'block', edit: message.edit });
      this.flushPendingBlocks();
      return;
    }
    if (message.type === 'blocks') {
      const batch = parseBatch(message.batch);
      if (batch) {
        this.pendingBlockEvents.push({ type: 'blocks', batch });
        this.flushPendingBlocks();
      }
      return;
    }
    if (message.type === 'time' && finite(message.worldTime)) {
      if (this.worldTimeHandler) this.worldTimeHandler(message.worldTime);
      else this.pendingWorldTime = message.worldTime;
      return;
    }
    if (message.type === 'goodbye') {
      this.close(typeof message.reason === 'string' ? message.reason : '好友已退出房间');
    }
  }

  private send(message: unknown): void {
    if (this.channel?.readyState === 'open') this.channel.send(JSON.stringify(message));
  }

  private flushPendingBlocks(): void {
    let consumed = 0;
    for (const event of this.pendingBlockEvents) {
      if (event.type === 'block') {
        if (!this.blockHandler) break;
        this.blockHandler(event.edit);
      } else if (this.blockBatchHandler) {
        this.blockBatchHandler(event.batch);
      } else if (this.blockHandler) {
        for (const edit of event.batch.edits) this.blockHandler(edit);
      } else break;
      consumed++;
    }
    if (consumed > 0) this.pendingBlockEvents.splice(0, consumed);
  }

  private markReady(): void {
    if (this.ready || this.closed) return;
    this.ready = true;
    for (const waiter of this.waiters.splice(0)) {
      clearTimeout(waiter.timer);
      waiter.resolve(this);
    }
    this.onPlayersChanged?.();
  }

  private close(reason: string): void {
    if (this.closed) return;
    this.closed = true;
    for (const waiter of this.waiters.splice(0)) {
      clearTimeout(waiter.timer);
      waiter.reject(new Error(reason));
    }
    if (this.channel && this.channel.readyState !== 'closed') this.channel.close();
    if (this.pc.signalingState !== 'closed') this.pc.close();
    if (this.players.size > 0) {
      this.players.clear();
      this.onPlayersChanged?.();
    }
    this.onDisconnect?.(reason);
  }
}
