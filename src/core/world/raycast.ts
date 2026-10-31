import type { Vec3 } from '../physics/player';
import type { Box } from '../blocks/architecture';

export interface RayHit {
  x: number; // 命中方块坐标
  y: number;
  z: number;
  nx: number; // 命中面法线（指向射线来向；放置格 = 命中方块 + 法线）
  ny: number;
  nz: number;
  hitY?: number;
}

// 体素 DDA 射线（Amanatides & Woo）：沿 dir 步进格子，命中第一个实心方块即返回。
export function raycastVoxel(
  origin: Vec3,
  dir: Vec3,
  maxDist: number,
  isSolid: (x: number, y: number, z: number) => boolean,
  getBoxes?: (x:number,y:number,z:number) => readonly Box[] | undefined,
): RayHit | null {
  let x = Math.floor(origin.x);
  let y = Math.floor(origin.y);
  let z = Math.floor(origin.z);
  const stepX = Math.sign(dir.x);
  const stepY = Math.sign(dir.y);
  const stepZ = Math.sign(dir.z);
  const tDeltaX = dir.x !== 0 ? Math.abs(1 / dir.x) : Infinity;
  const tDeltaY = dir.y !== 0 ? Math.abs(1 / dir.y) : Infinity;
  const tDeltaZ = dir.z !== 0 ? Math.abs(1 / dir.z) : Infinity;
  const boundary = (o: number, step: number): number =>
    step > 0 ? Math.floor(o) + 1 - o : step < 0 ? o - Math.floor(o) : Infinity;
  let tMaxX = dir.x !== 0 ? boundary(origin.x, stepX) * tDeltaX : Infinity;
  let tMaxY = dir.y !== 0 ? boundary(origin.y, stepY) * tDeltaY : Infinity;
  let tMaxZ = dir.z !== 0 ? boundary(origin.z, stepZ) * tDeltaZ : Infinity;

  const hitCell=(nx:number,ny:number,nz:number):RayHit|null=>{
    if(!isSolid(x,y,z))return null;
    const boxes=getBoxes?.(x,y,z);if(boxes===undefined)return {x,y,z,nx,ny,nz};
    let nearest=maxDist+1,best:RayHit|null=null;
    for(const b of boxes){
      let near=0,far=maxDist;const normal=[0,0,0];
      const o=[origin.x-x,origin.y-y,origin.z-z],d=[dir.x,dir.y,dir.z];
      for(let axis=0;axis<3;axis++){
        if(Math.abs(d[axis])<1e-10){if(o[axis]<b[axis]||o[axis]>b[axis+3]){far=-1;break;}continue;}
        const a=(b[axis]-o[axis])/d[axis],c=(b[axis+3]-o[axis])/d[axis];
        const enter=Math.min(a,c);if(enter>near){near=enter;normal.fill(0);normal[axis]=-Math.sign(d[axis]);}
        far=Math.min(far,Math.max(a,c));
      }
      if(near<=far&&near<nearest){nearest=near;best={x,y,z,nx:normal[0],ny:normal[1],nz:normal[2],hitY:origin.y+dir.y*near-y};}
    }
    return best;
  };
  const initial=hitCell(0,0,0);if(initial)return initial;

  let t = 0;
  for (let i = 0; i < 256; i++) {
    let nx = 0;
    let ny = 0;
    let nz = 0;
    if (tMaxX < tMaxY && tMaxX < tMaxZ) {
      x += stepX;
      t = tMaxX;
      tMaxX += tDeltaX;
      nx = -stepX;
    } else if (tMaxY < tMaxZ) {
      y += stepY;
      t = tMaxY;
      tMaxY += tDeltaY;
      ny = -stepY;
    } else {
      z += stepZ;
      t = tMaxZ;
      tMaxZ += tDeltaZ;
      nz = -stepZ;
    }
    if (t > maxDist) break;
    const hit=hitCell(nx,ny,nz);if(hit)return hit;
  }
  return null;
}
