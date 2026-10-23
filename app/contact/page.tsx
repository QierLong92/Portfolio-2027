import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { Localized } from '@/components/localized'

export const metadata: Metadata = {
  title: 'Contact — Qier Long',
  description: 'Get in touch with Qier Long to discuss collaboration, projects, or ideas.',
}

const channels = [
  { label: 'Email', zh: '邮箱', value: 'longqi@umich.edu', href: 'mailto:longqi@umich.edu' },
  { label: 'Location', zh: '所在地', value: 'Shanghai, CN', valueZh: '中国上海', href: undefined },
  {
    label: 'LinkedIn',
    zh: 'LinkedIn',
    value: 'linkedin.com/in/qier-long-a22870251',
    href: 'https://www.linkedin.com/in/qier-long-a22870251/',
  },
]

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      <section className="border-b border-border py-16 md:py-20">
        <p className="text-sm text-muted-foreground"><Localized en="Contact" zh="联系" /></p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] text-balance md:text-6xl">
          <Localized en="Let's make something worthwhile together." zh="一起创造有价值的作品。" />
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          <Localized
            en="Whether it's a full brand project or a brief collaboration, I'd love to hear from you."
            zh="无论是完整的品牌项目还是一次短暂的合作，欢迎写信给我。"
          />
        </p>
      </section>

      <section className="grid gap-x-12 gap-y-12 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-2xl"><Localized en="Channels" zh="联系方式" /></h2>
          <ul className="flex flex-col">
            {channels.map((c) => (
              <li
                key={c.label}
                className="flex items-baseline justify-between gap-4 border-b border-border py-4 text-sm"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  <Localized en={c.label} zh={c.zh} />
                </span>
                {c.href ? (
                  <a href={c.href} className="hover:text-accent">
                    <Localized en={c.value} zh={c.valueZh ?? c.value} />
                  </a>
                ) : (
                  <span><Localized en={c.value} zh={c.valueZh ?? c.value} /></span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-6 font-serif text-2xl"><Localized en="Send a message" zh="写信给我" /></h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
