/**
 * Header section component
 */

import { useEffect, useState } from 'react'
import { usePortfolio } from '../../contexts/PortfolioContext'
import NAVIGATION_MAP from '../../maps/NAVIGATION_MAP'

export default function Header() {
  const { portfolioData } = usePortfolio()
  const { profile } = portfolioData
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white transition-colors hover:text-sky-400"
        >
          {profile?.name?.split(' ').map((n) => n[0]).join('') ?? 'YN'}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAVIGATION_MAP.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAVIGATION_MAP.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
