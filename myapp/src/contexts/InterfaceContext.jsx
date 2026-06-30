/**
 * User interface context
 */

import { createContext, useState, useContext } from 'react'

/* Create the context */
const InterfaceContext = createContext({
    theme: 'dark-mode',
    isDark: true,
    toggleTheme: () => { }
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

    return <InterfaceContext.Provider value={{ theme, isDark, toggleTheme }}>
        <div className={`min-h-screen ${theme}`}>
            {children}
        </div>
    </InterfaceContext.Provider>
}

/* Export the hook */
export const useInterface = () => useContext(InterfaceContext);
