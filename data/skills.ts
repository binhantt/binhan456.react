import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Ngôn Ngữ Lập Trình',
    skills: [
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'PHP' },
      { name: 'Go (Golang)' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React' },
      { name: 'Vue.js' },
      { name: 'HTML5 & CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Redux' },
      { name: 'Webpack' },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Laravel' },
      { name: 'Spring Boot' },
      { name: 'RESTful APIs' },
      { name: 'Sockets' },
    ],
  },
  {
    category: 'Cơ Sở Dữ Liệu',
    skills: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
    ],
  },
  {
    category: 'Công Cụ & Nền Tảng',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Docker' },
      { name: 'Jenkins' },
      { name: 'Postman' },
      { name: 'Jira' },
      { name: 'Linux' },
    ],
  },
];
