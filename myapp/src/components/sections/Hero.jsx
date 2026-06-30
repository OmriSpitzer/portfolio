/**
 * Hero section - Main section of the portfolio
 */

import { usePortfolio } from '../../contexts'
import { useInterface } from '../../contexts'
import { HeroButton } from '../buttons'

export default function Hero() {
  const { portfolioData } = usePortfolio();

  /* If no profile, return null */
  if (!portfolioData.profile) return null

  const { profile } = portfolioData;
  const { isDark } = useInterface();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute -left-32 top-1/4 h-128 w-128 rounded-full ${isDark ? 'bg-sky-400/30' : 'bg-sky-500/30'} blur-3xl`} />
        <div className={`absolute -right-16 bottom-1/2 h-128 w-128 rounded-full ${isDark ? 'bg-violet-400/30' : 'bg-violet-500/30'} blur-3xl`} />
      </div>

      {/* Content */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-left">
          {/* Header */}
          <p className={`font-semibold uppercase tracking-widest ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
            Portfolio
          </p>

          {/* Name */}
          <h1 className={`text-6xl font-bold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-gray-500'}`}>
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-sky-300 to-violet-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          {/* Title */}
          <p className={`mt-4 text-2xl font-medium ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
            {profile.title}
          </p>

          {/* Tagline */}
          <p className={`mt-2 text-lg font-semibold ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            {profile.tagline}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* Projects button */}
            <HeroButton label="View Projects" gotoHref="#projects" />

            {/* Resume button */}
            {profile.resumeUrl && profile.resumeUrl !== '#' && (
              <HeroButton label="Download Resume" gotoHref={profile.resumeUrl} target="_blank" />
            )}

            {/* Contact button */}
            <HeroButton label="Get in Touch" gotoHref="#contact" />
          </div>
        </div>
      </div>
    </section>
  )
}
