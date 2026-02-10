import React from 'react';
import { INITIAL_PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const ProjectsGallery: React.FC = () => {
  const projects = INITIAL_PROJECTS;

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