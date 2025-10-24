export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  date: string;
  imageUrl: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    status: 'Completed' | 'In Progress';
    link: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}