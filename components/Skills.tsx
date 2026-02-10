import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_LIST } from '../constants';

const Skills: React.FC = () => {
  // Map color names to Tailwind utility classes
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          text: 'text-neon-cyan',
          border: 'border-neon-cyan/30',
          hoverBorder: 'group-hover:border-neon-cyan',
          shadow: 'shadow-[0_0_15px_rgba(0,243,255,0.1)]',
          hoverShadow: 'group-hover:shadow-glow-cyan-intense',
          bg: 'bg-dark-800'
        };
      case 'purple':
        return {
          text: 'text-neon-purple',
          border: 'border-neon-purple/30',
          hoverBorder: 'group-hover:border-neon-purple',
          shadow: 'shadow-[0_0_15px_rgba(176,38,255,0.1)]',
          hoverShadow: 'group-hover:shadow-glow-purple-intense',
          bg: 'bg-dark-800'
        };
      case 'pink':
        return {
          text: 'text-neon-pink',
          border: 'border-neon-pink/30',
          hoverBorder: 'group-hover:border-neon-pink',
          shadow: 'shadow-[0_0_15px_rgba(255,0,127,0.1)]',
          hoverShadow: 'group-hover:shadow-glow-pink-intense',
          bg: 'bg-dark-800'
        };
      default:
        return {
          text: 'text-white',
          border: 'border-gray-700',
          hoverBorder: 'group-hover:border-white',
          shadow: 'shadow-none',
          hoverShadow: 'group-hover:shadow-lg',
          bg: 'bg-dark-800'
        };
    }
  };

  return (
    <section id="skills" className="py-24 bg-dark-900 relative border-t border-dark-800 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-bold text-white mb-6 tracking-widest uppercase">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto shadow-glow-purple"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {SKILLS_LIST.map((skill, index) => {
            const styles = getColorClasses(skill.color);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-none relative z-10"
              >
                {/* Magical Rune Orb */}
                <div 
                  className={`
                    relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center
                    rounded-full border-2 transition-all duration-500
                    ${styles.bg} ${styles.border} ${styles.hoverBorder}
                    ${styles.shadow} ${styles.hoverShadow}
                    animate-float
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Inner glow element */}
                  <div className="absolute inset-2 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Skill Text */}
                  <span className={`font-display font-bold text-xl tracking-wider transition-all duration-300 text-gray-400 group-hover:${styles.text}`}>
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;