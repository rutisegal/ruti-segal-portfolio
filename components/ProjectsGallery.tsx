import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

// Hardcoded static data for the portfolio
const projects: Project[] = [
  {
    id: "proj_1",
    title: "Two-Pass Assembler for Custom Architecture",
    description: "Bridging the gap between human-readable code and machine execution. A high-performance, two-pass assembler built from scratch in C, featuring custom memory management, complex instruction parsing, and binary generation for a unique CPU architecture\n\nKey Features\n• Core Logic: Implemented a full two-pass translation process (Symbol Table & Code Generation)\n• System Mastery: Direct memory management and bitwise operations in a Linux environment\n• Robustness: Advanced error handling and edge-case validation",
    technologies: ["C Programming", "System Programming", "Low-Level Linux", "Memory Management", "Data Structures", "Algorithms"],
    imageUrl: "https://picsum.photos/id/0/800/600",
    githubLink: "#",
    videoLink: "#",
    createdAt: Date.now()
  }
];

const ProjectsGallery: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-900 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-6 tracking-widest uppercase">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto shadow-glow-purple"></div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center text-gray-400 p-12 bg-dark-800 border border-dark-700 max-w-2xl mx-auto font-display">
            <h3 className="text-2xl font-bold mb-2 text-white">No projects found</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;