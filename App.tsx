import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <HashRouter>
      {/* Hide on touch devices via CSS, but component handles its own display logic too */}
      <div className="hidden sm:block">
        <CustomCursor />
      </div>
      
      <Navigation />
      
      <div className="pt-0"> {/* Padding top handled by sections if needed, nav is fixed */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;