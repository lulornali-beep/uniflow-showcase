#!/bin/bash

echo "🚀 UniFlow 部署准备脚本"
echo "========================"
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在 admin-console 目录下运行此脚本"
    exit 1
fi

echo "✅ 当前目录正确"
echo ""

# 初始化 Git 仓库
if [ ! -d ".git" ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    echo "✅ Git 仓库初始化完成"
else
    echo "✅ Git 仓库已存在"
fi
echo ""

# 添加所有文件
echo "📝 添加文件到 Git..."
git add .
echo "✅ 文件添加完成"
echo ""

# 提交
echo "💾 提交代码..."
git commit -m "Initial commit: UniFlow showcase project" || echo "⚠️  没有新的更改需要提交"
echo ""

echo "🎉 准备完成！"
echo ""
echo "📋 下一步操作："
echo "1. 访问 https://github.com/new 创建新仓库"
echo "2. 仓库名称建议：uniflow-showcase"
echo "3. 不要勾选 'Initialize this repository with a README'"
echo "4. 创建后，复制仓库 URL（如：https://github.com/你的用户名/uniflow-showcase.git）"
echo "5. 运行以下命令连接远程仓库："
echo ""
echo "   git remote add origin https://github.com/你的用户名/uniflow-showcase.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "6. 然后访问 https://vercel.com 进行部署"
echo ""
