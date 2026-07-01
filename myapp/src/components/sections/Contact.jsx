import SectionTitle from './SectionTitle'
import { usePortfolio } from '../../contexts/PortfolioContext'

export default function Contact() {
  const { portfolioData } = usePortfolio()
  const { profile } = portfolioData
  if (!profile) return null

  const socialLinks = [
    { label: 'GitHub', url: profile.social?.github },
    { label: 'LinkedIn', url: profile.social?.linkedin },
    { label: 'Twitter', url: profile.social?.twitter },
  ].filter((link) => link.url && link.url !== '#')

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          label="Contact"
          title="Let's Connect"
          description="Interested in working together? Reach out — I'd love to hear from you."
        />

        <div className="mx-auto max-w-xl rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center md:p-12">
          <p className="text-slate-400">
            The best way to reach me is via email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-xl font-semibold text-sky-400 transition-colors hover:text-sky-300 md:text-2xl"
          >
            {profile.email}
          </a>

          {socialLinks.length > 0 && (
            <div className="mt-8 flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-sky-500/50 hover:text-sky-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {socialLinks.length === 0 && (
            <p className="mt-6 text-sm text-slate-600">
              Add your social links in src/data/profile.json
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
