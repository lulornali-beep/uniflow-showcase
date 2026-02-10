/**
 * 公开版活动管理 - 只读模式
 * 可以查看所有功能，但不能修改数据
 */

'use client'

import { useState, useEffect } from 'react'
import { 
  Search, 
  Filter,
  Eye,
  Calendar,
  Tag,
  Lock
} from 'lucide-react'
import type { Event } from '@/types/event'

type EventStatusFilter = 'all' | 'published' | 'draft' | 'archived'
type EventTypeFilter = 'all' | 'recruit' | 'activity' | 'lecture'

export default function ReadOnlyEventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<EventStatusFilter>('all')
  const [typeFilter, setTypeFilter] = useState<EventTypeFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  useEffect(() => {
    fetchEvents()
  }, [statusFilter, typeFilter])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      
      if (statusFilter !== 'all') {
        params.append('status', statusFilter)
      }
      if (typeFilter !== 'all') {
        params.append('type', typeFilter)
      }

      const response = await fetch(`/api/events?${params.toString()}`)
      const result = await response.json()

      if (result.success) {
        const mappedEvents = result.data.map((event: any) => ({
          ...event,
          id: Number(event.id),
          status: event.status === 'active' ? 'published' : event.status === 'inactive' ? 'draft' : event.status
        }))
        mappedEvents.sort((a: Event, b: Event) => {
          if (a.is_top !== b.is_top) {
            return b.is_top ? 1 : -1
          }
          const aTime = new Date(a.created_at || 0).getTime()
          const bTime = new Date(b.created_at || 0).getTime()
          return bTime - aTime
        })
        setEvents(mappedEvents)
      }
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredEvents = events.filter(event => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        event.title.toLowerCase().includes(query) ||
        event.summary?.toLowerCase().includes(query) ||
        event.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    return true
  })

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; className: string }> = {
      published: { label: '已发布', className: 'bg-green-100 text-green-800' },
      draft: { label: '草稿', className: 'bg-gray-100 text-gray-800' },
      archived: { label: '已下架', className: 'bg-orange-100 text-orange-800' },
      expired: { label: '已过期', className: 'bg-red-100 text-red-800' },
    }
    
    const statusInfo = statusMap[status] || { label: status, className: 'bg-gray-100 text-gray-800' }
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusInfo.className}`}>
        {statusInfo.label}
      </span>
    )
  }

  const getTypeBadge = (type: string) => {
    const typeMap: Record<string, { label: string; className: string }> = {
      recruit: { label: '招聘', className: 'bg-blue-100 text-blue-800' },
      activity: { label: '活动', className: 'bg-purple-100 text-purple-800' },
      lecture: { label: '讲座', className: 'bg-pink-100 text-pink-800' },
    }
    
    const typeInfo = typeMap[type] || { label: type, className: 'bg-gray-100 text-gray-800' }
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeInfo.className}`}>
        {typeInfo.label}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      {/* 页面标题和说明 */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">活动管理</h1>
          <p className="text-sm text-gray-500 mt-1">浏览所有活动、招聘和讲座信息（只读模式）</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
            <Lock className="h-3 w-3 mr-1" />
            只读模式
          </span>
        </div>
      </div>

      {/* 筛选和搜索栏 */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 状态筛选 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Filter className="inline h-4 w-4 mr-1" />
              状态
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as EventStatusFilter)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">全部</option>
              <option value="published">已发布</option>
              <option value="draft">草稿</option>
              <option value="archived">已下架</option>
            </select>
          </div>

          {/* 类型筛选 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Tag className="inline h-4 w-4 mr-1" />
              类型
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as EventTypeFilter)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">全部</option>
              <option value="recruit">招聘</option>
              <option value="activity">活动</option>
              <option value="lecture">讲座</option>
            </select>
          </div>

          {/* 搜索 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Search className="inline h-4 w-4 mr-1" />
              搜索
            </label>
            <input
              type="text"
              placeholder="搜索标题、摘要、标签..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* 活动列表表格 */}
      <div className="bg-white rounded-lg shadow">
        {loading ? (
          <div className="p-8 text-center text-gray-500">加载中...</div>
        ) : filteredEvents.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            {searchQuery ? '没有找到匹配的活动' : '暂无活动数据'}
          </div>
        ) : (
          <div>
            <table className="w-full table-fixed divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-[50%] px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    标题
                  </th>
                  <th className="w-[10%] px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    类型
                  </th>
                  <th className="w-[10%] px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    状态
                  </th>
                  <th className="w-[20%] px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    发布时间
                  </th>
                  <th className="w-[10%] px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-start">
                        {event.is_top && (
                          <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded mr-2 flex-shrink-0">
                            置顶
                          </span>
                        )}
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-gray-900 break-words leading-snug">{event.title}</div>
                          {event.summary && (
                            <div className="text-xs text-gray-500 mt-1 line-clamp-2 break-words">
                              {event.summary}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-center">
                      {getTypeBadge(event.type)}
                    </td>
                    <td className="px-2 py-3 text-center">
                      {getStatusBadge(event.status)}
                    </td>
                    <td className="px-2 py-3 text-center text-xs text-gray-500">
                      {event.published_at 
                        ? new Date(event.published_at).toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
                        : event.created_at 
                        ? new Date(event.created_at).toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
                        : '-'}
                    </td>
                    <td className="px-2 py-3">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => setSelectedEvent(event)}
                          className="p-1 text-purple-600 hover:text-purple-900 hover:bg-purple-50 rounded"
                          title="查看详情"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 统计信息 */}
      {!loading && (
        <div className="text-sm text-gray-500 text-center">
          共 {filteredEvents.length} 条活动
        </div>
      )}

      {/* 详情弹窗 */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 详情头部 */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getTypeBadge(selectedEvent.type)}
                  {getStatusBadge(selectedEvent.status)}
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-white hover:bg-white/20 rounded-full p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
            </div>

            {/* 详情内容 */}
            <div className="p-6 space-y-6">
              {/* 摘要 */}
              {selectedEvent.summary && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">活动简介</h3>
                  <p className="text-gray-600">{selectedEvent.summary}</p>
                </div>
              )}

              {/* 关键信息 */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">关键信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  {Object.entries(selectedEvent.key_info || {}).map(([key, value]) => {
                    if (!value) return null
                    const labels: Record<string, string> = {
                      date: '日期',
                      time: '时间',
                      location: '地点',
                      deadline: '截止时间',
                      company: '公司',
                      position: '岗位',
                      education: '学历要求',
                      link: '链接',
                      registration_link: '报名链接',
                    }
                    return (
                      <div key={key} className="text-sm">
                        <div className="text-gray-500 mb-1">{labels[key] || key}</div>
                        <div className="text-gray-900 font-medium break-all">{String(value)}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* 原始内容 */}
              {selectedEvent.raw_content && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">详细内容</h3>
                  <div className="text-sm text-gray-600 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg max-h-60 overflow-y-auto">
                    {selectedEvent.raw_content}
                  </div>
                </div>
              )}

              {/* 标签 */}
              {selectedEvent.tags.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">标签</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 来源信息 */}
              <div className="pt-4 border-t border-gray-200 text-xs text-gray-500">
                <div>来源：{selectedEvent.source_group}</div>
                <div>发布时间：{selectedEvent.publish_time}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
