import React, { useEffect, useRef } from 'react';

const ScrollProgressBar = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrolled / maxHeight) * 100;
      
      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800/50">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
};

export default ScrollProgressBar;
