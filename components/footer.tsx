import React from 'react'
import { Logo } from '@/components/logo'
import { Heart, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="mx-auto max-w-5xl px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 左侧：品牌信息 */}
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-sm text-muted-foreground">
                            让每个人都能轻松掌握AI技能，紧跟时代发展步伐
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-brand-orange fill-current" />
                            <span>by AB哥</span>
                        </div>
                    </div>

                    {/* 中间：快速链接 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">快速导航</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#home" className="hover:text-brand-orange transition-colors">首页</a></li>
                            <li><a href="#courses" className="hover:text-brand-orange transition-colors">课程体系</a></li>
                            <li><a href="#teacher" className="hover:text-brand-orange transition-colors">导师介绍</a></li>
                            <li><a href="#contact" className="hover:text-brand-orange transition-colors">立即报名</a></li>
                        </ul>
                    </div>

                    {/* 右侧：联系方式 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">联系我们</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                <span>微信：{process.env.NEXT_PUBLIC_WECHAT || 'AB哥AI课堂'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>邮箱：{process.env.NEXT_PUBLIC_EMAIL || 'contact@ailearning.com'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 底部版权信息 */}
                <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; 2026 AI学习社团. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}