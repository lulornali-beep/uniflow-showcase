# 🚀 部署步骤（跟着做）

## 第一步：使用 GitHub Desktop 上传项目

### 1. 打开 GitHub Desktop
- 如果还没登录，先用 GitHub 账号登录

### 2. 添加项目到 GitHub Desktop
1. 点击左上角 **"File"** → **"Add Local Repository"**
2. 点击 **"Choose..."** 按钮
3. 找到并选择这个文件夹：
   ```
   admin-console
   ```
4. 点击 **"Add Repository"**

### 3. 如果提示 "not a Git repository"
1. 点击 **"create a repository"** 或 **"Initialize Git Repository"**
2. 填写信息：
   - **Name**: `uniflow-showcase`
   - **Description**: `校园信息聚合平台 - UniFlow`
   - **Local Path**: 保持默认
   - ⚠️ **取消勾选** "Keep this code private"（如果想公开）
3. 点击 **"Create Repository"**

### 4. 发布到 GitHub
1. 点击右上角的 **"Publish repository"** 按钮
2. 确认信息：
   - **Name**: `uniflow-showcase`
   - **Description**: `校园信息聚合平台`
   - **Keep this code private**: 根据需要选择
3. 点击 **"Publish Repository"**
4. 等待上传完成（可能需要 1-3 分钟）

### 5. 确认上传成功
- 看到 "Published successfully" 提示
- 或者访问 `https://github.com/你的用户名/uniflow-showcase` 查看

---

## 第二步：部署到 Vercel

### 1. 访问 Vercel
打开浏览器，访问：https://vercel.com

### 2. 登录 Vercel
1. 点击右上角 **"Sign Up"** 或 **"Login"**
2. 选择 **"Continue with GitHub"**
3. 用你的 GitHub 账号登录
4. 如果是第一次，需要授权 Vercel 访问你的 GitHub

### 3. 导入项目
1. 登录后，点击 **"Add New..."** → **"Project"**
2. 在列表中找到 **"uniflow-showcase"**
3. 点击右侧的 **"Import"** 按钮

### 4. 配置项目
1. **Framework Preset**: 自动检测为 `Next.js`（不用改）
2. **Root Directory**: 保持默认 `./`（不用改）
3. **Build Command**: 自动填充 `npm run build`（不用改）
4. **Output Directory**: 自动填充 `.next`（不用改）

### 5. 配置环境变量（重要！）
1. 点击 **"Environment Variables"** 展开
2. 添加以下 3 个变量（一个一个添加）：

#### 变量 1：
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://civlywqsdzzrvsutlrxx.supabase.co
```

#### 变量 2：
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpdmx5d3FzZHp6cnZzdXRscnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NTkzODUsImV4cCI6MjA4MDMzNTM4NX0.vHueW-6OoZg1srGLzMvRGS1Cwy1bpyX-isVtJ_z6SbQ
```

#### 变量 3：
```
Name: DEEPSEEK_API_KEY
Value: sk-2ccdda335fc4425b8723968b4a536959
```

⚠️ **注意**：每个变量添加后点击 "Add" 按钮

### 6. 开始部署
1. 确认所有配置正确
2. 点击底部的 **"Deploy"** 按钮
3. 等待部署完成（2-5 分钟）

### 7. 部署过程
你会看到：
- Building... （构建中）
- 显示构建日志
- 如果有错误会显示红色

### 8. 部署成功！
看到 **"🎉 Congratulations!"** 就成功了！

---

## 第三步：获取访问链接

### 1. 复制链接
部署成功后会显示你的网站链接，格式如：
```
https://uniflow-showcase.vercel.app
或
https://uniflow-showcase-xxx.vercel.app
```

### 2. 访问测试
1. 点击 **"Visit"** 按钮或复制链接
2. 在浏览器中打开
3. 应该能看到你的网站！

### 3. 两个访问地址
- **公开展示**：`https://your-project.vercel.app`
- **管理后台**：`https://your-project.vercel.app/login`

---

## 第四步：配置 Supabase CORS（重要！）

### 为什么需要这一步？
让你的 Vercel 网站能够访问 Supabase 数据库

### 操作步骤
1. 访问：https://supabase.com
2. 登录你的账号
3. 选择项目：`civlywqsdzzrvsutlrxx`
4. 点击左侧 **"Settings"** → **"API"**
5. 找到 **"CORS"** 部分
6. 在 "Allowed origins" 中添加你的 Vercel 域名：
   ```
   https://uniflow-showcase.vercel.app
   ```
   （替换成你实际的域名）
7. 点击 **"Save"** 保存

---

## 🎉 完成！

现在你可以：
1. ✅ 把链接分享给任何人
2. ✅ 放在简历或作品集中
3. ✅ 24/7 在线访问
4. ✅ 不需要你的电脑开机

---

## 🔄 如何更新网站

### 方法一：使用 GitHub Desktop（推荐）
1. 修改代码
2. 打开 GitHub Desktop
3. 左下角填写更新说明（如 "更新了界面"）
4. 点击 **"Commit to main"**
5. 点击 **"Push origin"**
6. Vercel 会自动检测并重新部署（2-3 分钟）

### 方法二：在 Vercel 手动重新部署
1. 登录 Vercel
2. 进入项目
3. 点击 **"Deployments"**
4. 点击 **"Redeploy"**

---

## ❓ 常见问题

### Q: 部署失败怎么办？
A: 查看 Vercel 的构建日志，通常会显示具体错误。常见原因：
- 环境变量配置错误
- 代码有语法错误
- 依赖安装失败

### Q: 网站打开是空白页？
A: 检查：
1. 浏览器控制台是否有错误
2. Vercel 环境变量是否配置正确
3. Supabase CORS 是否配置

### Q: 显示 "Failed to fetch"？
A: 需要在 Supabase 中配置 CORS，添加你的 Vercel 域名

### Q: 如何绑定自己的域名？
A: 在 Vercel 项目设置中点击 "Domains"，按提示操作

---

## 📞 需要帮助？

如果遇到问题：
1. 截图错误信息
2. 告诉我在哪一步卡住了
3. 我会帮你解决

祝你部署顺利！🚀
