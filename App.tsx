import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="hidden sm:block z-[9999]">
        <CustomCursor />
      </div>
      
      {/* High z-index wrapper ensures app content floats above the #root background */}
      <div className="relative z-10 w-full min-h-screen">
        <Navigation />
        
        <div className="pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;