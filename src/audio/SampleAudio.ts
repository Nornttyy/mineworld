import { asset } from '../asset';
import { pickVariant, SOUND_EVENTS } from './JavaSounds';

export interface AudioPosition { x: number; y: number; z: number }
export interface PlayOptions { volume?: number; pitch?: number; position?: AudioPosition; ui?: boolean; maxDelay?: number }
type Voice = { source: AudioBufferSourceNode; gain: GainNode; panner?: PannerNode; ui: boolean };

/** Original samples, no extra oscillator/filter/reverb/compressor layers. */
export class SampleAudio {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private buffers = new Map<string, AudioBuffer>();
  private pending = new Map<string, Promise<AudioBuffer>>();
  private retryAfter = new Map<string, number>();
  private voices = new Set<Voice>();
  private epoch = 0;
  private allEpoch = 0;
  private volume = 0.7;
  private listener: AudioPosition = { x: 0, y: 0, z: 0 };
  readonly stats = { played: 0, failed: 0, dropped: 0, lastEvent: '', lastSample: '' };

  private ensureContext(): AudioContext | null {
    if (this.context) return this.context;
    if (typeof window === 'undefined') return null;
    const Context = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Context) return null;
    this.context = new Context();
    this.master = this.context.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.context.destination);
    return this.context;
  }

  async unlock(): Promise<void> {
    const ctx = this.ensureContext();
    if (ctx?.state === 'suspended') {
      try { await ctx.resume(); } catch { /* The next user gesture retries. */ }
    }
  }

  setVolume(percent: number): void {
    this.volume = Number.isFinite(percent) ? Math.max(0, Math.min(1, percent / 100)) : 0;
    if (this.master && this.context) this.master.gain.setTargetAtTime(this.volume, this.context.currentTime, 0.01);
    if (this.volume === 0) this.stopAll();
  }

  setListener(pos: AudioPosition, yaw: number, pitch: number): void {
    this.listener = { ...pos };
    if (!this.context) return;
    const l = this.context.listener;
    const cp = Math.cos(pitch), sp = Math.sin(pitch), cy = Math.cos(yaw), sy = Math.sin(yaw);
    if (l.positionX) {
      l.positionX.value = pos.x; l.positionY.value = pos.y; l.positionZ.value = pos.z;
      l.forwardX.value = cy * cp; l.forwardY.value = sp; l.forwardZ.value = sy * cp;
      l.upX.value = -cy * sp; l.upY.value = cp; l.upZ.value = -sy * sp;
    } else {
      l.setPosition(pos.x, pos.y, pos.z);
      l.setOrientation(cy * cp, sp, sy * cp, -cy * sp, cp, -sy * sp);
    }
  }

  private async load(name: string): Promise<AudioBuffer> {
    const cached = this.buffers.get(name);
    if (cached) { this.buffers.delete(name); this.buffers.set(name, cached); return cached; }
    const pending = this.pending.get(name);
    if (pending) return pending;
    if ((this.retryAfter.get(name) ?? 0) > Date.now()) throw new Error('Audio retry cooldown');
    const ctx = this.ensureContext();
    if (!ctx) throw new Error('Web Audio unavailable');
    const request = (async () => {
      const response = await fetch(asset(`audio/java/${name}.ogg`), { signal: AbortSignal.timeout(15_000) });
      if (!response.ok) throw new Error(`Sound HTTP ${response.status}: ${name}`);
      const buffer = await ctx.decodeAudioData(await response.arrayBuffer());
      this.buffers.set(name, buffer);
      while (this.buffers.size > 160) this.buffers.delete(this.buffers.keys().next().value!);
      this.retryAfter.delete(name);
      return buffer;
    })();
    this.pending.set(name, request);
    try { return await request; }
    catch (error) { this.retryAfter.set(name, Date.now() + 10_000); throw error; }
    finally { this.pending.delete(name); }
  }

  async preload(events: readonly string[]): Promise<void> {
    const names = [...new Set(events.flatMap(e => (SOUND_EVENTS[e] ?? []).map(v => v.name)))];
    // Bounded workers: a large catalogue must not stall terrain/texture loading.
    let i = 0;
    await Promise.all(Array.from({ length: Math.min(4, names.length) }, async () => {
      while (i < names.length) { const name = names[i++]; try { await this.load(name); } catch { /* Lazy playback retries. */ } }
    }));
  }

  /** The separate audition page verifies actual browser decoding, not just file existence. */
  async validateSamples(onProgress: (done: number, total: number) => void): Promise<{ total: number; failed: string[] }> {
    const names = [...new Set(Object.values(SOUND_EVENTS).flatMap(v => v.map(s => s.name)))];
    const failed: string[] = [];
    let i = 0, done = 0;
    await Promise.all(Array.from({length:4}, async () => {
      while (i < names.length) {
        const name = names[i++];
        try { const b = await this.load(name); if (!(b.duration > 0)) failed.push(name); }
        catch { failed.push(name); }
        onProgress(++done,names.length);
      }
    }));
    return {total:names.length,failed};
  }

  async play(event: string, options: PlayOptions = {}): Promise<boolean> {
    const variant = pickVariant(event);
    const ctx = this.ensureContext();
    if (!variant || !ctx || !this.master || this.volume <= 0) return false;
    const rawVolume = Math.max(0, (options.volume ?? 1) * variant.volume);
    if (rawVolume === 0) return false;
    const range = 16 * Math.max(1, rawVolume);
    const pos = options.position ? { ...options.position } : undefined;
    if (pos && Math.hypot(pos.x-this.listener.x, pos.y-this.listener.y, pos.z-this.listener.z) >= range) return false;
    const epoch = this.epoch, allEpoch = this.allEpoch, requested = Date.now();
    try {
      const buffer = await this.load(variant.name);
      if (allEpoch !== this.allEpoch || (!options.ui && epoch !== this.epoch) || this.volume <= 0 || ctx.state !== 'running' ||
          Date.now() - requested > (options.maxDelay ?? 700)) { this.stats.dropped++; return false; }
      // Bound the active graph, and disconnect nodes as soon as a sample finishes.
      if (this.voices.size >= 48) {
        const oldest = [...this.voices].find(v => !v.ui);
        if (oldest) this.stopVoice(oldest); else return false;
      }
      const source = ctx.createBufferSource(), gain = ctx.createGain();
      source.buffer = buffer;
      source.playbackRate.value = Math.max(0.5, Math.min(2, (options.pitch ?? 1) * variant.pitch));
      gain.gain.value = Math.min(1, rawVolume);
      source.connect(gain);
      const voice: Voice = { source, gain, ui: !!options.ui };
      if (pos) {
        const p = ctx.createPanner();
        p.panningModel = 'equalpower'; p.distanceModel = 'linear';
        p.refDistance = 0; p.maxDistance = range; p.rolloffFactor = 1;
        p.positionX.value = pos.x; p.positionY.value = pos.y; p.positionZ.value = pos.z;
        gain.connect(p); p.connect(this.master); voice.panner = p;
      } else gain.connect(this.master);
      this.voices.add(voice);
      source.onended = () => this.release(voice);
      source.start();
      this.stats.played++; this.stats.lastEvent = event; this.stats.lastSample = variant.name;
      if (import.meta.env.DEV && new URLSearchParams(window.location.search).has('audioTest'))
        console.debug('[audio-test]', event, variant.name);
      return true;
    } catch (error) {
      this.stats.failed++;
      if (this.stats.failed === 1) console.warn('[audio] 音效加载失败，稍后会重试。', error);
      return false;
    }
  }

  private release(v: Voice): void { v.source.disconnect(); v.gain.disconnect(); v.panner?.disconnect(); this.voices.delete(v); }
  private stopVoice(v: Voice): void { v.source.stop(); this.release(v); }
  stopWorld(): void { this.epoch++; for (const v of this.voices) if (!v.ui) this.stopVoice(v); }
  stopAll(): void { this.epoch++; this.allEpoch++; for (const v of this.voices) this.stopVoice(v); }
  suspend(): void { this.stopAll(); void this.context?.suspend().catch(() => {}); }
}
