'use client'

import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-border bg-card p-8">
        <h3 className="font-serif text-2xl">收到，谢谢！Thank you.</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          你的消息已经送达，我会尽快回复你。
          Your message has been sent — I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 border border-border px-4 py-2 text-sm transition-colors hover:border-foreground"
        >
          再写一封 Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="姓名 Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="你的名字"
            className="w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
          />
        </Field>
        <Field label="邮箱 Email" htmlFor="email">
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

      <Field label="主题 Subject" htmlFor="subject">
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="想聊些什么？"
          className="w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
        />
      </Field>

      <Field label="信息 Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="告诉我你的项目或想法……"
          className="w-full resize-none border-b border-border bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
        />
      </Field>

      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center gap-2 bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-80"
      >
        发送 Send message
      </button>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
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
