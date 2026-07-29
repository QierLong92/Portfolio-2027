'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { categories, projects, type Category } from '@/lib/projects'
import { cn } from '@/lib/utils'

type Filter = Category | 'all'

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter)

  const filters: { id: Filter; label: string; zh: string }[] = [
    { id: 'all', label: 'All', zh: '全部' },
    ...categories,
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              'flex items-baseline gap-1.5 border px-4 py-2 text-sm transition-colors',
              filter === f.id
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground',
            )}
          >
            <span className="uppercase tracking-wide">{f.label}</span>
            <span className="text-[10px] opacity-70">{f.zh}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 2} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No projects in this category yet. 该分类下暂无作品。
        </p>
      )}
    </section>
  )
}
