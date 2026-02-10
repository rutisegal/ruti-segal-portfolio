import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectsGallery from '../components/ProjectsGallery';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <Skills />
      <ProjectsGallery />
      <Contact />
      
      <footer className="py-8 text-center text-gray-600 bg-dark-900 border-t border-dark-700 font-display text-xs tracking-[0.2em] uppercase">
        <p>© 2026 Ruti Segal</p>
      </footer>
    </main>
  );
};

export default Home;