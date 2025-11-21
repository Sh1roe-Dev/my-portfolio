import { Github, Music2, Facebook } from 'lucide-react'

const socials = [
  { label: 'GitHub', icon: Github, href: 'https://github.com/Sh1roe-Dev' },
  { label: 'Tiktok', icon: Music2, href: 'https://www.tiktok.com/@rhyndz' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com/ryanjakedaz' },
]

const Footer = ({ sections }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/40 bg-white/70 py-10 dark:border-slate-800/60 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            © {year} Ryan Jake Daz. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Built with React, Tailwind, and a hefty amount of caffeine.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
              className="transition hover:text-brand-500 dark:hover:text-brand-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
        <div className="flex gap-3">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-400 hover:text-brand-500 dark:border-slate-700 dark:text-slate-100"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

