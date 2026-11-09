import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Localized } from '@/components/localized'
import { sitePath } from '@/lib/site-path'

export const metadata: Metadata = {
  title: 'Kelsey Dex — Qier Long',
  description:
    'An AR museum experience that turns artifact discovery into a story-driven collection adventure.',
}

const flows = [
  {
    number: '01',
    title: { en: 'Scan artifacts to unlock the world', zh: '扫描文物，解锁探索世界' },
    text: {
      en: 'The scanner turns the physical exhibition into the first interaction. Visitors point their camera at an artifact to unlock the introduction and historical characters.',
      zh: '扫描器把实体展览变成第一次互动。参观者将相机对准文物，解锁介绍内容与历史人物。',
    },
    image: '/work/kelsey-museum/frame-2.png',
  },
  {
    number: '02',
    title: { en: 'Learn, quiz, and follow the collection', zh: '学习、答题并继续探索收藏' },
    text: {
      en: 'Artifact descriptions pair origin maps and quizzes with related objects, giving visitors a clear next step and a reason to keep looking.',
      zh: '文物说明将来源地图与答题结合，并推荐相关藏品，让参观者知道下一步去哪里、继续寻找什么。',
    },
    image: '/work/kelsey-museum/frame-3.png',
  },
  {
    number: '03',
    title: { en: 'Meet the character behind the objects', zh: '认识文物背后的历史人物' },
    text: {
      en: 'Character pages connect individual artifacts to a person and their everyday life, making the collection feel like a story rather than a list of objects.',
      zh: '人物页面将一件件文物连接到具体人物与日常生活，让收藏成为故事，而不只是物品清单。',
    },
    image: '/work/kelsey-museum/frame-4.png',
  },
  {
    number: '04',
    title: { en: 'Unlock the life story', zh: '解锁人物生活故事' },
    text: {
      en: 'Collecting enough related artifacts reveals a comic about the character’s life, rewarding curiosity with a memorable narrative.',
      zh: '集齐足够的相关文物后，应用会解锁人物生活漫画，用一段难忘的叙事奖励持续探索。',
    },
    image: '/work/kelsey-museum/frame-5.png',
  },
  {
    number: '05',
    title: { en: 'Load the artifact database', zh: '加载文物数据库' },
    text: {
      en: 'A searchable artifact database keeps the experience useful beyond the collection game, with clear metadata, images, and object context.',
      zh: '可浏览的文物数据库让体验不止于收藏游戏，通过清晰的元数据、图片与背景信息持续支持学习。',
    },
    image: '/work/kelsey-museum/frame-6.png',
  },
]

