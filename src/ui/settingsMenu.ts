import { loadSettings, saveSettings, type Settings, type TexturePack } from '../core/settings';

// 像素风控件样式（拉杆 + 复选框）：方块化、硬边、无圆角。原生控件无法用内联样式改伪元素，故注入一次。
function ensureControlStyles(): void {
  if (document.getElementById('mw-settings-css')) return;
  const st = document.createElement('style');
  st.id = 'mw-settings-css';
  st.textContent = `
    #settings input[type=range]{-webkit-appearance:none;appearance:none;height:20px;background:transparent;cursor:pointer;}
    #settings input[type=range]::-webkit-slider-runnable-track{height:12px;border:2px solid #5a7390;border-radius:0;box-sizing:border-box;
      background:linear-gradient(to right,#6ab0ff 0,#6ab0ff var(--fill,70%),#16212e var(--fill,70%));}
    #settings input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:10px;height:20px;margin-top:-6px;
      background:#dce8f2;border:2px solid #2a3b4d;border-radius:0;box-sizing:border-box;}
    #settings input[type=range]::-moz-range-track{height:12px;border:2px solid #5a7390;border-radius:0;box-sizing:border-box;background:#16212e;}
    #settings input[type=range]::-moz-range-progress{height:12px;background:#6ab0ff;}
    #settings input[type=range]::-moz-range-thumb{width:10px;height:20px;background:#dce8f2;border:2px solid #2a3b4d;border-radius:0;box-sizing:border-box;}
    #settings input[type=checkbox]{-webkit-appearance:none;appearance:none;width:22px;height:22px;box-sizing:border-box;margin:0;
      background:#16212e;border:2px solid #5a7390;border-radius:0;cursor:pointer;position:relative;}
    #settings input[type=checkbox]:checked{background:#6ab0ff;}
    #settings input[type=checkbox]:checked::after{content:'';position:absolute;inset:4px;background:#0e1a28;}`;
  document.head.appendChild(st);
}

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
    ensureControlStyles(); // 注入像素风拉杆/复选框样式
    // 占满全屏的设置页（不再是小浮窗）：不透明深底铺满，控件居中成列。
    root.style.cssText =
      'position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;';
    root.innerHTML = `
      <div class="settings-card" style="width:min(560px,90vw);color:#dce8f2;font-family:'Zpix',monospace;display:flex;flex-direction:column;gap:24px;">
        <h2 class="screen-title" style="margin:0 0 4px;text-align:center;">设置</h2>
        <label style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">音量</span>
          <input id="set-vol" type="range" min="0" max="100" style="flex:1;" />
          <span id="set-vol-val" style="width:46px;text-align:right;"></span>
        </label>
        <div style="font-size:12px;color:#8aa;margin-top:-10px;margin-left:120px;">音效尚未开发，先存着</div>
        <label style="display:flex;align-items:center;gap:12px;cursor:pointer;">
          <span style="width:108px;">光影</span>
          <input id="set-shaders" type="checkbox" />
          <span style="color:#8aa;font-size:12px;">真实云 / 真实水面（即将接入）</span>
        </label>
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">材质</span>
          <button id="set-tex-cartoon" class="btn" type="button">卡通</button>
          <button id="set-tex-classic" class="btn" type="button">经典</button>
        </div>
        <label style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">渲染距离</span>
          <input id="set-rd" type="range" min="3" max="12" style="flex:1;" />
          <span id="set-rd-val" style="width:46px;text-align:right;"></span>
        </label>
        <div style="font-size:12px;color:#8aa;margin-top:-10px;margin-left:120px;">小=白雾更近、更流畅；大=看得远、更吃性能</div>
        <button id="set-close" class="btn btn-wide" type="button" style="margin-top:6px;">返回</button>
      </div>`;

    const vol = root.querySelector('#set-vol') as HTMLInputElement;
    const volVal = root.querySelector('#set-vol-val') as HTMLElement;
    const shaders = root.querySelector('#set-shaders') as HTMLInputElement;
    const texCartoon = root.querySelector('#set-tex-cartoon') as HTMLButtonElement;
    const texClassic = root.querySelector('#set-tex-classic') as HTMLButtonElement;

    const syncTexButtons = (): void => {
      texCartoon.classList.toggle('active', this.settings.texturePack === 'cartoon');
      texClassic.classList.toggle('active', this.settings.texturePack === 'classic');
      texCartoon.style.outline = this.settings.texturePack === 'cartoon' ? '2px solid #6ab0ff' : 'none';
      texClassic.style.outline = this.settings.texturePack === 'classic' ? '2px solid #6ab0ff' : 'none';
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
    shaders.addEventListener('change', () => {
      this.settings = { ...this.settings, shaders: shaders.checked };
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
    shaders.checked = this.settings.shaders;
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
