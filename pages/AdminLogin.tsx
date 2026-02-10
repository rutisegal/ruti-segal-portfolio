import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'password') {
        onLogin();
        navigate('/dashboard');
      } else {
        setError('ACCESS DENIED: Invalid credentials');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 flex flex-col items-center justify-center bg-dark-900 px-4">
      <div className="bg-dark-800 p-8 sm:p-12 max-w-md w-full border border-dark-700 relative overflow-hidden group hover:border-neon-cyan/50 transition-colors">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-cyan"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-cyan"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-cyan"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-cyan"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-cyan mix-blend-screen filter blur-[100px] opacity-5"></div>
        
        <div className="w-16 h-16 border border-neon-cyan bg-dark-900 text-neon-cyan flex items-center justify-center mx-auto mb-6 shadow-glow-cyan">
          <Lock size={28} />
        </div>
        
        <h2 className="font-display text-2xl font-bold text-white text-center mb-2 tracking-widest uppercase">System Auth</h2>
        <p className="font-display text-xs text-neon-purple text-center mb-8 tracking-[0.2em] uppercase">Require Credentials</p>

        {error && (
          <div className="mb-6 p-4 bg-neon-pink/10 text-neon-pink border border-neon-pink text-center font-display text-xs tracking-wider uppercase shadow-glow-pink">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
          <div>
            <label className="block text-xs font-display text-gray-400 mb-2 tracking-widest uppercase">Identity Link</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-cyan transition-all font-mono text-sm"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-display text-gray-400 mb-2 tracking-widest uppercase">Passkey</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-cyan transition-all font-mono text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-display font-bold tracking-widest uppercase hover:bg-neon-cyan hover:text-dark-900 transition-all hover:shadow-glow-cyan disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Override'}
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-dark-700 text-center relative z-10">
            <p className="font-mono text-xs text-gray-600">Dev Mode:<br/>admin@example.com / password</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
