/**
 * User interface context
 */

import { createContext, useState, useContext } from 'react'

/* Create the context */
const InterfaceContext = createContext({
    theme: 'dark-mode',
    setTheme: () => { }
});

/* Create the provider */
export const InterfaceProvider = ({ children }) => {
    /* Theme of the application */
    const [theme, setTheme] = useState('dark-mode');

    /* Toggle the theme */
    const toggleTheme = () => {
        setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
    }

    return <InterfaceContext.Provider value={{ theme, toggleTheme }} >
        <div className={`min-h-screen ${theme} text-slate-100`}>
            {children}
        </div>
    </InterfaceContext.Provider >
}

/* Export the hook */
export const useInterface = () => useContext(InterfaceContext);
