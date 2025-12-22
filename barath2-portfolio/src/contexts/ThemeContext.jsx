import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themes = {
  default: {
    primary: 'from-blue-600 to-purple-600',
    secondary: 'from-purple-600 to-pink-600',
    accent: 'from-pink-500 to-red-500',
    background: 'from-gray-900 via-blue-900 to-purple-900',
    text: 'text-white',
    card: 'bg-white/10 backdrop-blur-lg'
  },
  cyber: {
    primary: 'from-cyan-400 to-blue-500',
    secondary: 'from-green-400 to-cyan-500',
    accent: 'from-yellow-400 to-orange-500',
    background: 'from-gray-900 via-cyan-900 to-blue-900',
    text: 'text-cyan-100',
    card: 'bg-cyan-900/20 backdrop-blur-lg border border-cyan-500/30'
  },
  sunset: {
    primary: 'from-orange-500 to-red-600',
    secondary: 'from-red-500 to-pink-600',
    accent: 'from-yellow-400 to-orange-500',
    background: 'from-orange-900 via-red-900 to-purple-900',
    text: 'text-orange-100',
    card: 'bg-orange-900/20 backdrop-blur-lg border border-orange-500/30'
  },
  forest: {
    primary: 'from-green-500 to-emerald-600',
    secondary: 'from-emerald-500 to-teal-600',
    accent: 'from-lime-400 to-green-500',
    background: 'from-green-900 via-emerald-900 to-teal-900',
    text: 'text-green-100',
    card: 'bg-green-900/20 backdrop-blur-lg border border-green-500/30'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeTheme = (themeName) => {
    if (themeName !== currentTheme) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTheme(themeName);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 150);
    }
  };

  const theme = themes[currentTheme];

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-transition', isTransitioning ? 'all 0.3s ease-in-out' : 'none');
  }, [isTransitioning]);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, changeTheme, themes: Object.keys(themes), isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
