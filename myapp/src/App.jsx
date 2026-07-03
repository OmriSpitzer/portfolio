/**
 * My portfolio application
 * 
 * @author Omri Spitzer - 2026
 * @version 1.0.0
 * @since 2026-06-29
 */

/* Contexts */
import { PortfolioProvider } from './contexts/PortfolioContext'
import { InterfaceProvider } from './contexts/InterfaceContext'

/* Components */
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'

/* Maps */
import NAVIGATION_MAP from './maps/NAVIGATION_MAP'

function App() {
  return (
    <InterfaceProvider>
      <PortfolioProvider>
        <Header />
        
        <main>
          <Hero />
          {NAVIGATION_MAP.map(({ href, component: Component }) => (
            <Component key={href} />
          ))}
        </main>

      </PortfolioProvider>
    </InterfaceProvider>
  )
}

export default App
