import { BLOCKS } from '../core/blocks/registry';

export type BlockSound = 'stone' | 'dirt' | 'grass' | 'sand' | 'wood' | 'glass' | 'metal';
export type AudioDimension = 'overworld' | 'nether';

export interface GameAudioFrame {
  playing: boolean;
  moving: boolean;
  sprinting: boolean;
  onGround: boolean;
  inWater: boolean;
  underwater: boolean;
  groundBlock: number;
  dimension: AudioDimension;
}

/** 地面脚步的唯一门控：游泳/涉水时不借用脚下方块的走路声。 */
export function shouldPlayFootstep(frame: GameAudioFrame): boolean {
  return frame.playing && frame.moving && frame.onGround && !frame.inWater;
}

/** 按方块材质归类；音高与噪声包络会据此变化。 */
export function blockSoundFor(id: number): BlockSound {
  const name = BLOCKS[id]?.name ?? 'stone';
  if (name.includes('leaves') || name.includes('grass') || name.includes('cactus')) return 'grass';
  if (name.includes('sand') || name === 'gravel') return 'sand';
  if (name.includes('log') || name.includes('planks') || name === 'crafting_table') return 'wood';
  if (name === 'ice' || name.includes('glass')) return 'glass';
  if (name.includes('iron') || name.includes('diamond')) return 'metal';
  if (name === 'dirt' || name === 'soul_sand') return 'dirt';
  return 'stone';
}

const OVERWORLD_CHORDS = [
  [48, 55, 60, 64],
  [45, 52, 57, 60],
  [41, 48, 53, 57],
  [43, 50, 55, 59],
] as const;
const NETHER_CHORDS = [
  [38, 45, 50, 53],
  [36, 43, 48, 51],
  [34, 41, 46, 50],
  [31, 38, 43, 46],
] as const;

/** 原创环境配器的和弦表，导出方便做确定性回归测试。 */
export function ambientChord(index: number, dimension: AudioDimension): readonly number[] {
  const chords = dimension === 'nether' ? NETHER_CHORDS : OVERWORLD_CHORDS;
  return chords[((Math.floor(index) % chords.length) + chords.length) % chords.length];
}

const midiHz = (note: number): number => 440 * 2 ** ((note - 69) / 12);

const MATERIAL: Record<BlockSound, { frequency: number; rate: number; gain: number }> = {
  stone: { frequency: 660, rate: 0.7, gain: 0.1 },
  dirt: { frequency: 330, rate: 0.58, gain: 0.095 },
  grass: { frequency: 1180, rate: 1.05, gain: 0.075 },
  sand: { frequency: 1750, rate: 0.82, gain: 0.07 },
  wood: { frequency: 510, rate: 0.84, gain: 0.09 },
  glass: { frequency: 2350, rate: 1.28, gain: 0.07 },
  metal: { frequency: 1450, rate: 0.96, gain: 0.075 },
};

type NoiseLayer = Readonly<{
  duration: number;
  frequency: number;
  q: number;
  gain: number;
  rate: number;
  delay: number;
  filter: BiquadFilterType;
}>;

