// 资源 URL + 版本号(cache-busting)。同名 png 会被浏览器/CDN 缓存，改了也"看不到"、
// 得手动强刷;给 URL 带上每次构建变化的 __ASSET_VER__，浏览器一看 URL 变就自动拉新资源。
const VER = typeof __ASSET_VER__ !== 'undefined' ? __ASSET_VER__ : 'dev';

export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path}?v=${VER}`;
}
