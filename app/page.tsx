/**
 * 首页 - 重定向到公开展示的活动管理页面
 */

import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/showcase/events')
}