export default function KelseyMuseumPage() {
  return (
    <main className="bg-[#fff8e9] text-[#54270f]">
      <section className="relative overflow-hidden bg-[#7e2808] text-[#fff8e9]">
        <Image
          src="/work/kelsey-museum/kelsey-dex-tablet-p.png"
          overrideSrc={sitePath('/work/kelsey-museum/kelsey-dex-tablet-p.png')}
          alt="Kelsey Dex tablet experience in the museum"
          width={1024}
          height={1024}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Link href="/projects" className="text-sm text-[#fff8e9]/70 hover:text-[#fff8e9]">
            <Localized en="← All projects" zh="← 所有项目" />
          </Link>
          <div className="mt-20 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#fff8e9]/70">
              <Localized en="UX/UI Design · Experience Design · 2026" zh="UX/UI 设计 · 体验设计 · 2026" />
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.93] md:text-7xl">
              Kelsey Dex
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#fff8e9]/85 md:text-xl">
              <Localized
                en="A museum artifact Pokédex that turns a visit to ancient Rome into a collection-driven adventure."
                zh="一款博物馆文物图鉴应用，把古罗马展览变成一场以收藏为驱动的探索冒险。"
              />
            </p>
          </div>
          <dl className="mt-12 grid max-w-4xl grid-cols-2 gap-6 border-t border-[#fff8e9]/30 pt-6 text-sm md:grid-cols-4">
            <div><dt className="text-[#fff8e9]/60"><Localized en="Client" zh="客户" /></dt><dd className="mt-1">Kelsey Museum</dd></div>
            <div><dt className="text-[#fff8e9]/60"><Localized en="Role" zh="职责" /></dt><dd className="mt-1"><Localized en="UX/UI & experience designer" zh="UX/UI 与体验设计师" /></dd></div>
            <div><dt className="text-[#fff8e9]/60"><Localized en="Team" zh="团队" /></dt><dd className="mt-1"><Localized en="4 designers" zh="4 人设计团队" /></dd></div>
            <div><dt className="text-[#fff8e9]/60"><Localized en="Timeline" zh="周期" /></dt><dd className="mt-1">Oct 2025–Apr 2026</dd></div>
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:px-10">
        <p className="text-sm uppercase tracking-[0.18em] text-[#c65419]"><Localized en="The opportunity" zh="设计机会" /></p>
        <div>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">
            <Localized en="Make museum learning feel like discovery." zh="让博物馆学习重新拥有发现感。" />
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#54270f]/75 md:text-lg">
            <Localized
              en="Traditional exhibit labels can make Roman history feel distant and passive. Kelsey Dex gives visitors a reason to move, look closely, and build a collection. Each scan reveals an artifact, a 3D experience, and a piece of a character’s everyday story."
              zh="传统展签容易让罗马历史显得遥远而被动。Kelsey Dex 鼓励参观者移动、观察并建立自己的收藏。每次扫描都会解锁一件文物、一次 3D 体验，以及一个历史人物日常故事的片段。"
            />
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#c65419]"><Localized en="The experience" zh="体验流程" /></p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            <Localized en="A guided journey from curiosity to connection." zh="从好奇到连接的引导式旅程。" />
          </h2>
        </div>
        <div className="grid gap-12">
          {flows.map((flow, index) => (
            <article key={flow.number} className="grid items-center gap-8 border-t border-[#54270f]/20 pt-8 md:grid-cols-2">
              <div className={index % 2 ? 'md:order-2' : ''}>
                <span className="text-sm tracking-[0.18em] text-[#c65419]">{flow.number}</span>
                <h3 className="mt-3 font-serif text-3xl"><Localized en={flow.title.en} zh={flow.title.zh} /></h3>
                <p className="mt-4 max-w-md leading-relaxed text-[#54270f]/75"><Localized en={flow.text.en} zh={flow.text.zh} /></p>
              </div>
              <Image
                src={flow.image}
                overrideSrc={sitePath(flow.image)}
                alt={flow.title.en}
                width={1600}
                height={1200}
                className="h-auto max-h-[620px] w-full object-contain"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#14213d] px-6 py-20 text-[#fff8e9] md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#f3b51b]"><Localized en="Collect to reveal" zh="收藏并解锁" /></p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl"><Localized en="Every artifact opens another story." zh="每件文物都打开一段新的故事。" /></h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#fff8e9]/70">
              <Localized en="When a character’s complete set is collected, visitors unlock a comic about Roman daily life—and a reason to keep exploring." zh="集齐一个角色的文物后，参观者将解锁一篇关于罗马日常生活的漫画，也获得继续探索的理由。" />
            </p>
          </div>
          <Image src="/work/kelsey-museum/frame-5.png" overrideSrc={sitePath('/work/kelsey-museum/frame-5.png')} alt="Kelsey Dex life story unlocked screen" width={1134} height={1134} className="mx-auto h-auto max-h-[720px] w-full object-contain" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#c65419]"><Localized en="Making the prototype" zh="原型制作" /></p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl"><Localized en="A collaborative system for an interactive museum." zh="为互动博物馆体验搭建协作系统。" /></h2>
        </div>
        <div className="space-y-5 leading-relaxed text-[#54270f]/75">
          <p><Localized en="Working with a four-person UX/UI team, I contributed to sketches, interface prototypes, and user interviews with museum stakeholders. We used Figma Make to explore the front-end experience and 8th Wall to prototype artifact models and AR interactions." zh="我与四人 UX/UI 团队共同完成草图、界面原型，并通过与博物馆相关方访谈持续优化收集式玩法。我们使用 Figma Make 探索前端体验，并使用 8th Wall 制作文物模型与 AR 交互原型。" /></p>
          <p><Localized en="The result connects the physical exhibition to a digital story layer without asking visitors to stop being curious. The interface stays light and playful, while the content gives each object a human context." zh="最终体验将实体展览与数字故事层连接起来，同时保留参观者主动探索的乐趣。界面轻盈而有趣，内容则为每件文物补充了具有人情味的背景。" /></p>
        </div>
      </section>

      <section className="bg-[#f3b51b] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Image src="/work/kelsey-museum/frame-6.png" overrideSrc={sitePath('/work/kelsey-museum/frame-6.png')} alt="Kelsey Dex museum artifact database screen" width={1134} height={1134} className="mx-auto h-auto max-h-[760px] w-full object-contain" />
          <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#54270f]/60"><Localized en="Outcome" zh="成果" /></p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-5xl"><Localized en="A museum visit that continues after the scan." zh="一次扫描之后，博物馆体验仍在继续。" /></h2>
            </div>
            <Link href="/projects" className="border border-[#54270f] px-5 py-3 text-sm transition-colors hover:bg-[#54270f] hover:text-[#fff8e9]"><Localized en="Back to projects" zh="返回项目列表" /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
