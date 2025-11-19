import SectionHeading from './SectionHeading'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <SectionHeading
        eyebrow="About"
        title="Builder. Explorer. Community-first."
        description="I write code with empathy for users and teams—delivering clean systems, observability, and delightful interfaces."
      />

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            I began my journey experimenting with hardware hacks and quickly fell in love with the craft of software.
            Over the last 4+ years, I’ve built SaaS dashboards, developer tools, and commerce experiences for fast-paced teams.
          </p>
          <p>
            Today I specialize in JavaScript ecosystems—React, Node.js, and modern cloud tooling. I care deeply about developer experience,
            accessibility, and creating systems that scale without the chaos.
          </p>
          <p>
            When I’m not coding, you’ll find me mentoring juniors, tinkering with 3D printers, or iterating on design systems that push the web forward.
          </p>
          <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 text-sm font-medium text-slate-600 shadow-inner shadow-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
            <p>📍 Manito Albay, Philippines</p>
            <p>🤝 Open to remote contracts & product collaborations</p>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative h-80 w-80 overflow-hidden rounded-[2.5rem] border border-white/40 shadow-2xl shadow-brand-500/30">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=640&q=80"
              alt="Portrait of Ryan Jake Daz"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 border border-white/40" />
          </div>
          <div className="absolute -bottom-6 -right-8 hidden flex-col rounded-2xl border border-white/30 bg-white/80 p-4 text-sm font-semibold text-slate-600 shadow-xl dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 sm:flex">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">40+</span>
            <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Projects shipped
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

