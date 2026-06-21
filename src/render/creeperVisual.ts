// 苦力怕引信视觉（纯函数，同 MC：引爆前一边闪白一边鼓胀）。
// fuse=引信计时(tick，0=未点燃)，fuseTime=引爆阈值(同 hostileAi 的 FUSE_TIME=30)。
// 返回：
//   whiteness 0..1 —— 模型颜色朝白色 lerp 的程度（越接近引爆越白）；
//   swell —— 模型整体缩放倍数（1=原大小，峰值约 1.5×）。
// 闪白随引信线性加深，再叠一层正弦脉动 → MC 那种"一鼓一鼓地闪"；鼓胀与闪白同步，看着就是"快炸了"。
export function creeperFuseVisual(fuse: number, fuseTime = 30): { whiteness: number; swell: number } {
  if (fuse <= 0) return { whiteness: 0, swell: 1 };
  const whiteness = Math.min(1, fuse / fuseTime + 0.3 * Math.abs(Math.sin(fuse * 0.7)));
  return { whiteness, swell: 1 + 0.5 * whiteness };
}
