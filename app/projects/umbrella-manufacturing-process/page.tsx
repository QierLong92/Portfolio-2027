import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Localized } from '@/components/localized'
import { sitePath } from '@/lib/site-path'

export const metadata: Metadata = {
  title: 'Umbrella Manufacturing Process — Qier Long',
  description:
    'An illustrated information-design guide to the materials, structure, and assembly of an umbrella.',
}

const stages = Array.from({ length: 10 }, (_, index) => ({
  src: `/work/umbrella-manufacturing/transparent/step-${String(index + 1).padStart(2, '0')}.png`,
  alt: `Illustrated umbrella manufacturing stage ${index + 1}`,
}))

const structures = [
  {
    src: '/work/umbrella-manufacturing/structure%201.png',
    alt: 'Umbrella component structure diagram',
  },
  {
    src: '/work/umbrella-manufacturing/structure%202.png',
    alt: 'Umbrella frame structure diagram',
  },
  {
    src: '/work/umbrella-manufacturing/structure%203.png',
    alt: 'Umbrella structural assembly diagram',
  },
  {
    src: '/work/umbrella-manufacturing/structure%204.png',
    alt: 'Umbrella construction detail diagram',
  },
]

function ProjectImage({
  src,
  alt,
  className = '',
  width = 2200,
  height = 1600,
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}) {
  return (
    <Image
      src={src}
      overrideSrc={sitePath(src)}
      alt={alt}
      width={width}
      height={height}
      className={`h-auto w-full ${className}`}
    />
  )
}

