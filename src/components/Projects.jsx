import { useEffect, useState } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects as fallbackProjects } from '../data/content'

const Projects = () => {
  const [items, setItems] = useState(fallbackProjects)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <section id="projects" className="section-padding">
      <SectionHeading
        eyebrow="Projects"
        title="Selected case studies"
        description="Every build ships with clarity, performance, and maintainability. Here are a few highlights."
      />

      {error && (
        <p className="mb-6 rounded-2xl border border-red-200 bg-red-50/80 px-4 py-3 text-sm font-medium text-red-600 dark:border-red-900/70 dark:bg-red-950/50 dark:text-red-200">
          {error} — showing curated projects instead.
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white/80 shadow-xl shadow-slate-950/5 transition hover:-translate-y-1 hover:border-brand-400 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow dark:bg-slate-900/90 dark:text-white">
                {project.tech.slice(0, 2).join(' • ')}
              </div>
            </div>
            <div className="flex flex-1 flex-col px-6 py-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-brand-500 dark:text-brand-300">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-brand-200/70 px-3 py-1 dark:border-brand-400/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {/* <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-500 dark:border-slate-700 dark:text-slate-100"
                >
                  <ArrowUpRight size={16} />
                  Live Demo
                </a> */}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900"
                >
                  <Github size={16} />
                  Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {loading && (
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">Syncing latest projects…</p>
      )}
    </section>
  )
}

export default Projects

