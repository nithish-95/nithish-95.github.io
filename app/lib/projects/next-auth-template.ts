import { Project } from '../../types/projects';

export const nextAuthTemplate: Project = {
  id: 'next-auth-template',
  title: 'Next.js Authentication Template',
  description: 'Production-ready Next.js authentication template with multiple auth providers, JWT handling, and role-based access control.',
  role: 'Full Stack Developer',
  technologies: ['Next.js', 'NextAuth.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
  githubUrl: 'https://github.com/nithish-95/next-auth-template',
  featured: false,
  category: 'web',
  completionDate: '2024',
  projectType: 'open-source',
  keyFeatures: [
    'Multiple OAuth providers (Google, GitHub, etc.)',
    'JWT token handling',
    'Role-based access control',
    'Email/password authentication',
    'Password reset flow',
    'Protected routes middleware'
  ],
  challenges: [
    'Implementing secure JWT handling',
    'Managing multiple OAuth providers',
    'Building role-based middleware'
  ],
  outcomes: [
    'Ready-to-use authentication template',
    'Used by 50+ developers',
    'Comprehensive documentation'
  ],
  slug: 'next-auth-template'
};
