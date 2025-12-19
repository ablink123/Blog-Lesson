import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Award, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function StudentShowcase() {
    const studentCases = [
        {
            name: "刘雅婷",
            before: "完全零基础，对AI一无所知",
            after: "3个月后独立完成AI写作助手项目",
            image: "/pic/student-case1.jpg",
            achievement: "获得黑客松比赛一等奖",
            tags: ["零基础", "3个月", "项目作品"]
        },
        {
            name: "陈浩然",
            before: "传统行业从业者，担心被淘汰",
            after: "成功转行AI产品经理，薪资翻倍",
            image: "/pic/student-case2.jpg",
            achievement: "成为AI社群活跃贡献者",
            tags: ["成功转行", "薪资翻倍", "社群贡献"]
        },
        {
            name: "周志强",
            before: "金融从业者，工作效率低下",
            after: "开发AI理财工具集，工作效率提升300%",
            image: "/pic/student-case3.jpg",
            achievement: "创业公司技术合伙人",
            tags: ["效率提升", "技术创业", "AI应用"]
        },
        {
            name: "林晓雯",
            before: "设计师，创作灵感枯竭",
            after: "开发AI照片模仿器，客户满意度提升95%",
            image: "/pic/student-case4.jpg",
            achievement: "成立AI设计工作室",
            tags: ["创意设计", "创业成功", "客户满意"]
        }
    ]

    return (
        <section className="py-16 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        🌟 学员成功案例
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        看看他们如何在AI学习社团实现人生的蜕变
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
                    {studentCases.map((student, index) => (
                        <Card key={index} className="brand-hover bg-white border-0 warm-shadow overflow-hidden">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={student.image}
                                    alt={`${student.name} - AI学习社团学员`}
                                    width={400}
                                    height={256}
                                    className="w-full h-full object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                        <span className="text-sm font-semibold">成功学员</span>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-12 h-12 bg-brand-warm rounded-full flex items-center justify-center">
                                        <span className="text-lg font-bold text-brand-orange">{student.name[0]}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{student.name}</h3>
                                        <p className="text-sm text-brand-orange font-semibold">{student.achievement}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            学习前
                                        </h4>
                                        <p className="text-sm text-gray-700">{student.before}</p>
                                    </div>

                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                                            <Award className="w-4 h-4" />
                                            学习后
                                        </h4>
                                        <p className="text-sm text-gray-700">{student.after}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {student.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="bg-brand-warm text-brand-orange px-3 py-1 rounded-full text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
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