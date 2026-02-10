import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  // Completely disabled for static portfolio
  return <Navigate to="/" replace />;
};

export default AdminDashboard;