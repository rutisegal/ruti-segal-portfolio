import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center border border-neon-cyan shadow-glow-cyan"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#ff007f' : '#00f3ff',
          boxShadow: isHovering ? '0 0 20px rgba(255, 0, 127, 0.5)' : '0 0 20px rgba(0, 243, 255, 0.5)',
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {/* Inner core */}
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isHovering ? 'bg-neon-pink' : 'bg-neon-cyan'}`} />
      </motion.div>
      
      {/* Tiny dot leader */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neon-purple rounded-full pointer-events-none z-[10000] shadow-glow-purple"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
        }}
      />
    </>
  );
};

export default CustomCursor;
