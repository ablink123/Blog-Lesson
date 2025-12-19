# AI学习社团网站

专为零基础学员打造的AI学习社区网站，突出温馨社区式设计风格。

## 🌟 项目特色

- **温馨社区式设计**：暖色调界面，营造亲和的学习氛围
- **响应式布局**：完美适配PC端和移动端
- **零基础友好**：针对零基础学员设计的用户体验
- **完整功能展示**：课程介绍、导师展示、学员评价等

## 🛠️ 技术栈

- **前端框架**: Next.js 14
- **UI组件**: shadcn/ui + Tailwind CSS
- **图标**: Lucide React
- **语言**: TypeScript

## 📦 安装和运行

1. 安装依赖：
```bash
npm install
# 或者
yarn install
```

2. 启动开发服务器：
```bash
npm run dev
# 或者
yarn dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 🏗️ 项目结构

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx          # 主页面
├── components/            # React组件
│   ├── ui/               # 基础UI组件
│   ├── hero-section.tsx  # 英雄区块
│   ├── warm-welcome-section.tsx  # 温馨欢迎
│   ├── course-grid.tsx   # 课程网格
│   ├── teacher-profile.tsx # 导师介绍
│   ├── testimonial-section.tsx  # 学员评价
│   ├── community-showcase.tsx   # 社群展示
│   ├── cta-section.tsx   # 行动号召
│   ├── header.tsx        # 页面头部
│   ├── footer.tsx        # 页面底部
│   └── logo.tsx          # Logo组件
├── data/
│   └── site-config.json  # 网站配置数据
├── lib/
│   └── utils.ts          # 工具函数
└── styles/               # 样式文件
```

## 🎨 设计系统

### 颜色方案
- **主色调**: 暖色系 (#FF6B35, #F7931E, #FFC947)
- **辅助色**: 温暖的灰调 (#F7F7F7, #E8E8E8)
- **字体**: 系统默认字体栈，确保可读性

### 组件特性
- **品牌按钮**: 使用暖色调的品牌按钮
- **卡片阴影**: warm-shadow 品牌阴影效果
- **悬停效果**: brand-hover 悬停动画
- **圆角**: 较大的圆角值营造亲和感

## 📱 页面功能

### 主要区块
1. **英雄区块**: 突出核心价值主张和行动按钮
2. **温馨欢迎**: 展示学习保障和特色
3. **课程体系**: 8大Part课程网格展示
4. **导师介绍**: AB哥个人品牌展示
5. **学员评价**: 真实学员反馈
6. **社群展示**: 社群活动和氛围
7. **行动号召**: 报名信息和联系方式

### 数据配置
- `data/site-config.json`: 包含所有网站数据
- 可轻松修改价格、课程信息、联系方式等

## 🚀 部署

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

### Vercel部署（推荐）
1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 自动部署完成

## ⚙️ 环境变量

创建 `.env.local` 文件：
```env
NEXT_PUBLIC_WECHAT=AB哥AI课堂
NEXT_PUBLIC_EMAIL=contact@ailearning.com
```

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目。

## 📄 许可证

MIT License

---

*本项目基于PRD.md文档开发，确保所有功能符合产品需求。*