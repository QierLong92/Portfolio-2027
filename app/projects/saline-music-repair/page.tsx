import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Localized } from '@/components/localized'
import { sitePath } from '@/lib/site-path'

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
    images: [
      '/work/saline-music-repair/step-1.png',
      '/work/saline-music-repair/step-2.png',
    ],
  },
  {
    number: '02',
    title: { en: 'See the work in progress', zh: '查看维修进度' },
    text: {
      en: 'A task-based status view keeps repair details, technician contact, and updates visible throughout the service journey.',
      zh: '基于任务的状态页面将维修详情、技师联系方式与进度更新集中呈现。',
    },
    images: ['/work/saline-music-repair/step-3.png'],
  },
  {
    number: '03',
    title: { en: 'Pay with confidence', zh: '透明费用与付款' },
    text: {
      en: 'Itemized repair and storage fees make every charge clear before checkout, building trust in a traditionally opaque process.',
      zh: '维修费与保管费逐项展示，让用户在付款前清楚了解每一项费用。',
    },
    images: ['/work/saline-music-repair/step-4.png'],
  },
]

export default function SalineMusicRepairPage() {
  return (
    <main className="bg-[#f5f3ef] text-[#162a72]">
      <section className="relative overflow-hidden bg-[#152a72] text-[#f8f5ed]">
        <Image
          src="/work/saline-music-repair/prototypemobile-app.png"
          overrideSrc={sitePath('/work/saline-music-repair/prototypemobile-app.png')}
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

      <section className="bg-[#d9c29a] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#162a72]/60">
            <Localized en="Service scope" zh="服务范围" />
          </p>
          <div className="mt-12 grid gap-12 md:grid-cols-4 md:gap-8">
            {[
              {
                image: '/work/saline-music-repair/decorative.png',
                title: 'Status',
                text: 'Users could see whether their instrument had been repaired and was ready for pickup.',
                zhTitle: '状态',
                zhText: '用户可以查看乐器是否已经维修完成，以及是否可以取件。',
              },
              {
                image: '/work/saline-music-repair/decorative-1.png',
                title: 'Services and pricing',
                text: 'Users could select basic repair services and view the price range.',
                zhTitle: '服务与价格',
                zhText: '用户可以选择基础维修服务，并查看价格范围。',
              },
              {
                image: '/work/saline-music-repair/decorative-2.png',
                title: 'Pickup locations',
                text: 'Users could select where to pick up their instrument, including locations in cities near Saline.',
                zhTitle: '取件地点',
                zhText: '用户可以选择取件地点，也可以在 Saline 附近城市的地点取件。',
              },
              {
                image: '/work/saline-music-repair/decorative-3.png',
                title: 'Contact',
                text: 'Users could contact the repair specialist about service details.',
                zhTitle: '联系',
                zhText: '用户可以联系维修人员，了解服务详情。',
              },
            ].map((item) => (
              <div key={item.title}>
                <Image
                  src={item.image}
                  overrideSrc={sitePath(item.image)}
                  alt=""
                  width={169}
                  height={113}
                  className="h-auto w-auto"
                />
                <h3 className="mt-6 font-serif text-2xl">
                  <Localized en={item.title} zh={item.zhTitle} />
                </h3>
                <p className="mt-4 leading-relaxed text-[#162a72]/75">
                  <Localized en={item.text} zh={item.zhText} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.18em] text-[#162a72]/60">
            <Localized en="Design system" zh="设计系统" />
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            <Localized en="A flexible visual language for every service touchpoint." zh="为每个服务触点建立灵活统一的视觉语言。" />
          </h2>
        </div>
        <div className="grid gap-10">
          <div className="grid gap-10 md:grid-cols-2">
            <Image src="/work/saline-music-repair/primary.png" overrideSrc={sitePath('/work/saline-music-repair/primary.png')} alt="Saline primary color system" width={1680} height={1088} className="h-auto w-full" />
            <Image src="/work/saline-music-repair/secondary.png" overrideSrc={sitePath('/work/saline-music-repair/secondary.png')} alt="Saline secondary color system" width={1680} height={1088} className="h-auto w-full" />
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <Image src="/work/saline-music-repair/typeface.png" overrideSrc={sitePath('/work/saline-music-repair/typeface.png')} alt="Saline primary typeface" width={1216} height={668} className="h-auto w-full" />
            <Image src="/work/saline-music-repair/typeface-1.png" overrideSrc={sitePath('/work/saline-music-repair/typeface-1.png')} alt="Saline secondary typeface" width={1216} height={668} className="h-auto w-full" />
          </div>
          <Image src="/work/saline-music-repair/card-components.png" overrideSrc={sitePath('/work/saline-music-repair/card-components.png')} alt="Saline card components" width={1494} height={833} className="mx-auto h-auto w-full max-w-4xl" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 max-w-2xl"><p className="text-sm uppercase tracking-[0.18em] text-[#162a72]/60"><Localized en="Key flows" zh="核心流程" /></p><h2 className="mt-4 font-serif text-3xl md:text-5xl"><Localized en="One service, from request to pickup." zh="从维修申请到取件的一体化服务。" /></h2></div>
        <div className="grid gap-12">{features.map((feature, index) => <article key={feature.number} className="grid items-center gap-8 border-t border-[#162a72]/20 pt-8 md:grid-cols-2"><div className={index % 2 ? 'md:order-2' : ''}><span className="text-sm tracking-[0.18em] text-[#162a72]/60">{feature.number}</span><h3 className="mt-3 font-serif text-3xl"><Localized en={feature.title.en} zh={feature.title.zh} /></h3><p className="mt-4 max-w-md leading-relaxed text-[#162a72]/75"><Localized en={feature.text.en} zh={feature.text.zh} /></p></div><div className={`grid gap-4 ${index % 2 ? 'md:order-1' : ''}`}>{feature.images.map((image) => <Image key={image} src={image} overrideSrc={sitePath(image)} alt="Saline Music Repair interface detail" width={1016} height={980} className="h-auto w-full" />)}</div></article>)}</div>
      </section>

      <section className="bg-[#152a72] px-6 py-20 text-[#f8f5ed] md:px-10"><div className="mx-auto max-w-6xl"><div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm uppercase tracking-[0.18em] text-[#f8f5ed]/60"><Localized en="Final interface" zh="最终界面" /></p><h2 className="mt-4 font-serif text-3xl md:text-5xl"><Localized en="Designed for clarity at a glance." zh="一眼看清每一个关键信息。" /></h2></div><p className="max-w-sm text-sm leading-relaxed text-[#f8f5ed]/75"><Localized en="A consistent system connects home, status, service selection, billing, and payment screens." zh="统一的设计系统连接首页、进度、服务选择、账单与付款页面。" /></p></div><Image src="/work/saline-music-repair/screens.png" overrideSrc={sitePath('/work/saline-music-repair/screens.png')} alt="Saline Music Repair final mobile screens" width={3442} height={2063} className="h-auto w-full" /></div></section>

      <section className="px-6 py-20 md:px-10"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="text-sm uppercase tracking-[0.18em] text-[#162a72]/60"><Localized en="Outcome" zh="成果" /></p><h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-5xl"><Localized en="A repair service that feels as carefully handled as the instrument itself." zh="像对待乐器一样，细致地对待每一次维修服务。" /></h2></div><div className="flex flex-col items-start gap-5"><a href="https://www.figma.com/proto/kEJsOaXaPLz60SMm2Iz6KC/SI-611-Final-individual-assignment?node-id=35-6&t=O6HilnuPWkejruiY-1&scaling=scale-down&content-scaling=fixed&page-id=35%3A3&starting-point-node-id=35%3A6" target="_blank" rel="noreferrer" className="bg-[#162a72] px-7 py-4 text-base font-medium text-[#f8f5ed] transition-opacity hover:opacity-85 md:px-8 md:py-5 md:text-lg"><Localized en="View prototype" zh="查看原型" /></a><Link href="/projects" className="text-sm underline underline-offset-4 transition-opacity hover:opacity-70"><Localized en="Back to projects" zh="返回项目列表" /></Link></div></div></section>
    </main>
  )
}