/** 每类方块独立的碎裂层；低增益、错开瞬态，避免旧版四连高噪声的“电流喷气感”。 */
const BREAK_LAYERS: Record<BlockSound, readonly NoiseLayer[]> = {
  stone: [
    { duration: 0.1, frequency: 820, q: 0.45, gain: 0.07, rate: 0.55, delay: 0, filter: 'lowpass' },
    { duration: 0.055, frequency: 510, q: 0.8, gain: 0.045, rate: 0.72, delay: 0.035, filter: 'bandpass' },
    { duration: 0.045, frequency: 1120, q: 1.0, gain: 0.026, rate: 0.92, delay: 0.083, filter: 'bandpass' },
  ],
  dirt: [
    { duration: 0.13, frequency: 690, q: 0.35, gain: 0.075, rate: 0.46, delay: 0, filter: 'lowpass' },
    { duration: 0.075, frequency: 390, q: 0.55, gain: 0.042, rate: 0.61, delay: 0.052, filter: 'bandpass' },
  ],
  grass: [
    { duration: 0.11, frequency: 760, q: 0.4, gain: 0.052, rate: 0.55, delay: 0, filter: 'lowpass' },
    { duration: 0.08, frequency: 1550, q: 0.55, gain: 0.033, rate: 1.08, delay: 0.025, filter: 'highpass' },
    { duration: 0.05, frequency: 980, q: 0.8, gain: 0.025, rate: 0.9, delay: 0.075, filter: 'bandpass' },
  ],
  sand: [
    { duration: 0.15, frequency: 920, q: 0.45, gain: 0.045, rate: 0.66, delay: 0, filter: 'highpass' },
    { duration: 0.09, frequency: 2250, q: 0.7, gain: 0.027, rate: 0.9, delay: 0.045, filter: 'bandpass' },
  ],
  wood: [
    { duration: 0.09, frequency: 720, q: 0.7, gain: 0.06, rate: 0.67, delay: 0, filter: 'lowpass' },
    { duration: 0.05, frequency: 470, q: 1.1, gain: 0.043, rate: 0.88, delay: 0.045, filter: 'bandpass' },
    { duration: 0.045, frequency: 1050, q: 0.8, gain: 0.023, rate: 1.05, delay: 0.092, filter: 'bandpass' },
  ],
  glass: [
    { duration: 0.11, frequency: 1750, q: 0.6, gain: 0.038, rate: 1.12, delay: 0, filter: 'highpass' },
    { duration: 0.055, frequency: 2850, q: 1.5, gain: 0.025, rate: 1.38, delay: 0.04, filter: 'bandpass' },
  ],
  metal: [
    { duration: 0.085, frequency: 980, q: 0.9, gain: 0.045, rate: 0.82, delay: 0, filter: 'bandpass' },
    { duration: 0.07, frequency: 2150, q: 1.1, gain: 0.025, rate: 1.05, delay: 0.052, filter: 'highpass' },
  ],
};

/**
 * 全部声音由 Web Audio 即时合成，不下载或复制其它游戏的音频。
 * 稀疏钟琴/柔和合成垫负责 BGM，短噪声与共振器负责方块、脚步和战斗反馈。
 */
export class GameAudio {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private sfxBus: GainNode | null = null;
  private musicBus: GainNode | null = null;
  private environmentFilter: BiquadFilterNode | null = null;
  private noise: AudioBuffer | null = null;
  private volume = 0.7;
  private started = false;
  private phrase = 0;
  private musicTimer: number | null = null;
  private stepTimer = 0;
  private hitTimer = 0;
  private groundStateKnown = false;
  private wasOnGround = false;
  private dimension: AudioDimension = 'overworld';
  private underwater = false;

  constructor() {
    if (typeof window === 'undefined') return;
    const unlock = (): void => void this.unlock();
    window.addEventListener('pointerdown', unlock, { capture: true, passive: true });
    window.addEventListener('touchend', unlock, { capture: true, passive: true });
    window.addEventListener('keydown', unlock, { capture: true });
    document.addEventListener('visibilitychange', () => {
      if (!this.context) return;
      if (document.visibilityState === 'hidden') void this.context.suspend();
      else if (this.started) void this.context.resume();
    });
  }

  setVolume(percent: number): void {
    this.volume = Math.max(0, Math.min(1, percent / 100));
    if (this.master && this.context) {
      const audible = this.volume ** 1.35;
      this.master.gain.setTargetAtTime(audible, this.context.currentTime, 0.025);
    }
  }

  async unlock(): Promise<void> {
    const context = this.ensureContext();
    if (!context) return;
    if (context.state !== 'running') {
      try {
        await context.resume();
      } catch {
        // 浏览器仍在等待用户手势；下一次 pointerdown/keydown 会再次尝试。
      }
    }
  }

  start(): void {
    this.started = true;
    const context = this.ensureContext();
    if (context?.state === 'suspended') void context.resume();
    if (this.musicTimer === null) this.scheduleNextPhrase(1.5);
  }

