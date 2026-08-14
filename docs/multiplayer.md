# MINEWORLD 联机服务

网页本身发布在 GitHub Pages；多人房间需要单独运行一个 WebSocket 服务。仓库已经提供好 [render.yaml](../render.yaml)，用 Render 部署即可。

## 部署一次即可

1. 登录 Render，选择 **New + → Blueprint**。
2. 选择 `Nornttyy/mineworld` 的 `main` 分支，Blueprint Path 保持为 `render.yaml`，然后点 **Apply**。
3. 等待 `mineworld-multiplayer-nornttyy` 变成 **Live**。

服务地址应为：

`https://mineworld-multiplayer-nornttyy.onrender.com`

网页会自动连接 `wss://mineworld-multiplayer-nornttyy.onrender.com/ws`。如果你在 Render 改了服务名称，请同步修改前端的 `VITE_MULTIPLAYER_URL`。

## 当前多人版本

- 可创建公开房间或使用房间码加入。
- 同一房间的玩家会互相看见，并同步移动、视角和方块改动。
- 世界种子由服务器生成，房间内保持一致。

背包、掉落物、生物、熔炉、流体和战斗目前仍是各客户端本地运行；这些会在后续的完整生存联机版本中再由服务器统一同步。
