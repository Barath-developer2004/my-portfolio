import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    'Initializing...',
    'Loading Projects...',
    'Setting up Experience...',
    'Almost Ready...'
  ];

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const steps = 100;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => {
            onLoadComplete();
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    // Change loading text every 625ms
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 625);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 transition-all duration-600 ${
        isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Animated Tech Logo with Image */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto relative flex items-center justify-center">
            {/* Rotating border rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-20 blur-xl animate-spin-slow"></div>
            <div className="absolute -inset-2 rounded-full border-2 border-blue-500/30 animate-spin-slow" style={{animationDuration: '3s'}}></div>
            <div className="absolute -inset-1 rounded-full border-2 border-indigo-500/30 animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
            
            <img 
              src="/start.png" 
              alt="Tech Logo" 
              className="w-full h-full object-cover rounded-full shadow-2xl shadow-blue-500/50 relative z-10 animate-float"
            />
          </div>
        </div>

        {/* Name Animation */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-x" style={{backgroundSize: '200% 200%'}}>
          Barath Y
        </h1>
        
        <p className="text-blue-400 text-base sm:text-lg mb-2 animate-pulse">Full-Stack Developer</p>
        
        {/* Dynamic Loading Text */}
        <p className="text-cyan-400 text-sm mb-6 h-6 animate-fade-in font-medium">
          {loadingTexts[textIndex]}
        </p>

        {/* Enhanced Progress Bar */}
        <div className="w-56 sm:w-64 mx-auto">
          <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700/50">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 transition-all duration-300 ease-out rounded-full relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 text-xs font-mono">Loading</p>
            <p className="text-blue-400 text-sm font-mono font-bold">{progress}%</p>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-bounce shadow-lg shadow-indigo-500/50" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-bounce shadow-lg shadow-violet-500/50" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