export default function UmbrellaManufacturingProcessPage() {
  return (
    <main className="bg-[#f7f6f1] text-[#252124]">
      <section className="overflow-hidden bg-[#302b2e] text-[#fffdf7]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-[1.2fr_0.8fr]">
          <div className="px-6 py-20 md:px-10 md:py-28">
          <Link href="/projects" className="text-sm text-[#fffdf7]/70 hover:text-[#fffdf7]">
            <Localized en="← All projects" zh="← 所有项目" />
          </Link>
          <div className="mt-20 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#fffdf7]/65">
              <Localized en="Graphic Design · Information Design · 2026" zh="平面设计 · 信息设计 · 2026" />
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.93] md:text-7xl">
              <Localized en="Umbrella Manufacturing Process" zh="雨伞制造工艺" />
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#fffdf7]/85 md:text-xl">
              <Localized
                en="An illustrated guide that turns the hidden materials, mechanisms, and sequence behind an everyday umbrella into a clear visual story."
                zh="将一把日常雨伞背后的材料、机械结构与生产步骤，转化为清晰易读的视觉叙事。"
              />
            </p>
          </div>
          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-[#fffdf7]/25 pt-6 text-sm md:grid-cols-4">
            <div><dt className="text-[#fffdf7]/55"><Localized en="Format" zh="形式" /></dt><dd className="mt-1"><Localized en="Illustrated guide" zh="插画信息图" /></dd></div>
            <div><dt className="text-[#fffdf7]/55"><Localized en="Role" zh="职责" /></dt><dd className="mt-1"><Localized en="Graphic & information designer" zh="平面与信息设计" /></dd></div>
            <div><dt className="text-[#fffdf7]/55"><Localized en="Focus" zh="重点" /></dt><dd className="mt-1"><Localized en="Process visualization" zh="工艺可视化" /></dd></div>
            <div><dt className="text-[#fffdf7]/55"><Localized en="Year" zh="年份" /></dt><dd className="mt-1">2026</dd></div>
          </dl>
          </div>
          <div className="flex items-center justify-center border-t border-[#fffdf7]/15 bg-[#bd806f] p-8 md:border-l md:border-t-0 md:p-12">
            <ProjectImage
              src="/work/umbrella-manufacturing/cover-presentation.png"
              alt="Umbrella manufacturing project presentation cover"
              width={1536}
              height={1024}
              className="max-w-[32rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:px-10">
        <p className="text-sm uppercase tracking-[0.18em] text-[#807b4f]"><Localized en="The brief" zh="设计命题" /></p>
        <div>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-5xl"><Localized en="Reveal the system inside a familiar object." zh="揭示熟悉物件之中的系统。" /></h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#252124]/75 md:text-lg"><Localized en="An umbrella looks simple when it is open or folded away, yet it is the result of a precise assembly of canopy, ribs, runners, shaft, and handle. This project maps those relationships and makes each transition in the manufacturing process visible, one illustrated step at a time." zh="雨伞在打开或收起时看似简单，却由伞面、伞骨、中巢、伞杆与手柄等精密部件共同构成。本项目梳理这些部件之间的关系，并以逐步插画呈现制造过程中的每一次转变。" /></p>
        </div>
      </section>

      <section className="bg-[#eaded4] px-6 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <ProjectImage
            src="/work/umbrella-manufacturing/transparent/assembly-prototype.png"
            alt="Transparent umbrella assembly prototype illustrations"
            width={2216}
            height={1628}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#807b4f]"><Localized en="Process sequence" zh="工艺流程" /></p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl"><Localized en="A ten-step path from material to mechanism." zh="从材料到机械结构的十个步骤。" /></h2>
          <p className="mt-5 leading-relaxed text-[#252124]/70"><Localized en="The circular illustrations work as a visual index: each frame isolates one operation, while the sequence explains how the umbrella gradually takes form." zh="圆形插画构成视觉索引：每一帧聚焦一个操作步骤，串联起来则呈现雨伞如何逐渐成形。" /></p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          {stages.map((stage, index) => (
            <figure key={stage.src} className="flex flex-col items-center text-center">
              <ProjectImage
                src={stage.src}
                alt={stage.alt}
                width={671}
                height={671}
                className="max-w-[8.5rem]"
              />
              <figcaption className="mt-4 border-t border-[#252124]/15 px-3 pt-3 text-xs uppercase tracking-[0.16em] text-[#252124]/55"><Localized en={`Step ${String(index + 1).padStart(2, '0')}`} zh={`步骤 ${String(index + 1).padStart(2, '0')}`} /></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-[#302b2e] px-6 py-20 text-[#fffdf7] md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div><p className="text-sm uppercase tracking-[0.18em] text-[#dedbc2]/65"><Localized en="Assembly logic" zh="组装逻辑" /></p><h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-5xl"><Localized en="See the parts, then understand the whole." zh="先看见部件，再理解整体。" /></h2></div>
            <p className="leading-relaxed text-[#fffdf7]/70"><Localized en="Structural diagrams shift scale between individual components and their connections, showing why sequence matters as much as form." zh="结构图在单个部件与它们的连接关系之间切换尺度，说明了为何制造顺序与最终形态同样重要。" /></p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {structures.map((structure) => <div key={structure.src} className="bg-[#f7f6f1] p-3 md:p-5"><ProjectImage {...structure} /></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
        <ProjectImage src="/work/umbrella-manufacturing/process%202.png" alt="Detailed illustrated umbrella manufacturing process" />
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#807b4f]"><Localized en="Information as narrative" zh="信息即叙事" /></p>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl"><Localized en="Make a complex sequence feel tangible." zh="让复杂步骤变得可感知。" /></h2>
          <p className="mt-6 max-w-lg leading-relaxed text-[#252124]/75"><Localized en="The visual system balances technical clarity with a human scale. Neutral tones and simplified forms keep attention on the relationships between tools, materials, and motions rather than overwhelming the reader with detail." zh="视觉系统在技术清晰度与亲和尺度之间取得平衡。中性色调与简化造型引导读者关注工具、材料与动作之间的关系，而非被过多细节淹没。" /></p>
          <Link href="/projects" className="mt-8 inline-block border border-[#252124] px-5 py-3 text-sm transition-colors hover:bg-[#252124] hover:text-[#fffdf7]"><Localized en="Back to projects" zh="返回项目列表" /></Link>
        </div>
      </section>
    </main>
  )
}
