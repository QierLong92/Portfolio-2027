import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '简历 Resume — 林澜 Lin Lan',
  description: '林澜的设计履历、经历、技能与荣誉。',
}

const experience = [
  {
    period: '2023 — Now',
    role: 'Independent Designer 独立设计师',
    org: 'Freelance · 自由职业',
    desc: 'Providing visual identity, information design and product design services for brands and institutions. 为品牌与机构提供视觉识别、信息设计与产品设计服务。',
  },
  {
    period: '2021 — 2023',
    role: 'Senior Designer 高级设计师',
    org: 'Studio Meridian',
    desc: 'Led multiple brand and digital product projects, building and maintaining design systems. 主导多个品牌与数字产品项目，建立并维护设计系统。',
  },
  {
    period: '2019 — 2021',
    role: 'Designer 设计师',
    org: 'Northlight Agency',
    desc: 'Designed and shipped editorial layouts, infographics and web interfaces. 参与编辑排版、信息图与网页界面的设计与落地。',
  },
]

const education = [
  {
    period: '2015 — 2019',
    role: 'BFA, Visual Communication Design 视觉传达设计 学士',
    org: 'China Central Academy of Fine Arts · 中央美术学院',
    desc: 'Bachelor of Fine Arts in Visual Communication Design.',
  },
]

const skills = [
  'Brand Identity',
  'Typography',
  'Editorial Layout',
  'Information Design',
  'Data Visualization',
  'UI/UX Design',
  'Design Systems',
  'Figma',
  'Adobe CC',
  'Bookbinding',
]

const awards = [
  { year: '2024', title: 'D&AD Wood Pencil 木铅笔', note: 'Echo Festival' },
  { year: '2023', title: 'Type Directors Club Selection 入选', note: 'Type Poster Study' },
  { year: '2022', title: 'Kantar Information is Beautiful Award 信息之美奖', note: 'City Breath Atlas' },
]

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      {/* Header */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Resume · 简历</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] md:text-6xl">
              Lin Lan 林澜
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Multidisciplinary designer based in Shanghai, focused on graphic,
              information and UI/UX design. 跨学科设计师，现居上海。
            </p>
            <a
              href="mailto:hello@linlan.design"
              className="mt-6 inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground"
            >
              Download CV 下载简历
            </a>
          </div>
          <div className="relative h-40 w-32 shrink-0 overflow-hidden bg-muted grayscale">
            <Image
              src="/portrait.png"
              alt="Portrait of Lin Lan"
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
          Experience
          <span className="mt-1 block text-sm text-muted-foreground">经历</span>
        </h2>
        <div className="md:col-span-2">
          <ul className="flex flex-col">
            {experience.map((item) => (
              <li
                key={item.role}
                className="grid grid-cols-1 gap-2 border-b border-border py-6 first:pt-0 md:grid-cols-[140px_1fr]"
              >
                <span className="text-sm text-muted-foreground">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-serif text-lg">{item.role}</h3>
                  <p className="text-sm text-accent">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-x-12 gap-y-16 border-t border-border py-16 md:grid-cols-3">
        <h2 className="font-serif text-2xl md:text-3xl">
          Education
          <span className="mt-1 block text-sm text-muted-foreground">教育</span>
        </h2>
        <div className="md:col-span-2">
          <ul className="flex flex-col">
            {education.map((item) => (
              <li
                key={item.role}
                className="grid grid-cols-1 gap-2 border-b border-border py-6 first:pt-0 md:grid-cols-[140px_1fr]"
              >
                <span className="text-sm text-muted-foreground">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-serif text-lg">{item.role}</h3>
                  <p className="text-sm text-accent">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
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
          Skills
          <span className="mt-1 block text-sm text-muted-foreground">技能</span>
        </h2>
        <div className="flex flex-wrap gap-2 md:col-span-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-border px-3 py-1.5 text-sm text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="grid gap-x-12 gap-y-8 border-t border-border py-16 md:grid-cols-3">
        <h2 className="font-serif text-2xl md:text-3xl">
          Awards
          <span className="mt-1 block text-sm text-muted-foreground">荣誉</span>
        </h2>
        <div className="md:col-span-2">
          <ul className="flex flex-col">
            {awards.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[60px_1fr] gap-4 border-b border-border py-5 first:pt-0"
              >
                <span className="text-sm text-muted-foreground">
                  {item.year}
                </span>
                <div className="flex flex-col">
                  <span className="font-serif text-lg">{item.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.note}
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
