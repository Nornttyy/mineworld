# 第一人称动作核对：Java 26.3

目标为用户指定的正式 Java **26.3**，不采用 26.4 快照。核对日期 2026-10-30。本轮直接读取正式客户端资源与具名 class 方法指令，已不再用历史 1.12 源码证明最新版动作。

## 来源与核对范围

[Mojang 版本索引](https://piston-meta.mojang.com/mc/game/version_manifest_v2.json) 与 [26.3 元数据](https://piston-meta.mojang.com/v1/packages/5df1795e16eea19d75b923d66ecca9ce183353c5/26.3.json) 给出的正式客户端 SHA-1 为 `e877b6a07acd633fb3bb475002175cec036e7b87`，本地文件再次核对一致。`first-person-26.3-evidence.json` 记录已核对 class/资源的 SHA-256 和方法名。临时 class 指令输出不随游戏发布；项目独立编写 Three.js 矩阵与几何实现。

| 官方方法/资源 | 核实内容 |
|---|---|
| `FirstPersonHandsAndItemsRenderer.applyItemArmTransform` | 持物锚点 `[0.56,-0.52,-0.72]`，下放量 `-0.6 × unequipped` |
| 同类 `swingArm` / `applyItemArmAttackTransform` | 持物平移 `-0.4sin(√tπ), 0.2sin(2√tπ), -0.2sin(tπ)`，Y→Z→X→Y 旋转，主劈砍最大 80° |
| 同类 `renderPlayerArm` | 空手独立平移系数 `-0.3,0.4,-0.4` 和 70° 扫臂，不复用持物劈砍；完整固定变换链 |
| `AvatarRenderer.renderHand`、`HumanoidModel.createMesh` | 宽右臂 pivot `[-5,2,0]/16`，局部 `zRot=0.1` 弧度；4×12×4 模型及纹理坐标 |
| `applyEatTransform`、`ItemUseAnimation` | 剩余时间比的 27 次方靠近，剩余低于 80% 后 `abs(cos(remaining/4×π)×0.1)` 啃咬；吃东西旋转先于持物锚点 |
| `submitArmWithItem` 的 BOW 分支 | 固定角度 `[-13.935°,35.3°,-9.785°]`；`min(1,(t²+2t)/3)` 拉力；Z 向推进 0.04、伸展 0.2；拉力超过 0.1 即有小幅张力运动 |
| `assets/minecraft/items/bow.json` | `use_duration` 比例 0.05，换帧阈值 **0.65 / 0.9**，不是旧实现的 0.34 / 0.68 |
| `FirstPersonHandsAndItems.tick`、`Player.getItemSwapScale` | 每刻最多改变 0.4，低于 0.1 才换可见物品；同物品恢复目标为 swap scale 的三次方 |
| `Player.tick` / `onAttack` | 26.3 分开保存 `itemSwapTicker` 和 `attackStrengthTicker`；普通攻击只重置后者，不能让每次挥击都重新下放 |
| `SwingAnimation.DEFAULT` | 默认 WHACK 为 6 刻，即 0.3 秒；不是凭旧版经验保留该数值 |
| `LocalPlayer.move`、`AbstractClientPlayer.updateBob`、`ClientAvatarState.updateBob` | 步行距离增量为实际水平位移 ×0.6；贴地非游泳时 bob 目标 `min(0.1,水平格/刻)`，每刻向目标靠近 0.4 |
| `GameRenderer.bobView` / `LocalPlayer.applyInput` / `submitHandsWithItems` | 行走位移及 Z→X 旋转；转向平滑每刻 0.5，手部追加当前视角与平滑值差的 0.1 |
| `GameRenderer.bobHurt`、`LivingEntity.animateHurt` | 默认受击 10 刻，方向旋转后的单次 `-14° sin(remainingRatio⁴ π)` 倾斜，不是高频随机抖动 |

## 资源显示变换与皮肤

直接读取 `assets/minecraft/models/` 下的 `display.firstperson_righthand`：

| 模型 | rotation（度） | translation（模型像素） | scale |
|---|---|---|---|
| `item/generated.json` / `item/handheld.json` / `item/bow.json` | `[0,-90,25]` | `[1.13,3.2,1.13]` | `[0.68,0.68,0.68]` |
| `block/block.json` | `[0,45,0]` | `[0,0,0]` | `[0.4,0.4,0.4]` |

物品几何中心在原点，平移按 `/16` 换算。显示变换是手部根变换的子层；不再额外套旧空手斜姿。`heldItemGeometry.ts` 保留原版图标透明轮廓、正反面和暴露像素侧壁（包含孔洞），完整图标厚度为宽度的 1/16。异步加载只更新仍在显示的对应物品。

`public/textures/player/steve.png` 与官方 `assets/minecraft/textures/entity/player/wide/steve.png` 字节相同，64×64，SHA-256 `06628f9cef88520da742ab280a01677ce17c99717f964ed89ed791673121094c`。右臂 UV 原点 `(40,16)`、外袖 `(40,32)`，外袖每侧扩张 0.25 模型像素。本轮把侧面 UV 和完整右臂姿态一起从 Java Y-down/Z-back 坐标转换；移除此前仅为翻正肩腕的临时 180° 斜姿。相机射线确认画面前端可见的是肤色腕侧，肩袖退到画面右下方。纹理版权与来源保留在项目资源声明中。

## 实际接入

- `firstPersonMotion.ts` 集中实现已核实的持物、空手、进食、拉弓、行走、转向与受击变换。
- `FirstPersonHand` 根据当前动作选择独立分支：使用食物或拉弓时不再叠加普通攻击。弓的非均匀缩放与后续旋转保留完整矩阵，避免分解重组 TRS 丢失剪切。
- `setEating(active, elapsedSeconds?, durationSeconds=1.6)` 接受游戏真实进度，连续吃下一份时可以归零，不再无限延续旧抖动计时。
- `setMotionState({x,z,horizontalSpeed,onGround,swimming?,viewYaw,viewPitch})` 接受已插值位置、格/秒速度和弧度视角；本项目 `look.pitch` 向上为正，接入时取负号。`Game` 负责实际状态与暂停判断。
- 装备恢复按物品攻速推进独立换物计时；快速滚轮以最新选择为准，普通挥击不重置它。当前 API 只识别物品 ID，未覆盖同 ID 不同组件的原版替换策略。
- `hurtShake(direction=0,durationSeconds=0.5)` 使用核实的受击曲线；现有无参调用使用默认方向。

## 验证与边界

`npm test -- src/render/firstPersonHand.test.ts src/render/firstPersonMotion.test.ts`：**33 项通过**。包含完整空手矩阵检查点、可见肤色区域射线、实际持物四元数、弓阈值/拉力/伸展矩阵与松手复位、进食与攻击互斥、连续进食重启、按武器攻速恢复、步行/转向每刻系数及 30/60/120 FPS 一致性、像素侧壁和异步纹理保护。

**这不是整个第一人称系统已一比一完成。** 原版逻辑按 20 Hz 状态和 partial tick 插值，当前手部桥接层按渲染时间执行：bob 用分数刻指数平滑，步行相位采用已插值位置，装备上下放按渲染时间限速。它们在整刻常量上吻合，但没有声称复现原版 `getBackwardsInterpolatedWalkDistance` 的外推时序。持续挖掘/挥击事件仍沿现有游戏调用方式，未完整移植 `SwingState.startIfAble` 重启规则、急迫/挖掘疲劳和特殊 STAB 动作。

未覆盖左手/双持、地图、盾牌、弩、三叉戟、望远镜、刷子、矛、奔游、爬行、鞘翅、死亡倾斜或全部状态优先级。受击目前只作用手部覆盖层，尚未把方向和同一矩阵同步到世界相机；转向/步行输入是否完整以 `Game` 接线为准。模型灯光和相机 FOV 状态也尚未逐帧比对原版。

本子任务没有控制浏览器、没有 build 或部署；最终视觉验收需要相同 FOV、纹理包、动作阶段的正式 26.3 实机对照。类型检查结果随并行任务收尾单独报告，不能把其他模块仍在编辑时的错误当成动作通过凭据。

## 个人背包角色预览

此前接入的 `ui/PlayerPreview.ts` 使用同一张官方 Steve 皮肤，宽臂模型包含六个基础部位和六个外层；尺寸及各自 UV 已与 `HumanoidModel` / `PlayerModel` 核对。51×72 逻辑像素随背包 GUI 比例显示，鼠标可轻转身与头。首次打开才分配 WebGL context，关闭停止事件与绘制，重复打开复用；`disposePlayerPreview()` 释放资源。预览光照、相机和鼠标角度仍是本项目适配，后续护甲接入由装备模块单独审计。

## 世界渲染边界

默认设置已为 `lightingQuality: 'off'`，建立原版风格基线。可选光影档仍包含项目自制 Bloom、SSAO、God rays、体积云和水面反射/折射；使用原版材质不等于这些算法与原版一致。关闭光影后的天空色、距离雾、世界与手部亮度关系仍需要同时间、同视角对照。
