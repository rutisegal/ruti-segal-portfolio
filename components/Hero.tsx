import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Dark Magical Background Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-pink rounded-full mix-blend-screen filter blur-[150px] opacity-10" />

      {/* Floating Particles/Runes background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              boxShadow: i % 2 === 0 ? '0 0 10px #00f3ff' : '0 0 10px #b026ff'
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
            Hi, I'm Ruti Segal
          </h1>
          
          {/* Sub-Headline (The Slogan) */}
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink drop-shadow-[0_0_10px_rgba(176,38,255,0.8)]">
              Turning Logic into Magic
            </span>
          </h2>

          {/* Hook Sentence */}
          <motion.div 
            className="inline-block mb-12 px-8 py-3 rounded-full border border-neon-cyan/30 bg-dark-800/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,243,255,0.2)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,243,255,0.5)', borderColor: 'rgba(0,243,255,0.8)' }}
          >
            <p className="font-display text-lg md:text-xl text-neon-cyan font-medium tracking-wide">
              They say it's magic; I know it's logic
            </p>
          </motion.div>
          
          {/* Bio Text - decluttered with lighter weight and more line height */}
          <p className="text-base md:text-lg text-gray-400 mb-14 leading-loose max-w-2xl mx-auto font-light">
            I am a third-year Computer Science student at <span className="text-white font-medium">The Open University</span>, driven by curiosity and grounded in code. My goal is to apply my skills in <span className="text-neon-cyan">Java</span>, <span className="text-neon-purple">C</span>, and <span className="text-neon-pink">SQL</span> to transform complex algorithms into seamless experiences and build reliable software
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 justify-center items-center font-display tracking-widest uppercase text-xs md:text-sm font-bold">
            <button 
              onClick={() => handleScroll('projects')}
              className="relative group px-6 py-4 bg-dark-800 text-white rounded-none overflow-hidden border border-neon-purple shadow-glow-purple transition-all hover:shadow-glow-purple-intense"
            >
              <div className="absolute inset-0 w-0 bg-neon-purple transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
              <span className="relative z-10 group-hover:text-white transition-colors">View My Work</span>
            </button>
            <button 
              onClick={() => handleScroll('contact')}
              className="relative group px-6 py-4 bg-transparent text-gray-300 rounded-none overflow-hidden border border-gray-700 hover:border-neon-cyan transition-all hover:shadow-glow-cyan"
            >
              <div className="absolute inset-0 w-0 bg-neon-cyan transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
              <span className="relative z-10 group-hover:text-white transition-colors">Contact Me</span>
            </button>
            {/* Resume Download Button */}
            <a 
              href="https://drive.google.com/file/d/1wvdlAoQA6WmK_j2ga40Xy94UoYzOP1kg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center gap-2 px-6 py-4 bg-transparent text-neon-pink rounded-none overflow-hidden border border-neon-pink transition-all hover:shadow-glow-pink"
            >
              <div className="absolute inset-0 w-0 bg-neon-pink transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
              <FileText size={16} className="relative z-10 group-hover:text-white transition-colors" />
              <span className="relative z-10 group-hover:text-white transition-colors">Download my resume</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bouncing scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-cyan opacity-70 cursor-pointer"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => handleScroll('skills')}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;