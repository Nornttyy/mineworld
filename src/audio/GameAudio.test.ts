import { describe, expect, it } from 'vitest';
import { ambientChord, blockSoundFor, shouldPlayFootstep, type GameAudioFrame } from './GameAudio';
import { DIAMOND_BLOCK, GRASS, OAK_LEAVES, OAK_LOG, SAND, WATER } from '../core/blocks/registry';

const STONE = 1;

describe('方块音效材质分类', () => {
  it('区分石、土草、沙、木、透明硬块和金属储存块', () => {
    expect(blockSoundFor(STONE)).toBe('stone');
    expect(blockSoundFor(GRASS)).toBe('grass');
    expect(blockSoundFor(OAK_LEAVES)).toBe('grass');
    expect(blockSoundFor(SAND)).toBe('sand');
    expect(blockSoundFor(OAK_LOG)).toBe('wood');
    expect(blockSoundFor(DIAMOND_BLOCK)).toBe('metal');
    expect(blockSoundFor(WATER)).toBe('stone');
  });
});

describe('原创环境 BGM 和声', () => {
  it('主世界与下界有不同音区，并能稳定循环', () => {
    expect(ambientChord(0, 'overworld')).toEqual([48, 55, 60, 64]);
    expect(ambientChord(4, 'overworld')).toEqual(ambientChord(0, 'overworld'));
    expect(ambientChord(0, 'nether')).toEqual([38, 45, 50, 53]);
    expect(Math.max(...ambientChord(0, 'nether'))).toBeLessThan(
      Math.max(...ambientChord(0, 'overworld')),
    );
  });
});

describe('脚步触发条件', () => {
  const frame: GameAudioFrame = {
    playing: true,
    moving: true,
    sprinting: false,
    onGround: true,
    inWater: false,
    underwater: false,
    groundBlock: GRASS,
    dimension: 'overworld',
  };

  it('只在陆地移动时播放，水中没有地面走路声', () => {
    expect(shouldPlayFootstep(frame)).toBe(true);
    expect(shouldPlayFootstep({ ...frame, inWater: true })).toBe(false);
    expect(shouldPlayFootstep({ ...frame, onGround: false })).toBe(false);
    expect(shouldPlayFootstep({ ...frame, moving: false })).toBe(false);
  });
});
