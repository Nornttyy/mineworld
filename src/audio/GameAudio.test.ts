import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GameAudio, type GameAudioFrame, type MovementSoundFrame } from './GameAudio';
import { BLOCKS, STONE, GRASS, SANDSTONE, IRON_ORE, DIAMOND_ORE, DEEPSLATE, MUD, SNOW_BLOCK, OAK_LOG } from '../core/blocks/registry';
import { BLOCK_SOUNDS, SOUND_EVENTS, blockCue, blockProfile, crossedEatTicks, pickVariant, StepDistance } from './JavaSounds';
import { spawnMob } from '../core/entity/mob';

const frame: GameAudioFrame = { playing:true, moving:true, sprinting:false, onGround:true, inWater:false, underwater:false, groundBlock:GRASS, dimension:'overworld' };
const movement: MovementSoundFrame = { distance:0.22, onGround:true, inWater:false, crouching:false, flying:false, groundBlock:GRASS, velocity:{x:0.22,y:0,z:0} };
let audio: GameAudio;
const mockPlay = (audio: GameAudio) => vi.spyOn(audio.samples,'play').mockResolvedValue(true);
let play: ReturnType<typeof mockPlay>;
beforeEach(() => { audio = new GameAudio(); play = mockPlay(audio); });

describe('Java registry sound mapping', () => {
  it('covers every implemented block, including all appended terrain and flower IDs', () => {
    for (const b of BLOCKS) {
      expect(BLOCK_SOUNDS[b.name], b.name).toBeDefined();
      for (const action of ['break','hit','step','place','fall'] as const)
        expect(SOUND_EVENTS[blockProfile(b.id)[action]], `${b.name} ${action}`).toBeDefined();
    }
  });
  it('does not infer ore/stone material from substrings', () => {
    for (const id of [STONE,IRON_ORE,DIAMOND_ORE,SANDSTONE]) expect(blockProfile(id).step).toBe('block.stone.step');
    expect(blockProfile(DEEPSLATE).step).toBe('block.deepslate.step');
    expect(blockProfile(MUD).step).toBe('block.mud.step');
    expect(blockProfile(SNOW_BLOCK).step).toBe('block.snow.step');
    expect(blockProfile(OAK_LOG).step).toBe('block.wood.step');
  });
  it('preserves separate action sounds and original volume/pitch multipliers', () => {
    expect(blockCue(STONE,'hit')).toEqual({event:'block.stone.hit',volume:0.25,pitch:0.5});
    expect(blockCue(STONE,'break')).toEqual({event:'block.stone.break',volume:1,pitch:0.8});
    expect(blockCue(STONE,'step')).toEqual({event:'block.stone.step',volume:0.15,pitch:1});
    expect(blockCue(STONE,'fall')).toEqual({event:'block.stone.fall',volume:0.5,pitch:0.75});
  });
  it('retains variants and asset-specific gain without adding arbitrary pitch wobble', () => {
    expect(pickVariant('block.stone.step',()=>0)?.name).toBe('step/stone1');
    expect(pickVariant('block.stone.step',()=>0.999)?.name).toBe('step/stone6');
    expect(pickVariant('entity.player.attack.strong',()=>0)?.volume).toBe(0.6);
    expect(pickVariant('intentionally_empty')).toBeNull();
  });
});

describe('distance-based steps and water', () => {
  it('requires real distance, and does not emit walking while motion is blocked', () => {
    const steps = new StepDistance();
    for (let n=0;n<7;n++) expect(steps.advance(0.22,true)).toBe(false);
    expect(steps.advance(0.22,true)).toBe(true);
    for (let n=0;n<100;n++) expect(steps.advance(0,true)).toBe(false);
  });
  it('sprinting reaches the same distance threshold in fewer physics ticks', () => {
    const count = (distance:number):number => { const s = new StepDistance(); let n=0; while (!s.advance(distance,true)) n++; return n+1; };
    expect(count(0.22)).toBe(8); expect(count(0.28)).toBe(6);
  });
  it('does not play steps for sneaking or flight, nor fake jump and landing effects', () => {
    for(let n=0;n<40;n++) { audio.movement({...movement,crouching:true}); audio.movement({...movement,flying:true}); }
    audio.jump(GRASS);
    audio.update(0.05,{...frame,onGround:false}); audio.update(0.05,frame);
    expect(play).not.toHaveBeenCalled();
  });
  it('uses swim samples, never the block under the water', () => {
    for(let n=0;n<12;n++) audio.movement({...movement,inWater:true});
    expect(play).toHaveBeenCalledWith('entity.player.swim',expect.anything());
    expect(play.mock.calls.every(c=>c[0]==='entity.player.swim')).toBe(true);
  });
  it('does not splash on spawn; splashes once on real water entry', () => {
    audio.movement({...movement,inWater:true}); expect(play).not.toHaveBeenCalled();
    audio.movement(movement); audio.movement({...movement,inWater:true,velocity:{x:0,y:-0.8,z:0}});
    expect(play).toHaveBeenCalledOnce(); expect(play.mock.calls[0][0]).toBe('entity.player.splash');
  });
});

describe('game event timing', () => {
  it('throttles digging to four ticks and resets when changing targets', () => {
    audio.blockHit(STONE); audio.update(0.1,frame); audio.blockHit(STONE);
    expect(play).toHaveBeenCalledTimes(1);
    audio.update(0.1,frame); audio.blockHit(STONE); expect(play).toHaveBeenCalledTimes(2);
    audio.resetDig(); audio.blockHit(GRASS); expect(play).toHaveBeenCalledTimes(3);
  });
  it('chews at ticks 8/12/16/20/24/28, even with varying frame rate', () => {
    expect(crossedEatTicks(0,0.399)).toBe(0);
    expect(crossedEatTicks(0.399,0.401)).toBe(1);
    expect(crossedEatTicks(0,1.59)).toBe(6);
    audio.eating(0,1.59); expect(play).toHaveBeenCalledTimes(6);
    audio.burp(); expect(play.mock.calls.at(-1)?.[0]).toBe('entity.player.burp');
  });
  it('routes damage and species separately, with source position', () => {
    audio.hurt('drown'); expect(play.mock.calls.at(-1)?.[0]).toBe('entity.player.hurt_drown');
    audio.hurt('lava'); expect(play.mock.calls.at(-1)?.[0]).toBe('entity.player.hurt_on_fire');
    audio.mobHurt(true,'cow',{x:3,y:4,z:5});
    expect(play).toHaveBeenLastCalledWith('entity.cow.death',expect.objectContaining({position:{x:3,y:4,z:5}}));
  });
  it('a creeper primes once when its fuse begins, not every tick', () => {
    const mob=spawnMob('creeper',3,0,0); mob.fuse=1;
    audio.tickMob(mob,mob.pos,0); audio.tickMob(mob,mob.pos,1);
    expect(play).toHaveBeenCalledOnce(); expect(play.mock.calls[0][0]).toBe('entity.creeper.primed');
  });
  it('stops pending world sounds on pause without repeatedly invalidating UI clicks', () => {
    const stop=vi.spyOn(audio.samples,'stopWorld');
    audio.update(0.05,frame); audio.update(0.05,{...frame,playing:false}); audio.update(0.05,{...frame,playing:false});
    expect(stop).toHaveBeenCalledOnce();
  });
});
