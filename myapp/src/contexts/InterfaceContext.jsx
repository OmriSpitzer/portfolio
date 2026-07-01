/**
 * User interface context
 */

import { createContext, useState, useContext } from 'react'
import NAVIGATION_MAP from '../maps/NAVIGATION_MAP'

/* Create the context */
const InterfaceContext = createContext({
    theme: 'dark-mode',
    isDark: true,
    toggleTheme: () => { },
    pageCount: () => { }
});

/* Create the provider */
export const InterfaceProvider = ({ children }) => {
    /* Theme of the application */
    const [theme, setTheme] = useState('dark-mode');
    const [isDark, setIsDark] = useState(true);

    /* Toggle the theme */
    const toggleTheme = () => {
        const newIsDark = !isDark;
        setTheme(newIsDark ? 'dark-mode' : 'light-mode');
        setIsDark(newIsDark);
    }

    const pageCount = (id) => {
        return NAVIGATION_MAP.findIndex(page => page.id === id);
    }

    return <InterfaceContext.Provider value={{ theme, isDark, toggleTheme, pageCount }}>
        <div className={`min-h-screen ${theme} transition-all duration-300`}>
            {children}
        </div>
    </InterfaceContext.Provider>
}

/* Export the hook */
export const useInterface = () => useContext(InterfaceContext);
