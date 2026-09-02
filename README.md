# Sleep Research Atlas 1.0

一个无构建依赖的静态网站，用六大研究板块组织睡眠知识、当前判断、经典书目和待研究问题。

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

GitHub Pages 推荐仓库名：`sleep-research-atlas`。上传根目录文件后，在仓库的 **Settings → Pages** 中选择 **Deploy from a branch → main → /(root)**。

公开版不包含 Notion URL、Notion API 或任何读取 Notion 的代码。书籍内容采用原创摘要，并链接到出版社公开书目页。