  update(dt: number, frame: GameAudioFrame): void {
    this.dimension = frame.dimension;
    this.underwater = frame.underwater;
    if (this.environmentFilter && this.context) {
      this.environmentFilter.frequency.setTargetAtTime(
        frame.underwater ? 820 : frame.dimension === 'nether' ? 5400 : 18000,
        this.context.currentTime,
        frame.underwater ? 0.08 : 0.35,
      );
    }
    this.stepTimer -= dt;
    this.hitTimer -= dt;
    if (this.groundStateKnown && frame.playing && !this.wasOnGround && frame.onGround && !frame.inWater)
      this.land(frame.groundBlock);
    this.wasOnGround = frame.onGround;
    this.groundStateKnown = true;
    // 水里只保留水体环境处理，绝不继续按脚下方块播放“走路声”。
    if (!shouldPlayFootstep(frame)) return;
    if (this.stepTimer > 0) return;
    this.step(frame.groundBlock);
    this.stepTimer = frame.sprinting ? 0.29 : 0.42;
  }

  step(blockId: number): void {
    const material = MATERIAL[blockSoundFor(blockId)];
    this.noiseBurst(0.065, material.frequency, 0.8, material.gain * 0.38, material.rate);
  }

  jump(blockId: number): void {
    const material = MATERIAL[blockSoundFor(blockId)];
    this.noiseBurst(0.07, material.frequency * 0.78, 0.65, material.gain * 0.28, material.rate * 0.82);
  }

  land(blockId: number): void {
    const material = MATERIAL[blockSoundFor(blockId)];
    this.noiseBurst(0.1, material.frequency * 0.72, 0.55, material.gain * 0.48, material.rate * 0.72);
  }

  blockHit(blockId: number): void {
    if (this.hitTimer > 0) return;
    this.hitTimer = 0.145;
    const sound = blockSoundFor(blockId);
    const material = MATERIAL[sound];
    const filter: BiquadFilterType = sound === 'sand' || sound === 'grass' ? 'highpass' : 'bandpass';
    this.noiseBurst(0.045, material.frequency, 0.65, material.gain * 0.34, material.rate, 0, filter);
  }

  blockBreak(blockId: number): void {
    const sound = blockSoundFor(blockId);
    for (const layer of BREAK_LAYERS[sound])
      this.noiseBurst(
        layer.duration,
        layer.frequency,
        layer.q,
        layer.gain,
        layer.rate,
        layer.delay,
        layer.filter,
      );
    if (sound === 'wood') this.resonance(176, 0.08, 0.018, 'triangle', 132, 0.025);
    if (sound === 'glass') {
      this.resonance(1680, 0.13, 0.022, 'sine', 2180, 0.025);
      this.resonance(2350, 0.1, 0.014, 'sine', 1820, 0.075);
    }
    if (sound === 'metal') this.resonance(510, 0.16, 0.02, 'sine', 430, 0.02);
  }

  blockPlace(blockId: number): void {
    const material = MATERIAL[blockSoundFor(blockId)];
    this.noiseBurst(0.075, material.frequency * 0.72, 0.9, material.gain * 0.68, material.rate * 0.8);
    this.noiseBurst(0.045, material.frequency, 1.25, material.gain * 0.3, material.rate, 0.035);
  }

  attack(): void {
    this.noiseBurst(0.085, 1380, 0.65, 0.15, 1.35);
    this.resonance(118, 0.09, 0.07, 'square');
  }

  hurt(): void {
    this.resonance(145, 0.16, 0.12, 'sawtooth', 72);
    this.noiseBurst(0.1, 520, 0.7, 0.09, 0.62);
  }

  bow(power: number): void {
    const p = Math.max(0, Math.min(1, power));
    this.resonance(290 + p * 180, 0.16, 0.065, 'triangle', 125 + p * 70);
    this.noiseBurst(0.12, 2200, 0.6, 0.08 + p * 0.035, 1.7);
  }

  eat(): void {
    this.noiseBurst(0.1, 780, 1.1, 0.1, 0.78);
    this.noiseBurst(0.08, 1180, 1.3, 0.07, 0.94, 0.07);
  }

