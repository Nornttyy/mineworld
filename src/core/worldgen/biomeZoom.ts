/** Java's block-level biome Voronoi zoom. Quart climate sampling is separate. */
const K = new Uint32Array([
  0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
  0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
  0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
  0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
  0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
  0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
  0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
  0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2,
]);
const rotr = (x: number, n: number) => (x >>> n) | (x << (32 - n));

/** SHA-256 of the eight little-endian seed bytes, first LE signed long. */
export function biomeZoomSeed(seed: bigint): bigint {
  const bytes = new Uint8Array(64); const view = new DataView(bytes.buffer);
  view.setBigInt64(0, seed, true); bytes[8] = 0x80; bytes[63] = 64;
  const w = new Uint32Array(64);
  for (let i = 0; i < 16; i++) w[i] = view.getUint32(i * 4);
  for (let i = 16; i < 64; i++) {
    const x = w[i - 15], y = w[i - 2];
    w[i] = w[i - 16] + (rotr(x, 7) ^ rotr(x, 18) ^ (x >>> 3)) + w[i - 7] + (rotr(y, 17) ^ rotr(y, 19) ^ (y >>> 10));
  }
  let a=0x6a09e667,b=0xbb67ae85,c=0x3c6ef372,d=0xa54ff53a,e=0x510e527f,f=0x9b05688c,g=0x1f83d9ab,h=0x5be0cd19;
  for (let i = 0; i < 64; i++) {
    const t1 = (h + (rotr(e,6)^rotr(e,11)^rotr(e,25)) + ((e&f)^(~e&g)) + K[i] + w[i]) | 0;
    const t2 = ((rotr(a,2)^rotr(a,13)^rotr(a,22)) + ((a&b)^(a&c)^(b&c))) | 0;
    h=g;g=f;f=e;e=(d+t1)|0;d=c;c=b;b=a;a=(t1+t2)|0;
  }
  view.setUint32(0, a + 0x6a09e667); view.setUint32(4, b + 0xbb67ae85);
  return view.getBigInt64(0, true);
}
const next = (state: bigint, salt: bigint) => BigInt.asIntN(64, state * (state * 6364136223846793005n + 1442695040888963407n) + salt);
const fiddle = (state: bigint) => (Number((state >> 24n) & 1023n) / 1024 - 0.5) * 0.9;

/** One instance per chunk bounds the cache; neighboring chunks resolve identically. */
export function createBiomeZoom<T>(seed: bigint, resolve: (qx: number, qy: number, qz: number) => T) {
  const zoomSeed = biomeZoomSeed(seed);
  const cells = new Map<string, { offset: number[]; pos: number[]; biome?: T }>();
  const cell = (x: number, y: number, z: number) => {
    const key = `${x},${y},${z}`; let value = cells.get(key);
    if (!value) {
      let s = zoomSeed;
      for (const coord of [x,y,z,x,y,z]) s = next(s, BigInt(coord));
      const dx = fiddle(s); s = next(s, zoomSeed); const dy = fiddle(s); s = next(s, zoomSeed);
      value = { offset: [dx, dy, fiddle(s)], pos: [x,y,z] }; cells.set(key, value);
    }
    return value;
  };
  return (x: number, y: number, z: number): T => {
    x -= 2; y -= 2; z -= 2;
    const qx = Math.floor(x/4), qy = Math.floor(y/4), qz = Math.floor(z/4);
    const fx = (x & 3)/4, fy = (y & 3)/4, fz = (z & 3)/4;
    let best = Infinity; let selected!: ReturnType<typeof cell>;
    for (let i = 0; i < 8; i++) {
      const dx = (i >> 2) & 1, dy = (i >> 1) & 1, dz = i & 1;
      const c = cell(qx+dx, qy+dy, qz+dz);
      const a = fx-dx+c.offset[0], b = fy-dy+c.offset[1], d = fz-dz+c.offset[2];
      const distance = d*d+b*b+a*a;
      if (distance < best) { best = distance; selected = c; }
    }
    return selected.biome ??= resolve(selected.pos[0], selected.pos[1], selected.pos[2]);
  };
}
