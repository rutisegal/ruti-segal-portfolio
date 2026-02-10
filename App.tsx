import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  // Simple auth state for demo. 
  // In real app, listen to Firebase onAuthStateChanged inside a context.
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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
          <Route 
            path="/admin" 
            element={
              isAuthenticated ? 
                <Navigate to="/dashboard" replace /> : 
                <AdminLogin onLogin={() => setIsAuthenticated(true)} />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? 
                <AdminDashboard onLogout={() => setIsAuthenticated(false)} /> : 
                <Navigate to="/admin" replace />
            } 
          />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
