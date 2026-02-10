// MOCK FIREBASE COMPLETELY DISABLED FOR STATIC DEPLOYMENT
// Removed localStorage to prevent SSR crashes on Vercel

export const getProjects = async () => [];
export const addProject = async () => null as any;
export const updateProject = async () => {};
export const deleteProject = async () => {};
