import { Code, Cpu, GitBranch, Layers, Server, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { techStack } from '../data/content'

const iconMap = {
  code: Code,
  sparkles: Sparkles,
  cpu: Cpu,
  layers: Layers,
  server: Server,
  'git-branch': GitBranch,
}

const TechStack = () => {
  return (
    <section id="skills" className="section-padding">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I ship with"
        description="A versatile toolkit centered around React & vite/JavaScript, performant UI, and cloud-native services."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech) => {
          const Icon = iconMap[tech.icon] ?? Code
          return (
            <article
              key={tech.name}
              className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-glow dark:border-slate-800/60 dark:bg-slate-900/70"
            >
              <div
                className={`absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-80 bg-gradient-to-br ${tech.color}`}
              />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-brand-600 dark:bg-slate-900/70 dark:text-brand-100">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{tech.name}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{tech.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack

