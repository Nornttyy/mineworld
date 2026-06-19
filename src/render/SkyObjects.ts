import * as THREE from 'three';
import { DAY_LENGTH } from '../core/world/dayNight';

// 像素太阳：亮黄方块 + 暖芯（MC 风方块太阳）
function makeSunTex(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 16;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  x.fillStyle = '#fff6c0';
  x.fillRect(1, 1, 14, 14);
  x.fillStyle = '#ffe25a';
  x.fillRect(3, 3, 10, 10);
  x.fillStyle = '#ffcf26';
  x.fillRect(5, 5, 6, 6);
  return pixelTex(c);
}

// 像素月亮：青白方块 + 暗陨坑（简化满月）
function makeMoonTex(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 16;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  x.fillStyle = '#eef2f7';
  x.fillRect(2, 2, 12, 12);
  x.fillStyle = '#c2ccd8';
  x.fillRect(5, 4, 3, 3);
  x.fillRect(9, 7, 2, 2);
  x.fillRect(4, 9, 2, 3);
  x.fillRect(10, 11, 2, 2);
  return pixelTex(c);
}

// 像素云：白色团块，半透明、可平铺（MC 风方块云）
function makeCloudTex(): THREE.CanvasTexture {
  const S = 64;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  x.clearRect(0, 0, S, S);
  x.fillStyle = 'rgba(255,255,255,0.9)';
  // 固定图案的方块云团（确定性，无随机）
  const blobs = [
    [8, 10, 22, 11],
    [34, 7, 20, 14],
    [22, 30, 28, 12],
    [46, 32, 14, 11],
    [4, 42, 20, 11],
    [38, 48, 18, 9],
  ];
  for (const [bx, by, bw, bh] of blobs) x.fillRect(bx, by, bw, bh);
  const t = pixelTex(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function pixelTex(c: HTMLCanvasElement): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** 天空对象：方块太阳 + 方块月亮(随昼夜东升西落、对侧) + 高空方块云层(缓飘)。挂进游戏 scene。 */
export class SkyObjects {
  private readonly sun: THREE.Mesh;
  private readonly moon: THREE.Mesh;
  private readonly clouds: THREE.Mesh;
  private readonly cloudMat: THREE.MeshBasicMaterial;
  private readonly dir = new THREE.Vector3();

  constructor(scene: THREE.Scene) {
    // 太阳/月亮：天空层——不雾化(fog:false)、不写深度(被地形遮但自己不挡云)、深度测试开(地平线下被地形挡)
    const sky = (tex: THREE.Texture): THREE.MeshBasicMaterial =>
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false });
    this.sun = new THREE.Mesh(new THREE.PlaneGeometry(46, 46), sky(makeSunTex()));
    this.moon = new THREE.Mesh(new THREE.PlaneGeometry(38, 38), sky(makeMoonTex()));
    // 云：高空大平面，半透明，受雾(远处融入地平线)，缓慢平移 UV = 飘
    this.cloudMat = new THREE.MeshBasicMaterial({
      map: makeCloudTex(),
      transparent: true,
      depthWrite: false,
      opacity: 0.82,
      side: THREE.DoubleSide, // 云平面正面朝上，玩家从下方抬头看是背面——必须双面才可见
      fog: false, // 不被雾吃掉(否则头顶云距 88 格、被 fog 30-110 雾化大半看不清)
    });
    this.clouds = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), this.cloudMat);
    this.clouds.rotation.x = -Math.PI / 2; // 平铺成水平云层
    if (this.cloudMat.map) this.cloudMat.map.repeat.set(10, 10);
    scene.add(this.sun, this.moon, this.clouds);
  }

  /** 每帧：太阳/月亮按世界时间走天球(0刻=日出东、6000正午顶、12000日落西)，云跟随玩家+缓飘。 */
  update(worldTime: number, camPos: THREE.Vector3): void {
    const th = (worldTime / DAY_LENGTH) * Math.PI * 2; // 0=日出
    this.dir.set(Math.cos(th), Math.sin(th), 0.28).normalize();
    const R = 280; // 天球半径
    this.sun.position.copy(camPos).addScaledVector(this.dir, R);
    this.sun.lookAt(camPos);
    this.moon.position.copy(camPos).addScaledVector(this.dir, -R); // 月亮在太阳对侧
    this.moon.lookAt(camPos);
    // 云层：高空跟随玩家 xz，UV 缓慢平移 = 随风飘
    this.clouds.position.set(camPos.x, camPos.y + 88, camPos.z);
    if (this.cloudMat.map) this.cloudMat.map.offset.x = (worldTime * 0.00003) % 1;
  }
}
