import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme-preference';

const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

  if (storedTheme) {
    return storedTheme;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');

  return {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
};
