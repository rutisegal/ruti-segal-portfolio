import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  // Completely disabled for static portfolio
  return <Navigate to="/" replace />;
};

export default AdminLogin;