  pickup(): void {
    this.resonance(740, 0.07, 0.055, 'sine', 1060);
    this.resonance(990, 0.09, 0.04, 'sine', 1320, 0.045);
  }

  arrowHit(): void {
    this.noiseBurst(0.055, 1180, 0.8, 0.038, 1.08, 0, 'bandpass');
    this.resonance(245, 0.08, 0.022, 'triangle', 170);
  }

  mobHurt(dead = false): void {
    this.resonance(dead ? 135 : 205, dead ? 0.28 : 0.13, dead ? 0.045 : 0.03, 'triangle', dead ? 72 : 150);
    this.noiseBurst(dead ? 0.16 : 0.075, 680, 0.6, dead ? 0.038 : 0.026, 0.72);
  }

  toolBreak(): void {
    this.noiseBurst(0.13, 1350, 0.7, 0.055, 1.08, 0, 'highpass');
    this.resonance(620, 0.12, 0.025, 'triangle', 210, 0.025);
  }

  uiClick(): void {
    this.resonance(520, 0.035, 0.012, 'sine', 440);
  }

  portal(): void {
    this.resonance(82, 1.1, 0.08, 'sine', 164);
    this.resonance(123, 1.25, 0.045, 'triangle', 246, 0.08);
  }

  death(): void {
    this.resonance(180, 0.65, 0.13, 'sawtooth', 48);
    this.noiseBurst(0.4, 360, 0.5, 0.1, 0.52);
  }

  explosion(): void {
    this.noiseBurst(0.52, 135, 0.55, 0.38, 0.38);
    this.noiseBurst(0.32, 620, 0.7, 0.2, 0.62, 0.025);
    this.resonance(72, 0.7, 0.13, 'sine', 28);
  }

