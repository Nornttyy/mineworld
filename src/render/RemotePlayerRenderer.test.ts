import { describe, expect, it } from 'vitest';
import { interpolateRemoteYaw, remotePlayerColor } from './RemotePlayerRenderer';

describe('远端玩家视觉辅助函数', () => {
  it('同一玩家 id 始终获得同一主色', () => {
    expect(remotePlayerColor('alex')).toBe(remotePlayerColor('alex'));
    expect(remotePlayerColor('alex')).not.toBe(remotePlayerColor('steve'));
  });

  it('朝向插值跨越 ±PI 时走短弧，不会转一整圈', () => {
    const from = Math.PI - 0.08;
    const to = -Math.PI + 0.08;
    const next = interpolateRemoteYaw(from, to, 0.5);
    expect(Math.abs(next - from)).toBeLessThan(0.2);
  });
});
