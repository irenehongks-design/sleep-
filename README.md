# Sleep Research Atlas 2.0

一个无构建依赖的睡眠产品决策网站。2.0 从“知识地图”重构为以下顺序：

1. 明确的 1.0 产品方案与软件 / 硬件边界
2. 从用户问题到上市声明的八步转化路径
3. 带研究人群、效应量、局限性与原始链接的权威证据库
4. 已有解法、待产品化方法、原创假设三类研究组合
5. 区分科学问题、产品问题与战略假设的探索问题库
6. 作为背景阅读而非效果证据的经典书目

## 本地预览

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问 <http://127.0.0.1:4173/>。

## 文件

- `index.html`：网站结构
- `styles.css`：响应式视觉样式
- `app.js`：研究内容、筛选与问题详情交互

## 部署

网站为纯静态文件，可部署到 GitHub Pages、Cloudflare Pages、Netlify 或 Vercel。

上传根目录文件后，在仓库的 **Settings → Pages** 中选择 **Deploy from a branch → main → /(root)**。

公开版不包含 Notion URL、Notion API 或任何读取 Notion 的代码。书籍内容采用原创摘要，并链接到出版社公开书目页。
