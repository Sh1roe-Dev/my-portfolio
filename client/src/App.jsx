import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTION_CONFIG = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  return (
    localStorage.getItem('portfolio-theme') ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const sectionIds = useMemo(() => SECTION_CONFIG.map(({ id }) => id), [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="absolute inset-0 -z-10 bg-grid-light bg-grid opacity-70 dark:bg-grid-dark" aria-hidden />
      <Navbar
        sections={SECTION_CONFIG}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-32 sm:px-8 lg:px-0">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer sections={sectionIds} />
    </div>
  )
}

export default App

