'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Home', zh: '首页' },
  { href: '/projects', label: 'Projects', zh: '作品' },
  { href: '/resume', label: 'Resume', zh: '简历' },
  { href: '/contact', label: 'Contact', zh: '联系' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-lg font-semibold tracking-tight">
            Lin Lan 林澜
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Design Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex items-baseline gap-1.5 text-sm transition-colors',
                  active
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <span>{item.label}</span>
                <span className="text-xs text-muted-foreground/70">
                  {item.zh}
                </span>
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center border border-border text-sm md:hidden"
          aria-label="切换导航菜单"
          aria-expanded={open}
        >
          <span className="sr-only">菜单</span>
          <div className="flex flex-col gap-1">
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border md:hidden">
          {nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between border-b border-border px-6 py-4 text-sm',
                  active ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                <span>{item.label}</span>
                <span className="text-xs text-muted-foreground/70">
                  {item.zh}
                </span>
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
