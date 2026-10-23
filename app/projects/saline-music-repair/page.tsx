import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Localized } from '@/components/localized'

export const metadata: Metadata = {
  title: 'Saline Music Repair App — Qier Long',
  description: 'A UX/UI case study for a local instrument repair service.',
}

const features = [
  {
    number: '01',
    title: { en: 'Start a repair request', zh: '发起维修申请' },
    text: {
      en: 'Instrument search and structured service options help customers describe what they need without relying on a phone call.',
      zh: '乐器搜索与结构化服务选项帮助用户清楚描述需求，减少对电话沟通的依赖。',
    },
    image: '/work/saline-music-repair/request.png',
  },
  {
    number: '02',
    title: { en: 'See the work in progress', zh: '查看维修进度' },
    text: {
      en: 'A task-based status view keeps repair details, technician contact, and updates visible throughout the service journey.',
      zh: '基于任务的状态页面将维修详情、技师联系方式与进度更新集中呈现。',
    },
    image: '/work/saline-music-repair/service.png',
  },
  {
    number: '03',
    title: { en: 'Pay with confidence', zh: '透明费用与付款' },
    text: {
      en: 'Itemized repair and storage fees make every charge clear before checkout, building trust in a traditionally opaque process.',
      zh: '维修费与保管费逐项展示，让用户在付款前清楚了解每一项费用。',
    },
    image: '/work/saline-music-repair/payment.png',
  },
]

export default function SalineMusicRepairPage() {
  return (
    <main className="bg-[#f5f3ef] text-[#162a72]">
      <section className="relative overflow-hidden bg-[#152a72] text-[#f8f5ed]">
        <Image
          src="/work/saline-music-repair/cover.png"
          alt="Saline Music Repair mobile app screens"
          width={2525}
          height={1415}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Link href="/projects" className="text-sm text-[#f8f5ed]/70 hover:text-[#f8f5ed]">
            <Localized en="← All projects" zh="← 所有项目" />
          </Link>
          <div className="mt-20 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#f8f5ed]/70">UX/UI Design · 2026</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">Saline Music Repair</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#f8f5ed]/85 md:text-xl">
              <Localized
                en="A clearer, calmer service experience for a local instrument repair business."
                zh="为本地乐器维修店打造更清晰、更安心的服务体验。"
              />
            </p>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-[#f8f5ed]/30 pt-6 text-sm md:grid-cols-4">
            <div><dt className="text-[#f8f5ed]/60"><Localized en="Client" zh="客户" /></dt><dd className="mt-1">Saline Music Repair</dd></div>
            <div><dt className="text-[#f8f5ed]/60"><Localized en="Role" zh="职责" /></dt><dd className="mt-1"><Localized en="UX Designer" zh="UX 设计师" /></dd></div>
            <div><dt className="text-[#f8f5ed]/60"><Localized en="Timeline" zh="周期" /></dt><dd className="mt-1">Mar–Apr 2026</dd></div>
            <div><dt className="text-[#f8f5ed]/60"><Localized en="Focus" zh="重点" /></dt><dd className="mt-1"><Localized en="Service clarity" zh="服务透明度" /></dd></div>
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:px-10">
        <p className="text-sm uppercase tracking-[0.18em] text-[#162a72]/60"><Localized en="The opportunity" zh="设计机会" /></p>
        <div>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl"><Localized en="Make every step of repair visible." zh="让维修过程的每一步都清晰可见。" /></h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#162a72]/75 md:text-lg"><Localized en="Instrument repair often depends on fragmented calls, unclear pricing, and uncertain pickup timing. Saline brings inquiries, a service-cost guide, repair tracking, payments, and pickup logistics into one mobile platform." zh="乐器维修常常依赖零散的电话沟通、模糊的价格信息与不确定的取件时间。Saline 将咨询、服务报价、维修追踪、付款与取件信息整合进一个移动平台。" /></p>
        </div>
      </section>

      <section className="bg-[#d9c29a] px-6 py-12 md:px-10 md:py-20"><div className="mx-auto max-w-6xl"><Image src="/work/saline-music-repair/scope.png" alt="Saline Music Repair service scope" width={2432} height={1322} className="h-auto w-full" /></div></section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 max-w-2xl"><p className="text-sm uppercase tracking-[0.18em] text-[#162a72]/60"><Localized en="Key flows" zh="核心流程" /></p><h2 className="mt-4 font-serif text-3xl md:text-5xl"><Localized en="One service, from request to pickup." zh="从维修申请到取件的一体化服务。" /></h2></div>
        <div className="grid gap-12">{features.map((feature, index) => <article key={feature.number} className="grid items-center gap-8 border-t border-[#162a72]/20 pt-8 md:grid-cols-2"><div className={index % 2 ? 'md:order-2' : ''}><span className="text-sm tracking-[0.18em] text-[#162a72]/60">{feature.number}</span><h3 className="mt-3 font-serif text-3xl"><Localized en={feature.title.en} zh={feature.title.zh} /></h3><p className="mt-4 max-w-md leading-relaxed text-[#162a72]/75"><Localized en={feature.text.en} zh={feature.text.zh} /></p></div><Image src={feature.image} alt="Saline Music Repair interface detail" width={1680} height={1088} className="h-auto w-full" /></article>)}</div>
      </section>

      <section className="bg-[#152a72] px-6 py-20 text-[#f8f5ed] md:px-10"><div className="mx-auto max-w-6xl"><div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm uppercase tracking-[0.18em] text-[#f8f5ed]/60"><Localized en="Final interface" zh="最终界面" /></p><h2 className="mt-4 font-serif text-3xl md:text-5xl"><Localized en="Designed for clarity at a glance." zh="一眼看清每一个关键信息。" /></h2></div><p className="max-w-sm text-sm leading-relaxed text-[#f8f5ed]/75"><Localized en="A consistent system connects home, status, service selection, billing, and payment screens." zh="统一的设计系统连接首页、进度、服务选择、账单与付款页面。" /></p></div><Image src="/work/saline-music-repair/screens.png" alt="Saline Music Repair final mobile screens" width={3442} height={2063} className="h-auto w-full" /></div></section>

      <section className="px-6 py-20 md:px-10"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="text-sm uppercase tracking-[0.18em] text-[#162a72]/60"><Localized en="Outcome" zh="成果" /></p><h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-5xl"><Localized en="A repair service that feels as carefully handled as the instrument itself." zh="像对待乐器一样，细致地对待每一次维修服务。" /></h2></div><Link href="/projects" className="border border-[#162a72] px-5 py-3 text-sm transition-colors hover:bg-[#162a72] hover:text-[#f8f5ed]"><Localized en="Back to projects" zh="返回项目列表" /></Link></div></section>
    </main>
  )
}
