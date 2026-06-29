import SectionTitle from '../SectionTitle'
import { usePortfolio } from '../../contexts/PortfolioContext'

export default function About() {
  const { portfolioData } = usePortfolio()
  const { profile } = portfolioData
  if (!profile) return null

  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          label="About"
          title="Who I Am"
          description="A brief introduction to my background and what I bring to the table."
        />

        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-3">
            <p className="text-base leading-relaxed text-slate-400 md:text-lg">
              {profile.about}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Details
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs text-slate-500">Location</dt>
                <dd className="mt-1 text-sm text-white">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Email</dt>
                <dd className="mt-1 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sky-400 transition-colors hover:text-sky-300"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Role</dt>
                <dd className="mt-1 text-sm text-white">{profile.title}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
