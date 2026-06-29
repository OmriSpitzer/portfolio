import { usePortfolio } from '../../contexts/PortfolioContext'

export default function Footer() {
  const { portfolioData } = usePortfolio()
  const { profile } = portfolioData
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-slate-500">
          © {year} {profile?.name ?? 'Your Name'}. All rights reserved.
        </p>

        <div className="flex gap-6">
          {profile?.social?.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-sky-400"
            >
              GitHub
            </a>
          )}
          {profile?.social?.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-sky-400"
            >
              LinkedIn
            </a>
          )}
          {profile?.social?.twitter && (
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-sky-400"
            >
              Twitter
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
