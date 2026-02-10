export default function PublicTopNav() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">欢迎使用 UniFlow</h2>
          <p className="text-sm text-gray-500">
            校园信息聚合平台 - 公开展示版本
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
            公开访问
          </span>
        </div>
      </div>
    </header>
  )
}
