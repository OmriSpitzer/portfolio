import { usePortfolio } from '../../contexts/PortfolioContext'

export default function Hero() {
  const { portfolioData } = usePortfolio()
  const { profile } = portfolioData
  if (!profile) return null

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          Portfolio
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-4 text-xl font-medium text-slate-300 md:text-2xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
          >
            View Projects
          </a>
          {profile.resumeUrl && profile.resumeUrl !== '#' && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
            >
              Download Resume
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
