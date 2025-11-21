import { useState } from 'react'
import SectionHeading from './SectionHeading'

const initialState = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: null, message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Message failed to send')

      setStatus({ type: 'success', message: 'Thanks! I will get back to you shortly.' })
      setForm(initialState)
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build together"
        description="Share a new project, idea, or challenge. I reply within 24 to 48 hours."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/20 bg-white/70 p-8 shadow-2xl shadow-slate-950/5 dark:border-slate-800 dark:bg-slate-900/70">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Shiroe Developer"
                className="mt-2 w-full rounded-2xl border-slate-200 bg-white/70 text-slate-900 placeholder-slate-400 focus:border-brand-400 focus:ring-brand-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="shiroe@company.com"
                className="mt-2 w-full rounded-2xl border-slate-200 bg-white/70 text-slate-900 placeholder-slate-400 focus:border-brand-400 focus:ring-brand-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project…"
                className="mt-2 w-full rounded-2xl border-slate-200 bg-white/70 text-slate-900 placeholder-slate-400 focus:border-brand-400 focus:ring-brand-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-brand-500 to-sky-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
          {status.message && (
            <p
              className={`mt-4 text-sm font-medium ${
                status.type === 'success'
                  ? 'text-emerald-500 dark:text-emerald-300'
                  : 'text-red-500 dark:text-red-300'
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
        <div className="rounded-3xl border border-white/20 bg-slate-900 text-white">
          <div className="h-full rounded-[calc(1.5rem-1px)] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_55%)] p-10">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Signal Boost</p>
            <h3 className="mt-4 text-3xl font-semibold">Let’s co-create meaningful software.</h3>
            <p className="mt-4 text-base text-slate-300">
              I partner with founders, design teams, and engineering orgs to ship faster without cutting corners.
              Whether you need a solo contributor or embedded teammate, I bring clarity, documentation, and momentum.
            </p>
            <div className="mt-10 space-y-4 text-sm text-slate-300">
              <p>• Collaboration tools of choice: Linear, Notion, Figma, GitHub.</p>
              <p>• Available for consulting, fractional leadership, or hands-on product builds.</p>
              <p>• Comfortable across EST to GMT+8 time zones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

