import React from 'react'
import siteConfig from '@/data/site-config.json'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export default function TestimonialSection() {
    return (
        <section className="py-16 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        💬 学员真实反馈
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        听听他们如何在AI学习社团实现蜕变
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {siteConfig.testimonials.map((testimonial, index) => (
                        <Card key={index} className="brand-hover bg-white border-0 warm-shadow">
                            <CardContent className="p-6">
                                {/* 评分星星 */}
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                                    ))}
                                </div>

                                {/* 引用图标 */}
                                <Quote className="w-8 h-8 text-brand-orange/20 mb-4" />

                                {/* 评价内容 */}
                                <blockquote className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </blockquote>

                                {/* 学员信息 */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-brand-warm rounded-full flex items-center justify-center">
                                        <span className="text-xl">👤</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold">{testimonial.name}</div>
                                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* 学习成果统计 */}
                <div className="bg-gradient-to-r from-brand-orange/10 to-brand-yellow/10 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-8">📊 学习成果数据</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <div className="text-3xl font-bold text-brand-orange mb-2">98%</div>
                            <div className="text-sm text-muted-foreground">学员满意度</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-brand-orange mb-2">85%</div>
                            <div className="text-sm text-muted-foreground">就业/转行率</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-brand-orange mb-2">3个月</div>
                            <div className="text-sm text-muted-foreground">平均学习周期</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-brand-orange mb-2">4.9分</div>
                            <div className="text-sm text-muted-foreground">课程评分</div>
                        </div>
                    </div>
                </div>

                {/* 鼓励行动 */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-bold mb-4">🚀 准备开始你的AI学习之旅？</h3>
                    <p className="text-muted-foreground mb-6">
                        加入我们，和1000+学员一起在AI时代乘风破浪
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-brand-warm px-3 py-1 rounded-full text-sm">零基础可学</span>
                        <span className="bg-brand-warm px-3 py-1 rounded-full text-sm">名师指导</span>
                        <span className="bg-brand-warm px-3 py-1 rounded-full text-sm">实战项目</span>
                        <span className="bg-brand-warm px-3 py-1 rounded-full text-sm">社群支持</span>
                    </div>
                </div>
            </div>
        </section>
    )
}