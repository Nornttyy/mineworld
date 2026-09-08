import { describe, expect, it } from 'vitest';
import { decodePeerSignal, encodePeerSignal, type PeerSignal } from './PeerMultiplayerClient';

const offer: PeerSignal = {
  v: 1,
  kind: 'offer',
  session: 'test-session',
  room: 'MWABCDE',
  hostName: '房主',
  description: { type: 'offer', sdp: 'v=0\r\na=ice-ufrag:test\r\n' },
};

describe('点对点连接码', () => {
  it('可无损编码和解码 Unicode 邀请', () => {
    expect(decodePeerSignal(encodePeerSignal(offer))).toEqual(offer);
  });

  it('容忍聊天软件在连接码周围或中间加入空白', () => {
    const code = encodePeerSignal(offer);
    const wrapped = `  ${code.slice(0, 28)}\n${code.slice(28)}  `;
    expect(decodePeerSignal(wrapped)).toEqual(offer);
  });

  it('拒绝损坏、错误版本和错误 SDP 类型', () => {
    expect(() => decodePeerSignal('不是连接码')).toThrow('有效');
    expect(() => decodePeerSignal('MWP1.%%%')).toThrow('损坏');
    expect(() =>
      decodePeerSignal(
        encodePeerSignal({
          ...offer,
          description: { type: 'answer', sdp: 'v=0' },
        } as PeerSignal),
      ),
    ).toThrow('不完整');
  });

  it('回应码保留会话标识，供房主阻止串房', () => {
    const answer: PeerSignal = {
      v: 1,
      kind: 'answer',
      session: 'same-session',
      guestName: '朋友',
      description: { type: 'answer', sdp: 'v=0\r\n' },
    };
    expect(decodePeerSignal(encodePeerSignal(answer))).toEqual(answer);
  });
});
