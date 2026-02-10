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

export const CONTACT_INFO = {
  PHONE: "0556798258",
  EMAIL: "rutisegal10@gmail.com",
  LINKEDIN: "https://www.linkedin.com/in/ruti-segal",
  GITHUB: "https://github.com/rutisegal"
};

// Default mock projects for initial load if DB is empty
export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj_1",
    title: "Two-Pass Assembler for Custom Architecture",
    description: "Bridging the gap between human-readable code and machine execution. A high-performance, two-pass assembler built from scratch in C, featuring custom memory management, complex instruction parsing, and binary generation for a unique CPU architecture\n\nKey Features\n• Core Logic: Implemented a full two-pass translation process (Symbol Table & Code Generation)\n• System Mastery: Direct memory management and bitwise operations in a Linux environment\n• Robustness: Advanced error handling and edge-case validation",
    technologies: ["C Programming", "System Programming", "Low-Level Linux", "Memory Management", "Data Structures", "Algorithms"],
    imageUrl: "https://picsum.photos/id/0/800/600",
    githubLink: "#",
    videoLink: "#",
    createdAt: Date.now()
  }
];

export const SKILLS_LIST = [
  { name: 'Java', color: 'cyan' },
  { name: 'C', color: 'purple' },
  { name: 'SQL', color: 'pink' },
  { name: 'Python', color: 'cyan' },
  { name: 'Docker', color: 'pink' }
];