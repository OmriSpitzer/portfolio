/**
 * NavigationContext is a context that provides the navigation state to the components
 */

import { createContext, useContext } from 'react'

/* Provide the navigation state to the components */
const NavigationContext = createContext()

/* Provider to wrap the components that need the navigation state */
export const NavigationProvider = ({ navigationMap, children }) => {
    /* Check if the navigation map is valid */
    if (!navigationMap) {
        throw new Error('Navigation map is required')
    }

    /* Get the next section in page flow */
    const getNextSection = (id) => {
        const index = navigationMap.findIndex((section) => section.id === id);
        if (index === -1 || index === navigationMap.length - 1) return null;
        return navigationMap[index + 1]
    }

    return (
        <NavigationContext.Provider value={{ getNextSection, navigationMap }}>
            {children}
        </NavigationContext.Provider>
    );
}

/* Hook to use the navigation state */
export const useNavigation = () => { return useContext(NavigationContext) }