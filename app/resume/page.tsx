import type { Metadata } from 'next'
import Image from 'next/image'
import { Localized } from '@/components/localized'

export const metadata: Metadata = {
  title: 'Resume — Qier Long',
  description: 'Qier Long’s design experience, skills, and honors.',
}

const experience = [
  {
    period: '2023 — Now',
    role: { en: 'Independent Designer', zh: '独立设计师' },
    org: { en: 'Freelance', zh: '自由职业' },
    desc: { en: 'Providing visual identity, information design and product design services for brands and institutions.', zh: '为品牌与机构提供视觉识别、信息设计与产品设计服务。' },
  },
  {
    period: '2021 — 2023',
    role: { en: 'Senior Designer', zh: '高级设计师' },
    org: { en: 'Studio Meridian', zh: '子午线工作室' },
    desc: { en: 'Led multiple brand and digital product projects, building and maintaining design systems.', zh: '主导多个品牌与数字产品项目，建立并维护设计系统。' },
  },
  {
    period: '2019 — 2021',
    role: { en: 'Designer', zh: '设计师' },
    org: { en: 'Northlight Agency', zh: '北光创意机构' },
    desc: { en: 'Designed and shipped editorial layouts, infographics and web interfaces.', zh: '参与编辑排版、信息图与网页界面的设计与落地。' },
  },
]

const education = [
  {
    period: '2015 — 2019',
    role: { en: 'BFA, Visual Communication Design', zh: '视觉传达设计学士' },
    org: { en: 'China Central Academy of Fine Arts', zh: '中央美术学院' },
    desc: { en: 'Bachelor of Fine Arts in Visual Communication Design.', zh: '视觉传达设计艺术学士学位。' },
  },
]

const skills = [
  ['Brand Identity', '品牌识别'], ['Typography', '字体设计'], ['Editorial Layout', '编辑排版'],
  ['Information Design', '信息设计'], ['Data Visualization', '数据可视化'], ['UI/UX Design', 'UI/UX 设计'],
  ['Design Systems', '设计系统'], ['Figma', 'Figma'], ['Adobe CC', 'Adobe CC'], ['Bookbinding', '书籍装帧'],
]

const awards = [
  { year: '2024', title: ['D&AD Wood Pencil', 'D&AD 木铅笔奖'], note: ['Echo Festival', 'Echo 音乐节'] },
  { year: '2023', title: ['Type Directors Club Selection', '字体指导俱乐部入选'], note: ['Type Poster Study', '字体海报研究'] },
  { year: '2022', title: ['Kantar Information is Beautiful Award', 'Kantar 信息之美奖'], note: ['City Breath Atlas', '城市呼吸数据图谱'] },
]

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      {/* Header */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground"><Localized en="Resume" zh="简历" /></p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] md:text-6xl">
              Qier Long
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              <Localized en="Multidisciplinary designer based in Shanghai, focused on graphic, information and UI/UX design." zh="现居上海的跨学科设计师，专注于平面、信息与 UI/UX 设计。" />
            </p>
            <a
              href="mailto:hello@linlan.design"
              className="mt-6 inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground"
            >
              <Localized en="Download CV" zh="下载简历" />
            </a>
          </div>
          <div className="relative h-40 w-32 shrink-0 overflow-hidden bg-muted grayscale">
            <Image
              src="/portrait.png"
              alt="Portrait of Qier Long"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience + Education */}
      <section className="grid gap-x-12 gap-y-16 py-16 md:grid-cols-3">
        <h2 className="font-serif text-2xl md:text-3xl">
          <Localized en="Experience" zh="经历" />
        </h2>
        <div className="md:col-span-2">
          <ul className="flex flex-col">
            {experience.map((item) => (
              <li
                key={item.role.en}
                className="grid grid-cols-1 gap-2 border-b border-border py-6 first:pt-0 md:grid-cols-[140px_1fr]"
              >
                <span className="text-sm text-muted-foreground">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-serif text-lg"><Localized en={item.role.en} zh={item.role.zh} /></h3>
                  <p className="text-sm text-accent"><Localized en={item.org.en} zh={item.org.zh} /></p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <Localized en={item.desc.en} zh={item.desc.zh} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-x-12 gap-y-16 border-t border-border py-16 md:grid-cols-3">
        <h2 className="font-serif text-2xl md:text-3xl">
          <Localized en="Education" zh="教育" />
        </h2>
        <div className="md:col-span-2">
          <ul className="flex flex-col">
            {education.map((item) => (
              <li
                key={item.role.en}
                className="grid grid-cols-1 gap-2 border-b border-border py-6 first:pt-0 md:grid-cols-[140px_1fr]"
              >
                <span className="text-sm text-muted-foreground">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-serif text-lg"><Localized en={item.role.en} zh={item.role.zh} /></h3>
                  <p className="text-sm text-accent"><Localized en={item.org.en} zh={item.org.zh} /></p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <Localized en={item.desc.en} zh={item.desc.zh} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="grid gap-x-12 gap-y-8 border-t border-border py-16 md:grid-cols-3">
        <h2 className="font-serif text-2xl md:text-3xl">
          <Localized en="Skills" zh="技能" />
        </h2>
        <div className="flex flex-wrap gap-2 md:col-span-2">
          {skills.map(([en, zh]) => (
            <span
              key={en}
              className="border border-border px-3 py-1.5 text-sm text-muted-foreground"
            >
              <Localized en={en} zh={zh} />
            </span>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="grid gap-x-12 gap-y-8 border-t border-border py-16 md:grid-cols-3">
        <h2 className="font-serif text-2xl md:text-3xl">
          <Localized en="Awards" zh="荣誉" />
        </h2>
        <div className="md:col-span-2">
          <ul className="flex flex-col">
            {awards.map((item) => (
              <li
                key={item.title[0]}
                className="grid grid-cols-[60px_1fr] gap-4 border-b border-border py-5 first:pt-0"
              >
                <span className="text-sm text-muted-foreground">
                  {item.year}
                </span>
                <div className="flex flex-col">
                  <span className="font-serif text-lg"><Localized en={item.title[0]} zh={item.title[1]} /></span>
                  <span className="text-sm text-muted-foreground">
                    <Localized en={item.note[0]} zh={item.note[1]} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
