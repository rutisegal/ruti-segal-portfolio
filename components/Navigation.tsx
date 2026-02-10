import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCircle, Code2 } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin') || location.pathname === '/dashboard';

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 text-2xl font-display font-bold text-white interactive-hover group">
            <div className="w-10 h-10 border-2 border-neon-cyan bg-dark-800 flex items-center justify-center text-neon-cyan group-hover:shadow-glow-cyan transition-all">
              <Code2 size={20} />
            </div>
            <span className="tracking-widest">RUTI<span className="text-neon-cyan">_SEGAL</span></span>
          </Link>
          
          <div className="flex gap-8 items-center">
            {!isAdminPath ? (
              <>
                <button onClick={() => handleScroll('hero')} className="font-display text-xs tracking-[0.2em] text-gray-400 hover:text-neon-pink transition-colors uppercase">About</button>
                <button onClick={() => handleScroll('projects')} className="font-display text-xs tracking-[0.2em] text-gray-400 hover:text-neon-purple transition-colors uppercase">Projects</button>
                <button onClick={() => handleScroll('contact')} className="font-display text-xs tracking-[0.2em] text-gray-400 hover:text-neon-cyan transition-colors uppercase">Contact</button>
                <Link to="/admin" className="p-2 text-gray-500 hover:text-neon-purple transition-colors" title="System Override">
                  <UserCircle size={22} />
                </Link>
              </>
            ) : (
              <Link to="/" className="font-display text-xs tracking-[0.2em] text-neon-cyan hover:text-white transition-colors uppercase flex items-center gap-2">
                &larr; Return to Main
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;