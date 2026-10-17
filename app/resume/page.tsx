import type { Metadata } from 'next'
import Image from 'next/image'
import { Localized } from '@/components/localized'

export const metadata: Metadata = {
  title: 'Resume — Qier Long',
  description: 'Qier Long’s education, product-design experience, projects, and skills.',
}

type Translation = { en: string; zh: string }
type ResumeItem = { period: string; role: Translation; org: Translation; highlights: Translation[] }
const t = (en: string, zh: string): Translation => ({ en, zh })

const education: ResumeItem[] = [
  { period: 'May 2027', role: t('Master of Science in Information', '信息科学硕士（MSI）'), org: t('University of Michigan', '密歇根大学'), highlights: [t('User-Centered Agile Development concentration · GPA: 3.96/4.00.', '用户中心化敏捷开发方向；GPA：3.96/4.00。')] },
  { period: 'Dec 2024', role: t('Bachelor of Arts in Communication', '文学学士（传播学）'), org: t('Northeastern University', '美国东北大学'), highlights: [t('Graphic and Information Design · GPA: 3.60/4.00.', '平面与信息设计；GPA：3.60/4.00。')] },
]

const experience: ResumeItem[] = [
  { period: 'Jun 2026 — Aug 2026', role: t('Product Designer', '产品设计师'), org: t('JusTalk', 'JusTalk'), highlights: [
    t('Redesigned the paid VIP Talkie calling experience, defining interaction flows and high-fidelity screens for complex, high-frequency use cases.', '深度参与付费 VIP Talkie 通话功能升级，主导高频复杂场景的交互流程梳理与高保真界面设计。'),
    t('Reworked the information architecture for real-time voice changing, contact switching, and translation, with synchronized states across the app.', '针对实时变声、动态更改联系人和实时翻译等多线程功能重构信息架构，并打通与 App 其他模块的状态与视觉同步。'),
    t('Produced interaction prototypes and Design System specifications; partnered with product and engineering through reviews, implementation, and iteration.', '输出高保真交互原型与 Design System 规范，并协同产品、前后端团队完成评审、走查与版本迭代。'),
    t('Established visual guidelines and UI components; designed call-interaction effects and chat motion.', '负责 App 主题 UI 视觉设计与标准化组件，并设计通话互动特效和聊天动效体验。'),
  ] },
  { period: 'Sep 2023 — Dec 2023', role: t('Media Design Intern (Co-op)', '媒体设计实习生（Co-op）'), org: t('NetEase', '网易'), highlights: [
    t('Researched social-media trends and designed fan-interaction games and giveaway campaigns, helping sustain a 100K+ follower audience.', '结合社交媒体热点研究线上小游戏受欢迎度，设计粉丝互动游戏、抽奖活动等内容，助力账号巩固 10 万+粉丝规模。'),
    t('Created mascot animations and visual assets for videos that reached 100K+ reads and 10K+ likes in one month.', '独立完成品牌吉祥物系列动画及配套视觉元素设计，相关宣传视频上线一个月内获 10 万+阅读与 1 万+点赞。'),
    t('Contributed mascot merchandise to the visual plan for 50 New Year client gift boxes.', '参与新年礼盒整体视觉规划，完成 50 份客户赠礼礼盒中吉祥物衍生产品的设计工作。'),
  ] },
]

