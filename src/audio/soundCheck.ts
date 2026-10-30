import { gameAudio } from './GameAudio';
import { blockCue, type BlockAction, SOUND_EVENTS } from './JavaSounds';
const $ = (id:string):HTMLElement => document.getElementById(id)!;
const audio = gameAudio.samples;
const volume = $('volume') as HTMLInputElement;
volume.addEventListener('input',()=>{audio.setVolume(Number(volume.value));$('volume-value').textContent=volume.value+'%';});
const material = $('material') as HTMLSelectElement;
for (const [value,label] of [[1,'石头'],[3,'草方块'],[2,'泥土'],[6,'橡木'],[5,'沙子'],[15,'砂砾'],[45,'深板岩'],[47,'凝灰岩'],[48,'方解石'],[71,'泥巴'],[49,'雪'],[73,'细雪'],[33,'铁块'],[74,'朱砂'],[75,'硫磺'],[19,'下界岩'],[20,'灵魂沙']]) material.add(new Option(String(label),String(value)));
const mob = $('mob') as HTMLSelectElement;
for (const [value,label] of [['pig','猪'],['cow','牛'],['sheep','羊'],['chicken','鸡'],['rabbit','兔子'],['zombie','僵尸'],['skeleton','骷髅'],['creeper','苦力怕'],['husk','尸壳'],['spider','蜘蛛']]) mob.add(new Option(label,value));
async function play(event:string,volume=1,pitch=1):Promise<void>{
  await audio.unlock();
  const ok=await audio.play(event,{volume,pitch,ui:true,maxDelay:5000});
  $('playback').textContent=ok ? `已播放 ${event} · ${audio.stats.lastSample} · 累计 ${audio.stats.played} 次` : `未播放：${event}${SOUND_EVENTS[event] ? '（检查音量或资源加载）' : '（该生物没有此声音）'}`;
}
function button(parent:string,label:string,action:()=>void):void{const b=document.createElement('button');b.textContent=label;b.onclick=action;$(parent).append(b);}
for(const [action,label] of [['step','脚步'],['hit','挖掘'],['break','破坏'],['place','放置']] as const) button('blocks',label,()=>{const c=blockCue(Number(material.value),action as BlockAction);void play(c.event,c.volume,c.pitch);});
for(const [event,label,vol,pitch] of [
  ['entity.player.hurt','受伤',1,1],['entity.item.pickup','拾取',0.2,2],['entity.generic.eat','咀嚼',0.5,1],['entity.player.burp','吃完',0.5,0.95],
  ['entity.arrow.shoot','射箭',1,1.25],['entity.arrow.hit','箭命中',1,1.2],['entity.player.attack.strong','强攻击',1,1],['entity.player.attack.crit','暴击',1,1],['entity.item.break','工具损坏',0.8,1],['ui.button.click','菜单点击',0.25,1],
] as const) button('actions',label,()=>{void play(event,vol,pitch);});
for(const [action,label] of [['ambient','叫声'],['hurt','受伤'],['death','死亡']] as const) button('mobs',label,()=>{void play(`entity.${mob.value}.${action}`);});
for(const [event,label,volume,pitch] of [['entity.player.swim','游泳',0.25,1],['entity.player.splash','入水',0.4,1],['entity.creeper.primed','苦力怕点燃',1,0.5],['entity.generic.explode','爆炸',1,0.7],['block.portal.travel','传送',0.25,1]] as const) button('environment',label,()=>{void play(event,volume,pitch);});
$('stop').onclick=()=>{audio.stopAll();$('playback').textContent='已停止播放。';};
$('validate').onclick=async()=>{
  const b=$('validate') as HTMLButtonElement;b.disabled=true;
  try{
    await audio.unlock();
    const result=await audio.validateSamples((n,total)=>{$('validation').textContent=`正在检查 ${n} / ${total}…`;});
    $('validation').textContent=result.failed.length ? `失败 ${result.failed.length} / ${result.total}：${result.failed.join(', ')}` : `全部通过：${result.total} / ${result.total} 个音效可下载、可解码。`;
  }finally{b.disabled=false;}
};
