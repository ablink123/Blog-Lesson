import React from 'react'
import { Button } from '@/components/ui/button'
import siteConfig from '@/data/site-config.json'
import { CheckCircle, MessageCircle, Zap, Shield } from 'lucide-react'
import Image from 'next/image'

export default function CTASection() {
    const benefits = [
        {
            icon: CheckCircle,
            title: "完整8大Part系统课程",
            description: "从AI基础到实战项目，循序渐进"
        },
        {
            icon: MessageCircle,
            title: "AB哥亲自指导答疑",
            description: "10年AI专家1对1辅导"
        },
        {
            icon: Zap,
            title: "参与黑客松比赛",
            description: "真实项目开发，积累作品集"
        },
        {
            icon: Shield,
            title: "学习保障承诺",
            description: "跟不上额外1对1辅导"
        }
    ]

    return (
        <section id="contact" className="py-16 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="bg-gradient-to-br from-brand-orange/10 via-brand-yellow/10 to-brand-orange/5 rounded-3xl p-8 md:p-12 border border-brand-orange/20 shadow-xl">
                    {/* 标题区域 */}
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-foreground text-3xl md:text-4xl font-bold">
                            🎯 立即加入AI学习社团
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            {siteConfig.description}
                        </p>

                        {/* 价格标识 */}
                        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm warm-shadow">
                            <span className="text-3xl">💰</span>
                            <span className="text-foreground font-bold text-2xl text-brand-orange">
                                {siteConfig.pricing}
                            </span>
                            <span className="text-muted-foreground">限时优惠价</span>
                        </div>
                    </div>

                    {/* 主要内容区域 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* 左侧：二维码和联系方式 */}
                        <div className="flex-shrink-0 lg:w-1/2">
                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center warm-shadow">
                                <div className="w-64 h-64 mx-auto relative mb-4">
                                    <Image
                                        src="/pic/wechat-qr.jpg"
                                        alt="微信二维码 - 扫码添加AB哥AI课堂"
                                        width={256}
                                        height={256}
                                        className="w-full h-full object-cover rounded-lg"
                                        priority
                                    />
                                </div>

                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <p>👆 扫码添加微信</p>
                                    <p className="font-semibold">{siteConfig.contact.wechat}</p>
                                    <p>备注"AI学习"立即咨询</p>
                                </div>

                                {/* 紧急联系提示 */}
                                <div className="mt-4 bg-brand-warm p-3 rounded-lg">
                                    <p className="text-sm font-semibold text-brand-orange">
                                        📞 名额有限，立即咨询！
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 右侧：服务内容 */}
                        <div className="flex-1 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex gap-3 p-4 bg-white rounded-xl warm-shadow">
                                        <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <benefit.icon className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{benefit.title}</h4>
                                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 额外保障 */}
                            <div className="bg-white p-6 rounded-xl warm-shadow">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="text-2xl">💝</span>
                                    额外学习保障
                                </h4>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-orange">✓</span>
                                        <span>课程视频永久回看</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-orange">✓</span>
                                        <span>学习资料持续更新</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-orange">✓</span>
                                        <span>免费参与后续活动</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-orange">✓</span>
                                        <span>优秀学员推荐就业</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 底部行动号召 */}
                    <div className="mt-12 text-center">
                        <div className="bg-brand-orange text-white p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4">
                                🚀 开启你的AI学习之旅
                            </h3>
                            <p className="mb-6 opacity-90">
                                现在加入，与1000+学员一起在AI时代乘风破浪！
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" variant="secondary" className="bg-white text-brand-orange hover:bg-gray-100">
                                    立即扫码报名
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange">
                                    免费咨询课程详情
                                </Button>
                            </div>
                            <p className="text-sm mt-4 opacity-75">
                                ⚠️ 每期限招50人，招满即止
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}