import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // 公开展示页面无需登录，直接放行
  if (request.nextUrl.pathname.startsWith('/showcase') ||
      request.nextUrl.pathname.startsWith('/api') ||
      request.nextUrl.pathname === '/') {
    return NextResponse.next()
  }

  // 登录页面也直接放行
  if (request.nextUrl.pathname === '/login') {
    return NextResponse.next()
  }

  // 其他管理后台路由需要登录，但我们先简单放行
  // 实际的认证检查在各个页面组件中进行
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

