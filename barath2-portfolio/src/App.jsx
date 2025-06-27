import React, { useState, useEffect } from 'react';
import './App.css';
import AnimatedSkillsBackground from './AnimatedSkillsBackground';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "NFT Marketplace",
      subtitle: "Decentralized NFT Trading Platform",
      description: "Built a comprehensive decentralized NFT marketplace using React.js frontend with Internet Computer blockchain technology. Implemented smart contracts in Motoko for secure minting, listing, and trading operations. Features include decentralized storage, personalized user dashboards, and optimized UI with Material-UI components.",
      technologies: ["React.js", "JavaScript", "Material-UI", "Internet Computer", "Motoko", "Candid", "Canisters", "Blockchain"],
      github: "https://github.com/Barath-developer2004/NFT-marketplace-",
      features: ["Smart Contract Integration", "Decentralized Storage", "User Authentication", "NFT Minting & Trading"],
      image: "/nft.png"
    },
    {
      title: "Real-Time Chat Application",
      subtitle: "Enterprise-Grade Messaging Platform",
      description: "Developed a scalable real-time messaging platform supporting instant communication with WebSocket implementation. Built with Node.js backend, MongoDB for data persistence, and React.js frontend. Includes media sharing capabilities, user authentication with JWT, and optimized for high traffic scenarios.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Cloudinary", "Tailwind CSS", "Redis"],
      github: "https://github.com/Barath-developer2004/Chat-with-Me",
      liveLink: "https://chat-with-me-ecyw.onrender.com",
      features: ["Real-time Messaging", "Media Sharing", "User Authentication", "Scalable Architecture"],
      image: "/chatty.jpg"
    },
    {
      title: "Shoppy E-Commerce Platform",
      subtitle: "Full-Stack E-Commerce Solution",
      description: "Architected and developed a complete e-commerce ecosystem with advanced features including cart management, wishlist functionality, order tracking, and integrated payment processing. Implemented RESTful APIs with efficient database design and real-time customer support using Socket.IO and AI chatbot integration.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT", "PayPal SDK", "Tailwind CSS", "AI Integration"],
      github: "https://github.com/Barath-developer2004/proshop--demo",
      liveLink: "https://snapshop-vme2.onrender.com",
      features: ["Payment Integration", "Admin Dashboard", "AI Chatbot", "Order Management"],
      image: "/snappy.png"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "Material-UI", "Redux Toolkit"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "JWT Authentication", "RESTful APIs", "Socket.IO"] },
    { category: "Programming", items: ["Java", "Data Structures", "Algorithms", "Object-Oriented Programming", "Problem Solving"] },
    { category: "Tools & Technologies", items: ["Git/GitHub", "Internet Computer", "Motoko", "Cloudinary", "PayPal SDK", "AI Integration"] }
  ];

  const experience = [
    {
      title: "Full-Stack Web Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      description: "Developing modern web applications using React.js, Node.js, and cutting-edge technologies including blockchain and AI integration.",
      achievements: [
        "Built 3+ full-stack applications with modern tech stacks",
        "Implemented blockchain integration with Internet Computer",
        "Achieved scalable architecture supporting high user loads",
        "Integrated AI-powered features and real-time communication"
      ]
    },
    {
      title: "Computer Science Student",
      company: "RMK Engineering College",
      period: "2022 - 2026",
      description: "Pursuing BTech in Computer Science and Business Systems with focus on software development and algorithmic problem-solving.",
      achievements: [
        "Strong foundation in Data Structures and Algorithms",
        "Proficient in Java programming and OOP concepts",
        "Active in coding communities and technical projects",
        "Continuous learning of modern web technologies"
      ]
    }
  ];

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <img 
              src="/profile.jpg"
              alt="Loading"
              className="w-full h-full object-cover rounded-lg animate-pulse"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-lg"></div>
          </div>
          <div className="typing-container">
            <h2 className="text-2xl font-mono text-green-400 typing-animation">
              Loading Portfolio...
            </h2>
          </div>
          <div className="loading-bar mt-6">
            <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full loading-progress"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isLoaded ? 'backdrop-blur-lg bg-gray-900/90 border-b border-gray-700/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-3xl font-bold transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Barath.dev
              </span>
            </div>
            <div className={`hidden md:flex space-x-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              {['home', 'profile', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
          <div className="coding-background"></div>
          <AnimatedSkillsBackground />
        </div>
        
        <div className="relative z-50 text-center max-w-5xl mx-auto px-4">
          <div className={`transition-all duration-1500 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Profile Picture */}
            <div className="mb-8">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full p-1 animate-gradient">
                  <div className="w-full h-full bg-gray-900 rounded-full p-2">
                    <img 
                      src="/profile.jpg" 
                      alt="Barath Y - Profile Picture"
                      className="w-full h-full object-cover rounded-full border-4 border-gray-700 hover:border-blue-500 transition-all duration-300"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face';
                      }}
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">🚀</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight text-hover-effect">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                  Barath Y
                </span>
              </h1>
              <div className="text-2xl md:text-4xl text-gray-300 mb-6 typewriter-container">
                <span className="typewriter">Full-Stack Web Developer</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting innovative digital experiences with modern web technologies and algorithmic excellence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-blue-500/20"
              >
                Explore My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-500 rounded-xl font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Let's Connect
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">200+</div>
                <div className="text-gray-400">DSA Problems</div>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-hover-effect">
              Developer Profile
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A passionate computer science student with expertise in modern web development and algorithmic problem-solving
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Profile Picture & Info */}
            <div className="space-y-8">
              {/* Professional Profile Picture Section */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600/30 backdrop-blur-sm text-center">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full p-1 animate-gradient">
                    <div className="w-full h-full bg-gray-800 rounded-full p-2">
                      <img 
                        src="/profile.jpg" 
                        alt="Barath Y - Professional Headshot"
                        className="w-full h-full object-cover rounded-full border-2 border-gray-600 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face';
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Barath Y</h3>
                <p className="text-blue-400 font-semibold mb-1">Full-Stack Web Developer</p>
                <p className="text-gray-400 text-sm">RMK Engineering College</p>
                <p className="text-green-400 text-sm mt-2 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for Opportunities
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600/30 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-blue-400 mb-6">About Me</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm currently pursuing BTech in <strong className="text-white">Computer Science and Business Systems</strong> at 
                    RMK Engineering College, where I've developed a strong foundation in software development and system design.
                  </p>
                  <p>
                    My passion lies in creating scalable web applications using modern technologies like React.js, Node.js, and 
                    exploring cutting-edge domains including blockchain development and AI integration.
                  </p>
                  <p>
                    Alongside web development, I'm actively strengthening my problem-solving skills through 
                    <strong className="text-white"> Data Structures and Algorithms in Java</strong>, having solved 100+ problems 
                    across various complexity levels.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600/30">
                <h3 className="text-3xl font-bold text-purple-400 mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-white">BTech in Computer Science and Business Systems</h4>
                    <p className="text-blue-400 font-medium">RMK Engineering College</p>
                    <p className="text-gray-400">2022 - 2026 (Expected)</p>
                    <p className="text-gray-300 mt-2">
                      Comprehensive curriculum covering software engineering, web technologies, database systems, 
                      and business applications of computer science.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center text-green-400 mb-8">Technical Expertise</h3>
              {skills.map((skillCategory, index) => (
                <div 
                  key={skillCategory.category}
                  className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600/30"
                >
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">{skillCategory.category}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="bg-gray-600/30 px-4 py-3 rounded-lg text-center hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                      >
                        <span className="text-sm font-medium text-gray-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-hover-effect">
              Experience & Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My development journey and continuous learning path in modern web technologies
            </p>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div 
                key={exp.title}
                className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600/30 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                        <p className="text-gray-400">{exp.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-purple-400">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <span className="text-green-400 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="text-8xl opacity-20 font-bold text-blue-400">
                    {index === 0 ? '💻' : '🎓'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-hover-effect">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing innovative solutions built with modern technologies and best practices
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-cols-2'}`}
              >
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500 border border-gray-600/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent rounded-2xl"></div>
                    <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                      Featured Project
                    </div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-xl text-blue-400 font-semibold">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-gray-300">
                          <span className="text-green-400">●</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-600"
                    >
                      <span>GitHub Repository</span>
                    </a>
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-hover-effect">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Open to new opportunities, collaborations, and discussions about technology and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <a 
              href="mailto:barathsyntax@gmail.com"
              className="group bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 border border-gray-600/30"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-xl mb-3">Email</h3>
              <p className="text-gray-300 text-sm break-all">barathsyntax@gmail.com</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/barath-y-a79b26257/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 border border-gray-600/30"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-bold text-xl mb-3">LinkedIn</h3>
              <p className="text-gray-300 text-sm">Professional Network</p>
            </a>

            <a 
              href="https://github.com/Barath-developer2004"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 border border-gray-600/30"
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-xl mb-3">GitHub</h3>
              <p className="text-gray-300 text-sm">Code Repository</p>
            </a>

            <a 
              href="https://www.youtube.com/@CodeCheckwithBarath"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 border border-gray-600/30"
            >
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="font-bold text-xl mb-3">YouTube</h3>
              <p className="text-gray-300 text-sm">CodeCheck Channel</p>
            </a>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-10 rounded-2xl inline-block border border-gray-600/30">
              <h3 className="text-3xl font-bold text-blue-400 mb-6">Download Resume</h3>
              <p className="text-gray-300 mb-8 max-w-md">
                Get a comprehensive overview of my skills, experience, and projects in a professional format.
              </p>
              <a
                href="/Barath_resume.pdf"
                download
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Barath.dev
            </div>
            <p className="text-gray-400 mb-6">
              Building the future, one line of code at a time.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Barath Y. Crafted with React, Tailwind CSS, and passion for innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return <Portfolio />;
}

export default App;