'use client'
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;  
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setThemeState] = useState<Theme>('light');
    const [mounted, setMounted] = useState<boolean>(false);

    // update theme
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;

        setThemeState(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
        setMounted(true);
    }, []);

    // prevent flash of incorrect theme on initial render
    if (!mounted) {
        return null;
    }
    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )};

    export function useTheme() {
        const context = useContext(ThemeContext);
        if (!context) {
            throw new Error('useTheme must be used within a ThemeProvider');
        }
        return context;
    }