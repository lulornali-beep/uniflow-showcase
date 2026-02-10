/**
 * 公开版数据看板 - 只读模式
 * 显示统计数据，但不能修改
 */

'use client'

import { useEffect, useState } from 'react'
import { Calendar, TrendingUp, Users, Activity, Lock } from 'lucide-react'

export default function ReadOnlyDashboardPage() {
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
    archived: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats')
      const result = await response.json()
      if (result.success) {
        setStats(result.data)
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">数据看板</h1>
          <p className="text-sm text-gray-500 mt-1">查看平台数据统计（只读模式）</p>
        </div>
        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
          <Lock className="h-3 w-3 mr-1" />
          只读模式
        </span>
      </div>

      {/* 统计卡片 */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">加载中...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 总活动数 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">总活动数</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          {/* 已发布 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">已发布</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.published}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          {/* 草稿 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">草稿</p>
                <p className="text-3xl font-bold text-gray-600 mt-2">{stats.draft}</p>
              </div>
              <div className="p-3 bg-gray-100 rounded-full">
                <Users className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>

          {/* 已下架 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">已下架</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">{stats.archived}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 功能说明 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">数据看板功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-semibold">1</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">实时统计</h3>
              <p className="text-sm text-gray-600 mt-1">查看平台活动数量统计，包括总数、已发布、草稿和已下架</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-semibold">2</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">数据可视化</h3>
              <p className="text-sm text-gray-600 mt-1">通过图表和卡片直观展示数据，便于快速了解平台状态</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-semibold">3</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">趋势分析</h3>
              <p className="text-sm text-gray-600 mt-1">分析活动发布趋势，帮助优化内容管理策略</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-semibold">4</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">快速概览</h3>
              <p className="text-sm text-gray-600 mt-1">一目了然地查看平台整体运营情况</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
