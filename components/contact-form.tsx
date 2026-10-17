'use client'

import { useEffect, useState } from 'react'
import { Localized } from '@/components/localized'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [language, setLanguage] = useState<'en' | 'zh'>('en')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    if (savedLanguage === 'zh') setLanguage('zh')

    const handleLanguageChange = (event: Event) => {
      setLanguage((event as CustomEvent<'en' | 'zh'>).detail)
    }
    window.addEventListener('portfolio-language-change', handleLanguageChange)
    return () => window.removeEventListener('portfolio-language-change', handleLanguageChange)
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-border bg-card p-8">
        <h3 className="font-serif text-2xl"><Localized en="Thank you!" zh="收到，谢谢。" /></h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          <Localized
            en="Your message has been sent — I'll get back to you soon."
            zh="你的消息已经送达，我会尽快回复你。"
          />
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 border border-border px-4 py-2 text-sm transition-colors hover:border-foreground"
        >
          <Localized en="Send another" zh="再写一封" />
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label={<Localized en="Name" zh="姓名" />} htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={language === 'en' ? 'Your name' : '你的姓名'}
            className="w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
          />
        </Field>
        <Field label={<Localized en="Email" zh="邮箱" />} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
          />
        </Field>
      </div>

      <Field label={<Localized en="Subject" zh="主题" />} htmlFor="subject">
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder={language === 'en' ? 'What would you like to talk about?' : '想聊些什么？'}
          className="w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
        />
      </Field>

      <Field label={<Localized en="Message" zh="信息" />} htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={language === 'en' ? 'Tell me about your project or idea…' : '告诉我你的项目或想法……'}
          className="w-full resize-none border-b border-border bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
        />
      </Field>

      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center gap-2 bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-80"
      >
        <Localized en="Send message" zh="发送" />
      </button>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: React.ReactNode
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
