# 🌊 UniFlow 智汇流

校园信息聚合平台 - 智能采集、结构化展示校园活动、招聘和讲座信息

## 🎯 项目简介

UniFlow 是一个基于 AI 的校园信息聚合平台，能够智能解析群消息、图片和网页内容，自动提取活动信息并结构化展示。

## ✨ 核心功能

### 1. AI 智能采集台
- 📝 **文本解析**：粘贴群消息，AI 自动识别活动信息
- 🖼️ **图片识别**：上传海报，OCR + AI 提取关键信息
- 🔗 **URL 抓取**：输入链接，自动抓取并解析内容

### 2. 活动管理
- 📊 完整的增删改查功能
- 🔝 置顶功能
- 🏷️ 状态管理（已发布/草稿/已下架）
- 🔍 搜索和筛选

### 3. 数据看板
- 📈 实时统计数据
- 📊 可视化展示
- 🎯 快速概览

## 🚀 技术栈

- **前端框架**：Next.js 16 + React 19
- **样式方案**：Tailwind CSS 4
- **数据库**：Supabase (PostgreSQL)
- **AI 服务**：DeepSeek API
- **部署平台**：Vercel

## 🌐 在线演示

- **公开展示版**：[https://your-project.vercel.app](https://your-project.vercel.app)
- **管理后台**：[https://your-project.vercel.app/login](https://your-project.vercel.app/login)

## 📦 本地开发

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 配置环境变量
创建 `.env.local` 文件：
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DEEPSEEK_API_KEY=your_deepseek_api_key
```

### 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本
```bash
npm run build
npm start
```

## 📖 项目结构

```
admin-console/
├── app/                    # Next.js App Router
│   ├── (auth)/            # 认证相关页面
│   ├── (dashboard)/       # 管理后台页面
│   ├── (public)/          # 公开展示页面
│   └── api/               # API 路由
├── components/            # React 组件
│   └── layout/           # 布局组件
├── lib/                   # 工具库
│   ├── ai/               # AI 解析相关
│   └── supabase/         # Supabase 客户端
├── types/                 # TypeScript 类型定义
└── docs/                  # 项目文档
```

## 🔐 访问模式

### 公开展示模式（只读）
- 访问：`/` 或 `/showcase/*`
- 无需登录
- 只能查看，不能修改
- 适合展示和演示

### 管理后台模式
- 访问：`/login`
- 需要登录
- 完整功能
- 适合日常管理

## 📝 开发文档

- [部署指南](./DEPLOY_GUIDE_SIMPLE.md)
- [只读模式说明](./docs/READ_ONLY_MODE.md)
- [公开访问指南](./docs/PUBLIC_ACCESS_GUIDE.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👨‍💻 作者

[Your Name]

## 🙏 致谢

- Next.js
- Supabase
- DeepSeek
- Vercel
