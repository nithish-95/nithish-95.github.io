import { Project } from '../../types/projects';

export const microSaasTemplate: Project = {
  id: 'micro-saas-template',
  title: 'Micro SaaS Template - Full-Stack Starter',
  description: 'Production-ready full-stack micro-SaaS template with Next.js frontend, Go (Chi) backend, Supabase authentication, and Docker containerization.',
  role: 'Full Stack Developer',
  technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Go', 'Chi', 'Supabase', 'Docker', 'Tailwind CSS'],
  githubUrl: 'https://github.com/nithish-95/Micro-saas-template',
  featured: false,
  category: 'web',
  completionDate: '2025',
  projectType: 'open-source',
  keyFeatures: [
    'Complete SaaS starter template',
    'JWT-based authentication via Supabase',
    'Go (Chi) RESTful API backend',
    'Next.js 16 with React 19 frontend',
    'Docker containerization for development',
    'Vercel + Render deployment configuration',
    'Modern UI with Tailwind CSS v4'
  ],
  challenges: [
    'Integrating Go backend with Next.js frontend',
    'Setting up JWT authentication flow',
    'Configuring Docker for development environment',
    'Preparing deployment configurations for multiple platforms'
  ],
  outcomes: [
    'Ready-to-use SaaS foundation for rapid development',
    'Reduces initial project setup time by 80%',
    'Clean separation between frontend and backend',
    'Production-ready authentication and authorization'
  ],
  slug: 'micro-saas-template'
};
