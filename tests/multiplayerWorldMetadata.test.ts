import { afterEach, describe, expect, it, vi } from 'vitest';
// @ts-expect-error -- Exercise the actual native Node server, which has no TS declaration.
import { createRealtimeServer } from '../server/index.mjs';
import { isModernGenerator, worldBounds } from '../src/core/world/worldBounds';
import {
  MultiplayerClient,
  multiplayerHostWorldFromSave,
  type MultiplayerHostWorld,
  type MultiplayerSession,
} from '../src/multiplayer/MultiplayerClient';
import { PeerMultiplayerClient } from '../src/multiplayer/PeerMultiplayerClient';
import type { WorldSave } from '../src/save/worldStore';

const cleanups: Array<() => void | Promise<void>> = [];
afterEach(async () => {
  for (const cleanup of cleanups.splice(0).reverse()) await cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

const worlds = [
  { label: 'vegetation revision 2', generator: 'java26v2' as const, seed64: '9223372036854775807' },
  { label: 'maximum signed long', generator: 'java26' as const, seed64: '9223372036854775807' },
  { label: 'minimum signed long', generator: 'java26' as const, seed64: '-9223372036854775808' },
  { label: 'old protocol with no generator fields', generator: undefined, seed64: undefined },
];

function snapshot(metadata: (typeof worlds)[number]): MultiplayerHostWorld {
  const save: WorldSave = {
    id: 'saved-world', name: '世界', lastPlayed: 0, seed: -2_000_000_000,
    gameMode: 'survival', worldTime: 12345, edits: {},
    ...(metadata.generator ? { generator: metadata.generator, seed64: metadata.seed64 } : {}),
  };
  // More than one RTC world packet; retain both modern build limits and another dimension.
  for (let x = 0; x < 97; x++) save.edits[`${x},${metadata.generator ? -64 : 64},0`] = 1;
  save.edits[`0,${metadata.generator ? 319 : 191},1`] = 45;
  save.edits['nether:2,50,3'] = 18;
  return multiplayerHostWorldFromSave(save);
}

function expectWorld(client: MultiplayerSession, source: MultiplayerHostWorld): void {
  expect(client.isConnected).toBe(true);
  expect(client.room).toMatchObject({
    seed: source.seed, gameMode: source.gameMode, worldTime: source.worldTime,
  });
  expect(client.room.id.toUpperCase()).toBe('WORLD26');
  expect(client.room.generator).toBe(source.generator);
  expect(client.room.seed64).toBe(source.seed64);
  expect(client.initialEdits).toEqual(source.edits);
  // This is the same missing-tag default consumed by world construction, not an upgraded old save.
  expect(worldBounds(client.room.generator).minY).toBe(isModernGenerator(source.generator) ? -64 : 0);
}

/** Only the socket transport is replaced: actual connect/join/welcome/parser code runs unchanged. */
function serverTransport() {
  class ServerEvents {
    private readonly listeners = new Map<string, Array<(...args: unknown[]) => void>>();
    on(type: string, listener: (...args: unknown[]) => void): void {
      this.listeners.set(type, [...(this.listeners.get(type) ?? []), listener]);
    }
    emit(type: string, ...args: unknown[]): void {
      for (const listener of this.listeners.get(type) ?? []) listener(...args);
    }
  }
  const server = createRealtimeServer();
  cleanups.push(async () => { await server.close(); });
  vi.spyOn(Date, 'now').mockReturnValue(1000);
  vi.stubGlobal('window', { setTimeout, clearTimeout });
  const sockets: Socket[] = [];
  class Socket extends EventTarget {
    static readonly OPEN = 1;
    readyState = 0;
    readonly sent: string[] = [];
    readonly received: string[] = [];
    private readonly endpoint: ServerEvents & {
      readyState: number;
      send(raw: string): void;
      terminate(): void;
      close(code?: number, reason?: string): void;
      ping(): void;
    };
    constructor() {
      super();
      sockets.push(this);
      this.endpoint = Object.assign(new ServerEvents(), {
        readyState: 1,
        send: (raw: string): void => {
          this.received.push(raw);
          this.dispatchEvent(new MessageEvent('message', { data: raw }));
        },
        terminate: (): void => this.close(),
        close: (code?: number, reason?: string): void => this.close(code, reason),
        ping: (): void => { this.endpoint.emit('pong'); },
      });
      queueMicrotask(() => {
        server.wss.emit('connection', this.endpoint);
        this.readyState = 1;
        this.dispatchEvent(new Event('open'));
      });
    }
    send(raw: string): void {
      this.sent.push(raw);
      this.endpoint.emit('message', raw, false);
    }
    close(code = 1000, reason = ''): void {
      if (this.readyState === 3) return;
      this.readyState = 3;
      this.endpoint.readyState = 3;
      this.endpoint.emit('close');
      this.dispatchEvent(Object.assign(new Event('close'), { code, reason }));
    }
  }
  vi.stubGlobal('WebSocket', Socket);
  return { server, sockets, Socket };
}

/** RTC lifecycle/signaling is simulated; world serialization and receive handlers are production code. */
function peerTransport(transform: (raw: string) => string = (raw) => raw) {
  class Channel extends EventTarget {
    readyState = 'connecting';
    readonly sent: string[] = [];
    peer?: Channel;
    transform = (raw: string): string => raw;
    send(raw: string): void {
      this.sent.push(raw);
      this.peer?.dispatchEvent(new MessageEvent('message', { data: this.transform(raw) }));
    }
    close(): void {
      if (this.readyState === 'closed') return;
      this.readyState = 'closed';
      this.dispatchEvent(new Event('close'));
    }
  }
  const connections: Connection[] = [];
  class Connection extends EventTarget {
    iceGatheringState = 'complete';
    signalingState = 'stable';
    connectionState = 'new';
    localDescription: (RTCSessionDescriptionInit & { toJSON(): RTCSessionDescriptionInit }) | null = null;
    channel?: Channel;
    constructor() { super(); connections.push(this); }
    createDataChannel(): Channel { return this.channel = new Channel(); }
    async createOffer(): Promise<RTCSessionDescriptionInit> { return { type: 'offer', sdp: 'v=0\r\n' }; }
    async createAnswer(): Promise<RTCSessionDescriptionInit> { return { type: 'answer', sdp: 'v=0\r\n' }; }
    async setLocalDescription(description: RTCSessionDescriptionInit): Promise<void> {
      this.localDescription = { ...description, toJSON: () => ({ ...description }) };
      this.signalingState = description.type === 'offer' ? 'have-local-offer' : 'stable';
    }
    async setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void> {
      this.signalingState = description.type === 'offer' ? 'have-remote-offer' : 'stable';
    }
    close(): void { this.signalingState = 'closed'; }
  }
  vi.stubGlobal('RTCPeerConnection', Connection);
  return {
    connections,
    async connect(world: MultiplayerHostWorld) {
      const host = await PeerMultiplayerClient.createHost({ room: 'WORLD26', name: '房主', world });
      cleanups.push(() => { host.client.disconnect(); });
      const guest = await PeerMultiplayerClient.answerInvitation({ invitation: host.invitation, name: '朋友' });
      cleanups.push(() => { guest.client.disconnect(); });
      await host.client.acceptAnswer(guest.response);
      const outgoing = connections[0].channel!;
      const incoming = new Channel();
      outgoing.peer = incoming;
      incoming.peer = outgoing;
      outgoing.transform = transform;
      connections[1].dispatchEvent(Object.assign(new Event('datachannel'), { channel: incoming }));
      outgoing.readyState = incoming.readyState = 'open';
      incoming.dispatchEvent(new Event('open'));
      outgoing.dispatchEvent(new Event('open'));
      return { host: host.client, guest: guest.client, packets: outgoing.sent.map((raw) => JSON.parse(raw)) };
    },
  };
}

describe('world identity across real multiplayer message paths', () => {
  it.each(worlds)('server preserves $label from saved host snapshot through both welcome messages', async (metadata) => {
    const world = snapshot(metadata);
    const { server, sockets } = serverTransport();
    const host = await MultiplayerClient.connect({
      url: 'ws://test.invalid/ws', action: 'create', room: 'WORLD26', name: '房主', world,
    });
    const guest = await MultiplayerClient.connect({
      url: 'ws://test.invalid/ws', action: 'join', room: 'WORLD26', name: '朋友',
    });
    expectWorld(host, world);
    expectWorld(guest, world);
    expect(server.rooms.get(host.room.id)).toMatchObject({ seed: world.seed, generator: world.generator, seed64: world.seed64 });
    expect(JSON.parse(sockets[0].sent[0]).world).toEqual(world);
    for (const socket of sockets) {
      const welcome = JSON.parse(socket.received[0]);
      expect(welcome.type).toBe('welcome');
      expect(welcome.room.seed64).toBe(world.seed64);
      expect(welcome.room.generator).toBe(world.generator);
      expect(welcome.edits).toEqual(world.edits);
    }
  });

  it.each(worlds)('peer preserves $label through hello and multi-packet world snapshot', async (metadata) => {
    const world = snapshot(metadata);
    const { host, guest, packets } = await peerTransport().connect(world);
    await guest.waitUntilConnected();
    expectWorld(host, world);
    expectWorld(guest, world);
    expect(packets.map((packet) => packet.type)).toEqual(['hello', 'world', 'world', 'world-ready']);
    expect(packets[0].room.generator).toBe(world.generator);
    expect(packets[0].room.seed64).toBe(world.seed64);
    expect(packets[1].edits).toHaveLength(96);
    expect(packets[2].edits).toHaveLength(3);
  });
});

const invalidMetadata = [
  { generator: 'java27', seed64: '1' },
  { generator: 'java26', seed64: '9223372036854775808' },
  { generator: 'java26', seed64: '-9223372036854775809' },
];

describe('invalid world identity cannot create or initialize a room', () => {
  it.each(invalidMetadata)('server rejects $generator / $seed64 even when client validation is bypassed', async (metadata) => {
    const world = { ...snapshot(worlds[0]), ...metadata } as MultiplayerHostWorld;
    const { server, sockets, Socket } = serverTransport();
    await expect(MultiplayerClient.connect({
      url: 'ws://test.invalid/ws', action: 'create', room: 'WORLD26', name: '房主', world,
    })).rejects.toThrow('世界数据');
    expect(sockets).toHaveLength(0);
    const raw = new Socket();
    await new Promise<void>((resolve) => raw.addEventListener('open', () => resolve(), { once: true }));
    raw.send(JSON.stringify({ type: 'join', action: 'create', room: 'WORLD26', name: '房主', world }));
    expect(raw.received.map((message) => JSON.parse(message))).toMatchObject([{ type: 'error', code: 'invalid_world' }]);
    expect(server.rooms.size).toBe(0);
  });

  it.each(invalidMetadata)('peer rejects $generator / $seed64 at both host creation and received hello', async (metadata) => {
    const transport = peerTransport((raw) => {
      const message = JSON.parse(raw);
      if (message.type === 'hello') message.room = { ...message.room, ...metadata };
      return JSON.stringify(message);
    });
    await expect(PeerMultiplayerClient.createHost({
      room: 'WORLD26', name: '房主', world: { ...snapshot(worlds[0]), ...metadata } as MultiplayerHostWorld,
    })).rejects.toThrow('世界');
    expect(transport.connections).toHaveLength(0);
    const { guest } = await transport.connect(snapshot(worlds[0]));
    expect(guest.isConnected).toBe(false);
    expect(() => guest.room).toThrow('尚未同步完成');
    expect(guest.initialEdits).toEqual([]);
  });
});
