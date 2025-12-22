import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector = () => {
  const { currentTheme, changeTheme, themes } = useTheme();

  const themeIcons = {
    default: '🌌',
    cyber: '⚡',
    sunset: '🌅',
    forest: '🌲'
  };

  return (
    <div className="fixed top-20 right-4 z-40 bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
      <div className="flex flex-col gap-2">
        {themes.map((theme) => (
          <button
            key={theme}
            onClick={() => changeTheme(theme)}
            className={`w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center text-lg hover:scale-110 ${
              currentTheme === theme 
                ? 'bg-white/30 border-2 border-white/50 shadow-lg' 
                : 'bg-white/10 hover:bg-white/20 border border-white/20'
            }`}
            title={theme.charAt(0).toUpperCase() + theme.slice(1)}
          >
            {themeIcons[theme]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
