import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900 border-t border-dark-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-pink/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-4xl font-bold text-white mb-6 tracking-widest uppercase">Let's Connect</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto shadow-glow-pink mb-12"></div>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Highly motivated Computer Science student seeking a Student Position or Internship. 
          Whether you have an opportunity, a question, or just want to connect – I’d love to hear from you
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href={`mailto:${CONTACT_INFO.EMAIL}`}
            className="group flex items-center gap-4 px-8 py-5 bg-dark-800 border border-gray-700 hover:border-neon-cyan rounded-none transition-all w-full md:w-auto justify-center shadow-none hover:shadow-glow-cyan"
          >
            <Mail className="text-gray-500 group-hover:text-neon-cyan transition-colors" size={24} />
            <span className="font-display font-medium text-gray-300 group-hover:text-white tracking-wide">{CONTACT_INFO.EMAIL}</span>
          </a>
          
          <a 
            href={`tel:${CONTACT_INFO.PHONE}`}
            className="group flex items-center gap-4 px-8 py-5 bg-dark-800 border border-gray-700 hover:border-neon-pink rounded-none transition-all w-full md:w-auto justify-center shadow-none hover:shadow-glow-pink"
          >
            <Phone className="text-gray-500 group-hover:text-neon-pink transition-colors" size={24} />
            <span className="font-display font-medium text-gray-300 group-hover:text-white tracking-wide">{CONTACT_INFO.PHONE}</span>
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8">
          <a 
            href={CONTACT_INFO.LINKEDIN} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-500 hover:border-neon-cyan hover:text-neon-cyan transition-all hover:shadow-glow-cyan hover:-translate-y-1"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href={CONTACT_INFO.GITHUB} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-500 hover:border-neon-purple hover:text-neon-purple transition-all hover:shadow-glow-purple hover:-translate-y-1"
          >
            <Github size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;