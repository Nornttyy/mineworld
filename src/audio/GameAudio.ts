import { type Mob, type MobKind } from '../core/entity/mob';
import { blockCue, crossedEatTicks, StepDistance, SOUND_EVENTS } from './JavaSounds';
import { SampleAudio, type AudioPosition } from './SampleAudio';

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
  position?: AudioPosition;
  yaw?: number;
  pitch?: number;
}
export interface MovementSoundFrame {
  distance: number;
  onGround: boolean;
  inWater: boolean;
  crouching: boolean;
  flying: boolean;
  groundBlock: number;
  velocity: AudioPosition;
}
export const shouldPlayFootstep = (frame: GameAudioFrame): boolean => frame.playing && frame.moving && frame.onGround && !frame.inWater;
const triangle = (center: number, spread: number): number => center + (Math.random() - Math.random()) * spread;

/** Java 26.3 samples and event routing. Audio random choices never consume world/entity RNG. */
export class GameAudio {
  readonly samples = new SampleAudio();
  private steps = new StepDistance();
  private hitTimer = 0;
  private playing = false;
  private wasInWater: boolean | null = null;
  private mobSounds = new WeakMap<Mob, { timer: number; steps: StepDistance }>();
  private warmed = false;

  constructor() {
    if (typeof window === 'undefined') return;
    const unlock = (): void => { void this.unlock(); };
    window.addEventListener('pointerdown', unlock, { capture: true, passive: true });
    window.addEventListener('touchend', unlock, { capture: true, passive: true });
    window.addEventListener('keydown', unlock, { capture: true });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') this.samples.suspend();
      else void this.unlock();
    });
  }

  setVolume(percent: number): void { this.samples.setVolume(percent); }
  async unlock(): Promise<void> {
    await this.samples.unlock();
    if (!this.warmed) {
      this.warmed = true;
      void this.samples.preload(['ui.button.click', 'block.grass.step', 'block.grass.break', 'block.stone.step',
        'block.stone.break', 'block.gravel.step', 'block.gravel.break', 'block.wood.step', 'block.wood.break',
        'entity.player.hurt', 'entity.generic.eat', 'entity.item.pickup']);
    }
  }
  start(): void { this.steps.reset(); this.wasInWater = null; this.hitTimer = 0; this.playing = true; void this.unlock(); }
  update(dt: number, frame: GameAudioFrame): void {
    this.hitTimer = Math.max(0, this.hitTimer - dt);
    if (frame.position) this.samples.setListener(frame.position, frame.yaw ?? 0, frame.pitch ?? 0);
    if (!frame.playing && this.playing) this.samples.stopWorld();
    this.playing = frame.playing;
  }

  /** Called once per physics tick using actual displacement (blocked movement is silent). */
  movement(frame: MovementSoundFrame): void {
    if (this.wasInWater === false && frame.inWater) {
      const v = frame.velocity;
      const volume = Math.min(1, Math.sqrt((v.x*v.x + v.z*v.z)*0.2 + v.y*v.y)*0.2);
      if (volume > 0.01) void this.samples.play(volume < 0.25 ? 'entity.player.splash' : 'entity.player.splash.high_speed', { volume, pitch: triangle(1,0.4) });
    }
    this.wasInWater = frame.inWater;
    if (frame.flying || frame.crouching) return;
    if (!this.steps.advance(frame.distance, frame.inWater || frame.onGround && frame.groundBlock !== 0)) return;
    if (frame.inWater) {
      const v = frame.velocity;
      const volume = Math.min(1, Math.sqrt((v.x*v.x + v.z*v.z)*0.2 + v.y*v.y)*0.35);
      void this.samples.play('entity.player.swim', { volume, pitch: triangle(1,0.4) });
    } else this.step(frame.groundBlock);
  }
  private block(id: number, action: Parameters<typeof blockCue>[1], position?: AudioPosition): void {
    const cue = blockCue(id, action);
    void this.samples.play(cue.event, { volume: cue.volume, pitch: cue.pitch, position });
  }
  step(id: number): void { this.block(id, 'step'); }
  // Vanilla has no additional synthesized take-off whoosh.
  jump(_id: number): void {}
  land(id: number): void { this.block(id, 'fall'); }
  blockHit(id: number, position?: AudioPosition): void {
    if (this.hitTimer > 0) return;
    this.hitTimer = 0.2;
    this.block(id, 'hit', position);
  }
  resetDig(): void { this.hitTimer = 0; }
  blockBreak(id: number, position?: AudioPosition): void { this.block(id, 'break', position); }
  blockPlace(id: number, position?: AudioPosition): void { this.block(id, 'place', position); }
  attack(kind: 'strong' | 'weak' | 'crit' | 'knockback' | 'nodamage' = 'strong'): void {
    void this.samples.play(`entity.player.attack.${kind}`);
  }
  hurt(kind = 'melee'): void {
    if (kind === 'fall') return;
    const event = kind === 'drown' ? 'entity.player.hurt_drown' : kind === 'lava' || kind === 'on_fire' ? 'entity.player.hurt_on_fire' : 'entity.player.hurt';
    void this.samples.play(event);
  }
  fall(damage: number, groundBlock: number): void {
    void this.samples.play(damage > 4 ? 'entity.player.big_fall' : 'entity.player.small_fall');
    this.land(groundBlock);
  }
  bow(power: number, position?: AudioPosition): void {
    void this.samples.play('entity.arrow.shoot', { volume: 1, pitch: 1/(Math.random()*0.4+1.2)+Math.max(0,Math.min(1,power))*0.5, position });
  }
  eating(before: number, after: number): void {
    for (let n = crossedEatTicks(before,after); n > 0; n--) this.eat();
  }
  eat(): void { void this.samples.play('entity.generic.eat', { volume: Math.random() < 0.5 ? 0.5 : 1, pitch: triangle(1,0.2) }); }
  burp(): void { this.eat(); void this.samples.play('entity.player.burp', { volume:0.5, pitch:0.9+Math.random()*0.1 }); }
  pickup(): void { void this.samples.play('entity.item.pickup', { volume:0.2, pitch:triangle(2,1.4) }); }
  arrowHit(position?: AudioPosition): void { void this.samples.play('entity.arrow.hit', { pitch:1.2/(Math.random()*0.2+0.9), position }); }
  mobHurt(dead = false, kind: MobKind = 'zombie', position?: AudioPosition): void {
    void this.samples.play(`entity.${kind}.${dead ? 'death' : 'hurt'}`, { pitch:triangle(1,0.2), volume:kind === 'rabbit' ? 0.4 : 1, position });
  }
  tickMob(mob: Mob, previous: AudioPosition, previousFuse: number): void {
    let state = this.mobSounds.get(mob);
    if (!state) { state = {timer:0, steps:new StepDistance()}; this.mobSounds.set(mob,state); }
    const event = `entity.${mob.kind}.ambient`;
    // Java Mob: random.nextInt(1000) < ambientSoundTime++; reset to -interval.
    if (SOUND_EVENTS[event] && Math.floor(Math.random()*1000) < state.timer++) {
      state.timer = -(mob.kind === 'zombie' || mob.kind === 'husk' ? 100 : 80);
      void this.samples.play(event, { position:mob.pos, pitch:triangle(1,0.2), volume:mob.kind === 'rabbit' ? 0.4 : 1 });
    }
    const distance = Math.hypot(mob.pos.x-previous.x, mob.pos.z-previous.z);
    if (state.steps.advance(distance, mob.onGround) && SOUND_EVENTS[`entity.${mob.kind}.step`])
      void this.samples.play(`entity.${mob.kind}.step`, { position:mob.pos, volume:0.15 });
    if (mob.kind === 'creeper' && previousFuse === 0 && mob.fuse > 0)
      void this.samples.play('entity.creeper.primed', { position:mob.pos, volume:1, pitch:0.5 });
  }
  egg(position: AudioPosition): void { void this.samples.play('entity.chicken.egg', {position,volume:1,pitch:triangle(1,0.2)}); }
  toolBreak(): void { void this.samples.play('entity.item.break', { volume:0.8, pitch:0.8+Math.random()*0.4 }); }
  uiClick(): void { void this.samples.play('ui.button.click', { volume:0.25, ui:true }); }
  portal(): void { this.steps.reset(); this.wasInWater = null; void this.samples.play('block.portal.travel', { volume:0.25, pitch:0.8+Math.random()*0.4 }); }
  death(): void { void this.samples.play('entity.player.death'); }
  explosion(position?: AudioPosition): void { void this.samples.play('entity.generic.explode', { volume:4, pitch:triangle(0.7,0.28), position }); }
}
export const gameAudio = new GameAudio();