  private ensureContext(): AudioContext | null {
    if (this.context) return this.context;
    if (typeof window === 'undefined') return null;
    const Context =
      window.AudioContext ??
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Context) return null;
    const context = new Context();
    const master = context.createGain();
    const environmentFilter = context.createBiquadFilter();
    const compressor = context.createDynamicsCompressor();
    const sfxBus = context.createGain();
    const musicBus = context.createGain();
    const delay = context.createDelay(2);
    const delayFeedback = context.createGain();
    master.gain.value = this.volume ** 1.35;
    environmentFilter.type = 'lowpass';
    environmentFilter.frequency.value = 18000;
    compressor.threshold.value = -12;
    compressor.knee.value = 16;
    compressor.ratio.value = 4;
    compressor.attack.value = 0.004;
    compressor.release.value = 0.22;
    sfxBus.gain.value = 0.58;
    musicBus.gain.value = 0.23;
    delay.delayTime.value = 0.42;
    delayFeedback.gain.value = 0.2;
    sfxBus.connect(master);
    musicBus.connect(master);
    musicBus.connect(delay);
    delay.connect(delayFeedback);
    delayFeedback.connect(delay);
    delay.connect(master);
    master.connect(environmentFilter);
    environmentFilter.connect(compressor);
    compressor.connect(context.destination);
    this.context = context;
    this.master = master;
    this.sfxBus = sfxBus;
    this.musicBus = musicBus;
    this.environmentFilter = environmentFilter;
    this.noise = this.makeNoise(context);
    return context;
  }

  private makeNoise(context: AudioContext): AudioBuffer {
    const buffer = context.createBuffer(1, Math.floor(context.sampleRate * 0.55), context.sampleRate);
    const data = buffer.getChannelData(0);
    let previous = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      previous = previous * 0.28 + white * 0.72;
      data[i] = previous;
    }
    return buffer;
  }

  private noiseBurst(
    duration: number,
    frequency: number,
    q: number,
    gain: number,
    rate: number,
    delay = 0,
    filterType: BiquadFilterType = 'bandpass',
  ): void {
    const context = this.ensureContext();
    if (!context || !this.sfxBus || !this.noise || this.volume <= 0) return;
    const now = context.currentTime + delay;
    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const envelope = context.createGain();
    source.buffer = this.noise;
    source.playbackRate.value = rate * (0.94 + Math.random() * 0.12);
    filter.type = filterType;
    filter.frequency.value = frequency * (0.94 + Math.random() * 0.12);
    filter.Q.value = q;
    const attack = Math.min(0.006, duration * 0.18);
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.linearRampToValueAtTime(Math.max(0.0001, gain), now + attack);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.connect(filter);
    filter.connect(envelope);
    envelope.connect(this.sfxBus);
    source.start(now, Math.random() * 0.12, duration);
    source.stop(now + duration + 0.01);
  }

  private resonance(
    fromHz: number,
    duration: number,
    gain: number,
    type: OscillatorType = 'sine',
    toHz = fromHz,
    delay = 0,
  ): void {
    const context = this.ensureContext();
    if (!context || !this.sfxBus || this.volume <= 0) return;
    const now = context.currentTime + delay;
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(fromHz, now);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, toHz), now + duration);
    const attack = Math.min(0.004, duration * 0.18);
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.linearRampToValueAtTime(Math.max(0.0001, gain), now + attack);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(envelope);
    envelope.connect(this.sfxBus);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  }

  private scheduleNextPhrase(delaySeconds: number): void {
    if (typeof window === 'undefined') return;
    this.musicTimer = window.setTimeout(() => {
      this.musicTimer = null;
      if (!this.started) return;
      this.playPhrase();
      // 和原版方块生存游戏相似的“留白感”，但旋律与音色均为本项目原创。
      this.scheduleNextPhrase(13 + Math.random() * 11);
    }, delaySeconds * 1000);
  }

  private playPhrase(): void {
    const context = this.ensureContext();
    if (!context || !this.musicBus || this.volume <= 0 || context.state !== 'running') return;
    const chord = ambientChord(this.phrase++, this.dimension);
    const now = context.currentTime + 0.08;
    const count = this.dimension === 'nether' ? 5 : 7;
    for (let i = 0; i < count; i++) {
      const octave = i >= 4 && this.dimension === 'overworld' ? 12 : 0;
      const note = chord[(i * 3 + this.phrase) % chord.length] + octave;
      const when = now + i * (this.dimension === 'nether' ? 1.7 : 1.28);
      this.musicTone(midiHz(note), when, this.dimension === 'nether' ? 5.8 : 4.4, i === 0 ? 0.055 : 0.038);
    }
    this.musicTone(midiHz(chord[0] - 12), now, 9.5, 0.032, 'sine');
  }

  private musicTone(
    frequency: number,
    when: number,
    duration: number,
    peak: number,
    type: OscillatorType = 'sine',
  ): void {
    const context = this.context;
    if (!context || !this.musicBus) return;
    const oscillator = context.createOscillator();
    const overtone = context.createOscillator();
    const overtoneGain = context.createGain();
    const filter = context.createBiquadFilter();
    const envelope = context.createGain();
    oscillator.type = type;
    overtone.type = 'sine';
    oscillator.frequency.value = frequency;
    overtone.frequency.value = frequency * 2.003;
    overtoneGain.gain.value = 0.12;
    filter.type = 'lowpass';
    filter.frequency.value = this.underwater ? 700 : this.dimension === 'nether' ? 1250 : 2600;
    filter.Q.value = 0.7;
    envelope.gain.setValueAtTime(0.0001, when);
    envelope.gain.exponentialRampToValueAtTime(peak, when + Math.min(0.45, duration * 0.16));
    envelope.gain.exponentialRampToValueAtTime(peak * 0.26, when + duration * 0.4);
    envelope.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    oscillator.connect(filter);
    overtone.connect(overtoneGain);
    overtoneGain.connect(filter);
    filter.connect(envelope);
    envelope.connect(this.musicBus);
    oscillator.start(when);
    overtone.start(when);
    oscillator.stop(when + duration + 0.05);
    overtone.stop(when + duration + 0.05);
  }
}

export const gameAudio = new GameAudio();
