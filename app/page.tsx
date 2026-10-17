import Link from 'next/link'
import { ProjectCard } from '@/components/project-card'
import { categories, projects } from '@/lib/projects'
import { Localized } from '@/components/localized'

export default function HomePage() {
  const featured = projects.slice(0, 4)

  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      {/* Hero */}
      <section className="border-b border-border py-16 md:py-24">
        <p className="text-sm text-muted-foreground">
          <Localized en="Good afternoon" zh="下午好" />
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1] text-balance md:text-6xl">
          <Localized
            en="I'm Qier Long, a multidisciplinary designer across graphic, information and UI/UX design."
            zh="我是 Qier Long，一名跨越平面、信息与 UI/UX 设计领域的设计师。"
          />
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          <Localized
            en="I believe good design starts with a clear structure and the right amount of whitespace."
            zh="我相信好的设计始于清晰的结构与恰当的留白。"
          />
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-80"
          >
            <Localized en="View Projects" zh="查看作品" />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground"
          >
            <Localized en="Resume" zh="简历" />
          </Link>
        </div>
      </section>

      {/* Disciplines */}
      <section className="border-b border-border py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {categories.map((c, i) => (
            <div key={c.id} className="flex flex-col gap-1">
              <span className="font-serif text-2xl text-muted-foreground">
                0{i + 1}
              </span>
              <span className="font-serif text-lg">
                <Localized en={c.label} zh={c.zh} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="py-12 md:py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl md:text-3xl">
            <Localized en="Selected Work" zh="精选作品" />
          </h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <Localized en="All →" zh="全部 →" />
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {featured.map((project, i) => (
            <Link key={project.slug} href="/projects">
              <ProjectCard project={project} priority={i < 2} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
