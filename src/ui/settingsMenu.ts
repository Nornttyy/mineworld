import { loadSettings, saveSettings, type Settings, type TexturePack, type LightingQuality } from '../core/settings';

// 设置面板：局内(暂停菜单)与局外(主菜单)共用。改动即存盘并通过 onChange 通知应用。
// 覆盖在其它界面之上（半透明背板 + 居中卡片）；点"返回"只是隐藏，露出后面的菜单。
export class SettingsMenu {
  private readonly root: HTMLElement;
  private settings: Settings;
  onChange: ((s: Settings) => void) | null = null;

  constructor(root: HTMLElement) {
    this.root = root;
    this.settings = loadSettings();
    root.classList.remove('hidden'); // 改用内联 display 控制(避开 .hidden 的 !important)
    // 占满全屏的设置页（不再是小浮窗）：不透明深底铺满，控件居中成列。
    root.style.cssText =
      'position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;' +
      'overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;';
    root.innerHTML = `
      <div class="settings-card">
        <h2 class="screen-title">选项</h2>
        <label><span>音乐和音效</span><input id="set-vol" type="range" min="0" max="100" /><span id="set-vol-val"></span></label>
        <label><span>光照</span><select id="set-lighting">
          <option value="off">原版风格</option><option value="standard">增强光影</option><option value="high">高质量光影</option>
        </select></label>
        <div class="settings-textures"><span>资源包</span>
          <button id="set-tex-classic" class="btn" type="button">原版材质</button>
          <button id="set-tex-cartoon" class="btn" type="button">鲜艳像素</button>
        </div>
        <label><span>渲染距离</span><input id="set-rd" type="range" min="3" max="12" /><span id="set-rd-val"></span></label>
        <button id="set-close" class="btn btn-wide" type="button">完成</button>
      </div>`;

    const vol = root.querySelector('#set-vol') as HTMLInputElement;
    const volVal = root.querySelector('#set-vol-val') as HTMLElement;
    const lighting = root.querySelector('#set-lighting') as HTMLSelectElement;
    const texCartoon = root.querySelector('#set-tex-cartoon') as HTMLButtonElement;
    const texClassic = root.querySelector('#set-tex-classic') as HTMLButtonElement;

    const syncTexButtons = (): void => {
      texCartoon.classList.toggle('active', this.settings.texturePack === 'cartoon');
      texClassic.classList.toggle('active', this.settings.texturePack === 'classic');
      texCartoon.style.outline = this.settings.texturePack === 'cartoon' ? '2px solid #fff' : 'none';
      texClassic.style.outline = this.settings.texturePack === 'classic' ? '2px solid #fff' : 'none';
    };
    const apply = (): void => {
      saveSettings(this.settings);
      this.onChange?.(this.settings);
    };
    const setTex = (p: TexturePack): void => {
      this.settings = { ...this.settings, texturePack: p };
      syncTexButtons();
      apply();
    };

    const setFill = (): void => vol.style.setProperty('--fill', `${this.settings.volume}%`); // 拉杆已填充段
    vol.addEventListener('input', () => {
      this.settings = { ...this.settings, volume: Number(vol.value) };
      volVal.textContent = `${this.settings.volume}%`;
      setFill();
      apply();
    });
    lighting.addEventListener('change', () => {
      this.settings = { ...this.settings, lightingQuality: lighting.value as LightingQuality };
      apply();
    });
    texCartoon.addEventListener('click', () => setTex('cartoon'));
    texClassic.addEventListener('click', () => setTex('classic'));
    const rd = root.querySelector('#set-rd') as HTMLInputElement;
    const rdVal = root.querySelector('#set-rd-val') as HTMLElement;
    const setRdFill = (): void =>
      rd.style.setProperty('--fill', `${((this.settings.renderDistance - 3) / 9) * 100}%`);
    rd.addEventListener('input', () => {
      this.settings = { ...this.settings, renderDistance: Number(rd.value) };
      rdVal.textContent = String(this.settings.renderDistance);
      setRdFill();
      apply();
    });
    (root.querySelector('#set-close') as HTMLElement).addEventListener('click', () => this.hide());

    // 初值
    vol.value = String(this.settings.volume);
    volVal.textContent = `${this.settings.volume}%`;
    setFill();
    lighting.value = this.settings.lightingQuality;
    rd.value = String(this.settings.renderDistance);
    rdVal.textContent = String(this.settings.renderDistance);
    setRdFill();
    syncTexButtons();
  }

  get current(): Settings {
    return this.settings;
  }
  show(): void {
    this.root.style.display = 'flex';
  }
  hide(): void {
    this.root.style.display = 'none';
  }
  get visible(): boolean {
    return this.root.style.display !== 'none';
  }
}
