import { BLOCKS } from '../core/blocks/registry';
import blocks from './data/block-sounds.json';
import events from './data/sound-events.json';

export interface SoundVariant { name: string; volume: number; pitch: number; weight: number }
export interface BlockSoundProfile {
  volume: number; pitch: number;
  break: string; hit: string; place: string; step: string; fall: string;
}
export type BlockAction = 'break' | 'hit' | 'place' | 'step' | 'fall';
export interface SoundCue { event: string; volume: number; pitch: number }
export const SOUND_EVENTS: Readonly<Record<string, readonly SoundVariant[]>> = events;
export const BLOCK_SOUNDS: Readonly<Record<string, BlockSoundProfile>> = blocks;

export function blockProfile(id: number): BlockSoundProfile {
  return BLOCK_SOUNDS[BLOCKS[id]?.name] ?? BLOCK_SOUNDS.stone;
}

/** Registry sound types, with the call-site scalars used by Java's block/player actions. */
export function blockCue(id: number, action: BlockAction): SoundCue {
  const p = blockProfile(id);
  const volume = action === 'hit' ? (p.volume + 1) / 8 : action === 'place' ? (p.volume + 1) / 2 :
    action === 'step' ? p.volume * 0.15 : action === 'fall' ? p.volume * 0.5 : (p.volume + 1) / 2;
  const pitch = p.pitch * (action === 'hit' ? 0.5 : action === 'place' || action === 'break' ? 0.8 : action === 'fall' ? 0.75 : 1);
  return { event: p[action], volume, pitch };
}

export function pickVariant(event: string, random = Math.random): SoundVariant | null {
  const variants = SOUND_EVENTS[event];
  if (!variants?.length) return null;
  let weight = Math.min(0.999999999, Math.max(0, random())) * variants.reduce((n, v) => n + v.weight, 0);
  for (const variant of variants) {
    weight -= variant.weight;
    if (weight < 0) return variant;
  }
  return variants[variants.length - 1];
}

/** Entity.nextStep(): distance is accumulated at 0.6 per block, not per rendered frame. */
export class StepDistance {
  private distance = 0;
  private next = 1;
  reset(): void { this.distance = 0; this.next = 1; }
  advance(horizontal: number, audible: boolean): boolean {
    if (!Number.isFinite(horizontal) || horizontal < 0 || horizontal > 8) { this.reset(); return false; }
    this.distance = Math.fround(this.distance + Math.fround(horizontal * 0.6));
    if (!audible || this.distance <= this.next) return false;
    this.next = Math.floor(this.distance) + 1;
    return true;
  }
}

/** Consumable: 1.6 seconds; effects after the first 7 ticks, then every 4 ticks. */
export function crossedEatTicks(before: number, after: number): number {
  let count = 0;
  for (const tick of [8, 12, 16, 20, 24, 28]) if (before < tick / 20 && after >= tick / 20) count++;
  return count;
}
