# Mineworld

浏览器中的 Minecraft 风格体素沙盒。当前还原目标为 **Minecraft Java 26.3 正式版**（2026-10-30 核对），不采用 26.4 快照。这是独立网页实现，不是原版 Java 客户端或其完整移植。

## 本轮已接入

- 官方客户端与资源索引中的方块、工具、食物、Steve 皮肤、水动画、HUD、容器、标题、全景和环境贴图。
- 原版字体字形、整数 GUI 比例、182×22 快捷栏、176×166 容器、Steve 背包角色预览及透明状态图层。
- 八种已适配生物的原版皮肤及对应尺寸、朝向和 UV：猪、牛、羊、鸡、僵尸、尸壳、骷髅、苦力怕。
- 官方持物 display 参数、像素外缘厚度、换物品下放/抬起，以及空手右臂皮肤。
- 攻击冷却与弱攻击、饱和回血、逐刻回气、现代潜行、方块光 0 刷怪门槛和树叶支撑距离 6。

现有世界的种子、方块 ID 和存档格式保持兼容。第一次加载新版会将旧画面预设切到原版材质与基础光照，之后保留手动选择。

## 明确尚未完成

并非所有画面和机制已逐帧一致。世界仍是旧生成器和 0…191 的高度范围，尚未迁移到现代 -64…319。尚缺完整方块/物品库、现代全部群系与结构、红石、装备/副手、附魔、经验、配方书、完整游泳/爬行、末地和原版服务器协议。没有伪造可用的装备或经验数值。

物品立方体图标由原版面纹理投影，部分方块仍使用简化几何；草叶暂用代表性着色。蜘蛛与兔子仍是旧替代模型。生物动作、天空光照、日月轨迹和视角中的精确手臂位置还需要与原版对照。月亮使用原版满月图，尚无八天月相状态。

## 开发与验证

```sh
npm ci
npm run dev
npm run typecheck
npm test
npm run build
npm run preview
```

生产路径 `/mineworld/`。GitHub Actions 的 `Deploy to GitHub Pages` 工作流负责发布。

素材来源与哈希在 `public/textures/java-resource-provenance.json`、`public/textures/ui/java/provenance.json`、`public/textures/environment/provenance.json` 和 `public/textures/mobs/SOURCES.json`。Minecraft 美术资源归 Mojang AB / Microsoft；不会将它们标为 Mineworld 原创。资源适配脚本在 `tools/textures/`，不会将完整客户端或游戏执行代码打包发布。

规则与动作核对细节见 `docs/survival-audit.md`、`docs/first-person-26.3-audit.md`。
