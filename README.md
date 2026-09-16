# 牛景萱 · 学术与产业个人主页

原生 HTML、CSS、JavaScript 单页网站，无构建和运行时依赖，可直接本地预览或部署到 GitHub Pages。内容以 `jingxuan_resume_0915.pdf` 为依据整理，下载版本位于 `documents/resume.pdf`。

页面包含个人介绍、7 项研究成果、4 段产业经历、教育与研究历程、助教与交流经历、技能、荣誉及联系方式。采用清华紫主题：深紫导航、紫白底色、宋体中文标题、校徽与院系信息、少量金色点缀，适配桌面、平板和手机。

支持研究方向筛选、技术详情展开、章节导航高亮、移动端菜单、键盘操作和减少动态效果偏好。关闭 JavaScript 时仍可阅读全部正文、展开详情、访问论文和下载简历；打印时会展示所有论文及技术详情。

## 项目结构

```text
portfolio-site/
├── index.html              # 页面内容
├── styles.css              # 视觉与响应式样式
├── script.js               # 菜单、筛选、章节定位与打印
├── assets/portrait.jpg     # 个人肖像
└── documents/resume.pdf    # 下载版简历
```

## 本地预览

最简单的方式是直接双击 `index.html`。如需更接近线上环境，可在项目目录运行：

```bash
cd /Users/bytedance/Downloads/portfolio-site
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
cd /Users/bytedance/Downloads/portfolio-site
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
- 主题主色：`--accent: #660099`；深紫：`--accent-dark: #48006b`；辅助金色：`--gold: #ddc496`。中文标题使用系统宋体字体栈，无需外部字体请求。
- 更换照片：用新图片替换 `assets/portrait.jpg`，建议使用正方形或 4:5 高清图。
- 更换简历：用新 PDF 替换 `documents/resume.pdf`，保持文件名不变。
- 增加论文链接：在 `index.html` 的研究成果区域，将对应标题或 `↗` 包在带真实地址的 `<a href="...">` 中。

## 内容维护

- 新增研究卡片时，为 `.paper-card` 设置 `data-category="multimodal"` 或 `data-category="generation"`，并同步筛选按钮内的数量。
- 实习数据仅使用简历中的结果；没有明确的最终数字时不推算、不补写。教学、研究和实习的时间分别保留。
- ICLR 2025、MICCAI 2023 为简历明确标注的发表信息；其他研究不推定录用状态或作者顺序。
- MDSL、OmniPace 的公开论文 / 代码链接，以及各论文作者顺序和个人贡献，可在确认后补充。
- 求职意向（目标岗位、毕业后可入职时间、目标城市）目前未写入页面，待本人提供。

## 隐私检查

发布前请检查页面和 PDF 中的邮箱、电话及其他个人信息。GitHub Pages 是公开网站，不建议上传住址、证件号码、账号凭证或任何未公开的内部资料。
