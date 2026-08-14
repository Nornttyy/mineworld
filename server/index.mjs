import { randomInt, randomUUID } from 'node:crypto';
import { createServer } from 'node:http';
import { pathToFileURL } from 'node:url';
import { WebSocket, WebSocketServer } from 'ws';

// 这个服务只同步房间内「玩家位置」与「方块改动」。背包、生物、掉落物、流体等
// 仍由客户端的单人逻辑处理，不能把它们当成服务器权威状态。
const DEFAULT_PORT = 8787;
const DEFAULT_WORLD_TIME = 1000;
const WORLD_TICK_MS = 50;
const WORLD_TIME_SYNC_MS = 5_000;
const MAX_CONNECTIONS = 128;
const MAX_PLAYERS = 8;
const MAX_ROOMS = 100;
const MAX_EDITS_PER_ROOM = 5000;
// 创建房间时可以带入当前本地世界的方块 delta。5000 个编辑在极端大坐标下约 370KB，
// 所以不能沿用普通状态包的 2KB 上限；512KB 仍是可控的单包上限。
const MAX_MESSAGE_BYTES = 512 * 1024;
const MAX_INITIAL_EDITS = 5000;
const MAX_STATE_PER_SECOND = 15;
// 创造模式按住挖掘每刻可破一格(≈20/s)；上限需高于正常玩法，不能把正常玩家误判成刷包。
const MAX_BLOCKS_PER_SECOND = 32;
const MAX_WORLD_COORD = 2_000_000;
const MAX_PLAYER_SPEED = 24; // 格/秒，覆盖创造飞行并留少量网络余量
const ROOM_IDLE_MS = 30 * 60 * 1000;
const HEARTBEAT_MS = 25_000;
const DEFAULT_ALLOWED_ORIGINS = 'https://nornttyy.github.io,http://localhost:5173,http://127.0.0.1:5173';

const ROOM_ID_RE = /^[a-z0-9][a-z0-9_-]{2,23}$/;
const SKIN_RE = /^[a-z0-9][a-z0-9_-]{0,31}$/i;
const DIMENSIONS = new Set(['overworld', 'nether']);
const GAME_MODES = new Set(['survival', 'creative']);

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isFiniteNumber(value, min, max) {
  return typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
}

function normalizeRoomId(value) {
  if (typeof value !== 'string') return null;
  const room = value.trim().toLowerCase();
  return ROOM_ID_RE.test(room) ? room : null;
}

function normalizeName(value) {
  if (typeof value !== 'string') return null;
  const name = value.trim().replace(/\s+/g, ' ');
  if (name.length < 1 || name.length > 16 || /[\u0000-\u001f\u007f]/.test(name)) return null;
  return name;
}

function normalizeSkin(value) {
  if (value === undefined) return 'default';
  if (typeof value !== 'string') return null;
  const skin = value.trim();
  return SKIN_RE.test(skin) ? skin : null;
}

function parseOrigins(value) {
  const origins = Array.isArray(value) ? value : String(value).split(',');
  return new Set(origins.map((origin) => origin.trim()).filter(Boolean));
}

function playerPayload(player) {
  return {
    id: player.id,
    name: player.name,
    skin: player.skin,
    x: player.x,
    y: player.y,
    z: player.z,
    yaw: player.yaw,
    pitch: player.pitch,
    dimension: player.dimension,
  };
}

