import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Localized } from '@/components/localized'
import { sitePath } from '@/lib/site-path'

export const metadata: Metadata = {
  title: 'Vibrant: The Third Place — Qier Long',
  description:
    'An experience and graphic-design campaign for healthier social interactions in public transit.',
}

const deliverables = [
  {
    number: '01',
    title: { en: 'Listen before designing', zh: '从观察开始设计' },
    text: {
      en: 'A cultural-probe activity invited riders to recall moments when another person’s body language changed the meaning of an interaction. The responses made subtle, unintentional gestures tangible.',
      zh: '通过文化探针活动，邀请乘客回忆他人的肢体语言如何改变一次互动的感受，让无意识的非语言表达变得可见。',
    },
    image: '/work/vibrant/cultural-probe.png',
    alt: 'Cultural probe worksheets used in the Vibrant research activity',
  },
  {
    number: '02',
    title: { en: 'Turn transit into a third place', zh: '让公共交通成为第三空间' },
    text: {
      en: 'A playful poster series reframes the bus or subway as a shared social setting—one where awareness of posture, distance, and gesture can make a ride feel more welcoming.',
      zh: '海报将公交和地铁重新定义为共享的社交场所，让乘客意识到姿态、距离和动作如何创造更友好的乘车体验。',
    },
    image: '/work/vibrant/third-place-poster.png',
    alt: 'Third place poster explaining social interaction in transit',
  },
  {
    number: '03',
    title: { en: 'Carry the conversation forward', zh: '让对话延伸到旅程之外' },
    text: {
      en: 'Pocket-sized brochures introduce the campaign, explain its activities, and give passengers a take-away prompt for noticing their own role in the public space.',
      zh: '便携折页介绍活动与设计意图，并以互动提示引导乘客关注自己在公共空间中的角色。',
    },
    image: '/work/vibrant/brochure-spread.png',
    alt: 'Vibrant campaign brochure spread',
  },
]

const bookletImages = [
  {
    src: '/work/vibrant/booklet-cover-01.png',
    alt: 'Vibrant booklet cover and campaign introduction',
  },
  {
    src: '/work/vibrant/booklet-cover-02.png',
    alt: 'Alternate Vibrant booklet cover',
  },
  {
    src: '/work/vibrant/booklet-inside-01.png',
    alt: 'Vibrant booklet interior spread about the third place',
  },
  {
    src: '/work/vibrant/booklet-inside-02.png',
    alt: 'Vibrant booklet interior spread with transit prompts',
  },
]

const prototypeImages = [
  {
    src: '/work/vibrant/cultural-probe-prototype.png',
    alt: 'Vibrant cultural-probe prototype',
  },
  ...Array.from({ length: 9 }, (_, index) => ({
    src: `/work/vibrant/cultural-probe-${index + 1}.jpg`,
    alt: `Vibrant cultural-probe prototype documentation ${index + 1}`,
  })),
]

