import { Project } from '../types';

// MOCK FIREBASE COMPLETELY DISABLED FOR STATIC DEPLOYMENT
// Properly typed to prevent strict TypeScript compiler errors on Vercel

export const getProjects = async (): Promise<Project[]> => [];
export const addProject = async (project: Omit<Project, 'id' | 'createdAt'>): Promise<Project | null> => null;
export const updateProject = async (id: string, project: Partial<Project>): Promise<void> => {};
export const deleteProject = async (id: string): Promise<void> => {};