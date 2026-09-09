import { describe, expect, it } from 'vitest';
import { isNewBuild } from './updateWatcher';

describe('build update watcher', () => {
  it('只在服务器返回不同的有效构建号时刷新', () => {
    expect(isNewBuild('old', { version: 'new' })).toBe(true);
    expect(isNewBuild('same', { version: 'same' })).toBe(false);
    expect(isNewBuild('old', {})).toBe(false);
    expect(isNewBuild('old', { version: 123 })).toBe(false);
  });
});
