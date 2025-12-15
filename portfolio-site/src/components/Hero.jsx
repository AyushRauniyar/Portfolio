import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiPhone } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import GridBackground from './GridBackground';

const Hero = () => {
  const dynamicTexts = [
    'Backend Engineer',
    'Software Engineer',
    'Full Stack Engineer',
    'Problem Solver',
  ];
  
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20">
      {/* Grid Background */}
      <GridBackground />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent z-0"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block">Hey there</span>{' '}
                <motion.span 
                  className="inline-block"
                  animate={{ 
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                >
                  👋
                </motion.span>
              </motion.h1>
              <div className="text-2xl md:text-3xl font-semibold text-gray-300">
                I'm <span className="text-white font-bold">Ayush</span>, a{' '}
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-gradient inline-block"
                >
                  {dynamicTexts[currentText]}
                </motion.span>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Backend-focused Software Engineer working at <span className="text-primary font-semibold">Verint Systems</span>, building scalable microservices, data pipelines, and cloud-native platforms. I work with Java, Spring Boot, Python, Kafka, and AWS to modernize legacy systems, improve reliability, and ship production-grade software.
            </p>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              I've built LLM-powered analytics solutions, designed event-driven architectures, and contributed to security and compliance initiatives (PCI 4.0). Passionate about clean code, system design, and solving real-world problems at scale.
            </p>

            <motion.div 
              className="glass-card px-4 py-2.5 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 inline-block relative overflow-hidden group active:shadow-sde-glow"
              whileHover={{ scale: 1.04, borderColor: "rgba(14, 165, 233, 0.6)" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ boxShadow: '0 0 24px 0 rgba(139,92,246,0.15), 0 2px 8px 0 rgba(14,165,233,0.10)' }}
            >
              <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent flex items-center gap-2 group-hover:animate-float-sde group-hover:animate-pulse-sde">
                <span className="inline-block group-hover:animate-bounce-sde">🎯</span>
                Open to SDE-2 / SDE-1 roles where I can grow and deliver impact
              </p>
              {/* Light effect below box on click */}
              <span className="pointer-events-none absolute left-1/2 -bottom-2 w-2/3 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/30 blur-md opacity-0 group-active:opacity-100 transition-opacity duration-300"></span>
              <style>{`
                @keyframes float-sde {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-6px); }
                }
                @keyframes pulse-sde {
                  0%, 100% { box-shadow: 0 0 24px 0 rgba(139,92,246,0.15), 0 2px 8px 0 rgba(14,165,233,0.10); }
                  50% { box-shadow: 0 0 36px 8px rgba(139,92,246,0.25), 0 4px 16px 0 rgba(14,165,233,0.18); }
                }
                @keyframes bounce-sde {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
                .group-hover\:animate-float-sde:hover { animation: float-sde 2.5s ease-in-out; }
                .group-hover\:animate-pulse-sde:hover { animation: pulse-sde 2.5s ease-in-out; }
                .group-hover\:animate-bounce-sde:hover { animation: bounce-sde 1.2s cubic-bezier(.8,0,1,1); }
                .shadow-sde-glow { box-shadow: 0 0 40px 8px rgba(14,165,233,0.25), 0 2px 16px 0 rgba(139,92,246,0.18); }
              `}</style>
            </motion.div>

            {/* Buttons and Social Links Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-sm md:text-base font-semibold transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-black
                  hover:scale-105 hover:shadow-xl hover:shadow-primary/40 active:scale-98 relative overflow-hidden group"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10"></span>
                </a>
                <a
                  href="/Resume.pdf"
                  download
                  className="px-6 py-2.5 border-2 border-primary rounded-full text-white text-sm md:text-base font-semibold flex items-center gap-2 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-black
                  hover:scale-105 hover:border-secondary hover:shadow-xl hover:shadow-secondary/30 active:scale-98 relative overflow-hidden group"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="transition-transform duration-500 group-hover:rotate-[-24deg] group-active:rotate-[360deg]">
                      <FiDownload size={18} />
                    </span>
                    Download CV
                  </span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10"></span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pl-3 border-l-2 border-primary/30">
                <a
                  href="https://linkedin.com/in/ayush-rauniyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group"
                  aria-label="LinkedIn"
                >
                  <span className="icon-anim icon-anim-left">
                    <FiLinkedin size={28} />
                  </span>
                </a>
                <a
                  href="https://github.com/AyushRauniyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group"
                  aria-label="GitHub"
                >
                  <span className="icon-anim icon-anim-right">
                    <FiGithub size={28} />
                  </span>
                </a>
                <a
                  href="https://wa.me/919129489002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group"
                  aria-label="WhatsApp"
                >
                  <span className="icon-anim icon-anim-left">
                    <FiPhone size={28} />
                  </span>
                </a>
                <a
                  href="mailto:ayushjnv0@gmail.com"
                  className="social-icon group"
                  aria-label="Email"
                >
                  <span className="icon-anim icon-anim-right">
                    <FiMail size={28} />
                  </span>
                </a>
                <style>{`
                  .social-icon {
                    color: #9ca3af;
                    transition: color 0.3s, filter 0.3s;
                    display: inline-flex;
                  }
                  .social-icon:hover {
                    color: var(--tw-gradient-from, #0ea5e9);
                    filter: drop-shadow(0 0 8px #0ea5e9aa);
                  }
                  .icon-anim {
                    display: inline-flex;
                    transition: transform 0.25s cubic-bezier(.4,2,.6,1), filter 0.3s;
                  }
                  .icon-anim-left {
                    /* Default: no rotation */
                  }
                  .icon-anim-right {
                    /* Default: no rotation */
                  }
                  .group:hover .icon-anim-left {
                    transform: scale(1.18) rotate(-12deg);
                    filter: drop-shadow(0 0 12px #8b5cf6cc);
                  }
                  .group:hover .icon-anim-right {
                    transform: scale(1.18) rotate(12deg);
                    filter: drop-shadow(0 0 12px #8b5cf6cc);
                  }
                  .group:active .icon-anim-left {
                    animation: pulse-social-left 0.4s cubic-bezier(.4,2,.6,1);
                  }
                  .group:active .icon-anim-right {
                    animation: pulse-social-right 0.4s cubic-bezier(.4,2,.6,1);
                  }
                  @keyframes pulse-social-left {
                    0% { transform: scale(1) rotate(0deg); }
                    40% { transform: scale(1.25) rotate(-16deg); }
                    60% { transform: scale(0.95) rotate(8deg); }
                    100% { transform: scale(1) rotate(0deg); }
                  }
                  @keyframes pulse-social-right {
                    0% { transform: scale(1) rotate(0deg); }
                    40% { transform: scale(1.25) rotate(16deg); }
                    60% { transform: scale(0.95) rotate(-8deg); }
                    100% { transform: scale(1) rotate(0deg); }
                  }
                `}</style>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            {/* Profile Image Container */}
            <div className="w-full max-w-xs md:max-w-[360px]">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
                <div className="relative glass-card rounded-2xl p-2 shadow-2xl shadow-primary/20 border border-primary/20">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src="/profile-image.jpg" 
                      alt="Ayush Rauniyar - Software Engineer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
