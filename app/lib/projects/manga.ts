import { Project } from '../../types/projects';

export const manga: Project = {
  id: 'manga',
  title: 'Manga Hosting Platform',
  description: 'Go-based manga hosting platform with Docker containerization. Features content delivery, user management, and chapter organization.',
  role: 'Backend Developer',
  technologies: ['Go', 'Docker', 'PostgreSQL', 'REST API', 'AWS S3'],
  githubUrl: 'https://github.com/nithish-95/manga',
  featured: true,
  category: 'backend',
  cloudDeployment: 'Docker',
  completionDate: '2024',
  projectType: 'personal',
  keyFeatures: [
    'High-performance image serving',
    'Chapter and volume organization',
    'User reading progress tracking',
    'Docker containerization',
    'Content delivery optimization'
  ],
  challenges: [
    'Optimizing image loading and caching',
    'Building efficient database schema for manga content',
    'Implementing reading progress sync'
  ],
  outcomes: [
    'Achieved fast page load times',
    'Built scalable architecture for content delivery',
    'Implemented efficient caching strategies'
  ],
  slug: 'manga'
};
