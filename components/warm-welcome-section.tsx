import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Shield, Zap, Clock } from 'lucide-react'

export default function WarmWelcomeSection() {
    const features = [
        {
            icon: Heart,
            title: "贴心教学",
            description: "理解零基础的困惑，用最简单的方式解释复杂的AI概念"
        },
        {
            icon: Shield,
            title: "学习保障",
            description: "AB哥全程陪伴，遇到问题随时答疑，确保学习效果"
        },
        {
            icon: Zap,
            title: "快速上手",
            description: "从零到实战，3个月内掌握AI核心技能"
        },
        {
            icon: Clock,
            title: "灵活学习",
            description: "课程视频可反复观看，工作时间也能轻松学习"
        }
    ]

    return (
        <section className="py-16 bg-brand-warm">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        为什么选择我们？
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        我们不仅仅是教技术，更是陪伴您在AI时代的成长之路
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="brand-hover bg-white border-0 warm-shadow">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-6 h-6 text-brand-orange" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* 温馨提示语 */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
                        <span className="text-2xl">💝</span>
                        <p className="text-gray-700">
                            <span className="font-semibold">承诺：</span>
                            如果您感觉跟不上进度，AB哥会为您提供额外的1对1辅导
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}