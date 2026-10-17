import Link from 'next/link'
import { Localized } from '@/components/localized'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <h2 className="font-serif text-2xl leading-snug text-balance md:text-3xl">
              <Localized
                en="Have a project in mind, or just want to say hi?"
                zh="有项目想聊，或只是想打个招呼？"
              />
            </h2>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-80"
            >
              <Localized en="Contact" zh="联系我" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                <Localized en="Email" zh="邮箱" />
              </span>
              <a
                href="mailto:hello@linlan.design"
                className="hover:text-accent"
              >
                hello@linlan.design
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                <Localized en="Social" zh="社交" />
              </span>
              <a href="#" className="hover:text-accent">
                Instagram
              </a>
              <a href="#" className="hover:text-accent">
                Behance
              </a>
              <a href="#" className="hover:text-accent">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Qier Long. All rights reserved.</span>
          <span className="uppercase tracking-widest">
            <Localized en="Made with care" zh="用心制作" />
          </span>
        </div>
      </div>
    </footer>
  )
}
