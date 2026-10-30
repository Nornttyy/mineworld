/** Compare every block against independently sampled official Java stages. */
import fs from 'node:fs';
import { generateModernChunk } from '../../src/core/worldgen/modernOverworld';
import { BLOCKS } from '../../src/core/blocks/registry';
const ref = JSON.parse(fs.readFileSync(process.argv[2] ?? 'src/core/worldgen/reference/terrain26.fixtures.json','utf8'));
const results=[];
for (const c of ref.cases) for (const stage of ['noise','surface'] as const) {
 const chunk=generateModernChunk(c.cx,c.cz,c.seed,3,stage);
 const expected = (stage==='noise'?c.raw:c.surface).flatMap(([id,n]:number[])=>Array(n).fill(ref.palette[id]));
 const diffs: Record<string,number>={};let index=0, n=0;const points=[];
 for(let z=0;z<16;z++)for(let x=0;x<16;x++)for(let y=-64;y<320;y++){
  const id=chunk.get(x,y,z);const actual='minecraft:'+(id===3?'grass_block':BLOCKS[id].name);const e=expected[index++];
  if(actual!==e){n++;const key=actual+' → '+e;diffs[key]=(diffs[key]??0)+1;if(points.length<5)points.push([x+c.cx*16,y,z+c.cz*16,actual,e]);}
 }
 const r={seed:c.seed,cx:c.cx,cz:c.cz,stage,differences:n,types:diffs,points};results.push(r);console.log(JSON.stringify(r));
}
if (process.argv[3]) fs.writeFileSync(process.argv[3], JSON.stringify(results,null,2)+'\n');
if (results.some(r => r.differences !== 0)) process.exitCode = 1;
