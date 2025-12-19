import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI学习社团 - 专为零基础学员设计的AI学习社区',
  description: '专为零基础学员打造的AI学习社区，AB哥亲自教学，让每个人都能跟上AI时代的发展步伐。8大系统课程，实战项目，社群互助学习。',
  keywords: 'AI学习,人工智能,零基础,AB哥,AI课程,AI培训',
  authors: [{ name: 'AB哥' }],
  openGraph: {
    title: 'AI学习社团 - 不想被AI时代淘汰？我们陪您一起成长！',
    description: '专为零基础学员设计的AI学习社区，AB哥手把手教学',
    type: 'website',
    locale: 'zh_CN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}