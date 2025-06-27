import React from 'react';
import './App.css';
import reactLogo from './assets/react.svg';

const ICONS = [
  // React logo from assets
  <img src={reactLogo} alt="react" style={{width: '100%', height: '100%'}} draggable={false} />,
  // Code brackets SVG
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8L4 16L12 24" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 8L28 16L20 24" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Lightning bolt SVG
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2L6 18H16L14 30L26 14H16L18 2Z" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/></svg>,
  // Gear SVG
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="6" stroke="#10b981" strokeWidth="3"/><path d="M16 2V6M16 26V30M2 16H6M26 16H30M6.93 6.93L9.76 9.76M22.24 22.24L25.07 25.07M6.93 25.07L9.76 22.24M22.24 9.76L25.07 6.93" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/></svg>
];

const NUM_ICONS = 18;

const getRandomIconStyle = (i) => {
  const size = Math.random() * 18 + 22; // 22px to 40px
  const left = Math.random() * 95; // 0% to 95%
  const delay = Math.random() * 6; // 0s to 6s
  const duration = 7 + Math.random() * 6; // 7s to 13s
  const opacity = 0.13 + Math.random() * 0.12; // 0.13 to 0.25
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity,
    zIndex: 1,
  };
};

const AnimatedSkillsBackground = () => (
  <div className="animated-skills-bg pointer-events-none">
    {Array.from({ length: NUM_ICONS }).map((_, i) => (
      <span
        key={i}
        className="falling-icon-bg"
        style={getRandomIconStyle(i)}
      >
        {ICONS[i % ICONS.length]}
      </span>
    ))}
  </div>
);

export default AnimatedSkillsBackground; 