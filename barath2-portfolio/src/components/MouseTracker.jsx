import React, { useEffect, useState } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed w-6 h-6 pointer-events-none z-30 transition-opacity duration-300 ${
        isVisible ? 'opacity-60' : 'opacity-0'
      }`}
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(1px)',
        transform: 'scale(1)',
        animation: 'pulse 2s infinite',
      }}
    />
  );
};

export default MouseTracker;
