import { Project } from '../../types/projects';

export const closApp: Project = {
  id: 'clos-app',
  title: 'Clos - AI-Powered Dating Application',
  description: 'Modern AI-powered dating application with intelligent matching, Supabase authentication, and privacy-focused design.',
  role: 'Full Stack Developer',
  technologies: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'Google GenAI', 'Tailwind CSS'],
  githubUrl: 'https://github.com/nithish-95/clos-app',
  featured: true,
  category: 'web',
  completionDate: '2026',
  projectType: 'production',
  keyFeatures: [
    'AI-powered matching and insights using Gemini',
    'Supabase authentication and session management',
    'Modern responsive UI with React 19',
    'User profile management system',
    'Privacy-focused design with ToS/Privacy modals',
    'Real-time updates and notifications',
    'Secure user data handling'
  ],
  challenges: [
    'Integrating AI for meaningful matching',
    'Implementing secure authentication flow',
    'Building responsive UI for all devices',
    'Ensuring user privacy and data protection'
  ],
  outcomes: [
    'Successfully implements AI-driven matching',
    'Responsive design works on all device sizes',
    'Secure authentication with Supabase',
    'Privacy-compliant with comprehensive ToS/Privacy policy'
  ],
  slug: 'clos-app'
};
