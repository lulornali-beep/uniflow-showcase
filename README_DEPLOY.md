# 🚀 Vercel 部署指南

## 📋 部署前准备

### 1. 注册 Vercel 账号
访问：https://vercel.com
- 可以用 GitHub、GitLab 或 Email 注册
- 推荐使用 GitHub 注册（方便后续操作）

### 2. 安装 Git（如果还没有）
- macOS: 已自带 Git
- 检查是否安装：在终端运行 `git --version`

### 3. 创建 GitHub 仓库（推荐方式）

#### 方式一：使用 GitHub Desktop（最简单）
1. 下载安装 GitHub Desktop：https://desktop.github.com
2. 登录 GitHub 账号
3. 点击 "Add" → "Add Existing Repository"
4. 选择项目文件夹：`admin-console`
5. 点击 "Publish repository"
6. 设置仓库名称，如：`uniflow-showcase`
7. 取消勾选 "Keep this code private"（如果想公开）
8. 点击 "Publish repository"

#### 方式二：使用命令行
```bash
# 进入项目目录
cd admin-console

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 在 GitHub 上创建新仓库后，连接远程仓库
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送代码
git push -u origin main
```

## 🌐 部署到 Vercel

### 方法一：通过 Vercel 网站部署（推荐）

1. **登录 Vercel**
   - 访问：https://vercel.com
   - 点击 "Login" 并用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择你的 GitHub 仓库（uniflow-showcase）
   - 点击 "Import"

3. **配置项目**
   - **Framework Preset**: 自动检测为 Next.js
   - **Root Directory**: 保持默认（如果整个仓库就是 admin-console）
   - **Build Command**: `npm run build`（自动填充）
   - **Output Directory**: `.next`（自动填充）

4. **配置环境变量**（重要！）
   点击 "Environment Variables"，添加以下变量：
   
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://civlywqsdzzrvsutlrxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpdmx5d3FzZHp6cnZzdXRscnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NTkzODUsImV4cCI6MjA4MDMzNTM4NX0.vHueW-6OoZg1srGLzMvRGS1Cwy1bpyX-isVtJ_z6SbQ
   DEEPSEEK_API_KEY=sk-2ccdda335fc4425b8723968b4a536959
   ```

5. **开始部署**
   - 点击 "Deploy"
   - 等待 2-3 分钟
   - 部署成功！🎉

6. **获取访问链接**
   - 部署完成后会显示链接，如：`https://uniflow-showcase.vercel.app`
   - 这就是你的公开访问地址！

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 进入项目目录
cd admin-console

# 登录 Vercel
vercel login

# 部署
vercel

# 按提示操作：
# - Set up and deploy? Yes
# - Which scope? 选择你的账号
# - Link to existing project? No
# - What's your project's name? uniflow-showcase
# - In which directory is your code located? ./
# - Want to override the settings? No

# 部署到生产环境
vercel --prod
```

## 🔧 部署后配置

### 1. 配置自定义域名（可选）
1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的域名
3. 按提示配置 DNS

### 2. 配置 Supabase CORS
为了让线上版本能访问 Supabase，需要配置 CORS：

1. 登录 Supabase 控制台
2. 进入项目设置 → API
3. 在 "CORS" 部分添加你的 Vercel 域名：
   ```
   https://uniflow-showcase.vercel.app
   ```

## 📱 访问方式

部署成功后，你会得到两个访问地址：

### 公开展示页面
```
https://your-project.vercel.app
或
https://your-project.vercel.app/showcase
```
- 任何人都可以访问
- 无需登录
- 只能查看

### 管理后台
```
https://your-project.vercel.app/login
```
- 需要登录
- 完整管理权限

## 🔄 更新部署

### 方式一：通过 GitHub（自动部署）
1. 修改代码
2. 提交到 GitHub
3. Vercel 自动检测并重新部署

### 方式二：使用 Vercel CLI
```bash
cd admin-console
vercel --prod
```

## ⚠️ 注意事项

### 1. 环境变量
- 确保在 Vercel 中配置了所有环境变量
- 不要把 `.env.local` 文件上传到 GitHub

### 2. 数据库访问
- Supabase 免费版有访问限制
- 如果访问量大，可能需要升级

### 3. API 费用
- DeepSeek API 调用会产生费用
- 建议设置使用限额

### 4. 安全性
- 管理后台仍需要登录
- 展示页面是公开的
- 不要在代码中暴露敏感信息

## 🆘 常见问题

### Q: 部署失败怎么办？
A: 查看 Vercel 的构建日志，通常会显示具体错误。

### Q: 环境变量没生效？
A: 修改环境变量后需要重新部署。

### Q: 如何删除部署？
A: 在 Vercel 项目设置中可以删除项目。

### Q: 部署后页面空白？
A: 检查浏览器控制台的错误信息，通常是环境变量配置问题。

## 📞 获取帮助

- Vercel 文档：https://vercel.com/docs
- Next.js 文档：https://nextjs.org/docs
- Supabase 文档：https://supabase.com/docs

## 🎉 部署成功后

分享你的链接给朋友、老师或任何人：
```
https://your-project.vercel.app
```

他们可以直接访问，无需任何配置！
