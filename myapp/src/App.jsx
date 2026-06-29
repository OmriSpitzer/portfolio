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
import { Header, Footer, Hero } from './components/sections'

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

        <Footer />
      </PortfolioProvider>
    </InterfaceProvider>
  )
}

export default App
