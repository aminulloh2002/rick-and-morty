import { createContext, useCallback, useEffect, useState } from "react";

const ThemeContext = createContext({
    isDarkMode: true
})

export const ThemeContextProvider = props => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleDarkMode = useCallback(darkMode => {
        const mode = darkMode.matches
        setIsDarkMode(mode)
    }, [])

    useEffect(() => {
        const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
        if (window.matchMedia) {
            handleDarkMode(colorScheme)
            colorScheme.addEventListener('change', handleDarkMode)
        }

        return () => {
            colorScheme.removeEventListener('change', handleDarkMode)
        };
    }, [handleDarkMode]);

    const toggleDarkMode = isDark => {
        setIsDarkMode(isDark)
    }

    const contextValue = {
        isDarkMode,
        toggleDarkMode
    }

    return <ThemeContext.Provider value={contextValue}>{props.children}</ThemeContext.Provider>
}

export default ThemeContext