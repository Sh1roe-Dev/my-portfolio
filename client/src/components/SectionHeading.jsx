const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading

