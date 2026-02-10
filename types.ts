export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink: string;
  videoLink: string;
  createdAt: number;
}

export interface User {
  email: string;
  isAuthenticated: boolean;
}