import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Video, ChevronDown, ChevronUp } from 'lucide-react';

// Localized interface to prevent import resolution failures on Vercel
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink: string;
  videoLink: string;
  createdAt: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Safety fallbacks to prevent runtime crashes if data is missing
  const description = project.description || "";
  const title = project.title || "Untitled Project";
  const technologies = project.technologies || [];

  // Split description if it contains double newlines, else use character limit
  const hasSections = description.includes('\n\n');
  const previewText = hasSections 
    ? description.split('\n\n')[0] 
    : description.slice(0, 150) + (description.length > 150 ? '...' : '');
    
  const canExpand = hasSections || description.length > 150;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-dark-800 overflow-hidden transition-all duration-300 border border-dark-700 hover:border-neon-purple hover:shadow-glow-purple flex flex-col h-full relative z-10"
    >
      {/* Tech corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-neon-purple border-l-[30px] border-l-transparent z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative h-56 overflow-hidden border-b border-dark-700 shrink-0">
        <div className="absolute inset-0 bg-dark-700 animate-pulse" />
        <img 
          src={project.imageUrl || `https://picsum.photos/seed/${project.id || index}/800/600`} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
          loading="lazy"
          onError={(e) => {
             (e.target as HTMLImageElement).src = 'https://picsum.photos/800/600';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80 z-20 flex items-end p-6 gap-3">
            {project.githubLink && project.githubLink !== '#' && (
               <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-dark-800/90 border border-gray-600 p-3 rounded-none hover:border-neon-cyan hover:text-neon-cyan hover:shadow-glow-cyan transition-all text-gray-300">
                 <Github size={20} />
               </a>
            )}
            {project.videoLink && project.videoLink !== '#' && (
               <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="bg-neon-pink/10 border border-neon-pink text-neon-pink p-3 rounded-none hover:bg-neon-pink hover:text-white hover:shadow-glow-pink transition-all">
                 <Video size={20} />
               </a>
            )}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-10 bg-dark-800">
        <h3 className="font-display text-xl font-bold text-white mb-3 tracking-wide">{title}</h3>
        
        <div className="mb-6 flex-grow">
          <p className="text-gray-400 leading-relaxed font-light text-sm whitespace-pre-line">
            {isExpanded ? description : previewText}
            {!isExpanded && canExpand && !hasSections && <span>...</span>}
          </p>
          
          {canExpand && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-neon-cyan font-display text-xs tracking-widest uppercase flex items-center gap-1 hover:text-white transition-colors"
            >
              {isExpanded ? (
                <>Show less <ChevronUp size={14} /></>
              ) : (
                <>Read more <ChevronDown size={14} /></>
              )}
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-700">
          {technologies.map((tech, i) => (
            <span 
              key={`${tech}-${i}`} 
              className={`px-3 py-1 bg-dark-900 border ${i % 2 === 0 ? 'border-neon-cyan/30 text-neon-cyan' : 'border-neon-purple/30 text-neon-purple'} text-xs font-display tracking-widest uppercase`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;