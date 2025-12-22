import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set(['home']));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Small delay to ensure DOM is ready after loading
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => {
      clearTimeout(timer);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isLoading]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skills = {
    frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind CSS', 'Material-UI', 'Redux Toolkit'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Socket.IO', 'JWT'],
    languages: ['Java', 'JavaScript', 'Python'],
    tools: ['Git/GitHub', 'Vite', 'VS Code', 'Postman', 'Docker']
  };

  const projects = [
    {
      title: 'NFT Marketplace',
      description: 'Decentralized NFT trading platform built on Internet Computer blockchain with React.js frontend and Motoko smart contracts. Features include smart contract integration, decentralized storage, and secure NFT minting & trading operations.',
      tech: ['React.js', 'Material-UI', 'Internet Computer', 'Motoko', 'Blockchain', 'Candid'],
      github: 'https://github.com/Barath-developer2004/NFT-marketplace-',
      highlights: ['Smart Contract Integration', 'Decentralized Storage', 'NFT Minting & Trading', 'User Dashboard']
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Enterprise-grade messaging platform with WebSocket implementation supporting instant communication and media sharing. Built with MERN stack, featuring real-time messaging, user authentication, and scalable architecture for high traffic.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Cloudinary', 'JWT'],
      github: 'https://github.com/Barath-developer2004/Chat-with-Me',
      live: 'https://chat-with-me-ecyw.onrender.com',
      highlights: ['Real-time Messaging', 'Media Sharing', 'User Authentication', 'Scalable Architecture']
    },
    {
      title: 'Shoppy E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced features including cart management, wishlist, order tracking, and integrated payment processing. Includes admin dashboard, AI chatbot support, and real-time customer service.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'PayPal SDK', 'AI Integration'],
      github: 'https://github.com/Barath-developer2004/proshop--demo',
      live: 'https://snapshop-vme2.onrender.com',
      highlights: ['Payment Gateway', 'Admin Dashboard', 'AI Chatbot', 'Order Management']
    }
  ];

  if (isLoading) {
    return <Loader onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-1/2 -right-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -bottom-48 left-1/2 animate-pulse"></div>
      </div>
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Barath.dev
            </h1>
            
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 relative group ${
                    activeSection === section ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform origin-left transition-transform duration-300 ${
                    activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/Barath_resume.pdf"
                download
                className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Resume
              </a>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 animate-fade-in">
              {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-all duration-300 ${
                    activeSection === section ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section}
                </button>
              ))}
              <a
                href="/Barath_resume.pdf"
                download
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium mt-4"
              >
                Download Resume
              </a>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float top-20 left-10"></div>
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float bottom-20 right-10" style={{animationDelay: '2s'}}></div>
          <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float top-1/2 left-1/2" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0 animate-slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 animate-glow transition-opacity duration-500"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 p-1.5 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-full bg-slate-900 p-2">
                    <img 
                      src={`/profile.jpg?v=${Date.now()}`}
                      alt="Barath Y"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => e.target.src = 'https://ui-avatars.com/api/?name=Barath+Y&size=400&background=3b82f6&color=fff&bold=true'}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-gradient-x animate-slide-in-right delay-200">
                Barath Y
              </h1>
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 flex items-center justify-center lg:justify-start gap-2 animate-slide-in-right delay-300">
                <span className="inline-block animate-wave">👋</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Full-Stack Web Developer
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-400">
                Crafting innovative web solutions with <span className="text-cyan-400 font-semibold">React</span>, <span className="text-green-400 font-semibold">Node.js</span>, and modern technologies. 
                Passionate about <span className="text-blue-400 font-semibold">clean code</span> and 
                <span className="text-purple-400 font-semibold"> exceptional user experiences</span>.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:200%_100%] rounded-lg font-semibold hover:bg-right transition-all duration-500 hover:scale-110 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/50 relative overflow-hidden animate-slide-up delay-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden animate-slide-up delay-400"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <span className="group-hover:rotate-12 transition-transform duration-300">✨</span>
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left group cursor-pointer animate-slide-up delay-500 hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-sm md:text-base text-gray-400 group-hover:text-blue-400 transition-colors">Projects</div>
                </div>
                <div className="text-center lg:text-left group cursor-pointer animate-slide-up delay-600 hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-sm md:text-base text-gray-400 group-hover:text-cyan-400 transition-colors">Technologies</div>
                </div>
                <div className="text-center lg:text-left group cursor-pointer animate-slide-up delay-700 hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-sm md:text-base text-gray-400 group-hover:text-purple-400 transition-colors">Problems Solved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a <span className="text-white font-semibold">Computer Science student</span> at RMK Engineering College, 
                pursuing BTech in Computer Science and Business Systems with a passion for building impactful web applications.
              </p>
              <p>
                My expertise lies in the <span className="text-blue-400 font-semibold">MERN stack</span> (MongoDB, Express.js, React.js, Node.js), 
                and I've successfully built full-stack applications including NFT marketplaces, real-time chat platforms, and e-commerce solutions.
              </p>
              <p>
                Beyond web development, I'm actively strengthening my algorithmic thinking through 
                <span className="text-cyan-400 font-semibold"> Data Structures and Algorithms</span>, 
                having solved 500+ problems in Java across various difficulty levels.
              </p>
              <p>
                I'm always eager to learn new technologies and explore cutting-edge domains like 
                blockchain development and AI integration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">BTech in Computer Science & Business Systems</h4>
                  <p className="text-blue-400 font-medium">RMK Engineering College</p>
                  <p className="text-gray-400">2022 - 2026 (Expected)</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500/20">
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Stats</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Full-Stack Projects</span>
                    <span className="text-blue-400 font-semibold">5+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DSA Problems</span>
                    <span className="text-cyan-400 font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technologies</span>
                    <span className="text-purple-400 font-semibold">10+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 capitalize text-blue-400 group-hover:text-cyan-400 transition-colors">
                  {category === 'frontend' ? '🎨 Frontend' : category === 'backend' ? '⚙️ Backend' : category === 'languages' ? '💻 Languages' : '🛠️ Tools'}
                </h3>
                <div className="space-y-2">
                  {items.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2 group/item hover:translate-x-2 transition-transform duration-200">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-gray-300 text-sm md:text-base group-hover/item:text-white transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl p-6 md:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg mb-4 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-500/20 ml-4 group-hover:text-blue-500/40 transition-colors">0{index + 1}</div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                    <span>✨</span> Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span key={highlight} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs md:text-sm hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                    <span>🚀</span> Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs md:text-sm border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn px-6 py-2.5 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <span>View Code</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
                    >
                      <span>Live Demo</span>
                      <span className="group-hover/btn:scale-125 transition-transform">🚀</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications & Achievements</h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certificate Card 1 - RMD Prototype Parade */}
            <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 group">
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="/rmdtech.jpg" 
                  alt="RMD Prototype Parade First Prize" 
                  className="w-full h-72 md:h-96 object-contain bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <span>🥇</span> 1st Prize
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Prototype Parade</h3>
                <p className="text-cyan-400 text-sm mb-4">RMD Engineering College • 2025</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Won first prize for developing a fully decentralized NFT Marketplace application on blockchain technology with smart contract integration.
                </p>
                <a 
                  href="/rmdtech.jpg" 
                  download 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500 rounded-lg transition-all duration-300 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Certificate
                </a>
              </div>
            </div>

            {/* Certificate Card 2 - SIH */}
            <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group">
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="/sih.jpg" 
                  alt="Smart India Hackathon Certificate"
                  className="w-full h-72 md:h-96 object-contain bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <span>🏆</span> Finalist
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Smart India Hackathon</h3>
                <p className="text-blue-400 text-sm mb-4">Grand Finale 2023 • December 19-20, 2023</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Participated as finalist in SIH Senior Software Edition, working on blockchain network technology with data compression.
                </p>
                <a 
                  href="/sih.jpg" 
                  download="SIH_Certificate_Barath.jpg"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500 rounded-lg transition-all duration-300 text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Certificate
                </a>
              </div>
            </div>

            {/* Certificate Card 3 - RMK Project Presentation */}
            <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group">
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="/rmktech.jpg" 
                  alt="RMK Project Presentation Second Prize" 
                  className="w-full h-72 md:h-96 object-contain bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <span>🥈</span> 2nd Prize
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Project Presentation</h3>
                <p className="text-purple-400 text-sm mb-4">RMK Engineering College • 2025</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Awarded second prize for developing a full-fledged E-Commerce application with product management and secure payment integration.
                </p>
                <a 
                  href="/rmktech.jpg" 
                  download 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-500 rounded-lg transition-all duration-300 text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-16">
            I'm always open to discussing new opportunities, collaborations, or just chatting about tech!
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <a
              href="mailto:barathsyntax@gmail.com"
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-xs md:text-sm text-gray-400 break-all group-hover:text-blue-400 transition-colors">barathsyntax@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/barath-y-a79b26257/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">Connect with me</p>
            </a>

            <a
              href="https://github.com/Barath-developer2004"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-700 hover:scale-105 group delay-200 ${visibleSections.has('contact') ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2">GitHub</h3>
              <p className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">Check my code</p>
            </a>

            <a
              href="https://www.youtube.com/@CodeCheckwithBarath"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-700 hover:scale-105 group delay-300 ${visibleSections.has('contact') ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-10'}`}
            >
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="font-bold text-lg mb-2">YouTube</h3>
              <p className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">CodeCheck Channel</p>
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <div className="text-4xl md:text-5xl mb-6">📄</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Download My Resume</h3>
            <p className="text-gray-400 mb-8">Get a detailed overview of my skills and experience</p>
            <a
              href="/Barath_resume.pdf"
              download
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Barath.dev
          </div>
          <p className="text-gray-400 mb-6">
            Built with React & Tailwind CSS • © 2025 Barath Y
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:barathsyntax@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">📧</a>
            <a href="https://www.linkedin.com/in/barath-y-a79b26257/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">💼</a>
            <a href="https://github.com/Barath-developer2004" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">💻</a>
            <a href="https://www.youtube.com/@CodeCheckwithBarath" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">🎥</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return <Portfolio />;
}
