import { Project } from '../types';
import { INITIAL_PROJECTS } from '../constants';

/**
 * MOCK FIREBASE SERVICE
 * 
 * Instructions for actual Firebase implementation:
 * 1. Go to Firebase Console -> Add Project.
 * 2. Enable Firestore Database. Create a collection named "projects".
 *    - Document structure should match the `Project` type in types.ts.
 * 3. Enable Authentication (Email/Password).
 * 4. Run `npm install firebase`.
 * 5. Replace this mock file with actual Firebase initialization:
 * 
 * import { initializeApp } from "firebase/app";
 * import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
 * import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
 * 
 * const firebaseConfig = { ...your config };
 * const app = initializeApp(firebaseConfig);
 * export const db = getFirestore(app);
 * export const auth = getAuth(app);
 */

const STORAGE_KEY = 'ruti_portfolio_projects';

// Initialize with default data if empty
const initializeDb = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
  }
};
initializeDb();

// Simulated delay to mimic network request
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const getProjects = async (): Promise<Project[]> => {
  await delay(500);
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data).sort((a: Project, b: Project) => b.createdAt - a.createdAt) : [];
};

export const addProject = async (projectData: Omit<Project, 'id' | 'createdAt'>): Promise<Project> => {
  await delay(600);
  const newProject: Project = {
    ...projectData,
    id: `proj_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: Date.now()
  };
  
  const current = await getProjects();
  const updated = [newProject, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newProject;
};

export const updateProject = async (id: string, updates: Partial<Project>): Promise<void> => {
  await delay(600);
  const current = await getProjects();
  const updated = current.map(p => p.id === id ? { ...p, ...updates } : p);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const deleteProject = async (id: string): Promise<void> => {
  await delay(500);
  const current = await getProjects();
  const updated = current.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
