import React, { useState } from 'react';

const FloatingSpinner = ({ scrollToSection, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠', color: 'from-blue-500 to-cyan-500' },
    { id: 'profile', label: 'Profile', icon: '👨‍💻', color: 'from-purple-500 to-pink-500' },
    { id: 'experience', label: 'Experience', icon: '💼', color: 'from-green-500 to-teal-500' },
    { id: 'projects', label: 'Projects', icon: '🚀', color: 'from-orange-500 to-red-500' },
    { id: 'contact', label: 'Contact', icon: '📧', color: 'from-yellow-500 to-orange-500' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const toggleSpinner = () => {
    setIsOpen(!isOpen);
  };

  // Calculate positions for circular layout with equal spacing
  const getCircularPosition = (index, total) => {
    const radius = 100; // Good radius for visibility
    // Distribute items evenly around the circle, starting from top
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 z-40"
          onClick={toggleSpinner}
        />
      )}

      {/* Main Container - Centered positioning for perfect circle */}
      <div className="fixed bottom-20 left-20 z-40">
        
        {/* Circular Navigation Items - All items equally spaced */}
        <div className={`relative transition-all duration-500 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}>
          {navigationItems.map((item, index) => {
            const { x, y } = getCircularPosition(index, navigationItems.length);
            const isActive = activeSection === item.id;
            
            return (
              <div
                key={item.id}
                className={`absolute transition-all duration-700 ease-out ${
                  isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  transformOrigin: 'center',
                  transitionDelay: isOpen ? `${index * 150}ms` : '0ms',
                  zIndex: 60
                }}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br ${item.color} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 ${
                    isActive ? 'ring-4 ring-white/50 scale-110' : ''
                  }`}
                  title={item.label}
                >
                  {/* Spinning border for active item */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full animate-spin">
                      <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} opacity-30 animate-pulse`}></div>
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl z-10">
                    {item.icon}
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Label - Always visible below each button */}
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900/90 backdrop-blur-sm text-white text-xs rounded-md border border-gray-600/50 shadow-lg transition-all duration-300 whitespace-nowrap ${
                    isActive ? 'bg-blue-600/90 border-blue-400/50 text-white' : ''
                  }`}>
                    {item.label}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Central Spinner Button */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ${
            isOpen ? 'animate-spin' : ''
          } opacity-30`}></div>
          
          {/* Middle ring */}
          <div className={`absolute inset-1 w-18 h-18 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-700 ${
            isOpen ? 'animate-spin' : ''
          } opacity-50`} style={{ animationDirection: 'reverse' }}></div>
          
          {/* Main button */}
          <button
            onClick={toggleSpinner}
            className={`relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-blue-500/50 ${
              isOpen ? 'rotate-180 scale-110' : 'rotate-0 hover:rotate-12'
            }`}
          >
            {/* Pulsing center */}
            <div className={`absolute inset-3 rounded-full bg-white/20 transition-all duration-300 ${
              isOpen ? 'animate-pulse' : ''
            }`}></div>
            
            {/* Icon */}
            <div className={`absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-all duration-500 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}>
              {isOpen ? '✕' : '✨'}
            </div>
            
            {/* Ripple effect when closed */}
            {!isOpen && (
              <>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-20"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-15" style={{ animationDelay: '0.5s' }}></div>
              </>
            )}
          </button>
        </div>

        {/* Floating particles effect */}
        {isOpen && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-60`}
                style={{
                  left: `${Math.random() * 200 - 100}px`,
                  top: `${Math.random() * 200 - 100}px`,
                  animationDelay: `${i * 200}ms`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingSpinner;
