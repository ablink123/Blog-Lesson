import React from 'react'
import siteConfig from '@/data/site-config.json'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Target, Code, Trophy } from 'lucide-react'

export default function CourseGrid() {
    const getCourseIcon = (index: number) => {
        const icons = [BookOpen, Target, Code, Trophy, BookOpen, Target, Code, Trophy]
        return icons[index % icons.length]
    }

    return (
        <section id="courses" className="py-16 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        📚 8大Part系统课程
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        从AI基础到实战项目，循序渐进掌握AI核心技能
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {siteConfig.courses.map((course, index) => {
                        const Icon = getCourseIcon(index)
                        return (
                            <Card key={index} className="brand-hover group cursor-pointer">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                                            <Icon className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-sm font-bold text-brand-orange">
                                                {course.part}
                                            </CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {course.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* 课程特色说明 */}
                <div className="bg-brand-warm rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-6">🎯 课程特色</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold">1</span>
                            </div>
                            <h4 className="font-bold mb-2">理论与实践结合</h4>
                            <p className="text-sm text-muted-foreground">每节课都有实际操作，让学习更扎实</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold">2</span>
                            </div>
                            <h4 className="font-bold mb-2">项目驱动学习</h4>
                            <p className="text-sm text-muted-foreground">通过完成真实项目来掌握技能</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold">3</span>
                            </div>
                            <h4 className="font-bold mb-2">社群互助学习</h4>
                            <p className="text-sm text-muted-foreground">同学们互相帮助，共同进步</p>
                        </div>
                    </div>
                </div>

                {/* 学习成果展示 */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-bold mb-4">🏆 学习成果</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                            <span className="font-bold text-brand-orange">5+</span> 个AI项目作品
                        </div>
                        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                            <span className="font-bold text-brand-orange">3+</span> 个月系统学习
                        </div>
                        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                            <span className="font-bold text-brand-orange">1000+</span> 名学员见证
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}