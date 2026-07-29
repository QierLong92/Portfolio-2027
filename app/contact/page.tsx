import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: '联系 Contact — 林澜 Lin Lan',
  description: '与林澜取得联系，聊聊合作、项目或任何想法。',
}

const channels = [
  { label: 'Email 邮箱', value: 'hello@linlan.design', href: 'mailto:hello@linlan.design' },
  { label: 'Location 所在地', value: 'Shanghai, CN · 上海', href: undefined },
  { label: 'Instagram', value: '@linlan.design', href: '#' },
  { label: 'Behance', value: 'behance.net/linlan', href: '#' },
  { label: 'LinkedIn', value: 'in/linlan', href: '#' },
]

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      <section className="border-b border-border py-16 md:py-20">
        <p className="text-sm text-muted-foreground">Contact · 联系</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] text-balance md:text-6xl">
          Let&apos;s make something worthwhile together.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Whether it&apos;s a full brand project or a brief collaboration, I&apos;d
          love to hear from you. 无论是完整的品牌项目还是一次短暂的合作，欢迎写信给我。
        </p>
      </section>

      <section className="grid gap-x-12 gap-y-12 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-2xl">Channels 联系方式</h2>
          <ul className="flex flex-col">
            {channels.map((c) => (
              <li
                key={c.label}
                className="flex items-baseline justify-between gap-4 border-b border-border py-4 text-sm"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </span>
                {c.href ? (
                  <a href={c.href} className="hover:text-accent">
                    {c.value}
                  </a>
                ) : (
                  <span>{c.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-6 font-serif text-2xl">Send a message 写信给我</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
