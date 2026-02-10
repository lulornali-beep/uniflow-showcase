# 🚀 超简单部署教程（5分钟完成）

## 📱 最终效果
完成后，你会得到一个网址，如：`https://uniflow-showcase.vercel.app`
任何人都可以通过这个网址访问你的项目！

---

## 🎯 方法一：使用 GitHub Desktop（最简单，推荐新手）

### 第 1 步：下载 GitHub Desktop
1. 访问：https://desktop.github.com
2. 下载并安装
3. 打开后用 GitHub 账号登录（没有账号就注册一个）

### 第 2 步：上传项目到 GitHub
1. 打开 GitHub Desktop
2. 点击左上角 "File" → "Add Local Repository"
3. 点击 "Choose..." 按钮
4. 选择这个文件夹：`admin-console`
5. 如果提示 "not a Git repository"，点击 "create a repository"
6. 填写信息：
   - Name: `uniflow-showcase`
   - Description: `校园信息聚合平台`
   - 取消勾选 "Keep this code private"（如果想公开）
7. 点击 "Create Repository"
8. 点击右上角 "Publish repository"
9. 确认信息后点击 "Publish repository"
10. 等待上传完成（可能需要几分钟）

### 第 3 步：部署到 Vercel
1. 访问：https://vercel.com
2. 点击 "Sign Up" 或 "Login"
3. 选择 "Continue with GitHub"（用 GitHub 账号登录）
4. 授权 Vercel 访问你的 GitHub
5. 点击 "Add New..." → "Project"
6. 找到 `uniflow-showcase` 仓库，点击 "Import"
7. **重要！配置环境变量**：
   - 点击 "Environment Variables"
   - 添加以下 3 个变量（一个一个添加）：

   ```
   变量名: NEXT_PUBLIC_SUPABASE_URL
   值: https://civlywqsdzzrvsutlrxx.supabase.co
   
   变量名: NEXT_PUBLIC_SUPABASE_ANON_KEY
   值: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpdmx5d3FzZHp6cnZzdXRscnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NTkzODUsImV4cCI6MjA4MDMzNTM4NX0.vHueW-6OoZg1srGLzMvRGS1Cwy1bpyX-isVtJ_z6SbQ
   
   变量名: DEEPSEEK_API_KEY
   值: sk-2ccdda335fc4425b8723968b4a536959
   ```

8. 点击 "Deploy"
9. 等待 2-3 分钟（会显示构建进度）
10. 看到 "🎉 Congratulations!" 就成功了！

### 第 4 步：获取访问链接
1. 部署成功后，会显示你的网站链接
2. 点击 "Visit" 或复制链接
3. 链接格式：`https://uniflow-showcase.vercel.app`
4. 分享这个链接给任何人！

---

## 🎯 方法二：使用命令行（适合有经验的用户）

### 第 1 步：初始化 Git
```bash
cd admin-console
./deploy-setup.sh
```

### 第 2 步：创建 GitHub 仓库
1. 访问：https://github.com/new
2. 仓库名：`uniflow-showcase`
3. 不要勾选任何初始化选项
4. 点击 "Create repository"

### 第 3 步：推送代码
```bash
git remote add origin https://github.com/你的用户名/uniflow-showcase.git
git branch -M main
git push -u origin main
```

### 第 4 步：部署到 Vercel
按照方法一的第 3 步操作。

---

## 🔧 部署后的配置

### 配置 Supabase CORS（重要！）
1. 登录 Supabase：https://supabase.com
2. 选择你的项目
3. 点击左侧 "Settings" → "API"
4. 找到 "CORS" 部分
5. 添加你的 Vercel 域名：
   ```
   https://uniflow-showcase.vercel.app
   ```
6. 保存

---

## 📱 访问你的网站

### 公开展示页面（给别人看）
```
https://your-project.vercel.app
```
- 任何人都可以访问
- 无需登录
- 只能查看信息

### 管理后台（自己用）
```
https://your-project.vercel.app/login
```
- 需要 Supabase 账号密码登录
- 可以管理所有数据

---

## 🔄 如何更新网站

### 使用 GitHub Desktop
1. 修改代码
2. 打开 GitHub Desktop
3. 左下角填写更新说明
4. 点击 "Commit to main"
5. 点击 "Push origin"
6. Vercel 会自动检测并重新部署（2-3分钟）

### 使用命令行
```bash
cd admin-console
git add .
git commit -m "更新说明"
git push
```

---

## ❓ 常见问题

### Q: 部署后页面空白？
A: 检查是否配置了环境变量，特别是 Supabase 的 URL 和 Key。

### Q: 显示 "Failed to fetch"？
A: 需要在 Supabase 中配置 CORS，添加你的 Vercel 域名。

### Q: 如何修改网站内容？
A: 修改代码后，推送到 GitHub，Vercel 会自动更新。

### Q: 部署要花钱吗？
A: Vercel 免费版足够使用，除非访问量特别大。

### Q: 如何绑定自己的域名？
A: 在 Vercel 项目设置中点击 "Domains"，按提示操作。

---

## 🎉 完成！

现在你可以：
1. 把链接分享给朋友、老师、同学
2. 放在简历或作品集中
3. 在社交媒体上展示

你的项目已经在互联网上了！🚀

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 Vercel 的构建日志
2. 检查环境变量是否正确
3. 确认 Supabase CORS 已配置
4. 联系我获取帮助

祝你部署顺利！✨
