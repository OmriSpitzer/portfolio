/**
 * Header section component
 */

import { useEffect, useState } from 'react'
import { useInterface } from '../../contexts'
import NAVIGATION_MAP from '../../maps/NAVIGATION_MAP'
import { faSun, faMoon, faHome } from '@fortawesome/free-solid-svg-icons'
import HeaderButton from '../buttons/HeaderButton'

const Header = () => {
  const { theme, toggleTheme } = useInterface()

  /* Scrolled state */
  const [scrolled, setScrolled] = useState(false)

  /* Is dark theme */
  const isDark = theme === 'dark-mode'

  /* Scroll to top */
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  /* Use effect to set scrolled state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300 
        ${scrolled ?
          'border-b backdrop-blur-md opacity-90' :
          'border-b border-transparent'
        }`
      }
      style={{
        backgroundColor: scrolled ? 'var(--header-bg-scrolled)' : 'transparent',
        borderColor: scrolled ? 'var(--header-border)' : 'transparent',
      }}
    >
      {/* Header content */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        {/* Home button */}
        <HeaderButton
          label="Home"
          icon={faHome}
          onClick={scrollToTop}
          isExpandLeft={false}
        />

        {/* Navigation */}
        <nav className="hidden items-center gap-5 md:flex">
          {NAVIGATION_MAP.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:bg-[var(--header-hover-bg)] rounded-lg px-3 py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme toggle button */}
        <HeaderButton
          label={isDark ? 'Light mode' : 'Dark mode'}
          icon={isDark ? faSun : faMoon}
          onClick={toggleTheme}
          isExpandLeft={true}
        />
      </div>
    </header>
  )
}

export default Header
