import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SampleAudio } from './SampleAudio';

const param = () => ({value:0,setTargetAtTime:vi.fn()});
const node = () => ({connect:vi.fn(),disconnect:vi.fn()});
function mockContext() { return {state:'running',currentTime:0,destination:{},
    createGain:vi.fn(()=>({...node(),gain:param()})),
    createBufferSource:vi.fn(()=>({...node(),buffer:null,playbackRate:param(),start:vi.fn(),stop:vi.fn(),onended:null as null | (()=>void)})),
    createPanner:vi.fn(()=>({...node(),positionX:param(),positionY:param(),positionZ:param()})),
    decodeAudioData:vi.fn(async()=>({duration:0.4})),resume:vi.fn(async()=>{}),suspend:vi.fn(async()=>{})}; }
let ctx = mockContext();
beforeEach(() => {
  ctx = mockContext();
  vi.stubGlobal('window',{AudioContext:vi.fn(()=>ctx),location:{search:''}});
  vi.stubGlobal('fetch',vi.fn(async()=>({ok:true,arrayBuffer:async()=>new ArrayBuffer(20)})));
});
afterEach(()=>{vi.unstubAllGlobals();vi.restoreAllMocks();});

describe('sample playback lifecycle', () => {
  it('decodes simultaneous copies of the same sample once and honors event gain', async () => {
    const audio=new SampleAudio();
    await Promise.all([audio.play('ui.button.click',{volume:0.25}),audio.play('ui.button.click',{volume:0.25})]);
    expect(fetch).toHaveBeenCalledOnce(); expect(ctx.decodeAudioData).toHaveBeenCalledOnce();
    expect(ctx.createBufferSource).toHaveBeenCalledTimes(2);
    expect(ctx.createGain.mock.results.at(-1)?.value.gain.value).toBe(0.25);
    const voice=ctx.createBufferSource.mock.results[0].value;
    voice.onended!(); expect(voice.disconnect).toHaveBeenCalledOnce();
  });
  it('does not replay a late download after pausing', async () => {
    let resolve!: (b:{duration:number})=>void;
    ctx.decodeAudioData.mockImplementation(()=>new Promise(r=>{resolve=r;}));
    const audio=new SampleAudio(), loading=audio.play('ui.button.click');
    await vi.waitFor(()=>expect(resolve).toBeDefined());
    audio.stopWorld(); resolve({duration:1});
    expect(await loading).toBe(false); expect(ctx.createBufferSource).not.toHaveBeenCalled();
  });
  it('muting during decode suppresses that sound', async () => {
    let resolve!: (b:{duration:number})=>void;
    ctx.decodeAudioData.mockImplementation(()=>new Promise(r=>{resolve=r;}));
    const audio=new SampleAudio(), loading=audio.play('ui.button.click',{ui:true});
    await vi.waitFor(()=>expect(resolve).toBeDefined());
    audio.setVolume(0); resolve({duration:1});
    expect(await loading).toBe(false); expect(ctx.createBufferSource).not.toHaveBeenCalled();
  });
  it('keeps menu clicks alive when world voices stop', async () => {
    const audio=new SampleAudio();
    await audio.play('ui.button.click',{ui:true}); await audio.play('entity.item.pickup');
    audio.stopWorld();
    expect(ctx.createBufferSource.mock.results[0].value.stop).not.toHaveBeenCalled();
    expect(ctx.createBufferSource.mock.results[1].value.stop).toHaveBeenCalledOnce();
  });
  it('stop all also cancels pending UI previews', async () => {
    let resolve!: (b:{duration:number})=>void;
    ctx.decodeAudioData.mockImplementation(()=>new Promise(r=>{resolve=r;}));
    const audio=new SampleAudio(), loading=audio.play('ui.button.click',{ui:true});
    await vi.waitFor(()=>expect(resolve).toBeDefined());
    audio.stopAll(); resolve({duration:1});
    expect(await loading).toBe(false); expect(ctx.createBufferSource).not.toHaveBeenCalled();
  });
  it('uses positional linear attenuation and avoids fetching inaudible voices', async () => {
    const audio=new SampleAudio();
    expect(await audio.play('entity.item.pickup',{position:{x:17,y:0,z:0}})).toBe(false);
    expect(fetch).not.toHaveBeenCalled();
    await audio.play('entity.item.pickup',{position:{x:4,y:0,z:0}});
    expect(ctx.createPanner.mock.results[0].value).toMatchObject({distanceModel:'linear',refDistance:0,maxDistance:16,positionX:{value:4}});
  });
  it('does not resume hidden-tab queued samples later', async () => {
    ctx.state='suspended';
    expect(await new SampleAudio().play('ui.button.click')).toBe(false);
    expect(ctx.createBufferSource).not.toHaveBeenCalled();
  });
  it('recovers from a failed request after cooldown instead of keeping a rejected promise forever', async () => {
    vi.spyOn(console,'warn').mockImplementation(()=>{});
    vi.spyOn(Date,'now').mockReturnValue(1000);
    vi.mocked(fetch).mockRejectedValueOnce(new Error('offline'));
    const audio=new SampleAudio();
    expect(await audio.play('ui.button.click')).toBe(false);
    expect(await audio.play('ui.button.click')).toBe(false); expect(fetch).toHaveBeenCalledTimes(1);
    vi.mocked(Date.now).mockReturnValue(12000);
    expect(await audio.play('ui.button.click')).toBe(true);
    vi.restoreAllMocks();
  });
});
