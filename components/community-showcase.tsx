import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Trophy, Users, Calendar, Heart, Zap } from 'lucide-react'

export default function CommunityShowcase() {
    const communityFeatures = [
        {
            icon: Users,
            title: "活跃学习群",
            description: "500+学员在线交流，24小时答疑解惑",
            stats: "日均消息1000+"
        },
        {
            icon: Trophy,
            title: "黑客松比赛",
            description: "每月举办AI项目大赛，赢取奖励和证书",
            stats: "月均参赛200+"
        },
        {
            icon: MessageCircle,
            title: "主题分享会",
            description: "定期邀请行业专家分享前沿AI技术",
            stats: "每周2场直播"
        },
        {
            icon: Calendar,
            title: "学习活动",
            description: "线上+线下活动结合，理论与实践并重",
            stats: "月均8场活动"
        }
    ]

    const recentActivities = [
        {
            title: "AI写作工具实战",
            date: "2024年12月",
            participants: 156,
            type: "workshop"
        },
        {
            title: "ChatGPT应用开发大赛",
            date: "2024年11月",
            participants: 89,
            type: "competition"
        },
        {
            title: "AI绘画入门分享",
            date: "2024年11月",
            participants: 203,
            type: "sharing"
        }
    ]

    return (
        <section className="py-16 bg-brand-warm">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        🎉 丰富多彩的社群活动
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        学习不孤单，我们一起成长，一起进步
                    </p>
                </div>

                {/* 社群特色功能 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {communityFeatures.map((feature, index) => (
                        <Card key={index} className="brand-hover bg-white border-0 warm-shadow">
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-8 h-8 text-brand-orange" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                                <div className="text-brand-orange font-semibold text-sm">{feature.stats}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* 最近活动 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <Card className="bg-white border-0 warm-shadow">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-brand-orange" />
                                最近活动
                            </h3>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div key={index} className="flex items-center gap-4 p-3 bg-brand-warm rounded-lg">
                                        <div className="w-2 h-12 bg-brand-orange rounded-full"></div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold">{activity.title}</h4>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <span>{activity.date}</span>
                                                <span>•</span>
                                                <span>{activity.participants}人参与</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* 社群氛围 */}
                    <Card className="bg-white border-0 warm-shadow">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-brand-orange" />
                                社群氛围
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-green-600 text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">互助学习</h4>
                                        <p className="text-sm text-muted-foreground">同学们互相帮助，共同解决问题</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-green-600 text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">积极分享</h4>
                                        <p className="text-sm text-muted-foreground">学员主动分享学习心得和项目经验</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-green-600 text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">持续进步</h4>
                                        <p className="text-sm text-muted-foreground">学习氛围浓厚，大家一起成长</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* 加入社群邀请 */}
                <div className="bg-gradient-to-r from-brand-orange to-brand-yellow rounded-2xl p-8 text-center text-white">
                    <div className="text-4xl mb-4">🎊</div>
                    <h3 className="text-2xl font-bold mb-4">立即加入我们的大家庭！</h3>
                    <p className="text-lg mb-6 opacity-90">
                        不再一个人孤单学习，和志同道合的伙伴一起在AI时代乘风破浪
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <span className="font-semibold">500+</span> 活跃学员
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <span className="font-semibold">1000+</span> 项目作品
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <span className="font-semibold">24/7</span> 社群支持
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}