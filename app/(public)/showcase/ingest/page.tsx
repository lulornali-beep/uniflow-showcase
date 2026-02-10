/**
 * 公开版 AI 采集台 - 只读模式
 * 可以查看界面，但不能实际使用
 */

'use client'

import { Lock } from 'lucide-react'

export default function ReadOnlyIngestPage() {
  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI 智能采集台</h1>
          <p className="text-sm text-gray-500 mt-1">智能解析群消息、图片和网页内容（只读模式）</p>
        </div>
        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
          <Lock className="h-3 w-3 mr-1" />
          只读模式
        </span>
      </div>

      {/* 功能展示卡片 */}
      <div className="bg-white rounded-lg shadow p-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
            <Lock className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">AI 采集功能预览</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            此页面为只读展示模式。AI 采集台可以智能解析文本、图片和 URL，自动提取活动信息。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* 文本解析 */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="font-semibold text-gray-900 mb-2">文本解析</h3>
              <p className="text-sm text-gray-600">
                粘贴群消息文本，AI 自动识别活动标题、时间、地点等关键信息
              </p>
            </div>

            {/* 图片识别 */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-3">🖼️</div>
              <h3 className="font-semibold text-gray-900 mb-2">图片识别</h3>
              <p className="text-sm text-gray-600">
                上传活动海报，OCR 识别文字后 AI 提取结构化信息
              </p>
            </div>

            {/* URL 抓取 */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="font-semibold text-gray-900 mb-2">URL 抓取</h3>
              <p className="text-sm text-gray-600">
                输入网页链接，自动抓取内容并提取活动信息
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 提示：如需使用 AI 采集功能，请访问管理后台版本
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
