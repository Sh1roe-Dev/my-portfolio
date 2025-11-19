import { useState } from 'react'
import { Menu, SunMedium, Moon, X } from 'lucide-react'

const Navbar = ({ sections, theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false)

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/20 bg-white/80 px-6 py-3 shadow-lg shadow-slate-950/5 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/80">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-brand-300 text-white font-semibold tracking-tight">
            JD
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Ryan Jake Daz</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Full-Stack Dev</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className="transition-colors hover:text-brand-500 dark:hover:text-brand-300"
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand-400 hover:text-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:text-brand-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand-400 hover:text-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-3 flex max-w-6xl flex-col gap-3 rounded-2xl border border-white/30 bg-white/90 p-4 text-center shadow-xl shadow-slate-950/5 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/90 md:hidden">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className="rounded-xl px-4 py-2 text-base font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar

