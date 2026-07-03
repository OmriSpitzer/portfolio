/**
 * User interface context
 */

import { createContext, useState, useContext, useEffect } from 'react'
import NAVIGATION_MAP from '../maps/NAVIGATION_MAP'

/* Create the context */
const InterfaceContext = createContext({
    theme: 'dark-mode',
    isDark: true,
    isMobile: false,
    toggleTheme: () => { },
    pageCount: () => { }
});

/* Create the provider */
export const InterfaceProvider = ({ children }) => {
    /* Theme of the application */
    const [theme, setTheme] = useState('light-mode');
    const [isDark, setIsDark] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    /* Toggle the theme */
    const toggleTheme = () => {
        const newIsDark = !isDark;
        setTheme(newIsDark ? 'dark-mode' : 'light-mode');
        setIsDark(newIsDark);
    }

    /* Check if the screen is mobile */
    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    /* Count the number of pages */
    const pageCount = (id) => {return NAVIGATION_MAP.findIndex(page => page.id === id);}

    return <InterfaceContext.Provider value={{ theme, isDark, isMobile, toggleTheme, pageCount }}>
        <div className={`min-h-screen ${theme} transition-all duration-300`}>
            {children}
        </div>
    </InterfaceContext.Provider>
}

/* Export the hook */
export const useInterface = () => useContext(InterfaceContext);
