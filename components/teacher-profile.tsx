import React from 'react'
import siteConfig from '@/data/site-config.json'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Users, Clock, Star } from 'lucide-react'
import Image from 'next/image'

export default function TeacherProfile() {
    const stats = [
        {
            icon: Users,
            value: "1000+",
            label: "培养学员"
        },
        {
            icon: Clock,
            value: "10年",
            label: "AI开发经验"
        },
        {
            icon: Award,
            value: "50+",
            label: "实战项目"
        },
        {
            icon: Star,
            value: "4.9",
            label: "学员评分"
        }
    ]

    const teachingPrinciples = [
        {
            title: "耐心指导",
            description: "理解零基础学员的困难，用最简单的方式讲解复杂概念"
        },
        {
            title: "实战导向",
            description: "注重实践应用，确保学员能够真正上手开发"
        },
        {
            title: "全程陪伴",
            description: "从入门到就业，全程提供学习和职业发展指导"
        }
    ]

    return (
        <section id="teacher" className="py-16 bg-brand-warm">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        👨‍🏫 认识导师 - AB哥
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        资深AI实战专家，致力于让每个人都能轻松掌握AI技能
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* 左侧：导师照片和基本信息 */}
                    <div className="text-center lg:text-left">
                        <div className="relative inline-block mb-6">
                            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
                                <div className="absolute inset-0 bg-brand-orange rounded-full opacity-10 animate-pulse"></div>
                                <div className="relative w-full h-full bg-white rounded-full p-2 shadow-lg overflow-hidden">
                                    <Image
                                        src="/pic/teacher-photo.jpg"
                                        alt="AB哥 - AI学习社团导师"
                                        width={240}
                                        height={240}
                                        className="w-full h-full object-cover rounded-full"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-2">AB哥</h3>
                        <p className="text-brand-orange font-semibold mb-4">{siteConfig.teacher.title}</p>

                        <div className="space-y-2 text-muted-foreground">
                            <p>✨ {siteConfig.teacher.experience}</p>
                            <p>🎓 {siteConfig.teacher.specialty}</p>
                            <p>💼 前某大厂AI技术负责人</p>
                        </div>
                    </div>

                    {/* 右侧：教学理念和统计数据 */}
                    <div>
                        {/* 统计数据 */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {stats.map((stat, index) => (
                                <Card key={index} className="bg-white border-0 warm-shadow">
                                    <CardContent className="p-4 text-center">
                                        <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <stat.icon className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div className="text-2xl font-bold text-brand-orange mb-1">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* 教学理念 */}
                        <Card className="bg-white border-0 warm-shadow">
                            <CardContent className="p-6">
                                <h4 className="font-bold text-lg mb-4 text-center">🎯 教学理念</h4>
                                <div className="space-y-4">
                                    {teachingPrinciples.map((principle, index) => (
                                        <div key={index} className="flex gap-3">
                                            <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-brand-orange font-bold text-sm">{index + 1}</span>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold mb-1">{principle.title}</h5>
                                                <p className="text-sm text-muted-foreground">{principle.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* 学员评价引用 */}
                <div className="mt-12 text-center">
                    <div className="bg-white rounded-2xl p-6 max-w-3xl mx-auto warm-shadow">
                        <div className="text-4xl mb-4">💬</div>
                        <blockquote className="text-lg italic text-muted-foreground mb-4">
                            "我的教学目标是让每个零基础的学员都能轻松掌握AI技能，
                            在AI时代找到自己的位置。技术不是少数人的专利，而应该是每个人都能掌握的工具。"
                        </blockquote>
                        <cite className="font-semibold text-brand-orange">— AB哥</cite>
                    </div>
                </div>
            </div>
        </section>
    )
}