import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Localized } from '@/components/localized'
import { sitePath } from '@/lib/site-path'

export const metadata: Metadata = {
  title: 'NYPD Website Redesign — Qier Long',
  description:
    'A responsive UX/UI case study for New York Pizza Depot in Ann Arbor.',
}

const interfaceScreens = [
  {
    image: '/work/nypd/home-section.png',
    title: { en: 'A warmer first impression', zh: '更有温度的第一印象' },
    text: {
      en: 'A bold hero and promotional content make the local restaurant feel recognizable before a customer starts ordering.',
      zh: '醒目的首屏与促销内容，让用户在开始下单前就能感受到餐厅的本地特色。',
    },
  },
  {
    image: '/work/nypd/menu-page.png',
    title: { en: 'Browse the menu with confidence', zh: '更清晰地浏览菜单' },
    text: {
      en: 'A category-led menu gives a broad selection of food a simple, scannable structure.',
      zh: '以品类为核心的菜单结构，让丰富的食物选择更容易浏览和理解。',
    },
  },
  {
    image: '/work/nypd/adding-page.png',
    title: { en: 'Make customization feel manageable', zh: '让个性化点单更易操作' },
    text: {
      en: 'Step-by-step options turn a complex pizza order into a clear sequence of decisions.',
      zh: '分步骤的选项将复杂的披萨定制拆解为清晰、易完成的选择。',
    },
  },
]

export default function NypdWebsiteRedesignPage() {
  return (
    <main className="bg-[#f4f1ed] text-[#211615]">
      <section className="relative overflow-hidden bg-[#922b20] text-[#fff9ef]">
        <Image
          src="/work/nypd/responsive-web-full.png"
          overrideSrc={sitePath('/work/nypd/responsive-web-full.png')}
          alt="NYPD responsive website across desktop, tablet, and mobile"
          width={2000}
          height={1125}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Link
            href="/projects"
            className="text-sm text-[#fff9ef]/70 hover:text-[#fff9ef]"
          >
            <Localized en="← All projects" zh="← 所有项目" />
          </Link>
          <div className="mt-20 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#fff9ef]/70">
              UX/UI Design · 2025
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
              NYPD Website Redesign
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#fff9ef]/85 md:text-xl">
              <Localized
                en="A more inviting digital front door for a neighborhood pizza favorite."
                zh="为社区披萨店打造更亲切、更好用的数字门面。"
              />
            </p>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-[#fff9ef]/30 pt-6 text-sm md:grid-cols-4">
            <div>
              <dt className="text-[#fff9ef]/60"><Localized en="Client" zh="客户" /></dt>
              <dd className="mt-1">New York Pizza Depot</dd>
            </div>
            <div>
              <dt className="text-[#fff9ef]/60"><Localized en="Role" zh="职责" /></dt>
              <dd className="mt-1"><Localized en="UX/UI Designer" zh="UX/UI 设计师" /></dd>
            </div>
            <div>
              <dt className="text-[#fff9ef]/60"><Localized en="Format" zh="形式" /></dt>
              <dd className="mt-1"><Localized en="Responsive website" zh="响应式网站" /></dd>
            </div>
            <div>
              <dt className="text-[#fff9ef]/60"><Localized en="Focus" zh="重点" /></dt>
              <dd className="mt-1"><Localized en="Ordering clarity" zh="点单体验" /></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:px-10">
        <p className="text-sm uppercase tracking-[0.18em] text-[#922b20]/65">
          <Localized en="The opportunity" zh="设计机会" />
        </p>
        <div>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">
            <Localized
              en="Make a local favorite easier to discover and order."
              zh="让本地人喜爱的披萨店更容易被发现，也更容易下单。"
            />
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#211615]/75 md:text-lg">
            <Localized
              en="The redesign brings the restaurant’s personality, menu, and ordering flow into one responsive system. It uses a bold brick-red and sunny-yellow palette to feel familiar, while clearer hierarchy helps customers move from appetite to checkout."
              zh="这次改版将餐厅个性、菜单与下单流程整合进一个响应式系统。大胆的砖红与明黄色延续品牌熟悉感，清晰的信息层级则帮助用户从产生食欲顺畅走到结账。"
            />
          </p>
        </div>
      </section>

      <section className="bg-[#171313] px-6 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Image
            src="/work/nypd/brand-gallery.png"
            overrideSrc={sitePath('/work/nypd/brand-gallery.png')}
            alt="NYPD restaurant photography and brand imagery"
            width={2000}
            height={1400}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#922b20]/65">
            <Localized en="Key flows" zh="核心流程" />
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            <Localized
              en="A responsive experience built around real decisions."
              zh="围绕真实点单决策构建的响应式体验。"
            />
          </h2>
        </div>
        <div className="grid gap-12">
          {interfaceScreens.map((screen, index) => (
            <article
              key={screen.image}
              className="grid items-center gap-8 border-t border-[#922b20]/20 pt-8 md:grid-cols-2"
            >
              <div className={index % 2 ? 'md:order-2' : ''}>
                <span className="text-sm tracking-[0.18em] text-[#922b20]/65">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-serif text-3xl">
                  <Localized en={screen.title.en} zh={screen.title.zh} />
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-[#211615]/75">
                  <Localized en={screen.text.en} zh={screen.text.zh} />
                </p>
              </div>
              <Image
                src={screen.image}
                overrideSrc={sitePath(screen.image)}
                alt={`${screen.title.en} interface`}
                width={1800}
                height={1200}
                className={`h-auto w-full ${index % 2 ? 'md:order-1' : ''}`}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e3dfdf] px-6 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Image
            src="/work/nypd/checkout-page.png"
            overrideSrc={sitePath('/work/nypd/checkout-page.png')}
            alt="NYPD checkout flow"
            width={1600}
            height={1200}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="bg-[#922b20] px-6 py-20 text-[#fff9ef] md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#fff9ef]/60">
                <Localized en="Responsive system" zh="响应式系统" />
              </p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl">
                <Localized
                  en="One visual language, from desktop to phone."
                  zh="从桌面端到手机端，保持统一的视觉语言。"
                />
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#fff9ef]/75">
              <Localized
                en="The same hierarchy adapts to different contexts without losing the restaurant’s character."
                zh="统一的信息层级适配不同使用场景，同时保留餐厅独有的品牌个性。"
              />
            </p>
          </div>
          <Image
            src="/work/nypd/responsive-web.png"
            overrideSrc={sitePath('/work/nypd/responsive-web.png')}
            alt="NYPD responsive website system"
            width={2000}
            height={1000}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#922b20]/65">
              <Localized en="Outcome" zh="成果" />
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-5xl">
              <Localized
                en="A digital storefront that feels as lively as the neighborhood it serves."
                zh="一个和所在社区一样有活力的数字门店。"
              />
            </h2>
          </div>
          <Link
            href="/projects"
            className="border border-[#922b20] px-5 py-3 text-sm transition-colors hover:bg-[#922b20] hover:text-[#fff9ef]"
          >
            <Localized en="Back to projects" zh="返回项目列表" />
          </Link>
        </div>
      </section>
    </main>
  )
}
