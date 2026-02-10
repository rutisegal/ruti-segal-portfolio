import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, LogOut, Save, X, Info } from 'lucide-react';
import { Project } from '../types';
import { getProjects, addProject, updateProject, deleteProject } from '../services/mockFirebase';

interface AdminDashboardProps {
  onLogout: () => void;
}

const emptyProject = {
  title: '',
  description: '',
  technologies: '',
  imageUrl: '',
  githubLink: '',
  videoLink: ''
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [formData, setFormData] = useState(emptyProject);
  const navigate = useNavigate();

  const fetchProjectsData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjectsData();
  }, [fetchProjectsData]);

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = (project: Project) => {
    setCurrentId(project.id);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      imageUrl: project.imageUrl,
      githubLink: project.githubLink,
      videoLink: project.videoLink
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('WARNING: Deletion is permanent. Proceed?')) {
      try {
        await deleteProject(id);
        fetchProjectsData();
      } catch (error) {
        console.error("Error deleting project", error);
        alert("Action failed.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const techArray = formData.technologies
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const projectData = {
      title: formData.title,
      description: formData.description,
      technologies: techArray,
      imageUrl: formData.imageUrl,
      githubLink: formData.githubLink,
      videoLink: formData.videoLink
    };

    try {
      if (currentId) {
        await updateProject(currentId, projectData);
      } else {
        await addProject(projectData);
      }
      
      setFormData(emptyProject);
      setIsEditing(false);
      setCurrentId(null);
      await fetchProjectsData();
    } catch (error) {
      console.error("Error saving project", error);
      alert("Action failed.");
    } finally {
      setLoading(false);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentId(null);
    setFormData(emptyProject);
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-12 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-dark-700 pb-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-white uppercase tracking-widest">Control Panel</h1>
            <p className="font-display text-neon-cyan text-xs tracking-[0.2em] mt-2 uppercase">Root Access Granted</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 bg-dark-800 border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white transition-all shadow-none hover:shadow-glow-pink font-display uppercase tracking-widest text-xs"
          >
            <LogOut size={16} />
            Terminate Session
          </button>
        </div>

        {/* Database Notice */}
        <div className="bg-neon-purple/5 border border-neon-purple/30 p-6 mb-8 flex gap-4 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(176,38,255,0.05)]">
          <Info className="text-neon-purple shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-display tracking-widest uppercase text-neon-purple font-bold text-sm mb-2">System Notice: DB Link Offline</h3>
            <p className="text-gray-400 text-sm mb-2 font-light">
              Utilizing local memory cache. For persistent storage, establish Firebase uplink:
            </p>
            <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 ml-2 font-mono">
              <li>Init Firebase Project -> Enable Firestore & Auth.</li>
              <li>Create Collection: <code className="text-neon-cyan">projects</code>.</li>
              <li>Replace <code className="text-neon-cyan">services/mockFirebase.ts</code> with live SDK.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-4">
            <div className="bg-dark-800 p-6 border border-dark-700 sticky top-28 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-8 border-b border-dark-700 pb-4">
                <h2 className="font-display text-sm tracking-widest uppercase text-white flex items-center gap-2">
                  {isEditing ? <Edit2 size={16} className="text-neon-pink"/> : <Plus size={16} className="text-neon-cyan"/>}
                  {isEditing ? 'Modify Record' : 'Create Record'}
                </h2>
                {isEditing && (
                  <button onClick={cancelEdit} className="text-gray-500 hover:text-white transition-colors">
                    <X size={18} />
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-display text-[10px] font-bold text-neon-cyan uppercase tracking-[0.2em] mb-2">Title</label>
                  <input type="text" name="title" value={formData.title} onChange={handleInputChange} required
                    className="w-full px-4 py-2 bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-cyan transition-all font-mono text-sm" />
                </div>
                
                <div>
                  <label className="block font-display text-[10px] font-bold text-neon-cyan uppercase tracking-[0.2em] mb-2">Description</label>
                  <textarea name="description" value={formData.description} onChange={handleInputChange} required rows={3}
                    className="w-full px-4 py-2 bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-cyan transition-all font-mono text-sm resize-none" />
                </div>
                
                <div>
                  <label className="block font-display text-[10px] font-bold text-neon-cyan uppercase tracking-[0.2em] mb-2">Tech Stack (CSV)</label>
                  <input type="text" name="technologies" value={formData.technologies} onChange={handleInputChange} required placeholder="React, Node, Firebase"
                    className="w-full px-4 py-2 bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-cyan transition-all font-mono text-sm" />
                </div>

                <div>
                  <label className="block font-display text-[10px] font-bold text-neon-cyan uppercase tracking-[0.2em] mb-2">Image Source</label>
                  <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} placeholder="https://..."
                    className="w-full px-4 py-2 bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-cyan transition-all font-mono text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-display text-[10px] font-bold text-neon-cyan uppercase tracking-[0.2em] mb-2">Git Link</label>
                    <input type="text" name="githubLink" value={formData.githubLink} onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-cyan transition-all font-mono text-sm" />
                  </div>
                  <div>
                    <label className="block font-display text-[10px] font-bold text-neon-cyan uppercase tracking-[0.2em] mb-2">Video Link</label>
                    <input type="text" name="videoLink" value={formData.videoLink} onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-dark-900 border border-dark-700 text-white focus:outline-none focus:border-neon-cyan focus:shadow-glow-cyan transition-all font-mono text-sm" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 mt-6 bg-dark-900 border border-neon-cyan text-neon-cyan font-display text-xs tracking-widest uppercase font-bold hover:bg-neon-cyan hover:text-dark-900 flex items-center justify-center gap-2 transition-all hover:shadow-glow-cyan disabled:opacity-50"
                >
                  <Save size={16} />
                  {loading ? 'Processing...' : (isEditing ? 'Commit Changes' : 'Execute Creation')}
                </button>
              </form>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-8">
            <div className="bg-dark-800 border border-dark-700 h-full min-h-[500px]">
              <div className="p-6 border-b border-dark-700 bg-dark-900/50">
                <h2 className="font-display text-sm font-bold text-white tracking-widest uppercase">Database Entries</h2>
              </div>
              
              <div className="p-0">
                {loading && projects.length === 0 ? (
                  <div className="p-12 text-center text-neon-cyan font-mono animate-pulse">Querying database...</div>
                ) : projects.length === 0 ? (
                  <div className="p-12 text-center text-gray-500 font-mono">No records found in current node.</div>
                ) : (
                  <div className="divide-y divide-dark-700">
                    {projects.map((project) => (
                      <div key={project.id} className="p-6 hover:bg-dark-900/50 transition-colors flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between group">
                        <div className="flex gap-6 items-center flex-1 min-w-0">
                           <div className="w-20 h-20 shrink-0 border border-dark-700 group-hover:border-neon-purple transition-colors overflow-hidden relative">
                             <div className="absolute inset-0 bg-neon-purple/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
                             <img 
                                src={project.imageUrl || 'https://picsum.photos/100/100'} 
                                alt="" 
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                             />
                           </div>
                           <div className="min-w-0">
                             <h4 className="font-display font-bold text-white tracking-wider truncate text-lg mb-1">{project.title}</h4>
                             <p className="font-mono text-xs text-neon-cyan truncate">{project.technologies.join(' // ')}</p>
                           </div>
                        </div>
                        <div className="flex gap-3 shrink-0">
                          <button 
                            onClick={() => handleEdit(project)}
                            className="p-3 border border-dark-700 text-gray-400 hover:text-neon-pink hover:border-neon-pink hover:shadow-glow-pink transition-all bg-dark-900"
                            title="Edit Record"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(project.id)}
                            className="p-3 border border-dark-700 text-gray-400 hover:text-red-500 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all bg-dark-900"
                            title="Delete Record"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