export default function VibrantDesignPage() {
  return (
    <main className="bg-[#fbf7f0] text-[#1d1b3a]">
      <section className="relative overflow-hidden bg-[#31256a] text-[#fffaf0]">
        <Image
          src="/work/vibrant/cover-presentation.png"
          overrideSrc={sitePath('/work/vibrant/cover-presentation.png')}
          alt="Vibrant project presentation cover"
          width={1536}
          height={1024}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Link href="/projects" className="text-sm text-[#fffaf0]/70 hover:text-[#fffaf0]">
            <Localized en="← All projects" zh="← 所有项目" />
          </Link>
          <div className="mt-20 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#fffaf0]/70">
              <Localized en="Experience Design · Graphic Design · 2024" zh="体验设计 · 平面设计 · 2024" />
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.93] md:text-7xl">
              Vibrant: The Third Place
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#fffaf0]/85 md:text-xl">
              <Localized
                en="A public-transit campaign that makes body language, shared space, and everyday connection more visible."
                zh="一项通过公共交通空间，让肢体语言、共享边界与日常连接变得更可见的设计活动。"
              />
            </p>
          </div>
          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-[#fffaf0]/30 pt-6 text-sm md:grid-cols-4">
            <div><dt className="text-[#fffaf0]/60"><Localized en="Format" zh="形式" /></dt><dd className="mt-1"><Localized en="Academic project" zh="学术项目" /></dd></div>
            <div><dt className="text-[#fffaf0]/60"><Localized en="Role" zh="职责" /></dt><dd className="mt-1"><Localized en="Experience & graphic designer" zh="体验与平面设计师" /></dd></div>
            <div><dt className="text-[#fffaf0]/60"><Localized en="Timeline" zh="周期" /></dt><dd className="mt-1">Sep–Dec 2024</dd></div>
            <div><dt className="text-[#fffaf0]/60"><Localized en="Mentors" zh="导师" /></dt><dd className="mt-1">Todd Linkner<br />Ashleigh Shield</dd></div>
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:px-10">
        <p className="text-sm uppercase tracking-[0.18em] text-[#e56e2d]"><Localized en="The opportunity" zh="设计机会" /></p>
        <div>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl"><Localized en="Public transit is more than the space between home and work." zh="公共交通不只是家与工作之间的通道。" /></h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1d1b3a]/75 md:text-lg"><Localized en="Words are only part of how people communicate. In the crowded, mobile setting of public transit, posture, proximity, and small gestures can shape whether a ride feels comfortable or awkward. Vibrant helps passengers notice these unintentional signals and practice a more considerate shared experience." zh="语言只是沟通的一部分。在拥挤而流动的公共交通中，姿态、距离与细微动作都会影响一段旅程是舒适还是尴尬。Vibrant 让乘客留意这些无意识的信号，并练习更体贴的共享体验。" /></p>
        </div>
      </section>

      <section className="bg-[#f5a545] px-6 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl"><Image src="/work/vibrant/ad-in-context.png" overrideSrc={sitePath('/work/vibrant/ad-in-context.png')} alt="Vibrant campaign in transit advertising displays" width={2555} height={1447} className="h-auto w-full shadow-2xl" /></div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 max-w-2xl"><p className="text-sm uppercase tracking-[0.18em] text-[#e56e2d]"><Localized en="Campaign system" zh="活动系统" /></p><h2 className="mt-4 font-serif text-3xl md:text-5xl"><Localized en="From a private reaction to a shared action." zh="从个人感受走向共享行动。" /></h2></div>
        <div className="grid gap-12">
          {deliverables.map((item, index) => (
            <article
              key={item.number}
              className="border-t border-[#1d1b3a]/15 pt-8"
            >
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className={index % 2 ? 'md:order-2' : ''}>
                  <span className="text-sm tracking-[0.18em] text-[#e56e2d]">
                    {item.number}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl">
                    <Localized en={item.title.en} zh={item.title.zh} />
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-[#1d1b3a]/75">
                    <Localized en={item.text.en} zh={item.text.zh} />
                  </p>
                </div>
                <Image
                  src={item.image}
                  overrideSrc={sitePath(item.image)}
                  alt={item.alt}
                  width={1800}
                  height={1200}
                  className={`h-auto w-full ${index % 2 ? 'md:order-1' : ''}`}
                />
              </div>

              {item.number === '03' && (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {bookletImages.map((booklet) => (
                    <Image
                      key={booklet.src}
                      src={booklet.src}
                      overrideSrc={sitePath(booklet.src)}
                      alt={booklet.alt}
                      width={3510}
                      height={2304}
                      className="h-auto w-full"
                    />
                  ))}
                </div>
              )}

              {item.number === '01' && (
                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {prototypeImages.map((prototype) => (
                    <Image
                      key={prototype.src}
                      src={prototype.src}
                      overrideSrc={sitePath(prototype.src)}
                      alt={prototype.alt}
                      width={1706}
                      height={925}
                      className="h-auto w-full bg-[#fbf7f0]"
                    />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1d1b3a] px-6 py-20 text-[#fffaf0] md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm uppercase tracking-[0.18em] text-[#fffaf0]/60"><Localized en="Poster series" zh="海报系统" /></p><h2 className="mt-4 font-serif text-3xl md:text-5xl"><Localized en="A visual language built for the journey." zh="为旅程而生的视觉语言。" /></h2></div><p className="max-w-sm text-sm leading-relaxed text-[#fffaf0]/75"><Localized en="Bold color fields, warm gestures, and direct prompts make the campaign legible in a fast-moving transit environment." zh="明快色彩、温暖动作与直接提示，让活动在快速流动的交通环境中依然清晰可读。" /></p></div>
          <div className="grid gap-5 md:grid-cols-3"><Image src="/work/vibrant/poster-purple.png" overrideSrc={sitePath('/work/vibrant/poster-purple.png')} alt="Purple Vibrant transit poster" width={2448} height={4032} className="h-auto w-full" /><Image src="/work/vibrant/poster-orange.png" overrideSrc={sitePath('/work/vibrant/poster-orange.png')} alt="Orange Vibrant transit poster" width={2448} height={4032} className="h-auto w-full" /><Image src="/work/vibrant/poster-blue.png" overrideSrc={sitePath('/work/vibrant/poster-blue.png')} alt="Blue Vibrant transit poster" width={2448} height={4032} className="h-auto w-full" /></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10"><Image src="/work/vibrant/brochure-stand.jpg" overrideSrc={sitePath('/work/vibrant/brochure-stand.jpg')} alt="Vibrant brochure placed in a transit brochure stand" width={3000} height={4000} className="h-auto w-full" /><div><p className="text-sm uppercase tracking-[0.18em] text-[#e56e2d]"><Localized en="In context" zh="落地场景" /></p><h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl"><Localized en="Designed to meet people where the ride happens." zh="在真实乘车场景中与乘客相遇。" /></h2><p className="mt-6 max-w-lg leading-relaxed text-[#1d1b3a]/75"><Localized en="The system spans station screens, interior advertisements, posters, and brochures—multiple touchpoints that invite participation without interrupting the ride." zh="系统涵盖站内屏幕、车厢广告、海报与折页，以多种触点邀请参与，同时不打扰乘客的旅程。" /></p><Link href="/projects" className="mt-8 inline-block border border-[#1d1b3a] px-5 py-3 text-sm transition-colors hover:bg-[#1d1b3a] hover:text-[#fffaf0]"><Localized en="Back to projects" zh="返回项目列表" /></Link></div></section>
      <section className="bg-[#f5a545] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#1d1b3a]/65">
              <Localized en="In motion" zh="过程影像" />
            </p>
            <video
              controls
              preload="metadata"
              poster={sitePath('/work/vibrant/ad-in-context.png')}
              className="mt-5 h-auto w-full bg-[#1d1b3a]"
            >
              <source
                src={sitePath('/work/vibrant/vibrant-process.mp4')}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </main>
  )
}
