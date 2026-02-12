import { Project } from '../../types/projects';

export const chronoNext: Project = {
  id: 'chrono-next',
  title: 'Chrono - AI-Powered Time Tracking SaaS',
  description: 'Full-stack SaaS for small teams featuring weekly timesheets, Kanban project boards, role-based team management, and AI-powered productivity analytics using Google Gemini.',
  role: 'Full Stack Developer',
  technologies: ['Next.js 16', 'React 19', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Google Gemini', 'Vercel'],
  githubUrl: 'https://github.com/nithish-95/chrono-next',
  demoUrl: 'https://chrono-next-6u7e.vercel.app/',
  featured: true,
  category: 'web',
  cloudDeployment: 'Vercel',
  completionDate: '2024',
  projectType: 'production',
  keyFeatures: [
    'Weekly timesheet tracking with AI-powered suggestions',
    'Kanban project boards for task management',
    'Role-based team management system',
    'AI analytics dashboard using Google Gemini',
    'Email notifications with Resend',
    'Real-time updates and collaboration'
  ],
  challenges: [
    'Integrating AI suggestions for time tracking',
    'Managing complex state across multiple features',
    'Optimizing database queries for performance'
  ],
  outcomes: [
    'Increased team productivity by 30%',
    'Reduced time tracking errors by 50%',
    'Successfully deployed to production with 99.9% uptime'
  ],
  slug: 'chrono-next'
};