function parsePlayerState(message) {
  const player = message.player;
  if (!isRecord(player)) return null;
  if (
    !isFiniteNumber(player.x, -MAX_WORLD_COORD, MAX_WORLD_COORD) ||
    !isFiniteNumber(player.y, 0, 255) ||
    !isFiniteNumber(player.z, -MAX_WORLD_COORD, MAX_WORLD_COORD) ||
    !isFiniteNumber(player.yaw, -Math.PI * 8, Math.PI * 8) ||
    !isFiniteNumber(player.pitch, -Math.PI / 2, Math.PI / 2) ||
    !DIMENSIONS.has(player.dimension)
  ) {
    return null;
  }
  return {
    x: player.x,
    y: player.y,
    z: player.z,
    // 保留在合理的连续范围内，避免渲染端被极端角度污染。
    yaw: ((player.yaw + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI,
    pitch: player.pitch,
    dimension: player.dimension,
  };
}

function parseBlock(message) {
  if (
    !DIMENSIONS.has(message.dimension) ||
    !Number.isInteger(message.x) ||
    !Number.isInteger(message.y) ||
    !Number.isInteger(message.z) ||
    !Number.isInteger(message.id) ||
    Math.abs(message.x) > MAX_WORLD_COORD ||
    message.y < 0 ||
    message.y > 255 ||
    Math.abs(message.z) > MAX_WORLD_COORD ||
    message.id < 0 ||
    message.id > 255
  ) {
    return null;
  }
  return { dimension: message.dimension, x: message.x, y: message.y, z: message.z, id: message.id };
}

/**
 * 房主创建房间时可带入自己的种子、世界时间和已有方块改动。
 * 只允许在 create 包里出现，避免后来加入的玩家覆盖已经在运行的房间。
 */
function parseInitialWorld(value) {
  if (!isRecord(value)) return null;
  if (
    !Number.isInteger(value.seed) ||
    value.seed < 0 ||
    value.seed > 2_000_000_000 ||
    !GAME_MODES.has(value.gameMode) ||
    !isFiniteNumber(value.worldTime, -2_000_000_000, 2_000_000_000) ||
    !Array.isArray(value.edits) ||
    value.edits.length > MAX_INITIAL_EDITS
  ) {
    return null;
  }

  // 以坐标为键去重：最后一个编辑代表当前方块值，和客户端本地 WorldSave 的语义一致。
  const edits = new Map();
  for (const rawEdit of value.edits) {
    const edit = parseBlock(rawEdit);
    if (!edit) return null;
    edits.set(editKey(edit), edit);
  }
  const worldTime = ((Math.floor(value.worldTime) % 24_000) + 24_000) % 24_000;
  return { seed: value.seed, gameMode: value.gameMode, worldTime, edits };
}

function editKey(edit) {
  return `${edit.dimension}:${edit.x},${edit.y},${edit.z}`;
}

function send(ws, payload) {
  if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(payload));
}

function httpError(socket, status, text) {
  socket.write(`HTTP/1.1 ${status} ${text}\r\nConnection: close\r\n\r\n`);
  socket.destroy();
}

/**
 * 轻量、内存式的实时房间服务。
 *
 * 入站 JSON：
 * - {type:'join', action:'create'|'join', room, name, skin?, gameMode?}
 * - {type:'state', player:{x,y,z,yaw,pitch,dimension}}
 * - {type:'block', dimension,x,y,z,id}
 *
 * 出站 JSON 的公开形状由客户端依赖：welcome / player-join / player-leave / state / block / error。
 */
export function createRealtimeServer(options = {}) {
  const allowedOrigins = parseOrigins(options.allowedOrigins ?? process.env.ALLOWED_ORIGINS ?? DEFAULT_ALLOWED_ORIGINS);
  const maxPlayers = options.maxPlayers ?? MAX_PLAYERS;
  const maxConnections = options.maxConnections ?? MAX_CONNECTIONS;
  const roomIdleMs = options.roomIdleMs ?? ROOM_IDLE_MS;
  const rooms = new Map();
  const clients = new Set();

  function roomWorldTime(room, now = Date.now()) {
    return (room.baseWorldTime + Math.floor((now - room.createdAt) / WORLD_TICK_MS)) % 24000;
  }

  function roomPlayerCount() {
    let total = 0;
    for (const room of rooms.values()) total += room.players.size;
    return total;
  }

  function makeRoom(id, gameMode, initialWorld = null) {
    return {
      id,
      seed: initialWorld?.seed ?? randomInt(1, 2_000_000_000),
      gameMode: initialWorld?.gameMode ?? gameMode,
      baseWorldTime: initialWorld?.worldTime ?? DEFAULT_WORLD_TIME,
      createdAt: Date.now(),
      players: new Map(),
      clients: new Set(),
      edits: initialWorld?.edits ?? new Map(),
      emptySince: null,
    };
  }

  function broadcast(room, payload, except = null) {
    for (const client of room.clients) {
      if (client === except) continue;
      send(client.ws, payload);
    }
  }

  function sendError(client, code, message) {
    send(client.ws, { type: 'error', code, message });
  }

  function addStrike(client) {
    const now = Date.now();
    client.strikes = client.strikes.filter((at) => now - at < 10_000);
    client.strikes.push(now);
    if (client.strikes.length >= 3) client.ws.close(1008, 'Too many invalid requests');
  }

  function reject(client, code, message, strike = false) {
    sendError(client, code, message);
    if (strike) addStrike(client);
  }

  function allowRate(client, kind, limit) {
    const now = Date.now();
    const bucket = client.rates.get(kind);
    if (!bucket || now - bucket.startedAt >= 1000) {
      client.rates.set(kind, { startedAt: now, count: 1 });
      return true;
    }
    bucket.count++;
    return bucket.count <= limit;
  }

  function leaveRoom(client) {
    const room = client.room;
    if (!room) return;
    room.clients.delete(client);
    room.players.delete(client.id);
    client.room = null;
    client.player = null;
    client.hasState = false;
    if (room.players.size === 0) room.emptySince = Date.now();
    broadcast(room, { type: 'player-leave', id: client.id });
  }

  function handleJoin(client, message) {
    if (client.room) return reject(client, 'already_joined', '每个连接只能加入一个房间。');
    if (!isRecord(message)) return reject(client, 'invalid_message', '消息格式不正确。', true);

    const action = message.action;
    const roomId = normalizeRoomId(message.room);
    const name = normalizeName(message.name);
    const skin = normalizeSkin(message.skin);
    if ((action !== 'create' && action !== 'join') || !roomId || !name || !skin) {
      return reject(client, 'invalid_join', '房间、名称或创建方式不正确。', true);
    }

    let room = rooms.get(roomId);
    if (action === 'create') {
      if (room) return reject(client, 'room_exists', '这个房间名已经被使用。');
      if (rooms.size >= MAX_ROOMS) return reject(client, 'server_full', '当前房间过多，请稍后再试。');
      if (message.gameMode !== undefined && !GAME_MODES.has(message.gameMode)) {
        return reject(client, 'invalid_join', '游戏模式不正确。', true);
      }
      const initialWorld = message.world === undefined ? null : parseInitialWorld(message.world);
      if (message.world !== undefined && !initialWorld) {
        return reject(client, 'invalid_world', '带入的世界数据不正确或方块改动过多。', true);
      }
      const gameMode = initialWorld?.gameMode ?? (GAME_MODES.has(message.gameMode) ? message.gameMode : 'survival');
      room = makeRoom(roomId, gameMode, initialWorld);
      rooms.set(roomId, room);
    } else if (!room) {
      return reject(client, 'room_not_found', '没有找到这个房间。');
    } else if (message.world !== undefined) {
      return reject(client, 'invalid_join', '加入已有房间时不能带入本地世界。', true);
    }

    if (room.players.size >= maxPlayers) return reject(client, 'room_full', '这个房间已经满了。');

    const player = {
      id: client.id,
      name,
      skin,
      x: 0,
      y: 128,
      z: 0,
      yaw: 0,
      pitch: -0.18,
      dimension: 'overworld',
    };
    client.room = room;
    client.player = player;
    room.clients.add(client);
    room.players.set(client.id, player);
    room.emptySince = null;

    // welcome 必须先发：新客户端先得到世界种子和当前所有玩家，才可构造 Game。
    send(client.ws, {
      type: 'welcome',
      id: client.id,
      room: {
        id: room.id,
        seed: room.seed,
        gameMode: room.gameMode,
        worldTime: roomWorldTime(room),
      },
      players: [...room.players.values()].map(playerPayload),
      edits: [...room.edits.values()],
    });
    broadcast(room, { type: 'player-join', player: playerPayload(player) }, client);
  }

  function handleState(client, message) {
    if (!client.room || !client.player) return reject(client, 'not_joined', '请先加入房间。');
    if (!allowRate(client, 'state', MAX_STATE_PER_SECOND)) return reject(client, 'rate_limited', '位置同步过于频繁。', true);

    const state = parsePlayerState(message);
    if (!state) return reject(client, 'invalid_state', '玩家位置数据不正确。', true);

    const now = Date.now();
    if (client.hasState && state.dimension === client.player.dimension) {
      const elapsed = Math.max(0.05, Math.min(2, (now - client.lastStateAt) / 1000));
      const distance = Math.hypot(state.x - client.player.x, state.y - client.player.y, state.z - client.player.z);
      if (distance > MAX_PLAYER_SPEED * elapsed + 4) {
        return reject(client, 'invalid_state', '移动距离超过允许范围。', true);
      }
    }

    Object.assign(client.player, state);
    client.hasState = true;
    client.lastStateAt = now;
    broadcast(client.room, { type: 'state', id: client.id, player: playerPayload(client.player) }, client);
  }

  function handleBlock(client, message) {
    if (!client.room || !client.player) return reject(client, 'not_joined', '请先加入房间。');
    if (!client.hasState) return reject(client, 'state_required', '请先同步一次玩家位置。');
    if (!allowRate(client, 'block', MAX_BLOCKS_PER_SECOND)) return reject(client, 'rate_limited', '改方块过于频繁。', true);

    const block = parseBlock(message);
    if (!block) return reject(client, 'invalid_block', '方块数据不正确。', true);
    if (block.dimension !== client.player.dimension) return reject(client, 'invalid_block', '不能修改另一个维度的方块。', true);

    const distance = Math.hypot(block.x + 0.5 - client.player.x, block.y + 0.5 - client.player.y, block.z + 0.5 - client.player.z);
    if (distance > 6) return reject(client, 'out_of_reach', '方块离玩家太远。', true);

    const key = editKey(block);
    if (!client.room.edits.has(key) && client.room.edits.size >= MAX_EDITS_PER_ROOM) {
      return reject(client, 'room_edit_limit', '这个房间的方块改动已达到上限。');
    }
    client.room.edits.set(key, block);
    // 包含发送者：客户端可用它作为服务器确认；重复应用同一方块是幂等的。
    broadcast(client.room, { type: 'block', ...block });
  }

  function handleMessage(client, raw, isBinary) {
    if (isBinary) return reject(client, 'binary_not_supported', '只接受 JSON 消息。', true);
    const byteLength = Buffer.isBuffer(raw) ? raw.length : raw instanceof ArrayBuffer ? raw.byteLength : Buffer.byteLength(raw.toString());
    if (byteLength > MAX_MESSAGE_BYTES) return reject(client, 'message_too_large', '消息过大。', true);

    let message;
    try {
      message = JSON.parse(raw.toString('utf8'));
    } catch {
      return reject(client, 'invalid_json', 'JSON 格式不正确。', true);
    }
    if (!isRecord(message) || typeof message.type !== 'string') {
      return reject(client, 'invalid_message', '消息格式不正确。', true);
    }

    if (message.type === 'join') return handleJoin(client, message);
    if (message.type === 'state') return handleState(client, message);
    if (message.type === 'block') return handleBlock(client, message);
    return reject(client, 'unknown_message', '不支持的消息类型。', true);
  }

  const httpServer = createServer((request, response) => {
    const url = new URL(request.url ?? '/', 'http://localhost');
    if (request.method === 'GET' && url.pathname === '/health') {
      response.writeHead(200, {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      });
      response.end(JSON.stringify({ ok: true, rooms: rooms.size, players: roomPlayerCount() }));
      return;
    }
    response.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ ok: false, error: 'not_found' }));
  });

  const wss = new WebSocketServer({ noServer: true, maxPayload: MAX_MESSAGE_BYTES });

  httpServer.on('upgrade', (request, socket, head) => {
    const url = new URL(request.url ?? '/', 'http://localhost');
    if (url.pathname !== '/ws') return httpError(socket, 404, 'Not Found');
    const origin = request.headers.origin;
    if (typeof origin !== 'string' || !allowedOrigins.has(origin)) return httpError(socket, 403, 'Forbidden');
    if (clients.size >= maxConnections) return httpError(socket, 503, 'Service Unavailable');

    wss.handleUpgrade(request, socket, head, (ws) => wss.emit('connection', ws, request));
  });

  wss.on('connection', (ws) => {
    const client = {
      id: randomUUID(),
      ws,
      room: null,
      player: null,
      hasState: false,
      lastStateAt: Date.now(),
      rates: new Map(),
      strikes: [],
      alive: true,
    };
    clients.add(client);

    ws.on('pong', () => {
      client.alive = true;
    });
    ws.on('message', (raw, isBinary) => handleMessage(client, raw, isBinary));
    ws.on('close', () => {
      leaveRoom(client);
      clients.delete(client);
    });
    // ws 的错误事件若不监听会让 Node 抛出未处理错误；close 回调负责离房。
    ws.on('error', () => {});
  });

  const heartbeat = setInterval(() => {
    for (const client of clients) {
      if (!client.alive) {
        client.ws.terminate();
        continue;
      }
      client.alive = false;
      client.ws.ping();
    }
  }, HEARTBEAT_MS);
  heartbeat.unref();

  // 玩家暂停时本地世界时间会冻结；每几秒以房主服务器时钟轻微校正一次，保证同房间昼夜不会越走越远。
  const timeSync = setInterval(() => {
    for (const room of rooms.values()) {
      if (room.players.size > 0) broadcast(room, { type: 'time', worldTime: roomWorldTime(room) });
    }
  }, WORLD_TIME_SYNC_MS);
  timeSync.unref();

  const roomCleanup = setInterval(() => {
    const now = Date.now();
    for (const [id, room] of rooms) {
      if (room.players.size === 0 && room.emptySince !== null && now - room.emptySince >= roomIdleMs) rooms.delete(id);
    }
  }, 60_000);
  roomCleanup.unref();

  function listen(port = Number(process.env.PORT ?? DEFAULT_PORT), host = '0.0.0.0') {
    return new Promise((resolve, reject) => {
      const onError = (error) => {
        httpServer.off('error', onError);
        reject(error);
      };
      httpServer.once('error', onError);
      httpServer.listen(port, host, () => {
        httpServer.off('error', onError);
        const address = httpServer.address();
        resolve(typeof address === 'object' && address ? address.port : port);
      });
    });
  }

  function close() {
    clearInterval(heartbeat);
    clearInterval(timeSync);
    clearInterval(roomCleanup);
    for (const client of clients) {
      send(client.ws, { type: 'error', code: 'server_restarting', message: '服务器正在重启，请稍后重连。' });
      client.ws.terminate();
    }
    return new Promise((resolve, reject) => {
      wss.close();
      if (!httpServer.listening) return resolve();
      httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  }

  return { httpServer, wss, rooms, listen, close };
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const app = createRealtimeServer();
  app
    .listen()
    .then((port) => loggerLine(`MINEWORLD multiplayer listening on 0.0.0.0:${port}`))
    .catch((error) => {
      console.error('[multiplayer] failed to listen:', error);
      process.exitCode = 1;
    });

  let stopping = false;
  const stop = () => {
    if (stopping) return;
    stopping = true;
    app.close().finally(() => process.exit());
  };
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);
}

function loggerLine(message) {
  console.log(`[multiplayer] ${message}`);
}
