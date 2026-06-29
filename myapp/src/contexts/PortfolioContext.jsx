/**
 * Portfolio data context for the application
 */

import { createContext, useState, useContext } from 'react'

/* Portfolio data */
import { portfolio } from '../data'

/* Create the context */
const PortfolioContext = createContext({ portfolioData: portfolio })

/* Create the provider */
export const PortfolioProvider = ({ children }) => {
    /* Portfolio data */
    const [portfolioData, setPortfolioData] = useState(portfolio);

    return <PortfolioContext.Provider value={{ portfolioData }}>
        {children}
    </PortfolioContext.Provider>
}

/* Export the hook */
export const usePortfolio = () => useContext(PortfolioContext);