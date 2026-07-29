import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <h2 className="font-serif text-2xl leading-snug text-balance md:text-3xl">
              有项目想聊，或只是想打个招呼？
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Have a project in mind, or just want to say hi?
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-80"
            >
              联系我 Contact
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                邮箱 Email
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
                社交 Social
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
          <span>© {new Date().getFullYear()} 林澜 Lin Lan. All rights reserved.</span>
          <span className="uppercase tracking-widest">Made with care · 用心制作</span>
        </div>
      </div>
    </footer>
  )
}
