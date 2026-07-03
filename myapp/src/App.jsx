/**
 * My portfolio application
 * 
 * @author Omri Spitzer - 2026
 * @version 1.0.0
 * @since 2026-06-29
 */

/* Contexts */
import { PortfolioProvider, InterfaceProvider, NavigationProvider } from './contexts'

/* Components */
import Header from './components/pages/Header'

/* Maps */
import NAVIGATION_MAP from './maps/NAVIGATION_MAP'

function App() {
  return (
    <InterfaceProvider>
      <PortfolioProvider>
        <NavigationProvider navigationMap={NAVIGATION_MAP}>
          <Header />

          <main>
            {NAVIGATION_MAP && NAVIGATION_MAP.map(({ id, component: Component }) => (
              <Component key={id} />
            ))}
          </main>
        </NavigationProvider>
      </PortfolioProvider>
    </InterfaceProvider>
  )
}

export default App
