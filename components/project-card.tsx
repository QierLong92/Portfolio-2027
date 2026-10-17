import Image from 'next/image'
import { categories, type Project } from '@/lib/projects'
import { Localized } from '@/components/localized'

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project
  priority?: boolean
}) {
  const category = categories.find((c) => c.id === project.category)

  return (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.titleEn} — project preview`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl leading-tight">
            <Localized en={project.titleEn} zh={project.title} />
          </h3>
        </div>
        <span className="shrink-0 pt-1 text-xs uppercase tracking-widest text-muted-foreground">
          {project.year}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
        <span className="border border-border px-2 py-1">
          <Localized en={category?.label} zh={category?.zh} />
        </span>
        <span>
          <Localized en={project.role} zh={project.roleZh} />
        </span>
      </div>
    </article>
  )
}
