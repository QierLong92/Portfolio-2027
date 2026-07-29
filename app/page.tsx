import Link from 'next/link'
import { ProjectCard } from '@/components/project-card'
import { categories, projects } from '@/lib/projects'

export default function HomePage() {
  const featured = projects.slice(0, 4)

  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10">
      {/* Hero */}
      <section className="border-b border-border py-16 md:py-24">
        <p className="text-sm text-muted-foreground">下午好 · Good afternoon</p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1] text-balance md:text-6xl">
          我是林澜，一名跨越平面、信息与 UI/UX 的设计师。
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m Lin Lan, a multidisciplinary designer working across graphic
          design, information design and UI/UX. 我相信好的设计始于清晰的结构与恰当的留白。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-80"
          >
            查看作品 View Projects
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground"
          >
            简历 Resume
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
              <span className="font-serif text-lg">{c.label}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {c.en}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="py-12 md:py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl md:text-3xl">
            精选作品 <span className="text-muted-foreground">Selected Work</span>
          </h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            全部 →
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
