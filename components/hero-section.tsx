import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from "@/components/header"
import { ChevronRight, MessageCircle, Users, Target, Sparkles } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="warm-gradient" id="home">
                    <div className="relative py-24 md:py-36">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="text-center md:text-left md:w-3/4 lg:w-2/3">
                                {/* 温馨标题区域 */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center gap-2 bg-brand-warm px-4 py-2 rounded-full mb-4">
                                        <Sparkles className="w-5 h-5 text-brand-orange" />
                                        <span className="text-brand-orange font-medium">零基础友好 · 贴心指导</span>
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 leading-tight">
                                    不想被AI时代淘汰？
                                    <br />
                                    <span className="text-brand-orange">我们陪您一起成长！</span>
                                </h1>

                                <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl">
                                    专为零基础学员设计的AI学习课程，AB哥手把手教学，
                                    让您轻松跟上AI时代步伐，不做职场"掉队者"
                                </p>

                                {/* 行动按钮 */}
                                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-12">
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="warm"
                                        className="brand-hover text-lg px-8 py-3">
                                        <Link href="#contact">
                                            <span className="text-nowrap">立即报名 299元/季度</span>
                                            <ChevronRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="warm-outline"
                                        className="text-lg px-8 py-3">
                                        <Link href="#courses">
                                            <MessageCircle className="mr-2 w-5 h-5" />
                                            <span className="text-nowrap">免费咨询</span>
                                        </Link>
                                    </Button>
                                </div>

                                {/* 核心特色展示 */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                    <div className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm">
                                        <Users className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                                        <h3 className="font-semibold text-lg mb-1">专为零基础设计</h3>
                                        <p className="text-sm text-muted-foreground">循序渐进，确保每位学员都能跟上</p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm">
                                        <Target className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                                        <h3 className="font-semibold text-lg mb-1">AB哥亲自带班</h3>
                                        <p className="text-sm text-muted-foreground">10年AI专家1对1指导</p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm">
                                        <Sparkles className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                                        <h3 className="font-semibold text-lg mb-1">实战黑客松</h3>
                                        <p className="text-sm text-muted-foreground">真实项目开发，积累作品集</p>
                                    </div>
                                </div>

                                {/* 信任提示 */}
                                <div className="mt-10">
                                    <p className="text-muted-foreground text-center md:text-left">
                                        🏆 已有<span className="font-bold text-brand-orange"> 1000+</span>名学员成功加入
                                    </p>
                                    <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                                        {['零基础友好', '系统课程', '实战项目', '社群互助'].map((tag, index) => (
                                            <span key={index} className="bg-brand-warm text-brand-orange px-3 py-1 rounded-full text-sm font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}