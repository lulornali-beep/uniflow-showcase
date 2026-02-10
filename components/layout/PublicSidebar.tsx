'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Sparkles, 
  Calendar, 
  Eye
} from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const navigation = [
  { name: '数据看板', href: '/showcase/dashboard', icon: LayoutDashboard },
  { name: 'AI 智能采集台', href: '/showcase/ingest', icon: Sparkles },
  { name: '活动管理', href: '/showcase/events', icon: Calendar },
]

export default function PublicSidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 w-64 bg-slate-900 text-white h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">UniFlow</h1>
        <p className="text-sm text-slate-400 mt-1">智汇流</p>
        <div className="mt-2 flex items-center text-xs text-green-400">
          <Eye className="h-3 w-3 mr-1" />
          公开展示模式
        </div>
      </div>
      
      <nav className="px-3 space-y-1 flex-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-3 border-t border-slate-800">
        <div className="px-3 py-2 text-xs text-slate-400">
          <p>这是公开展示版本</p>
          <p className="mt-1">所有功能均可使用</p>
        </div>
      </div>
    </div>
  )
}
