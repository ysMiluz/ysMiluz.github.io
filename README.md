# 个人简历网页

这是一个可以直接发布到 GitHub Pages 的静态简历网页。页面文件放在仓库根目录，入口文件是 `index.html`。

## 本地预览

直接用浏览器打开 `index.html` 即可预览。

页面支持中英文切换，也可以用查询参数直接打开指定语言：

```text
index.html?lang=zh
index.html?lang=en
```

## 修改内容

主要修改 `profile.js` 中 `resumeContent.zh` 和 `resumeContent.en` 两组数据：

- `name`：姓名
- `role`：职业方向
- `email` 和 `links`：联系方式
- `about`：个人简介
- `experience`：经历
- `projects`：项目
- `skills`：技能
- `education`：教育与证书

如需替换头像或插图，把新图片放到 `assets/profile-visual.png`，保持文件名不变即可。

## 发布到 GitHub Pages

用户主页仓库需要命名为：

```text
你的GitHub用户名.github.io
```

例如用户名是 `yourname`，仓库名就是 `yourname.github.io`，发布后的地址是：

```text
https://yourname.github.io
```

首次推送可以在本目录运行：

```powershell
git init -b main
git add .
git commit -m "Initial resume site"
git remote add origin https://github.com/yourname/yourname.github.io.git
git push -u origin main
```

把命令里的 `yourname` 替换成你的 GitHub 用户名。推送后进入 GitHub 仓库的 `Settings -> Pages`，选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/root`，保存即可。
