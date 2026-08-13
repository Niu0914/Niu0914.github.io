# 个人求职作品集

一份无需构建工具的单页静态网站，可直接本地预览或部署到 GitHub Pages。

## 项目结构

```text
portfolio/
├── index.html              # 页面内容
├── styles.css              # 视觉与响应式样式
├── script.js               # 菜单、滚动动效
├── assets/portrait.jpg     # 个人肖像
└── documents/resume.pdf    # 下载版简历
```

## 本地预览

最简单的方式是直接双击 `index.html`。如需更接近线上环境，可在项目目录运行：

```bash
cd portfolio
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。预览结束后在终端按 `Ctrl+C` 停止。

## 首次部署到 GitHub Pages

### 1. 创建仓库

登录 GitHub，新建一个 **Public** 仓库，名称必须是：

```text
<username>.github.io
```

将 `<username>` 替换为你的 GitHub 用户名。创建时不要勾选自动生成 README、`.gitignore` 或 License。

### 2. 初始化并首次推送

在本项目目录执行以下命令：

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

如果 GitHub 要求登录，请使用浏览器授权、GitHub CLI，或使用 Personal Access Token；不要在命令或代码中写入密码。

### 3. 开启 Pages

通常用户主页仓库会自动发布。若未生效：

1. 打开仓库 **Settings → Pages**。
2. 在 **Build and deployment** 中选择 **Deploy from a branch**。
3. Branch 选择 `main`，目录选择 `/ (root)`，点击 **Save**。
4. 等待 1–5 分钟，访问 `https://<username>.github.io/`。

## 后续更新

修改文件后执行：

```bash
git add .
git commit -m "Update portfolio content"
git push
```

## 修改内容

- 文字内容：编辑 `index.html`。
- 配色、字体、间距：编辑 `styles.css` 顶部的 `:root` 变量。
- 更换照片：用新图片替换 `assets/portrait.jpg`，建议使用正方形或 4:5 高清图。
- 更换简历：用新 PDF 替换 `documents/resume.pdf`，保持文件名不变。
- 增加论文链接：在 `index.html` 的研究成果区域，将对应标题或 `↗` 包在带真实地址的 `<a href="...">` 中。

## 隐私检查

发布前请检查页面和 PDF 中的邮箱、电话及其他个人信息。GitHub Pages 是公开网站，不建议上传住址、证件号码、账号凭证或任何未公开的内部资料。
