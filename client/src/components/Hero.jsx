import { ArrowDownRight, Download, Send } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="section-padding">
      <div className="glass-panel relative overflow-hidden rounded-3xl px-8 py-12 text-center sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-300/20" />
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Available for freelance work
          <ArrowDownRight size={16} />
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
          Ryan Jake Daz
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-400 to-emerald-400">
            Full-Stack Developer
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
          I design and build thoughtful digital products with delightful user experiences,
          performant architectures, and resilient backend systems.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900"
          >
            <Send size={18} />
            View Projects
          </a>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-brand-400 hover:text-brand-500 dark:border-slate-700 dark:text-slate-100">
            <Download size={18} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