const projects: ResumeItem[] = [
  { period: 'Sep 2025 — Present', role: t('UX Designer', 'UX 设计师'), org: t('Kelsey Museum AR Interactive Design Project', 'Kelsey 博物馆 AR 互动设计项目'), highlights: [
    t('Studied virtual-exhibition patterns across 12 leading museums and proposed a mobile AR treasure-hunt experience.', '与设计团队调研全球 12 家头部博物馆虚拟展陈项目，提出移动端 AR 寻宝体验方案。'),
    t('Created mobile information architecture, wireframes, AR flows, and high-fidelity prototypes; the proposal became the team’s sole implementation prototype.', '独立完成移动端信息架构、线框图及 AR 交互流程设计，并制作高保真界面，方案成为团队唯一落地原型。'),
    t('Ran five rounds of age-segmented testing, iterated tutorials and a personal collection feature, and coordinated 3D artifact scan and AR-recognition implementation.', '组织 5 轮分年龄段用户测试，迭代引导教程与个人藏品库，并协同完成 3D 文物扫描模型导入和 AR 识别联调。'),
  ] },
  { period: 'Mar 2026 — Apr 2026', role: t('UX Designer', 'UX 设计师'), org: t('Saline Music Repair App Design', 'Saline Music Repair 应用设计'), highlights: [
    t('Identified unclear pricing, opaque repair progress, and inefficient communication through store visits and user interviews.', '通过门店走访与乐器用户深度访谈，梳理出维修流程中定价模糊、进度黑箱、沟通低效等痛点。'),
    t('Designed pricing, progress tracking, pickup navigation, and end-to-end flows from registration through payment.', '整合咨询查询、服务定价、进度跟踪与取件导航，并设计从注册登录到支付的全链路交互。'),
    t('Built a mobile design system with typography, color, card components, prototypes, and interaction documentation.', '建立统一的移动端设计规范，包含字体层级、色彩系统、卡片组件，并输出完整高保真原型与交互说明。'),
  ] },
  { period: 'Jan 2026 — Mar 2026', role: t('UX Designer', 'UX 设计师'), org: t('NYPD Pizza Website Redesign', 'NYPD 披萨店网站重设计'), highlights: [
    t('Benchmarked four competitors across navigation, ordering efficiency, and brand presentation.', '与另一名设计师协作，对标 Joe’s Pizza、Domino’s 等 4 家竞品，完成导航、点餐效率与品牌呈现的体验对标。'),
    t('Reorganized menu browsing, ordering, store information, and brand-story content; streamlined product-to-cart flows.', '重新梳理菜单浏览、在线点餐、门店信息与品牌故事四大板块，优化菜品分类、定制选项与加购路径。'),
    t('Delivered responsive designs for phone, tablet, and desktop with a New York–style visual language.', '完成手机、平板与桌面端的响应式设计，并强化贴合纽约风格披萨店定位的品牌视觉语言。'),
  ] },
  { period: 'Sep 2025 — Dec 2025', role: t('Product Researcher', '产品调研'), org: t('Salesforce AI Product Research', 'Salesforce AI 产品调研'), highlights: [
    t('Created a data-privacy research plan for Education Cloud AI with segmentation, interview guides, and an analysis framework.', '承接 Salesforce Education Cloud AI 产品数据隐私管理研究需求，设计包含用户分层、访谈提纲与分析框架的完整研究方案。'),
    t('Studied information-security practices at eight universities and five companies, then delivered three solution directions and a final research report.', '调研 8 所高校与 5 家企业的信息安全管理现状，提出 3 类针对性解决方案并交付完整研究报告。'),
  ] },
  { period: 'Sep 2025 — Dec 2025', role: t('Product Manager', '产品经理'), org: t('South China Morning Post Product Iteration', '南华早报产品迭代'), highlights: [
    t('Analyzed SCMP free-reading issues, identifying stale content and weak alignment with social trends as core user pain points.', '承接 SCMP App 产品优化需求，拆解新版免费阅读板块问题，挖掘内容滞后、脱离社会热点等核心体验痛点。'),
    t('Led target-user interviews and consolidated needs into an actionable requirements list and implementable improvement proposal.', '主导筛选核心目标用户并开展深度访谈，沉淀用户需求清单，结合业务目标形成可落地的产品迭代方案。'),
  ] },
]

const skillGroups = [
  { label: t('Design & Prototyping', '设计与原型制作'), items: t('Figma · Adobe Photoshop · Illustrator · InDesign · XD · After Effects · Procreate · Unity', 'Figma · Adobe Photoshop · Illustrator · InDesign · XD · After Effects · Procreate · Unity') },
  { label: t('Front-End Development', '前端开发'), items: t('Python · SQL · HTML · CSS · JavaScript · React.js', 'Python · SQL · HTML · CSS · JavaScript · React.js') },
  { label: t('User Research & UX Methods', '用户研究与 UX 方法'), items: t('User interviews · Inclusive UX testing · Personas · Wireframes · Accessibility evaluation', '用户访谈 · 包容性用户体验测试 · 用户画像 · 线框图 · 无障碍性评估') },
  { label: t('Languages', '语言能力'), items: t('English (GRE: 321) · Chinese (Native)', '英语（GRE：321）· 中文（母语）') },
]

const assessment = [
  t('Interdisciplinary background in information science and design communication, focused on user-centered design and technical awareness.', '拥有信息科学与设计传播跨学科背景，专注用户中心化设计方法，具备扎实的理论基础与技术认知。'),
  t('Full-lifecycle experience from user research and interaction design through delivery across multiple digital-product industries.', '参与过从用户调研、交互设计到落地交付的全流程项目，积累了多行业数字产品设计与研究经验。'),
  t('Detail-oriented and collaborative, with cross-functional communication, project-coordination, and rapid learning skills.', '具备良好的跨团队沟通与项目协调能力，注重细节与用户体验，能够快速学习并应用新技术。'),
]

function ResumeList({ items }: { items: ResumeItem[] }) {
  return <ul className="flex flex-col">{items.map((item) => <li key={`${item.org.en}-${item.period}`} className="grid grid-cols-1 gap-2 border-b border-border py-6 first:pt-0 md:grid-cols-[150px_1fr]"><span className="text-sm text-muted-foreground">{item.period}</span><div><h3 className="font-serif text-lg"><Localized en={item.role.en} zh={item.role.zh} /></h3><p className="text-sm text-accent"><Localized en={item.org.en} zh={item.org.zh} /></p><ul className="mt-3 flex list-disc flex-col gap-2 pl-4 text-sm leading-relaxed text-muted-foreground">{item.highlights.map((highlight) => <li key={highlight.en}><Localized en={highlight.en} zh={highlight.zh} /></li>)}</ul></div></li>)}</ul>
}

function ResumeSection({ title, children }: { title: Translation; children: React.ReactNode }) {
  return <section className="grid gap-x-12 gap-y-10 border-t border-border py-16 md:grid-cols-3"><h2 className="font-serif text-2xl md:text-3xl"><Localized en={title.en} zh={title.zh} /></h2><div className="md:col-span-2">{children}</div></section>
}

export default function ResumePage() {
  return <main className="mx-auto max-w-6xl px-6 md:px-10">
    <section className="border-b border-border py-16 md:py-20"><div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><p className="text-sm text-muted-foreground"><Localized en="Resume" zh="简历" /></p><h1 className="mt-4 font-serif text-4xl leading-[1.1] md:text-6xl">Qier Long</h1><p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"><Localized en="Product and UX designer based in Ningbo, China, with an interdisciplinary background in information science and design." zh="现居浙江省宁波市，拥有信息科学与设计跨学科背景的产品与 UX 设计师。" /></p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"><span><Localized en="Ningbo, Zhejiang, China" zh="浙江省宁波市" /></span><span><Localized en="Born Sep 2, 2001" zh="生日：2001 年 9 月 2 日" /></span><a href="mailto:longqi@umich.edu" className="hover:text-accent">longqi@umich.edu</a><a href="tel:+8618958215706" className="hover:text-accent">189 5821 5706</a></div><a href="/resume/qier-long-chinese-cv.pdf" download className="mt-6 inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground"><Localized en="Download Chinese CV" zh="下载中文简历" /></a></div><div className="relative h-40 w-32 shrink-0 overflow-hidden bg-muted grayscale"><Image src="/portrait.png" alt="Portrait of Qier Long" fill sizes="128px" className="object-cover" /></div></div></section>
    <ResumeSection title={t('Education', '教育背景')}><ResumeList items={education} /></ResumeSection>
    <ResumeSection title={t('Experience', '实习经历')}><ResumeList items={experience} /></ResumeSection>
    <ResumeSection title={t('Projects', '项目经历')}><ResumeList items={projects} /></ResumeSection>
    <ResumeSection title={t('Skills', '个人技能')}><dl className="flex flex-col gap-6">{skillGroups.map((group) => <div key={group.label.en}><dt className="text-xs uppercase tracking-widest text-muted-foreground"><Localized en={group.label.en} zh={group.label.zh} /></dt><dd className="mt-2 text-sm leading-relaxed"><Localized en={group.items.en} zh={group.items.zh} /></dd></div>)}</dl></ResumeSection>
    <ResumeSection title={t('Assessment', '自我评价')}><ul className="flex list-disc flex-col gap-3 pl-4 text-sm leading-relaxed text-muted-foreground">{assessment.map((item) => <li key={item.en}><Localized en={item.en} zh={item.zh} /></li>)}</ul></ResumeSection>
  </main>
}
