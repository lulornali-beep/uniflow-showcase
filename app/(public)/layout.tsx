/**
 * 公开展示页面布局
 * 无需登录即可访问，但拥有完整管理功能
 */

import PublicSidebar from '@/components/layout/PublicSidebar'
import PublicTopNav from '@/components/layout/PublicTopNav'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* 侧边栏 */}
        <PublicSidebar />
        
        {/* 主内容区 */}
        <div className="flex-1 ml-64 flex flex-col">
          {/* 顶部导航 */}
          <PublicTopNav />
          
          {/* 页面内容 */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
